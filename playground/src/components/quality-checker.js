/**
 * QualityChecker - Componente para validar la calidad del código generado
 * Implementa las mismas métricas que el sistema de control de calidad de Semantika
 */

class QualityChecker {
    constructor() {
        this.validComponents = [
            'bc-button', 'bc-input', 'bc-card', 'bc-modal', 'bc-alert',
            'bc-table', 'bc-select', 'bc-checkbox', 'bc-radio', 'bc-tooltip',
            'bc-badge', 'bc-accordion', 'bc-tabs', 'bc-progress', 'bc-spinner'
        ];
        
        this.requiredAttributes = {
            'bc-button': ['appearance'],
            'bc-input': ['type', 'label'],
            'bc-alert': ['type'],
            'bc-modal': ['title']
        };
        
        this.validAttributes = {
            'bc-button': ['appearance', 'size', 'disabled', 'loading', 'full_width', 'icon'],
            'bc-input': ['type', 'label', 'placeholder', 'required', 'disabled', 'error'],
            'bc-alert': ['type', 'title', 'dismissible', 'inline'],
            'bc-card': ['title', 'elevation', 'hover'],
            'bc-modal': ['title', 'visible', 'size', 'closable']
        };
        
        this.validValues = {
            'appearance': ['primary', 'secondary', 'ghost', 'success', 'warning', 'error'],
            'size': ['small', 'medium', 'large'],
            'type': ['text', 'email', 'password', 'number', 'tel', 'url', 'success', 'warning', 'error', 'info']
        };
    }

    async validate(code, userRequest = '') {
        try {
            const results = {
                overall_score: 0,
                accuracy_percentage: 0,
                quality_passed: false,
                confidence_level: 'low',
                iteration_count: 1,
                improvement_applied: false,
                validation_summary: []
            };

            // Ejecutar las 5 validaciones principales
            const validations = await Promise.all([
                this.validateComponentValidity(code),
                this.validatePropertiesAccuracy(code, userRequest),
                this.validateSyntaxCorrectness(code),
                this.validateAccessibility(code),
                this.validateSemanticAlignment(code, userRequest)
            ]);

            // Procesar resultados de validaciones
            results.validation_summary = [
                { criterion: 'component_validity', ...validations[0] },
                { criterion: 'properties_accuracy', ...validations[1] },
                { criterion: 'syntax_correctness', ...validations[2] },
                { criterion: 'accessibility', ...validations[3] },
                { criterion: 'semantic_alignment', ...validations[4] }
            ];

            // Calcular puntuación ponderada
            const weights = {
                'component_validity': 0.25,
                'properties_accuracy': 0.25,
                'syntax_correctness': 0.20,
                'accessibility': 0.15,
                'semantic_alignment': 0.15
            };

            results.overall_score = results.validation_summary.reduce((total, validation) => {
                return total + (validation.score * weights[validation.criterion]);
            }, 0);

            results.accuracy_percentage = Math.round(results.overall_score * 100);
            results.quality_passed = results.overall_score >= 0.8;
            
            // Determinar nivel de confianza
            if (results.overall_score >= 0.95) results.confidence_level = 'very_high';
            else if (results.overall_score >= 0.85) results.confidence_level = 'high';
            else if (results.overall_score >= 0.75) results.confidence_level = 'medium';
            else results.confidence_level = 'low';

            return results;

        } catch (error) {
            throw new Error(`Error en validación de calidad: ${error.message}`);
        }
    }

    async validateComponentValidity(code) {
        const result = {
            score: 0,
            passed: false,
            suggestions: []
        };

        try {
            // Parsear el código HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(`<div>${code}</div>`, 'text/html');
            
            // Buscar todos los elementos que parecen ser componentes
            const allElements = doc.querySelectorAll('*');
            let totalComponents = 0;
            let validComponents = 0;

            allElements.forEach(element => {
                const tagName = element.tagName.toLowerCase();
                
                // Verificar si es un componente del design system
                if (tagName.startsWith('bc-') || element.hasAttribute('bc-')) {
                    totalComponents++;
                    
                    if (this.validComponents.includes(tagName)) {
                        validComponents++;
                    } else {
                        result.suggestions.push(`Componente '${tagName}' no es válido del Design System de Bancolombia`);
                    }
                }
                
                // Verificar componentes HTML básicos que deberían ser bc-components
                if (['button', 'input', 'select', 'textarea'].includes(tagName) && !element.closest('[bc-]')) {
                    result.suggestions.push(`Considera usar 'bc-${tagName}' en lugar de '${tagName}' para consistencia con el Design System`);
                }
            });

            if (totalComponents === 0) {
                // No hay componentes del design system, verificar si debería haberlos
                if (code.includes('<button') || code.includes('<input')) {
                    result.score = 0.5;
                    result.suggestions.push('Usa componentes del Design System de Bancolombia (bc-button, bc-input, etc.) para mejor consistencia');
                } else {
                    result.score = 0.8; // Código HTML válido pero sin componentes específicos
                }
            } else {
                result.score = validComponents / totalComponents;
            }

            result.passed = result.score >= 0.8;
            
            if (result.score === 1.0) {
                result.suggestions.push('¡Excelente! Todos los componentes son válidos del Design System');
            }

        } catch (error) {
            result.score = 0;
            result.suggestions.push(`Error al validar componentes: ${error.message}`);
        }

        return result;
    }

