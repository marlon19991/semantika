import { AfterViewInit } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Es un elemento visual que informa al usuario que se
 * está realizando un proceso dentro del sistema.
 *
 * @export
 * @class BcCircleLoadingComponent
 * @implements {AfterViewInit}
 */
export declare class BcCircleLoadingComponent implements AfterViewInit {
    private helper;
    /**
     * Comportamiento
     *
     * @type {BcCircleLoadingBehavior}
     * @memberof BcCircleLoadingComponent
     */
    private _bcCircleLoaderBehavior;
    /**
     * Texto principal del circle loading.
     *
     * @type {string}
     * @memberof BcCircleLoadingComponent
     */
    text: string;
    /**
     * Este atributo está siendo deprecado.
     * Tamaño del componente Loader.
     *
     * @type {string}
     * @memberof BcLoaderComponent
     * @deprecated el componente cuenta con un tamaño fijo de loader (xl)
     */
    sizeLoader: string;
    /**
     * Id del componente.
     *
     * @type {string}
     * @memberof BcCircleLoadingComponent
     */
    componentId: string;
    /**
     * Label de accesibilidad para circle loading.
     *
     * @type {string}
     * @memberof BcCircleLoadingComponent
     */
    accessibilityLabel: string;
    /**
     * Velocidad de giro del loader en segundos
     * Valor por default lo toma del componente BcLoader
     *
     * @type {string}
     * @memberof BcCircleLoadingComponent
     */
    speedLoader: any;
    /**
     * Muestra el circle loading.
     *
     * @memberof BcCircleLoadingComponent
     */
    showCircleLoading(): void;
    /**
     * Oculta el circle loading.
     *
     * @memberof BcCircleLoadingComponent
     */
    hideCircleLoading(): void;
    constructor(helper: BcHelperService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCircleLoadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCircleLoadingComponent, "bc-circle-loading", never, { "text": "text"; "sizeLoader": "sizeLoader"; "componentId": "componentId"; "accessibilityLabel": "accessibilityLabel"; "speedLoader": "speedLoader"; }, {}, never, never>;
}
