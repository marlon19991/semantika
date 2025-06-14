/**
 * Playground Components - Integrated with Semantika Generator
 * Handles Monaco Editor, Live Preview, Quality Control, and Tab Navigation
 * @author Bancolombia - Equipo de Innovación
 * @version 1.0.0
 */

// ===== PLAYGROUND STATE MANAGEMENT =====
class PlaygroundState {
  constructor() {
    this.editor = null;
    this.currentCode = '';
    this.qualityMetrics = {
      validity: 0,
      accessibility: 0,
      syntax: 0,
      overall: 0
    };
    this.isPreviewLoading = false;
    this.activeTab = 'generator';
  }

  updateCode(code) {
    this.currentCode = code;
    this.updateEditorStats();
  }

  updateEditorStats() {
    const lines = this.currentCode.split('\n').length;
    const chars = this.currentCode.length;
    
    const lineCountEl = document.getElementById('lineCount');
    const charCountEl = document.getElementById('charCount2');
    
    if (lineCountEl) lineCountEl.textContent = lines;
    if (charCountEl) charCountEl.textContent = chars;
  }

  updateQualityMetrics(metrics) {
    this.qualityMetrics = { ...this.qualityMetrics, ...metrics };
    this.renderQualityMetrics();
  }

  renderQualityMetrics() {
    const { validity, accessibility, syntax, overall } = this.qualityMetrics;
    
    // Update scores
    const validityEl = document.getElementById('validityScore');
    const accessibilityEl = document.getElementById('accessibilityScore');
    const syntaxEl = document.getElementById('syntaxScore');
    const badgeEl = document.getElementById('qualityBadge');
    
    if (validityEl) validityEl.textContent = `${validity}%`;
    if (accessibilityEl) accessibilityEl.textContent = `${accessibility}%`;
    if (syntaxEl) syntaxEl.textContent = `${syntax}%`;
    if (badgeEl) badgeEl.querySelector('.score').textContent = overall;
    
    // Update progress bars
    const validityFill = document.getElementById('validityFill');
    const accessibilityFill = document.getElementById('accessibilityFill');
    const syntaxFill = document.getElementById('syntaxFill');
    
    if (validityFill) validityFill.style.width = `${validity}%`;
    if (accessibilityFill) accessibilityFill.style.width = `${accessibility}%`;
    if (syntaxFill) syntaxFill.style.width = `${syntax}%`;
  }
}

// ===== MONACO EDITOR INTEGRATION =====
class MonacoEditorManager {
  constructor(playgroundState) {
    this.state = playgroundState;
    this.editor = null;
    this.isInitialized = false;
  }

  async initialize() {
    if (this.isInitialized) return;

    try {
      // Check if Monaco is available
      if (typeof require === 'undefined') {
        this.fallbackToTextarea();
        return;
      }

      // Configure Monaco paths
      require.config({ 
        paths: { 
          'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' 
        } 
      });

      await new Promise((resolve, reject) => {
        require(['vs/editor/editor.main'], resolve, reject);
      });

      // Create editor instance
      this.editor = monaco.editor.create(document.getElementById('codeEditor'), {
        value: this.getDefaultCode(),
        language: 'html',
        theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'vs-dark' : 'vs',
        automaticLayout: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 14,
        lineNumbers: 'on',
        wordWrap: 'on',
        folding: true
      });

      // Setup event listeners
      this.setupEventListeners();
      
      this.state.editor = this.editor;
      this.isInitialized = true;
      
      console.log('Monaco Editor initialized successfully');
    } catch (error) {
      console.error('Error initializing Monaco Editor:', error);
      this.fallbackToTextarea();
    }
  }

  getDefaultCode() {
    return `<!-- Bienvenido al Playground de Semantika -->
<div class="container">
  <h2>Ejemplo de Componente</h2>
  
  <bc-button appearance="primary" size="large">
    Confirmar Acción
  </bc-button>
  
  <bc-input 
    type="email" 
    label="Correo electrónico" 
    placeholder="usuario@ejemplo.com"
    required>
  </bc-input>
  
  <bc-alert type="info" title="Información">
    Este es un ejemplo de componente de alerta
  </bc-alert>
</div>

<style>
  .container {
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .container > * {
    margin-bottom: 1rem;
  }
</style>`;
  }

  setupEventListeners() {
    if (!this.editor) return;

    // Content change listener
    this.editor.onDidChangeModelContent(() => {
      const code = this.editor.getValue();
      this.state.updateCode(code);
      this.debouncePreviewUpdate();
    });

    // Theme change listener
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const theme = document.documentElement.getAttribute('data-theme');
          if (this.editor && monaco) {
            monaco.editor.setTheme(theme === 'dark' ? 'vs-dark' : 'vs');
          }
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
  }

