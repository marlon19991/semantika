import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BcConfigStrokeModule } from '../bc-config-stroke-module';
import * as i0 from "@angular/core";
/**
 * strokes del showcase
 * @export
 * @class BcStrokeComponent
 */
export declare class BcStrokeComponent implements OnInit {
    private elementRef;
    private renderer;
    private config;
    /**
     * Tamaño en pixeles del recurso. Por defecto son 100px
     * @type {string}
     * @memberof BcStrokeComponent
     */
    size: string;
    /**
     * Accesibilidad, texto alternativo para el trazo
     * @type {string}
     * @memberof BcStrokeComponent
     */
    alt: string;
    /**
     * Nombre del recurso visual a usar, será una imagen svg.
     * @type {string}
     * @memberof BcStrokeComponent
     */
    name: string;
    /**
     * Clase del stroke
     * @type {string}
     * @memberof BcStrokeComponent
     */
    class: string;
    get hostClasses(): string;
    /**
     * @param elementRef Referencia del host
     * @param ariaHidden Se toma el valor del parametro aria-hidden, si no existe el atributo se pone en true
     */
    constructor(elementRef: ElementRef<HTMLElement>, ariaHidden: string, renderer: Renderer2, config: BcConfigStrokeModule);
    /**
     * Inicializa el componente
     * @memberof BcStrokeComponent
     */
    ngOnInit(): void;
    /**
     * Se dispara cada que se dectecta un cambio
     * @memberof BcStrokeComponent
     */
    ngOnChanges(): void;
    /**
     * Construye el stroke
     * @memberof BcStrokeComponent
     */
    private buildStroke;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcStrokeComponent, [null, { attribute: "aria-hidden"; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcStrokeComponent, "bc-stroke", never, { "size": "size"; "alt": "alt"; "name": "name"; "class": "class"; }, {}, never, ["*"]>;
}
