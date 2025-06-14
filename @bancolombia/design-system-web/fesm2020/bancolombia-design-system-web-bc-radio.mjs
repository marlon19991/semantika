import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Output, Input, Host, NgModule } from '@angular/core';
import * as i2 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i1 from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

class BcRadioGroupComponent extends BcGeneralInputComponent {
    constructor(controlDirective) {
        super();
        this.controlDirective = controlDirective;
        this.changeValue = new EventEmitter();
        this.onDisabled = new EventEmitter();
        this.disabled = false;
        this.defaultValue = undefined;
        this.background = 'regular';
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() {
        this.writeValue(this.defaultValue);
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.onDisabled.emit(isDisabled);
    }
    getIsDisabled() {
        return this.disabled;
    }
    writeValue(value) {
        if (typeof value != 'undefined') {
            this.changeValue.emit(value);
            this.value = value;
        }
    }
}
BcRadioGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioGroupComponent, deps: [{ token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
BcRadioGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcRadioGroupComponent, selector: "bc-radio-group", inputs: { disabled: "disabled", defaultValue: "defaultValue", name: "name", background: "background" }, outputs: { changeValue: "changeValue", onDisabled: "onDisabled" }, usesInheritance: true, ngImport: i0, template: "<div\n  class=\"bc-radio-group\"\n  [class.bc-radio-group-background-dark]=\"this.background === 'dark'\"\n  role=\"radiogroup\"\n>\n  <ng-content></ng-content>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-radio-group', template: "<div\n  class=\"bc-radio-group\"\n  [class.bc-radio-group-background-dark]=\"this.background === 'dark'\"\n  role=\"radiogroup\"\n>\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }]; }, propDecorators: { changeValue: [{
                type: Output
            }], onDisabled: [{
                type: Output
            }], disabled: [{
                type: Input
            }], defaultValue: [{
                type: Input
            }], name: [{
                type: Input
            }], background: [{
                type: Input
            }] } });

/**
 * Componente Radio Button
 *
 * @export
 * @class BcRadioComponent
 * @implements {OnInit}
 */
class BcRadioComponent {
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
BcRadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioComponent, deps: [{ token: BcRadioGroupComponent, host: true, optional: true }, { token: i2.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcRadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcRadioComponent, selector: "bc-radio", inputs: { id: "id", name: "name", value: "value", enabled: "enabled" }, outputs: { changeStateForParent: "changeStateForParent" }, ngImport: i0, template: "<label class=\"bc-radio-label\" [attr.disabled]=\"!enabled ? 'disabled' : null\">\n  <input\n    type=\"radio\"\n    [id]=\"id\"\n    [name]=\"radioGroupName\"\n    [value]=\"value\"\n    [disabled]=\"!enabled\"\n    [checked]=\"isRadioChecked\"\n    (click)=\"toggle($event)\"\n  />\n  <div>\n    <ng-content></ng-content>\n  </div>\n</label>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-radio', template: "<label class=\"bc-radio-label\" [attr.disabled]=\"!enabled ? 'disabled' : null\">\n  <input\n    type=\"radio\"\n    [id]=\"id\"\n    [name]=\"radioGroupName\"\n    [value]=\"value\"\n    [disabled]=\"!enabled\"\n    [checked]=\"isRadioChecked\"\n    (click)=\"toggle($event)\"\n  />\n  <div>\n    <ng-content></ng-content>\n  </div>\n</label>\n" }]
        }], ctorParameters: function () { return [{ type: BcRadioGroupComponent, decorators: [{
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

/**
 * Importa el componete de Radio Buttons con
 * los diseños de Bancolombia S.A.
 *
 * @package bc-radio-group, bc-radio
 *   @Component bc-radio-group
 *   @Output onChange() evento que se dispara al detectar cambios en el grupo de bc-radio,
 *           devuelve un objeto con el elemento activo: { label: string, checked: boolean value: string }
 *
 * @package bc-radio
 *   @Component bc-radio
 *   @param  id Identificador unico||  (default)
 *   @param  name Nombre del componente ||  (default)
 *   @param  value Valor del componente ||  (default)
 *   @param  enabled Habilita o deshabilita el componente || true (default)
 *   @param  checked Selecciona el check|| false (default)
 *   @example
 *    <bc-radio-group (onChange)="yourFunction($event)">
 *         <bc-radio value="1">Default 1</bc-radio>
 *         <bc-radio value="2">Default 2</bc-radio>
 *       </bc-radio-group>
 *
 *
 * @author: Bancolombia S.A
 */
class BcRadioModule {
}
BcRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioModule, declarations: [BcRadioGroupComponent, BcRadioComponent], imports: [CommonModule, BcIconModule], exports: [BcRadioGroupComponent, BcRadioComponent] });
BcRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioModule, imports: [[CommonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcRadioGroupComponent, BcRadioComponent],
                    imports: [CommonModule, BcIconModule],
                    exports: [BcRadioGroupComponent, BcRadioComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcRadioComponent, BcRadioGroupComponent, BcRadioModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-radio.mjs.map
