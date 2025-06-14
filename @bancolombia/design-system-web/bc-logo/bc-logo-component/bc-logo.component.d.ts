import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BcConfigLogoModule } from '../bc-config-logo-module';
import * as i0 from "@angular/core";
/**
 * logos del showcase
 * @export
 * @class BcLogoComponent
 */
export declare class BcLogoComponent implements OnInit {
    private elementRef;
    private renderer;
    private config;
    /**
     * Tamaño en pixeles del recurso. Por defecto son 100px
     * @type {string}
     * @memberof BcLogoComponent
     */
    size: string;
    /**
     * Accesibilidad, texto alternativo para el logo
     * @type {string}
     * @memberof BcLogoComponent
     */
    alt: string;
    /**
     * Nombre del recurso visual a usar, será una imagen svg.
     * @type {string}
     * @memberof BcLogoComponent
     */
    name: string;
    /**
     * Clase del logo
     * @type {string}
     * @memberof BcLogoComponent
     */
    class: string;
    get hostClasses(): string;
    /**
     * @param elementRef Referencia del host
     * @param ariaHidden Se toma el valor del parametro aria-hidden, si no existe el atributo se pone en true
     */
    constructor(elementRef: ElementRef<HTMLElement>, ariaHidden: string, renderer: Renderer2, config: BcConfigLogoModule);
    /**
     * Inicializa el componente
     * @memberof BcLogoComponent
     */
    ngOnInit(): void;
    /**
     * Se dispara cada que se dectecta un cambio
     * @memberof BcLogoComponent
     */
    ngOnChanges(): void;
    /**
     * Construye el logo
     * @memberof BcLogoComponent
     */
    private buildLogo;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcLogoComponent, [null, { attribute: "aria-hidden"; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcLogoComponent, "bc-logo", never, { "size": "size"; "alt": "alt"; "name": "name"; "class": "class"; }, {}, never, ["*"]>;
}
