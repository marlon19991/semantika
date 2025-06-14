import { EventEmitter, OnInit } from '@angular/core';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class BcRadioGroupComponent extends BcGeneralInputComponent implements OnInit {
    controlDirective: NgControl;
    changeValue: EventEmitter<any>;
    onDisabled: EventEmitter<boolean>;
    disabled: boolean;
    defaultValue: any;
    name: string;
    background: 'regular' | 'dark';
    constructor(controlDirective: NgControl);
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    getIsDisabled(): boolean;
    writeValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcRadioGroupComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcRadioGroupComponent, "bc-radio-group", never, { "disabled": "disabled"; "defaultValue": "defaultValue"; "name": "name"; "background": "background"; }, { "changeValue": "changeValue"; "onDisabled": "onDisabled"; }, never, ["*"]>;
}
