#!/bin/bash

# =============================================================================
# 🚀 SEMANTIKA + PLAYGROUND - SCRIPT DE INICIO
# =============================================================================
# Este script inicia automáticamente el backend y frontend de Semantika
# Autor: Bancolombia - Equipo de Innovación
# Versión: 1.0.0
# =============================================================================

set -e  # Salir si hay errores

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

# Banner de inicio
clear
echo -e "${CYAN}"
cat << "EOF"
 ____                            _   _ _         
/ ___|  ___ _ __ ___   __ _ _ __ | |_(_) | ____ _ 
\___ \ / _ \ '_ ` _ \ / _` | '_ \| __| | |/ / _` |
 ___) |  __/ | | | | | (_| | | | | |_| |   < (_| |
|____/ \___|_| |_| |_|\__,_|_| |_|\__|_|_|\_\__,_|
                                                  
    + PLAYGROUND INTEGRADO
EOF
echo -e "${NC}"
echo -e "${CYAN}==============================================================================${NC}"
echo -e "${CYAN}🧠 Asistente RAG para Design System + Playground de Testing Integrado${NC}"
echo -e "${CYAN}==============================================================================${NC}"
echo ""

# Verificar directorio actual
if [ ! -f "README.md" ] && [ ! -d "frontend" ] && [ ! -d "backend" ]; then
    print_error "Este script debe ejecutarse desde la raíz del proyecto Semantika"
    print_status "Estructura esperada:"
    echo "  ├── frontend/"
    echo "  ├── backend/"
    echo "  ├── README.md"
    echo "  └── start-semantika.sh"
    exit 1
fi

print_header "🔍 VERIFICANDO DEPENDENCIAS..."

# Verificar Python
if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null; then
    print_error "Python no está instalado. Instala Python 3.7+ para continuar."
    exit 1
fi

# Determinar comando de Python
PYTHON_CMD="python3"
if ! command -v python3 &> /dev/null; then
    PYTHON_CMD="python"
fi

print_success "Python encontrado: $($PYTHON_CMD --version)"

# Verificar pip
if ! command -v pip3 &> /dev/null && ! command -v pip &> /dev/null; then
    print_error "pip no está instalado. Instala pip para continuar."
    exit 1
fi

# Determinar comando de pip
PIP_CMD="pip3"
if ! command -v pip3 &> /dev/null; then
    PIP_CMD="pip"
fi

print_success "pip encontrado: $($PIP_CMD --version)"

# Crear archivo de PIDs para tracking
PID_FILE="semantika.pids"
rm -f $PID_FILE

print_header "🔧 CONFIGURANDO BACKEND..."

# Verificar si existe el directorio backend
if [ ! -d "backend" ]; then
    print_error "Directorio 'backend' no encontrado"
    exit 1
fi

cd backend

# Verificar requirements.txt
if [ ! -f "requirements.txt" ]; then
    print_warning "requirements.txt no encontrado, creando uno básico..."
    cat > requirements.txt << EOF
fastapi==0.104.1
uvicorn[standard]==0.24.0
python-multipart==0.0.6
pydantic==2.5.0
python-dotenv==1.0.0
httpx==0.25.2
numpy==1.24.3
scikit-learn==1.3.0
sentence-transformers==2.2.2
chromadb==0.4.15
langchain==0.0.335
openai==1.3.5
anthropic==0.7.7
EOF
    print_success "requirements.txt creado"
fi

# Crear y activar entorno virtual si no existe
if [ ! -d "venv" ]; then
    print_status "Creando entorno virtual..."
    $PYTHON_CMD -m venv venv
    print_success "Entorno virtual creado"
fi

print_status "Activando entorno virtual..."
source venv/bin/activate

# Actualizar pip en el entorno virtual
print_status "Actualizando pip en entorno virtual..."
pip install --upgrade pip --quiet

# Instalar dependencias del backend
print_status "Instalando dependencias del backend..."
pip install -r requirements.txt --quiet

# Verificar archivo principal
if [ ! -f "main.py" ]; then
    print_error "main.py no encontrado en el directorio backend"
    exit 1
fi

print_success "Backend configurado correctamente"

print_header "🌐 INICIANDO SERVICIOS..."

# Iniciar backend (usando el entorno virtual)
print_status "Iniciando servidor FastAPI en puerto 8000..."
nohup ./venv/bin/python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000 > ../backend.log 2>&1 &
BACKEND_PID=$!
echo "backend:$BACKEND_PID" >> ../$PID_FILE
print_success "Backend iniciado (PID: $BACKEND_PID)"

# Esperar a que el backend esté listo
print_status "Esperando a que el backend esté listo..."
sleep 3

# Verificar que el backend esté funcionando
if ! kill -0 $BACKEND_PID 2>/dev/null; then
    print_error "El backend no se pudo iniciar correctamente"
    print_status "Revisa el log: tail -f backend.log"
    exit 1
fi

# Volver al directorio raíz
cd ..

print_header "🎨 CONFIGURANDO FRONTEND..."

# Verificar directorio frontend
if [ ! -d "frontend/ui" ]; then
    print_error "Directorio 'frontend/ui' no encontrado"
    exit 1
fi

cd frontend/ui

# Verificar archivo principal
if [ ! -f "index.html" ]; then
    print_error "index.html no encontrado en frontend/ui"
    exit 1
fi

# Iniciar servidor frontend
print_status "Iniciando servidor frontend en puerto 8080..."
nohup $PYTHON_CMD -m http.server 8080 > ../../frontend.log 2>&1 &
FRONTEND_PID=$!
echo "frontend:$FRONTEND_PID" >> ../../$PID_FILE
print_success "Frontend iniciado (PID: $FRONTEND_PID)"

# Volver al directorio raíz
cd ../..

# Esperar a que los servicios estén listos
print_status "Verificando servicios..."
sleep 2

print_header "✅ SEMANTIKA + PLAYGROUND INICIADO EXITOSAMENTE"
echo ""
print_success "🔗 URLs de acceso:"
echo -e "   ${CYAN}Frontend (Interfaz Principal):${NC} http://localhost:8080"
echo -e "   ${CYAN}Backend API (Documentación):${NC}   http://localhost:8000/docs"
echo -e "   ${CYAN}Backend Health Check:${NC}         http://localhost:8000/health"
echo ""
print_success "📊 Información de procesos:"
echo -e "   ${CYAN}Backend PID:${NC}  $BACKEND_PID"
echo -e "   ${CYAN}Frontend PID:${NC} $FRONTEND_PID"
echo -e "   ${CYAN}PIDs guardados en:${NC} $PID_FILE"
echo ""
print_success "📝 Logs disponibles:"
echo -e "   ${CYAN}Backend:${NC}  tail -f backend.log"
echo -e "   ${CYAN}Frontend:${NC} tail -f frontend.log"
echo ""
print_warning "💡 Para detener todos los servicios ejecuta:"
echo -e "   ${CYAN}./stop-semantika.sh${NC}"
echo ""

# Intentar abrir el navegador automáticamente
if command -v open &> /dev/null; then
    print_status "Abriendo navegador automáticamente..."
    sleep 2
    open http://localhost:8080
elif command -v xdg-open &> /dev/null; then
    print_status "Abriendo navegador automáticamente..."
    sleep 2
    xdg-open http://localhost:8080
elif command -v start &> /dev/null; then
    print_status "Abriendo navegador automáticamente..."
    sleep 2
    start http://localhost:8080
else
    print_status "Abre manualmente: http://localhost:8080"
fi

print_header "🎉 ¡SEMANTIKA + PLAYGROUND ESTÁ LISTO PARA USAR!"
echo ""
echo -e "${GREEN}Funcionalidades disponibles:${NC}"
echo "  ✅ Generador de componentes con IA"
echo "  ✅ Playground integrado con Monaco Editor"
echo "  ✅ Sistema de calidad en tiempo real"
echo "  ✅ Vista previa responsive"
echo "  ✅ Exportación de código"
echo "  ✅ Historial de consultas"
echo "  ✅ Ejemplos predefinidos"
echo "  ✅ Documentación integrada"
echo ""
echo -e "${YELLOW}Presiona Ctrl+C para ver los logs en tiempo real o ejecuta stop-semantika.sh para detener${NC}"

# Mostrar logs en tiempo real (opcional)
read -p "¿Quieres ver los logs en tiempo real? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Mostrando logs en tiempo real (Ctrl+C para salir)..."
    tail -f backend.log frontend.log
fi 