  debouncePreviewUpdate() {
    clearTimeout(this.previewUpdateTimeout);
    this.previewUpdateTimeout = setTimeout(() => {
      this.updatePreview();
    }, 500);
  }

  updatePreview() {
    const previewManager = window.playgroundPreviewManager;
    if (previewManager) {
      previewManager.updatePreview(this.state.currentCode);
    }
  }

  fallbackToTextarea() {
    const container = document.getElementById('codeEditor');
    if (!container) return;
    
    container.innerHTML = `
      <textarea 
        id="fallbackEditor" 
        style="width: 100%; height: 100%; border: none; padding: 1rem; font-family: monospace; resize: none;"
        placeholder="Editor de código (modo básico)"
      >${this.getDefaultCode()}</textarea>
    `;
    
    const textarea = document.getElementById('fallbackEditor');
    if (textarea) {
      textarea.addEventListener('input', (e) => {
        this.state.updateCode(e.target.value);
        this.debouncePreviewUpdate();
      });
    }
    
    this.isInitialized = true;
  }

  setValue(code) {
    if (this.editor) {
      this.editor.setValue(code);
    } else {
      const fallback = document.getElementById('fallbackEditor');
      if (fallback) fallback.value = code;
    }
    this.state.updateCode(code);
  }

  formatCode() {
    if (this.editor && this.editor.getAction) {
      this.editor.getAction('editor.action.formatDocument').run();
    }
  }

  clearEditor() {
    this.setValue('');
  }
}

// ===== LIVE PREVIEW MANAGER =====
class LivePreviewManager {
  constructor(playgroundState) {
    this.state = playgroundState;
    this.previewFrame = document.getElementById('previewFrame');
    this.currentDevice = 'desktop';
  }

