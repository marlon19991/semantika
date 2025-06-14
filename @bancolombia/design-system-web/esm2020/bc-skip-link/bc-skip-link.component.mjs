import { Component, Input } from '@angular/core';
import { BcSkipLinkBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Componente Skip-Link
 *
 * @export
 * @class BcSkipLinkComponent
 * @implements {AfterViewInit}
 */
export class BcSkipLinkComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
       * Esta entrada permite indicar un id único al componente dentro del DOM.
       *
       * @type {string}
       * @memberof BcSkipLinkComponent
       */
        this.id = this.bcHelperService.getId(this);
        /**
         * Texto en el label.
         *
         * @type {string}
         * @memberof BcSkipLinkComponent
         */
        this.textLink = 'Ir al contenido principal';
        /**
         * se indica a que id se va a trasladar la página
         *
         * @type {string}
         * @memberof BcSkipLinkComponent
         */
        this.referenceId = '';
        this.skipLinkBehavior = new BcSkipLinkBehavior();
    }
    ngAfterViewInit() {
        this.skipLinkBehavior.setId(this.id);
        this.skipLinkBehavior.setUp();
    }
}
BcSkipLinkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSkipLinkComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcSkipLinkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSkipLinkComponent, selector: "bc-skip-link", inputs: { id: "id", textLink: ["text-link", "textLink"], referenceId: ["refence-id", "referenceId"] }, ngImport: i0, template: "<a [id]=\"id\" class=\"bc-skip-link\" href=\"#{{referenceId}}\"onclick=\"event.preventDefault();\">\n    <span>{{textLink}}</span>\n</a>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSkipLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-skip-link', template: "<a [id]=\"id\" class=\"bc-skip-link\" href=\"#{{referenceId}}\"onclick=\"event.preventDefault();\">\n    <span>{{textLink}}</span>\n</a>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], textLink: [{
                type: Input,
                args: ['text-link']
            }], referenceId: [{
                type: Input,
                args: ['refence-id']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2tpcC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1za2lwLWxpbmsvYmMtc2tpcC1saW5rLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1za2lwLWxpbmsvYmMtc2tpcC1saW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBUTFFOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsWUFBcUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBR25EOzs7OztTQUtDO1FBQ1MsT0FBRSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFEOzs7OztXQUtHO1FBQ2lCLGFBQVEsR0FBRywyQkFBMkIsQ0FBQztRQUUzRDs7Ozs7V0FLRztRQUNrQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQXZCcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBeUJELGVBQWU7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0hBaENVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDJKQ2hCaEMsMElBRUk7MkZEY1MsbUJBQW1CO2tCQVovQixTQUFTOytCQUNFLGNBQWM7c0dBc0JaLEVBQUU7c0JBQVYsS0FBSztnQkFPVyxRQUFRO3NCQUEzQixLQUFLO3VCQUFDLFdBQVc7Z0JBUUcsV0FBVztzQkFBL0IsS0FBSzt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNTa2lwTGlua0JlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtc2tpcC1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXNraXAtbGluay5jb21wb25lbnQuaHRtbCcsXG59KVxuXG4vKipcbiAqIENvbXBvbmVudGUgU2tpcC1MaW5rXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjU2tpcExpbmtDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5leHBvcnQgY2xhc3MgQmNTa2lwTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5za2lwTGlua0JlaGF2aW9yID0gbmV3IEJjU2tpcExpbmtCZWhhdmlvcigpO1xuICB9XG4gICAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgdW4gaWQgw7puaWNvIGFsIGNvbXBvbmVudGUgZGVudHJvIGRlbCBET00uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1NraXBMaW5rQ29tcG9uZW50XG4gICAqL1xuICAgICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG4gIC8qKlxuICAgKiBUZXh0byBlbiBlbCBsYWJlbC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjU2tpcExpbmtDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgndGV4dC1saW5rJykgdGV4dExpbmsgPSAnSXIgYWwgY29udGVuaWRvIHByaW5jaXBhbCc7XG5cbiAgLyoqXG4gICAqIHNlIGluZGljYSBhIHF1ZSBpZCBzZSB2YSBhIHRyYXNsYWRhciBsYSBww6FnaW5hXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1NraXBMaW5rQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ3JlZmVuY2UtaWQnKSByZWZlcmVuY2VJZCA9ICcnO1xuXG4gIHNraXBMaW5rQmVoYXZpb3I6IEJjU2tpcExpbmtCZWhhdmlvcjtcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtCZWhhdmlvci5zZXRJZCh0aGlzLmlkKTtcbiAgICB0aGlzLnNraXBMaW5rQmVoYXZpb3Iuc2V0VXAoKTtcbiAgfVxufSIsIjxhIFtpZF09XCJpZFwiIGNsYXNzPVwiYmMtc2tpcC1saW5rXCIgaHJlZj1cIiN7e3JlZmVyZW5jZUlkfX1cIm9uY2xpY2s9XCJldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiPlxuICAgIDxzcGFuPnt7dGV4dExpbmt9fTwvc3Bhbj5cbjwvYT4iXX0=