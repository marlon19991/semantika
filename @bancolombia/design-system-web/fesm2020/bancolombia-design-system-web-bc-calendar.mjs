import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, NgModule } from '@angular/core';
import { BcCalendarBehavior } from '@bancolombia/design-system-behaviors';
import * as i2 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i1 from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Importa el componete de calendario con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcCalendarComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcCalendarComponent extends BcGeneralInputComponent {
    constructor(controlDirective, bcHelperService) {
        super();
        this.controlDirective = controlDirective;
        this.bcHelperService = bcHelperService;
        /**
         * Esta entrada nos identifica el calendario en el DOM.
         *
         * @memberof BcCalendarComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Esta entrada es un string que contiene un  arreglo que nos indica el rango de días, meses o años para el calendario.
         * @type {string}
         * @memberof BcCalendarComponent
         */
        this.fastButtons = "[]";
        /**
         * Esta entrada de tipo string nos indica el tipo de calendario, puede ser simple o puede ser de tipo split.
         *
         * @type {string}
         * @memberof BcCalendarComponent
         */
        this.rangesText = [];
        /**
         * Esta entrada de tipo string define los dias festivos del calendario
         *
         * @type {{ month: number, day: number }[]}
         * @memberof BcCalendarComponent
         */
        this.holidayDates = [];
        /**
         * Esta salida permite obtener el valor del componente.
         *
         * @memberof BcCalendarComponent
         */
        this.updateValue = new EventEmitter();
        this.fastButtonsString = JSON.stringify(this.rangesText);
        this.element = new BcCalendarBehavior();
        this.element.output = (value) => {
            this.dispatchValue(value);
        };
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() {
        this.holidaysParse = JSON.stringify(this.holidayDates);
        this.fastButtonsString = JSON.stringify(this.rangesText);
    }
    ngAfterViewInit() {
        this.element.setId(this.componentId);
        this.element.setUp();
        this.element.getMySelf().addEventListener('selectDate', (e) => {
            this.dispatchValue(e.detail);
        });
    }
    /**
     * Función que muestra el valor del componente.
     *
     * @memberof BcCalendarComponent
     */
    dispatchValue(value) {
        this.onInput(value);
        this.updateValue.emit(this.value);
    }
    onInput(value) {
        this.value = value;
        this.onTouch();
        this.onChange(this.value);
    }
    writeValue(value) { }
}
BcCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCalendarComponent, selector: "bc-calendar", inputs: { calendarType: "calendarType", formatDate: "formatDate", componentId: "componentId", fastButtons: "fastButtons", minDate: "minDate", maxDate: "maxDate", CalendarButton: "CalendarButton", CalendarFilter: "CalendarFilter", CalendarHoliday: "CalendarHoliday", rangesText: "rangesText", holidayDates: "holidayDates" }, outputs: { updateValue: "updateValue" }, usesInheritance: true, ngImport: i0, template: "<div\n  [id]=\"componentId\"\n  class=\"bc-calendar\"\n  [attr.min]=\"minDate\"\n  [attr.max]=\"maxDate\"\n  [attr.formatDate]=\"formatDate\"\n  [attr.CalendarButton]=\"CalendarButton\"\n  [attr.CalendarFilter]=\"CalendarFilter\"\n  [attr.type]=\"calendarType\"\n  [attr.ranges]=\"fastButtons\"\n  [attr.rangesText]=\"rangesText\"\n  [attr.holidayDates]=\"holidaysParse\"\n></div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-calendar', template: "<div\n  [id]=\"componentId\"\n  class=\"bc-calendar\"\n  [attr.min]=\"minDate\"\n  [attr.max]=\"maxDate\"\n  [attr.formatDate]=\"formatDate\"\n  [attr.CalendarButton]=\"CalendarButton\"\n  [attr.CalendarFilter]=\"CalendarFilter\"\n  [attr.type]=\"calendarType\"\n  [attr.ranges]=\"fastButtons\"\n  [attr.rangesText]=\"rangesText\"\n  [attr.holidayDates]=\"holidaysParse\"\n></div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i2.BcHelperService }]; }, propDecorators: { calendarType: [{
                type: Input
            }], formatDate: [{
                type: Input
            }], componentId: [{
                type: Input
            }], fastButtons: [{
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
            }], rangesText: [{
                type: Input
            }], holidayDates: [{
                type: Input
            }], updateValue: [{
                type: Output
            }] } });

/**
 * Importa el componente bcCalendar con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-calendar>
 *
 * @param  {string} calendarType: Tipo de calendario a mostrar 'split' 'simple 'range' default : simple
 * @param {number[]} fastButtons: array de MAXIMO 3 numeros enteros para botones d eseleccion rapida. default: ninguno
 * @param {string} componentId: id html del elemento
 * @example
 * <bc-calendar></bc-calendar>
 *
 * @author: Bancolombia S.A
 */
class BcCalendarModule {
}
BcCalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarModule, declarations: [BcCalendarComponent], imports: [CommonModule], exports: [BcCalendarComponent] });
BcCalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcCalendarComponent
                    ],
                    imports: [CommonModule],
                    exports: [
                        BcCalendarComponent
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCalendarComponent, BcCalendarModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-calendar.mjs.map
