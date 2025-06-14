import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcExpansionPanelBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * Importa el expansion panel  con los diseños de Bancolombia S.A.
 * Sirve para mostrar pequeños datos sobre un producto o una transacción.
 * @export
 * @class BcExpansionPanelComponent
 * @implements {AfterViewInit}
 */
class BcExpansionPanelComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcfooterComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Evento que se ejecuta cuando se expande.
         *
         * @type {EventEmitter}
         * @memberof BcExpansionPanelComponent
         */
        this.expanded = new EventEmitter();
        /**
         * Evento que se ejecuta cuando se contrae.
         *
         * @type {EventEmitter}
         * @memberof BcExpansionPanelComponent
         */
        this.contracted = new EventEmitter();
        this.bcExpansionPanelBehavior = new BcExpansionPanelBehavior();
    }
    ngAfterViewInit() {
        this.bcExpansionPanelBehavior.setId(this.componentId);
        this.bcExpansionPanelBehavior.setUp();
        this.bcExpansionPanelBehavior.on('expanded', () => {
            this.expanded.emit(null);
        });
        this.bcExpansionPanelBehavior.on('contracted', () => {
            this.contracted.emit(null);
        });
    }
}
BcExpansionPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcExpansionPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcExpansionPanelComponent, selector: "bc-expansion-panel", inputs: { componentId: "componentId" }, outputs: { expanded: "expanded", contracted: "contracted" }, ngImport: i0, template: "<div class=\"bc-expansion-panel\" [id]=\"componentId\">\n    <ng-content></ng-content>\n    <div class=\"bc-expansion-panel-footer\">\n        <em aria-hidden=\"true\" class=\"bc-icon bc-xs bc-expansion-footer-icon\">arrow-angle-double-dow</em>\n    </div>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-expansion-panel', template: "<div class=\"bc-expansion-panel\" [id]=\"componentId\">\n    <ng-content></ng-content>\n    <div class=\"bc-expansion-panel-footer\">\n        <em aria-hidden=\"true\" class=\"bc-icon bc-xs bc-expansion-footer-icon\">arrow-angle-double-dow</em>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], expanded: [{
                type: Output
            }], contracted: [{
                type: Output
            }] } });

/**
 * Header del expansion panel
 *
 * @export
 * @class BcExpansionPanelHeaderComponent
 */
class BcExpansionPanelHeaderComponent {
}
BcExpansionPanelHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcExpansionPanelHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcExpansionPanelHeaderComponent, selector: "bc-expansion-panel-header", ngImport: i0, template: `
  <div class="bc-expansion-panel-header">
    <ng-content></ng-content>
  </div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-expansion-panel-header',
                    template: `
  <div class="bc-expansion-panel-header">
    <ng-content></ng-content>
  </div>
  `
                }]
        }] });

/**
 * Contenido del expansion panel
 *
 * @export
 * @class BcExpansionPanelContentComponent
 */
class BcExpansionPanelContentComponent {
}
BcExpansionPanelContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcExpansionPanelContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcExpansionPanelContentComponent, selector: "bc-expansion-panel-content", ngImport: i0, template: `
  <div class="bc-expansion-panel-content">
    <div class="bc-expansion-panel-content-wrapper">
      <ng-content></ng-content>
    </div>
  </div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-expansion-panel-content',
                    template: `
  <div class="bc-expansion-panel-content">
    <div class="bc-expansion-panel-content-wrapper">
      <ng-content></ng-content>
    </div>
  </div>
  `
                }]
        }] });

class BcExpansionPanelModule {
}
BcExpansionPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcExpansionPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelModule, declarations: [BcExpansionPanelComponent,
        BcExpansionPanelHeaderComponent,
        BcExpansionPanelContentComponent], imports: [CommonModule,
        BcIconModule], exports: [BcExpansionPanelComponent,
        BcExpansionPanelHeaderComponent,
        BcExpansionPanelContentComponent] });
BcExpansionPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelModule, imports: [[
            CommonModule,
            BcIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcExpansionPanelComponent,
                        BcExpansionPanelHeaderComponent,
                        BcExpansionPanelContentComponent
                    ],
                    imports: [
                        CommonModule,
                        BcIconModule
                    ],
                    exports: [
                        BcExpansionPanelComponent,
                        BcExpansionPanelHeaderComponent,
                        BcExpansionPanelContentComponent
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcExpansionPanelComponent, BcExpansionPanelContentComponent, BcExpansionPanelHeaderComponent, BcExpansionPanelModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-expansion-panel.mjs.map
