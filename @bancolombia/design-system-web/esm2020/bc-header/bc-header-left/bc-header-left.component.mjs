import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-icon";
import * as i2 from "@angular/common";
/**
 * Comoponente para el logo izquierdo del header.
 *
 * @export
 * @class BcHeaderLeftComponent
 */
export class BcHeaderLeftComponent {
    constructor() {
        /**
         * Texto en menu izquierdo hamburguesa.
         *
         * @type {boolean}
         * @memberof BcHeaderComponent
         */
        this.txtLeftMenu = 'Menú';
        /**
         * Indica si existe un menú lateral y si este va a tener interacción con el header, por defecto es true.
         *
         * @type {boolean}
         * @memberof BcHeaderLeftComponent
         */
        this.menuInteraction = true;
        /**
        /**
         * Nombre del logo a mostrar.
         *
         * @memberof BcHeaderLeftComponent
         */
        this.logoName = 'bancolombia-horizonal';
        /**
         * Nombre del logo en dispositos moviles a mostrar.
         *
         * @memberof BcHeaderLeftComponent
         */
        this.logoMobile = 'isotipo-bancolombia';
        /**
         * Nombre del canal a mostrar.
         *
         * @memberof BcHeaderLeftComponent
         */
        this.channelName = '';
    }
}
BcHeaderLeftComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderLeftComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcHeaderLeftComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderLeftComponent, selector: "bc-header-left", inputs: { txtLeftMenu: "txtLeftMenu", menuInteraction: "menuInteraction", ariaLabelogo: "ariaLabelogo", ariaLabelChannel: "ariaLabelChannel", logoName: "logoName", logoMobile: "logoMobile", channelName: "channelName" }, ngImport: i0, template: "\n<section class=\"bc-header-brand\">\n  <div class=\"bc-header-brand_menu-toggle bc-reverse-d-lg-none\"\n          *ngIf=\"menuInteraction\" aria-label=\"Men\u00FA principal\" role=\"button\">\n    <em class=\"bc-icon bc-sm\">menu</em>\n    <span>{{txtLeftMenu}}</span>\n  </div>\n  <bc-icon\n          class=\"bc-icon-mobile\"\n          size=\"sm\"\n          [name]=\"logoMobile\"\n          aria-hidden=\"true\"\n          [ariaLabel]=\"ariaLabelogo\">\n  </bc-icon>\n  <bc-icon\n          class=\"bc-header-brand-logo\"\n          size=\"2xl\"\n          [name]=\"logoName\"\n          aria-hidden=\"true\"\n          [ariaLabel]=\"ariaLabelogo\">\n  </bc-icon>\n\n  <div class=\"bc-header-channel\" *ngIf=\"channelName !== ''\" [attr.aria-label]='ariaLabelChannel'>\n    <h5>{{channelName}}</h5>\n  </div>\n</section>\n", components: [{ type: i1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderLeftComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header-left', template: "\n<section class=\"bc-header-brand\">\n  <div class=\"bc-header-brand_menu-toggle bc-reverse-d-lg-none\"\n          *ngIf=\"menuInteraction\" aria-label=\"Men\u00FA principal\" role=\"button\">\n    <em class=\"bc-icon bc-sm\">menu</em>\n    <span>{{txtLeftMenu}}</span>\n  </div>\n  <bc-icon\n          class=\"bc-icon-mobile\"\n          size=\"sm\"\n          [name]=\"logoMobile\"\n          aria-hidden=\"true\"\n          [ariaLabel]=\"ariaLabelogo\">\n  </bc-icon>\n  <bc-icon\n          class=\"bc-header-brand-logo\"\n          size=\"2xl\"\n          [name]=\"logoName\"\n          aria-hidden=\"true\"\n          [ariaLabel]=\"ariaLabelogo\">\n  </bc-icon>\n\n  <div class=\"bc-header-channel\" *ngIf=\"channelName !== ''\" [attr.aria-label]='ariaLabelChannel'>\n    <h5>{{channelName}}</h5>\n  </div>\n</section>\n" }]
        }], propDecorators: { txtLeftMenu: [{
                type: Input
            }], menuInteraction: [{
                type: Input
            }], ariaLabelogo: [{
                type: Input
            }], ariaLabelChannel: [{
                type: Input
            }], logoName: [{
                type: Input
            }], logoMobile: [{
                type: Input
            }], channelName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaGVhZGVyLWxlZnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWhlYWRlci9iYy1oZWFkZXItbGVmdC9iYy1oZWFkZXItbGVmdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaGVhZGVyL2JjLWhlYWRlci1sZWZ0L2JjLWhlYWRlci1sZWZ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpEOzs7OztHQUtHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQUtFOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBVyxNQUFNLENBQUM7UUFDdEM7Ozs7O1dBS0c7UUFDTSxvQkFBZSxHQUFZLElBQUksQ0FBQztRQVl6Qzs7Ozs7V0FLRztRQUNNLGFBQVEsR0FBVyx1QkFBdUIsQ0FBQztRQUVwRDs7OztXQUlHO1FBQ00sZUFBVSxHQUFXLHFCQUFxQixDQUFDO1FBQ3BEOzs7O1dBSUc7UUFDTSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztLQUtuQzs7a0hBbERZLHFCQUFxQjtzR0FBckIscUJBQXFCLGtSQ1psQyw0ekJBMEJBOzJGRGRhLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSxnQkFBZ0I7OEJBVWpCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0csZUFBZTtzQkFBdkIsS0FBSztnQkFLRyxZQUFZO3NCQUFwQixLQUFLO2dCQUtHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFRRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTUcsV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBDb21vcG9uZW50ZSBwYXJhIGVsIGxvZ28gaXpxdWllcmRvIGRlbCBoZWFkZXIuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjSGVhZGVyTGVmdENvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1oZWFkZXItbGVmdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1oZWFkZXItbGVmdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjSGVhZGVyTGVmdENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUZXh0byBlbiBtZW51IGl6cXVpZXJkbyBoYW1idXJndWVzYS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHh0TGVmdE1lbnU6IHN0cmluZyA9ICdNZW7Duic7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZXhpc3RlIHVuIG1lbsO6IGxhdGVyYWwgeSBzaSBlc3RlIHZhIGEgdGVuZXIgaW50ZXJhY2Npw7NuIGNvbiBlbCBoZWFkZXIsIHBvciBkZWZlY3RvIGVzIHRydWUuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJMZWZ0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBtZW51SW50ZXJhY3Rpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBJbmRpY2EgZWwgYXJpYS1sYWJlbCBwYXJhIGVsIGNvbXBvcnRhbWllbnRvIGRlbCBjb21wb25lbnRlLlxuICAgKi9cbiAgQElucHV0KCkgYXJpYUxhYmVsb2dvOiBzdHJpbmc7XG5cbiAgLyoqXG4gKiBJbmRpY2EgZWwgYXJpYS1sYWJlbCBwYXJhIGVsIGNvbXBvcnRhbWllbnRvIGRlbCBjb21wb25lbnRlLlxuICovXG4gIEBJbnB1dCgpIGFyaWFMYWJlbENoYW5uZWw6IHN0cmluZztcblxuICAvKipcbiAgLyoqXG4gICAqIE5vbWJyZSBkZWwgbG9nbyBhIG1vc3RyYXIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckxlZnRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGxvZ29OYW1lOiBzdHJpbmcgPSAnYmFuY29sb21iaWEtaG9yaXpvbmFsJztcblxuICAvKipcbiAgICogTm9tYnJlIGRlbCBsb2dvIGVuIGRpc3Bvc2l0b3MgbW92aWxlcyBhIG1vc3RyYXIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckxlZnRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGxvZ29Nb2JpbGU6IHN0cmluZyA9ICdpc290aXBvLWJhbmNvbG9tYmlhJztcbiAgLyoqXG4gICAqIE5vbWJyZSBkZWwgY2FuYWwgYSBtb3N0cmFyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJMZWZ0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjaGFubmVsTmFtZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBDcmVhIHVuYSBpbnN0YWNpYSBkZSBCY0hlYWRlckxlZnRDb21wb25lbnQuXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckxlZnRDb21wb25lbnRcbiAgICovXG59XG4iLCJcbjxzZWN0aW9uIGNsYXNzPVwiYmMtaGVhZGVyLWJyYW5kXCI+XG4gIDxkaXYgY2xhc3M9XCJiYy1oZWFkZXItYnJhbmRfbWVudS10b2dnbGUgYmMtcmV2ZXJzZS1kLWxnLW5vbmVcIlxuICAgICAgICAgICpuZ0lmPVwibWVudUludGVyYWN0aW9uXCIgYXJpYS1sYWJlbD1cIk1lbsO6IHByaW5jaXBhbFwiIHJvbGU9XCJidXR0b25cIj5cbiAgICA8ZW0gY2xhc3M9XCJiYy1pY29uIGJjLXNtXCI+bWVudTwvZW0+XG4gICAgPHNwYW4+e3t0eHRMZWZ0TWVudX19PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGJjLWljb25cbiAgICAgICAgICBjbGFzcz1cImJjLWljb24tbW9iaWxlXCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIFtuYW1lXT1cImxvZ29Nb2JpbGVcIlxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgW2FyaWFMYWJlbF09XCJhcmlhTGFiZWxvZ29cIj5cbiAgPC9iYy1pY29uPlxuICA8YmMtaWNvblxuICAgICAgICAgIGNsYXNzPVwiYmMtaGVhZGVyLWJyYW5kLWxvZ29cIlxuICAgICAgICAgIHNpemU9XCIyeGxcIlxuICAgICAgICAgIFtuYW1lXT1cImxvZ29OYW1lXCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgIFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsb2dvXCI+XG4gIDwvYmMtaWNvbj5cblxuICA8ZGl2IGNsYXNzPVwiYmMtaGVhZGVyLWNoYW5uZWxcIiAqbmdJZj1cImNoYW5uZWxOYW1lICE9PSAnJ1wiIFthdHRyLmFyaWEtbGFiZWxdPSdhcmlhTGFiZWxDaGFubmVsJz5cbiAgICA8aDU+e3tjaGFubmVsTmFtZX19PC9oNT5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXX0=