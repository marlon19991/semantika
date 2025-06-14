import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcInputSelectV2Behavior } from '@bancolombia/design-system-behaviors';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * componente Input Select V2
 *
 * @export
 * @class BcInputSelectV2Component
 * @implements {OnInit}
 * @implements {OnChanges}
 */
export declare class BcInputSelectV2Component extends BcGeneralInputComponent implements OnInit, OnChanges {
    private bcHelperService;
    /**
     * Permite configurar id de componente
     * Si no es definido es auto generado
     *
     * @memberof BcInputSelectV2Component
     */
    componentId: string;
    /**
     * Permite configurar el tipo: simple o multiple
     *
     * @memberof BcInputSelectV2Component
     */
    type: string;
    /**
     * Permite configurar el label principal que tambien es mostrado como placeholder
     *
     * @memberof BcInputSelectV2Component
     */
    label: string;
    /**
     * Permite configurar el icono principal del componente
     *
     * @memberof BcInputSelectV2Component
     */
    iconName: string;
    /**
     * Permite configurar el texto de ayuda del componente
     *
     * @memberof BcInputSelectV2Component
     */
    helpText: string;
    /**
     * Permite configurar el el estado: disabled, error o default
     *
     * @memberof BcInputSelectV2Component
     */
    status: 'error' | 'disabled' | 'default';
    /**
     * Permite configurar el valor inicial del componente.
     *
     * @memberof BcInputSelectComponent
     */
    initialValue: string;
    /**
     * Objeto encargado de llenar las listas con las propiedades definidas.
     *
     * @memberof BcInputSelectV2Component
     */
    values: Array<{
        label: string;
        value: any;
        icon?: string;
    }>;
    /**
     * Funcion que se ejecutara cuando se seleccione una opcion
     *
     * @memberof BcInputSelectV2Component
     */
    onChangeValue: EventEmitter<any>;
    bcInputSelectV2Behavior: BcInputSelectV2Behavior;
    control: FormControl;
    componentReady: boolean;
    constructor(bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initInputSelect(): void;
    /**
     * Función que setea el estado del componente.
     *
     * @memberof BcInputSelectV2Component
     */
    setStatus(newStatus: 'error' | 'disabled' | 'default'): void;
    /**
     * Cambia el item seleccionado. Si se envia un string vacio se limpia la seleccion previa y estados.
     * Si son varios valores separar con coma, por ejemplo: 1,5,6
     *
     * @memberof BcInputSelectV2Component
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
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputSelectV2Component, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInputSelectV2Component, "bc-input-select-v2", never, { "componentId": "componentId"; "type": "type"; "label": "label"; "iconName": "iconName"; "helpText": "helpText"; "status": "status"; "initialValue": "initialValue"; "values": "values"; }, { "onChangeValue": "onChangeValue"; }, never, never>;
}
