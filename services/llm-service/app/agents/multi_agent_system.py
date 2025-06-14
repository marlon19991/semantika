#!/usr/bin/env python3
"""
Sistema Multi-Agente Optimizado para Semantika v2.0
Versión simplificada que mantiene solo el código esencial
"""

import os
import json
import logging
import re
from typing import Dict, List, Optional, Any, Union
from dataclasses import dataclass

# Importar analizador semántico
try:
    from .semantic_analyzer import analyze_request_semantically, SemanticMatch
    SEMANTIC_ANALYZER_AVAILABLE = True
except ImportError:
    SEMANTIC_ANALYZER_AVAILABLE = False
    logger = logging.getLogger(__name__)
    logger.warning("Analizador semántico no disponible. Usando fallback básico.")

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class GenerationResult:
    """Resultado de generación"""
    success: bool
    generated_code: str
    component_type: str
    confidence: float
    explanation: str
    metadata: Dict[str, Any] = None

class KnowledgeNavigator:
    """Navegador optimizado de base de conocimiento"""
    
    def __init__(self):
        self.knowledge_base = self._load_knowledge()
        
    def _load_knowledge(self) -> Dict[str, Any]:
        """Carga la base de conocimiento esencial"""
        
        # Cargar knowledge base existente
        try:
            knowledge_path = "/app/knowledge_base/bancolombia_design_system.json"
            if os.path.exists(knowledge_path):
                with open(knowledge_path, 'r', encoding='utf-8') as f:
                    base_knowledge = json.load(f)
            else:
                base_knowledge = {}
        except Exception as e:
            logger.warning(f"No se pudo cargar knowledge base: {e}")
            base_knowledge = {}
        
        # Base de conocimiento optimizada
        expanded_knowledge = {
            **base_knowledge,
            "element_types": {
                "buttons": {
                    "primary": {"selector": "bc-button", "appearance": "primary"},
                    "secondary": {"selector": "bc-button", "appearance": "secondary"},
                    "success": {"selector": "bc-button", "appearance": "success"},
                    "danger": {"selector": "bc-button", "appearance": "danger"},
                    "warning": {"selector": "bc-button", "appearance": "warning"},
                    "info": {"selector": "bc-button", "appearance": "info"},
                    "link": {"selector": "bc-button", "appearance": "link"},
                    "ghost": {"selector": "bc-button", "appearance": "ghost"}
                },
                "inputs": {
                    "text": {"selector": "bc-input", "type": "text"},
                    "email": {"selector": "bc-input", "type": "email"},
                    "password": {"selector": "bc-input", "type": "password"},
                    "number": {"selector": "bc-input", "type": "number"},
                    "textarea": {"selector": "bc-textarea"}
                },
                "containers": {
                    "modal": {"selector": "bc-modal"}
                }
            }
        }
        
        return expanded_knowledge
    
    def find_matching_elements(self, user_request: str) -> List[Dict[str, Any]]:
        """Encuentra elementos que coinciden con la solicitud"""
        
        request_lower = user_request.lower()
        matching_elements = []
        
        # Buscar en todos los tipos de elementos
        for category, elements in self.knowledge_base.get("element_types", {}).items():
            for element_name, element_config in elements.items():
                
                relevance_score = 0
                
                # Coincidencias directas
                if element_name in request_lower:
                    relevance_score += 10
                    
                # Coincidencias en categoría
                if category[:-1] in request_lower:
                    relevance_score += 5
                    
                # Palabras clave esenciales
                keywords = {
                    "botón": ["buttons"],
                    "boton": ["buttons"],
                    "button": ["buttons"],
                    "input": ["inputs"],
                    "campo": ["inputs"],
                    "modal": ["containers"],
                    "formulario": ["inputs"],
                    "form": ["inputs"]
                }
                
                for keyword, categories in keywords.items():
                    if keyword in request_lower and category in categories:
                        relevance_score += 8
                
                if relevance_score > 0:
                    matching_elements.append({
                        "element_name": element_name,
                        "element_config": element_config,
                        "category": category,
                        "relevance_score": relevance_score
                    })
        
        # Ordenar por relevancia
        matching_elements.sort(key=lambda x: x["relevance_score"], reverse=True)
        
        return matching_elements

