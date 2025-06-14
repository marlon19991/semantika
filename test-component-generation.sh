#!/bin/bash

# Test de Generación de Componentes - Semantika Simplificado
# Verifica que el backend optimizado funcione correctamente

echo "🧪 Iniciando pruebas de generación de componentes..."
echo "=================================================="

# Configuración
API_URL="http://localhost:8000"
ENDPOINT="/generate-component"
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Función para hacer peticiones POST
test_component() {
    local description="$1"
    local test_name="$2"
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    echo ""
    echo "🔍 Test $TOTAL_TESTS: $test_name"
    echo "   Descripción: '$description'"
    
    # Hacer petición
    response=$(curl -s -X POST "$API_URL$ENDPOINT" \
        -H "Content-Type: application/json" \
        -d "{\"description\": \"$description\"}")
    
    if [ -n "$response" ]; then
        # Verificar que la respuesta tenga los campos esperados usando grep
        success=$(echo "$response" | grep -o '"success":[^,}]*' | cut -d':' -f2 | tr -d ' ')
        component_code=$(echo "$response" | grep -o '"component_code":"[^"]*"' | cut -d'"' -f4)
        component_type=$(echo "$response" | grep -o '"component_type":"[^"]*"' | cut -d'"' -f4)
        
        if [ "$success" = "true" ] && [ -n "$component_code" ] && [ -n "$component_type" ]; then
            echo "   ✅ PASÓ - Tipo: $component_type"
            echo "   📝 Código: ${component_code:0:50}..."
            PASSED_TESTS=$((PASSED_TESTS + 1))
        else
            echo "   ❌ FALLÓ - Respuesta incompleta"
            echo "   📄 Respuesta: $response"
            FAILED_TESTS=$((FAILED_TESTS + 1))
        fi
    else
        echo "   ❌ FALLÓ - Sin respuesta"
        FAILED_TESTS=$((FAILED_TESTS + 1))
    fi
}

# Verificar que el servidor esté corriendo
echo "🔌 Verificando conexión con el servidor..."
if ! curl -s "$API_URL" > /dev/null 2>&1; then
    echo "❌ Error: El servidor no está corriendo en $API_URL"
    echo "   Ejecuta: ./start-semantika.sh"
    exit 1
fi
echo "✅ Servidor conectado"

# Ejecutar pruebas
echo ""
echo "🚀 Ejecutando pruebas de componentes..."

# Pruebas de botones
test_component "botón primario azul" "Botón Primario"
test_component "botón para guardar datos" "Botón Guardar"
test_component "botón de cancelar rojo" "Botón Cancelar"
test_component "botón secundario pequeño" "Botón Secundario"

# Pruebas de tarjetas
test_component "tarjeta de producto con precio" "Tarjeta Producto"
test_component "tarjeta de usuario con avatar" "Tarjeta Usuario"

# Pruebas de formularios
test_component "campo de email obligatorio" "Campo Email"
test_component "formulario de login completo" "Formulario Login"
test_component "campo de contraseña con validación" "Campo Password"

# Pruebas de alertas
test_component "alerta de éxito verde" "Alerta Éxito"
test_component "alerta de error importante" "Alerta Error"
test_component "mensaje de advertencia amarillo" "Alerta Warning"

# Pruebas de modales
test_component "modal de confirmación para eliminar" "Modal Confirmación"
test_component "ventana modal con formulario" "Modal Formulario"

# Pruebas de casos complejos
test_component "botón grande azul que diga Confirmar Pago" "Caso Complejo 1"
test_component "tarjeta con imagen, título y botón de acción" "Caso Complejo 2"

# Mostrar resultados
echo ""
echo "=================================================="
echo "📊 RESUMEN DE PRUEBAS"
echo "=================================================="
echo "Total de pruebas: $TOTAL_TESTS"
echo "✅ Pasaron: $PASSED_TESTS"
echo "❌ Fallaron: $FAILED_TESTS"

if [ $FAILED_TESTS -eq 0 ]; then
    echo ""
    echo "🎉 ¡TODAS LAS PRUEBAS PASARON!"
    echo "   El generador de componentes funciona correctamente"
    exit 0
else
    echo ""
    echo "⚠️  ALGUNAS PRUEBAS FALLARON"
    echo "   Revisa los errores arriba"
    exit 1
fi 