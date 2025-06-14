import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BcShortcutGroupComponent {
    constructor() {
        /**
         * Este valor de entrada define el tipo de shortcut.
         * Los valores permitidos [ single(default) | multiple | horizontal ]
         *
         * @type {string}
         * @memberof BcShortcutComponent
         */
        this.typeShortcut = 'single';
    }
}
BcShortcutGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcShortcutGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcShortcutGroupComponent, selector: "bc-shortcut-group", inputs: { typeShortcut: "typeShortcut" }, ngImport: i0, template: "<section aria-hidden=\"true\" class=\"bc-shortcut-group-{{typeShortcut}}\">\n  <ng-content></ng-content>\n</section>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-shortcut-group', template: "<section aria-hidden=\"true\" class=\"bc-shortcut-group-{{typeShortcut}}\">\n  <ng-content></ng-content>\n</section>\n" }]
        }], propDecorators: { typeShortcut: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2hvcnRjdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXNob3J0Y3V0L2JjLXNob3J0Y3V0LWdyb3VwL2JjLXNob3J0Y3V0LWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zaG9ydGN1dC9iYy1zaG9ydGN1dC1ncm91cC9iYy1zaG9ydGN1dC1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNakQsTUFBTSxPQUFPLHdCQUF3QjtJQUpyQztRQU1FOzs7Ozs7V0FNRztRQUNNLGlCQUFZLEdBQXlDLFFBQVEsQ0FBQztLQUV4RTs7cUhBWFksd0JBQXdCO3lHQUF4Qix3QkFBd0IsbUdDTnJDLHdIQUdBOzJGREdhLHdCQUF3QjtrQkFKcEMsU0FBUzsrQkFDRSxtQkFBbUI7OEJBWXBCLFlBQVk7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXNob3J0Y3V0LWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXNob3J0Y3V0LWdyb3VwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY1Nob3J0Y3V0R3JvdXBDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBFc3RlIHZhbG9yIGRlIGVudHJhZGEgZGVmaW5lIGVsIHRpcG8gZGUgc2hvcnRjdXQuXG4gICAqIExvcyB2YWxvcmVzIHBlcm1pdGlkb3MgWyBzaW5nbGUoZGVmYXVsdCkgfCBtdWx0aXBsZSB8IGhvcml6b250YWwgXVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTaG9ydGN1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZVNob3J0Y3V0OiAnc2luZ2xlJyB8ICdtdWx0aXBsZScgfCAnaG9yaXpvbnRhbCcgPSAnc2luZ2xlJztcblxufVxuIiwiPHNlY3Rpb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiYy1zaG9ydGN1dC1ncm91cC17e3R5cGVTaG9ydGN1dH19XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc2VjdGlvbj5cbiJdfQ==