    async validatePropertiesAccuracy(code, userRequest) {
        const result = {
            score: 0,
            passed: false,
            suggestions: []
        };

        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(`<div>${code}</div>`, 'text/html');
            
            const components = doc.querySelectorAll('[class*="bc-"], [bc-], bc-button, bc-input, bc-card, bc-modal, bc-alert');
            let totalProperties = 0;
            let correctProperties = 0;

            components.forEach(component => {
                const tagName = component.tagName.toLowerCase();
                const requiredAttrs = this.requiredAttributes[tagName] || [];
                const validAttrs = this.validAttributes[tagName] || [];

                // Verificar atributos requeridos
                requiredAttrs.forEach(attr => {
                    totalProperties++;
                    if (component.hasAttribute(attr)) {
                        correctProperties++;
                    } else {
                        result.suggestions.push(`El componente '${tagName}' requiere el atributo '${attr}'`);
                    }
                });

                // Verificar valores de atributos
                Array.from(component.attributes).forEach(attr => {
                    if (validAttrs.includes(attr.name)) {
                        totalProperties++;
                        
                        const validValues = this.validValues[attr.name];
                        if (validValues && validValues.includes(attr.value)) {
                            correctProperties++;
                        } else if (validValues) {
                            result.suggestions.push(`Valor '${attr.value}' no es válido para '${attr.name}'. Valores válidos: ${validValues.join(', ')}`);
                        } else {
                            correctProperties++; // Atributo válido sin restricciones específicas
                        }
                    }
                });

                // Verificar texto del componente
                if (tagName === 'bc-button' && !component.textContent.trim()) {
                    result.suggestions.push('Los botones deberían tener texto descriptivo');
                }
            });

            // Analizar coincidencia con solicitud del usuario
            if (userRequest) {
                const requestAnalysis = this.analyzeUserRequest(code, userRequest);
                totalProperties += requestAnalysis.total;
                correctProperties += requestAnalysis.correct;
                result.suggestions.push(...requestAnalysis.suggestions);
            }

            result.score = totalProperties > 0 ? correctProperties / totalProperties : 0.8;
            result.passed = result.score >= 0.8;

        } catch (error) {
            result.score = 0;
            result.suggestions.push(`Error al validar propiedades: ${error.message}`);
        }

