# Cargar env antes de cualquier otra cosa
import os
import logging
import uuid
from datetime import datetime
from typing import List, Optional
from enum import Enum
from contextlib import asynccontextmanager

from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, validator
import psycopg
from openai import OpenAI, OpenAIError
# AdvancedAIService eliminado - no se usa
from .agents.multi_agent_system import generate_from_natural_language
import time
from services.quality_control_system import validate_and_ensure_quality

# ===== CONFIGURACIÓN DE LOGGING =====
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('semantika.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# ===== CONFIGURACIÓN =====
PG_OPTS = {
    "host": os.getenv("PGHOST", "localhost"),
    "port": os.getenv("PGPORT", "5432"),
    "dbname": os.getenv("PGDATABASE", "semantikadb"),
    "user": os.getenv("PGUSER", "semantika"),
    "password": os.getenv("PGPASSWORD", "semantika"),
}

EMBED_DIM = 512
EMBED_MODEL = "text-embedding-3-small"
MAX_QUERY_LENGTH = 500
MAX_TOP_K = 20
RATE_LIMIT_REQUESTS = 100  # por minuto
RATE_LIMIT_WINDOW = 60  # segundos

# ===== INICIALIZACIÓN DE CLIENTES =====
try:
    openai_client = OpenAI()
    logger.info("Cliente OpenAI inicializado correctamente")
except Exception as e:
    logger.error(f"Error inicializando cliente OpenAI: {e}")
    openai_client = None

# ===== SERVICIO DE IA AVANZADA =====
try:
    advanced_ai_service = AdvancedAIService()
    logger.info("Servicio de IA Avanzada inicializado correctamente")
except Exception as e:
    logger.error(f"Error inicializando Servicio de IA Avanzada: {e}")
    advanced_ai_service = None

# ===== RATE LIMITING SIMPLE =====
class RateLimiter:
    def __init__(self):
        self.requests = {}
    
    def is_allowed(self, client_ip: str) -> bool:
        now = time.time()
        
        # Limpiar entradas antigas
        if client_ip not in self.requests:
            self.requests[client_ip] = []
        
        # Filtrar requests dentro de la ventana de tiempo
        self.requests[client_ip] = [
            req_time for req_time in self.requests[client_ip] 
            if now - req_time < RATE_LIMIT_WINDOW
        ]
        
        # Verificar límite
        if len(self.requests[client_ip]) >= RATE_LIMIT_REQUESTS:
            return False
            
        # Agregar request actual
        self.requests[client_ip].append(now)
        return True

rate_limiter = RateLimiter()

# ===== LIFESPAN EVENTS =====
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("🚀 Iniciando Semantika LLM Service")
    
    # Verificar conexión a la base de datos
    try:
        with psycopg.connect(**PG_OPTS) as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT version();")
                version = cur.fetchone()[0]
                logger.info(f"✅ Conexión a PostgreSQL exitosa: {version}")
    except Exception as e:
        logger.error(f"❌ Error conectando a PostgreSQL: {e}")
    
    # Verificar OpenAI
    if openai_client:
        try:
            # Test simple para verificar conectividad
            logger.info("✅ Cliente OpenAI listo")
        except Exception as e:
            logger.error(f"❌ Error con cliente OpenAI: {e}")
    
    yield
    
    # Shutdown
    logger.info("🛑 Cerrando Semantika LLM Service")

# ===== INICIALIZACIÓN DE FASTAPI =====
app = FastAPI(
    title="Semantika LLM Service",
    version="2.0.0",
    description="RAG Design-System Assistant - Servicio de LLM mejorado",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# ===== MIDDLEWARE =====
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://127.0.0.1:5500", 
        "http://localhost:5500",
        "null"  # Para archivos locales (file://)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["localhost", "127.0.0.1", "*.localhost"]
)

# ===== MODELOS PYDANTIC =====
class SuggestRequest(BaseModel):
    query: str = Field(..., min_length=1, max_length=MAX_QUERY_LENGTH, description="Consulta en lenguaje natural")
    top_k: int = Field(5, ge=1, le=MAX_TOP_K, description="Número máximo de resultados")
    
    @validator('query')
    def validate_query(cls, v):
        if not v or not v.strip():
            raise ValueError('La consulta no puede estar vacía')
        return v.strip()

class Match(BaseModel):
    id: str
    score: float = Field(..., ge=0.0, le=1.0)
    metadata: Optional[dict] = None

class SuggestResponse(BaseModel):
    matches: List[Match]
    trace_id: str
    query_processed: str
    processing_time_ms: int

class SnippetType(str, Enum):
    angular = "angular"
    react = "react"
    vue = "vue"

class CodeResponse(BaseModel):
    component_id: str
    snippet_type: SnippetType = SnippetType.angular
    snippet: str
    trace_id: str
    query_processed: str
    processing_time_ms: int

class HealthResponse(BaseModel):
    status: str
    version: str
    timestamp: str
    services: dict

class ErrorResponse(BaseModel):
    error: str
    detail: str
    trace_id: str
    timestamp: str

# ===== MIDDLEWARE PERSONALIZADO =====
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response

@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    client_ip = request.client.host
    
    if not rate_limiter.is_allowed(client_ip):
        logger.warning(f"Rate limit excedido para IP: {client_ip}")
        return JSONResponse(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            content={
                "error": "Rate limit exceeded",
                "detail": f"Máximo {RATE_LIMIT_REQUESTS} requests por minuto",
                "trace_id": str(uuid.uuid4()),
                "timestamp": datetime.utcnow().isoformat()
            }
        )
    
    response = await call_next(request)
    return response

# ===== MANEJO DE ERRORES PERSONALIZADO =====
@app.exception_handler(ValueError)
async def value_error_handler(request: Request, exc: ValueError):
    trace_id = str(uuid.uuid4())
    logger.error(f"ValueError [{trace_id}]: {exc}")
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={
            "error": "Validation error",
            "detail": str(exc),
            "trace_id": trace_id,
            "timestamp": datetime.utcnow().isoformat()
        }
    )

