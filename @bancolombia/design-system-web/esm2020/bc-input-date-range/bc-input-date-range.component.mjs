import { Component, EventEmitter, Input, Optional, Output, Self, } from '@angular/core';
import { BcInputDateRangeBehavior, INPUT_ERROR } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@bancolombia/design-system-web/bc-helpers";
export class BcInputDateRangeComponent extends BcGeneralInputComponent {
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
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i2.BcHelperService }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { componentId: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaW5wdXQtZGF0ZS1yYW5nZS9iYy1pbnB1dC1kYXRlLXJhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1kYXRlLXJhbmdlL2JjLWlucHV0LWRhdGUtcmFuZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBRU4sSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RixPQUFPLEVBQW1CLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7Ozs7QUFLckcsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHVCQUF1QjtJQStHcEUsWUFDNkIsZ0JBQTJCLEVBQzlDLGVBQWdDLEVBQ2hDLFFBQW1CLEVBQ25CLE1BQWtCO1FBRTFCLEtBQUssRUFBRSxDQUFDO1FBTG1CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBVztRQUM5QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBNUc1Qjs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RDs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDcEM7Ozs7O1dBS0c7UUFDTSxlQUFVLEdBQU8sRUFBRSxDQUFDO1FBaUU3Qjs7Ozs7V0FLRztRQUNNLGlCQUFZLEdBQXFDLEVBQUUsQ0FBQztRQVM3RDs7OztX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LENBQUMsT0FBTyxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7c0hBdFJVLHlCQUF5QjswR0FBekIseUJBQXlCLGloQkNuQnRDLDRmQU1BOzJGRGFhLHlCQUF5QjtrQkFKckMsU0FBUzsrQkFDRSxxQkFBcUI7OzBCQW1INUIsSUFBSTs7MEJBQUksUUFBUTsySEFwR1YsV0FBVztzQkFBbkIsS0FBSztnQkFNRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBT0csT0FBTztzQkFBZixLQUFLO2dCQU9HLE9BQU87c0JBQWYsS0FBSztnQkFPRyxlQUFlO3NCQUF2QixLQUFLO2dCQU9HLGNBQWM7c0JBQXRCLEtBQUs7Z0JBT0csU0FBUztzQkFBakIsS0FBSztnQkFPRyxZQUFZO3NCQUFwQixLQUFLO2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0csY0FBYztzQkFBdEIsS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLO2dCQVFHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFNSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCY0lucHV0RGF0ZVJhbmdlQmVoYXZpb3IsIElOUFVUX0VSUk9SIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSwgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1pbnB1dC1kYXRlLXJhbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLWlucHV0LWRhdGUtcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50IGV4dGVuZHMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogZWxlbWVudG8gcXVlIGhhY2UgcmVmZXJlbmNpYSBhbCBiZWhhdmlvciBkZWwgSW5wdXREYXRlUmFuZ2VcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIGVsZW1lbnQ7XG4gIC8qKlxuICAgKiBJZCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNvbXBvbmVudElkID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZXMgdW4gc3RyaW5nIHF1ZSBjb250aWVuZSB1biAgYXJyZWdsbyBxdWUgbm9zIGluZGljYSBlbCByYW5nbyBkZSBkw61hcywgbWVzZXMgbyBhw7FvcyBwYXJhIGVsIGNhbGVuZGFyaW8uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBmYXN0QnV0dG9uczogc3RyaW5nID0gXCJbXVwiO1xuICAvKipcbiAgICogQXRyaWJ1dG8gcmFuZ28gZGUgZmVjaGFzLlxuICAgKlxuICAgKiBAdHlwZSB7W119XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSByYW5nZXNUZXh0OiBbXSA9IFtdO1xuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgbGEgZmVjaGEgbWluaW1hIHNlbGVjY2lvbmFibGUgZGVsIGNhbGVuZGFyaW8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBzdHJpbmcgbm9zIGluZGljYSBsYSBmZWNoYSBtYXhpbWEgc2VsZWNjaW9uYWJsZSBkZWwgY2FsZW5kYXJpby5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IHN0cmluZztcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIHN0cmluZyBub3MgaW5kaWNhIGVsIHRpcG8gZGUgY2FsZW5kYXJpbywgcHVlZGUgc2VyIHNpbXBsZSBvIHB1ZWRlIHNlciBkZSB0aXBvIHNwbGl0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgQ2FsZW5kYXJIb2xpZGF5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBY3RpdmEgbGFzIHZhbGlkYWNpb25lcyBhdXRvbWF0aWNhcyBkZSByYW5nb3MgeSBlcnJvcmVzIGRlIGVzY3JpdHVyYVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdmFsaWRhdGVzSW5wdXQ6IHN0cmluZztcbiAgLyoqXG4gICAqIE1lbnNhamUgZGUgZXJyb3IgcGFyYSBlbCBwcmltZXIgaW5wdXRcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogTWVuc2FqZSBkZSBlcnJvciBwYXJhIGVsIHNlZ3VuZG8gaW5wdXRcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGVycm9yVGV4dFR3bzogc3RyaW5nO1xuICAvKipcbiAgICogTWVuc2FqZSBzdWNjZXNzIHBhcmEgZWwgcHJpbWVyIGlucHV0XG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdWNjZXNzVGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogRGVzaGFiaWxpdGEgZWwgc2Nyb2xsIGRlbCBjYWxlbmRhcmlvIGRlbnRybyBkZWwgY29tcG9uZW50ZVxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkU2Nyb2xsOiBib29sZWFuO1xuICAvKipcbiAgICogTGVuZ3VhamUgYWN0dWFsIGRlbCBjb21wb25lbnRlXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbGFuZ3VhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIGRlZmluZSBsb3MgZGlhcyBmZXN0aXZvcyBkZWwgY2FsZW5kYXJpb1xuICAgKlxuICAgKiBAdHlwZSB7eyBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlciB9W119XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBob2xpZGF5RGF0ZXM6IHsgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIgfVtdID0gW107XG5cbiAgLyoqXG4gICAqIE1lbnNhamUgc3VjY2VzcyBwYXJhIGVsIHNlZ3VuZG8gaW5wdXRcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHN1Y2Nlc3NUZXh0VHdvOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZXZ1ZWx2ZSBsYXMgZmVjaGFzIHNlbGVjY2lvbmFkYXMgKGluaWNpby9maW4pXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgdXBkYXRlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgY29udHJvbERpcmVjdGl2ZTogTmdDb250cm9sLFxuICAgIHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxtUmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gbmV3IEJjSW5wdXREYXRlUmFuZ2VCZWhhdmlvcigpO1xuICAgIHRoaXMuZWxlbWVudC5vdXRwdXQgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaFZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIGlmIChjb250cm9sRGlyZWN0aXZlKSB7XG4gICAgICBjb250cm9sRGlyZWN0aXZlLnZhbHVlQWNjZXNzb3IgPSB0aGlzIGFzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50O1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHsgfVxuICAvKipcbiAgICogQ29uZmlndXJhIGVsIGJlaGF2aW9yIGRlbCBpbnB1dC1kYXRlLXJhbmdlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRVcCgpO1xuICAgIHRoaXMudmFsaWRhdGVFcnJvclN0YXRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFZhbGlkYSBzaSBsb3MgaW5wdXN0IHRpZW5lbiBlbCBlc3RhZG8gZXJyb3JcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIHZhbGlkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmVsbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaWYgKHRoaXMuY29udHJvbERpcmVjdGl2ZSAmJiB0aGlzLmNvbnRyb2xEaXJlY3RpdmUuc3RhdHVzQ2hhbmdlcykge1xuICAgICAgdGhpcy5jb250cm9sRGlyZWN0aXZlLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChpbnB1dHMpIHtcbiAgICAgICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSAnSU5WQUxJRCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhpbnB1dCwgSU5QVVRfRVJST1IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhpbnB1dCwgSU5QVVRfRVJST1IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE9idGllbmUgZWwgdmFsb3Igb3V0cHV0IGRlbCBjb21wb25lbnRlIHBhcmEgZW1pdGlyIGxvcyBjYW1iaW9zXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICBkaXNwYXRjaFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5wdXQodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuICAvKipcbiAgICogQWN0dWFsaXphIGVsIHZhbHVlIGRlbCBjb21wb25lbnRlIHkgc3VzIGNhbWJpb3NcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIG9uSW5wdXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWxpemEgYWN0dWFsaXphY2lvbiBkZSBsb3MgaW5wdXRzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUuaW5pdGlhbERhdGUgJiYgdmFsdWUudG9EYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuaW5wdXREYXRlICYmIHRoaXMuZWxlbWVudC5pbnB1dERhdGVUd28pIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0VmFsdWVzKHZhbHVlLmluaXRpYWxEYXRlLCB2YWx1ZS50b0RhdGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF2YWx1ZS5pbml0aWFsRGF0ZSAmJiAhdmFsdWUudG9EYXRlKSB7XG4gICAgICAgIHRoaXMuY2xlYW5JbnB1dHNWYWx1ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmlucHV0RGF0ZSAmJiB0aGlzLmVsZW1lbnQuaW5wdXREYXRlVHdvKSB7XG4gICAgICAgIHRoaXMuY2xlYW5JbnB1dHNWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaW1waWEgeSBhY3R1YWxpemEgbG9zIGVzdGFkb3MgYWN0aXZvcyBkZSBsb3MgaW5wdXRcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIGNsZWFuSW5wdXRzVmFsdWUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmlucHV0RGF0ZS52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZWxlbWVudC5pbnB1dERhdGVUd28udmFsdWUgPSAnJztcbiAgICAodGhpcy5lbGVtZW50LmlucHV0RGF0ZSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCdiYy1hY3RpdmUnKTtcbiAgICAodGhpcy5lbGVtZW50LmlucHV0RGF0ZVR3byBhcyBIVE1MSW5wdXRFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCdiYy1hY3RpdmUnKTtcbiAgICB0aGlzLmRlZmF1bHRDbGFzc0FjdGl2ZSgpO1xuICAgIHRoaXMuZGVmYXVsdENsYXNzQWN0aXZlVHdvKCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsaXphIGVsIGVzdGFkbyBkaXNhYmxlZCBhIGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmVsZW1lbnQuaW5wdXREYXRlICYmIHRoaXMuZWxlbWVudC5pbnB1dERhdGVUd28pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFjdHVhbGl6YSBsYSBjbGFzZSBhIHN1Y2Nlc3MgZGVsIGlucHV0RGF0ZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICAgKi9cbiAgc3VjY2Vzc0NsYXNzQWN0aXZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdWNjZXNzSW5wdXRVcGRhdGVDbGFzcygpO1xuICB9XG4gIC8qKlxuICAgKiBBY3R1YWxpemEgbGEgY2xhc2UgYSBzdWNjZXNzIGRlbCBpbnB1dERhdGVUd29cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIHN1Y2Nlc3NDbGFzc0FjdGl2ZVR3bygpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3VjY2Vzc0lucHV0VHdvVXBkYXRlQ2xhc3MoKTtcbiAgfVxuICAvKipcbiAgICogQWN0dWFsaXphIGxhIGNsYXNlIGEgZXJyb3IgZGVsIGlucHV0RGF0ZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICAgKi9cbiAgZXJyb3JDbGFzc0FjdGl2ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuZXJyb3JJbnB1dFVwZGF0ZUNsYXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEFjdHVhbGl6YSBsYSBjbGFzZSBhIGVycm9yIGRlbCBpbnB1dERhdGVUd29cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIGVycm9yQ2xhc3NBY3RpdmVUd28oKSB7XG4gICAgdGhpcy5lbGVtZW50LmVycm9ySW5wdXRUd29VcGRhdGVDbGFzcygpO1xuICB9XG4gIC8qKlxuICAgKiBBY3R1YWxpemEgZWwgZXN0YWRvIGRlZmF1bHQgZGVsIGlucHV0RGF0ZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICAgKi9cbiAgZGVmYXVsdENsYXNzQWN0aXZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXREZWZhdWx0U3RhdHVzSW5wdXRDbGFzcygpO1xuICB9XG4gIC8qKlxuICAgKiBBY3R1YWxpemEgZWwgZXN0YWRvIGRlZmF1bHQgZGVsIGlucHV0RGF0ZVR3b1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICAgKi9cbiAgZGVmYXVsdENsYXNzQWN0aXZlVHdvKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXREZWZhdWx0U3RhdHVzSW5wdXRUd29DbGFzcygpO1xuICB9XG4gIC8qKlxuICAgKiBDaWVycmEgZWwgY2FsZW5kYXJpbyBkZWwgSW5wdXREYXRlUmFuZ2VcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRcbiAgICovXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsb3NlRHJvcGRvd24oKTtcbiAgfVxufVxuIiwiPGRpdiBbaWRdPWNvbXBvbmVudElkIGNsYXNzPVwiYmMtaW5wdXQtZGF0ZS1yYW5nZVwiIFthdHRyLmZhc3RCdXR0b25zXT1cImZhc3RCdXR0b25zXCIgW2F0dHIucmFuZ2VzVGV4dF09XCJyYW5nZXNUZXh0XCJcbiAgW2F0dHIubWluXT1cIm1pbkRhdGVcIiBbYXR0ci5tYXhdPVwibWF4RGF0ZVwiIFthdHRyLnN1Y2Nlc3NUZXh0XT1cInN1Y2Nlc3NUZXh0XCIgW2F0dHIuc3VjY2Vzc1RleHRUd29dPVwic3VjY2Vzc1RleHRUd29cIlxuICBbYXR0ci5lcnJvclRleHRUd29dPVwiZXJyb3JUZXh0VHdvXCIgW2F0dHIuZXJyb3JUZXh0XT1cImVycm9yVGV4dFwiIFthdHRyLmhvbGlkYXlEYXRlc109XCJob2xpZGF5RGF0ZXNcIlxuICBbYXR0ci52YWxpZGF0ZUlucHV0c109XCJ2YWxpZGF0ZXNJbnB1dFwiIFthdHRyLmRpc2FibGVkU2Nyb2xsXT1cImRpc2FibGVkU2Nyb2xsXCIgW2F0dHIubGFuZ3VhZ2VdPVwibGFuZ3VhZ2VcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=