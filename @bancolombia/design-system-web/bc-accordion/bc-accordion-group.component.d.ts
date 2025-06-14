import { ElementRef, AfterViewInit, EventEmitter, QueryList } from '@angular/core';
import { BcAccordionBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcAccordionHeaderComponent } from './bc-accordion-header/bc-accordion-header.component';
import * as i0 from "@angular/core";
/**
 * Importa el Acordeón para contener elementos
 *
 * @export
 * @class BcAccordionsGroupComponent
 * @implements {OnInit}
 */
export declare class BcAccordionGroupComponent implements AfterViewInit {
    private bcHelperService;
    private elementRef;
    /**
     * Define el comportamiento de evento expandir de la acordeón
     * Si es single, solo se podrá expandir una acordeón a la vez
     * es decir, al expandir una se cierra la que estaba activa.
     * Valor por defecto es false.
     *
     * @memberof BcAccordionGroupComponent
     */
    single: boolean;
    /**
     * Comportamiento del componente
     *
     * @type {BcAccordionBehavior}
     * @memberof BcAccordionGroupComponent
     */
    bcAccordionGroupBehavior: BcAccordionBehavior;
    /**
     * Evento que indica el index de una acordeón cuando esta es abierta o activada
     *
     * @type {EventEmitter<number>}
     * @memberof BcAccordionGroupComponent
     */
    select: EventEmitter<number>;
    headers: QueryList<BcAccordionHeaderComponent>;
    componentId: string;
    /**
     * Creates an instance of BcAccordionGroupComponent.
     * @param {ElementRef} elementRef
     * @memberof BcAccordionGroupComponent
     */
    constructor(bcHelperService: BcHelperService, elementRef: ElementRef);
    ngAfterViewInit(): void;
    private initBehavior;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAccordionGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcAccordionGroupComponent, "bc-accordions-group", never, { "single": "single"; "componentId": "componentId"; }, { "select": "select"; }, ["headers"], ["*"]>;
}
