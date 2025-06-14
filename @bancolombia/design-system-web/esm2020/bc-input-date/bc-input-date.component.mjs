import { Component, EventEmitter, Input, Optional, Output, Self, } from '@angular/core';
import { BcInputDateBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Componente rango de fechas.
 *
 * @export
 * @class BcInputDateComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class BcInputDateComponent extends BcGeneralInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaW5wdXQtZGF0ZS9iYy1pbnB1dC1kYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1kYXRlL2JjLWlucHV0LWRhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBbUIsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQUVyRzs7Ozs7OztHQU9HO0FBS0gsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHVCQUF1QjtJQThHL0QsWUFBdUMsZ0JBQTJCLEVBQVUsZUFBZ0M7UUFDMUcsS0FBSyxFQUFFLENBQUM7UUFENkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBMUc1Rzs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQXNGeEQ7Ozs7O1dBS0c7UUFDTSxpQkFBWSxHQUFxQyxFQUFFLENBQUM7UUFFN0Q7Ozs7V0FJRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUlqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsSUFBK0IsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDM0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxQyxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQ7Ozs7UUFJSTtJQUNKLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O1FBSUk7SUFDSixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQzVDLENBQUM7O2lIQWpMVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiw2ZEMxQmpDLDZlQWdCQTsyRkRVYSxvQkFBb0I7a0JBSmhDLFNBQVM7K0JBQ0UsZUFBZTs7MEJBaUhaLElBQUk7OzBCQUFJLFFBQVE7MEVBckdwQixXQUFXO3NCQUFuQixLQUFLO2dCQVFHLElBQUk7c0JBQVosS0FBSztnQkFRRyxPQUFPO3NCQUFmLEtBQUs7Z0JBUUcsT0FBTztzQkFBZixLQUFLO2dCQVFHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFRRyxlQUFlO3NCQUF2QixLQUFLO2dCQVFHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBT0csYUFBYTtzQkFBckIsS0FBSztnQkFPRyxTQUFTO3NCQUFqQixLQUFLO2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSztnQkFRRyxZQUFZO3NCQUFwQixLQUFLO2dCQU9JLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmNJbnB1dERhdGVCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UsIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudGUgcmFuZ28gZGUgZmVjaGFzLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0lucHV0RGF0ZUNvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1pbnB1dC1kYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLWlucHV0LWRhdGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0lucHV0RGF0ZUNvbXBvbmVudCBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGVsZW1lbnQ7XG4gIGhvbGlkYXlzUGFyc2U7XG4gIGRpc2FibGVkO1xuICAvKipcbiAgICogSWQgZGVsIGNvbXBvbmVudGUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgZWwgdGlwbyBkZSBjYWxlbmRhcmlvLCBwdWVkZSBzZXIgc2ltcGxlIG8gcHVlZGUgc2VyIGRlIHRpcG8gc3BsaXQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhbGVuZGFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIHN0cmluZyBub3MgaW5kaWNhIGxhIGZlY2hhIG1pbmltYSBzZWxlY2Npb25hYmxlIGRlbCBjYWxlbmRhcmlvLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYWxlbmRhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbWluRGF0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIGluZGljYSBsYSBmZWNoYSBtYXhpbWEgc2VsZWNjaW9uYWJsZSBkZWwgY2FsZW5kYXJpby5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FsZW5kYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IHN0cmluZztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgZWwgdGlwbyBkZSBjYWxlbmRhcmlvLCBwdWVkZSBzZXIgc2ltcGxlIG8gcHVlZGUgc2VyIGRlIHRpcG8gc3BsaXQuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhbGVuZGFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBDYWxlbmRhckJ1dHRvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIGluZGljYSBlbCB0aXBvIGRlIGNhbGVuZGFyaW8sIHB1ZWRlIHNlciBzaW1wbGUgbyBwdWVkZSBzZXIgZGUgdGlwbyBzcGxpdC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FsZW5kYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIENhbGVuZGFyRmlsdGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIHN0cmluZyBub3MgaW5kaWNhIGVsIHRpcG8gZGUgY2FsZW5kYXJpbywgcHVlZGUgc2VyIHNpbXBsZSBvIHB1ZWRlIHNlciBkZSB0aXBvIHNwbGl0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYWxlbmRhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgQ2FsZW5kYXJIb2xpZGF5OiBzdHJpbmc7XG4gIC8qKlxuICAqIEVzdGEgZW50cmFkYSBkZSB0dXBvIHN0cmluZyBwZXJtaXRlIHZlciBlbCBmb3JtYXRvIGRlIGxhIGZlY2hhIHlhIHNlYSBERC9NTS9ZWSBvIHNvbG8gbWVzIHkgYcOxbyBvIHNvbG8gYcOxby5cbiAgKiBwb3IgbG8gY3VhbCBlbCB0eXBlIGRlbCBJTlBVVCB0YW1iaWVuIGNhbWJpYSBkZXBlbmRpZW5kbyBlc3RlIHRpcG8gZGUgZGF0byBzaWVuZG8gZGUgdGlwbyBkYXRlIHNpIGVzIGZ1bGxEYXRlIHkgc2llbmRvXG4gICogZGUgdGlwbyBzdHJpbmcgc2kgZXMgbWVkaXVtRGF0ZSBvIHNob3J0RGF0ZVxuICAqIEB0eXBlIHsoJ2Z1bGxEYXRlJyB8ICdtZWRpdW1EYXRlJyB8ICdzaG9ydERhdGUnKX1cbiAgKiBAbWVtYmVyb2YgQmNDYWxlbmRhckNvbXBvbmVudFxuICAqL1xuICBASW5wdXQoKSBmb3JtYXREYXRlOiAnZnVsbERhdGUnIHwgJ21lZGl1bURhdGUnIHwgJ3Nob3J0RGF0ZSc7XG5cbiAgLyoqXG4gICAgKiBWYWxpZGFyIGVsIGlucHV0IGF1dG9tYXRpY2FtZW50ZS5cbiAgICAqXG4gICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVDb21wb25lbnRcbiAgICAqL1xuICBASW5wdXQoKSB2YWxpZGF0ZUlucHV0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAgKiBNZW5zYWplIGRlIGVycm9yIGlucHV0LlxuICAgICpcbiAgICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZUNvbXBvbmVudFxuICAgICovXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgICogTWVuc2FqZSBzdWNjZXNzIGlucHV0LlxuICAgICpcbiAgICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZUNvbXBvbmVudFxuICAgICovXG4gIEBJbnB1dCgpIHN1Y2Nlc3NUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAgKiBMZW5ndWFqZSBhY3R1YWwgZGVsIGNvbXBvbmVudGVcbiAgICAqXG4gICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVDb21wb25lbnRcbiAgICAqL1xuICBASW5wdXQoKSBsYW5ndWFnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgZGVmaW5lIGxvcyBkaWFzIGZlc3Rpdm9zIGRlbCBjYWxlbmRhcmlvXG4gICAqXG4gICAqIEB0eXBlIHt7IG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyIH1bXX1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBob2xpZGF5RGF0ZXM6IHsgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIgfVtdID0gW107XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIHVwZGF0ZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoQFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgY29udHJvbERpcmVjdGl2ZTogTmdDb250cm9sLCBwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQmNJbnB1dERhdGVCZWhhdmlvcigpO1xuICAgIHRoaXMuZWxlbWVudC5vdXRwdXQgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaFZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIGlmIChjb250cm9sRGlyZWN0aXZlKSB7XG4gICAgICBjb250cm9sRGlyZWN0aXZlLnZhbHVlQWNjZXNzb3IgPSB0aGlzIGFzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50O1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhvbGlkYXlzUGFyc2UgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmhvbGlkYXlEYXRlcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRVcCgpO1xuICB9XG5cbiAgZGlzcGF0Y2hWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbklucHV0KHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBvbklucHV0KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIGlmICh0aGlzLmVsZW1lbnQuaW5wdXREYXRlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuaW5wdXREYXRlLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuaW5wdXREYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5lbGVtZW50LmlucHV0RGF0ZS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnZm9jdXNvdXQnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5pbnB1dERhdGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXREZWZhdWx0U3RhdHVzSW5wdXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICogQ2FtYmlhIGxhIGNsYXNlIGRlbCBpbnB1dCBhIHN1Y2Nlc3MuXG4gICAgKlxuICAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlQ29tcG9uZW50XG4gICAgKi9cbiAgc3VjZWVzc0NsYXNzQWN0aXZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdWNjZXNzSW5wdXRVcGRhdGVDbGFzcygpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBDYW1iaWEgbGEgY2xhc2UgZGVsIGlucHV0IGEgc3UgZXN0YWRvIHBvciBkZWZlY3RvLlxuICAgICpcbiAgICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZUNvbXBvbmVudFxuICAgICovXG4gIGRlZmF1bHRDbGFzc0FjdGl2ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0RGVmYXVsdFN0YXR1c0lucHV0Q2xhc3MoKTtcbiAgfVxufVxuIiwiPGRpdlxuICBbaWRdPVwiY29tcG9uZW50SWRcIlxuICBjbGFzcz1cImJjLWlucHV0LWRhdGUgYmMtdy0xMDBcIlxuICBbYXR0ci5taW5dPVwibWluRGF0ZVwiXG4gIFthdHRyLm1heF09XCJtYXhEYXRlXCJcbiAgW2F0dHIudmFsaWRhdGVJbnB1dF09XCJ2YWxpZGF0ZUlucHV0XCJcbiAgW2F0dHIuZXJyb3JUZXh0XT1cImVycm9yVGV4dFwiXG4gIFthdHRyLnN1Y2Nlc3NUZXh0XT1cInN1Y2Nlc3NUZXh0XCJcbiAgW2F0dHIubGFuZ3VhZ2VdPVwibGFuZ3VhZ2VcIlxuICBbYXR0ci5mb3JtYXREYXRlXT1cImZvcm1hdERhdGVcIlxuICBbYXR0ci5DYWxlbmRhckJ1dHRvbl09XCJDYWxlbmRhckJ1dHRvblwiXG4gIFthdHRyLkNhbGVuZGFyRmlsdGVyXT1cIkNhbGVuZGFyRmlsdGVyXCJcbiAgW2F0dHIudHlwZV09XCJ0eXBlXCJcbiAgW2F0dHIuaG9saWRheURhdGVzXT1cImhvbGlkYXlzUGFyc2VcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=