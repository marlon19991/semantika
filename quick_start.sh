#!/bin/bash

# Semantika - Inicio Rápido y Automático
# Versión: 2.0.0

set -e  # Salir si hay errores

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funciones de logging
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Banner
echo "
╔══════════════════════════════════════════════════════════════╗
║                     🧠 SEMANTIKA v2.0                        ║  
║              RAG Design-System Assistant                     ║
║                   Inicio Automático                          ║
╚══════════════════════════════════════════════════════════════╝
"

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

log_info "📂 Directorio del proyecto: $PROJECT_DIR"

# 1. Verificar dependencias
log_info "🔍 Verificando dependencias..."

if ! command -v docker &> /dev/null; then
    log_error "Docker no está instalado o no está en PATH"
    exit 1
fi

if ! command -v python3 &> /dev/null; then
    log_error "Python3 no está instalado"
    exit 1
fi

log_success "✅ Dependencias verificadas"

# 2. Verificar/Iniciar servicios Docker
log_info "🐳 Verificando servicios Docker..."

if ! docker ps --format "{{.Names}}" | grep -q "semantika-postgres"; then
    log_info "Iniciando servicios Docker..."
    cd infra
    docker-compose up -d
    cd ..
    log_info "⏳ Esperando que los servicios estén listos..."
    sleep 10
else
    log_success "✅ Servicios Docker ya están corriendo"
fi

# Verificar que PostgreSQL esté listo
log_info "🔍 Verificando PostgreSQL..."
for i in {1..10}; do
    if docker exec semantika-postgres pg_isready -U semantika > /dev/null 2>&1; then
        log_success "✅ PostgreSQL está listo"
        break
    fi
    if [ $i -eq 10 ]; then
        log_error "PostgreSQL no respondió después de 10 intentos"
        exit 1
    fi
    sleep 2
done

# 3. Configurar entorno Python
log_info "🐍 Configurando entorno Python..."

if [ ! -d "venv" ]; then
    log_info "Creando entorno virtual..."
    python3 -m venv venv
fi

source venv/bin/activate
log_success "✅ Entorno virtual activado"

# Verificar/instalar dependencias
if [ ! -f "venv/pyvenv.cfg" ] || ! pip list | grep -q "fastapi"; then
    log_info "📦 Instalando dependencias..."
    pip install -q fastapi uvicorn "psycopg[binary]" openai langchain langchain-openai pydantic python-dotenv python-multipart jinja2
fi

# 4. Verificar embeddings
log_info "🧠 Verificando embeddings..."
EMBEDDINGS_COUNT=$(docker exec -i semantika-postgres psql -U semantika -d semantika -t -c "SELECT COUNT(embedding) FROM components WHERE embedding IS NOT NULL;" 2>/dev/null | xargs)

if [ "$EMBEDDINGS_COUNT" != "15" ]; then
    log_info "🔄 Generando embeddings..."
    cd scripts
    python update_embeddings.py > /dev/null 2>&1 || log_warning "Advertencia: Problema con embeddings (necesitas API key de OpenAI)"
    cd ..
else
    log_success "✅ Embeddings están listos ($EMBEDDINGS_COUNT/15)"
fi

# 5. Terminar procesos existentes del backend
log_info "🧹 Limpiando procesos existentes..."
pkill -f "uvicorn.*app.main:app" 2>/dev/null || true

# 6. Iniciar backend en background
log_info "⚙️ Iniciando backend..."
cd services/llm-service

# Crear archivo de log para el backend
BACKEND_LOG="$PROJECT_DIR/backend.log"
> "$BACKEND_LOG"

# Iniciar uvicorn en background
nohup uvicorn app.main:app --host 0.0.0.0 --port 8000 > "$BACKEND_LOG" 2>&1 &
BACKEND_PID=$!

# Guardar PID para poder terminar después
echo $BACKEND_PID > "$PROJECT_DIR/.backend_pid"

cd "$PROJECT_DIR"

# 7. Esperar a que el backend esté listo
log_info "⏳ Esperando que el backend esté listo..."
for i in {1..15}; do
    if curl -s http://localhost:8000/health > /dev/null 2>&1; then
        log_success "✅ Backend está funcionando en http://localhost:8000"
        break
    fi
    if [ $i -eq 15 ]; then
        log_error "El backend no respondió después de 15 intentos"
        log_info "📄 Revisa los logs: tail -f $BACKEND_LOG"
        exit 1
    fi
    sleep 2
done

# 8. Verificar knowledge base para IA avanzada
log_info "📚 Verificando knowledge base para IA avanzada..."
if [ ! -f "knowledge_base/bancolombia_design_system.json" ]; then
    log_warning "Knowledge base no encontrado - IA avanzada puede tener funcionalidad limitada"
    log_info "💡 El botón 'IA Avanzada' estará disponible pero con capacidades básicas"
else
    log_success "✅ Knowledge base disponible - IA avanzada completamente funcional"
fi

# 9. Abrir frontend
log_info "🖥️ Abriendo frontend..."
sleep 1
open "frontend/ui/index.html"

# 9. Mostrar información final
echo "
╔══════════════════════════════════════════════════════════════╗
║                    🎉 ¡SEMANTIKA INICIADO!                   ║
╚══════════════════════════════════════════════════════════════╝

📊 ESTADO DE SERVICIOS:
   🐳 Docker:      ✅ Funcionando
   🗄️ PostgreSQL:  ✅ Conectado  
   ⚙️ Backend:     ✅ http://localhost:8000
   🖥️ Frontend:    ✅ Abierto en navegador

🌐 URLS DISPONIBLES:
   📱 App Principal:    file://$(pwd)/frontend/ui/index.html
   📚 Documentación:    http://localhost:8000/docs
   💾 Admin BD:         http://localhost:8080
   🏥 Health Check:     http://localhost:8000/health

🎯 PRUEBAS RÁPIDAS:
   
   🔍 BÚSQUEDA CLÁSICA:
   1. Escribe: 'botón principal'
   2. Haz clic en 'Buscar Componentes'
   
   🧠 IA AVANZADA (NUEVO):
   1. Escribe: 'botón verde que diga terminar'
   2. Haz clic en 'IA Avanzada'
   3. ¡Ve la magia de la personalización!

📄 LOGS DEL BACKEND: tail -f backend.log
🛑 PARA DETENER: ./quick_stop.sh

$(log_success "¡Todo listo! Disfruta usando Semantika 🚀")
" 