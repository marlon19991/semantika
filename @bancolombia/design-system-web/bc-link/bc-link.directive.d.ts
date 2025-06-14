import { AfterContentInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente links se usa para indicar un vínculo a diferentes vistas.
 *
 * @export
 * @class BcLinkDirective
 * @implements {AfterContentInit}
 */
export declare class BcLinkDirective implements AfterContentInit {
    /**
     * Estilo de link.
     *
     * @type {('simple' | 'underline')}
     * @memberof BcLinkDirective
     */
    typeLink: 'simple' | 'underline';
    /**
     * Tamaño del link.
     *
     * @type {('default' | 'small' | 'large' | 'underlineSmall' | 'underlineLarge' | 'underlineDefault')}
     * @memberof BcLinkDirective
     */
    sizeLink: 'default' | 'small' | 'large' | 'underlineSmall' | 'underlineLarge' | 'underlineDefault';
    /**
     * Clase del link.
     *
     * @type {string}
     * @memberof BcLinkDirective
     */
    class: string;
    clazzes: string;
    onFocusOut(): void;
    onFocus(event: KeyboardEvent): void;
    /**
     * Metodo para la accesibilidad
     *
     * @returns {string}
     * @memberof BcLinkDirective
     */
    setAccesibility(): string;
    ngAfterContentInit(): void;
    /**
     * Obtener estilos por defecto
     *
     * @returns {string}
     * @memberof BcLinkDirective
     */
    getStyles(): string;
    getSize(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcLinkDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcLinkDirective, "[bc-link]", never, { "typeLink": "typeLink"; "sizeLink": "sizeLink"; "class": "class"; }, {}, never>;
}
