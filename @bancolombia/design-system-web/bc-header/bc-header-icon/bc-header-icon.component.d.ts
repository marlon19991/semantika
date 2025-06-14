import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
interface ItooltipIcon {
    isTooltip: boolean;
    textTooltip: string;
    positionTooltip: string;
}
/**
 * Componente del item de iconos para el header.
 * Seccion de iconos funcionales, no usan las etiquetas y deben llevar un tooltip.
 *
 * @export
 * @class BcHeaderIconMenu
 */
export declare class BcHeaderIconMenuComponent {
    private bcHelper;
    /**
     * Tooltip ubicado en los iconos del header.
     *  @type {ItooltipIcon}
     * @memberof BcHeaderIconComponent
     */
    tooltipIcon: ItooltipIcon;
    /**
     * Define el icono a mostrar en cada item del header.
     *
     * @memberof BcHeaderIconMenuComponent
     */
    icon: string;
    /**
     * Define el texto a mostrar en cada item del header.
     *
     * @memberof BcHeaderIconMenuComponent
     */
    text: string;
    /**
     * Define el texto cuando se quiere colocar en una segunda línea ejemplo: el numero de NIT.
     *
     * @memberof BcHeaderIconMenuComponent
     */
    subText: string;
    /**
     * Define la url a la cual vamos a redirigir cada enlace del header.
     *
     * @memberof BcHeaderIconMenuComponent
     */
    route: string;
    /**
     * Id del item
     *
     * @type {string}
     * @memberof BcHeaderIconMenuComponent
     */
    componentId: string;
    constructor(bcHelper: BcHelperService);
    static ɵfac: i0.ɵɵFactoryDeclaration<BcHeaderIconMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcHeaderIconMenuComponent, "bc-header-icon", never, { "tooltipIcon": "tooltipIcon"; "icon": "icon"; "text": "text"; "subText": "subText"; "route": "route"; "componentId": "componentId"; }, {}, never, never>;
}
export {};
