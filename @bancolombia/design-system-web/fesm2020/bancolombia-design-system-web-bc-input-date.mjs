import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, NgModule } from '@angular/core';
import { BcInputDateBehavior } from '@bancolombia/design-system-behaviors';
import * as i2 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i1 from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';

/**
 * Componente rango de fechas.
 *
 * @export
 * @class BcInputDateComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcInputDateComponent extends BcGeneralInputComponent {
    constructor(controlDirective, bcHelperService) {
        super();
        this.controlDirective = controlDirective;
        this.bcHelperService = bcHelperService;
        /**
         * Id del componente.
         *
         * @memberof BcInputDateComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Esta entrada de tipo string define los dias festivos del calendario
         *
         * @type {{ month: number, day: number }[]}
         * @memberof BcInputDateComponent
         */
        this.holidayDates = [];
        /**
         *
         *
         * @memberof BcInputDateComponent
         */
        this.updateValue = new EventEmitter();
        this.element = new BcInputDateBehavior();
        this.element.output = (value) => {
            this.dispatchValue(value);
        };
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() {
        this.holidaysParse = JSON.stringify(this.holidayDates);
    }
    ngAfterViewInit() {
        this.element.setId(this.componentId);
        this.element.setUp();
    }
    dispatchValue(value) {
        this.onInput(value);
        this.updateValue.emit(this.value);
    }
    onInput(value) {
        this.value = value;
        this.onTouch();
        this.onChange(this.value);
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        if (this.element.inputDate) {
            this.element.inputDate.disabled = this.disabled;
        }
    }
    writeValue(value) {
        if (!this.element.inputDate) {
            return;
        }
        if (value) {
            this.value = value;
            this.element.inputDate.value = this.value;
            const event = new Event('focusout');
            this.element.inputDate.dispatchEvent(event);
        }
        else {
            this.element.setDefaultStatusInput(false);
        }
    }
    /**
      * Cambia la clase del input a success.
      *
      * @memberof BcInputDateComponent
      */
    suceessClassActive() {
        this.element.successInputUpdateClass();
    }
    /**
      * Cambia la clase del input a su estado por defecto.
      *
      * @memberof BcInputDateComponent
      */
    defaultClassActive() {
        this.element.setDefaultStatusInputClass();
    }
}
BcInputDateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcInputDateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputDateComponent, selector: "bc-input-date", inputs: { componentId: "componentId", type: "type", minDate: "minDate", maxDate: "maxDate", CalendarButton: "CalendarButton", CalendarFilter: "CalendarFilter", CalendarHoliday: "CalendarHoliday", formatDate: "formatDate", validateInput: "validateInput", errorText: "errorText", successText: "successText", language: "language", holidayDates: "holidayDates" }, outputs: { updateValue: "updateValue" }, usesInheritance: true, ngImport: i0, template: "<div\n  [id]=\"componentId\"\n  class=\"bc-input-date bc-w-100\"\n  [attr.min]=\"minDate\"\n  [attr.max]=\"maxDate\"\n  [attr.validateInput]=\"validateInput\"\n  [attr.errorText]=\"errorText\"\n  [attr.successText]=\"successText\"\n  [attr.language]=\"language\"\n  [attr.formatDate]=\"formatDate\"\n  [attr.CalendarButton]=\"CalendarButton\"\n  [attr.CalendarFilter]=\"CalendarFilter\"\n  [attr.type]=\"type\"\n  [attr.holidayDates]=\"holidaysParse\">\n  <ng-content></ng-content>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-date', template: "<div\n  [id]=\"componentId\"\n  class=\"bc-input-date bc-w-100\"\n  [attr.min]=\"minDate\"\n  [attr.max]=\"maxDate\"\n  [attr.validateInput]=\"validateInput\"\n  [attr.errorText]=\"errorText\"\n  [attr.successText]=\"successText\"\n  [attr.language]=\"language\"\n  [attr.formatDate]=\"formatDate\"\n  [attr.CalendarButton]=\"CalendarButton\"\n  [attr.CalendarFilter]=\"CalendarFilter\"\n  [attr.type]=\"type\"\n  [attr.holidayDates]=\"holidaysParse\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i2.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], type: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], CalendarButton: [{
                type: Input
            }], CalendarFilter: [{
                type: Input
            }], CalendarHoliday: [{
                type: Input
            }], formatDate: [{
                type: Input
            }], validateInput: [{
                type: Input
            }], errorText: [{
                type: Input
            }], successText: [{
                type: Input
            }], language: [{
                type: Input
            }], holidayDates: [{
                type: Input
            }], updateValue: [{
                type: Output
            }] } });

/**
 * Importa el componente bcInputDate con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-date></bc-input-date>
 * @param componentId: string de id de html
 * IMPORTANTE: Este componente debe tener 2 input en su interior
 *
 *
 * @author: Bancolombia S.A
 */
class BcInputDateModule {
}
BcInputDateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputDateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateModule, declarations: [BcInputDateComponent], imports: [CommonModule, BcInputModule], exports: [BcInputDateComponent] });
BcInputDateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateModule, imports: [[CommonModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputDateComponent],
                    imports: [CommonModule, BcInputModule],
                    exports: [BcInputDateComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputDateComponent, BcInputDateModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-date.mjs.map
