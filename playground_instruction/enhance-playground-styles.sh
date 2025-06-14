#!/bin/bash

# Script para mejorar los estilos y configuraciones del playground
# Se ejecuta para agregar estilos adicionales y configuraciones avanzadas

set -e

PLAYGROUND_DIR="components-playground"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Verificar que existe el playground
if [ ! -d "$PLAYGROUND_DIR" ]; then
    echo -e "${RED}[ERROR]${NC} No se encontró el directorio $PLAYGROUND_DIR"
    echo "Ejecuta primero: ./create-playground.sh"
    exit 1
fi

cd "$PLAYGROUND_DIR"

# Agregar estilos adicionales al playground
enhance_playground_styles() {
    step "Mejorando estilos del playground..."
    
    # Agregar estilos adicionales al SCSS del playground
    cat >> src/app/playground/playground.component.scss << 'EOF'

// Estilos adicionales para componentes mejorados
.stats-mini {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stat-badge {
  background: rgba(0, 123, 255, 0.1);
  color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid rgba(0, 123, 255, 0.2);
}

.component-count {
  background: rgba(255, 255, 255, 0.2);
  color: inherit;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.component-status {
  margin: 1rem 0;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  
  &.available {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.unavailable {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
}

.component-showcase {
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
}

.component-info {
  margin-top: 1rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 4px solid #007bff;
  
  small {
    color: #6c757d;
    font-style: italic;
  }
}

.welcome-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 2px solid #dee2e6;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-color: #007bff;
  }
  
  h3 {
    margin-top: 0;
    color: #495057;
    font-size: 1.5rem;
  }
  
  p {
    color: #6c757d;
    margin: 1rem 0;
  }
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #007bff;
  }
  
  .stat-label {
    font-size: 0.9rem;
    color: #6c757d;
    margin-top: 0.25rem;
  }
}

// Estilos para componentes de Design System simulados
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0.25rem;
  text-decoration: none;
  display: inline-block;
  
  &.btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  &.btn-primary {
    background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
    color: white;
    box-shadow: 0 2px 4px rgba(0,123,255,0.2);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0,123,255,0.3);
    }
  }
  
  &.btn-secondary {
    background: linear-gradient(135deg, #6c757d 0%, #545b62 100%);
    color: white;
    box-shadow: 0 2px 4px rgba(108,117,125,0.2);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(108,117,125,0.3);
    }
  }
  
  &.btn-tertiary {
    background: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    
    &:hover {
      background: #007bff;
      color: white;
    }
  }
}

.card-example {
  max-width: 300px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  .card-header {
    background: #f8f9fa;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
    
    h4 {
      margin: 0;
      color: #495057;
    }
  }
  
  .card-content {
    padding: 1rem;
    
    p {
      margin: 0 0 1rem 0;
      color: #6c757d;
    }
  }
}

.input-group {
  margin: 1rem 0;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #495057;
    font-weight: 600;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ced4da;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    
    &:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25);
    }
  }
  
  &.error .form-input {
    border-color: #dc3545;
    
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(220,53,69,0.25);
    }
  }
  
  .error-message {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
  }
}

.alert {
  padding: 1rem;
  border-radius: 6px;
  margin: 0.5rem 0;
  border: 1px solid transparent;
  
  &.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  
  &.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeaa7;
  }
  
.alert-error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
}

// Animaciones
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  animation: fadeIn 0.5s ease-out;
}

// Loading states y efectos hover mejorados
.component-demo {
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
}

// Responsividad mejorada
@media (max-width: 576px) {
  .stats-mini {
    flex-direction: column;
    align-items: center;
  }
  
  .welcome-grid {
    grid-template-columns: 1fr;
  }
  
  .playground-nav {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-button {
    width: 100%;
    max-width: 300px;
  }
}
EOF

    log "Estilos del playground mejorados ✓"
}

# Crear estilos globales adicionales
enhance_global_styles() {
    step "Mejorando estilos globales..."
    
    # Agregar estilos al archivo global de estilos
    cat >> src/styles.css << 'EOF'

/* Estilos globales adicionales para el playground */

/* Variables CSS para consistencia */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --warning-color: #ffc107;
  --danger-color: #dc3545;
  --info-color: #17a2b8;
  --light-color: #f8f9fa;
  --dark-color: #343a40;
  
  --border-radius: 6px;
  --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  --transition: all 0.2s ease;
}

/* Utilidades generales */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.d-flex { display: flex; }
.d-block { display: block; }
.d-inline-block { display: inline-block; }
.d-none { display: none; }

.justify-content-center { justify-content: center; }
.justify-content-between { justify-content: space-between; }
.align-items-center { align-items: center; }

.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 1rem; }
.mt-4 { margin-top: 1.5rem; }
.mt-5 { margin-top: 3rem; }

.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-5 { margin-bottom: 3rem; }

.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }
.p-5 { padding: 3rem; }

/* Mejoras en la tipografía */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Mejoras en la accesibilidad */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus styles mejorados */
*:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

button:focus,
.btn:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Transiciones suaves para modo oscuro (preparado para futuro) */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Print styles */
@media print {
  .playground-nav,
  .btn {
    display: none !important;
  }
  
  .playground-header {
    box-shadow: none !important;
  }
  
  .section {
    box-shadow: none !important;
    border: 1px solid #ccc !important;
  }
}
EOF

    log "Estilos globales mejorados ✓"
}

# Crear archivo de configuración para TypeScript paths
setup_typescript_paths() {
    step "Configurando TypeScript paths..."
    
    # Actualizar tsconfig.json para agregar paths
    cat > tsconfig.json << 'EOF'
{
  "compileOptions": {
    "target": "ES2022",
    "lib": [
      "ES2022",
      "dom"
    ],
    "module": "ES2022",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "skipLibCheck": true,
    "useDefineForClassFields": false,
    "resolveJsonModule": true,
    "baseUrl": "./",
    "paths": {
      "@app/*": ["src/app/*"],
      "@shared/*": ["src/app/shared/*"],
      "@components/*": ["src/app/components/*"],
      "@services/*": ["src/app/services/*"],
      "@utils/*": ["src/app/utils/*"],
      "@models/*": ["src/app/models/*"],
      "@environments/*": ["src/environments/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
EOF

    log "TypeScript paths configurados ✓"
}

# Crear archivo de configuración para el entorno de desarrollo
create_dev_config() {
    step "Creando configuración de desarrollo..."
    
    cat > angular.json << 'EOF'
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "components-playground": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/components-playground",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "components-playground:build:production"
            },
            "development": {
              "buildTarget": "components-playground:build:development"
            }
          },
          "defaultConfiguration": "development",
          "options": {
            "port": 4200,
            "host": "localhost",
            "open": true
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "buildTarget": "components-playground:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }
      }
    }
  }
}
EOF

    log "Configuración de desarrollo creada ✓"
}

# Función principal
main() {
    log "🎨 Mejorando estilos y configuraciones del playground..."
    
    enhance_playground_styles
    enhance_global_styles
    setup_typescript_paths
    create_dev_config
    
    log ""
    log "🎉 ¡Mejoras de estilos completadas!"
    log ""
    log "✨ Mejoras aplicadas:"
    log "   • Estilos mejorados para el playground"
    log "   • Utilidades CSS adicionales"
    log "   • TypeScript paths configurados"
    log "   • Configuración de desarrollo optimizada"
    log ""
    log "🚀 El playground ahora está listo para usar con estilos mejorados"
}

# Ejecutar función principal
main "$@" 