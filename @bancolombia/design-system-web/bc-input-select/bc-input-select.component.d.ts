import { EventEmitter, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef, Renderer2, ElementRef } from '@angular/core';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * componente Select
 *
 * @export
 * @class BcInputSelectComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {OnChanges}
 */
export declare class BcInputSelectComponent extends BcGeneralInputComponent implements AfterViewInit, OnChanges {
    controlDirective: NgControl;
    private bcHelperService;
    private renderer;
    private changeDetectorRef;
    /**
     * Esta entrada permite indicar un id único al componente dentro del DOM.
     *
     * @type {string}
     * @memberof BcInputSelectComponent
     */
    componentId: string;
    /**
     * Esta entrada de tipo string nos permite indicarle al selector un label descriptivo.
     *
     * @type {string}
     * @memberof BcInputSelectComponent
     */
    label: any;
    /**
     * name del elemento
     *
     * @memberof BcInputSelectComponent
     */
    name: string;
    /**
     * Esta entrada de tipo string nos permite añadirle al selector un span.
     *
     * @type {string}
     * @memberof BcInputSelectComponent
     */
    span: any;
    /**
     * Esta entrada es el arreglo de configuración de nuestro componente
     *
     * @type {Array<{ text: string }>}
     * @memberof BcInputSelectComponent
     */
    /**
     * Esta entrada nos permite setear el valor inicial de nuestro componente.
     *
     * @memberof BcInputSelectComponent
     */
    initValue: any;
    /**
     * Esta entrada nos asignar el valor del selector.
     *
     * @memberof BcInputSelectComponent
     */
    values: Array<{
        label: string;
        value: any;
        icon?: string;
    }>;
    /**
     * Esta entrada de tipo string nos permite activar el ícono dentro de nuestras opciones, es importante
     * tener en cuenta que la entrada recibe el nombre del ícono.
     *
     * @type {string}
     * @memberof BcInputSelectComponent
     */
    icon: string;
    /**
     * Esta entrada de tipo numérico nos indica el índice de la opción por defecto.
     *
     * @type {number}
     * @memberof BcInputSelectComponent
     */
    defaultIndex: number;
    /**
     * Esta entrada de tipo booleana nos permite indicar si el componente está en estado de error.
     *
     * @type {boolean}
     * @memberof BcInputSelectComponent
     */
    status: 'error' | 'disabled' | 'enabled';
    /**
     * Esta entrada de tipo booleana nos indica si el componente es de entrada múltiple.
     *
     * @type {boolean}
     * @memberof BcInputSelectComponent
     */
    multiple: boolean;
    /**
     * Esta entrada de tipo booleana nos indica si el componente filtra la lista de opciones.
     *
     * @type {boolean}
     * @memberOf BcInputSelectComponent
     */
    filter: boolean;
    /**
     * Salida del valor actual del componente.
     *
     * @type {(EventEmitter<string | string[]>)}
     * @memberof BcInputSelectComponent
     */
    valueOutput: EventEmitter<string | string[]>;
    /**
     * Esta entrada de tipo string nos indica el tipo de formato de salida de nuestro valor actual, esta puede ser
     * de tipo full para devolver el objeto completo o simple para devolver un único valor.
     *
     * @type {('full' | 'simple')}
     * @memberof BcInputSelectComponent
     */
    formatType: 'full' | 'simple';
    codesbcInputSelect: any;
    bcInputSelectBehavior: any;
    formControlName: any;
    selectedItemsDisplay: any;
    /**
    * Altura maxima del contenido
    *
    * @memberof BcInputDateRangeComponent
    */
    maxHeightContent: number;
    config: {
        firstLoad: boolean;
    };
    container: ElementRef;
    input: ElementRef;
    constructor(controlDirective: NgControl, bcHelperService: BcHelperService, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    onTouch: () => void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    onBlur(ev: Event): void;
    validateErrorStatus(): void;
    updateState(): void;
    writeValue(value: any): void;
    setMultipleState(): void;
    setFilterState(): void;
    /**
     * setea los input
     *
     * @memberof BcInputSelectComponent
     */
    setInputs(): void;
    /**
     * valores a salir
     *
     * @param {(string | string[])} param
     * @memberof BcInputSelectComponent
     */
    setvalueOutput(param: string | string[]): void;
    /**
     * Habilitar y deshabilitar dropdown
     *
     * @param {(boolean)} param
     * @memberof BcInputSelectComponent
     */
    setDisabledState(isDisabled: boolean): void;
    cleanSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputSelectComponent, [{ optional: true; self: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInputSelectComponent, "bc-input-select", never, { "componentId": "componentId"; "label": "label"; "name": "name"; "span": "span"; "initValue": "initValue"; "values": "values"; "icon": "icon"; "defaultIndex": "defaultIndex"; "status": "status"; "multiple": "multiple"; "filter": "filter"; "formatType": "formatType"; "selectedItemsDisplay": "selected-items-display"; "maxHeightContent": "maxHeightContent"; }, { "valueOutput": "valueOutput"; }, never, never>;
}
