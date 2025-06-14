import { Component, Input, EventEmitter, Output, Host, Optional, Self, } from '@angular/core';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcCheckboxBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./bc-checkbox-group/bc-checkbox-group.component";
import * as i3 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Importa el componente de Checks con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcCheckboxComponent
 */
export class BcCheckboxComponent extends BcGeneralInputComponent {
    constructor(elmRef, controlDirective, checkboxGroup, helper) {
        super();
        this.elmRef = elmRef;
        this.controlDirective = controlDirective;
        this.checkboxGroup = checkboxGroup;
        this.helper = helper;
        /**
         * Id del elemento checkbox.
         *
         * @type {string}
         * @memberof BcCheckboxComponent
         */
        this.id = '';
        /**
         * Nombre del checkbox.
         *
         * @type {string}
         * @memberof BcCheckboxComponent
         */
        this.name = '';
        /**
         * Valor del checkbox.
         *
         * @type {string}
         * @memberof BcCheckboxComponent
         */
        this.currentValue = '';
        /**
         * Texto del checkbox que aparece a la derecha del mismo.
         *
         * @type {string}
         * @memberof BcCheckboxComponent
         */
        this.label = '';
        /**
         * Indica si el checkbox esta habilitado.
         *
         * @type {boolean}
         * @memberof BcCheckboxComponent
         */
        this.enabled = true;
        /**
         * Indica si el checkbox esta en estado check.
         *
         * @type {boolean}
         * @memberof BcCheckboxComponent
         */
        this.isChecked = false;
        /**
         * Define el componente como indeterminado.
         *
         * @type {boolean}
         * @memberof BcCheckboxComponent
         */
        this.indeterminate = false;
        /**
         * Valor cada vez que cambia el checkbox.
         *
         * @type {EventEmitter<boolean>}
         * @memberof BcCheckboxComponent
         */
        this.changeState = new EventEmitter();
        /**
         * Valor seleccionado.
         *
         * @type {EventEmitter<any>}
         * @memberof BcRadioComponent
         */
        this.changeStateForParent = new EventEmitter();
        this.outline = false;
        if (controlDirective) {
            controlDirective.valueAccessor = this;
            BcCheckboxBehavior.setUpAll();
        }
    }
    ngAfterViewInit() {
        this.changeStateForParent.emit(this.isChecked);
        if (this.checkboxGroup) {
            this.checkboxGroup.onDisabled.subscribe(isDisabledCheckoxGroup => {
                this.toogleDisabled(isDisabledCheckoxGroup);
            });
        }
    }
    /**
     * Metodo que cambia el estado del checkbox y emite si esta seleccionado.
     *
     * @memberof BcCheckboxComponent
     */
    toggle() {
        this.isChecked = !this.isChecked;
        this.changeState.emit(this.isChecked);
        if (this.checkboxGroup) {
            this.checkboxGroup.addOrRemove(this.currentValue);
            this.checkboxGroup.onTouch();
            this.checkboxGroup.changeValue.emit(this.value);
        }
        this.value = this.isChecked ? this.currentValue : null;
        this.onChange(this.value);
        this.onTouch();
    }
    toogleDisabled(isDisabled) {
        this.enabled = !isDisabled;
    }
    get isCheckBoxChecked() {
        if (this.checkboxGroup) {
            this.isChecked = this.checkboxGroup.contains(this.currentValue);
        }
        return this.isChecked;
    }
    /**
     * Metodo para accesibilidad.
     *
     * @param {KeyboardEvent} event
     * @memberof BcCheckboxComponent
     */
    keyEvent(event) {
        this.outline = this.helper.keyEvent(event, {
            event: () => {
                this.toggle();
            },
        });
    }
    setDisabledState(isDisabled) {
        this.enabled = !isDisabled;
    }
    writeValue(value) {
        if (typeof value != 'undefined') {
            this.value = value;
            this.onChange(this.value);
            this.onTouch();
        }
    }
}
BcCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckboxComponent, deps: [{ token: i0.ElementRef }, { token: i1.NgControl, optional: true, self: true }, { token: i2.BcCheckBoxGroupComponent, host: true, optional: true }, { token: i3.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCheckboxComponent, selector: "bc-checkbox", inputs: { id: "id", name: "name", currentValue: ["value", "currentValue"], label: "label", enabled: "enabled", isChecked: "isChecked", indeterminate: "indeterminate" }, outputs: { changeState: "changeState", changeStateForParent: "changeStateForParent" }, usesInheritance: true, ngImport: i0, template: "<label id=\"{{id}}\" class=\"bc-container-checkbox\">{{label}}\n  <input type=\"checkbox\" (click)=\"toggle()\" tabindex=\"{{!enabled ? -1 : 0}}\" [id]=id [name]=name \n    [value]=value [disabled]=!enabled [indeterminate]=indeterminate [checked]=isCheckBoxChecked>\n  <span class=\"bc-checkbox\" tabindex=\"-1\"></span>\n</label>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-checkbox', template: "<label id=\"{{id}}\" class=\"bc-container-checkbox\">{{label}}\n  <input type=\"checkbox\" (click)=\"toggle()\" tabindex=\"{{!enabled ? -1 : 0}}\" [id]=id [name]=name \n    [value]=value [disabled]=!enabled [indeterminate]=indeterminate [checked]=isCheckBoxChecked>\n  <span class=\"bc-checkbox\" tabindex=\"-1\"></span>\n</label>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i2.BcCheckBoxGroupComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i3.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], currentValue: [{
                type: Input,
                args: ['value']
            }], label: [{
                type: Input
            }], enabled: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], changeState: [{
                type: Output
            }], changeStateForParent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNoZWNrYm94L2JjLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jaGVja2JveC9iYy1jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUVOLElBQUksRUFDSixRQUFRLEVBRVIsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBbUIsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVyRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7QUFFMUU7Ozs7O0dBS0c7QUFNSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsdUJBQXVCO0lBb0U5RCxZQUNVLE1BQWtCLEVBQ0MsZ0JBQTJCLEVBQzFCLGFBQXVDLEVBQzNELE1BQXVCO1FBRS9CLEtBQUssRUFBRSxDQUFDO1FBTEEsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBVztRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDM0QsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUF2RWpDOzs7OztXQUtHO1FBQ00sT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNqQjs7Ozs7V0FLRztRQUNNLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDbkI7Ozs7O1dBS0c7UUFDYSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQzs7Ozs7V0FLRztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEI7Ozs7O1dBS0c7UUFDTSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCOzs7OztXQUtHO1FBQ00sY0FBUyxHQUFHLEtBQUss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LDBVQzNCaEMsOFVBS0E7MkZEc0JhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxhQUFhOzswQkEwRXBCLElBQUk7OzBCQUFJLFFBQVE7OzBCQUNoQixRQUFROzswQkFBSSxJQUFJOzBFQWhFVixFQUFFO3NCQUFWLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQU9VLFlBQVk7c0JBQTNCLEtBQUs7dUJBQUMsT0FBTztnQkFPTCxLQUFLO3NCQUFiLEtBQUs7Z0JBT0csT0FBTztzQkFBZixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0csYUFBYTtzQkFBckIsS0FBSztnQkFRSSxXQUFXO3NCQUFwQixNQUFNO2dCQVFHLG9CQUFvQjtzQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgRWxlbWVudFJlZixcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UsIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuaW1wb3J0IHsgQmNDaGVja0JveEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1jaGVja2JveC1ncm91cC9iYy1jaGVja2JveC1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNDaGVja2JveEJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgZGUgQ2hlY2tzIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0NoZWNrYm94Q29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQmNDaGVja2JveENvbXBvbmVudCBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG8gY2hlY2tib3guXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NoZWNrYm94Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICAvKipcbiAgICogTm9tYnJlIGRlbCBjaGVja2JveC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2hlY2tib3hDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcbiAgLyoqXG4gICAqIFZhbG9yIGRlbCBjaGVja2JveC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2hlY2tib3hDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKSBjdXJyZW50VmFsdWUgPSAnJztcbiAgLyoqXG4gICAqIFRleHRvIGRlbCBjaGVja2JveCBxdWUgYXBhcmVjZSBhIGxhIGRlcmVjaGEgZGVsIG1pc21vLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDaGVja2JveENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgLyoqXG4gICAqIEluZGljYSBzaSBlbCBjaGVja2JveCBlc3RhIGhhYmlsaXRhZG8uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNDaGVja2JveENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlZCA9IHRydWU7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZWwgY2hlY2tib3ggZXN0YSBlbiBlc3RhZG8gY2hlY2suXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNDaGVja2JveENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaXNDaGVja2VkID0gZmFsc2U7XG4gIC8qKlxuICAgKiBEZWZpbmUgZWwgY29tcG9uZW50ZSBjb21vIGluZGV0ZXJtaW5hZG8uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNDaGVja2JveENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBWYWxvciBjYWRhIHZleiBxdWUgY2FtYmlhIGVsIGNoZWNrYm94LlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGJvb2xlYW4+fVxuICAgKiBAbWVtYmVyb2YgQmNDaGVja2JveENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVN0YXRlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFZhbG9yIHNlbGVjY2lvbmFkby5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNSYWRpb0NvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVN0YXRlRm9yUGFyZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG91dGxpbmUgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbG1SZWY6IEVsZW1lbnRSZWYsXG4gICAgQFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgY29udHJvbERpcmVjdGl2ZTogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBjaGVja2JveEdyb3VwOiBCY0NoZWNrQm94R3JvdXBDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBoZWxwZXI6IEJjSGVscGVyU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChjb250cm9sRGlyZWN0aXZlKSB7XG4gICAgICBjb250cm9sRGlyZWN0aXZlLnZhbHVlQWNjZXNzb3IgPSB0aGlzIGFzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50O1xuICAgICAgQmNDaGVja2JveEJlaGF2aW9yLnNldFVwQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2hhbmdlU3RhdGVGb3JQYXJlbnQuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG5cbiAgICBpZiAodGhpcy5jaGVja2JveEdyb3VwKSB7XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXAub25EaXNhYmxlZC5zdWJzY3JpYmUoaXNEaXNhYmxlZENoZWNrb3hHcm91cCA9PiB7XG4gICAgICAgIHRoaXMudG9vZ2xlRGlzYWJsZWQoaXNEaXNhYmxlZENoZWNrb3hHcm91cClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldG9kbyBxdWUgY2FtYmlhIGVsIGVzdGFkbyBkZWwgY2hlY2tib3ggeSBlbWl0ZSBzaSBlc3RhIHNlbGVjY2lvbmFkby5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjQ2hlY2tib3hDb21wb25lbnRcbiAgICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9ICF0aGlzLmlzQ2hlY2tlZDtcbiAgICB0aGlzLmNoYW5nZVN0YXRlLmVtaXQodGhpcy5pc0NoZWNrZWQpO1xuICAgIGlmICh0aGlzLmNoZWNrYm94R3JvdXApIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cC5hZGRPclJlbW92ZSh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXAub25Ub3VjaCgpO1xuICAgICAgdGhpcy5jaGVja2JveEdyb3VwLmNoYW5nZVZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlzQ2hlY2tlZCA/IHRoaXMuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuXG4gIH1cblxuICB0b29nbGVEaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5lbmFibGVkID0gIWlzRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgaXNDaGVja0JveENoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cCkge1xuICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmNoZWNrYm94R3JvdXAuY29udGFpbnModGhpcy5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWV0b2RvIHBhcmEgYWNjZXNpYmlsaWRhZC5cbiAgICpcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKiBAbWVtYmVyb2YgQmNDaGVja2JveENvbXBvbmVudFxuICAgKi9cbiAga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLm91dGxpbmUgPSB0aGlzLmhlbHBlci5rZXlFdmVudChldmVudCwge1xuICAgICAgZXZlbnQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmVuYWJsZWQgPSAhaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoKCk7XG4gICAgfVxuICB9XG59XG4iLCI8bGFiZWwgaWQ9XCJ7e2lkfX1cIiBjbGFzcz1cImJjLWNvbnRhaW5lci1jaGVja2JveFwiPnt7bGFiZWx9fVxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCIgdGFiaW5kZXg9XCJ7eyFlbmFibGVkID8gLTEgOiAwfX1cIiBbaWRdPWlkIFtuYW1lXT1uYW1lIFxuICAgIFt2YWx1ZV09dmFsdWUgW2Rpc2FibGVkXT0hZW5hYmxlZCBbaW5kZXRlcm1pbmF0ZV09aW5kZXRlcm1pbmF0ZSBbY2hlY2tlZF09aXNDaGVja0JveENoZWNrZWQ+XG4gIDxzcGFuIGNsYXNzPVwiYmMtY2hlY2tib3hcIiB0YWJpbmRleD1cIi0xXCI+PC9zcGFuPlxuPC9sYWJlbD5cbiJdfQ==