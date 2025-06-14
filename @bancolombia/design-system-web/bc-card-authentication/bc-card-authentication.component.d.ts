import { AfterViewInit, EventEmitter } from '@angular/core';
import { BcCardAuthenticationBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
export declare class BcCardAuthenticationComponent implements AfterViewInit {
    /**
     * Parámetro de entrada para el contenido del título.
     *
     * @type {string}
     * @member BcCardAuthenticationComponent
     */
    titleCardAuth: string | null;
    /**
     * Parámetro de entrada para el contenido de la  descripción.
     *
     * @type {string}
     * @member BcCardAuthenticationComponent
     */
    descriptionCardAuth: string | null;
    /**
     * Parámetro de entrada para contenido del icono
     *
     * @type {string}
     * @member BcCardAuthenticationComponent
     */
    iconCardAuth: string | null;
    /**
     * Parámetro que permite eligir entre los dos tipos de variantes del card authentication.
     * @member BcCardAuthenticationComponent
     */
    typeContainerAuth: 'dynamicContainer' | 'staticContainer';
    /**
     * Parámetro que permite eligir entre la opcion de dos botones o un boton.
     * @member BcCardAuthenticationComponent
     */
    amountOfButtons: 'one' | 'two';
    /**
     * Salida de los valores que el usuario ingreso en los inputs
     * @member BcCardAuthenticationComponent
     */
    onSubmit: EventEmitter<any>;
    /**
     * variable que hace referencia al comportamiento nativo del componente
     * @member BcCardAuthenticationComponent
     */
    BcCardAuthBehavior: BcCardAuthenticationBehavior;
    constructor();
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCardAuthenticationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCardAuthenticationComponent, "bc-card-authentication", never, { "titleCardAuth": "titleCardAuth"; "descriptionCardAuth": "descriptionCardAuth"; "iconCardAuth": "iconCardAuth"; "typeContainerAuth": "typeContainerAuth"; "amountOfButtons": "amountOfButtons"; }, { "onSubmit": "onSubmit"; }, never, ["[cardAuthStaticContainer]", "[cardAuthDynamicContainer]", "[cardAuthButton]", "[cardAuthButtons]", "[cardAuthMainLink]", "[cardAuthAdditionalLinks]"]>;
}
