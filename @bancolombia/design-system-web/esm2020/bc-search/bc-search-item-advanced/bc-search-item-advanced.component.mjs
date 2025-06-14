import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Componente para los filtros avanzados.
 *
 * @export
 * @class BcSearchAdvancedItemComponent
 */
export class BcSearchAdvancedItemComponent {
    constructor() {
        /**
         * Crea una instancia de BcSearchAdvancedItemComponent.
         * @memberof BcSearchAdvancedItemComponent
         */
        /**
       * Tipo de item
       * Type = input o select.
       * @type {boolean}
       * @memberof BcSearchAdvancedItemComponent
       */
        this.type = '';
        /**
       * Tipo de input
       * Type = text, number, etc.
       * @type {boolean}
       * @memberof BcSearchAdvancedItemComponent
       */
        this.inputType = 'text';
        /**
         * Nombre  del elemento.
         *
         * @memberof BcSearchAdvancedItemComponent
         */
        this.name = '';
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.id = '';
        /**
         * Valores que va a tener el selector.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.valuesSelect = '';
        /**
         * Texto del elemento.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.textLabel = '';
        /**
         * Icono que aparece en el elemento.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.iconInput = '';
        /**
         * Esta entrada de tipo string nos indica el tipo de formato de salida de nuestro valor actual, esta puede ser
         * de tipo full para devolver el objeto completo o simple para devolver un único valor.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.typeSelect = '';
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
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
        */
        this.data_value = '';
        this.valueSelected = new BehaviorSubject(null);
    }
    onSelect(event) {
        this.valueSelected.next({
            name: this.data_value,
            value: event,
        });
    }
}
BcSearchAdvancedItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchAdvancedItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchAdvancedItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchAdvancedItemComponent, selector: "bc-search-item-advanced", inputs: { type: "type", inputType: "inputType", name: "name", id: "id", valuesSelect: "valuesSelect", textLabel: "textLabel", iconInput: "iconInput", typeSelect: "typeSelect", data_value: "data_value" }, ngImport: i0, template: "<div class=\"bc-search-items-advance\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchAdvancedItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-item-advanced', template: "<div class=\"bc-search-items-advance\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }], propDecorators: { type: [{
                type: Input
            }], inputType: [{
                type: Input
            }], name: [{
                type: Input
            }], id: [{
                type: Input
            }], valuesSelect: [{
                type: Input
            }], textLabel: [{
                type: Input
            }], iconInput: [{
                type: Input
            }], typeSelect: [{
                type: Input
            }], data_value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2VhcmNoLWl0ZW0tYWR2YW5jZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXNlYXJjaC9iYy1zZWFyY2gtaXRlbS1hZHZhbmNlZC9iYy1zZWFyY2gtaXRlbS1hZHZhbmNlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2VhcmNoL2JjLXNlYXJjaC1pdGVtLWFkdmFuY2VkL2JjLXNlYXJjaC1pdGVtLWFkdmFuY2VkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDOzs7OztHQUtHO0FBS0gsTUFBTSxPQUFPLDZCQUE2QjtJQUoxQztRQUtJOzs7V0FHRztRQUVIOzs7OztTQUtDO1FBQ1EsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUduQjs7Ozs7U0FLQztRQUNTLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFFN0I7Ozs7V0FJRztRQUNNLFNBQUksR0FBRyxFQUFFLENBQUM7UUFFbkI7Ozs7O1dBS0c7UUFDTSxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWpCOzs7OztXQUtHO1FBQ00saUJBQVksR0FBRyxFQUFFLENBQUM7UUFFM0I7Ozs7O1dBS0c7UUFDTSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXhCOzs7OztXQUtHO1FBQ00sY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUV4Qjs7Ozs7O1dBTUc7UUFDTSxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBR3pCOzs7Ozs7Ozs7Ozs7Ozs7O1VBZ0JFO1FBQ08sZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUd6QixrQkFBYSxHQUEwQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQVFwRTtJQU5HLFFBQVEsQ0FBQyxLQUFVO1FBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3JCLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7MEhBbkdRLDZCQUE2Qjs4R0FBN0IsNkJBQTZCLDJRQ2IxQyxzRkFHQTsyRkRVYSw2QkFBNkI7a0JBSnpDLFNBQVM7K0JBQ0kseUJBQXlCOzhCQWUxQixJQUFJO3NCQUFaLEtBQUs7Z0JBU0ksU0FBUztzQkFBakIsS0FBSztnQkFPRSxJQUFJO3NCQUFaLEtBQUs7Z0JBUUcsRUFBRTtzQkFBVixLQUFLO2dCQVFHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBUUcsU0FBUztzQkFBakIsS0FBSztnQkFRRyxTQUFTO3NCQUFqQixLQUFLO2dCQVNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBb0JHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudGUgcGFyYSBsb3MgZmlsdHJvcyBhdmFuemFkb3MuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEJjU2VhcmNoQWR2YW5jZWRJdGVtQ29tcG9uZW50XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYmMtc2VhcmNoLWl0ZW0tYWR2YW5jZWQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JjLXNlYXJjaC1pdGVtLWFkdmFuY2VkLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhIHVuYSBpbnN0YW5jaWEgZGUgQmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnQuXHJcbiAgICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnRcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAqIFRpcG8gZGUgaXRlbVxyXG4gICAqIFR5cGUgPSBpbnB1dCBvIHNlbGVjdC5cclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnRcclxuICAgKi9cclxuICAgIEBJbnB1dCgpIHR5cGUgPSAnJztcclxuICAgIFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgKiBUaXBvIGRlIGlucHV0XHJcbiAgICogVHlwZSA9IHRleHQsIG51bWJlciwgZXRjLlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBCY1NlYXJjaEFkdmFuY2VkSXRlbUNvbXBvbmVudFxyXG4gICAqL1xyXG4gICAgIEBJbnB1dCgpIGlucHV0VHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vbWJyZSAgZGVsIGVsZW1lbnRvLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBCY1NlYXJjaEFkdmFuY2VkSXRlbUNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBuYW1lID0gJyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZCBkZWwgZWxlbWVudG8uXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqIEBtZW1iZXJvZiBCY1NlYXJjaEFkdmFuY2VkSXRlbUNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpZCA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsb3JlcyBxdWUgdmEgYSB0ZW5lciBlbCBzZWxlY3Rvci5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQG1lbWJlcm9mIEJjU2VhcmNoQWR2YW5jZWRJdGVtQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHZhbHVlc1NlbGVjdCA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGV4dG8gZGVsIGVsZW1lbnRvLlxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnRcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgdGV4dExhYmVsID0gJyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29ubyBxdWUgYXBhcmVjZSBlbiBlbCBlbGVtZW50by5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQG1lbWJlcm9mIEJjU2VhcmNoQWR2YW5jZWRJdGVtQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGljb25JbnB1dCA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgZWwgdGlwbyBkZSBmb3JtYXRvIGRlIHNhbGlkYSBkZSBudWVzdHJvIHZhbG9yIGFjdHVhbCwgZXN0YSBwdWVkZSBzZXJcclxuICAgICAqIGRlIHRpcG8gZnVsbCBwYXJhIGRldm9sdmVyIGVsIG9iamV0byBjb21wbGV0byBvIHNpbXBsZSBwYXJhIGRldm9sdmVyIHVuIMO6bmljbyB2YWxvci5cclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQG1lbWJlcm9mIEJjU2VhcmNoQWR2YW5jZWRJdGVtQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHR5cGVTZWxlY3QgPSAnJztcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXRhIGRlbCBlbGVtZW50byBlc3RlIHNlIHV0aWxpemEgZW4gY2FzbyBkZSBxdWUgc2UgcXVpZXJhbiBoYWNlciBkb3MgZmlsdHJvc1xyXG4gICAgICogZW4gdW4gbWlzbW8gY2FtcG8gZGUgZW50cmFkYSBlamVtcGxvOiBlbiBJbnB1dCBub21icmUgZGUgcHJvZHVjdG8gdGFtYmllbiBzZSBxdWllcmUgZmlsdHJhclxyXG4gICAgICogZWwgbsO6bWVybyBkZSBwcm9kdWN0bywgZWwgZGF0YSB2YWx1ZSBkZWJlIHNlciBpZ3VhbCBhbCBub21icmUgZGUgbGEgcHJvcGllZGFkIGRlbCBvYmpldG8gcXVlIHNlIHZhIGEgZmlsdHJhcixcclxuICAgICAqb2JqZWN0QXJyYXlJdGVtID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAnbm9tYnJlUHJvZHVjdG8nOiAnQmFuY29sb21iaWEgYWhvcnJvcycsXHJcbiAgICAgICAgICAgICAgICAgICdudW1lcm9Qcm9kdWN0byc6ICczNDUyNjgnLFxyXG4gICAgICAgICAgICAgICAgICAnZW50aWRhZCc6IFwiQmFuY29sb21iaWEgUy5BXCIsXHJcbiAgICAgICAgICAgICAgICAgICdjdWVudGEnOiBcImNvcnJpZW50ZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgXHJcbiAgICAgKmRhdGFfdmFsdWUgPSBcIidudW1lcm9Qcm9kdWN0bydcIi5cclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnRcclxuICAgICovXHJcbiAgICBASW5wdXQoKSBkYXRhX3ZhbHVlID0gJyc7XHJcblxyXG4gICAgXHJcbiAgICB2YWx1ZVNlbGVjdGVkIDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG5cclxuICAgIG9uU2VsZWN0KGV2ZW50OiBhbnkpe1xyXG4gICAgICAgIHRoaXMudmFsdWVTZWxlY3RlZC5uZXh0KHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhX3ZhbHVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogZXZlbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImJjLXNlYXJjaC1pdGVtcy1hZHZhbmNlXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19