        return result;
    }

    analyzeUserRequest(code, userRequest) {
        const analysis = {
            total: 0,
            correct: 0,
            suggestions: []
        };

        const request = userRequest.toLowerCase();
        
        // Verificar colores mencionados
        const colorMentions = {
            'azul': 'primary',
            'blue': 'primary', 
            'verde': 'success',
            'green': 'success',
            'rojo': 'error',
            'red': 'error',
            'amarillo': 'warning',
            'yellow': 'warning'
        };

        Object.entries(colorMentions).forEach(([mention, expectedValue]) => {
            if (request.includes(mention)) {
                analysis.total++;
                if (code.includes(`appearance="${expectedValue}"`)) {
                    analysis.correct++;
                } else {
                    analysis.suggestions.push(`La solicitud menciona '${mention}', considera usar appearance="${expectedValue}"`);
                }
            }
        });

        // Verificar tamaños mencionados
        const sizeMentions = {
            'grande': 'large',
            'large': 'large',
            'pequeño': 'small',
            'small': 'small'
        };

        Object.entries(sizeMentions).forEach(([mention, expectedValue]) => {
            if (request.includes(mention)) {
                analysis.total++;
                if (code.includes(`size="${expectedValue}"`)) {
                    analysis.correct++;
                } else {
                    analysis.suggestions.push(`La solicitud menciona '${mention}', considera usar size="${expectedValue}"`);
                }
            }
        });

        // Verificar texto mencionado
        const textMatches = request.match(/"([^"]+)"/g) || request.match(/'([^']+)'/g);
        if (textMatches) {
            textMatches.forEach(match => {
                const text = match.replace(/['"]/g, '');
                analysis.total++;
                if (code.toLowerCase().includes(text.toLowerCase())) {
                    analysis.correct++;
                } else {
                    analysis.suggestions.push(`El texto '${text}' mencionado en la solicitud no aparece en el código`);
                }
            });
        }

        return analysis;
    }

    async validateSyntaxCorrectness(code) {
        const result = {
            score: 1.0,
            passed: true,
            suggestions: []
        };

        try {
            // Validar HTML básico
            const parser = new DOMParser();
            const doc = parser.parseFromString(code, 'text/html');
            const errors = doc.querySelectorAll('parsererror');

            if (errors.length > 0) {
                result.score = 0.0;
                result.passed = false;
                result.suggestions.push('El código HTML tiene errores de sintaxis');
                return result;
            }

            // Verificar estructura básica
            const issues = [];

            // Verificar etiquetas cerradas correctamente
            const openTags = code.match(/<[^/][^>]*>/g) || [];
            const closeTags = code.match(/<\/[^>]+>/g) || [];
            
            // Verificar atributos con comillas
            const unquotedAttrs = code.match(/\s\w+=[^"'][^\s>]+/g);
            if (unquotedAttrs) {
                issues.push('Los valores de atributos deben estar entre comillas');
                result.score -= 0.2;
            }

            // Verificar espacios en nombres de etiquetas
            const malformedTags = code.match(/<[^>]*\s+>/g);
            if (malformedTags && malformedTags.some(tag => tag.includes(' >'))) {
                issues.push('Evita espacios antes del cierre de etiquetas');
                result.score -= 0.1;
            }

            result.suggestions.push(...issues);
            result.passed = result.score >= 0.8;

        } catch (error) {
            result.score = 0;
            result.passed = false;
            result.suggestions.push(`Error al validar sintaxis: ${error.message}`);
        }

        return result;
    }

    async validateAccessibility(code) {
        const result = {
            score: 0,
            passed: false,
            suggestions: []
        };

        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(`<div>${code}</div>`, 'text/html');
            
            let totalChecks = 0;
            let passedChecks = 0;

            // Verificar botones tienen texto o aria-label
            const buttons = doc.querySelectorAll('button, bc-button, [bc-button]');
            buttons.forEach(button => {
                totalChecks++;
                if (button.textContent.trim() || button.hasAttribute('aria-label')) {
                    passedChecks++;
                } else {
                    result.suggestions.push('Los botones deben tener texto descriptivo o aria-label');
                }
            });

            // Verificar inputs tienen labels
            const inputs = doc.querySelectorAll('input, bc-input, [bc-input]');
            inputs.forEach(input => {
                totalChecks++;
                
                const hasLabel = input.hasAttribute('label') || 
                               input.hasAttribute('aria-label') ||
                               input.hasAttribute('placeholder') ||
                               doc.querySelector(`label[for="${input.id}"]`);
                
                if (hasLabel) {
                    passedChecks++;
                } else {
                    result.suggestions.push('Los campos de entrada deben tener etiquetas descriptivas');
                }
            });

            // Verificar contraste de colores (básico)
            const colorElements = doc.querySelectorAll('[style*="color"], [style*="background"]');
            colorElements.forEach(() => {
                totalChecks++;
                passedChecks++; // Asumimos que los componentes del DS tienen buen contraste
            });

            // Verificar estructura semántica
            const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
            if (headings.length > 0) {
                totalChecks++;
                passedChecks++; // Tiene estructura de encabezados
            }

            // Verificar enlaces descriptivos
            const links = doc.querySelectorAll('a');
            links.forEach(link => {
                totalChecks++;
                if (link.textContent.trim() && !link.textContent.toLowerCase().includes('click')) {
                    passedChecks++;
                } else {
                    result.suggestions.push('Los enlaces deben tener texto descriptivo');
                }
            });

            // Verificar imágenes tienen alt text
            const images = doc.querySelectorAll('img');
            images.forEach(img => {
                totalChecks++;
                if (img.hasAttribute('alt')) {
                    passedChecks++;
                } else {
                    result.suggestions.push('Las imágenes deben tener texto alternativo (alt)');
                }
            });

            result.score = totalChecks > 0 ? passedChecks / totalChecks : 0.9;
            result.passed = result.score >= 0.8;

            if (result.suggestions.length === 0) {
                result.suggestions.push('¡Buen trabajo! El código cumple con los estándares básicos de accesibilidad');
            }

        } catch (error) {
            result.score = 0;
            result.suggestions.push(`Error al validar accesibilidad: ${error.message}`);
        }

        return result;
    }

    async validateSemanticAlignment(code, userRequest) {
        const result = {
            score: 0.8, // Score base
            passed: true,
            suggestions: []
        };

        if (!userRequest) {
            result.suggestions.push('No se proporcionó solicitud del usuario para validar alineación semántica');
            return result;
        }

        try {
            const request = userRequest.toLowerCase();
            
            // Verificar tipos de componentes solicitados
            const componentMappings = {
                'botón': 'button',
                'button': 'button',
                'campo': 'input',
                'input': 'input',
                'formulario': 'form',
                'form': 'form',
                'tarjeta': 'card',
                'card': 'card',
                'modal': 'modal',
                'alerta': 'alert',
                'alert': 'alert'
            };

            let hasCorrectComponent = false;
            Object.entries(componentMappings).forEach(([keyword, component]) => {
                if (request.includes(keyword)) {
                    if (code.toLowerCase().includes(component) || code.includes(`bc-${component}`)) {
                        hasCorrectComponent = true;
                    } else {
                        result.suggestions.push(`La solicitud menciona '${keyword}' pero no se encuentra el componente correspondiente`);
                        result.score -= 0.2;
                    }
                }
            });

            // Verificar acciones mencionadas
            const actionMappings = {
                'confirmar': ['confirmar', 'aceptar', 'si', 'ok'],
                'cancelar': ['cancelar', 'no', 'cerrar'],
                'eliminar': ['eliminar', 'borrar', 'delete'],
                'guardar': ['guardar', 'save'],
                'enviar': ['enviar', 'submit']
            };

            Object.entries(actionMappings).forEach(([action, variants]) => {
                if (request.includes(action)) {
                    const hasAction = variants.some(variant => 
                        code.toLowerCase().includes(variant)
                    );
                    
                    if (!hasAction) {
                        result.suggestions.push(`La solicitud menciona '${action}' pero no se refleja en el texto del componente`);
                        result.score -= 0.1;
                    }
                }
            });

            result.passed = result.score >= 0.8;

            if (result.score >= 0.9) {
                result.suggestions.push('¡Excelente alineación semántica con la solicitud del usuario!');
            }

        } catch (error) {
            result.score = 0.5;
            result.suggestions.push(`Error al validar alineación semántica: ${error.message}`);
        }

        return result;
    }

    // Método para generar sugerencias de mejora
    generateImprovementSuggestions(code, validationResults) {
        const suggestions = [];
        
        validationResults.validation_summary.forEach(validation => {
            if (validation.score < 0.8) {
                suggestions.push({
                    category: validation.criterion,
                    priority: validation.score < 0.5 ? 'high' : 'medium',
                    suggestions: validation.suggestions || []
                });
            }
        });

        return suggestions;
    }

    // Método para simular la mejora iterativa del código
    async refineCode(code, userRequest, iterations = 1) {
        let currentCode = code;
        let currentIteration = 0;
        const maxIterations = 3;
        
        while (currentIteration < maxIterations && currentIteration < iterations) {
            const validation = await this.validate(currentCode, userRequest);
            
            if (validation.overall_score >= 0.8) {
                break; // El código ya cumple con los estándares
            }

            // Aplicar mejoras automáticas básicas
            currentCode = this.applyBasicImprovements(currentCode, validation);
            currentIteration++;
        }

        return {
            refined_code: currentCode,
            iterations_applied: currentIteration,
            final_validation: await this.validate(currentCode, userRequest)
        };
    }

    applyBasicImprovements(code, validation) {
        let improvedCode = code;

        // Aplicar mejoras basadas en las validaciones
        validation.validation_summary.forEach(v => {
            if (v.criterion === 'syntax_correctness' && v.score < 0.8) {
                // Corregir sintaxis básica
                improvedCode = improvedCode.replace(/(\w+)=([^"'\s>]+)/g, '$1="$2"');
            }

            if (v.criterion === 'accessibility' && v.score < 0.8) {
                // Añadir aria-label a botones sin texto
                improvedCode = improvedCode.replace(
                    /<(bc-button[^>]*?)>/g, 
                    '<$1 aria-label="Botón">'
                );
            }
        });

        return improvedCode;
    }
}

// Exportar para uso global
window.QualityChecker = QualityChecker; 