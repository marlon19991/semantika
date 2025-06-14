import { EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcCheckBoxGroupComponent } from './bc-checkbox-group/bc-checkbox-group.component';
import * as i0 from "@angular/core";
/**
 * Importa el componente de Checks con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcCheckboxComponent
 */
export declare class BcCheckboxComponent extends BcGeneralInputComponent implements AfterViewInit {
    private elmRef;
    controlDirective: NgControl;
    private checkboxGroup;
    private helper;
    /**
     * Id del elemento checkbox.
     *
     * @type {string}
     * @memberof BcCheckboxComponent
     */
    id: string;
    /**
     * Nombre del checkbox.
     *
     * @type {string}
     * @memberof BcCheckboxComponent
     */
    name: string;
    /**
     * Valor del checkbox.
     *
     * @type {string}
     * @memberof BcCheckboxComponent
     */
    currentValue: string;
    /**
     * Texto del checkbox que aparece a la derecha del mismo.
     *
     * @type {string}
     * @memberof BcCheckboxComponent
     */
    label: string;
    /**
     * Indica si el checkbox esta habilitado.
     *
     * @type {boolean}
     * @memberof BcCheckboxComponent
     */
    enabled: boolean;
    /**
     * Indica si el checkbox esta en estado check.
     *
     * @type {boolean}
     * @memberof BcCheckboxComponent
     */
    isChecked: boolean;
    /**
     * Define el componente como indeterminado.
     *
     * @type {boolean}
     * @memberof BcCheckboxComponent
     */
    indeterminate: boolean;
    /**
     * Valor cada vez que cambia el checkbox.
     *
     * @type {EventEmitter<boolean>}
     * @memberof BcCheckboxComponent
     */
    changeState: EventEmitter<boolean>;
    /**
     * Valor seleccionado.
     *
     * @type {EventEmitter<any>}
     * @memberof BcRadioComponent
     */
    changeStateForParent: EventEmitter<any>;
    outline: boolean;
    constructor(elmRef: ElementRef, controlDirective: NgControl, checkboxGroup: BcCheckBoxGroupComponent, helper: BcHelperService);
    ngAfterViewInit(): void;
    /**
     * Metodo que cambia el estado del checkbox y emite si esta seleccionado.
     *
     * @memberof BcCheckboxComponent
     */
    toggle(): void;
    toogleDisabled(isDisabled: boolean): void;
    get isCheckBoxChecked(): boolean;
    /**
     * Metodo para accesibilidad.
     *
     * @param {KeyboardEvent} event
     * @memberof BcCheckboxComponent
     */
    keyEvent(event: KeyboardEvent): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCheckboxComponent, [null, { optional: true; self: true; }, { optional: true; host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCheckboxComponent, "bc-checkbox", never, { "id": "id"; "name": "name"; "currentValue": "value"; "label": "label"; "enabled": "enabled"; "isChecked": "isChecked"; "indeterminate": "indeterminate"; }, { "changeState": "changeState"; "changeStateForParent": "changeStateForParent"; }, never, never>;
}
