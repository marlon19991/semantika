import { Component, Input, Output, EventEmitter, Host, Optional, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./bc-radio-group/bc-radio-group.component";
import * as i2 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Componente Radio Button
 *
 * @export
 * @class BcRadioComponent
 * @implements {OnInit}
 */
export class BcRadioComponent {
    constructor(radioGroup, helper) {
        this.radioGroup = radioGroup;
        this.helper = helper;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcRadioComponent
         */
        this.id = '';
        /**
         * Nombre del elemento radio.
         *
         * @type {string}
         * @memberof BcRadioComponent
         */
        this.name = '';
        /**
         * Valor del elemento.
         *
         * @type {string}
         * @memberof BcRadioComponent
         */
        this.value = '';
        /**
         * Indica si el elemento esta habilitado.
         *
         * @type {boolean}
         * @memberof BcRadioComponent
         */
        this.enabled = true;
        /**
         * Indica si el elemento esta seleccionado.
         *
         * @type {boolean}
         * @memberof BcRadioComponent
         */
        this.isChecked = false;
        /**
         * Valor seleccionado.
         *
         * @type {EventEmitter<any>}
         * @memberof BcRadioComponent
         */
        this.changeStateForParent = new EventEmitter();
        this.outline = false;
    }
    ngOnInit() {
        if (this.radioGroup) {
            this.radioGroup.onDisabled.subscribe((isDisabledRadioGroup) => {
                this.toogleDisabled(isDisabledRadioGroup);
            });
        }
    }
    /**
     * Cambia el estado al seleccionar elemento.
     *
     * @param {*} event
     * @memberof BcRadioComponent
     */
    toggle(event) {
        this.isChecked = !this.isChecked;
        this.changeStateForParent.emit(event);
        if (this.radioGroup) {
            this.radioGroup.onTouch();
            this.radioGroup.set(this.value);
            this.radioGroup.changeValue.emit(this.value);
        }
    }
    /**
     * Habilita o deshabilita el label e input del radio.
     *
     * @param {boolean} isDisabled
     * @memberof BcRadioComponent
     */
    toogleDisabled(isDisabled) {
        this.enabled = !isDisabled;
    }
    /**
     * Accesibilidad.
     *
     * @param {KeyboardEvent} event
     * @memberof BcRadioComponent
     */
    keyEvent(event) {
        this.outline = this.helper.keyEvent(event, {
            event: () => {
                this.changeStateForParent.emit(event);
            },
        });
    }
    get isRadioChecked() {
        if (this.radioGroup) {
            this.isChecked = this.radioGroup.contains(this.value);
        }
        return this.isChecked;
    }
    get radioGroupName() {
        if (this.radioGroup && this.radioGroup.name) {
            this.name = this.radioGroup.name;
        }
        return this.name;
    }
}
BcRadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioComponent, deps: [{ token: i1.BcRadioGroupComponent, host: true, optional: true }, { token: i2.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcRadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcRadioComponent, selector: "bc-radio", inputs: { id: "id", name: "name", value: "value", enabled: "enabled" }, outputs: { changeStateForParent: "changeStateForParent" }, ngImport: i0, template: "<label class=\"bc-radio-label\" [attr.disabled]=\"!enabled ? 'disabled' : null\">\n  <input\n    type=\"radio\"\n    [id]=\"id\"\n    [name]=\"radioGroupName\"\n    [value]=\"value\"\n    [disabled]=\"!enabled\"\n    [checked]=\"isRadioChecked\"\n    (click)=\"toggle($event)\"\n  />\n  <div>\n    <ng-content></ng-content>\n  </div>\n</label>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-radio', template: "<label class=\"bc-radio-label\" [attr.disabled]=\"!enabled ? 'disabled' : null\">\n  <input\n    type=\"radio\"\n    [id]=\"id\"\n    [name]=\"radioGroupName\"\n    [value]=\"value\"\n    [disabled]=\"!enabled\"\n    [checked]=\"isRadioChecked\"\n    (click)=\"toggle($event)\"\n  />\n  <div>\n    <ng-content></ng-content>\n  </div>\n</label>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcRadioGroupComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i2.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], enabled: [{
                type: Input
            }], changeStateForParent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXJhZGlvL2JjLXJhZGlvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1yYWRpby9iYy1yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLElBQUksRUFDSixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7Ozs7QUFHdkI7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLGdCQUFnQjtJQStDM0IsWUFDOEIsVUFBaUMsRUFDckQsTUFBdUI7UUFESCxlQUFVLEdBQVYsVUFBVSxDQUF1QjtRQUNyRCxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQWhEakM7Ozs7O1dBS0c7UUFDTSxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2pCOzs7OztXQUtHO1FBQ00sU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQjs7Ozs7V0FLRztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEI7Ozs7O1dBS0c7UUFDTSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCOzs7OztXQUtHO1FBQ0gsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQjs7Ozs7V0FLRztRQUNPLHlCQUFvQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTVFLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLYixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxLQUFVO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxVQUFtQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFFBQVEsQ0FBQyxLQUFvQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN6QyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7NkdBaEhVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLG1MQ3RCN0IsMlZBY0E7MkZEUWEsZ0JBQWdCO2tCQUo1QixTQUFTOytCQUNFLFVBQVU7OzBCQW1EakIsUUFBUTs7MEJBQUksSUFBSTswRUF6Q1YsRUFBRTtzQkFBVixLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxLQUFLO3NCQUFiLEtBQUs7Z0JBT0csT0FBTztzQkFBZixLQUFLO2dCQWVJLG9CQUFvQjtzQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEJjUmFkaW9Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vYmMtcmFkaW8tZ3JvdXAvYmMtcmFkaW8tZ3JvdXAuY29tcG9uZW50Jztcbi8qKlxuICogQ29tcG9uZW50ZSBSYWRpbyBCdXR0b25cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNSYWRpb0NvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJ2JjLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1JhZGlvQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICAvKipcbiAgICogTm9tYnJlIGRlbCBlbGVtZW50byByYWRpby5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjUmFkaW9Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcbiAgLyoqXG4gICAqIFZhbG9yIGRlbCBlbGVtZW50by5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjUmFkaW9Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZWwgZWxlbWVudG8gZXN0YSBoYWJpbGl0YWRvLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjUmFkaW9Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZWQgPSB0cnVlO1xuICAvKipcbiAgICogSW5kaWNhIHNpIGVsIGVsZW1lbnRvIGVzdGEgc2VsZWNjaW9uYWRvLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjUmFkaW9Db21wb25lbnRcbiAgICovXG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBWYWxvciBzZWxlY2Npb25hZG8uXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8YW55Pn1cbiAgICogQG1lbWJlcm9mIEJjUmFkaW9Db21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VTdGF0ZUZvclBhcmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBvdXRsaW5lID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIHJhZGlvR3JvdXA6IEJjUmFkaW9Hcm91cENvbXBvbmVudCxcbiAgICBwcml2YXRlIGhlbHBlcjogQmNIZWxwZXJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICB0aGlzLnJhZGlvR3JvdXAub25EaXNhYmxlZC5zdWJzY3JpYmUoKGlzRGlzYWJsZWRSYWRpb0dyb3VwKSA9PiB7XG4gICAgICAgIHRoaXMudG9vZ2xlRGlzYWJsZWQoaXNEaXNhYmxlZFJhZGlvR3JvdXApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbWJpYSBlbCBlc3RhZG8gYWwgc2VsZWNjaW9uYXIgZWxlbWVudG8uXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZXZlbnRcbiAgICogQG1lbWJlcm9mIEJjUmFkaW9Db21wb25lbnRcbiAgICovXG4gIHRvZ2dsZShldmVudDogYW55KSB7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZUZvclBhcmVudC5lbWl0KGV2ZW50KTtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICB0aGlzLnJhZGlvR3JvdXAub25Ub3VjaCgpO1xuICAgICAgdGhpcy5yYWRpb0dyb3VwLnNldCh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMucmFkaW9Hcm91cC5jaGFuZ2VWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYWJpbGl0YSBvIGRlc2hhYmlsaXRhIGVsIGxhYmVsIGUgaW5wdXQgZGVsIHJhZGlvLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGlzYWJsZWRcbiAgICogQG1lbWJlcm9mIEJjUmFkaW9Db21wb25lbnRcbiAgICovXG4gIHRvb2dsZURpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmVuYWJsZWQgPSAhaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2Nlc2liaWxpZGFkLlxuICAgKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBtZW1iZXJvZiBCY1JhZGlvQ29tcG9uZW50XG4gICAqL1xuICBrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMub3V0bGluZSA9IHRoaXMuaGVscGVyLmtleUV2ZW50KGV2ZW50LCB7XG4gICAgICBldmVudDogKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlRm9yUGFyZW50LmVtaXQoZXZlbnQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBpc1JhZGlvQ2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMucmFkaW9Hcm91cC5jb250YWlucyh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkO1xuICB9XG5cbiAgZ2V0IHJhZGlvR3JvdXBOYW1lKCkge1xuICAgIGlmICh0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy5yYWRpb0dyb3VwLm5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG59XG4iLCI8bGFiZWwgY2xhc3M9XCJiYy1yYWRpby1sYWJlbFwiIFthdHRyLmRpc2FibGVkXT1cIiFlbmFibGVkID8gJ2Rpc2FibGVkJyA6IG51bGxcIj5cbiAgPGlucHV0XG4gICAgdHlwZT1cInJhZGlvXCJcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtuYW1lXT1cInJhZGlvR3JvdXBOYW1lXCJcbiAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgIFtkaXNhYmxlZF09XCIhZW5hYmxlZFwiXG4gICAgW2NoZWNrZWRdPVwiaXNSYWRpb0NoZWNrZWRcIlxuICAgIChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiXG4gIC8+XG4gIDxkaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbGFiZWw+XG4iXX0=