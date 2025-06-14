import { Component, Input } from '@angular/core';
import { BcSidebarBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Componente Sidebar
 *
 * @export
 * @class BcSidebarComponent
 * @implements {AfterViewInit}
 */
export class BcSidebarComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Esta entrada permite indicar un id único al componente dentro del DOM.
         *
         * @type {string}
         * @memberof BcSidebarComponent
         */
        this.id = this.bcHelperService.getId(this);
        /**
           * Entrada que permite indicar el tipo de Sidebar.
           *
           * @type {string}
           * @memberof BcSidebarComponent
           */
        this.tipoSidebar = 'fixed';
        /**
         *
         *
         * @type {Array<any>}
         * @memberof BcSidebarComponent
         */
        this.itemsli = [];
        this.bcSidebarBehavior = new BcSidebarBehavior();
    }
    /**
     * Abre el offcanvas.
     *
     * @memberof BcOffCanvasComponent
     */
    openSidebarHide() {
        this.bcSidebarBehavior.configOpenButtonEventHide();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.bcSidebarBehavior.setId(this.id);
        this.bcSidebarBehavior.setUp();
    }
    ngOnChanges(changes) {
        if (changes.currentValue != changes.previousValue) {
            this.tipoSidebar = changes.currentValue;
        }
    }
}
BcSidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSidebarComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcSidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSidebarComponent, selector: "bc-sidebar", inputs: { id: "id", tipoSidebar: "tipoSidebar", ariaLabel: ["aria-label", "ariaLabel"], itemsli: "itemsli" }, usesOnChanges: true, ngImport: i0, template: "\n\n<section class=\"bc-sidebar\" [id]=\"id\"  [attr.type]=\"tipoSidebar\">\n    <section>\n        <ng-content select=\"[mainContent]\"></ng-content>\n    </section>\n    <aside aria-label=\"Panel desplegado\">\n        <section>\n            <section>\n                <button>arrow2-left</button>\n                <button>error</button>\n            </section>\n            <section>\n                    <ng-content select=\"[sidebarContent]\"></ng-content>\n            </section>\n        </section>\n        <nav aria-label=\"barra lateral\">\n            <ul >\n                <li *ngFor=\"let icon of itemsli; let indice = index\">\n                    <button attr.aria-controls=\"{{ icon.id }}\"> {{ icon.iconName }}</button>\n                </li>\n            </ul>\n        </nav>\n    </aside>\n</section>\n\n", directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-sidebar', template: "\n\n<section class=\"bc-sidebar\" [id]=\"id\"  [attr.type]=\"tipoSidebar\">\n    <section>\n        <ng-content select=\"[mainContent]\"></ng-content>\n    </section>\n    <aside aria-label=\"Panel desplegado\">\n        <section>\n            <section>\n                <button>arrow2-left</button>\n                <button>error</button>\n            </section>\n            <section>\n                    <ng-content select=\"[sidebarContent]\"></ng-content>\n            </section>\n        </section>\n        <nav aria-label=\"barra lateral\">\n            <ul >\n                <li *ngFor=\"let icon of itemsli; let indice = index\">\n                    <button attr.aria-controls=\"{{ icon.id }}\"> {{ icon.iconName }}</button>\n                </li>\n            </ul>\n        </nav>\n    </aside>\n</section>\n\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], tipoSidebar: [{
                type: Input
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], itemsli: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2lkZWJhci9iYy1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zaWRlYmFyL2JjLXNpZGViYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBUXpFOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxrQkFBa0I7SUFJN0IsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBR3BEOzs7OztXQUtHO1FBQ00sT0FBRSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpEOzs7OzthQUtLO1FBQ0ssZ0JBQVcsR0FBZ0QsT0FBTyxDQUFDO1FBaUIzRTs7Ozs7V0FLRztRQUNPLFlBQU8sR0FBZSxFQUFFLENBQUM7UUF2Q2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQXVCRDs7OztPQUlHO0lBQ0YsZUFBZTtRQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFZRCxRQUFRO0lBRVIsQ0FBQztJQUVGLGVBQWU7UUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFxQjtRQUNoQyxJQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUUsT0FBTyxDQUFDLGFBQWEsRUFBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDekM7SUFDRixDQUFDOzsrR0E3RFcsa0JBQWtCO21HQUFsQixrQkFBa0IscUxDaEIvQiwyekJBMEJBOzJGRFZhLGtCQUFrQjtrQkFYOUIsU0FBUzsrQkFDRSxZQUFZO3NHQXVCYixFQUFFO3NCQUFWLEtBQUs7Z0JBUUUsV0FBVztzQkFBbkIsS0FBSztnQkFNZ0IsU0FBUztzQkFBN0IsS0FBSzt1QkFBQyxZQUFZO2dCQWlCVCxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNTaWRlYmFyQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXNpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG59KVxuLyoqXG4gKiBDb21wb25lbnRlIFNpZGViYXJcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNTaWRlYmFyQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cbiAqL1xuZXhwb3J0IGNsYXNzIEJjU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBiY1NpZGViYXJCZWhhdmlvcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5iY1NpZGViYXJCZWhhdmlvciA9IG5ldyBCY1NpZGViYXJCZWhhdmlvcigpO1xuICB9XG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgcGVybWl0ZSBpbmRpY2FyIHVuIGlkIMO6bmljbyBhbCBjb21wb25lbnRlIGRlbnRybyBkZWwgRE9NLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTaWRlYmFyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbi8qKlxuICAgKiBFbnRyYWRhIHF1ZSBwZXJtaXRlIGluZGljYXIgZWwgdGlwbyBkZSBTaWRlYmFyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTaWRlYmFyQ29tcG9uZW50XG4gICAqL1xuIEBJbnB1dCgpIHRpcG9TaWRlYmFyOiAnZml4ZWQnIHwgJ2NvbGxhcHNpYmxlJyB8ICdzdGF0ZXMnIHwgJ2hpZGUnID0gJ2ZpeGVkJztcblxuICAvKipcbiAgKiBJbmRpY2EgZWwgYXJpYS1sYWJlbCBwYXJhIGVsIGNvbXBvcnRhbWllbnRvIGRlbCBjb21wb25lbnRlLlxuICAqL1xuXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBYnJlIGVsIG9mZmNhbnZhcy5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjT2ZmQ2FudmFzQ29tcG9uZW50XG4gICAqL1xuICAgb3BlblNpZGViYXJIaWRlKCkge1xuICAgIHRoaXMuYmNTaWRlYmFyQmVoYXZpb3IuY29uZmlnT3BlbkJ1dHRvbkV2ZW50SGlkZSgpO1xuICB9XG4gICBcbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEB0eXBlIHtBcnJheTxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNTaWRlYmFyQ29tcG9uZW50XG4gICAqL1xuICAgQElucHV0KCkgaXRlbXNsaTogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgYmNTaWRlYmFyQ29tcG9uZW50OiBCY1NpZGViYXJDb21wb25lbnRcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIFxuICB9XG5cbiBuZ0FmdGVyVmlld0luaXQoKXtcbiAgdGhpcy5iY1NpZGViYXJCZWhhdmlvci5zZXRJZCh0aGlzLmlkKTtcbiAgdGhpcy5iY1NpZGViYXJCZWhhdmlvci5zZXRVcCgpOyBcbiB9XG5cbiBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2Upe1xuICBpZihjaGFuZ2VzLmN1cnJlbnRWYWx1ZSE9Y2hhbmdlcy5wcmV2aW91c1ZhbHVlKXtcbiAgICB0aGlzLnRpcG9TaWRlYmFyID0gY2hhbmdlcy5jdXJyZW50VmFsdWU7XG4gIH1cbiB9XG5cbiBcbn1cbiIsIlxuXG48c2VjdGlvbiBjbGFzcz1cImJjLXNpZGViYXJcIiBbaWRdPVwiaWRcIiAgW2F0dHIudHlwZV09XCJ0aXBvU2lkZWJhclwiPlxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbWFpbkNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8YXNpZGUgYXJpYS1sYWJlbD1cIlBhbmVsIGRlc3BsZWdhZG9cIj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPmFycm93Mi1sZWZ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5lcnJvcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzaWRlYmFyQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYmFycmEgbGF0ZXJhbFwiPlxuICAgICAgICAgICAgPHVsID5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGljb24gb2YgaXRlbXNsaTsgbGV0IGluZGljZSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gYXR0ci5hcmlhLWNvbnRyb2xzPVwie3sgaWNvbi5pZCB9fVwiPiB7eyBpY29uLmljb25OYW1lIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgIDwvYXNpZGU+XG48L3NlY3Rpb24+XG5cbiJdfQ==