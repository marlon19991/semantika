import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Importa los cards con los diseños de Bancolombia S.A para mostrar una vista previa del contenido al que se vincular.
 *
 * @export
 * @class BcCardDirective
 * @implements {OnInit}
 */
export declare class BcCardDirective implements OnInit {
    /**
     * Indica la clase de card.
     *
     * @type {string}
     * @memberof BcCardDirective
     */
    class: string;
    /**
     * Tipo de card.
     *
     * @type {('default' | 'rounded' | 'rounded-header' | 'rounded-horizontal' | 'rounded-header-horizontal' |
     *     'horizontal' | 'header-horizontal' | 'header')}
     * @memberof BcCardDirective
     */
    type: 'default' | 'image' | 'rounded' | 'rounded-header' | 'rounded-horizontal' | 'rounded-header-horizontal' | 'horizontal' | 'header-horizontal' | 'header';
    /**
     * Color de la card.
     *
     * @type {('default' | 'warning' | 'info' | 'error' | 'success')}
     * @memberof BcCardDirective
     */
    backgroundColor: 'default' | 'warning' | 'info' | 'error' | 'success';
    /**
     * Hace binding de las clases que se asignan a la directiva (tipo y color)
     * @type {string}
     * @memberof BcCardDirective
     */
    get hostClasses(): string;
    /**
     * Setea el tipo de card
     *
     * @returns
     * @memberof BcCardDirective
     */
    setTypeCard(): string;
    /**
   * Setea el color de card
   *
   * @returns
   * @memberof BcCardDirective
   */
    setCardColor(): any;
    /**
    * Inicializa la directiva
    * @memberof BcCardDirective
    */
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCardDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcCardDirective, "[bc-card]", never, { "class": "class"; "type": "typeCard"; "backgroundColor": "backgroundColor"; }, {}, never>;
}
