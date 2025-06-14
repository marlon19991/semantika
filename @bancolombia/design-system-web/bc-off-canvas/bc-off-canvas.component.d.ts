import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcOffCanvasComponent implements AfterViewInit {
    private ref;
    private helperService;
    bcOffCanvasBehavior: any;
    constructor(ref: ElementRef, helperService: BcHelperService);
    /**
     * Id del offCanvas.
     *
     * @type {string}
     * @memberof BcOffCanvasComponent
     */
    id: string;
    /**
     * Tipo de offCanvas.
     *
     * @type {string}
     * @memberof BcOffCanvasComponent
     */
    tipoOffcanvas: 'horizontal' | 'vertical';
    /**
     * Backdrop Apagado.
     *
     * @type {string}
     * @memberof BcOffCanvasComponent
     */
    backdrop: 'off' | '';
    /**
     * Define la altura del componente horizontal
     *
     * @type {string}
     * @memberof BcOffCanvasComponent
     */
    alturaHorizontal: string;
    /**
   * Se ejecuta cuando el offCanvas es cerrado
   *
   * @type {EventEmitter<any>}
   * @memberof BcOffCanvasComponent
   */
    closed: EventEmitter<any>;
    ngAfterViewInit(): void;
    /**
     * Abre el offcanvas.
     *
     * @memberof BcOffCanvasComponent
     */
    openOffCanvas(): void;
    /**
   * Cierra el offcanvas.
   *
   * @param {any} param
   * @memberof BcOffCanvasComponent
   */
    closeOffCanvas(param: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcOffCanvasComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcOffCanvasComponent, "bc-off-canvas", never, { "id": "id"; "tipoOffcanvas": "tipoOffcanvas"; "backdrop": "backdrop"; "alturaHorizontal": "alturaHorizontal"; }, { "closed": "closed"; }, never, ["[offCanvasContent]"]>;
}
