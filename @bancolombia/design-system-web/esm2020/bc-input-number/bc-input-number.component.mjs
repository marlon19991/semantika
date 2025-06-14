import { Component, Input, EventEmitter, Output, ViewChild, Optional, Self, } from '@angular/core';
import { BcInputNumberBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export var BcInputNumberStatus;
(function (BcInputNumberStatus) {
    BcInputNumberStatus["default"] = "default";
    BcInputNumberStatus["error"] = "error";
    BcInputNumberStatus["success"] = "success";
})(BcInputNumberStatus || (BcInputNumberStatus = {}));
/**
 * Componente input number
 *
 * @export
 * @class BcNumberInputComponent
 * @implements {OnInit}
 */
export class BcInputNumberComponent extends BcGeneralInputComponent {
    constructor(controlDirective, ref, render) {
        super();
        this.controlDirective = controlDirective;
        this.ref = ref;
        this.render = render;
        /**
         * Esta entrada de tipo string nos indica el valor mínimo por el cual el contador empezará.
         *
         *
         * @type {string}
         * @memberof BcNumberInputComponent
         */
        this.min = '0';
        /**
         * Esta entrada de tipo booleana nos indica si el componente es o no requerido en el contexto del formulario.
         *
         * @type {boolean}
         * @memberof BcNumberInputComponent
         */
        this.required = true;
        /**
         * Esta entrada de tipo string nos indica el estado del componente, sus valores pueden ser : {'disabled', 'error', 'success', 'default'}
         *
         * @type {('disabled' | 'error' | 'success' | 'default')}
         * @memberof BcInputNumberComponent
         */
        this.status = 'default';
        /**
         * Este parámetro nos indica una salida para el valor actual del selector numérico.
         * @type {EventEmitter<number>}
         * @memberof BcNumberInputComponent
         */
        this.updateValue = new EventEmitter();
        this.bcNumberInputBehavior = new BcInputNumberBehavior();
        this.bcNumberInputBehavior.output = (value) => {
            this.dispatchValue(value);
        };
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngAfterViewInit() {
        this.bcNumberInputBehavior.setElement(this.ref.nativeElement);
        this.bcNumberInputBehavior.setUp();
        this.detectStatusChanges();
        this.validateErrorStatus();
    }
    validateErrorStatus() {
        if (this.controlDirective && this.controlDirective.statusChanges) {
            this.controlDirective.statusChanges.subscribe(status => {
                if (status === 'INVALID') {
                    this.bcNumberInputBehavior.setErrorState(false);
                }
                else {
                    this.bcNumberInputBehavior.setErrorState(true);
                }
            });
        }
    }
    setDisabledState(isDisabled) {
        if (this.bcNumberInputBehavior.numberInput) {
            this.bcNumberInputBehavior.setDisabled(isDisabled);
        }
    }
    setSuccessState(isSuccess) {
        this.bcNumberInputBehavior.setSuccessState(isSuccess);
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
        this.bcNumberInputBehavior.setValue(this.value);
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
        if (this.status === BcInputNumberStatus.success) {
            this.setSuccessState(true);
        }
        else {
            this.setSuccessState(false);
        }
    }
}
BcInputNumberComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BcInputNumberComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputNumberComponent, selector: "bc-input-number", inputs: { min: "min", step: "step", initValue: "initValue", label: "label", hint: "hint", required: "required", status: "status" }, outputs: { updateValue: "updateValue" }, viewQueries: [{ propertyName: "bcInputNumber", first: true, predicate: ["inputNumber"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-input-number\" #inputNumber>\n  <button class=\"button-decrease\">\n    <em class=\"bc-icon\" size=\"sm\" aria-hidden=\"true\" aria-label=\"Disminuir\">minus</em>\n  </button>\n  <div class=\"bc-input-number-container\">\n    <input type=\"number\" [attr.min]=\"min\" [attr.step]=\"step\" [attr.value]=\"value\"\n      [attr.required]=\"required ? true : null\" class=\"bc-input\" id=\"number1\" min=\"0\" type=\"number\" step=\"1\"\n      value=\"value\"/>\n    <label for=\"number1\">{{label}}</label>\n    <span>{{hint}}</span>\n  </div>\n  <button class=\"button-increase\">\n    <em class=\"bc-icon\" size=\"sm\" aria-hidden=\"true\" aria-label=\"Aumentar\">plus</em>\n  </button>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-number', template: "<div class=\"bc-input-number\" #inputNumber>\n  <button class=\"button-decrease\">\n    <em class=\"bc-icon\" size=\"sm\" aria-hidden=\"true\" aria-label=\"Disminuir\">minus</em>\n  </button>\n  <div class=\"bc-input-number-container\">\n    <input type=\"number\" [attr.min]=\"min\" [attr.step]=\"step\" [attr.value]=\"value\"\n      [attr.required]=\"required ? true : null\" class=\"bc-input\" id=\"number1\" min=\"0\" type=\"number\" step=\"1\"\n      value=\"value\"/>\n    <label for=\"number1\">{{label}}</label>\n    <span>{{hint}}</span>\n  </div>\n  <button class=\"button-increase\">\n    <em class=\"bc-icon\" size=\"sm\" aria-hidden=\"true\" aria-label=\"Aumentar\">plus</em>\n  </button>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { min: [{
                type: Input
            }], step: [{
                type: Input
            }], initValue: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1udW1iZXIvYmMtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1udW1iZXIvYmMtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBS04sU0FBUyxFQUVULFFBQVEsRUFDUixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQUVwRixNQUFNLENBQU4sSUFBWSxtQkFJWDtBQUpELFdBQVksbUJBQW1CO0lBQzdCLDBDQUFtQixDQUFBO0lBQ25CLHNDQUFlLENBQUE7SUFDZiwwQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQUVEOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx1QkFBdUI7SUFtRWpFLFlBQXVDLGdCQUEyQixFQUFVLEdBQWUsRUFBVSxNQUFpQjtRQUNwSCxLQUFLLEVBQUUsQ0FBQztRQUQ2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQWxFdEg7Ozs7OztXQU1HO1FBQ00sUUFBRyxHQUFHLEdBQUcsQ0FBQztRQWdDbkI7Ozs7O1dBS0c7UUFDTSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXpCOzs7OztXQUtHO1FBQ00sV0FBTSxHQUFpRCxTQUFTLENBQUM7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QyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFaEYsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7bUhBakpVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLDhYQ25DbkMseXNCQWVBOzJGRG9CYSxzQkFBc0I7a0JBSmxDLFNBQVM7K0JBQ0UsaUJBQWlCOzswQkFzRWQsSUFBSTs7MEJBQUksUUFBUTs2RkEzRHBCLEdBQUc7c0JBQVgsS0FBSztnQkFPRyxJQUFJO3NCQUFaLEtBQUs7Z0JBT0csU0FBUztzQkFBakIsS0FBSztnQkFRRyxLQUFLO3NCQUFiLEtBQUs7Z0JBUUcsSUFBSTtzQkFBWixLQUFLO2dCQVFHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUcsTUFBTTtzQkFBZCxLQUFLO2dCQU9JLFdBQVc7c0JBQXBCLE1BQU07Z0JBRW1CLGFBQWE7c0JBQXRDLFNBQVM7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCY0lucHV0TnVtYmVyQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbmV4cG9ydCBlbnVtIEJjSW5wdXROdW1iZXJTdGF0dXMge1xuICBkZWZhdWx0ID0gJ2RlZmF1bHQnLFxuICBlcnJvciA9ICdlcnJvcicsXG4gIHN1Y2Nlc3MgPSAnc3VjY2Vzcydcbn1cblxuLyoqXG4gKiBDb21wb25lbnRlIGlucHV0IG51bWJlclxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY051bWJlcklucHV0Q29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1pbnB1dC1udW1iZXInLFxuICB0ZW1wbGF0ZVVybDogJ2JjLWlucHV0LW51bWJlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5wdXROdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIGluZGljYSBlbCB2YWxvciBtw61uaW1vIHBvciBlbCBjdWFsIGVsIGNvbnRhZG9yIGVtcGV6YXLDoS5cbiAgICpcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTnVtYmVySW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG1pbiA9ICcwJztcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIG51bcOpcmljbyBub3MgaW5kaWNhIGN1w6FudG8gdGVuZHLDrWEgcXVlIGF1bWVudGFyIG8gZGlzbWludcOtciBlbCBjb250YWRvci5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjTnVtYmVySW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHN0ZXA6IG51bWJlcjtcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIG51bcOpcmljbyBub3MgaW5kaWNhIGVsIHZhbG9yIGluaWNpYWwgcGFyYSBlbCBjb250YWRvci5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjTnVtYmVySW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGluaXRWYWx1ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIGluZGljYSBlbCBMYWJlbCBxdWUgdGVuZHLDrWEgZWwgY29udGFkb3IsIGVzdGUgcHVlZGUgdmVuaXIgZGVzZGUgdW4gb2JqZXRvIGRlIGNvbmZpZ3VyYWNpw7NuIG9cbiAgICogZGlyZWN0YW1lbnRlIGVuIGVsIGF0cmlidXRvLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNOdW1iZXJJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBwZXJtaXRlIGluZGljYXIgZWwgaGludCBxdWUgdGVuZHLDrWEgZWwgY29udGFkb3IsIGVzdGUgcHVlZGUgdmVuaXIgZGVzZGUgdW4gb2JqZXRvIGRlIGNvbmZpZ3VyYWNpw7NuIG9cbiAgICogZGlyZWN0YW1lbnRlIGVuIGVsIGF0cmlidXRvLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNOdW1iZXJJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBib29sZWFuYSBub3MgaW5kaWNhIHNpIGVsIGNvbXBvbmVudGUgZXMgbyBubyByZXF1ZXJpZG8gZW4gZWwgY29udGV4dG8gZGVsIGZvcm11bGFyaW8uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNOdW1iZXJJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgcmVxdWlyZWQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIGluZGljYSBlbCBlc3RhZG8gZGVsIGNvbXBvbmVudGUsIHN1cyB2YWxvcmVzIHB1ZWRlbiBzZXIgOiB7J2Rpc2FibGVkJywgJ2Vycm9yJywgJ3N1Y2Nlc3MnLCAnZGVmYXVsdCd9XG4gICAqXG4gICAqIEB0eXBlIHsoJ2Rpc2FibGVkJyB8ICdlcnJvcicgfCAnc3VjY2VzcycgfCAnZGVmYXVsdCcpfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dE51bWJlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3RhdHVzOiAnZGlzYWJsZWQnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcblxuICAvKipcbiAgICogRXN0ZSBwYXLDoW1ldHJvIG5vcyBpbmRpY2EgdW5hIHNhbGlkYSBwYXJhIGVsIHZhbG9yIGFjdHVhbCBkZWwgc2VsZWN0b3IgbnVtw6lyaWNvLlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPG51bWJlcj59XG4gICAqIEBtZW1iZXJvZiBCY051bWJlcklucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgdXBkYXRlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dE51bWJlcicpIGJjSW5wdXROdW1iZXI6IEVsZW1lbnRSZWY7XG5cbiAgYmNOdW1iZXJJbnB1dEJlaGF2aW9yO1xuXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIGNvbnRyb2xEaXJlY3RpdmU6IE5nQ29udHJvbCwgcHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmNOdW1iZXJJbnB1dEJlaGF2aW9yID0gbmV3IEJjSW5wdXROdW1iZXJCZWhhdmlvcigpO1xuICAgIHRoaXMuYmNOdW1iZXJJbnB1dEJlaGF2aW9yLm91dHB1dCA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmRpc3BhdGNoVmFsdWUodmFsdWUpO1xuICAgIH07XG4gICAgaWYgKGNvbnRyb2xEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnRyb2xEaXJlY3RpdmUudmFsdWVBY2Nlc3NvciA9IHRoaXMgYXMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmNOdW1iZXJJbnB1dEJlaGF2aW9yLnNldEVsZW1lbnQodGhpcy5yZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5iY051bWJlcklucHV0QmVoYXZpb3Iuc2V0VXAoKTtcbiAgICB0aGlzLmRldGVjdFN0YXR1c0NoYW5nZXMoKTtcbiAgICB0aGlzLnZhbGlkYXRlRXJyb3JTdGF0dXMoKVxuICB9XG5cbiAgdmFsaWRhdGVFcnJvclN0YXR1cygpIHtcbiAgICBpZiAodGhpcy5jb250cm9sRGlyZWN0aXZlICYmIHRoaXMuY29udHJvbERpcmVjdGl2ZS5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNvbnRyb2xEaXJlY3RpdmUuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ0lOVkFMSUQnKSB7XG4gICAgICAgICAgdGhpcy5iY051bWJlcklucHV0QmVoYXZpb3Iuc2V0RXJyb3JTdGF0ZShmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJjTnVtYmVySW5wdXRCZWhhdmlvci5zZXRFcnJvclN0YXRlKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuYmNOdW1iZXJJbnB1dEJlaGF2aW9yLm51bWJlcklucHV0KSB7XG4gICAgICB0aGlzLmJjTnVtYmVySW5wdXRCZWhhdmlvci5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBzZXRTdWNjZXNzU3RhdGUoaXNTdWNjZXNzOiBib29sZWFuKSB7XG4gICAgdGhpcy5iY051bWJlcklucHV0QmVoYXZpb3Iuc2V0U3VjY2Vzc1N0YXRlKGlzU3VjY2Vzcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5kZXRlY3RTdGF0dXNDaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgZGlzcGF0Y2hWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5vbklucHV0KHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25JbnB1dCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5iY051bWJlcklucHV0QmVoYXZpb3Iuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLm9uSW5wdXQodmFsdWUpXG4gIH1cblxuICBkZXRlY3RTdGF0dXNDaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLnN0YXR1cyAmJiB0aGlzLmJjSW5wdXROdW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0dXMoKSB7XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuYmNJbnB1dE51bWJlci5uYXRpdmVFbGVtZW50LCB0aGlzLnN0YXR1cywgJ3RydWUnKTtcblxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gQmNJbnB1dE51bWJlclN0YXR1cy5zdWNjZXNzKSB7XG4gICAgICB0aGlzLnNldFN1Y2Nlc3NTdGF0ZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdWNjZXNzU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImJjLWlucHV0LW51bWJlclwiICNpbnB1dE51bWJlcj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1kZWNyZWFzZVwiPlxuICAgIDxlbSBjbGFzcz1cImJjLWljb25cIiBzaXplPVwic21cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBhcmlhLWxhYmVsPVwiRGlzbWludWlyXCI+bWludXM8L2VtPlxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cImJjLWlucHV0LW51bWJlci1jb250YWluZXJcIj5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFthdHRyLm1pbl09XCJtaW5cIiBbYXR0ci5zdGVwXT1cInN0ZXBcIiBbYXR0ci52YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICBbYXR0ci5yZXF1aXJlZF09XCJyZXF1aXJlZCA/IHRydWUgOiBudWxsXCIgY2xhc3M9XCJiYy1pbnB1dFwiIGlkPVwibnVtYmVyMVwiIG1pbj1cIjBcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjFcIlxuICAgICAgdmFsdWU9XCJ2YWx1ZVwiLz5cbiAgICA8bGFiZWwgZm9yPVwibnVtYmVyMVwiPnt7bGFiZWx9fTwvbGFiZWw+XG4gICAgPHNwYW4+e3toaW50fX08L3NwYW4+XG4gIDwvZGl2PlxuICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWluY3JlYXNlXCI+XG4gICAgPGVtIGNsYXNzPVwiYmMtaWNvblwiIHNpemU9XCJzbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJBdW1lbnRhclwiPnBsdXM8L2VtPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19