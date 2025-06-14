import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, NgModule } from '@angular/core';
import { BcSliderBehavior, BcSliderDoubleBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@angular/forms';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';

const SLIDER_N100 = 100;
const SLIDER_N001 = 0.01;
const SLIDER_N1 = 1;
const SLIDER_0 = 0;

/**
 * Componente Slider
 *
 * @export
 * @class BcSliderComponent
 * @implements {OnInit}
 */
class BcSliderComponent {
    constructor(controlDirective, ref, renderer) {
        this.controlDirective = controlDirective;
        this.ref = ref;
        this.renderer = renderer;
        /**
         * Valor del rango que se inicializa en el slider.
         *
         * @type {number}
         * @memberof BcSliderComponent
         */
        this.value = SLIDER_0;
        /**
         * Valor minimo que puede tomar en el slider.
         *
         * @type {number}
         * @memberof BcSliderComponent
         */
        this.min = SLIDER_0;
        this.step = SLIDER_N1;
        /**
         * Valor de referencia que puede tomar en el slider.
         *
         * @type {number}
         * @memberof BcSliderComponent
         */
        this.referenceValue = SLIDER_0;
        /**
         * Indica el estado del slider por defecto esta habilitado.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        this.disabled = false;
        /**
         * Indica el valor de salida seleccionado en el slider.
         *
         * @type {number}
         * @memberof BcSliderComponent
         */
        this.outputValue = new EventEmitter();
        this.ref = ref;
        this.bcSliderSimpleBehavior = new BcSliderBehavior();
    }
    ngAfterViewInit() {
        const inputElement = this.ref.nativeElement.querySelector('input');
        this.renderer.setProperty(inputElement, 'value', this.value);
        this.getOutputValue();
    }
    ngOnInit() {
        this.bcSliderSimpleBehavior.setElement(this.ref.nativeElement);
    }
    ngAfterViewChecked() {
        this.bcSliderSimpleBehavior.setUp();
    }
    /**
     * Metodo obtener valor del slider.
     *
     * @memberof BcSliderComponent
     */
    getOutputValue() {
        const input = this.ref.nativeElement.querySelector('input');
        this.outputValue.emit(input.value);
    }
    updateValue(valueOutput) {
        this.value = valueOutput;
    }
    writeValue(value) {
        this.updateValue(value);
        this.bcSliderSimpleBehavior.setValue(value);
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
BcSliderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BcSliderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSliderComponent, selector: "bc-slider", inputs: { value: "value", min: "min", max: "max", step: "step", referenceValue: "referenceValue", disabled: "disabled" }, outputs: { outputValue: "outputValue" }, ngImport: i0, template: "<div class=\"bc-slider-container\" #slider>\n  <div class=\"bc-slider-thumb\"></div>\n  <input\n    type=\"range\"\n    class=\"bc-slider\"\n    [value]=\"value\"\n    [min]=\"min\"\n    [max]=\"referenceValue\"\n    [step]=\"step\"\n    (input)=\"this.getOutputValue()\"\n    [disabled]=\"disabled\"\n  />\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-slider', template: "<div class=\"bc-slider-container\" #slider>\n  <div class=\"bc-slider-thumb\"></div>\n  <input\n    type=\"range\"\n    class=\"bc-slider\"\n    [value]=\"value\"\n    [min]=\"min\"\n    [max]=\"referenceValue\"\n    [step]=\"step\"\n    (input)=\"this.getOutputValue()\"\n    [disabled]=\"disabled\"\n  />\n</div>\n" }]
        }], ctorParameters: function () {
        return [{ type: i1.NgControl, decorators: [{
                        type: Self
                    }, {
                        type: Optional
                    }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }];
    }, propDecorators: { value: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], referenceValue: [{
                type: Input
            }], disabled: [{
                type: Input
            }], outputValue: [{
                type: Output
            }] } });

/**
 * Componente slider
 *
 * @export
 * @class BcSliderDoubleComponent
 * @implements {OnInit}
 * @implements {AfterContentChecked}
 * @implements {AfterViewChecked}
 */
class BcSliderDoubleComponent extends BcGeneralInputComponent {
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
        }], ctorParameters: function () {
        return [{ type: i1.NgControl, decorators: [{
                        type: Self
                    }, {
                        type: Optional
                    }] }, { type: i0.ElementRef }];
    }, propDecorators: { min: [{
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

/**
 * Importa el componete de Slider simple y doble con
 * los diseños de Bancolombia S.A.
 * @package bc-slider-simple
 * @Component bc-slider
 * @param  id Identificador unico||  (default)
 * @param  name Nombre del componente ||  (default)
 * @param  value Valor del componente que define el punto en el slider donde se inicializa || 0 (default)
 * @param  min valor por defecto en 0 || 0 (default)
 * @param  max valor por defecto en 100 || 100 (default)
 * @param  referenceValue Define el valor del tope a calcular para sobre el value|| 0 (default)
 * @param  outputValue Salida del componente donde se calcula el valor seleccionado en el slider || 0 (default)
 * @example
 * <bc-slider [value]=0 [referenceValue]=1230000></bc-slider>
 *
 *
 * @author: Bancolombia S.A
 */
/**
 * Importa el componete de Slider simple y doble con
 * los diseños de Bancolombia S.A.
 * @package bc-slider-double
 *   @Component bc-slider-double
 *   @param  id Identificador unico||  (default)
 *   @param  name Nombre del componente ||  (default)
 *   @param  valueLeft Valor del componente que define el punto en el slider donde se inicialize el thumb izquierdo || 0 (default)
 *   @param  valueRight Valor del componente que define el punto en el slider donde se  inicialize el thumb derecho || 0 (default)
 *   @param  min valor que define el porcentaje minimo por defecto en 0 || 0 (default)
 *   @param  max valor define el porcentaje minimo por defecto en 100 || 100 (default)
 *   @param  referenceValue Define el valor del tope a calcular para sobre el value|| 0 (default)
 *   @param  outputValue Salida del componente donde se calcula el valor seleccionado en el slider || 0 (default)
 *   @example
 *                    <bc-slider [value]=0 [referenceValue]=1230000></bc-slider>
 *
 *
 * @author: Bancolombia S.A
 */
class BcSliderModule {
}
BcSliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcSliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderModule, declarations: [BcSliderDoubleComponent, BcSliderComponent], imports: [CommonModule, BcInputModule], exports: [BcSliderComponent, BcSliderDoubleComponent] });
BcSliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderModule, imports: [[CommonModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcSliderDoubleComponent, BcSliderComponent],
                    imports: [CommonModule, BcInputModule],
                    exports: [BcSliderComponent, BcSliderDoubleComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcSliderComponent, BcSliderDoubleComponent, BcSliderModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-slider.mjs.map
