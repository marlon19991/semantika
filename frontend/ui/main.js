/**
 * Semantika Frontend Application - Con Playground Integrado
 * Generador de Componentes del Design System + Playground Interactivo
 * @version 2.1.0
 */

// ===== CONFIGURACIÓN =====
const CONFIG = {
  API_BASE: "http://localhost:8000",
  STORAGE_KEY: "semantika_history",
  PLAYGROUND_STORAGE_KEY: "semantika_playground",
  HISTORY_LIMIT: 10
};

// ===== SELECTORS UTILITARIOS =====
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ===== GESTIÓN DE ESTADO =====
class AppState {
  constructor() {
    this.history = this.loadHistory();
    this.isLoading = false;
    this.currentResult = null;
    this.currentTab = 'generator';
    this.playgroundCode = this.loadPlaygroundCode();
  }

  loadHistory() {
    try {
      const stored = localStorage.getItem(CONFIG.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.warn('Error cargando historial:', error);
      return [];
    }
  }

  loadPlaygroundCode() {
    try {
      const stored = localStorage.getItem(CONFIG.PLAYGROUND_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {
        html: '<bc-button type="primary" size="medium">Hola Mundo</bc-button>',
        css: '/* Estilos personalizados */\nbc-button {\n  margin: 20px;\n}',
        javascript: '// JavaScript personalizado\nconsole.log("Playground cargado");'
      };
    } catch (error) {
      console.warn('Error cargando código del playground:', error);
      return {
        html: '<bc-button type="primary" size="medium">Hola Mundo</bc-button>',
        css: '',
        javascript: ''
      };
    }
  }

  saveHistory() {
    try {
      localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(this.history));
    } catch (error) {
      console.warn('Error guardando historial:', error);
    }
  }

  savePlaygroundCode() {
    try {
      localStorage.setItem(CONFIG.PLAYGROUND_STORAGE_KEY, JSON.stringify(this.playgroundCode));
    } catch (error) {
      console.warn('Error guardando código del playground:', error);
    }
  }

  addToHistory(query, result) {
    const entry = {
      id: Date.now(),
      query: query.trim(),
      result,
      timestamp: new Date().toISOString()
    };
    
    this.history.unshift(entry);
    if (this.history.length > CONFIG.HISTORY_LIMIT) {
      this.history = this.history.slice(0, CONFIG.HISTORY_LIMIT);
    }
    
    this.saveHistory();
    this.renderHistory();
  }

  renderHistory() {
    const container = $('#historyContainer');
    
    if (this.history.length === 0) {
      container.innerHTML = '<p class="empty-state">No hay componentes generados aún</p>';
      return;
    }

    container.innerHTML = this.history.map(entry => `
      <div class="history-item" data-id="${entry.id}">
        <div class="history-query">${escapeHtml(entry.query)}</div>
        <div class="history-meta">
          <span class="history-time">${formatTimeAgo(entry.timestamp)}</span>
          <span class="history-type">${entry.result.component_type}</span>
        </div>
      </div>
    `).join('');

    // Agregar event listeners
    $$('.history-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.id);
        this.loadFromHistory(id);
      });
    });
  }

  loadFromHistory(id) {
    const entry = this.history.find(h => h.id === id);
    if (entry) {
      $('#prompt').value = entry.query;
      this.updateCharCounter();
      this.toggleButton();
      
      if (entry.result) {
        this.currentResult = entry.result;
        this.showResult();
      }
    }
  }

  updateCharCounter() {
    const prompt = $('#prompt');
    const counter = $('#charCount');
    if (prompt && counter) {
      counter.textContent = prompt.value.length;
    }
  }

  toggleButton() {
    const query = $('#prompt').value.trim();
    const hasQuery = query.length > 0;
    
    $('#btnCode').disabled = !hasQuery || this.isLoading;
    $('#btnSendToPlayground').disabled = !this.currentResult || this.isLoading;
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
    this.toggleButton();
    
    const button = $('#btnCode');
    const overlay = $('#loadingOverlay');
    
    if (button) {
      button.classList.toggle('loading', isLoading);
    }
    
    if (overlay) {
      overlay.style.display = isLoading ? 'flex' : 'none';
    }
  }

  showResult() {
    const section = $('#resultsSection');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    const codeElement = $('#generatedCode');
    const typeElement = $('#componentType');
    
    if (this.currentResult && this.currentResult.component_code) {
      codeElement.textContent = this.currentResult.component_code;
      typeElement.textContent = this.currentResult.component_type || 'Componente';
      
      // Aplicar syntax highlighting
      if (window.Prism) {
        Prism.highlightElement(codeElement);
      }
    }
    
    this.toggleButton();
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    
    // Actualizar botones de pestañas
    $$('.tab-button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    // Actualizar contenido de pestañas
    $$('.tab-content').forEach(content => {
      content.classList.toggle('active', content.id === `${tabName}Tab`);
    });
    
    // Inicializar playground si es necesario
    if (tabName === 'playground' && !this.playgroundInitialized) {
      this.initializePlayground();
    }
  }

  sendToPlayground() {
    if (this.currentResult && this.currentResult.component_code) {
      this.playgroundCode.html = this.currentResult.component_code;
      this.savePlaygroundCode();
      
      // Cambiar a la pestaña del playground
      this.switchTab('playground');
      
      // Actualizar el editor si está inicializado
      if (this.monacoEditor) {
        this.monacoEditor.setValue(this.currentResult.component_code);
        this.updatePreview();
      }
      
      showToast('Código enviado al playground', 'success');
    }
  }

  async initializePlayground() {
    if (this.playgroundInitialized) return;
    
    try {
      // Cargar Monaco Editor
      await this.loadMonacoEditor();
      this.setupPlaygroundEventListeners();
      this.updatePreview();
      this.playgroundInitialized = true;
    } catch (error) {
      console.error('Error inicializando playground:', error);
      showToast('Error cargando el playground', 'error');
    }
  }

  async loadMonacoEditor() {
    return new Promise((resolve, reject) => {
      if (window.monaco) {
        this.setupMonacoEditor();
        resolve();
        return;
      }

      require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' } });
      require(['vs/editor/editor.main'], () => {
        this.setupMonacoEditor();
        resolve();
      }, reject);
    });
  }

  setupMonacoEditor() {
    const editorContainer = $('#codeEditor');
    if (!editorContainer) return;

    this.monacoEditor = monaco.editor.create(editorContainer, {
      value: this.playgroundCode.html,
      language: 'html',
      theme: document.documentElement.dataset.theme === 'dark' ? 'vs-dark' : 'vs',
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      fontSize: 14,
      lineNumbers: 'on',
      roundedSelection: false,
      scrollbar: {
        vertical: 'auto',
        horizontal: 'auto'
      }
    });

    // Listener para cambios en el código
    this.monacoEditor.onDidChangeModelContent(() => {
      const language = $('#languageSelect').value;
      this.playgroundCode[language] = this.monacoEditor.getValue();
      this.savePlaygroundCode();
    });
  }

  setupPlaygroundEventListeners() {
    // Selector de lenguaje
    $('#languageSelect')?.addEventListener('change', (e) => {
      const language = e.target.value;
      if (this.monacoEditor) {
        this.monacoEditor.setValue(this.playgroundCode[language] || '');
        monaco.editor.setModelLanguage(this.monacoEditor.getModel(), language);
      }
    });

    // Botones del playground
    $('#btnRunCode')?.addEventListener('click', () => this.updatePreview());
    $('#btnClearPlayground')?.addEventListener('click', () => this.clearPlayground());
    $('#btnFullscreen')?.addEventListener('click', () => this.toggleFullscreen());
    $('#btnAnalyze')?.addEventListener('click', () => this.analyzeCode());

    // Selector de dispositivo
    $$('.device-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const device = e.currentTarget.dataset.device;
        this.setPreviewDevice(device);
      });
    });
  }

  updatePreview() {
    const iframe = $('#previewFrame');
    if (!iframe) return;

    const html = this.playgroundCode.html || '';
    const css = this.playgroundCode.css || '';
    const js = this.playgroundCode.javascript || '';

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@bancolombia/design-system-web@latest/dist/design-system.css">
        <style>
          body { 
            margin: 20px; 
            font-family: 'Inter', sans-serif; 
            background: #f8fafc;
          }
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script src="https://cdn.jsdelivr.net/npm/@bancolombia/design-system-web@latest/dist/design-system.js"></script>
        <script>
          try {
            ${js}
          } catch (error) {
            console.error('Error en JavaScript:', error);
          }
        </script>
      </body>
      </html>
    `;

    iframe.srcdoc = fullHtml;
  }

  setPreviewDevice(device) {
    $$('.device-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.device === device);
    });

    const iframe = $('#previewFrame');
    if (iframe) {
      iframe.dataset.device = device;
    }
  }

  clearPlayground() {
    if (confirm('¿Estás seguro de que quieres limpiar el playground?')) {
      this.playgroundCode = {
        html: '',
        css: '',
        javascript: ''
      };
      this.savePlaygroundCode();
      
      if (this.monacoEditor) {
        this.monacoEditor.setValue('');
      }
      
      this.updatePreview();
      showToast('Playground limpiado', 'success');
    }
  }

  toggleFullscreen() {
    const playgroundContainer = $('.playground-container');
    if (playgroundContainer) {
      playgroundContainer.classList.toggle('fullscreen');
      showToast('Modo pantalla completa activado', 'info');
    }
  }

  async analyzeCode() {
    try {
      showToast('Analizando código...', 'info');
      
      const response = await fetch(`${CONFIG.API_BASE}/playground/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          html: this.playgroundCode.html || '',
          css: this.playgroundCode.css || '',
          javascript: this.playgroundCode.javascript || ''
        })
      });
      
      if (!response.ok) {
        throw new Error('Error en la validación');
      }
      
      const metrics = await response.json();
      this.displayQualityResults(metrics);
      showToast('Análisis completado', 'success');
      
    } catch (error) {
      console.error('Error analizando código:', error);
      showToast('Error en el análisis', 'error');
      
      // Fallback al análisis local
      const localMetrics = this.calculateQualityMetrics();
      this.displayQualityResults(localMetrics);
    }
  }

  calculateQualityMetrics() {
    const html = this.playgroundCode.html || '';
    const css = this.playgroundCode.css || '';
    
    // Análisis básico de accesibilidad
    const accessibilityScore = this.analyzeAccessibility(html);
    
    // Análisis básico de performance
    const performanceScore = this.analyzePerformance(html, css);
    
    // Análisis de Design System
    const designSystemScore = this.analyzeDesignSystem(html);
    
    return {
      accessibility: accessibilityScore,
      performance: performanceScore,
      designSystem: designSystemScore,
      issues: this.findIssues(html, css)
    };
  }

  analyzeAccessibility(html) {
    let score = 100;
    const issues = [];
    
    // Verificar alt en imágenes
    if (html.includes('<img') && !html.includes('alt=')) {
      score -= 20;
      issues.push('Imágenes sin atributo alt');
    }
    
    // Verificar labels en inputs
    if (html.includes('<input') && !html.includes('label')) {
      score -= 15;
      issues.push('Inputs sin labels asociados');
    }
    
    return Math.max(0, score);
  }

  analyzePerformance(html, css) {
    let score = 100;
    
    // Penalizar por CSS inline excesivo
    if (css.length > 1000) {
      score -= 10;
    }
    
    // Penalizar por HTML muy largo
    if (html.length > 2000) {
      score -= 15;
    }
    
    return Math.max(0, score);
  }

  analyzeDesignSystem(html) {
    let score = 0;
    
    // Verificar uso de componentes del Design System
    const dsComponents = ['bc-button', 'bc-card', 'bc-input', 'bc-alert', 'bc-modal'];
    const usedComponents = dsComponents.filter(comp => html.includes(comp));
    
    score = (usedComponents.length / dsComponents.length) * 100;
    
    return Math.round(score);
  }

  findIssues(html, css) {
    const issues = [];
    
    if (!html.trim()) {
      issues.push({
        severity: 'high',
        title: 'HTML vacío',
        description: 'No hay contenido HTML para mostrar'
      });
    }
    
    if (html.includes('style=')) {
      issues.push({
        severity: 'medium',
        title: 'Estilos inline detectados',
        description: 'Considera mover los estilos al CSS para mejor mantenimiento'
      });
    }
    
    return issues;
  }

  displayQualityResults(metrics) {
    // Actualizar métricas
    $$('.metric-fill').forEach(fill => {
      const metricType = fill.closest('.metric').querySelector('.metric-label').textContent.toLowerCase();
      let score = 0;
      
      if (metricType.includes('accesibilidad')) {
        score = metrics.accessibility_score || metrics.accessibility || 0;
      } else if (metricType.includes('performance')) {
        score = metrics.performance_score || metrics.performance || 0;
      } else if (metricType.includes('design')) {
        score = metrics.design_system_score || metrics.designSystem || 0;
      }
      
      fill.dataset.score = score;
      fill.style.width = `${score}%`;
      fill.closest('.metric').querySelector('.metric-score').textContent = `${score}%`;
    });
    
    // Mostrar issues
    const issuesContainer = $('#qualityIssues');
    const issues = metrics.issues || [];
    
    if (issues.length === 0) {
      issuesContainer.innerHTML = '<p class="empty-state">¡Excelente! No se encontraron problemas</p>';
    } else {
      issuesContainer.innerHTML = issues.map(issue => `
        <div class="quality-issue issue-severity-${issue.severity}">
          <div class="issue-icon">${this.getIssueIcon(issue.severity)}</div>
          <div class="issue-content">
            <div class="issue-title">${issue.title}</div>
            <div class="issue-description">${issue.description}</div>
          </div>
        </div>
      `).join('');
    }
  }

  getIssueIcon(severity) {
    switch (severity) {
      case 'high': return '🚨';
      case 'medium': return '⚠️';
      case 'low': return 'ℹ️';
      default: return '⚠️';
    }
  }
}

