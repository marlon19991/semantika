import { OnInit, EventEmitter } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcRadioGroupComponent } from './bc-radio-group/bc-radio-group.component';
import * as i0 from "@angular/core";
/**
 * Componente Radio Button
 *
 * @export
 * @class BcRadioComponent
 * @implements {OnInit}
 */
export declare class BcRadioComponent implements OnInit {
    private radioGroup;
    private helper;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcRadioComponent
     */
    id: string;
    /**
     * Nombre del elemento radio.
     *
     * @type {string}
     * @memberof BcRadioComponent
     */
    name: string;
    /**
     * Valor del elemento.
     *
     * @type {string}
     * @memberof BcRadioComponent
     */
    value: string;
    /**
     * Indica si el elemento esta habilitado.
     *
     * @type {boolean}
     * @memberof BcRadioComponent
     */
    enabled: boolean;
    /**
     * Indica si el elemento esta seleccionado.
     *
     * @type {boolean}
     * @memberof BcRadioComponent
     */
    isChecked: boolean;
    /**
     * Valor seleccionado.
     *
     * @type {EventEmitter<any>}
     * @memberof BcRadioComponent
     */
    changeStateForParent: EventEmitter<any>;
    outline: boolean;
    constructor(radioGroup: BcRadioGroupComponent, helper: BcHelperService);
    ngOnInit(): void;
    /**
     * Cambia el estado al seleccionar elemento.
     *
     * @param {*} event
     * @memberof BcRadioComponent
     */
    toggle(event: any): void;
    /**
     * Habilita o deshabilita el label e input del radio.
     *
     * @param {boolean} isDisabled
     * @memberof BcRadioComponent
     */
    toogleDisabled(isDisabled: boolean): void;
    /**
     * Accesibilidad.
     *
     * @param {KeyboardEvent} event
     * @memberof BcRadioComponent
     */
    keyEvent(event: KeyboardEvent): void;
    get isRadioChecked(): boolean;
    get radioGroupName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcRadioComponent, [{ optional: true; host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcRadioComponent, "bc-radio", never, { "id": "id"; "name": "name"; "value": "value"; "enabled": "enabled"; }, { "changeStateForParent": "changeStateForParent"; }, never, ["*"]>;
}
