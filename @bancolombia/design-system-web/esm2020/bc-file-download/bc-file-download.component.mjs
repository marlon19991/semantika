import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BcFileDownloadBehavior, BcAccordionBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
* .
* El componente file download permite descargar archivos.
*
* @export
* @class BcFileDownloadComponent
* @implements {AfterViewInit}
*/
export class BcFileDownloadComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZmlsZS1kb3dubG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtZmlsZS1kb3dubG9hZC9iYy1maWxlLWRvd25sb2FkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1maWxlLWRvd25sb2FkL2JjLWZpbGUtZG93bmxvYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQUtuRzs7Ozs7OztFQU9FO0FBUUQsTUFBTSxPQUFPLHVCQUF1QjtJQWlEbEMsWUFBb0IsTUFBdUIsRUFBUyxFQUFjO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQTdDbkUsYUFBUSxHQUFRLFVBQVUsQ0FBQztRQU16Qjs7O1NBR0M7UUFDUyxnQkFBVyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBeUIxRDs7Ozs7V0FLRztRQUNTLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSzNDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsV0FBVyxDQUFDO1FBRTlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztJQUVGLENBQUM7SUFFRixXQUFXLENBQUMsT0FBc0I7UUFDakMsSUFBRyxPQUFPLENBQUMsR0FBRyxFQUFDO1lBQ2IsSUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQztnQkFDMUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BGO1NBSUY7UUFFRCxJQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUM7WUFDZCxJQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDO2dCQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekY7U0FDRjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUM7Ozs7T0FJRztJQUVGLGFBQWEsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7O29IQTdGVyx1QkFBdUI7d0dBQXZCLHVCQUF1QixvTUN0QnJDLHF2REEyQkE7MkZETGMsdUJBQXVCO2tCQVBwQyxTQUFTOytCQUNHLGtCQUFrQixVQUVwQixFQUFFOytIQWtCQyxXQUFXO3NCQUFuQixLQUFLO2dCQU9FLEdBQUc7c0JBQVgsS0FBSztnQkFRRyxJQUFJO3NCQUFaLEtBQUs7Z0JBUUcsUUFBUTtzQkFBaEIsS0FBSztnQkFRSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0ZpbGVEb3dubG9hZEJlaGF2aW9yLCBCY0FjY29yZGlvbkJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuXG5cbi8qKlxuKiAuXG4qIEVsIGNvbXBvbmVudGUgZmlsZSBkb3dubG9hZCBwZXJtaXRlIGRlc2NhcmdhciBhcmNoaXZvcy5cbipcbiogQGV4cG9ydFxuKiBAY2xhc3MgQmNGaWxlRG93bmxvYWRDb21wb25lbnRcbiogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XG4qL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ2JjLWZpbGUtZG93bmxvYWQnLFxuICAgdGVtcGxhdGVVcmw6ICdiYy1maWxlLWRvd25sb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlczogW10sXG4gfSlcblxuXG4gZXhwb3J0IGNsYXNzIEJjRmlsZURvd25sb2FkQ29tcG9uZW50ICB7XG4gIGJjRmlsZURvd25sb2FkQmVoYXZpb3I7XG4gIGJjQWNjb3JkaW9uQmVoYXZpb3I7XG4gIHRpdHRsZTpzdHJpbmc7XG4gIGljb25IZWFkOnN0cmluZz0nZG93bmxvYWQnO1xuICBhY2NvcmRpb25JZDtcbiAgZWxlbWVudDtcblxuXG5cbiAgICAvKipcbiAgICpJbmRpY2EgZWwgaWQgcGFyYSBlbCBjb21wb3J0YW1pZW50byBkZWwgY29tcG9uZW50ZS5cbiAgICogQG1lbWJlcm9mIEJjRmlsZURvd25sb2FkQ29tcG9uZW50XG4gICAqL1xuICAgICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5oZWxwZXIuZ2V0SWQodGhpcyk7XG4gICAgLyoqXG4gICAqIFVybCBkZWwgYXJjaGl2byBhIGRlc2Nhcmdhci5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjRmlsZURvd25sb2FkQ29tcG9uZW50XG4gICAqL1xuICAgIEBJbnB1dCgpIHVybDogc3RyaW5nIDtcblxuICAvKipcbiAgICogUmVjaWJlIGVsIGFyY2hpdm8gYSBkZXNjYXJnYXIuXG4gICAqXG4gICAqIEB0eXBlIHtGaWxlfVxuICAgKiBAbWVtYmVyb2YgQmNGaWxlRG93bmxvYWRDb21wb25lbnRcbiAgICovXG4gICAgQElucHV0KCkgZmlsZTogRmlsZSA7XG5cbiAgLyoqXG4gICAqIE5vbWJyZSBlbCBhcmNoaXZvIGEgZGVzY2FyZ2FyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNGaWxlRG93bmxvYWRDb21wb25lbnRcbiAgICovXG4gICAgQElucHV0KCkgbmFtZUZpbGU6IHN0cmluZyA7XG5cbiAgLyoqXG4gICAqIEVzdGFkbyBkZSBsYSBkZXNjYXJnYS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjRmlsZURvd25sb2FkQ29tcG9uZW50XG4gICAqL1xuICAgIEBPdXRwdXQoKSBzdGF0dXMgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBcblxuICAgXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlbHBlcjogQmNIZWxwZXJTZXJ2aWNlLHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmJjRmlsZURvd25sb2FkQmVoYXZpb3IgPSBuZXcgQmNGaWxlRG93bmxvYWRCZWhhdmlvcigpO1xuICAgIHRoaXMuYmNBY2NvcmRpb25CZWhhdmlvciA9IG5ldyBCY0FjY29yZGlvbkJlaGF2aW9yKCk7XG4gICAgdGhpcy5hY2NvcmRpb25JZD10aGlzLmNvbXBvbmVudElkKydhY2NvcmRpb24nO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gbmV3IEJjRmlsZURvd25sb2FkQmVoYXZpb3IoKTtcbiAgICB0aGlzLmJjRmlsZURvd25sb2FkQmVoYXZpb3IuZW1pdEV2ZW50ID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hWYWx1ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIH1cblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XG4gICAgaWYoY2hhbmdlcy51cmwpe1xuICAgICAgaWYoY2hhbmdlcy51cmwuY3VycmVudFZhbHVlKXtcbiAgICAgICAgdGhpcy5iY0ZpbGVEb3dubG9hZEJlaGF2aW9yLmNyZWF0ZVJvdyhjaGFuZ2VzLnVybC5jdXJyZW50VmFsdWUsbnVsbCx0aGlzLm5hbWVGaWxlKTtcbiAgICAgIH1cblxuXG5cbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmZpbGUpe1xuICAgICAgaWYoY2hhbmdlcy5maWxlLmN1cnJlbnRWYWx1ZSl7XG4gICAgICB0aGlzLmJjRmlsZURvd25sb2FkQmVoYXZpb3IuY29udmVydFRvQmluYXJ5KG51bGwsY2hhbmdlcy5maWxlLmN1cnJlbnRWYWx1ZSx0aGlzLm5hbWVGaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5iY0FjY29yZGlvbkJlaGF2aW9yLnNldElkKHRoaXMuYWNjb3JkaW9uSWQpO1xuICAgIHRoaXMuYmNBY2NvcmRpb25CZWhhdmlvci5zZXRVcCgpO1xuICAgIHRoaXMuYmNGaWxlRG93bmxvYWRCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTsgICBcbiAgICB0aGlzLmJjRmlsZURvd25sb2FkQmVoYXZpb3Iuc2V0VXAoKTtcbn1cblxuICAvKipcbiAgICogRnVuY2nDs24gcXVlIG11ZXN0cmEgZWwgZXN0YWRvIGRlbCBjb21wb25lbnRlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0ZpbGVEb3dubG9hZENvbXBvbmVudFxuICAgKi9cblxuICAgZGlzcGF0Y2hWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXMuZW1pdCh2YWx1ZSk7XG4gIH1cblxuIH1cbiBcbiIsIjxkaXYgY2xhc3M9XCJiYy1maWxlLWRvd25sb2FkLWNvbnRhaW5lciBiYy1maWxlLWRvd25sb2FkLWFjY29yZGlvbiBiYy1jb2wteHMtNiBiYy1jb2wtc20tNiBiYy1jb2wtbWQtNiBiYy1jb2wtbGctNiBiYy1jb2wteGwtNlwiIHJvbGU9XCJncm91cFwiIFtpZF09XCJjb21wb25lbnRJZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJiYy1hY2NvcmRpb25zLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgW2lkXT1cImFjY29yZGlvbklkXCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiYmMtYWNjb3JkaW9uIGJjLWFjY29yZGlvbi1iYXNpY1wiIFtpZF09XCJhY2NvcmRpb25JZC0xXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiYWNjb3JkaW9uSWQtMVwiIGlkPVwic3VwZXItYmFzaWMtaGVhZGVyXCIgYXJpYS1sYWJlbGxlZGJ5PVwiYWNjb3JkaW9uLXRpdGxlLXN1cGVyLWJhc2ljXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1hY2NvcmRpb24taGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImJjLWZpbGUtZG93bmxvYWQtaWNvblwiPjxlbSBjbGFzcz1cImJjLWljb24gYmMtc21cIiBhbHQ9XCJJY29ubyBkZSBkZXNjYXJnYVwiPmRvd25sb2FkPC9lbT48L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmMtcHJvZ3Jlc3MtYmFyIGJjLWZpbGUtZG93bmxvYWQtbG9hZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbWV0ZXI9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1hY2NvcmRpb24tdGV4dC1jb250YWluZXIgYmMtcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJiYy1hY2NvcmRpb24tdGl0bGVcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJjLWZpbGUtZG93bmxvYWQtYWNjb3JkaW9uLXN1YnRpdGxlIGJjLXRleHQtYnJhbmQtY29tcGxlbWVudGFyeS0wMVwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJjLWFjY29yZGlvbi1oZWFkZXItcmlnaHRcIj48ZW0gY2xhc3M9XCJiYy1pY29uIGJjLXNtIGJjLXRvZ2dsZS1idXR0b25cIiBhbHQ9XCJGbGVjaGEgaGFjaWEgYWJham8gcGFyYSBhYnJpciBlbCBhY29yZGXDs25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5hcnJvdzItZG93bjwvZW0+PC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJjLWFjY29yZGlvbi1jb250ZW50IGJjLWZpbGUtZG93bmxvYWQtcm93c0NvbnRhaW5lclwiIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsbGVkYnk9XCJzdXBlci1iYXNpYy1oZWFkZXJcIj48L3NlY3Rpb24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19