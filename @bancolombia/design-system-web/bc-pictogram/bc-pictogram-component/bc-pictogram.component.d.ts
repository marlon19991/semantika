import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BcConfigPictogramModule } from '../bc-config-pictogram-module';
import * as i0 from "@angular/core";
/**
 * pictograms del showcase
 * @export
 * @class BcPictogramaComponent
 */
export declare class BcPictogramComponent implements OnInit {
    private elementRef;
    private renderer;
    private config;
    /**
     * Tamaño en pixeles del recurso. Por defecto son 100px
     * @type {string}
     * @memberof BcPictogramaComponent
     */
    size: string;
    /**
     * Accesibilidad, texto alternativo para el pictograma
     * @type {string}
     * @memberof BcPictogramaComponent
     */
    alt: string;
    /**
     * Nombre del recurso visual a usar, será una imagen svg.
     * @type {string}
     * @memberof BcPictogramaComponent
     */
    name: string;
    /**
     * Clase del pictrograma
     * @type {string}
     * @memberof BcPictogramaComponent
     */
    class: string;
    get hostClasses(): string;
    /**
     * @param elementRef Referencia del host
     * @param ariaHidden Se toma el valor del parametro aria-hidden, si no existe el atributo se pone en true
     */
    constructor(elementRef: ElementRef<HTMLElement>, ariaHidden: string, renderer: Renderer2, config: BcConfigPictogramModule);
    /**
     * Inicializa el componente
     * @memberof BcPictogramaComponent
     */
    ngOnInit(): void;
    /**
     * Se dispara cada que se dectecta un cambio
     * @memberof BcPictogramaComponent
     */
    ngOnChanges(): void;
    /**
     * Construye el pictograma
     * @memberof BcPictogramaComponent
     */
    private buildPictogram;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPictogramComponent, [null, { attribute: "aria-hidden"; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcPictogramComponent, "bc-pictogram", never, { "size": "size"; "alt": "alt"; "name": "name"; "class": "class"; }, {}, never, ["*"]>;
}
