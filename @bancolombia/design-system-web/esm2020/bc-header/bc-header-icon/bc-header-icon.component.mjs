import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-tooltip";
import * as i4 from "@angular/common";
/**
 * Componente del item de iconos para el header.
 * Seccion de iconos funcionales, no usan las etiquetas y deben llevar un tooltip.
 *
 * @export
 * @class BcHeaderIconMenu
 */
export class BcHeaderIconMenuComponent {
    constructor(bcHelper) {
        this.bcHelper = bcHelper;
        /**
         * Tooltip ubicado en los iconos del header.
         *  @type {ItooltipIcon}
         * @memberof BcHeaderIconComponent
         */
        this.tooltipIcon = {
            isTooltip: false,
            textTooltip: '',
            positionTooltip: '',
        };
        /**
         * Define la url a la cual vamos a redirigir cada enlace del header.
         *
         * @memberof BcHeaderIconMenuComponent
         */
        this.route = '';
        /**
         * Id del item
         *
         * @type {string}
         * @memberof BcHeaderIconMenuComponent
         */
        this.componentId = this.bcHelper.getId(this);
    }
}
BcHeaderIconMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderIconMenuComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcHeaderIconMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderIconMenuComponent, selector: "bc-header-icon", inputs: { tooltipIcon: "tooltipIcon", icon: "icon", text: "text", subText: "subText", route: "route", componentId: "componentId" }, ngImport: i0, template: "<li class=\"bc-header-nav-div\" [id]=\"componentId\">\n  <a class=\"bc-link bc-icon\" bc-tooltip [bcTooltipPosition]=\"tooltipIcon.positionTooltip\" [bcTooltipText]=\"tooltipIcon.textTooltip\" [attr.href]=\"route!=''? route: null\">\n      <bc-icon\n          class=\"bc-icon\"\n          size=\"sm\"\n          *ngIf=\"icon !== ''\" \n          [name]='icon'\n      >\n  </bc-icon>\n  </a>\n</li>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.BcTooltipDirective, selector: "[bc-tooltip]", inputs: ["bcTooltipPosition", "bcTooltipTitle", "bcTooltipText", "bcTooltipButtonText", "bcTooltipParentElement"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderIconMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header-icon', template: "<li class=\"bc-header-nav-div\" [id]=\"componentId\">\n  <a class=\"bc-link bc-icon\" bc-tooltip [bcTooltipPosition]=\"tooltipIcon.positionTooltip\" [bcTooltipText]=\"tooltipIcon.textTooltip\" [attr.href]=\"route!=''? route: null\">\n      <bc-icon\n          class=\"bc-icon\"\n          size=\"sm\"\n          *ngIf=\"icon !== ''\" \n          [name]='icon'\n      >\n  </bc-icon>\n  </a>\n</li>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { tooltipIcon: [{
                type: Input
            }], icon: [{
                type: Input
            }], text: [{
                type: Input
            }], subText: [{
                type: Input
            }], route: [{
                type: Input
            }], componentId: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaGVhZGVyLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWhlYWRlci9iYy1oZWFkZXItaWNvbi9iYy1oZWFkZXItaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaGVhZGVyL2JjLWhlYWRlci1pY29uL2JjLWhlYWRlci1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFRakQ7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLHlCQUF5QjtJQTBDbkMsWUFBb0IsUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUF6QzlDOzs7O1dBSUc7UUFDTyxnQkFBVyxHQUFpQjtZQUNwQyxTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUUsRUFBRTtZQUNmLGVBQWUsRUFBRSxFQUFFO1NBQ3BCLENBQUM7UUFtQkY7Ozs7V0FJRztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEI7Ozs7O1dBS0c7UUFDTyxnQkFBVyxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7c0hBMUN2Qyx5QkFBeUI7MEdBQXpCLHlCQUF5QiwwTENuQnRDLGlaQVdBOzJGRFFhLHlCQUF5QjtrQkFKckMsU0FBUzsrQkFDRSxnQkFBZ0I7c0dBU2hCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBVUUsSUFBSTtzQkFBWixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFNRyxPQUFPO3NCQUFmLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU9JLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbmludGVyZmFjZSBJdG9vbHRpcEljb24ge1xuICBpc1Rvb2x0aXA6IGJvb2xlYW47XG4gIHRleHRUb29sdGlwOiBzdHJpbmc7XG4gIHBvc2l0aW9uVG9vbHRpcDogc3RyaW5nO1xufVxuLyoqXG4gKiBDb21wb25lbnRlIGRlbCBpdGVtIGRlIGljb25vcyBwYXJhIGVsIGhlYWRlci5cbiAqIFNlY2Npb24gZGUgaWNvbm9zIGZ1bmNpb25hbGVzLCBubyB1c2FuIGxhcyBldGlxdWV0YXMgeSBkZWJlbiBsbGV2YXIgdW4gdG9vbHRpcC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNIZWFkZXJJY29uTWVudVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1oZWFkZXItaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1oZWFkZXItaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjSGVhZGVySWNvbk1lbnVDb21wb25lbnQge1xuICAvKipcbiAgICogVG9vbHRpcCB1YmljYWRvIGVuIGxvcyBpY29ub3MgZGVsIGhlYWRlci5cbiAgICogIEB0eXBlIHtJdG9vbHRpcEljb259XG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckljb25Db21wb25lbnRcbiAgICovXG4gICBASW5wdXQoKSB0b29sdGlwSWNvbjogSXRvb2x0aXBJY29uID0ge1xuICAgIGlzVG9vbHRpcDogZmFsc2UsXG4gICAgdGV4dFRvb2x0aXA6ICcnLFxuICAgIHBvc2l0aW9uVG9vbHRpcDogJycsXG4gIH07XG4gIC8qKlxuICAgKiBEZWZpbmUgZWwgaWNvbm8gYSBtb3N0cmFyIGVuIGNhZGEgaXRlbSBkZWwgaGVhZGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJY29uTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAvKipcbiAgICogRGVmaW5lIGVsIHRleHRvIGEgbW9zdHJhciBlbiBjYWRhIGl0ZW0gZGVsIGhlYWRlci5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySWNvbk1lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmluZSBlbCB0ZXh0byBjdWFuZG8gc2UgcXVpZXJlIGNvbG9jYXIgZW4gdW5hIHNlZ3VuZGEgbMOtbmVhIGVqZW1wbG86IGVsIG51bWVybyBkZSBOSVQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckljb25NZW51Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdWJUZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZpbmUgbGEgdXJsIGEgbGEgY3VhbCB2YW1vcyBhIHJlZGlyaWdpciBjYWRhIGVubGFjZSBkZWwgaGVhZGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJY29uTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgcm91dGUgPSAnJztcbiAgLyoqXG4gICAqIElkIGRlbCBpdGVtXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckljb25NZW51Q29tcG9uZW50XG4gICAqL1xuICAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXIuZ2V0SWQodGhpcyk7XG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyOiBCY0hlbHBlclNlcnZpY2UpIHt9XG59XG4iLCI8bGkgY2xhc3M9XCJiYy1oZWFkZXItbmF2LWRpdlwiIFtpZF09XCJjb21wb25lbnRJZFwiPlxuICA8YSBjbGFzcz1cImJjLWxpbmsgYmMtaWNvblwiIGJjLXRvb2x0aXAgW2JjVG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBJY29uLnBvc2l0aW9uVG9vbHRpcFwiIFtiY1Rvb2x0aXBUZXh0XT1cInRvb2x0aXBJY29uLnRleHRUb29sdGlwXCIgW2F0dHIuaHJlZl09XCJyb3V0ZSE9Jyc/IHJvdXRlOiBudWxsXCI+XG4gICAgICA8YmMtaWNvblxuICAgICAgICAgIGNsYXNzPVwiYmMtaWNvblwiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAqbmdJZj1cImljb24gIT09ICcnXCIgXG4gICAgICAgICAgW25hbWVdPSdpY29uJ1xuICAgICAgPlxuICA8L2JjLWljb24+XG4gIDwvYT5cbjwvbGk+XG4iXX0=