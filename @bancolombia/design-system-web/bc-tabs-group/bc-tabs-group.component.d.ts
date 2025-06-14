import { EventEmitter, ChangeDetectorRef, DoCheck, AfterViewInit, NgZone, OnInit } from '@angular/core';
import { BcTabComponent } from './bc-tab/bc-tab.component';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
interface LabelTypeInterface {
    type: string;
    content: any;
    show: boolean;
    disabled: boolean;
}
/**
 * Componente tabs
 *
 * @export
 * @class BcTabsGroupComponent
 * @implements {DoCheck}
 * @implements {AfterViewInit}
 */
export declare class BcTabsGroupComponent implements DoCheck, AfterViewInit, OnInit {
    private changeDetector;
    private bcHelperService;
    private zone;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcTabsGroupComponent
     */
    componentId: string;
    /**
     * Indice.
     *
     * @type {number}
     * @memberof BcTabsGroupComponent
     */
    selectedIndex: number;
    /**
   * Orientación. (este parámetro próximamente será deprecado)
   * @memberof BcTabsGroupComponent
   */
    orientation: string;
    /**
     * Animación. (este parámetro próximamente será deprecado)
     * @memberof BcTabsGroupComponent
     */
    animation: boolean;
    /**
     * Ocultar flechas. (este parámetro próximamente será deprecado)
     *
     * @type {boolean}
     * @memberof BcTabsGroupComponent
     */
    hiddenArrows: boolean;
    /**
    * Distribucion de los tabs. (este parámetro próximamente será deprecado)
    *
    * @type {string}
    * @memberof BcTabsGroupComponent
    */
    justifyContent: string;
    /**
     * Alineación de las tabs a la derecha, por defecto esta en false. (este parámetro próximamente será deprecado)
     * @memberof BcTabsGroupComponent
     */
    right: boolean;
    /**
     * Alineación de las tabs a la izquierda, por defecto esta en false. (este parámetro próximamente será deprecado)
     * @memberof BcTabsGroupComponent
     */
    left: boolean;
    /**
     * Parámetro para denotar el tipo de tab cuando está seleccionado
     *
     * @type {('regular | contrast')}
     * @memberof BcTabsGroupComponent
     */
    tabType: string;
    /**
     * Parámetro para posicionar el lugar del ícono
     *
     * @type {('left | right')}
     * @memberof BcTabsGroupComponent
     */
    iconPosition: string;
    /**
     * Muestra el valor al cambiar el tab
     *
     * @memberof BcTabsGroupComponent
     */
    /**
     * Define si tiene o no tiene brackound el tab (este parámetro próximamente será deprecado)
     * Por defecto es false   true | false
     * @type {string}
     * @memberof BcTabsGroupComponent
     */
    backgroundTab: boolean;
    changeState: EventEmitter<number>;
    tabsElements: BcTabComponent[];
    headerTab: LabelTypeInterface[];
    bcTabsGroupBehavior: any;
    tabClass: string;
    status: boolean;
    currentIndex: number;
    constructor(changeDetector: ChangeDetectorRef, bcHelperService: BcHelperService, zone: NgZone);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnInit(): void;
    /**
     * Permite actualizar el contenido desde un ámbito externo.
     *
     * @memberof BcTabsGroupComponent
     */
    updateState(): void;
    /**
     * Inicializa el arreglo de títulos dentro del Tab, ya sea un ngTemplate o un string.
     *
     * @private
     * @memberof BcTabsGroupComponent
     */
    private initLabel;
    /**
     * Actualiza la clase padre según la orientación y el tema del componente.
     *
     * @memberof BcTabsGroupComponent
     */
    setStyleClass(): void;
    /**
     * Evento que se ejecuta cuando seleccionan un tab
     *
     * @memberof BcTabsGroupComponent
     */
    onSelectedTab(index: number): void;
    /**
     * Devuelve el index del tab actual seleccionado
     *
     * @memberof BcTabsGroupComponent
     */
    getCurrentIndex(): number;
    /**
    * Selecciona un tab
    *
    * @memberof BcTabsGroupComponent
    */
    selectIndex(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTabsGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTabsGroupComponent, "bc-tabs-group", never, { "componentId": "componentId"; "selectedIndex": "selectedIndex"; "orientation": "orientation"; "animation": "animation"; "hiddenArrows": "hiddenArrows"; "justifyContent": "justifyContent"; "right": "right"; "left": "left"; "tabType": "tabType"; "iconPosition": "iconPosition"; "backgroundTab": "backgroundTab"; }, { "changeState": "changeState"; }, ["tabsElements"], ["*"]>;
}
export {};
