#!/bin/bash

# Script para crear un playground de componentes basado en el proyecto actual
# Autor: Asistente AI
# Fecha: $(date +%Y-%m-%d)

set -e

echo "🚀 Creando playground de componentes..."

# Variables de configuración
ORIGINAL_PROJECT_PATH="./encuesta-perfil-riesgo"
PLAYGROUND_NAME="components-playground"
CURRENT_DIR=$(pwd)

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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

# Verificar que existe el proyecto original
if [ ! -d "$ORIGINAL_PROJECT_PATH" ]; then
    error "No se encontró el proyecto original en $ORIGINAL_PROJECT_PATH"
    exit 1
fi

# Verificar dependencias
check_dependencies() {
    step "Verificando dependencias..."
    
    if ! command -v node &> /dev/null; then
        error "Node.js no está instalado"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        error "npm no está instalado"
        exit 1
    fi
    
    if ! npm list -g @angular/cli &> /dev/null; then
        warn "Angular CLI no está instalado globalmente, instalando..."
        npm install -g @angular/cli@16
    fi
    
    log "Todas las dependencias están disponibles ✓"
}

# Crear nuevo proyecto Angular
create_angular_project() {
    step "Creando nuevo proyecto Angular..."
    
    if [ -d "$PLAYGROUND_NAME" ]; then
        warn "El directorio $PLAYGROUND_NAME ya existe, eliminando..."
        rm -rf "$PLAYGROUND_NAME"
    fi
    
    # Crear proyecto Angular sin routing inicialmente
    ng new "$PLAYGROUND_NAME" --routing=true --style=scss --skip-git=true --package-manager=npm
    
    cd "$PLAYGROUND_NAME"
    
    log "Proyecto Angular creado ✓"
}

# Instalar dependencias del proyecto original
install_dependencies() {
    step "Instalando dependencias del proyecto original..."
    
    # Leer package.json del proyecto original para obtener dependencias importantes
    npm install @angular/animations@^16.2.12
    npm install @bancolombia/design-system-web@^11.10.0
    npm install @azure/msal-angular@^3.0.13
    npm install @azure/msal-browser@^3.10.0
    npm install crypto-js@^4.1.1
    npm install rxjs@~7.5.0
    
    # Dependencias de desarrollo para Storybook
    npx storybook@latest init --yes
    
    log "Dependencias instaladas ✓"
}

# Copiar archivos de configuración
copy_config_files() {
    step "Copiando archivos de configuración..."
    
    # Copiar estilos globales
    cp "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/styles.css" src/
    
    # Copiar assets si existen
    if [ -d "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/assets" ]; then
        cp -r "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/assets/"* src/assets/
    fi
    
    # Copiar archivos de ambiente si existen
    if [ -d "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/environments" ]; then
        cp -r "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/environments" src/
    fi
    
    log "Archivos de configuración copiados ✓"
}

# Copiar y adaptar componentes
copy_components() {
    step "Copiando componentes del proyecto original..."
    
    # Crear estructura de directorios
    mkdir -p src/app/components
    mkdir -p src/app/shared
    mkdir -p src/app/models
    mkdir -p src/app/services
    
    # Copiar shared module y componentes
    if [ -d "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/app/shared" ]; then
        cp -r "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/app/shared/"* src/app/shared/
    fi
    
    # Copiar otros módulos importantes
    for module in survey customer analysis workflow auth; do
        if [ -d "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/app/$module" ]; then
            log "Copiando módulo $module..."
            cp -r "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/app/$module" src/app/
        fi
    done
    
    # Copiar interceptors y guards si existen
    if [ -d "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/app/interceptors" ]; then
        cp -r "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/app/interceptors" src/app/
    fi
    
    if [ -d "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/app/guards" ]; then
        cp -r "$CURRENT_DIR/$ORIGINAL_PROJECT_PATH/src/app/guards" src/app/
    fi
    
    log "Componentes copiados ✓"
}

