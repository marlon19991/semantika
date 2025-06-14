#!/bin/bash

# Script de inicio para el Playground de Semantika
# Inicia el servidor de desarrollo y abre el navegador

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Variables de configuración
PORT=3000
BROWSER_DELAY=3

# Función para mostrar mensajes
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

success() {
    echo -e "${PURPLE}[SUCCESS]${NC} $1"
}

# Banner de inicio
show_start_banner() {
    echo -e "${PURPLE}"
    echo "🎮 SEMANTIKA PLAYGROUND"
    echo "   Ambiente de Pruebas Interactivo"
    echo "   ¡Probemos código generado por IA!"
    echo -e "${NC}"
}

# Verificar si el playground está configurado
check_setup() {
    step "Verificando configuración del playground..."
    
    if [ ! -f "config.json" ]; then
        error "El playground no está configurado"
        echo "Por favor ejecuta primero: ${YELLOW}./scripts/setup.sh${NC}"
        exit 1
    fi
    
    if [ ! -d "src" ]; then
        error "Directorio 'src' no encontrado"
        echo "Por favor ejecuta primero: ${YELLOW}./scripts/setup.sh${NC}"
        exit 1
    fi
    
    log "Configuración verificada ✓"
}

# Verificar puerto disponible
check_port() {
    step "Verificando puerto $PORT..."
    
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
        warn "Puerto $PORT está ocupado"
        
        # Intentar matar proceso existente
        local pid=$(lsof -ti :$PORT)
        if [ ! -z "$pid" ]; then
            echo "Deteniendo proceso existente (PID: $pid)..."
            kill -9 $pid 2>/dev/null || true
            sleep 2
        fi
        
        # Verificar nuevamente
        if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
            error "No se pudo liberar el puerto $PORT"
            echo "Por favor detén manualmente el proceso que usa el puerto $PORT"
            exit 1
        fi
    fi
    
    log "Puerto $PORT disponible ✓"
}

# Función para abrir navegador
open_browser() {
    local url="http://localhost:$PORT"
    
    step "Abriendo navegador en $url..."
    
    # Esperar un poco para que el servidor inicie
    sleep $BROWSER_DELAY
    
    # Detectar sistema operativo y abrir navegador
    case "$(uname -s)" in
        Darwin)  # macOS
            open "$url" >/dev/null 2>&1 &
            ;;
        Linux)   # Linux
            if command -v xdg-open > /dev/null; then
                xdg-open "$url" >/dev/null 2>&1 &
            elif command -v firefox > /dev/null; then
                firefox "$url" >/dev/null 2>&1 &
            elif command -v chromium > /dev/null; then
                chromium "$url" >/dev/null 2>&1 &
            elif command -v google-chrome > /dev/null; then
                google-chrome "$url" >/dev/null 2>&1 &
            else
                warn "No se pudo detectar navegador. Abre manualmente: $url"
            fi
            ;;
        CYGWIN*|MINGW32*|MSYS*|MINGW*)  # Windows
            start "$url" >/dev/null 2>&1 &
            ;;
        *)
            warn "Sistema operativo no detectado. Abre manualmente: $url"
            ;;
    esac
}

# Iniciar servidor Node.js
start_node_server() {
    step "Iniciando servidor Node.js..."
    
    if ! command -v node &> /dev/null; then
        error "Node.js no está instalado"
        exit 1
    fi
    
    # Crear archivo de proceso para seguimiento
    echo $$ > playground.pid
    
    # Iniciar servidor con manejo de señales
    trap 'kill -TERM $node_pid 2>/dev/null; rm -f playground.pid; exit 0' SIGINT SIGTERM
    
    node server.js &
    node_pid=$!
    
    # Guardar PID del proceso Node.js
    echo $node_pid > node.pid
    
    log "Servidor Node.js iniciado (PID: $node_pid) ✓"
}

# Iniciar servidor Python (alternativo)
start_python_server() {
    step "Iniciando servidor Python..."
    
    local python_cmd=""
    
    if command -v python3 &> /dev/null; then
        python_cmd="python3"
    elif command -v python &> /dev/null; then
        python_cmd="python"
    else
        error "Python no está instalado"
        exit 1
    fi
    
    # Crear archivo de proceso para seguimiento
    echo $$ > playground.pid
    
    # Iniciar servidor Python
    trap 'kill -TERM $python_pid 2>/dev/null; rm -f playground.pid; exit 0' SIGINT SIGTERM
    
    $python_cmd server.py &
    python_pid=$!
    
    # Guardar PID del proceso Python
    echo $python_pid > python.pid
    
    log "Servidor Python iniciado (PID: $python_pid) ✓"
}

# Mostrar información de inicio
show_startup_info() {
    echo ""
    success "🎉 ¡Playground de Semantika iniciado exitosamente!"
    echo ""
    echo -e "${BLUE}📋 Información del servidor:${NC}"
    echo "   🌐 URL: http://localhost:$PORT"
    echo "   📝 Documentación: http://localhost:$PORT/docs/"
    echo "   🔧 Panel de control: http://localhost:$PORT/src/"
    echo ""
    echo -e "${BLUE}🎮 Cómo usar el playground:${NC}"
    echo "   1. Ve a Semantika y genera código: 'botón azul que diga Confirmar'"
    echo "   2. Copia el código HTML/Angular generado"
    echo "   3. Pégalo en el editor del playground"
    echo "   4. Haz clic en 'Ejecutar' para ver el resultado"
    echo "   5. Revisa el panel de calidad para mejoras"
    echo ""
    echo -e "${YELLOW}⚡ Atajos útiles:${NC}"
    echo "   • Ctrl+C: Detener servidor"
    echo "   • Ctrl+Enter (en editor): Ejecutar código"
    echo "   • F11: Pantalla completa"
    echo ""
    echo -e "${GREEN}🚀 ¡Listo para probar código generado por IA!${NC}"
    echo ""
}

# Función para limpiar al salir
cleanup() {
    echo ""
    step "Deteniendo servidor..."
    
    # Limpiar archivos PID
    if [ -f "node.pid" ]; then
        local node_pid=$(cat node.pid)
        kill -TERM $node_pid 2>/dev/null || true
        rm -f node.pid
    fi
    
    if [ -f "python.pid" ]; then
        local python_pid=$(cat python.pid)
        kill -TERM $python_pid 2>/dev/null || true
        rm -f python.pid
    fi
    
    rm -f playground.pid
    
    success "👋 ¡Playground detenido. ¡Hasta pronto!"
}

# Función principal
main() {
    show_start_banner
    
    # Verificaciones previas
    check_setup
    check_port
    
    # Configurar trap para cleanup
    trap cleanup EXIT
    
    # Abrir navegador en segundo plano
    open_browser &
    
    # Intentar iniciar servidor (Node.js preferido, Python como alternativa)
    if command -v node &> /dev/null; then
        start_node_server
    elif command -v python3 &> /dev/null || command -v python &> /dev/null; then
        start_python_server
    else
        error "Ni Node.js ni Python están disponibles"
        echo "Por favor instala Node.js desde: https://nodejs.org/"
        exit 1
    fi
    
    # Mostrar información
    show_startup_info
    
    # Esperar a que el servidor termine
    wait
}

# Verificar si se está ejecutando como script principal
if [ "${BASH_SOURCE[0]}" == "${0}" ]; then
    main "$@"
fi 