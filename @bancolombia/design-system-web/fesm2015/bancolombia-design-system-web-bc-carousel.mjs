import * as i0 from '@angular/core';
import { forwardRef, Component, Input, TemplateRef, ViewChild, NgModule } from '@angular/core';
import { BcCarouselBehavior } from '@bancolombia/design-system-behaviors';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * Componente Carousel
 *
 * @export
 * @class BcCarouselBehavior
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcCarouselComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
       * Esta entrada permite indicar un id único al componente dentro del DOM.
       *
       * @type {string}
       * @memberof BcCarouselComponent
       *
       */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Esta entrada se utiliza para dar el posicionamiento de los botones .
         * Las opciones son: top | bottom
         *
         * @type {('top' | 'bottom')}
         * @memberof BcInputSelectComponent
         */
        this.positionArrows = 'bottom';
        /**
         * Esta entrada se utiliza para asignarle titulo al carousel,
         * para temas de accesbilidad.
         * @type {string}
         * @memberof BcInputSelectComponent
         */
        this.ariaLabelCarousel = '';
        /**
         * Comportamiento de componente
         *
         * @type {BcHeaderBehavior}
         * @memberof BcCarouselBehavior
         */
        this.BcCarouselBehavior = new BcCarouselBehavior();
    }
    ngAfterViewInit() {
        this.BcCarouselBehavior.setId(this.componentId);
        this.BcCarouselBehavior.setOptions(this.configCarouselInitial);
        this.BcCarouselBehavior.setUp();
    }
}
BcCarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCarouselComponent, selector: "bc-carousel", inputs: { componentId: "componentId", configCarouselInitial: "configCarouselInitial", positionArrows: "positionArrows", ariaLabelCarousel: "ariaLabelCarousel" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BcCarouselBehavior),
            multi: true,
        },
    ], ngImport: i0, template: "<section class=\"bc-carousel\" [id]=\"componentId\" \n           [attr.aria-label]=\"ariaLabelCarousel\">\n    <div *ngIf=\"positionArrows== 'top'\" class=\"bc-carousel-container-top-button\">\n      <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-prev\" \n            aria-hidden=\"false\" aria-label=\"Anterior slide\" >\n          <bc-icon [name]=\"configCarouselInitial.iconNamePrev\" aria-hidden=\"true\" aria-label=\"prevArrow\"></bc-icon>\n      </div>\n      <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-next\" \n            aria-hidden=\"true\" aria-label=\"Siguiente slide\">\n          <bc-icon [name]=\"configCarouselInitial.iconNameNext\" aria-hidden=\"true\" aria-label=\"netxArrow\"></bc-icon>\n      </div>\n    </div>\n\n    <section class=\"bc-carousel-list\">\n        <ul class=\"bc-carousel-track\">\n          <ng-content></ng-content>\n        </ul>\n    </section>\n    <div *ngIf=\"positionArrows == 'bottom'\" class=\"bc-carousel-container-bottom-button\">\n        <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-prev\">\n          <bc-icon [name]=\"configCarouselInitial.iconNamePrev\" aria-hidden=\"true\" aria-label=\"prevArrow\"></bc-icon>\n        </div>\n        <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-next\">\n          <bc-icon [name]=\"configCarouselInitial.iconNameNext\" aria-hidden=\"true\" aria-label=\"netxArrow\"></bc-icon>\n        </div>\n    </div>\n  </section>\n\n\n\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-carousel', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BcCarouselBehavior),
                            multi: true,
                        },
                    ], template: "<section class=\"bc-carousel\" [id]=\"componentId\" \n           [attr.aria-label]=\"ariaLabelCarousel\">\n    <div *ngIf=\"positionArrows== 'top'\" class=\"bc-carousel-container-top-button\">\n      <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-prev\" \n            aria-hidden=\"false\" aria-label=\"Anterior slide\" >\n          <bc-icon [name]=\"configCarouselInitial.iconNamePrev\" aria-hidden=\"true\" aria-label=\"prevArrow\"></bc-icon>\n      </div>\n      <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-next\" \n            aria-hidden=\"true\" aria-label=\"Siguiente slide\">\n          <bc-icon [name]=\"configCarouselInitial.iconNameNext\" aria-hidden=\"true\" aria-label=\"netxArrow\"></bc-icon>\n      </div>\n    </div>\n\n    <section class=\"bc-carousel-list\">\n        <ul class=\"bc-carousel-track\">\n          <ng-content></ng-content>\n        </ul>\n    </section>\n    <div *ngIf=\"positionArrows == 'bottom'\" class=\"bc-carousel-container-bottom-button\">\n        <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-prev\">\n          <bc-icon [name]=\"configCarouselInitial.iconNamePrev\" aria-hidden=\"true\" aria-label=\"prevArrow\"></bc-icon>\n        </div>\n        <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-next\">\n          <bc-icon [name]=\"configCarouselInitial.iconNameNext\" aria-hidden=\"true\" aria-label=\"netxArrow\"></bc-icon>\n        </div>\n    </div>\n  </section>\n\n\n\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], configCarouselInitial: [{
                type: Input
            }], positionArrows: [{
                type: Input
            }], ariaLabelCarousel: [{
                type: Input
            }] } });

class BcCarouselItemComponent {
}
BcCarouselItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcCarouselItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCarouselItemComponent, selector: "bc-carousel-item", viewQueries: [{ propertyName: "content", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<li class=\"bc-carousel-item\" role=\"group\" aria-roledescription=\"slide\">\n    <ng-content></ng-content>\n</li>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-carousel-item', template: "<li class=\"bc-carousel-item\" role=\"group\" aria-roledescription=\"slide\">\n    <ng-content></ng-content>\n</li>\n" }]
        }], propDecorators: { content: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });

class BcCarouselItemGridComponent {
}
BcCarouselItemGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselItemGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcCarouselItemGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCarouselItemGridComponent, selector: "bc-carousel-item-grid", viewQueries: [{ propertyName: "content", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "\n<ng-content></ng-content>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselItemGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-carousel-item-grid', template: "\n<ng-content></ng-content>\n" }]
        }], propDecorators: { content: [{
                type: ViewChild,
                args: [TemplateRef]
            }] } });

/**
 * Importa el componente BcCarousel con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-carousel></bc-carousel>
 *
 * @author: Bancolombia S.A
 */
class BcCarouselModule {
}
BcCarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselModule, declarations: [BcCarouselComponent, BcCarouselItemComponent, BcCarouselItemGridComponent], imports: [CommonModule, BcIconModule], exports: [BcCarouselComponent, BcCarouselItemComponent, BcCarouselItemGridComponent] });
BcCarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselModule, imports: [[CommonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCarouselComponent, BcCarouselItemComponent, BcCarouselItemGridComponent],
                    imports: [CommonModule, BcIconModule],
                    exports: [BcCarouselComponent, BcCarouselItemComponent, BcCarouselItemGridComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCarouselComponent, BcCarouselItemComponent, BcCarouselItemGridComponent, BcCarouselModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-carousel.mjs.map
