"""
Sistema Multi-Agente Avanzado para Semantika v2.0
Integra análisis semántico real para entender verdaderamente las solicitudes
"""

import asyncio
import json
import os
from typing import Dict, List, Optional, Any, Union
from dataclasses import dataclass
import logging
import re

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
    """Navegador inteligente de la base de conocimiento"""
    
    def __init__(self):
        self.knowledge_base = self._load_expanded_knowledge()
        
    def _load_expanded_knowledge(self) -> Dict[str, Any]:
        """Carga la base de conocimiento expandida"""
        
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
        
        # Expandir con información completa
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
                    "tel": {"selector": "bc-input", "type": "tel"},
                    "url": {"selector": "bc-input", "type": "url"},
                    "search": {"selector": "bc-input", "type": "search"},
                    "textarea": {"selector": "bc-textarea"}
                },
                "selections": {
                    "dropdown": {"selector": "bc-select"},
                    "radio": {"selector": "bc-radio-group"},
                    "checkbox": {"selector": "bc-checkbox"},
                    "toggle": {"selector": "bc-toggle"},
                    "slider": {"selector": "bc-slider"}
                },
                "feedback": {
                    "alert": {"selector": "bc-alert"},
                    "toast": {"selector": "bc-toast"}, 
                    "notification": {"selector": "bc-notification"},
                    "progress": {"selector": "bc-progress"},
                    "loading": {"selector": "bc-loading"}
                },
                "navigation": {
                    "menu": {"selector": "bc-menu"},
                    "breadcrumb": {"selector": "bc-breadcrumb"},
                    "tabs": {"selector": "bc-tabs"},
                    "pagination": {"selector": "bc-pagination"},
                    "stepper": {"selector": "bc-stepper"}
                },
                "containers": {
                    "card": {"selector": "bc-card"},
                    "modal": {"selector": "bc-modal"},
                    "panel": {"selector": "bc-panel"},
                    "accordion": {"selector": "bc-accordion"},
                    "drawer": {"selector": "bc-drawer"}
                },
                "data_display": {
                    "table": {"selector": "bc-table"},
                    "list": {"selector": "bc-list"},
                    "tree": {"selector": "bc-tree"},
                    "calendar": {"selector": "bc-calendar"},
                    "timeline": {"selector": "bc-timeline"}
                }
            },

        }
        
        return expanded_knowledge
    
    def find_matching_elements(self, user_request: str) -> List[Dict[str, Any]]:
        """Encuentra elementos que coinciden con la solicitud del usuario"""
        
        request_lower = user_request.lower()
        matching_elements = []
        
        # Buscar en todos los tipos de elementos
        for category, elements in self.knowledge_base.get("element_types", {}).items():
            for element_name, element_config in elements.items():
                
                # Calcular relevancia basada en palabras clave
                relevance_score = 0
                
                # Buscar coincidencias directas
                if element_name in request_lower:
                    relevance_score += 10
                    
                # Buscar coincidencias en la categoría
                if category[:-1] in request_lower:  # Quitar 's' final
                    relevance_score += 5
                    
                # Palabras clave específicas (solo las más usadas)
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
                        relevance_score += 7
                
                if relevance_score > 0:
                    matching_elements.append({
                        "category": category,
                        "name": element_name,
                        "config": element_config,
                        "relevance": relevance_score
                    })
        
        # Ordenar por relevancia
        matching_elements.sort(key=lambda x: x["relevance"], reverse=True)
        
        return matching_elements

