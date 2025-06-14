#!/bin/bash

# Script de configuración inicial para el Playground de Semantika
# Configura el entorno de desarrollo y las dependencias necesarias

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Función para mostrar mensajes
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

success() {
    echo -e "${PURPLE}[SUCCESS]${NC} $1"
}

# Banner de bienvenida
show_banner() {
    echo -e "${PURPLE}"
    echo "████████╗███████╗███╗   ███╗ █████╗ ████████╗██╗██╗  ██╗ █████╗ "
    echo "██╔═══██║██╔════╝████╗ ████║██╔══██╗╚══██╔══╝██║██║ ██╔╝██╔══██╗"
    echo "██████╔╝█████╗  ██╔████╔██║███████║   ██║   ██║█████╔╝ ███████║"
    echo "██╔═══╝ ██╔══╝  ██║╚██╔╝██║██╔══██║   ██║   ██║██╔═██╗ ██╔══██║"
    echo "██║     ███████╗██║ ╚═╝ ██║██║  ██║   ██║   ██║██║  ██╗██║  ██║"
    echo "╚═╝     ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝"
    echo ""
    echo "🎮 PLAYGROUND DE PRUEBAS PARA CÓDIGO GENERADO POR IA"
    echo "   Configuración Inicial del Ambiente de Desarrollo"
    echo -e "${NC}"
}

# Verificar dependencias del sistema
check_system_dependencies() {
    step "Verificando dependencias del sistema..."
    
    # Verificar Node.js
    if ! command -v node &> /dev/null; then
        error "Node.js no está instalado"
        echo "Por favor instala Node.js desde: https://nodejs.org/"
        exit 1
    fi
    
    local node_version=$(node --version | sed 's/v//' | cut -d. -f1)
    if [ "$node_version" -lt 14 ]; then
        error "Node.js versión 14 o superior es requerida"
        echo "Versión actual: $(node --version)"
        exit 1
    fi
    
    # Verificar npm
    if ! command -v npm &> /dev/null; then
        error "npm no está instalado"
        exit 1
    fi
    
    # Verificar Python (para servidor de desarrollo)
    if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null; then
        warn "Python no está instalado. Se usará servidor Node.js alternativo"
    fi
    
    log "Dependencias del sistema verificadas ✓"
}

# Crear estructura de directorios
create_directory_structure() {
    step "Creando estructura de directorios..."
    
    # Crear directorios necesarios
    mkdir -p src/styles
    mkdir -p src/components
    mkdir -p src/templates/examples
    mkdir -p src/templates/layouts
    mkdir -p assets/images
    mkdir -p assets/icons
    mkdir -p docs
    
    log "Estructura de directorios creada ✓"
}

# Descargar dependencias CDN
download_dependencies() {
    step "Configurando dependencias..."
    
    # Crear directorio para dependencias locales
    mkdir -p src/vendor
    
    # Descargar Monaco Editor (para editor de código)
    if ! [ -f "src/vendor/monaco-editor.js" ]; then
        log "Descargando Monaco Editor..."
        curl -sL https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js \
             -o src/vendor/monaco-editor.js || warn "No se pudo descargar Monaco Editor"
    fi
    
    # Crear archivo de configuración de dependencias
    cat > src/vendor/dependencies.json << 'EOF'
{
  "dependencies": {
    "monaco-editor": {
      "version": "0.44.0",
      "cdn": "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js",
      "local": "./vendor/monaco-editor.js"
    },
    "font-awesome": {
      "version": "6.4.0",
      "cdn": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    },
    "prism": {
      "version": "1.29.0",
      "cdn": "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
    }
  }
}
EOF
    
    log "Dependencias configuradas ✓"
}

