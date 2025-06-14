import { EventEmitter, QueryList, AfterViewInit } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcButtonGroupComponent } from '../bc-button-group.component';
import * as i0 from "@angular/core";
/**
 * Importa el button group con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonGroupContentComponent
 */
export declare class BcButtonGroupContainerComponent implements AfterViewInit {
    private bcHelperService;
    private bcButtonGroupBehavior;
    /**
    * Esta salida emite el id del botón seleccionado.
    *
    * @type {EventEmitter<any>}
    * @memberof BcButtonGroupContentComponent
    */
    onchange: EventEmitter<any>;
    /**
      *
      * Id del componente.
      *
      * @type {string}
      * @memberof BcButtonGroupContentComponent
      */
    componentId: string;
    /**
     * Color del indicador del botón activo.
     * @type {string}
     * @memberof BcButtonGroupComponent
     */
    blackActiveIndicator: boolean;
    /**
   * Tamaño de letra de los botones.
   * @type {string}
   * @memberof BcButtonGroupComponent
   */
    fontSize: string;
    /**
     * Esta entrada permite indicar el nombre del grupo de botones, puede tener cualquier valor de tipo string.
     * @type {string}
     * @memberof BcButtonGroupContentComponent
     */
    groupName: string;
    childrens: QueryList<BcButtonGroupComponent>;
    onClick(target: any): void;
    constructor(bcHelperService: BcHelperService);
    ngAfterViewInit(): void;
    setNameForChildrens(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcButtonGroupContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcButtonGroupContainerComponent, "bc-button-group-container", never, { "blackActiveIndicator": "blackActiveIndicator"; "fontSize": "fontSize"; "groupName": "groupName"; }, { "onchange": "onchange"; }, ["childrens"], ["*"]>;
}
