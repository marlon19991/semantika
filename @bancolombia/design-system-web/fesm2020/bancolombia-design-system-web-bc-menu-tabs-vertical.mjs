import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcMenuTabsVerticalBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class BcMenuTabsVerticalComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento
         *
         * @memberof BcMenuTabsVerticalComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Listado de items a renderizar en el menú
         *
         * @memberof BcMenuTabsVerticalComponent
         */
        this.menuItems = [];
        /**
         * Orientación del menú, puede ser: left o right.
         *
         * @memberof BcMenuTabsVerticalComponent
         */
        this.orientation = 'right';
    }
    ngAfterViewInit() {
        this.bcMenuTabsVerticalBehavior = new BcMenuTabsVerticalBehavior();
        this.bcMenuTabsVerticalBehavior.setId(this.componentId);
        this.bcMenuTabsVerticalBehavior.setUp();
    }
}
BcMenuTabsVerticalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuTabsVerticalComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcMenuTabsVerticalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuTabsVerticalComponent, selector: "bc-menu-tabs-vertical", inputs: { componentId: "componentId", menuItems: "menuItems", orientation: "orientation" }, ngImport: i0, template: "<section [id]=\"componentId\" class=\"bc-menu-tabs-vertical bc-row\">\n  <nav class=\"bc-menu-tabs-vertical-container bc-menu-tabs-vertical-container-{{orientation}} bc-col-md-3\">\n    <h5 class=\"bc-menu-tabs-vertical-title\">Contenido</h5>\n    <ul class=\"bc-menu-tabs-vertical-items\">\n      <div class=\"bc-menu-tabs-vertical-indicator\"></div>\n      <li *ngFor=\"let item of menuItems\" class=\"bc-menu-tabs-vertical-item\" [attr.data-target]=\"item.itemTargetID\">\n        {{item.itemText}}\n      </li>\n    </ul>\n  </nav>\n  <article class=\"bc-menu-tabs-vertical-content bc-col-md\">\n    <ng-content select=\".bc-menu-tabs-vertical-content\"></ng-content>\n  </article>\n</section>\n", directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuTabsVerticalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-tabs-vertical', template: "<section [id]=\"componentId\" class=\"bc-menu-tabs-vertical bc-row\">\n  <nav class=\"bc-menu-tabs-vertical-container bc-menu-tabs-vertical-container-{{orientation}} bc-col-md-3\">\n    <h5 class=\"bc-menu-tabs-vertical-title\">Contenido</h5>\n    <ul class=\"bc-menu-tabs-vertical-items\">\n      <div class=\"bc-menu-tabs-vertical-indicator\"></div>\n      <li *ngFor=\"let item of menuItems\" class=\"bc-menu-tabs-vertical-item\" [attr.data-target]=\"item.itemTargetID\">\n        {{item.itemText}}\n      </li>\n    </ul>\n  </nav>\n  <article class=\"bc-menu-tabs-vertical-content bc-col-md\">\n    <ng-content select=\".bc-menu-tabs-vertical-content\"></ng-content>\n  </article>\n</section>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], orientation: [{
                type: Input
            }] } });

class BcMenuTabsVerticalModule {
}
BcMenuTabsVerticalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuTabsVerticalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcMenuTabsVerticalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuTabsVerticalModule, declarations: [BcMenuTabsVerticalComponent], imports: [CommonModule], exports: [BcMenuTabsVerticalComponent] });
BcMenuTabsVerticalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuTabsVerticalModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuTabsVerticalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcMenuTabsVerticalComponent],
                    imports: [CommonModule],
                    exports: [BcMenuTabsVerticalComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcMenuTabsVerticalComponent, BcMenuTabsVerticalModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-menu-tabs-vertical.mjs.map
