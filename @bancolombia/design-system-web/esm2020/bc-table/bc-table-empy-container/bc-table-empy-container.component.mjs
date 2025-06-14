import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class BcTableEmptyContainerComponent {
    constructor(el) {
        this.element = el;
        this.element.nativeElement.classList.add('bc-table-extra-info-row');
    }
}
BcTableEmptyContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableEmptyContainerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcTableEmptyContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableEmptyContainerComponent, selector: "[bc-table-empty-container]", viewQueries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true, static: true }], ngImport: i0, template: `
  <td>
    <div class="bc-table-extra-info-row-content">
      <ng-content></ng-content>
    </div>
  </td>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableEmptyContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[bc-table-empty-container]',
                    template: `
  <td>
    <div class="bc-table-extra-info-row-content">
      <ng-content></ng-content>
    </div>
  </td>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { template: [{
                type: ViewChild,
                args: ['template', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFibGUtZW1weS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXRhYmxlL2JjLXRhYmxlLWVtcHktY29udGFpbmVyL2JjLXRhYmxlLWVtcHktY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFZakUsTUFBTSxPQUFPLDhCQUE4QjtJQUl6QyxZQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OzJIQVBVLDhCQUE4QjsrR0FBOUIsOEJBQThCLHNMQVIvQjs7Ozs7O0dBTVQ7MkZBRVUsOEJBQThCO2tCQVYxQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7aUJBQ0Y7aUdBRTBDLFFBQVE7c0JBQWhELFNBQVM7dUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tiYy10YWJsZS1lbXB0eS1jb250YWluZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHRkPlxuICAgIDxkaXYgY2xhc3M9XCJiYy10YWJsZS1leHRyYS1pbmZvLXJvdy1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvdGQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEJjVGFibGVFbXB0eUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGU7XG5cbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbDtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYy10YWJsZS1leHRyYS1pbmZvLXJvdycpO1xuICB9XG5cbn1cbiJdfQ==