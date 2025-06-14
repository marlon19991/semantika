import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcPaginatorV2Behavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';

class BcPaginatorV2Component {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        this.onChangePage = new EventEmitter(true);
        this.componentReady = false;
    }
    ngOnInit() {
        this.id = this.id ?? this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        this.initPaginatorBehavior();
    }
    ngOnChanges(changes) {
        if (this.componentReady) {
            setTimeout(() => {
                this.initPaginatorBehavior();
            });
        }
    }
    initPaginatorBehavior() {
        this.bcPaginatorBehavior = new BcPaginatorV2Behavior();
        this.bcPaginatorBehavior.setId(this.id);
        this.bcPaginatorBehavior.onChangePage = (param) => {
            this.onChangePage.emit(param);
        };
        this.bcPaginatorBehavior.setUp();
        this.componentReady = true;
    }
}
BcPaginatorV2Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Component, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcPaginatorV2Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPaginatorV2Component, selector: "bc-paginator-v2", inputs: { type: "type", id: "id", prevText: "prevText", nextText: "nextText", totalItems: "totalItems", itemsPerPage: "itemsPerPage", initialPage: "initialPage", showPageSize: "showPageSize", pageSizeOptions: "pageSizeOptions", showInfoItems: "showInfoItems", customTextInfoItems: "customTextInfoItems", ariaLabel: ["aria-label", "ariaLabel"], classToSync: "classToSync" }, outputs: { onChangePage: "onChangePage" }, usesOnChanges: true, ngImport: i0, template: "<nav\n  class=\"bc-paginator-v2\"\n  [id]=\"id\"\n  [attr.type]=\"type\"\n  [attr.prevText]=\"prevText\"\n  [attr.nextText]=\"nextText\"\n  [attr.totalItems]=\"totalItems\"\n  [attr.initialPage]=\"initialPage\"\n  [attr.itemsPerPage]=\"itemsPerPage\"\n  [attr.showPageSize]=\"showPageSize\"\n  [attr.pageSizeOptions]=\"pageSizeOptions\"\n  [attr.showInfoItems]=\"showInfoItems\"\n  [attr.customTextInfoItems]=\"customTextInfoItems\"\n  [attr.aria-label]=\"ariaLabel\"\n  [attr.classToSync]=\"classToSync\"\n></nav>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Component, decorators: [{
            type: Component,
            args: [{ selector: 'bc-paginator-v2', template: "<nav\n  class=\"bc-paginator-v2\"\n  [id]=\"id\"\n  [attr.type]=\"type\"\n  [attr.prevText]=\"prevText\"\n  [attr.nextText]=\"nextText\"\n  [attr.totalItems]=\"totalItems\"\n  [attr.initialPage]=\"initialPage\"\n  [attr.itemsPerPage]=\"itemsPerPage\"\n  [attr.showPageSize]=\"showPageSize\"\n  [attr.pageSizeOptions]=\"pageSizeOptions\"\n  [attr.showInfoItems]=\"showInfoItems\"\n  [attr.customTextInfoItems]=\"customTextInfoItems\"\n  [attr.aria-label]=\"ariaLabel\"\n  [attr.classToSync]=\"classToSync\"\n></nav>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { type: [{
                type: Input
            }], id: [{
                type: Input
            }], prevText: [{
                type: Input
            }], nextText: [{
                type: Input
            }], totalItems: [{
                type: Input
            }], itemsPerPage: [{
                type: Input
            }], initialPage: [{
                type: Input
            }], showPageSize: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], showInfoItems: [{
                type: Input
            }], customTextInfoItems: [{
                type: Input
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], classToSync: [{
                type: Input
            }], onChangePage: [{
                type: Output
            }] } });

/**
 * Importa componente paginador con
 * los diseños de Bancolombia S.A.
 * @componente <bc-paginator-v2></bc-paginator-v2>
 * @fileoverview Corresponde a un elemento de un paginador, que puede admitir cantidad paginas para paginar.
 * @description Para cambiar de pagina de un contenido dado el paginador expone un evento numerico onChangePage
 * el cual indica el indice de la pagina seleccionada en el paginador.
 * @param type: string - Indica el tipo de paginador. los diferente tipos se eligen con los siguientes textos
 * @param onChangePage: Event():number - Evento que se ejecuta cuando seleccionan una pagina ya sea desde los botones o paginas, el
 * parametro que emite es numerico e indica la pagina seleccionada.
 * @example
 * <bc-paginator-v2
 *      type="basic" *
 *      (onChangePage)="onPageChangeExample($event)">
 * </bc-paginator-v2>
 *
 * @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
class BcPaginatorV2Module {
}
BcPaginatorV2Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPaginatorV2Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Module, declarations: [BcPaginatorV2Component], imports: [CommonModule, BcButtonModule, BcIconModule], exports: [BcPaginatorV2Component] });
BcPaginatorV2Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Module, providers: [BcHelperService], imports: [[CommonModule, BcButtonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPaginatorV2Component],
                    imports: [CommonModule, BcButtonModule, BcIconModule],
                    providers: [BcHelperService],
                    exports: [BcPaginatorV2Component],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcPaginatorV2Component, BcPaginatorV2Module };
//# sourceMappingURL=bancolombia-design-system-web-bc-paginator-v2.mjs.map
