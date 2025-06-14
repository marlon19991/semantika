#!/usr/bin/env python3
"""
Motor de Refinamiento Inteligente para Semantika v2.0
Sistema Avanzado de Mejora Iterativa de Código

Este motor utiliza feedback de validación para mejorar automáticamente
el código generado hasta alcanzar los estándares de calidad requeridos.
"""

import asyncio
import logging
import re
from typing import Dict, List, Optional, Any, Tuple
from dataclasses import dataclass
from datetime import datetime
import json

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class RefinementStrategy:
    """Estrategia de refinamiento específica"""
    name: str
    priority: int  # 1-10, mayor número = mayor prioridad
    applicable_criteria: List[str]
    description: str
    
@dataclass
class RefinementAction:
    """Acción específica de refinamiento"""
    strategy: str
    code_before: str
    code_after: str
    confidence: float
    reasoning: str

class CodePatternLibrary:
    """Biblioteca de patrones de código corregidos y optimizados"""
    
    def __init__(self):
        self.patterns = self._load_patterns()
    
    def _load_patterns(self) -> Dict[str, Any]:
        """Carga patrones de código optimizados"""
        return {
            "button_patterns": {
                "basic_button": {
                    "template": '<bc-button appearance="{appearance}" size="{size}" {extra_attributes}>{content}</bc-button>',
                    "default_values": {
                        "appearance": "primary",
                        "size": "medium",
                        "content": "Acción",
                        "extra_attributes": ""
                    },
                    "variations": {
                        "with_icon": '<bc-button appearance="{appearance}" size="{size}" {extra_attributes}><bc-icon name="{icon}"></bc-icon> {content}</bc-button>',
                        "with_click": '<bc-button appearance="{appearance}" size="{size}" (click)="{click_handler}" {extra_attributes}>{content}</bc-button>',
                        "disabled": '<bc-button appearance="{appearance}" size="{size}" [disabled]="true" {extra_attributes}>{content}</bc-button>'
                    }
                },
                "native_button": {
                    "template": '<button bc-button appearance="{appearance}" size="{size}" {extra_attributes}>{content}</button>',
                    "default_values": {
                        "appearance": "primary",
                        "size": "medium", 
                        "content": "Acción",
                        "extra_attributes": ""
                    }
                }
            },
            "input_patterns": {
                "basic_input": {
                    "template": '<bc-input label="{label}" placeholder="{placeholder}" type="{type}" {extra_attributes}></bc-input>',
                    "default_values": {
                        "label": "Etiqueta",
                        "placeholder": "Ingresa información",
                        "type": "text",
                        "extra_attributes": ""
                    },
                    "variations": {
                        "required": '<bc-input label="{label}" placeholder="{placeholder}" type="{type}" [required]="true" {extra_attributes}></bc-input>',
                        "with_validation": '<bc-input label="{label}" placeholder="{placeholder}" type="{type}" [required]="true" [pattern]="{pattern}" {extra_attributes}></bc-input>',
                        "with_model": '<bc-input label="{label}" placeholder="{placeholder}" type="{type}" [(ngModel)]="modelValue" {extra_attributes}></bc-input>'
                    }
                }
            },
            "modal_patterns": {
                "basic_modal": {
                    "template": '<bc-modal title="{title}" size="{size}" {extra_attributes}>\n  {content}\n</bc-modal>',
                    "default_values": {
                        "title": "Modal",
                        "size": "medium",
                        "content": "  <p>Contenido del modal</p>",
                        "extra_attributes": ""
                    },
                    "variations": {
                        "confirmation": '<bc-modal title="{title}" size="small" {extra_attributes}>\n  <p>{message}</p>\n  <div class="modal-actions">\n    <bc-button appearance="secondary" (click)="cancel()">Cancelar</bc-button>\n    <bc-button appearance="primary" (click)="confirm()">Confirmar</bc-button>\n  </div>\n</bc-modal>'
                    }
                }
            }
        }

