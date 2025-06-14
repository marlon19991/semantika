import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BcTableDirective implements AfterViewInit {
    /**
     * Permite indicar si la tabla va a tener celdas para la selección de filas
     * Si el valor es true, entonces se inicializa el comportamiento para los checkbox
     * Por defecto es false.
     *
     * @memberof BcTableDirective
     */
    selection: boolean;
    /**
     * Permite indicar si la tabla será de tipo scroll, es decir, con columna fija y se puedan mostrar/ocultar columnas
     * Si el valor es true, entonces se pinta en la parte superior derecha el ícono de setting y se agrega la clase
     * Por defecto es false.
     *
     * @memberof BcTableDirective
     */
    scroll: boolean;
    /**
     * Permite indicar si la tabla será de tipo accordion, con contenedor vacio
     *
     * @memberof BcTableDirective
     */
    accordionEmpty: boolean;
    /**
     * Permite indicar si la tabla se podrá ordenar por columna
     *
     * @memberof BcTableDirective
     */
    sort: boolean;
    /**
     * Permite indicar si la tabla tiene acciones dropdown
     *
     * @memberof BcTableDirective
     */
    dropdownActions: boolean;
    /**
     * Permite indicar si la tabla tiene dropdowns en inicializados en el html
     *
     * @memberof BcTableDirective
     */
    dropdownHtml: boolean;
    /**
     * Permite indicar si la tabla tiene acciones en fila
     *
     * @memberof BcTableDirective
     */
    inlineActions: boolean;
    /**
     * Permite indicar si la no debería de ocultar los paginadores al momento de hacer una selección
     *
     * @memberof BcTableDirective
     */
    isNotHidePaginator: boolean;
    /**
     * Hace referencia al elemento sobre el cual actúa la directiva.
     *
     * @type {ElementRef}
     * @memberof BcTableDirective
     */
    pairPaginators: boolean;
    /**
     * Hace referencia al elemento sobre el cual actúa la directiva.
     *
     * @type {ElementRef}
     * @memberof BcTableDirective
     */
    element: ElementRef;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcTableDirective, "[bc-table]", never, { "selection": "selection"; "scroll": "scroll"; "accordionEmpty": "accordionEmpty"; "sort": "sort"; "dropdownActions": "dropdownActions"; "dropdownHtml": "dropdownHtml"; "inlineActions": "inlineActions"; "isNotHidePaginator": "isNotHidePaginator"; "pairPaginators": "pairPaginators"; }, {}, never>;
}
