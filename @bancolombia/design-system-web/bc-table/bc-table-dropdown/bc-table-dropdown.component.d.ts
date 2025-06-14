import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { EventEmitter, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BcTableDropdownComponent implements AfterViewInit, OnChanges {
    private bcHelperService;
    /**
     * Array con las opciones a mostrar en el submenú de opciones de cada fila.
     * Este Array es de tipo Options, es decir, cada elemento del array debe llevar la siguiente estructura:
     * {
     *  id: string;
     *  icon: string;
     *  text: string;
     * }
     *
     * @type {Array<Options>}
     * @memberof BcTableDropdownComponent
     */
    options: Array<Options>;
    /**
     * Es la fila en la cual se encuentra el dropdown.
     *
     * @type {*}
     * @memberof BcTableDropdownComponent
     */
    row: any;
    /**
     * Data personalizada por el usuario.
     *
     * @type {*}
     * @memberof BcTableDropdownComponent
     */
    data: any;
    /**
     * Se emite cuando alguna de las opciones del dropdown es seleccionada,
     * retornando el id de la opción y la respectiva fila.
     *
     * @type {EventEmitter<any>}
     * @memberof BcTableDropdownComponent
     */
    onChange: EventEmitter<any>;
    /**
     * Id del dropdown, se genera aleatoreamente.
     *
     * @memberof BcTableDropdownComponent
     */
    dropdownId: string;
    dropdownContent: HTMLElement;
    optionList: ElementRef;
    changed: EventEmitter<any>;
    constructor(bcHelperService: BcHelperService);
    ngAfterViewInit(): void;
    /**
     * Update del behavior para el dropdown actual y clickItem
     *
     */
    eventEnterDropdown(): void;
    private overWriteClickEvent;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Se ejecuta cuando se selecciona una opción y emite un evento con el id de la opción y la respectiva fila.
     * @param optionId id del la opción seleccionada
     */
    selectOption(optionId: string): void;
    /**
     * Busca las celdas de clase action para verificar que no se sobrepongan al dropdown
     *
     */
    clickItem(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTableDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTableDropdownComponent, "bc-table-dropdown", never, { "options": "options"; "row": "row"; "data": "data"; }, { "onChange": "onChange"; "changed": "changed"; }, never, never>;
}
/**
 * Interfaz para las opciones del dropdown.
 *
 * @interface Options
 */
interface Options {
    id?: string;
    icon?: string;
    text?: string;
}
export {};
