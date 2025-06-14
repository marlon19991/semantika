import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, ViewChild, NgModule } from '@angular/core';
import { BcInputNumberBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i1 from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';

var BcInputNumberStatus;
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
class BcInputNumberComponent extends BcGeneralInputComponent {
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
        }], ctorParameters: function () {
        return [{ type: i1.NgControl, decorators: [{
                        type: Self
                    }, {
                        type: Optional
                    }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }];
    }, propDecorators: { min: [{
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

/**
 * Importa el componente input-number con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-number></bc-input-number>
 *
 * @param  id ID personalizado del input (default: bc-toggle-input-1)
 * @param  disabled default: false
 * @param  required default: false
 * @param  isChecked default: false
 * @author: Bancolombia S.A
 */
class BcInputNumberModule {
}
BcInputNumberModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputNumberModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberModule, declarations: [BcInputNumberComponent], imports: [CommonModule, BcButtonModule, BcIconModule, BcInputModule], exports: [BcInputNumberComponent] });
BcInputNumberModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberModule, imports: [[CommonModule, BcButtonModule, BcIconModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputNumberComponent],
                    imports: [CommonModule, BcButtonModule, BcIconModule, BcInputModule],
                    exports: [BcInputNumberComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputNumberComponent, BcInputNumberModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-number.mjs.map
