import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, NgModule } from '@angular/core';
import { BcInputDateRangeBehavior, INPUT_ERROR } from '@bancolombia/design-system-behaviors';
import * as i2 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i1 from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';

class BcInputDateRangeComponent extends BcGeneralInputComponent {
    constructor(controlDirective, bcHelperService, renderer, elmRef) {
        super();
        this.controlDirective = controlDirective;
        this.bcHelperService = bcHelperService;
        this.renderer = renderer;
        this.elmRef = elmRef;
        /**
         * Id del componente.
         *
         * @memberof BcInputDateRangeComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Esta entrada es un string que contiene un  arreglo que nos indica el rango de días, meses o años para el calendario.
         * @type {string}
         * @memberof BcInputDateRangeComponent
         */
        this.fastButtons = "[]";
        /**
         * Atributo rango de fechas.
         *
         * @type {[]}
         * @memberof BcInputDateRangeComponent
         */
        this.rangesText = [];
        /**
         * Esta entrada de tipo string define los dias festivos del calendario
         *
         * @type {{ month: number, day: number }[]}
         * @memberof BcInputDateRangeComponent
         */
        this.holidayDates = [];
        /**
         * Devuelve las fechas seleccionadas (inicio/fin)
         *
         * @memberof BcInputDateRangeComponent
         */
        this.updateValue = new EventEmitter();
        this.element = new BcInputDateRangeBehavior();
        this.element.output = (value) => {
            this.dispatchValue(value);
        };
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() { }
    /**
     * Configura el behavior del input-date-range
     *
     * @memberof BcInputDateRangeComponent
     */
    ngAfterViewInit() {
        this.element.setId(this.componentId);
        this.element.setUp();
        this.validateErrorState();
    }
    /**
     * Valida si los inpust tienen el estado error
     *
     * @memberof BcInputDateRangeComponent
     */
    validateErrorState() {
        const inputs = this.elmRef.nativeElement.querySelectorAll('input');
        if (this.controlDirective && this.controlDirective.statusChanges) {
            this.controlDirective.statusChanges.subscribe((element) => {
                if (inputs) {
                    inputs.forEach((input) => {
                        if (element === 'INVALID') {
                            this.renderer.addClass(input, INPUT_ERROR);
                        }
                        else {
                            this.renderer.removeClass(input, INPUT_ERROR);
                        }
                    });
                }
            });
        }
    }
    /**
     * Obtiene el valor output del componente para emitir los cambios
     *
     * @memberof BcInputDateRangeComponent
     */
    dispatchValue(value) {
        this.onInput(value);
        this.updateValue.emit(this.value);
    }
    /**
     * Actualiza el value del componente y sus cambios
     *
     * @memberof BcInputDateRangeComponent
     */
    onInput(value) {
        this.value = value;
        this.onTouch();
        this.onChange(this.value);
    }
    /**
     * Realiza actualizacion de los inputs
     *
     * @memberof BcInputDateRangeComponent
     */
    writeValue(value) {
        if (value) {
            if (value.initialDate && value.toDate) {
                if (this.element.inputDate && this.element.inputDateTwo) {
                    this.element.setValues(value.initialDate, value.toDate);
                }
            }
            else if (!value.initialDate && !value.toDate) {
                this.cleanInputsValue();
            }
        }
        else {
            if (this.element.inputDate && this.element.inputDateTwo) {
                this.cleanInputsValue();
            }
        }
    }
    /**
     * Limpia y actualiza los estados activos de los input
     *
     * @memberof BcInputDateRangeComponent
     */
    cleanInputsValue() {
        this.element.inputDate.value = '';
        this.element.inputDateTwo.value = '';
        this.element.inputDate.classList.remove('bc-active');
        this.element.inputDateTwo.classList.remove('bc-active');
        this.defaultClassActive();
        this.defaultClassActiveTwo();
    }
    /**
     * Actualiza el estado disabled a el componente
     *
     * @memberof BcInputDateRangeComponent
     */
    setDisabledState(isDisabled) {
        if (this.element.inputDate && this.element.inputDateTwo) {
            this.element.setDisabled(isDisabled);
        }
    }
    /**
     * Actualiza la clase a success del inputDate
     *
     * @memberof BcInputDateRangeComponent
     */
    successClassActive() {
        this.element.successInputUpdateClass();
    }
    /**
     * Actualiza la clase a success del inputDateTwo
     *
     * @memberof BcInputDateRangeComponent
     */
    successClassActiveTwo() {
        this.element.successInputTwoUpdateClass();
    }
    /**
     * Actualiza la clase a error del inputDate
     *
     * @memberof BcInputDateRangeComponent
     */
    errorClassActive() {
        this.element.errorInputUpdateClass();
    }
    /**
     * Actualiza la clase a error del inputDateTwo
     *
     * @memberof BcInputDateRangeComponent
     */
    errorClassActiveTwo() {
        this.element.errorInputTwoUpdateClass();
    }
    /**
     * Actualiza el estado default del inputDate
     *
     * @memberof BcInputDateRangeComponent
     */
    defaultClassActive() {
        this.element.setDefaultStatusInputClass();
    }
    /**
     * Actualiza el estado default del inputDateTwo
     *
     * @memberof BcInputDateRangeComponent
     */
    defaultClassActiveTwo() {
        this.element.setDefaultStatusInputTwoClass();
    }
    /**
     * Cierra el calendario del InputDateRange
     *
     * @memberof BcInputDateRangeComponent
     */
    closeDropdown() {
        this.element.closeDropdown();
    }
}
BcInputDateRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.BcHelperService }, { token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcInputDateRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputDateRangeComponent, selector: "bc-input-date-range", inputs: { componentId: "componentId", fastButtons: "fastButtons", rangesText: "rangesText", minDate: "minDate", maxDate: "maxDate", CalendarHoliday: "CalendarHoliday", validatesInput: "validatesInput", errorText: "errorText", errorTextTwo: "errorTextTwo", successText: "successText", disabledScroll: "disabledScroll", language: "language", holidayDates: "holidayDates", successTextTwo: "successTextTwo" }, outputs: { updateValue: "updateValue" }, usesInheritance: true, ngImport: i0, template: "<div [id]=componentId class=\"bc-input-date-range\" [attr.fastButtons]=\"fastButtons\" [attr.rangesText]=\"rangesText\"\n  [attr.min]=\"minDate\" [attr.max]=\"maxDate\" [attr.successText]=\"successText\" [attr.successTextTwo]=\"successTextTwo\"\n  [attr.errorTextTwo]=\"errorTextTwo\" [attr.errorText]=\"errorText\" [attr.holidayDates]=\"holidayDates\"\n  [attr.validateInputs]=\"validatesInput\" [attr.disabledScroll]=\"disabledScroll\" [attr.language]=\"language\">\n  <ng-content></ng-content>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-date-range', template: "<div [id]=componentId class=\"bc-input-date-range\" [attr.fastButtons]=\"fastButtons\" [attr.rangesText]=\"rangesText\"\n  [attr.min]=\"minDate\" [attr.max]=\"maxDate\" [attr.successText]=\"successText\" [attr.successTextTwo]=\"successTextTwo\"\n  [attr.errorTextTwo]=\"errorTextTwo\" [attr.errorText]=\"errorText\" [attr.holidayDates]=\"holidayDates\"\n  [attr.validateInputs]=\"validatesInput\" [attr.disabledScroll]=\"disabledScroll\" [attr.language]=\"language\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () {
        return [{ type: i1.NgControl, decorators: [{
                        type: Self
                    }, {
                        type: Optional
                    }] }, { type: i2.BcHelperService }, { type: i0.Renderer2 }, { type: i0.ElementRef }];
    }, propDecorators: { componentId: [{
                type: Input
            }], fastButtons: [{
                type: Input
            }], rangesText: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], CalendarHoliday: [{
                type: Input
            }], validatesInput: [{
                type: Input
            }], errorText: [{
                type: Input
            }], errorTextTwo: [{
                type: Input
            }], successText: [{
                type: Input
            }], disabledScroll: [{
                type: Input
            }], language: [{
                type: Input
            }], holidayDates: [{
                type: Input
            }], successTextTwo: [{
                type: Input
            }], updateValue: [{
                type: Output
            }] } });

/**
 * Importa el componente bcInputDate con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-date-range></bc-input-file-range>
 * @param {number[]} fastButtons: botones de accion rapida para los rangos dl calendario
 * @param componentId: string de id de html
 * IMPORTANTE: Este componente debe tener 2 input en su interior
 *
 *
 * @author: Bancolombia S.A
 */
class BcInputDateRangeModule {
}
BcInputDateRangeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputDateRangeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeModule, declarations: [BcInputDateRangeComponent], imports: [CommonModule, BcInputModule], exports: [BcInputDateRangeComponent] });
BcInputDateRangeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeModule, imports: [[CommonModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputDateRangeComponent],
                    imports: [CommonModule, BcInputModule],
                    exports: [BcInputDateRangeComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputDateRangeComponent, BcInputDateRangeModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-date-range.mjs.map
