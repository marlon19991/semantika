/**
 * LivePreview - Componente para renderizar código en tiempo real
 * Maneja la vista previa interactiva del código generado por Semantika
 */

class LivePreview {
    constructor(frameId) {
        this.frame = document.getElementById(frameId);
        this.isReady = false;
        this.currentCode = '';
        this.initializeFrame();
    }

    initializeFrame() {
        // Crear documento base para el iframe
        const baseDocument = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Vista Previa - Semantika</title>
                <style>
                    /* Estilos base del Design System de Bancolombia */
                    :root {
                        --bc-primary: #004B87;
                        --bc-secondary: #FFCC02;
                        --bc-success: #10B981;
                        --bc-warning: #F59E0B;
                        --bc-error: #EF4444;
                        --bc-info: #3B82F6;
                        --bc-light: #F9FAFB;
                        --bc-dark: #1F2937;
                        
                        --bc-font-family: 'Nunito Sans', system-ui, sans-serif;
                        --bc-border-radius: 8px;
                        --bc-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        --bc-transition: all 0.2s ease;
                    }
                    
                    * {
                        box-sizing: border-box;
                    }
                    
                    body {
                        font-family: var(--bc-font-family);
                        margin: 0;
                        padding: 20px;
                        background: #fff;
                        color: #333;
                        line-height: 1.6;
                    }
                    
                    /* Componentes del Design System simulados */
                    bc-button, [bc-button] {
                        display: inline-block;
                        padding: 12px 24px;
                        border: none;
                        border-radius: var(--bc-border-radius);
                        font-family: var(--bc-font-family);
                        font-weight: 600;
                        text-decoration: none;
                        text-align: center;
                        cursor: pointer;
                        transition: var(--bc-transition);
                        box-shadow: var(--bc-shadow);
                        min-width: 120px;
                    }
                    
                    bc-button[appearance="primary"], [bc-button][appearance="primary"] {
                        background: var(--bc-primary);
                        color: white;
                    }
                    
                    bc-button[appearance="primary"]:hover, [bc-button][appearance="primary"]:hover {
                        background: #003366;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 8px rgba(0,75,135,0.3);
                    }
                    
                    bc-button[appearance="secondary"], [bc-button][appearance="secondary"] {
                        background: transparent;
                        color: var(--bc-primary);
                        border: 2px solid var(--bc-primary);
                    }
                    
                    bc-button[appearance="secondary"]:hover, [bc-button][appearance="secondary"]:hover {
                        background: var(--bc-primary);
                        color: white;
                    }
                    
                    bc-button[appearance="success"], [bc-button][appearance="success"] {
                        background: var(--bc-success);
                        color: white;
                    }
                    
                    bc-button[appearance="warning"], [bc-button][appearance="warning"] {
                        background: var(--bc-warning);
                        color: white;
                    }
                    
                    bc-button[appearance="error"], [bc-button][appearance="error"] {
                        background: var(--bc-error);
                        color: white;
                    }
                    
                    bc-button[size="small"], [bc-button][size="small"] {
                        padding: 8px 16px;
                        font-size: 14px;
                        min-width: 80px;
                    }
                    
                    bc-button[size="large"], [bc-button][size="large"] {
                        padding: 16px 32px;
                        font-size: 18px;
                        min-width: 160px;
                    }
                    
                    bc-button[disabled], [bc-button][disabled] {
                        opacity: 0.6;
                        cursor: not-allowed;
                        pointer-events: none;
                    }
                    
                    /* Inputs del Design System */
                    bc-input, [bc-input] {
                        display: block;
                        width: 100%;
                        max-width: 400px;
                        margin-bottom: 16px;
                    }
                    
                    bc-input input, [bc-input] input, bc-input, [bc-input] {
                        padding: 12px 16px;
                        border: 2px solid #e5e7eb;
                        border-radius: var(--bc-border-radius);
                        font-family: var(--bc-font-family);
                        font-size: 16px;
                        transition: var(--bc-transition);
                        width: 100%;
                    }
                    
                    bc-input input:focus, [bc-input] input:focus, bc-input:focus, [bc-input]:focus {
                        outline: none;
                        border-color: var(--bc-primary);
                        box-shadow: 0 0 0 3px rgba(0,75,135,0.1);
                    }
                    
                    bc-input[error], [bc-input][error] {
                        border-color: var(--bc-error);
                    }
                    
                    bc-input label, [bc-input] label {
                        display: block;
                        margin-bottom: 8px;
                        font-weight: 600;
                        color: #374151;
                    }
                    
                    /* Cards del Design System */
                    bc-card, [bc-card] {
                        display: block;
                        background: white;
                        border-radius: var(--bc-border-radius);
                        box-shadow: var(--bc-shadow);
                        padding: 24px;
                        margin-bottom: 16px;
                        transition: var(--bc-transition);
                    }
                    
                    bc-card:hover, [bc-card]:hover {
                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    }
                    
                    bc-card h3, [bc-card] h3 {
                        margin-top: 0;
                        color: var(--bc-primary);
                    }
                    
                    /* Alertas del Design System */
                    bc-alert, [bc-alert] {
                        display: block;
                        padding: 16px;
                        border-radius: var(--bc-border-radius);
                        margin-bottom: 16px;
                        border-left: 4px solid;
                    }
                    
                    bc-alert[type="success"], [bc-alert][type="success"] {
                        background: #ecfdf5;
                        border-color: var(--bc-success);
                        color: #065f46;
                    }
                    
                    bc-alert[type="warning"], [bc-alert][type="warning"] {
                        background: #fffbeb;
                        border-color: var(--bc-warning);
                        color: #92400e;
                    }
                    
                    bc-alert[type="error"], [bc-alert][type="error"] {
                        background: #fef2f2;
                        border-color: var(--bc-error);
                        color: #991b1b;
                    }
                    
                    bc-alert[type="info"], [bc-alert][type="info"] {
                        background: #eff6ff;
                        border-color: var(--bc-info);
                        color: #1e40af;
                    }
                    
                    /* Modales del Design System */
                    bc-modal, [bc-modal] {
                        display: none;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.5);
                        z-index: 1000;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    bc-modal[visible="true"], [bc-modal][visible="true"] {
                        display: flex;
                    }
                    
                    bc-modal .modal-content, [bc-modal] .modal-content {
                        background: white;
                        border-radius: var(--bc-border-radius);
                        padding: 32px;
                        max-width: 500px;
                        width: 90%;
                        max-height: 80vh;
                        overflow-y: auto;
                        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
                    }
                    
                    bc-modal h3, [bc-modal] h3 {
                        margin-top: 0;
                        color: var(--bc-primary);
                    }
                    
                    .modal-actions {
                        display: flex;
                        gap: 12px;
                        justify-content: flex-end;
                        margin-top: 24px;
                    }
                    
                    /* Formularios */
                    .bc-form {
                        max-width: 500px;
                    }
                    
                    .bc-form bc-input, .bc-form [bc-input] {
                        margin-bottom: 20px;
                    }
                    
                    /* Utilidades */
                    .text-center { text-align: center; }
                    .mb-2 { margin-bottom: 8px; }
                    .mb-4 { margin-bottom: 16px; }
                    .mt-4 { margin-top: 16px; }
                    .p-4 { padding: 16px; }
                    
                    /* Animaciones */
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    
                    .fade-in {
                        animation: fadeIn 0.3s ease;
                    }
                    
                    /* Responsive */
                    @media (max-width: 768px) {
                        body {
                            padding: 12px;
                        }
                        
                        bc-button, [bc-button] {
                            width: 100%;
                            margin-bottom: 8px;
                        }
                        
                        .modal-actions {
                            flex-direction: column;
                        }
                    }
                </style>
            </head>
            <body>
                <div id="preview-content">
                    <div class="preview-placeholder">
                        <h3>Vista Previa</h3>
                        <p>El código generado aparecerá aquí</p>
                    </div>
                </div>
                
                <script>
                    // Funciones para mejorar la interactividad
                    document.addEventListener('DOMContentLoaded', function() {
                        // Hacer que los botones sean interactivos
                        document.addEventListener('click', function(e) {
                            if (e.target.matches('bc-button, [bc-button]')) {
                                e.target.style.transform = 'scale(0.95)';
                                setTimeout(() => {
                                    e.target.style.transform = '';
                                }, 150);
                            }
                        });
                        
                        // Añadir comportamiento a los inputs
                        document.addEventListener('input', function(e) {
                            if (e.target.matches('bc-input input, [bc-input] input')) {
                                const parent = e.target.closest('bc-input, [bc-input]');
                                if (parent) {
                                    parent.classList.toggle('has-value', e.target.value.length > 0);
                                }
                            }
                        });
                        
                        // Validación simple de formularios
                        document.addEventListener('submit', function(e) {
                            const form = e.target;
                            const requiredInputs = form.querySelectorAll('bc-input[required] input, [bc-input][required] input');
                            let isValid = true;
                            
                            requiredInputs.forEach(input => {
                                if (!input.value.trim()) {
                                    input.closest('bc-input, [bc-input]').setAttribute('error', 'true');
                                    isValid = false;
                                } else {
                                    input.closest('bc-input, [bc-input]').removeAttribute('error');
                                }
                            });
                            
                            if (!isValid) {
                                e.preventDefault();
                                alert('Por favor completa todos los campos requeridos');
                            }
                        });
                        
                        // Cerrar modales al hacer clic fuera
                        document.addEventListener('click', function(e) {
                            if (e.target.matches('bc-modal, [bc-modal]')) {
                                e.target.removeAttribute('visible');
                            }
                        });
                    });
                </script>
            </body>
            </html>
        `;

        // Escribir el documento base en el iframe
        this.frame.srcdoc = baseDocument;
        
        // Esperar a que el iframe esté listo
        this.frame.onload = () => {
            this.isReady = true;
        };
    }

    render(code) {
        return new Promise((resolve, reject) => {
            if (!this.isReady) {
                reject(new Error('Vista previa no está lista'));
                return;
            }

            try {
                const doc = this.frame.contentDocument;
                const container = doc.getElementById('preview-content');
                
                if (!container) {
                    reject(new Error('Contenedor de vista previa no encontrado'));
                    return;
                }

                // Limpiar contenido anterior
                container.innerHTML = '';

                // Validar código HTML básico
                if (!this.isValidHTML(code)) {
                    throw new Error('Código HTML inválido');
                }

                // Procesar el código para mejorar la compatibilidad
                const processedCode = this.processCode(code);
                
                // Insertar el código procesado
                container.innerHTML = processedCode;
                
                // Añadir clases de animación
                container.classList.add('fade-in');
                
                // Aplicar mejoras de accesibilidad
                this.enhanceAccessibility(container);
                
                // Hacer que los componentes sean interactivos
                this.makeInteractive(container);
                
                this.currentCode = code;
                resolve();
                
            } catch (error) {
                reject(error);
            }
        });
    }

    processCode(code) {
        // Convertir componentes Angular a equivalentes HTML si es necesario
        let processedCode = code;
        
        // Manejar atributos Angular
        processedCode = processedCode.replace(/\[([^\]]+)\]="([^"]+)"/g, '$1="$2"');
        
        // Manejar event bindings (convertir a onclick básico)
        processedCode = processedCode.replace(/\(click\)="([^"]+)"/g, 'onclick="$1"');
        
        // Añadir estructura básica si es solo un componente
        if (!processedCode.includes('<') || processedCode.trim().split('<').length === 2) {
            // Es un componente individual, envolverlo en un contenedor
            processedCode = `<div class="component-container">${processedCode}</div>`;
        }
        
        return processedCode;
    }

    isValidHTML(code) {
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(code, 'text/html');
            const errors = doc.querySelectorAll('parsererror');
            return errors.length === 0;
        } catch (error) {
            return false;
        }
    }

    enhanceAccessibility(container) {
        // Añadir atributos ARIA automáticamente
        const buttons = container.querySelectorAll('bc-button, [bc-button]');
        buttons.forEach(button => {
            if (!button.hasAttribute('aria-label') && !button.textContent.trim()) {
                button.setAttribute('aria-label', 'Botón');
            }
            if (!button.hasAttribute('role')) {
                button.setAttribute('role', 'button');
            }
        });

        // Mejorar inputs
        const inputs = container.querySelectorAll('bc-input, [bc-input]');
        inputs.forEach(input => {
            const inputEl = input.querySelector('input') || input;
            const label = input.getAttribute('label');
            
            if (label && !inputEl.hasAttribute('aria-label')) {
                inputEl.setAttribute('aria-label', label);
            }
        });

        // Mejorar alertas
        const alerts = container.querySelectorAll('bc-alert, [bc-alert]');
        alerts.forEach(alert => {
            if (!alert.hasAttribute('role')) {
                alert.setAttribute('role', 'alert');
            }
        });
    }

    makeInteractive(container) {
        // Hacer que los botones simulen clicks
        const buttons = container.querySelectorAll('bc-button, [bc-button]');
        buttons.forEach(button => {
            button.style.cursor = 'pointer';
            button.addEventListener('click', (e) => {
                // Efecto visual de click
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 150);
            });
        });

        // Hacer que los formularios funcionen
        const forms = container.querySelectorAll('form, .bc-form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Simular envío exitoso
                const alert = document.createElement('bc-alert');
                alert.setAttribute('type', 'success');
                alert.innerHTML = '✅ Formulario enviado correctamente (simulado)';
                
                form.appendChild(alert);
                
                setTimeout(() => {
                    alert.remove();
                }, 3000);
            });
        });

        // Hacer que los modales sean funcionales
        const modals = container.querySelectorAll('bc-modal, [bc-modal]');
        modals.forEach(modal => {
            // Botones para cerrar modal
            const closeButtons = modal.querySelectorAll('[data-dismiss="modal"], .modal-close');
            closeButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.removeAttribute('visible');
                });
            });
        });
    }

    clear() {
        if (this.isReady) {
            const doc = this.frame.contentDocument;
            const container = doc.getElementById('preview-content');
            
            if (container) {
                container.innerHTML = `
                    <div class="preview-placeholder">
                        <h3>Vista Previa</h3>
                        <p>El código generado aparecerá aquí</p>
                    </div>
                `;
            }
        }
        
        this.currentCode = '';
    }

    getCurrentCode() {
        return this.currentCode;
    }

    getPreviewElement() {
        return this.frame;
    }

    // Método para capturar screenshot del contenido
    captureScreenshot() {
        return new Promise((resolve, reject) => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const doc = this.frame.contentDocument;
                
                // Nota: Esto es una implementación básica
                // Para una implementación completa se necesitaría html2canvas
                resolve('Screenshot feature requires html2canvas library');
            } catch (error) {
                reject(error);
            }
        });
    }

    // Método para exportar el HTML completo
    exportHTML() {
        if (!this.isReady) {
            throw new Error('Vista previa no está lista');
        }

        const doc = this.frame.contentDocument;
        return doc.documentElement.outerHTML;
    }
}

// Exportar para uso global
window.LivePreview = LivePreview; 