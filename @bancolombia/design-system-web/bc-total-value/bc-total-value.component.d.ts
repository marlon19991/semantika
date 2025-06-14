import { AfterViewInit, ElementRef } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcTotalValueObject, BcTotalValueColumn, BcTotalValueCellSpacingGap, BcTotalValueBackgroundColor } from './bc-total-value-interfaces';
import { BcTotalValueBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
 * Componente TotalValue
 * import { BcTotalValueComponent } from '@bancolombia/design-system-web/bc-total-value';
 * @export
 * @class BcTotalValueComponent
 */
export declare class BcTotalValueComponent implements AfterViewInit {
    private bcHelperService;
    bcTotalValueBehavior: BcTotalValueBehavior;
    containerClasses: {
        data: string;
        class: string;
    }[];
    columns: number;
    element: ElementRef;
    bcTotalValue: BcTotalValueObject;
    _backgroundColor: string;
    _dividerBottom: boolean;
    _cellSpacingGap: BcTotalValueCellSpacingGap;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcTotalValueComponent
     */
    componentId: string;
    /**
     * Todas las columnas con el mismo ancho
     *
     * @type {boolean}
     * @memberof BcTotalValueComponent
     */
    allCellsSameWidth: boolean;
    /**
     * Background del componente
     *
     * @type {BcTotalValueBackgroundColor}
     * @memberof BcTotalValueComponent
     */
    set backgroundColor(backgroundColor: BcTotalValueBackgroundColor);
    /**
     * Mostrar divider inferior
     *
     * @type {boolean}
     * @memberof BcTotalValueComponent
     */
    set dividerBottom(dividerBottom: boolean);
    /**
     * Espacios entre columnas
     *
     * @type {BcTotalValueCellSpacingGap}
     * @memberof BcTotalValueComponent
     */
    set cellSpacingGap(cellSpacingGap: BcTotalValueCellSpacingGap);
    /**
     * Objeto para cargar informacion y formato de columnas del componente
     *
     * @type {BcTotalValueObject}
     * @memberof BcTotalValueComponent
     */
    set bcTotalValueObject(data: BcTotalValueObject);
    constructor(bcHelperService: BcHelperService, el: ElementRef);
    ngAfterViewInit(): void;
    /**
     * Obtiene el string con las clases css para la columna del componente
     *
     * @param {number} index
     * @returns {string}
     * @memberof BcTotalValueComponent
     */
    getColWidthClass(index: number): string;
    /**
     * Obtiene el style width para la columna del componente
     *
     * @param {BcTotalValueColumn} column
     * @returns { width: string }
     * @memberof BcTotalValueComponent
     */
    getColWidthStyle(column: BcTotalValueColumn): {
        width: string;
    };
    /**
     * Agrega clases css para la columna del componente
     *
     * @param {string} data
     * @param {string} newClass
     * @memberof BcTotalValueComponent
     */
    private setClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTotalValueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTotalValueComponent, "tr[bc-total-value]", never, { "componentId": "componentId"; "allCellsSameWidth": "allCellsSameWidth"; "backgroundColor": "backgroundColor"; "dividerBottom": "dividerBottom"; "cellSpacingGap": "cellSpacingGap"; "bcTotalValueObject": "bcTotalValueObject"; }, {}, never, never>;
}
