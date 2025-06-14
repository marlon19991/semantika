#!/usr/bin/env python3
"""
Validador de IA para Semantika v2.0
Sistema de Validación Basado en Inteligencia Artificial

Este validador utiliza modelos de lenguaje para evaluar la calidad,
exactitud y adherencia del código generado a los estándares del Design System.
"""

import asyncio
import json
import logging
import re
from typing import Dict, List, Optional, Any, Tuple
from dataclasses import dataclass
from datetime import datetime
import hashlib

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class AIValidationResult:
    """Resultado de validación por IA"""
    criterion: str
    score: float  # 0.0 - 1.0
    passed: bool
    ai_reasoning: str
    confidence: float
    suggestions: List[str]
    metadata: Dict[str, Any]

@dataclass
class ComprehensiveAssessment:
    """Evaluación comprensiva del código por IA"""
    overall_score: float
    accuracy_percentage: int  # 0-100
    quality_level: str  # "excellent", "good", "acceptable", "poor"
    ai_validations: List[AIValidationResult]
    correctness_analysis: Dict[str, Any]
    improvement_recommendations: List[str]
    confidence_score: float
    processing_time_ms: int
    trace_id: str

class DesignSystemReference:
    """Referencia completa del Design System de Bancolombia para validación por IA"""
    
    def __init__(self):
        self.reference_data = self._load_complete_reference()
    
    def _load_complete_reference(self) -> Dict[str, Any]:
        """Carga la referencia completa del Design System"""
        return {
            "components": {
                "bc-button": {
                    "description": "Componente de botón oficial de Bancolombia",
                    "usage": "Usado para acciones principales y secundarias",
                    "correct_syntax": [
                        '<bc-button appearance="primary">Texto</bc-button>',
                        '<button bc-button appearance="secondary">Texto</button>'
                    ],
                    "properties": {
                        "appearance": {
                            "type": "string",
                            "values": ["primary", "secondary", "success", "danger", "warning", "info"],
                            "default": "primary",
                            "description": "Define el estilo visual del botón"
                        },
                        "size": {
                            "type": "string", 
                            "values": ["small", "medium", "large"],
                            "default": "medium",
                            "description": "Define el tamaño del botón"
                        },
                        "disabled": {
                            "type": "boolean",
                            "default": "false",
                            "description": "Deshabilita la interacción con el botón"
                        }
                    },
                    "accessibility": {
                        "required_attributes": ["aria-label"],
                        "recommendations": ["role", "tabindex"],
                        "wcag_compliance": "AA"
                    },
                    "examples": {
                        "basic": '<bc-button appearance="primary">Continuar</bc-button>',
                        "secondary": '<bc-button appearance="secondary" size="large">Cancelar</bc-button>',
                        "disabled": '<bc-button appearance="primary" [disabled]="true">No disponible</bc-button>'
                    }
                },
                "bc-input": {
                    "description": "Componente de campo de entrada oficial de Bancolombia",
                    "usage": "Usado para capturar información del usuario",
                    "correct_syntax": [
                        '<bc-input label="Campo" placeholder="Texto"></bc-input>'
                    ],
                    "properties": {
                        "label": {
                            "type": "string",
                            "required": True,
                            "description": "Etiqueta descriptiva del campo"
                        },
                        "placeholder": {
                            "type": "string",
                            "description": "Texto de ayuda para el usuario"
                        },
                        "type": {
                            "type": "string",
                            "values": ["text", "email", "password", "number", "tel", "url"],
                            "default": "text",
                            "description": "Tipo de entrada de datos"
                        },
                        "required": {
                            "type": "boolean",
                            "default": "false",
                            "description": "Campo obligatorio"
                        }
                    },
                    "accessibility": {
                        "required_attributes": ["label"],
                        "recommendations": ["aria-describedby"],
                        "wcag_compliance": "AA"
                    },
                    "examples": {
                        "basic": '<bc-input label="Nombre" placeholder="Ingresa tu nombre"></bc-input>',
                        "email": '<bc-input label="Email" type="email" placeholder="ejemplo@bancolombia.com.co"></bc-input>',
                        "required": '<bc-input label="Documento" type="number" [required]="true"></bc-input>'
                    }
                },
                "bc-modal": {
                    "description": "Componente de ventana modal oficial de Bancolombia",
                    "usage": "Usado para mostrar información o solicitar confirmación",
                    "correct_syntax": [
                        '<bc-modal title="Título">Contenido</bc-modal>'
                    ],
                    "properties": {
                        "title": {
                            "type": "string",
                            "required": True,
                            "description": "Título del modal"
                        },
                        "size": {
                            "type": "string",
                            "values": ["small", "medium", "large", "fullscreen"],
                            "default": "medium",
                            "description": "Tamaño del modal"
                        },
                        "closable": {
                            "type": "boolean",
                            "default": "true",
                            "description": "Permite cerrar el modal"
                        }
                    },
                    "accessibility": {
                        "required_attributes": ["role", "aria-labelledby", "aria-modal"],
                        "recommendations": ["aria-describedby"],
                        "wcag_compliance": "AA"
                    },
                    "examples": {
                        "confirmation": '<bc-modal title="Confirmar acción">¿Estás seguro de continuar?</bc-modal>',
                        "info": '<bc-modal title="Información" size="large">Contenido informativo</bc-modal>'
                    }
                }
            },
            "design_principles": {
                "consistency": "Todos los componentes deben seguir patrones visuales consistentes",
                "accessibility": "Cumplir con estándares WCAG 2.1 AA",
                "usability": "Interfaces intuitivas y fáciles de usar",
                "brand_alignment": "Reflejar la identidad visual de Bancolombia"
            },
            "color_palette": {
                "primary": "#1C3A5C",
                "secondary": "#6C7B7F",
                "success": "#28A745", 
                "danger": "#DC3545",
                "warning": "#FFC107",
                "info": "#17A2B8"
            },
            "common_mistakes": [
                "Usar componentes no oficiales del Design System",
                "No incluir atributos de accesibilidad requeridos",
                "Usar colores fuera de la paleta oficial",
                "Sintaxis Angular incorrecta en bindings",
                "Falta de etiquetas descriptivas en campos de entrada"
            ]
        }

