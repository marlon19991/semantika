#!/usr/bin/env python3
"""
Script de Pruebas del Sistema de Control de Calidad de Semantika v2.0

Este script demuestra cómo el sistema de validación automática
asegura que cada respuesta tenga al menos 80% de exactitud.
"""

import asyncio
import json
import sys
import os

# Agregar el directorio del servicio al path
sys.path.append('services/llm-service/app')

from services.quality_control_system import validate_and_ensure_quality

async def test_quality_control():
    """Prueba el sistema de control de calidad con diferentes casos"""
    
    print("🚀 INICIANDO PRUEBAS DEL SISTEMA DE CONTROL DE CALIDAD")
    print("=" * 70)
    
    # Casos de prueba
    test_cases = [
        {
            "name": "Código de baja calidad - Sin atributos",
            "code": '<button>Acción</button>',
            "user_request": "botón azul grande que diga Confirmar",
            "expected_improvements": ["componente válido", "propiedades", "accesibilidad"]
        },
        {
            "name": "Código de calidad media - Componente correcto pero incompleto",
            "code": '<bc-button>Enviar</bc-button>',
            "user_request": "botón verde pequeño que diga Enviar",
            "expected_improvements": ["propiedades", "accesibilidad"]
        },
        {
            "name": "Código de alta calidad - Completo y correcto",
            "code": '<bc-button appearance="success" size="small" aria-label="Botón Enviar">Enviar</bc-button>',
            "user_request": "botón verde pequeño que diga Enviar",
            "expected_improvements": []
        },
        {
            "name": "Input sin label - Error crítico",
            "code": '<input type="text" placeholder="Nombre">',
            "user_request": "campo de texto para el nombre",
            "expected_improvements": ["componente válido", "accesibilidad", "sintaxis"]
        },
        {
            "name": "Código con errores sintácticos",
            "code": '<bc-button appearance=primary size=large>Confirmar</bc-button>',
            "user_request": "botón primario grande",
            "expected_improvements": ["sintaxis"]
        }
    ]
    
    # Ejecutar pruebas
    for i, test_case in enumerate(test_cases, 1):
        print(f"\n📋 PRUEBA {i}: {test_case['name']}")
        print("-" * 50)
        
        print(f"💻 Código original:")
        print(f"   {test_case['code']}")
        
        print(f"👤 Solicitud del usuario:")
        print(f"   {test_case['user_request']}")
        
        # Ejecutar validación
        trace_id = f"test-{i:03d}"
        
        try:
            print(f"\n🎯 Ejecutando control de calidad...")
            
            quality_assessment = await validate_and_ensure_quality(
                test_case['code'],
                test_case['user_request'],
                trace_id
            )
            
            # Mostrar resultados
            print(f"\n📊 RESULTADOS:")
            print(f"   Puntuación general: {quality_assessment.accuracy_percentage}%")
            print(f"   ¿Cumple umbral 80%?: {'✅ SÍ' if quality_assessment.passed else '❌ NO'}")
            print(f"   Nivel de confianza: {quality_assessment.confidence_level}")
            print(f"   Iteraciones realizadas: {quality_assessment.iteration_count}")
            print(f"   ¿Se mejoró el código?: {'✅ SÍ' if quality_assessment.improvement_applied else '❌ NO'}")
            
            if quality_assessment.improvement_applied:
                print(f"\n🔧 Código mejorado:")
                print(f"   {quality_assessment.final_code}")
            
            # Mostrar validaciones detalladas
            print(f"\n🔍 Validaciones detalladas:")
            for vr in quality_assessment.validation_results:
                status = "✅" if vr.passed else "❌"
                print(f"   {status} {vr.criterion}: {vr.score:.2f} ({vr.score*100:.0f}%)")
                if vr.suggestions:
                    print(f"      Sugerencias: {', '.join(vr.suggestions)}")
            
            print(f"\n⏱️ Tiempo de procesamiento: {quality_assessment.processing_time_ms}ms")
            
            # Verificar expectativas
            if quality_assessment.passed:
                print(f"🎉 ¡ÉXITO! El código alcanzó el estándar de calidad del 80%")
            else:
                print(f"⚠️ ADVERTENCIA: No se alcanzó el 80% después de {quality_assessment.iteration_count} iteraciones")
            
        except Exception as e:
            print(f"❌ ERROR en la prueba: {e}")
        
        print("=" * 70)
    
    print("\n🏁 PRUEBAS COMPLETADAS")
    print("\n📋 RESUMEN DEL SISTEMA DE CONTROL DE CALIDAD:")
    print("   • Valida automáticamente cada código generado")
    print("   • Asegura mínimo 80% de exactitud")
    print("   • Refina iterativamente hasta 3 intentos")
    print("   • Verifica adherencia al Design System de Bancolombia")
    print("   • Garantiza cumplimiento de accesibilidad")

async def test_interactive_validation():
    """Prueba interactiva del sistema"""
    
    print("\n🎮 MODO INTERACTIVO - Ingresa tu propio código para validar")
    print("=" * 60)
    
    while True:
        print("\n💻 Ingresa el código a validar (o 'quit' para salir):")
        code = input("> ")
        
        if code.lower() in ['quit', 'exit', 'q']:
            break
        
        if not code.strip():
            continue
        
        print("👤 Ingresa la solicitud original del usuario (opcional):")
        user_request = input("> ") or "Validar código existente"
        
        try:
            trace_id = "interactive-test"
            
            print(f"\n🎯 Validando código...")
            
            quality_assessment = await validate_and_ensure_quality(
                code, user_request, trace_id
            )
            
            print(f"\n📊 RESULTADO: {quality_assessment.accuracy_percentage}% de exactitud")
            print(f"   Estado: {'✅ APROBADO' if quality_assessment.passed else '❌ NECESITA MEJORAS'}")
            
            if quality_assessment.improvement_applied:
                print(f"\n🔧 Código mejorado:")
                print(f"   {quality_assessment.final_code}")
            
            print(f"\n🔍 Detalles:")
            for vr in quality_assessment.validation_results:
                status = "✅" if vr.passed else "❌"
                print(f"   {status} {vr.criterion}: {vr.score*100:.0f}%")
            
        except Exception as e:
            print(f"❌ Error: {e}")
    
    print("\n👋 ¡Hasta luego!")

if __name__ == "__main__":
    print("🎯 SISTEMA DE CONTROL DE CALIDAD SEMANTIKA v2.0")
    print("Validación automática hasta 80% de exactitud mínima")
    print("=" * 70)
    
    # Menú principal
    print("\nSelecciona el tipo de prueba:")
    print("1. Pruebas automáticas (casos predefinidos)")
    print("2. Prueba interactiva (ingresa tu código)")
    print("3. Ambas")
    
    choice = input("\nTu elección (1/2/3): ").strip()
    
    if choice in ['1', '3']:
        print("\n🤖 Ejecutando pruebas automáticas...")
        asyncio.run(test_quality_control())
    
    if choice in ['2', '3']:
        print("\n🎮 Iniciando modo interactivo...")
        asyncio.run(test_interactive_validation())
    
    if choice not in ['1', '2', '3']:
        print("❌ Opción no válida") 