class IntelligentCodeGenerator:
    """Generador inteligente optimizado de código"""
    
    def __init__(self, knowledge_navigator: KnowledgeNavigator):
        self.navigator = knowledge_navigator
    
    def generate_component_code(self, element_config: Dict[str, Any], user_request: str) -> str:
        """Genera código de componente optimizado"""
        
        selector = element_config.get("selector", "bc-component")
        
        # Extraer propiedades esenciales
        properties = self._extract_properties(user_request, element_config)
        
        # Extraer contenido
        content = self._extract_content(user_request)
        
        # Generar atributos
        attributes = []
        for prop, value in properties.items():
            if value:
                attributes.append(f'{prop}="{value}"')
        
        attrs_str = " " + " ".join(attributes) if attributes else ""
        
        # Generar HTML
        if content:
            html = f"<{selector}{attrs_str}>{content}</{selector}>"
        else:
            html = f"<{selector}{attrs_str}></{selector}>"
        
        return html
    
    def _extract_properties(self, request: str, element_config: Dict[str, Any]) -> Dict[str, str]:
        """Extrae propiedades esenciales de la solicitud"""
        
        properties = {}
        request_lower = request.lower()
        
        # Mapeo de colores semánticos
        color_map = {
            "rojo": "danger", "red": "danger",
            "verde": "success", "green": "success", 
            "azul": "primary", "blue": "primary",
            "amarillo": "warning", "yellow": "warning",
            "gris": "secondary", "gray": "secondary", "grey": "secondary"
        }
        
        # Detectar apariencia por color
        for color, appearance in color_map.items():
            if color in request_lower:
                if "appearance" not in properties:
                    properties["appearance"] = appearance
                break
        
        # Detectar tamaño
        if "grande" in request_lower or "large" in request_lower:
            properties["size"] = "large"
        elif "pequeño" in request_lower or "small" in request_lower:
            properties["size"] = "small"
        
        # Propiedades específicas por tipo
        if element_config.get("type"):
            properties["type"] = element_config["type"]
        
        return properties
    
    def _extract_content(self, request: str) -> str:
        """Extrae contenido de la solicitud"""
        
        # Buscar texto entre comillas
        quote_patterns = [
            r'"([^"]+)"',
            r"'([^']+)'",
            r'que diga "([^"]+)"',
            r"que diga '([^']+)'"
        ]
        
        for pattern in quote_patterns:
            match = re.search(pattern, request)
            if match:
                return match.group(1)
        
        # Buscar patrones comunes
        content_patterns = [
            r"que diga\s+(\w+)",
            r"con texto\s+(\w+)",
            r"llamado\s+(\w+)"
        ]
        
        for pattern in content_patterns:
            match = re.search(pattern, request, re.IGNORECASE)
            if match:
                return match.group(1)
        
        return ""

class ComplexElementGenerator:
    """Generador simplificado de elementos complejos"""
    
    def __init__(self, knowledge_navigator: KnowledgeNavigator):
        self.navigator = knowledge_navigator
        
    def generate_form(self, user_request: str) -> str:
        """Genera un formulario simple"""
        return """
<form class="bc-form">
  <div class="form-field">
    <label for="name">Nombre</label>
    <bc-input id="name" type="text" required="true"></bc-input>
  </div>
  <div class="form-field">
    <label for="email">Email</label>
    <bc-input id="email" type="email" required="true"></bc-input>
  </div>
  <div class="form-actions">
    <bc-button appearance="primary" type="submit">Enviar</bc-button>
    <bc-button appearance="secondary" type="button">Cancelar</bc-button>
  </div>
</form>""".strip()
    
    def generate_modal(self, user_request: str) -> str:
        """Genera un modal simple"""
        return """
<bc-modal [isOpen]="isModalOpen" (onClose)="closeModal()">
  <bc-modal-header>
    <h2>Confirmar Acción</h2>
  </bc-modal-header>
  <bc-modal-body>
    <p>¿Está seguro de que desea continuar?</p>
  </bc-modal-body>
  <bc-modal-footer>
    <bc-button appearance="primary" (click)="confirmAction()">Confirmar</bc-button>
    <bc-button appearance="secondary" (click)="closeModal()">Cancelar</bc-button>
  </bc-modal-footer>
</bc-modal>""".strip()

