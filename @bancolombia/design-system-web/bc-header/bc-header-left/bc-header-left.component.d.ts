import * as i0 from "@angular/core";
/**
 * Comoponente para el logo izquierdo del header.
 *
 * @export
 * @class BcHeaderLeftComponent
 */
export declare class BcHeaderLeftComponent {
    /**
     * Texto en menu izquierdo hamburguesa.
     *
     * @type {boolean}
     * @memberof BcHeaderComponent
     */
    txtLeftMenu: string;
    /**
     * Indica si existe un menú lateral y si este va a tener interacción con el header, por defecto es true.
     *
     * @type {boolean}
     * @memberof BcHeaderLeftComponent
     */
    menuInteraction: boolean;
    /**
     * Indica el aria-label para el comportamiento del componente.
     */
    ariaLabelogo: string;
    /**
   * Indica el aria-label para el comportamiento del componente.
   */
    ariaLabelChannel: string;
    /**
    /**
     * Nombre del logo a mostrar.
     *
     * @memberof BcHeaderLeftComponent
     */
    logoName: string;
    /**
     * Nombre del logo en dispositos moviles a mostrar.
     *
     * @memberof BcHeaderLeftComponent
     */
    logoMobile: string;
    /**
     * Nombre del canal a mostrar.
     *
     * @memberof BcHeaderLeftComponent
     */
    channelName: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcHeaderLeftComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcHeaderLeftComponent, "bc-header-left", never, { "txtLeftMenu": "txtLeftMenu"; "menuInteraction": "menuInteraction"; "ariaLabelogo": "ariaLabelogo"; "ariaLabelChannel": "ariaLabelChannel"; "logoName": "logoName"; "logoMobile": "logoMobile"; "channelName": "channelName"; }, {}, never, never>;
}
