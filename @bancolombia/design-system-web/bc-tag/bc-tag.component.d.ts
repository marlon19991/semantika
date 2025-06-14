import { EventEmitter, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { BcTagBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente Tag
 *
 * @export
 * @class BcTagComponent
 */
export declare class BcTagComponent implements AfterViewInit, OnInit {
    private elementRef;
    private bcHelperService;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcfooterComponent
     */
    componentId: string;
    /**
     * Icono del botón izquierdo.
     *
     * @memberof BcTagComponent
     */
    iconLeft: string;
    /**
     * Icono del botón derecho para type tag
     *
     * @memberof BcTagComponent
     */
    iconRight: string;
    /**
     * Icono '+' del botón derecho para el filtro (indica adición).
     *
     * @memberof BcTagComponent
     */
    iconAdd: string;
    /**
     * Icono 'x' del botón derecho para el filtro (indica eliminación).
     *
     * @memberof BcTagComponent
     */
    iconDelete: string;
    /**
     * Texto principal del elemento.
     *
     * @memberof BcTagComponent
     */
    textElement: string;
    /**
     * Propiedad de estado que indica si está seleccionado o deshabilitado.
     *
     * @type {('disabled' | 'selected')}
     * @memberof BcTagComponent
     */
    status: 'disabled' | 'selected';
    /**
     * Propiedad que identifica el tipo de botón que se va a utilizar.
     *
     * @memberof BcTagComponent
     */
    typeTag: 'button' | 'filter' | 'dropdown';
    /**
     * Objeto encargado de llenar las listas con las propiedades definidas.
     *
     * @memberof BcTagComponent
     */
    values: Array<{
        spanText: string;
        value: any;
        iconName?: string;
    }>;
    /**
     * Tipo de opciones, por default es el botón primario parametro de entrada 'secondary'.
     *
     * @memberof BcTagComponent
     */
    typeButtonTag: string;
    /**
     * Texto de accesibilidad del elemento.
     *
     * @memberof BcTagComponent
     */
    textAriaLabel: string;
    /**
     * Ancho en píxeles(px) del tag.
     *
     * @memberof BcTagComponent
     */
    widthTag: string;
    /**
     * Ver opcion seleccionada
     *
     * @memberof BcTagComponent
     */
    showOptionSelected: boolean;
    /**
     * Salida del valor actual del componente.
     *
     * @type {(EventEmitter<string | string[]>)}
     * @memberof BcInputSelectComponent
     */
    valueOutput: EventEmitter<string | string[]>;
    onClickButton: EventEmitter<void>;
    bcTagBehavior: BcTagBehavior;
    constructor(elementRef: ElementRef, bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    handleClick(event: MouseEvent): void;
    handleClickButton(): void;
    getClassButton(): "bc-tag" | "bc-tag-secondary-disabled" | "bc-tag-secondary" | "bc-tag-disabled";
    getClassFilter(): "bc-tag-filter-disabled" | "bc-tag-filter";
    private initButton;
    private initFilter;
    private initDropdown;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTagComponent, "bc-tag", never, { "componentId": "componentId"; "iconLeft": "iconLeft"; "iconRight": "iconRight"; "iconAdd": "iconAdd"; "iconDelete": "iconDelete"; "textElement": "textElement"; "status": "status"; "typeTag": "typeTag"; "values": "values"; "typeButtonTag": "typeButtonTag"; "textAriaLabel": "textAriaLabel"; "widthTag": "widthTag"; "showOptionSelected": "showOptionSelected"; }, { "valueOutput": "valueOutput"; "onClickButton": "onClickButton"; }, never, never>;
}
