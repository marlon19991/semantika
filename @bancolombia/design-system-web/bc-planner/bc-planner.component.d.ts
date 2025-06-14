import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BcHelperService, BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcPlannerBehavior, IBcPlannerItem, IBcPlannerChanges } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
 * Importa el componente de calendario con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcPlannerComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcPlannerComponent extends BcGeneralInputComponent implements OnInit, AfterViewInit, OnChanges {
    controlDirective: NgControl;
    private bcHelperService;
    private changeDetectorRef;
    element: BcPlannerBehavior;
    /**
     * Id del elemento planner.
     *
     * @type {string}
     * @memberOf BcPlannerComponent
     */
    componentId: string;
    /**
     * Dato de entrada que recibe los items a mostrar.
     *
     * @type {string}
     * @memberOf BcPlannerComponent
     */
    items: IBcPlannerItem[];
    /**
     *.
     *
     * @type {string}
     * @memberOf BcPlannerComponent
     */
    itemsTop: IBcPlannerItem[];
    /**
     * Dato de salida que muestra cuando cambia el valor.
     *
     * @type {string}
     * @memberOf BcPlannerComponent
     */
    changeValue: EventEmitter<any>;
    changesBehavior: IBcPlannerChanges;
    today: Date;
    todayMonth: number;
    todayYear: number;
    constructor(controlDirective: NgControl, bcHelperService: BcHelperService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    postItems(Items: IBcPlannerItem[]): IBcPlannerItem[];
    setMonth_Year(): void;
    onInput(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPlannerComponent, [{ optional: true; self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcPlannerComponent, "bc-planner", never, { "componentId": "componentId"; "items": "items"; "itemsTop": "itemsTop"; }, { "changeValue": "changeValue"; }, never, never>;
}
