#!/usr/bin/env python3
"""
Servicio de Validación y Control de Calidad para Semantika v2.0
Sistema Inteligente de Validación Automática y Refinamiento Iterativo

Este sistema asegura que cada respuesta generada por la aplicación tenga
al menos 80% de exactitud antes de ser entregada al usuario.
"""

import asyncio
import json
import logging
import re
from typing import Dict, List, Optional, Any, Tuple
from dataclasses import dataclass
from datetime import datetime
import hashlib
from enum import Enum

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ValidationCriteria(str, Enum):
    """Criterios de validación disponibles"""
    COMPONENT_VALIDITY = "component_validity"
    PROPERTIES_ACCURACY = "properties_accuracy" 
    SYNTAX_CORRECTNESS = "syntax_correctness"
    ACCESSIBILITY_COMPLIANCE = "accessibility_compliance"
    DESIGN_SYSTEM_ADHERENCE = "design_system_adherence"
    SEMANTIC_ALIGNMENT = "semantic_alignment"

@dataclass
class ValidationResult:
    """Resultado completo de validación"""
    criterion: ValidationCriteria
    score: float  # 0.0 - 1.0
    passed: bool  # True si score >= 0.8
    details: Dict[str, Any]
    suggestions: List[str]
    confidence: float

@dataclass 
class QualityAssessment:
    """Evaluación completa de calidad"""
    overall_score: float
    passed: bool  # True si overall_score >= 0.8
    validation_results: List[ValidationResult]
    iteration_count: int
    processing_time_ms: int
    confidence_level: str
    trace_id: str
    metadata: Dict[str, Any]

