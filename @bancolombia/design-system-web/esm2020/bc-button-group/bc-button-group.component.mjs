import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Importa el componente de Checks con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonGroupComponent
 * @implements {OnInit}
 */
export class BcButtonGroupComponent {
    constructor(helper) {
        this.helper = helper;
        this.parentReady = false;
        /**
         * Id del elemento.
         *
         * @memberof BcButtonGroupComponent
         */
        this.buttonId = this.helper.getId(this);
        /**
         * valor del elemento.
         *
         * @memberof BcButtonGroupComponent
         */
        this.value = '';
        /**
         * Name del elemento.
         *
         * @memberof BcButtonGroupComponent
         */
        this.name = '';
        /**
         * taxindex del elemento.
         *
         * @memberof BcButtonGroupComponent
         */
        this.tabindex = 0;
        /**
         * Muestra opción seleccionada.
         *
         * @memberof BcButtonGroupComponent
         */
        this.changeState = new EventEmitter();
    }
}
BcButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonGroupComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcButtonGroupComponent, selector: "bc-button-group", inputs: { buttonId: "buttonId", value: "value", name: "name", tabindex: "tabindex" }, outputs: { changeState: "changeState" }, ngImport: i0, template: "<input class=\"bc-button-group-input\" [id]=\"buttonId\" type=\"radio\" [name]=\"name\" [value]=\"value\" tabindex=\"tabindex\">\n<label [for]=\"buttonId\"><span *ngIf=\"parentReady\">{{value}}</span></label>", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-button-group', template: "<input class=\"bc-button-group-input\" [id]=\"buttonId\" type=\"radio\" [name]=\"name\" [value]=\"value\" tabindex=\"tabindex\">\n<label [for]=\"buttonId\"><span *ngIf=\"parentReady\">{{value}}</span></label>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { buttonId: [{
                type: Input
            }], value: [{
                type: Input
            }], name: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], changeState: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1idXR0b24tZ3JvdXAvYmMtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1idXR0b24tZ3JvdXAvYmMtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHdkU7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjtJQWtDakMsWUFBb0IsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFqQzNDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCOzs7O1dBSUc7UUFDTSxhQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUM7Ozs7V0FJRztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEI7Ozs7V0FJRztRQUNNLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDbkI7Ozs7V0FJRztRQUVNLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEI7Ozs7V0FJRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVELENBQUM7O21IQWxDckMsc0JBQXNCO3VHQUF0QixzQkFBc0Isc0xDZm5DLGtOQUMwRTsyRkRjN0Qsc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLGlCQUFpQjtzR0FXbEIsUUFBUTtzQkFBaEIsS0FBSztnQkFNRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBTUksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25lbnRlIGRlIENoZWNrcyBjb24gbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNCdXR0b25Hcm91cENvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtYnV0dG9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQmNCdXR0b25Hcm91cENvbXBvbmVudCB7XG4gIHBhcmVudFJlYWR5OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0J1dHRvbkdyb3VwQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBidXR0b25JZCA9IHRoaXMuaGVscGVyLmdldElkKHRoaXMpO1xuICAvKipcbiAgICogdmFsb3IgZGVsIGVsZW1lbnRvLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25Hcm91cENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgLyoqXG4gICAqIE5hbWUgZGVsIGVsZW1lbnRvLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25Hcm91cENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbmFtZSA9ICcnO1xuICAvKipcbiAgICogdGF4aW5kZXggZGVsIGVsZW1lbnRvLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25Hcm91cENvbXBvbmVudFxuICAgKi9cblxuICBASW5wdXQoKSB0YWJpbmRleCA9IDA7XG4gIC8qKlxuICAgKiBNdWVzdHJhIG9wY2nDs24gc2VsZWNjaW9uYWRhLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25Hcm91cENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWxwZXI6IEJjSGVscGVyU2VydmljZSkgeyB9XG59XG4iLCI8aW5wdXQgY2xhc3M9XCJiYy1idXR0b24tZ3JvdXAtaW5wdXRcIiBbaWRdPVwiYnV0dG9uSWRcIiB0eXBlPVwicmFkaW9cIiBbbmFtZV09XCJuYW1lXCIgW3ZhbHVlXT1cInZhbHVlXCIgdGFiaW5kZXg9XCJ0YWJpbmRleFwiPlxuPGxhYmVsIFtmb3JdPVwiYnV0dG9uSWRcIj48c3BhbiAqbmdJZj1cInBhcmVudFJlYWR5XCI+e3t2YWx1ZX19PC9zcGFuPjwvbGFiZWw+Il19