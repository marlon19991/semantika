import { Component, Input, EventEmitter, Output, ViewChild, Optional, Self, } from '@angular/core';
import { BcInputCurrencyBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
export var BcInputCurrencyStatus;
(function (BcInputCurrencyStatus) {
    BcInputCurrencyStatus["default"] = "default";
    BcInputCurrencyStatus["error"] = "error";
    BcInputCurrencyStatus["success"] = "success";
})(BcInputCurrencyStatus || (BcInputCurrencyStatus = {}));
/**
 * Componente input number
 *
 * @export
 * @class BcInputCurrencyComponent
 * @implements {OnInit}
 */
export class BcInputCurrencyComponent extends BcGeneralInputComponent {
    constructor(controlDirective, ref, render) {
        super();
        this.controlDirective = controlDirective;
        this.ref = ref;
        this.render = render;
        /**
         * Esta entrada de tipo booleana nos indica si el componente es o no requerido en el contexto del formulario.
         *
         * @type {boolean}
         * @memberof BcInputCurrencyComponent
         */
        this.required = true;
        /**
         * Esta entrada de tipo string nos indica el estado del componente, sus valores pueden ser : {'disabled', 'error', 'success', 'default'}
         *
         * @type {('disabled' | 'error' | 'success' | 'default')}
         * @memberof BcInputCurrencyComponent
         */
        this.status = 'default';
        /**
         * Este parámetro nos indica una salida para el valor actual del selector numérico.
         * @type {EventEmitter<number>}
         * @memberof BcInputCurrencyComponent
         */
        this.updateValue = new EventEmitter();
        this.bcCurrencyInputBehavior = new BcInputCurrencyBehavior();
        this.bcCurrencyInputBehavior.output = (value) => {
            this.dispatchValue(value);
        };
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngAfterViewInit() {
        this.bcCurrencyInputBehavior.setElement(this.ref.nativeElement);
        this.bcCurrencyInputBehavior.setUp();
        this.detectStatusChanges();
        this.validateErrorStatus();
    }
    validateErrorStatus() {
        if (this.controlDirective && this.controlDirective.statusChanges) {
            this.controlDirective.statusChanges.subscribe(status => {
                if (status === 'INVALID') {
                    this.bcCurrencyInputBehavior.setErrorState(false);
                }
                else {
                    this.bcCurrencyInputBehavior.setErrorState(true);
                }
            });
        }
    }
    setDisabledState(isDisabled) {
        this.bcCurrencyInputBehavior.setDisabled(isDisabled);
    }
    setSuccessState(isSuccess) {
        this.bcCurrencyInputBehavior.setSuccessState(isSuccess);
    }
    ngOnChanges(changes) {
        this.detectStatusChanges(changes);
    }
    dispatchValue(value) {
        this.onInput(value);
        this.updateValue.emit(value);
    }
    onInput(value) {
        this.value = value;
        this.onTouch();
        this.onChange(this.value);
        this.bcCurrencyInputBehavior.setValue(this.value);
    }
    writeValue(value) {
        this.onInput(value);
    }
    detectStatusChanges(changes) {
        if (changes) {
            if (changes.status && this.bcInputNumber) {
                this.setStatus();
            }
        }
        else {
            this.setStatus();
        }
    }
    setStatus() {
        this.render.setAttribute(this.bcInputNumber.nativeElement, this.status, 'true');
        if (this.status === BcInputCurrencyStatus.success) {
            this.setSuccessState(true);
        }
        else {
            this.setSuccessState(false);
        }
    }
}
BcInputCurrencyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCurrencyComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BcInputCurrencyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputCurrencyComponent, selector: "bc-input-currency", inputs: { initValue: "initValue", label: "label", hint: "hint", required: "required", status: "status" }, outputs: { updateValue: "updateValue" }, viewQueries: [{ propertyName: "bcInputNumber", first: true, predicate: ["inputNumber"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-input-currency\" #inputNumber>\n  <div class=\"bc-input-currency-container\">\n    <bc-icon size=\"sm\" aria-hidden=\"true\" aria-label=\"\">\n      currency-peso\n    </bc-icon>\n    <input type=\"number\" [attr.value]=\"value\"\n      [attr.required]=\"required ? true : null\" class=\"bc-input bc-input-currency\" id=\"number1\" min=\"0\" type=\"number\"\n      value=\"value\"/>\n    <label for=\"number1\">label</label>\n    <span>hint</span>\n  </div>\n</div>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCurrencyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-currency', template: "<div class=\"bc-input-currency\" #inputNumber>\n  <div class=\"bc-input-currency-container\">\n    <bc-icon size=\"sm\" aria-hidden=\"true\" aria-label=\"\">\n      currency-peso\n    </bc-icon>\n    <input type=\"number\" [attr.value]=\"value\"\n      [attr.required]=\"required ? true : null\" class=\"bc-input bc-input-currency\" id=\"number1\" min=\"0\" type=\"number\"\n      value=\"value\"/>\n    <label for=\"number1\">label</label>\n    <span>hint</span>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { initValue: [{
                type: Input
            }], label: [{
                type: Input
            }], hint: [{
                type: Input
            }], required: [{
                type: Input
            }], status: [{
                type: Input
            }], updateValue: [{
                type: Output
            }], bcInputNumber: [{
                type: ViewChild,
                args: ['inputNumber']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWlucHV0LWN1cnJlbmN5L2JjLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1jdXJyZW5jeS9iYy1pbnB1dC1jdXJyZW5jeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUtOLFNBQVMsRUFFVCxRQUFRLEVBQ1IsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBRXBGLE1BQU0sQ0FBTixJQUFZLHFCQUlYO0FBSkQsV0FBWSxxQkFBcUI7SUFDL0IsNENBQW1CLENBQUE7SUFDbkIsd0NBQWUsQ0FBQTtJQUNmLDRDQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDO0FBRUQ7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHVCQUF1QjtJQXNEbkUsWUFBdUMsZ0JBQTJCLEVBQVUsR0FBZSxFQUFVLE1BQWlCO1FBQ3BILEtBQUssRUFBRSxDQUFDO1FBRDZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBNUJ0SDs7Ozs7V0FLRztRQUNNLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFekI7Ozs7O1dBS0c7UUFDTSxXQUFNLEdBQWlELFNBQVMsQ0FBQztRQUUxRTs7OztXQUlHO1FBQ08sZ0JBQVcsR0FBRyxJ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O1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOztxSEFuSVUsd0JBQXdCO3lHQUF4Qix3QkFBd0Isc1dDbkNyQyxxZUFZQTsyRkR1QmEsd0JBQXdCO2tCQUpwQyxTQUFTOytCQUNFLG1CQUFtQjs7MEJBeURoQixJQUFJOzswQkFBSSxRQUFROzZGQTlDbEIsU0FBUztzQkFBakIsS0FBSztnQkFRQyxLQUFLO3NCQUFiLEtBQUs7Z0JBUUcsSUFBSTtzQkFBWixLQUFLO2dCQVFHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUcsTUFBTTtzQkFBZCxLQUFLO2dCQU9JLFdBQVc7c0JBQXBCLE1BQU07Z0JBRW1CLGFBQWE7c0JBQXRDLFNBQVM7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCY0lucHV0Q3VycmVuY3lCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuZXhwb3J0IGVudW0gQmNJbnB1dEN1cnJlbmN5U3RhdHVzIHtcbiAgZGVmYXVsdCA9ICdkZWZhdWx0JyxcbiAgZXJyb3IgPSAnZXJyb3InLFxuICBzdWNjZXNzPSAnc3VjY2Vzcydcbn1cblxuLyoqXG4gKiBDb21wb25lbnRlIGlucHV0IG51bWJlclxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0lucHV0Q3VycmVuY3lDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtPbkluaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWlucHV0LWN1cnJlbmN5JyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1pbnB1dC1jdXJyZW5jeS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5wdXRDdXJyZW5jeUNvbXBvbmVudCBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblxuICAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIG51bcOpcmljbyBub3MgaW5kaWNhIGVsIHZhbG9yIGluaWNpYWwgcGFyYSBlbCBpbnB1dC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRDdXJyZW5jeUNvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIGluZGljYSBlbCBMYWJlbCBxdWUgdGVuZHLDrWEgZWwgaW5wdXQsIGVzdGUgcHVlZGUgdmVuaXIgZGVzZGUgdW4gb2JqZXRvIGRlIGNvbmZpZ3VyYWNpw7NuIG9cbiAgKiBkaXJlY3RhbWVudGUgZW4gZWwgYXRyaWJ1dG8uXG4gICogQHR5cGUge3N0cmluZ31cbiAgKiBAbWVtYmVyb2YgQmNJbnB1dEN1cnJlbmN5Q29tcG9uZW50XG4gICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIFxuICAvKipcbiAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIHBlcm1pdGUgaW5kaWNhciBlbCBoaW50IHF1ZSB0ZW5kcsOtYSBlbCBpbnB1dCwgZXN0ZSBwdWVkZSB2ZW5pciBkZXNkZSB1biBvYmpldG8gZGUgY29uZmlndXJhY2nDs24gb1xuICAqIGRpcmVjdGFtZW50ZSBlbiBlbCBhdHJpYnV0by5cbiAgKiBAdHlwZSB7c3RyaW5nfVxuICAqIEBtZW1iZXJvZiBCY0lucHV0Q3VycmVuY3lDb21wb25lbnRcbiAgKi9cbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBib29sZWFuYSBub3MgaW5kaWNhIHNpIGVsIGNvbXBvbmVudGUgZXMgbyBubyByZXF1ZXJpZG8gZW4gZWwgY29udGV4dG8gZGVsIGZvcm11bGFyaW8uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dEN1cnJlbmN5Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSByZXF1aXJlZCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIHN0cmluZyBub3MgaW5kaWNhIGVsIGVzdGFkbyBkZWwgY29tcG9uZW50ZSwgc3VzIHZhbG9yZXMgcHVlZGVuIHNlciA6IHsnZGlzYWJsZWQnLCAnZXJyb3InLCAnc3VjY2VzcycsICdkZWZhdWx0J31cbiAgICpcbiAgICogQHR5cGUgeygnZGlzYWJsZWQnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJyB8ICdkZWZhdWx0Jyl9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3VycmVuY3lDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHN0YXR1czogJ2Rpc2FibGVkJyB8ICdlcnJvcicgfCAnc3VjY2VzcycgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIEVzdGUgcGFyw6FtZXRybyBub3MgaW5kaWNhIHVuYSBzYWxpZGEgcGFyYSBlbCB2YWxvciBhY3R1YWwgZGVsIHNlbGVjdG9yIG51bcOpcmljby5cbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxudW1iZXI+fVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dEN1cnJlbmN5Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgdXBkYXRlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dE51bWJlcicpIGJjSW5wdXROdW1iZXI6IEVsZW1lbnRSZWY7XG5cbiAgYmNDdXJyZW5jeUlucHV0QmVoYXZpb3I7XG4gIFxuICBcbiAgY29uc3RydWN0b3IoQFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgY29udHJvbERpcmVjdGl2ZTogTmdDb250cm9sLCBwcml2YXRlIHJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5iY0N1cnJlbmN5SW5wdXRCZWhhdmlvciA9IG5ldyBCY0lucHV0Q3VycmVuY3lCZWhhdmlvcigpO1xuICAgIHRoaXMuYmNDdXJyZW5jeUlucHV0QmVoYXZpb3Iub3V0cHV0ID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hWYWx1ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICBpZiAoY29udHJvbERpcmVjdGl2ZSkge1xuICAgICAgY29udHJvbERpcmVjdGl2ZS52YWx1ZUFjY2Vzc29yID0gdGhpcyBhcyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudDtcbiAgICB9XG4gIH1cblxuIFxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5iY0N1cnJlbmN5SW5wdXRCZWhhdmlvci5zZXRFbGVtZW50KHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuYmNDdXJyZW5jeUlucHV0QmVoYXZpb3Iuc2V0VXAoKTtcbiAgICB0aGlzLmRldGVjdFN0YXR1c0NoYW5nZXMoKTtcbiAgICB0aGlzLnZhbGlkYXRlRXJyb3JTdGF0dXMoKVxuICB9XG5cbiAgdmFsaWRhdGVFcnJvclN0YXR1cygpe1xuICAgIGlmICh0aGlzLmNvbnRyb2xEaXJlY3RpdmUgJiYgdGhpcy5jb250cm9sRGlyZWN0aXZlLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIHRoaXMuY29udHJvbERpcmVjdGl2ZS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnSU5WQUxJRCcpIHtcbiAgICAgICAgICB0aGlzLmJjQ3VycmVuY3lJbnB1dEJlaGF2aW9yLnNldEVycm9yU3RhdGUoZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5iY0N1cnJlbmN5SW5wdXRCZWhhdmlvci5zZXRFcnJvclN0YXRlKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKXtcbiAgICB0aGlzLmJjQ3VycmVuY3lJbnB1dEJlaGF2aW9yLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgc2V0U3VjY2Vzc1N0YXRlKGlzU3VjY2VzczogYm9vbGVhbil7XG4gICAgdGhpcy5iY0N1cnJlbmN5SW5wdXRCZWhhdmlvci5zZXRTdWNjZXNzU3RhdGUoaXNTdWNjZXNzKTtcbiAgfVxuICBcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZGV0ZWN0U3RhdHVzQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIGRpc3BhdGNoVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMub25JbnB1dCh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIG9uSW5wdXQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuYmNDdXJyZW5jeUlucHV0QmVoYXZpb3Iuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpe1xuICAgIHRoaXMub25JbnB1dCh2YWx1ZSlcbiAgfVxuXG4gIGRldGVjdFN0YXR1c0NoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuc3RhdHVzICYmIHRoaXMuYmNJbnB1dE51bWJlcikge1xuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXR1cygpIHtcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5iY0lucHV0TnVtYmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc3RhdHVzLCAndHJ1ZScpO1xuXG4gICAgaWYodGhpcy5zdGF0dXMgPT09IEJjSW5wdXRDdXJyZW5jeVN0YXR1cy5zdWNjZXNzKXtcbiAgICAgIHRoaXMuc2V0U3VjY2Vzc1N0YXRlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN1Y2Nlc3NTdGF0ZShmYWxzZSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYmMtaW5wdXQtY3VycmVuY3lcIiAjaW5wdXROdW1iZXI+XG4gIDxkaXYgY2xhc3M9XCJiYy1pbnB1dC1jdXJyZW5jeS1jb250YWluZXJcIj5cbiAgICA8YmMtaWNvbiBzaXplPVwic21cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBhcmlhLWxhYmVsPVwiXCI+XG4gICAgICBjdXJyZW5jeS1wZXNvXG4gICAgPC9iYy1pY29uPlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgW2F0dHIudmFsdWVdPVwidmFsdWVcIlxuICAgICAgW2F0dHIucmVxdWlyZWRdPVwicmVxdWlyZWQgPyB0cnVlIDogbnVsbFwiIGNsYXNzPVwiYmMtaW5wdXQgYmMtaW5wdXQtY3VycmVuY3lcIiBpZD1cIm51bWJlcjFcIiBtaW49XCIwXCIgdHlwZT1cIm51bWJlclwiXG4gICAgICB2YWx1ZT1cInZhbHVlXCIvPlxuICAgIDxsYWJlbCBmb3I9XCJudW1iZXIxXCI+bGFiZWw8L2xhYmVsPlxuICAgIDxzcGFuPmhpbnQ8L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=