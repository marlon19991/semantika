import { AfterContentInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonIconDirective
 * @implements {AfterContentInit}
 * @deprecated  Utilizar componente BcIconButtonComponent
 */
export declare class BcButtonIconDirective implements AfterContentInit {
    get tabIndex(): string;
    /**
     * Este atributo nos configura el tipo de botón mediante su clase.
     *
     * @type {string}
     * @memberof BcButtonIconDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    class: string;
    /**
     * Este atributo nos indica si el botón está habilitado o deshabilitado.
     *
     * @type {boolean}
     * @memberof BcButtonIconDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    disabled: boolean;
    clases: string;
    onFocusOut(): void;
    onFocus(event: KeyboardEvent): void;
    /**
     * Configura estado del botón icono.
     *
     * @returns {string}
     * @memberof BcButtonIconDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setStatus(): string;
    /**
     * Configura la accesibilidad del componente.
     *
     * @returns {string}
     * @memberof BcButtonIconDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setAccesibility(): string;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcButtonIconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcButtonIconDirective, "[bc-button-icon]", never, { "class": "class"; "disabled": "disabled"; }, {}, never>;
}
