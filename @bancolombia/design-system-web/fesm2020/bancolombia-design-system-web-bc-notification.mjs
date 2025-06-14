import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcNotificationBehavior } from '@bancolombia/design-system-behaviors';
import { BcDialog } from '@bancolombia/design-system-web/bc-services';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

class BcNotificationService {
}
BcNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BcNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/**
 * Importa las Notificaciones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcNotificationsComponent
 * @implements {AfterViewInit}
 */
class BcNotificationComponent extends BcDialog {
    constructor(helper) {
        super();
        this.helper = helper;
        this.icon = '';
        /**
         * Tipos de iconos
         *
         * @memberof BcNotificationsComponent
         */
        this.icons = {
            error: 'error',
            success: 'check',
            info: 'info',
            warning: 'exclamation',
            inactive: 'info',
        };
        /**
        * Titulo de la notificacion
        *
        * @memberof BcNotificationsComponent
        */
        this.title = '';
        /**
         * Texto de la notificacion
         *
         * @memberof BcNotificationsComponent
         */
        this.text = '';
        /**
         * Tipo de notificacion [ 'error' | 'success' | 'info' | 'warning' | 'inactive' (default) ]
         *
         * @type {string}
         * @memberof BcNotificationsComponent
         */
        this.type = 'inactive';
        /**
         * Id del componente
         *
         * @type {string}
         * @memberof BcNotificationsComponent
         */
        this.id = this.helper.getId(this);
        /**
         * Indica si la notificacion es fija
         *
         * @type {boolean}
         * @memberof BcNotificationsComponent
         */
        this.fixed = true;
        /**
         * Tiempo de cerrado de la notificacion
         *
         * @type {number}
         * @memberof BcNotificationsComponent
         */
        this.timeOut = 0;
        /**
         * Indica si la notificacion es estática ó inline
         *
         * @type {boolean}
         * @memberof BcNotificationsComponent
         */
        this.inline = false;
        /**
         * Indica si la notificacion es estática se puede descartar o cerrar
         *
         * @type {boolean}
         * @memberof BcNotificationsComponent
         */
        this.dismissible = false;
        /**
         * Se ejecuta cuando la notificacion es cerrada, aplica solo para notificacions inline
         *
         * @type {EventEmitter<any>}
         * @memberof BcNotificationsComponent
         */
        this.onclose = new EventEmitter();
        /**
         * Indica el elemento de referencia para insertar la notificacion
         *
         * @type {EventEmitter<any>}
         * @memberof BcNotificationsComponent
         */
        this.elementRef = '';
        this.bcNotificationBehavior = new BcNotificationBehavior();
    }
    ngOnInit() {
        this.fixed = this.inline || this.elementRef !== '' ? false : true;
    }
    ngAfterViewInit() {
        if (this.inline) {
            this.bcNotificationBehavior.setId(this.id);
            this.bcNotificationBehavior.onClose((event) => {
                this.onclose.emit(event);
            });
            this.bcNotificationBehavior.setUp();
        }
        setTimeout(() => {
            this.setIconByType();
        });
    }
    /**
     * Validar icono según tipo de notificacion
     *
     * @memberof BcNotificationsComponent
     */
    setIconByType() {
        this.icon = this.icons[this.type]
            ? this.icons[this.type]
            : this.icons.inactive;
    }
    /**
     * Atributos de la notificacion
     *
     * @param {*} inputs
     * @memberof BcNotificationsComponent
     */
    onInjectInputs(inputs) {
        this.id = inputs.id;
        this.type = inputs.type;
        this.text = inputs.text;
        this.timeOut = inputs.tiemout;
        this.elementRef = inputs.elementRef;
        this.closeByTimeout();
    }
    /**
     * Cerrar notificacion
     *
     * @memberof BcNotificationsComponent
     */
    closeIt() {
        if (!this.inline) {
            this.close('saving');
        }
    }
    /**
     * Cancelar notificacion
     *
     * @memberof BcNotificationsComponent
     */
    cancelIt() {
        this.dismiss('canceling');
    }
    /**
     * Cerrar notificacion según timeout
     *
     * @memberof BcNotificationsComponent
     */
    closeByTimeout() {
        if (this.timeOut && this.timeOut !== 0) {
            this.bcNotificationBehavior.setTimeOut(this.timeOut);
            setTimeout(() => {
                this.close();
            }, this.timeOut);
        }
    }
}
BcNotificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcNotificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcNotificationComponent, selector: "bc-notification", inputs: { title: "title", text: "text", type: "type", id: "id", inline: "inline", dismissible: "dismissible" }, outputs: { onclose: "onclose" }, usesInheritance: true, ngImport: i0, template: "<div\n  class=\"bc-notification-active bc-notification-{{ type }}\"\n  role=\"notification\"\n  [id]=\"id\"\n  [ngClass]=\"{\n    'bc-notification-fixed': fixed,\n    'bc-notification-inline': inline,\n    'bc-notification-dismissible': dismissible\n  }\"\n>\n  <div class=\"bc-notification-status\">\n    <em class=\"bc-icon\">{{ icon }}</em>\n  </div>\n  <div class=\"bc-notification-body\">\n    <h5 class=\"title\" [innerHTML]=\"title\"></h5>\n    <p class=\"text\" [innerHTML]=\"text\"></p>\n  </div>\n  <div class=\"bc-notification-close\">\n    <button\n      class=\"bc-close\"\n      role=\"button\"\n      tabindex=\"0\"\n      aria-pressed=\"false\"\n      (click)=\"closeIt()\"\n    >\n      <em aria-hidden=\"true\" class=\"bc-icon\">error</em>\n    </button>\n  </div>\n</div>\n", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-notification', styles: [], template: "<div\n  class=\"bc-notification-active bc-notification-{{ type }}\"\n  role=\"notification\"\n  [id]=\"id\"\n  [ngClass]=\"{\n    'bc-notification-fixed': fixed,\n    'bc-notification-inline': inline,\n    'bc-notification-dismissible': dismissible\n  }\"\n>\n  <div class=\"bc-notification-status\">\n    <em class=\"bc-icon\">{{ icon }}</em>\n  </div>\n  <div class=\"bc-notification-body\">\n    <h5 class=\"title\" [innerHTML]=\"title\"></h5>\n    <p class=\"text\" [innerHTML]=\"text\"></p>\n  </div>\n  <div class=\"bc-notification-close\">\n    <button\n      class=\"bc-close\"\n      role=\"button\"\n      tabindex=\"0\"\n      aria-pressed=\"false\"\n      (click)=\"closeIt()\"\n    >\n      <em aria-hidden=\"true\" class=\"bc-icon\">error</em>\n    </button>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { title: [{
                type: Input
            }], text: [{
                type: Input
            }], type: [{
                type: Input
            }], id: [{
                type: Input
            }], inline: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], onclose: [{
                type: Output
            }] } });

/**
 * Importa las notificaciones con los diseños de Bancolombia S.A.
 * @param text Mensaje a mostrar en la notification
 * @param typeNotification Tipo de notification
 *
 * @description Notificacion para error
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de error" typeNotification='error'></bc-notification>
 *
 * @description Notificacion para éxito
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de exito" typeNotification='success'></bc-notification>
 *
 * @description Notificacion para información
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de información" typeNotification='info'></bc-notification>
 *
 * @description Notificacion para advertencia
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de advertencia" typeNotification='warning'></bc-notification>
 *
 * @description Notificacion para inactividad
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de informativo" typeNotification='inactive'></bc-notification>
 *
 * @author: Bancolombia S.A
 */
class BcNotificationModule {
}
BcNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationModule, declarations: [BcNotificationComponent], imports: [BcIconModule, BcButtonModule, CommonModule], exports: [BcNotificationComponent] });
BcNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationModule, imports: [[BcIconModule, BcButtonModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcNotificationComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule],
                    exports: [BcNotificationComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcNotificationComponent, BcNotificationModule, BcNotificationService };
//# sourceMappingURL=bancolombia-design-system-web-bc-notification.mjs.map
