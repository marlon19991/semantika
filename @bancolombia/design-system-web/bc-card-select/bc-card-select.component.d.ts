import { EventEmitter, AfterViewInit, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { BcCardProductConfig, BcFooterButtonConfig } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent, BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Componente Card Select
 *
 * @export
 * @class BcCardSelectComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcCardSelectComponent extends BcGeneralInputComponent implements OnInit, AfterViewInit, AfterViewInit {
    private bcHelperService;
    private changeDetectorRef;
    /**
     * Esta entrada permite indicar un id único al componente dentro del DOM.
     *
     * @type {string}
     * @memberof BcCardSelectComponent
     */
    componentId: string;
    /**
     * Esta entrada permite indicar el titulo para el card select.
     *
     * @type {string}
     * @memberof BcCardSelectComponent
     */
    titleCardSelect: string;
    /**
     * Esta entrada permite indicar el subtitulo para el card select.
     *
     * @type {string}
     * @memberof BcCardSelectComponent
     */
    subTitleCardSelect: string;
    /**
    * Configuración del botón del dropdown, acá se define el icono y el texto.
    *
    * @type {BcFooterButtonConfig}
    * @memberof BcCardSelectComponent
    */
    configDropDownButton: BcFooterButtonConfig;
    /**
     * Esta entrada de tipo number nos permite indicarle el número de columnas de ancho
     *
     * @type {number}
     * @memberof BcCardSelectComponent
     */
    sizeCardSelect: number;
    /**
     * Muestra el button del dropdown por defecto en falso
     * true | false
     *
     * @type {boolean}
     * @memberof BcCardSelectComponent
     */
    showDropDowButton: boolean;
    /**
      *  Esta entrada es el tipo de contenido
      * @type {any}
      * @memberof BcCardSelectComponent
      */
    typeContent: any;
    /**
      *  Esta entrada es el tipo de item
      * @type {any}
      * @memberof BcCardSelectComponent
      */
    typeItem: any;
    /**
      *  Esta entrada es el tipo de container
      * @type {any}
      * @memberof BcCardSelectComponent
      */
    typeContainer: any;
    /**
    *  Esta entrada es la posición
    * @type {any}
    * @memberof BcCardSelectComponent
    */
    position: any;
    /**
   * Input que permite configurar el tamaño de la fuente
   *
   * @type {number}
   * @memberof BcCardSelectComponent
   */
    sizeFont: number;
    /**
     * Esta entrada es el arreglo de configuración de las card del componente
     *
     * @type {Array<BcCardProductConfig>}
     * @memberof BcCardSelectComponent
     */
    values: Array<BcCardProductConfig>;
    /**
     * Esta entrada configura el valor por defecto.
     *
     * @type {string | number}
     * @memberof BcCardSelectComponent
     */
    defaultValue: string | number;
    /**
    * Esta entrada habilita o deshabilita el input del componente.
    *
    * @type {boolean}
    * @memberof BcCardSelectComponent
    */
    disabled: boolean;
    /**
  * Texto en caso de que no existan datos en el select
  *
  * @type {string}
  * @memberof BcCardSelectComponent
  */
    messageNotData: string;
    /**
    * Esta entrada permite indicar el placeholder para el input search del card select.
    *
    * @type {string}
    * @memberof BcCardSelectComponent
    */
    searchPlaceholder: string;
    /**
     * Salida del valor actual del componente.
     *
     * @type {(EventEmitter<any>)}
     * @memberof BcCardSelectComponent
     */
    valueOutput: EventEmitter<any>;
    /**
     * Evento que se emite cuando se da clic al button action
     *
     * @type {(EventEmitter<any>)}
     * @memberof BcCardSelectComponent
     */
    actionButtonOutput: EventEmitter<any>;
    /**
    * Cambios en el input del search del componente.
    *
    * @type {(EventEmitter<any>)}
    * @memberof BcCardSelectComponent
    */
    changeValueOutput: EventEmitter<any>;
    /**
     * variable que hace referencia al comportamiento nativo del componente
     * @memberof BcCardSelectComponent
     */
    bcCardSelectBehavior: any;
    /**
     * Valor actual
     * @memberof BcCardSelectComponent
     */
    currentValue: any;
    /**
     * Configuración inicial del componente
     * @memberof BcCardSelectComponent
     */
    config: {
        firstLoad: boolean;
    };
    /**
     * Configuración de los cambios del componente
     * @memberof BcCardSelectComponent
     */
    onChanges: Subject<SimpleChanges>;
    componentIdContent: string;
    constructor(bcHelperService: BcHelperService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    /**
    * Registro y envío de los cambios del componente
    * @param {SimpleChanges} changes
    * @memberof BcCardSelectComponent
    */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Destrucción del componente
     * @memberof BcCardSelectComponent
     */
    ngOnDestroy(): void;
    /**
     *Actualización de los valores del select del drop down
     * @param changes
     * @memberof BcCardSelectComponent
     */
    updateDropdownValues(changes: any): void;
    /**
     * Inicialización y configuración del componente
     * @memberof BcCardSelectComponent
     */
    initComponent(): void;
    /**
     * Obtener card seleccionada
     * @memberof BcCardSelectComponent
     */
    getCardSelected(): any;
    getTypeSubtitle(subtitle: any): boolean;
    /**
     * Configuración del componente despues de cargar la vista
     * @memberof BcCardSelectComponent
     */
    ngAfterViewInit(): Promise<void>;
    /**
     * Obtiene el item seleccionado del select
     * @param {BcCardProductConfig} card
     * @memberof BcCardSelectComponent
     */
    itemSelected(card: BcCardProductConfig): void;
    /**
     * Envia el valor por defecto seleccionado
     * @param {any} value
     * @memberof BcCardSelectComponent
     */
    writeValue(value: any): void;
    /**
     * Setea el estado
     * @memberof BcCardSelectComponent
     */
    setDisabledState(): void;
    /**
     * Emite el valor seleccionado cada que ocurre un cambio en el input
     * @memberof BcCardSelectComponent
     */
    changeEvent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCardSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCardSelectComponent, "bc-card-select", never, { "componentId": "componentId"; "titleCardSelect": "titleCardSelect"; "subTitleCardSelect": "subTitleCardSelect"; "configDropDownButton": "configDropDownButton"; "sizeCardSelect": "sizeCardSelect"; "showDropDowButton": "showDropDowButton"; "typeContent": "typeContent"; "typeItem": "typeItem"; "typeContainer": "typeContainer"; "position": "position"; "sizeFont": "sizeFont"; "values": "values"; "defaultValue": "defaultValue"; "disabled": "disabled"; "messageNotData": "messageNotData"; "searchPlaceholder": "searchPlaceholder"; }, { "valueOutput": "valueOutput"; "actionButtonOutput": "actionButtonOutput"; "changeValueOutput": "changeValueOutput"; }, never, never>;
}
