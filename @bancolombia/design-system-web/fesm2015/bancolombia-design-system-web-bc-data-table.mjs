import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcDataTableBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';

/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * El componente data-table representa un indicador de novedad sobre un elemento
 *
 * @export
 * @class BcDataTableComponent
 * @implements {AfterViewInit}
 */
class BcDataTableComponent {
    /**
     * Configuracion de datatable.
     *
     * @memberof BcDataTableConfig
     */
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
    }
    ngOnInit() {
        this.dataTableId = this.bcHelperService.getId(this);
        this.dataTableConfig.id = this.dataTableId;
    }
    ngAfterViewInit() {
        this.bcDataTableBehavior = new BcDataTableBehavior(this.dataTableConfig);
    }
    updateData(dataTableConfig) {
        this.bcDataTableBehavior = new BcDataTableBehavior(dataTableConfig);
    }
}
BcDataTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDataTableComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcDataTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcDataTableComponent, selector: "bc-data-table", inputs: { dataTableConfig: ["data-table-config", "dataTableConfig"] }, ngImport: i0, template: "<div class=\"bc-data-table-container\">\n    <table [id]=\"dataTableId\"></table>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDataTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-data-table', styles: [], template: "<div class=\"bc-data-table-container\">\n    <table [id]=\"dataTableId\"></table>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { dataTableConfig: [{
                type: Input,
                args: ['data-table-config']
            }] } });

class BcDataTableModule {
}
BcDataTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDataTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcDataTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDataTableModule, declarations: [BcDataTableComponent], imports: [CommonModule], exports: [BcDataTableComponent] });
BcDataTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDataTableModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDataTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcDataTableComponent],
                    imports: [CommonModule],
                    exports: [BcDataTableComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcDataTableComponent, BcDataTableModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-data-table.mjs.map
