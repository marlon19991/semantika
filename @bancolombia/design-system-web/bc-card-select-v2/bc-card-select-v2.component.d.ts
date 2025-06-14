import { EventEmitter, AfterViewInit, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { BcCardProductV2Config, BcFooterButtonV2Config, BcCardSelectV2Style } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent, BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Componente Card Select
 *
 * @export
 * @class BcCardSelectV2Component
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcCardSelectV2Component extends BcGeneralInputComponent implements OnInit, AfterViewInit, AfterViewInit {
    private bcHelperService;
    private changeDetectorRef;
    /**
     * Esta entrada permite indicar un id único al componente dentro del DOM.
     *
     * @type {string}
     * @memberof BcCardSelectV2Component
     */
    componentId: string;
    /**
     * Esta entrada permite indicar el titulo para el card select.
     *
     * @type {string}
     * @memberof BcCardSelectV2Component
     */
    titleCardSelect: string;
    /**
     * Esta entrada permite indicar el subtitulo para el card select.
     *
     * @type {string}
     * @memberof BcCardSelectV2Component
     */
    subTitleCardSelect: string;
    /**
    * Configuración del botón del dropdown, acá se define el icono y el texto.
    *
    * @type {BcFooterButtonConfig}
    * @memberof BcCardSelectV2Component
    */
    configDropDownButton: BcFooterButtonV2Config;
    /**
     * Muestra el button del dropdown por defecto en falso
     * true | false
     *
     * @type {boolean}
     * @memberof BcCardSelectV2Component
     */
    showDropDowButton: boolean;
    /**
     * Esta entrada es el arreglo de configuración de las card del componente
     *
     * @type {Array<BcCardProductConfig>}
     * @memberof BcCardSelectV2Component
     */
    values: Array<BcCardProductV2Config>;
    /**
     * Esta entrada configura el valor por defecto.
     *
     * @type {string | number}
     * @memberof BcCardSelectV2Component
     */
    defaultValue: string | number;
    /**
    * Esta entrada habilita o deshabilita el componente.
    *
    * @type {boolean}
    * @memberof BcCardSelectV2Component
    */
    disabled: boolean;
    /**
    * Texto en caso de que no existan datos en el select
    *
    * @type {string}
    * @memberof BcCardSelectV2Component
    */
    messageNotData: string;
    /**
    * Texto en caso de que no existan datos en el select
    *
    * @type {string}
    * @memberof BcCardSelectV2Component
    */
    componentStyle: BcCardSelectV2Style;
    /**
  * Esta entrada permite reiniciar el componente
  *
  * @type {boolean}
  * @memberof BcCardSelectV2Component
  */
    resetComponent: boolean;
    /**
    * Esta entrada permite indicar el placeholder para el input search del card select.
    *
    * @type {string}
    * @memberof BcCardSelectV2Component
    */
    searchPlaceholder: string;
    /**
   * Permite ocultar la flecha
   *
   * @type {boolean}
   * @memberof BcCardSelectV2Component
   */
    hideArrow: boolean;
    /**
     * Evento que retorna el valor del item seleccionado.
     *
     * @type {(EventEmitter<any>)}
     * @memberof BcCardSelectV2Component
     */
    valueOutput: EventEmitter<any>;
    /**
     * Evento que se emite cuando se da clic al button action
     *
     * @type {(EventEmitter<any>)}
     * @memberof BcCardSelectV2Component
     */
    actionButtonOutput: EventEmitter<any>;
    /**
    * Cambios en el input del search del componente.
    *
    * @type {(EventEmitter<any>)}
    * @memberof BcCardSelectV2Component
    */
    changeValueOutput: EventEmitter<any>;
    /**
     * variable que hace referencia al comportamiento nativo del componente
     * @memberof BcCardSelectV2Component
     */
    bcCardSelectBehavior: any;
    /**
     * Valor actual
     * @memberof BcCardSelectV2Component
     */
    currentValue: any;
    /**
     * Configuración inicial del componente
     * @memberof BcCardSelectV2Component
     */
    config: {
        firstLoad: boolean;
    };
    /**
     * Configuración de los cambios del componente
     * @memberof BcCardSelectV2Component
     */
    onChanges: Subject<SimpleChanges>;
    constructor(bcHelperService: BcHelperService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): Promise<void>;
    /**
    * Registro y envío de los cambios del componente
    * @param {SimpleChanges} changes
    * @memberof BcCardSelectV2Component
    */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Destrucción del componente
     * @memberof BcCardSelectV2Component
     */
    ngOnDestroy(): void;
    /**
     * Inicialización y configuración del componente
     * @memberof BcCardSelectV2Component
     */
    initComponent(): void;
    /**
     *Captura de eventos desde el behavior y el emit de los mismos en el componente.
     * @memberof BcCardSelectV2Component
     */
    setEvents(): void;
    /**
     *Actualización del estado del componente con respecto a los parámetros.
     * @memberof BcCardSelectV2Component
     */
    setChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCardSelectV2Component, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCardSelectV2Component, "bc-card-select-v2", never, { "componentId": "componentId"; "titleCardSelect": "titleCardSelect"; "subTitleCardSelect": "subTitleCardSelect"; "configDropDownButton": "configDropDownButton"; "showDropDowButton": "showDropDowButton"; "values": "values"; "defaultValue": "defaultValue"; "disabled": "disabled"; "messageNotData": "messageNotData"; "componentStyle": "componentStyle"; "resetComponent": "resetComponent"; "searchPlaceholder": "searchPlaceholder"; "hideArrow": "hideArrow"; }, { "valueOutput": "valueOutput"; "actionButtonOutput": "actionButtonOutput"; "changeValueOutput": "changeValueOutput"; }, never, never>;
}
