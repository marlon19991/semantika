#!/bin/bash

# =============================================================================
# 🛑 SEMANTIKA + PLAYGROUND - SCRIPT DE PARADA
# =============================================================================
# Este script detiene automáticamente todos los servicios de Semantika
# Autor: Bancolombia - Equipo de Innovación
# Versión: 1.0.0
# =============================================================================

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Función para imprimir con colores
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}$1${NC}"
}

# Banner de parada
echo -e "${RED}"
cat << "EOF"
 ____  _                   _             
/ ___|| |_ ___  _ __  _ __ (_)_ __   __ _ 
\___ \| __/ _ \| '_ \| '_ \| | '_ \ / _` |
 ___) | || (_) | |_) | |_) | | | | | (_| |
|____/ \__\___/| .__/| .__/|_|_| |_|\__, |
               |_|   |_|            |___/ 
    SEMANTIKA + PLAYGROUND
EOF
echo -e "${NC}"
echo -e "${RED}==============================================================================${NC}"
echo -e "${RED}🛑 Deteniendo todos los servicios de Semantika${NC}"
echo -e "${RED}==============================================================================${NC}"
echo ""

# Archivo de PIDs
PID_FILE="semantika.pids"

print_header "🔍 BUSCANDO PROCESOS ACTIVOS..."

# Función para detener proceso por PID
stop_process() {
    local service_name=$1
    local pid=$2
    
    if kill -0 $pid 2>/dev/null; then
        print_status "Deteniendo $service_name (PID: $pid)..."
        kill $pid 2>/dev/null
        
        # Esperar a que el proceso termine
        local count=0
        while kill -0 $pid 2>/dev/null && [ $count -lt 10 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        # Si aún está corriendo, forzar terminación
        if kill -0 $pid 2>/dev/null; then
            print_warning "Forzando terminación de $service_name..."
            kill -9 $pid 2>/dev/null
        fi
        
        print_success "$service_name detenido correctamente"
    else
        print_warning "$service_name ya estaba detenido"
    fi
}

# Detener procesos desde archivo de PIDs
if [ -f "$PID_FILE" ]; then
    print_status "Leyendo PIDs desde $PID_FILE..."
    
    while IFS=':' read -r service pid; do
        if [ ! -z "$service" ] && [ ! -z "$pid" ]; then
            stop_process "$service" "$pid"
        fi
    done < "$PID_FILE"
    
    # Eliminar archivo de PIDs
    rm -f "$PID_FILE"
    print_success "Archivo de PIDs eliminado"
else
    print_warning "Archivo de PIDs no encontrado, buscando procesos manualmente..."
fi

print_header "🔍 BUSCANDO PROCESOS ADICIONALES..."

# Buscar y detener procesos por puerto/nombre
print_status "Buscando procesos en puertos 8000 y 8080..."

# Detener procesos en puerto 8000 (Backend)
BACKEND_PIDS=$(lsof -ti:8000 2>/dev/null || true)
if [ ! -z "$BACKEND_PIDS" ]; then
    for pid in $BACKEND_PIDS; do
        stop_process "Backend (puerto 8000)" "$pid"
    done
else
    print_status "No hay procesos en puerto 8000"
fi

# Detener procesos en puerto 8080 (Frontend)
FRONTEND_PIDS=$(lsof -ti:8080 2>/dev/null || true)
if [ ! -z "$FRONTEND_PIDS" ]; then
    for pid in $FRONTEND_PIDS; do
        stop_process "Frontend (puerto 8080)" "$pid"
    done
else
    print_status "No hay procesos en puerto 8080"
fi

# Buscar procesos de uvicorn específicos de Semantika
print_status "Buscando procesos uvicorn de Semantika..."
UVICORN_PIDS=$(pgrep -f "uvicorn.*main:app" 2>/dev/null || true)
if [ ! -z "$UVICORN_PIDS" ]; then
    for pid in $UVICORN_PIDS; do
        stop_process "Uvicorn Semantika" "$pid"
    done
else
    print_status "No hay procesos uvicorn de Semantika"
fi

# Buscar procesos de http.server en directorio frontend
print_status "Buscando servidores HTTP en directorio frontend..."
HTTP_PIDS=$(pgrep -f "http.server.*8080" 2>/dev/null || true)
if [ ! -z "$HTTP_PIDS" ]; then
    for pid in $HTTP_PIDS; do
        stop_process "HTTP Server Frontend" "$pid"
    done
else
    print_status "No hay servidores HTTP del frontend"
fi

print_header "🧹 LIMPIANDO ARCHIVOS TEMPORALES..."

# Limpiar logs si existen
if [ -f "backend.log" ]; then
    print_status "Archivando log del backend..."
    mv backend.log "backend_$(date +%Y%m%d_%H%M%S).log"
    print_success "Log del backend archivado"
fi

if [ -f "frontend.log" ]; then
    print_status "Archivando log del frontend..."
    mv frontend.log "frontend_$(date +%Y%m%d_%H%M%S).log"
    print_success "Log del frontend archivado"
fi

# Limpiar archivos temporales de Python
print_status "Limpiando archivos temporales..."
find . -name "*.pyc" -delete 2>/dev/null || true
find . -name "__pycache__" -type d -exec rm -rf {} + 2>/dev/null || true
print_success "Archivos temporales eliminados"

print_header "🔍 VERIFICACIÓN FINAL..."

# Verificar que los puertos estén libres
sleep 2

if lsof -ti:8000 >/dev/null 2>&1; then
    print_warning "Puerto 8000 aún está en uso"
else
    print_success "Puerto 8000 liberado"
fi

if lsof -ti:8080 >/dev/null 2>&1; then
    print_warning "Puerto 8080 aún está en uso"
else
    print_success "Puerto 8080 liberado"
fi

print_header "✅ SEMANTIKA + PLAYGROUND DETENIDO COMPLETAMENTE"
echo ""
print_success "🎯 Resumen de acciones realizadas:"
echo "  ✅ Procesos backend detenidos"
echo "  ✅ Procesos frontend detenidos"
echo "  ✅ Puertos 8000 y 8080 liberados"
echo "  ✅ Logs archivados con timestamp"
echo "  ✅ Archivos temporales eliminados"
echo "  ✅ Archivo de PIDs eliminado"
echo ""
print_success "📝 Logs archivados disponibles:"
ls -la backend_*.log frontend_*.log 2>/dev/null | while read line; do
    echo -e "   ${CYAN}$line${NC}"
done || print_status "No hay logs archivados"
echo ""
print_warning "💡 Para reiniciar Semantika ejecuta:"
echo -e "   ${CYAN}./start-semantika.sh${NC}"
echo ""
print_header "🎉 ¡TODOS LOS SERVICIOS DETENIDOS EXITOSAMENTE!"

# Verificación adicional de procesos relacionados
print_status "Verificación adicional de procesos relacionados..."
REMAINING_PROCESSES=$(ps aux | grep -E "(uvicorn|http.server|semantika)" | grep -v grep | grep -v "stop-semantika.sh" || true)

if [ ! -z "$REMAINING_PROCESSES" ]; then
    print_warning "Procesos relacionados aún activos:"
    echo "$REMAINING_PROCESSES"
    echo ""
    print_warning "Si necesitas forzar la terminación, ejecuta:"
    echo -e "   ${RED}pkill -f uvicorn${NC}"
    echo -e "   ${RED}pkill -f http.server${NC}"
else
    print_success "No hay procesos relacionados activos"
fi

echo ""
echo -e "${GREEN}¡Semantika + Playground detenido completamente! 🛑${NC}" 