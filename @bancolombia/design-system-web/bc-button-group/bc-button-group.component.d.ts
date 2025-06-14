import { EventEmitter } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Importa el componente de Checks con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonGroupComponent
 * @implements {OnInit}
 */
export declare class BcButtonGroupComponent {
    private helper;
    parentReady: boolean;
    /**
     * Id del elemento.
     *
     * @memberof BcButtonGroupComponent
     */
    buttonId: string;
    /**
     * valor del elemento.
     *
     * @memberof BcButtonGroupComponent
     */
    value: string;
    /**
     * Name del elemento.
     *
     * @memberof BcButtonGroupComponent
     */
    name: string;
    /**
     * taxindex del elemento.
     *
     * @memberof BcButtonGroupComponent
     */
    tabindex: number;
    /**
     * Muestra opción seleccionada.
     *
     * @memberof BcButtonGroupComponent
     */
    changeState: EventEmitter<any>;
    constructor(helper: BcHelperService);
    static ɵfac: i0.ɵɵFactoryDeclaration<BcButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcButtonGroupComponent, "bc-button-group", never, { "buttonId": "buttonId"; "value": "value"; "name": "name"; "tabindex": "tabindex"; }, { "changeState": "changeState"; }, never, never>;
}
