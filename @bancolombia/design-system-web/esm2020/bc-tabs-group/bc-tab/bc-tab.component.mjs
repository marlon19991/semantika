import { Component, EventEmitter, HostBinding, Input } from '@angular/core';
import { Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Componente tab del componente
 *
 * @export
 * @class BcTabComponent
 * @implements {OnInit}
 */
export class BcTabComponent {
    constructor(el) {
        this.el = el;
        /**
         * Muestra o oculta el tab
         *
         * @type {boolean}
         * @memberof BcTabComponent
         */
        this.show = true;
        /**
         * Valor cada vez que cambia el tab.
         *
         * @type {EventEmitter<boolean>}
         * @memberof BcCheckboxComponent
         */
        this.changeState = new EventEmitter();
    }
    ngOnInit() {
        this.classTab = this.classTab != null ? this.classTab : 'bc-tab-content';
        this.elementClass = this.classTab;
    }
    ngOnChanges(changes) {
        if (!changes.firstChange) {
            this.changeState.emit(null);
        }
    }
}
BcTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTabComponent, selector: "bc-tab", inputs: { disabledTab: "disabledTab", label: "label", labelTemplate: "labelTemplate", show: "show", icon: "icon" }, outputs: { changeState: "changeState" }, host: { properties: { "class": "this.elementClass" } }, usesOnChanges: true, ngImport: i0, template: "<ng-content *ngIf=\"show\"></ng-content>\n\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-tab', template: "<ng-content *ngIf=\"show\"></ng-content>\n\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { elementClass: [{
                type: HostBinding,
                args: ['class']
            }], disabledTab: [{
                type: Input
            }], label: [{
                type: Input
            }], labelTemplate: [{
                type: Input
            }], show: [{
                type: Input
            }], icon: [{
                type: Input
            }], changeState: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWJzLWdyb3VwL2JjLXRhYi9iYy10YWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXRhYnMtZ3JvdXAvYmMtdGFiL2JjLXRhYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBVSxNQUFNLEVBQThCLE1BQU0sZUFBZSxDQUFDOzs7QUFDM0U7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLGNBQWM7SUE2Q3pCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBcEJsQzs7Ozs7V0FLRztRQUNNLFNBQUksR0FBWSxJQUFJLENBQUM7UUFJOUI7Ozs7O1dBS0c7UUFDTyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSTlCLENBQUM7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7MkdBeERVLGNBQWM7K0ZBQWQsY0FBYyx3UkNiM0IsOENBRUE7MkZEV2EsY0FBYztrQkFKMUIsU0FBUzsrQkFDRSxRQUFRO2lHQUtsQixZQUFZO3NCQURYLFdBQVc7dUJBQUMsT0FBTztnQkFRVCxXQUFXO3NCQUFuQixLQUFLO2dCQU9DLEtBQUs7c0JBQWIsS0FBSztnQkFPRyxhQUFhO3NCQUFyQixLQUFLO2dCQVFHLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUs7Z0JBUUksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBDb21wb25lbnRlIHRhYiBkZWwgY29tcG9uZW50ZVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1RhYkNvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXRhYi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGVsZW1lbnRDbGFzczogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAqIERlc2hhYmlsaXRhIGVsIHRhYiBcbiAgICogQHR5cGUgeygndHJ1ZSB8IGZhbHNlKX1cbiAgICogQG1lbWJlcm9mIEJjVGFiQ29tcG9uZW50XG4gICAqL1xuICAgIEBJbnB1dCgpIGRpc2FibGVkVGFiOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBsYWJlbCBkZWwgdGFiXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhYkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw7XG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBkZWwgdGFiXG4gICAqXG4gICAqIEB0eXBlIHtUZW1wbGF0ZVJlZjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNUYWJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIE11ZXN0cmEgbyBvY3VsdGEgZWwgdGFiXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNUYWJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogVmFsb3IgY2FkYSB2ZXogcXVlIGNhbWJpYSBlbCB0YWIuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8Ym9vbGVhbj59XG4gICAqIEBtZW1iZXJvZiBCY0NoZWNrYm94Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlU3RhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY2xhc3NUYWI6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xhc3NUYWIgPSB0aGlzLmNsYXNzVGFiICE9IG51bGwgPyB0aGlzLmNsYXNzVGFiIDogJ2JjLXRhYi1jb250ZW50JztcbiAgICB0aGlzLmVsZW1lbnRDbGFzcyA9IHRoaXMuY2xhc3NUYWI7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlLmVtaXQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudCAqbmdJZj1cInNob3dcIj48L25nLWNvbnRlbnQ+XG5cbiJdfQ==