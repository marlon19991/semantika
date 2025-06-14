import { ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BcCellDirective implements AfterViewInit {
    /**
     * Tipo de celda, esta puede tomar los valores: checkbox, number, action o total.
     *
     * @type {string}
     * @memberof BcCellDirective
     */
    type: string;
    /**
     * Indica si la columna es favorita, es decir, aparecerá en la pantalla mobile, máximo 3 celdas.
     *
     * @type {boolean}
     * @memberof BcCellDirective
     */
    favorite: boolean;
    /**
     * Indica si es la columna fija, es decir, será la primera columna a la izquerda con posición fija.
     * Las demas filas quedan dentro un contenedor con scroll.
     *
     * @type {boolean}
     * @memberof BcCellDirective
     */
    fixed: boolean;
    /**
     * Hace referencia al elemento en el cual actúa la directiva.
     */
    element: ElementRef;
    changed: EventEmitter<any>;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    /**
     * Permite añadir la clase que indica el tipo de columna según el atributo type:
     * Para type = 'number' la clase es bc-table-number-column.
     *
     * Por defecto la clase es bc-table-cell.
     *
     * @memberof BcCellDirective
     */
    setColumnType(): void;
    /**
     * Permite añadir la clase que indica el tipo de celda según el atributo type:
     * Para type = 'number' la clase es bc-table-number-cell.
     * Para type = 'total' la clase es bc-table-number-cell y bc-table-total-cell.
     * Para type = 'text' la clase es bc-table-text-cell.
     *
     * Por defecto la clase es bc-table-cell.
     *
     * @memberof BcCellDirective
     */
    setCellType(): void;
    /**
     * Permite asignar la clase que indica si la columna es favorita, es decir,
     * se muestra en la tabla mobile.
     *
     * @memberof BcCellDirective
     */
    setFavoriteClass(): void;
    /**
     * Permite asignar la clase que indica si la columna es favorita, es decir,
     * se muestra en la tabla mobile.
     *
     * @memberof BcCellDirective
     */
    setFiexColumnClass(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcCellDirective, "[bc-cell]", never, { "type": "type"; "favorite": "favorite"; "fixed": "fixed"; }, { "changed": "changed"; }, never>;
}
