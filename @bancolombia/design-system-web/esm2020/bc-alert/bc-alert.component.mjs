import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BcAlertBehavior } from '@bancolombia/design-system-behaviors';
import { BcDialog } from '@bancolombia/design-system-web/bc-services';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * Las alertas corresponde a un cuadro de diálogo que disponibiliza
 * información de manera flotante o fija.
 *
 * @export
 * @class BcAlertsComponent
 * @implements {AfterViewInit}
 */
export class BcAlertComponent extends BcDialog {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWFsZXJ0L2JjLWFsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hbGVydC9iYy1hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7O0FBRXRFOzs7Ozs7OztHQVFHO0FBTUgsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFFBQVE7SUFvRzVDLFlBQW9CLE1BQXVCO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUE1RjNDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVjs7OztXQUlHO1FBQ0gsVUFBSyxHQUFHO1lBQ04sS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsV0FBVztTQUN0QixDQUFDO1FBQ0Y7Ozs7VUFJRTtRQUNPLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEI7Ozs7V0FJRztRQUNNLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDbkI7Ozs7U0FJQztRQUNRLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBQ3RDOzs7O1dBSUc7UUFDTSxTQUFJLEdBQVcsVUFBVSxDQUFDO1FBQ25DOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RDs7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Q1osSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7NkdBbkxVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLDBQQ25CN0IsZytCQXVCVTsyRkRKRyxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0UsVUFBVSxVQUVaLEVBQUU7c0dBNEJELEtBQUs7c0JBQWIsS0FBSztnQkFNRyxJQUFJO3NCQUFaLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQTBCRyxNQUFNO3NCQUFkLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFPSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNBbGVydEJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEJjRGlhbG9nIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLXNlcnZpY2VzJztcblxuLyoqXG4gKiBJbXBvcnRhIGxhcyBhbGVydGFzIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICogTGFzIGFsZXJ0YXMgY29ycmVzcG9uZGUgYSB1biBjdWFkcm8gZGUgZGnDoWxvZ28gcXVlIGRpc3BvbmliaWxpemFcbiAqIGluZm9ybWFjacOzbiBkZSBtYW5lcmEgZmxvdGFudGUgbyBmaWphLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0FsZXJ0c0NvbXBvbmVudFxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEJjQWxlcnRDb21wb25lbnQgZXh0ZW5kcyBCY0RpYWxvZyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDb21wb3J0YW1pZW50b1xuICAgKlxuICAgKiBAdHlwZSB7QmNBbGVydEJlaGF2aW9yfVxuICAgKiBAbWVtYmVyb2YgQmNBbGVydHNDb21wb25lbnRcbiAgICovXG4gIGJjQWxlcnRCZWhhdmlvcjogQmNBbGVydEJlaGF2aW9yO1xuICBpY29uID0gJyc7XG4gIC8qKlxuICAgKiBUaXBvcyBkZSBpY29ub3NcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjQWxlcnRzQ29tcG9uZW50XG4gICAqL1xuICBpY29ucyA9IHtcbiAgICBlcnJvcjogJ2FsZXJ0JyxcbiAgICBzdWNjZXNzOiAnb2snLFxuICAgIGluZm86ICdpbmZvJyxcbiAgICB3YXJuaW5nOiAnaGFuZCcsXG4gICAgaW5hY3RpdmU6ICdtZWdhcGhvbmUnLFxuICB9O1xuICAvKipcbiAgKiBUw610dWxvIGRlIGxhIGFsZXJ0YS5cbiAgKlxuICAqIEBtZW1iZXJvZiBCY0FsZXJ0c0NvbXBvbmVudFxuICAqL1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICAvKipcbiAgICogVGV4dG8gZGUgbGEgYWxlcnRhLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNBbGVydHNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgLyoqXG4gKiBMaW5rcyBlbiBsYSBhbGVydGEsIHNvbG8gc2UgcGludGFuIGxvcyAyIHByaW1lcm9zIGl0ZW1zIGRlbCBhcnJlZ2xvLlxuICpcbiAqIEBtZW1iZXJvZiBCY0FsZXJ0c0NvbXBvbmVudFxuICovXG4gIEBJbnB1dCgpIGxpbmtzOiBBcnJheTxMaW5rQWxlcnQ+ID0gW107XG4gIC8qKlxuICAgKiBUaXBvIGRlIGFsZXJ0YSBbIFwiZXJyb3JcIiB8IFwic3VjY2Vzc1wiIHwgXCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5hY3RpdmVcIiBdLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNBbGVydHNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdpbmFjdGl2ZSc7XG4gIC8qKlxuICAgKiBJZCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQWxlcnRzQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5oZWxwZXIuZ2V0SWQodGhpcyk7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgbGEgYWxlcnRhIGVzIGZpamEuXG4gICAqIFNpIGxhIGFsZXJ0IGVzIGZpamEgc2lnbmlmaWNhIHF1ZSBhcGFyZWNlcsOhIGNvbW8gdW4gY3VhZHJvIGRlIFxuICAgKiBkacOhbG9nbyAocG9wdXApIGVuIGxhIHBhcnRlIHN1cGVyaW9yIGRlIGxhIHZlbnRhbmE7IHBvciBlbCBjb250cmFyaW8gc2kgbm9cbiAgICogbG8gZXMsIGFwYXJlY2Vyw6EgaW5zZXJ0YWRhIGVuIGVsIGRvY3VtZW50by5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY0FsZXJ0c0NvbXBvbmVudFxuICAgKi9cbiAgZml4ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogVGllbXBvIGRlIGNlcnJhZG8gZGUgbGEgYWxlcnRhIGVuIG1pbGlzZWd1bmRvcy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjQWxlcnRzQ29tcG9uZW50XG4gICAqL1xuICB0aW1lT3V0OiBudW1iZXIgPSAwO1xuICAvKipcbiAgICogSW5kaWNhIHNpIGxhIGFsZXJ0YSBlcyBlc3TDoXRpY2EgbyBpbmxpbmUuXG4gICAqIFNpIGxhIGFsZXJ0IGVzIGVzdMOhdGljYSBzaWduaWZpY2EgcXVlIGFwYXJlY2Vyw6EgY29tbyB1biBjdWFkcm8gZGUgXG4gICAqIGRpw6Fsb2dvIChwb3B1cCkgZW4gbGEgcGFydGUgc3VwZXJpb3IgZGUgbGEgdmVudGFuYTsgcG9yIGVsIGNvbnRyYXJpbyBzaSBub1xuICAgKiBsbyBlcywgYXBhcmVjZXLDoSBpbnNlcnRhZGEgZW4gZWwgZG9jdW1lbnRvLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjQWxlcnRzQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFNpIGxhIGFsZXJ0YSBlcyBlc3TDoXRpY2EsIGluZGljYSBzaSBzZSBwdWVkZSBkZXNjYXJ0YXIgbyBjZXJyYXIuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNBbGVydHNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRpc21pc3NpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBTZSBlamVjdXRhIGN1YW5kbyBsYSBhbGVydGEgc2UgY2llcnJhLCBhcGxpY2Egc29sbyBwYXJhIGFsZXJ0YXMgaW5saW5lLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGFueT59XG4gICAqIEBtZW1iZXJvZiBCY0FsZXJ0c0NvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKipcbiAgICogSW5kaWNhIGVsIGlkIGRlbCBlbGVtZW50byBkZSByZWZlcmVuY2lhIHBhcmEgaW5zZXJ0YXIgbGEgYWxlcnRhXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8YW55Pn1cbiAgICogQG1lbWJlcm9mIEJjQWxlcnRzQ29tcG9uZW50XG4gICAqL1xuICBlbGVtZW50UmVmOiBhbnkgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlbHBlcjogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJjQWxlcnRCZWhhdmlvciA9IG5ldyBCY0FsZXJ0QmVoYXZpb3IoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZml4ZWQgPSB0aGlzLmlubGluZSA9PT0gdHJ1ZSB8fCAodGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZiAhPT0gJycpID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmNBbGVydEJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuYmNBbGVydEJlaGF2aW9yLm9uQ2xvc2UoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMub25jbG9zZS5lbWl0KGV2ZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmJjQWxlcnRCZWhhdmlvci5zZXRVcCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRJY29uQnlUeXBlKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFZhbGlkYXIgaWNvbm8gc2Vnw7puIHRpcG8gZGUgYWxlcnRhXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0FsZXJ0c0NvbXBvbmVudFxuICAgKi9cbiAgc2V0SWNvbkJ5VHlwZSgpIHtcbiAgICB0aGlzLmljb24gPSB0aGlzLmljb25zW3RoaXMudHlwZV1cbiAgICAgID8gdGhpcy5pY29uc1t0aGlzLnR5cGVdXG4gICAgICA6IHRoaXMuaWNvbnMuaW5hY3RpdmU7XG4gIH1cbiAgLyoqXG4gICAqIEF0cmlidXRvcyBkZSBsYSBhbGVydGFcbiAgICpcbiAgICogQHBhcmFtIHsqfSBpbnB1dHNcbiAgICogQG1lbWJlcm9mIEJjQWxlcnRzQ29tcG9uZW50XG4gICAqL1xuICBvbkluamVjdElucHV0cyhpbnB1dHM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSBpbnB1dHMuaWQ7XG4gICAgdGhpcy50eXBlID0gaW5wdXRzLnR5cGU7XG4gICAgdGhpcy50aXRsZSA9IGlucHV0cy50aXRsZTtcbiAgICB0aGlzLnRleHQgPSBpbnB1dHMudGV4dDtcbiAgICB0aGlzLmxpbmtzID0gaW5wdXRzLmxpbmtzO1xuICAgIHRoaXMudGltZU91dCA9IGlucHV0cy50aW1lb3V0O1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGlucHV0cy5lbGVtZW50UmVmO1xuICAgIHRoaXMuY2xvc2VCeVRpbWVvdXQoKTtcbiAgfVxuICAvKipcbiAgICogQ2VycmFyIGFsZXJ0YVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNBbGVydHNDb21wb25lbnRcbiAgICovXG4gIGNsb3NlSXQoKTogdm9pZCB7XG4gICAgbGV0IHNldFRpbWVPdXQ6IG51bWJlciA9IHRoaXMuaW5saW5lID8gMCA6IDMwMDtcbiAgICB0aGlzLmJjQWxlcnRCZWhhdmlvci5jbG9zZSgpO1xuICAgIHNldFRpbWVvdXQoKCk9PnsgICAgXG4gICAgICBpZiAoIXRoaXMuaW5saW5lKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoJ3NhdmluZycpO1xuICAgICAgfX0sIHNldFRpbWVPdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbGFyIGFsZXJ0YVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNBbGVydHNDb21wb25lbnRcbiAgICovXG4gIGNhbmNlbEl0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlzbWlzcygnY2FuY2VsaW5nJyk7XG4gIH1cbiAgLyoqXG4gICAqIENlcnJhciBhbGVydGEgc2Vnw7puIHRpbWVvdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjQWxlcnRzQ29tcG9uZW50XG4gICAqL1xuICBjbG9zZUJ5VGltZW91dCgpIHtcbiAgICBpZiAodGhpcy50aW1lT3V0ICYmIHRoaXMudGltZU91dCAhPT0gMCkge1xuICAgICAgdGhpcy5iY0FsZXJ0QmVoYXZpb3Iuc2V0VGltZU91dCh0aGlzLnRpbWVPdXQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2VJdCgpO1xuICAgICAgfSwgdGhpcy50aW1lT3V0KTtcbiAgICB9XG4gIH1cbn1cblxuaW50ZXJmYWNlIExpbmtBbGVydCB7XG4gIHVybDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59IiwiPGFydGljbGUgY2xhc3M9XCJiYy1hbGVydC1hY3RpdmUgYmMtYWxlcnQte3sgdHlwZSB9fVwiIHJvbGU9XCJhbGVydFwiIFtpZF09XCJjb21wb25lbnRJZFwiIFtuZ0NsYXNzXT1cIntcbiAgICAnYmMtYWxlcnQtZml4ZWQnOiBmaXhlZCxcbiAgICAnYmMtYWxlcnQtaW5saW5lJzogaW5saW5lLFxuICAgICdiYy1hbGVydC1kaXNtaXNzaWJsZSc6IGRpc21pc3NpYmxlfVwiPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtYWxlcnQtc3RhdHVzXCI+XG4gICAgICAgIDxlbSBjbGFzcz1cImJjLWljb24gYmMtc3RcIj57eyBpY29uIH19PC9lbT5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1hbGVydC1ib2R5XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtYWxlcnQtY29udGVudFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJiYy1hbGVydC10aXRsZVwiIFtpbm5lckhUTUxdPVwidGl0bGVcIj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImJjLWFsZXJ0LXRleHRcIiBbaW5uZXJIVE1MXT1cInRleHRcIj48L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBsIG9mIGxpbmtzIHwgc2xpY2U6IDA6MlwiPlxuICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cImwudXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgbC50ZXh0IH19PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1teS0yIGJjLW1lLTJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJiYy1hbGVydC1jbG9zZVwiIChjbGljayk9XCJjbG9zZUl0KClcIj5cbiAgICAgICAgICAgIDxlbSBhcmlhLWxhYmVsPVwiQ2VycmFyXCIgY2xhc3M9XCJiYy1pY29uXCI+ZXJyb3I8L2VtPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG48L2FydGljbGU+Il19