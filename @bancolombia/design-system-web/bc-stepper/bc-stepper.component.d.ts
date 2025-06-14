import { AfterViewInit, EventEmitter, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ThemeCircles } from '@bancolombia/design-system-behaviors';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcStepperComponent extends BcGeneralInputComponent implements AfterViewInit, OnChanges {
    controlDirective: NgControl;
    private helper;
    private elementRef;
    private render;
    /**
     * Arreglo de pasos que contendrá nuestro Stepper.
     *
     * @type {string[]}
     * @memberof BcStepperComponent
     */
    steps: string[];
    /**
     * String que indicará la dirección horizontal o vertical del Stepper.
     *
     * @type {string}
     * @memberof BcStepperComponent
     */
    direction: 'horizontal' | 'vertical';
    /**
     * String que indicará la equivalencia de color que tiene el componente.
     *
     * @type {string}
     * @memberof BcStepperComponent
     */
    tokenColor: 'white-gray' | 'white-black' | 'gray-gray' | 'gray-black';
    /**
     * Indica el aria-labelledby para el comportamiento del componente.
     */
    ariaLabelledby: string;
    /**
    * Indica el aria-label para el comportamiento del componente.
    */
    ariaLabel: string;
    /**
     * Indica el id para el comportamiento del componente.
     */
    componentId: string;
    /**Indica la posición inicial del paso en el componente, por defecto es el paso 1. */
    indexPosition: number;
    /**
      * String que indicará el color de los cículos de los pasos inactivos.
      *
      * @type {string}
      * @memberof BcStepperComponent
      */
    themeCircles: ThemeCircles;
    bcStepperBehavior: any;
    constructor(controlDirective: NgControl, helper: BcHelperService, elementRef: ElementRef, render: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Habilita o deshabilita el componente.
     *
     * @type {(boolean)}
     * @memberof BcStepperComponent
     */
    enabled: boolean;
    /**
     * Salida del valor actual del componente.
     *
     * @type {(EventEmitter<number>)}
     * @memberof BcStepperComponent
     */
    valueOutput: EventEmitter<number>;
    ngAfterViewInit(): void;
    /**
     * Función que se encarga de avanzar el Stepper.
     *
     * @memberof BcStepperComponent
     */
    next(): void;
    /**
     * Función que se encarga de retroceder el Stepper.
     *
     * @memberof BcStepperComponent
     */
    back(): void;
    /**
     * Valores a salir.
     *
     * @param {(number)} param
     * @memberof BcStepperComponent
     */
    setvalueOutput(param: number): void;
    /**
     * Habilita o deshabilita el stepper
     * true | false por defecto es false.
     * @memberof BcStepperComponent
     */
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: number): void;
    setAria(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcStepperComponent, [{ optional: true; self: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcStepperComponent, "bc-stepper", never, { "steps": "steps"; "direction": "direction"; "tokenColor": "tokenColor"; "ariaLabelledby": "aria-labelledby"; "ariaLabel": "aria-label"; "componentId": "componentId"; "indexPosition": "indexPosition"; "themeCircles": "themeCircles"; "enabled": "enabled"; }, { "valueOutput": "valueOutput"; }, never, never>;
}
