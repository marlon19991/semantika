import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BcNotificationBehavior } from '@bancolombia/design-system-behaviors';
import { BcDialog } from '@bancolombia/design-system-web/bc-services';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Importa las Notificaciones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcNotificationsComponent
 * @implements {AfterViewInit}
 */
export class BcNotificationComponent extends BcDialog {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1ub3RpZmljYXRpb24vYmMtbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1ub3RpZmljYXRpb24vYmMtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7OztBQUV0RTs7Ozs7O0dBTUc7QUFNSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsUUFBUTtJQTBGbkQsWUFBb0IsTUFBdUI7UUFDekMsS0FBSyxFQUFFLENBQUM7UUFEVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQWxGM0MsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWOzs7O1dBSUc7UUFDSCxVQUFLLEdBQUc7WUFDTixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLGFBQWE7WUFDdEIsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQztRQUNEOzs7O1VBSUU7UUFDTSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCOzs7O1dBSUc7UUFDTSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25COzs7OztXQUtHO1FBQ00sU0FBSSxHQUFHLFVBQVUsQ0FBQztRQUMzQjs7Ozs7V0FLRztRQUNNLE9BQUUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5Qzs7Ozs7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QkE7MkZEWmEsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLGlCQUFpQixVQUVuQixFQUFFO3NHQTRCRCxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxFQUFFO3NCQUFWLEtBQUs7Z0JBcUJHLE1BQU07c0JBQWQsS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9JLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY05vdGlmaWNhdGlvbkJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEJjRGlhbG9nIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLXNlcnZpY2VzJztcblxuLyoqXG4gKiBJbXBvcnRhIGxhcyBOb3RpZmljYWNpb25lcyBjb24gbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNOb3RpZmljYXRpb25zQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtbm90aWZpY2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBCY05vdGlmaWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIEJjRGlhbG9nIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgLyoqXG4gICAqIENvbXBvcnRhbWllbnRvXG4gICAqXG4gICAqIEB0eXBlIHtCY05vdGlmaWNhdGlvbkJlaGF2aW9yfVxuICAgKiBAbWVtYmVyb2YgQmNOb3RpZmljYXRpb25zQ29tcG9uZW50XG4gICAqL1xuICBiY05vdGlmaWNhdGlvbkJlaGF2aW9yOiBCY05vdGlmaWNhdGlvbkJlaGF2aW9yO1xuICBpY29uID0gJyc7XG4gIC8qKlxuICAgKiBUaXBvcyBkZSBpY29ub3NcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTm90aWZpY2F0aW9uc0NvbXBvbmVudFxuICAgKi9cbiAgaWNvbnMgPSB7XG4gICAgZXJyb3I6ICdlcnJvcicsXG4gICAgc3VjY2VzczogJ2NoZWNrJyxcbiAgICBpbmZvOiAnaW5mbycsXG4gICAgd2FybmluZzogJ2V4Y2xhbWF0aW9uJyxcbiAgICBpbmFjdGl2ZTogJ2luZm8nLFxuICB9O1xuICAgLyoqXG4gICAqIFRpdHVsbyBkZSBsYSBub3RpZmljYWNpb25cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTm90aWZpY2F0aW9uc0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgLyoqXG4gICAqIFRleHRvIGRlIGxhIG5vdGlmaWNhY2lvblxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNOb3RpZmljYXRpb25zQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIC8qKlxuICAgKiBUaXBvIGRlIG5vdGlmaWNhY2lvbiBbICdlcnJvcicgfCAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnaW5hY3RpdmUnIChkZWZhdWx0KSBdXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY05vdGlmaWNhdGlvbnNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHR5cGUgPSAnaW5hY3RpdmUnO1xuICAvKipcbiAgICogSWQgZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTm90aWZpY2F0aW9uc0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuaGVscGVyLmdldElkKHRoaXMpO1xuICAvKipcbiAgICogSW5kaWNhIHNpIGxhIG5vdGlmaWNhY2lvbiBlcyBmaWphXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNOb3RpZmljYXRpb25zQ29tcG9uZW50XG4gICAqL1xuICBmaXhlZCA9IHRydWU7XG4gIC8qKlxuICAgKiBUaWVtcG8gZGUgY2VycmFkbyBkZSBsYSBub3RpZmljYWNpb25cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjTm90aWZpY2F0aW9uc0NvbXBvbmVudFxuICAgKi9cbiAgdGltZU91dCA9IDA7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgbGEgbm90aWZpY2FjaW9uIGVzIGVzdMOhdGljYSDDsyBpbmxpbmVcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY05vdGlmaWNhdGlvbnNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlubGluZSA9IGZhbHNlO1xuICAvKipcbiAgICogSW5kaWNhIHNpIGxhIG5vdGlmaWNhY2lvbiBlcyBlc3TDoXRpY2Egc2UgcHVlZGUgZGVzY2FydGFyIG8gY2VycmFyXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNOb3RpZmljYXRpb25zQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBkaXNtaXNzaWJsZSA9IGZhbHNlO1xuICAvKipcbiAgICogU2UgZWplY3V0YSBjdWFuZG8gbGEgbm90aWZpY2FjaW9uIGVzIGNlcnJhZGEsIGFwbGljYSBzb2xvIHBhcmEgbm90aWZpY2FjaW9ucyBpbmxpbmVcbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNOb3RpZmljYXRpb25zQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgb25jbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKlxuICAgKiBJbmRpY2EgZWwgZWxlbWVudG8gZGUgcmVmZXJlbmNpYSBwYXJhIGluc2VydGFyIGxhIG5vdGlmaWNhY2lvblxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGFueT59XG4gICAqIEBtZW1iZXJvZiBCY05vdGlmaWNhdGlvbnNDb21wb25lbnRcbiAgICovXG4gIGVsZW1lbnRSZWYgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlbHBlcjogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJjTm90aWZpY2F0aW9uQmVoYXZpb3IgPSBuZXcgQmNOb3RpZmljYXRpb25CZWhhdmlvcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5maXhlZCA9IHRoaXMuaW5saW5lIHx8IHRoaXMuZWxlbWVudFJlZiAhPT0gJycgPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5saW5lKSB7XG4gICAgICB0aGlzLmJjTm90aWZpY2F0aW9uQmVoYXZpb3Iuc2V0SWQodGhpcy5pZCk7XG4gICAgICB0aGlzLmJjTm90aWZpY2F0aW9uQmVoYXZpb3Iub25DbG9zZSgoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5vbmNsb3NlLmVtaXQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmJjTm90aWZpY2F0aW9uQmVoYXZpb3Iuc2V0VXAoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldEljb25CeVR5cGUoKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogVmFsaWRhciBpY29ubyBzZWfDum4gdGlwbyBkZSBub3RpZmljYWNpb25cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTm90aWZpY2F0aW9uc0NvbXBvbmVudFxuICAgKi9cbiAgc2V0SWNvbkJ5VHlwZSgpIHtcbiAgICB0aGlzLmljb24gPSB0aGlzLmljb25zW3RoaXMudHlwZV1cbiAgICAgID8gdGhpcy5pY29uc1t0aGlzLnR5cGVdXG4gICAgICA6IHRoaXMuaWNvbnMuaW5hY3RpdmU7XG4gIH1cbiAgLyoqXG4gICAqIEF0cmlidXRvcyBkZSBsYSBub3RpZmljYWNpb25cbiAgICpcbiAgICogQHBhcmFtIHsqfSBpbnB1dHNcbiAgICogQG1lbWJlcm9mIEJjTm90aWZpY2F0aW9uc0NvbXBvbmVudFxuICAgKi9cbiAgb25JbmplY3RJbnB1dHMoaW5wdXRzOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlkID0gaW5wdXRzLmlkO1xuICAgIHRoaXMudHlwZSA9IGlucHV0cy50eXBlO1xuICAgIHRoaXMudGV4dCA9IGlucHV0cy50ZXh0O1xuICAgIHRoaXMudGltZU91dCA9IGlucHV0cy50aWVtb3V0O1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGlucHV0cy5lbGVtZW50UmVmO1xuICAgIHRoaXMuY2xvc2VCeVRpbWVvdXQoKTtcbiAgfVxuICAvKipcbiAgICogQ2VycmFyIG5vdGlmaWNhY2lvblxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNOb3RpZmljYXRpb25zQ29tcG9uZW50XG4gICAqL1xuICBjbG9zZUl0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbmxpbmUpIHtcbiAgICAgIHRoaXMuY2xvc2UoJ3NhdmluZycpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FuY2VsYXIgbm90aWZpY2FjaW9uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY05vdGlmaWNhdGlvbnNDb21wb25lbnRcbiAgICovXG4gIGNhbmNlbEl0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlzbWlzcygnY2FuY2VsaW5nJyk7XG4gIH1cbiAgLyoqXG4gICAqIENlcnJhciBub3RpZmljYWNpb24gc2Vnw7puIHRpbWVvdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTm90aWZpY2F0aW9uc0NvbXBvbmVudFxuICAgKi9cbiAgY2xvc2VCeVRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMudGltZU91dCAmJiB0aGlzLnRpbWVPdXQgIT09IDApIHtcbiAgICAgIHRoaXMuYmNOb3RpZmljYXRpb25CZWhhdmlvci5zZXRUaW1lT3V0KHRoaXMudGltZU91dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSwgdGhpcy50aW1lT3V0KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiPGRpdlxuICBjbGFzcz1cImJjLW5vdGlmaWNhdGlvbi1hY3RpdmUgYmMtbm90aWZpY2F0aW9uLXt7IHR5cGUgfX1cIlxuICByb2xlPVwibm90aWZpY2F0aW9uXCJcbiAgW2lkXT1cImlkXCJcbiAgW25nQ2xhc3NdPVwie1xuICAgICdiYy1ub3RpZmljYXRpb24tZml4ZWQnOiBmaXhlZCxcbiAgICAnYmMtbm90aWZpY2F0aW9uLWlubGluZSc6IGlubGluZSxcbiAgICAnYmMtbm90aWZpY2F0aW9uLWRpc21pc3NpYmxlJzogZGlzbWlzc2libGVcbiAgfVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJiYy1ub3RpZmljYXRpb24tc3RhdHVzXCI+XG4gICAgPGVtIGNsYXNzPVwiYmMtaWNvblwiPnt7IGljb24gfX08L2VtPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJjLW5vdGlmaWNhdGlvbi1ib2R5XCI+XG4gICAgPGg1IGNsYXNzPVwidGl0bGVcIiBbaW5uZXJIVE1MXT1cInRpdGxlXCI+PC9oNT5cbiAgICA8cCBjbGFzcz1cInRleHRcIiBbaW5uZXJIVE1MXT1cInRleHRcIj48L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmMtbm90aWZpY2F0aW9uLWNsb3NlXCI+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJiYy1jbG9zZVwiXG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiXG4gICAgICAoY2xpY2spPVwiY2xvc2VJdCgpXCJcbiAgICA+XG4gICAgICA8ZW0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiYy1pY29uXCI+ZXJyb3I8L2VtPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19