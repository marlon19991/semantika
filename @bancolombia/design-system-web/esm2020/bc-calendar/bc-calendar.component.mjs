import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { BcCalendarBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Importa el componete de calendario con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcCalendarComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class BcCalendarComponent extends BcGeneralInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhbGVuZGFyL2JjLWNhbGVuZGFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jYWxlbmRhci9iYy1jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBbUIsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQUNyRzs7Ozs7OztHQU9HO0FBS0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHVCQUF1QjtJQWlHOUQsWUFBdUMsZ0JBQTJCLEVBQVUsZUFBZ0M7UUFDMUcsS0FBSyxFQUFFLENBQUM7UUFENkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBOUU1Rzs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RDs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUEwQ3BDOzs7OztXQUtHO1FBQ00sZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUVuQzs7Ozs7V0FLRztRQUNNLGlCQUFZLEdBQXFDLEVBQUUsQ0FBQztRQUU3RDs7OztXQUlHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRW5ELHNCQUFpQixHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7UUFDRixJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxJQUErQixDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUVILGFBQWEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVUsSUFBVSxDQUFDOztnSEExSXJCLG1CQUFtQjtvR0FBbkIsbUJBQW1CLHViQ2hCaEMsZ1lBYUE7MkZER2EsbUJBQW1CO2tCQUovQixTQUFTOytCQUNFLGFBQWE7OzBCQW9HVixJQUFJOzswQkFBSSxRQUFROzBFQXhGcEIsWUFBWTtzQkFBcEIsS0FBSztnQkFRRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFRRyxPQUFPO3NCQUFmLEtBQUs7Z0JBUUcsT0FBTztzQkFBZixLQUFLO2dCQVFHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFRRyxlQUFlO3NCQUF2QixLQUFLO2dCQVFHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBUUcsWUFBWTtzQkFBcEIsS0FBSztnQkFPSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXQsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJjQ2FsZW5kYXJCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UsIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmV0ZSBkZSBjYWxlbmRhcmlvIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0NhbGVuZGFyQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNDYWxlbmRhckNvbXBvbmVudCBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgZWxlbWVudDtcbiAgaG9saWRheXNQYXJzZTogc3RyaW5nO1xuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgZWwgdGlwbyBkZSBjYWxlbmRhcmlvLCBwdWVkZSBzZXIgc2ltcGxlIG8gcHVlZGUgc2VyIGRlIHRpcG8gc3BsaXQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhbGVuZGFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjYWxlbmRhclR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRXN0YSBlbnRyYWRhIGRlIHR1cG8gc3RyaW5nIHBlcm1pdGUgdmVyIGVsIGZvcm1hdG8gZGUgbGEgZmVjaGEgeWEgc2VhIEREL01NL1lZIG8gc29sbyBtZXMgeSBhw7FvIG8gc29sbyBhw7FvLlxuICAqIHBvciBsbyBjdWFsIGVsIHR5cGUgZGVsIElOUFVUIHRhbWJpZW4gY2FtYmlhIGRlcGVuZGllbmRvIGVzdGUgdGlwbyBkZSBkYXRvIHNpZW5kbyBkZSB0aXBvIGRhdGUgc2kgZXMgZnVsbERhdGUgeSBzaWVuZG9cbiAgKiBkZSB0aXBvIHN0cmluZyBzaSBlcyBtZWRpdW1EYXRlIG8gc2hvcnREYXRlXG4gICogQHR5cGUgeygnZnVsbERhdGUnIHwgJ21lZGl1bURhdGUnIHwgJ3Nob3J0RGF0ZScpfVxuICAqIEBtZW1iZXJvZiBCY0NhbGVuZGFyQ29tcG9uZW50XG4gICovXG4gIEBJbnB1dCgpIGZvcm1hdERhdGU6ICdmdWxsRGF0ZScgfCAnbWVkaXVtRGF0ZScgfCAnc2hvcnREYXRlJztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIG5vcyBpZGVudGlmaWNhIGVsIGNhbGVuZGFyaW8gZW4gZWwgRE9NLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNDYWxlbmRhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGVzIHVuIHN0cmluZyBxdWUgY29udGllbmUgdW4gIGFycmVnbG8gcXVlIG5vcyBpbmRpY2EgZWwgcmFuZ28gZGUgZMOtYXMsIG1lc2VzIG8gYcOxb3MgcGFyYSBlbCBjYWxlbmRhcmlvLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYWxlbmRhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZmFzdEJ1dHRvbnM6IHN0cmluZyA9IFwiW11cIjtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgbGEgZmVjaGEgbWluaW1hIHNlbGVjY2lvbmFibGUgZGVsIGNhbGVuZGFyaW8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhbGVuZGFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIHN0cmluZyBub3MgaW5kaWNhIGxhIGZlY2hhIG1heGltYSBzZWxlY2Npb25hYmxlIGRlbCBjYWxlbmRhcmlvLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYWxlbmRhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbWF4RGF0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIGluZGljYSBlbCB0aXBvIGRlIGNhbGVuZGFyaW8sIHB1ZWRlIHNlciBzaW1wbGUgbyBwdWVkZSBzZXIgZGUgdGlwbyBzcGxpdC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FsZW5kYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIENhbGVuZGFyQnV0dG9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIHN0cmluZyBub3MgaW5kaWNhIGVsIHRpcG8gZGUgY2FsZW5kYXJpbywgcHVlZGUgc2VyIHNpbXBsZSBvIHB1ZWRlIHNlciBkZSB0aXBvIHNwbGl0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYWxlbmRhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgQ2FsZW5kYXJGaWx0ZXI6IHN0cmluZztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgZWwgdGlwbyBkZSBjYWxlbmRhcmlvLCBwdWVkZSBzZXIgc2ltcGxlIG8gcHVlZGUgc2VyIGRlIHRpcG8gc3BsaXQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhbGVuZGFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBDYWxlbmRhckhvbGlkYXk6IHN0cmluZztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgZWwgdGlwbyBkZSBjYWxlbmRhcmlvLCBwdWVkZSBzZXIgc2ltcGxlIG8gcHVlZGUgc2VyIGRlIHRpcG8gc3BsaXQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhbGVuZGFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSByYW5nZXNUZXh0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgZGVmaW5lIGxvcyBkaWFzIGZlc3Rpdm9zIGRlbCBjYWxlbmRhcmlvXG4gICAqXG4gICAqIEB0eXBlIHt7IG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyIH1bXX1cbiAgICogQG1lbWJlcm9mIEJjQ2FsZW5kYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGhvbGlkYXlEYXRlczogeyBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlciB9W10gPSBbXTtcblxuICAvKipcbiAgICogRXN0YSBzYWxpZGEgcGVybWl0ZSBvYnRlbmVyIGVsIHZhbG9yIGRlbCBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNDYWxlbmRhckNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIHVwZGF0ZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgZmFzdEJ1dHRvbnNTdHJpbmc6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXMucmFuZ2VzVGV4dCk7XG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIGNvbnRyb2xEaXJlY3RpdmU6IE5nQ29udHJvbCwgcHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gbmV3IEJjQ2FsZW5kYXJCZWhhdmlvcigpO1xuICAgIHRoaXMuZWxlbWVudC5vdXRwdXQgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaFZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIGlmIChjb250cm9sRGlyZWN0aXZlKSB7XG4gICAgICBjb250cm9sRGlyZWN0aXZlLnZhbHVlQWNjZXNzb3IgPSB0aGlzIGFzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaG9saWRheXNQYXJzZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaG9saWRheURhdGVzKTtcbiAgICB0aGlzLmZhc3RCdXR0b25zU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGhpcy5yYW5nZXNUZXh0KTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRVcCgpO1xuICAgIHRoaXMuZWxlbWVudC5nZXRNeVNlbGYoKS5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3REYXRlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaFZhbHVlKGUuZGV0YWlsKTtcbiAgICB9KVxuXG4gIH1cblxuICAvKipcbiAgICogRnVuY2nDs24gcXVlIG11ZXN0cmEgZWwgdmFsb3IgZGVsIGNvbXBvbmVudGUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0NhbGVuZGFyQ29tcG9uZW50XG4gICAqL1xuXG4gIGRpc3BhdGNoVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25JbnB1dCh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgb25JbnB1dCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHsgfVxufVxuIiwiPGRpdlxuICBbaWRdPVwiY29tcG9uZW50SWRcIlxuICBjbGFzcz1cImJjLWNhbGVuZGFyXCJcbiAgW2F0dHIubWluXT1cIm1pbkRhdGVcIlxuICBbYXR0ci5tYXhdPVwibWF4RGF0ZVwiXG4gIFthdHRyLmZvcm1hdERhdGVdPVwiZm9ybWF0RGF0ZVwiXG4gIFthdHRyLkNhbGVuZGFyQnV0dG9uXT1cIkNhbGVuZGFyQnV0dG9uXCJcbiAgW2F0dHIuQ2FsZW5kYXJGaWx0ZXJdPVwiQ2FsZW5kYXJGaWx0ZXJcIlxuICBbYXR0ci50eXBlXT1cImNhbGVuZGFyVHlwZVwiXG4gIFthdHRyLnJhbmdlc109XCJmYXN0QnV0dG9uc1wiXG4gIFthdHRyLnJhbmdlc1RleHRdPVwicmFuZ2VzVGV4dFwiXG4gIFthdHRyLmhvbGlkYXlEYXRlc109XCJob2xpZGF5c1BhcnNlXCJcbj48L2Rpdj5cbiJdfQ==