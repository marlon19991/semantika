-- Semantika Database Initialization Script
-- Creates tables and sample data for the RAG Design-System Assistant

-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create components table
CREATE TABLE IF NOT EXISTS components (
    id VARCHAR(100) PRIMARY KEY,
    slug VARCHAR(200) NOT NULL,
    kind VARCHAR(50) NOT NULL,
    props JSONB,
    description TEXT,
    embedding vector(512),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for vector similarity search
CREATE INDEX IF NOT EXISTS components_embedding_idx 
ON components USING ivfflat (embedding vector_cosine_ops) 
WITH (lists = 100);

-- Create index for text search
CREATE INDEX IF NOT EXISTS components_description_idx 
ON components USING gin(to_tsvector('spanish', description));

-- Insert sample Bancolombia components
INSERT INTO components (id, slug, kind, props, description) VALUES
('bc-button', 'bc-button', 'interactive', 
 '{"appearance": ["primary", "secondary", "ghost"], "size": ["small", "medium", "large"], "disabled": "boolean", "loading": "boolean"}',
 'Botón principal del design system de Bancolombia. Permite diferentes apariencias como primario, secundario y ghost. Soporta estados de loading y disabled.'),

('bc-input', 'bc-input', 'form', 
 '{"type": ["text", "email", "password", "number"], "required": "boolean", "placeholder": "string", "label": "string", "error": "string"}',
 'Campo de entrada de texto del design system. Soporta validaciones, etiquetas, placeholders y mensajes de error. Compatible con formularios reactivos.'),

('bc-card', 'bc-card', 'layout', 
 '{"elevation": ["none", "low", "medium", "high"], "padding": ["none", "small", "medium", "large"], "border": "boolean"}',
 'Componente de tarjeta para agrupar contenido relacionado. Permite diferentes niveles de elevación y espaciado interno.'),

('bc-modal', 'bc-modal', 'overlay', 
 '{"size": ["small", "medium", "large", "fullscreen"], "closable": "boolean", "backdrop": "boolean"}',
 'Modal o diálogo para mostrar contenido superpuesto. Configurable en tamaño y comportamiento de cierre.'),

('bc-table', 'bc-table', 'data', 
 '{"sortable": "boolean", "filterable": "boolean", "pagination": "boolean", "selectable": ["none", "single", "multiple"]}',
 'Tabla de datos con funcionalidades avanzadas como ordenamiento, filtrado, paginación y selección de filas.'),

('bc-select', 'bc-select', 'form', 
 '{"multiple": "boolean", "searchable": "boolean", "placeholder": "string", "options": "array"}',
 'Selector dropdown con soporte para selección múltiple, búsqueda y opciones personalizables.'),

('bc-checkbox', 'bc-checkbox', 'form', 
 '{"checked": "boolean", "disabled": "boolean", "indeterminate": "boolean", "label": "string"}',
 'Checkbox para selección booleana con soporte para estados indeterminados y etiquetas.'),

('bc-radio', 'bc-radio', 'form', 
 '{"name": "string", "value": "string", "checked": "boolean", "disabled": "boolean"}',
 'Radio button para selección única dentro de un grupo de opciones mutuamente excluyentes.'),

('bc-tooltip', 'bc-tooltip', 'overlay', 
 '{"position": ["top", "bottom", "left", "right"], "trigger": ["hover", "click", "focus"], "content": "string"}',
 'Tooltip para mostrar información adicional al usuario. Configurable en posición y evento disparador.'),

('bc-badge', 'bc-badge', 'display', 
 '{"variant": ["success", "warning", "error", "info"], "size": ["small", "medium", "large"], "rounded": "boolean"}',
 'Badge o etiqueta para mostrar estados, categorías o información destacada con diferentes variantes visuales.'),

('bc-accordion', 'bc-accordion', 'layout', 
 '{"multiple": "boolean", "collapsible": "boolean", "variant": ["default", "bordered", "separated"]}',
 'Acordeón para mostrar contenido colapsable en secciones. Permite múltiples secciones abiertas simultáneamente.'),

('bc-tabs', 'bc-tabs', 'navigation', 
 '{"orientation": ["horizontal", "vertical"], "variant": ["default", "pills", "underlined"], "lazy": "boolean"}',
 'Pestañas para organizar contenido en diferentes secciones navegables con carga perezosa opcional.'),

('bc-progress', 'bc-progress', 'feedback', 
 '{"value": "number", "max": "number", "variant": ["default", "success", "warning", "error"], "showLabel": "boolean"}',
 'Barra de progreso para mostrar el avance de procesos con diferentes variantes visuales y etiquetas opcionales.'),

('bc-alert', 'bc-alert', 'feedback', 
 '{"type": ["info", "success", "warning", "error"], "closable": "boolean", "icon": "boolean", "title": "string"}',
 'Alerta para comunicar mensajes importantes al usuario con diferentes tipos y opciones de cierre.'),

('bc-spinner', 'bc-spinner', 'feedback', 
 '{"size": ["small", "medium", "large"], "color": ["primary", "secondary", "success", "warning", "error"]}',
 'Indicador de carga giratorio para mostrar procesos en curso con diferentes tamaños y colores.');

-- Note: Los embeddings se generarán automáticamente cuando el sistema esté en funcionamiento
-- Este script solo crea la estructura y datos base sin embeddings 