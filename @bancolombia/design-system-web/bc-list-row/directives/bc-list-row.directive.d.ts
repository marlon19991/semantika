import * as i0 from "@angular/core";
/**
 * Aplica el diseño y los estilos basicos para el contenedor bc list creados para Bancolombia S.A.
 *
 * @export
 * @class BcListRowDirective
 */
export declare class BcListRowDirective {
    /**
    * Propiedad que almacena el valor de la clase `bc-list-row` por defecto
    * @type `string`
    * @memberof BcListRowDirective
    */
    private defaultClass;
    /**
    * Propiedad que ajusta si se debe agregar la clase `bc-list-row-elevation` o no
    * @type `boolean`
    * @memberof BcListRowDirective
    */
    showElevation: boolean;
    /**
    * Propiedad que ajusta si se debe agregar la clase `bc-list-row-title` o no
    * @type `boolean`
    * @memberof BcListRowDirective
    */
    isTitle: boolean;
    /**
    * Propiedad que permite capturar otras clases ingresadas desde el atributo class
    * @type `string`
    * @memberof BcListRowDirective
    */
    class: string;
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListRowDirective
    */
    get hostClasses(): string;
    /**
     * Si la propiedad showElevation es verdadera, devuelve la cadena
     * `bc-list-row-elevation` de lo contrario, devuelve una cadena vacía
     * @returns El nombre de clase para la fila.
     */
    setElevation(): string;
    /**
     * Si la propiedad isTitle es verdadera, devuelve la cadena
     * `bc-list-row-title` de lo contrario, devuelve una cadena vacía
     * @returns El nombre de clase para la fila.
     */
    rowVariant(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcListRowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcListRowDirective, "[bc-list-row]", never, { "showElevation": "showElevation"; "isTitle": "isTitle"; "class": "class"; }, {}, never>;
}