class SmartRefinementEngine:
    """Motor inteligente de refinamiento de código"""
    
    def __init__(self):
        self.pattern_library = CodePatternLibrary()
        self.refinement_strategies = self._load_refinement_strategies()
        self.improvement_history = {}
    
    def _load_refinement_strategies(self) -> List[RefinementStrategy]:
        """Carga estrategias de refinamiento ordenadas por prioridad"""
        return [
            RefinementStrategy(
                name="fix_critical_syntax",
                priority=10,
                applicable_criteria=["syntax_correctness"],
                description="Corrige errores críticos de sintaxis HTML/Angular"
            ),
            RefinementStrategy(
                name="ensure_component_validity",
                priority=9,
                applicable_criteria=["component_validity"],
                description="Asegura que se usen componentes válidos del Design System"
            ),
            RefinementStrategy(
                name="optimize_properties",
                priority=8,
                applicable_criteria=["properties_accuracy"],
                description="Optimiza propiedades según la solicitud del usuario"
            ),
            RefinementStrategy(
                name="enhance_accessibility",
                priority=7,
                applicable_criteria=["accessibility_compliance"],
                description="Mejora la accesibilidad del componente"
            ),
            RefinementStrategy(
                name="apply_design_system_standards",
                priority=6,
                applicable_criteria=["design_system_adherence"],
                description="Aplica estándares estrictos del Design System"
            ),
            RefinementStrategy(
                name="improve_semantic_alignment",
                priority=5,
                applicable_criteria=["semantic_alignment"],
                description="Mejora la alineación semántica con la solicitud"
            )
        ]
    
    async def refine_code_intelligently(
        self, 
        original_code: str, 
        user_request: str, 
        validation_results: List[Any],
        trace_id: str
    ) -> Tuple[str, List[RefinementAction]]:
        """
        Refina el código usando estrategias inteligentes basadas en los resultados de validación
        """
        
        logger.info(f"[{trace_id}] Iniciando refinamiento inteligente...")
        
        current_code = original_code
        applied_actions = []
        
        # Ordenar estrategias por prioridad y aplicabilidad
        applicable_strategies = self._identify_applicable_strategies(validation_results)
        
        for strategy in applicable_strategies:
            logger.info(f"[{trace_id}] Aplicando estrategia: {strategy.name}")
            
            try:
                refined_code, action = await self._apply_strategy(
                    strategy, current_code, user_request, validation_results, trace_id
                )
                
                if refined_code != current_code:
                    applied_actions.append(action)
                    current_code = refined_code
                    logger.info(f"[{trace_id}] ✅ Estrategia {strategy.name} aplicada exitosamente")
                else:
                    logger.info(f"[{trace_id}] ⚪ Estrategia {strategy.name} no aplicó cambios")
                    
            except Exception as e:
                logger.error(f"[{trace_id}] ❌ Error aplicando estrategia {strategy.name}: {e}")
                continue
        
        logger.info(f"[{trace_id}] Refinamiento completado. {len(applied_actions)} acciones aplicadas")
        
        return current_code, applied_actions
    
    def _identify_applicable_strategies(self, validation_results: List[Any]) -> List[RefinementStrategy]:
        """Identifica qué estrategias son aplicables según los resultados de validación"""
        
        applicable = []
        failed_criteria = []
        
        # Identificar criterios que fallaron
        for result in validation_results:
            if not result.passed:
                failed_criteria.append(result.criterion.value)
        
        # Filtrar estrategias aplicables y ordenar por prioridad
        for strategy in self.refinement_strategies:
            if any(criterion in failed_criteria for criterion in strategy.applicable_criteria):
                applicable.append(strategy)
        
        # Ordenar por prioridad (mayor prioridad primero)
        applicable.sort(key=lambda s: s.priority, reverse=True)
        
        return applicable
    
    async def _apply_strategy(
        self, 
        strategy: RefinementStrategy, 
        code: str, 
        user_request: str, 
        validation_results: List[Any],
        trace_id: str
    ) -> Tuple[str, RefinementAction]:
        """Aplica una estrategia específica de refinamiento"""
        
        if strategy.name == "fix_critical_syntax":
            return await self._fix_critical_syntax(code, user_request, validation_results, trace_id)
        
        elif strategy.name == "ensure_component_validity":
            return await self._ensure_component_validity(code, user_request, validation_results, trace_id)
        
        elif strategy.name == "optimize_properties":
            return await self._optimize_properties(code, user_request, validation_results, trace_id)
        
        elif strategy.name == "enhance_accessibility":
            return await self._enhance_accessibility(code, user_request, validation_results, trace_id)
        
        elif strategy.name == "apply_design_system_standards":
            return await self._apply_design_system_standards(code, user_request, validation_results, trace_id)
        
        elif strategy.name == "improve_semantic_alignment":
            return await self._improve_semantic_alignment(code, user_request, validation_results, trace_id)
        
        else:
            # Estrategia no implementada
            return code, RefinementAction(
                strategy=strategy.name,
                code_before=code,
                code_after=code,
                confidence=0.0,
                reasoning="Estrategia no implementada"
            )
    
    async def _fix_critical_syntax(
        self, code: str, user_request: str, validation_results: List[Any], trace_id: str
    ) -> Tuple[str, RefinementAction]:
        """Corrige errores críticos de sintaxis"""
        
        original_code = code
        
        # 1. Corregir tags auto-cerrados mal formados
        code = re.sub(r'<(bc-input[^>]*[^/\s])>', r'<\1 />', code)
        
        # 2. Asegurar comillas en atributos
        code = re.sub(r'(\w+)=([^"\'\s>]+)(?=\s|>)', r'\1="\2"', code)
        
        # 3. Corregir espacios en nombres de atributos
        code = re.sub(r'(\w+)\s*=\s*(["\'][^"\']*["\'])', r'\1=\2', code)
        
        # 4. Corregir bindings Angular mal formados
        code = re.sub(r'\[\s*(\w+)\s*\]', r'[\1]', code)
        code = re.sub(r'\(\s*(\w+)\s*\)', r'(\1)', code)
        
        # 5. Asegurar estructura básica de tags
        if not re.search(r'<\w+[^>]*>.*<\/\w+>|<\w+[^>]*\/>', code):
            # Si no hay estructura válida, usar patrón básico
            if 'button' in user_request.lower() or 'botón' in user_request.lower():
                code = '<bc-button appearance="primary">Acción</bc-button>'
            elif 'input' in user_request.lower() or 'campo' in user_request.lower():
                code = '<bc-input label="Campo" placeholder="Ingresa información"></bc-input>'
        
        return code, RefinementAction(
            strategy="fix_critical_syntax",
            code_before=original_code,
            code_after=code,
            confidence=0.9,
            reasoning="Corrigió errores críticos de sintaxis HTML/Angular"
        )
    
    async def _ensure_component_validity(
        self, code: str, user_request: str, validation_results: List[Any], trace_id: str
    ) -> Tuple[str, RefinementAction]:
        """Asegura que se usen componentes válidos del Design System"""
        
        original_code = code
        
        # Detectar componentes no válidos y reemplazarlos
        invalid_patterns = {
            r'<button(?!\s+bc-button)': '<bc-button',  # button sin bc-button
            r'<input(?!\s+bc-)': '<bc-input',  # input genérico
            r'<div[^>]*modal': '<bc-modal',  # div con clase modal
        }
        
        for pattern, replacement in invalid_patterns.items():
            if re.search(pattern, code, re.IGNORECASE):
                code = re.sub(pattern, replacement, code, flags=re.IGNORECASE)
        
        # Si no se detecta ningún componente válido, crear uno basado en la solicitud
        if not re.search(r'<bc-\w+', code):
            code = self._generate_valid_component_from_request(user_request)
        
        return code, RefinementAction(
            strategy="ensure_component_validity",
            code_before=original_code,
            code_after=code,
            confidence=0.85,
            reasoning="Aseguró el uso de componentes válidos del Design System"
        )
    
    async def _optimize_properties(
        self, code: str, user_request: str, validation_results: List[Any], trace_id: str
    ) -> Tuple[str, RefinementAction]:
        """Optimiza las propiedades según la solicitud del usuario"""
        
        original_code = code
        
        # Analizar la solicitud para extraer propiedades deseadas
        desired_properties = self._extract_desired_properties(user_request)
        
        # Aplicar propiedades al código
        for prop, value in desired_properties.items():
            # Si la propiedad no existe, agregarla
            if not re.search(rf'\b{prop}\s*=', code, re.IGNORECASE):
                code = self._add_property_to_component(code, prop, value)
            # Si existe pero con valor diferente, actualizarla
            else:
                code = re.sub(
                    rf'(\b{prop}\s*=\s*["\'])[^"\']*(["\'])',
                    rf'\1{value}\2',
                    code,
                    flags=re.IGNORECASE
                )
        
        return code, RefinementAction(
            strategy="optimize_properties",
            code_before=original_code,
            code_after=code,
            confidence=0.8,
            reasoning=f"Optimizó propiedades: {list(desired_properties.keys())}"
        )
    
    async def _enhance_accessibility(
        self, code: str, user_request: str, validation_results: List[Any], trace_id: str
    ) -> Tuple[str, RefinementAction]:
        """Mejora la accesibilidad del componente"""
        
        original_code = code
        
        # 1. Agregar aria-label si no existe
        if not re.search(r'aria-label\s*=', code, re.IGNORECASE):
            if 'button' in code.lower():
                aria_label = self._generate_aria_label_for_button(code, user_request)
                code = self._add_property_to_component(code, 'aria-label', aria_label)
            elif 'input' in code.lower():
                # Para inputs, el label ya proporciona accesibilidad
                pass
        
        # 2. Agregar role si es necesario
        if not re.search(r'role\s*=', code, re.IGNORECASE):
            if '<button' in code.lower() and 'bc-button' not in code.lower():
                code = self._add_property_to_component(code, 'role', 'button')
        
        # 3. Asegurar tabindex apropiado para elementos interactivos
        if re.search(r'<(?:button|bc-button)', code, re.IGNORECASE):
            if not re.search(r'tabindex\s*=', code, re.IGNORECASE):
                # Los elementos button nativos ya son focusables, no necesitan tabindex
                pass
        
        return code, RefinementAction(
            strategy="enhance_accessibility",
            code_before=original_code,
            code_after=code,
            confidence=0.85,
            reasoning="Mejoró la accesibilidad con atributos ARIA apropiados"
        )
    
    async def _apply_design_system_standards(
        self, code: str, user_request: str, validation_results: List[Any], trace_id: str
    ) -> Tuple[str, RefinementAction]:
        """Aplica estándares estrictos del Design System"""
        
        original_code = code
        
        # 1. Asegurar uso de prefijo bc- en componentes
        code = re.sub(r'<button(?!\s)', '<bc-button', code, flags=re.IGNORECASE)
        code = re.sub(r'<input(?!\s)', '<bc-input', code, flags=re.IGNORECASE)
        
        # 2. Validar y corregir valores de appearance
        valid_appearances = ["primary", "secondary", "success", "danger", "warning", "info"]
        appearance_match = re.search(r'appearance\s*=\s*["\']([^"\']+)["\']', code, re.IGNORECASE)
        
        if appearance_match:
            current_appearance = appearance_match.group(1).lower()
            if current_appearance not in valid_appearances:
                # Mapear a apariencia válida más cercana
                appearance_mapping = {
                    "blue": "primary", "azul": "primary",
                    "green": "success", "verde": "success", 
                    "red": "danger", "rojo": "danger",
                    "yellow": "warning", "amarillo": "warning",
                    "gray": "secondary", "gris": "secondary"
                }
                new_appearance = appearance_mapping.get(current_appearance, "primary")
                code = re.sub(
                    r'(appearance\s*=\s*["\'])[^"\']*(["\'])',
                    rf'\1{new_appearance}\2',
                    code,
                    flags=re.IGNORECASE
                )
        
        # 3. Asegurar tamaños válidos
        valid_sizes = ["small", "medium", "large"]
        size_match = re.search(r'size\s*=\s*["\']([^"\']+)["\']', code, re.IGNORECASE)
        
        if size_match:
            current_size = size_match.group(1).lower()
            if current_size not in valid_sizes:
                size_mapping = {
                    "pequeño": "small", "chico": "small", "mini": "small",
                    "mediano": "medium", "normal": "medium", "estándar": "medium",
                    "grande": "large", "big": "large", "xl": "large"
                }
                new_size = size_mapping.get(current_size, "medium")
                code = re.sub(
                    r'(size\s*=\s*["\'])[^"\']*(["\'])',
                    rf'\1{new_size}\2',
                    code,
                    flags=re.IGNORECASE
                )
        
        return code, RefinementAction(
            strategy="apply_design_system_standards",
            code_before=original_code,
            code_after=code,
            confidence=0.9,
            reasoning="Aplicó estándares estrictos del Design System de Bancolombia"
        )
    
    async def _improve_semantic_alignment(
        self, code: str, user_request: str, validation_results: List[Any], trace_id: str
    ) -> Tuple[str, RefinementAction]:
        """Mejora la alineación semántica con la solicitud del usuario"""
        
        original_code = code
        
        # 1. Extraer y mejorar el contenido del texto
        text_content = self._extract_desired_text_content(user_request)
        if text_content:
            # Reemplazar contenido genérico con el texto específico solicitado
            code = re.sub(
                r'(>)[^<>]*(</)', 
                rf'\1{text_content}\2', 
                code
            )
        
        # 2. Ajustar el tipo de componente si no coincide con la solicitud
        if 'modal' in user_request.lower() and 'bc-modal' not in code.lower():
            # Convertir a modal si se solicitó específicamente
            code = self._convert_to_modal(code, text_content or "Contenido del modal")
        
        # 3. Ajustar propiedades para mejor alineación semántica
        if 'confirmación' in user_request.lower() or 'confirmar' in user_request.lower():
            if 'appearance' not in code or 'primary' not in code:
                code = self._add_property_to_component(code, 'appearance', 'primary')
        
        if 'cancelar' in user_request.lower() or 'cerrar' in user_request.lower():
            if 'appearance' not in code or 'secondary' not in code:
                code = self._add_property_to_component(code, 'appearance', 'secondary')
        
        return code, RefinementAction(
            strategy="improve_semantic_alignment",
            code_before=original_code,
            code_after=code,
            confidence=0.75,
            reasoning="Mejoró la alineación semántica con la solicitud del usuario"
        )
    
    # ===== MÉTODOS AUXILIARES =====
    
    def _extract_desired_properties(self, user_request: str) -> Dict[str, str]:
        """Extrae propiedades deseadas de la solicitud del usuario"""
        
        properties = {}
        request_lower = user_request.lower()
        
        # Mapear colores a appearances
        color_mapping = {
            "azul": "primary", "blue": "primary",
            "verde": "success", "green": "success",
            "rojo": "danger", "red": "danger", 
            "amarillo": "warning", "yellow": "warning",
            "gris": "secondary", "gray": "secondary", "grey": "secondary"
        }
        
        for color, appearance in color_mapping.items():
            if color in request_lower:
                properties["appearance"] = appearance
                break
        
        # Mapear tamaños
        if any(word in request_lower for word in ["grande", "big", "large", "xl"]):
            properties["size"] = "large"
        elif any(word in request_lower for word in ["pequeño", "small", "mini", "chico"]):
            properties["size"] = "small"
        elif any(word in request_lower for word in ["mediano", "medium", "normal"]):
            properties["size"] = "medium"
        
        # Mapear estados
        if any(word in request_lower for word in ["requerido", "obligatorio", "required"]):
            properties["required"] = "true"
        
        if any(word in request_lower for word in ["deshabilitado", "disabled", "inactivo"]):
            properties["disabled"] = "true"
        
        # Mapear tipos de input
        if any(word in request_lower for word in ["email", "correo", "@"]):
            properties["type"] = "email"
        elif any(word in request_lower for word in ["contraseña", "password", "clave"]):
            properties["type"] = "password"
        elif any(word in request_lower for word in ["número", "numero", "number", "edad"]):
            properties["type"] = "number"
        elif any(word in request_lower for word in ["teléfono", "telefono", "celular", "móvil"]):
            properties["type"] = "tel"
        
        return properties
    
    def _add_property_to_component(self, code: str, property_name: str, property_value: str) -> str:
        """Agrega una propiedad a un componente"""
        
        # Buscar el primer tag de apertura
        tag_match = re.search(r'(<[^>]+)', code)
        if tag_match:
            tag = tag_match.group(1)
            
            # Si el tag ya termina con />, insertar antes
            if tag.endswith('/>'):
                new_tag = tag[:-2] + f' {property_name}="{property_value}" />'
            else:
                new_tag = tag + f' {property_name}="{property_value}"'
            
            code = code.replace(tag, new_tag, 1)
        
        return code
    
    def _generate_aria_label_for_button(self, code: str, user_request: str) -> str:
        """Genera un aria-label apropiado para un botón"""
        
        # Extraer el contenido del botón
        content_match = re.search(r'>([^<]+)<', code)
        if content_match:
            content = content_match.group(1).strip()
            if content and content != "Acción":
                return f"Botón {content}"
        
        # Si no hay contenido específico, generar basado en la solicitud
        request_lower = user_request.lower()
        if 'confirmar' in request_lower:
            return "Botón confirmar"
        elif 'cancelar' in request_lower:
            return "Botón cancelar"
        elif 'guardar' in request_lower:
            return "Botón guardar"
        elif 'enviar' in request_lower:
            return "Botón enviar"
        else:
            return "Botón de acción"
    
    def _generate_valid_component_from_request(self, user_request: str) -> str:
        """Genera un componente válido basado en la solicitud"""
        
        request_lower = user_request.lower()
        
        if any(word in request_lower for word in ["botón", "button", "btn"]):
            return '<bc-button appearance="primary">Acción</bc-button>'
        elif any(word in request_lower for word in ["input", "campo", "entrada"]):
            return '<bc-input label="Campo" placeholder="Ingresa información"></bc-input>'
        elif any(word in request_lower for word in ["modal", "ventana", "diálogo"]):
            return '<bc-modal title="Modal">\n  <p>Contenido del modal</p>\n</bc-modal>'
        else:
            # Por defecto, crear un botón
            return '<bc-button appearance="primary">Acción</bc-button>'
    
    def _extract_desired_text_content(self, user_request: str) -> Optional[str]:
        """Extrae el contenido de texto deseado de la solicitud"""
        
        # Buscar patrones de texto
        patterns = [
            r'que diga\s*["\']?([^"\']+)["\']?',
            r'con texto\s*["\']?([^"\']+)["\']?',
            r'texto\s*["\']?([^"\']+)["\']?',
            r'["\']([^"\']+)["\']'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, user_request, re.IGNORECASE)
            if match:
                text = match.group(1).strip()
                if len(text) > 1 and len(text) < 50:  # Texto razonable
                    return text
        
        return None
    
    def _convert_to_modal(self, code: str, content: str) -> str:
        """Convierte código existente a un modal"""
        
        # Extraer el contenido actual si existe
        content_match = re.search(r'>([^<]+)<', code)
        if content_match:
            existing_content = content_match.group(1).strip()
            if existing_content and existing_content != "Acción":
                content = existing_content
        
        return f'<bc-modal title="Modal">\n  <p>{content}</p>\n</bc-modal>'

# ===== INSTANCIA GLOBAL =====
refinement_engine = SmartRefinementEngine()

# ===== FUNCIÓN PRINCIPAL DE INTEGRACIÓN =====
async def refine_code_with_intelligence(
    code: str, 
    user_request: str, 
    validation_results: List[Any], 
    trace_id: str
) -> Tuple[str, List[RefinementAction]]:
    """
    Función principal que refina código usando inteligencia artificial
    """
    return await refinement_engine.refine_code_intelligently(
        code, user_request, validation_results, trace_id
    ) 