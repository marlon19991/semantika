#!/bin/bash

# Script complementario para configurar componentes específicos del playground
# Se ejecuta después del script principal para ajustar imports y configuraciones

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

# Crear configuración mejorada para Storybook
setup_storybook_config() {
    step "Configurando Storybook..."
    
    # Crear configuración principal de Storybook
    cat > .storybook/main.ts << 'EOF'
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
EOF

    # Crear preview de Storybook
    cat > .storybook/preview.ts << 'EOF'
import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

// Importar estilos globales
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      inlineStories: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
          name: 'bancolombia',
          value: '#FFCC00',
        },
      ],
    },
  },
};

export default preview;
EOF

    log "Storybook configurado ✓"
}

# Crear historias de ejemplo para componentes
create_sample_stories() {
    step "Creando historias de ejemplo..."
    
    mkdir -p src/stories
    
    # Historia para el playground component
    cat > src/stories/Playground.stories.ts << 'EOF'
import type { Meta, StoryObj } from '@storybook/angular';
import { PlaygroundComponent } from '../app/playground/playground.component';

const meta: Meta<PlaygroundComponent> = {
  title: 'Components/Playground',
  component: PlaygroundComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PlaygroundComponent>;

export const Default: Story = {
  args: {},
};

export const DesignSystemSection: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // Simular click en sección Design System
    const canvas = canvasElement;
    const designSystemButton = canvas.querySelector('[data-testid="design-system-button"]');
    if (designSystemButton) {
      (designSystemButton as HTMLElement).click();
    }
  },
};
EOF

    # Historia para botones del Design System
    cat > src/stories/DesignSystem.stories.ts << 'EOF'
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

// Nota: Ajustar imports según el Design System disponible
const meta: Meta = {
  title: 'Design System/Components',
  decorators: [
    moduleMetadata({
      imports: [
        // BdbDesignSystemModule // Descomentar cuando esté disponible
      ],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// Ejemplo de historia para botones (ajustar según componentes disponibles)
export const Buttons = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; flex-direction: column;">
        <h3>Botones del Design System</h3>
        <div style="display: flex; gap: 1rem;">
          <!-- Descomentar cuando el Design System esté disponible -->
          <!-- <bdb-co-button>Primario</bdb-co-button>
          <bdb-co-button variant="secondary">Secundario</bdb-co-button>
          <bdb-co-button variant="tertiary">Terciario</bdb-co-button> -->
          <button class="btn btn-primary">Botón HTML Primario</button>
          <button class="btn btn-secondary">Botón HTML Secundario</button>
        </div>
      </div>
    `,
    styles: [`
      .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.375rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .btn-primary {
        background-color: #007bff;
        color: white;
      }
      .btn-primary:hover {
        background-color: #0056b3;
      }
      .btn-secondary {
        background-color: #6c757d;
        color: white;
      }
      .btn-secondary:hover {
        background-color: #545b62;
      }
    `],
  }),
};

export const Cards = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div class="card">
          <div class="card-header">
            <h4>Card de Ejemplo 1</h4>
          </div>
          <div class="card-body">
            <p>Contenido de la primera card</p>
            <button class="btn btn-primary">Acción</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h4>Card de Ejemplo 2</h4>
          </div>
          <div class="card-body">
            <p>Contenido de la segunda card</p>
            <button class="btn btn-secondary">Acción</button>
          </div>
        </div>
      </div>
    `,
    styles: [`
      .card {
        border: 1px solid #dee2e6;
        border-radius: 0.375rem;
        box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
        width: 300px;
      }
      .card-header {
        padding: 1rem;
        background-color: #f8f9fa;
        border-bottom: 1px solid #dee2e6;
        border-radius: 0.375rem 0.375rem 0 0;
      }
      .card-header h4 {
        margin: 0;
        color: #495057;
      }
      .card-body {
        padding: 1rem;
      }
      .btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.25rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .btn-primary {
        background-color: #007bff;
        color: white;
      }
      .btn-secondary {
        background-color: #6c757d;
        color: white;
      }
    `],
  }),
};
EOF

    log "Historias de ejemplo creadas ✓"
}