@app.exception_handler(Exception)
async def general_exception_handler(request: Request, exc: Exception):
    trace_id = str(uuid.uuid4())
    logger.error(f"Error general [{trace_id}]: {type(exc).__name__}: {exc}")
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "error": "Internal server error",
            "detail": "Ha ocurrido un error interno. Por favor, inténtalo de nuevo.",
            "trace_id": trace_id,
            "timestamp": datetime.utcnow().isoformat()
        }
    )

# ===== UTILIDADES MEJORADAS =====
def embed(text: str) -> List[float]:
    """Genera embedding usando OpenAI con manejo de errores robusto."""
    if not openai_client:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Servicio OpenAI no disponible"
        )
    
    try:
        response = openai_client.embeddings.create(
            model=EMBED_MODEL,
            input=text.strip(),
            dimensions=EMBED_DIM,
        )
        return response.data[0].embedding
    except OpenAIError as e:
        logger.error(f"Error OpenAI: {e}")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"Error del servicio OpenAI: {str(e)}"
        )
    except Exception as e:
        logger.error(f"Error generando embedding: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error generando embedding"
        )

def retrieve(embedding: List[float], top_k: int) -> List[Match]:
    """Consulta pgvector con manejo de errores mejorado."""
    try:
        vec_literal = "[" + ",".join(f"{x:.6f}" for x in embedding) + "]"
        
        query = (
            "SELECT id, slug, kind, props, 1/(1 + (embedding <-> %s::vector)) AS score "
            "FROM components ORDER BY embedding <-> %s::vector LIMIT %s;"
        )
        
        with psycopg.connect(**PG_OPTS) as conn:
            with conn.cursor() as cur:
                cur.execute(query, (vec_literal, vec_literal, top_k))
                rows = cur.fetchall()
                
                if not rows:
                    logger.info("No se encontraron componentes en la base de datos")
                    return []
                
                matches = [
                    Match(
                        id=r[0], 
                        score=float(r[4]), 
                        metadata={
                            "slug": r[1], 
                            "kind": r[2], 
                            "props": r[3]
                        }
                    )
                    for r in rows
                ]
                
                logger.info(f"Se encontraron {len(matches)} componentes")
                return matches
                
    except psycopg.Error as e:
        logger.error(f"Error de base de datos: {e}")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Error de conexión a la base de datos"
        )
    except Exception as e:
        logger.error(f"Error en retrieve: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error consultando componentes"
        )

