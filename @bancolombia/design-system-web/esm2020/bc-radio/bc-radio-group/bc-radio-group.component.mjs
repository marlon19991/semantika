import { Component, Output, EventEmitter, Input, Optional, Self, } from '@angular/core';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class BcRadioGroupComponent extends BcGeneralInputComponent {
    constructor(controlDirective) {
        super();
        this.controlDirective = controlDirective;
        this.changeValue = new EventEmitter();
        this.onDisabled = new EventEmitter();
        this.disabled = false;
        this.defaultValue = undefined;
        this.background = 'regular';
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() {
        this.writeValue(this.defaultValue);
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.onDisabled.emit(isDisabled);
    }
    getIsDisabled() {
        return this.disabled;
    }
    writeValue(value) {
        if (typeof value != 'undefined') {
            this.changeValue.emit(value);
            this.value = value;
        }
    }
}
BcRadioGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioGroupComponent, deps: [{ token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
BcRadioGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcRadioGroupComponent, selector: "bc-radio-group", inputs: { disabled: "disabled", defaultValue: "defaultValue", name: "name", background: "background" }, outputs: { changeValue: "changeValue", onDisabled: "onDisabled" }, usesInheritance: true, ngImport: i0, template: "<div\n  class=\"bc-radio-group\"\n  [class.bc-radio-group-background-dark]=\"this.background === 'dark'\"\n  role=\"radiogroup\"\n>\n  <ng-content></ng-content>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-radio-group', template: "<div\n  class=\"bc-radio-group\"\n  [class.bc-radio-group-background-dark]=\"this.background === 'dark'\"\n  role=\"radiogroup\"\n>\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }]; }, propDecorators: { changeValue: [{
                type: Output
            }], onDisabled: [{
                type: Output
            }], disabled: [{
                type: Input
            }], defaultValue: [{
                type: Input
            }], name: [{
                type: Input
            }], background: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXJhZGlvL2JjLXJhZGlvLWdyb3VwL2JjLXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1yYWRpby9iYy1yYWRpby1ncm91cC9iYy1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQU9wRixNQUFNLE9BQU8scUJBQ1gsU0FBUSx1QkFBdUI7SUFVL0IsWUFBdUMsZ0JBQTJCO1FBQ2hFLEtBQUssRUFBRSxDQUFDO1FBRDZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBVztRQVB4RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDMUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLFNBQVMsQ0FBQztRQUV6QixlQUFVLEdBQXVCLFNBQVMsQ0FBQztRQUlsRCxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxJQUErQixDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsSUFBSSxPQUFPLEtBQUssSUFBSSxXQUFXLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOztrSEFwQ1UscUJBQXFCO3NHQUFyQixxQkFBcUIsd1BDaEJsQyw0S0FPQTsyRkRTYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsZ0JBQWdCOzswQkFjYixJQUFJOzswQkFBSSxRQUFROzRDQVBuQixXQUFXO3NCQUFwQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0UsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNSYWRpb0dyb3VwQ29tcG9uZW50XG4gIGV4dGVuZHMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXRcbntcbiAgQE91dHB1dCgpIGNoYW5nZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkRpc2FibGVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBkZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgYmFja2dyb3VuZDogJ3JlZ3VsYXInIHwgJ2RhcmsnID0gJ3JlZ3VsYXInO1xuXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIGNvbnRyb2xEaXJlY3RpdmU6IE5nQ29udHJvbCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGNvbnRyb2xEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnRyb2xEaXJlY3RpdmUudmFsdWVBY2Nlc3NvciA9IHRoaXMgYXMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMub25EaXNhYmxlZC5lbWl0KGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgZ2V0SXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cImJjLXJhZGlvLWdyb3VwXCJcbiAgW2NsYXNzLmJjLXJhZGlvLWdyb3VwLWJhY2tncm91bmQtZGFya109XCJ0aGlzLmJhY2tncm91bmQgPT09ICdkYXJrJ1wiXG4gIHJvbGU9XCJyYWRpb2dyb3VwXCJcbj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=