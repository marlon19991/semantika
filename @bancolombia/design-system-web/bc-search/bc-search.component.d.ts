import { OnInit, AfterViewChecked, ElementRef, EventEmitter, QueryList, AfterViewInit } from '@angular/core';
import { BcInputDateComponent } from '@bancolombia/design-system-web/bc-input-date';
import { BcSearchAdvancedItemComponent } from './bc-search-item-advanced/bc-search-item-advanced.component';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
interface ItemSearch {
    label: string;
    value: string;
}
interface ContentSelect {
    nameSearch: string;
    value?: any;
    typeSelect?: any;
    items: ItemSearch[];
}
interface DataSelect {
    [id: string]: ContentSelect;
}
/**
 * Componente busqueda
 *
 * @export
 * @class BcSearchComponent
 * @implements {OnInit}
 * @implements {AfterViewChecked}
 * @implements {AfterViewInit}
 */
export declare class BcSearchComponent implements OnInit, AfterViewChecked, AfterViewInit {
    private elRef;
    private bcHelperService;
    advanceItems: QueryList<BcSearchAdvancedItemComponent>;
    inputsDate: QueryList<BcInputDateComponent>;
    /**
   * Id del elemento.
   *
   * @type {string}
   * @memberOf BcPaginatorComponent
   */
    componentId: string;
    /**
     * items del componente search a buscar.
     *
     * @type {array}
     * @memberof BcSearchComponent
     */
    items: any[];
    /**
     * Items del componente select que van a ser renderizados, DEBE ser de tipo DataSelect y el nombre de
     * la propieda debe ser igual al ID del
     * input select el cual debe ser un objeto que DEBE tener los datos
     * nameSearch: string; value?: any; typeSelect?: any; items: ItemSearch[];
     * @type {('DataSelect')}
     * @memberof BcSearchComponent
     */
    itemsSelect: DataSelect;
    /**
       * Funcion que se ejecuta una promesa de manera sincrona antes de ejecutar la busqueda de elementos
       * @type {('Funcion(Promise(object))')}
       * @memberof BcSearchComponent
       */
    preSearchFunction: (data: any) => Promise<object>;
    /**
     * Evento que emite los Objetos filtrados para realizar busquedas externas  .
     *
     * @type {string}
     * @memberof BcSearchComponent
     */
    objFilter: EventEmitter<any>;
    /**
     * Evento que emite evento cuando se limpian los filtros.
     *
     * @type {CustomEvent}
     * @memberof BcSearchComponent
     */
    clearEvent: EventEmitter<any>;
    bcSearchBehavior: any;
    constructor(elRef: ElementRef, bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngAfterViewInit(): void;
    /**
     * CLimpia los filtros del search.
     *
     * @memberof BcInputDateRangeComponent
    */
    clearSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcSearchComponent, "bc-search", never, { "componentId": "componentId"; "items": "items"; "itemsSelect": "itemsSelect"; "preSearchFunction": "preSearchFunction"; }, { "objFilter": "objFilter"; "clearEvent": "clearEvent"; }, ["advanceItems", "inputsDate"], ["*"]>;
}
export {};
