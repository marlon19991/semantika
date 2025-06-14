#!/usr/bin/env python3
"""
🧠 SEMANTIKA - GENERADOR DE COMPONENTES
=======================================
Backend FastAPI simplificado para generación de componentes del Design System
Versión: 2.0.0 - Optimizada
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
import logging
from datetime import datetime
import re

# Configuración de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("semantika")

# Crear aplicación FastAPI
app = FastAPI(
    title="🧠 Semantika - Generador de Componentes",
    description="API optimizada para generación de componentes del Design System de Bancolombia",
    version="2.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos
class ComponentRequest(BaseModel):
    description: str

class ComponentResponse(BaseModel):
    success: bool
    component_code: str
    component_type: str
    description: str
    timestamp: str

# Plantillas optimizadas de componentes
COMPONENT_TEMPLATES = {
    "button": {
        "primary": '<bc-button type="primary" size="medium">{text}</bc-button>',
        "secondary": '<bc-button type="secondary" size="medium">{text}</bc-button>',
        "ghost": '<bc-button type="ghost" size="medium">{text}</bc-button>',
        "danger": '<bc-button type="danger" size="medium">{text}</bc-button>',
        "success": '<bc-button type="success" size="medium">{text}</bc-button>'
    },
    "card": {
        "basic": '''<bc-card>
    <bc-card-header>
        <h3>{title}</h3>
    </bc-card-header>
    <bc-card-body>
        <p>{content}</p>
    </bc-card-body>
    <bc-card-footer>
        <bc-button type="primary">{action}</bc-button>
    </bc-card-footer>
</bc-card>''',
        "product": '''<bc-card type="product">
    <bc-card-body>
        <h4>{title}</h4>
        <p class="price">{price}</p>
        <p>{description}</p>
    </bc-card-body>
    <bc-card-actions>
        <bc-button type="primary">Solicitar</bc-button>
        <bc-button type="secondary">Más Info</bc-button>
    </bc-card-actions>
</bc-card>'''
    },
    "form": {
        "input": '''<bc-form-group>
    <bc-label for="{id}">{label}</bc-label>
    <bc-input type="{type}" id="{id}" placeholder="{placeholder}" required></bc-input>
</bc-form-group>''',
        "login": '''<bc-form>
    <bc-form-group>
        <bc-label for="email">Correo Electrónico</bc-label>
        <bc-input type="email" id="email" placeholder="tu@email.com" required></bc-input>
    </bc-form-group>
    <bc-form-group>
        <bc-label for="password">Contraseña</bc-label>
        <bc-input type="password" id="password" placeholder="••••••••" required></bc-input>
    </bc-form-group>
    <bc-form-actions>
        <bc-button type="primary" size="large">Iniciar Sesión</bc-button>
    </bc-form-actions>
</bc-form>'''
    },
    "alert": {
        "info": '<bc-alert type="info">{message}</bc-alert>',
        "success": '<bc-alert type="success">{message}</bc-alert>',
        "warning": '<bc-alert type="warning">{message}</bc-alert>',
        "error": '<bc-alert type="error">{message}</bc-alert>'
    },
    "modal": {
        "basic": '''<bc-modal>
    <bc-modal-header>
        <h3>{title}</h3>
    </bc-modal-header>
    <bc-modal-body>
        <p>{content}</p>
    </bc-modal-body>
    <bc-modal-footer>
        <bc-button type="primary">{confirm_text}</bc-button>
        <bc-button type="secondary">{cancel_text}</bc-button>
    </bc-modal-footer>
</bc-modal>'''
    }
}

# Palabras clave para detección de componentes
COMPONENT_KEYWORDS = {
    "button": ["botón", "button", "btn", "click", "presionar", "acción", "enviar", "submit", "guardar", "cancelar"],
    "card": ["tarjeta", "card", "producto", "información", "contenido", "panel"],
    "form": ["formulario", "form", "input", "campo", "login", "registro", "contacto", "datos"],
    "alert": ["alerta", "alert", "mensaje", "notificación", "aviso", "error", "éxito", "advertencia"],
    "modal": ["modal", "popup", "ventana", "diálogo", "confirmación"]
}

# Colores y estilos para diferentes tipos
STYLE_KEYWORDS = {
    "primary": ["primario", "principal", "azul", "importante"],
    "secondary": ["secundario", "gris", "alternativo"],
    "success": ["éxito", "verde", "correcto", "exitoso", "guardar"],
    "danger": ["peligro", "rojo", "eliminar", "borrar", "error"],
    "warning": ["advertencia", "amarillo", "cuidado", "atención"],
    "info": ["información", "azul claro", "info", "ayuda"]
}

@app.post("/generate-component", response_model=ComponentResponse)
async def generate_component(request: ComponentRequest):
    """
    Generar componente optimizado basado en descripción
    """
    try:
        logger.info(f"Generando componente: {request.description}")
        
        # Detectar tipo de componente
        component_type = detect_component_type(request.description)
        
        # Generar código del componente
        component_code = generate_optimized_component(request.description, component_type)
        
        return ComponentResponse(
            success=True,
            component_code=component_code,
            component_type=component_type,
            description=request.description,
            timestamp=datetime.now().isoformat()
        )
        
    except Exception as e:
        logger.error(f"Error generando componente: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error generando componente: {str(e)}")

def detect_component_type(description: str) -> str:
    """Detectar el tipo de componente basado en la descripción"""
    description_lower = description.lower()
    
    # Buscar palabras clave en orden de prioridad
    for component_type, keywords in COMPONENT_KEYWORDS.items():
        if any(keyword in description_lower for keyword in keywords):
            return component_type
    
    # Por defecto, retornar button si no se detecta nada específico
    return "button"

def detect_style_type(description: str) -> str:
    """Detectar el estilo basado en la descripción"""
    description_lower = description.lower()
    
    for style_type, keywords in STYLE_KEYWORDS.items():
        if any(keyword in description_lower for keyword in keywords):
            return style_type
    
    return "primary"  # Por defecto

def generate_optimized_component(description: str, component_type: str) -> str:
    """Generar el mejor componente posible basado en la descripción"""
    
    if component_type == "button":
        return generate_button_component(description)
    elif component_type == "card":
        return generate_card_component(description)
    elif component_type == "form":
        return generate_form_component(description)
    elif component_type == "alert":
        return generate_alert_component(description)
    elif component_type == "modal":
        return generate_modal_component(description)
    else:
        # Fallback a botón
        return generate_button_component(description)

def generate_button_component(description: str) -> str:
    """Generar botón optimizado"""
    style = detect_style_type(description)
    
    # Extraer texto del botón
    text = extract_button_text(description)
    
    template = COMPONENT_TEMPLATES["button"].get(style, COMPONENT_TEMPLATES["button"]["primary"])
    return template.format(text=text)

def generate_card_component(description: str) -> str:
    """Generar tarjeta optimizada"""
    description_lower = description.lower()
    
    if "producto" in description_lower or "precio" in description_lower:
        return COMPONENT_TEMPLATES["card"]["product"].format(
            title="Producto Financiero",
            price="$1.234.567",
            description="Descripción del producto"
        )
    else:
        return COMPONENT_TEMPLATES["card"]["basic"].format(
            title="Título de la Tarjeta",
            content="Contenido de la tarjeta con información relevante.",
            action="Ver Más"
        )

def generate_form_component(description: str) -> str:
    """Generar formulario optimizado"""
    description_lower = description.lower()
    
    if "login" in description_lower or "iniciar sesión" in description_lower:
        return COMPONENT_TEMPLATES["form"]["login"]
    else:
        # Formulario básico con input
        field_type = "text"
        if "email" in description_lower or "correo" in description_lower:
            field_type = "email"
        elif "password" in description_lower or "contraseña" in description_lower:
            field_type = "password"
        elif "teléfono" in description_lower or "telefono" in description_lower:
            field_type = "tel"
        
        return COMPONENT_TEMPLATES["form"]["input"].format(
            id=field_type + "_field",
            label=extract_field_label(description),
            type=field_type,
            placeholder=f"Ingresa tu {extract_field_label(description).lower()}"
        )

def generate_alert_component(description: str) -> str:
    """Generar alerta optimizada"""
    style = detect_style_type(description)
    message = extract_alert_message(description)
    
    template = COMPONENT_TEMPLATES["alert"].get(style, COMPONENT_TEMPLATES["alert"]["info"])
    return template.format(message=message)

def generate_modal_component(description: str) -> str:
    """Generar modal optimizado"""
    return COMPONENT_TEMPLATES["modal"]["basic"].format(
        title="Confirmación",
        content="¿Estás seguro de que deseas realizar esta acción?",
        confirm_text="Confirmar",
        cancel_text="Cancelar"
    )

def extract_button_text(description: str) -> str:
    """Extraer texto del botón de la descripción"""
    description_lower = description.lower()
    
    # Patrones comunes para texto de botones
    if "guardar" in description_lower:
        return "Guardar"
    elif "enviar" in description_lower:
        return "Enviar"
    elif "cancelar" in description_lower:
        return "Cancelar"
    elif "eliminar" in description_lower or "borrar" in description_lower:
        return "Eliminar"
    elif "confirmar" in description_lower:
        return "Confirmar"
    elif "continuar" in description_lower:
        return "Continuar"
    elif "aceptar" in description_lower:
        return "Aceptar"
    else:
        return "Botón"

def extract_field_label(description: str) -> str:
    """Extraer etiqueta del campo de la descripción"""
    description_lower = description.lower()
    
    if "nombre" in description_lower:
        return "Nombre"
    elif "email" in description_lower or "correo" in description_lower:
        return "Correo Electrónico"
    elif "teléfono" in description_lower or "telefono" in description_lower:
        return "Teléfono"
    elif "dirección" in description_lower or "direccion" in description_lower:
        return "Dirección"
    else:
        return "Campo"

def extract_alert_message(description: str) -> str:
    """Extraer mensaje de la alerta de la descripción"""
    description_lower = description.lower()
    
    if "éxito" in description_lower or "exitoso" in description_lower:
        return "Operación realizada exitosamente"
    elif "error" in description_lower:
        return "Ha ocurrido un error. Por favor, intenta nuevamente"
    elif "advertencia" in description_lower or "cuidado" in description_lower:
        return "Ten cuidado con esta acción"
    else:
        return "Información importante"

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 