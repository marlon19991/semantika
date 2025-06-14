import { EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcCheckBoxGroupComponent extends BcGeneralInputComponent {
    controlDirective: NgControl;
    /**
     * Indica si el checkbox esta habilitado
     *
     * @type {boolean}
     * @memberof BcCheckboxComponent
     */
    enabled: boolean;
    onDisabled: EventEmitter<boolean>;
    changeValue: EventEmitter<any>;
    constructor(controlDirective: NgControl);
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCheckBoxGroupComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCheckBoxGroupComponent, "bc-checkbox-group", never, { "enabled": "enabled"; }, { "onDisabled": "onDisabled"; "changeValue": "changeValue"; }, never, ["*"]>;
}
