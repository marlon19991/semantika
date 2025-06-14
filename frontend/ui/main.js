/**
 * Semantika Frontend Application - Versión Simplificada
 * Generador de Componentes del Design System
 * @version 2.0.0
 */

// ===== CONFIGURACIÓN =====
const CONFIG = {
  API_BASE: "http://localhost:8000",
  STORAGE_KEY: "semantika_history",
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

  saveHistory() {
    try {
      localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(this.history));
    } catch (error) {
      console.warn('Error guardando historial:', error);
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
  
  // Mostrar
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);
  
  // Ocultar y remover
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// ===== CLIENTE API =====
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

// ===== FUNCIONES DE UTILIDAD =====
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback para navegadores sin soporte
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
    this.api = new ApiClient();
    this.initializeEventListeners();
    this.initializeTheme();
    this.state.renderHistory();
  }

  initializeEventListeners() {
    // Input de prompt
    const prompt = $('#prompt');
    if (prompt) {
      prompt.addEventListener('input', () => {
        this.state.updateCharCounter();
        this.state.toggleButton();
      });
      
      prompt.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          this.handleGenerateCode();
        }
      });
    }

    // Botón generar código
    const btnCode = $('#btnCode');
    if (btnCode) {
      btnCode.addEventListener('click', () => this.handleGenerateCode());
    }

    // Botón copiar
    const btnCopy = $('#btnCopy');
    if (btnCopy) {
      btnCopy.addEventListener('click', () => this.handleCopy());
    }

    // Toggle de tema
    const themeToggle = $('#themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  async handleGenerateCode() {
    const query = $('#prompt').value.trim();
    
    if (!query) {
      showToast('Por favor, describe el componente que necesitas', 'warning');
      return;
    }

    this.state.setLoading(true);

    try {
      const result = await this.api.generateComponent(query);
      
      if (result.success) {
        this.state.currentResult = result;
        this.state.showResult();
        this.state.addToHistory(query, result);
        showToast('Componente generado exitosamente', 'success');
      } else {
        throw new Error('Error en la generación del componente');
      }
    } catch (error) {
      console.error('Error generando código:', error);
      showToast('Error al generar el componente. Intenta nuevamente.', 'error');
    } finally {
      this.state.setLoading(false);
    }
  }

  async handleCopy() {
    if (!this.state.currentResult || !this.state.currentResult.component_code) {
      showToast('No hay código para copiar', 'warning');
      return;
    }

    const success = await copyToClipboard(this.state.currentResult.component_code);
    
    if (success) {
      showToast('Código copiado al portapapeles', 'success');
    } else {
      showToast('Error al copiar el código', 'error');
    }
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('semantika_theme') || 'dark';
    this.setTheme(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('semantika_theme', theme);
    
    const themeIcon = $('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  try {
    window.semantikApp = new SemantikApp();
    console.log('✅ Semantika inicializado correctamente');
  } catch (error) {
    console.error('❌ Error inicializando Semantika:', error);
    showToast('Error al inicializar la aplicación', 'error');
  }
}); 