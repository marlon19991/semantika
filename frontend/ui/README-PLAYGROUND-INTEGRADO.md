# Semantika + Playground Integrado

## 🎯 Descripción

Semantika ahora incluye un **playground integrado** que permite generar y probar componentes del Design System de Bancolombia en una sola interfaz. Esta integración elimina la necesidad de cambiar entre aplicaciones y proporciona un flujo de trabajo fluido desde la generación hasta la validación.

## ✨ Características Principales

### 🧠 Generador de Componentes
- **Lenguaje Natural**: Describe componentes en español
- **IA Múltiple**: 4 motores de IA diferentes (Básico, Avanzado, IA, Smart)
- **RAG Optimizado**: Búsqueda semántica en base de conocimientos
- **Historial**: Guarda consultas y resultados anteriores

### 🎮 Playground Integrado
- **Editor Avanzado**: Monaco Editor con autocompletado
- **Vista Previa en Vivo**: Renderizado instantáneo
- **Control de Calidad**: Validación automática con métricas
- **Testing Responsive**: Pruebas en diferentes dispositivos
- **Exportación**: Descarga código listo para producción

### 📊 Control de Calidad
- **Validez de Componentes**: Verifica componentes bc-* válidos
- **Accesibilidad**: Evalúa atributos alt, labels, semántica
- **Sintaxis**: Revisa HTML bien formado
- **Puntuación Global**: Métrica combinada con sugerencias

## 🚀 Flujo de Trabajo

### 1. Generación
```
Describe tu componente → Selecciona motor IA → Genera código
```

### 2. Testing Inmediato
```
Código generado → Envío automático al playground → Vista previa
```

### 3. Validación
```
Análisis de calidad → Métricas en tiempo real → Sugerencias
```

### 4. Refinamiento
```
Edición en Monaco → Actualización automática → Re-validación
```

### 5. Exportación
```
Código final → Descarga → Listo para producción
```

## 🎨 Interfaz de Usuario

### Navegación por Pestañas
- **Generador**: Interfaz principal de Semantika
- **Playground**: Editor y vista previa integrados
- **Ejemplos**: Componentes predefinidos listos para usar
- **Documentación**: Guías y referencias

### Controles del Playground
- **Editor**: Limpiar, formatear, ejecutar
- **Vista Previa**: Dispositivos, actualizar, pantalla completa
- **Calidad**: Métricas en tiempo real y sugerencias

## 🔧 Funcionalidades Técnicas

### Editor Monaco
```javascript
// Autocompletado para componentes bc-*
<bc-button appearance="primary">
<bc-input type="email" label="Email">
<bc-alert type="success" title="Éxito">
```

### Sistema de Calidad
```javascript
// Métricas evaluadas
{
  validity: 85,      // Componentes válidos
  accessibility: 92, // Accesibilidad
  syntax: 88,        // Sintaxis HTML
  overall: 88        // Puntuación global
}
```

### Integración Bidireccional
```javascript
// Generador → Playground
semantika.sendToPlayground(code, metadata);

// Playground → Validación
playground.analyzeQuality(code);
```

## 📱 Responsive Design

### Dispositivos Soportados
- **Desktop**: Vista completa con layout de 2 columnas
- **Tablet**: Layout adaptativo con controles optimizados
- **Móvil**: Vista apilada con navegación por pestañas

### Breakpoints
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Móvil */ }
```

## ⌨️ Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl + Enter` | Ejecutar código en playground |
| `Ctrl + Shift + F` | Formatear código |
| `Ctrl + S` | Exportar código |
| `Alt + Tab` | Cambiar entre pestañas |

## 🎯 Ejemplos de Uso

### Caso 1: Botón Primario
```
Entrada: "Botón azul grande que diga Confirmar para acciones importantes"
Salida: <bc-button appearance="primary" size="large">Confirmar</bc-button>
```

