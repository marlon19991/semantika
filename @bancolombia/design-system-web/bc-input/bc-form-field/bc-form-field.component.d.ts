import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Contenedor del input
 *
 * @export
 * @class BcFormFieldComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcFormFieldComponent extends BcGeneralInputComponent implements OnInit, AfterViewInit {
    controlDirective: NgControl;
    private elmRef;
    private bcHelperService;
    private renderer;
    bcInputDateBehavior: any;
    bcInputBehavior: any;
    element: any;
    /**
     * Tipo de input (ingresar los tipos)
     *
     * @memberof BcFormFieldComponent
     */
    inputType: string;
    /**
     * Tipo de calendario.
     *
     * @type {string}
     * @memberof BcFormFieldComponent
     */
    calendarType: string;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcFormFieldComponent
     */
    id: string;
    updateValue: EventEmitter<number>;
    constructor(controlDirective: NgControl, elmRef: ElementRef, bcHelperService: BcHelperService, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    validateErrorState(): void;
    dispatchValue(value: any): void;
    onInput(value: any): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcFormFieldComponent, [{ optional: true; self: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcFormFieldComponent, "bc-form-field", never, { "inputType": "inputType"; "calendarType": "calendarType"; "id": "id"; }, { "updateValue": "updateValue"; }, never, ["*"]>;
}
