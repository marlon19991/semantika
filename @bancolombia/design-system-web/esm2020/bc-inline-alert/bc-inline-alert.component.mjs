import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BcInlineAlertBehavior } from '@bancolombia/design-system-behaviors';
import { BcDialog } from '@bancolombia/design-system-web/bc-services';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-transaction-status";
import * as i3 from "@bancolombia/design-system-web/bc-icon-button";
import * as i4 from "@angular/common";
import * as i5 from "@bancolombia/design-system-web/bc-link";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * Las alertas corresponde a un cuadro de diálogo que disponibiliza
 * información de manera flotante o fija.
 *
 * @export
 * @class BcInlineAlertComponent
 * @implements {AfterViewInit}
 */
export class BcInlineAlertComponent extends BcDialog {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5saW5lLWFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbmxpbmUtYWxlcnQvYmMtaW5saW5lLWFsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbmxpbmUtYWxlcnQvYmMtaW5saW5lLWFsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7OztBQUV0RTs7Ozs7Ozs7R0FRRztBQU1ILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxRQUFRO0lBeUdsRCxZQUFvQixNQUF1QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQURVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBakczQyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1Y7Ozs7V0FJRztRQUNILFVBQUssR0FBRztZQUNOLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUM7UUFDRjs7OztVQUlFO1FBQ08sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQjs7OztXQUlHO1FBQ00sU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQjs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQ3RDOzs7O1dBSUc7UUFDTSxVQUFLLEdBQXFCLEVBQUUsQ0FBQztRQU90Qzs7Ozs7O1dBTUc7UUFDTSxnQkFBVyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFD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O2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFRRyxXQUFXO3NCQUFuQixLQUFLO2dCQVFHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBUUcsV0FBVztzQkFBbkIsS0FBSztnQkFRRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9JLE9BQU87c0JBQWhCLE1BQU07Z0JBT0csU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0lubGluZUFsZXJ0QmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuaW1wb3J0IHsgQmNEaWFsb2cgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtc2VydmljZXMnO1xuXG4vKipcbiAqIEltcG9ydGEgbGFzIGFsZXJ0YXMgY29uIGxvcyBkaXNlw7FvcyBkZSBCYW5jb2xvbWJpYSBTLkEuXG4gKiBMYXMgYWxlcnRhcyBjb3JyZXNwb25kZSBhIHVuIGN1YWRybyBkZSBkacOhbG9nbyBxdWUgZGlzcG9uaWJpbGl6YVxuICogaW5mb3JtYWNpw7NuIGRlIG1hbmVyYSBmbG90YW50ZSBvIGZpamEuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjSW5saW5lQWxlcnRDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1pbmxpbmUtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJ2JjLWlubGluZS1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5saW5lQWxlcnRDb21wb25lbnQgZXh0ZW5kcyBCY0RpYWxvZyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogQ29tcG9ydGFtaWVudG9cbiAgICpcbiAgICogQHR5cGUge0JjSW5saW5lQWxlcnRCZWhhdmlvcn1cbiAgICogQG1lbWJlcm9mIEJjSW5saW5lQWxlcnRDb21wb25lbnRcbiAgICovXG4gIGJjQWxlcnRCZWhhdmlvcjogQmNJbmxpbmVBbGVydEJlaGF2aW9yO1xuICBpY29uID0gJyc7XG4gIC8qKlxuICAgKiBUaXBvcyBkZSBpY29ub3NcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5saW5lQWxlcnRDb21wb25lbnRcbiAgICovXG4gIGljb25zID0ge1xuICAgIGVycm9yOiAnZXJyb3InLFxuICAgIHN1Y2Nlc3M6ICdvaycsXG4gICAgaW5mbzogJ2lkZWEnLFxuICAgIHdhcm5pbmc6ICdoYW5kJ1xuICB9O1xuICAvKipcbiAgKiBUw610dWxvIGRlIGxhIGFsZXJ0YS5cbiAgKlxuICAqIEBtZW1iZXJvZiBCY0lubGluZUFsZXJ0Q29tcG9uZW50XG4gICovXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIC8qKlxuICAgKiBUZXh0byBkZSBsYSBhbGVydGEuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lubGluZUFsZXJ0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIC8qKlxuICAgKiAgXG4gICAqIFZhcmlhbnRlIGRlIGNvbG9yIHNlY3VuZGFyaWEgZW4gdGVtYSBsaWdodC9kYXJrXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJbmxpbmVBbGVydENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2Vjb25kQ29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIExpbmtzIGVuIGxhIGFsZXJ0YSwgc29sbyBzZSBwaW50YW4gbG9zIDIgcHJpbWVyb3MgaXRlbXMgZGVsIGFycmVnbG8uXG4gICAqIEB0eXBlOiBBcnJheTxMaW5rPlxuICAgKiBAbWVtYmVyb2YgQmNJbmxpbmVBbGVydENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbGlua3M6IEFycmF5PExpbmtBbGVydD4gPSBbXTtcbiAgLyoqXG4gICAqIFRpcG8gZGUgYWxlcnRhIFsgXCJlcnJvclwiIHwgXCJzdWNjZXNzXCIgfCBcImluZm9cIiB8IFwid2FybmluZ1wiIF0uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lubGluZUFsZXJ0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKlxuICAgKiBJZCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5saW5lQWxlcnRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0aGlzLmhlbHBlci5nZXRJZCh0aGlzKTtcbiAgLyoqXG4gICAqXG4gICAqIEFyaWEgTGFiZWwgZGVsIGJvdMOzbiBkZSBjaWVycmVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5saW5lQWxlcnRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGxlY3RvckJ0bkNsb3NlOiBzdHJpbmcgPSBcIkNlcnJhciBhbGVydGFcIjtcbiAgLyoqXG4gICAqXG4gICAqIEFyaWEgTGFiZWwgZGVsIGNvbXBvbmVudGUgQWxlcnRcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5saW5lQWxlcnRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGxlY3RvckFsZXJ0OiBzdHJpbmcgPSBcIkFsZXJ0YSBwcmV2ZW50aXZhXCI7XG5cbiAgLyoqXG4gICAqIFNpIGxhIGFsZXJ0YSBlcyBlc3TDoXRpY2EsIGluZGljYSBzaSBzZSBwdWVkZSBkZXNjYXJ0YXIgbyBjZXJyYXIuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJbmxpbmVBbGVydENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZGlzbWlzc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFNlIGVqZWN1dGEgY3VhbmRvIGxhIGFsZXJ0YSBzZSBjaWVycmEsIGFwbGljYSBzb2xvIHBhcmEgYWxlcnRhcyBpbmxpbmUuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8YW55Pn1cbiAgICogQG1lbWJlcm9mIEJjSW5saW5lQWxlcnRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIFNlIGVqZWN1dGEgY3VhbmRvIHNlIGxlIGRhIGNsaWNrIGEgdW4gbGluayBkZW50cm8gZGVsIGlubGluZS5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNJbmxpbmVBbGVydENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGxpbmtDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKlxuICAgKiBJbmRpY2EgZWwgaWQgZGVsIGVsZW1lbnRvIGRlIHJlZmVyZW5jaWEgcGFyYSBpbnNlcnRhciBsYSBhbGVydGFcbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNJbmxpbmVBbGVydENvbXBvbmVudFxuICAgKi9cbiAgZWxlbWVudFJlZjogYW55ID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWxwZXI6IEJjSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5iY0FsZXJ0QmVoYXZpb3IgPSBuZXcgQmNJbmxpbmVBbGVydEJlaGF2aW9yKCk7XG4gIH1cbiAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJjQWxlcnRCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICB0aGlzLmJjQWxlcnRCZWhhdmlvci5vbkNsb3NlKChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLm9uY2xvc2UuZW1pdChldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5iY0FsZXJ0QmVoYXZpb3Iuc2V0VXAoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0SWNvbkJ5VHlwZSgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBWYWxpZGFyIGljb25vIHNlZ8O6biB0aXBvIGRlIGFsZXJ0YVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbmxpbmVBbGVydENvbXBvbmVudFxuICAgKi9cbiAgc2V0SWNvbkJ5VHlwZSgpIHtcbiAgICB0aGlzLmljb24gPSB0aGlzLmljb25zW3RoaXMudHlwZV1cbiAgICAgID8gdGhpcy5pY29uc1t0aGlzLnR5cGVdXG4gICAgICA6IHRoaXMuaWNvbnMud2FybmluZztcbiAgfVxuICAvKipcbiAgICogQXRyaWJ1dG9zIGRlIGxhIGFsZXJ0YVxuICAgKlxuICAgKiBAcGFyYW0geyp9IGlucHV0c1xuICAgKiBAbWVtYmVyb2YgQmNJbmxpbmVBbGVydENvbXBvbmVudFxuICAgKi9cbiAgb25JbmplY3RJbnB1dHMoaW5wdXRzOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudElkID0gaW5wdXRzLmlkO1xuICAgIHRoaXMudHlwZSA9IGlucHV0cy50eXBlO1xuICAgIHRoaXMudGl0bGUgPSBpbnB1dHMudGl0bGU7XG4gICAgdGhpcy50ZXh0ID0gaW5wdXRzLnRleHQ7XG4gICAgdGhpcy5saW5rcyA9IGlucHV0cy5saW5rcztcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBpbnB1dHMuZWxlbWVudFJlZjtcbiAgICB0aGlzLmRpc21pc3NpYmxlID0gaW5wdXRzLmRpc21pc3NpYmxlO1xuICAgIHRoaXMubGVjdG9yQWxlcnQgPSBpbnB1dHMubGVjdG9yQWxlcnRhO1xuICAgIHRoaXMubGVjdG9yQnRuQ2xvc2UgPSBpbnB1dHMubGVjdG9yQnRuQ2xvc2U7XG4gIH1cbiAgLyoqXG4gICAqIENlcnJhciBhbGVydGFcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5saW5lQWxlcnRDb21wb25lbnRcbiAgICovXG4gIGNsb3NlSXQoKTogdm9pZCB7XG4gICAgdGhpcy5iY0FsZXJ0QmVoYXZpb3IuY2xvc2UoKTtcbiAgfVxuICAvKipcbiAgICogQ2FuY2VsYXIgYWxlcnRhXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lubGluZUFsZXJ0Q29tcG9uZW50XG4gICAqL1xuICBjYW5jZWxJdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc21pc3MoJ2NhbmNlbGluZycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRlIGVsIGV2ZW50byBjdWFuZG8gc2UgbGUgZGEgY2xpY2sgYSB1biBsaW5rXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lubGluZUFsZXJ0Q29tcG9uZW50XG4gICAqL1xuICBjbGlja0V2ZW50TGluayhldmVudCkge1xuICAgIHRoaXMubGlua0NsaWNrLmVtaXQoe3RleHQ6IGV2ZW50LnRhcmdldC5pbm5lclRleHQscGF0aDogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaHJlZn0pO1xuICB9XG59XG5cbmludGVyZmFjZSBMaW5rQWxlcnQge1xuICB1cmw6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuIiwiPGFydGljbGUgY2xhc3M9XCJiYy1pbmxpbmUtYWxlcnQtYWN0aXZlIGJjLWlubGluZS1hbGVydFwiIHJvbGU9XCJhbGVydFwiIFtpZF09XCJjb21wb25lbnRJZFwiXG4gICAgW25nQ2xhc3NdPVwieydiYy1pbmxpbmUtYWxlcnQtc2Vjb25kLWNvbG9yJzogc2Vjb25kQ29sb3J9XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsZWN0b3JBbGVydFwiPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtaW5saW5lLWFsZXJ0LXN0YXR1c1wiPlxuICAgICAgICA8YmMtdHJhbnNhY3Rpb24tc3RhdHVzIHNpemU9XCJzbVwiIGN1c3RvbUljb249XCJ7eyBpY29uIH19XCIgc3RhdHVzPVwie3sgdHlwZSB9fVwiPjwvYmMtdHJhbnNhY3Rpb24tc3RhdHVzPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImJjLWlubGluZS1hbGVydC1ib2R5XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtaW5saW5lLWFsZXJ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiYmMtaW5saW5lLWFsZXJ0LXRpdGxlXCI+e3sgdGl0bGUgfX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImJjLWlubGluZS1hbGVydC10ZXh0XCI+e3sgdGV4dCB9fTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGwgb2YgbGlua3MgfCBzbGljZTogMDoyXCI+XG4gICAgICAgICAgICAgIDxhICpuZ0lmPVwibC51cmxcIiBiYy1saW5rIGNsYXNzPVwiYmMtaW5saW5lLWFsZXJ0LWxpbmtcIiBocmVmPVwie3sgbC51cmwgfX1cIiBzaXplTGluaz1cInVuZGVybGluZUxhcmdlXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdHlwZUxpbms9XCJ1bmRlcmxpbmVcIiAoY2xpY2spPVwiY2xpY2tFdmVudExpbmsoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDx1Pnt7IGwudGV4dCB9fTwvdT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFsLnVybFwiIGJjLWxpbmsgY2xhc3M9XCJiYy1pbmxpbmUtYWxlcnQtbGlua1wiIHNpemVMaW5rPVwidW5kZXJsaW5lTGFyZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0eXBlTGluaz1cInVuZGVybGluZVwiIChjbGljayk9XCJjbGlja0V2ZW50TGluaygkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPHU+e3sgbC50ZXh0IH19PC91PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiAqbmdJZj1cImRpc21pc3NpYmxlXCIgY2xhc3M9XCJiYy1pbmxpbmUtYWxlcnQtY2xvc2VcIj5cbiAgICAgICAgPGJjLWljb24tYnV0dG9uIChjbGljayk9XCJjbG9zZUl0KClcIiBzaXplPVwic21hbGxcIiB0eXBlPVwiZ2hvc3RcIiBjdXN0b21JY29uPVwiZXJyb3JcIlxuICAgICAgICAgICAgYXJpYUxhYmVsPVwie3sgbGVjdG9yQnRuQ2xvc2V9fVwiPlxuICAgICAgICA8L2JjLWljb24tYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbjwvYXJ0aWNsZT5cbiJdfQ==