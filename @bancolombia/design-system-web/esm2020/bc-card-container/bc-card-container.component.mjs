import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Componente card container
 * Contenedor dinámico para uso en distintos componentes.
 *
 * @export
 * @class BcCardContainerComponent
 */
export class BcCardContainerComponent {
    constructor() {
        this.classTypeCard = {
            default: 'bc-card-container',
            'stroke-1': 'bc-card-container-stroke',
            'stroke-2': 'bc-card-container-stroke-2',
        };
        /**
         * Parámetro para denotar el tipo de card container
         *
         * @type {('default' | 'stroke-1' | 'stroke-2')}
         * @memberof BcCardContainerComponent
         */
        this.cardType = 'default';
    }
    setCardTypeClass() {
        return this.classTypeCard[this.cardType];
    }
}
BcCardContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcCardContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardContainerComponent, selector: "bc-card-container", inputs: { cardType: "cardType", borderClass: "borderClass", shadowClass: "shadowClass", cardColorClass: "cardColorClass", borderColorClass: "borderColorClass", otherClass: "otherClass" }, ngImport: i0, template: "<div\n  class=\"{{setCardTypeClass()}} {{borderClass}} {{shadowClass}} {{cardColorClass}} {{borderColorClass}}\"\n  [ngClass]=\"otherClass\">\n    <ng-content></ng-content>\n</div>\n", directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-container', template: "<div\n  class=\"{{setCardTypeClass()}} {{borderClass}} {{shadowClass}} {{cardColorClass}} {{borderColorClass}}\"\n  [ngClass]=\"otherClass\">\n    <ng-content></ng-content>\n</div>\n" }]
        }], propDecorators: { cardType: [{
                type: Input
            }], borderClass: [{
                type: Input
            }], shadowClass: [{
                type: Input
            }], cardColorClass: [{
                type: Input
            }], borderColorClass: [{
                type: Input
            }], otherClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2FyZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhcmQtY29udGFpbmVyL2JjLWNhcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jYXJkLWNvbnRhaW5lci9iYy1jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBQ2pEOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyx3QkFBd0I7SUFKckM7UUFLRSxrQkFBYSxHQUFHO1lBQ2QsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixVQUFVLEVBQUUsMEJBQTBCO1lBQ3RDLFVBQVUsRUFBRSw0QkFBNEI7U0FDekMsQ0FBQztRQUVGOzs7OztXQUtHO1FBQ00sYUFBUSxHQUF3QyxTQUFTLENBQUM7S0E2Q3BFO0lBSEMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOztxSEF6RFUsd0JBQXdCO3lHQUF4Qix3QkFBd0IscVBDWnJDLHdMQUtBOzJGRE9hLHdCQUF3QjtrQkFKcEMsU0FBUzsrQkFDRSxtQkFBbUI7OEJBZ0JwQixRQUFRO3NCQUFoQixLQUFLO2dCQVFHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsV0FBVztzQkFBbkIsS0FBSztnQkFRRyxjQUFjO3NCQUF0QixLQUFLO2dCQVFHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFRRyxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBDb21wb25lbnRlIGNhcmQgY29udGFpbmVyXG4gKiBDb250ZW5lZG9yIGRpbsOhbWljbyBwYXJhIHVzbyBlbiBkaXN0aW50b3MgY29tcG9uZW50ZXMuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjQ2FyZENvbnRhaW5lckNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1jYXJkLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnYmMtY2FyZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0NhcmRDb250YWluZXJDb21wb25lbnQge1xuICBjbGFzc1R5cGVDYXJkID0ge1xuICAgIGRlZmF1bHQ6ICdiYy1jYXJkLWNvbnRhaW5lcicsXG4gICAgJ3N0cm9rZS0xJzogJ2JjLWNhcmQtY29udGFpbmVyLXN0cm9rZScsXG4gICAgJ3N0cm9rZS0yJzogJ2JjLWNhcmQtY29udGFpbmVyLXN0cm9rZS0yJyxcbiAgfTtcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgZWwgdGlwbyBkZSBjYXJkIGNvbnRhaW5lclxuICAgKlxuICAgKiBAdHlwZSB7KCdkZWZhdWx0JyB8ICdzdHJva2UtMScgfCAnc3Ryb2tlLTInKX1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZENvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY2FyZFR5cGU6ICdkZWZhdWx0JyB8ICdzdHJva2UtMScgfCAnc3Ryb2tlLTInID0gJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBQYXLDoW1ldHJvIHBhcmEgZGVub3RhciBlbCB0YW1hw7FvIGRlbCBib3JkZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkQ29udGFpbmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBib3JkZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQYXLDoW1ldHJvIHBhcmEgZGVub3RhciBlbCBzaGFkb3dcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZENvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2hhZG93Q2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgZWwgY29sb3JcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZENvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY2FyZENvbG9yQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgZWwgY29sb3IgZGVsIGJvcmRlXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRDb250YWluZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGFncmVnYXIgdW5hIGNsYXNzIHBlcnNvbmFsaXphZGFcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZENvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgb3RoZXJDbGFzczogc3RyaW5nO1xuXG4gIHNldENhcmRUeXBlQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NUeXBlQ2FyZFt0aGlzLmNhcmRUeXBlXTtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cInt7c2V0Q2FyZFR5cGVDbGFzcygpfX0ge3tib3JkZXJDbGFzc319IHt7c2hhZG93Q2xhc3N9fSB7e2NhcmRDb2xvckNsYXNzfX0ge3tib3JkZXJDb2xvckNsYXNzfX1cIlxuICBbbmdDbGFzc109XCJvdGhlckNsYXNzXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=