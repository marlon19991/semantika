import * as i0 from '@angular/core';
import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BcCoachMarkBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-button';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * Componente CoachMark
 * import { BcCoachMarkComponent } from '@bancolombia/design-system-web/bc-coach-mark';
 * @export
 * @class BcCoachMarkComponent
 */
class BcCoachMarkComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcCoachMarkComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Hace referencia al id que tenga el elemento html del paso a resaltar
         *
         * @memberof BcCoachMarkStepComponent
         */
        this.dataController = '';
        /**
          * Hace referencia al id que tenga el contenido del paso a resaltar
          *
          * @memberof BcCoachMarkStepComponent
          */
        this.id = '';
    }
    ngAfterViewInit() {
        this.bcCoachMarkBehavior = new BcCoachMarkBehavior();
        this.bcCoachMarkBehavior.setId(this.componentId);
        this.bcCoachMarkBehavior.setUp();
    }
    /**
     * Este Metodo se encarga de inicializar el coachmark
     * @type {string}
     * @memberof BcCoachMarkComponent
     */
    initTourStep() {
        this.bcCoachMarkBehavior.initTour();
    }
}
BcCoachMarkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCoachMarkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCoachMarkComponent, selector: "bc-coach-mark", inputs: { componentId: "componentId", dataCoachmark: "dataCoachmark", dataController: "dataController", id: "id" }, ngImport: i0, template: "<section class=\"bc-coach-mark\" [id]=\"componentId\">\n    <section class=\"bc-coach-mark-container\">\n        <section class=\"bc-coach-mark-close\">\n            <button>error</button>\n        </section>\n        \n        <section class=\"bc-coach-mark-body\">\n                <ng-content select=\"[coachmarkContent]\" [attr.dataCoachmark]=\"dataCoachmark\" \n                [attr.dataController]=\"dataController\" [attr.id]=\"id\"></ng-content>\n        </section>\n        <section class=\"bc-coach-mark-quantity-items\"></section>\n        <section class=\"bc-coach-mark-footer\">\n            <button  bc-button\n                sizeButton=\"small\"\n                typeButton=\"primary\" class=\"bc-coach-mark-next\">\n                Siguiente\n            </button>\n            <button  bc-button\n                sizeButton=\"small\"\n                typeButton=\"secondary\" class=\"bc-coach-mark-prev\">\n                Volver\n            </button>\n        </section>\n    </section>\n</section>", directives: [{ type: i2.BcButtonDirective, selector: "[bc-button]", inputs: ["typeButton", "sizeButton", "width", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-coach-mark', styles: [], template: "<section class=\"bc-coach-mark\" [id]=\"componentId\">\n    <section class=\"bc-coach-mark-container\">\n        <section class=\"bc-coach-mark-close\">\n            <button>error</button>\n        </section>\n        \n        <section class=\"bc-coach-mark-body\">\n                <ng-content select=\"[coachmarkContent]\" [attr.dataCoachmark]=\"dataCoachmark\" \n                [attr.dataController]=\"dataController\" [attr.id]=\"id\"></ng-content>\n        </section>\n        <section class=\"bc-coach-mark-quantity-items\"></section>\n        <section class=\"bc-coach-mark-footer\">\n            <button  bc-button\n                sizeButton=\"small\"\n                typeButton=\"primary\" class=\"bc-coach-mark-next\">\n                Siguiente\n            </button>\n            <button  bc-button\n                sizeButton=\"small\"\n                typeButton=\"secondary\" class=\"bc-coach-mark-prev\">\n                Volver\n            </button>\n        </section>\n    </section>\n</section>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], dataCoachmark: [{
                type: Input
            }], dataController: [{
                type: Input
            }], id: [{
                type: Input
            }] } });

/**
 * Importa la directiva de labels con
 * los diseños de Bancolombia S.A.
 * @package bc-tag, bc-label
 * @Component bc-tag
 * @param icon = Icono que se usara en el componente
 * @param {boolean} dismissible = Indica si se tendrá el icono de x al lado derecho o no
 * @param status = selected (seleccionado) || disabled (deshabilitado)
 * @example <bc-tag icon="calendar-alt" dismissible="true" status="selected">Label</bc-tag>
 * @Directiva bc-tag
 * @param  type Aplica el estilo al label, values [ secondary || info (Default) || alert || error || success ]
 * @example
 *           <label bc-tag type="error">Error</label>
 *
 * @Directiva bc-label
 * @param  theme Tema del label default || dark
 * @param  sizeLabel Tamaño de label default || small
 * @example
 *   <label bc-label sizeLabel="small" theme="dark">Texto del label</label>
 *
 * @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
class BcCoachMarkModule {
}
BcCoachMarkModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCoachMarkModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkModule, declarations: [BcCoachMarkComponent], imports: [BcIconModule, BcButtonModule, CommonModule], exports: [BcCoachMarkComponent] });
BcCoachMarkModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkModule, imports: [[BcIconModule, BcButtonModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCoachMarkComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule],
                    exports: [BcCoachMarkComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCoachMarkComponent, BcCoachMarkModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-coach-mark.mjs.map
