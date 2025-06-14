import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcSwitchBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
 * componente Switch
 *
 * @export
 * @class BcSwitchWebComponent
 */
export declare class BcSwitchComponent implements OnChanges {
    private bcHelperService;
    /**
     * Indica si el elemento esta seleccionado.
     *
     * @type {boolean}
     * @memberof BcSwitchWebComponent
     */
    isChecked: boolean;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcSwitchWebComponent
     */
    id: string;
    /**
     * Indica si el elemento esta deshabilitado.
     *
     * @type {boolean}
     * @memberof BcSwitchWebComponent
     */
    disabled: boolean;
    /**
     * Indica si el elemento es requerido.
     *
     * @type {boolean}
     * @memberof BcSwitchWebComponent
     */
    required: boolean;
    /**
     * Indica si el elemento lleva el label a la izquierda.
     *
     * @type {boolean}
     * @memberof BcSwitchWebComponent
     */
    leftLabel: boolean;
    /**
     * Valor del elemento seleccionado.
     *
     * @type {EventEmitter<boolean>}
     * @memberof BcSwitchWebComponent
     */
    changeState: EventEmitter<boolean>;
    outline: boolean;
    bcSwitchBehavior: BcSwitchBehavior;
    componentId: string;
    constructor(bcHelperService: BcHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    /**
     * Cambio de estado del elemento.
     *
     * @memberof BcSwitchWebComponent
     */
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcSwitchComponent, "bc-switch", never, { "isChecked": "isChecked"; "id": "id"; "disabled": "disabled"; "required": "required"; "leftLabel": "leftLabel"; }, { "changeState": "changeState"; }, never, ["*"]>;
}
