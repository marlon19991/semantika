import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonDirective
 */
export declare class BcButtonDirective implements AfterViewInit {
    private changeDetectorRef;
    constructor(changeDetectorRef: ChangeDetectorRef);
    /**
     * Parámetro para denotar el tipo de botón.
     *
     * @type {('primary' | 'secondary' | 'terciary' | 'tertiary' | 'background' | 'ghost')}
     * @memberof BcButtonDirective
     */
    typeButton: 'primary' | 'secondary' | 'terciary' | 'tertiary' | 'background' | 'ghost';
    /**
     * Parámetro para denotar el tamaño de botón.
     *
     * @type {('default' | 'small' | 'puffy')}
     * @memberof BcButtonDirective
     */
    sizeButton: 'default' | 'small' | 'puffy';
    /**
     * Parámetro para denotar la configuración de ancho del botón.
     *
     * @type {('fill' | 'hug')}
     * @memberof BcButtonDirective
     */
    width: 'fill' | 'hug';
    /**
     * Parámetro para denotar la clase de botón.
     *
     * @type {string}
     * @memberof BcButtonDirective
     */
    class: string;
    classes: string;
    /**
     * Configura los estilos del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setStyles(): string;
    /**
     * Configura el tamaño del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setSize(): string;
    /**
     * Configura el ancho del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setWidth(): string;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcButtonDirective, "[bc-button]", never, { "typeButton": "typeButton"; "sizeButton": "sizeButton"; "width": "width"; "class": "class"; }, {}, never>;
}