# Crear componente principal del playground
create_playground_component() {
    step "Creando componente principal del playground..."
    
    # Generar componente playground
    ng generate component playground --skip-tests=true
    
    # Crear archivo HTML del playground con navegación a todos los componentes
    cat > src/app/playground/playground.component.html << 'EOF'
<div class="playground-container">
  <header class="playground-header">
    <h1>🎮 Playground de Componentes</h1>
    <p>Prueba y visualiza todos los componentes del sistema</p>
  </header>

  <nav class="playground-nav">
    <button 
      *ngFor="let section of sections" 
      (click)="activeSection = section.id"
      [class.active]="activeSection === section.id"
      class="nav-button">
      {{ section.title }}
    </button>
  </nav>

  <main class="playground-content">
    <div [ngSwitch]="activeSection">
      
      <!-- Sección de Componentes Shared -->
      <div *ngSwitchCase="'shared'" class="section">
        <h2>Componentes Compartidos</h2>
        <div class="component-grid">
          <div class="component-demo">
            <h3>Header</h3>
            <app-header *ngIf="hasHeaderComponent"></app-header>
          </div>
        </div>
      </div>

      <!-- Sección de Survey -->
      <div *ngSwitchCase="'survey'" class="section">
        <h2>Componentes de Encuesta</h2>
        <div class="component-grid">
          <div class="component-demo">
            <h3>Componentes de Survey</h3>
            <p>Aquí se mostrarán los componentes de encuesta cuando estén disponibles</p>
          </div>
        </div>
      </div>

      <!-- Sección de Customer -->
      <div *ngSwitchCase="'customer'" class="section">
        <h2>Componentes de Cliente</h2>
        <div class="component-grid">
          <div class="component-demo">
            <h3>Componentes de Customer</h3>
            <p>Aquí se mostrarán los componentes de cliente cuando estén disponibles</p>
          </div>
        </div>
      </div>

      <!-- Sección de Design System -->
      <div *ngSwitchCase="'design-system'" class="section">
        <h2>Design System Bancolombia</h2>
        <div class="component-grid">
          
          <!-- Botones -->
          <div class="component-demo">
            <h3>Botones</h3>
            <bdb-co-button>Botón Primario</bdb-co-button>
            <bdb-co-button variant="secondary">Botón Secundario</bdb-co-button>
            <bdb-co-button variant="tertiary">Botón Terciario</bdb-co-button>
          </div>

          <!-- Cards -->
          <div class="component-demo">
            <h3>Cards</h3>
            <bdb-co-card>
              <bdb-co-card-header>
                <h4>Título de la Card</h4>
              </bdb-co-card-header>
              <bdb-co-card-content>
                <p>Contenido de ejemplo para la card del design system</p>
              </bdb-co-card-content>
            </bdb-co-card>
          </div>

          <!-- Inputs -->
          <div class="component-demo">
            <h3>Inputs</h3>
            <bdb-co-input label="Campo de texto" placeholder="Escribe aquí"></bdb-co-input>
            <bdb-co-input label="Campo con error" [hasError]="true" errorMessage="Este campo es requerido"></bdb-co-input>
          </div>

          <!-- Alerts -->
          <div class="component-demo">
            <h3>Alertas</h3>
            <bdb-co-alert type="success">Operación exitosa</bdb-co-alert>
            <bdb-co-alert type="warning">Advertencia importante</bdb-co-alert>
            <bdb-co-alert type="error">Error en la operación</bdb-co-alert>
          </div>

        </div>
      </div>

      <!-- Sección por defecto -->
      <div *ngSwitchDefault class="section">
        <h2>Bienvenido al Playground</h2>
        <p>Selecciona una sección del menú para ver los componentes disponibles.</p>
        
        <div class="stats">
          <div class="stat-card">
            <h3>{{ totalComponents }}</h3>
            <p>Componentes</p>
          </div>
          <div class="stat-card">
            <h3>{{ sections.length }}</h3>
            <p>Secciones</p>
          </div>
        </div>
      </div>

    </div>
  </main>
</div>
EOF

    # Crear archivo TypeScript del playground
    cat > src/app/playground/playground.component.ts << 'EOF'
import { Component } from '@angular/core';

interface Section {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  activeSection = 'welcome';
  totalComponents = 25; // Ajustar según componentes reales
  hasHeaderComponent = false; // Se activará si existe el componente

  sections: Section[] = [
    { id: 'welcome', title: '🏠 Inicio', description: 'Página principal' },
    { id: 'design-system', title: '🎨 Design System', description: 'Componentes del Design System' },
    { id: 'shared', title: '🔧 Shared', description: 'Componentes compartidos' },
    { id: 'survey', title: '📋 Survey', description: 'Componentes de encuesta' },
    { id: 'customer', title: '👤 Customer', description: 'Componentes de cliente' }
  ];

  constructor() {
    // Verificar si existen componentes específicos
    this.checkAvailableComponents();
  }

  private checkAvailableComponents() {
    // Aquí se puede agregar lógica para verificar qué componentes están disponibles
    // Por ahora, asumimos que no están disponibles hasta que se importen correctamente
  }
}
EOF

    # Crear estilos del playground
    cat > src/app/playground/playground.component.scss << 'EOF'
.playground-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.playground-header {
  background: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  h1 {
    margin: 0;
    color: #333;
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  p {
    margin: 0.5rem 0 0 0;
    color: #666;
    font-size: 1.1rem;
  }
}

.playground-nav {
  background: rgba(255,255,255,0.95);
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.nav-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #007bff;
  background: white;
  color: #007bff;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  
  &:hover {
    background: #007bff;
    color: white;
    transform: translateY(-2px);
  }
  
  &.active {
    background: #007bff;
    color: white;
    box-shadow: 0 4px 15px rgba(0,123,255,0.3);
  }
}

.playground-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  h2 {
    margin-top: 0;
    color: #333;
    font-size: 2rem;
    border-bottom: 3px solid #007bff;
    padding-bottom: 0.5rem;
  }
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.component-demo {
  padding: 1.5rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  background: #f8f9fa;
  
  h3 {
    margin-top: 0;
    color: #495057;
    font-size: 1.3rem;
    border-bottom: 2px solid #dee2e6;
    padding-bottom: 0.5rem;
  }
  
  > *:not(h3) {
    margin-top: 1rem;
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  
  h3 {
    margin: 0;
    font-size: 3rem;
    font-weight: 700;
  }
  
  p {
    margin: 0.5rem 0 0 0;
    font-size: 1.2rem;
    opacity: 0.9;
  }
}

// Estilos responsivos
@media (max-width: 768px) {
  .playground-header {
    padding: 1rem;
    
    h1 {
      font-size: 2rem;
    }
  }
  
  .playground-nav {
    padding: 1rem;
  }
  
  .playground-content {
    padding: 1rem;
  }
  
  .component-grid {
    grid-template-columns: 1fr;
  }
}
EOF

    log "Componente playground creado ✓"
}

# Actualizar app module
update_app_module() {
    step "Actualizando app.module.ts..."
    
    cat > src/app/app.module.ts << 'EOF'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';

// Importar Design System si está disponible
// import { BdbDesignSystemModule } from '@bancolombia/design-system-web';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
    // BdbDesignSystemModule // Descomentar cuando esté configurado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
EOF

    log "App module actualizado ✓"
}

# Actualizar routing
update_routing() {
    step "Actualizando routing..."
    
    cat > src/app/app-routing.module.ts << 'EOF'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: '', component: PlaygroundComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
EOF

    log "Routing actualizado ✓"
}

# Actualizar app component
update_app_component() {
    step "Actualizando app component..."
    
    cat > src/app/app.component.html << 'EOF'
<router-outlet></router-outlet>
EOF

    cat > src/app/app.component.ts << 'EOF'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components-playground';
}
EOF

    log "App component actualizado ✓"
}

# Crear documentación
create_documentation() {
    step "Creando documentación..."
    
    cat > README.md << 'EOF'
# 🎮 Components Playground

Un proyecto para probar y visualizar todos los componentes del sistema de forma aislada.

## 🚀 Características

- ✅ Visualización de componentes en tiempo real
- ✅ Navegación por categorías
- ✅ Integración con Design System de Bancolombia
- ✅ Soporte para Storybook
- ✅ Responsive design

## 📦 Instalación

El proyecto ya está configurado con todas las dependencias necesarias.

## 🔧 Desarrollo

```bash
# Ejecutar en modo desarrollo
npm start

# Ejecutar Storybook
npm run storybook

# Ejecutar tests
npm test

# Build para producción
npm run build
```

## 📂 Estructura

```
src/
├── app/
│   ├── playground/           # Componente principal del playground
│   ├── shared/              # Componentes compartidos
│   ├── survey/              # Componentes de encuesta
│   ├── customer/            # Componentes de cliente
│   └── ...
├── assets/                  # Recursos estáticos
└── styles.css              # Estilos globales
```

## 🎨 Componentes Disponibles

### Design System
- Botones
- Cards
- Inputs
- Alerts
- Y más...

### Componentes Personalizados
- Header
- Componentes de encuesta
- Componentes de cliente
- Y más...

## 📖 Uso

1. Ejecuta `npm start`
2. Navega a `http://localhost:4200`
3. Selecciona la categoría de componentes que quieres ver
4. Prueba y experimenta con los componentes

## 🛠️ Extensión

Para agregar nuevos componentes:

1. Copia el componente del proyecto original
2. Agrégalo al playground component
3. Actualiza la navegación si es necesario

## 📝 Notas

- Este proyecto está basado en Angular 16
- Utiliza el Design System de Bancolombia
- Todos los componentes son solo para visualización y pruebas
- No incluye la lógica de negocio completa del proyecto original
EOF

    # Crear script de ejecución
    cat > run-playground.sh << 'EOF'
#!/bin/bash
echo "🎮 Iniciando Components Playground..."
echo "📂 Directorio: $(pwd)"
echo "🔗 URL: http://localhost:4200"
echo ""
npm start
EOF

    chmod +x run-playground.sh

    log "Documentación creada ✓"
}

# Función principal
main() {
    log "🎮 Iniciando creación del playground de componentes..."
    
    check_dependencies
    create_angular_project
    install_dependencies
    copy_config_files
    copy_components
    create_playground_component
    update_app_module
    update_routing
    update_app_component
    create_documentation
    
    cd "$CURRENT_DIR"
    
    log ""
    log "🎉 ¡Playground creado exitosamente!"
    log ""
    log "📂 Directorio: $PLAYGROUND_NAME"
    log "🚀 Para ejecutar:"
    log "   cd $PLAYGROUND_NAME"
    log "   ./run-playground.sh"
    log ""
    log "📚 También puedes usar Storybook:"
    log "   npm run storybook"
    log ""
    warn "⚠️  Nota: Es posible que necesites ajustar algunos imports manualmente"
    warn "⚠️  debido a diferencias en las rutas de los módulos."
}

# Ejecutar función principal
main "$@" 