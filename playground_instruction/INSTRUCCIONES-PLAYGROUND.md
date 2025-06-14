# 🎮 Instrucciones para crear el Playground de Componentes

Este conjunto de scripts te permitirá crear un proyecto playground completo para probar y visualizar todos los componentes de tu aplicación Angular de forma aislada.

## 📋 Prerrequisitos

Antes de ejecutar los scripts, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**
- **Angular CLI** (versión 16)

```bash
# Verificar versiones
node --version
npm --version
ng version
```

## 🚀 Pasos para crear el Playground

### 1. Script Principal: Crear el Playground Base

```bash
./create-playground.sh
```

**¿Qué hace este script?**
- ✅ Crea un nuevo proyecto Angular llamado `components-playground`
- ✅ Instala todas las dependencias necesarias del proyecto original
- ✅ Configura Storybook automáticamente
- ✅ Copia componentes, servicios y assets del proyecto original
- ✅ Crea el componente principal del playground con navegación
- ✅ Configura routing y módulos necesarios
- ✅ Genera documentación básica

**Tiempo estimado:** 5-10 minutos (dependiendo de la velocidad de internet)

### 2. Script de Configuración: Mejorar Componentes

```bash
cd components-playground
../setup-playground-components.sh
```

**¿Qué hace este script?**
- ✅ Configura Storybook con addons avanzados
- ✅ Crea historias de ejemplo para componentes
- ✅ Genera servicio para gestión dinámica de componentes
- ✅ Añade utilidades para verificar componentes disponibles
- ✅ Configura paths de TypeScript para imports limpios

**Tiempo estimado:** 2-3 minutos

### 3. Script de Estilos: Mejorar Apariencia

```bash
cd components-playground
../enhance-playground-styles.sh
```

**¿Qué hace este script?**
- ✅ Añade estilos avanzados y animaciones
- ✅ Implementa utilidades CSS para desarrollo
- ✅ Configura variables CSS para consistencia
- ✅ Mejora responsividad y accesibilidad
- ✅ Optimiza configuraciones de desarrollo

**Tiempo estimado:** 1-2 minutos

## 🎯 Ejecución Completa (Un Solo Comando)

Si quieres ejecutar todo de una vez:

```bash
# Ejecutar todos los scripts en secuencia
./create-playground.sh && cd components-playground && ../setup-playground-components.sh && ../enhance-playground-styles.sh
```

## 📂 Estructura del Proyecto Resultante

```
components-playground/
├── src/
│   ├── app/
│   │   ├── playground/           # Componente principal del playground
│   │   ├── shared/              # Componentes compartidos copiados
│   │   ├── survey/              # Componentes de encuesta
│   │   ├── customer/            # Componentes de cliente
│   │   ├── services/            # Servicios para gestión de componentes
│   │   └── utils/               # Utilidades helper
│   ├── stories/                 # Historias para Storybook
│   ├── assets/                  # Assets copiados del proyecto original
│   └── styles.css              # Estilos globales mejorados
├── .storybook/                  # Configuración de Storybook
├── README.md                    # Documentación del playground
└── run-playground.sh           # Script para ejecutar el playground
```

## 🔧 Ejecutar el Playground

### Opción 1: Aplicación Angular

```bash
cd components-playground
npm start
# O usar el script incluido:
./run-playground.sh
```

**URL:** http://localhost:4200

### Opción 2: Storybook

```bash
cd components-playground
npm run storybook
```

**URL:** http://localhost:6006

## 🎨 Características del Playground

### 🏠 Página de Inicio
- Dashboard con estadísticas de componentes
- Navegación a diferentes secciones
- Enlaces rápidos a Storybook

### 🎨 Design System
- Visualización de botones, cards, inputs, alerts
- Ejemplos interactivos de componentes
- Estilos consistentes con Bancolombia

### 🔧 Componentes Compartidos
- Lista de componentes copiados del proyecto original
- Estado de disponibilidad (disponible/no disponible)
- Placeholders para componentes pendientes

### 📋 Componentes de Módulos
- Secciones separadas para Survey, Customer, etc.
- Detección automática de componentes disponibles
- Información descriptiva de cada componente

## 🛠️ Personalización Post-Instalación

### Activar Design System de Bancolombia

1. Descomenta las líneas en `src/app/app.module.ts`:
```typescript
import { BdbDesignSystemModule } from '@bancolombia/design-system-web';

// En imports:
BdbDesignSystemModule
```

2. Actualiza los templates HTML para usar componentes reales:
```html
<!-- Cambiar de: -->
<button class="btn btn-primary">Botón</button>

<!-- A: -->
<bdb-co-button>Botón</bdb-co-button>
```

### Agregar Nuevos Componentes

1. Copia el componente del proyecto original
2. Añádelo al servicio `ComponentRegistryService`
3. Actualiza el template del playground
4. Crear historia en Storybook si es necesario

### Ejemplo:
```typescript
// En component-registry.service.ts
{
  id: 'nuevo-componente',
  name: 'Nuevo Componente',
  category: 'shared',
  description: 'Descripción del componente',
  available: true,
  selector: 'app-nuevo-componente'
}
```

## 🐛 Solución de Problemas Comunes

### Error: "ng command not found"
```bash
npm install -g @angular/cli@16
```

### Error: "Package not found"
```bash
cd components-playground
npm install
```

### Error: Componentes no se muestran
1. Verificar que los imports estén correctos
2. Comprobar que los módulos estén importados en `app.module.ts`
3. Usar `ComponentRegistryService` para marcar como disponibles

### Error: Storybook no inicia
```bash
cd components-playground
npx storybook@latest init --yes
npm run storybook
```

## 📈 Siguientes Pasos Recomendados

1. **Configurar CI/CD** para el playground
2. **Añadir tests** para componentes críticos
3. **Implementar modo oscuro** usando variables CSS
4. **Crear más historias** en Storybook para casos de uso específicos
5. **Documentar API** de componentes personalizados
6. **Integrar con herramientas** de design tokens

## 🤝 Contribución

Para agregar nuevos componentes o mejoras:

1. Modifica los scripts según necesidades
2. Añade componentes al playground
3. Documenta cambios en README del playground
4. Crea historias correspondientes en Storybook

## 📞 Soporte

Si encuentras problemas:

1. Revisa los logs de consola
2. Verifica que todas las dependencias estén instaladas
3. Comprueba que los paths de archivos sean correctos
4. Consulta la documentación de Angular y Storybook

---

## ⚡ Comandos Rápidos

```bash
# Crear playground completo
./create-playground.sh && cd components-playground && ../setup-playground-components.sh && ../enhance-playground-styles.sh

# Ejecutar playground
cd components-playground && npm start

# Ejecutar Storybook
cd components-playground && npm run storybook

# Instalar dependencias adicionales
cd components-playground && npm install [package-name]

# Generar nuevo componente
cd components-playground && ng generate component components/nuevo-componente

# Build para producción
cd components-playground && npm run build
```

¡Disfruta explorando y probando tus componentes en el playground! 🎉 