import { ElementRef, Renderer2, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BcInputBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
export declare enum BcInputStates {
    default = "default",
    error = "error",
    valid = "valid",
    success = "success"
}
/**
 * Bajo esta directiva se configura el componente "Input".
 *
 * @export
 * @class BcInputDirective
 * @implements {AfterViewChecked}
 */
export declare class BcInputDirective implements AfterViewChecked, OnChanges, ControlValueAccessor {
    controlDirective: NgControl;
    private elmRef;
    private renderer;
    parent: HTMLDivElement;
    input: HTMLInputElement;
    iconRight: HTMLElement;
    iconLeft: HTMLElement;
    span: HTMLSpanElement;
    textArea: HTMLTextAreaElement;
    label: HTMLLabelElement;
    /**
     * Este parámetro nos indica en qué estado se encuentra el componente.
     * Los estados permitidos son: {'default', 'error', 'valid'}.
     *
     * @type {BcInputStates}
     * @memberof BcInputDirective
     */
    state: BcInputStates;
    ariaLabel: any;
    inputValue: boolean;
    inputValidation: boolean;
    class: string;
    inputBehavior: BcInputBehavior;
    value: any;
    onInput(): void;
    onBlur(): void;
    disabled: boolean;
    constructor(controlDirective: NgControl, elmRef: ElementRef, renderer: Renderer2);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChange: (m: any) => void;
    onTouch: () => void;
    get model(): any;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(val: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewChecked(): void;
    /**
     * Función que nos setea los estilos para el componente Input
     *
     * @memberof BcInputDirective
     */
    getElementChildren(): void;
    addClassWhenInputIsNormal(): void;
    addClassWhenInputValidationAndNotInputValue(): void;
    addClassWhenInputValue(): void;
    addClassWhenInputValueAndNotInputValidation(): void;
    addClassWhenInputValidationAndInputValue(): void;
    /**
     * Función que actualiza los estilos del componente Input a partir de su estado.
     * Los estados del componente que valida son {'valid', 'error', 'default'}.
     *
     * @memberof BcInputDirective
     */
    updateByState(): void;
    /**
     * Esta función nos permite añadir un estilo recibiendo como parámetros el elemento y la clase deseada.
     *
     * @private
     * @param {HTMLElement} element
     * @param {string} styleClass
     * @memberof BcInputDirective
     */
    private addClass;
    /**
     * Esta función nos permite remover un estilo recibiendo como parámetros el elemento y la clase no deseada.
     *
     * @private
     * @param {HTMLElement} element
     * @param {string} styleClass
     * @memberof BcInputDirective
     */
    private removeClass;
    /**
     * Esta función permite obtener el descriptor para el atributo "aria-label",
     * teniendo presente que exista el label, el input con un placeholder o un textarea con un placeholder.
     *
     * @return {*}  {string}
     * @memberof BcInputDirective
     */
    private getAriaDescriptor;
    /**
     * Esta función permite configurar el aria-descriptor teniendo en cuenta la función "GetAriaDescriptor",
     * validándolos tanto para el input como para el textarea.
     *
     * @private
     * @memberof BcInputDirective
     */
    private setAriaDescriptor;
    /**
     * Este método permite pasar un valor con el formato del inputValue y remplazar los separadores
     *
     * @private
     * @param val string
     * @returns {*} string
     * @memberof BcInputDirective
     */
    private replaceSeparator;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputDirective, [{ optional: true; self: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcInputDirective, "[bc-input]", never, { "state": "state"; "ariaLabel": "aria-label"; "inputValue": "inputValue"; "inputValidation": "inputValidation"; }, {}, never>;
}
