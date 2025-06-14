import { AfterViewInit, OnChanges } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcProgressBarBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
 * Componente barra de progreso.
 * La barra de progreso indica el estado actual
 * de lo que se está procesando.
 * @export
 * @class BcProgressBarComponent
 */
export declare class BcProgressBarComponent implements OnChanges, AfterViewInit {
    private bcHelperService;
    /**
     *
     *
     * @type {number}
     * @memberof BcProgressBarComponent
     */
    value: number;
    /**
     *
     *
     * @type {('lineal' | 'circle' | 'semi-circle')}
     * @memberof BcProgressBarComponent
     */
    type: 'lineal' | 'circle' | 'semi-circle';
    /**
     *
     *
     * @type {string}
     * @memberof BcProgressBarComponent
     */
    color: string;
    /**
     *
     *
     * @type {number}
     * @memberof BcProgressBarComponent
     */
    diameter: number;
    /**
     * Id del elemento planner.
     *
     * @type {string}
     * @memberOf BcPlannerComponent
     */
    componentId: string;
    /**
     * Tipo de color del background.
     *
     * @type {string}
     * @memberOf BcPlannerComponent
     */
    backgroundColor: 'light' | 'dark';
    /**
     * Grosor del circulo
     *
     * @type {string}
     * @memberOf BcPlannerComponent
     */
    stroke: string;
    /**
     * Orientacion vertical o horizontal
     *
     * @type {string}
     * @memberOf BcPlannerComponent
     */
    orientation: string;
    constructor(bcHelperService: BcHelperService);
    /**
     *
     *
     * @type {BcProgressBarBehavior}
     * @memberof BcProgressBarComponent
     */
    behavior: BcProgressBarBehavior;
    firstTime: boolean;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcProgressBarComponent, "bc-progress-bar", never, { "value": "value"; "type": "type"; "color": "color"; "diameter": "diameter"; "componentId": "componentId"; "backgroundColor": "backgroundColor"; "stroke": "stroke"; "orientation": "orientation"; }, {}, never, ["*"]>;
}
