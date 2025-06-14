import { Component, EventEmitter, Input, Optional, Output, Self, } from '@angular/core';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcPlannerBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Importa el componente de calendario con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcPlannerComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class BcPlannerComponent extends BcGeneralInputComponent {
    constructor(controlDirective, bcHelperService, changeDetectorRef) {
        super();
        this.controlDirective = controlDirective;
        this.bcHelperService = bcHelperService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Id del elemento planner.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Dato de entrada que recibe los items a mostrar.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.items = [];
        /**
         *.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.itemsTop = [];
        /**
         * Dato de salida que muestra cuando cambia el valor.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.changeValue = new EventEmitter();
        this.today = new Date();
        this.todayMonth = this.today.getMonth();
        this.todayYear = this.today.getFullYear();
        this.element = new BcPlannerBehavior();
        this.element.outputChanges = (value) => {
            this.changesBehavior = value;
            this.setMonth_Year();
        };
        this.element.outputValues = (value) => {
            this.onInput(value);
        };
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.element.setId(this.componentId);
        this.element.setUp();
        if (this.items) {
            this.element.setItems(this.postItems(this.items));
        }
        if (this.itemsTop) {
            this.element.setItemsTop(this.itemsTop);
        }
    }
    ngOnChanges(changes) {
        if (changes) {
            this.changeDetectorRef.detectChanges();
            if (changes.items) {
                this.element.setItems(this.postItems(changes.items.currentValue));
            }
        }
    }
    postItems(Items) {
        return Items.filter((a) => {
            if (a.date.getMonth() == this.todayMonth && a.date.getFullYear() == this.todayYear) {
                return true;
            }
            return false;
        });
    }
    setMonth_Year() {
        this.todayMonth = this.changesBehavior.monthValue;
        this.todayYear = this.changesBehavior.yearValue;
        if (this.items) {
            this.element.setItems(this.postItems(this.items));
        }
    }
    onInput(value) {
        this.changeValue.emit(value);
    }
}
BcPlannerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.BcHelperService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
BcPlannerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPlannerComponent, selector: "bc-planner", inputs: { componentId: "componentId", items: "items", itemsTop: "itemsTop" }, outputs: { changeValue: "changeValue" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-planner\" [id]=\"componentId\"></div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-planner', template: "<div class=\"bc-planner\" [id]=\"componentId\"></div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i2.BcHelperService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], items: [{
                type: Input
            }], itemsTop: [{
                type: Input
            }], changeValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGxhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtcGxhbm5lci9iYy1wbGFubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wbGFubmVyL2JjLXBsYW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxHQUVMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBbUIsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUJBQWlCLEVBQW9DLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFM0c7Ozs7Ozs7R0FPRztBQUtILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSx1QkFBdUI7SUF5QzdELFlBQXVDLGdCQUEyQixFQUFVLGVBQWdDLEVBQVUsaUJBQW9DO1FBQ3hKLEtBQUssRUFBRSxDQUFDO1FBRDZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBVztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF0QzFKOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RDs7Ozs7V0FLRztRQUNNLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRXRDOzs7OztXQUtHO1FBRU0sYUFBUSxHQUFxQixFQUFFLENBQUM7UUFFekM7Ozs7O1dBS0c7UUFFTyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRW5FLFVBQUssR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFD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UUFBUTtzQkFBaEIsS0FBSztnQkFTSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNlbGYsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlLCBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEJjUGxhbm5lckJlaGF2aW9yLCBJQmNQbGFubmVySXRlbSwgSUJjUGxhbm5lckNoYW5nZXN9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5cbi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25lbnRlIGRlIGNhbGVuZGFyaW8gY29uIGxvcyBkaXNlw7FvcyBkZSBCYW5jb2xvbWJpYSBTLkEuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjUGxhbm5lckNvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1wbGFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXBsYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY1BsYW5uZXJDb21wb25lbnQgZXh0ZW5kcyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgZWxlbWVudDogQmNQbGFubmVyQmVoYXZpb3I7XG5cbiAgLyoqXG4gICAqIElkIGRlbCBlbGVtZW50byBwbGFubmVyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgQmNQbGFubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZCA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBEYXRvIGRlIGVudHJhZGEgcXVlIHJlY2liZSBsb3MgaXRlbXMgYSBtb3N0cmFyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgQmNQbGFubmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpdGVtczogSUJjUGxhbm5lckl0ZW1bXSA9IFtdO1xuXG4gIC8qKlxuICAgKi5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIEJjUGxhbm5lckNvbXBvbmVudFxuICAgKi9cblxuICBASW5wdXQoKSBpdGVtc1RvcDogSUJjUGxhbm5lckl0ZW1bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBEYXRvIGRlIHNhbGlkYSBxdWUgbXVlc3RyYSBjdWFuZG8gY2FtYmlhIGVsIHZhbG9yLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyT2YgQmNQbGFubmVyQ29tcG9uZW50XG4gICAqL1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY2hhbmdlc0JlaGF2aW9yOiBJQmNQbGFubmVyQ2hhbmdlcztcbiAgdG9kYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICB0b2RheU1vbnRoOiBudW1iZXIgPSB0aGlzLnRvZGF5LmdldE1vbnRoKCk7XG4gIHRvZGF5WWVhcjogbnVtYmVyID0gdGhpcy50b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIGNvbnRyb2xEaXJlY3RpdmU6IE5nQ29udHJvbCwgcHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBCY1BsYW5uZXJCZWhhdmlvcigpO1xuICAgIHRoaXMuZWxlbWVudC5vdXRwdXRDaGFuZ2VzID0gKHZhbHVlOiBJQmNQbGFubmVyQ2hhbmdlcykgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VzQmVoYXZpb3IgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0TW9udGhfWWVhcigpO1xuICAgIH07XG4gICAgdGhpcy5lbGVtZW50Lm91dHB1dFZhbHVlcyA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLm9uSW5wdXQodmFsdWUpO1xuICAgIH07XG4gICAgaWYgKGNvbnRyb2xEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnRyb2xEaXJlY3RpdmUudmFsdWVBY2Nlc3NvciA9IHRoaXMgYXMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQ7XG4gICAgfSBcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0VXAoKTtcbiAgICBpZiAodGhpcy5pdGVtcykge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEl0ZW1zKHRoaXMucG9zdEl0ZW1zKHRoaXMuaXRlbXMpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRlbXNUb3ApIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRJdGVtc1RvcCh0aGlzLml0ZW1zVG9wKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgaWYgKGNoYW5nZXMuaXRlbXMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEl0ZW1zKHRoaXMucG9zdEl0ZW1zKGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcG9zdEl0ZW1zKEl0ZW1zOiBJQmNQbGFubmVySXRlbVtdKSB7XG4gICAgcmV0dXJuIEl0ZW1zLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKGEuZGF0ZS5nZXRNb250aCgpID09IHRoaXMudG9kYXlNb250aCAmJiBhLmRhdGUuZ2V0RnVsbFllYXIoKSA9PSB0aGlzLnRvZGF5WWVhcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1vbnRoX1llYXIoKSB7XG4gICAgdGhpcy50b2RheU1vbnRoID0gdGhpcy5jaGFuZ2VzQmVoYXZpb3IubW9udGhWYWx1ZTtcbiAgICB0aGlzLnRvZGF5WWVhciA9IHRoaXMuY2hhbmdlc0JlaGF2aW9yLnllYXJWYWx1ZTtcbiAgICBpZiAodGhpcy5pdGVtcykge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEl0ZW1zKHRoaXMucG9zdEl0ZW1zKHRoaXMuaXRlbXMpKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYmMtcGxhbm5lclwiIFtpZF09XCJjb21wb25lbnRJZFwiPjwvZGl2PlxuIl19