# Crear archivos de configuración
create_config_files() {
    step "Creando archivos de configuración..."
    
    # Crear archivo de configuración del playground
    cat > config.json << 'EOF'
{
  "playground": {
    "name": "Semantika Playground",
    "version": "2.0.0",
    "description": "Ambiente de pruebas para código generado por IA",
    "author": "Semantika Team",
    "port": 3000,
    "auto_open": true,
    "live_reload": true
  },
  "features": {
    "code_editor": {
      "enabled": true,
      "theme": "vs-dark",
      "language": "html",
      "auto_format": true,
      "syntax_highlighting": true
    },
    "live_preview": {
      "enabled": true,
      "auto_refresh": true,
      "device_simulation": true,
      "responsive_mode": true
    },
    "quality_checker": {
      "enabled": true,
      "real_time_validation": true,
      "accessibility_checks": true,
      "performance_analysis": false
    },
    "component_library": {
      "enabled": true,
      "search_enabled": true,
      "categories": ["interactive", "form", "layout", "overlay", "feedback", "data", "display", "navigation"]
    }
  },
  "theme": {
    "default": "light",
    "options": ["light", "dark", "bancolombia"]
  },
  "languages": {
    "default": "es",
    "supported": ["es", "en"]
  }
}
EOF

    # Crear archivo de configuración de componentes
    cat > src/components-config.json << 'EOF'
{
  "bancolombia_design_system": {
    "version": "2.0.0",
    "components": [
      {
        "name": "bc-button",
        "category": "interactive",
        "description": "Botones interactivos con múltiples apariencias",
        "props": {
          "appearance": ["primary", "secondary", "ghost", "success", "warning", "error"],
          "size": ["small", "medium", "large"],
          "disabled": "boolean",
          "loading": "boolean"
        },
        "examples": [
          "<bc-button appearance=\"primary\">Botón Primario</bc-button>",
          "<bc-button appearance=\"secondary\" size=\"large\">Botón Secundario</bc-button>"
        ]
      },
      {
        "name": "bc-input",
        "category": "form",
        "description": "Campos de entrada con validación",
        "props": {
          "type": ["text", "email", "password", "number", "tel", "url"],
          "label": "string",
          "placeholder": "string",
          "required": "boolean",
          "disabled": "boolean"
        },
        "examples": [
          "<bc-input type=\"email\" label=\"Correo electrónico\" required></bc-input>",
          "<bc-input type=\"password\" label=\"Contraseña\" placeholder=\"Ingresa tu contraseña\"></bc-input>"
        ]
      },
      {
        "name": "bc-alert",
        "category": "feedback",
        "description": "Alertas y notificaciones",
        "props": {
          "type": ["success", "warning", "error", "info"],
          "title": "string",
          "dismissible": "boolean"
        },
        "examples": [
          "<bc-alert type=\"success\" title=\"Éxito\">Operación completada correctamente</bc-alert>",
          "<bc-alert type=\"error\" title=\"Error\">Ocurrió un problema</bc-alert>"
        ]
      }
    ]
  }
}
EOF

    log "Archivos de configuración creados ✓"
}

# Crear servidor de desarrollo
create_dev_server() {
    step "Configurando servidor de desarrollo..."
    
    # Crear servidor Node.js simple
    cat > server.js << 'EOF'
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Ruta por defecto
    if (pathname === '/') {
        pathname = '/src/index.html';
    }
    
    const filePath = path.join(__dirname, pathname);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Archivo no encontrado</h1>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Error interno del servidor</h1>');
            }
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`🎮 Semantika Playground corriendo en http://localhost:${PORT}`);
    console.log(`📝 Documentación disponible en http://localhost:${PORT}/docs/`);
    console.log('🚀 ¡Listo para probar código generado por IA!');
});
EOF

    # Crear script de inicio alternativo con Python
    cat > server.py << 'EOF'
#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 3000
DIRECTORY = "src"

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()

def main():
    os.chdir(Path(__file__).parent)
    
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🎮 Semantika Playground corriendo en http://localhost:{PORT}")
        print(f"📝 Documentación disponible en http://localhost:{PORT}/docs/")
        print("🚀 ¡Listo para probar código generado por IA!")
        print("Presiona Ctrl+C para detener el servidor")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Servidor detenido")

