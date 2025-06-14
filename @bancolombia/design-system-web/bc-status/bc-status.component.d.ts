import * as i0 from "@angular/core";
/**
 * Componente Status
 * Las etiquetas tipo status son elementos que permiten a los usuarios
 * identificar rápidamente estados y categorías de artículos
 * mediante palabras clave e iconografía.
 *
 * @export
 * @class BcStatusComponent
 */
export declare class BcStatusComponent {
    /**
     * Parámetro para denotar su tipo
     * @type {('icon-left' | 'icon-right' | 'only' | 'simple' )}
     * @memberof BcStatusComponent
     */
    type: 'icon-left' | 'icon-right' | 'only' | 'simple';
    /**
     * Parámetro para denotar el color
     * @type {('alba' | 'andino' | 'caribe' | 'macondo'| 'flamenco'| 'orquidea'| 'neutro'| 'black'| 'white')}
     * @memberof BcStatusComponent
     */
    color: 'alba' | 'andino' | 'caribe' | 'macondo' | 'flamenco' | 'orquidea' | 'neutro' | 'black' | 'white';
    /**
     * Parámetro para denotar el tipo de borde
     * @type {('center' | 'left' | 'right')}
     * @memberof BcStatusComponent
     */
    border: 'center' | 'left' | 'right';
    /**
     * Parámetro para el ícono a mostrar
     * @type {string}
     * @memberof BcStatusComponent
     */
    customIcon: string;
    /**
     * Parámetro para el texto a mostrar
     * @type {string}
     * @memberof BcStatusComponent
     */
    text: string;
    /**
     * Parámetro para mostrar el status con estilo de componente deshabilitado
     * @type {boolean}
     * @memberof BcStatusComponent
     */
    disabledTag: boolean;
    /**
     * Parámetro para ancho explícito del componente
     * @type {string}
     * @memberof BcStatusComponent
     */
    widthTag: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcStatusComponent, "bc-status", never, { "type": "type"; "color": "color"; "border": "border"; "customIcon": "customIcon"; "text": "text"; "disabledTag": "disabledTag"; "widthTag": "widthTag"; }, {}, never, never>;
}
