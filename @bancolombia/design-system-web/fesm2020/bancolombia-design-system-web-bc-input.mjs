import * as i0 from '@angular/core';
import { Directive, Self, Optional, Input, HostBinding, HostListener, EventEmitter, Component, Output, NgModule } from '@angular/core';
import { BcCommonConstants, INPUT, BcInputBehavior, BcInputDateBehavior, INPUT_ERROR } from '@bancolombia/design-system-behaviors';
import * as i1 from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as i2 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';

const BC_INPUT_ACTIVE_CLASS = `${BcCommonConstants.PREFIX_LIB}-active`;
const INPUT_VALIDATION_CLASS = `${BcCommonConstants.PREFIX_LIB}-${BcCommonConstants.INPUT_TAG}-validation`;
const INPUT_VALUE_CLASS = `${BcCommonConstants.PREFIX_LIB}-${BcCommonConstants.INPUT_TAG}-value`;
const INPUT_ERROR_DIRECTIVE = `${BcCommonConstants.PREFIX_LIB}-input-error`;
const INPUT_SUCCESS_DIRECTIVE = `${BcCommonConstants.PREFIX_LIB}-input-success`;
const INPUT_PASSWORD_CLASS = `${BcCommonConstants.PREFIX_LIB}-${BcCommonConstants.INPUT_TAG}-password`;

var BcInputStates;
(function (BcInputStates) {
    BcInputStates["default"] = "default";
    BcInputStates["error"] = "error";
    BcInputStates["valid"] = "valid";
    BcInputStates["success"] = "success";
})(BcInputStates || (BcInputStates = {}));
/**
 * Bajo esta directiva se configura el componente "Input".
 *
 * @export
 * @class BcInputDirective
 * @implements {AfterViewChecked}
 */