if __name__ == "__main__":
    main()
EOF

    chmod +x server.py
    
    log "Servidor de desarrollo configurado ✓"
}

# Crear documentación básica
create_documentation() {
    step "Creando documentación..."
    
    # Crear guía de uso
    cat > docs/GUIA_USO.md << 'EOF'
# 📖 Guía de Uso del Playground

## Inicio Rápido

1. **Generar código con Semantika**
   - Describe tu componente: "botón azul que diga Confirmar"
   - Copia el código HTML/Angular generado

2. **Probar en el Playground**
   - Pega el código en el editor
   - Haz clic en "Ejecutar"
   - Ve el resultado en la vista previa

3. **Validar calidad**
   - Revisa el panel de control de calidad
   - Aplica las sugerencias de mejora
   - Exporta el código final

## Funcionalidades Avanzadas

### Editor de Código
- Syntax highlighting automático
- Autocompletado de componentes
- Formateo automático de código
- Detección de errores en tiempo real

### Vista Previa
- Renderizado instantáneo
- Pruebas responsive
- Interacción completa con componentes
- Captura de pantalla

### Control de Calidad
- Validación de componentes del Design System
- Verificación de accesibilidad
- Análisis de sintaxis
- Sugerencias de mejora

## Componentes Disponibles

### Botones
- `bc-button`: Botones interactivos
- Apariencias: primary, secondary, ghost, success, warning, error
- Tamaños: small, medium, large

### Formularios
- `bc-input`: Campos de entrada
- Tipos: text, email, password, number, tel, url
- Validación automática

### Retroalimentación
- `bc-alert`: Alertas y notificaciones
- Tipos: success, warning, error, info
- Modo inline o fixed

## Atajos de Teclado

- `Ctrl + Enter`: Ejecutar código
- `Ctrl + Shift + F`: Formatear código
- `Ctrl + S`: Guardar/Exportar
- `F11`: Pantalla completa
- `Esc`: Salir de pantalla completa

## Solución de Problemas

### El código no se renderiza
1. Verifica la sintaxis HTML
2. Asegúrate de usar componentes válidos
3. Revisa la consola de errores

### Los estilos no se aplican
1. Verifica los nombres de componentes
2. Usa las propiedades correctas
3. Consulta la documentación de componentes

## Mejores Prácticas

1. **Siempre valida la accesibilidad**
2. **Prueba en diferentes dispositivos**
3. **Revisa las sugerencias de calidad**
4. **Usa componentes del Design System**
5. **Aplica textos descriptivos**
EOF

    # Crear documentación de componentes
    cat > docs/COMPONENTES.md << 'EOF'
# 🧩 Documentación de Componentes

## Componentes del Design System de Bancolombia

### bc-button
**Botones interactivos con múltiples apariencias**

```html
<bc-button appearance="primary" size="large">Confirmar</bc-button>
```

**Propiedades:**
- `appearance`: primary, secondary, ghost, success, warning, error
- `size`: small, medium, large
- `disabled`: boolean
- `loading`: boolean

### bc-input
**Campos de entrada con validación**

```html
<bc-input type="email" label="Correo electrónico" required></bc-input>
```

**Propiedades:**
- `type`: text, email, password, number, tel, url
- `label`: string (requerido)
- `placeholder`: string
- `required`: boolean
- `disabled`: boolean

### bc-alert
**Alertas y notificaciones**

```html
<bc-alert type="success" title="Éxito">Operación completada</bc-alert>
```

**Propiedades:**
- `type`: success, warning, error, info
- `title`: string
- `dismissible`: boolean
- `inline`: boolean

### bc-card
**Tarjetas de contenido**

```html
<bc-card title="Título de la tarjeta">
  <p>Contenido de la tarjeta</p>
</bc-card>
```

**Propiedades:**
- `title`: string
- `elevation`: number (0-5)
- `hover`: boolean

### bc-modal
**Diálogos modales**

```html
<bc-modal title="Confirmación" visible="true">
  <p>¿Estás seguro?</p>
  <div class="modal-actions">
    <bc-button appearance="secondary">Cancelar</bc-button>
    <bc-button appearance="primary">Confirmar</bc-button>
  </div>
</bc-modal>
```

**Propiedades:**
- `title`: string (requerido)
- `visible`: boolean
- `size`: small, medium, large
- `closable`: boolean

## Patrones de Uso

### Formularios
```html
<form class="bc-form">
  <bc-input type="email" label="Email" required></bc-input>
  <bc-input type="password" label="Contraseña" required></bc-input>
  <bc-button appearance="primary" type="submit">Iniciar Sesión</bc-button>
</form>
```

### Confirmaciones
```html
<bc-modal title="Confirmar eliminación" visible="true">
  <bc-alert type="warning" title="Advertencia">
    Esta acción no se puede deshacer
  </bc-alert>
  <p>¿Estás seguro de que deseas eliminar este elemento?</p>
  <div class="modal-actions">
    <bc-button appearance="secondary">Cancelar</bc-button>
    <bc-button appearance="error">Eliminar</bc-button>
  </div>
</bc-modal>
```

### Notificaciones
```html
<bc-alert type="success" title="Éxito" dismissible="true">
  El archivo se ha guardado correctamente
</bc-alert>
```
EOF

    log "Documentación creada ✓"
}

