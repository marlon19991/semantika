#!/bin/bash

# Test del Playground Integrado - Semantika v2.1
# Verifica que el playground funcione correctamente con el backend

echo "🎮 Iniciando pruebas del Playground Integrado..."
echo "=================================================="

# Configuración
API_URL="http://localhost:8000"
VALIDATION_ENDPOINT="/playground/validate"
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Función para hacer peticiones POST de validación
test_validation() {
    local html="$1"
    local css="$2"
    local javascript="$3"
    local test_name="$4"
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    echo ""
    echo "🔍 Test $TOTAL_TESTS: $test_name"
    
    # Escapar comillas y caracteres especiales para JSON
    html_escaped=$(echo "$html" | sed 's/"/\\"/g' | sed 's/\\/\\\\/g')
    css_escaped=$(echo "$css" | sed 's/"/\\"/g' | sed 's/\\/\\\\/g')
    js_escaped=$(echo "$javascript" | sed 's/"/\\"/g' | sed 's/\\/\\\\/g')
    
    # Hacer petición usando curl con datos directos
    response=$(curl -s -X POST "$API_URL$VALIDATION_ENDPOINT" \
        -H "Content-Type: application/json" \
        -d "{\"html\": \"$html_escaped\", \"css\": \"$css_escaped\", \"javascript\": \"$js_escaped\"}")
    
    # Verificar respuesta
    if echo "$response" | grep -q '"success": true'; then
        echo "   ✅ PASSED - Validación exitosa"
        
        # Extraer métricas
        accessibility=$(echo "$response" | grep -o '"accessibility_score": [0-9]*' | grep -o '[0-9]*')
        performance=$(echo "$response" | grep -o '"performance_score": [0-9]*' | grep -o '[0-9]*')
        design_system=$(echo "$response" | grep -o '"design_system_score": [0-9]*' | grep -o '[0-9]*')
        
        echo "   📊 Accesibilidad: ${accessibility}%"
        echo "   ⚡ Performance: ${performance}%"
        echo "   🎨 Design System: ${design_system}%"
        
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo "   ❌ FAILED - Error en validación"
        echo "   Response: $response"
        FAILED_TESTS=$((FAILED_TESTS + 1))
    fi
}

# Verificar que el backend esté funcionando
echo "🔍 Verificando conexión con el backend..."
if ! curl -s "$API_URL/generate-component" -X POST -H "Content-Type: application/json" -d '{"description":"test"}' > /dev/null; then
    echo "❌ Backend no disponible en $API_URL"
    echo "   Ejecuta: ./start-semantika.sh"
    exit 1
fi
echo "✅ Backend disponible"

# ===== PRUEBAS DE VALIDACIÓN =====

# Test 1: HTML básico con componente del Design System
test_validation \
    '<bc-button type="primary" size="medium">Hola Mundo</bc-button>' \
    'bc-button { margin: 10px; }' \
    'console.log("Playground cargado");' \
    "HTML básico con componente DS"

# Test 2: Formulario completo
test_validation \
    '<bc-form><bc-form-group><bc-label for="email">Email</bc-label><bc-input type="email" id="email" required></bc-input></bc-form-group><bc-button type="primary">Enviar</bc-button></bc-form>' \
    '.form-container { padding: 20px; }' \
    'document.querySelector("bc-form").addEventListener("submit", function(e) { e.preventDefault(); });' \
    "Formulario completo con validación"

# Test 3: Tarjeta de producto
test_validation \
    '<bc-card><bc-card-header><h3>Producto</h3></bc-card-header><bc-card-body><p>Descripción del producto</p><bc-button type="primary">Ver más</bc-button></bc-card-body></bc-card>' \
    'bc-card { max-width: 300px; margin: 20px auto; }' \
    '' \
    "Tarjeta de producto"

# Test 4: HTML con problemas de accesibilidad
test_validation \
    '<img src="test.jpg"><input type="text" placeholder="Sin label">' \
    '' \
    '' \
    "HTML con problemas de accesibilidad"

# Test 5: HTML vacío
test_validation \
    '' \
    '' \
    '' \
    "HTML vacío"

# Test 6: CSS básico
test_validation \
    '<bc-button type="primary">Test</bc-button>' \
    'body { margin: 0; padding: 0; } .container { max-width: 1200px; margin: 0 auto; }' \
    '' \
    "CSS básico"

# Test 7: JavaScript con console.log
test_validation \
    '<bc-button type="primary" onclick="testFunction()">Click me</bc-button>' \
    '' \
    'function testFunction() { console.log("Button clicked"); alert("Hello!"); }' \
    "JavaScript con console.log"

# Test 8: Múltiples componentes del Design System
test_validation \
    '<bc-alert type="success">Éxito</bc-alert><bc-card><bc-card-body><bc-form><bc-form-group><bc-label>Nombre</bc-label><bc-input type="text"></bc-input></bc-form-group><bc-button type="primary">Enviar</bc-button></bc-form></bc-card-body></bc-card>' \
    '.container { padding: 20px; }' \
    '' \
    "Múltiples componentes DS"

# Test 9: HTML con estilos inline
test_validation \
    '<div style="color: red; font-size: 20px;"><bc-button type="primary" style="margin: 10px;">Botón</bc-button></div>' \
    '' \
    '' \
    "HTML con estilos inline"

# Test 10: Componentes anidados correctamente
test_validation \
    '<bc-modal><bc-modal-header><h3>Confirmación</h3></bc-modal-header><bc-modal-body><p>¿Continuar?</p></bc-modal-body><bc-modal-footer><bc-button type="secondary">Cancelar</bc-button><bc-button type="primary">Confirmar</bc-button></bc-modal-footer></bc-modal>' \
    '.modal-content { max-width: 500px; }' \
    'document.querySelector("bc-button[type=primary]").addEventListener("click", function() { console.log("Confirmed"); });' \
    "Componentes anidados correctamente"

# ===== RESUMEN DE RESULTADOS =====
echo ""
echo "📊 RESUMEN DE PRUEBAS DEL PLAYGROUND"
echo "===================================="
echo "Total de pruebas: $TOTAL_TESTS"
echo "✅ Exitosas: $PASSED_TESTS"
echo "❌ Fallidas: $FAILED_TESTS"

if [ $FAILED_TESTS -eq 0 ]; then
    echo ""
    echo "🎉 ¡TODAS LAS PRUEBAS DEL PLAYGROUND PASARON!"
    echo "   El playground está funcionando correctamente"
    echo "   ✅ Validación de código operativa"
    echo "   ✅ Análisis de accesibilidad funcionando"
    echo "   ✅ Análisis de performance funcionando"
    echo "   ✅ Análisis de Design System funcionando"
    echo ""
    echo "🚀 El playground está listo para usar"
else
    echo ""
    echo "⚠️  ALGUNAS PRUEBAS FALLARON"
    echo "   Revisa la configuración del backend"
    echo "   Verifica que el endpoint /playground/validate esté funcionando"
fi

echo ""
echo "🔗 Accede al playground en: http://localhost:8080"
echo "   Pestaña: Playground" 