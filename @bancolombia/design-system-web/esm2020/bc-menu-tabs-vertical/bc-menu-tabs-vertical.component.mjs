import { Component, Input } from '@angular/core';
import { BcMenuTabsVerticalBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
export class BcMenuTabsVerticalComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento
         *
         * @memberof BcMenuTabsVerticalComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Listado de items a renderizar en el menú
         *
         * @memberof BcMenuTabsVerticalComponent
         */
        this.menuItems = [];
        /**
         * Orientación del menú, puede ser: left o right.
         *
         * @memberof BcMenuTabsVerticalComponent
         */
        this.orientation = 'right';
    }
    ngAfterViewInit() {
        this.bcMenuTabsVerticalBehavior = new BcMenuTabsVerticalBehavior();
        this.bcMenuTabsVerticalBehavior.setId(this.componentId);
        this.bcMenuTabsVerticalBehavior.setUp();
    }
}
BcMenuTabsVerticalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuTabsVerticalComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcMenuTabsVerticalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuTabsVerticalComponent, selector: "bc-menu-tabs-vertical", inputs: { componentId: "componentId", menuItems: "menuItems", orientation: "orientation" }, ngImport: i0, template: "<section [id]=\"componentId\" class=\"bc-menu-tabs-vertical bc-row\">\n  <nav class=\"bc-menu-tabs-vertical-container bc-menu-tabs-vertical-container-{{orientation}} bc-col-md-3\">\n    <h5 class=\"bc-menu-tabs-vertical-title\">Contenido</h5>\n    <ul class=\"bc-menu-tabs-vertical-items\">\n      <div class=\"bc-menu-tabs-vertical-indicator\"></div>\n      <li *ngFor=\"let item of menuItems\" class=\"bc-menu-tabs-vertical-item\" [attr.data-target]=\"item.itemTargetID\">\n        {{item.itemText}}\n      </li>\n    </ul>\n  </nav>\n  <article class=\"bc-menu-tabs-vertical-content bc-col-md\">\n    <ng-content select=\".bc-menu-tabs-vertical-content\"></ng-content>\n  </article>\n</section>\n", directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuTabsVerticalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-tabs-vertical', template: "<section [id]=\"componentId\" class=\"bc-menu-tabs-vertical bc-row\">\n  <nav class=\"bc-menu-tabs-vertical-container bc-menu-tabs-vertical-container-{{orientation}} bc-col-md-3\">\n    <h5 class=\"bc-menu-tabs-vertical-title\">Contenido</h5>\n    <ul class=\"bc-menu-tabs-vertical-items\">\n      <div class=\"bc-menu-tabs-vertical-indicator\"></div>\n      <li *ngFor=\"let item of menuItems\" class=\"bc-menu-tabs-vertical-item\" [attr.data-target]=\"item.itemTargetID\">\n        {{item.itemText}}\n      </li>\n    </ul>\n  </nav>\n  <article class=\"bc-menu-tabs-vertical-content bc-col-md\">\n    <ng-content select=\".bc-menu-tabs-vertical-content\"></ng-content>\n  </article>\n</section>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], menuItems: [{
                type: Input
            }], orientation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbWVudS10YWJzLXZlcnRpY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1tZW51LXRhYnMtdmVydGljYWwvYmMtbWVudS10YWJzLXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1tZW51LXRhYnMtdmVydGljYWwvYmMtbWVudS10YWJzLXZlcnRpY2FsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQWdDLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFPaEgsTUFBTSxPQUFPLDJCQUEyQjtJQXNCdEMsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBckJwRDs7OztXQUlHO1FBQ00sZ0JBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RDs7OztXQUlHO1FBQ00sY0FBUyxHQUFtQyxFQUFFLENBQUM7UUFDeEQ7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQXFCLE9BQU8sQ0FBQztJQUlNLENBQUM7SUFFeEQsZUFBZTtRQUNiLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLDBCQUEwQixFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7O3dIQTVCVSwyQkFBMkI7NEdBQTNCLDJCQUEyQix5SkNSeEMsNnJCQWNBOzJGRE5hLDJCQUEyQjtrQkFKdkMsU0FBUzsrQkFDRSx1QkFBdUI7c0dBU3hCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBTUcsU0FBUztzQkFBakIsS0FBSztnQkFNRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNNZW51VGFic1ZlcnRpY2FsQmVoYXZpb3IsIEJjTWVudVRhYnNWZXJ0aWNhbEl0ZW1Db25maWcgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1tZW51LXRhYnMtdmVydGljYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtbWVudS10YWJzLXZlcnRpY2FsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNNZW51VGFic1ZlcnRpY2FsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG9cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTWVudVRhYnNWZXJ0aWNhbENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcbiAgLyoqXG4gICAqIExpc3RhZG8gZGUgaXRlbXMgYSByZW5kZXJpemFyIGVuIGVsIG1lbsO6XG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY01lbnVUYWJzVmVydGljYWxDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG1lbnVJdGVtczogQmNNZW51VGFic1ZlcnRpY2FsSXRlbUNvbmZpZ1tdID0gW107XG4gIC8qKlxuICAgKiBPcmllbnRhY2nDs24gZGVsIG1lbsO6LCBwdWVkZSBzZXI6IGxlZnQgbyByaWdodC5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTWVudVRhYnNWZXJ0aWNhbENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgb3JpZW50YXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAncmlnaHQnO1xuXG4gIGJjTWVudVRhYnNWZXJ0aWNhbEJlaGF2aW9yOiBCY01lbnVUYWJzVmVydGljYWxCZWhhdmlvcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJjTWVudVRhYnNWZXJ0aWNhbEJlaGF2aW9yID0gbmV3IEJjTWVudVRhYnNWZXJ0aWNhbEJlaGF2aW9yKCk7XG4gICAgdGhpcy5iY01lbnVUYWJzVmVydGljYWxCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICB0aGlzLmJjTWVudVRhYnNWZXJ0aWNhbEJlaGF2aW9yLnNldFVwKCk7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIFtpZF09XCJjb21wb25lbnRJZFwiIGNsYXNzPVwiYmMtbWVudS10YWJzLXZlcnRpY2FsIGJjLXJvd1wiPlxuICA8bmF2IGNsYXNzPVwiYmMtbWVudS10YWJzLXZlcnRpY2FsLWNvbnRhaW5lciBiYy1tZW51LXRhYnMtdmVydGljYWwtY29udGFpbmVyLXt7b3JpZW50YXRpb259fSBiYy1jb2wtbWQtM1wiPlxuICAgIDxoNSBjbGFzcz1cImJjLW1lbnUtdGFicy12ZXJ0aWNhbC10aXRsZVwiPkNvbnRlbmlkbzwvaDU+XG4gICAgPHVsIGNsYXNzPVwiYmMtbWVudS10YWJzLXZlcnRpY2FsLWl0ZW1zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmMtbWVudS10YWJzLXZlcnRpY2FsLWluZGljYXRvclwiPjwvZGl2PlxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1lbnVJdGVtc1wiIGNsYXNzPVwiYmMtbWVudS10YWJzLXZlcnRpY2FsLWl0ZW1cIiBbYXR0ci5kYXRhLXRhcmdldF09XCJpdGVtLml0ZW1UYXJnZXRJRFwiPlxuICAgICAgICB7e2l0ZW0uaXRlbVRleHR9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L25hdj5cbiAgPGFydGljbGUgY2xhc3M9XCJiYy1tZW51LXRhYnMtdmVydGljYWwtY29udGVudCBiYy1jb2wtbWRcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCIuYmMtbWVudS10YWJzLXZlcnRpY2FsLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gIDwvYXJ0aWNsZT5cbjwvc2VjdGlvbj5cbiJdfQ==