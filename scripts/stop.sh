#!/bin/bash
# Semantika - Script de Parada
# Detiene todos los servicios de manera limpia

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

main() {
    log_info "🛑 Deteniendo Semantika RAG Design-System Assistant"
    
    PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
    cd "$PROJECT_ROOT"
    
    # Detener LLM Service
    if [ -f "semantika-llm.pid" ]; then
        PID=$(cat semantika-llm.pid)
        if kill -0 "$PID" 2>/dev/null; then
            log_info "🧠 Deteniendo LLM Service (PID: $PID)..."
            kill "$PID"
            rm -f semantika-llm.pid
            log_success "LLM Service detenido"
        else
            log_warning "LLM Service ya estaba detenido"
            rm -f semantika-llm.pid
        fi
    else
        log_warning "No se encontró PID del LLM Service"
    fi
    
    # Detener servicios de Docker
    log_info "🐳 Deteniendo servicios de infraestructura..."
    cd infra
    docker-compose down
    cd ..
    
    # Limpiar archivos temporales
    log_info "🧹 Limpiando archivos temporales..."
    rm -f semantika-llm.log
    rm -f semantika-llm.pid
    
    log_success "✅ Todos los servicios han sido detenidos"
}

main "$@" 