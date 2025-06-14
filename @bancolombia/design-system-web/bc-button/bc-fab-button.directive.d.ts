import { AfterContentInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcFabButtonDirective
 * @implements {AfterContentInit}
 * @deprecated  Utilizar variante de componente BcIconButtonComponent
 */
export declare class BcFabButtonDirective implements AfterContentInit {
    get role(): string;
    get tabIndex(): string;
    /**
     * Parámetro para denotar el tipo de botón.
     *
     * @type {('primary' | 'secondary' | 'mini')}
     * @memberof BcFabButtonDirective
     * @deprecated  Utilizar variante de componente BcIconButtonComponent
     */
    typeButton: 'primary' | 'secondary' | 'mini';
    class: string;
    classes: string;
    onFocusOut(): void;
    onFocus(event: KeyboardEvent): void;
    /**
     * Indica la accesibilidad del componente.
     *
     * @returns {string}
     * @memberof BcFabButtonDirective
     * @deprecated  Utilizar variante de componente BcIconButtonComponent
     */
    setAccesibility(): string;
    ngAfterContentInit(): void;
    /**
     * Configura los estilos del botón.
     *
     * @returns
     * @memberof BcFabButtonDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setStyle(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcFabButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcFabButtonDirective, "[bc-fab-button]", never, { "typeButton": "typeButton"; "class": "class"; }, {}, never>;
}