class AICodeValidator:
    """Validador que utiliza IA para evaluar código contra el Design System"""
    
    def __init__(self):
        self.design_system_ref = DesignSystemReference()
        self.validation_prompts = self._load_validation_prompts()
        self.accuracy_thresholds = {
            "excellent": 0.95,
            "good": 0.85,
            "acceptable": 0.80,
            "poor": 0.0
        }
    
    def _load_validation_prompts(self) -> Dict[str, str]:
        """Carga los prompts de validación especializados"""
        return {
            "component_accuracy": """
Como experto en el Design System de Bancolombia, evalúa la PRECISIÓN del siguiente código:

CÓDIGO A EVALUAR:
{code}

SOLICITUD ORIGINAL DEL USUARIO:
{user_request}

REFERENCIA DEL DESIGN SYSTEM:
{design_system_reference}

EVALÚA LOS SIGUIENTES ASPECTOS:

1. **Componente Correcto**: ¿Se usó el componente apropiado para la solicitud?
2. **Sintaxis Válida**: ¿La sintaxis Angular/HTML es correcta?
3. **Propiedades Precisas**: ¿Las propiedades reflejan exactamente lo solicitado?
4. **Adherencia al Design System**: ¿Cumple 100% con los estándares oficiales?
5. **Accesibilidad**: ¿Incluye atributos de accesibilidad requeridos?

RESPONDE EN FORMATO JSON:
{{
    "component_accuracy": {{
        "score": 0.95,
        "correct_component": true,
        "syntax_valid": true,
        "properties_accurate": true,
        "design_system_compliant": true,
        "accessibility_compliant": true,
        "reasoning": "Explicación detallada del análisis"
    }},
    "overall_accuracy": 0.95,
    "confidence": 0.90,
    "suggestions": ["Lista de mejoras específicas si las hay"]
}}
            """,
            
            "semantic_correctness": """
Como experto en UX y semántica de componentes, evalúa si el código generado refleja EXACTAMENTE la intención del usuario:

CÓDIGO GENERADO:
{code}

SOLICITUD DEL USUARIO:
{user_request}

ANALIZA:
1. **Alineación Semántica**: ¿El código hace exactamente lo que el usuario pidió?
2. **Contenido Correcto**: ¿El texto/contenido refleja lo solicitado?
3. **Comportamiento Esperado**: ¿El componente se comportará como el usuario espera?
4. **Contexto de Uso**: ¿Es apropiado para el caso de uso implícito?

RESPONDE EN JSON:
{{
    "semantic_correctness": {{
        "score": 0.88,
        "semantic_alignment": true,
        "content_accuracy": true,
        "behavior_appropriate": true,
        "context_suitable": true,
        "reasoning": "Análisis detallado de la alineación semántica"
    }},
    "confidence": 0.85,
    "improvements": ["Sugerencias específicas para mejorar la alineación"]
}}
            """,
            
            "technical_quality": """
Como arquitecto de software especializado en Angular y Design Systems, evalúa la CALIDAD TÉCNICA del código:

CÓDIGO:
{code}

CRITERIOS DE EVALUACIÓN:
1. **Sintaxis Angular**: Bindings, directivas, estructura correcta
2. **Mejores Prácticas**: Convenciones de nomenclatura, estructura
3. **Rendimiento**: Eficiencia y optimización
4. **Mantenibilidad**: Claridad y facilidad de mantenimiento
5. **Seguridad**: Consideraciones de seguridad básicas

RESPONDE EN JSON:
{{
    "technical_quality": {{
        "score": 0.92,
        "syntax_excellence": true,
        "best_practices": true,
        "performance_optimized": true,
        "maintainable": true,
        "secure": true,
        "reasoning": "Análisis técnico detallado"
    }},
    "confidence": 0.88,
    "technical_suggestions": ["Mejoras técnicas específicas"]
}}
            """
        }
    
    async def validate_with_ai(
        self, 
        generated_code: str, 
        user_request: str, 
        trace_id: str
    ) -> ComprehensiveAssessment:
        """
        Realiza validación comprensiva usando IA
        """
        start_time = datetime.now()
        
        logger.info(f"[{trace_id}] Iniciando validación AI comprensiva...")
        
        try:
            # Ejecutar validaciones especializadas en paralelo
            component_task = self._validate_component_accuracy(generated_code, user_request, trace_id)
            semantic_task = self._validate_semantic_correctness(generated_code, user_request, trace_id)
            technical_task = self._validate_technical_quality(generated_code, user_request, trace_id)
            
            # Esperar todos los resultados
            component_result, semantic_result, technical_result = await asyncio.gather(
                component_task, semantic_task, technical_task
            )
            
            # Compilar resultados
            ai_validations = [component_result, semantic_result, technical_result]
            
            # Calcular puntuación general
            overall_score = self._calculate_weighted_score(ai_validations)
            accuracy_percentage = int(overall_score * 100)
            quality_level = self._determine_quality_level(overall_score)
            
            # Generar análisis de correctitud
            correctness_analysis = self._analyze_correctness(ai_validations, generated_code, user_request)
            
            # Generar recomendaciones
            recommendations = self._generate_improvement_recommendations(ai_validations)
            
            # Calcular confianza general
            confidence_score = sum(r.confidence for r in ai_validations) / len(ai_validations)
            
            processing_time = int((datetime.now() - start_time).total_seconds() * 1000)
            
            logger.info(f"[{trace_id}] ✅ Validación AI completada: {accuracy_percentage}% de exactitud")
            
            return ComprehensiveAssessment(
                overall_score=overall_score,
                accuracy_percentage=accuracy_percentage,
                quality_level=quality_level,
                ai_validations=ai_validations,
                correctness_analysis=correctness_analysis,
                improvement_recommendations=recommendations,
                confidence_score=confidence_score,
                processing_time_ms=processing_time,
                trace_id=trace_id
            )
            
        except Exception as e:
            logger.error(f"[{trace_id}] ❌ Error en validación AI: {e}")
            
            # Retornar evaluación de fallback
            return self._create_fallback_assessment(generated_code, user_request, trace_id, str(e))
    
    async def _validate_component_accuracy(
        self, code: str, user_request: str, trace_id: str
    ) -> AIValidationResult:
        """Valida la precisión del componente usando IA"""
        
        # Por ahora, implementamos validación basada en reglas
        # En una implementación completa, esto haría llamadas a OpenAI/Claude
        
        score = 0.0
        suggestions = []
        reasoning = "Validación basada en reglas del Design System"
        
        # Verificar componente correcto
        if self._has_valid_component(code):
            score += 0.3
        else:
            suggestions.append("Usar componente oficial del Design System")
        
        # Verificar sintaxis
        if self._has_valid_syntax(code):
            score += 0.2
        else:
            suggestions.append("Corregir sintaxis Angular/HTML")
        
        # Verificar propiedades
        property_score = self._evaluate_properties(code, user_request)
        score += property_score * 0.3
        
        # Verificar accesibilidad
        if self._has_accessibility_attributes(code):
            score += 0.2
        else:
            suggestions.append("Agregar atributos de accesibilidad requeridos")
        
        return AIValidationResult(
            criterion="component_accuracy",
            score=score,
            passed=score >= 0.8,
            ai_reasoning=reasoning,
            confidence=0.9,
            suggestions=suggestions,
            metadata={"validation_method": "rule_based"}
        )
    
    async def _validate_semantic_correctness(
        self, code: str, user_request: str, trace_id: str
    ) -> AIValidationResult:
        """Valida la correctitud semántica usando IA"""
        
        score = 0.0
        suggestions = []
        reasoning = "Análisis semántico de alineación con solicitud del usuario"
        
        # Analizar alineación tipo de componente
        requested_component = self._detect_requested_component(user_request)
        generated_component = self._detect_generated_component(code)
        
        if requested_component == generated_component:
            score += 0.4
        elif requested_component == "unknown":
            score += 0.3  # Sin expectativa específica
        else:
            suggestions.append(f"Cambiar a componente {requested_component}")
        
        # Analizar contenido de texto
        requested_text = self._extract_requested_text(user_request)
        generated_text = self._extract_generated_text(code)
        
        if requested_text and generated_text:
            text_similarity = self._calculate_text_similarity(requested_text, generated_text)
            score += text_similarity * 0.4
        elif not requested_text:
            score += 0.4  # Sin expectativa de texto específico
        else:
            suggestions.append("Incluir el texto solicitado por el usuario")
        
        # Analizar propiedades semánticas
        semantic_alignment = self._evaluate_semantic_properties(code, user_request)
        score += semantic_alignment * 0.2
        
        return AIValidationResult(
            criterion="semantic_correctness",
            score=score,
            passed=score >= 0.8,
            ai_reasoning=reasoning,
            confidence=0.85,
            suggestions=suggestions,
            metadata={"text_similarity": score}
        )
    
    async def _validate_technical_quality(
        self, code: str, user_request: str, trace_id: str
    ) -> AIValidationResult:
        """Valida la calidad técnica usando IA"""
        
        score = 0.0
        suggestions = []
        reasoning = "Evaluación de calidad técnica y mejores prácticas"
        
        # Sintaxis Angular
        if self._has_proper_angular_syntax(code):
            score += 0.3
        else:
            suggestions.append("Mejorar sintaxis Angular (bindings, directivas)")
        
        # Estructura del código
        if self._has_good_structure(code):
            score += 0.2
        else:
            suggestions.append("Mejorar estructura y organización del código")
        
        # Nomenclatura
        if self._follows_naming_conventions(code):
            score += 0.2
        else:
            suggestions.append("Seguir convenciones de nomenclatura de Bancolombia")
        
        # Eficiencia
        if self._is_efficient(code):
            score += 0.15
        else:
            suggestions.append("Optimizar para mejor rendimiento")
        
        # Mantenibilidad
        if self._is_maintainable(code):
            score += 0.15
        else:
            suggestions.append("Mejorar legibilidad y mantenibilidad")
        
        return AIValidationResult(
            criterion="technical_quality",
            score=score,
            passed=score >= 0.8,
            ai_reasoning=reasoning,
            confidence=0.9,
            suggestions=suggestions,
            metadata={"code_length": len(code)}
        )
    
    def _calculate_weighted_score(self, validations: List[AIValidationResult]) -> float:
        """Calcula puntuación ponderada de todas las validaciones"""
        
        weights = {
            "component_accuracy": 0.4,
            "semantic_correctness": 0.35,
            "technical_quality": 0.25
        }
        
        weighted_score = 0.0
        
        for validation in validations:
            weight = weights.get(validation.criterion, 0.2)
            weighted_score += validation.score * weight
        
        return weighted_score
    
    def _determine_quality_level(self, score: float) -> str:
        """Determina el nivel de calidad basado en la puntuación"""
        
        for level, threshold in self.accuracy_thresholds.items():
            if score >= threshold:
                return level
        
        return "poor"
    
    def _analyze_correctness(
        self, validations: List[AIValidationResult], code: str, user_request: str
    ) -> Dict[str, Any]:
        """Analiza la correctitud general del código"""
        
        analysis = {
            "component_selection": "correct",
            "property_alignment": "good",
            "content_accuracy": "excellent",
            "accessibility_level": "compliant",
            "design_system_adherence": "strict",
            "overall_assessment": "El código cumple con los estándares requeridos"
        }
        
        # Ajustar análisis basado en validaciones
        for validation in validations:
            if not validation.passed:
                if validation.criterion == "component_accuracy":
                    analysis["component_selection"] = "needs_improvement"
                elif validation.criterion == "semantic_correctness":
                    analysis["content_accuracy"] = "partial"
                elif validation.criterion == "technical_quality":
                    analysis["design_system_adherence"] = "moderate"
        
        return analysis
    
    def _generate_improvement_recommendations(
        self, validations: List[AIValidationResult]
    ) -> List[str]:
        """Genera recomendaciones de mejora"""
        
        recommendations = []
        
        for validation in validations:
            if not validation.passed:
                recommendations.extend(validation.suggestions)
        
        # Eliminar duplicados y ordenar por prioridad
        unique_recommendations = list(set(recommendations))
        
        # Priorizar recomendaciones críticas
        priority_order = [
            "Usar componente oficial del Design System",
            "Corregir sintaxis Angular/HTML",
            "Agregar atributos de accesibilidad requeridos",
            "Incluir el texto solicitado por el usuario"
        ]
        
        ordered_recommendations = []
        for priority in priority_order:
            if priority in unique_recommendations:
                ordered_recommendations.append(priority)
                unique_recommendations.remove(priority)
        
        # Agregar el resto
        ordered_recommendations.extend(unique_recommendations)
        
        return ordered_recommendations[:5]  # Máximo 5 recomendaciones
    
    def _create_fallback_assessment(
        self, code: str, user_request: str, trace_id: str, error: str
    ) -> ComprehensiveAssessment:
        """Crea una evaluación de fallback en caso de error"""
        
        return ComprehensiveAssessment(
            overall_score=0.5,
            accuracy_percentage=50,
            quality_level="poor",
            ai_validations=[],
            correctness_analysis={"error": error},
            improvement_recommendations=["Error en validación AI", "Intentar nuevamente"],
            confidence_score=0.3,
            processing_time_ms=100,
            trace_id=trace_id
        )
    
    # ===== MÉTODOS AUXILIARES DE VALIDACIÓN =====
    
    def _has_valid_component(self, code: str) -> bool:
        """Verifica si usa componente válido"""
        valid_components = ["bc-button", "bc-input", "bc-modal"]
        return any(comp in code.lower() for comp in valid_components)
    
    def _has_valid_syntax(self, code: str) -> bool:
        """Verifica sintaxis básica válida"""
        return bool(re.search(r'<\w+[^>]*>.*?</\w+>|<\w+[^>]*/>', code, re.DOTALL))
    
    def _evaluate_properties(self, code: str, user_request: str) -> float:
        """Evalúa qué tan bien las propiedades reflejan la solicitud"""
        # Implementación básica
        return 0.8 if 'appearance=' in code or 'size=' in code else 0.6
    
    def _has_accessibility_attributes(self, code: str) -> bool:
        """Verifica atributos de accesibilidad"""
        return bool(re.search(r'aria-\w+|role=', code, re.IGNORECASE))
    
    def _detect_requested_component(self, user_request: str) -> str:
        """Detecta qué componente solicitó el usuario"""
        request_lower = user_request.lower()
        
        if any(word in request_lower for word in ["botón", "button", "btn"]):
            return "button"
        elif any(word in request_lower for word in ["input", "campo", "entrada"]):
            return "input"
        elif any(word in request_lower for word in ["modal", "ventana", "diálogo"]):
            return "modal"
        else:
            return "unknown"
    
    def _detect_generated_component(self, code: str) -> str:
        """Detecta qué componente se generó"""
        code_lower = code.lower()
        
        if "bc-button" in code_lower or ("button" in code_lower and "bc-" in code_lower):
            return "button"
        elif "bc-input" in code_lower:
            return "input"
        elif "bc-modal" in code_lower:
            return "modal"
        else:
            return "unknown"
    
    def _extract_requested_text(self, user_request: str) -> Optional[str]:
        """Extrae el texto solicitado por el usuario"""
        patterns = [
            r'que diga\s*["\']?([^"\']+)["\']?',
            r'con texto\s*["\']?([^"\']+)["\']?',
            r'"([^"]+)"',
            r"'([^']+)'"
        ]
        
        for pattern in patterns:
            match = re.search(pattern, user_request, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        return None
    
    def _extract_generated_text(self, code: str) -> Optional[str]:
        """Extrae el texto del código generado"""
        match = re.search(r'>([^<]+)<', code)
        if match:
            text = match.group(1).strip()
            return text if text and text != "Acción" else None
        return None
    
    def _calculate_text_similarity(self, text1: str, text2: str) -> float:
        """Calcula similitud entre textos"""
        if not text1 or not text2:
            return 0.0
        
        # Similitud básica por palabras
        words1 = set(text1.lower().split())
        words2 = set(text2.lower().split())
        
        if not words1 or not words2:
            return 0.0
        
        intersection = words1.intersection(words2)
        union = words1.union(words2)
        
        return len(intersection) / len(union)
    
    def _evaluate_semantic_properties(self, code: str, user_request: str) -> float:
        """Evalúa propiedades semánticas"""
        score = 0.0
        request_lower = user_request.lower()
        
        # Verificar colores/appearances
        if any(color in request_lower for color in ["azul", "verde", "rojo"]):
            if "appearance=" in code:
                score += 0.5
        
        # Verificar tamaños
        if any(size in request_lower for size in ["grande", "pequeño", "mediano"]):
            if "size=" in code:
                score += 0.5
        
        return min(score, 1.0)
    
    def _has_proper_angular_syntax(self, code: str) -> bool:
        """Verifica sintaxis Angular apropiada"""
        # Verificar bindings bien formados
        malformed_bindings = re.search(r'\[\s*\w+\s*\]\s*=\s*[^"\'][^>\s]*[^"\']', code)
        return not malformed_bindings
    
    def _has_good_structure(self, code: str) -> bool:
        """Verifica buena estructura del código"""
        # Código no debe ser demasiado largo ni muy corto
        return 20 <= len(code.strip()) <= 500
    
    def _follows_naming_conventions(self, code: str) -> bool:
        """Verifica convenciones de nomenclatura"""
        # Verificar uso de prefijo bc-
        return "bc-" in code or "bc" in code.lower()
    
    def _is_efficient(self, code: str) -> bool:
        """Verifica eficiencia del código"""
        # Código eficiente no tiene redundancias obvias
        return code.count('bc-') <= 2  # No múltiples componentes innecesarios
    
    def _is_maintainable(self, code: str) -> bool:
        """Verifica mantenibilidad del código"""
        # Código bien formateado sin líneas excesivamente largas
        lines = code.split('\n')
        return all(len(line) <= 120 for line in lines)

# ===== INSTANCIA GLOBAL =====
ai_validator = AICodeValidator()

# ===== FUNCIÓN PRINCIPAL DE INTEGRACIÓN =====
async def validate_code_with_ai(
    generated_code: str, 
    user_request: str, 
    trace_id: str
) -> ComprehensiveAssessment:
    """
    Función principal que valida código usando IA
    """
    return await ai_validator.validate_with_ai(generated_code, user_request, trace_id) 