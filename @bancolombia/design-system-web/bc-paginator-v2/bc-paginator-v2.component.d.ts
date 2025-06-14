import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BcPaginatorV2Behavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcPaginatorV2Component implements OnInit, OnChanges {
    private bcHelperService;
    /**
     * Tipo de paginador, valores permitidos: basic o numeric
     *
     * @memberof BcPaginatorV2Component
     */
    type: string;
    /**
     * Identificador de paginador. Si esta vacio se autogenera el id
     *
     * @memberof BcPaginatorV2Component
     */
    id: string;
    /**
     * Texto de enlace "Anterior" en paginador basic
     *
     * @memberof BcPaginatorV2Component
     */
    prevText: string;
    /**
     * Texto de enlace "Siguiente" en paginador basic
     *
     * @memberof BcPaginatorV2Component
     */
    nextText: string;
    /**
     * Total de elementos
     *
     * @memberof BcPaginatorV2Component
     */
    totalItems: number;
    /**
     * Elementos a mostrar por página. Si showPageSize es true,
     * valor sera configurado como inicial en selector de elementos por página.
     *
     * @memberof BcPaginatorV2Component
     */
    itemsPerPage: number;
    /**
     * Número de página actual.
     *
     * @memberof BcPaginatorV2Component
     */
    initialPage: number;
    /**
     * Indica si se mostrará selector de elementos por página. True para mostrar input select.
     * Valor default es false.
     *
     * @memberof BcPaginatorV2Component
     */
    showPageSize: boolean;
    /**
     * Permite configurar las opciones a mostrar en el selector de elementos por página.
     * Valores se deben separar con coman ",". Se permiten máximo 5 opciones. Ejemplo: "5,15,25"
     *
     * @memberof BcPaginatorV2Component
     */
    pageSizeOptions: string;
    /**
     * Indica si se mostrará texto informativo de elementos. True para mostrar texto.
     * Valor default es false.
     *
     * @memberof BcPaginatorV2Component
     */
    showInfoItems: boolean;
    /**
     * Si showInfoItems es true, permite personalizar el texto informativo "elementos".
     *
     * @memberof BcPaginatorV2Component
     */
    customTextInfoItems: string;
    /**
     * Permite configurar el valor del atributo aria-label.
     * Valor default es Paginación.
     *
     * @memberof BcPaginatorV2Component
     */
    ariaLabel: string;
    classToSync: string;
    onChangePage: EventEmitter<any>;
    bcPaginatorBehavior: BcPaginatorV2Behavior;
    componentReady: boolean;
    constructor(bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initPaginatorBehavior(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPaginatorV2Component, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcPaginatorV2Component, "bc-paginator-v2", never, { "type": "type"; "id": "id"; "prevText": "prevText"; "nextText": "nextText"; "totalItems": "totalItems"; "itemsPerPage": "itemsPerPage"; "initialPage": "initialPage"; "showPageSize": "showPageSize"; "pageSizeOptions": "pageSizeOptions"; "showInfoItems": "showInfoItems"; "customTextInfoItems": "customTextInfoItems"; "ariaLabel": "aria-label"; "classToSync": "classToSync"; }, { "onChangePage": "onChangePage"; }, never, never>;
}