class BcInputDirective {
    constructor(controlDirective, elmRef, renderer) {
        this.controlDirective = controlDirective;
        this.elmRef = elmRef;
        this.renderer = renderer;
        /**
         * Este parámetro nos indica en qué estado se encuentra el componente.
         * Los estados permitidos son: {'default', 'error', 'valid'}.
         *
         * @type {BcInputStates}
         * @memberof BcInputDirective
         */
        this.state = BcInputStates.default;
        this.inputValue = false;
        this.inputValidation = false;
        this.class = INPUT;
        this.disabled = false;
        this.onChange = (m) => { };
        this.onTouch = () => { };
        this.inputBehavior = new BcInputBehavior();
        if (controlDirective) {
            controlDirective.valueAccessor;
        }
    }
    onInput() {
        const val = this.elmRef.nativeElement.value;
        this.value = this.inputValue ? this.replaceSeparator(val) : val;
        this.onChange(this.value);
        this.onTouch();
    }
    onBlur() {
        this.onTouch();
    }
    registerOnChange(fn) {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn) {
        throw new Error('Method not implemented.');
    }
    get model() {
        return this.value;
    }
    ngAfterViewInit() {
        if (this.controlDirective && this.controlDirective.statusChanges) {
            this.controlDirective.statusChanges.subscribe((element) => {
                if (element === 'INVALID') {
                    this.renderer.addClass(this.elmRef.nativeElement, INPUT_ERROR_DIRECTIVE);
                }
                else {
                    this.renderer.removeClass(this.elmRef.nativeElement, INPUT_ERROR_DIRECTIVE);
                }
            });
        }
        this.disabled = this.elmRef.nativeElement.disabled;
        this.setDisabledState(this.disabled);
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.renderer.setAttribute(this.elmRef.nativeElement, 'disabled', 'true');
            this.renderer.setAttribute(this.elmRef.nativeElement.parentNode, 'disabled', 'true');
        }
        else {
            this.renderer.removeAttribute(this.elmRef.nativeElement, 'disabled');
            this.renderer.removeAttribute(this.elmRef.nativeElement.parentNode, 'disabled');
        }
    }
    writeValue(val) {
        if (this.elmRef) {
            this.elmRef.nativeElement.value = val;
            this.inputBehavior.updateState(null);
        }
    }
    ngOnChanges(changes) {
        if (changes.state && changes.state.currentValue) {
            this.updateByState();
        }
    }
    ngAfterViewChecked() {
        this.getElementChildren();
        this.inputBehavior.setElement(this.elmRef.nativeElement);
        this.inputBehavior.setUp();
    }
    /**
     * Función que nos setea los estilos para el componente Input
     *
     * @memberof BcInputDirective
     */
    getElementChildren() {
        this.parent = this.renderer.parentNode(this.elmRef.nativeElement);
        this.input = this.parent.querySelector(BcCommonConstants.INPUT_TAG);
        this.span = this.parent.querySelector(BcCommonConstants.SPAN_TAG);
        this.textArea = this.parent.querySelector(BcCommonConstants.TEXTAREA_TAG);
        this.iconLeft = this.parent.querySelector(`${BcCommonConstants.EM_TAG}:first-of-type`);
        this.iconRight = this.parent.querySelector(`${BcCommonConstants.EM_TAG}:last-of-type`);
        this.label = this.parent.querySelector(BcCommonConstants.LABEL_TAG);
        this.setAriaDescriptor();
    }
    addClassWhenInputIsNormal() {
        if (this.state === BcInputStates.error) {
            this.class = `${INPUT} ${INPUT_ERROR_DIRECTIVE}`;
        }
        else if (this.state === BcInputStates.success) {
            this.class = `${INPUT} ${INPUT_SUCCESS_DIRECTIVE}`;
        }
        else {
            this.class = INPUT;
        }
    }
    addClassWhenInputValidationAndNotInputValue() {
        if (this.state === BcInputStates.error) {
            this.class = `${INPUT} ${INPUT_ERROR_DIRECTIVE} ${INPUT_VALIDATION_CLASS}`;
        }
        else if (this.state === BcInputStates.success) {
            this.class = `${INPUT} ${INPUT_SUCCESS_DIRECTIVE} ${INPUT_VALIDATION_CLASS}`;
        }
        else {
            this.class = `${INPUT} ${INPUT_VALIDATION_CLASS}`;
        }
    }
    addClassWhenInputValue() {
        if (!this.inputValidation) {
            this.addClassWhenInputValueAndNotInputValidation();
        }
        else if (this.inputValidation) {
            this.addClassWhenInputValidationAndInputValue();
        }
    }
    addClassWhenInputValueAndNotInputValidation() {
        if (this.state === BcInputStates.error) {
            this.class = `${INPUT} ${INPUT_ERROR_DIRECTIVE} ${INPUT_VALUE_CLASS}`;
        }
        else if (this.state === BcInputStates.success) {
            this.class = `${INPUT} ${INPUT_SUCCESS_DIRECTIVE} ${INPUT_VALUE_CLASS}`;
        }
        else {
            this.class = `${INPUT} ${INPUT_VALUE_CLASS}`;
        }
    }
    addClassWhenInputValidationAndInputValue() {
        if (this.state === BcInputStates.error) {
            this.class = `${INPUT} ${INPUT_ERROR_DIRECTIVE} ${INPUT_VALIDATION_CLASS} ${INPUT_VALUE_CLASS}`;
        }
        else if (this.state === BcInputStates.success) {
            this.class = `${INPUT} ${INPUT_SUCCESS_DIRECTIVE} ${INPUT_VALIDATION_CLASS} ${INPUT_VALUE_CLASS}`;
        }
        else {
            this.class = `${INPUT} ${INPUT_VALIDATION_CLASS} ${INPUT_VALUE_CLASS}`;
        }
    }
    /**
     * Función que actualiza los estilos del componente Input a partir de su estado.
     * Los estados del componente que valida son {'valid', 'error', 'default'}.
     *
     * @memberof BcInputDirective
     */
    updateByState() {
        if (!this.inputValidation && !this.inputValue) {
            this.addClassWhenInputIsNormal();
        }
        else if (this.inputValidation && !this.inputValue) {
            this.addClassWhenInputValidationAndNotInputValue();
        }
        else {
            this.addClassWhenInputValue();
        }
    }
    /**
     * Esta función nos permite añadir un estilo recibiendo como parámetros el elemento y la clase deseada.
     *
     * @private
     * @param {HTMLElement} element
     * @param {string} styleClass
     * @memberof BcInputDirective
     */
    addClass(element, styleClass) {
        if (element) {
            this.renderer.addClass(element, styleClass);
        }
    }
    /**
     * Esta función nos permite remover un estilo recibiendo como parámetros el elemento y la clase no deseada.
     *
     * @private
     * @param {HTMLElement} element
     * @param {string} styleClass
     * @memberof BcInputDirective
     */
    removeClass(element, styleClass) {
        if (element) {
            this.renderer.removeClass(element, styleClass);
            if (this.value !== null && this.value !== '' && this.value !== undefined) {
                this.class = `${this.class} ${BC_INPUT_ACTIVE_CLASS}`;
            }
        }
    }
    /**
     * Esta función permite obtener el descriptor para el atributo "aria-label",
     * teniendo presente que exista el label, el input con un placeholder o un textarea con un placeholder.
     *
     * @return {*}  {string}
     * @memberof BcInputDirective
     */
    getAriaDescriptor() {
        let response = '';
        if (this.label) {
            response = this.label.innerText;
        }
        else if (this.input && this.input.placeholder) {
            response = this.input.placeholder;
        }
        else if (this.textArea && this.textArea.placeholder) {
            response = this.textArea.placeholder;
        }
        else if (this.span) {
            response = this.span.innerText;
        }
        return response;
    }
    /**
     * Esta función permite configurar el aria-descriptor teniendo en cuenta la función "GetAriaDescriptor",
     * validándolos tanto para el input como para el textarea.
     *
     * @private
     * @memberof BcInputDirective
     */
    setAriaDescriptor() {
        const response = this.getAriaDescriptor();
        if (response && !this.ariaLabel) {
            if (this.input) {
                this.input.setAttribute(BcCommonConstants.ARIA_LABEL, response);
            }
            else if (this.textArea) {
                this.textArea.setAttribute(BcCommonConstants.ARIA_LABEL, response);
            }
        }
    }
    /**
     * Este método permite pasar un valor con el formato del inputValue y remplazar los separadores
     *
     * @private
     * @param val string
     * @returns {*} string
     * @memberof BcInputDirective
     */
    replaceSeparator(val) {
        return val.replace(/\./g, '');
    }
}
BcInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDirective, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
BcInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcInputDirective, selector: "[bc-input]", inputs: { state: "state", ariaLabel: ["aria-label", "ariaLabel"], inputValue: "inputValue", inputValidation: "inputValidation" }, host: { listeners: { "input": "onInput()", "blur": "onBlur()" }, properties: { "class": "this.class" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-input]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { state: [{
                type: Input
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], inputValue: [{
                type: Input
            }], inputValidation: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }], onInput: [{
                type: HostListener,
                args: ['input']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });

/**
 * Contenedor del input
 *
 * @export
 * @class BcFormFieldComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcFormFieldComponent extends BcGeneralInputComponent {
    constructor(controlDirective, elmRef, bcHelperService, renderer) {
        super();
        this.controlDirective = controlDirective;
        this.elmRef = elmRef;
        this.bcHelperService = bcHelperService;
        this.renderer = renderer;
        /**
         * Tipo de input (ingresar los tipos)
         *
         * @memberof BcFormFieldComponent
         */
        this.inputType = '';
        /**
         * Tipo de calendario.
         *
         * @type {string}
         * @memberof BcFormFieldComponent
         */
        this.calendarType = '';
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcFormFieldComponent
         */
        this.id = this.bcHelperService.getId(this);
        this.updateValue = new EventEmitter();
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() {
        if (this.inputType === 'date') {
            this.bcInputDateBehavior = new BcInputDateBehavior();
            this.bcInputDateBehavior.output = (value) => {
                this.dispatchValue(value);
            };
        }
    }
    ngAfterViewInit() {
        this.validateErrorState();
        setTimeout(() => {
            this.writeValue(this.value);
        }, 0);
    }
    validateErrorState() {
        const input = this.elmRef.nativeElement.querySelector('input');
        if (this.controlDirective && this.controlDirective.statusChanges) {
            this.controlDirective.statusChanges.subscribe(element => {
                if (input) {
                    if (element === 'INVALID') {
                        this.renderer.addClass(input, INPUT_ERROR);
                    }
                    else {
                        this.renderer.removeClass(input, INPUT_ERROR);
                    }
                }
            });
        }
    }
    dispatchValue(value) {
        this.onInput(value);
        this.updateValue.emit(this.value);
    }
    onInput(value) {
        this.value = value;
        this.onTouch();
        this.onChange(this.value);
    }
    writeValue(value) {
        this.value = value;
        if (this.inputType === 'date' && this.bcInputDateBehavior) {
            this.bcInputDateBehavior?.setValue(value);
        }
    }
    setDisabledState(isDisabled) {
        this.bcInputDateBehavior.setDisabledState(isDisabled);
    }
}
BcFormFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFormFieldComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i2.BcHelperService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BcFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcFormFieldComponent, selector: "bc-form-field", inputs: { inputType: "inputType", calendarType: "calendarType", id: "id" }, outputs: { updateValue: "updateValue" }, usesInheritance: true, ngImport: i0, template: `<div class="bc-form-field" [id]="id">
    <ng-content></ng-content>
  </div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFormFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-form-field',
                    template: `<div class="bc-form-field" [id]="id">
    <ng-content></ng-content>
  </div>`,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i2.BcHelperService }, { type: i0.Renderer2 }]; }, propDecorators: { inputType: [{
                type: Input
            }], calendarType: [{
                type: Input
            }], id: [{
                type: Input
            }], updateValue: [{
                type: Output
            }] } });

/**
 * Importa la directiva de campos input con
 * los diseños de Bancolombia S.A.
 * @package bc-input
 *   @Directiva bc-input
 *   @param  theme Tema para input: default || dark
 *   @param typeInput Tipo de input: input-default || input-icon-left || input-icon-right || input-area
 *   @example
 *
 *    <input bc-input typeInput="input-default" type="text" placeholder="Text" value="">
 *    <input bc-input typeInput="input-icon-left" theme="dark" type="text" placeholder="Text" value="">
 *  @component bc-form-field
 *  @param {string} inputType: seleccione "date" para selector con calendario
 *  @param {string} calendarType: seleccione "split" para un calendario con el selector dividido
 *
 *  @example
 *  <bc-form-field inputType="date" calendarType="split">
 *    <input bc-input typeInput="input-default-left" type="date" value="" required/>
 *    <label>Split Date Picker</label>
 *    <em>calendar-alt</em>
 *    <span>Selecciona una fecha del calendario</span>
 *    </bc-form-field>
 *
 *
 *   @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 *
 * @author: Bancolombia S.A
 */
class BcInputModule {
}
BcInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputModule, declarations: [BcInputDirective, BcFormFieldComponent], imports: [CommonModule], exports: [BcInputDirective, BcFormFieldComponent] });
BcInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputDirective, BcFormFieldComponent],
                    imports: [CommonModule],
                    exports: [BcInputDirective, BcFormFieldComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcFormFieldComponent, BcInputDirective, BcInputModule, BcInputStates };
//# sourceMappingURL=bancolombia-design-system-web-bc-input.mjs.map
