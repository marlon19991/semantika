# 🎮 Playground de Pruebas para Semantika

## Ambiente de Pruebas Interactivo para Código Generado por IA

Este playground te permite **probar inmediatamente** cualquier código generado por Semantika de forma visual e interactiva, sin necesidad de configurar un proyecto completo.

## 🚀 ¿Qué es este Playground?

Es un **entorno de pruebas en tiempo real** que:
- ✅ **Renderiza instantáneamente** el código HTML/Angular generado por Semantika
- ✅ **Incluye el Design System de Bancolombia** preconfigurado
- ✅ **Valida visualmente** que los componentes se vean y funcionen correctamente
- ✅ **Permite pruebas interactivas** de funcionalidades
- ✅ **Proporciona feedback inmediato** sobre errores o mejoras

## 📋 Características Principales

### 🎯 **Prueba Instantánea**
- Copia y pega el código generado por Semantika
- Ve el resultado inmediatamente sin configuración adicional
- Prueba diferentes variantes y configuraciones

### 🎨 **Design System Integrado**
- Todos los componentes de Bancolombia preconfigurados
- Estilos, colores y tipografías correctas
- Tokens de diseño aplicados automáticamente

### 🔧 **Herramientas de Desarrollo**
- Consola de errores integrada
- Inspector de propiedades de componentes
- Preview responsive para diferentes dispositivos
- Modo oscuro/claro para pruebas de contraste

### 📊 **Análisis de Calidad**
- Validación automática de accesibilidad
- Verificación de uso correcto de componentes
- Sugerencias de mejora en tiempo real

## 🏗️ Estructura del Proyecto

```
playground/
├── src/
│   ├── index.html              # Página principal del playground
│   ├── playground.js           # Lógica principal del ambiente de pruebas
│   ├── styles/
│   │   ├── playground.css      # Estilos del playground
│   │   ├── bancolombia-ds.css  # Design System de Bancolombia
│   │   └── components.css      # Estilos de componentes
│   ├── components/
│   │   ├── code-editor.js      # Editor de código integrado
│   │   ├── live-preview.js     # Vista previa en tiempo real
│   │   └── quality-checker.js  # Validador de calidad
│   └── templates/
│       ├── examples/           # Ejemplos predefinidos
│       └── layouts/            # Layouts base para pruebas
├── assets/
│   ├── images/                 # Imágenes del Design System
│   └── icons/                  # Iconografía de Bancolombia
├── docs/
│   ├── GUIA_USO.md            # Guía de uso detallada
│   └── COMPONENTES.md         # Documentación de componentes
└── scripts/
    ├── start.sh               # Script de inicio rápido
    └── setup.sh               # Script de configuración inicial
```

## 🚀 Inicio Rápido

### 1. **Configuración Automática**
```bash
cd playground
chmod +x scripts/setup.sh
./scripts/setup.sh
```

### 2. **Iniciar el Playground**
```bash
chmod +x scripts/start.sh
./scripts/start.sh
```

### 3. **Abrir en el navegador**
El playground se abrirá automáticamente en: `http://localhost:3000`

## 🎮 Cómo Usar el Playground

### **Paso 1: Generar Código con Semantika**
1. Ve a tu interfaz de Semantika
2. Describe el componente que necesitas: *"botón azul grande que diga Confirmar"*
3. Copia el código HTML/Angular generado

### **Paso 2: Probar en el Playground**
1. Abre el playground en tu navegador
2. Pega el código en el **Editor de Código**
3. Ve el resultado inmediatamente en el **Panel de Vista Previa**

### **Paso 3: Validar y Ajustar**
1. Revisa el **Panel de Calidad** para ver validaciones automáticas
2. Usa el **Panel de Propiedades** para ajustar configuraciones
3. Prueba en diferentes dispositivos con el **Selector Responsive**

## 🔧 Funcionalidades Avanzadas

### **Editor de Código Inteligente**
- Syntax highlighting para HTML/Angular
- Autocompletado de componentes de Bancolombia
- Detección de errores en tiempo real
- Formateo automático de código

