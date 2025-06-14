import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Componente para los filtros avanzados.
 *
 * @export
 * @class BcSearchAdvancedItemComponent
 */
export declare class BcSearchAdvancedItemComponent {
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
    type: string;
    /**
   * Tipo de input
   * Type = text, number, etc.
   * @type {boolean}
   * @memberof BcSearchAdvancedItemComponent
   */
    inputType: string;
    /**
     * Nombre  del elemento.
     *
     * @memberof BcSearchAdvancedItemComponent
     */
    name: string;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcSearchAdvancedItemComponent
     */
    id: string;
    /**
     * Valores que va a tener el selector.
     *
     * @type {string}
     * @memberof BcSearchAdvancedItemComponent
     */
    valuesSelect: string;
    /**
     * Texto del elemento.
     *
     * @type {string}
     * @memberof BcSearchAdvancedItemComponent
     */
    textLabel: string;
    /**
     * Icono que aparece en el elemento.
     *
     * @type {string}
     * @memberof BcSearchAdvancedItemComponent
     */
    iconInput: string;
    /**
     * Esta entrada de tipo string nos indica el tipo de formato de salida de nuestro valor actual, esta puede ser
     * de tipo full para devolver el objeto completo o simple para devolver un único valor.
     *
     * @type {string}
     * @memberof BcSearchAdvancedItemComponent
     */
    typeSelect: string;
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
    data_value: string;
    valueSelected: BehaviorSubject<any>;
    onSelect(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSearchAdvancedItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcSearchAdvancedItemComponent, "bc-search-item-advanced", never, { "type": "type"; "inputType": "inputType"; "name": "name"; "id": "id"; "valuesSelect": "valuesSelect"; "textLabel": "textLabel"; "iconInput": "iconInput"; "typeSelect": "typeSelect"; "data_value": "data_value"; }, {}, never, ["*"]>;
}
