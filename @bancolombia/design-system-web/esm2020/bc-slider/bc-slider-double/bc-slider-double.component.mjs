import { Component, Input, Output, EventEmitter, Optional, Self, } from '@angular/core';
import { BcSliderDoubleBehavior } from '@bancolombia/design-system-behaviors';
import { SLIDER_N100, SLIDER_N001, SLIDER_0 } from '../bc-slider-constants';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/**
 * Componente slider
 *
 * @export
 * @class BcSliderDoubleComponent
 * @implements {OnInit}
 * @implements {AfterContentChecked}
 * @implements {AfterViewChecked}
 */
export class BcSliderDoubleComponent extends BcGeneralInputComponent {
    constructor(controlDirective, elRef) {
        super();
        this.controlDirective = controlDirective;
        this.elRef = elRef;
        /**
         * Valor mínimo que puede tomar en el slider.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        this.min = SLIDER_0;
        /**
         * Valor máximo que puede tomar en el slider.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        this.max = SLIDER_N100;
        /**
         * Valor del rango que se inicializa en el slider izquierdo.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        this.valueLeft = SLIDER_0;
        /**
         * Valor del rango que se inicializa en el slider derecho.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        this.valueRight = SLIDER_0;
        /**
         * Valor de referencia.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        this.referenceValue = SLIDER_0;
        /**
         * Indica el valor del slider seleccionado en el lado izquierda.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        this.outputValueLeft = new EventEmitter();
        /**
         * Indica el valor del slider seleccionado en el lado derecho.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        /**
        * Indica el estado del slider por defecto esta habilitado.
        *
        * @type {number}
        * @memberof BcSliderDoubleComponent
        */
        this.disabled = false;
        this.outputValueRight = new EventEmitter();
        this.bcSliderDoubleBehavior = new BcSliderDoubleBehavior();
        this.bcSliderDoubleBehavior.outputFunction = (data) => this.updateValue(data);
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngAfterContentChecked() {
        this.getOutputValueLeft();
        this.getOutputValueRight();
    }
    ngAfterViewChecked() {
        this.bcSliderDoubleBehavior.setUp();
    }
    ngOnInit() {
        this.bcSliderDoubleBehavior.setElement(this.elRef.nativeElement);
    }
    /**
     * Obtiene valor del slider en el lado izquierdo.
     *
     * @memberof BcSliderDoubleComponent
     */
    getOutputValueLeft() {
        const inputLeft = this.elRef.nativeElement.children[0].querySelector(`input[class="bc-slider-dual input-left"]`);
        if (inputLeft) {
            this.outputValueLeft.emit(this.referenceValue * (inputLeft.value * SLIDER_N001));
        }
    }
    /**
     * Obtiene valor del slider en el lado derecho.
     *
     * @memberof BcSliderDoubleComponent
     */
    getOutputValueRight() {
        const inputRight = this.elRef.nativeElement.children[0].querySelector(`input[class="bc-slider-dual input-right"]`);
        if (inputRight) {
            this.outputValueRight.emit(this.referenceValue * (inputRight.value * SLIDER_N001));
        }
    }
    /**
     * Actualiza el valor del slider doble.
     * @param valueOutput Valor de retorno del comportamiento
     */
    updateValue(valueOutput) {
        this.value = valueOutput;
        this.onChange(this.value);
        this.onTouch();
    }
    writeValue(value) {
        this.updateValue(value);
        this.bcSliderDoubleBehavior.setValue(value);
    }
    /**
     * Deshabilita por medio de esta función el slider media código.
     *
     * @memberof BcSliderComponent
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
BcSliderDoubleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderDoubleComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcSliderDoubleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSliderDoubleComponent, selector: "bc-slider-double", inputs: { min: "min", max: "max", valueLeft: "valueLeft", valueRight: "valueRight", referenceValue: "referenceValue", disabled: "disabled" }, outputs: { outputValueLeft: "outputValueLeft", outputValueRight: "outputValueRight" }, usesInheritance: true, ngImport: i0, template: "<div class=\"bc-slider-double-container\">\n  <div class=\"bc-slider-thumb-left\"></div>\n  <input\n    type=\"range\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"0\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [value]=\"valueLeft\"\n    (click)=\"this.getOutputValueLeft()\"\n    class=\"bc-slider-dual input-left\"\n    [disabled]=\"disabled\"\n  />\n  <div class=\"bc-slider-thumb-right\"></div>\n  <input\n    type=\"range\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"0\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [value]=\"valueRight\"\n    (click)=\"this.getOutputValueRight()\"\n    class=\"bc-slider-dual input-right\"\n    [disabled]=\"disabled\"\n  />\n  <div class=\"slider\">\n    <div class=\"track\"></div>\n    <div class=\"range\"></div>\n    <div class=\"thumb left\"></div>\n    <div class=\"thumb right\"></div>\n  </div>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderDoubleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-slider-double', template: "<div class=\"bc-slider-double-container\">\n  <div class=\"bc-slider-thumb-left\"></div>\n  <input\n    type=\"range\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"0\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [value]=\"valueLeft\"\n    (click)=\"this.getOutputValueLeft()\"\n    class=\"bc-slider-dual input-left\"\n    [disabled]=\"disabled\"\n  />\n  <div class=\"bc-slider-thumb-right\"></div>\n  <input\n    type=\"range\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"0\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [value]=\"valueRight\"\n    (click)=\"this.getOutputValueRight()\"\n    class=\"bc-slider-dual input-right\"\n    [disabled]=\"disabled\"\n  />\n  <div class=\"slider\">\n    <div class=\"track\"></div>\n    <div class=\"range\"></div>\n    <div class=\"thumb left\"></div>\n    <div class=\"thumb right\"></div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }]; }, propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], valueLeft: [{
                type: Input
            }], valueRight: [{
                type: Input
            }], referenceValue: [{
                type: Input
            }], outputValueLeft: [{
                type: Output
            }], disabled: [{
                type: Input
            }], outputValueRight: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2xpZGVyLWRvdWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2xpZGVyL2JjLXNsaWRlci1kb3VibGUvYmMtc2xpZGVyLWRvdWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2xpZGVyL2JjLXNsaWRlci1kb3VibGUvYmMtc2xpZGVyLWRvdWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFFTCxNQUFNLEVBR04sWUFBWSxFQUNaLFFBQVEsRUFDUixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQUdwRjs7Ozs7Ozs7R0FRRztBQUtILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSx1QkFBdUI7SUFrRWxFLFlBQXVDLGdCQUEyQixFQUFVLEtBQWlCO1FBQzNGLEtBQUssRUFBRSxDQUFDO1FBRDZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBVztRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7UUFoRTdGOzs7OztXQUtHO1FBQ00sUUFBRyxHQUFXLFFBQVEsQ0FBQztRQUNoQzs7Ozs7V0FLRztRQUNNLFFBQUcsR0FBVyxXQUFXLENBQUM7UUFDbkM7Ozs7O1dBS0c7UUFDTSxjQUFTLEdBQVcsUUFBUSxDQUFDO1FBRXRDOzs7OztXQUtHO1FBRU0sZUFBVSxHQUFXLFFBQVEsQ0FBQztRQUN2Qzs7Ozs7V0FLRztRQUVNLG1CQUFjLEdBQVcsUUFBUSxDQUFDO1FBQzNDOzs7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TUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgT3V0cHV0LFxuICBBZnRlclZpZXdDaGVja2VkLFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjU2xpZGVyRG91YmxlQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU0xJREVSX04xMDAsIFNMSURFUl9OMDAxLCBTTElERVJfMCB9IGZyb20gJy4uL2JjLXNsaWRlci1jb25zdGFudHMnO1xuaW1wb3J0IHsgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cblxuLyoqXG4gKiBDb21wb25lbnRlIHNsaWRlclxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1NsaWRlckRvdWJsZUNvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqIEBpbXBsZW1lbnRzIHtBZnRlckNvbnRlbnRDaGVja2VkfVxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0NoZWNrZWR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXNsaWRlci1kb3VibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtc2xpZGVyLWRvdWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQmNTbGlkZXJEb3VibGVDb21wb25lbnQgZXh0ZW5kcyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIC8qKlxuICAgKiBWYWxvciBtw61uaW1vIHF1ZSBwdWVkZSB0b21hciBlbiBlbCBzbGlkZXIuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckRvdWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbWluOiBudW1iZXIgPSBTTElERVJfMDtcbiAgLyoqXG4gICAqIFZhbG9yIG3DoXhpbW8gcXVlIHB1ZWRlIHRvbWFyIGVuIGVsIHNsaWRlci5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjU2xpZGVyRG91YmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBtYXg6IG51bWJlciA9IFNMSURFUl9OMTAwO1xuICAvKipcbiAgICogVmFsb3IgZGVsIHJhbmdvIHF1ZSBzZSBpbmljaWFsaXphIGVuIGVsIHNsaWRlciBpenF1aWVyZG8uXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckRvdWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdmFsdWVMZWZ0OiBudW1iZXIgPSBTTElERVJfMDtcblxuICAvKipcbiAgICogVmFsb3IgZGVsIHJhbmdvIHF1ZSBzZSBpbmljaWFsaXphIGVuIGVsIHNsaWRlciBkZXJlY2hvLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQmNTbGlkZXJEb3VibGVDb21wb25lbnRcbiAgICovXG5cbiAgQElucHV0KCkgdmFsdWVSaWdodDogbnVtYmVyID0gU0xJREVSXzA7XG4gIC8qKlxuICAgKiBWYWxvciBkZSByZWZlcmVuY2lhLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQmNTbGlkZXJEb3VibGVDb21wb25lbnRcbiAgICovXG5cbiAgQElucHV0KCkgcmVmZXJlbmNlVmFsdWU6IG51bWJlciA9IFNMSURFUl8wO1xuICAvKipcbiAgICogSW5kaWNhIGVsIHZhbG9yIGRlbCBzbGlkZXIgc2VsZWNjaW9uYWRvIGVuIGVsIGxhZG8gaXpxdWllcmRhLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQmNTbGlkZXJEb3VibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBvdXRwdXRWYWx1ZUxlZnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKipcbiAgICogSW5kaWNhIGVsIHZhbG9yIGRlbCBzbGlkZXIgc2VsZWNjaW9uYWRvIGVuIGVsIGxhZG8gZGVyZWNoby5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjU2xpZGVyRG91YmxlQ29tcG9uZW50XG4gICAqL1xuXG4gIC8qKlxuICAqIEluZGljYSBlbCBlc3RhZG8gZGVsIHNsaWRlciBwb3IgZGVmZWN0byBlc3RhIGhhYmlsaXRhZG8uXG4gICpcbiAgKiBAdHlwZSB7bnVtYmVyfVxuICAqIEBtZW1iZXJvZiBCY1NsaWRlckRvdWJsZUNvbXBvbmVudFxuICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb3V0cHV0VmFsdWVSaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGJjU2xpZGVyRG91YmxlQmVoYXZpb3I6IGFueTtcblxuICBjb25zdHJ1Y3RvcihAU2VsZigpIEBPcHRpb25hbCgpIHB1YmxpYyBjb250cm9sRGlyZWN0aXZlOiBOZ0NvbnRyb2wsIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmNTbGlkZXJEb3VibGVCZWhhdmlvciA9IG5ldyBCY1NsaWRlckRvdWJsZUJlaGF2aW9yKCk7XG4gICAgdGhpcy5iY1NsaWRlckRvdWJsZUJlaGF2aW9yLm91dHB1dEZ1bmN0aW9uID0gKGRhdGEpID0+IHRoaXMudXBkYXRlVmFsdWUoZGF0YSk7XG4gICAgaWYgKGNvbnRyb2xEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnRyb2xEaXJlY3RpdmUudmFsdWVBY2Nlc3NvciA9IHRoaXMgYXMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQ7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldE91dHB1dFZhbHVlTGVmdCgpO1xuICAgIHRoaXMuZ2V0T3V0cHV0VmFsdWVSaWdodCgpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmJjU2xpZGVyRG91YmxlQmVoYXZpb3Iuc2V0VXAoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmNTbGlkZXJEb3VibGVCZWhhdmlvci5zZXRFbGVtZW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogT2J0aWVuZSB2YWxvciBkZWwgc2xpZGVyIGVuIGVsIGxhZG8gaXpxdWllcmRvLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNTbGlkZXJEb3VibGVDb21wb25lbnRcbiAgICovXG4gIGdldE91dHB1dFZhbHVlTGVmdCgpIHtcbiAgICBjb25zdCBpbnB1dExlZnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ucXVlcnlTZWxlY3RvcihcbiAgICAgIGBpbnB1dFtjbGFzcz1cImJjLXNsaWRlci1kdWFsIGlucHV0LWxlZnRcIl1gXG4gICAgKTtcbiAgICBpZiAoaW5wdXRMZWZ0KSB7XG4gICAgICB0aGlzLm91dHB1dFZhbHVlTGVmdC5lbWl0KHRoaXMucmVmZXJlbmNlVmFsdWUgKiAoaW5wdXRMZWZ0LnZhbHVlICogU0xJREVSX04wMDEpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT2J0aWVuZSB2YWxvciBkZWwgc2xpZGVyIGVuIGVsIGxhZG8gZGVyZWNoby5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjU2xpZGVyRG91YmxlQ29tcG9uZW50XG4gICAqL1xuXG4gIGdldE91dHB1dFZhbHVlUmlnaHQoKSB7XG4gICAgY29uc3QgaW5wdXRSaWdodCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYGlucHV0W2NsYXNzPVwiYmMtc2xpZGVyLWR1YWwgaW5wdXQtcmlnaHRcIl1gXG4gICAgKTtcbiAgICBpZiAoaW5wdXRSaWdodCkge1xuICAgICAgdGhpcy5vdXRwdXRWYWx1ZVJpZ2h0LmVtaXQodGhpcy5yZWZlcmVuY2VWYWx1ZSAqIChpbnB1dFJpZ2h0LnZhbHVlICogU0xJREVSX04wMDEpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsaXphIGVsIHZhbG9yIGRlbCBzbGlkZXIgZG9ibGUuXG4gICAqIEBwYXJhbSB2YWx1ZU91dHB1dCBWYWxvciBkZSByZXRvcm5vIGRlbCBjb21wb3J0YW1pZW50b1xuICAgKi9cbiAgdXBkYXRlVmFsdWUodmFsdWVPdXRwdXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVPdXRwdXQ7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmJjU2xpZGVyRG91YmxlQmVoYXZpb3Iuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICAvKipcbiAgICogRGVzaGFiaWxpdGEgcG9yIG1lZGlvIGRlIGVzdGEgZnVuY2nDs24gZWwgc2xpZGVyIG1lZGlhIGPDs2RpZ28uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckNvbXBvbmVudFxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJiYy1zbGlkZXItZG91YmxlLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiYmMtc2xpZGVyLXRodW1iLWxlZnRcIj48L2Rpdj5cbiAgPGlucHV0XG4gICAgdHlwZT1cInJhbmdlXCJcbiAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgYXJpYS12YWx1ZW5vdz1cIjBcIlxuICAgIFttaW5dPVwibWluXCJcbiAgICBbbWF4XT1cIm1heFwiXG4gICAgW3ZhbHVlXT1cInZhbHVlTGVmdFwiXG4gICAgKGNsaWNrKT1cInRoaXMuZ2V0T3V0cHV0VmFsdWVMZWZ0KClcIlxuICAgIGNsYXNzPVwiYmMtc2xpZGVyLWR1YWwgaW5wdXQtbGVmdFwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgLz5cbiAgPGRpdiBjbGFzcz1cImJjLXNsaWRlci10aHVtYi1yaWdodFwiPjwvZGl2PlxuICA8aW5wdXRcbiAgICB0eXBlPVwicmFuZ2VcIlxuICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICBhcmlhLXZhbHVlbm93PVwiMFwiXG4gICAgW21pbl09XCJtaW5cIlxuICAgIFttYXhdPVwibWF4XCJcbiAgICBbdmFsdWVdPVwidmFsdWVSaWdodFwiXG4gICAgKGNsaWNrKT1cInRoaXMuZ2V0T3V0cHV0VmFsdWVSaWdodCgpXCJcbiAgICBjbGFzcz1cImJjLXNsaWRlci1kdWFsIGlucHV0LXJpZ2h0XCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAvPlxuICA8ZGl2IGNsYXNzPVwic2xpZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRyYWNrXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhbmdlXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRodW1iIGxlZnRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGh1bWIgcmlnaHRcIj48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==