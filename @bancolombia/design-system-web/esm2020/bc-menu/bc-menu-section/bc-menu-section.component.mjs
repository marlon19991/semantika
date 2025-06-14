import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente sección menú.
 *
 * @export
 * @class BcMenuSectionComponent
 * @implements {OnInit}
 */
export class BcMenuSectionComponent {
    ngOnInit() {
    }
}
BcMenuSectionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuSectionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuSectionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuSectionComponent, selector: "bc-menu-section", inputs: { title: "title" }, ngImport: i0, template: "\n<ul>\n    <a>\n        <li>\n            <h6>\n                {{title}}\n            </h6>\n        </li>\n    </a>\n    <ng-content>\n        \n    </ng-content>\n</ul>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuSectionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-section', template: "\n<ul>\n    <a>\n        <li>\n            <h6>\n                {{title}}\n            </h6>\n        </li>\n    </a>\n    <ng-content>\n        \n    </ng-content>\n</ul>\n" }]
        }], propDecorators: { title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbWVudS1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1tZW51L2JjLW1lbnUtc2VjdGlvbi9iYy1tZW51LXNlY3Rpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLW1lbnUvYmMtbWVudS1zZWN0aW9uL2JjLW1lbnUtc2VjdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFDekQ7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLHNCQUFzQjtJQVNqQyxRQUFRO0lBQ1IsQ0FBQzs7bUhBVlUsc0JBQXNCO3VHQUF0QixzQkFBc0IsbUZDWm5DLGdMQWFBOzJGRERhLHNCQUFzQjtrQkFKbEMsU0FBUzsrQkFDRSxpQkFBaUI7OEJBVWxCLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBDb21wb25lbnRlIHNlY2Npw7NuIG1lbsO6LlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY01lbnVTZWN0aW9uQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1tZW51LXNlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtbWVudS1zZWN0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY01lbnVTZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKipcbiAgICogdGl0dWxvIHNlY2Npw7NuIG1lbsO6LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNNZW51U2VjdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU7XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiXG48dWw+XG4gICAgPGE+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgIDwvbGk+XG4gICAgPC9hPlxuICAgIDxuZy1jb250ZW50PlxuICAgICAgICBcbiAgICA8L25nLWNvbnRlbnQ+XG48L3VsPlxuIl19