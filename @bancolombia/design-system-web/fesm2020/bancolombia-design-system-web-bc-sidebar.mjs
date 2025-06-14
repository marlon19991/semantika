import * as i0 from '@angular/core';
import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcSidebarBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * Componente Sidebar
 *
 * @export
 * @class BcSidebarComponent
 * @implements {AfterViewInit}
 */
class BcSidebarComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Esta entrada permite indicar un id único al componente dentro del DOM.
         *
         * @type {string}
         * @memberof BcSidebarComponent
         */
        this.id = this.bcHelperService.getId(this);
        /**
           * Entrada que permite indicar el tipo de Sidebar.
           *
           * @type {string}
           * @memberof BcSidebarComponent
           */
        this.tipoSidebar = 'fixed';
        /**
         *
         *
         * @type {Array<any>}
         * @memberof BcSidebarComponent
         */
        this.itemsli = [];
        this.bcSidebarBehavior = new BcSidebarBehavior();
    }
    /**
     * Abre el offcanvas.
     *
     * @memberof BcOffCanvasComponent
     */
    openSidebarHide() {
        this.bcSidebarBehavior.configOpenButtonEventHide();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.bcSidebarBehavior.setId(this.id);
        this.bcSidebarBehavior.setUp();
    }
    ngOnChanges(changes) {
        if (changes.currentValue != changes.previousValue) {
            this.tipoSidebar = changes.currentValue;
        }
    }
}
BcSidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSidebarComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcSidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSidebarComponent, selector: "bc-sidebar", inputs: { id: "id", tipoSidebar: "tipoSidebar", ariaLabel: ["aria-label", "ariaLabel"], itemsli: "itemsli" }, usesOnChanges: true, ngImport: i0, template: "\n\n<section class=\"bc-sidebar\" [id]=\"id\"  [attr.type]=\"tipoSidebar\">\n    <section>\n        <ng-content select=\"[mainContent]\"></ng-content>\n    </section>\n    <aside aria-label=\"Panel desplegado\">\n        <section>\n            <section>\n                <button>arrow2-left</button>\n                <button>error</button>\n            </section>\n            <section>\n                    <ng-content select=\"[sidebarContent]\"></ng-content>\n            </section>\n        </section>\n        <nav aria-label=\"barra lateral\">\n            <ul >\n                <li *ngFor=\"let icon of itemsli; let indice = index\">\n                    <button attr.aria-controls=\"{{ icon.id }}\"> {{ icon.iconName }}</button>\n                </li>\n            </ul>\n        </nav>\n    </aside>\n</section>\n\n", directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-sidebar', template: "\n\n<section class=\"bc-sidebar\" [id]=\"id\"  [attr.type]=\"tipoSidebar\">\n    <section>\n        <ng-content select=\"[mainContent]\"></ng-content>\n    </section>\n    <aside aria-label=\"Panel desplegado\">\n        <section>\n            <section>\n                <button>arrow2-left</button>\n                <button>error</button>\n            </section>\n            <section>\n                    <ng-content select=\"[sidebarContent]\"></ng-content>\n            </section>\n        </section>\n        <nav aria-label=\"barra lateral\">\n            <ul >\n                <li *ngFor=\"let icon of itemsli; let indice = index\">\n                    <button attr.aria-controls=\"{{ icon.id }}\"> {{ icon.iconName }}</button>\n                </li>\n            </ul>\n        </nav>\n    </aside>\n</section>\n\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], tipoSidebar: [{
                type: Input
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], itemsli: [{
                type: Input
            }] } });

class BcSidebarModule {
}
BcSidebarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcSidebarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSidebarModule, declarations: [BcSidebarComponent], imports: [CommonModule, BcIconModule], exports: [BcSidebarComponent] });
BcSidebarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSidebarModule, imports: [[CommonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcSidebarComponent],
                    imports: [CommonModule, BcIconModule],
                    exports: [BcSidebarComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcSidebarComponent, BcSidebarModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-sidebar.mjs.map