# Crear servicio para gestionar componentes dinámicamente
create_component_service() {
    step "Creando servicio para gestión de componentes..."
    
    mkdir -p src/app/services
    
    cat > src/app/services/component-registry.service.ts << 'EOF'
import { Injectable } from '@angular/core';

export interface ComponentInfo {
  id: string;
  name: string;
  category: string;
  description: string;
  available: boolean;
  selector?: string;
  inputs?: string[];
  outputs?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ComponentRegistryService {
  private components: ComponentInfo[] = [
    {
      id: 'header',
      name: 'Header',
      category: 'shared',
      description: 'Componente de cabecera principal',
      available: false,
      selector: 'app-header'
    },
    {
      id: 'survey-main',
      name: 'Survey Main',
      category: 'survey',
      description: 'Componente principal de encuesta',
      available: false,
      selector: 'app-survey-main'
    },
    {
      id: 'customer-search',
      name: 'Customer Search',
      category: 'customer',
      description: 'Búsqueda de clientes',
      available: false,
      selector: 'app-customer-search'
    }
  ];

  getComponentsByCategory(category: string): ComponentInfo[] {
    return this.components.filter(c => c.category === category);
  }

  getAllComponents(): ComponentInfo[] {
    return [...this.components];
  }

  getAvailableComponents(): ComponentInfo[] {
    return this.components.filter(c => c.available);
  }

  markComponentAsAvailable(id: string): void {
    const component = this.components.find(c => c.id === id);
    if (component) {
      component.available = true;
    }
  }

  addComponent(component: ComponentInfo): void {
    this.components.push(component);
  }

  getComponentInfo(id: string): ComponentInfo | undefined {
    return this.components.find(c => c.id === id);
  }
}
EOF

    log "Servicio de componentes creado ✓"
}

# Crear utilidades para verificar componentes disponibles
create_component_checker() {
    step "Creando utilidad para verificar componentes..."
    
    mkdir -p src/app/utils
    
    cat > src/app/utils/component-checker.ts << 'EOF'
import { ComponentRef, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';

export class ComponentChecker {
  static checkComponentAvailability(
    componentName: string,
    resolver: ComponentFactoryResolver,
    viewContainer: ViewContainerRef
  ): boolean {
    try {
      // Esta función intentará resolver el componente
      // Si no existe, lanzará una excepción
      const factory = resolver.resolveComponentFactory(componentName as any);
      return !!factory;
    } catch (error) {
      console.warn(`Componente ${componentName} no está disponible:`, error);
      return false;
    }
  }

  static createDynamicComponent<T>(
    component: any,
    viewContainer: ViewContainerRef,
    resolver: ComponentFactoryResolver
  ): ComponentRef<T> | null {
    try {
      const factory: ComponentFactory<T> = resolver.resolveComponentFactory(component);
      return viewContainer.createComponent(factory);
    } catch (error) {
      console.error('Error creando componente dinámico:', error);
      return null;
    }
  }
}
EOF

    log "Utilidad de verificación creada ✓"
}

# Función principal
main() {
    log "🔧 Configurando componentes específicos del playground..."
    
    setup_storybook_config
    create_sample_stories
    create_component_service
    create_component_checker
    
    log ""
    log "🎉 ¡Configuración de componentes completada!"
    log ""
    log "📋 Próximos pasos:"
    log "   1. npm start (para ejecutar la aplicación)"
    log "   2. npm run storybook (para ejecutar Storybook)"
    log "   3. Ajustar imports de componentes según necesidades"
    log ""
    warn "⚠️  Recuerda activar los componentes del Design System"
    warn "⚠️  descomentando las líneas correspondientes cuando estén disponibles."
}

# Ejecutar función principal
main "$@" 