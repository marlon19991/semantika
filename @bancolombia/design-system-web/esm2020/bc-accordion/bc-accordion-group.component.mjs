import { Component, Input, EventEmitter, Output, ContentChildren, } from '@angular/core';
import { BcAccordionBehavior } from '@bancolombia/design-system-behaviors';
import { BcAccordionHeaderComponent } from './bc-accordion-header/bc-accordion-header.component';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Importa el Acordeón para contener elementos
 *
 * @export
 * @class BcAccordionsGroupComponent
 * @implements {OnInit}
 */
export class BcAccordionGroupComponent {
    /**
     * Creates an instance of BcAccordionGroupComponent.
     * @param {ElementRef} elementRef
     * @memberof BcAccordionGroupComponent
     */
    constructor(bcHelperService, elementRef) {
        this.bcHelperService = bcHelperService;
        this.elementRef = elementRef;
        /**
         * Define el comportamiento de evento expandir de la acordeón
         * Si es single, solo se podrá expandir una acordeón a la vez
         * es decir, al expandir una se cierra la que estaba activa.
         * Valor por defecto es false.
         *
         * @memberof BcAccordionGroupComponent
         */
        this.single = false;
        /**
         * Evento que indica el index de una acordeón cuando esta es abierta o activada
         *
         * @type {EventEmitter<number>}
         * @memberof BcAccordionGroupComponent
         */
        this.select = new EventEmitter();
        this.componentId = this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        this.bcAccordionGroupBehavior = new BcAccordionBehavior();
        this.bcAccordionGroupBehavior.activeFunction = (index) => {
            this.select.emit(index);
        };
        this.initBehavior();
        this.headers.changes.subscribe((res) => {
            this.headers = res;
            this.initBehavior();
        });
    }
    initBehavior() {
        this.bcAccordionGroupBehavior.setElement(this.elementRef.nativeElement);
        this.bcAccordionGroupBehavior.setUp(true);
    }
}
BcAccordionGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionGroupComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcAccordionGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAccordionGroupComponent, selector: "bc-accordions-group", inputs: { single: "single", componentId: "componentId" }, outputs: { select: "select" }, queries: [{ propertyName: "headers", predicate: BcAccordionHeaderComponent, descendants: true }], ngImport: i0, template: "<div\n  [id]=\"componentId\"\n  class=\"bc-accordions-group\"\n  role=\"group\"\n  [attr.data-is-single]=\"single ? 'true' : null\"\n>\n  <ng-content></ng-content>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-accordions-group', template: "<div\n  [id]=\"componentId\"\n  class=\"bc-accordions-group\"\n  role=\"group\"\n  [attr.data-is-single]=\"single ? 'true' : null\"\n>\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { single: [{
                type: Input
            }], select: [{
                type: Output
            }], headers: [{
                type: ContentChildren,
                args: [BcAccordionHeaderComponent, { descendants: true }]
            }], componentId: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hY2NvcmRpb24vYmMtYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hY2NvcmRpb24vYmMtYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sZUFBZSxHQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBQ2pHOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFnQ3BDOzs7O09BSUc7SUFDSCxZQUFvQixlQUFnQyxFQUFVLFVBQXNCO1FBQWhFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFuQ3BGOzs7Ozs7O1dBT0c7UUFDTSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBVXhCOzs7OztXQUtHO1FBQ08sV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBSTNELGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFPdUIsQ0FBQztJQUV4RixlQUFlO1FBQ2IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7O3NIQXREVSx5QkFBeUI7MEdBQXpCLHlCQUF5Qiw0S0E0Qm5CLDBCQUEwQixnRENwRDdDLCtLQVFBOzJGRGdCYSx5QkFBeUI7a0JBSnJDLFNBQVM7K0JBQ0UscUJBQXFCOytIQWF0QixNQUFNO3NCQUFkLEtBQUs7Z0JBZ0JJLE1BQU07c0JBQWYsTUFBTTtnQkFFNkQsT0FBTztzQkFBMUUsZUFBZTt1QkFBQywwQkFBMEIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0JBRXpELFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNBY2NvcmRpb25CZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYmMtYWNjb3JkaW9uLWhlYWRlci9iYy1hY2NvcmRpb24taGVhZGVyLmNvbXBvbmVudCc7XG4vKipcbiAqIEltcG9ydGEgZWwgQWNvcmRlw7NuIHBhcmEgY29udGVuZXIgZWxlbWVudG9zXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjQWNjb3JkaW9uc0dyb3VwQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1hY2NvcmRpb25zLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0FjY29yZGlvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLyoqXG4gICAqIERlZmluZSBlbCBjb21wb3J0YW1pZW50byBkZSBldmVudG8gZXhwYW5kaXIgZGUgbGEgYWNvcmRlw7NuXG4gICAqIFNpIGVzIHNpbmdsZSwgc29sbyBzZSBwb2Ryw6EgZXhwYW5kaXIgdW5hIGFjb3JkZcOzbiBhIGxhIHZlelxuICAgKiBlcyBkZWNpciwgYWwgZXhwYW5kaXIgdW5hIHNlIGNpZXJyYSBsYSBxdWUgZXN0YWJhIGFjdGl2YS5cbiAgICogVmFsb3IgcG9yIGRlZmVjdG8gZXMgZmFsc2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0FjY29yZGlvbkdyb3VwQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzaW5nbGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29tcG9ydGFtaWVudG8gZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge0JjQWNjb3JkaW9uQmVoYXZpb3J9XG4gICAqIEBtZW1iZXJvZiBCY0FjY29yZGlvbkdyb3VwQ29tcG9uZW50XG4gICAqL1xuICBiY0FjY29yZGlvbkdyb3VwQmVoYXZpb3I6IEJjQWNjb3JkaW9uQmVoYXZpb3I7XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgaW5kaWNhIGVsIGluZGV4IGRlIHVuYSBhY29yZGXDs24gY3VhbmRvIGVzdGEgZXMgYWJpZXJ0YSBvIGFjdGl2YWRhXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8bnVtYmVyPn1cbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uR3JvdXBDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBoZWFkZXJzOiBRdWVyeUxpc3Q8QmNBY2NvcmRpb25IZWFkZXJDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCY0FjY29yZGlvbkdyb3VwQ29tcG9uZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnRSZWZ9IGVsZW1lbnRSZWZcbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uR3JvdXBDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5iY0FjY29yZGlvbkdyb3VwQmVoYXZpb3IgPSBuZXcgQmNBY2NvcmRpb25CZWhhdmlvcigpO1xuICAgIHRoaXMuYmNBY2NvcmRpb25Hcm91cEJlaGF2aW9yLmFjdGl2ZUZ1bmN0aW9uID0gKGluZGV4OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoaW5kZXgpO1xuICAgIH07XG4gICAgdGhpcy5pbml0QmVoYXZpb3IoKTtcbiAgICB0aGlzLmhlYWRlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgdGhpcy5oZWFkZXJzID0gcmVzO1xuICAgICAgdGhpcy5pbml0QmVoYXZpb3IoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEJlaGF2aW9yKCkge1xuICAgIHRoaXMuYmNBY2NvcmRpb25Hcm91cEJlaGF2aW9yLnNldEVsZW1lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuYmNBY2NvcmRpb25Hcm91cEJlaGF2aW9yLnNldFVwKHRydWUpO1xuICB9XG59XG4iLCI8ZGl2XG4gIFtpZF09XCJjb21wb25lbnRJZFwiXG4gIGNsYXNzPVwiYmMtYWNjb3JkaW9ucy1ncm91cFwiXG4gIHJvbGU9XCJncm91cFwiXG4gIFthdHRyLmRhdGEtaXMtc2luZ2xlXT1cInNpbmdsZSA/ICd0cnVlJyA6IG51bGxcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==