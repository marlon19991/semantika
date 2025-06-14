import { OnInit, EventEmitter, ElementRef, AfterViewChecked, AfterViewInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * Componente Slider
 *
 * @export
 * @class BcSliderComponent
 * @implements {OnInit}
 */
export declare class BcSliderComponent implements OnInit, AfterViewChecked, AfterViewInit {
    controlDirective: NgControl;
    private ref;
    private renderer;
    /**
     * Valor del rango que se inicializa en el slider.
     *
     * @type {number}
     * @memberof BcSliderComponent
     */
    value: number;
    /**
     * Valor minimo que puede tomar en el slider.
     *
     * @type {number}
     * @memberof BcSliderComponent
     */
    min: number;
    /**
     * Valor máximo que puede tomar en el slider.
     *
     * @type {number}
     * @memberof BcSliderComponent
     */
    max: number;
    step: number;
    /**
     * Valor de referencia que puede tomar en el slider.
     *
     * @type {number}
     * @memberof BcSliderComponent
     */
    referenceValue: number;
    /**
     * Indica el estado del slider por defecto esta habilitado.
     *
     * @type {number}
     * @memberof BcSliderDoubleComponent
     */
    disabled: boolean;
    /**
     * Indica el valor de salida seleccionado en el slider.
     *
     * @type {number}
     * @memberof BcSliderComponent
     */
    outputValue: EventEmitter<number>;
    bcSliderSimpleBehavior: any;
    constructor(controlDirective: NgControl, ref: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    /**
     * Metodo obtener valor del slider.
     *
     * @memberof BcSliderComponent
     */
    getOutputValue(): void;
    updateValue(valueOutput: any): void;
    writeValue(value: any): void;
    /**
     * Deshabilita por medio de esta función el slider media código.
     *
     * @memberof BcSliderComponent
     */
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSliderComponent, [{ optional: true; self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcSliderComponent, "bc-slider", never, { "value": "value"; "min": "min"; "max": "max"; "step": "step"; "referenceValue": "referenceValue"; "disabled": "disabled"; }, { "outputValue": "outputValue"; }, never, never>;
}
