#!/usr/bin/env python3
"""
Sistema Completo de Control de Calidad para Semantika v2.0
Valida y refina iterativamente hasta alcanzar 80% de exactitud mínima

Este sistema asegura que cada respuesta generada cumpla con los estándares 
de calidad del Design System de Bancolombia antes de ser entregada al usuario.
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

# ===== ESTRUCTURAS DE DATOS =====

@dataclass
class ValidationResult:
    criterion: str
    score: float  # 0.0 - 1.0
    passed: bool  # True si score >= 0.8
    details: Dict[str, Any]
    suggestions: List[str]
    confidence: float

@dataclass
class QualityAssessment:
    overall_score: float
    accuracy_percentage: int  # 0-100
    passed: bool  # True si >= 80%
    validation_results: List[ValidationResult]
    iteration_count: int
    processing_time_ms: int
    confidence_level: str
    final_code: str
    improvement_applied: bool
    trace_id: str

# ===== VALIDADOR PRINCIPAL =====

class DesignSystemValidator:
    """Validador que verifica adherencia al Design System de Bancolombia"""
    
    MINIMUM_THRESHOLD = 0.8  # 80% mínimo requerido
    
    def __init__(self):
        self.design_system_rules = self._load_design_system_rules()
    
    def _load_design_system_rules(self) -> Dict[str, Any]:
        """Carga reglas del Design System"""
        return {
            "valid_components": {
                "bc-button": {
                    "appearances": ["primary", "secondary", "success", "danger", "warning", "info"],
                    "sizes": ["small", "medium", "large"],
                    "required_attrs": [],
                    "syntax_pattern": r'<(?:bc-)?button[\s\S]*?>.*?<\/(?:bc-)?button>',
                    "examples": [
                        '<bc-button appearance="primary">Texto</bc-button>',
                        '<button bc-button appearance="secondary">Texto</button>'
                    ]
                },
                "bc-input": {
                    "types": ["text", "email", "password", "number", "tel", "url"],
                    "required_attrs": ["label"],
                    "syntax_pattern": r'<bc-input[\s\S]*?(?:\/>|><\/bc-input>)',
                    "examples": [
                        '<bc-input label="Campo" placeholder="Texto"></bc-input>'
                    ]
                }
            },
            "accessibility_requirements": ["aria-label", "role"],
            "color_mappings": {
                "azul": "primary", "verde": "success", "rojo": "danger",
                "amarillo": "warning", "gris": "secondary"
            }
        }
    
    async def validate_code(self, code: str, user_request: str) -> List[ValidationResult]:
        """Ejecuta todas las validaciones"""
        
        validations = await asyncio.gather(
            self._validate_component_validity(code, user_request),
            self._validate_properties_accuracy(code, user_request),
            self._validate_syntax_correctness(code, user_request),
            self._validate_accessibility(code, user_request),
            self._validate_semantic_alignment(code, user_request)
        )
        
        return validations
    
    async def _validate_component_validity(self, code: str, user_request: str) -> ValidationResult:
        """Valida que se use componente correcto del Design System"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # Detectar componente
        detected = self._detect_component_type(code)
        
        if detected in self.design_system_rules["valid_components"]:
            score += 0.6
            details["valid_component"] = True
        else:
            suggestions.append("Usar componente oficial del Design System")
            details["valid_component"] = False
        
        # Validar sintaxis específica del componente
        if detected and detected in self.design_system_rules["valid_components"]:
            pattern = self.design_system_rules["valid_components"][detected]["syntax_pattern"]
            if re.search(pattern, code, re.IGNORECASE | re.DOTALL):
                score += 0.4
                details["valid_syntax"] = True
            else:
                suggestions.append("Corregir sintaxis del componente")
                details["valid_syntax"] = False
        
        return ValidationResult("component_validity", score, score >= 0.8, details, suggestions, 0.9)
    
    async def _validate_properties_accuracy(self, code: str, user_request: str) -> ValidationResult:
        """Valida precisión de propiedades"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # Extraer propiedades esperadas de la solicitud
        expected_props = self._analyze_expected_properties(user_request)
        extracted_props = self._extract_properties(code)
        
        # Comparar propiedades
        if expected_props:
            matches = sum(1 for k, v in expected_props.items() 
                         if k in extracted_props and extracted_props[k] == v)
            score = matches / len(expected_props)
        else:
            score = 0.8  # Sin expectativas específicas
        
        details.update({
            "expected": expected_props,
            "extracted": extracted_props,
            "match_ratio": score
        })
        
        if score < 0.8:
            suggestions.append("Ajustar propiedades según la solicitud del usuario")
        
        return ValidationResult("properties_accuracy", score, score >= 0.8, details, suggestions, 0.85)
    
    async def _validate_syntax_correctness(self, code: str, user_request: str) -> ValidationResult:
        """Valida sintaxis HTML/Angular"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # Validar HTML básico
        html_valid = bool(re.search(r'<\w+[^>]*>.*?</\w+>|<\w+[^>]*/>', code, re.DOTALL))
        if html_valid:
            score += 0.5
            details["html_valid"] = True
        else:
            suggestions.append("Corregir estructura HTML básica")
            details["html_valid"] = False
        
        # Validar bindings Angular
        angular_valid = not re.search(r'\[\s*\w+\s*\]\s*=\s*[^"\'][^>\s]*[^"\']', code)
        if angular_valid:
            score += 0.3
            details["angular_syntax"] = True
        else:
            suggestions.append("Corregir sintaxis de bindings Angular")
            details["angular_syntax"] = False
        
        # Validar atributos bien formados
        attrs_valid = not re.search(r'(\w+)=([^"\'\s>]+)(?=\s|>)', code)
        if attrs_valid:
            score += 0.2
            details["attributes_valid"] = True
        else:
            suggestions.append("Agregar comillas a valores de atributos")
            details["attributes_valid"] = False
        
        return ValidationResult("syntax_correctness", score, score >= 0.8, details, suggestions, 0.95)
    
    async def _validate_accessibility(self, code: str, user_request: str) -> ValidationResult:
        """Valida cumplimiento de accesibilidad"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # Verificar aria-label
        has_aria = bool(re.search(r'aria-label\s*=', code, re.IGNORECASE))
        if has_aria:
            score += 0.5
            details["has_aria_label"] = True
        else:
            if 'button' in code.lower():
                suggestions.append("Agregar aria-label para accesibilidad")
            details["has_aria_label"] = False
        
        # Verificar role si es necesario
        has_role = bool(re.search(r'role\s*=', code, re.IGNORECASE))
        if has_role or 'bc-' in code:  # Componentes bc- tienen roles implícitos
            score += 0.3
            details["has_role"] = True
        
        # Bonus por usar componentes accesibles
        if 'bc-' in code:
            score += 0.2
            details["accessible_component"] = True
        
        return ValidationResult("accessibility", score, score >= 0.8, details, suggestions, 0.8)
    
    async def _validate_semantic_alignment(self, code: str, user_request: str) -> ValidationResult:
        """Valida alineación semántica con solicitud"""
        
        score = 0.0
        details = {}
        suggestions = []
        
        # Analizar tipo de componente solicitado vs generado
        requested_type = self._detect_requested_component(user_request)
        generated_type = self._detect_component_type(code)
        
        if requested_type == generated_type or requested_type == "unknown":
            score += 0.5
            details["component_match"] = True
        else:
            suggestions.append(f"Cambiar a componente {requested_type}")
            details["component_match"] = False
        
        # Analizar contenido de texto
        requested_text = self._extract_requested_text(user_request)
        generated_text = self._extract_generated_text(code)
        
        if requested_text and generated_text:
            text_similarity = self._calculate_text_similarity(requested_text, generated_text)
            score += text_similarity * 0.5
            details["text_similarity"] = text_similarity
        elif not requested_text:
            score += 0.5  # Sin expectativa específica
            details["text_similarity"] = 1.0
        else:
            suggestions.append("Incluir el texto solicitado por el usuario")
            details["text_similarity"] = 0.0
        
        return ValidationResult("semantic_alignment", score, score >= 0.8, details, suggestions, 0.8)
    
    def _detect_component_type(self, code: str) -> Optional[str]:
        """Detecta tipo de componente en el código"""
        code_lower = code.lower()
        if "bc-button" in code_lower or "button" in code_lower:
            return "bc-button"
        elif "bc-input" in code_lower:
            return "bc-input"
        elif "bc-modal" in code_lower:
            return "bc-modal"
        return None
    
    def _detect_requested_component(self, user_request: str) -> str:
        """Detecta componente solicitado por el usuario"""
        request_lower = user_request.lower()
        if any(word in request_lower for word in ["botón", "button", "btn"]):
            return "bc-button"
        elif any(word in request_lower for word in ["input", "campo", "entrada"]):
            return "bc-input"
        elif any(word in request_lower for word in ["modal", "ventana", "diálogo"]):
            return "bc-modal"
        return "unknown"
    
    def _analyze_expected_properties(self, user_request: str) -> Dict[str, str]:
        """Analiza propiedades esperadas de la solicitud"""
        props = {}
        request_lower = user_request.lower()
        
        # Mapear colores
        for spanish_color, appearance in self.design_system_rules["color_mappings"].items():
            if spanish_color in request_lower:
                props["appearance"] = appearance
                break
        
        # Mapear tamaños
        if any(word in request_lower for word in ["grande", "big", "large"]):
            props["size"] = "large"
        elif any(word in request_lower for word in ["pequeño", "small", "mini"]):
            props["size"] = "small"
        
        # Estados
        if any(word in request_lower for word in ["requerido", "obligatorio"]):
            props["required"] = "true"
        
        return props
    
    def _extract_properties(self, code: str) -> Dict[str, str]:
        """Extrae propiedades del código"""
        properties = {}
        attr_pattern = r'(\w+(?:-\w+)*)\s*=\s*["\']([^"\']*)["\']'
        matches = re.findall(attr_pattern, code)
        
        for attr, value in matches:
            properties[attr] = value
        
        return properties
    
    def _extract_requested_text(self, user_request: str) -> Optional[str]:
        """Extrae texto solicitado"""
        patterns = [
            r'que diga\s*["\']?([^"\']+)["\']?',
            r'con texto\s*["\']?([^"\']+)["\']?',
            r'"([^"]+)"'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, user_request, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        return None
    
    def _extract_generated_text(self, code: str) -> Optional[str]:
        """Extrae texto del código generado"""
        match = re.search(r'>([^<]+)<', code)
        return match.group(1).strip() if match else None
    
    def _calculate_text_similarity(self, text1: str, text2: str) -> float:
        """Calcula similitud entre textos"""
        if not text1 or not text2:
            return 0.0
        
        words1 = set(text1.lower().split())
        words2 = set(text2.lower().split())
        
        if not words1 or not words2:
            return 0.0
        
        intersection = words1.intersection(words2)
        union = words1.union(words2)
        
        return len(intersection) / len(union)

# ===== MOTOR DE REFINAMIENTO =====

class CodeRefinementEngine:
    """Motor que mejora el código basado en validaciones"""
    
    def __init__(self):
        self.improvement_strategies = {
            "component_validity": self._fix_component_validity,
            "properties_accuracy": self._fix_properties_accuracy,
            "syntax_correctness": self._fix_syntax_correctness,
            "accessibility": self._fix_accessibility,
            "semantic_alignment": self._fix_semantic_alignment
        }
    
    async def refine_code(self, code: str, user_request: str, validation_results: List[ValidationResult]) -> str:
        """Refina código basado en validaciones fallidas"""
        
        refined_code = code
        
        # Aplicar mejoras según validaciones fallidas
        for result in validation_results:
            if not result.passed and result.criterion in self.improvement_strategies:
                strategy = self.improvement_strategies[result.criterion]
                refined_code = await strategy(refined_code, user_request, result)
        
        return refined_code
    
    async def _fix_component_validity(self, code: str, user_request: str, result: ValidationResult) -> str:
        """Corrige validez del componente"""
        
        # Si no hay componente válido, generar uno apropiado
        if not result.details.get("valid_component", False):
            request_lower = user_request.lower()
            
            if any(word in request_lower for word in ["botón", "button"]):
                return '<bc-button appearance="primary">Acción</bc-button>'
            elif any(word in request_lower for word in ["input", "campo"]):
                return '<bc-input label="Campo" placeholder="Ingresa información"></bc-input>'
        
        # Corregir sintaxis si es necesario
        if not result.details.get("valid_syntax", False):
            # Corregir tags auto-cerrados
            code = re.sub(r'<(bc-input[^>]*[^/])>', r'<\1 />', code)
        
        return code
    
    async def _fix_properties_accuracy(self, code: str, user_request: str, result: ValidationResult) -> str:
        """Corrige precisión de propiedades"""
        
        expected = result.details.get("expected", {})
        
        for prop, value in expected.items():
            # Si la propiedad no existe, agregarla
            if not re.search(rf'\b{prop}\s*=', code):
                code = self._add_property_to_component(code, prop, value)
        
        return code
    
    async def _fix_syntax_correctness(self, code: str, user_request: str, result: ValidationResult) -> str:
        """Corrige errores de sintaxis"""
        
        # Agregar comillas a atributos
        code = re.sub(r'(\w+)=([^"\'\s>]+)(?=\s|>)', r'\1="\2"', code)
        
        # Corregir espacios en bindings
        code = re.sub(r'\[\s*(\w+)\s*\]', r'[\1]', code)
        code = re.sub(r'\(\s*(\w+)\s*\)', r'(\1)', code)
        
        return code
    
    async def _fix_accessibility(self, code: str, user_request: str, result: ValidationResult) -> str:
        """Mejora accesibilidad"""
        
        # Agregar aria-label si falta
        if not result.details.get("has_aria_label", False) and 'button' in code.lower():
            aria_label = self._generate_aria_label(code, user_request)
            code = self._add_property_to_component(code, "aria-label", aria_label)
        
        return code
    
    async def _fix_semantic_alignment(self, code: str, user_request: str, result: ValidationResult) -> str:
        """Mejora alineación semántica"""
        
        # Corregir contenido de texto si es necesario
        if result.details.get("text_similarity", 1.0) < 0.5:
            requested_text = self._extract_requested_text(user_request)
            if requested_text:
                code = re.sub(r'(>)[^<>]*(</)', rf'\1{requested_text}\2', code)
        
        return code
    
    def _add_property_to_component(self, code: str, prop_name: str, prop_value: str) -> str:
        """Agrega propiedad a componente"""
        
        tag_match = re.search(r'(<[^>]+)', code)
        if tag_match:
            tag = tag_match.group(1)
            
            if tag.endswith('/>'):
                new_tag = tag[:-2] + f' {prop_name}="{prop_value}" />'
            else:
                new_tag = tag + f' {prop_name}="{prop_value}"'
            
            code = code.replace(tag, new_tag, 1)
        
        return code
    
    def _generate_aria_label(self, code: str, user_request: str) -> str:
        """Genera aria-label apropiado"""
        
        content_match = re.search(r'>([^<]+)<', code)
        if content_match and content_match.group(1).strip():
            return f"Botón {content_match.group(1).strip()}"
        
        return "Botón de acción"
    
    def _extract_requested_text(self, user_request: str) -> Optional[str]:
        """Extrae texto solicitado por el usuario"""
        patterns = [
            r'que diga\s*["\']?([^"\']+)["\']?',
            r'con texto\s*["\']?([^"\']+)["\']?',
            r'"([^"]+)"'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, user_request, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        return None

# ===== CONTROLADOR PRINCIPAL =====

class QualityControlSystem:
    """Sistema principal de control de calidad"""
    
    MAX_ITERATIONS = 3
    MINIMUM_THRESHOLD = 0.8
    
    def __init__(self):
        self.validator = DesignSystemValidator()
        self.refinement_engine = CodeRefinementEngine()
    
    async def ensure_quality_threshold(
        self, 
        generated_code: str, 
        user_request: str, 
        trace_id: str
    ) -> QualityAssessment:
        """
        Asegura que el código cumpla con el umbral de calidad del 80%
        Refina iterativamente hasta alcanzarlo o agotar intentos
        """
        
        start_time = datetime.now()
        current_code = generated_code
        iteration_count = 0
        
        logger.info(f"[{trace_id}] 🎯 Iniciando control de calidad - Objetivo: ≥80%")
        
        while iteration_count < self.MAX_ITERATIONS:
            iteration_count += 1
            
            logger.info(f"[{trace_id}] 📋 Iteración {iteration_count} - Validando código...")
            
            # Ejecutar validaciones
            validation_results = await self.validator.validate_code(current_code, user_request)
            
            # Calcular puntuación general
            overall_score = self._calculate_overall_score(validation_results)
            accuracy_percentage = int(overall_score * 100)
            
            logger.info(f"[{trace_id}] 📊 Puntuación obtenida: {accuracy_percentage}%")
            
            # ¿Cumple con el umbral?
            if overall_score >= self.MINIMUM_THRESHOLD:
                processing_time = int((datetime.now() - start_time).total_seconds() * 1000)
                
                logger.info(f"[{trace_id}] ✅ ¡CALIDAD APROBADA! {accuracy_percentage}% en iteración {iteration_count}")
                
                return QualityAssessment(
                    overall_score=overall_score,
                    accuracy_percentage=accuracy_percentage,
                    passed=True,
                    validation_results=validation_results,
                    iteration_count=iteration_count,
                    processing_time_ms=processing_time,
                    confidence_level=self._determine_confidence_level(overall_score),
                    final_code=current_code,
                    improvement_applied=iteration_count > 1,
                    trace_id=trace_id
                )
            
            # Si no cumple y quedan iteraciones, refinar
            if iteration_count < self.MAX_ITERATIONS:
                logger.info(f"[{trace_id}] 🔧 Calidad insuficiente ({accuracy_percentage}%) - Refinando código...")
                
                current_code = await self.refinement_engine.refine_code(
                    current_code, user_request, validation_results
                )
                
                logger.info(f"[{trace_id}] 🔄 Código refinado, revalidando...")
        
        # Si llegamos aquí, no se alcanzó el umbral
        processing_time = int((datetime.now() - start_time).total_seconds() * 1000)
        
        logger.warning(f"[{trace_id}] ⚠️ No se alcanzó el umbral mínimo después de {self.MAX_ITERATIONS} iteraciones")
        
        return QualityAssessment(
            overall_score=overall_score,
            accuracy_percentage=accuracy_percentage,
            passed=False,
            validation_results=validation_results,
            iteration_count=iteration_count,
            processing_time_ms=processing_time,
            confidence_level="low",
            final_code=current_code,
            improvement_applied=True,
            trace_id=trace_id
        )
    
    def _calculate_overall_score(self, validation_results: List[ValidationResult]) -> float:
        """Calcula puntuación general ponderada"""
        
        weights = {
            "component_validity": 0.25,
            "properties_accuracy": 0.25,
            "syntax_correctness": 0.20,
            "accessibility": 0.15,
            "semantic_alignment": 0.15
        }
        
        weighted_score = 0.0
        
        for result in validation_results:
            weight = weights.get(result.criterion, 0.1)
            weighted_score += result.score * weight
        
        return weighted_score
    
    def _determine_confidence_level(self, score: float) -> str:
        """Determina nivel de confianza"""
        
        if score >= 0.95:
            return "very_high"
        elif score >= 0.9:
            return "high"
        elif score >= 0.8:
            return "medium"
        else:
            return "low"

# ===== INSTANCIA GLOBAL Y FUNCIÓN PRINCIPAL =====

quality_control_system = QualityControlSystem()

async def validate_and_ensure_quality(
    generated_code: str, 
    user_request: str, 
    trace_id: str
) -> QualityAssessment:
    """
    🎯 FUNCIÓN PRINCIPAL DEL SISTEMA DE CONTROL DE CALIDAD
    
    Esta función asegura que cada código generado tenga al menos 80% de exactitud
    antes de ser entregado al usuario. Ejecuta validaciones comprensivas y 
    refina iterativamente hasta alcanzar el estándar de calidad requerido.
    
    Args:
        generated_code: Código Angular generado
        user_request: Solicitud original del usuario
        trace_id: ID de trazabilidad
    
    Returns:
        QualityAssessment: Evaluación completa de calidad con el código final
    """
    return await quality_control_system.ensure_quality_threshold(
        generated_code, user_request, trace_id
    ) 