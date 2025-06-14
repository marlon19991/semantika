import { EventEmitter, ElementRef, OnChanges, SimpleChanges, Renderer2, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare enum BcInputCurrencyStatus {
    default = "default",
    error = "error",
    success = "success"
}
/**
 * Componente input number
 *
 * @export
 * @class BcInputCurrencyComponent
 * @implements {OnInit}
 */
export declare class BcInputCurrencyComponent extends BcGeneralInputComponent implements OnChanges, AfterViewInit {
    controlDirective: NgControl;
    private ref;
    private render;
    /**
    * Esta entrada de tipo numérico nos indica el valor inicial para el input.
    *
    * @type {number}
    * @memberof BcInputCurrencyComponent
    */
    initValue: number;
    /**
    * Esta entrada de tipo string nos indica el Label que tendría el input, este puede venir desde un objeto de configuración o
    * directamente en el atributo.
    * @type {string}
    * @memberof BcInputCurrencyComponent
    */
    label: string;
    /**
    * Esta entrada de tipo string nos permite indicar el hint que tendría el input, este puede venir desde un objeto de configuración o
    * directamente en el atributo.
    * @type {string}
    * @memberof BcInputCurrencyComponent
    */
    hint: string;
    /**
     * Esta entrada de tipo booleana nos indica si el componente es o no requerido en el contexto del formulario.
     *
     * @type {boolean}
     * @memberof BcInputCurrencyComponent
     */
    required: boolean;
    /**
     * Esta entrada de tipo string nos indica el estado del componente, sus valores pueden ser : {'disabled', 'error', 'success', 'default'}
     *
     * @type {('disabled' | 'error' | 'success' | 'default')}
     * @memberof BcInputCurrencyComponent
     */
    status: 'disabled' | 'error' | 'success' | 'default';
    /**
     * Este parámetro nos indica una salida para el valor actual del selector numérico.
     * @type {EventEmitter<number>}
     * @memberof BcInputCurrencyComponent
     */
    updateValue: EventEmitter<number>;
    bcInputNumber: ElementRef;
    bcCurrencyInputBehavior: any;
    constructor(controlDirective: NgControl, ref: ElementRef, render: Renderer2);
    ngAfterViewInit(): void;
    validateErrorStatus(): void;
    setDisabledState(isDisabled: boolean): void;
    setSuccessState(isSuccess: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    dispatchValue(value: number): void;
    onInput(value: number): void;
    writeValue(value: number): void;
    detectStatusChanges(changes?: SimpleChanges): void;
    setStatus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputCurrencyComponent, [{ optional: true; self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInputCurrencyComponent, "bc-input-currency", never, { "initValue": "initValue"; "label": "label"; "hint": "hint"; "required": "required"; "status": "status"; }, { "updateValue": "updateValue"; }, never, never>;
}
