import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcAlertBehavior } from '@bancolombia/design-system-behaviors';
import { BcDialog, BcDialogService } from '@bancolombia/design-system-web/bc-services';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * Las alertas corresponde a un cuadro de diálogo que disponibiliza
 * información de manera flotante o fija.
 *
 * @export
 * @class BcAlertsComponent
 * @implements {AfterViewInit}
 */
class BcAlertComponent extends BcDialog {
    constructor(helper) {
        super();
        this.helper = helper;
        this.icon = '';
        /**
         * Tipos de iconos
         *
         * @memberof BcAlertsComponent
         */
        this.icons = {
            error: 'alert',
            success: 'ok',
            info: 'info',
            warning: 'hand',
            inactive: 'megaphone',
        };
        /**
        * Título de la alerta.
        *
        * @memberof BcAlertsComponent
        */
        this.title = '';
        /**
         * Texto de la alerta.
         *
         * @memberof BcAlertsComponent
         */
        this.text = '';
        /**
       * Links en la alerta, solo se pintan los 2 primeros items del arreglo.
       *
       * @memberof BcAlertsComponent
       */
        this.links = [];
        /**
         * Tipo de alerta [ "error" | "success" | "info" | "warning" | "inactive" ].
         * @type {string}
         * @memberof BcAlertsComponent
         */
        this.type = 'inactive';
        /**
         * Id del componente.
         *
         * @type {string}
         * @memberof BcAlertsComponent
         */
        this.componentId = this.helper.getId(this);
        /**
         * Indica si la alerta es fija.
         * Si la alert es fija significa que aparecerá como un cuadro de
         * diálogo (popup) en la parte superior de la ventana; por el contrario si no
         * lo es, aparecerá insertada en el documento.
         *
         * @type {boolean}
         * @memberof BcAlertsComponent
         */
        this.fixed = true;
        /**
         * Tiempo de cerrado de la alerta en milisegundos.
         * @type {number}
         * @memberof BcAlertsComponent
         */
        this.timeOut = 0;
        /**
         * Indica si la alerta es estática o inline.
         * Si la alert es estática significa que aparecerá como un cuadro de
         * diálogo (popup) en la parte superior de la ventana; por el contrario si no
         * lo es, aparecerá insertada en el documento.
         *
         * @type {boolean}
         * @memberof BcAlertsComponent
         */
        this.inline = false;
        /**
         * Si la alerta es estática, indica si se puede descartar o cerrar.
         *
         * @type {boolean}
         * @memberof BcAlertsComponent
         */
        this.dismissible = false;
        /**
         * Se ejecuta cuando la alerta se cierra, aplica solo para alertas inline.
         *
         * @type {EventEmitter<any>}
         * @memberof BcAlertsComponent
         */
        this.onclose = new EventEmitter();
        /**
         * Indica el id del elemento de referencia para insertar la alerta
         *
         * @type {EventEmitter<any>}
         * @memberof BcAlertsComponent
         */
        this.elementRef = '';
        this.bcAlertBehavior = new BcAlertBehavior();
    }
    ngOnInit() {
        this.fixed = this.inline === true || (this.elementRef && this.elementRef !== '') ? false : true;
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
     * @memberof BcAlertsComponent
     */
    setIconByType() {
        this.icon = this.icons[this.type]
            ? this.icons[this.type]
            : this.icons.inactive;
    }
    /**
     * Atributos de la alerta
     *
     * @param {*} inputs
     * @memberof BcAlertsComponent
     */
    onInjectInputs(inputs) {
        this.componentId = inputs.id;
        this.type = inputs.type;
        this.title = inputs.title;
        this.text = inputs.text;
        this.links = inputs.links;
        this.timeOut = inputs.timeout;
        this.elementRef = inputs.elementRef;
        this.closeByTimeout();
    }
    /**
     * Cerrar alerta
     *
     * @memberof BcAlertsComponent
     */
    closeIt() {
        let setTimeOut = this.inline ? 0 : 300;
        this.bcAlertBehavior.close();
        setTimeout(() => {
            if (!this.inline) {
                this.close('saving');
            }
        }, setTimeOut);
    }
    /**
     * Cancelar alerta
     *
     * @memberof BcAlertsComponent
     */
    cancelIt() {
        this.dismiss('canceling');
    }
    /**
     * Cerrar alerta según timeout
     *
     * @memberof BcAlertsComponent
     */
    closeByTimeout() {
        if (this.timeOut && this.timeOut !== 0) {
            this.bcAlertBehavior.setTimeOut(this.timeOut);
            setTimeout(() => {
                this.closeIt();
            }, this.timeOut);
        }
    }
}
BcAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAlertComponent, selector: "bc-alert", inputs: { title: "title", text: "text", links: "links", type: "type", componentId: "componentId", inline: "inline", dismissible: "dismissible" }, outputs: { onclose: "onclose" }, usesInheritance: true, ngImport: i0, template: "<article class=\"bc-alert-active bc-alert-{{ type }}\" role=\"alert\" [id]=\"componentId\" [ngClass]=\"{\n    'bc-alert-fixed': fixed,\n    'bc-alert-inline': inline,\n    'bc-alert-dismissible': dismissible}\">\n    <section class=\"bc-alert-status\">\n        <em class=\"bc-icon bc-st\">{{ icon }}</em>\n    </section>\n    <section class=\"bc-alert-body\">\n        <section class=\"bc-alert-content\">\n            <p class=\"bc-alert-title\" [innerHTML]=\"title\"></p>\n            <p class=\"bc-alert-text\" [innerHTML]=\"text\"></p>\n        </section>\n        <ul>\n            <li *ngFor=\"let l of links | slice: 0:2\">\n                <a [href]=\"l.url\" target=\"_blank\">{{ l.text }}</a>\n            </li>\n        </ul>\n    </section>\n    <section class=\"bc-my-2 bc-me-2\">\n        <button type=\"button\" class=\"bc-alert-close\" (click)=\"closeIt()\">\n            <em aria-label=\"Cerrar\" class=\"bc-icon\">error</em>\n        </button>\n    </section>\n</article>", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "slice": i2.SlicePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-alert', styles: [], template: "<article class=\"bc-alert-active bc-alert-{{ type }}\" role=\"alert\" [id]=\"componentId\" [ngClass]=\"{\n    'bc-alert-fixed': fixed,\n    'bc-alert-inline': inline,\n    'bc-alert-dismissible': dismissible}\">\n    <section class=\"bc-alert-status\">\n        <em class=\"bc-icon bc-st\">{{ icon }}</em>\n    </section>\n    <section class=\"bc-alert-body\">\n        <section class=\"bc-alert-content\">\n            <p class=\"bc-alert-title\" [innerHTML]=\"title\"></p>\n            <p class=\"bc-alert-text\" [innerHTML]=\"text\"></p>\n        </section>\n        <ul>\n            <li *ngFor=\"let l of links | slice: 0:2\">\n                <a [href]=\"l.url\" target=\"_blank\">{{ l.text }}</a>\n            </li>\n        </ul>\n    </section>\n    <section class=\"bc-my-2 bc-me-2\">\n        <button type=\"button\" class=\"bc-alert-close\" (click)=\"closeIt()\">\n            <em aria-label=\"Cerrar\" class=\"bc-icon\">error</em>\n        </button>\n    </section>\n</article>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { title: [{
                type: Input
            }], text: [{
                type: Input
            }], links: [{
                type: Input
            }], type: [{
                type: Input
            }], componentId: [{
                type: Input
            }], inline: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], onclose: [{
                type: Output
            }] } });

/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * Las alertas corresponde a un cuadro de diálogo que disponibiliza
 * información de manera flotante o fija.
 * @param text Mensaje a mostrar en la alerta
 * @param typeAlert Tipo de alerta
 *
 * @description Alerta para error
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de error" typeAlert='error'></bc-alert>
 *
 * @description Alerta para éxito
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de exito" typeAlert='success'></bc-alert>
 *
 * @description Alerta para información
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de información" typeAlert='info'></bc-alert>
 *
 * @description Alerta para advertencia
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de advertencia" typeAlert='warning'></bc-alert>
 *
 * @description Alerta para inactividad
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de informativo" typeAlert='inactive'></bc-alert>
 *
 * @author: Bancolombia S.A
 */
class BcAlertModule {
}
BcAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertModule, declarations: [BcAlertComponent], imports: [BcIconModule, BcButtonModule, CommonModule], exports: [BcAlertComponent] });
BcAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertModule, providers: [BcDialogService], imports: [[BcIconModule, BcButtonModule, CommonModule,]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcAlertComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule,],
                    exports: [BcAlertComponent],
                    providers: [BcDialogService]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcAlertComponent, BcAlertModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-alert.mjs.map
