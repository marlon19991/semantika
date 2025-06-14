import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcInputDateRangeComponent extends BcGeneralInputComponent implements OnInit, AfterViewInit {
    controlDirective: NgControl;
    private bcHelperService;
    private renderer;
    private elmRef;
    /**
     * elemento que hace referencia al behavior del InputDateRange
     *
     * @memberof BcInputDateRangeComponent
     */
    element: any;
    /**
     * Id del componente.
     *
     * @memberof BcInputDateRangeComponent
     */
    componentId: string;
    /**
     * Esta entrada es un string que contiene un  arreglo que nos indica el rango de días, meses o años para el calendario.
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    fastButtons: string;
    /**
     * Atributo rango de fechas.
     *
     * @type {[]}
     * @memberof BcInputDateRangeComponent
     */
    rangesText: [];
    /**
     * Esta entrada de tipo string nos indica la fecha minima seleccionable del calendario.
     *
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    minDate: string;
    /**
     * Esta entrada de tipo string nos indica la fecha maxima seleccionable del calendario.
     *
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    maxDate: string;
    /**
     * Esta entrada de tipo string nos indica el tipo de calendario, puede ser simple o puede ser de tipo split.
     *
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    CalendarHoliday: string;
    /**
     * Activa las validaciones automaticas de rangos y errores de escritura
     *
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    validatesInput: string;
    /**
     * Mensaje de error para el primer input
     *
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    errorText: string;
    /**
     * Mensaje de error para el segundo input
     *
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    errorTextTwo: string;
    /**
     * Mensaje success para el primer input
     *
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    successText: string;
    /**
     * Deshabilita el scroll del calendario dentro del componente
     *
     * @type {boolean}
     * @memberof BcInputDateRangeComponent
     */
    disabledScroll: boolean;
    /**
     * Lenguaje actual del componente
     *
     * @type {boolean}
     * @memberof BcInputDateRangeComponent
     */
    language: string;
    /**
     * Esta entrada de tipo string define los dias festivos del calendario
     *
     * @type {{ month: number, day: number }[]}
     * @memberof BcInputDateRangeComponent
     */
    holidayDates: {
        month: number;
        day: number;
    }[];
    /**
     * Mensaje success para el segundo input
     *
     * @type {string}
     * @memberof BcInputDateRangeComponent
     */
    successTextTwo: string;
    /**
     * Devuelve las fechas seleccionadas (inicio/fin)
     *
     * @memberof BcInputDateRangeComponent
     */
    updateValue: EventEmitter<number>;
    constructor(controlDirective: NgControl, bcHelperService: BcHelperService, renderer: Renderer2, elmRef: ElementRef);
    ngOnInit(): void;
    /**
     * Configura el behavior del input-date-range
     *
     * @memberof BcInputDateRangeComponent
     */
    ngAfterViewInit(): void;
    /**
     * Valida si los inpust tienen el estado error
     *
     * @memberof BcInputDateRangeComponent
     */
    validateErrorState(): void;
    /**
     * Obtiene el valor output del componente para emitir los cambios
     *
     * @memberof BcInputDateRangeComponent
     */
    dispatchValue(value: any): void;
    /**
     * Actualiza el value del componente y sus cambios
     *
     * @memberof BcInputDateRangeComponent
     */
    onInput(value: any): void;
    /**
     * Realiza actualizacion de los inputs
     *
     * @memberof BcInputDateRangeComponent
     */
    writeValue(value: any): void;
    /**
     * Limpia y actualiza los estados activos de los input
     *
     * @memberof BcInputDateRangeComponent
     */
    cleanInputsValue(): void;
    /**
     * Actualiza el estado disabled a el componente
     *
     * @memberof BcInputDateRangeComponent
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * Actualiza la clase a success del inputDate
     *
     * @memberof BcInputDateRangeComponent
     */
    successClassActive(): void;
    /**
     * Actualiza la clase a success del inputDateTwo
     *
     * @memberof BcInputDateRangeComponent
     */
    successClassActiveTwo(): void;
    /**
     * Actualiza la clase a error del inputDate
     *
     * @memberof BcInputDateRangeComponent
     */
    errorClassActive(): void;
    /**
     * Actualiza la clase a error del inputDateTwo
     *
     * @memberof BcInputDateRangeComponent
     */
    errorClassActiveTwo(): void;
    /**
     * Actualiza el estado default del inputDate
     *
     * @memberof BcInputDateRangeComponent
     */
    defaultClassActive(): void;
    /**
     * Actualiza el estado default del inputDateTwo
     *
     * @memberof BcInputDateRangeComponent
     */
    defaultClassActiveTwo(): void;
    /**
     * Cierra el calendario del InputDateRange
     *
     * @memberof BcInputDateRangeComponent
     */
    closeDropdown(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputDateRangeComponent, [{ optional: true; self: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInputDateRangeComponent, "bc-input-date-range", never, { "componentId": "componentId"; "fastButtons": "fastButtons"; "rangesText": "rangesText"; "minDate": "minDate"; "maxDate": "maxDate"; "CalendarHoliday": "CalendarHoliday"; "validatesInput": "validatesInput"; "errorText": "errorText"; "errorTextTwo": "errorTextTwo"; "successText": "successText"; "disabledScroll": "disabledScroll"; "language": "language"; "holidayDates": "holidayDates"; "successTextTwo": "successTextTwo"; }, { "updateValue": "updateValue"; }, never, ["*"]>;
}
