#!/bin/bash

# Semantika - Parada Rápida
# Versión: 2.0.0

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

echo "
╔══════════════════════════════════════════════════════════════╗
║                     🛑 SEMANTIKA STOP                        ║  
║              Deteniendo todos los servicios                  ║
╚══════════════════════════════════════════════════════════════╝
"

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

# 1. Detener backend
log_info "⚙️ Deteniendo backend..."
if [ -f ".backend_pid" ]; then
    BACKEND_PID=$(cat .backend_pid)
    if kill -0 $BACKEND_PID 2>/dev/null; then
        kill $BACKEND_PID
        log_success "✅ Backend detenido (PID: $BACKEND_PID)"
    else
        log_warning "⚠️ Backend ya no estaba corriendo"
    fi
    rm -f .backend_pid
fi

# Limpiar cualquier proceso uvicorn restante
pkill -f "uvicorn.*app.main:app" 2>/dev/null && log_success "✅ Procesos uvicorn limpiados" || true

# 2. Detener servicios Docker (opcional)
read -p "¿Detener también servicios Docker? [y/N]: " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    log_info "🐳 Deteniendo servicios Docker..."
    cd infra
    docker-compose down
    cd ..
    log_success "✅ Servicios Docker detenidos"
else
    log_info "🐳 Servicios Docker siguen corriendo"
fi

# 3. Limpiar archivos temporales
log_info "🧹 Limpiando archivos temporales..."
rm -f backend.log
rm -f semantika.log
rm -f .backend_pid

log_success "✅ Semantika detenido completamente"

echo "
╔══════════════════════════════════════════════════════════════╗
║                      👋 ¡HASTA PRONTO!                       ║
║                   Para reiniciar: ./quick_start.sh           ║
╚══════════════════════════════════════════════════════════════╝
" 