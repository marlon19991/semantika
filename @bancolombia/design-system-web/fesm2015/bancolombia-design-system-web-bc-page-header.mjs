import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcPageHeaderBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-breadcrumb';
import { BcBreadcrumbModule } from '@bancolombia/design-system-web/bc-breadcrumb';
import * as i3 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * Importa el componente BcFooter para el pie de página
 *
 * @export
 * @class BcfooterComponent
 * @implements {AfterViewInit}
 */
class BcPageHeaderComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento
         *
         * @type {string}
         * @memberof BcPageHeaderComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Links del lado derecho
         *
         * @type {IRightButtons[]}
         * @memberof BcPageHeaderComponent
         */
        this.rightButtons = [];
        /**
         * Fecha de lado derecho
         *
         * @type {string}
         * @memberof BcPageHeaderComponent
         */
        this.date = '';
        /**
         * Titulo de la pagina
         *
         * @type {string}
         * @memberof BcPageHeaderComponent
         */
        this.title = '';
        /**
         * Coloca el background blanco
         *
         * @type {boolean}
         * @memberof BcPageHeaderComponent
         */
        this.bgWhite = false;
        /**
         * Coloca el background blanco
         *
         * @type {boolean}
         * @memberof BcPageHeaderComponent
         */
        this.showBackButton = false;
        /**
         * Evento click de los botos de la derecha
         *
         * @type {EventEmitter}
         * @memberof BcPageHeaderComponent
         */
        this.clickButtonRight = new EventEmitter();
        /**
         * Evento click para retroceder
         *
         * @type {EventEmitter}
         * @memberof BcPageHeaderComponent
         */
        this.clickBackButton = new EventEmitter();
        this.bcPageHeaderBehavior = new BcPageHeaderBehavior();
    }
    ngAfterViewInit() {
        this.bcPageHeaderBehavior.setId(this.componentId);
        this.bcPageHeaderBehavior.setUp();
    }
    buttonClick(idButton) {
        this.clickButtonRight.emit(idButton);
    }
}
BcPageHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPageHeaderComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcPageHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPageHeaderComponent, selector: "bc-page-header", inputs: { componentId: "componentId", rightButtons: "rightButtons", date: "date", title: "title", bgWhite: "bgWhite", showBackButton: "showBackButton" }, outputs: { clickButtonRight: "clickButtonRight", clickBackButton: "clickBackButton" }, ngImport: i0, template: "<div class=\"bc-page-header\" [ngClass]=\"{'bc-page-header-white': bgWhite}\" [id]=\"componentId\">\n    <div class=\"bc-container bc-page-header-content\">\n        <div class=\"bc-page-header-content-left bc-col-md-6 bc-col-sm-6 bc-col-xs-12\">\n            <bc-breadcrumb></bc-breadcrumb>\n            <div class=\"bc-page-header-content-left-title\">\n                <bc-icon class=\"bc-page-header-back-button\" size=\"sm\" aria-hidden=\"true\" aria-label=\"prueba\"\n                    *ngIf=\"showBackButton\">arrow-left</bc-icon>\n                <h6 *ngIf=\"title\">{{title}}</h6>\n            </div>\n\n        </div>\n\n        <div class=\"bc-page-header-content-right bc-col-md-6 bc-col-sm-6 bc-col-xs-12\">\n            <div class=\"bc-page-header-content-right-p\">\n                <p *ngIf=\"date\">{{date}}</p>\n\n            </div>\n            <div class=\"bc-page-header-content-right-icons\">\n                <button *ngFor=\"let item of rightButtons; let i = index;\" [id]=\"item.id\" aria-label=\"Boton\"\n                    sizebutton=\"small\" role=\"button\" tabindex=\"0\" class=\"bc-fab-btn-icon bc-page-header-icon\"\n                    (click)=\"buttonClick(item.id)\">\n                    <em class=\"bc-icon bc-xs\" aria-hidden=\"true\" aria-label=\"prueba\">{{item.icon}}</em>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2.BcBreadcrumbComponent, selector: "bc-breadcrumb", inputs: ["componentId"] }, { type: i3.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-page-header', template: "<div class=\"bc-page-header\" [ngClass]=\"{'bc-page-header-white': bgWhite}\" [id]=\"componentId\">\n    <div class=\"bc-container bc-page-header-content\">\n        <div class=\"bc-page-header-content-left bc-col-md-6 bc-col-sm-6 bc-col-xs-12\">\n            <bc-breadcrumb></bc-breadcrumb>\n            <div class=\"bc-page-header-content-left-title\">\n                <bc-icon class=\"bc-page-header-back-button\" size=\"sm\" aria-hidden=\"true\" aria-label=\"prueba\"\n                    *ngIf=\"showBackButton\">arrow-left</bc-icon>\n                <h6 *ngIf=\"title\">{{title}}</h6>\n            </div>\n\n        </div>\n\n        <div class=\"bc-page-header-content-right bc-col-md-6 bc-col-sm-6 bc-col-xs-12\">\n            <div class=\"bc-page-header-content-right-p\">\n                <p *ngIf=\"date\">{{date}}</p>\n\n            </div>\n            <div class=\"bc-page-header-content-right-icons\">\n                <button *ngFor=\"let item of rightButtons; let i = index;\" [id]=\"item.id\" aria-label=\"Boton\"\n                    sizebutton=\"small\" role=\"button\" tabindex=\"0\" class=\"bc-fab-btn-icon bc-page-header-icon\"\n                    (click)=\"buttonClick(item.id)\">\n                    <em class=\"bc-icon bc-xs\" aria-hidden=\"true\" aria-label=\"prueba\">{{item.icon}}</em>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], rightButtons: [{
                type: Input
            }], date: [{
                type: Input
            }], title: [{
                type: Input
            }], bgWhite: [{
                type: Input
            }], showBackButton: [{
                type: Input
            }], clickButtonRight: [{
                type: Output
            }], clickBackButton: [{
                type: Output
            }] } });

/**
 * Importa el componente BcPageHeader con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-page-header></bc-page-header>
 *
 */
class BcPageHeaderModule {
}
BcPageHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPageHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPageHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPageHeaderModule, declarations: [BcPageHeaderComponent], imports: [CommonModule, BcIconModule, BcBreadcrumbModule], exports: [BcPageHeaderComponent] });
BcPageHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPageHeaderModule, imports: [[CommonModule, BcIconModule, BcBreadcrumbModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPageHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPageHeaderComponent],
                    imports: [CommonModule, BcIconModule, BcBreadcrumbModule],
                    exports: [BcPageHeaderComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcPageHeaderComponent, BcPageHeaderModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-page-header.mjs.map