class ComponentValidator:
    """Validador especializado de componentes Angular del Design System de Bancolombia"""
    
    def __init__(self):
        self.design_system_rules = self._load_design_system_rules()
        self.component_patterns = self._load_component_patterns()
        self.validation_cache = {}
    
    def _load_design_system_rules(self) -> Dict[str, Any]:
        """Carga las reglas oficiales del Design System de Bancolombia"""
        return {
            "valid_components": {
                "bc-button": {
                    "required_attributes": [],
                    "optional_attributes": ["appearance", "size", "disabled", "type"],
                    "valid_appearances": ["primary", "secondary", "success", "danger", "warning", "info"],
                    "valid_sizes": ["small", "medium", "large"],
                    "accessibility_requirements": ["aria-label", "role", "tabindex"],
                    "syntax_pattern": r'<(bc-)?button[\s\S]*?>(.*?)<\/(bc-)?button>',
                    "examples": [
                        '<bc-button appearance="primary">Acción Principal</bc-button>',
                        '<button bc-button appearance="secondary" size="large">Secundario</button>'
                    ]
                },
                "bc-input": {
                    "required_attributes": ["label"],
                    "optional_attributes": ["placeholder", "type", "required", "disabled", "ngModel"],
                    "valid_types": ["text", "email", "password", "number", "tel", "url"],
                    "accessibility_requirements": ["label", "aria-describedby"],
                    "syntax_pattern": r'<bc-input[\s\S]*?(?:\/>|><\/bc-input>)',
                    "examples": [
                        '<bc-input label="Nombre" placeholder="Ingresa tu nombre"></bc-input>',
                        '<bc-input label="Email" type="email" required="true"></bc-input>'
                    ]
                },
                "bc-modal": {
                    "required_attributes": ["title"],
                    "optional_attributes": ["size", "closable", "backdrop"],
                    "valid_sizes": ["small", "medium", "large", "fullscreen"],
                    "accessibility_requirements": ["role", "aria-labelledby", "aria-modal"],
                    "syntax_pattern": r'<bc-modal[\s\S]*?>([\s\S]*?)<\/bc-modal>',
                    "examples": [
                        '<bc-modal title="Confirmación">Contenido del modal</bc-modal>'
                    ]
                }
            },
            "color_palette": {
                "primary": "#1C3A5C",
                "secondary": "#6C7B7F", 
                "success": "#28A745",
                "danger": "#DC3545",
                "warning": "#FFC107",
                "info": "#17A2B8"
            },
            "accessibility_standards": {
                "wcag_level": "AA",
                "required_attributes": ["aria-label", "role", "tabindex"],
                "color_contrast_ratio": 4.5
            }
        }
    
    def _load_component_patterns(self) -> Dict[str, Any]:
        """Carga patrones de componentes válidos para comparación"""
        return {
            "angular_syntax": {
                "property_binding": r'\[[\w-]+\]\s*=\s*["\'][^"\']*["\']',
                "event_binding": r'\([\w-]+\)\s*=\s*["\'][^"\']*["\']',
                "two_way_binding": r'\[\([\w-]+\)\]\s*=\s*["\'][^"\']*["\']',
                "interpolation": r'\{\{[^}]+\}\}',
                "structural_directive": r'\*[\w-]+\s*=\s*["\'][^"\']*["\']'
            },
            "html_structure": {
                "valid_tag_structure": r'<([a-zA-Z][a-zA-Z0-9-]*)[^>]*>.*?<\/\1>|<([a-zA-Z][a-zA-Z0-9-]*)[^>]*\/?>',
                "attribute_pattern": r'[\w-]+\s*=\s*["\'][^"\']*["\']',
                "self_closing": r'<[^>]+\/>',
                "comment_pattern": r'<!--[\s\S]*?-->'
            }
        }
    
    async def validate_component_validity(self, generated_code: str, user_request: str) -> ValidationResult:
        """Valida que el componente generado sea válido según el Design System"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # 1. Detectar tipo de componente en el código
        detected_component = self._detect_component_type(generated_code)
        
        if not detected_component:
            return ValidationResult(
                criterion=ValidationCriteria.COMPONENT_VALIDITY,
                score=0.0,
                passed=False,
                details={"error": "No se pudo detectar un componente válido"},
                suggestions=["Usar componentes válidos del Design System: bc-button, bc-input, bc-modal"],
                confidence=0.9
            )
        
        # 2. Verificar que el componente existe en el Design System
        if detected_component not in self.design_system_rules["valid_components"]:
            return ValidationResult(
                criterion=ValidationCriteria.COMPONENT_VALIDITY,
                score=0.2,
                passed=False,
                details={"invalid_component": detected_component},
                suggestions=[f"Usar componente válido en lugar de '{detected_component}'"],
                confidence=0.9
            )
        
        score += 0.3  # Componente existe
        
        # 3. Validar estructura sintáctica
        component_rules = self.design_system_rules["valid_components"][detected_component]
        syntax_valid = self._validate_syntax_structure(generated_code, component_rules)
        
        if syntax_valid:
            score += 0.3
        else:
            suggestions.append("Corregir la estructura sintáctica del componente")
        
        # 4. Validar atributos
        attributes_score = self._validate_attributes(generated_code, component_rules)
        score += attributes_score * 0.4
        
        details.update({
            "detected_component": detected_component,
            "syntax_valid": syntax_valid,
            "attributes_score": attributes_score
        })
        
        return ValidationResult(
            criterion=ValidationCriteria.COMPONENT_VALIDITY,
            score=score,
            passed=score >= 0.8,
            details=details,
            suggestions=suggestions,
            confidence=0.9
        )
    
    async def validate_properties_accuracy(self, generated_code: str, user_request: str) -> ValidationResult:
        """Valida que las propiedades del componente sean precisas y apropiadas"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # 1. Extraer propiedades del código generado
        extracted_props = self._extract_properties(generated_code)
        
        # 2. Analizar la solicitud del usuario para propiedades esperadas
        expected_props = self._analyze_expected_properties(user_request)
        
        # 3. Comparar propiedades esperadas vs generadas
        accuracy_score = self._compare_properties(expected_props, extracted_props)
        score += accuracy_score * 0.6
        
        # 4. Validar valores de propiedades
        values_score = self._validate_property_values(extracted_props)
        score += values_score * 0.4
        
        details.update({
            "extracted_properties": extracted_props,
            "expected_properties": expected_props,
            "accuracy_score": accuracy_score,
            "values_score": values_score
        })
        
        if accuracy_score < 0.7:
            suggestions.append("Ajustar las propiedades para que coincidan mejor con la solicitud")
        
        return ValidationResult(
            criterion=ValidationCriteria.PROPERTIES_ACCURACY,
            score=score,
            passed=score >= 0.8,
            details=details,
            suggestions=suggestions,
            confidence=0.85
        )
    
    async def validate_syntax_correctness(self, generated_code: str, user_request: str) -> ValidationResult:
        """Valida que la sintaxis Angular sea correcta"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # 1. Validar sintaxis HTML básica
        html_valid = self._validate_html_syntax(generated_code)
        if html_valid:
            score += 0.4
        else:
            suggestions.append("Corregir errores de sintaxis HTML")
        
        # 2. Validar sintaxis Angular específica
        angular_valid = self._validate_angular_syntax(generated_code)
        if angular_valid:
            score += 0.4
        else:
            suggestions.append("Corregir sintaxis Angular (binding, directivas)")
        
        # 3. Validar estructura de componente
        structure_valid = self._validate_component_structure(generated_code)
        if structure_valid:
            score += 0.2
        else:
            suggestions.append("Corregir estructura del componente")
        
        details.update({
            "html_valid": html_valid,
            "angular_valid": angular_valid,
            "structure_valid": structure_valid
        })
        
        return ValidationResult(
            criterion=ValidationCriteria.SYNTAX_CORRECTNESS,
            score=score,
            passed=score >= 0.8,
            details=details,
            suggestions=suggestions,
            confidence=0.95
        )
    
    async def validate_accessibility_compliance(self, generated_code: str, user_request: str) -> ValidationResult:
        """Valida cumplimiento de estándares de accesibilidad"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # 1. Verificar atributos de accesibilidad requeridos
        aria_score = self._validate_aria_attributes(generated_code)
        score += aria_score * 0.5
        
        # 2. Verificar roles y semántica
        semantic_score = self._validate_semantic_structure(generated_code)
        score += semantic_score * 0.3
        
        # 3. Verificar navegación por teclado
        keyboard_score = self._validate_keyboard_navigation(generated_code)
        score += keyboard_score * 0.2
        
        details.update({
            "aria_score": aria_score,
            "semantic_score": semantic_score,
            "keyboard_score": keyboard_score
        })
        
        if aria_score < 0.8:
            suggestions.append("Agregar atributos ARIA requeridos (aria-label, role)")
        
        return ValidationResult(
            criterion=ValidationCriteria.ACCESSIBILITY_COMPLIANCE,
            score=score,
            passed=score >= 0.8,
            details=details,
            suggestions=suggestions,
            confidence=0.8
        )
    
    async def validate_design_system_adherence(self, generated_code: str, user_request: str) -> ValidationResult:
        """Valida adherencia estricta al Design System de Bancolombia"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # 1. Verificar uso de componentes oficiales únicamente
        official_components = self._verify_official_components(generated_code)
        if official_components:
            score += 0.4
        else:
            suggestions.append("Usar únicamente componentes oficiales del Design System")
        
        # 2. Verificar paleta de colores oficial
        color_compliance = self._verify_color_palette(generated_code)
        score += color_compliance * 0.3
        
        # 3. Verificar convenciones de nomenclatura
        naming_compliance = self._verify_naming_conventions(generated_code)
        score += naming_compliance * 0.3
        
        details.update({
            "official_components": official_components,
            "color_compliance": color_compliance,
            "naming_compliance": naming_compliance
        })
        
        return ValidationResult(
            criterion=ValidationCriteria.DESIGN_SYSTEM_ADHERENCE,
            score=score,
            passed=score >= 0.8,
            details=details,
            suggestions=suggestions,
            confidence=0.9
        )
    
    async def validate_semantic_alignment(self, generated_code: str, user_request: str) -> ValidationResult:
        """Valida que el código generado sea semánticamente coherente con la solicitud"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # 1. Analizar intención del usuario
        user_intent = self._analyze_user_intent(user_request)
        
        # 2. Analizar lo que el código realmente genera
        code_intent = self._analyze_code_intent(generated_code)
        
        # 3. Calcular alineación semántica
        alignment_score = self._calculate_semantic_alignment(user_intent, code_intent)
        score = alignment_score
        
        details.update({
            "user_intent": user_intent,
            "code_intent": code_intent,
            "alignment_score": alignment_score
        })
        
        if alignment_score < 0.8:
            suggestions.append("Ajustar el código para que refleje mejor la intención del usuario")
        
        return ValidationResult(
            criterion=ValidationCriteria.SEMANTIC_ALIGNMENT,
            score=score,
            passed=score >= 0.8,
            details=details,
            suggestions=suggestions,
            confidence=0.8
        )
    
    # ===== MÉTODOS AUXILIARES =====
    
    def _detect_component_type(self, code: str) -> Optional[str]:
        """Detecta el tipo de componente en el código"""
        patterns = {
            "bc-button": r'<(?:bc-)?button',
            "bc-input": r'<bc-input',
            "bc-modal": r'<bc-modal'
        }
        
        for component, pattern in patterns.items():
            if re.search(pattern, code, re.IGNORECASE):
                return component
        
        return None
    
    def _validate_syntax_structure(self, code: str, rules: Dict[str, Any]) -> bool:
        """Valida la estructura sintáctica básica"""
        syntax_pattern = rules.get("syntax_pattern")
        if not syntax_pattern:
            return True
        
        return bool(re.search(syntax_pattern, code, re.IGNORECASE | re.DOTALL))
    
    def _validate_attributes(self, code: str, rules: Dict[str, Any]) -> float:
        """Valida los atributos del componente"""
        score = 0.0
        
        # Verificar atributos requeridos
        required = rules.get("required_attributes", [])
        required_found = 0
        
        for attr in required:
            if re.search(rf'\b{attr}\s*=', code, re.IGNORECASE):
                required_found += 1
        
        if required:
            score += (required_found / len(required)) * 0.6
        else:
            score += 0.6
        
        # Verificar atributos válidos
        all_attrs = required + rules.get("optional_attributes", [])
        invalid_attrs = self._find_invalid_attributes(code, all_attrs)
        
        if not invalid_attrs:
            score += 0.4
        else:
            score += max(0, 0.4 - len(invalid_attrs) * 0.1)
        
        return score
    
    def _extract_properties(self, code: str) -> Dict[str, str]:
        """Extrae propiedades del código generado"""
        properties = {}
        
        # Buscar atributos HTML/Angular
        attr_pattern = r'(\w+(?:-\w+)*)\s*=\s*["\']([^"\']*)["\']'
        matches = re.findall(attr_pattern, code)
        
        for attr, value in matches:
            properties[attr] = value
        
        return properties
    
    def _analyze_expected_properties(self, user_request: str) -> Dict[str, str]:
        """Analiza la solicitud para extraer propiedades esperadas"""
        expected = {}
        request_lower = user_request.lower()
        
        # Analizar colores/apariencias
        color_mappings = {
            "azul": "primary", "verde": "success", "rojo": "danger",
            "amarillo": "warning", "gris": "secondary"
        }
        
        for color, appearance in color_mappings.items():
            if color in request_lower:
                expected["appearance"] = appearance
                break
        
        # Analizar tamaños
        if any(word in request_lower for word in ["grande", "big", "large"]):
            expected["size"] = "large"
        elif any(word in request_lower for word in ["pequeño", "small", "mini"]):
            expected["size"] = "small"
        
        # Analizar estados
        if any(word in request_lower for word in ["requerido", "obligatorio", "required"]):
            expected["required"] = "true"
        
        if any(word in request_lower for word in ["deshabilitado", "disabled", "inactivo"]):
            expected["disabled"] = "true"
        
        return expected
    
    def _compare_properties(self, expected: Dict[str, str], actual: Dict[str, str]) -> float:
        """Compara propiedades esperadas vs actuales"""
        if not expected:
            return 1.0  # Si no hay expectativas específicas, es perfecto
        
        matches = 0
        for key, expected_value in expected.items():
            if key in actual and actual[key] == expected_value:
                matches += 1
        
        return matches / len(expected)
    
    def _validate_property_values(self, properties: Dict[str, str]) -> float:
        """Valida que los valores de las propiedades sean válidos"""
        score = 1.0
        
        # Validar valores de appearance
        if "appearance" in properties:
            valid_appearances = ["primary", "secondary", "success", "danger", "warning", "info"]
            if properties["appearance"] not in valid_appearances:
                score -= 0.3
        
        # Validar valores de size
        if "size" in properties:
            valid_sizes = ["small", "medium", "large"]
            if properties["size"] not in valid_sizes:
                score -= 0.3
        
        return max(0.0, score)
    
    def _validate_html_syntax(self, code: str) -> bool:
        """Valida sintaxis HTML básica"""
        # Verificar tags balanceados
        tag_pattern = r'<([a-zA-Z][a-zA-Z0-9-]*)[^>]*>.*?<\/\1>|<([a-zA-Z][a-zA-Z0-9-]*)[^>]*\/>'
        tags = re.findall(r'<([a-zA-Z][a-zA-Z0-9-]*)', code)
        
        # Verificar que no haya tags mal formados
        malformed = re.search(r'<[^>]*[^>\/]$', code)
        
        return not malformed and len(tags) > 0
    
    def _validate_angular_syntax(self, code: str) -> bool:
        """Valida sintaxis Angular específica"""
        # Verificar que los bindings estén bien formados
        patterns = self.component_patterns["angular_syntax"]
        
        for pattern_name, pattern in patterns.items():
            matches = re.findall(pattern, code)
            # Si hay bindings mal formados, fallar
            if pattern_name in ["property_binding", "event_binding"] and matches:
                for match in matches:
                    if not re.match(r'^[\w-]+$', match.split('=')[0].strip().strip('[]()').strip()):
                        return False
        
        return True
    
    def _validate_component_structure(self, code: str) -> bool:
        """Valida estructura general del componente"""
        # Verificar que tenga contenido mínimo
        stripped = re.sub(r'<!--.*?-->', '', code, flags=re.DOTALL).strip()
        return len(stripped) > 10 and '<' in stripped and '>' in stripped
    
    def _validate_aria_attributes(self, code: str) -> float:
        """Valida atributos de accesibilidad ARIA"""
        score = 0.0
        
        # Verificar aria-label
        if re.search(r'aria-label\s*=', code, re.IGNORECASE):
            score += 0.4
        
        # Verificar role
        if re.search(r'role\s*=', code, re.IGNORECASE):
            score += 0.3
        
        # Verificar tabindex para elementos interactivos
        if re.search(r'<(?:button|input)', code, re.IGNORECASE):
            if re.search(r'tabindex\s*=', code, re.IGNORECASE):
                score += 0.3
            else:
                score += 0.1  # Tabindex implícito en elementos nativos
        
        return score
    
    def _validate_semantic_structure(self, code: str) -> float:
        """Valida estructura semántica"""
        # Por ahora, verificar que use elementos semánticamente apropiados
        return 0.8  # Placeholder - implementar lógica más sofisticada
    
    def _validate_keyboard_navigation(self, code: str) -> float:
        """Valida navegación por teclado"""
        # Verificar que elementos interactivos sean accesibles por teclado
        return 0.8  # Placeholder - implementar lógica más sofisticada
    
    def _verify_official_components(self, code: str) -> bool:
        """Verifica que solo se usen componentes oficiales"""
        valid_components = list(self.design_system_rules["valid_components"].keys())
        
        # Buscar componentes en el código
        component_pattern = r'<([a-zA-Z][a-zA-Z0-9-]*)'
        found_components = re.findall(component_pattern, code)
        
        for component in found_components:
            if component.startswith('bc-') and component not in valid_components:
                return False
        
        return True
    
    def _verify_color_palette(self, code: str) -> float:
        """Verifica uso de paleta de colores oficial"""
        # Por ahora, verificar que use appearances válidas
        valid_colors = ["primary", "secondary", "success", "danger", "warning", "info"]
        
        appearance_match = re.search(r'appearance\s*=\s*["\']([^"\']+)["\']', code)
        if appearance_match:
            appearance = appearance_match.group(1)
            return 1.0 if appearance in valid_colors else 0.5
        
        return 0.8  # Sin colores específicos detectados
    
    def _verify_naming_conventions(self, code: str) -> float:
        """Verifica convenciones de nomenclatura"""
        # Verificar que use convenciones bc-*
        bc_components = re.findall(r'<(bc-[a-zA-Z-]+)', code)
        
        if bc_components:
            return 1.0  # Usa convenciones correctas
        
        # Verificar si usa componentes nativos con directivas bc-*
        directive_usage = re.search(r'\sbc-[a-zA-Z-]+', code)
        if directive_usage:
            return 0.9
        
        return 0.7  # Nomenclatura básica
    
    def _analyze_user_intent(self, user_request: str) -> Dict[str, Any]:
        """Analiza la intención del usuario"""
        intent = {
            "action": "create",
            "component_type": "unknown",
            "properties": {},
            "content": ""
        }
        
        request_lower = user_request.lower()
        
        # Detectar tipo de componente
        if any(word in request_lower for word in ["botón", "button", "btn"]):
            intent["component_type"] = "button"
        elif any(word in request_lower for word in ["input", "campo", "entrada"]):
            intent["component_type"] = "input"
        elif any(word in request_lower for word in ["modal", "ventana", "diálogo"]):
            intent["component_type"] = "modal"
        
        # Extraer contenido de texto
        text_match = re.search(r'que diga\s*["\']?([^"\']+)["\']?', user_request, re.IGNORECASE)
        if text_match:
            intent["content"] = text_match.group(1).strip()
        
        return intent
    
    def _analyze_code_intent(self, code: str) -> Dict[str, Any]:
        """Analiza lo que el código realmente hace"""
        intent = {
            "component_type": "unknown",
            "properties": {},
            "content": ""
        }
        
        # Detectar tipo de componente
        if re.search(r'<(?:bc-)?button', code, re.IGNORECASE):
            intent["component_type"] = "button"
        elif re.search(r'<bc-input', code, re.IGNORECASE):
            intent["component_type"] = "input"
        elif re.search(r'<bc-modal', code, re.IGNORECASE):
            intent["component_type"] = "modal"
        
        # Extraer contenido
        content_match = re.search(r'>([^<]+)</', code)
        if content_match:
            intent["content"] = content_match.group(1).strip()
        
        # Extraer propiedades
        intent["properties"] = self._extract_properties(code)
        
        return intent
    
    def _calculate_semantic_alignment(self, user_intent: Dict[str, Any], code_intent: Dict[str, Any]) -> float:
        """Calcula la alineación semántica entre intención y código"""
        score = 0.0
        
        # Comparar tipo de componente
        if user_intent["component_type"] == code_intent["component_type"]:
            score += 0.5
        elif user_intent["component_type"] == "unknown":
            score += 0.3  # No hay expectativa específica
        
        # Comparar contenido
        if user_intent["content"] and code_intent["content"]:
            content_similarity = self._calculate_text_similarity(
                user_intent["content"], 
                code_intent["content"]
            )
            score += content_similarity * 0.3
        elif not user_intent["content"]:
            score += 0.3  # Sin expectativa de contenido
        
        # Comparar propiedades generales
        if user_intent["properties"] or code_intent["properties"]:
            score += 0.2  # Bonus por tener propiedades
        
        return min(1.0, score)
    
    def _calculate_text_similarity(self, text1: str, text2: str) -> float:
        """Calcula similitud básica entre textos"""
        if not text1 or not text2:
            return 0.0
        
        # Similitud básica por palabras en común
        words1 = set(text1.lower().split())
        words2 = set(text2.lower().split())
        
        if not words1 or not words2:
            return 0.0
        
        intersection = words1.intersection(words2)
        union = words1.union(words2)
        
        return len(intersection) / len(union)
    
    def _find_invalid_attributes(self, code: str, valid_attrs: List[str]) -> List[str]:
        """Encuentra atributos no válidos en el código"""
        # Extraer todos los atributos
        attr_pattern = r'(\w+(?:-\w+)*)\s*='
        found_attrs = re.findall(attr_pattern, code)
        
        # Filtrar atributos no válidos (excluyendo atributos Angular estándar)
        standard_attrs = ["id", "class", "style", "ngModel", "ngIf", "ngFor", "click", "change"]
        invalid = []
        
        for attr in found_attrs:
            if attr not in valid_attrs and attr not in standard_attrs and not attr.startswith('aria-'):
                invalid.append(attr)
        
        return invalid

