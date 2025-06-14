import { Component, Output, EventEmitter, Input, Optional, Self } from '@angular/core';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class BcCheckBoxGroupComponent extends BcGeneralInputComponent {
    constructor(controlDirective) {
        super();
        this.controlDirective = controlDirective;
        /**
         * Indica si el checkbox esta habilitado
         *
         * @type {boolean}
         * @memberof BcCheckboxComponent
         */
        this.enabled = true;
        this.onDisabled = new EventEmitter();
        this.changeValue = new EventEmitter();
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    setDisabledState(isDisabled) {
        this.enabled = isDisabled;
        this.onDisabled.emit(this.enabled);
    }
    writeValue(value) {
        if (typeof value != 'undefined') {
            this.value = value;
            this.changeValue.emit(this.controlDirective.value);
        }
    }
}
BcCheckBoxGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckBoxGroupComponent, deps: [{ token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
BcCheckBoxGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCheckBoxGroupComponent, selector: "bc-checkbox-group", inputs: { enabled: "enabled" }, outputs: { onDisabled: "onDisabled", changeValue: "changeValue" }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCheckBoxGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-checkbox-group', template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }]; }, propDecorators: { enabled: [{
                type: Input
            }], onDisabled: [{
                type: Output
            }], changeValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNoZWNrYm94L2JjLWNoZWNrYm94LWdyb3VwL2JjLWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jaGVja2JveC9iYy1jaGVja2JveC1ncm91cC9iYy1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQU1wRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsdUJBQXVCO0lBWW5FLFlBQXVDLGdCQUEyQjtRQUNoRSxLQUFLLEVBQUUsQ0FBQztRQUQ2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVc7UUFYbEU7Ozs7O1dBS0c7UUFDTSxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSTlDLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsZ0JBQWdCLENBQUMsYUFBYSxHQUFHLElBQStCLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBSztRQUNkLElBQUksT0FBTyxLQUFLLElBQUksV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7O3FIQTdCVSx3QkFBd0I7eUdBQXhCLHdCQUF3QixtTENSckMsMkJBQXlCOzJGRFFaLHdCQUF3QjtrQkFKcEMsU0FBUzsrQkFDRSxtQkFBbUI7OzBCQWVoQixJQUFJOzswQkFBSSxRQUFROzRDQUxwQixPQUFPO3NCQUFmLEtBQUs7Z0JBRUksVUFBVTtzQkFBbkIsTUFBTTtnQkFDRyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtY2hlY2tib3gtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0NoZWNrQm94R3JvdXBDb21wb25lbnQgZXh0ZW5kcyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZWwgY2hlY2tib3ggZXN0YSBoYWJpbGl0YWRvXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNDaGVja2JveENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlZCA9IHRydWU7XG5cbiAgQE91dHB1dCgpIG9uRGlzYWJsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIGNvbnRyb2xEaXJlY3RpdmU6IE5nQ29udHJvbCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGNvbnRyb2xEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnRyb2xEaXJlY3RpdmUudmFsdWVBY2Nlc3NvciA9IHRoaXMgYXMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQ7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5lbmFibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLm9uRGlzYWJsZWQuZW1pdCh0aGlzLmVuYWJsZWQpXG4gIH1cbiAgXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQodGhpcy5jb250cm9sRGlyZWN0aXZlLnZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=