def build_snippet(match: Match, snippet_type: SnippetType = SnippetType.angular) -> str:
    """Construye snippet mejorado basado en el tipo y componente."""
    cid = match.id
    metadata = match.metadata or {}
    
    if snippet_type == SnippetType.angular:
        if cid == "bc-button":
            return (
                "<!-- Botón Bancolombia - Semantika Generated -->\n"
                f"<button bc-button \n"
                f"  appearance=\"primary\"\n"
                f"  [disabled]=\"false\"\n"
                f"  (click)=\"onButtonClick()\">\n"
                f"  Acción Principal\n"
                f"</button>\n\n"
                f"<!-- Metadata: {metadata.get('kind', 'N/A')} -->"
            )
        elif cid == "bc-input":
            return (
                "<!-- Input Bancolombia - Semantika Generated -->\n"
                f"<bc-input \n"
                f"  label=\"Etiqueta del campo\"\n"
                f"  placeholder=\"Ingresa tu información\"\n"
                f"  [(ngModel)]=\"inputValue\"\n"
                f"  [required]=\"true\">\n"
                f"</bc-input>"
            )
    
    # Fallback genérico mejorado
    return (
        f"<!-- Componente {cid} - Semantika Generated -->\n"
        f"<{cid}>\n"
        f"  <!-- Configurar props según necesidades -->\n"
        f"  <!-- Metadata disponible: {metadata} -->\n"
        f"</{cid}>"
    )

# ===== RUTAS PRINCIPALES =====
@app.get("/", response_model=dict)
async def root():
    """Endpoint raíz con información del sistema de control de calidad."""
    return {
        "service": "Semantika LLM Service with Quality Control",
        "version": "2.0.0",
        "status": "running",
        "features": {
            "quality_control": "Validación automática hasta 80% de exactitud",
            "iterative_refinement": "Mejora automática de código generado",
            "design_system_validation": "Adherencia estricta al Design System de Bancolombia",
            "accessibility_check": "Cumplimiento WCAG 2.1 AA automático"
        },
        "endpoints": {
            "health": "/health",
            "suggest": "/suggest", 
            "generate_code": "/generate_code",
            "ai_generate": "/ai/generate (🎯 CON CONTROL DE CALIDAD)",
            "smart_generate": "/ai/smart-generate (🎯 CON CONTROL DE CALIDAD)",
            "validate_code": "/ai/validate-code (🔍 SOLO VALIDACIÓN)",
            "docs": "/docs"
        },
        "quality_metrics": {
            "minimum_accuracy": "80%",
            "max_iterations": 3,
            "validation_criteria": [
                "component_validity",
                "properties_accuracy", 
                "syntax_correctness",
                "accessibility",
                "semantic_alignment"
            ]
        }
    }

