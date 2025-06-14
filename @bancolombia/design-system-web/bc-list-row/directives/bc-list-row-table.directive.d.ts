import { AfterViewInit, ElementRef } from '@angular/core';
import { BcListRowBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
 * Aplica el comportamiento del bc-list-row
 *
 * @export
 * @class BcListRowTableDirective
 */
export declare class BcListRowTableDirective implements AfterViewInit {
    private element;
    /**
      * Propiedad declarada para inicializar la instancia del comportamiento del componente bc-list-row
      * @type  `BcListRowBehavior`
      * @memberof BcListRowTableDirective
    */
    bcListRowBehavior: BcListRowBehavior;
    /**
      * Propiedad que almacena el valor de la clase `bc-list-row-table` por defecto
      * @type  `BcListRowBehavior`
      * @memberof BcListRowTableDirective
    */
    private defaultClass;
    /**
      * Propiedad que permite capturar otras clases ingresadas desde el atributo class
      * @type `string`
      * @memberof BcListRowTableDirective
      */
    class: string;
    /**
      * Getter que permite agregar todas las clases ajustadas en la directiva
      * @type `string`
      * @memberof BcListRowTableDirective
      */
    get hostClasses(): string;
    constructor(element: ElementRef<HTMLElement>);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcListRowTableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcListRowTableDirective, "[bc-list-row-table]", never, { "class": "class"; }, {}, never>;
}
