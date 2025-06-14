import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcInlineAlertBehavior } from '@bancolombia/design-system-behaviors';
import { BcDialog } from '@bancolombia/design-system-web/bc-services';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-transaction-status';
import { BcTransactionStatusModule } from '@bancolombia/design-system-web/bc-transaction-status';
import * as i3 from '@bancolombia/design-system-web/bc-icon-button';
import { BcIconButtonModule } from '@bancolombia/design-system-web/bc-icon-button';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@bancolombia/design-system-web/bc-link';
import { BcLinkModule } from '@bancolombia/design-system-web/bc-link';

/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * Las alertas corresponde a un cuadro de diálogo que disponibiliza
 * información de manera flotante o fija.
 *
 * @export
 * @class BcInlineAlertComponent
 * @implements {AfterViewInit}
 */
class BcInlineAlertComponent extends BcDialog {
    constructor(helper) {
        super();
        this.helper = helper;
        this.icon = '';
        /**
         * Tipos de iconos
         *
         * @memberof BcInlineAlertComponent
         */
        this.icons = {
            error: 'error',
            success: 'ok',
            info: 'idea',
            warning: 'hand'
        };
        /**
        * Título de la alerta.
        *
        * @memberof BcInlineAlertComponent
        */
        this.title = '';
        /**
         * Texto de la alerta.
         *
         * @memberof BcInlineAlertComponent
         */
        this.text = '';
        /**
         *
         * Variante de color secundaria en tema light/dark
         * @type {boolean}
         * @memberof BcInlineAlertComponent
         */
        this.secondColor = false;
        /**
         * Links en la alerta, solo se pintan los 2 primeros items del arreglo.
         * @type: Array<Link>
         * @memberof BcInlineAlertComponent
         */
        this.links = [];
        /**
         *
         * Id del componente.
         *
         * @type {string}
         * @memberof BcInlineAlertComponent
         */
        this.componentId = this.helper.getId(this);
        /**
         *
         * Aria Label del botón de cierre
         *
         * @type {string}
         * @memberof BcInlineAlertComponent
         */
        this.lectorBtnClose = "Cerrar alerta";
        /**
         *
         * Aria Label del componente Alert
         *
         * @type {string}
         * @memberof BcInlineAlertComponent
         */
        this.lectorAlert = "Alerta preventiva";
        /**
         * Si la alerta es estática, indica si se puede descartar o cerrar.
         *
         * @type {boolean}
         * @memberof BcInlineAlertComponent
         */
        this.dismissible = false;
        /**
         * Se ejecuta cuando la alerta se cierra, aplica solo para alertas inline.
         *
         * @type {EventEmitter<any>}
         * @memberof BcInlineAlertComponent
         */
        this.onclose = new EventEmitter();
        /**
         * Se ejecuta cuando se le da click a un link dentro del inline.
         *
         * @type {EventEmitter<any>}
         * @memberof BcInlineAlertComponent
         */
        this.linkClick = new EventEmitter();
        /**
         * Indica el id del elemento de referencia para insertar la alerta
         *
         * @type {EventEmitter<any>}
         * @memberof BcInlineAlertComponent
         */
        this.elementRef = '';
        this.bcAlertBehavior = new BcInlineAlertBehavior();
    }
    ngAfterViewInit() {
        this.bcAlertBehavior.setId(this.componentId);
        this.bcAlertBehavior.onClose((event) => {
            this.onclose.emit(event);
        });
        this.bcAlertBehavior.setUp();
        setTimeout(() => {
            this.setIconByType();
        });
    }
    /**
     * Validar icono según tipo de alerta
     *
     * @memberof BcInlineAlertComponent
     */
    setIconByType() {
        this.icon = this.icons[this.type]
            ? this.icons[this.type]
            : this.icons.warning;
    }
    /**
     * Atributos de la alerta
     *
     * @param {*} inputs
     * @memberof BcInlineAlertComponent
     */
    onInjectInputs(inputs) {
        this.componentId = inputs.id;
        this.type = inputs.type;
        this.title = inputs.title;
        this.text = inputs.text;
        this.links = inputs.links;
        this.elementRef = inputs.elementRef;
        this.dismissible = inputs.dismissible;
        this.lectorAlert = inputs.lectorAlerta;
        this.lectorBtnClose = inputs.lectorBtnClose;
    }
    /**
     * Cerrar alerta
     *
     * @memberof BcInlineAlertComponent
     */
    closeIt() {
        this.bcAlertBehavior.close();
    }
    /**
     * Cancelar alerta
     *
     * @memberof BcInlineAlertComponent
     */
    cancelIt() {
        this.dismiss('canceling');
    }
    /**
     * Emite el evento cuando se le da click a un link
     *
     * @memberof BcInlineAlertComponent
     */
    clickEventLink(event) {
        this.linkClick.emit({ text: event.target.innerText, path: event.target.parentElement.href });
    }
}
BcInlineAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcInlineAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInlineAlertComponent, selector: "bc-inline-alert", inputs: { title: "title", text: "text", secondColor: "secondColor", links: "links", type: "type", componentId: "componentId", lectorBtnClose: "lectorBtnClose", lectorAlert: "lectorAlert", dismissible: "dismissible" }, outputs: { onclose: "onclose", linkClick: "linkClick" }, usesInheritance: true, ngImport: i0, template: "<article class=\"bc-inline-alert-active bc-inline-alert\" role=\"alert\" [id]=\"componentId\"\n    [ngClass]=\"{'bc-inline-alert-second-color': secondColor}\" [attr.aria-label]=\"lectorAlert\">\n    <section class=\"bc-inline-alert-status\">\n        <bc-transaction-status size=\"sm\" customIcon=\"{{ icon }}\" status=\"{{ type }}\"></bc-transaction-status>\n    </section>\n    <section class=\"bc-inline-alert-body\">\n        <section class=\"bc-inline-alert-content\">\n            <p class=\"bc-inline-alert-title\">{{ title }}</p>\n            <p class=\"bc-inline-alert-text\">{{ text }}</p>\n        </section>\n        <ul>\n            <li *ngFor=\"let l of links | slice: 0:2\">\n              <a *ngIf=\"l.url\" bc-link class=\"bc-inline-alert-link\" href=\"{{ l.url }}\" sizeLink=\"underlineLarge\"\n                target=\"_blank\" rel=\"noopener noreferrer\" typeLink=\"underline\" (click)=\"clickEventLink($event)\">\n                <u>{{ l.text }}</u>\n              </a>\n              <a *ngIf=\"!l.url\" bc-link class=\"bc-inline-alert-link\" sizeLink=\"underlineLarge\" target=\"_blank\"\n                rel=\"noopener noreferrer\" typeLink=\"underline\" (click)=\"clickEventLink($event)\">\n                <u>{{ l.text }}</u>\n              </a>\n            </li>\n        </ul>\n    </section>\n    <section *ngIf=\"dismissible\" class=\"bc-inline-alert-close\">\n        <bc-icon-button (click)=\"closeIt()\" size=\"small\" type=\"ghost\" customIcon=\"error\"\n            ariaLabel=\"{{ lectorBtnClose}}\">\n        </bc-icon-button>\n    </section>\n</article>\n", components: [{ type: i2.BcTransactionStatusComponent, selector: "bc-transaction-status", inputs: ["status", "size", "customIcon", "texto", "color", "border", "textAriaLabel"] }, { type: i3.BcIconButtonComponent, selector: "bc-icon-button", inputs: ["type", "color", "size", "shadow", "customIcon", "statusButton", "seleted", "selected", "ariaLabel"] }], directives: [{ type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.BcLinkDirective, selector: "[bc-link]", inputs: ["typeLink", "sizeLink", "class"] }], pipes: { "slice": i4.SlicePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-inline-alert', styles: [], template: "<article class=\"bc-inline-alert-active bc-inline-alert\" role=\"alert\" [id]=\"componentId\"\n    [ngClass]=\"{'bc-inline-alert-second-color': secondColor}\" [attr.aria-label]=\"lectorAlert\">\n    <section class=\"bc-inline-alert-status\">\n        <bc-transaction-status size=\"sm\" customIcon=\"{{ icon }}\" status=\"{{ type }}\"></bc-transaction-status>\n    </section>\n    <section class=\"bc-inline-alert-body\">\n        <section class=\"bc-inline-alert-content\">\n            <p class=\"bc-inline-alert-title\">{{ title }}</p>\n            <p class=\"bc-inline-alert-text\">{{ text }}</p>\n        </section>\n        <ul>\n            <li *ngFor=\"let l of links | slice: 0:2\">\n              <a *ngIf=\"l.url\" bc-link class=\"bc-inline-alert-link\" href=\"{{ l.url }}\" sizeLink=\"underlineLarge\"\n                target=\"_blank\" rel=\"noopener noreferrer\" typeLink=\"underline\" (click)=\"clickEventLink($event)\">\n                <u>{{ l.text }}</u>\n              </a>\n              <a *ngIf=\"!l.url\" bc-link class=\"bc-inline-alert-link\" sizeLink=\"underlineLarge\" target=\"_blank\"\n                rel=\"noopener noreferrer\" typeLink=\"underline\" (click)=\"clickEventLink($event)\">\n                <u>{{ l.text }}</u>\n              </a>\n            </li>\n        </ul>\n    </section>\n    <section *ngIf=\"dismissible\" class=\"bc-inline-alert-close\">\n        <bc-icon-button (click)=\"closeIt()\" size=\"small\" type=\"ghost\" customIcon=\"error\"\n            ariaLabel=\"{{ lectorBtnClose}}\">\n        </bc-icon-button>\n    </section>\n</article>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { title: [{
                type: Input
            }], text: [{
                type: Input
            }], secondColor: [{
                type: Input
            }], links: [{
                type: Input
            }], type: [{
                type: Input
            }], componentId: [{
                type: Input
            }], lectorBtnClose: [{
                type: Input
            }], lectorAlert: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], onclose: [{
                type: Output
            }], linkClick: [{
                type: Output
            }] } });

class BcInlineAlertModule {
}
BcInlineAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInlineAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertModule, declarations: [BcInlineAlertComponent], imports: [BcLinkModule, BcIconButtonModule, BcTransactionStatusModule, CommonModule], exports: [BcInlineAlertComponent] });
BcInlineAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertModule, imports: [[BcLinkModule, BcIconButtonModule, BcTransactionStatusModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInlineAlertComponent],
                    imports: [BcLinkModule, BcIconButtonModule, BcTransactionStatusModule, CommonModule],
                    exports: [BcInlineAlertComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInlineAlertComponent, BcInlineAlertModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-inline-alert.mjs.map
