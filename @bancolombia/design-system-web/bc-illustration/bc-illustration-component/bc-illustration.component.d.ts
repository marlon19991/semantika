import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BcConfigIllustrationModule } from '../bc-config-illustration-module';
import * as i0 from "@angular/core";
/**
 * Ilustraciones del showcase
 * @export
 * @class BcIllustrationComponent
 */
export declare class BcIllustrationComponent implements OnInit {
    private elementRef;
    private renderer;
    private config;
    /**
     * Tamaño en pixeles del recurso. Por defecto son 100px
     * @type {string}
     * @memberof BcIllustrationComponent
     */
    size: string;
    /**
     * Accesibilidad, texto alternativo para la ilustracion
     * @type {string}
     * @memberof BcIllustrationComponent
     */
    alt: string;
    /**
     * Nombre del recurso visual a usar, será una imagen svg.
     * @type {string}
     * @memberof BcIllustrationComponent
     */
    name: string;
    /**
     * Clase de la ilustracion
     * @type {string}
     * @memberof BcIllustrationComponent
     */
    class: string;
    get hostClasses(): string;
    /**
     * @param elementRef Referencia del host
     * @param ariaHidden Se toma el valor del parametro aria-hidden, si no existe el atributo se pone en true
     */
    constructor(elementRef: ElementRef<HTMLElement>, ariaHidden: string, renderer: Renderer2, config: BcConfigIllustrationModule);
    /**
     * Inicializa el componente
     * @memberof BcIllustrationComponent
     */
    ngOnInit(): void;
    /**
     * Se dispara cada que se dectecta un cambio
     * @memberof BcIllustrationComponent
     */
    ngOnChanges(): void;
    /**
     * Construye la ilustración
     * @memberof BcIllustrationComponent
     */
    private buildIllustration;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcIllustrationComponent, [null, { attribute: "aria-hidden"; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcIllustrationComponent, "bc-illustration", never, { "size": "size"; "alt": "alt"; "name": "name"; "class": "class"; }, {}, never, ["*"]>;
}
