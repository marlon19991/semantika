#!/bin/bash
# Semantika - Script de Inicio Automatizado
# Inicia todos los servicios y configura el sistema completo

set -e  # Salir si algún comando falla

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funciones de logging
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Función para verificar si un comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Función para esperar que un servicio esté listo
wait_for_service() {
    local service_name=$1
    local url=$2
    local max_attempts=${3:-30}
    local attempt=1
    
    log_info "Esperando que $service_name esté listo..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s "$url" >/dev/null 2>&1; then
            log_success "$service_name está listo!"
            return 0
        fi
        
        echo -n "."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    log_error "$service_name no respondió después de $max_attempts intentos"
    return 1
}

# Función principal
main() {
    log_info "🚀 Iniciando Semantika RAG Design-System Assistant"
    
    # Verificar dependencias
    log_info "🔍 Verificando dependencias..."
    
    if ! command_exists docker; then
        log_error "Docker no está instalado. Por favor instala Docker primero."
        exit 1
    fi
    
    if ! command_exists docker-compose; then
        log_error "Docker Compose no está instalado. Por favor instala Docker Compose primero."
        exit 1
    fi
    
    if ! command_exists python3; then
        log_error "Python 3 no está instalado. Por favor instala Python 3 primero."
        exit 1
    fi
    
    log_success "Todas las dependencias están disponibles"
    
    # Navegar al directorio raíz del proyecto
    PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
    cd "$PROJECT_ROOT"
    
    log_info "📂 Directorio del proyecto: $PROJECT_ROOT"
    
    # Crear archivo .env si no existe
    if [ ! -f "services/llm-service/.env" ]; then
        log_info "📝 Creando archivo .env para LLM service..."
        cat > "services/llm-service/.env" << EOF
# Configuración de Base de Datos
PGHOST=localhost
PGPORT=5432
PGDATABASE=semantikadb
PGUSER=semantika
PGPASSWORD=semantika

# Configuración de OpenAI
OPENAI_API_KEY=your_openai_api_key_here

# Configuración del Servicio
LOG_LEVEL=INFO
ENVIRONMENT=development
EOF
        log_warning "⚠️ Recuerda configurar tu OPENAI_API_KEY en services/llm-service/.env"
    fi
    
    # Iniciar servicios de infraestructura
    log_info "🐳 Iniciando servicios de infraestructura..."
    cd infra
    docker-compose up -d
    cd ..
    
    # Esperar que PostgreSQL esté listo
    log_info "Verificando conexión a PostgreSQL..."
    if ! timeout 30 bash -c 'until pg_isready -h localhost -p 5432 -U semantika; do sleep 1; done' 2>/dev/null; then
        # Fallback: intentar conectar directamente
        if ! python3 -c "import psycopg; psycopg.connect('host=localhost port=5432 dbname=semantikadb user=semantika password=semantika')" 2>/dev/null; then
            log_warning "⚠️ PostgreSQL puede no estar completamente listo, pero continuando..."
        fi
    fi
    log_success "PostgreSQL está disponible"
    
    # Configurar entorno Python para LLM service
    log_info "🐍 Configurando entorno Python..."
    cd services/llm-service
    
    if [ ! -d ".venv" ]; then
        log_info "Creando entorno virtual de Python..."
        python3 -m venv .venv
    fi
    
    log_info "Activando entorno virtual..."
    source .venv/bin/activate
    
    log_info "Verificando dependencias Python..."
    if ! python3 -c "import fastapi, uvicorn, openai, psycopg" 2>/dev/null; then
        log_info "Instalando dependencias Python..."
        pip install -q --upgrade pip
        pip install -q -r requirements.txt
    else
        log_success "Las dependencias ya están instaladas"
    fi
    
    cd ../..
    
    # Verificar variables de entorno críticas
    if [ -z "$OPENAI_API_KEY" ] && ! grep -q "sk-" services/llm-service/.env 2>/dev/null; then
        log_warning "⚠️ OPENAI_API_KEY no está configurada. El sistema funcionará con limitaciones."
        log_warning "   Configura tu API key en services/llm-service/.env para funcionalidad completa."
    fi
    
    # Inicializar datos (si la tabla está vacía)
    log_info "📊 Verificando datos de componentes..."
    cd scripts
    # Usar el entorno virtual para verificar datos
    source ../services/llm-service/.venv/bin/activate
    if python3 -c "
import psycopg
try:
    with psycopg.connect('host=localhost port=5432 dbname=semantikadb user=semantika password=semantika') as conn:
        with conn.cursor() as cur:
            cur.execute('SELECT COUNT(*) FROM components;')
            count = cur.fetchone()[0]
            if count == 0:
                exit(1)  # Tabla vacía
except:
    exit(1)  # Error de conexión
" 2>/dev/null; then
        log_success "Los datos ya están inicializados"
    else
        log_info "Inicializando datos de componentes..."
        if [ -n "$OPENAI_API_KEY" ] || grep -q "sk-" ../services/llm-service/.env 2>/dev/null; then
            python3 update_embeddings.py
        else
            log_warning "Saltando generación de embeddings (API key no configurada)"
        fi
    fi
    cd ..
    
    # Iniciar LLM Service
    log_info "🧠 Iniciando LLM Service..."
    cd services/llm-service
    source .venv/bin/activate
    
    # Iniciar en background
    nohup uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload > ../../semantika-llm.log 2>&1 &
    LLM_PID=$!
    echo $LLM_PID > ../../semantika-llm.pid
    
    cd ../..
    
    # Esperar que LLM Service esté listo
    if ! wait_for_service "LLM Service" "http://localhost:8000/health" 20; then
        log_error "LLM Service no se inició correctamente"
        exit 1
    fi
    
    # Mostrar información del sistema
    log_success "🎉 ¡Semantika está ejecutándose!"
    echo ""
    echo "📋 Información del Sistema:"
    echo "   🌐 Frontend:          file://$(pwd)/frontend/ui/index.html"
    echo "   🧠 LLM Service:       http://localhost:8000"
    echo "   📚 API Docs:          http://localhost:8000/docs"
    echo "   🗄️  Database Admin:    http://localhost:8080"
    echo "   📊 Health Check:      http://localhost:8000/health"
    echo ""
    echo "📝 Logs:"
    echo "   LLM Service: tail -f semantika-llm.log"
    echo "   Docker:      docker-compose -f infra/docker-compose.yml logs -f"
    echo ""
    echo "🛑 Para detener:"
    echo "   ./scripts/stop.sh"
    echo ""
    
    # Abrir navegador si está disponible
    if command_exists open; then
        # macOS
        log_info "🌐 Abriendo frontend en el navegador..."
        open "file://$(pwd)/frontend/ui/index.html"
    elif command_exists xdg-open; then
        # Linux
        log_info "🌐 Abriendo frontend en el navegador..."
        xdg-open "file://$(pwd)/frontend/ui/index.html"
    fi
    
    log_success "✅ Inicio completado exitosamente"
    log_info "💡 El sistema seguirá corriendo en segundo plano"
    log_info "🛑 Para detener todos los servicios ejecuta: ./scripts/stop.sh"
}

# Manejo de señales para limpieza
cleanup() {
    log_info "🧹 Limpiando procesos en caso de error..."
    if [ -f "semantika-llm.pid" ]; then
        kill "$(cat semantika-llm.pid)" 2>/dev/null || true
        rm -f semantika-llm.pid
    fi
}

# Solo limpiar en caso de error, no al finalizar exitosamente
trap cleanup ERR

# Ejecutar función principal
main "$@" 