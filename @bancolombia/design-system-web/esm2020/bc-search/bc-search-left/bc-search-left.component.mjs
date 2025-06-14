import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Comoponente para el logo izquierdo del header.
 *
 * @export
 * @class BcSearchLeftComponent
 */
export class BcSearchLeftComponent {
    constructor() {
        /**
         * Crea una instacia de BcSearchLeftComponent.
         * @memberof BcSearchLeftComponent
         */
        /**
         * Icono elemento.
         *
         * @type {boolean}
         * @memberof BcSearchLeftComponent
        */
        this.inputIcon = '';
        /**
        * Placeholder input.
        *
        * @type {boolean}
        * @memberof BcSearchLeftComponent
        */
        this.txtPlacheholder = '';
        /**
          * Tipo de input ejemplo: text,tel...
          *
          * @memberof BcSearchLeftComponent
          */
        this.type = '';
        /**
         * Name del elemento
         *
         * @memberof BcSearchLeftComponent
         */
        this.name = '';
        /**
         * Id del elemento
         *
         * @type {string}
         * @memberof BcSearchLeftComponent
         */
        this.id = '';
        /**
         * Data del elemento este se utiliza en caso de que se quieran hacer dos filtros
         * en un mismo campo de entrada ejemplo: en Input nombre de producto tambien se quiere filtrar
         * el número de producto, el data value debe ser igual al nombre de la propiedad del objeto que se va a filtrar,
         *objectArrayItem = [
                    {
                      'nombreProducto': 'Bancolombia ahorros',
                      'numeroProducto': '345268',
                      'entidad': "Bancolombia S.A",
                      'cuenta': "corriente",
                    },
                ]
      
         *data_value = "'numeroProducto'".
         *
         * @type {string}
         * @memberof BcSearchLeftComponent
        */
        this.data_value = '';
    }
}
BcSearchLeftComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchLeftComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchLeftComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchLeftComponent, selector: "bc-search-left", inputs: { inputIcon: "inputIcon", txtPlacheholder: "txtPlacheholder", type: "type", name: "name", id: "id", data_value: "data_value" }, ngImport: i0, template: "<div class=\"bc-search-input\">\r\n    <ng-content></ng-content>\r\n</div>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchLeftComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-left', template: "<div class=\"bc-search-input\">\r\n    <ng-content></ng-content>\r\n</div>\r\n" }]
        }], propDecorators: { inputIcon: [{
                type: Input
            }], txtPlacheholder: [{
                type: Input
            }], type: [{
                type: Input
            }], name: [{
                type: Input
            }], id: [{
                type: Input
            }], data_value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2VhcmNoLWxlZnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXNlYXJjaC9iYy1zZWFyY2gtbGVmdC9iYy1zZWFyY2gtbGVmdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2VhcmNoL2JjLXNlYXJjaC1sZWZ0L2JjLXNlYXJjaC1sZWZ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVqRDs7Ozs7R0FLRztBQUtILE1BQU0sT0FBTyxxQkFBcUI7SUFKbEM7UUFLRTs7O1dBR0c7UUFFSDs7Ozs7VUFLRTtRQUNPLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFeEI7Ozs7O1VBS0U7UUFDTyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUU5Qjs7OztZQUlJO1FBQ0ssU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQjs7OztXQUlHO1FBQ00sU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVuQjs7Ozs7V0FLRztRQUNNLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBaUJFO1FBQ08sZUFBVSxHQUFHLEVBQUUsQ0FBQztLQUUxQjs7a0hBL0RZLHFCQUFxQjtzR0FBckIscUJBQXFCLDhMQ1psQyxnRkFHQTsyRkRTYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsZ0JBQWdCOzhCQWVqQixTQUFTO3NCQUFqQixLQUFLO2dCQVFHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFRRyxFQUFFO3NCQUFWLEtBQUs7Z0JBb0JHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tb3BvbmVudGUgcGFyYSBlbCBsb2dvIGl6cXVpZXJkbyBkZWwgaGVhZGVyLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBCY1NlYXJjaExlZnRDb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYmMtc2VhcmNoLWxlZnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1zZWFyY2gtbGVmdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJjU2VhcmNoTGVmdENvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYSB1bmEgaW5zdGFjaWEgZGUgQmNTZWFyY2hMZWZ0Q29tcG9uZW50LlxyXG4gICAqIEBtZW1iZXJvZiBCY1NlYXJjaExlZnRDb21wb25lbnRcclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogSWNvbm8gZWxlbWVudG8uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hMZWZ0Q29tcG9uZW50XHJcbiAgKi9cclxuICBASW5wdXQoKSBpbnB1dEljb24gPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgKiBQbGFjZWhvbGRlciBpbnB1dC5cclxuICAqXHJcbiAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAqIEBtZW1iZXJvZiBCY1NlYXJjaExlZnRDb21wb25lbnRcclxuICAqL1xyXG4gIEBJbnB1dCgpIHR4dFBsYWNoZWhvbGRlciA9ICcnO1xyXG5cclxuICAvKipcclxuICAgICogVGlwbyBkZSBpbnB1dCBlamVtcGxvOiB0ZXh0LHRlbC4uLiBcclxuICAgICpcclxuICAgICogQG1lbWJlcm9mIEJjU2VhcmNoTGVmdENvbXBvbmVudFxyXG4gICAgKi9cclxuICBASW5wdXQoKSB0eXBlID0gJyc7XHJcbiAgLyoqXHJcbiAgICogTmFtZSBkZWwgZWxlbWVudG9cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBCY1NlYXJjaExlZnRDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBuYW1lID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElkIGRlbCBlbGVtZW50b1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hMZWZ0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSBkZWwgZWxlbWVudG8gZXN0ZSBzZSB1dGlsaXphIGVuIGNhc28gZGUgcXVlIHNlIHF1aWVyYW4gaGFjZXIgZG9zIGZpbHRyb3NcclxuICAgKiBlbiB1biBtaXNtbyBjYW1wbyBkZSBlbnRyYWRhIGVqZW1wbG86IGVuIElucHV0IG5vbWJyZSBkZSBwcm9kdWN0byB0YW1iaWVuIHNlIHF1aWVyZSBmaWx0cmFyXHJcbiAgICogZWwgbsO6bWVybyBkZSBwcm9kdWN0bywgZWwgZGF0YSB2YWx1ZSBkZWJlIHNlciBpZ3VhbCBhbCBub21icmUgZGUgbGEgcHJvcGllZGFkIGRlbCBvYmpldG8gcXVlIHNlIHZhIGEgZmlsdHJhcixcclxuICAgKm9iamVjdEFycmF5SXRlbSA9IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnbm9tYnJlUHJvZHVjdG8nOiAnQmFuY29sb21iaWEgYWhvcnJvcycsXHJcbiAgICAgICAgICAgICAgICAnbnVtZXJvUHJvZHVjdG8nOiAnMzQ1MjY4JyxcclxuICAgICAgICAgICAgICAgICdlbnRpZGFkJzogXCJCYW5jb2xvbWJpYSBTLkFcIixcclxuICAgICAgICAgICAgICAgICdjdWVudGEnOiBcImNvcnJpZW50ZVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcblxyXG4gICAqZGF0YV92YWx1ZSA9IFwiJ251bWVyb1Byb2R1Y3RvJ1wiLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hMZWZ0Q29tcG9uZW50XHJcbiAgKi9cclxuICBASW5wdXQoKSBkYXRhX3ZhbHVlID0gJyc7XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJiYy1zZWFyY2gtaW5wdXRcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==