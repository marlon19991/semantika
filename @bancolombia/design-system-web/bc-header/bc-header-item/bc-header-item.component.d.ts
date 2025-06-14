import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente del item para el header
 * Este componente puede ser de 6 tipos ['help' | 'language' | 'notifiaction' | 'user' | 'logout']
 *
 * @export
 * @class BcHeaderItemMenu
 */
export declare class BcHeaderItemMenuComponent {
    private bcHelper;
    /**
     * Id del componente.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    itemId: string;
    /**
     *  itemType define el tipo de icono a mostrar pueden ser tipo user o logout.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    itemType: 'any' | 'user' | 'logout';
    /**
     * Define el icono a mostrar en cada item del header.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    icon: string;
    /**
     * Define el texto a mostrar en cada item del header.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    text: string;
    /**
     * Define el texto cuando se quiere colocar en una segunda línea ejemplo: el numero de NIT.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    subText: string;
    /**
     * Define la url a la cual vamos a redirigir cada enlace del header.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    route: string;
    /**
     * Define el tipo de avatar que se va a mostrar en el header.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    userAvatar: string;
    /**
     * Id del item.
     *
     * @type {string}
     * @memberof BcHeaderItemMenuComponent
     */
    componentId: string;
    constructor(bcHelper: BcHelperService);
    static ɵfac: i0.ɵɵFactoryDeclaration<BcHeaderItemMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcHeaderItemMenuComponent, "bc-header-item", never, { "itemId": "itemId"; "itemType": "itemType"; "icon": "icon"; "text": "text"; "subText": "subText"; "route": "route"; "userAvatar": "userAvatar"; "componentId": "componentId"; }, {}, never, never>;
}
