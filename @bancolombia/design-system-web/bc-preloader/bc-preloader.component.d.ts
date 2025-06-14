import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente preloader - sirve para precargar con un estilo tipo lazy load.
 *
 * @export
 * @class BcPreloaderComponent
 * @implements {OnInit}
 */
export declare class BcPreloaderComponent implements AfterViewInit {
    private elementRef;
    preloaderElement: HTMLElement;
    /**
     * Tipo de preloader.
     *
     * @type {('circle' | 'square' | 'line' | 'line-vertical')}
     * @memberof BcPreloaderComponent
     */
    type: 'circle' | 'square' | 'line' | 'line-vertical';
    /**
     * Ancho en píxeles(px) del preloader o 'full'.
     *
     * @memberof BcPreloaderComponent
     */
    width?: string;
    /**
     * Alto en píxeles(px) del preloader o 'full'.
     *
     * @memberof BcPreloaderComponent
     */
    height?: string;
    /**
     * Borde del componente (2 o 3).
     *
     * @memberof BcPreloaderComponent
     */
    borderRadius?: '2' | '3';
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    private updateStyle;
    private configureWidth;
    private setWidthStyleCustomProperty;
    private configureHeight;
    private setHeightStyleCustomProperty;
    private checkIsNumberWithoutCssUnits;
    private configureBorderRadius;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPreloaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcPreloaderComponent, "bc-preloader", never, { "type": "type"; "width": "width"; "height": "height"; "borderRadius": "borderRadius"; }, {}, never, never>;
}