class IntelligentCodeGenerator:
    """Generador inteligente de código"""
    
    def __init__(self, knowledge_navigator: KnowledgeNavigator):
        self.navigator = knowledge_navigator
        
    def generate_component_code(self, element_config: Dict[str, Any], user_request: str) -> str:
        """Genera código para un componente específico"""
        
        selector = element_config.get("selector", "bc-component")
        
        # Extraer propiedades de la solicitud del usuario
        props = self._extract_properties_from_request(user_request, element_config)
        content = self._extract_content_from_request(user_request)
        
        # Construir el código del componente
        if props:
            prop_string = " " + " ".join([f'{key}="{value}"' for key, value in props.items()])
        else:
            prop_string = ""
            
        if content:
            code = f"<{selector}{prop_string}>{content}</{selector}>"
        else:
            code = f"<{selector}{prop_string}></{selector}>"
            
        return code
    
    def _extract_properties_from_request(self, request: str, element_config: Dict[str, Any]) -> Dict[str, str]:
        """Extrae propiedades específicas de la solicitud"""
        
        props = {}
        request_lower = request.lower()
        
        # Propiedades por defecto del elemento
        for key, value in element_config.items():
            if key != "selector":
                props[key] = value
        
        # Detectar colores/apariencias
        color_mappings = {
            "azul": "primary",
            "azules": "primary", 
            "primario": "primary",
            "primary": "primary",
            "verde": "success",
            "verdes": "success",
            "éxito": "success",
            "success": "success",
            "rojo": "danger", 
            "rojos": "danger",
            "peligro": "danger",
            "error": "danger",
            "danger": "danger",
            "amarillo": "warning",
            "amarillos": "warning",
            "advertencia": "warning",
            "warning": "warning",
            "gris": "secondary",
            "grises": "secondary",
            "secundario": "secondary",
            "secondary": "secondary",
            "información": "info",
            "info": "info",
            "enlace": "link",
            "link": "link"
        }
        
        for color_word, appearance in color_mappings.items():
            if color_word in request_lower:
                props["appearance"] = appearance
                break
        
        # Detectar tamaños
        size_mappings = {
            "pequeño": "small",
            "pequeña": "small", 
            "chico": "small",
            "small": "small",
            "grande": "large",
            "large": "large",
            "mediano": "medium",
            "mediana": "medium",
            "medium": "medium"
        }
        
        for size_word, size_value in size_mappings.items():
            if size_word in request_lower:
                props["size"] = size_value
                break
        
        # Detectar si es requerido
        if any(word in request_lower for word in ["requerido", "obligatorio", "necesario", "required"]):
            props["required"] = "true"
        
        # Detectar si está deshabilitado
        if any(word in request_lower for word in ["deshabilitado", "inactivo", "disabled"]):
            props["disabled"] = "true"
            
        # Detectar placeholder
        placeholder_patterns = [
            r"placeholder\s+['\"]([^'\"]+)['\"]",
            r"placeholder\s+(\w+)",
            r"ejemplo\s+['\"]([^'\"]+)['\"]",
            r"ejemplo\s+(\w+)"
        ]
        
        for pattern in placeholder_patterns:
            match = re.search(pattern, request, re.IGNORECASE)
            if match:
                props["placeholder"] = match.group(1)
                break
            
        return props
    
    def _extract_content_from_request(self, request: str) -> str:
        """Extrae el contenido/texto del elemento"""
        
        # Buscar texto entre comillas
        quoted_text = re.findall(r'"([^"]*)"', request)
        if quoted_text:
            return quoted_text[0]
        
        quoted_text = re.findall(r"'([^']*)'", request)
        if quoted_text:
            return quoted_text[0]
        
        # Buscar patrones comunes
        patterns = [
            r"que diga\s+(.+?)(?:\s|$)",
            r"con texto\s+(.+?)(?:\s|$)",
            r"texto\s+(.+?)(?:\s|$)",
            r"label\s+(.+?)(?:\s|$)",
            r"título\s+(.+?)(?:\s|$)",
            r"titulo\s+(.+?)(?:\s|$)"
        ]
        
        for pattern in patterns:
            match = re.search(pattern, request, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        return ""

class ComplexElementGenerator:
    """Generador de elementos complejos (formularios, tablas, modals)"""
    
    def __init__(self, knowledge_navigator: KnowledgeNavigator):
        self.navigator = knowledge_navigator
    
    def generate_form(self, user_request: str) -> str:
        """Genera un formulario completo"""
        
        # Detectar campos del formulario
        form_fields = self._detect_form_fields(user_request)
        
        if not form_fields:
            return """
<form>
  <div class="form-field">
    <label>Campo de ejemplo</label>
    <bc-input type="text" placeholder="Ingresa texto aquí"></bc-input>
  </div>
  <div class="form-actions">
    <bc-button appearance="primary">Enviar</bc-button>
  </div>
</form>"""
        
        # Generar HTML del formulario
        form_html = ["<form [formGroup]=\"dynamicForm\" (ngSubmit)=\"onSubmit()\">"]
        
        for field in form_fields:
            field_html = f"""
  <div class="form-field">
    <label for="{field['id']}">{field['label']}</label>
    <{field['selector']} id="{field['id']}" formControlName="{field['name']}" {field['props']}></{field['selector']}>
  </div>"""
            form_html.append(field_html)
        
        form_html.append("""
  <div class="form-actions">
    <bc-button type="submit" appearance="primary">Enviar</bc-button>
    <bc-button type="button" appearance="secondary">Cancelar</bc-button>
  </div>
</form>""")
        
        return "\n".join(form_html)
    
    def _detect_form_fields(self, request: str) -> List[Dict[str, str]]:
        """Detecta campos en una descripción de formulario"""
        
        fields = []
        request_lower = request.lower()
        
        # Patrones comunes de campos
        field_patterns = {
            "nombre": {"selector": "bc-input", "type": "text", "label": "Nombre"},
            "email": {"selector": "bc-input", "type": "email", "label": "Email"}, 
            "correo": {"selector": "bc-input", "type": "email", "label": "Correo electrónico"},
            "contraseña": {"selector": "bc-input", "type": "password", "label": "Contraseña"},
            "password": {"selector": "bc-input", "type": "password", "label": "Contraseña"},
            "teléfono": {"selector": "bc-input", "type": "tel", "label": "Teléfono"},
            "telefono": {"selector": "bc-input", "type": "tel", "label": "Teléfono"},
            "edad": {"selector": "bc-input", "type": "number", "label": "Edad"},
            "descripción": {"selector": "bc-textarea", "type": "", "label": "Descripción"},
            "descripcion": {"selector": "bc-textarea", "type": "", "label": "Descripción"},
            "comentarios": {"selector": "bc-textarea", "type": "", "label": "Comentarios"}
        }
        
        field_counter = 1
        for field_name, field_config in field_patterns.items():
            if field_name in request_lower:
                field_id = f"field_{field_counter}"
                props = f'type="{field_config["type"]}"' if field_config["type"] else ""
                
                fields.append({
                    "id": field_id,
                    "name": field_name.replace("ñ", "n"),
                    "label": field_config["label"],
                    "selector": field_config["selector"],
                    "props": props
                })
                field_counter += 1
        
        return fields
    
    def generate_modal(self, user_request: str) -> str:
        """Genera un modal"""
        
        title = self._extract_modal_title(user_request)
        content = self._extract_modal_content(user_request)
        buttons = self._extract_modal_buttons(user_request)
        
        return f"""
<bc-modal [isOpen]="isModalOpen" (onClose)="closeModal()">
  <bc-modal-header>
    <h2>{title or 'Título del Modal'}</h2>
  </bc-modal-header>
  <bc-modal-body>
    {content or 'Contenido del modal aquí'}
  </bc-modal-body>
  <bc-modal-footer>
    {buttons or '<bc-button appearance="primary" (click)="confirmAction()">Confirmar</bc-button><bc-button appearance="secondary" (click)="closeModal()">Cancelar</bc-button>'}
  </bc-modal-footer>
</bc-modal>"""
    
    def _extract_modal_title(self, request: str) -> str:
        patterns = [
            r"título\s+['\"]([^'\"]+)['\"]",
            r"titulo\s+['\"]([^'\"]+)['\"]",
            r"modal\s+de\s+([^,\.]+)",
            r"ventana\s+de\s+([^,\.]+)"
        ]
        
        for pattern in patterns:
            match = re.search(pattern, request, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        return ""
    
    def _extract_modal_content(self, request: str) -> str:
        patterns = [
            r"contenido\s+['\"]([^'\"]+)['\"]",
            r"mensaje\s+['\"]([^'\"]+)['\"]",
            r"texto\s+['\"]([^'\"]+)['\"]"
        ]
        
        for pattern in patterns:
            match = re.search(pattern, request, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        return ""
    
    def _extract_modal_buttons(self, request: str) -> str:
        if "confirmar" in request.lower() and "cancelar" in request.lower():
            return '<bc-button appearance="primary" (click)="confirmAction()">Confirmar</bc-button>\n    <bc-button appearance="secondary" (click)="closeModal()">Cancelar</bc-button>'
        elif "eliminar" in request.lower():
            return '<bc-button appearance="danger" (click)="deleteAction()">Eliminar</bc-button>\n    <bc-button appearance="secondary" (click)="closeModal()">Cancelar</bc-button>'
        elif "guardar" in request.lower():
            return '<bc-button appearance="success" (click)="saveAction()">Guardar</bc-button>\n    <bc-button appearance="secondary" (click)="closeModal()">Cancelar</bc-button>'
        
        return ""

class SemantikaMultiAgent:
    """Sistema multi-agente principal de Semantika"""
    
    def __init__(self):
        self.navigator = KnowledgeNavigator()
        self.code_generator = IntelligentCodeGenerator(self.navigator)
        self.complex_generator = ComplexElementGenerator(self.navigator)
        
    async def process_natural_request(self, user_request: str) -> GenerationResult:
        """Procesa una solicitud en lenguaje natural usando análisis semántico avanzado"""
        
        logger.info(f"🤖 Procesando solicitud con análisis semántico: {user_request[:100]}...")
        
        try:
            # FASE 1: Análisis semántico avanzado
            if SEMANTIC_ANALYZER_AVAILABLE:
                logger.info("🧠 Ejecutando análisis semántico profundo...")
                semantic_matches = await analyze_request_semantically(user_request)
                
                if semantic_matches:
                    best_match = semantic_matches[0]
                    logger.info(f"✨ Mejor match semántico: {best_match.element_name} (confianza: {best_match.confidence_level})")
                    
                    # Usar análisis semántico para generar código
                    return await self._generate_from_semantic_match(best_match, user_request)
                else:
                    logger.warning("⚠️ No se encontraron matches semánticos, usando fallback")
            
            # FASE 2: Fallback al sistema anterior
            logger.info("🔄 Usando sistema de generación tradicional")
            
            # 1. Detectar si es una solicitud compleja
            if self._is_complex_request(user_request):
                return await self._process_complex_request(user_request)
            
            # 2. Procesar solicitud simple
            return await self._process_simple_request(user_request)
            
        except Exception as e:
            logger.error(f"❌ Error procesando solicitud: {e}")
            return GenerationResult(
                success=False,
                generated_code="",
                component_type="error",
                confidence=0.0,
                explanation=f"Error interno: {str(e)}"
            )
    
    def _is_complex_request(self, request: str) -> bool:
        """Determina si es una solicitud compleja"""
        complex_keywords = [
            "formulario", "form", "modal", "tabla", "table", 
            "navegación", "navigation", "dashboard", "layout"
        ]
        
        return any(keyword in request.lower() for keyword in complex_keywords)
    
    async def _process_complex_request(self, user_request: str) -> GenerationResult:
        """Procesa solicitudes complejas"""
        
        request_lower = user_request.lower()
        
        if "formulario" in request_lower or "form" in request_lower:
            generated_code = self.complex_generator.generate_form(user_request)
            component_type = "form"
            explanation = "Generé un formulario completo con los campos que detecté en tu solicitud."
            
        elif "modal" in request_lower:
            generated_code = self.complex_generator.generate_modal(user_request)
            component_type = "modal"
            explanation = "Creé un modal con el contenido y botones especificados."
            
        else:
            # Fallback a procesamiento simple
            return await self._process_simple_request(user_request)
        
        return GenerationResult(
            success=True,
            generated_code=generated_code,
            component_type=component_type,
            confidence=0.8,
            explanation=explanation,
            metadata={"generation_type": "complex"}
        )
    
    async def _process_simple_request(self, user_request: str) -> GenerationResult:
        """Procesa solicitudes simples"""
        
        # 1. Analizar la solicitud
        matching_elements = self.navigator.find_matching_elements(user_request)
        
        if not matching_elements:
            return GenerationResult(
                success=False,
                generated_code="",
                component_type="unknown",
                confidence=0.0,
                explanation="No encontré ningún componente que coincida con tu solicitud. Intenta con términos como 'botón', 'input', 'tabla', 'modal', etc."
            )
        
        # 2. Usar el elemento más relevante
        best_match = matching_elements[0]
        
        # 3. Generar código
        generated_code = self.code_generator.generate_component_code(
            best_match["config"], 
            user_request
        )
        
        # 4. Calcular confianza
        confidence = min(best_match["relevance"] / 10.0, 1.0)
        
        # 5. Generar explicación
        explanation = self._generate_explanation(best_match, user_request)
        
        return GenerationResult(
            success=True,
            generated_code=generated_code,
            component_type=f"{best_match['category']}.{best_match['name']}",
            confidence=confidence,
            explanation=explanation,
            metadata={
                "alternatives": matching_elements[1:4] if len(matching_elements) > 1 else [],
                "detected_properties": self.code_generator._extract_properties_from_request(
                    user_request, best_match["config"]
                ),
                "generation_type": "simple"
            }
        )
    
    def _generate_explanation(self, best_match: Dict[str, Any], user_request: str) -> str:
        """Genera una explicación de la decisión tomada"""
        
        element_name = best_match["name"]
        category = best_match["category"]
        
        explanation = f"Identifiqué que necesitas un **{element_name}** de la categoría **{category}**. "
        
        # Explicar propiedades detectadas
        props = self.code_generator._extract_properties_from_request(
            user_request, best_match["config"]
        )
        
        if props:
            prop_explanations = []
            for key, value in props.items():
                if key == "appearance":
                    prop_explanations.append(f"apariencia **{value}**")
                elif key == "size":
                    prop_explanations.append(f"tamaño **{value}**")
                elif key == "required":
                    prop_explanations.append("campo **requerido**")
                elif key == "disabled":
                    prop_explanations.append("estado **deshabilitado**")
                elif key == "placeholder":
                    prop_explanations.append(f"placeholder **'{value}'**")
            
            if prop_explanations:
                explanation += f"Detecté las siguientes características: {', '.join(prop_explanations)}. "
        
        # Explicar contenido
        content = self.code_generator._extract_content_from_request(user_request)
        if content:
            explanation += f"El texto será: **'{content}'**. "
        
        explanation += "Este componente utiliza el Design System de Bancolombia y sigue las mejores prácticas de Angular."
        
        return explanation
    
    async def _generate_from_semantic_match(self, semantic_match: 'SemanticMatch', user_request: str) -> GenerationResult:
        """Genera código usando el resultado del análisis semántico"""
        
        try:
            # Extraer información del match semántico
            element_type = semantic_match.element_type
            properties = semantic_match.extracted_properties
            
            # Mapear tipo semántico a configuración de componente
            element_config = self._map_semantic_to_config(element_type, properties)
            
            # Generar código usando el generador inteligente
            generated_code = self.code_generator.generate_component_code(element_config, user_request)
            
            # Calcular confianza final
            confidence = self._calculate_final_confidence(semantic_match)
            
            # Generar explicación semántica
            explanation = self._generate_semantic_explanation(semantic_match, properties)
            
            return GenerationResult(
                success=True,
                generated_code=generated_code,
                component_type=f"{element_type}.{semantic_match.element_name}",
                confidence=confidence,
                explanation=explanation,
                metadata={
                    "semantic_analysis": True,
                    "reasoning": semantic_match.reasoning,
                    "confidence_level": semantic_match.confidence_level,
                    "detected_properties": properties,
                    "generation_type": "semantic"
                }
            )
            
        except Exception as e:
            logger.error(f"Error generando desde match semántico: {e}")
            # Fallback al sistema tradicional
            return await self._process_simple_request(user_request)
    
    def _map_semantic_to_config(self, element_type: str, properties: Dict[str, Any]) -> Dict[str, Any]:
        """Mapea el análisis semántico a configuración de componente"""
        
        # Configuraciones base por tipo
        base_configs = {
            "button": {"selector": "bc-button", "appearance": "primary"},
            "input": {"selector": "bc-input", "type": "text"},
            "modal": {"selector": "bc-modal"},
            "table": {"selector": "bc-table"}
        }
        
        config = base_configs.get(element_type, {"selector": "bc-component"})
        
        # Aplicar propiedades semánticas
        if properties:
            config.update(properties)
        
        return config
    
    def _calculate_final_confidence(self, semantic_match: 'SemanticMatch') -> float:
        """Calcula la confianza final combinando múltiples factores"""
        
        # Factores de confianza
        semantic_confidence = semantic_match.semantic_similarity
        conceptual_confidence = semantic_match.conceptual_relevance
        combined_score = semantic_match.combined_score
        
        # Peso por nivel de confianza
        confidence_weights = {
            "high": 1.0,
            "medium": 0.8,
            "low": 0.6
        }
        
        confidence_weight = confidence_weights.get(semantic_match.confidence_level, 0.6)
        
        # Combinación final
        final_confidence = (combined_score * 0.7) + (confidence_weight * 0.3)
        
        return min(final_confidence, 1.0)
    
    def _generate_semantic_explanation(self, semantic_match: 'SemanticMatch', properties: Dict[str, Any]) -> str:
        """Genera explicación basada en análisis semántico"""
        
        explanation_parts = []
        
        # Explicación del análisis semántico
        explanation_parts.append(f"🧠 **Análisis Semántico**: {semantic_match.reasoning}")
        
        # Elemento identificado
        explanation_parts.append(f"🎯 **Componente**: {semantic_match.element_name}")
        
        # Propiedades detectadas
        if properties:
            prop_descriptions = []
            for key, value in properties.items():
                if key == "appearance":
                    prop_descriptions.append(f"apariencia **{value}**")
                elif key == "size": 
                    prop_descriptions.append(f"tamaño **{value}**")
                elif key == "type":
                    prop_descriptions.append(f"tipo **{value}**")
                elif key == "text":
                    prop_descriptions.append(f"texto **'{value}'**")
                elif key == "required":
                    prop_descriptions.append("**requerido**")
            
            if prop_descriptions:
                explanation_parts.append(f"🔧 **Propiedades**: {', '.join(prop_descriptions)}")
        
        # Nivel de confianza
        confidence_emoji = {"high": "🟢", "medium": "🟡", "low": "🔴"}
        emoji = confidence_emoji.get(semantic_match.confidence_level, "⚪")
        explanation_parts.append(f"{emoji} **Confianza**: {semantic_match.confidence_level}")
        
        return " | ".join(explanation_parts)

# Instancia global
semantika_agent = SemantikaMultiAgent()

async def generate_from_natural_language(user_request: str) -> Dict[str, Any]:
    """Función principal para generar código desde lenguaje natural"""
    
    result = await semantika_agent.process_natural_request(user_request)
    
    return {
        "success": result.success,
        "generated_code": result.generated_code,
        "component_type": result.component_type,
        "confidence": result.confidence,
        "explanation": result.explanation,
        "metadata": result.metadata or {}
    } 