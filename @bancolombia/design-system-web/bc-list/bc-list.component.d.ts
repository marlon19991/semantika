import { OnInit, EventEmitter } from '@angular/core';
import { BcListBehavior, BcDropdownBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcHeaderNavItem } from '@bancolombia/design-system-web/bc-header';
import * as i0 from "@angular/core";
/**
 * Componente estilo cargando
 *
 * @export
 * @class BcListComponent
 * @implements {AfterViewInitnit}
 */
export declare class BcListComponent implements OnInit {
    private bcHelper;
    bcListBehavior: BcListBehavior;
    bcDropdownBehavior: BcDropdownBehavior;
    /**
     * Casilla para seleccionar un item o varios, es opcional.
     *
     * @type {boolean}
     * @memberof BcListComponent
     */
    checkbox: boolean;
    /**
    * Dato principal que permite identificar la fila ,es obligatorio, puede tener cualquier valor string.
    *
    * @type {string}
    * @memberof BcListComponent
    */
    mainContent: string;
    /**
   * Dato principal con variante de alineacion,es opcional, puede tener cualquier valor string.
   *
   * @type {string}
   * @memberof BcListComponent
   */
    mainContent2: string;
    /**
     * La lista permite un minimo de 3 datos, este dato es obligatorio.
     *
     * @type {string}
     * @memberof BcListComponent
     */
    contentData1: string;
    /**
    * La lista permite un minimo de 3 datos, este dato es obligatorio.
    *
    * @type {string}
    * @memberof BcListComponent
    */
    contentData2: string;
    /**
     * La lista permite un minimo de 3 datos y un maximo de 5, este dato es opcional.
     *
     * @type {string}
     * @memberof BcListComponent
     */
    contentData3: string;
    /**
    * La lista permite un minimo de 3 datos y un maximo de 5, este dato es opcional.
    *
    * @type {string}
    * @memberof BcListComponent
    */
    contentData4: string;
    /**
    * Nombre del ícono que ejecuta una acción.
    *
    * @memberof BcListComponent
    */
    actionIcon: string;
    /**
   * Icono acompañante de texto del icono accionable.
   *
   * @type {string}
   * @memberof BcListComponent
   */
    contentIcon: string;
    /**
    * Texto de opciones del icono accionable.
    *
    * @type {string}
    * @memberof BcListComponent
    */
    contentText: string;
    /**
   * Id del componente.
   *
   * @memberof BcHeaderItemMenuComponent
   */
    itemId: string;
    /**
     *  itemType define el tipo de icono a mostrar pueden ser tipo user o logout.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    itemType: 'any' | 'user' | 'logout';
    /**
     * Define el icono a mostrar en cada item del menú.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    icon: string;
    /**
     * Define el texto a mostrar en cada item del menú.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    text: string;
    /**
     * Define el texto cuando se quiere colocar en una segunda línea ejemplo: el numero de NIT.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    subText: string;
    /**
     * Define la url a la cual vamos a redirigir cada enlace del menú.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    route: string;
    /**
     * Define si el item del menú tiene tiene una lista desplegable.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    isDropdown: boolean;
    /**
     * Define la lista de elementos que va a contener el dropDown.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    dropdownList: Array<BcHeaderNavItem>;
    /**
     * Define el tipo de avatar que se va a mostrar en el menú.
     *
     * @memberof BcHeaderItemMenuComponent
     */
    userAvatar: string;
    /**
     * Evento de salida que indica la opción seleccionada en el dropdown
     *
     * @type {EventEmitter<any>}
     * @memberof BcHeaderItemMenuComponent
     */
    optionSelected: EventEmitter<any>;
    /**
     * Id del del dropdown
     *
     * @memberof BcHeaderItemMenuComponent
     */
    dropdownId: string;
    /**
     * Inidica si el item está deshabilitado, por defecto es false
     *
     * @type {boolean}
     * @memberof BcHeaderItemMenuComponent
     */
    isDisabled: boolean;
    /**
     * Id del item
     *
     * @type {string}
     * @memberof BcHeaderItemMenuComponent
     */
    componentId: string;
    headerDropdownChanged(event: any): void;
    constructor(bcHelper: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcListComponent, "bc-list", never, { "checkbox": "checkbox"; "mainContent": "mainContent"; "mainContent2": "mainContent2"; "contentData1": "contentData1"; "contentData2": "contentData2"; "contentData3": "contentData3"; "contentData4": "contentData4"; "actionIcon": "actionIcon"; "contentIcon": "contentIcon"; "contentText": "contentText"; "itemId": "itemId"; "itemType": "itemType"; "icon": "icon"; "text": "text"; "subText": "subText"; "route": "route"; "isDropdown": "isDropdown"; "dropdownList": "dropdownList"; "userAvatar": "userAvatar"; "isDisabled": "isDisabled"; "componentId": "componentId"; }, { "optionSelected": "optionSelected"; }, never, never>;
}