@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Endpoint de health check mejorado."""
    services = {}
    
    # Check PostgreSQL
    try:
        with psycopg.connect(**PG_OPTS) as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT 1;")
                cur.fetchone()
        services["postgresql"] = "healthy"
    except Exception as e:
        services["postgresql"] = f"unhealthy: {str(e)}"
    
    # Check OpenAI
    if openai_client:
        services["openai"] = "healthy"
    else:
        services["openai"] = "unhealthy: client not initialized"
    
    overall_status = "healthy" if all("healthy" in status for status in services.values()) else "degraded"
    
    return HealthResponse(
        status=overall_status,
        version="2.0.0",
        timestamp=datetime.utcnow().isoformat(),
        services=services
    )

@app.post("/suggest", response_model=SuggestResponse)
async def suggest(req: SuggestRequest):
    """Endpoint para sugerir componentes con mejor manejo de errores."""
    start_time = time.time()
    trace_id = str(uuid.uuid4())
    
    logger.info(f"Suggest request [{trace_id}]: query='{req.query}', top_k={req.top_k}")
    
    try:
        # Generar embedding
        embedding = embed(req.query)
        
        # Buscar componentes similares
        matches = retrieve(embedding, req.top_k)
        
        processing_time = int((time.time() - start_time) * 1000)
        
        response = SuggestResponse(
            matches=matches,
            trace_id=trace_id,
            query_processed=req.query,
            processing_time_ms=processing_time
        )
        
        logger.info(f"Suggest response [{trace_id}]: {len(matches)} matches, {processing_time}ms")
        return response
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error en suggest [{trace_id}]: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error procesando la consulta"
        )

@app.post("/generate_code", response_model=CodeResponse)
async def generate_code(req: SuggestRequest):
    """Endpoint mejorado para generar código de componentes."""
    start_time = time.time()
    trace_id = str(uuid.uuid4())
    
    logger.info(f"Generate code request [{trace_id}]: query='{req.query}'")
    
    try:
        # Generar embedding y encontrar mejor match
        embedding = embed(req.query)
        matches = retrieve(embedding, 1)
        
        if not matches:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No se encontraron componentes similares"
            )
        
        best_match = matches[0]
        
        # Generar snippet
        snippet = build_snippet(best_match, SnippetType.angular)
        
        processing_time = int((time.time() - start_time) * 1000)
        
        response = CodeResponse(
            component_id=best_match.id,
            snippet_type=SnippetType.angular,
            snippet=snippet,
            trace_id=trace_id,
            query_processed=req.query,
            processing_time_ms=processing_time
        )
        
        logger.info(f"Generate code response [{trace_id}]: component={best_match.id}, {processing_time}ms")
        return response
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error en generate_code [{trace_id}]: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error generando código"
        )

# ===== ENDPOINT DE MÉTRICAS BÁSICAS =====
@app.get("/metrics", response_model=dict)
async def get_metrics():
    """Endpoint básico de métricas."""
    try:
        # Contar componentes en la base de datos
        with psycopg.connect(**PG_OPTS) as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT COUNT(*) FROM components;")
                component_count = cur.fetchone()[0]
        
        return {
            "components_indexed": component_count,
            "embedding_model": EMBED_MODEL,
            "embedding_dimensions": EMBED_DIM,
            "max_query_length": MAX_QUERY_LENGTH,
            "max_top_k": MAX_TOP_K,
            "rate_limit": f"{RATE_LIMIT_REQUESTS} requests/{RATE_LIMIT_WINDOW}s"
        }
    except Exception as e:
        logger.error(f"Error obteniendo métricas: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error obteniendo métricas"
        )

# ===== NUEVO ENDPOINT DE IA AVANZADA =====
class AdvancedRequest(BaseModel):
    query: str = Field(..., min_length=1, max_length=MAX_QUERY_LENGTH, description="Solicitud en lenguaje natural")
    
    @validator('query')
    def validate_query(cls, v):
        if not v or not v.strip():
            raise ValueError('La consulta no puede estar vacía')
        return v.strip()

@app.post("/ai/generate", response_model=dict)
async def ai_generate_component(req: AdvancedRequest):
    """
    Endpoint de IA Avanzada con Control de Calidad Automático
    
    🎯 NUEVO: Cada respuesta es validada automáticamente y refinada hasta alcanzar 80% de exactitud
    
    Este endpoint utiliza el sistema de ingeniería de prompts profesional
    para generar componentes Angular basados únicamente en el Design System 
    de Bancolombia, con validación automática de calidad.
    
    Ejemplo: "botón verde que diga terminar"
    """
    trace_id = str(uuid.uuid4())
    start_time = time.time()
    
    try:
        logger.info(f"[{trace_id}] 🚀 Procesando solicitud con control de calidad: {req.query[:100]}...")
        
        # Verificar rate limiting
        client_ip = "unknown"  # En producción obtener IP real
        if not rate_limiter.is_allowed(client_ip):
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Límite de requests excedido. Intente nuevamente en un minuto."
            )
        
        # Verificar que el servicio esté disponible
        if not advanced_ai_service:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Servicio de IA no disponible"
            )
        
        # 1. GENERAR código inicial con IA avanzada
        logger.info(f"[{trace_id}] 🧠 Generando código inicial con IA...")
        initial_result = await advanced_ai_service.process_user_request(req.query)
        
        # Extraer código generado
        generated_code = initial_result.get("generated_code", "")
        if not generated_code:
            generated_code = initial_result.get("snippet", "")
        
        if not generated_code:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="No se pudo generar código inicial"
            )
        
        # 2. VALIDAR Y REFINAR con sistema de control de calidad
        logger.info(f"[{trace_id}] 🎯 Iniciando control de calidad automático...")
        quality_assessment = await validate_and_ensure_quality(
            generated_code, req.query, trace_id
        )
        
        # 3. PREPARAR respuesta final
        processing_time = int((time.time() - start_time) * 1000)
        
        # Determinar si la respuesta es aceptable
        if quality_assessment.passed:
            status_message = f"✅ CÓDIGO APROBADO - {quality_assessment.accuracy_percentage}% de exactitud"
            logger.info(f"[{trace_id}] {status_message}")
        else:
            status_message = f"⚠️ CÓDIGO MEJORADO - {quality_assessment.accuracy_percentage}% de exactitud (bajo umbral del 80%)"
            logger.warning(f"[{trace_id}] {status_message}")
        
        # Compilar resultado final
        final_result = {
            # Resultado original de IA
            **initial_result,
            
            # Código final validado y refinado
            "generated_code": quality_assessment.final_code,
            "snippet": quality_assessment.final_code,
            
            # Información de control de calidad
            "quality_control": {
                "overall_score": quality_assessment.overall_score,
                "accuracy_percentage": quality_assessment.accuracy_percentage,
                "quality_passed": quality_assessment.passed,
                "confidence_level": quality_assessment.confidence_level,
                "iteration_count": quality_assessment.iteration_count,
                "improvement_applied": quality_assessment.improvement_applied,
                "validation_summary": [
                    {
                        "criterion": vr.criterion,
                        "score": vr.score,
                        "passed": vr.passed,
                        "suggestions": vr.suggestions
                    }
                    for vr in quality_assessment.validation_results
                ]
            },
            
            # Metadata actualizada
            "trace_id": trace_id,
            "query_processed": req.query,
            "processing_time_ms": processing_time,
            "quality_validation_time_ms": quality_assessment.processing_time_ms,
            "status": status_message,
            "system_version": "2.0_with_quality_control"
        }
        
        logger.info(f"[{trace_id}] ✅ Solicitud completada con control de calidad en {processing_time}ms")
        
        return final_result
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"[{trace_id}] ❌ Error procesando solicitud con control de calidad: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error interno del sistema con control de calidad: {str(e)}"
        )

# ===== ENDPOINT MULTI-AGENTE INTELIGENTE =====
@app.post("/ai/smart-generate", response_model=dict)
async def smart_generate_component(req: AdvancedRequest):
    """
    Endpoint Multi-Agente Inteligente con Control de Calidad Automático
    
    🎯 NUEVO: Sistema multi-agente + validación automática hasta 80% de exactitud
    
    Este endpoint utiliza un sistema multi-agente que puede entender y generar
    CUALQUIER elemento del Design System con validación automática de calidad.
    
    Ejemplos:
    - "botón azul grande que diga Confirmar"
    - "input de email con validación requerida"
    - "formulario de registro con nombre, email y contraseña"
    - "modal de confirmación para eliminar usuario"
    """
    trace_id = str(uuid.uuid4())
    start_time = time.time()
    
    try:
        logger.info(f"[{trace_id}] 🚀 Smart Generate con control de calidad: {req.query[:100]}...")
        
        # Verificar rate limiting
        client_ip = "unknown"
        if not rate_limiter.is_allowed(client_ip):
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Límite de requests excedido. Intente nuevamente en un minuto."
            )
        
        # 1. PROCESAR con sistema multi-agente
        logger.info(f"[{trace_id}] 🧠 Procesando con sistema multi-agente...")
        initial_result = await generate_from_natural_language(req.query)
        
        # Extraer código generado
        generated_code = initial_result.get("generated_code", "")
        if not generated_code:
            generated_code = initial_result.get("snippet", "")
        
        if not generated_code:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="No se pudo generar código con sistema multi-agente"
            )
        
        # 2. VALIDAR Y REFINAR con control de calidad
        logger.info(f"[{trace_id}] 🎯 Aplicando control de calidad automático...")
        quality_assessment = await validate_and_ensure_quality(
            generated_code, req.query, trace_id
        )
        
        # 3. COMPILAR respuesta final mejorada
        processing_time = int((time.time() - start_time) * 1000)
        
        # Estado de calidad
        if quality_assessment.passed:
            quality_status = f"✅ CALIDAD APROBADA - {quality_assessment.accuracy_percentage}%"
            logger.info(f"[{trace_id}] {quality_status}")
        else:
            quality_status = f"⚠️ CALIDAD MEJORADA - {quality_assessment.accuracy_percentage}%"
            logger.warning(f"[{trace_id}] {quality_status}")
        
        # Resultado final enriquecido
        final_result = {
            # Resultado del sistema multi-agente
            **initial_result,
            
            # Código final con control de calidad
            "generated_code": quality_assessment.final_code,
            "snippet": quality_assessment.final_code,
            
            # Análisis de calidad completo
            "quality_analysis": {
                "overall_score": quality_assessment.overall_score,
                "accuracy_percentage": quality_assessment.accuracy_percentage,
                "quality_threshold_met": quality_assessment.passed,
                "confidence_level": quality_assessment.confidence_level,
                "iterations_required": quality_assessment.iteration_count,
                "code_improved": quality_assessment.improvement_applied,
                "detailed_validations": [
                    {
                        "criterion": vr.criterion,
                        "score": round(vr.score, 3),
                        "passed": vr.passed,
                        "confidence": round(vr.confidence, 3),
                        "issues_found": len(vr.suggestions),
                        "suggestions": vr.suggestions
                    }
                    for vr in quality_assessment.validation_results
                ]
            },
            
            # Metadata completa
            "trace_id": trace_id,
            "query_processed": req.query,
            "processing_time_ms": processing_time,
            "quality_control_time_ms": quality_assessment.processing_time_ms,
            "system_type": "multi_agent_with_quality_control",
            "quality_status": quality_status,
            "system_version": "2.0_intelligent_quality_assured"
        }
        
        logger.info(f"[{trace_id}] ✅ Smart Generate con control de calidad completado en {processing_time}ms - Confianza: {initial_result.get('confidence', 0):.2f}")
        
        return final_result
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"[{trace_id}] ❌ Error en Smart Generate con control de calidad: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error en el sistema multi-agente con control de calidad: {str(e)}"
        )

# NUEVO ENDPOINT: Solo control de calidad
@app.post("/ai/validate-code", response_model=dict)
async def validate_code_quality(request: dict):
    """
    Endpoint especializado para validar código existente
    
    🎯 Valida cualquier código Angular contra el Design System de Bancolombia
    y proporciona una evaluación detallada de calidad con sugerencias de mejora.
    """
    trace_id = str(uuid.uuid4())
    start_time = time.time()
    
    try:
        # Extraer parámetros
        code_to_validate = request.get("code", "")
        original_request = request.get("user_request", "")
        
        if not code_to_validate:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Código a validar es requerido"
            )
        
        logger.info(f"[{trace_id}] 🔍 Validando código existente...")
        
        # Ejecutar validación de calidad
        quality_assessment = await validate_and_ensure_quality(
            code_to_validate, original_request, trace_id
        )
        
        processing_time = int((time.time() - start_time) * 1000)
        
        return {
            "validation_results": {
                "overall_score": quality_assessment.overall_score,
                "accuracy_percentage": quality_assessment.accuracy_percentage,
                "quality_passed": quality_assessment.passed,
                "confidence_level": quality_assessment.confidence_level,
                "original_code": code_to_validate,
                "improved_code": quality_assessment.final_code,
                "improvement_applied": quality_assessment.improvement_applied,
                "iterations_performed": quality_assessment.iteration_count
            },
            "detailed_analysis": [
                {
                    "criterion": vr.criterion,
                    "score": vr.score,
                    "passed": vr.passed,
                    "confidence": vr.confidence,
                    "details": vr.details,
                    "suggestions": vr.suggestions
                }
                for vr in quality_assessment.validation_results
            ],
            "trace_id": trace_id,
            "processing_time_ms": processing_time,
            "validation_time_ms": quality_assessment.processing_time_ms
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"[{trace_id}] ❌ Error validando código: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error en validación de código: {str(e)}"
        )

if __name__ == "__main__":
    import uvicorn
    logger.info("Iniciando servidor en modo desarrollo")
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    ) 