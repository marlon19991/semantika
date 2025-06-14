import { AfterContentInit, ElementRef, QueryList, Renderer2 } from "@angular/core";
import * as i0 from "@angular/core";
/**
 * Aplica el diseño y los estilos relacionados al texto dentro de las columnas del bc-list creados para Bancolombia S.A.
 *
 * @export
 * @class BcListColumnContentDataDirective
 * @implements {AfterContentInit}
 */
export declare class BcListColumnContentDataDirective implements AfterContentInit {
    private renderer;
    /**
    * Propiedad que define el estilo por defecto de las columnas
    * @type  `string`
    * @memberof BcListColumnContentDataDirective
    */
    private defaultClass;
    /**
    * Propiedad que permite capturar otras clases ingresadas desde el atributo class
    * @type  `string`
    * @memberof BcListColumnDirective
    */
    class: string;
    /**
    * Propiedad que permite configurar el texto dentro de la columna con ellipsis
    * @type  `boolean`
    * @memberof BcListColumnDirective
    */
    hasTextToShrink: boolean;
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListColumnContentDataDirective
    */
    get hostClasses(): string;
    childContainers: QueryList<ElementRef>;
    constructor(renderer: Renderer2);
    ngAfterContentInit(): void;
    /**
     * Verifica que la columna ha sido configurada para mostrar texto con ellipis. Agrega la clase
     * `bc-list-column-content-data-text-shrinkable` a cada contenedor secundario
     * @memberof BcListColumnContentDataDirective
     */
    setTextEllipsis(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcListColumnContentDataDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcListColumnContentDataDirective, "[bc-column-content-data]", never, { "class": "class"; "hasTextToShrink": "hasTextToShrink"; }, {}, ["childContainers"]>;
}
