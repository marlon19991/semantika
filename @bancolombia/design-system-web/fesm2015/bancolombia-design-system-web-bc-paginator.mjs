import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { BcPaginatorBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';

/**
 * Componente paginador
 *
 * @export
 * @class BcPaginatorComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcPaginatorComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Tipo de paginador.
         * @type {string}
         * @memberof BcPaginatorComponent
         */
        this.type = '';
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberOf BcPaginatorComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Emitir número de página seleccionada.
         * @type {EventEmitter<number>}
         * @memberof BcPaginatorComponent
         */
        this.onChangePage = new EventEmitter(true);
        /**
        * Indica si es el primer cambio del componente
        * @type {boolean}
        * @memberof BcPaginatorComponent
        */
        this.firstChange = false;
    }
    ngOnInit() { }
    /**
     * Indica cambios generados en el componente
     * @memberof BcPaginatorComponent
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (this.firstChange) {
            this.bcPaginatorBehavior.getMySelf().innerHTML = '';
            setTimeout(() => {
                this.initPaginatorBehavior();
            });
        }
    }
    /**
     * Configuración del componente despues de cargar la vista
     * @memberof BcPaginatorComponent
     */
    ngAfterViewInit() {
        this.initPaginatorBehavior();
    }
    /**
     * Inicialización del paginador
     * @memberof BcPaginatorComponent
     */
    initPaginatorBehavior() {
        this.bcPaginatorBehavior = new BcPaginatorBehavior();
        this.bcPaginatorBehavior.setId(this.componentId);
        this.bcPaginatorBehavior.changeState = (param) => this.onChangePage.emit(param);
        this.bcPaginatorBehavior.setUp();
        this.firstChange = true;
    }
}
BcPaginatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcPaginatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPaginatorComponent, selector: "bc-paginator", inputs: { type: "type", componentId: "componentId", totalRegisters: "totalRegisters", perPage: "perPage", perMultiple: "perMultiple" }, outputs: { onChangePage: "onChangePage" }, usesOnChanges: true, ngImport: i0, template: "<nav\n  class=\"bc-paginator\"\n  [id]=\"componentId\"\n  role=\"navigation\"\n  aria-label=\"paginador\"\n  [attr.totalregisters]=\"totalRegisters\"\n  [attr.perpage]=\"perPage\"\n  [attr.multiple]=\"perMultiple\"\n  [attr.typepaginator]=\"type\"\n></nav>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-paginator', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav\n  class=\"bc-paginator\"\n  [id]=\"componentId\"\n  role=\"navigation\"\n  aria-label=\"paginador\"\n  [attr.totalregisters]=\"totalRegisters\"\n  [attr.perpage]=\"perPage\"\n  [attr.multiple]=\"perMultiple\"\n  [attr.typepaginator]=\"type\"\n></nav>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { type: [{
                type: Input
            }], componentId: [{
                type: Input
            }], totalRegisters: [{
                type: Input
            }], perPage: [{
                type: Input
            }], perMultiple: [{
                type: Input
            }], onChangePage: [{
                type: Output
            }] } });

/**
 * Importa componente paginador con
 * los diseños de Bancolombia S.A.
 * @componente <bc-paginator></bc-paginator>
 * @fileoverview Corresponde a un elemento de un paginador, que puede admitir cantidad paginas para paginar.
 * @description Para cambiar de pagina de un contenido dado el paginador expone un evento numerico onChangePage
 * el cual indica el indice de la pagina seleccionada en el paginador.
 * @param type: string - Indica el tipo de paginador. los diferente tipos se eligen con los siguientes textos
 * 'basic', 'simple', 'default', 'full', 'bullet'
 * El paginador tipo 'bullet' solo puede paginar hasta 5 paginas.
 * @param showNumber: boolean - Indica al paginador si muestra a o no los numeros indicadores de las paginas, para los paginadores
 * de tipo basic y simple este parametro esta en falso por defecto, este parametro admite booleano false o true
 * @param pageSize: string - Indica al paginador la cantidad maxima de paginas que va a paginar, admite texto numerico
 * @param onChangePage: Event():number - Evento que se ejecuta cuando seleccionan una pagina ya sea desde los botones o paginas, el
 * parametro que emite es numerico e indica la pagina seleccionada.
 * @example
 * <bc-paginator
 *      type="basic"
 *      showNumbers=true
 *      pageSize="maximumPages"
 *      (onChangePage)="onPageChangeExample($event)">
 * </bc-paginator>
 *
 * @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
class BcPaginatorModule {
}
BcPaginatorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPaginatorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorModule, declarations: [BcPaginatorComponent], imports: [CommonModule, BcButtonModule, BcIconModule], exports: [BcPaginatorComponent] });
BcPaginatorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorModule, providers: [BcHelperService], imports: [[CommonModule, BcButtonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPaginatorComponent],
                    imports: [CommonModule, BcButtonModule, BcIconModule],
                    providers: [BcHelperService],
                    exports: [BcPaginatorComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcPaginatorComponent, BcPaginatorModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-paginator.mjs.map