class SemantikaMultiAgent:
    """Sistema principal optimizado"""
    
    def __init__(self):
        self.navigator = KnowledgeNavigator()
        self.code_generator = IntelligentCodeGenerator(self.navigator)
        self.complex_generator = ComplexElementGenerator(self.navigator)
        
    async def process_natural_request(self, user_request: str) -> GenerationResult:
        """Procesa solicitud con análisis semántico optimizado"""
        
        try:
            # Usar análisis semántico si está disponible
            if SEMANTIC_ANALYZER_AVAILABLE:
                semantic_match = await analyze_request_semantically(user_request)
                if semantic_match and semantic_match.confidence > 0.3:
                    return await self._generate_from_semantic_match(semantic_match, user_request)
            
            # Fallback básico
            if self._is_complex_request(user_request):
                return await self._process_complex_request(user_request)
            else:
                return await self._process_simple_request(user_request)
                
        except Exception as e:
            logger.error(f"Error procesando solicitud: {e}")
            return GenerationResult(
                success=False,
                generated_code="",
                component_type="error",
                confidence=0.0,
                explanation=f"Error al procesar la solicitud: {str(e)}"
            )
    
    def _is_complex_request(self, request: str) -> bool:
        """Detecta si es una solicitud compleja"""
        complex_keywords = ["formulario", "form", "modal", "ventana", "registro", "login"]
        return any(keyword in request.lower() for keyword in complex_keywords)
    
    async def _process_complex_request(self, user_request: str) -> GenerationResult:
        """Procesa solicitudes complejas"""
        
        if "modal" in user_request.lower() or "ventana" in user_request.lower():
            generated_code = self.complex_generator.generate_modal(user_request)
            component_type = "modal"
        else:
            generated_code = self.complex_generator.generate_form(user_request)
            component_type = "form"
        
        return GenerationResult(
            success=True,
            generated_code=generated_code,
            component_type=component_type,
            confidence=0.8,
            explanation=f"Generado {component_type} complejo basado en la solicitud.",
            metadata={"semantic_analysis": False, "method": "complex_generator"}
        )
    
    async def _process_simple_request(self, user_request: str) -> GenerationResult:
        """Procesa solicitudes simples"""
        
        matching_elements = self.navigator.find_matching_elements(user_request)
        
        if not matching_elements:
            return GenerationResult(
                success=False,
                generated_code="",
                component_type="unknown",
                confidence=0.0,
                explanation="No se encontraron elementos coincidentes."
            )
        
        best_match = matching_elements[0]
        generated_code = self.code_generator.generate_component_code(
            best_match["element_config"], 
            user_request
        )
        
        return GenerationResult(
            success=True,
            generated_code=generated_code,
            component_type=best_match["element_name"],
            confidence=min(0.9, best_match["relevance_score"] / 10),
            explanation=f"Generado {best_match['element_name']} basado en palabras clave.",
            metadata={"semantic_analysis": False, "method": "keyword_matching"}
        )
    
    async def _generate_from_semantic_match(self, semantic_match: 'SemanticMatch', user_request: str) -> GenerationResult:
        """Genera desde análisis semántico"""
        
        element_config = self._map_semantic_to_config(semantic_match.element_type, semantic_match.properties)
        generated_code = self.code_generator.generate_component_code(element_config, user_request)
        
        final_confidence = self._calculate_final_confidence(semantic_match)
        explanation = self._generate_semantic_explanation(semantic_match, semantic_match.properties)
        
        return GenerationResult(
            success=True,
            generated_code=generated_code,
            component_type=semantic_match.element_type,
            confidence=final_confidence,
            explanation=explanation,
            metadata={
                "semantic_analysis": True,
                "method": "semantic_analyzer",
                "semantic_confidence": semantic_match.confidence,
                "conceptual_relevance": semantic_match.conceptual_relevance,
                "reasoning": semantic_match.reasoning
            }
        )
    
    def _map_semantic_to_config(self, element_type: str, properties: Dict[str, Any]) -> Dict[str, Any]:
        """Mapea resultado semántico a configuración de elemento"""
        
        config = {"selector": f"bc-{element_type}"}
        
        if element_type == "button":
            config["appearance"] = properties.get("color", "primary")
        elif element_type == "input":
            config["type"] = properties.get("input_type", "text")
        
        return config
    
    def _calculate_final_confidence(self, semantic_match: 'SemanticMatch') -> float:
        """Calcula confianza final optimizada"""
        
        base_confidence = semantic_match.confidence
        relevance_boost = semantic_match.conceptual_relevance * 0.2
        
        return min(0.95, base_confidence + relevance_boost)
    
    def _generate_semantic_explanation(self, semantic_match: 'SemanticMatch', properties: Dict[str, Any]) -> str:
        """Genera explicación semántica optimizada"""
        
        explanation = f"Análisis semántico detectó: {semantic_match.element_type}"
        
        if semantic_match.reasoning:
            explanation += f" (Razonamiento: {semantic_match.reasoning})"
        
        if properties:
            props_str = ", ".join([f"{k}: {v}" for k, v in properties.items() if v])
            if props_str:
                explanation += f" con propiedades: {props_str}"
        
        return explanation

# Función principal optimizada
async def generate_from_natural_language(user_request: str) -> Dict[str, Any]:
    """Función principal optimizada para generar código desde lenguaje natural"""
    
    try:
        multi_agent = SemantikaMultiAgent()
        result = await multi_agent.process_natural_request(user_request)
        
        return {
            "success": result.success,
            "generated_code": result.generated_code,
            "component_type": result.component_type,
            "confidence": result.confidence,
            "explanation": result.explanation,
            "metadata": result.metadata or {}
        }
        
    except Exception as e:
        logger.error(f"Error en generate_from_natural_language: {e}")
        return {
            "success": False,
            "generated_code": "",
            "component_type": "error",
            "confidence": 0.0,
            "explanation": f"Error interno: {str(e)}",
            "metadata": {"error": True}
        } 