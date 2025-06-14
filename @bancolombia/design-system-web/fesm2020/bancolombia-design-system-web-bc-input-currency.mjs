import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, ViewChild, NgModule } from '@angular/core';
import { BcInputCurrencyBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { CommonModule } from '@angular/common';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';

var BcInputCurrencyStatus;
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
class BcInputCurrencyComponent extends BcGeneralInputComponent {
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

/**
 * Importa el componente input-currency con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-currency></bc-input-currency>
 *
 * @param  id ID personalizado del input (default: bc-toggle-input-1)
 * @param  disabled default: false
 * @param  required default: false
 * @param  isChecked default: false
 * @author: Bancolombia S.A
 */
class BcInputCurrencyModule {
}
BcInputCurrencyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCurrencyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputCurrencyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCurrencyModule, declarations: [BcInputCurrencyComponent], imports: [CommonModule, BcButtonModule, BcIconModule, BcInputModule, FormsModule, ReactiveFormsModule], exports: [BcInputCurrencyComponent] });
BcInputCurrencyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCurrencyModule, imports: [[CommonModule, BcButtonModule, BcIconModule, BcInputModule, FormsModule, ReactiveFormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCurrencyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputCurrencyComponent],
                    imports: [CommonModule, BcButtonModule, BcIconModule, BcInputModule, FormsModule, ReactiveFormsModule],
                    exports: [BcInputCurrencyComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputCurrencyComponent, BcInputCurrencyModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-currency.mjs.map
