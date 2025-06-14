import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Importa el componete de calendario con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcCalendarComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcCalendarComponent extends BcGeneralInputComponent implements OnInit, AfterViewInit {
    controlDirective: NgControl;
    private bcHelperService;
    element: any;
    holidaysParse: string;
    /**
     * Esta entrada de tipo string nos indica el tipo de calendario, puede ser simple o puede ser de tipo split.
     *
     * @type {string}
     * @memberof BcCalendarComponent
     */
    calendarType: string;
    /**
    * Esta entrada de tupo string permite ver el formato de la fecha ya sea DD/MM/YY o solo mes y año o solo año.
    * por lo cual el type del INPUT tambien cambia dependiendo este tipo de dato siendo de tipo date si es fullDate y siendo
    * de tipo string si es mediumDate o shortDate
    * @type {('fullDate' | 'mediumDate' | 'shortDate')}
    * @memberof BcCalendarComponent
    */
    formatDate: 'fullDate' | 'mediumDate' | 'shortDate';
    /**
     * Esta entrada nos identifica el calendario en el DOM.
     *
     * @memberof BcCalendarComponent
     */
    componentId: string;
    /**
     * Esta entrada es un string que contiene un  arreglo que nos indica el rango de días, meses o años para el calendario.
     * @type {string}
     * @memberof BcCalendarComponent
     */
    fastButtons: string;
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
     * Esta entrada de tipo string nos indica el tipo de calendario, puede ser simple o puede ser de tipo split.
     *
     * @type {string}
     * @memberof BcCalendarComponent
     */
    rangesText: string[];
    /**
     * Esta entrada de tipo string define los dias festivos del calendario
     *
     * @type {{ month: number, day: number }[]}
     * @memberof BcCalendarComponent
     */
    holidayDates: {
        month: number;
        day: number;
    }[];
    /**
     * Esta salida permite obtener el valor del componente.
     *
     * @memberof BcCalendarComponent
     */
    updateValue: EventEmitter<number>;
    fastButtonsString: string;
    constructor(controlDirective: NgControl, bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Función que muestra el valor del componente.
     *
     * @memberof BcCalendarComponent
     */
    dispatchValue(value: any): void;
    onInput(value: any): void;
    writeValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCalendarComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCalendarComponent, "bc-calendar", never, { "calendarType": "calendarType"; "formatDate": "formatDate"; "componentId": "componentId"; "fastButtons": "fastButtons"; "minDate": "minDate"; "maxDate": "maxDate"; "CalendarButton": "CalendarButton"; "CalendarFilter": "CalendarFilter"; "CalendarHoliday": "CalendarHoliday"; "rangesText": "rangesText"; "holidayDates": "holidayDates"; }, { "updateValue": "updateValue"; }, never, never>;
}