### **Vista Previa Interactiva**
- Renderizado en tiempo real
- Interacción completa con componentes
- Simulación de diferentes estados (hover, focus, disabled)
- Pruebas de funcionalidad (clicks, formularios, etc.)

### **Panel de Calidad**
- **Accesibilidad**: Validación WCAG 2.1 AA
- **Design System**: Uso correcto de componentes
- **Performance**: Análisis de rendimiento básico
- **Best Practices**: Sugerencias de mejora

### **Herramientas de Desarrollo**
- **Consola integrada**: Para ver errores y warnings
- **Inspector de elementos**: Para examinar el DOM generado
- **Selector de dispositivos**: Para pruebas responsive
- **Modo contraste**: Para validar accesibilidad visual

## 📱 Ejemplos de Uso

### **Ejemplo 1: Probar un Botón**
```html
<!-- Código generado por Semantika -->
<bc-button appearance="primary" size="large">Confirmar</bc-button>
```
**Resultado**: Botón azul grande con estilos de Bancolombia aplicados

### **Ejemplo 2: Probar un Formulario**
```html
<!-- Código generado por Semantika -->
<form class="bc-form">
  <bc-input type="email" label="Correo electrónico" required></bc-input>
  <bc-input type="password" label="Contraseña" required></bc-input>
  <bc-button appearance="primary" type="submit">Iniciar Sesión</bc-button>
</form>
```
**Resultado**: Formulario completo con validaciones y estilos aplicados

### **Ejemplo 3: Probar un Modal**
```html
<!-- Código generado por Semantika -->
<bc-modal title="Confirmar eliminación" [visible]="true">
  <p>¿Estás seguro de que deseas eliminar este elemento?</p>
  <div class="modal-actions">
    <bc-button appearance="secondary">Cancelar</bc-button>
    <bc-button appearance="error">Eliminar</bc-button>
  </div>
</bc-modal>
```
**Resultado**: Modal funcional con botones de acción

## 🛠️ Solución de Problemas

### **El código no se renderiza**
1. Verifica que el código HTML esté bien formado
2. Asegúrate de usar componentes válidos de Bancolombia
3. Revisa la consola para ver errores específicos

### **Los estilos no se aplican correctamente**
1. Verifica que los nombres de componentes sean correctos (`bc-button`, `bc-input`, etc.)
2. Asegúrate de usar las propiedades correctas (`appearance`, `size`, etc.)
3. Consulta la documentación de componentes integrada

### **Errores de JavaScript**
1. Algunos componentes requieren JavaScript para funcionar completamente
2. El playground incluye los scripts necesarios automáticamente
3. Si persisten errores, reporta el código problemático

## 📈 Mejores Prácticas

### **Para Desarrolladores**
- Usa siempre el playground antes de integrar código en producción
- Prueba en diferentes dispositivos usando el selector responsive
- Valida la accesibilidad con las herramientas integradas

### **Para Diseñadores**
- Usa el playground para validar que los diseños se implementen correctamente
- Prueba diferentes estados de los componentes (hover, focus, error)
- Verifica el contraste y legibilidad en diferentes fondos

### **Para Product Managers**
- Usa el playground para prototipar rápidamente ideas
- Valida flujos de usuario con componentes interactivos
- Comparte enlaces del playground para feedback rápido

## 🤝 Contribuir

Para mejorar el playground:

1. **Reportar bugs**: Usa el formulario de reporte integrado
2. **Sugerir mejoras**: En el panel de feedback
3. **Agregar ejemplos**: Contribuye con casos de uso comunes
4. **Documentar**: Ayuda a mejorar la documentación

## 📞 Soporte

Si tienes problemas o preguntas:

- 📖 **Documentación**: Consulta `docs/GUIA_USO.md`
- 🐛 **Bugs**: Reporta en el panel de feedback del playground
- 💡 **Sugerencias**: Usa el formulario de mejoras integrado
- 🤝 **Comunidad**: Únete al canal de Slack de Semantika

---

## 🎯 Objetivo del Playground

**Hacer que probar el código generado por Semantika sea tan fácil como hacer copy & paste.**

El playground elimina la fricción entre la generación de código por IA y su validación práctica, permitiendo un flujo de trabajo más rápido y confiable. 