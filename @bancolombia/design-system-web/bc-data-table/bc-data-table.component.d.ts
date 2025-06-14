import { AfterViewInit, OnInit } from '@angular/core';
import { BcDataTableBehavior, BcDataTableConfig } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * El componente data-table representa un indicador de novedad sobre un elemento
 *
 * @export
 * @class BcDataTableComponent
 * @implements {AfterViewInit}
 */
export declare class BcDataTableComponent implements OnInit, AfterViewInit {
    private bcHelperService;
    bcDataTableBehavior: BcDataTableBehavior;
    dataTableId: any;
    /**
     * Configuracion de datatable.
     *
     * @memberof BcDataTableConfig
     */
    constructor(bcHelperService: BcHelperService);
    dataTableConfig: BcDataTableConfig;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    updateData(dataTableConfig: BcDataTableConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcDataTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcDataTableComponent, "bc-data-table", never, { "dataTableConfig": "data-table-config"; }, {}, never, never>;
}
