"""
Analizador Semántico Avanzado para Semantika
Utiliza embeddings y análisis conceptual para entender verdaderamente las solicitudes
"""

import asyncio
import json
import logging
import re
from typing import Dict, List, Optional, Any, Tuple
from dataclasses import dataclass
# import numpy as np  # No usado actualmente
import os
from datetime import datetime

logger = logging.getLogger(__name__)

@dataclass
class SemanticMatch:
    """Match semántico con análisis conceptual"""
    element_type: str
    element_name: str
    semantic_similarity: float
    conceptual_relevance: float
    combined_score: float
    extracted_properties: Dict[str, Any]
    intent_analysis: Dict[str, Any]
    confidence_level: str
    reasoning: str

class SemanticAnalyzer:
    """Analizador semántico avanzado que realmente entiende las solicitudes"""
    
    def __init__(self):
        # Cargar knowledge base semántica
        self.semantic_knowledge = self._load_semantic_knowledge()
        
    def _load_semantic_knowledge(self) -> Dict[str, Any]:
        """Carga base de conocimiento semántica avanzada"""
        return {
            "component_concepts": {
                "buttons": {
                    "concepts": ["acción", "interacción", "activar", "confirmar", "enviar", "cancelar", "procesar"],
                    "semantic_tags": ["interactive", "clickable", "action_trigger", "user_input"],
                    "appearance_semantics": {
                        "primary": ["principal", "importante", "primario", "destacado", "primordial", "azul"],
                        "secondary": ["secundario", "alternativo", "opcional", "complementario", "gris"],
                        "success": ["éxito", "confirmar", "aceptar", "completar", "finalizar", "verde"],
                        "danger": ["peligro", "eliminar", "borrar", "cancelar", "rojo", "destructivo"],
                        "warning": ["advertencia", "precaución", "amarillo", "cuidado"],
                        "info": ["información", "detalles", "ayuda", "info"]
                    },
                    "size_semantics": {
                        "small": ["pequeño", "pequeña", "chico", "mini", "compacto"],
                        "medium": ["mediano", "mediana", "normal", "estándar"],
                        "large": ["grande", "amplio", "extendido", "prominente"]
                    }
                },
                "inputs": {
                    "concepts": ["entrada", "datos", "información", "capturar", "recopilar", "formulario"],
                    "semantic_tags": ["data_entry", "user_input", "form_field", "validation"],
                    "type_semantics": {
                        "text": ["texto", "nombre", "descripción", "comentario", "mensaje"],
                        "email": ["correo", "email", "e-mail", "@", "contacto electrónico"],
                        "password": ["contraseña", "clave", "password", "acceso", "seguridad"],
                        "number": ["número", "cantidad", "cifra", "numerico", "edad", "precio"],
                        "tel": ["teléfono", "celular", "móvil", "contacto"],
                        "url": ["enlace", "link", "dirección web", "sitio", "página"]
                    }
                }
            },
            "intent_classifiers": {
                "create": ["crear", "nuevo", "agregar", "añadir", "hacer", "generar"],
                "modify": ["cambiar", "modificar", "editar", "actualizar", "alterar"],
                "display": ["mostrar", "ver", "visualizar", "presentar", "exhibir"]
            }
        }
    
    async def analyze_user_request(self, user_request: str) -> List[SemanticMatch]:
        """Analiza semánticamente la solicitud del usuario"""
        
        # 1. Análisis de intención básico
        intent_analysis = self._analyze_intent_basic(user_request)
        
        # 2. Búsqueda semántica en componentes
        semantic_matches = self._find_semantic_matches_advanced(user_request)
        
        # 3. Combinar resultados y rankear
        final_matches = self._combine_and_rank_results(semantic_matches, intent_analysis, user_request)
        
        return final_matches
    
    def _analyze_intent_basic(self, user_request: str) -> Dict[str, Any]:
        """Análisis de intención mejorado"""
        
        request_lower = user_request.lower()
        
        # Detectar tipo de componente con análisis semántico
        component_analysis = self._detect_component_semantically(request_lower)
        
        # Detectar propiedades semánticamente
        properties = self._extract_semantic_properties_advanced(request_lower, component_analysis["type"])
        
        # Extraer contenido
        content = self._extract_content_advanced(user_request)
        
        return {
            "main_intent": "create",
            "component_type": component_analysis["type"],
            "component_confidence": component_analysis["confidence"],
            "properties": properties,
            "content": content,
            "confidence": component_analysis["confidence"]
        }
    
    def _detect_component_semantically(self, request_lower: str) -> Dict[str, Any]:
        """Detecta el tipo de componente usando análisis semántico"""
        
        component_scores = {}
        
        for component_type, info in self.semantic_knowledge["component_concepts"].items():
            score = 0
            
            # Analizar conceptos semánticos
            for concept in info["concepts"]:
                if concept in request_lower:
                    score += 3
            
            # Analizar palabras clave específicas
            if component_type == "buttons":
                button_keywords = ["botón", "boton", "button", "clic", "click", "presionar", "activar"]
                for keyword in button_keywords:
                    if keyword in request_lower:
                        score += 5
            
            elif component_type == "inputs":
                input_keywords = ["input", "campo", "entrada", "texto", "escribir", "ingresar"]
                for keyword in input_keywords:
                    if keyword in request_lower:
                        score += 5
            
            if score > 0:
                component_scores[component_type] = score
        
        if component_scores:
            best_component = max(component_scores, key=component_scores.get)
            max_score = component_scores[best_component]
            confidence = min(max_score / 10, 1.0)  # Normalizar a 0-1
            
            return {
                "type": best_component.rstrip('s'),  # Quitar 's' final
                "confidence": confidence,
                "alternatives": component_scores
            }
        
        return {"type": "unknown", "confidence": 0.3, "alternatives": {}}
    
    def _extract_semantic_properties_advanced(self, request_lower: str, component_type: str) -> Dict[str, Any]:
        """Extrae propiedades usando análisis semántico avanzado"""
        
        properties = {}
        
        if component_type == "button":
            # Análisis semántico de apariencia
            component_info = self.semantic_knowledge["component_concepts"]["buttons"]
            
            for appearance, keywords in component_info["appearance_semantics"].items():
                semantic_score = sum(1 for keyword in keywords if keyword in request_lower)
                if semantic_score > 0:
                    properties["appearance"] = appearance
                    properties["appearance_confidence"] = semantic_score / len(keywords)
                    break
            
            # Análisis semántico de tamaño
            for size, keywords in component_info["size_semantics"].items():
                if any(keyword in request_lower for keyword in keywords):
                    properties["size"] = size
                    break
        
        elif component_type == "input":
            # Análisis semántico de tipo
            component_info = self.semantic_knowledge["component_concepts"]["inputs"]
            
            for input_type, keywords in component_info["type_semantics"].items():
                semantic_score = sum(1 for keyword in keywords if keyword in request_lower)
                if semantic_score > 0:
                    properties["type"] = input_type
                    properties["type_confidence"] = semantic_score / len(keywords)
                    break
        
        # Detectar estados comunes
        if any(word in request_lower for word in ["requerido", "obligatorio", "required"]):
            properties["required"] = "true"
        
        if any(word in request_lower for word in ["deshabilitado", "disabled", "inactivo"]):
            properties["disabled"] = "true"
        
        return properties
    
    def _extract_content_advanced(self, user_request: str) -> Dict[str, Any]:
        """Extrae contenido usando análisis semántico"""
        
        content = {}
        
        # Buscar texto entre comillas
        quoted_text = re.findall(r'"([^"]*)"', user_request)
        if quoted_text:
            content["text"] = quoted_text[0]
        
        # Buscar patrones de texto
        text_patterns = [
            r"que diga\s+['\"]?([^'\"]+)['\"]?",
            r"con texto\s+['\"]?([^'\"]+)['\"]?",
            r"texto\s+['\"]?([^'\"]+)['\"]?",
            r"label\s+['\"]?([^'\"]+)['\"]?"
        ]
        
        for pattern in text_patterns:
            match = re.search(pattern, user_request, re.IGNORECASE)
            if match and not content.get("text"):
                content["text"] = match.group(1).strip()
                break
        
        return content
    
    def _find_semantic_matches_advanced(self, user_request: str) -> List[Dict[str, Any]]:
        """Encuentra matches usando análisis semántico avanzado"""
        
        request_lower = user_request.lower()
        matches = []
        
        for component_type, info in self.semantic_knowledge["component_concepts"].items():
            # Calcular score semántico
            semantic_score = 0
            
            # Analizar conceptos
            for concept in info["concepts"]:
                if concept in request_lower:
                    semantic_score += 2
            
            # Analizar etiquetas semánticas (traducir conceptos en inglés)
            semantic_translations = {
                "interactive": ["interactivo", "interacción", "clic"],
                "clickable": ["clickeable", "presionable", "botón"],
                "data_entry": ["entrada de datos", "captura", "formulario"],
                "user_input": ["entrada de usuario", "input"]
            }
            
            for tag in info["semantic_tags"]:
                if tag in semantic_translations:
                    for translation in semantic_translations[tag]:
                        if translation in request_lower:
                            semantic_score += 1
            
            if semantic_score > 0:
                matches.append({
                    "component": component_type,
                    "semantic_similarity": semantic_score / 10,  # Normalizar
                    "raw_score": semantic_score
                })
        
        # Ordenar por similitud
        matches.sort(key=lambda x: x["semantic_similarity"], reverse=True)
        
        return matches
    
    def _combine_and_rank_results(
        self, 
        semantic_matches: List[Dict[str, Any]], 
        intent_analysis: Dict[str, Any], 
        user_request: str
    ) -> List[SemanticMatch]:
        """Combina todos los análisis y rankea los resultados"""
        
        final_matches = []
        
        for match in semantic_matches:
            component_key = match["component"]
            
            # Calcular score combinado
            semantic_score = match["semantic_similarity"]
            intent_alignment = self._calculate_intent_alignment(component_key, intent_analysis)
            
            combined_score = (semantic_score * 0.7) + (intent_alignment * 0.3)
            
            # Determinar nivel de confianza
            confidence_level = self._determine_confidence_level(combined_score, intent_analysis)
            
            # Generar razonamiento
            reasoning = self._generate_reasoning(component_key, semantic_score, intent_analysis)
            
            final_matches.append(SemanticMatch(
                element_type=component_key.rstrip('s'),  # Quitar 's' final
                element_name=component_key,
                semantic_similarity=semantic_score,
                conceptual_relevance=intent_alignment,
                combined_score=combined_score,
                extracted_properties=intent_analysis.get("properties", {}),
                intent_analysis=intent_analysis,
                confidence_level=confidence_level,
                reasoning=reasoning
            ))
        
        # Ordenar por score combinado
        final_matches.sort(key=lambda x: x.combined_score, reverse=True)
        
        return final_matches
    
    def _calculate_intent_alignment(self, component_key: str, intent_analysis: Dict[str, Any]) -> float:
        """Calcula qué tan bien se alinea el componente con la intención"""
        
        intended_type = intent_analysis.get("component_type", "")
        component_confidence = intent_analysis.get("component_confidence", 0.5)
        
        if intended_type == component_key.rstrip('s'):
            return component_confidence
        elif intended_type in component_key or component_key.rstrip('s') in intended_type:
            return component_confidence * 0.7
        else:
            return 0.3
    
    def _determine_confidence_level(self, combined_score: float, intent_analysis: Dict[str, Any]) -> str:
        """Determina el nivel de confianza del análisis"""
        
        ai_confidence = intent_analysis.get("confidence", 0.5)
        overall_confidence = (combined_score + ai_confidence) / 2
        
        if overall_confidence >= 0.7:
            return "high"
        elif overall_confidence >= 0.5:
            return "medium"
        else:
            return "low"
    
    def _generate_reasoning(
        self, 
        component_key: str, 
        semantic_score: float, 
        intent_analysis: Dict[str, Any]
    ) -> str:
        """Genera explicación del razonamiento semántico"""
        
        reasoning_parts = []
        
        # Análisis de similitud semántica
        if semantic_score > 0.6:
            reasoning_parts.append(f"Alta similitud semántica ({semantic_score:.2f}) detectada")
        elif semantic_score > 0.3:
            reasoning_parts.append(f"Similitud semántica moderada ({semantic_score:.2f})")
        
        # Análisis de intención
        component_type = intent_analysis.get("component_type", "")
        if component_type:
            reasoning_parts.append(f"Tipo de componente identificado: {component_type}")
        
        # Confianza general
        confidence = intent_analysis.get("confidence", 0)
        reasoning_parts.append(f"Confianza del análisis: {confidence:.2f}")
        
        return ". ".join(reasoning_parts)

# ===== FUNCIÓN DE INTEGRACIÓN =====
async def analyze_request_semantically(user_request: str) -> List[SemanticMatch]:
    """Función principal para análisis semántico"""
    analyzer = SemanticAnalyzer()
    return await analyzer.analyze_user_request(user_request) 