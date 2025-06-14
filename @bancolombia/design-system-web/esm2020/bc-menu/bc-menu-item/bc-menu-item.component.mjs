import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-icon";
import * as i2 from "@angular/common";
/**
 * Item del menu
 *
 * @export
 * @class BcMenuItemComponent
 * @implements {OnInit}
 */
export class BcMenuItemComponent {
    constructor() {
        /**
         * item activo por defecto
         *
         * @type {string}
         * @memberof BcMenuItemComponent
         */
        this.itemActive = 'false';
    }
    ngOnInit() { }
}
BcMenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuItemComponent, selector: "bc-menu-item", inputs: { text: "text", itemActive: "itemActive", iconName: "iconName", path: "path", identifierContent: "identifierContent" }, ngImport: i0, template: "<a [ngClass]='itemActive === \"true\" ? \"bc-menu-item-active\" : \"bc-menu-item\"' \r\n  aria-label='Item del men\u00FA' [attr.for]='identifierContent' \r\n  [attr.href]='path!=\"\" ? path: null'>\r\n  <li>\r\n    <bc-icon name='{{iconName}}' ariaLabel='{{text}}' aria-hidden=\"true\" role=\"img\" size=\"sm\">\r\n    </bc-icon>\r\n    <div>{{text}}</div>\r\n  </li>\r\n</a>\r\n", components: [{ type: i1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-item', template: "<a [ngClass]='itemActive === \"true\" ? \"bc-menu-item-active\" : \"bc-menu-item\"' \r\n  aria-label='Item del men\u00FA' [attr.for]='identifierContent' \r\n  [attr.href]='path!=\"\" ? path: null'>\r\n  <li>\r\n    <bc-icon name='{{iconName}}' ariaLabel='{{text}}' aria-hidden=\"true\" role=\"img\" size=\"sm\">\r\n    </bc-icon>\r\n    <div>{{text}}</div>\r\n  </li>\r\n</a>\r\n" }]
        }], propDecorators: { text: [{
                type: Input
            }], itemActive: [{
                type: Input
            }], iconName: [{
                type: Input
            }], path: [{
                type: Input
            }], identifierContent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1tZW51L2JjLW1lbnUtaXRlbS9iYy1tZW51LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLW1lbnUvYmMtbWVudS1pdGVtL2JjLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUV6RDs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBYUU7Ozs7O1dBS0c7UUFDTSxlQUFVLEdBQUcsT0FBTyxDQUFDO0tBd0IvQjtJQURDLFFBQVEsS0FBSSxDQUFDOztnSEF0Q0YsbUJBQW1CO29HQUFuQixtQkFBbUIsb0xDYmhDLDZYQVNBOzJGRElhLG1CQUFtQjtrQkFKL0IsU0FBUzsrQkFDRSxjQUFjOzhCQVVmLElBQUk7c0JBQVosS0FBSztnQkFRRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQU9HLGlCQUFpQjtzQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEl0ZW0gZGVsIG1lbnVcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNNZW51SXRlbUNvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjTWVudUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGV4dG8gZGVsIGl0ZW1cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTWVudUl0ZW1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogaXRlbSBhY3Rpdm8gcG9yIGRlZmVjdG9cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTWVudUl0ZW1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmUgPSAnZmFsc2UnO1xuICAvKipcbiAgICogTm9tYnJlIGRlbCBpY29ub1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNNZW51SXRlbUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFJ1dGEgb3IgdXJsIGRlbCBpdGVtXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY01lbnVJdGVtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBwYXRoPzogc3RyaW5nO1xuICAvKipcbiAgICogSWQgZGVsIGVsZW1lbnRvXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY01lbnVJdGVtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpZGVudGlmaWVyQ29udGVudD86IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCI8YSBbbmdDbGFzc109J2l0ZW1BY3RpdmUgPT09IFwidHJ1ZVwiID8gXCJiYy1tZW51LWl0ZW0tYWN0aXZlXCIgOiBcImJjLW1lbnUtaXRlbVwiJyBcclxuICBhcmlhLWxhYmVsPSdJdGVtIGRlbCBtZW7DuicgW2F0dHIuZm9yXT0naWRlbnRpZmllckNvbnRlbnQnIFxyXG4gIFthdHRyLmhyZWZdPSdwYXRoIT1cIlwiID8gcGF0aDogbnVsbCc+XHJcbiAgPGxpPlxyXG4gICAgPGJjLWljb24gbmFtZT0ne3tpY29uTmFtZX19JyBhcmlhTGFiZWw9J3t7dGV4dH19JyBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgc2l6ZT1cInNtXCI+XHJcbiAgICA8L2JjLWljb24+XHJcbiAgICA8ZGl2Pnt7dGV4dH19PC9kaXY+XHJcbiAgPC9saT5cclxuPC9hPlxyXG4iXX0=