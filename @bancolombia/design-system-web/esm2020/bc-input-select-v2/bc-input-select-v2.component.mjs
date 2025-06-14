import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcInputSelectV2Behavior } from '@bancolombia/design-system-behaviors';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * componente Input Select V2
 *
 * @export
 * @class BcInputSelectV2Component
 * @implements {OnInit}
 * @implements {OnChanges}
 */
export class BcInputSelectV2Component extends BcGeneralInputComponent {
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
        this.componentId = this.componentId ?? this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        this.initInputSelect();
    }
    ngOnChanges(changes) {
        if (changes.status) {
            this.bcInputSelectV2Behavior?.setStatus(this.status);
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
        this.value = value;
        if (value === null || value === undefined) {
            this.bcInputSelectV2Behavior?.setSelectedValue(this.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtc2VsZWN0LXYyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1zZWxlY3QtdjIvYmMtaW5wdXQtc2VsZWN0LXYyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1zZWxlY3QtdjIvYmMtaW5wdXQtc2VsZWN0LXYyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFtQix1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRWhFOzs7Ozs7O0dBT0c7QUFZSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsdUJBQXVCO0lBcUVuRSxZQUFvQixlQUFnQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQURVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWhDcEQ7Ozs7V0FJRztRQUNNLFdBQU0sR0FBcUMsU0FBUyxDQUFDO1FBZ0I5RDs7OztXQUlHO1FBQ08sa0JBQWEsR0FBc0IsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHcEUsWUFBTyxHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztJQUloQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMs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QUUsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7cUhBbkxVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDhRQVJ4QjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3ZELEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRixzRUN0QkgsK05BU0E7MkZEZWEsd0JBQXdCO2tCQVhwQyxTQUFTOytCQUNFLG9CQUFvQixhQUVuQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQzs0QkFDdkQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7c0dBU1EsV0FBVztzQkFBbkIsS0FBSztnQkFPRyxJQUFJO3NCQUFaLEtBQUs7Z0JBT0csS0FBSztzQkFBYixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSztnQkFPRyxNQUFNO3NCQUFkLEtBQUs7Z0JBT0csWUFBWTtzQkFBcEIsS0FBSztnQkFPRyxNQUFNO3NCQUFkLEtBQUs7Z0JBT0ksYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlLCBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEJjSW5wdXRTZWxlY3RWMkJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBjb21wb25lbnRlIElucHV0IFNlbGVjdCBWMlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0lucHV0U2VsZWN0VjJDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtPbkluaXR9XG4gKiBAaW1wbGVtZW50cyB7T25DaGFuZ2VzfVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1pbnB1dC1zZWxlY3QtdjInLFxuICB0ZW1wbGF0ZVVybDogJ2JjLWlucHV0LXNlbGVjdC12Mi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudCBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogUGVybWl0ZSBjb25maWd1cmFyIGlkIGRlIGNvbXBvbmVudGVcbiAgICogU2kgbm8gZXMgZGVmaW5pZG8gZXMgYXV0byBnZW5lcmFkb1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQZXJtaXRlIGNvbmZpZ3VyYXIgZWwgdGlwbzogc2ltcGxlIG8gbXVsdGlwbGVcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQZXJtaXRlIGNvbmZpZ3VyYXIgZWwgbGFiZWwgcHJpbmNpcGFsIHF1ZSB0YW1iaWVuIGVzIG1vc3RyYWRvIGNvbW8gcGxhY2Vob2xkZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogUGVybWl0ZSBjb25maWd1cmFyIGVsIGljb25vIHByaW5jaXBhbCBkZWwgY29tcG9uZW50ZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQZXJtaXRlIGNvbmZpZ3VyYXIgZWwgdGV4dG8gZGUgYXl1ZGEgZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaGVscFRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogUGVybWl0ZSBjb25maWd1cmFyIGVsIGVsIGVzdGFkbzogZGlzYWJsZWQsIGVycm9yIG8gZGVmYXVsdFxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXM6ICdlcnJvcicgfCAnZGlzYWJsZWQnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBQZXJtaXRlIGNvbmZpZ3VyYXIgZWwgdmFsb3IgaW5pY2lhbCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGluaXRpYWxWYWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPYmpldG8gZW5jYXJnYWRvIGRlIGxsZW5hciBsYXMgbGlzdGFzIGNvbiBsYXMgcHJvcGllZGFkZXMgZGVmaW5pZGFzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZXM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueTsgaWNvbj86IHN0cmluZyB9PjtcblxuICAvKipcbiAgICogRnVuY2lvbiBxdWUgc2UgZWplY3V0YXJhIGN1YW5kbyBzZSBzZWxlY2Npb25lIHVuYSBvcGNpb25cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIG9uQ2hhbmdlVmFsdWU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuICBiY0lucHV0U2VsZWN0VjJCZWhhdmlvcjogQmNJbnB1dFNlbGVjdFYyQmVoYXZpb3I7XG4gIGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgY29tcG9uZW50UmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkID8/IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdElucHV0U2VsZWN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuc3RhdHVzKSB7XG4gICAgICB0aGlzLmJjSW5wdXRTZWxlY3RWMkJlaGF2aW9yPy5zZXRTdGF0dXModGhpcy5zdGF0dXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWFkeSAmJiAhY2hhbmdlcy5zdGF0dXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLnZhbHVlcykge1xuICAgICAgICB0aGlzLmJjSW5wdXRTZWxlY3RWMkJlaGF2aW9yLnVwZGF0ZUl0ZW1zKHRoaXMudmFsdWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdElucHV0U2VsZWN0KCk7XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0SW5wdXRTZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5iY0lucHV0U2VsZWN0VjJCZWhhdmlvciA9IG5ldyBCY0lucHV0U2VsZWN0VjJCZWhhdmlvcigpO1xuICAgIHRoaXMuYmNJbnB1dFNlbGVjdFYyQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY0lucHV0U2VsZWN0VjJCZWhhdmlvci5vdXRwdXRGdW5jdGlvbiA9IChwYXJhbSkgPT4ge1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZShwYXJhbS52YWx1ZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlVmFsdWUuZW1pdChwYXJhbSk7XG4gICAgfTtcbiAgICB0aGlzLmJjSW5wdXRTZWxlY3RWMkJlaGF2aW9yLnNldEl0ZW1zKHRoaXMudmFsdWVzKTtcbiAgICB0aGlzLmJjSW5wdXRTZWxlY3RWMkJlaGF2aW9yLnNldFVwKCk7XG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKHRoaXMuaW5pdGlhbFZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnRSZWFkeSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRnVuY2nDs24gcXVlIHNldGVhIGVsIGVzdGFkbyBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgc2V0U3RhdHVzKG5ld1N0YXR1czogJ2Vycm9yJyB8ICdkaXNhYmxlZCcgfCAnZGVmYXVsdCcpOiB2b2lkIHtcbiAgICB0aGlzLmJjSW5wdXRTZWxlY3RWMkJlaGF2aW9yLnNldFN0YXR1cyhuZXdTdGF0dXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbWJpYSBlbCBpdGVtIHNlbGVjY2lvbmFkby4gU2kgc2UgZW52aWEgdW4gc3RyaW5nIHZhY2lvIHNlIGxpbXBpYSBsYSBzZWxlY2Npb24gcHJldmlhIHkgZXN0YWRvcy5cbiAgICogU2kgc29uIHZhcmlvcyB2YWxvcmVzIHNlcGFyYXIgY29uIGNvbWEsIHBvciBlamVtcGxvOiAxLDUsNlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBzZXRWYWx1ZShuZXdWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5iY0lucHV0U2VsZWN0VjJCZWhhdmlvci5zZXRTZWxlY3RlZFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jacOzbiB1dGlsaXphZGEgY3VhbmRvIGVsIGNvbXBvbmVudGUgZXMgcGFydGUgZGUgdW4gRm9ybUdyb3VwXG4gICAqIFNlIHV0aWxpemEgZW4gZGlzYWJsZSgpIG8gZW5hYmxlKClcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuYmNJbnB1dFNlbGVjdFYyQmVoYXZpb3Iuc2V0U3RhdHVzKGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICdkZWZhdWx0Jyk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY2nDs24gdXRpbGl6YWRhIGN1YW5kbyBlbCBjb21wb25lbnRlIGVzIHBhcnRlIGRlIHVuIEZvcm1Hcm91cFxuICAgKiBTZSB1dGlsaXphIGVuIHJlc2V0KClcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmNpw7NuIHV0aWxpemFkYSBjdWFuZG8gZWwgY29tcG9uZW50ZSBlcyBwYXJ0ZSBkZSB1biBGb3JtR3JvdXBcbiAgICogU2UgdXRpbGl6YSBlbiByZXNldCgpIG8gd3JpdGVWYWx1ZSgpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0U2VsZWN0VjJDb21wb25lbnRcbiAgICovXG4gIGRpc3BhdGNoQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYmNJbnB1dFNlbGVjdFYyQmVoYXZpb3I/LnNldFNlbGVjdGVkVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xuICAgICAgdGhpcy5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cbn1cbiIsIjxkaXZcbiAgW2lkXT1cImNvbXBvbmVudElkXCJcbiAgW2F0dHIudHlwZV09XCJ0eXBlXCJcbiAgW2F0dHIubGFiZWxdPVwibGFiZWxcIlxuICBbYXR0ci5pY29uTmFtZV09XCJpY29uTmFtZVwiXG4gIFthdHRyLmhlbHBUZXh0XT1cImhlbHBUZXh0XCJcbiAgW2F0dHIuc3RhdHVzXT1cInN0YXR1c1wiXG4gIFthdHRyLmluaXRpYWxWYWx1ZV09XCJpbml0aWFsVmFsdWVcIlxuPjwvZGl2PlxuIl19