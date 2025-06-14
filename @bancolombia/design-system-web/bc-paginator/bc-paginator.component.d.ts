import { OnInit, EventEmitter, AfterViewInit, SimpleChanges } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente paginador
 *
 * @export
 * @class BcPaginatorComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcPaginatorComponent implements OnInit, AfterViewInit {
    private bcHelperService;
    /**
     * Tipo de paginador.
     * @type {string}
     * @memberof BcPaginatorComponent
     */
    type: string;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberOf BcPaginatorComponent
     */
    componentId: string;
    /**
     * Total de registros.
     *
     * @type {string}
     * @memberOf BcPaginatorComponent
     */
    totalRegisters: string;
    /**
     * Cantidad de registros a mostrar por página.
     *
     * @type {string}
     * @memberOf BcPaginatorComponent
     */
    perPage: string;
    /**
     * Múltiplo que se va usar para mostrar el dropdown perPage.
     * @type {string}
     * @memberOf BcPaginatorComponent
     */
    perMultiple: string;
    /**
     * Emitir número de página seleccionada.
     * @type {EventEmitter<number>}
     * @memberof BcPaginatorComponent
     */
    onChangePage: EventEmitter<number>;
    /**
     * variable que hace referencia al comportamiento nativo del componente
     * @memberof BcPaginatorComponent
     */
    bcPaginatorBehavior: any;
    /**
    * Indica si es el primer cambio del componente
    * @type {boolean}
    * @memberof BcPaginatorComponent
    */
    firstChange: boolean;
    constructor(bcHelperService: BcHelperService);
    ngOnInit(): void;
    /**
     * Indica cambios generados en el componente
     * @memberof BcPaginatorComponent
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Configuración del componente despues de cargar la vista
     * @memberof BcPaginatorComponent
     */
    ngAfterViewInit(): void;
    /**
     * Inicialización del paginador
     * @memberof BcPaginatorComponent
     */
    initPaginatorBehavior(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPaginatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcPaginatorComponent, "bc-paginator", never, { "type": "type"; "componentId": "componentId"; "totalRegisters": "totalRegisters"; "perPage": "perPage"; "perMultiple": "perMultiple"; }, { "onChangePage": "onChangePage"; }, never, never>;
}
