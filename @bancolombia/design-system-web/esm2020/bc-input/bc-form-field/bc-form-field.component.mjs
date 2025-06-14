import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { BcInputDateBehavior, INPUT_ERROR } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Contenedor del input
 *
 * @export
 * @class BcFormFieldComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class BcFormFieldComponent extends BcGeneralInputComponent {
    constructor(controlDirective, elmRef, bcHelperService, renderer) {
        super();
        this.controlDirective = controlDirective;
        this.elmRef = elmRef;
        this.bcHelperService = bcHelperService;
        this.renderer = renderer;
        /**
         * Tipo de input (ingresar los tipos)
         *
         * @memberof BcFormFieldComponent
         */
        this.inputType = '';
        /**
         * Tipo de calendario.
         *
         * @type {string}
         * @memberof BcFormFieldComponent
         */
        this.calendarType = '';
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcFormFieldComponent
         */
        this.id = this.bcHelperService.getId(this);
        this.updateValue = new EventEmitter();
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() {
        if (this.inputType === 'date') {
            this.bcInputDateBehavior = new BcInputDateBehavior();
            this.bcInputDateBehavior.output = (value) => {
                this.dispatchValue(value);
            };
        }
    }
    ngAfterViewInit() {
        this.validateErrorState();
        setTimeout(() => {
            this.writeValue(this.value);
        }, 0);
    }
    validateErrorState() {
        const input = this.elmRef.nativeElement.querySelector('input');
        if (this.controlDirective && this.controlDirective.statusChanges) {
            this.controlDirective.statusChanges.subscribe(element => {
                if (input) {
                    if (element === 'INVALID') {
                        this.renderer.addClass(input, INPUT_ERROR);
                    }
                    else {
                        this.renderer.removeClass(input, INPUT_ERROR);
                    }
                }
            });
        }
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
    writeValue(value) {
        this.value = value;
        if (this.inputType === 'date' && this.bcInputDateBehavior) {
            this.bcInputDateBehavior?.setValue(value);
        }
    }
    setDisabledState(isDisabled) {
        this.bcInputDateBehavior.setDisabledState(isDisabled);
    }
}
BcFormFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFormFieldComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i2.BcHelperService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BcFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcFormFieldComponent, selector: "bc-form-field", inputs: { inputType: "inputType", calendarType: "calendarType", id: "id" }, outputs: { updateValue: "updateValue" }, usesInheritance: true, ngImport: i0, template: `<div class="bc-form-field" [id]="id">
    <ng-content></ng-content>
  </div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFormFieldComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-form-field',
                    template: `<div class="bc-form-field" [id]="id">
    <ng-content></ng-content>
  </div>`,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i2.BcHelperService }, { type: i0.Renderer2 }]; }, propDecorators: { inputType: [{
                type: Input
            }], calendarType: [{
                type: Input
            }], id: [{
                type: Input
            }], updateValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaW5wdXQvYmMtZm9ybS1maWVsZC9iYy1mb3JtLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLEVBQWEsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RixPQUFPLEVBQW1CLHVCQUF1QixFQUFHLE1BQU0sMkNBQTJDLENBQUM7Ozs7QUFDdEc7Ozs7Ozs7R0FPRztBQU9ILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx1QkFBdUI7SUE0Qi9ELFlBQXVDLGdCQUEyQixFQUN4RCxNQUFrQixFQUNsQixlQUFnQyxFQUNoQyxRQUFtQjtRQUMzQixLQUFLLEVBQUUsQ0FBQztRQUo2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVc7UUFDeEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTNCN0I7Ozs7V0FJRztRQUNNLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDeEI7Ozs7O1dBS0c7UUFDTSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUUzQjs7Ozs7V0FLRztRQUNNLE9BQUUsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFPakQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsSUFBK0IsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUM7U0FDSDtJQUVILENBQUM7SUFFRCxlQUFlO1FBRWIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7WUFDaEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RELElBQUksS0FBSyxFQUFFO29CQUNULElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTt3QkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO3FCQUM1Qzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7cUJBQy9DO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFTO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3pELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDMUM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7O2lIQTNGVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixpTUFKckI7O1NBRUg7MkZBRUksb0JBQW9CO2tCQU5oQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7O1NBRUg7aUJBQ1I7OzBCQTZCYyxJQUFJOzswQkFBSSxRQUFROzJIQW5CcEIsU0FBUztzQkFBakIsS0FBSztnQkFPRyxZQUFZO3NCQUFwQixLQUFLO2dCQVFHLEVBQUU7c0JBQVYsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXQsIFJlbmRlcmVyMiwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmNJbnB1dERhdGVCZWhhdmlvciwgSU5QVVRfRVJST1IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlLCBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCAgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG4vKipcbiAqIENvbnRlbmVkb3IgZGVsIGlucHV0XG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjRm9ybUZpZWxkQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWZvcm0tZmllbGQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJiYy1mb3JtLWZpZWxkXCIgW2lkXT1cImlkXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBCY0Zvcm1GaWVsZENvbXBvbmVudCBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgYmNJbnB1dERhdGVCZWhhdmlvcjtcbiAgYmNJbnB1dEJlaGF2aW9yO1xuICBlbGVtZW50O1xuICAvKipcbiAgICogVGlwbyBkZSBpbnB1dCAoaW5ncmVzYXIgbG9zIHRpcG9zKVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNGb3JtRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlucHV0VHlwZSA9ICcnO1xuICAvKipcbiAgICogVGlwbyBkZSBjYWxlbmRhcmlvLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNGb3JtRmllbGRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNhbGVuZGFyVHlwZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0Zvcm1GaWVsZENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuXG4gIEBPdXRwdXQoKSB1cGRhdGVWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIGNvbnRyb2xEaXJlY3RpdmU6IE5nQ29udHJvbCxcbiAgICBwcml2YXRlIGVsbVJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGNvbnRyb2xEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnRyb2xEaXJlY3RpdmUudmFsdWVBY2Nlc3NvciA9IHRoaXMgYXMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRUeXBlID09PSAnZGF0ZScpIHtcbiAgICAgIHRoaXMuYmNJbnB1dERhdGVCZWhhdmlvciA9IG5ldyBCY0lucHV0RGF0ZUJlaGF2aW9yKCk7XG4gICAgICB0aGlzLmJjSW5wdXREYXRlQmVoYXZpb3Iub3V0cHV0ID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaFZhbHVlKHZhbHVlKTtcbiAgICAgIH07XG4gICAgfVxuICAgIFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIFxuICAgIHRoaXMudmFsaWRhdGVFcnJvclN0YXRlKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy52YWx1ZSlcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHZhbGlkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuZWxtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBpZiAodGhpcy5jb250cm9sRGlyZWN0aXZlICYmIHRoaXMuY29udHJvbERpcmVjdGl2ZS5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNvbnRyb2xEaXJlY3RpdmUuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlmIChlbGVtZW50ID09PSAnSU5WQUxJRCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoaW5wdXQsIElOUFVUX0VSUk9SKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhpbnB1dCwgSU5QVVRfRVJST1IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5wdXQodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG9uSW5wdXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTphbnkgKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgaWYgKHRoaXMuaW5wdXRUeXBlID09PSAnZGF0ZScgJiYgdGhpcy5iY0lucHV0RGF0ZUJlaGF2aW9yKSB7XG4gICAgICB0aGlzLmJjSW5wdXREYXRlQmVoYXZpb3I/LnNldFZhbHVlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuYmNJbnB1dERhdGVCZWhhdmlvci5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQpXG4gIH1cblxufVxuIl19