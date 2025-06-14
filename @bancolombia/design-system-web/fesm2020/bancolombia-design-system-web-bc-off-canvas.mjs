import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BcOffCanvasBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

class BcOffCanvasComponent {
    constructor(ref, helperService) {
        this.ref = ref;
        this.helperService = helperService;
        /**
         * Id del offCanvas.
         *
         * @type {string}
         * @memberof BcOffCanvasComponent
         */
        this.id = this.helperService.getId(this);
        /**
         * Tipo de offCanvas.
         *
         * @type {string}
         * @memberof BcOffCanvasComponent
         */
        this.tipoOffcanvas = 'vertical';
        /**
         * Backdrop Apagado.
         *
         * @type {string}
         * @memberof BcOffCanvasComponent
         */
        this.backdrop = '';
        /**
         * Define la altura del componente horizontal
         *
         * @type {string}
         * @memberof BcOffCanvasComponent
         */
        this.alturaHorizontal = '';
        /**
       * Se ejecuta cuando el offCanvas es cerrado
       *
       * @type {EventEmitter<any>}
       * @memberof BcOffCanvasComponent
       */
        this.closed = new EventEmitter();
        this.bcOffCanvasBehavior = new BcOffCanvasBehavior();
    }
    ngAfterViewInit() {
        this.bcOffCanvasBehavior.setId(this.id);
        this.bcOffCanvasBehavior.setUp();
    }
    /**
     * Abre el offcanvas.
     *
     * @memberof BcOffCanvasComponent
     */
    openOffCanvas() {
        this.bcOffCanvasBehavior.open();
    }
    /**
   * Cierra el offcanvas.
   *
   * @param {any} param
   * @memberof BcOffCanvasComponent
   */
    closeOffCanvas(param) {
        this.bcOffCanvasBehavior.close();
        this.closed.emit(param);
    }
}
BcOffCanvasComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcOffCanvasComponent, deps: [{ token: i0.ElementRef }, { token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcOffCanvasComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcOffCanvasComponent, selector: "bc-off-canvas", inputs: { id: "id", tipoOffcanvas: "tipoOffcanvas", backdrop: "backdrop", alturaHorizontal: "alturaHorizontal" }, outputs: { closed: "closed" }, ngImport: i0, template: "<section class=\"bc-off-canvas\" [id]=\"id\" [attr.type]=\"tipoOffcanvas\" [attr.backdrop]=\"backdrop\">\n    <aside attr.style=\"height:{{alturaHorizontal}}\" >\n        <section>\n            <button aria-label=\"cerrar\">error</button>\n        </section>\n        <div >\n            <ng-content select=\"[offCanvasContent]\"></ng-content>\n        </div>\n    </aside>\n</section>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcOffCanvasComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-off-canvas', template: "<section class=\"bc-off-canvas\" [id]=\"id\" [attr.type]=\"tipoOffcanvas\" [attr.backdrop]=\"backdrop\">\n    <aside attr.style=\"height:{{alturaHorizontal}}\" >\n        <section>\n            <button aria-label=\"cerrar\">error</button>\n        </section>\n        <div >\n            <ng-content select=\"[offCanvasContent]\"></ng-content>\n        </div>\n    </aside>\n</section>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], tipoOffcanvas: [{
                type: Input
            }], backdrop: [{
                type: Input
            }], alturaHorizontal: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });

class BcOffCanvasModule {
}
BcOffCanvasModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcOffCanvasModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcOffCanvasModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcOffCanvasModule, declarations: [BcOffCanvasComponent], imports: [CommonModule, BcIconModule], exports: [BcOffCanvasComponent] });
BcOffCanvasModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcOffCanvasModule, imports: [[CommonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcOffCanvasModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcOffCanvasComponent],
                    imports: [CommonModule, BcIconModule],
                    exports: [BcOffCanvasComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcOffCanvasComponent, BcOffCanvasModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-off-canvas.mjs.map
