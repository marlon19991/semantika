import * as i0 from '@angular/core';
import { EventEmitter, forwardRef, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcInputSelectV2Behavior } from '@bancolombia/design-system-behaviors';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * componente Input Select V2
 *
 * @export
 * @class BcInputSelectV2Component
 * @implements {OnInit}
 * @implements {OnChanges}
 */
class BcInputSelectV2Component extends BcGeneralInputComponent {
    constructor(bcHelperService) {
        super();
        this.bcHelperService = bcHelperService;
        /**
         * Permite configurar el el estado: disabled, error o default
         *
         * @memberof BcInputSelectV2Component
         */
        this.status = 'default';
        /**
         * Funcion que se ejecutara cuando se seleccione una opcion
         *
         * @memberof BcInputSelectV2Component
         */
        this.onChangeValue = new EventEmitter(true);
        this.control = new FormControl('');
        this.componentReady = false;
    }
    ngOnInit() {
        var _a;
        this.componentId = (_a = this.componentId) !== null && _a !== void 0 ? _a : this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        this.initInputSelect();
    }
    ngOnChanges(changes) {
        var _a;
        if (changes.status) {
            (_a = this.bcInputSelectV2Behavior) === null || _a === void 0 ? void 0 : _a.setStatus(this.status);
        }
        if (this.componentReady && !changes.status) {
            if (changes.values) {
                this.bcInputSelectV2Behavior.updateItems(this.values);
            }
            else {
                setTimeout(() => {
                    this.initInputSelect();
                    if (this.value) {
                        this.setValue(this.value);
                    }
                });
            }
        }
    }
    initInputSelect() {
        this.bcInputSelectV2Behavior = new BcInputSelectV2Behavior();
        this.bcInputSelectV2Behavior.setId(this.componentId);
        this.bcInputSelectV2Behavior.outputFunction = (param) => {
            this.dispatchChange(param.value);
            this.onChangeValue.emit(param);
        };
        this.bcInputSelectV2Behavior.setItems(this.values);
        this.bcInputSelectV2Behavior.setUp();
        if (this.initialValue) {
            this.dispatchChange(this.initialValue);
        }
        this.componentReady = true;
    }
    /**
     * Función que setea el estado del componente.
     *
     * @memberof BcInputSelectV2Component
     */
    setStatus(newStatus) {
        this.bcInputSelectV2Behavior.setStatus(newStatus);
    }
    /**
     * Cambia el item seleccionado. Si se envia un string vacio se limpia la seleccion previa y estados.
     * Si son varios valores separar con coma, por ejemplo: 1,5,6
     *
     * @memberof BcInputSelectV2Component
     */
    setValue(newValue) {
        this.bcInputSelectV2Behavior.setSelectedValue(newValue);
        this.dispatchChange(newValue);
    }
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en disable() o enable()
     *
     * @memberof BcInputSelectV2Component
     */
    setDisabledState(disabled) {
        this.bcInputSelectV2Behavior.setStatus(disabled ? 'disabled' : 'default');
    }
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en reset()
     *
     * @memberof BcInputSelectV2Component
     */
    writeValue(value) {
        this.dispatchChange(value);
    }
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en reset() o writeValue()
     *
     * @memberof BcInputSelectV2Component
     */
    dispatchChange(value) {
        var _a;
        this.value = value;
        if (value === null || value === undefined) {
            (_a = this.bcInputSelectV2Behavior) === null || _a === void 0 ? void 0 : _a.setSelectedValue(this.value);
        }
        else {
            this.onTouch();
            this.control.markAsTouched();
            this.control.markAsDirty();
        }
        this.onChange(this.value);
        this.control.setValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
}
BcInputSelectV2Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Component, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcInputSelectV2Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputSelectV2Component, selector: "bc-input-select-v2", inputs: { componentId: "componentId", type: "type", label: "label", iconName: "iconName", helpText: "helpText", status: "status", initialValue: "initialValue", values: "values" }, outputs: { onChangeValue: "onChangeValue" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BcInputSelectV2Component),
            multi: true
        }
    ], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n  [id]=\"componentId\"\n  [attr.type]=\"type\"\n  [attr.label]=\"label\"\n  [attr.iconName]=\"iconName\"\n  [attr.helpText]=\"helpText\"\n  [attr.status]=\"status\"\n  [attr.initialValue]=\"initialValue\"\n></div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Component, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-select-v2', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BcInputSelectV2Component),
                            multi: true
                        }
                    ], template: "<div\n  [id]=\"componentId\"\n  [attr.type]=\"type\"\n  [attr.label]=\"label\"\n  [attr.iconName]=\"iconName\"\n  [attr.helpText]=\"helpText\"\n  [attr.status]=\"status\"\n  [attr.initialValue]=\"initialValue\"\n></div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], type: [{
                type: Input
            }], label: [{
                type: Input
            }], iconName: [{
                type: Input
            }], helpText: [{
                type: Input
            }], status: [{
                type: Input
            }], initialValue: [{
                type: Input
            }], values: [{
                type: Input
            }], onChangeValue: [{
                type: Output
            }] } });

/**
 * Importa el componente BcInputSelectV2 con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-select-v2></bc-input-select-v2>
 *
 * @param  [iconName](opcional): Texto que indica el id del componente
 * @param  [label](opcional): Texto que indica el placeholder del select
 * @param  [helpText](opcional): Texto que aparece en la parte de abajo del select
 * @param  values: Array tipo [{ label: string, value: string, icon: string }] que indica los valores del select
 * @param  onChange: Output Valor de salida que indica los valores seleccionados
 *
 * @example
 *
 * <bc-input-select-v2
 * [id] = "'bc-select1'"
 * [values]="objSelect.values"
 * [label]="objSelect.placeholder"
 * [helpText]="objSelect.textBelow"
 * (onChange) = "showSelectedValue($event)"
 * ></bc-input-select-v2>
 *
 * @author: Bancolombia S.A
 */
class BcInputSelectV2Module {
}
BcInputSelectV2Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputSelectV2Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Module, declarations: [BcInputSelectV2Component], imports: [CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule], exports: [BcInputSelectV2Component] });
BcInputSelectV2Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Module, imports: [[CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputSelectV2Component],
                    imports: [CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule],
                    exports: [BcInputSelectV2Component],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputSelectV2Component, BcInputSelectV2Module };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-select-v2.mjs.map