# Configurar permisos y ejecutables
setup_permissions() {
    step "Configurando permisos..."
    
    # Hacer ejecutables los scripts
    chmod +x scripts/*.sh 2>/dev/null || true
    chmod +x server.py
    
    log "Permisos configurados ✓"
}

# Crear archivos de ejemplo
create_examples() {
    step "Creando ejemplos..."
    
    # Crear ejemplo de botón
    cat > src/templates/examples/button-example.html << 'EOF'
<bc-button appearance="primary" size="large" aria-label="Botón de confirmación">
  Confirmar
</bc-button>
EOF

    # Crear ejemplo de formulario
    cat > src/templates/examples/form-example.html << 'EOF'
<form class="bc-form">
  <bc-input type="email" label="Correo electrónico" placeholder="usuario@ejemplo.com" required></bc-input>
  <bc-input type="password" label="Contraseña" required></bc-input>
  <bc-button appearance="primary" type="submit">Iniciar Sesión</bc-button>
</form>
EOF

    # Crear ejemplo de modal
    cat > src/templates/examples/modal-example.html << 'EOF'
<bc-modal title="Confirmar eliminación" visible="true">
  <bc-alert type="warning" title="Advertencia">
    Esta acción no se puede deshacer
  </bc-alert>
  <p>¿Estás seguro de que deseas eliminar este elemento?</p>
  <div class="modal-actions">
    <bc-button appearance="secondary">Cancelar</bc-button>
    <bc-button appearance="error">Eliminar</bc-button>
  </div>
</bc-modal>
EOF

    log "Ejemplos creados ✓"
}

# Función principal
main() {
    show_banner
    
    log "Iniciando configuración del Playground de Semantika..."
    
    check_system_dependencies
    create_directory_structure
    download_dependencies
    create_config_files
    create_dev_server
    create_documentation
    setup_permissions
    create_examples
    
    success "¡Configuración completada exitosamente!"
    echo ""
    echo -e "${GREEN}🎉 Playground de Semantika configurado y listo para usar${NC}"
    echo ""
    echo -e "${BLUE}Próximos pasos:${NC}"
    echo "1. Ejecuta: ${YELLOW}./scripts/start.sh${NC}"
    echo "2. Abre tu navegador en: ${YELLOW}http://localhost:3000${NC}"
    echo "3. Comienza a probar código generado por Semantika"
    echo ""
    echo -e "${PURPLE}¡Disfruta probando tu código generado por IA! 🚀${NC}"
}

# Ejecutar función principal
main "$@" 