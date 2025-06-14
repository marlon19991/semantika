import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcTableScrollBehavior, BcTableAccordionBehavior, BcTableOptionMenu } from '@bancolombia/design-system-behaviors';
import { AfterViewInit, QueryList, OnChanges, SimpleChanges } from '@angular/core';
import { BcTableHeaderComponent } from '../bc-table-header/bc-table-header.component';
import { BcTableDirective } from '../bc-table-directives/bc-table.directive';
import { BcTableFooterComponent } from '../bc-table-footer/bc-table-footer.component';
import { BcTableDropdownComponent } from '../bc-table-dropdown/bc-table-dropdown.component';
import * as i0 from "@angular/core";
export declare class BcTableContainerComponent implements AfterViewInit, OnChanges {
    private bcHelperService;
    /**
     * Id del componente, si este no se seteado entonces asigna uno aleatoriamente.
     *
     * @type {string}
     * @memberof BcTableContainerComponent
     */
    componentId: string;
    /**
     * Hace referencia al header superior de la tabla.
     *
     * @type {QueryList<BcTableHeaderComponent>}
     * @memberof BcTableContainerComponent
     */
    headerTop: QueryList<BcTableHeaderComponent>;
    /**
     * Hace referencia al header superior de la tabla.
     *
     * @type {QueryList<BcTableHeaderComponent>}
     * @memberof BcTableContainerComponent
     */
    footer: QueryList<BcTableFooterComponent>;
    /**
     * Comportamiento nativo.
     *
     * @type {BcTableScrollBehavior | BcTableAccordionBehavior}
     * @memberof BcTableContainerComponent
     */
    bcTableBehavior: BcTableScrollBehavior | BcTableAccordionBehavior;
    /**
     * Array que se recorre en la tabla, es obligatorio asignarle valor para hacer que la tabla funcione al cambiar de página.
     *
     * @type {*}
     * @memberof BcTableContainerComponent
     */
    dataTable: any;
    tabActual: any;
    tabValidate: boolean;
    /**
     * Se obtiene la tabla
     *
     * @type {QueryList<BcTableDirective>}
     * @memberof BcTableContainerComponent
     */
    tableDirective: QueryList<BcTableDirective>;
    /**
     * lista de opciones para las celdas, pueden ser creadas como dropdowns
     * o inline actions para cada una las filas
     */
    cellOptions: Array<BcTableOptionMenu>;
    /**
     * Dropdowns de la tabla
     *
     * @type {QueryList<BcTableDropdownComponent>}
     * @memberof BcTableContainerComponent
     */
    dropdowns: QueryList<BcTableDropdownComponent>;
    constructor(bcHelperService: BcHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Se inicializa el comportamiento nativo de la tabla segun el atributo scroll (opcional)
     * para scroll=true -> se inicializa el comportamiento BcTableScrollBehavior
     * para scroll=false -> se inicializa el comportamiento BcTableAccordionBehavior
     *
     * @private
     * @memberof BcTableContainerComponent
     */
    private initTableBehavior;
    validateTabs(): boolean;
    /**
     * Asigna a el behavior de la tabla el id
     *
     * @private
     * @param {string} id
     * @memberof BcTableContainerComponent
     */
    setIdComponent(id: string): void;
    /**
     * Se obitiene la(s) fila(s) seleccionada(s) y el id de la accion a la cual se le hizo click en la cabecera
     * en modo selección
     *
     * @private
     * @param {{ rowSelectedIndex: number[]; actionId: string }} response Esto lo devuelve el comportamiento
     * @memberof BcTableContainerComponent
     */
    private onClickAction;
    /**
     * Mapea la data las filas seleccionadas segun el index, para poder devolver la data real que se itera en la tabla
     *
     * @private
     * @param {number[]} indexesRowSelected indice de filas seleccionadas
     * @return {*}  {any[]}
     * @memberof BcTableContainerComponent
     */
    private getRowSelectedFromData;
    /**
     * Reinicial el comportamiento de la tabla y cuando esta en modo scroll se borran las celdas (columna) fija
     *
     * @private
     * @memberof BcTableContainerComponent
     */
    private reInit;
    /**
     * Elimina la celda fija
     *
     * @privates
     * @param {NodeListOf<Element>} fixedCells
     * @memberof BcTableContainerComponent
     */
    private removeCell;
    /**
     * Metodo que con el retorno de los paginadores empareja y permite que los
     * paginadores se sincronicen
     * @private
     * @memberof BcTableContainerComponent
     */
    private pairPaginatorTable;
    /**
     * Permite observar cuando alguno de los dropdowns cambia sus opciones para reiniciar el componente
     *
     * @private
     * @memberof BcTableContainerComponent
     */
    private subscribeToDropdownChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTableContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTableContainerComponent, "bc-table-container", never, { "componentId": "componentId"; "dataTable": "dataTable"; "tabActual": "tabActual"; "tabValidate": "tabValidate"; "cellOptions": "cellOptions"; }, {}, ["headerTop", "footer", "tableDirective", "dropdowns"], ["*"]>;
}
