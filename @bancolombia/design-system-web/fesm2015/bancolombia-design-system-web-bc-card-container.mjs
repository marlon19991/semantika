import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Componente card container
 * Contenedor dinámico para uso en distintos componentes.
 *
 * @export
 * @class BcCardContainerComponent
 */
class BcCardContainerComponent {
    constructor() {
        this.classTypeCard = {
            default: 'bc-card-container',
            'stroke-1': 'bc-card-container-stroke',
            'stroke-2': 'bc-card-container-stroke-2',
        };
        /**
         * Parámetro para denotar el tipo de card container
         *
         * @type {('default' | 'stroke-1' | 'stroke-2')}
         * @memberof BcCardContainerComponent
         */
        this.cardType = 'default';
    }
    setCardTypeClass() {
        return this.classTypeCard[this.cardType];
    }
}
BcCardContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcCardContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardContainerComponent, selector: "bc-card-container", inputs: { cardType: "cardType", borderClass: "borderClass", shadowClass: "shadowClass", cardColorClass: "cardColorClass", borderColorClass: "borderColorClass", otherClass: "otherClass" }, ngImport: i0, template: "<div\n  class=\"{{setCardTypeClass()}} {{borderClass}} {{shadowClass}} {{cardColorClass}} {{borderColorClass}}\"\n  [ngClass]=\"otherClass\">\n    <ng-content></ng-content>\n</div>\n", directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-container', template: "<div\n  class=\"{{setCardTypeClass()}} {{borderClass}} {{shadowClass}} {{cardColorClass}} {{borderColorClass}}\"\n  [ngClass]=\"otherClass\">\n    <ng-content></ng-content>\n</div>\n" }]
        }], propDecorators: { cardType: [{
                type: Input
            }], borderClass: [{
                type: Input
            }], shadowClass: [{
                type: Input
            }], cardColorClass: [{
                type: Input
            }], borderColorClass: [{
                type: Input
            }], otherClass: [{
                type: Input
            }] } });

class BcCardContainerModule {
}
BcCardContainerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardContainerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContainerModule, declarations: [BcCardContainerComponent], imports: [CommonModule,
        FormsModule], exports: [BcCardContainerComponent] });
BcCardContainerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContainerModule, imports: [[
            CommonModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCardContainerComponent],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [BcCardContainerComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCardContainerComponent, BcCardContainerModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-card-container.mjs.map