// ===== FUNCIONES UTILITARIAS =====
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatTimeAgo(timestamp) {
  const now = new Date();
  const time = new Date(timestamp);
  const diffMs = now - time;
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'Ahora';
  if (diffMins < 60) return `${diffMins}m`;
  if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h`;
  return `${Math.floor(diffMins / 1440)}d`;
}

function showToast(message, type = 'info') {
  // Crear toast simple
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  // Estilos inline para el toast
  Object.assign(toast.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '12px 20px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '500',
    zIndex: '10000',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease'
  });
  
  // Colores según tipo
  const colors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  };
  toast.style.backgroundColor = colors[type] || colors.info;
  
  document.body.appendChild(toast);
  
  // Animar entrada
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto-remover después de 3 segundos
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// ===== API CLIENT =====
class ApiClient {
  constructor(baseUrl = CONFIG.API_BASE) {
    this.baseUrl = baseUrl;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async generateComponent(description) {
    return this.request('/generate-component', {
      method: 'POST',
      body: JSON.stringify({ description })
    });
  }
}

// ===== FUNCIONES DE CLIPBOARD =====
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback para navegadores más antiguos
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    }
  } catch (error) {
    console.error('Error copiando al portapapeles:', error);
    return false;
  }
}

// ===== APLICACIÓN PRINCIPAL =====
class SemantikApp {
  constructor() {
    this.state = new AppState();
    this.apiClient = new ApiClient();
    this.initializeEventListeners();
    this.initializeTheme();
    this.state.renderHistory();
  }

  initializeEventListeners() {
    // Generador
    $('#prompt')?.addEventListener('input', () => {
      this.state.updateCharCounter();
      this.state.toggleButton();
    });

    $('#btnCode')?.addEventListener('click', () => this.handleGenerateCode());
    $('#btnCopy')?.addEventListener('click', () => this.handleCopy());
    $('#btnSendToPlayground')?.addEventListener('click', () => this.state.sendToPlayground());

    // Pestañas
    $$('.tab-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.state.switchTab(tab);
      });
    });

    // Tema
    $('#themeToggle')?.addEventListener('click', () => this.toggleTheme());

    // Inicializar contadores y botones
    this.state.updateCharCounter();
    this.state.toggleButton();
  }

  async handleGenerateCode() {
    const query = $('#prompt').value.trim();
    if (!query || this.state.isLoading) return;

    this.state.setLoading(true);

    try {
      const result = await this.apiClient.generateComponent(query);
      
      if (result.success) {
        this.state.currentResult = result;
        this.state.addToHistory(query, result);
        this.state.showResult();
        showToast('Componente generado exitosamente', 'success');
      } else {
        throw new Error(result.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error generando componente:', error);
      showToast('Error generando el componente. Inténtalo de nuevo.', 'error');
    } finally {
      this.state.setLoading(false);
    }
  }

  async handleCopy() {
    if (!this.state.currentResult?.component_code) return;

    const success = await copyToClipboard(this.state.currentResult.component_code);
    
    if (success) {
      showToast('Código copiado al portapapeles', 'success');
    } else {
      showToast('Error copiando el código', 'error');
    }
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('semantika-theme') || 'light';
    this.setTheme(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('semantika-theme', theme);
    
    const themeIcon = $('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    // Actualizar tema de Monaco Editor si está inicializado
    if (this.state.monacoEditor) {
      monaco.editor.setTheme(theme === 'dark' ? 'vs-dark' : 'vs');
    }
  }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  window.semantikApp = new SemantikApp();
}); 