### Caso 2: Formulario de Email
```
Entrada: "Campo de email con validación requerida"
Salida: <bc-input type="email" label="Correo electrónico" required></bc-input>
```

### Caso 3: Alerta de Éxito
```
Entrada: "Alerta verde de éxito con icono"
Salida: <bc-alert type="success" title="Éxito">Operación completada</bc-alert>
```

## 🔄 Estados de la Aplicación

### Generador
- **Vacío**: Sin consulta, botones deshabilitados
- **Escribiendo**: Validación en tiempo real
- **Generando**: Loading states con spinners
- **Resultados**: Código mostrado con opciones

### Playground
- **Vacío**: Estado inicial con placeholder
- **Editando**: Monaco activo con autocompletado
- **Previsualizando**: Renderizado en iframe
- **Validando**: Métricas actualizándose

## 🎨 Temas

### Tema Claro
- Fondo blanco con acentos azules
- Texto oscuro para mejor legibilidad
- Componentes con sombras suaves

### Tema Oscuro
- Fondo oscuro con acentos brillantes
- Texto claro optimizado
- Componentes con bordes luminosos

### Cambio Automático
```javascript
// Detecta preferencia del sistema
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
```

## 🚀 Instalación y Uso

### Requisitos
- Navegador moderno con soporte ES6+
- JavaScript habilitado
- Conexión a internet (para Monaco Editor)

### Inicio Rápido
1. Abre `frontend/ui/index.html`
2. Describe tu componente en lenguaje natural
3. Selecciona "Generar Código" o "Probar en Playground"
4. Edita y valida en tiempo real
5. Exporta el código final

### Integración con Backend
```javascript
// Configuración de API
const CONFIG = {
  API_BASE: "http://localhost:8000",
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000
};
```

## 🔧 Personalización

### Componentes Personalizados
```javascript
// Agregar nuevos componentes al autocompletado
const customComponents = [
  'bc-custom-component',
  'bc-special-input'
];
```

### Métricas de Calidad
```javascript
// Personalizar pesos de métricas
const qualityWeights = {
  validity: 0.4,      // 40%
  accessibility: 0.3, // 30%
  syntax: 0.3        // 30%
};
```

## 🐛 Troubleshooting

### Monaco Editor no carga
- Verificar conexión a internet
- Comprobar CDN de Monaco
- Fallback automático a textarea

### Vista previa no actualiza
- Verificar sintaxis HTML
- Revisar consola del navegador
- Refrescar manualmente

### Métricas de calidad incorrectas
- Validar código HTML
- Verificar componentes bc-*
- Revisar accesibilidad

## 📈 Métricas y Analytics

### Uso del Sistema
- Consultas por sesión
- Tipos de componentes más generados
- Tiempo en playground
- Tasa de exportación

### Calidad del Código
- Puntuación promedio
- Errores más comunes
- Mejoras sugeridas aplicadas

## 🔮 Roadmap

### Próximas Características
- [ ] Colaboración en tiempo real
- [ ] Biblioteca de componentes personalizados
- [ ] Integración con Figma
- [ ] Tests automatizados
- [ ] Deployment directo

### Mejoras Planificadas
- [ ] Más motores de IA
- [ ] Validación avanzada
- [ ] Temas personalizables
- [ ] Plugins de terceros

## 🤝 Contribución

### Estructura del Código
```
frontend/ui/
├── index.html              # Interfaz principal
├── main.js                 # Lógica del generador
├── playground-components.js # Lógica del playground
├── style.css              # Estilos base
└── playground-styles.css  # Estilos del playground
```

### Desarrollo
1. Fork del repositorio
2. Crear rama feature
3. Implementar cambios
4. Probar integración
5. Pull request

## 📄 Licencia

MIT License - Ver archivo LICENSE para detalles.

---

**Semantika + Playground Integrado** - Generación y validación de componentes en una sola herramienta potente y fácil de usar. 