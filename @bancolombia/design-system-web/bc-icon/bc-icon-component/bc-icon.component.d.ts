import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BcConfigIconModule } from '../bc-config-icon-module';
import * as i0 from "@angular/core";
export declare const SIZES: {
    xs: string;
    '2xs': string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
};
export declare type SizeType = 'xs' | '2xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
/**
 * Iconos del showcase
 * @export
 * @class BcIconComponent
 */
export declare class BcIconComponent implements OnInit {
    private elementRef;
    private renderer;
    private config;
    private cachedMatches;
    /**
     * aria-label.
     * @type {string}
     * @memberof BcIconComponent
     */
    ariaLabel: string;
    /**
     * Tamaño del ícono.
     * @type {SizeType}
     * @memberof BcIconComponent
     */
    size: SizeType;
    /**
     * Tamaño en pixeles del recurso. Por defecto son 100px
     * @type {string}
     * @memberof BcIconComponent
     */
    width: string;
    /**
     * Nombre del recurso visual a usar, puede ser un ícono o una imagen svg.
     * @type {string}
     * @memberof BcIconComponent
     */
    name: string;
    /**
     * Clase del ícono
     * @type {string}
     * @memberof BcIconComponent
     */
    class: string;
    get hostClasses(): string;
    /**
     * Configura el tamaño a usar para los íconos, por defecto se establece en SM
     * @returns
     * @memberof BcIconComponent
     */
    setSize(): string;
    /**
     * @param elementRef Referencia del host
     * @param ariaHidden Se toma el valor del parametro aria-hidden, si no existe el atributo se pone en true
     */
    constructor(elementRef: ElementRef<HTMLElement>, ariaHidden: string, renderer: Renderer2, config: BcConfigIconModule);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    validateIcon(): void;
    private buildIcon;
    private buildImage;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcIconComponent, [null, { attribute: "aria-hidden"; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcIconComponent, "bc-icon", never, { "ariaLabel": "ariaLabel"; "size": "size"; "width": "width"; "name": "name"; "class": "class"; }, {}, never, ["*"]>;
}
