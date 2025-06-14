import { Directive, Input, HostBinding, HostListener, Optional, Self, } from '@angular/core';
import { BcCommonConstants, BcInputBehavior, INPUT } from '@bancolombia/design-system-behaviors';
import { BC_INPUT_ACTIVE_CLASS, INPUT_ERROR_DIRECTIVE, INPUT_SUCCESS_DIRECTIVE, INPUT_VALIDATION_CLASS, INPUT_VALUE_CLASS, } from './bc-input.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export var BcInputStates;
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
export class BcInputDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWlucHV0L2JjLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFNTCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFFBQVEsRUFDUixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDOzs7QUFFOUIsTUFBTSxDQUFOLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUN2QixvQ0FBbUIsQ0FBQTtJQUNuQixnQ0FBZSxDQUFBO0lBQ2YsZ0NBQWUsQ0FBQTtJQUNmLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxhQUFhLEtBQWIsYUFBYSxRQUt4QjtBQUNEOzs7Ozs7R0FNRztBQUlILE1BQU0sT0FBTyxnQkFBZ0I7SUF5QzNCLFlBQzZCLGdCQUEyQixFQUM5QyxNQUFrQixFQUNsQixRQUFtQjtRQUZBLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBVztRQUM5QyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFuQzdCOzs7Ozs7V0FNRztRQUNNLFVBQUssR0FBa0IsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUk3QyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRXBCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFnQnBDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFtQjFCLGFBQVEsR0FBRyxDQUFD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dUJBQUMsT0FBTztnQkFPQyxNQUFNO3NCQUEzQixZQUFZO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJjQ29tbW9uQ29uc3RhbnRzLCBCY0lucHV0QmVoYXZpb3IsIElOUFVUIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7XG4gIEJDX0lOUFVUX0FDVElWRV9DTEFTUyxcbiAgSU5QVVRfRVJST1JfRElSRUNUSVZFLFxuICBJTlBVVF9TVUNDRVNTX0RJUkVDVElWRSxcbiAgSU5QVVRfVkFMSURBVElPTl9DTEFTUyxcbiAgSU5QVVRfVkFMVUVfQ0xBU1MsXG59IGZyb20gJy4vYmMtaW5wdXQuY29uc3RhbnRzJztcblxuZXhwb3J0IGVudW0gQmNJbnB1dFN0YXRlcyB7XG4gIGRlZmF1bHQgPSAnZGVmYXVsdCcsXG4gIGVycm9yID0gJ2Vycm9yJyxcbiAgdmFsaWQgPSAndmFsaWQnLFxuICBzdWNjZXNzID0gJ3N1Y2Nlc3MnLFxufVxuLyoqXG4gKiBCYWpvIGVzdGEgZGlyZWN0aXZhIHNlIGNvbmZpZ3VyYSBlbCBjb21wb25lbnRlIFwiSW5wdXRcIi5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNJbnB1dERpcmVjdGl2ZVxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0NoZWNrZWR9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYy1pbnB1dF0nLFxufSlcbmV4cG9ydCBjbGFzcyBCY0lucHV0RGlyZWN0aXZlICBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwYXJlbnQ6IEhUTUxEaXZFbGVtZW50O1xuICBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgaWNvblJpZ2h0OiBIVE1MRWxlbWVudDtcbiAgaWNvbkxlZnQ6IEhUTUxFbGVtZW50O1xuICBzcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XG4gIHRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICBsYWJlbDogSFRNTExhYmVsRWxlbWVudDtcblxuICAvKipcbiAgICogRXN0ZSBwYXLDoW1ldHJvIG5vcyBpbmRpY2EgZW4gcXXDqSBlc3RhZG8gc2UgZW5jdWVudHJhIGVsIGNvbXBvbmVudGUuXG4gICAqIExvcyBlc3RhZG9zIHBlcm1pdGlkb3Mgc29uOiB7J2RlZmF1bHQnLCAnZXJyb3InLCAndmFsaWQnfS5cbiAgICpcbiAgICogQHR5cGUge0JjSW5wdXRTdGF0ZXN9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBzdGF0ZTogQmNJbnB1dFN0YXRlcyA9IEJjSW5wdXRTdGF0ZXMuZGVmYXVsdDtcblxuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw7XG5cbiAgQElucHV0KCkgaW5wdXRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpbnB1dFZhbGlkYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3MgPSBJTlBVVDtcblxuICBpbnB1dEJlaGF2aW9yOiBCY0lucHV0QmVoYXZpb3I7XG4gIHZhbHVlOiBhbnk7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbklucHV0KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuZWxtUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZSA/IHRoaXMucmVwbGFjZVNlcGFyYXRvcih2YWwpIDogdmFsO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgb25CbHVyKCkge1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICB9XG5cbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIEBPcHRpb25hbCgpIHB1YmxpYyBjb250cm9sRGlyZWN0aXZlOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBlbG1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuaW5wdXRCZWhhdmlvciA9IG5ldyBCY0lucHV0QmVoYXZpb3IoKTtcbiAgICBpZiAoY29udHJvbERpcmVjdGl2ZSkge1xuICAgICAgY29udHJvbERpcmVjdGl2ZS52YWx1ZUFjY2Vzc29yO1xuICAgIH1cbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKG06IGFueSkgPT4ge307XG4gIG9uVG91Y2ggPSAoKSA9PiB7fTtcbiAgZ2V0IG1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb250cm9sRGlyZWN0aXZlICYmIHRoaXMuY29udHJvbERpcmVjdGl2ZS5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNvbnRyb2xEaXJlY3RpdmUuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09ICdJTlZBTElEJykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudCwgSU5QVVRfRVJST1JfRElSRUNUSVZFKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxtUmVmLm5hdGl2ZUVsZW1lbnQsIElOUFVUX0VSUk9SX0RJUkVDVElWRSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGlzYWJsZWQgPSAodGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5kaXNhYmxlZDtcbiAgICB0aGlzLnNldERpc2FibGVkU3RhdGUodGhpcy5kaXNhYmxlZCk7XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxtUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsbVJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUsICdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWxtUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbCkge1xuICAgIGlmICh0aGlzLmVsbVJlZikge1xuICAgICAgdGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMuaW5wdXRCZWhhdmlvci51cGRhdGVTdGF0ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuc3RhdGUgJiYgY2hhbmdlcy5zdGF0ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlQnlTdGF0ZSgpO1xuICAgICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RWxlbWVudENoaWxkcmVuKCk7XG4gICAgdGhpcy5pbnB1dEJlaGF2aW9yLnNldEVsZW1lbnQodGhpcy5lbG1SZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5pbnB1dEJlaGF2aW9yLnNldFVwKCk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY2nDs24gcXVlIG5vcyBzZXRlYSBsb3MgZXN0aWxvcyBwYXJhIGVsIGNvbXBvbmVudGUgSW5wdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREaXJlY3RpdmVcbiAgICovXG4gIGdldEVsZW1lbnRDaGlsZHJlbigpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsbVJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcihCY0NvbW1vbkNvbnN0YW50cy5JTlBVVF9UQUcpO1xuICAgIHRoaXMuc3BhbiA9IHRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3IoQmNDb21tb25Db25zdGFudHMuU1BBTl9UQUcpO1xuICAgIHRoaXMudGV4dEFyZWEgPSB0aGlzLnBhcmVudC5xdWVyeVNlbGVjdG9yKEJjQ29tbW9uQ29uc3RhbnRzLlRFWFRBUkVBX1RBRyk7XG4gICAgdGhpcy5pY29uTGVmdCA9IHRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3IoYCR7QmNDb21tb25Db25zdGFudHMuRU1fVEFHfTpmaXJzdC1vZi10eXBlYCk7XG4gICAgdGhpcy5pY29uUmlnaHQgPSB0aGlzLnBhcmVudC5xdWVyeVNlbGVjdG9yKGAke0JjQ29tbW9uQ29uc3RhbnRzLkVNX1RBR306bGFzdC1vZi10eXBlYCk7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3IoQmNDb21tb25Db25zdGFudHMuTEFCRUxfVEFHKTtcbiAgICB0aGlzLnNldEFyaWFEZXNjcmlwdG9yKCk7XG4gIH1cbiAgYWRkQ2xhc3NXaGVuSW5wdXRJc05vcm1hbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQmNJbnB1dFN0YXRlcy5lcnJvcikge1xuICAgICAgdGhpcy5jbGFzcyA9IGAke0lOUFVUfSAke0lOUFVUX0VSUk9SX0RJUkVDVElWRX1gO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQmNJbnB1dFN0YXRlcy5zdWNjZXNzKSB7XG4gICAgICB0aGlzLmNsYXNzID0gYCR7SU5QVVR9ICR7SU5QVVRfU1VDQ0VTU19ESVJFQ1RJVkV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzcyA9IElOUFVUO1xuICAgIH1cbiAgfVxuICBhZGRDbGFzc1doZW5JbnB1dFZhbGlkYXRpb25BbmROb3RJbnB1dFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBCY0lucHV0U3RhdGVzLmVycm9yKSB7XG4gICAgICB0aGlzLmNsYXNzID0gYCR7SU5QVVR9ICR7SU5QVVRfRVJST1JfRElSRUNUSVZFfSAke0lOUFVUX1ZBTElEQVRJT05fQ0xBU1N9YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IEJjSW5wdXRTdGF0ZXMuc3VjY2Vzcykge1xuICAgICAgdGhpcy5jbGFzcyA9IGAke0lOUFVUfSAke0lOUFVUX1NVQ0NFU1NfRElSRUNUSVZFfSAke0lOUFVUX1ZBTElEQVRJT05fQ0xBU1N9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzcyA9IGAke0lOUFVUfSAke0lOUFVUX1ZBTElEQVRJT05fQ0xBU1N9YDtcbiAgICB9XG4gIH1cbiAgYWRkQ2xhc3NXaGVuSW5wdXRWYWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRWYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLmFkZENsYXNzV2hlbklucHV0VmFsdWVBbmROb3RJbnB1dFZhbGlkYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRWYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLmFkZENsYXNzV2hlbklucHV0VmFsaWRhdGlvbkFuZElucHV0VmFsdWUoKTtcbiAgICB9XG4gIH1cbiAgYWRkQ2xhc3NXaGVuSW5wdXRWYWx1ZUFuZE5vdElucHV0VmFsaWRhdGlvbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQmNJbnB1dFN0YXRlcy5lcnJvcikge1xuICAgICAgdGhpcy5jbGFzcyA9IGAke0lOUFVUfSAke0lOUFVUX0VSUk9SX0RJUkVDVElWRX0gJHtJTlBVVF9WQUxVRV9DTEFTU31gO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQmNJbnB1dFN0YXRlcy5zdWNjZXNzKSB7XG4gICAgICB0aGlzLmNsYXNzID0gYCR7SU5QVVR9ICR7SU5QVVRfU1VDQ0VTU19ESVJFQ1RJVkV9ICR7SU5QVVRfVkFMVUVfQ0xBU1N9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzcyA9IGAke0lOUFVUfSAke0lOUFVUX1ZBTFVFX0NMQVNTfWA7XG4gICAgfVxuICB9XG4gIGFkZENsYXNzV2hlbklucHV0VmFsaWRhdGlvbkFuZElucHV0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IEJjSW5wdXRTdGF0ZXMuZXJyb3IpIHtcbiAgICAgIHRoaXMuY2xhc3MgPSBgJHtJTlBVVH0gJHtJTlBVVF9FUlJPUl9ESVJFQ1RJVkV9ICR7SU5QVVRfVkFMSURBVElPTl9DTEFTU30gJHtJTlBVVF9WQUxVRV9DTEFTU31gO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQmNJbnB1dFN0YXRlcy5zdWNjZXNzKSB7XG4gICAgICB0aGlzLmNsYXNzID0gYCR7SU5QVVR9ICR7SU5QVVRfU1VDQ0VTU19ESVJFQ1RJVkV9ICR7SU5QVVRfVkFMSURBVElPTl9DTEFTU30gJHtJTlBVVF9WQUxVRV9DTEFTU31gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsYXNzID0gYCR7SU5QVVR9ICR7SU5QVVRfVkFMSURBVElPTl9DTEFTU30gJHtJTlBVVF9WQUxVRV9DTEFTU31gO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRnVuY2nDs24gcXVlIGFjdHVhbGl6YSBsb3MgZXN0aWxvcyBkZWwgY29tcG9uZW50ZSBJbnB1dCBhIHBhcnRpciBkZSBzdSBlc3RhZG8uXG4gICAqIExvcyBlc3RhZG9zIGRlbCBjb21wb25lbnRlIHF1ZSB2YWxpZGEgc29uIHsndmFsaWQnLCAnZXJyb3InLCAnZGVmYXVsdCd9LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERpcmVjdGl2ZVxuICAgKi9cbiAgdXBkYXRlQnlTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRWYWxpZGF0aW9uICYmICF0aGlzLmlucHV0VmFsdWUpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3NXaGVuSW5wdXRJc05vcm1hbCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFZhbGlkYXRpb24gJiYgIXRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy5hZGRDbGFzc1doZW5JbnB1dFZhbGlkYXRpb25BbmROb3RJbnB1dFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3NXaGVuSW5wdXRWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFc3RhIGZ1bmNpw7NuIG5vcyBwZXJtaXRlIGHDsWFkaXIgdW4gZXN0aWxvIHJlY2liaWVuZG8gY29tbyBwYXLDoW1ldHJvcyBlbCBlbGVtZW50byB5IGxhIGNsYXNlIGRlc2VhZGEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0eWxlQ2xhc3NcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREaXJlY3RpdmVcbiAgICovXG4gIHByaXZhdGUgYWRkQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIHN0eWxlQ2xhc3M6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHN0eWxlQ2xhc3MpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRXN0YSBmdW5jacOzbiBub3MgcGVybWl0ZSByZW1vdmVyIHVuIGVzdGlsbyByZWNpYmllbmRvIGNvbW8gcGFyw6FtZXRyb3MgZWwgZWxlbWVudG8geSBsYSBjbGFzZSBubyBkZXNlYWRhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZUNsYXNzXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGlyZWN0aXZlXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBzdHlsZUNsYXNzKTtcblxuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG51bGwgJiYgdGhpcy52YWx1ZSAhPT0gJycgJiYgdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY2xhc3MgPSBgJHt0aGlzLmNsYXNzfSAke0JDX0lOUFVUX0FDVElWRV9DTEFTU31gO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFc3RhIGZ1bmNpw7NuIHBlcm1pdGUgb2J0ZW5lciBlbCBkZXNjcmlwdG9yIHBhcmEgZWwgYXRyaWJ1dG8gXCJhcmlhLWxhYmVsXCIsXG4gICAqIHRlbmllbmRvIHByZXNlbnRlIHF1ZSBleGlzdGEgZWwgbGFiZWwsIGVsIGlucHV0IGNvbiB1biBwbGFjZWhvbGRlciBvIHVuIHRleHRhcmVhIGNvbiB1biBwbGFjZWhvbGRlci5cbiAgICpcbiAgICogQHJldHVybiB7Kn0gIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGlyZWN0aXZlXG4gICAqL1xuICBwcml2YXRlIGdldEFyaWFEZXNjcmlwdG9yKCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3BvbnNlID0gJyc7XG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5sYWJlbC5pbm5lclRleHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIpIHtcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5pbnB1dC5wbGFjZWhvbGRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGV4dEFyZWEgJiYgdGhpcy50ZXh0QXJlYS5wbGFjZWhvbGRlcikge1xuICAgICAgcmVzcG9uc2UgPSB0aGlzLnRleHRBcmVhLnBsYWNlaG9sZGVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zcGFuKSB7XG4gICAgICByZXNwb25zZSA9IHRoaXMuc3Bhbi5pbm5lclRleHQ7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc3RhIGZ1bmNpw7NuIHBlcm1pdGUgY29uZmlndXJhciBlbCBhcmlhLWRlc2NyaXB0b3IgdGVuaWVuZG8gZW4gY3VlbnRhIGxhIGZ1bmNpw7NuIFwiR2V0QXJpYURlc2NyaXB0b3JcIixcbiAgICogdmFsaWTDoW5kb2xvcyB0YW50byBwYXJhIGVsIGlucHV0IGNvbW8gcGFyYSBlbCB0ZXh0YXJlYS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREaXJlY3RpdmVcbiAgICovXG4gIHByaXZhdGUgc2V0QXJpYURlc2NyaXB0b3IoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLmdldEFyaWFEZXNjcmlwdG9yKCk7XG4gICAgaWYgKHJlc3BvbnNlICYmICF0aGlzLmFyaWFMYWJlbCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoQmNDb21tb25Db25zdGFudHMuQVJJQV9MQUJFTCwgcmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRleHRBcmVhKSB7XG4gICAgICAgIHRoaXMudGV4dEFyZWEuc2V0QXR0cmlidXRlKEJjQ29tbW9uQ29uc3RhbnRzLkFSSUFfTEFCRUwsIHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEVzdGUgbcOpdG9kbyBwZXJtaXRlIHBhc2FyIHVuIHZhbG9yIGNvbiBlbCBmb3JtYXRvIGRlbCBpbnB1dFZhbHVlIHkgcmVtcGxhemFyIGxvcyBzZXBhcmFkb3Jlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gdmFsIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7Kn0gc3RyaW5nXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGlyZWN0aXZlXG4gICAqL1xuICBwcml2YXRlIHJlcGxhY2VTZXBhcmF0b3IodmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWwucmVwbGFjZSgvXFwuL2csICcnKTtcbiAgfVxufVxuIl19