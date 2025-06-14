/**
 * Semantika Playground - Sistema de pruebas para código generado por IA
 * Archivo principal que coordina toda la funcionalidad
 */

class SematikaPlayground {
    constructor() {
        this.currentPanel = 'editor';
        this.testCount = 0;
        this.qualityScore = null;
        this.theme = localStorage.getItem('playground-theme') || 'light';
        this.isResponsive = false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeComponents();
        this.loadExamples();
        this.loadComponentsLibrary();
        this.applyTheme();
        this.showWelcomeMessage();
    }

    setupEventListeners() {
        // Navegación entre paneles
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchPanel(e.target.dataset.panel);
            });
        });

        // Controles del header
        document.getElementById('toggle-theme').addEventListener('click', () => {
            this.toggleTheme();
        });

        document.getElementById('toggle-responsive').addEventListener('click', () => {
            this.toggleResponsive();
        });

        document.getElementById('share-playground').addEventListener('click', () => {
            this.openShareModal();
        });

        // Controles del editor
        document.getElementById('clear-editor').addEventListener('click', () => {
            this.clearEditor();
        });

        document.getElementById('format-code').addEventListener('click', () => {
            this.formatCode();
        });

        document.getElementById('run-code').addEventListener('click', () => {
            this.runCode();
        });

        document.getElementById('copy-code').addEventListener('click', () => {
            this.copyCode();
        });

        document.getElementById('export-code').addEventListener('click', () => {
            this.exportCode();
        });

        // Controles de vista previa
        document.getElementById('device-selector').addEventListener('change', (e) => {
            this.changeDevice(e.target.value);
        });

        document.getElementById('refresh-preview').addEventListener('click', () => {
            this.refreshPreview();
        });

        document.getElementById('fullscreen-preview').addEventListener('click', () => {
            this.toggleFullscreenPreview();
        });

        document.getElementById('screenshot-preview').addEventListener('click', () => {
            this.takeScreenshot();
        });

        // Búsqueda de componentes
        document.getElementById('component-search').addEventListener('input', (e) => {
            this.searchComponents(e.target.value);
        });

        // Usar ejemplos
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('use-example')) {
                const exampleCode = e.target.closest('.example-item').dataset.code;
                this.useExample(exampleCode);
            }
        });

        // Cerrar modales
        document.addEventListener('click', (e) => {
            if (e.target.dataset.close) {
                this.closeModal(e.target.dataset.close);
            }
        });

        // Copiar URL de compartir
        document.getElementById('copy-share-url').addEventListener('click', () => {
            this.copyShareUrl();
        });
    }

    initializeComponents() {
        // Inicializar editor de código
        if (window.CodeEditor) {
            window.codeEditor = new CodeEditor('code-editor');
            window.codeEditor.onCodeChange = (code) => {
                this.updateCodeStats(code);
                this.validateCodeRealTime(code);
            };
        }

        // Inicializar vista previa
        if (window.LivePreview) {
            window.livePreview = new LivePreview('preview-frame');
        }

        // Inicializar validador de calidad
        if (window.QualityChecker) {
            window.qualityChecker = new QualityChecker();
        }
    }

    switchPanel(panelName) {
        // Ocultar panel actual
        document.querySelector('.panel.active').classList.remove('active');
        document.querySelector('.nav-tab.active').classList.remove('active');

        // Mostrar nuevo panel
        document.getElementById(`${panelName}-panel`).classList.add('active');
        document.querySelector(`[data-panel="${panelName}"]`).classList.add('active');

        this.currentPanel = panelName;
        this.showToast(`Cambiado a panel: ${this.getPanelDisplayName(panelName)}`, 'info');
    }

    getPanelDisplayName(panelName) {
        const names = {
            'editor': 'Editor',
            'examples': 'Ejemplos',
            'components': 'Componentes',
            'docs': 'Documentación'
        };
        return names[panelName] || panelName;
    }

    runCode() {
        const code = window.codeEditor ? window.codeEditor.getCode() : '';
        
        if (!code.trim()) {
            this.showToast('No hay código para ejecutar', 'warning');
            return;
        }

        this.showToast('Ejecutando código...', 'info');
        this.updatePreviewStatus('Ejecutando...');

        // Actualizar contador de pruebas
        this.testCount++;
        document.getElementById('tests-run').textContent = this.testCount;

        // Renderizar en vista previa
        if (window.livePreview) {
            window.livePreview.render(code).then(() => {
                this.updatePreviewStatus('Renderizado correctamente');
                this.showToast('Código ejecutado exitosamente', 'success');
                
                // Ejecutar validación de calidad
                this.runQualityCheck(code);
            }).catch((error) => {
                this.updatePreviewStatus('Error en renderizado');
                this.showToast(`Error: ${error.message}`, 'error');
            });
        }
    }

    runQualityCheck(code) {
        if (!window.qualityChecker) return;

        this.showToast('Analizando calidad...', 'info');

        window.qualityChecker.validate(code).then((results) => {
            this.displayQualityResults(results);
            this.qualityScore = results.overall_score;
            
            // Actualizar badge de calidad
            const badge = document.getElementById('quality-badge');
            const score = Math.round(results.overall_score * 100);
            badge.querySelector('.score').textContent = `${score}%`;
            
            // Actualizar header
            document.getElementById('quality-score').textContent = `${score}%`;
            
            // Determinar color del badge
            let badgeClass = 'low';
            if (score >= 95) badgeClass = 'excellent';
            else if (score >= 85) badgeClass = 'good';
            else if (score >= 80) badgeClass = 'acceptable';
            
            badge.className = `quality-score-badge ${badgeClass}`;
            
            const message = score >= 80 ? 
                `Excelente calidad: ${score}%` : 
                `Calidad mejorable: ${score}%`;
            
            this.showToast(message, score >= 80 ? 'success' : 'warning');
        }).catch((error) => {
            this.showToast(`Error en validación: ${error.message}`, 'error');
        });
    }

    displayQualityResults(results) {
        // Actualizar métricas individuales
        const metrics = ['validity', 'accessibility', 'syntax'];
        
        metrics.forEach(metric => {
            const score = results.validation_summary?.find(v => v.criterion.includes(metric))?.score || 0;
            const percentage = Math.round(score * 100);
            
            document.getElementById(`${metric}-score`).textContent = `${percentage}%`;
            document.getElementById(`${metric}-fill`).style.width = `${percentage}%`;
            
            // Color de la barra según el score
            const fill = document.getElementById(`${metric}-fill`);
            fill.className = 'metric-fill';
            if (percentage >= 90) fill.classList.add('excellent');
            else if (percentage >= 80) fill.classList.add('good');
            else if (percentage >= 60) fill.classList.add('acceptable');
            else fill.classList.add('poor');
        });

        // Mostrar sugerencias
        this.displayQualitySuggestions(results);
    }

    displayQualitySuggestions(results) {
        const container = document.getElementById('quality-suggestions');
        
        if (!results.validation_summary || results.validation_summary.length === 0) {
            container.innerHTML = '<p class="no-suggestions">No hay sugerencias disponibles</p>';
            return;
        }

        let suggestionsHtml = '';
        
        results.validation_summary.forEach(validation => {
            if (validation.suggestions && validation.suggestions.length > 0) {
                validation.suggestions.forEach(suggestion => {
                    const priority = validation.score < 0.8 ? 'high' : 'medium';
                    suggestionsHtml += `
                        <div class="suggestion ${priority}">
                            <div class="suggestion-header">
                                <i class="fas fa-lightbulb"></i>
                                <span class="suggestion-category">${validation.criterion}</span>
                                <span class="suggestion-priority">${priority === 'high' ? 'Alta' : 'Media'}</span>
                            </div>
                            <p class="suggestion-text">${suggestion}</p>
                        </div>
                    `;
                });
            }
        });

        if (suggestionsHtml) {
            container.innerHTML = suggestionsHtml;
        } else {
            container.innerHTML = '<p class="no-suggestions">¡Excelente! No hay sugerencias de mejora</p>';
        }
    }

    updateCodeStats(code) {
        const lines = code.split('\n').length;
        const chars = code.length;
        
        document.getElementById('line-count').textContent = lines;
        document.getElementById('char-count').textContent = chars;
    }

    validateCodeRealTime(code) {
        // Validación básica en tiempo real
        if (code.trim() === '') return;
        
        // Validar HTML básico
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(code, 'text/html');
            const errors = doc.querySelectorAll('parsererror');
            
            if (errors.length > 0) {
                this.updatePreviewStatus('Error de sintaxis');
            } else {
                this.updatePreviewStatus('Sintaxis válida');
            }
        } catch (error) {
            this.updatePreviewStatus('Error de sintaxis');
        }
    }

    updatePreviewStatus(status) {
        document.getElementById('preview-status').textContent = status;
    }

    clearEditor() {
        if (window.codeEditor) {
            window.codeEditor.clear();
            this.showToast('Editor limpiado', 'info');
        }
        
        // Limpiar vista previa
        if (window.livePreview) {
            window.livePreview.clear();
        }
        
        // Resetear métricas
        this.resetQualityMetrics();
    }

    formatCode() {
        if (window.codeEditor) {
            window.codeEditor.format();
            this.showToast('Código formateado', 'success');
        }
    }

    copyCode() {
        const code = window.codeEditor ? window.codeEditor.getCode() : '';
        
        if (navigator.clipboard && code) {
            navigator.clipboard.writeText(code).then(() => {
                this.showToast('Código copiado al portapapeles', 'success');
            }).catch(() => {
                this.showToast('Error al copiar código', 'error');
            });
        } else {
            this.showToast('No hay código para copiar', 'warning');
        }
    }

    exportCode() {
        const code = window.codeEditor ? window.codeEditor.getCode() : '';
        
        if (!code.trim()) {
            this.showToast('No hay código para exportar', 'warning');
            return;
        }

        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `semantika-component-${Date.now()}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showToast('Código exportado exitosamente', 'success');
    }

    changeDevice(device) {
        const previewContainer = document.getElementById('preview-container');
        previewContainer.className = `preview-container device-${device}`;
        this.showToast(`Vista cambiada a: ${device}`, 'info');
    }

    refreshPreview() {
        if (window.livePreview) {
            const code = window.codeEditor ? window.codeEditor.getCode() : '';
            if (code.trim()) {
                this.runCode();
            } else {
                window.livePreview.clear();
                this.showToast('Vista previa actualizada', 'info');
            }
        }
    }

    toggleFullscreenPreview() {
        const previewContainer = document.getElementById('preview-container');
        
        if (previewContainer.classList.contains('fullscreen')) {
            previewContainer.classList.remove('fullscreen');
            document.getElementById('fullscreen-preview').innerHTML = '<i class="fas fa-expand"></i> Pantalla completa';
        } else {
            previewContainer.classList.add('fullscreen');
            document.getElementById('fullscreen-preview').innerHTML = '<i class="fas fa-compress"></i> Salir';
        }
    }

    takeScreenshot() {
        // Implementación básica de captura
        this.showToast('Función de captura en desarrollo', 'info');
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        localStorage.setItem('playground-theme', this.theme);
        
        const icon = document.querySelector('#toggle-theme i');
        icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        
        this.showToast(`Tema cambiado a: ${this.theme === 'dark' ? 'Oscuro' : 'Claro'}`, 'info');
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.theme);
    }

    toggleResponsive() {
        this.isResponsive = !this.isResponsive;
        const container = document.getElementById('preview-container');
        
        if (this.isResponsive) {
            container.classList.add('responsive-mode');
            this.showToast('Modo responsive activado', 'info');
        } else {
            container.classList.remove('responsive-mode');
            this.showToast('Modo responsive desactivado', 'info');
        }
    }

    openShareModal() {
        const code = window.codeEditor ? window.codeEditor.getCode() : '';
        if (!code.trim()) {
            this.showToast('No hay código para compartir', 'warning');
            return;
        }

        // Generar URL de compartir (simulada)
        const encodedCode = btoa(encodeURIComponent(code));
        const shareUrl = `${window.location.origin}${window.location.pathname}?code=${encodedCode}`;
        
        document.getElementById('share-url-input').value = shareUrl;
        document.getElementById('share-modal').classList.add('active');
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    }

    copyShareUrl() {
        const input = document.getElementById('share-url-input');
        input.select();
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(input.value).then(() => {
                this.showToast('URL copiada al portapapeles', 'success');
            });
        }
    }

    useExample(code) {
        if (window.codeEditor) {
            window.codeEditor.setCode(code);
            this.switchPanel('editor');
            this.showToast('Ejemplo cargado en el editor', 'success');
            
            // Ejecutar automáticamente
            setTimeout(() => {
                this.runCode();
            }, 500);
        }
    }

    searchComponents(query) {
        const components = document.querySelectorAll('#components-list .component-item');
        
        components.forEach(component => {
            const name = component.querySelector('.component-name').textContent.toLowerCase();
            const description = component.querySelector('.component-description').textContent.toLowerCase();
            
            if (name.includes(query.toLowerCase()) || description.includes(query.toLowerCase())) {
                component.style.display = 'block';
            } else {
                component.style.display = 'none';
            }
        });
    }

    loadExamples() {
        // Los ejemplos ya están definidos en el HTML
        // Aquí se pueden cargar ejemplos adicionales dinámicamente
        console.log('Ejemplos cargados');
    }

    loadComponentsLibrary() {
        const components = [
            { name: 'bc-button', description: 'Botones interactivos con múltiples apariencias', category: 'interactive' },
            { name: 'bc-input', description: 'Campos de entrada con validación', category: 'form' },
            { name: 'bc-card', description: 'Tarjetas de contenido con elevación', category: 'layout' },
            { name: 'bc-modal', description: 'Diálogos modales para acciones importantes', category: 'overlay' },
            { name: 'bc-alert', description: 'Alertas y notificaciones', category: 'feedback' },
            { name: 'bc-table', description: 'Tablas con funcionalidades avanzadas', category: 'data' },
            { name: 'bc-select', description: 'Selectores con búsqueda', category: 'form' },
            { name: 'bc-checkbox', description: 'Checkboxes con estados múltiples', category: 'form' },
            { name: 'bc-radio', description: 'Radio buttons agrupados', category: 'form' },
            { name: 'bc-tooltip', description: 'Tooltips posicionables', category: 'overlay' },
            { name: 'bc-badge', description: 'Etiquetas y badges', category: 'display' },
            { name: 'bc-accordion', description: 'Acordeones colapsables', category: 'layout' },
            { name: 'bc-tabs', description: 'Pestañas navegables', category: 'navigation' },
            { name: 'bc-progress', description: 'Barras de progreso', category: 'feedback' },
            { name: 'bc-spinner', description: 'Indicadores de carga', category: 'feedback' }
        ];

        const container = document.getElementById('components-list');
        
        components.forEach(component => {
            const componentHtml = `
                <div class="component-item" data-component="${component.name}">
                    <div class="component-header">
                        <span class="component-name">${component.name}</span>
                        <span class="component-category">${component.category}</span>
                    </div>
                    <p class="component-description">${component.description}</p>
                    <div class="component-actions">
                        <button class="btn-link" onclick="playground.insertComponentTemplate('${component.name}')">
                            <i class="fas fa-plus"></i> Insertar
                        </button>
                        <button class="btn-link" onclick="playground.viewComponentDocs('${component.name}')">
                            <i class="fas fa-book"></i> Docs
                        </button>
                    </div>
                </div>
            `;
            container.innerHTML += componentHtml;
        });
    }

    insertComponentTemplate(componentName) {
        const templates = {
            'bc-button': '<bc-button appearance="primary">Texto del botón</bc-button>',
            'bc-input': '<bc-input type="text" label="Etiqueta" placeholder="Texto de ejemplo"></bc-input>',
            'bc-card': '<bc-card title="Título de la tarjeta">\n  <p>Contenido de la tarjeta</p>\n</bc-card>',
            'bc-modal': '<bc-modal title="Título del modal" [visible]="true">\n  <p>Contenido del modal</p>\n</bc-modal>',
            'bc-alert': '<bc-alert type="info" title="Información">Mensaje de la alerta</bc-alert>'
        };

        const template = templates[componentName] || `<${componentName}></${componentName}>`;
        
        if (window.codeEditor) {
            const currentCode = window.codeEditor.getCode();
            const newCode = currentCode ? `${currentCode}\n\n${template}` : template;
            window.codeEditor.setCode(newCode);
            this.switchPanel('editor');
            this.showToast(`Plantilla de ${componentName} insertada`, 'success');
        }
    }

    viewComponentDocs(componentName) {
        this.switchPanel('docs');
        this.showToast(`Ver documentación de ${componentName}`, 'info');
    }

    resetQualityMetrics() {
        ['validity', 'accessibility', 'syntax'].forEach(metric => {
            document.getElementById(`${metric}-score`).textContent = '--';
            document.getElementById(`${metric}-fill`).style.width = '0%';
        });
        
        document.getElementById('quality-badge').querySelector('.score').textContent = '--';
        document.getElementById('quality-score').textContent = '--';
        document.getElementById('quality-suggestions').innerHTML = '<p class="no-suggestions">Ejecuta el código para ver sugerencias de calidad</p>';
    }

    showWelcomeMessage() {
        setTimeout(() => {
            this.showToast('¡Bienvenido al Playground de Semantika! 🎮', 'success', 5000);
        }, 1000);
    }

    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = {
            'success': 'fas fa-check-circle',
            'error': 'fas fa-exclamation-circle',
            'warning': 'fas fa-exclamation-triangle',
            'info': 'fas fa-info-circle'
        }[type] || 'fas fa-info-circle';
        
        toast.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
            <button class="toast-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.getElementById('toast-container').appendChild(toast);
        
        // Mostrar toast con animación
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Ocultar automáticamente
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
}

// Inicializar playground cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.playground = new SematikaPlayground();
    
    // Cargar código desde URL si existe
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');
    if (codeParam && window.codeEditor) {
        try {
            const code = decodeURIComponent(atob(codeParam));
            window.codeEditor.setCode(code);
            window.playground.runCode();
        } catch (error) {
            console.error('Error al cargar código desde URL:', error);
        }
    }
});

// Exportar para uso global
window.SematikaPlayground = SematikaPlayground; 