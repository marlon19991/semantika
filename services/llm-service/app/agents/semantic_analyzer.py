#!/usr/bin/env python3
"""
Analizador Semántico Optimizado para Semantika v2.0
Versión simplificada sin dependencias pesadas
"""

import logging
from typing import Dict, List, Optional, Any, Tuple
from dataclasses import dataclass

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class SemanticMatch:
    """Resultado del análisis semántico optimizado"""
    element_type: str
    confidence: float
    conceptual_relevance: float
    properties: Dict[str, Any]
    reasoning: str

class SemanticAnalyzer:
    """Analizador semántico optimizado"""
    
    def __init__(self):
        self.semantic_knowledge = self._build_semantic_knowledge()
    
    def _build_semantic_knowledge(self) -> Dict[str, Any]:
        """Construye base de conocimiento semántico esencial"""
        
        return {
            "component_concepts": {
                "button": {
                    "synonyms": ["botón", "boton", "button", "btn"],
                    "actions": ["click", "presionar", "pulsar", "hacer clic", "clickear"],
                    "purposes": ["acción", "action", "interactuar", "activar", "trigger"],
                    "descriptors": ["interactivo", "clickeable", "presionable"]
                },
                "input": {
                    "synonyms": ["input", "campo", "entrada", "field"],
                    "actions": ["escribir", "capturar", "ingresar", "introducir", "teclear"],
                    "purposes": ["información", "datos", "texto", "valor", "contenido"],
                    "descriptors": ["editable", "escribible", "entrada de datos"]
                },
                "modal": {
                    "synonyms": ["modal", "ventana", "diálogo", "popup", "dialog"],
                    "actions": ["mostrar", "abrir", "cerrar", "aparecer"],
                    "purposes": ["confirmación", "información", "alerta", "dialogo"],
                    "descriptors": ["emergente", "flotante", "sobre"]
                }
            },
            "semantic_mappings": {
                "interactive_elements": ["button"],
                "data_entry": ["input"],
                "overlays": ["modal"]
            }
        }
    
    async def analyze_user_request(self, user_request: str) -> Optional[SemanticMatch]:
        """Analiza semánticamente la solicitud del usuario"""
        
        try:
            request_lower = user_request.lower()
            best_match = None
            highest_confidence = 0.0
            
            # Analizar cada tipo de componente
            for component_type, knowledge in self.semantic_knowledge["component_concepts"].items():
                
                confidence = 0.0
                conceptual_relevance = 0.0
                reasoning_parts = []
                
                # 1. Análisis de sinónimos directos
                for synonym in knowledge["synonyms"]:
                    if synonym in request_lower:
                        confidence += 0.4
                        reasoning_parts.append(f"sinónimo '{synonym}'")
                        break
                
                # 2. Análisis de acciones
                for action in knowledge["actions"]:
                    if action in request_lower:
                        confidence += 0.3
                        conceptual_relevance += 0.2
                        reasoning_parts.append(f"acción '{action}'")
                        break
                
                # 3. Análisis de propósitos
                for purpose in knowledge["purposes"]:
                    if purpose in request_lower:
                        confidence += 0.2
                        conceptual_relevance += 0.3
                        reasoning_parts.append(f"propósito '{purpose}'")
                        break
                
                # 4. Análisis de descriptores conceptuales
                for descriptor in knowledge["descriptors"]:
                    if descriptor in request_lower:
                        confidence += 0.1
                        conceptual_relevance += 0.1
                        reasoning_parts.append(f"descriptor '{descriptor}'")
                
                # 5. Extraer propiedades
                properties = self._extract_semantic_properties(request_lower, component_type)
                
                # Si hay match significativo
                if confidence > highest_confidence and confidence > 0.3:
                    highest_confidence = confidence
                    reasoning = "Detectado por " + ", ".join(reasoning_parts) if reasoning_parts else "análisis semántico"
                    
                    best_match = SemanticMatch(
                        element_type=component_type,
                        confidence=min(confidence, 1.0),
                        conceptual_relevance=min(conceptual_relevance, 1.0),
                        properties=properties,
                        reasoning=reasoning
                    )
            
            return best_match
            
        except Exception as e:
            logger.error(f"Error en análisis semántico: {e}")
            return None
    
    def _extract_semantic_properties(self, request: str, component_type: str) -> Dict[str, Any]:
        """Extrae propiedades semánticas según el tipo de componente"""
        
        properties = {}
        
        if component_type == "button":
            # Colores semánticos para botones
            color_semantics = {
                "peligro": "danger", "eliminar": "danger", "borrar": "danger",
                "éxito": "success", "exitoso": "success", "completar": "success",
                "advertencia": "warning", "cuidado": "warning", "alerta": "warning",
                "información": "info", "info": "info", "ayuda": "info",
                "primario": "primary", "principal": "primary", "importante": "primary"
            }
            
            for semantic, appearance in color_semantics.items():
                if semantic in request:
                    properties["color"] = appearance
                    break
        
        elif component_type == "input":
            # Tipos de input por contexto
            if any(word in request for word in ["email", "correo", "@"]):
                properties["input_type"] = "email"
            elif any(word in request for word in ["contraseña", "password", "clave"]):
                properties["input_type"] = "password"
            elif any(word in request for word in ["número", "numero", "edad", "cantidad"]):
                properties["input_type"] = "number"
            else:
                properties["input_type"] = "text"
        
        return properties

# Instancia global
semantic_analyzer = SemanticAnalyzer()

async def analyze_request_semantically(user_request: str) -> Optional[SemanticMatch]:
    """Función principal de análisis semántico"""
    return await semantic_analyzer.analyze_user_request(user_request) 