  updatePreview(code) {
    if (!this.previewFrame) return;
    
    if (!code.trim()) {
      this.showEmptyState();
      return;
    }

    this.state.isPreviewLoading = true;
    this.updatePreviewStatus('Actualizando...');

    const fullHtml = this.generateFullHtml(code);
    
    try {
      const blob = new Blob([fullHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      this.previewFrame.onload = () => {
        this.state.isPreviewLoading = false;
        this.updatePreviewStatus('Listo');
        URL.revokeObjectURL(url);
        
        // Run quality analysis
        this.runQualityAnalysis(code);
      };
      
      this.previewFrame.src = url;
    } catch (error) {
      console.error('Error updating preview:', error);
      this.updatePreviewStatus('Error');
      this.state.isPreviewLoading = false;
    }
  }

  generateFullHtml(code) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview - Semantika Playground</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6; color: #333; background: #f8f9fa; padding: 1rem;
    }
    bc-button, [bc-button] {
      display: inline-block; padding: 0.75rem 1.5rem; border: none;
      border-radius: 6px; font-weight: 500; cursor: pointer;
      transition: all 0.2s ease; font-family: inherit; font-size: 1rem;
    }
    bc-button[appearance="primary"], [bc-button][appearance="primary"] {
      background: #0052cc; color: white;
    }
    bc-button[appearance="primary"]:hover { background: #0043a3; }
    bc-button[appearance="secondary"], [bc-button][appearance="secondary"] {
      background: transparent; color: #0052cc; border: 1px solid #0052cc;
    }
    bc-button[size="large"], [bc-button][size="large"] {
      padding: 1rem 2rem; font-size: 1.1rem;
    }
    bc-input, [bc-input] { display: block; margin-bottom: 1rem; }
    bc-input label, [bc-input] label {
      display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333;
    }
    bc-input input, [bc-input] input {
      width: 100%; padding: 0.75rem; border: 1px solid #ddd;
      border-radius: 6px; font-family: inherit; font-size: 1rem;
    }
    bc-alert, [bc-alert] {
      padding: 1rem; border-radius: 6px; margin-bottom: 1rem; border: 1px solid;
    }
    bc-alert[type="info"], [bc-alert][type="info"] {
      background: #e3f2fd; color: #1565c0; border-color: #90caf9;
    }
    bc-alert[type="success"], [bc-alert][type="success"] {
      background: #e8f5e8; color: #2d5a2d; border-color: #a8d8a8;
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
  </style>
</head>
<body>
  ${code}
</body>
</html>`;
  }

  showEmptyState() {
    if (!this.previewFrame) return;
    
    const emptyHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview - Semantika Playground</title>
  <style>
    body {
      font-family: 'Inter', sans-serif; display: flex; align-items: center;
      justify-content: center; height: 100vh; margin: 0; background: #f8f9fa; color: #666;
    }
    .empty-state { text-align: center; padding: 2rem; }
    .empty-icon { font-size: 3rem; margin-bottom: 1rem; }
  </style>
</head>
<body>
  <div class="empty-state">
    <div class="empty-icon">📝</div>
    <h3>Escribe código para ver la vista previa</h3>
    <p>Los cambios se reflejarán automáticamente aquí</p>
  </div>
</body>
</html>`;
    
    const blob = new Blob([emptyHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    this.previewFrame.src = url;
    this.updatePreviewStatus('Esperando código...');
  }

  updatePreviewStatus(status) {
    const statusEl = document.getElementById('previewStatus');
    if (statusEl) statusEl.textContent = status;
  }

  changeDevice(device) {
    this.currentDevice = device;
    const container = document.getElementById('previewContainer');
    if (!container) return;
    
    container.className = 'preview-container';
    container.classList.add(`device-${device}`);
    
    switch (device) {
      case 'mobile':
        container.style.maxWidth = '375px';
        container.style.margin = '1rem auto';
        break;
      case 'tablet':
        container.style.maxWidth = '768px';
        container.style.margin = '1rem auto';
        break;
      default:
        container.style.maxWidth = '100%';
        container.style.margin = '1rem';
    }
  }

  runQualityAnalysis(code) {
    const qualityChecker = window.playgroundQualityChecker;
    if (qualityChecker) {
      qualityChecker.analyzeCode(code);
    }
  }

  refreshPreview() {
    if (this.state.currentCode) {
      this.updatePreview(this.state.currentCode);
    }
  }
}

// ===== QUALITY CHECKER =====
class QualityChecker {
  constructor(playgroundState) {
    this.state = playgroundState;
  }

  analyzeCode(code) {
    const metrics = {
      validity: this.checkComponentValidity(code),
      accessibility: this.checkAccessibility(code),
      syntax: this.checkSyntax(code)
    };
    
    metrics.overall = Math.round(
      (metrics.validity * 0.4 + metrics.accessibility * 0.3 + metrics.syntax * 0.3)
    );
    
    this.state.updateQualityMetrics(metrics);
    this.generateSuggestions(code, metrics);
  }

  checkComponentValidity(code) {
    let score = 100;
    const bcComponents = code.match(/bc-\w+/g) || [];
    const validComponents = ['bc-button', 'bc-input', 'bc-alert', 'bc-modal', 'bc-card'];
    
    bcComponents.forEach(component => {
      if (!validComponents.includes(component)) {
        score -= 20;
      }
    });
    
    return Math.max(0, score);
  }

  checkAccessibility(code) {
    let score = 100;
    
    const images = code.match(/<img[^>]*>/g) || [];
    images.forEach(img => {
      if (!img.includes('alt=')) score -= 15;
    });
    
    const inputs = code.match(/<input[^>]*>/g) || [];
    const labels = code.match(/<label[^>]*>/g) || [];
    if (inputs.length > labels.length) score -= 10;
    
    if (!code.includes('<h') && code.length > 100) score -= 10;
    
    return Math.max(0, score);
  }

  checkSyntax(code) {
    let score = 100;
    
    const openTags = code.match(/<[^/][^>]*>/g) || [];
    const closeTags = code.match(/<\/[^>]*>/g) || [];
    
    if (Math.abs(openTags.length - closeTags.length) > 2) {
      score -= 30;
    }
    
    const unquotedAttrs = code.match(/=\w+[\s>]/g) || [];
    score -= unquotedAttrs.length * 5;
    
    return Math.max(0, score);
  }

  generateSuggestions(code, metrics) {
    const suggestions = [];
    
    if (metrics.validity < 80) {
      suggestions.push({
        type: 'warning',
        text: 'Algunos componentes no son válidos del Design System. Verifica los nombres de los componentes bc-*'
      });
    }
    
    if (metrics.accessibility < 70) {
      suggestions.push({
        type: 'warning',
        text: 'Mejora la accesibilidad agregando atributos alt a las imágenes y labels a los inputs'
      });
    }
    
    if (metrics.syntax < 80) {
      suggestions.push({
        type: 'error',
        text: 'Revisa la sintaxis HTML. Puede haber etiquetas sin cerrar o atributos mal formateados'
      });
    }
    
    if (metrics.overall >= 90) {
      suggestions.push({
        type: 'success',
        text: '¡Excelente! Tu código cumple con los estándares de calidad'
      });
    }
    
    this.renderSuggestions(suggestions);
  }

  renderSuggestions(suggestions) {
    const container = document.getElementById('qualitySuggestions');
    if (!container) return;
    
    if (suggestions.length === 0) {
      container.innerHTML = '<p class="no-suggestions">No hay sugerencias en este momento</p>';
      return;
    }
    
    container.innerHTML = suggestions.map(suggestion => `
      <div class="suggestion-item">
        <i class="suggestion-icon fas ${this.getSuggestionIcon(suggestion.type)}"></i>
        <div class="suggestion-text">${suggestion.text}</div>
      </div>
    `).join('');
  }

  getSuggestionIcon(type) {
    switch (type) {
      case 'error': return 'fa-exclamation-circle';
      case 'warning': return 'fa-exclamation-triangle';
      case 'success': return 'fa-check-circle';
      default: return 'fa-info-circle';
    }
  }
}

// ===== TAB NAVIGATION MANAGER =====
class TabNavigationManager {
  constructor(playgroundState) {
    this.state = playgroundState;
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tabName = e.currentTarget.dataset.tab;
        this.switchTab(tabName);
      });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'Enter':
            e.preventDefault();
            this.runCode();
            break;
          case 's':
            e.preventDefault();
            this.exportCode();
            break;
        }
      }
    });
  }

  switchTab(tabName) {
    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) activeTab.classList.add('active');

    // Update active content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    const activeContent = document.getElementById(`${tabName}-tab`);
    if (activeContent) activeContent.classList.add('active');

    this.state.activeTab = tabName;

    // Initialize Monaco Editor when switching to playground
    if (tabName === 'playground' && window.playgroundEditorManager && !window.playgroundEditorManager.isInitialized) {
      window.playgroundEditorManager.initialize();
    }
  }

  runCode() {
    if (this.state.activeTab === 'playground' && window.playgroundPreviewManager) {
      window.playgroundPreviewManager.refreshPreview();
    }
  }

  exportCode() {
    if (this.state.currentCode) {
      const blob = new Blob([this.state.currentCode], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'component.html';
      a.click();
      URL.revokeObjectURL(url);
    }
  }
}

