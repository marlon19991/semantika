import * as i0 from "@angular/core";
/**
 * Comoponente para el logo izquierdo del header.
 *
 * @export
 * @class BcSearchLeftComponent
 */
export declare class BcSearchLeftComponent {
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
    inputIcon: string;
    /**
    * Placeholder input.
    *
    * @type {boolean}
    * @memberof BcSearchLeftComponent
    */
    txtPlacheholder: string;
    /**
      * Tipo de input ejemplo: text,tel...
      *
      * @memberof BcSearchLeftComponent
      */
    type: string;
    /**
     * Name del elemento
     *
     * @memberof BcSearchLeftComponent
     */
    name: string;
    /**
     * Id del elemento
     *
     * @type {string}
     * @memberof BcSearchLeftComponent
     */
    id: string;
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
    data_value: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSearchLeftComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcSearchLeftComponent, "bc-search-left", never, { "inputIcon": "inputIcon"; "txtPlacheholder": "txtPlacheholder"; "type": "type"; "name": "name"; "id": "id"; "data_value": "data_value"; }, {}, never, ["*"]>;
}
