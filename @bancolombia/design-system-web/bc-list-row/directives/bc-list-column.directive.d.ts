import { AfterContentInit, Renderer2, ElementRef } from "@angular/core";
import { Alignment, XMarginBetweenCols } from "./bc-list-row-constants";
import * as i0 from "@angular/core";
/**
 * Aplica el diseño y los estilos basicos para el contenedor bc list y sus columnas creados para Bancolombia S.A.
 *
 * @export
 * @class BcListRowDirective
 * @implements {AfterContentInit}
 */
export declare class BcListColumnDirective implements AfterContentInit {
    private renderer;
    private element;
    /**
     * Propiedad que define el estilo por defecto de las columnas
     * @type  `string`
     * @memberof BcListColumnDirective
     */
    private defaultClass;
    /**
    * Propiedad que define la alineación de las columnas
    * @type  {Alignment}
    * @memberof BcListColumnDirective
    */
    alignment: Alignment;
    /**
     * Propiedad que define la de verificación
     * @type  `boolean`
     * @memberof BcListColumnDirective
     */
    actionColumn: boolean;
    /**
    * Propiedad que define la columna de menu o accionables
    * @type  `boolean`
    * @memberof BcListColumnDirective
    */
    menuColumn: boolean;
    /**
    * Propiedad que define el ancho paramétrico entre columnas
    * @type  {XMarginBetweenCols}
    * @memberof BcListColumnDirective
    */
    marginBetweenCols: XMarginBetweenCols;
    /**
    * Propiedad que define si la columna de datos tiene marca de autorizador internacional
    * @type  `boolean`
    * @memberof BcListColumnDirective
    */
    hasBrand: boolean;
    /**
    * Propiedad que define si la columna es de ancho variable
    * @type  `boolean`
    * @memberof BcListColumnDirective
    */
    hasAutoWidth: boolean;
    /**
    * Propiedad que define si la columna se mostrará en responsive tablet y/o mobile
    * @type  `boolean`
    * @memberof BcListColumnDirective
    */
    displayPrimary: boolean;
    /**
    * Propiedad que define si el componente bc-tag se mostrará en responsive mobile
    * @type  `boolean`
    * @memberof BcListColumnDirective
    */
    displayMobileBottomLeftContent: boolean;
    /**
    * Propiedad que permite capturar otras clases ingresadas desde el atributo class
    * @type  `string`
    * @memberof BcListColumnDirective
    */
    class: string;
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListColumnDirective
    */
    get hostClasses(): string;
    constructor(renderer: Renderer2, element: ElementRef<HTMLElement>);
    ngAfterContentInit(): void;
    /**
     * Si la alineación es correcta, devuelve la clase de alineación correcta. Si la alineación es
     * izquierda, devuelve la clase de alineación izquierda. De lo contrario, devuelve una cadena
     * vacía.
     * @returns El nombre de clase para la alineación de la lista.
     * @memberof BcListColumnDirective
     */
    setAlignContent(): string;
    /**
     *Valida si una columna es de verificación y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setActionColumn(): string;
    /**
     * Valida si una columna es accionable y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setMenuColumn(): string;
    /**
     * Valida si una columna es de contenido y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setContentColumn(): string;
    /**
     * Verificia la opción que tenga asignada la propiedad marginBetweenCols para aplicar el estilo dependiendo de esa propiedad
     * @memberof BcListColumnDirective
     * @returns el nombre de la clase o una cadena vacia.
     */
    setMarginBetweenCols(): string;
    /**
     * Ajusta la opción de que una columna sea muestre de forma adecuada la marca de la tarjeta de crédito.
     * @returns El nombre de clase para el contenido del elemento de lista.
     * @memberof BcListColumnDirective
     */
    setBrandContent(): string;
    /**
     * Ajusta la opción para que una columna sea con ancho variable.
     * @returns El nombre de clase para la columna.
     * @memberof BcListColumnDirective
     */
    setAutoWidth(): string;
    /**
     * aplica el responsive a las columnas.
     * @memberof BcListColumnDirective
     */
    setColumnsToResponsive(): void;
    /**
     * Ajusta la opción para que una columna pueda o no mostrar el contenido en la parte inferior izquierda en mobile.
     * @returns El nombre de clase para que se visualice el contenido en la parte inferior izquierda en resolución mobile.
     * @memberof BcListColumnDirective
     */
    setMobileBottomLeftContent(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcListColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcListColumnDirective, "[bc-column-content]", never, { "alignment": "alignment"; "actionColumn": "actionColumn"; "menuColumn": "menuColumn"; "marginBetweenCols": "marginBetweenCols"; "hasBrand": "hasBrand"; "hasAutoWidth": "hasAutoWidth"; "displayPrimary": "displayPrimary"; "displayMobileBottomLeftContent": "displayMobileBottomLeftContent"; "class": "class"; }, {}, never>;
}
