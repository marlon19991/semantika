import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente tooltip
 *
 * @export
 * @class BcTooltipDirective
 * @implements {AfterViewInit}
 */
export declare class BcTooltipDirective implements AfterViewInit {
    private el;
    element: any;
    /**
     * Posición del tooltip
     * top | right | bottom | left.
     *
     * @memberof BcTooltipDirective
     */
    bcTooltipPosition: string;
    /**
     * Título del tooltip.
     *
     * @type {string}
     * @memberof BcTooltipDirective
     */
    bcTooltipTitle: string;
    /**
     * Texto que esta en el contenedor del tooltip.
     *
     * @memberof BcTooltipDirective
     */
    bcTooltipText: string;
    /**
     * Texto del botón.
     *
     * @memberof BcTooltipDirective
     */
    bcTooltipButtonText: any;
    /**
     * Padre del tooltip
     * para controlar el scroll
     *
     * @type {string}
     * @memberof BcExpansionPanelComponent
     */
    bcTooltipParentElement: any;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    onResize(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcTooltipDirective, "[bc-tooltip]", never, { "bcTooltipPosition": "bcTooltipPosition"; "bcTooltipTitle": "bcTooltipTitle"; "bcTooltipText": "bcTooltipText"; "bcTooltipButtonText": "bcTooltipButtonText"; "bcTooltipParentElement": "bcTooltipParentElement"; }, {}, never>;
}