// ===== INTEGRATION MANAGER =====
class PlaygroundIntegrationManager {
  constructor() {
    this.state = new PlaygroundState();
    this.editorManager = new MonacoEditorManager(this.state);
    this.previewManager = new LivePreviewManager(this.state);
    this.qualityChecker = new QualityChecker(this.state);
    this.tabManager = new TabNavigationManager(this.state);
    
    // Make managers globally available
    window.playgroundState = this.state;
    window.playgroundEditorManager = this.editorManager;
    window.playgroundPreviewManager = this.previewManager;
    window.playgroundQualityChecker = this.qualityChecker;
    window.playgroundTabManager = this.tabManager;
  }

  initialize() {
    this.setupEventListeners();
    this.previewManager.showEmptyState();
    console.log('Playground Integration initialized');
  }

  setupEventListeners() {
    // Editor controls
    const clearBtn = document.getElementById('clearEditor');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.editorManager.clearEditor();
      });
    }

    const formatBtn = document.getElementById('formatCode');
    if (formatBtn) {
      formatBtn.addEventListener('click', () => {
        this.editorManager.formatCode();
      });
    }

    const runBtn = document.getElementById('runCode');
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        this.previewManager.refreshPreview();
      });
    }

    // Preview controls
    const deviceSelector = document.getElementById('deviceSelector');
    if (deviceSelector) {
      deviceSelector.addEventListener('change', (e) => {
        this.previewManager.changeDevice(e.target.value);
      });
    }

    const refreshBtn = document.getElementById('refreshPreview');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        this.previewManager.refreshPreview();
      });
    }

    // Copy and export
    const copyBtn = document.getElementById('copyCode');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        this.copyCurrentCode();
      });
    }

    const exportBtn = document.getElementById('exportCode');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        this.tabManager.exportCode();
      });
    }

    // Example usage
    document.querySelectorAll('.use-example').forEach(button => {
      button.addEventListener('click', (e) => {
        const code = e.target.closest('.example-item').dataset.code;
        this.loadCodeIntoEditor(code);
        this.tabManager.switchTab('playground');
      });
    });
  }

  async copyCurrentCode() {
    try {
      await navigator.clipboard.writeText(this.state.currentCode);
      if (window.toastManager) {
        window.toastManager.show('Código copiado al portapapeles', 'success');
      }
    } catch (error) {
      console.error('Error copying code:', error);
      if (window.toastManager) {
        window.toastManager.show('Error al copiar código', 'error');
      }
    }
  }

  loadCodeIntoEditor(code) {
    this.editorManager.setValue(code);
    this.previewManager.updatePreview(code);
  }

  // Integration with main Semantika app
  receiveGeneratedCode(code, metadata = {}) {
    this.loadCodeIntoEditor(code);
    this.tabManager.switchTab('playground');
    
    if (window.toastManager) {
      window.toastManager.show('Código enviado al playground', 'success');
    }
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize playground integration
  window.playgroundIntegration = new PlaygroundIntegrationManager();
  window.playgroundIntegration.initialize();
  
  console.log('Playground Components loaded successfully');
}); 