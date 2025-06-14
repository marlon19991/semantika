import { Component, ContentChild, Input } from '@angular/core';
import { BcPaginatorComponent } from '@bancolombia/design-system-web/bc-paginator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BcTableFooterComponent {
    constructor() {
        /**
         * Array con los valores totales que se muestran en el footer de la tabla.
         *
         * @type {Array<BcTableTotalAmount>}
         * @memberof BcTableFooterComponent
         */
        this.totalAmounts = [];
    }
    ngAfterViewInit() {
        this.getPaginator();
    }
    /**
     * metodo para obtener la referencia del paginador sino lo encuentra
     * lo retorna como undefined
     * @returns paginador o undefined
     */
    getPaginator() {
        if (this.content !== undefined) {
            return this.content.bcPaginatorBehavior;
        }
        return undefined;
    }
}
BcTableFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcTableFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableFooterComponent, selector: "bc-table-footer", inputs: { totalAmounts: "totalAmounts" }, queries: [{ propertyName: "content", first: true, predicate: BcPaginatorComponent, descendants: true }], ngImport: i0, template: "<div class=\"bc-table-footer\">\n  <div class=\"bc-table-footer-container\">\n    <div class=\"bc-table-footer-total-container\" *ngIf=\"totalAmounts.length > 0\">\n      <div class=\"bc-table-footer-total-column\" *ngFor=\"let item of totalAmounts\">\n        <p class=\"bc-table-footer-total-column-title\">{{item.title}}</p>\n        <h6 class=\"bc-table-footer-total-column-value\">{{item.amount}}</h6>\n      </div>\n    </div>\n    <div class=\"bc-table-footer-subcontainer\">\n      <div class=\"bc-table-actions-container\">\n        <div class=\"bc-table-paginator-container\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-table-footer', template: "<div class=\"bc-table-footer\">\n  <div class=\"bc-table-footer-container\">\n    <div class=\"bc-table-footer-total-container\" *ngIf=\"totalAmounts.length > 0\">\n      <div class=\"bc-table-footer-total-column\" *ngFor=\"let item of totalAmounts\">\n        <p class=\"bc-table-footer-total-column-title\">{{item.title}}</p>\n        <h6 class=\"bc-table-footer-total-column-value\">{{item.amount}}</h6>\n      </div>\n    </div>\n    <div class=\"bc-table-footer-subcontainer\">\n      <div class=\"bc-table-actions-container\">\n        <div class=\"bc-table-paginator-container\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { totalAmounts: [{
                type: Input
            }], content: [{
                type: ContentChild,
                args: [BcPaginatorComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFibGUtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWJsZS9iYy10YWJsZS1mb290ZXIvYmMtdGFibGUtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWJsZS9iYy10YWJsZS1mb290ZXIvYmMtdGFibGUtZm9vdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7O0FBTW5GLE1BQU0sT0FBTyxzQkFBc0I7SUFKbkM7UUFLRTs7Ozs7V0FLRztRQUNNLGlCQUFZLEdBQThCLEVBQUUsQ0FBQztLQXFCdkQ7SUFkQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksWUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUksU0FBUyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztTQUN6QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7O21IQTNCVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixzSUFZbkIsb0JBQW9CLGdEQ25CcEMsK3FCQWlCQTsyRkRWYSxzQkFBc0I7a0JBSmxDLFNBQVM7K0JBQ0UsaUJBQWlCOzhCQVVsQixZQUFZO3NCQUFwQixLQUFLO2dCQUs4QixPQUFPO3NCQUExQyxZQUFZO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNQYWdpbmF0b3JDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtcGFnaW5hdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtdGFibGUtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXRhYmxlLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjVGFibGVGb290ZXJDb21wb25lbnQge1xuICAvKipcbiAgICogQXJyYXkgY29uIGxvcyB2YWxvcmVzIHRvdGFsZXMgcXVlIHNlIG11ZXN0cmFuIGVuIGVsIGZvb3RlciBkZSBsYSB0YWJsYS5cbiAgICpcbiAgICogQHR5cGUge0FycmF5PEJjVGFibGVUb3RhbEFtb3VudD59XG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlRm9vdGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0b3RhbEFtb3VudHM6IEFycmF5PEJjVGFibGVUb3RhbEFtb3VudD4gPSBbXTtcbiAgLyoqXG4gICAqIGNvbnRlbnQgcXVlIGhhY2UgcmVmZXJlbmNpYSBhbCBwYWdpbmFkb3IgYWxvamFkbyBkZW50cm8gZGVsIGhlYWRlclxuICAgKiAgQG1lbWJlcm9mIEJjVGFibGVGb290ZXJDb21wb25lbnRcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoQmNQYWdpbmF0b3JDb21wb25lbnQpIGNvbnRlbnQ6IEJjUGFnaW5hdG9yQ29tcG9uZW50O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpO1xuICB9XG4gIC8qKlxuICAgKiBtZXRvZG8gcGFyYSBvYnRlbmVyIGxhIHJlZmVyZW5jaWEgZGVsIHBhZ2luYWRvciBzaW5vIGxvIGVuY3VlbnRyYVxuICAgKiBsbyByZXRvcm5hIGNvbW8gdW5kZWZpbmVkXG4gICAqIEByZXR1cm5zIHBhZ2luYWRvciBvIHVuZGVmaW5lZCBcbiAgICovXG4gIHB1YmxpYyBnZXRQYWdpbmF0b3IoKXtcbiAgICBpZiAodGhpcy5jb250ZW50IT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudC5iY1BhZ2luYXRvckJlaGF2aW9yO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4vKipcbiAqIEludGVyZmF6IGRlIGxvcyB2YWxvcmVzIHRvdGFsZXMuXG4gKlxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBCY1RhYmxlVG90YWxBbW91bnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCY1RhYmxlVG90YWxBbW91bnQge1xuICB0aXRsZT86IHN0cmluZztcbiAgYW1vdW50Pzogc3RyaW5nO1xufVxuIiwiPGRpdiBjbGFzcz1cImJjLXRhYmxlLWZvb3RlclwiPlxuICA8ZGl2IGNsYXNzPVwiYmMtdGFibGUtZm9vdGVyLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJiYy10YWJsZS1mb290ZXItdG90YWwtY29udGFpbmVyXCIgKm5nSWY9XCJ0b3RhbEFtb3VudHMubGVuZ3RoID4gMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJjLXRhYmxlLWZvb3Rlci10b3RhbC1jb2x1bW5cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0b3RhbEFtb3VudHNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJiYy10YWJsZS1mb290ZXItdG90YWwtY29sdW1uLXRpdGxlXCI+e3tpdGVtLnRpdGxlfX08L3A+XG4gICAgICAgIDxoNiBjbGFzcz1cImJjLXRhYmxlLWZvb3Rlci10b3RhbC1jb2x1bW4tdmFsdWVcIj57e2l0ZW0uYW1vdW50fX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJjLXRhYmxlLWZvb3Rlci1zdWJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYy10YWJsZS1hY3Rpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtdGFibGUtcGFnaW5hdG9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==