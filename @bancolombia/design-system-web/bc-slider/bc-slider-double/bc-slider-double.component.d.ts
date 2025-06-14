import { OnInit, ElementRef, AfterViewChecked, AfterContentChecked, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente slider
 *
 * @export
 * @class BcSliderDoubleComponent
 * @implements {OnInit}
 * @implements {AfterContentChecked}
 * @implements {AfterViewChecked}
 */
export declare class BcSliderDoubleComponent extends BcGeneralInputComponent implements OnInit, AfterContentChecked, AfterViewChecked {
    controlDirective: NgControl;
    private elRef;
    /**
     * Valor mínimo que puede tomar en el slider.
     *
     * @type {number}
     * @memberof BcSliderDoubleComponent
     */
    min: number;
    /**
     * Valor máximo que puede tomar en el slider.
     *
     * @type {number}
     * @memberof BcSliderDoubleComponent
     */
    max: number;
    /**
     * Valor del rango que se inicializa en el slider izquierdo.
     *
     * @type {number}
     * @memberof BcSliderDoubleComponent
     */
    valueLeft: number;
    /**
     * Valor del rango que se inicializa en el slider derecho.
     *
     * @type {number}
     * @memberof BcSliderDoubleComponent
     */
    valueRight: number;
    /**
     * Valor de referencia.
     *
     * @type {number}
     * @memberof BcSliderDoubleComponent
     */
    referenceValue: number;
    /**
     * Indica el valor del slider seleccionado en el lado izquierda.
     *
     * @type {number}
     * @memberof BcSliderDoubleComponent
     */
    outputValueLeft: EventEmitter<number>;
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
    disabled: boolean;
    outputValueRight: EventEmitter<number>;
    bcSliderDoubleBehavior: any;
    constructor(controlDirective: NgControl, elRef: ElementRef);
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    /**
     * Obtiene valor del slider en el lado izquierdo.
     *
     * @memberof BcSliderDoubleComponent
     */
    getOutputValueLeft(): void;
    /**
     * Obtiene valor del slider en el lado derecho.
     *
     * @memberof BcSliderDoubleComponent
     */
    getOutputValueRight(): void;
    /**
     * Actualiza el valor del slider doble.
     * @param valueOutput Valor de retorno del comportamiento
     */
    updateValue(valueOutput: any): void;
    writeValue(value: any): void;
    /**
     * Deshabilita por medio de esta función el slider media código.
     *
     * @memberof BcSliderComponent
     */
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSliderDoubleComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcSliderDoubleComponent, "bc-slider-double", never, { "min": "min"; "max": "max"; "valueLeft": "valueLeft"; "valueRight": "valueRight"; "referenceValue": "referenceValue"; "disabled": "disabled"; }, { "outputValueLeft": "outputValueLeft"; "outputValueRight": "outputValueRight"; }, never, never>;
}
