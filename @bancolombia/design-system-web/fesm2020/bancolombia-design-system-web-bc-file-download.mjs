import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcFileDownloadBehavior, BcAccordionBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcAvatarModule } from '@bancolombia/design-system-web/bc-avatar';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcAccordionModule } from '@bancolombia/design-system-web/bc-accordion';
import { BcLoaderModule } from '@bancolombia/design-system-web/bc-loader';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';

/**
* .
* El componente file download permite descargar archivos.
*
* @export
* @class BcFileDownloadComponent
* @implements {AfterViewInit}
*/
class BcFileDownloadComponent {
    constructor(helper, el) {
        this.helper = helper;
        this.el = el;
        this.iconHead = 'download';
        /**
       *Indica el id para el comportamiento del componente.
       * @memberof BcFileDownloadComponent
       */
        this.componentId = this.helper.getId(this);
        /**
         * Estado de la descarga.
         *
         * @type {string}
         * @memberof BcFileDownloadComponent
         */
        this.status = new EventEmitter();
        this.bcFileDownloadBehavior = new BcFileDownloadBehavior();
        this.bcAccordionBehavior = new BcAccordionBehavior();
        this.accordionId = this.componentId + 'accordion';
        this.element = new BcFileDownloadBehavior();
        this.bcFileDownloadBehavior.emitEvent = (value) => {
            this.dispatchValue(value);
        };
    }
    ngOnChanges(changes) {
        if (changes.url) {
            if (changes.url.currentValue) {
                this.bcFileDownloadBehavior.createRow(changes.url.currentValue, null, this.nameFile);
            }
        }
        if (changes.file) {
            if (changes.file.currentValue) {
                this.bcFileDownloadBehavior.convertToBinary(null, changes.file.currentValue, this.nameFile);
            }
        }
    }
    ngAfterViewInit() {
        this.bcAccordionBehavior.setId(this.accordionId);
        this.bcAccordionBehavior.setUp();
        this.bcFileDownloadBehavior.setId(this.componentId);
        this.bcFileDownloadBehavior.setUp();
    }
    /**
     * Función que muestra el estado del componente
     *
     * @memberof BcFileDownloadComponent
     */
    dispatchValue(value) {
        this.status.emit(value);
    }
}
BcFileDownloadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFileDownloadComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcFileDownloadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcFileDownloadComponent, selector: "bc-file-download", inputs: { componentId: "componentId", url: "url", file: "file", nameFile: "nameFile" }, outputs: { status: "status" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-file-download-container bc-file-download-accordion bc-col-xs-6 bc-col-sm-6 bc-col-md-6 bc-col-lg-6 bc-col-xl-6\" role=\"group\" [id]=\"componentId\">\n    <div class=\"bc-accordions-group\" role=\"group\" [id]=\"accordionId\">\n        <article class=\"bc-accordion bc-accordion-basic\" [id]=\"accordionId-1\">\n            <header aria-expanded=\"false\" [attr.aria-controls]=\"accordionId-1\" id=\"super-basic-header\" aria-labelledby=\"accordion-title-super-basic\">\n                <section class=\"bc-accordion-header-left\">\n                    <figure class=\"bc-file-download-icon\"><em class=\"bc-icon bc-sm\" alt=\"Icono de descarga\">download</em></figure>\n                    \n                        <div\n                          class=\"bc-progress-bar bc-file-download-loader\"\n                          type=\"circle\"\n                          value=\"0\"\n                          color=\"yellow\"\n                          diameter=\"32\"\n                         \n                        ></div>\n\n                    <section class=\"bc-accordion-text-container bc-px-2\">\n                        <p class=\"bc-accordion-title\"></p>\n                        <p class=\"bc-file-download-accordion-subtitle bc-text-brand-complementary-01\"></p>\n                    </section>\n                </section>\n                <section class=\"bc-accordion-header-right\"><em class=\"bc-icon bc-sm bc-toggle-button\" alt=\"Flecha hacia abajo para abrir el acorde\u00F3n\" aria-hidden=\"true\">arrow2-down</em></section>\n            </header>\n            <section class=\"bc-accordion-content bc-file-download-rowsContainer\" role=\"region\" aria-labelledby=\"super-basic-header\"></section>\n        </article>\n    </div>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFileDownloadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-file-download', styles: [], template: "<div class=\"bc-file-download-container bc-file-download-accordion bc-col-xs-6 bc-col-sm-6 bc-col-md-6 bc-col-lg-6 bc-col-xl-6\" role=\"group\" [id]=\"componentId\">\n    <div class=\"bc-accordions-group\" role=\"group\" [id]=\"accordionId\">\n        <article class=\"bc-accordion bc-accordion-basic\" [id]=\"accordionId-1\">\n            <header aria-expanded=\"false\" [attr.aria-controls]=\"accordionId-1\" id=\"super-basic-header\" aria-labelledby=\"accordion-title-super-basic\">\n                <section class=\"bc-accordion-header-left\">\n                    <figure class=\"bc-file-download-icon\"><em class=\"bc-icon bc-sm\" alt=\"Icono de descarga\">download</em></figure>\n                    \n                        <div\n                          class=\"bc-progress-bar bc-file-download-loader\"\n                          type=\"circle\"\n                          value=\"0\"\n                          color=\"yellow\"\n                          diameter=\"32\"\n                         \n                        ></div>\n\n                    <section class=\"bc-accordion-text-container bc-px-2\">\n                        <p class=\"bc-accordion-title\"></p>\n                        <p class=\"bc-file-download-accordion-subtitle bc-text-brand-complementary-01\"></p>\n                    </section>\n                </section>\n                <section class=\"bc-accordion-header-right\"><em class=\"bc-icon bc-sm bc-toggle-button\" alt=\"Flecha hacia abajo para abrir el acorde\u00F3n\" aria-hidden=\"true\">arrow2-down</em></section>\n            </header>\n            <section class=\"bc-accordion-content bc-file-download-rowsContainer\" role=\"region\" aria-labelledby=\"super-basic-header\"></section>\n        </article>\n    </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], url: [{
                type: Input
            }], file: [{
                type: Input
            }], nameFile: [{
                type: Input
            }], status: [{
                type: Output
            }] } });

class BcFileDownloadModule {
}
BcFileDownloadModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFileDownloadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcFileDownloadModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFileDownloadModule, declarations: [BcFileDownloadComponent], imports: [BcIconModule, CommonModule, BcAvatarModule, BcAccordionModule, BcLoaderModule, BcTooltipModule], exports: [BcFileDownloadComponent] });
BcFileDownloadModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFileDownloadModule, imports: [[BcIconModule, CommonModule, BcAvatarModule, BcAccordionModule, BcLoaderModule, BcTooltipModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFileDownloadModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcFileDownloadComponent],
                    imports: [BcIconModule, CommonModule, BcAvatarModule, BcAccordionModule, BcLoaderModule, BcTooltipModule],
                    exports: [BcFileDownloadComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcFileDownloadComponent, BcFileDownloadModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-file-download.mjs.map
