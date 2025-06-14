import { EventEmitter, ElementRef, OnChanges, SimpleChanges, AfterViewInit, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BcInputTokenBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent, BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente input token
 *
 * @export
 * @class BcTokenInputComponent
 * @implements {OnChanges, AfterViewInit}
 */
export declare class BcInputTokenComponent extends BcGeneralInputComponent implements OnInit, OnChanges, AfterViewInit {
    private bcHelperService;
    /**
     * Id del componente.
     *
     * @memberof BcInputTokenComponent
     */
    componentId: string;
    /**
     * Cantidad de inputs a mostrar.
     *
     * @memberof BcInputTokenComponent
     */
    numInputs: number;
    /**
     * Estado del input 'disabled' | 'error' | 'default'.
     *
     * @memberof BcInputTokenComponent
     */
    status: 'disabled' | 'error' | 'default';
    /**
     * Muestra la salida del input.
     *
     * @memberof BcInputTokenComponent
     */
    /**
     * Tipo unmasked
     *
     * @memberof BcInputTokenComponent
     */
    unmasked: string;
    /**
     * Mostrar mensajes informativos
     *
     * @memberof BcInputTokenComponent
     */
    showInfoMessage: string;
    /**
     * Mensaje informativo personalizado
     *
     * @memberof BcInputTokenComponent
     */
    infoMessage: string;
    /**
     * Mensaje error personalizado
     *
     * @memberof BcInputTokenComponent
     */
    errorMessage: string;
    changeValue: EventEmitter<number>;
    /**
     * Indica si todos los inputs tienen un valor valido. true | false.
     *
     * @memberof BcInputTokenComponent
     */
    validated: EventEmitter<boolean>;
    bcInputToken: ElementRef;
    bcTokenInputBehavior: BcInputTokenBehavior;
    control: FormControl;
    constructor(bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initInputToken(): void;
    /**
     * Función que setea el estado del componente.
     *
     * @memberof BcInputSelectV2Component
     */
    setStatus(newStatus: 'error' | 'disabled' | 'default'): void;
    /**
     * Cambia el item seleccionado. Se puede enviar un string vacio para limpiar el contenido
     *
     * @memberof BcInputTokenComponent
     */
    setValue(newValue: string): void;
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en disable() o enable()
     *
     * @memberof BcInputSelectV2Component
     */
    setDisabledState(disabled: boolean): void;
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en reset()
     *
     * @memberof BcInputSelectV2Component
     */
    writeValue(value: any): void;
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en reset() o writeValue()
     *
     * @memberof BcInputSelectV2Component
     */
    dispatchChange(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputTokenComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInputTokenComponent, "bc-input-token", never, { "componentId": "componentId"; "numInputs": "num-inputs"; "status": "status"; "unmasked": "unmasked"; "showInfoMessage": "show-info-message"; "infoMessage": "info-message"; "errorMessage": "error-message"; }, { "changeValue": "changeValue"; "validated": "validated"; }, never, never>;
}
