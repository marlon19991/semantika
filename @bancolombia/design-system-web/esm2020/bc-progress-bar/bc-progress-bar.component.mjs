import { Component, Input } from '@angular/core';
import { BcProgressBarBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Componente barra de progreso.
 * La barra de progreso indica el estado actual
 * de lo que se está procesando.
 * @export
 * @class BcProgressBarComponent
 */
export class BcProgressBarComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         *
         *
         * @type {('lineal' | 'circle' | 'semi-circle')}
         * @memberof BcProgressBarComponent
         */
        this.type = 'lineal';
        /**
         * Id del elemento planner.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Tipo de color del background.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.backgroundColor = 'light';
        this.firstTime = false;
    }
    ngOnChanges(changes) {
        if (this.firstTime) {
            if (changes.value) {
                this.behavior.setProgress(this.value);
            }
        }
        this.firstTime = true;
    }
    ngAfterViewInit() {
        this.behavior = new BcProgressBarBehavior();
        this.behavior.setId(this.componentId);
        this.behavior.setUp();
    }
}
BcProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcProgressBarComponent, selector: "bc-progress-bar", inputs: { value: "value", type: "type", color: "color", diameter: "diameter", componentId: "componentId", backgroundColor: "backgroundColor", stroke: "stroke", orientation: "orientation" }, usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"bc-progress-bar\"\n  [attr.type]=\"type\"\n  [attr.value]=\"value\"\n  [attr.color]=\"color\"\n  [attr.backgroundColor]=\"backgroundColor\"\n  [id]=\"componentId\"\n  [attr.orientation]=\"orientation\"\n  *ngIf=\"type == 'lineal'\"\n></div>\n\n<div\n  class=\"bc-progress-bar\"\n  [attr.type]=\"type\"\n  [attr.value]=\"value\"\n  [attr.color]=\"color\"\n  [attr.backgroundColor]=\"backgroundColor\"\n  [attr.stroke]=\"stroke\"\n  [attr.diameter]=\"diameter\"\n  [id]=\"componentId\"\n  *ngIf=\"type == 'circle' || type == 'semi-circle'\"\n>\n  <div class=\"bc-progress-bar-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-progress-bar', template: "<div\n  class=\"bc-progress-bar\"\n  [attr.type]=\"type\"\n  [attr.value]=\"value\"\n  [attr.color]=\"color\"\n  [attr.backgroundColor]=\"backgroundColor\"\n  [id]=\"componentId\"\n  [attr.orientation]=\"orientation\"\n  *ngIf=\"type == 'lineal'\"\n></div>\n\n<div\n  class=\"bc-progress-bar\"\n  [attr.type]=\"type\"\n  [attr.value]=\"value\"\n  [attr.color]=\"color\"\n  [attr.backgroundColor]=\"backgroundColor\"\n  [attr.stroke]=\"stroke\"\n  [attr.diameter]=\"diameter\"\n  [id]=\"componentId\"\n  *ngIf=\"type == 'circle' || type == 'semi-circle'\"\n>\n  <div class=\"bc-progress-bar-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { value: [{
                type: Input
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }], diameter: [{
                type: Input
            }], componentId: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], stroke: [{
                type: Input
            }], orientation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wcm9ncmVzcy1iYXIvYmMtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wcm9ncmVzcy1iYXIvYmMtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUM3RTs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8sc0JBQXNCO0lBa0VqQyxZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUF6RHBEOzs7OztXQUtHO1FBQ00sU0FBSSxHQUF3QyxRQUFRLENBQUM7UUFrQjlEOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RDs7Ozs7V0FLRztRQUNNLG9CQUFlLEdBQXFCLE9BQU8sQ0FBQztRQTZCckQsY0FBUyxHQUFZLEtBQUssQ0FBQztJQVY0QixDQUFDO0lBWXhELFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDOzttSEEzRlUsc0JBQXNCO3VHQUF0QixzQkFBc0IsMFFDZG5DLDZvQkEwQkE7MkZEWmEsc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLGlCQUFpQjtzR0FVbEIsS0FBSztzQkFBYixLQUFLO2dCQVFHLElBQUk7c0JBQVosS0FBSztnQkFRRyxLQUFLO3NCQUFiLEtBQUs7Z0JBUUcsUUFBUTtzQkFBaEIsS0FBSztnQkFRRyxXQUFXO3NCQUFuQixLQUFLO2dCQVFHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBUUcsTUFBTTtzQkFBZCxLQUFLO2dCQVNJLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEJjUHJvZ3Jlc3NCYXJCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG4vKipcbiAqIENvbXBvbmVudGUgYmFycmEgZGUgcHJvZ3Jlc28uXG4gKiBMYSBiYXJyYSBkZSBwcm9ncmVzbyBpbmRpY2EgZWwgZXN0YWRvIGFjdHVhbFxuICogZGUgbG8gcXVlIHNlIGVzdMOhIHByb2Nlc2FuZG8uXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNQcm9ncmVzc0JhckNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogYC4vYmMtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sYCxcbn0pXG5leHBvcnQgY2xhc3MgQmNQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQmNQcm9ncmVzc0JhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQHR5cGUgeygnbGluZWFsJyB8ICdjaXJjbGUnIHwgJ3NlbWktY2lyY2xlJyl9XG4gICAqIEBtZW1iZXJvZiBCY1Byb2dyZXNzQmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiAnbGluZWFsJyB8ICdjaXJjbGUnIHwgJ3NlbWktY2lyY2xlJyA9ICdsaW5lYWwnO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNQcm9ncmVzc0JhckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjUHJvZ3Jlc3NCYXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRpYW1ldGVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElkIGRlbCBlbGVtZW50byBwbGFubmVyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgQmNQbGFubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZCA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBUaXBvIGRlIGNvbG9yIGRlbCBiYWNrZ3JvdW5kLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgQmNQbGFubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xuXG4gIC8qKlxuICAgKiBHcm9zb3IgZGVsIGNpcmN1bG9cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIEJjUGxhbm5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlOiBzdHJpbmc7XG5cblxuICAvKipcbiAgICogT3JpZW50YWNpb24gdmVydGljYWwgbyBob3Jpem9udGFsXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBCY1BsYW5uZXJDb21wb25lbnRcbiAgICovXG4gICBASW5wdXQoKSBvcmllbnRhdGlvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEB0eXBlIHtCY1Byb2dyZXNzQmFyQmVoYXZpb3J9XG4gICAqIEBtZW1iZXJvZiBCY1Byb2dyZXNzQmFyQ29tcG9uZW50XG4gICAqL1xuICBiZWhhdmlvcjogQmNQcm9ncmVzc0JhckJlaGF2aW9yO1xuXG4gIGZpcnN0VGltZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5maXJzdFRpbWUpIHtcbiAgICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3Iuc2V0UHJvZ3Jlc3ModGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmlyc3RUaW1lID0gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJlaGF2aW9yID0gbmV3IEJjUHJvZ3Jlc3NCYXJCZWhhdmlvcigpO1xuICAgIHRoaXMuYmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iZWhhdmlvci5zZXRVcCgpO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwiYmMtcHJvZ3Jlc3MtYmFyXCJcbiAgW2F0dHIudHlwZV09XCJ0eXBlXCJcbiAgW2F0dHIudmFsdWVdPVwidmFsdWVcIlxuICBbYXR0ci5jb2xvcl09XCJjb2xvclwiXG4gIFthdHRyLmJhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIlxuICBbaWRdPVwiY29tcG9uZW50SWRcIlxuICBbYXR0ci5vcmllbnRhdGlvbl09XCJvcmllbnRhdGlvblwiXG4gICpuZ0lmPVwidHlwZSA9PSAnbGluZWFsJ1wiXG4+PC9kaXY+XG5cbjxkaXZcbiAgY2xhc3M9XCJiYy1wcm9ncmVzcy1iYXJcIlxuICBbYXR0ci50eXBlXT1cInR5cGVcIlxuICBbYXR0ci52YWx1ZV09XCJ2YWx1ZVwiXG4gIFthdHRyLmNvbG9yXT1cImNvbG9yXCJcbiAgW2F0dHIuYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclwiXG4gIFthdHRyLnN0cm9rZV09XCJzdHJva2VcIlxuICBbYXR0ci5kaWFtZXRlcl09XCJkaWFtZXRlclwiXG4gIFtpZF09XCJjb21wb25lbnRJZFwiXG4gICpuZ0lmPVwidHlwZSA9PSAnY2lyY2xlJyB8fCB0eXBlID09ICdzZW1pLWNpcmNsZSdcIlxuPlxuICA8ZGl2IGNsYXNzPVwiYmMtcHJvZ3Jlc3MtYmFyLWNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=