import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, Host, NgModule } from '@angular/core';
import * as i3 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcCheckboxBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@angular/forms';
import { CommonModule } from '@angular/common';

class BcCheckBoxGroupComponent extends BcGeneralInputComponent {
    constructor(controlDirective) {
        super();
        this.controlDirective = controlDirective;
        /**
         * Indica si el checkbox esta habilitado
         *
         * @type {boolean}
         * @memberof BcCheckboxComponent
         */
        this.enabled = true;
        this.onDisabled = new EventEmitter();
        this.changeValue = new EventEmitter();
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    setDisabledState(isDisabled) {
        this.enabled = isDisabled;
        this.onDisabled.emit(this.enabled);
    }
    writeValue(value) {
        if (typeof value != 'undefined') {
            this.value = value;
            this.changeValue.emit(this.controlDirective.value);
        }
    }
}
BcCheckBoxGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckBoxGroupComponent, deps: [{ token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
BcCheckBoxGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCheckBoxGroupComponent, selector: "bc-checkbox-group", inputs: { enabled: "enabled" }, outputs: { onDisabled: "onDisabled", changeValue: "changeValue" }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckBoxGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-checkbox-group', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () {
        return [{ type: i1.NgControl, decorators: [{
                        type: Self
                    }, {
                        type: Optional
                    }] }];
    }, propDecorators: { enabled: [{
                type: Input
            }], onDisabled: [{
                type: Output
            }], changeValue: [{
                type: Output
            }] } });

/**
 * Importa el componente de Checks con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcCheckboxComponent
 */
class BcCheckboxComponent extends BcGeneralInputComponent {
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
BcCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckboxComponent, deps: [{ token: i0.ElementRef }, { token: i1.NgControl, optional: true, self: true }, { token: BcCheckBoxGroupComponent, host: true, optional: true }, { token: i3.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCheckboxComponent, selector: "bc-checkbox", inputs: { id: "id", name: "name", currentValue: ["value", "currentValue"], label: "label", enabled: "enabled", isChecked: "isChecked", indeterminate: "indeterminate" }, outputs: { changeState: "changeState", changeStateForParent: "changeStateForParent" }, usesInheritance: true, ngImport: i0, template: "<label id=\"{{id}}\" class=\"bc-container-checkbox\">{{label}}\n  <input type=\"checkbox\" (click)=\"toggle()\" tabindex=\"{{!enabled ? -1 : 0}}\" [id]=id [name]=name \n    [value]=value [disabled]=!enabled [indeterminate]=indeterminate [checked]=isCheckBoxChecked>\n  <span class=\"bc-checkbox\" tabindex=\"-1\"></span>\n</label>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-checkbox', template: "<label id=\"{{id}}\" class=\"bc-container-checkbox\">{{label}}\n  <input type=\"checkbox\" (click)=\"toggle()\" tabindex=\"{{!enabled ? -1 : 0}}\" [id]=id [name]=name \n    [value]=value [disabled]=!enabled [indeterminate]=indeterminate [checked]=isCheckBoxChecked>\n  <span class=\"bc-checkbox\" tabindex=\"-1\"></span>\n</label>\n" }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: i1.NgControl, decorators: [{
                        type: Self
                    }, {
                        type: Optional
                    }] }, { type: BcCheckBoxGroupComponent, decorators: [{
                        type: Optional
                    }, {
                        type: Host
                    }] }, { type: i3.BcHelperService }];
    }, propDecorators: { id: [{
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

/**
 * Importa el componete de Checks con
 * los diseños de Bancolombia S.A.
 * @package bc-checkbox
 * @Component bc-checkbox
 * @param  id Identificador unico||  (default)
 * @param  name Nombre del componente ||  (default)
 * @param  value Valor del componente ||  (default)
 * @param  label Texto del checkbox || (default)
 * @param  enabled Habilita o deshabilita el componente || true (default)
 * @param  isChecked Selecciona el check|| false (default)
 * @param  indeterminate Define el componente como indeterminado || false (default)
 * @param  themeDark Aplica diferentes estilos si se usara en aplicaciones oscuras || false (default)
 * @example
 *                    <bc-checkbox [isChecked]="true"></bc-checkbox>
 *
 *
 * @author: Bancolombia S.A
 */
class BcCheckboxModule {
}
BcCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckboxModule, declarations: [BcCheckboxComponent, BcCheckBoxGroupComponent], imports: [CommonModule], exports: [BcCheckboxComponent, BcCheckBoxGroupComponent] });
BcCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckboxModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCheckboxComponent, BcCheckBoxGroupComponent],
                    imports: [CommonModule],
                    exports: [BcCheckboxComponent, BcCheckBoxGroupComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCheckBoxGroupComponent, BcCheckboxComponent, BcCheckboxModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-checkbox.mjs.map
