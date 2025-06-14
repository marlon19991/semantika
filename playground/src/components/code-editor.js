/**
 * CodeEditor - Componente del editor de código con Monaco Editor
 * Proporciona edición avanzada con syntax highlighting y autocompletado
 */

class CodeEditor {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.editor = null;
        this.language = 'html';
        this.theme = 'vs-light';
        this.onCodeChange = null;
        this.isReady = false;
        
        this.initializeEditor();
    }

    async initializeEditor() {
        try {
            // Verificar si Monaco Editor está disponible
            if (typeof require === 'undefined') {
                await this.loadMonacoEditor();
            }

            // Configurar Monaco Editor
            require.config({ 
                paths: { 
                    'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' 
                }
            });

            require(['vs/editor/editor.main'], () => {
                this.createEditor();
            });

        } catch (error) {
            console.error('Error inicializando Monaco Editor:', error);
            this.createFallbackEditor();
        }
    }

    async loadMonacoEditor() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    createEditor() {
        try {
            // Configurar validaciones y sugerencias personalizadas
            this.setupCustomLanguageFeatures();

            // Crear el editor
            this.editor = monaco.editor.create(this.container, {
                value: this.getDefaultCode(),
                language: this.language,
                theme: this.theme,
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                automaticLayout: true,
                minimap: { enabled: false },
                wordWrap: 'on',
                lineHeight: 24,
                letterSpacing: 0.5,
                tabSize: 2,
                insertSpaces: true,
                formatOnPaste: true,
                formatOnType: true,
                folding: true,
                bracketPairColorization: {
                    enabled: true
                },
                suggest: {
                    enabled: true,
                    showKeywords: true,
                    showSnippets: true
                },
                quickSuggestions: {
                    other: true,
                    comments: false,
                    strings: false
                }
            });

            // Configurar eventos
            this.setupEditorEvents();
            
            // Configurar comandos personalizados
            this.setupCustomCommands();

            this.isReady = true;
            console.log('✅ Monaco Editor inicializado correctamente');

        } catch (error) {
            console.error('Error creando editor Monaco:', error);
            this.createFallbackEditor();
        }
    }

    setupCustomLanguageFeatures() {
        // Registrar provider de autocompletado para componentes de Bancolombia
        monaco.languages.registerCompletionItemProvider('html', {
            provideCompletionItems: (model, position) => {
                const word = model.getWordUntilPosition(position);
                const range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn
                };

                const suggestions = this.getBancolombiaComponentSuggestions(range);
                return { suggestions };
            }
        });

        // Registrar provider de hover para documentación
        monaco.languages.registerHoverProvider('html', {
            provideHover: (model, position) => {
                const word = model.getWordAtPosition(position);
                if (word && word.word.startsWith('bc-')) {
                    const documentation = this.getComponentDocumentation(word.word);
                    if (documentation) {
                        return {
                            range: new monaco.Range(
                                position.lineNumber,
                                word.startColumn,
                                position.lineNumber,
                                word.endColumn
                            ),
                            contents: [
                                { value: `**${word.word}**` },
                                { value: documentation }
                            ]
                        };
                    }
                }
                return null;
            }
        });

        // Configurar validaciones personalizadas
        monaco.languages.onLanguage('html', () => {
            monaco.languages.setLanguageConfiguration('html', {
                wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
                autoClosingPairs: [
                    { open: '<', close: '>' },
                    { open: '"', close: '"' },
                    { open: "'", close: "'" }
                ]
            });
        });
    }

    getBancolombiaComponentSuggestions(range) {
        const components = [
            {
                label: 'bc-button',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '<bc-button appearance="primary">${1:Texto del botón}</bc-button>',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Botón interactivo del Design System de Bancolombia',
                detail: 'Componente bc-button',
                range: range
            },
            {
                label: 'bc-input',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '<bc-input type="${1:text}" label="${2:Etiqueta}" placeholder="${3:Placeholder}"></bc-input>',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Campo de entrada con validación',
                detail: 'Componente bc-input',
                range: range
            },
            {
                label: 'bc-card',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '<bc-card title="${1:Título}">\n  ${2:Contenido de la tarjeta}\n</bc-card>',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Tarjeta de contenido con elevación',
                detail: 'Componente bc-card',
                range: range
            },
            {
                label: 'bc-alert',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '<bc-alert type="${1:info}" title="${2:Título}">${3:Mensaje de la alerta}</bc-alert>',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Alerta o notificación',
                detail: 'Componente bc-alert',
                range: range
            },
            {
                label: 'bc-modal',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '<bc-modal title="${1:Título}" visible="${2:true}">\n  ${3:Contenido del modal}\n</bc-modal>',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Diálogo modal',
                detail: 'Componente bc-modal',
                range: range
            }
        ];

        // Agregar sugerencias de atributos
        const attributes = [
            {
                label: 'appearance',
                kind: monaco.languages.CompletionItemKind.Property,
                insertText: 'appearance="${1:primary}"',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Apariencia del componente: primary, secondary, ghost, success, warning, error',
                detail: 'Atributo appearance',
                range: range
            },
            {
                label: 'size',
                kind: monaco.languages.CompletionItemKind.Property,
                insertText: 'size="${1:medium}"',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                documentation: 'Tamaño del componente: small, medium, large',
                detail: 'Atributo size',
                range: range
            }
        ];

        return [...components, ...attributes];
    }

    getComponentDocumentation(componentName) {
        const docs = {
            'bc-button': `**Botón interactivo**\n\nAtributos disponibles:\n- appearance: primary, secondary, ghost, success, warning, error\n- size: small, medium, large\n- disabled: boolean\n- loading: boolean`,
            'bc-input': `**Campo de entrada**\n\nAtributos disponibles:\n- type: text, email, password, number, tel, url\n- label: string (requerido)\n- placeholder: string\n- required: boolean\n- disabled: boolean`,
            'bc-card': `**Tarjeta de contenido**\n\nAtributos disponibles:\n- title: string\n- elevation: number (0-5)\n- hover: boolean`,
            'bc-alert': `**Alerta o notificación**\n\nAtributos disponibles:\n- type: success, warning, error, info\n- title: string\n- dismissible: boolean\n- inline: boolean`,
            'bc-modal': `**Diálogo modal**\n\nAtributos disponibles:\n- title: string (requerido)\n- visible: boolean\n- size: small, medium, large\n- closable: boolean`
        };

        return docs[componentName] || null;
    }

    setupEditorEvents() {
        // Evento de cambio de contenido
        this.editor.onDidChangeModelContent((e) => {
            const code = this.editor.getValue();
            
            // Actualizar estadísticas
            this.updateStats(code);
            
            // Callback personalizado
            if (this.onCodeChange) {
                this.onCodeChange(code);
            }
        });

        // Evento de cambio de selección
        this.editor.onDidChangeCursorSelection((e) => {
            const selection = this.editor.getSelection();
            if (selection && !selection.isEmpty()) {
                const selectedText = this.editor.getModel().getValueInRange(selection);
                console.log('Texto seleccionado:', selectedText);
            }
        });

        // Evento de focus
        this.editor.onDidFocusEditorText(() => {
            console.log('Editor enfocado');
        });

        // Evento de blur
        this.editor.onDidBlurEditorText(() => {
            console.log('Editor desenfocado');
        });
    }

    setupCustomCommands() {
        // Comando para ejecutar código (Ctrl+Enter)
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            this.executeCode();
        });

        // Comando para formatear código (Ctrl+Shift+F)
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF, () => {
            this.formatCode();
        });

        // Comando para guardar (Ctrl+S)
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, (e) => {
            e.preventDefault();
            this.saveCode();
        });

        // Comando para insertar snippet de componente
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Space, () => {
            this.editor.trigger('keyboard', 'editor.action.triggerSuggest', {});
        });
    }

    createFallbackEditor() {
        console.warn('Usando editor de texto básico como fallback');
        
        // Crear textarea como editor básico
        this.container.innerHTML = `
            <textarea 
                id="fallback-editor" 
                style="width: 100%; height: 100%; border: none; padding: 16px; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; font-size: 14px; resize: none; outline: none;"
                placeholder="Pega aquí el código generado por Semantika..."
            >${this.getDefaultCode()}</textarea>
        `;

        const textarea = document.getElementById('fallback-editor');
        
        // Simular API de Monaco Editor
        this.editor = {
            getValue: () => textarea.value,
            setValue: (value) => { textarea.value = value; },
            focus: () => textarea.focus(),
            onDidChangeModelContent: (callback) => {
                textarea.addEventListener('input', callback);
            }
        };

        // Configurar eventos básicos
        textarea.addEventListener('input', () => {
            if (this.onCodeChange) {
                this.onCodeChange(textarea.value);
            }
            this.updateStats(textarea.value);
        });

        // Configurar atajos de teclado básicos
        textarea.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 'Enter':
                        e.preventDefault();
                        this.executeCode();
                        break;
                    case 's':
                        e.preventDefault();
                        this.saveCode();
                        break;
                }
            }
        });

        this.isReady = true;
    }

    getDefaultCode() {
        return `<!-- Pega aquí el código generado por Semantika -->
<!-- Ejemplo: -->
<bc-button appearance="primary" size="large">
  Confirmar
</bc-button>`;
    }

    updateStats(code) {
        const lines = code.split('\n').length;
        const chars = code.length;
        const words = code.trim() ? code.trim().split(/\s+/).length : 0;

        // Actualizar elementos de estadísticas si existen
        const lineCount = document.getElementById('line-count');
        const charCount = document.getElementById('char-count');
        const wordCount = document.getElementById('word-count');

        if (lineCount) lineCount.textContent = lines;
        if (charCount) charCount.textContent = chars;
        if (wordCount) wordCount.textContent = words;
    }

    executeCode() {
        const code = this.getCode();
        if (window.playground) {
            window.playground.runCode();
        } else {
            console.log('Ejecutando código:', code);
        }
    }

    formatCode() {
        if (this.editor && typeof this.editor.getAction === 'function') {
            // Usar formateo de Monaco Editor
            this.editor.getAction('editor.action.formatDocument').run();
        } else {
            // Formateo básico para editor de fallback
            const code = this.getCode();
            const formatted = this.basicHtmlFormat(code);
            this.setCode(formatted);
        }
    }

    basicHtmlFormat(html) {
        // Formateo HTML básico
        let formatted = html;
        formatted = formatted.replace(/></g, '>\n<');
        formatted = formatted.replace(/^\s+|\s+$/gm, '');
        
        const lines = formatted.split('\n');
        let indentLevel = 0;
        
        return lines.map(line => {
            const trimmed = line.trim();
            if (!trimmed) return '';
            
            if (trimmed.startsWith('</')) {
                indentLevel = Math.max(0, indentLevel - 1);
            }
            
            const indent = '  '.repeat(indentLevel);
            
            if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>')) {
                if (!trimmed.includes('</')) {
                    indentLevel++;
                }
            }
            
            return indent + trimmed;
        }).join('\n');
    }

    saveCode() {
        const code = this.getCode();
        
        if (window.playground) {
            window.playground.exportCode();
        } else {
            // Fallback para descargar código
            const blob = new Blob([code], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `semantika-code-${Date.now()}.html`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }

    // Métodos públicos de la API
    getCode() {
        return this.editor ? this.editor.getValue() : '';
    }

    setCode(code) {
        if (this.editor) {
            if (typeof this.editor.setValue === 'function') {
                this.editor.setValue(code);
            } else {
                // Para Monaco Editor
                this.editor.getModel().setValue(code);
            }
        }
    }

    clear() {
        this.setCode('');
    }

    focus() {
        if (this.editor && this.editor.focus) {
            this.editor.focus();
        }
    }

    setLanguage(language) {
        this.language = language;
        if (this.editor && typeof monaco !== 'undefined') {
            monaco.editor.setModelLanguage(this.editor.getModel(), language);
        }
    }

    setTheme(theme) {
        this.theme = theme;
        if (typeof monaco !== 'undefined') {
            monaco.editor.setTheme(theme);
        }
    }

    insertText(text, position = null) {
        if (this.editor) {
            if (position) {
                this.editor.executeEdits('', [{
                    range: new monaco.Range(position.line, position.column, position.line, position.column),
                    text: text
                }]);
            } else {
                const selection = this.editor.getSelection();
                this.editor.executeEdits('', [{
                    range: selection,
                    text: text
                }]);
            }
        }
    }

    getSelectedText() {
        if (this.editor) {
            const selection = this.editor.getSelection();
            return this.editor.getModel().getValueInRange(selection);
        }
        return '';
    }

    replaceSelectedText(text) {
        if (this.editor) {
            const selection = this.editor.getSelection();
            this.editor.executeEdits('', [{
                range: selection,
                text: text
            }]);
        }
    }

    // Método para cargar ejemplos predefinidos
    loadExample(exampleName) {
        const examples = {
            'button': '<bc-button appearance="primary" size="large">Confirmar</bc-button>',
            'input': '<bc-input type="email" label="Correo electrónico" required></bc-input>',
            'form': `<form class="bc-form">
  <bc-input type="email" label="Correo electrónico" required></bc-input>
  <bc-input type="password" label="Contraseña" required></bc-input>
  <bc-button appearance="primary" type="submit">Iniciar Sesión</bc-button>
</form>`,
            'modal': `<bc-modal title="Confirmar eliminación" visible="true">
  <bc-alert type="warning" title="Advertencia">
    Esta acción no se puede deshacer
  </bc-alert>
  <p>¿Estás seguro de que deseas eliminar este elemento?</p>
  <div class="modal-actions">
    <bc-button appearance="secondary">Cancelar</bc-button>
    <bc-button appearance="error">Eliminar</bc-button>
  </div>
</bc-modal>`
        };

        const example = examples[exampleName];
        if (example) {
            this.setCode(example);
            return true;
        }
        return false;
    }

    // Método para obtener información del cursor
    getCursorPosition() {
        if (this.editor && this.editor.getPosition) {
            return this.editor.getPosition();
        }
        return null;
    }

    // Método para ir a una línea específica
    goToLine(lineNumber) {
        if (this.editor && this.editor.setPosition) {
            this.editor.setPosition({ lineNumber, column: 1 });
            this.editor.revealLineInCenter(lineNumber);
        }
    }

    // Método para encontrar y reemplazar
    findAndReplace(searchText, replaceText, replaceAll = false) {
        if (this.editor && this.editor.getModel) {
            const model = this.editor.getModel();
            const matches = model.findMatches(searchText, false, false, false, null, false);
            
            if (matches.length > 0) {
                if (replaceAll) {
                    this.editor.executeEdits('', matches.map(match => ({
                        range: match.range,
                        text: replaceText
                    })));
                } else {
                    this.editor.executeEdits('', [{
                        range: matches[0].range,
                        text: replaceText
                    }]);
                }
                return matches.length;
            }
        }
        return 0;
    }

    // Destructor
    dispose() {
        if (this.editor && this.editor.dispose) {
            this.editor.dispose();
        }
    }
}

// Exportar para uso global
window.CodeEditor = CodeEditor; 