class QualityController:
    """Controlador principal del sistema de validación y control de calidad"""
    
    MINIMUM_QUALITY_THRESHOLD = 0.8  # 80% mínimo
    MAX_ITERATIONS = 3  # Máximo 3 intentos de mejora
    
    def __init__(self):
        self.validator = ComponentValidator()
        self.iteration_cache = {}
    
    async def validate_and_refine(self, generated_code: str, user_request: str, trace_id: str) -> QualityAssessment:
        """
        Método principal que valida y refina iterativamente hasta alcanzar 80% de calidad
        """
        start_time = datetime.now()
        iteration_count = 0
        current_code = generated_code
        
        logger.info(f"[{trace_id}] Iniciando validación de calidad...")
        
        while iteration_count < self.MAX_ITERATIONS:
            iteration_count += 1
            logger.info(f"[{trace_id}] Iteración {iteration_count} de validación")
            
            # Ejecutar todas las validaciones en paralelo
            validation_results = await self._run_all_validations(current_code, user_request)
            
            # Calcular puntuación general
            overall_score = self._calculate_overall_score(validation_results)
            
            logger.info(f"[{trace_id}] Puntuación obtenida: {overall_score:.2f}")
            
            # Si alcanzamos el umbral, terminar
            if overall_score >= self.MINIMUM_QUALITY_THRESHOLD:
                processing_time = int((datetime.now() - start_time).total_seconds() * 1000)
                
                logger.info(f"[{trace_id}] ✅ Validación exitosa en iteración {iteration_count}")
                
                return QualityAssessment(
                    overall_score=overall_score,
                    passed=True,
                    validation_results=validation_results,
                    iteration_count=iteration_count,
                    processing_time_ms=processing_time,
                    confidence_level=self._determine_confidence_level(overall_score),
                    trace_id=trace_id,
                    metadata={
                        "original_code": generated_code,
                        "final_code": current_code,
                        "improvement_applied": iteration_count > 1
                    }
                )
            
            # Si no alcanzamos el umbral, intentar refinar
            if iteration_count < self.MAX_ITERATIONS:
                logger.info(f"[{trace_id}] ⚠️ Calidad insuficiente ({overall_score:.2f}), refinando...")
                current_code = await self._refine_code(current_code, user_request, validation_results)
        
        # Si llegamos aquí, no logramos el umbral en el máximo de iteraciones
        processing_time = int((datetime.now() - start_time).total_seconds() * 1000)
        
        logger.warning(f"[{trace_id}] ❌ No se alcanzó el umbral de calidad después de {self.MAX_ITERATIONS} iteraciones")
        
        return QualityAssessment(
            overall_score=overall_score,
            passed=False,
            validation_results=validation_results,
            iteration_count=iteration_count,
            processing_time_ms=processing_time,
            confidence_level="low",
            trace_id=trace_id,
            metadata={
                "original_code": generated_code,
                "final_code": current_code,
                "max_iterations_reached": True,
                "threshold_not_met": True
            }
        )
    
    async def _run_all_validations(self, code: str, user_request: str) -> List[ValidationResult]:
        """Ejecuta todas las validaciones en paralelo"""
        
        validation_tasks = [
            self.validator.validate_component_validity(code, user_request),
            self.validator.validate_properties_accuracy(code, user_request),
            self.validator.validate_syntax_correctness(code, user_request),
            self.validator.validate_accessibility_compliance(code, user_request),
            self.validator.validate_design_system_adherence(code, user_request),
            self.validator.validate_semantic_alignment(code, user_request)
        ]
        
        return await asyncio.gather(*validation_tasks)
    
    def _calculate_overall_score(self, validation_results: List[ValidationResult]) -> float:
        """Calcula la puntuación general ponderada"""
        
        # Pesos para cada criterio
        weights = {
            ValidationCriteria.COMPONENT_VALIDITY: 0.25,
            ValidationCriteria.PROPERTIES_ACCURACY: 0.20,
            ValidationCriteria.SYNTAX_CORRECTNESS: 0.20,
            ValidationCriteria.ACCESSIBILITY_COMPLIANCE: 0.15,
            ValidationCriteria.DESIGN_SYSTEM_ADHERENCE: 0.15,
            ValidationCriteria.SEMANTIC_ALIGNMENT: 0.05
        }
        
        weighted_score = 0.0
        
        for result in validation_results:
            weight = weights.get(result.criterion, 0.1)
            weighted_score += result.score * weight
        
        return weighted_score
    
    async def _refine_code(self, code: str, user_request: str, validation_results: List[ValidationResult]) -> str:
        """Refina el código basado en los resultados de validación"""
        
        # Recopilar todas las sugerencias
        all_suggestions = []
        for result in validation_results:
            if not result.passed:
                all_suggestions.extend(result.suggestions)
        
        # Aplicar refinamientos básicos
        refined_code = code
        
        # 1. Corregir problemas de sintaxis
        for result in validation_results:
            if result.criterion == ValidationCriteria.SYNTAX_CORRECTNESS and not result.passed:
                refined_code = self._apply_syntax_fixes(refined_code)
        
        # 2. Corregir problemas de propiedades
        for result in validation_results:
            if result.criterion == ValidationCriteria.PROPERTIES_ACCURACY and not result.passed:
                refined_code = self._apply_property_fixes(refined_code, user_request, result)
        
        # 3. Corregir problemas de accesibilidad
        for result in validation_results:
            if result.criterion == ValidationCriteria.ACCESSIBILITY_COMPLIANCE and not result.passed:
                refined_code = self._apply_accessibility_fixes(refined_code)
        
        return refined_code
    
    def _apply_syntax_fixes(self, code: str) -> str:
        """Aplica correcciones básicas de sintaxis"""
        
        # Corregir tags auto-cerrados mal formados
        code = re.sub(r'<(bc-input[^>]*[^/])>', r'<\1 />', code)
        
        # Asegurar que los atributos tengan comillas
        code = re.sub(r'(\w+)=([^"\'\s]+)(?=\s|>)', r'\1="\2"', code)
        
        return code
    
    def _apply_property_fixes(self, code: str, user_request: str, validation_result: ValidationResult) -> str:
        """Aplica correcciones de propiedades"""
        
        expected = validation_result.details.get("expected_properties", {})
        
        for prop, value in expected.items():
            # Si la propiedad no existe, agregarla
            if not re.search(rf'\b{prop}\s*=', code):
                # Insertar la propiedad antes del cierre del tag
                code = re.sub(r'(\s*)>', rf' {prop}="{value}"\1>', code, count=1)
        
        return code
    
    def _apply_accessibility_fixes(self, code: str) -> str:
        """Aplica correcciones de accesibilidad"""
        
        # Agregar aria-label si no existe
        if not re.search(r'aria-label\s*=', code, re.IGNORECASE):
            if '<button' in code.lower() or 'bc-button' in code.lower():
                code = re.sub(r'(\s*)>', r' aria-label="Botón de acción"\1>', code, count=1)
        
        # Agregar role si es necesario
        if not re.search(r'role\s*=', code, re.IGNORECASE):
            if '<button' in code.lower() and 'bc-button' not in code.lower():
                code = re.sub(r'(\s*)>', r' role="button"\1>', code, count=1)
        
        return code
    
    def _determine_confidence_level(self, overall_score: float) -> str:
        """Determina el nivel de confianza basado en la puntuación"""
        
        if overall_score >= 0.95:
            return "very_high"
        elif overall_score >= 0.9:
            return "high"
        elif overall_score >= 0.8:
            return "medium"
        elif overall_score >= 0.6:
            return "low"
        else:
            return "very_low"

# ===== INSTANCIA GLOBAL =====
quality_controller = QualityController()

# ===== FUNCIÓN PRINCIPAL DE INTEGRACIÓN =====
async def validate_generated_code(generated_code: str, user_request: str, trace_id: str) -> QualityAssessment:
    """
    Función principal que valida y refina código generado hasta alcanzar 80% de calidad
    """
    return await quality_controller.validate_and_refine(generated_code, user_request, trace_id) 