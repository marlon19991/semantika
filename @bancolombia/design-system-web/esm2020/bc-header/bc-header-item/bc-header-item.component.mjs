import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Componente del item para el header
 * Este componente puede ser de 6 tipos ['help' | 'language' | 'notifiaction' | 'user' | 'logout']
 *
 * @export
 * @class BcHeaderItemMenu
 */
export class BcHeaderItemMenuComponent {
    constructor(bcHelper) {
        this.bcHelper = bcHelper;
        /**
         * Id del componente.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.itemId = this.bcHelper.getId(this);
        /**
         *  itemType define el tipo de icono a mostrar pueden ser tipo user o logout.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.itemType = 'any';
        /**
         * Define el icono a mostrar en cada item del header.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.icon = null;
        /**
         * Define la url a la cual vamos a redirigir cada enlace del header.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.route = '';
        /**
         * Define el tipo de avatar que se va a mostrar en el header.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.userAvatar = null;
        /**
         * Id del item.
         *
         * @type {string}
         * @memberof BcHeaderItemMenuComponent
         */
        this.componentId = this.bcHelper.getId(this);
    }
}
BcHeaderItemMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderItemMenuComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcHeaderItemMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderItemMenuComponent, selector: "bc-header-item", inputs: { itemId: "itemId", itemType: "itemType", icon: "icon", text: "text", subText: "subText", route: "route", userAvatar: "userAvatar", componentId: "componentId" }, ngImport: i0, template: "<li class=\"bc-header-nav-item\" [ngClass]=\"{'bc-header-nav-item_logout': itemType === 'logout'}\" [id]=\"componentId\">\n    <a class=\"bc-link\" [attr.href]=\"route!=''? route: null\">\n        <em class=\"bc-icon bc-sm\" *ngIf=\"icon !== null\">{{icon}}</em>\n        <img class=\"bc-avatar bc-avatar-small\" src=\"{{userAvatar}}\" alt=\"avatar\" *ngIf=\"itemType === 'user' && userAvatar !== null\">\n        <div class=\"bc-header-nav-item-text\">\n            <p>{{text}}</p><small *ngIf=\"subText !== ''\">{{subText}}</small>\n        </div>\n    </a>\n</li>\n", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderItemMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header-item', template: "<li class=\"bc-header-nav-item\" [ngClass]=\"{'bc-header-nav-item_logout': itemType === 'logout'}\" [id]=\"componentId\">\n    <a class=\"bc-link\" [attr.href]=\"route!=''? route: null\">\n        <em class=\"bc-icon bc-sm\" *ngIf=\"icon !== null\">{{icon}}</em>\n        <img class=\"bc-avatar bc-avatar-small\" src=\"{{userAvatar}}\" alt=\"avatar\" *ngIf=\"itemType === 'user' && userAvatar !== null\">\n        <div class=\"bc-header-nav-item-text\">\n            <p>{{text}}</p><small *ngIf=\"subText !== ''\">{{subText}}</small>\n        </div>\n    </a>\n</li>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { itemId: [{
                type: Input
            }], itemType: [{
                type: Input
            }], icon: [{
                type: Input
            }], text: [{
                type: Input
            }], subText: [{
                type: Input
            }], route: [{
                type: Input
            }], userAvatar: [{
                type: Input
            }], componentId: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaGVhZGVyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWhlYWRlci9iYy1oZWFkZXItaXRlbS9iYy1oZWFkZXItaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaGVhZGVyL2JjLWhlYWRlci1pdGVtL2JjLWhlYWRlci1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBR2pEOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFrRHBDLFlBQW9CLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBakQ3Qzs7OztXQUlHO1FBQ00sV0FBTSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BEOzs7O1dBSUc7UUFDTSxhQUFRLEdBQThCLEtBQUssQ0FBQztRQUNyRDs7OztXQUlHO1FBQ00sU0FBSSxHQUFXLElBQUksQ0FBQztRQWE3Qjs7OztXQUlHO1FBQ00sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQjs7OztXQUlHO1FBQ00sZUFBVSxHQUFXLElBQUksQ0FBQztRQUNuQzs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDVCxDQUFDOztzSEFsRHRDLHlCQUF5QjswR0FBekIseUJBQXlCLGdPQ2R0QywwakJBU0E7MkZES2EseUJBQXlCO2tCQUpyQyxTQUFTOytCQUNFLGdCQUFnQjtzR0FTakIsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFNRyxPQUFPO3NCQUFmLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU1HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuLyoqXG4gKiBDb21wb25lbnRlIGRlbCBpdGVtIHBhcmEgZWwgaGVhZGVyXG4gKiBFc3RlIGNvbXBvbmVudGUgcHVlZGUgc2VyIGRlIDYgdGlwb3MgWydoZWxwJyB8ICdsYW5ndWFnZScgfCAnbm90aWZpYWN0aW9uJyB8ICd1c2VyJyB8ICdsb2dvdXQnXVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0hlYWRlckl0ZW1NZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWhlYWRlci1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLWhlYWRlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJZCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySXRlbU1lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGl0ZW1JZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlci5nZXRJZCh0aGlzKTtcbiAgLyoqXG4gICAqICBpdGVtVHlwZSBkZWZpbmUgZWwgdGlwbyBkZSBpY29ubyBhIG1vc3RyYXIgcHVlZGVuIHNlciB0aXBvIHVzZXIgbyBsb2dvdXQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckl0ZW1NZW51Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpdGVtVHlwZTogJ2FueScgfCAndXNlcicgfCAnbG9nb3V0JyA9ICdhbnknO1xuICAvKipcbiAgICogRGVmaW5lIGVsIGljb25vIGEgbW9zdHJhciBlbiBjYWRhIGl0ZW0gZGVsIGhlYWRlci5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySXRlbU1lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9IG51bGw7XG4gIC8qKlxuICAgKiBEZWZpbmUgZWwgdGV4dG8gYSBtb3N0cmFyIGVuIGNhZGEgaXRlbSBkZWwgaGVhZGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogRGVmaW5lIGVsIHRleHRvIGN1YW5kbyBzZSBxdWllcmUgY29sb2NhciBlbiB1bmEgc2VndW5kYSBsw61uZWEgZWplbXBsbzogZWwgbnVtZXJvIGRlIE5JVC5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySXRlbU1lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHN1YlRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmluZSBsYSB1cmwgYSBsYSBjdWFsIHZhbW9zIGEgcmVkaXJpZ2lyIGNhZGEgZW5sYWNlIGRlbCBoZWFkZXIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckl0ZW1NZW51Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSByb3V0ZSA9ICcnO1xuICAvKipcbiAgICogRGVmaW5lIGVsIHRpcG8gZGUgYXZhdGFyIHF1ZSBzZSB2YSBhIG1vc3RyYXIgZW4gZWwgaGVhZGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdXNlckF2YXRhcjogc3RyaW5nID0gbnVsbDtcbiAgLyoqXG4gICAqIElkIGRlbCBpdGVtLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXIuZ2V0SWQodGhpcyk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXI6IEJjSGVscGVyU2VydmljZSkge31cbn1cbiIsIjxsaSBjbGFzcz1cImJjLWhlYWRlci1uYXYtaXRlbVwiIFtuZ0NsYXNzXT1cInsnYmMtaGVhZGVyLW5hdi1pdGVtX2xvZ291dCc6IGl0ZW1UeXBlID09PSAnbG9nb3V0J31cIiBbaWRdPVwiY29tcG9uZW50SWRcIj5cbiAgICA8YSBjbGFzcz1cImJjLWxpbmtcIiBbYXR0ci5ocmVmXT1cInJvdXRlIT0nJz8gcm91dGU6IG51bGxcIj5cbiAgICAgICAgPGVtIGNsYXNzPVwiYmMtaWNvbiBiYy1zbVwiICpuZ0lmPVwiaWNvbiAhPT0gbnVsbFwiPnt7aWNvbn19PC9lbT5cbiAgICAgICAgPGltZyBjbGFzcz1cImJjLWF2YXRhciBiYy1hdmF0YXItc21hbGxcIiBzcmM9XCJ7e3VzZXJBdmF0YXJ9fVwiIGFsdD1cImF2YXRhclwiICpuZ0lmPVwiaXRlbVR5cGUgPT09ICd1c2VyJyAmJiB1c2VyQXZhdGFyICE9PSBudWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYy1oZWFkZXItbmF2LWl0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgPHA+e3t0ZXh0fX08L3A+PHNtYWxsICpuZ0lmPVwic3ViVGV4dCAhPT0gJydcIj57e3N1YlRleHR9fTwvc21hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvYT5cbjwvbGk+XG4iXX0=