import { Component, Input } from '@angular/core';
import { BcHeaderBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Este componente Header es utilizado para el menú de los sitios bancolombia
 *
 * @export
 * @class BcHeaderComponent
 * @implements {OnInit}
 */
export class BcHeaderComponent {
    /**
     * Crea una instancia de of BcHeaderComponent.
     * @param {BcHelperService} bcHelperService Servicios para generar el Id aleatoriamente
     * @memberof BcHeaderComponent
     */
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Posición del header fija [true (default) | false].
         *
         * @type {boolean}
         * @memberof BcHeaderComponent
         */
        this.fixed = true;
        /**
         * Id del componente.
         *
         * @memberof BcHeaderComponent
         */
        this.id = this.bcHelperService.getId(this);
        /**
         * Indica si existe un menú lateral y si este va a tener interacción con el header, por defecto es true.
         *
         * @type {boolean}
         * @memberof BcHeaderComponent
         */
        this.menuInteraction = true;
        /**
       *  headerType define el tipo de header a mostrar pueden ser tipo white o black.
       *
       * @memberof BcHeaderItemMenuComponent
       */
        this.headerType = 'bc-header-wrapper';
        /**
         * Comportamiento de componente
         *
         * @type {BcHeaderBehavior}
         * @memberof BcHeaderComponent
         */
        this.bcHeaderBehavior = new BcHeaderBehavior();
    }
    /**
     * Se ejecuta después de cargar el dom
     *
     * @memberof BcHeaderComponent
     */
    ngAfterViewInit() {
        this.bcHeaderBehavior.setId(this.id);
        this.bcHeaderBehavior.communicationWithMenu = this.menuInteraction;
        this.bcHeaderBehavior.setUp();
    }
}
BcHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderComponent, selector: "bc-header", inputs: { fixed: "fixed", id: "id", menuInteraction: "menuInteraction", headerType: "headerType" }, ngImport: i0, template: "<article class=\"{{ headerType }}\" [ngClass]=\"{'bc-fixed': fixed}\" [id]=\"id\">\n  <header class=\"bc-header\">\n    <ng-content></ng-content>\n  </header>\n  <ng-content select=\"[role=bc-header-mobile-content]\"></ng-content>\n</article>\n", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header', template: "<article class=\"{{ headerType }}\" [ngClass]=\"{'bc-fixed': fixed}\" [id]=\"id\">\n  <header class=\"bc-header\">\n    <ng-content></ng-content>\n  </header>\n  <ng-content select=\"[role=bc-header-mobile-content]\"></ng-content>\n</article>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { fixed: [{
                type: Input
            }], id: [{
                type: Input
            }], menuInteraction: [{
                type: Input
            }], headerType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1oZWFkZXIvYmMtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1oZWFkZXIvYmMtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUV4RTs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8saUJBQWlCO0lBa0M1Qjs7OztPQUlHO0lBQ0gsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBdENwRDs7Ozs7V0FLRztRQUNNLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDL0I7Ozs7V0FJRztRQUNNLE9BQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQzs7Ozs7V0FLRztRQUNNLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ3ZDOzs7O1NBSUM7UUFDUyxlQUFVLEdBQW9ELG1CQUFtQixDQUFDO1FBQzlGOzs7OztXQUtHO1FBQ0gscUJBQWdCLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQU1KLENBQUM7SUFFekQ7Ozs7T0FJRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OEdBbERVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHFKQ2Q5QixzUEFNQTsyRkRRYSxpQkFBaUI7a0JBSjdCLFNBQVM7K0JBQ0UsV0FBVztzR0FVWixLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsRUFBRTtzQkFBVixLQUFLO2dCQU9HLGVBQWU7c0JBQXZCLEtBQUs7Z0JBTU0sVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjSGVhZGVyQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuLyoqXG4gKiBFc3RlIGNvbXBvbmVudGUgSGVhZGVyIGVzIHV0aWxpemFkbyBwYXJhIGVsIG1lbsO6IGRlIGxvcyBzaXRpb3MgYmFuY29sb21iaWFcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNIZWFkZXJDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtPbkluaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogUG9zaWNpw7NuIGRlbCBoZWFkZXIgZmlqYSBbdHJ1ZSAoZGVmYXVsdCkgfCBmYWxzZV0uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIElkIGRlbCBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlkID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZXhpc3RlIHVuIG1lbsO6IGxhdGVyYWwgeSBzaSBlc3RlIHZhIGEgdGVuZXIgaW50ZXJhY2Npw7NuIGNvbiBlbCBoZWFkZXIsIHBvciBkZWZlY3RvIGVzIHRydWUuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG1lbnVJbnRlcmFjdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAqICBoZWFkZXJUeXBlIGRlZmluZSBlbCB0aXBvIGRlIGhlYWRlciBhIG1vc3RyYXIgcHVlZGVuIHNlciB0aXBvIHdoaXRlIG8gYmxhY2suXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckl0ZW1NZW51Q29tcG9uZW50XG4gICAqL1xuICAgICBASW5wdXQoKSBoZWFkZXJUeXBlOiAnYmMtaGVhZGVyLXdyYXBwZXInIHwgJ2JjLWhlYWRlci13cmFwcGVyLWJsYWNrJyA9ICdiYy1oZWFkZXItd3JhcHBlcic7XG4gIC8qKlxuICAgKiBDb21wb3J0YW1pZW50byBkZSBjb21wb25lbnRlXG4gICAqXG4gICAqIEB0eXBlIHtCY0hlYWRlckJlaGF2aW9yfVxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJDb21wb25lbnRcbiAgICovXG4gIGJjSGVhZGVyQmVoYXZpb3I6IEJjSGVhZGVyQmVoYXZpb3IgPSBuZXcgQmNIZWFkZXJCZWhhdmlvcigpO1xuICAvKipcbiAgICogQ3JlYSB1bmEgaW5zdGFuY2lhIGRlIG9mIEJjSGVhZGVyQ29tcG9uZW50LlxuICAgKiBAcGFyYW0ge0JjSGVscGVyU2VydmljZX0gYmNIZWxwZXJTZXJ2aWNlIFNlcnZpY2lvcyBwYXJhIGdlbmVyYXIgZWwgSWQgYWxlYXRvcmlhbWVudGVcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogU2UgZWplY3V0YSBkZXNwdcOpcyBkZSBjYXJnYXIgZWwgZG9tXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmNIZWFkZXJCZWhhdmlvci5zZXRJZCh0aGlzLmlkKTtcbiAgICB0aGlzLmJjSGVhZGVyQmVoYXZpb3IuY29tbXVuaWNhdGlvbldpdGhNZW51ID0gdGhpcy5tZW51SW50ZXJhY3Rpb247XG4gICAgdGhpcy5iY0hlYWRlckJlaGF2aW9yLnNldFVwKCk7XG4gIH1cbn1cbiIsIjxhcnRpY2xlIGNsYXNzPVwie3sgaGVhZGVyVHlwZSB9fVwiIFtuZ0NsYXNzXT1cInsnYmMtZml4ZWQnOiBmaXhlZH1cIiBbaWRdPVwiaWRcIj5cbiAgPGhlYWRlciBjbGFzcz1cImJjLWhlYWRlclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9oZWFkZXI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltyb2xlPWJjLWhlYWRlci1tb2JpbGUtY29udGVudF1cIj48L25nLWNvbnRlbnQ+XG48L2FydGljbGU+XG4iXX0=