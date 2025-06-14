import * as i0 from '@angular/core';
import { EventEmitter, forwardRef, Component, Input, Output, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BcInputTokenBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';

const INPUT_TOKEN_NUM_3 = 3;

/**
 * Componente input token
 *
 * @export
 * @class BcTokenInputComponent
 * @implements {OnChanges, AfterViewInit}
 */
class BcInputTokenComponent extends BcGeneralInputComponent {
    constructor(bcHelperService) {
        super();
        this.bcHelperService = bcHelperService;
        /**
         * Cantidad de inputs a mostrar.
         *
         * @memberof BcInputTokenComponent
         */
        this.numInputs = INPUT_TOKEN_NUM_3;
        /**
         * Estado del input 'disabled' | 'error' | 'default'.
         *
         * @memberof BcInputTokenComponent
         */
        this.status = 'default';
        /**
         * Muestra la salida del input.
         *
         * @memberof BcInputTokenComponent
         */
        /**
         * Tipo unmasked
         *
         * @memberof BcInputTokenComponent
         */
        this.unmasked = 'false';
        /**
         * Mostrar mensajes informativos
         *
         * @memberof BcInputTokenComponent
         */
        this.showInfoMessage = 'true';
        /**
         * Mensaje informativo personalizado
         *
         * @memberof BcInputTokenComponent
         */
        this.infoMessage = '';
        /**
         * Mensaje error personalizado
         *
         * @memberof BcInputTokenComponent
         */
        this.errorMessage = '';
        this.changeValue = new EventEmitter();
        /**
         * Indica si todos los inputs tienen un valor valido. true | false.
         *
         * @memberof BcInputTokenComponent
         */
        this.validated = new EventEmitter();
        this.control = new FormControl('');
    }
    ngOnInit() {
        var _a;
        this.componentId = (_a = this.componentId) !== null && _a !== void 0 ? _a : this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        this.initInputToken();
    }
    ngOnChanges(changes) {
        var _a;
        if (changes.status) {
            (_a = this.bcTokenInputBehavior) === null || _a === void 0 ? void 0 : _a.setStatus(this.status);
        }
        if (changes.errorMessage) {
            setTimeout(() => {
                var _a;
                (_a = this.bcTokenInputBehavior) === null || _a === void 0 ? void 0 : _a.setStatus(this.status);
            });
        }
    }
    initInputToken() {
        this.bcTokenInputBehavior = new BcInputTokenBehavior();
        this.bcTokenInputBehavior.setId(this.componentId);
        this.bcTokenInputBehavior.outputValue = (param) => {
            this.dispatchChange(param);
            this.changeValue.emit(param);
        };
        this.bcTokenInputBehavior.outputStatus = (param) => {
            this.validated.emit(param);
        };
        this.bcTokenInputBehavior.setUp();
    }
    /**
     * Función que setea el estado del componente.
     *
     * @memberof BcInputSelectV2Component
     */
    setStatus(newStatus) {
        this.bcTokenInputBehavior.setStatus(newStatus);
    }
    /**
     * Cambia el item seleccionado. Se puede enviar un string vacio para limpiar el contenido
     *
     * @memberof BcInputTokenComponent
     */
    setValue(newValue) {
        this.bcTokenInputBehavior.setValue(newValue);
        this.dispatchChange(newValue);
    }
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en disable() o enable()
     *
     * @memberof BcInputSelectV2Component
     */
    setDisabledState(disabled) {
        this.bcTokenInputBehavior.setStatus(disabled ? 'disabled' : 'default');
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
            (_a = this.bcTokenInputBehavior) === null || _a === void 0 ? void 0 : _a.setValue(this.value);
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
BcInputTokenComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputTokenComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcInputTokenComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputTokenComponent, selector: "bc-input-token", inputs: { componentId: "componentId", numInputs: ["num-inputs", "numInputs"], status: "status", unmasked: "unmasked", showInfoMessage: ["show-info-message", "showInfoMessage"], infoMessage: ["info-message", "infoMessage"], errorMessage: ["error-message", "errorMessage"] }, outputs: { changeValue: "changeValue", validated: "validated" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BcInputTokenComponent),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "bcInputToken", first: true, predicate: ["inputToken"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n  [id]=\"componentId\"\n  class=\"bc-input-token\"\n  [attr.status]=\"status\"\n  #inputToken\n>\n  <div\n    class=\"bc-input-token-container\"\n    [attr.num-inputs]=\"numInputs\"\n    [attr.unmasked]=\"unmasked\"\n    [attr.show-info-message]=\"showInfoMessage\"\n    [attr.info-message]=\"infoMessage\"\n    [attr.error-message]=\"errorMessage\"\n  ></div>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputTokenComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-token', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BcInputTokenComponent),
                            multi: true,
                        },
                    ], template: "<div\n  [id]=\"componentId\"\n  class=\"bc-input-token\"\n  [attr.status]=\"status\"\n  #inputToken\n>\n  <div\n    class=\"bc-input-token-container\"\n    [attr.num-inputs]=\"numInputs\"\n    [attr.unmasked]=\"unmasked\"\n    [attr.show-info-message]=\"showInfoMessage\"\n    [attr.info-message]=\"infoMessage\"\n    [attr.error-message]=\"errorMessage\"\n  ></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], numInputs: [{
                type: Input,
                args: ['num-inputs']
            }], status: [{
                type: Input
            }], unmasked: [{
                type: Input,
                args: ['unmasked']
            }], showInfoMessage: [{
                type: Input,
                args: ['show-info-message']
            }], infoMessage: [{
                type: Input,
                args: ['info-message']
            }], errorMessage: [{
                type: Input,
                args: ['error-message']
            }], changeValue: [{
                type: Output
            }], validated: [{
                type: Output
            }], bcInputToken: [{
                type: ViewChild,
                args: ['inputToken']
            }] } });

/**
 * Importa el componente input-token con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-token></bc-input-token>
 *
 * @param  id ID personalizado del input (default: bc-toggle-input-1)
 * @param  disabled default: false
 * @param  required default: false
 * @param  isChecked default: false
 * @author: Bancolombia S.A
 */
class BcInputTokenModule {
}
BcInputTokenModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputTokenModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputTokenModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputTokenModule, declarations: [BcInputTokenComponent], imports: [CommonModule, BcButtonModule, BcIconModule, BcInputModule], exports: [BcInputTokenComponent] });
BcInputTokenModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputTokenModule, imports: [[CommonModule, BcButtonModule, BcIconModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputTokenModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputTokenComponent],
                    imports: [CommonModule, BcButtonModule, BcIconModule, BcInputModule],
                    exports: [BcInputTokenComponent],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputTokenComponent, BcInputTokenModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-token.mjs.map
