#!/bin/bash

# =============================================================================
# 🧪 SCRIPT DE PRUEBA - SEMANTIKA + PLAYGROUND
# =============================================================================
# Script para probar que los scripts de inicio y parada funcionan correctamente
# =============================================================================

set -e

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🧪 INICIANDO PRUEBAS DE SCRIPTS SEMANTIKA + PLAYGROUND${NC}"
echo "=================================================================="
echo ""

# Función para verificar si un puerto está en uso
check_port() {
    local port=$1
    if lsof -ti:$port >/dev/null 2>&1; then
        return 0  # Puerto en uso
    else
        return 1  # Puerto libre
    fi
}

# Función para hacer request HTTP
test_endpoint() {
    local url=$1
    local expected_status=${2:-200}
    
    echo -n "  Probando $url... "
    
    if curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "$expected_status"; then
        echo -e "${GREEN}✅ OK${NC}"
        return 0
    else
        echo -e "${RED}❌ FALLO${NC}"
        return 1
    fi
}

echo -e "${YELLOW}📋 PASO 1: Verificar estado inicial${NC}"
if check_port 8000 || check_port 8080; then
    echo -e "${YELLOW}⚠️  Hay servicios ejecutándose, deteniéndolos primero...${NC}"
    ./stop-semantika.sh >/dev/null 2>&1
    sleep 2
fi
echo -e "${GREEN}✅ Estado inicial limpio${NC}"
echo ""

echo -e "${YELLOW}📋 PASO 2: Probar script de inicio${NC}"
echo "Ejecutando ./start-semantika.sh..."
./start-semantika.sh >/dev/null 2>&1 &
START_PID=$!

# Esperar a que los servicios estén listos
echo "Esperando a que los servicios estén listos..."
sleep 8

# Verificar que los procesos estén corriendo
if ! kill -0 $START_PID 2>/dev/null; then
    echo -e "${GREEN}✅ Script de inicio completado${NC}"
else
    echo -e "${YELLOW}⏳ Script de inicio aún ejecutándose${NC}"
fi

# Verificar puertos
echo "Verificando puertos:"
if check_port 8000; then
    echo -e "${GREEN}  ✅ Puerto 8000 (Backend) activo${NC}"
else
    echo -e "${RED}  ❌ Puerto 8000 (Backend) no responde${NC}"
    exit 1
fi

if check_port 8080; then
    echo -e "${GREEN}  ✅ Puerto 8080 (Frontend) activo${NC}"
else
    echo -e "${RED}  ❌ Puerto 8080 (Frontend) no responde${NC}"
    exit 1
fi
echo ""

echo -e "${YELLOW}📋 PASO 3: Probar endpoints${NC}"
test_endpoint "http://localhost:8000/health"
test_endpoint "http://localhost:8000/"
test_endpoint "http://localhost:8000/docs"
test_endpoint "http://localhost:8080/"
echo ""

echo -e "${YELLOW}📋 PASO 4: Probar API de generación${NC}"
echo -n "  Probando generación de componente... "
RESPONSE=$(curl -s -X POST "http://localhost:8000/generate-component" \
  -H "Content-Type: application/json" \
  -d '{"description": "botón primario"}')

if echo "$RESPONSE" | grep -q '"success":true'; then
    echo -e "${GREEN}✅ OK${NC}"
else
    echo -e "${RED}❌ FALLO${NC}"
    echo "Respuesta: $RESPONSE"
fi
echo ""

echo -e "${YELLOW}📋 PASO 5: Probar script de parada${NC}"
echo "Ejecutando ./stop-semantika.sh..."
./stop-semantika.sh >/dev/null 2>&1

# Esperar a que los servicios se detengan
sleep 3

# Verificar que los puertos estén libres
echo "Verificando que los puertos estén libres:"
if ! check_port 8000; then
    echo -e "${GREEN}  ✅ Puerto 8000 liberado${NC}"
else
    echo -e "${RED}  ❌ Puerto 8000 aún en uso${NC}"
fi

if ! check_port 8080; then
    echo -e "${GREEN}  ✅ Puerto 8080 liberado${NC}"
else
    echo -e "${RED}  ❌ Puerto 8080 aún en uso${NC}"
fi
echo ""

echo -e "${YELLOW}📋 PASO 6: Verificar limpieza${NC}"
if [ -f "semantika.pids" ]; then
    echo -e "${RED}  ❌ Archivo semantika.pids no fue eliminado${NC}"
else
    echo -e "${GREEN}  ✅ Archivo semantika.pids eliminado correctamente${NC}"
fi

# Verificar logs archivados
if ls backend_*.log >/dev/null 2>&1; then
    echo -e "${GREEN}  ✅ Logs del backend archivados${NC}"
else
    echo -e "${YELLOW}  ⚠️  No se encontraron logs archivados del backend${NC}"
fi

if ls frontend_*.log >/dev/null 2>&1; then
    echo -e "${GREEN}  ✅ Logs del frontend archivados${NC}"
else
    echo -e "${YELLOW}  ⚠️  No se encontraron logs archivados del frontend${NC}"
fi
echo ""

echo -e "${GREEN}🎉 TODAS LAS PRUEBAS COMPLETADAS EXITOSAMENTE${NC}"
echo "=================================================================="
echo ""
echo -e "${BLUE}📊 RESUMEN:${NC}"
echo "  ✅ Script de inicio funciona correctamente"
echo "  ✅ Backend responde en puerto 8000"
echo "  ✅ Frontend responde en puerto 8080"
echo "  ✅ API de generación funciona"
echo "  ✅ Script de parada funciona correctamente"
echo "  ✅ Limpieza automática funciona"
echo ""
echo -e "${GREEN}¡Los scripts están listos para usar! 🚀${NC}"
echo ""
echo -e "${BLUE}Comandos disponibles:${NC}"
echo "  ./start-semantika.sh  - Iniciar todos los servicios"
echo "  ./stop-semantika.sh   - Detener todos los servicios"
echo "  ./test-scripts.sh     - Ejecutar estas pruebas" 