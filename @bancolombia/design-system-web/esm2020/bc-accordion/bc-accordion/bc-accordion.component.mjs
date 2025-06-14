import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 * @export
 * @class BcAccordionComponent
 */
export class BcAccordionComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Esta entrada permite indicar un id único al componente dentro del DOM.
         *
         * @type {string}
         * @memberof BcInputSelectComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Tipo de acordeón [ basic(default) | info | advance | column | minimal | minimal-unbordered]
         * Define la esctructura que va a tener el acordeón, por defecto es básica (basic).
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.type = 'basic';
        /**
         * Permite configurar el comportamiento del acordeón para que este se muestre expandido desde su carga en el DOM
         * es de tipo booleana y por defecto es false.
         *
         * @type {boolean}
         * @memberof BcAccordionHeaderComponent
         */
        this.active = false;
        /**
         * Parametro por deprecar, debido a que no es parte del componente, de acuerdo a documentacion Figma.
         * No realiza ninguna acción.
         *
         * @type {boolean}
         * @memberof BcAccordionHeaderComponent
         */
        this.disabled = false;
    }
}
BcAccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcAccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAccordionComponent, selector: "bc-accordion", inputs: { componentId: "componentId", type: "type", active: "active", disabled: "disabled" }, ngImport: i0, template: "<article\n  class=\"bc-accordion bc-accordion-{{ type }} bc-accordion-container-{{ type }}\"\n  id=\"{{ componentId }}\"\n  [ngClass]=\"{ 'bc-active': active}\"\n>\n  <ng-content></ng-content>\n</article>\n", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-accordion', template: "<article\n  class=\"bc-accordion bc-accordion-{{ type }} bc-accordion-container-{{ type }}\"\n  id=\"{{ componentId }}\"\n  [ngClass]=\"{ 'bc-active': active}\"\n>\n  <ng-content></ng-content>\n</article>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], type: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hY2NvcmRpb24vYmMtYWNjb3JkaW9uL2JjLWFjY29yZGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtYWNjb3JkaW9uL2JjLWFjY29yZGlvbi9iYy1hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHakQ7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQW1DL0IsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBbENwRDs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEU7Ozs7OztXQU1HO1FBQ00sU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUNoQzs7Ozs7O1dBTUc7UUFDTSxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRWpDOzs7Ozs7V0FNRztRQUNNLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFFb0IsQ0FBQzs7aUhBbkM3QyxvQkFBb0I7cUdBQXBCLG9CQUFvQixrSkNkakMsZ05BT0E7MkZET2Esb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLGNBQWM7c0dBVWYsV0FBVztzQkFBbkIsS0FBSztnQkFTRyxJQUFJO3NCQUFaLEtBQUs7Z0JBUUcsTUFBTTtzQkFBZCxLQUFLO2dCQVNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbi8qKlxuICogSW1wb3J0YSBlbCBhY29yZGXDs24gcGFyYSBjb250ZW5lciBpbmZvXG4gKiBFbCBhY29yZGXDs24gY29sYXBzYSBkZXNkZSB1biBjb250ZW5lZG9yIHByaW5jaXBhbCBwYXJhIGRlIGVzdGEgbWFuZXJhXG4gKiBtb3N0cmFyIGluZm9ybWFjacOzbiBpbnRlcm5hIHF1ZSBoYXlhIGRlbnRybyBkZWwgbWlzbW8gZWwgY3VhbCBzZSBleHBhbmRlIG8gc2UgY29udHJhZSBhbCByZWFsaXphciBjbGljLlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjQWNjb3JkaW9uQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJjQWNjb3JkaW9uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgdW4gaWQgw7puaWNvIGFsIGNvbXBvbmVudGUgZGVudHJvIGRlbCBET00uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0U2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbiAgLyoqXG4gICAqIFRpcG8gZGUgYWNvcmRlw7NuIFsgYmFzaWMoZGVmYXVsdCkgfCBpbmZvIHwgYWR2YW5jZSB8IGNvbHVtbiB8IG1pbmltYWwgfCBtaW5pbWFsLXVuYm9yZGVyZWRdXG4gICAqIERlZmluZSBsYSBlc2N0cnVjdHVyYSBxdWUgdmEgYSB0ZW5lciBlbCBhY29yZGXDs24sIHBvciBkZWZlY3RvIGVzIGLDoXNpY2EgKGJhc2ljKS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnYmFzaWMnO1xuICAvKipcbiAgICogUGVybWl0ZSBjb25maWd1cmFyIGVsIGNvbXBvcnRhbWllbnRvIGRlbCBhY29yZGXDs24gcGFyYSBxdWUgZXN0ZSBzZSBtdWVzdHJlIGV4cGFuZGlkbyBkZXNkZSBzdSBjYXJnYSBlbiBlbCBET01cbiAgICogZXMgZGUgdGlwbyBib29sZWFuYSB5IHBvciBkZWZlY3RvIGVzIGZhbHNlLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUGFyYW1ldHJvIHBvciBkZXByZWNhciwgZGViaWRvIGEgcXVlIG5vIGVzIHBhcnRlIGRlbCBjb21wb25lbnRlLCBkZSBhY3VlcmRvIGEgZG9jdW1lbnRhY2lvbiBGaWdtYS5cbiAgICogTm8gcmVhbGl6YSBuaW5ndW5hIGFjY2nDs24uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNBY2NvcmRpb25IZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSkge31cbn1cbiIsIjxhcnRpY2xlXG4gIGNsYXNzPVwiYmMtYWNjb3JkaW9uIGJjLWFjY29yZGlvbi17eyB0eXBlIH19IGJjLWFjY29yZGlvbi1jb250YWluZXIte3sgdHlwZSB9fVwiXG4gIGlkPVwie3sgY29tcG9uZW50SWQgfX1cIlxuICBbbmdDbGFzc109XCJ7ICdiYy1hY3RpdmUnOiBhY3RpdmV9XCJcbj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9hcnRpY2xlPlxuIl19