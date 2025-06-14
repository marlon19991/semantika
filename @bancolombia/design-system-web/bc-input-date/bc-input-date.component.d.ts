import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente rango de fechas.
 *
 * @export
 * @class BcInputDateComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcInputDateComponent extends BcGeneralInputComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    controlDirective: NgControl;
    private bcHelperService;
    element: any;
    holidaysParse: any;
    disabled: any;
    /**
     * Id del componente.
     *
     * @memberof BcInputDateComponent
     */
    componentId: string;
    /**
     * Esta entrada de tipo string nos indica el tipo de calendario, puede ser simple o puede ser de tipo split.
     *
     * @type {string}
     * @memberof BcCalendarComponent
     */
    type: string;
    /**
     * Esta entrada de tipo string nos indica la fecha minima seleccionable del calendario.
     *
     * @type {string}
     * @memberof BcCalendarComponent
     */
    minDate: string;
    /**
     * Esta entrada de tipo string nos indica la fecha maxima seleccionable del calendario.
     *
     * @type {string}
     * @memberof BcCalendarComponent
     */
    maxDate: string;
    /**
     * Esta entrada de tipo string nos indica el tipo de calendario, puede ser simple o puede ser de tipo split.
     *
     * @type {string}
     * @memberof BcCalendarComponent
     */
    CalendarButton: string;
    /**
     * Esta entrada de tipo string nos indica el tipo de calendario, puede ser simple o puede ser de tipo split.
     *
     * @type {string}
     * @memberof BcCalendarComponent
     */
    CalendarFilter: string;
    /**
     * Esta entrada de tipo string nos indica el tipo de calendario, puede ser simple o puede ser de tipo split.
     *
     * @type {string}
     * @memberof BcCalendarComponent
     */
    CalendarHoliday: string;
    /**
    * Esta entrada de tupo string permite ver el formato de la fecha ya sea DD/MM/YY o solo mes y año o solo año.
    * por lo cual el type del INPUT tambien cambia dependiendo este tipo de dato siendo de tipo date si es fullDate y siendo
    * de tipo string si es mediumDate o shortDate
    * @type {('fullDate' | 'mediumDate' | 'shortDate')}
    * @memberof BcCalendarComponent
    */
    formatDate: 'fullDate' | 'mediumDate' | 'shortDate';
    /**
      * Validar el input automaticamente.
      *
      * @memberof BcInputDateComponent
      */
    validateInput: string;
    /**
      * Mensaje de error input.
      *
      * @memberof BcInputDateComponent
      */
    errorText: string;
    /**
      * Mensaje success input.
      *
      * @memberof BcInputDateComponent
      */
    successText: string;
    /**
      * Lenguaje actual del componente
      *
      * @memberof BcInputDateComponent
      */
    language: string;
    /**
     * Esta entrada de tipo string define los dias festivos del calendario
     *
     * @type {{ month: number, day: number }[]}
     * @memberof BcInputDateComponent
     */
    holidayDates: {
        month: number;
        day: number;
    }[];
    /**
     *
     *
     * @memberof BcInputDateComponent
     */
    updateValue: EventEmitter<number>;
    constructor(controlDirective: NgControl, bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    dispatchValue(value: any): void;
    onInput(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    /**
      * Cambia la clase del input a success.
      *
      * @memberof BcInputDateComponent
      */
    suceessClassActive(): void;
    /**
      * Cambia la clase del input a su estado por defecto.
      *
      * @memberof BcInputDateComponent
      */
    defaultClassActive(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputDateComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInputDateComponent, "bc-input-date", never, { "componentId": "componentId"; "type": "type"; "minDate": "minDate"; "maxDate": "maxDate"; "CalendarButton": "CalendarButton"; "CalendarFilter": "CalendarFilter"; "CalendarHoliday": "CalendarHoliday"; "formatDate": "formatDate"; "validateInput": "validateInput"; "errorText": "errorText"; "successText": "successText"; "language": "language"; "holidayDates": "holidayDates"; }, { "updateValue": "updateValue"; }, never, ["*"]>;
}
