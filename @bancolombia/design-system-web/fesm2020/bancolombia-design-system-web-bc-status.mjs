import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Componente Status
 * Las etiquetas tipo status son elementos que permiten a los usuarios
 * identificar rápidamente estados y categorías de artículos
 * mediante palabras clave e iconografía.
 *
 * @export
 * @class BcStatusComponent
 */
class BcStatusComponent {
    constructor() {
        /**
         * Parámetro para denotar su tipo
         * @type {('icon-left' | 'icon-right' | 'only' | 'simple' )}
         * @memberof BcStatusComponent
         */
        this.type = 'only';
        /**
         * Parámetro para denotar el color
         * @type {('alba' | 'andino' | 'caribe' | 'macondo'| 'flamenco'| 'orquidea'| 'neutro'| 'black'| 'white')}
         * @memberof BcStatusComponent
         */
        this.color = 'alba';
        /**
         * Parámetro para denotar el tipo de borde
         * @type {('center' | 'left' | 'right')}
         * @memberof BcStatusComponent
         */
        this.border = 'center';
        /**
         * Parámetro para el ícono a mostrar
         * @type {string}
         * @memberof BcStatusComponent
         */
        this.customIcon = '';
        /**
         * Parámetro para el texto a mostrar
         * @type {string}
         * @memberof BcStatusComponent
         */
        this.text = '';
        /**
         * Parámetro para mostrar el status con estilo de componente deshabilitado
         * @type {boolean}
         * @memberof BcStatusComponent
         */
        this.disabledTag = false;
        /**
         * Parámetro para ancho explícito del componente
         * @type {string}
         * @memberof BcStatusComponent
         */
        this.widthTag = '';
    }
}
BcStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStatusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcStatusComponent, selector: "bc-status", inputs: { type: "type", color: "color", border: "border", customIcon: "customIcon", text: "text", disabledTag: "disabledTag", widthTag: "widthTag" }, ngImport: i0, template: "<div\n  [class.bc-status-disabled]=\"disabledTag\"\n  [style.--bc-status-width]=\"widthTag\"\n  class=\"bc-status bc-status-{{ type }} bc-status-color-{{ color }}\n  bc-status-border-{{ border }}\"\n>\n  <bc-icon *ngIf=\"type === 'icon-left'\">{{ customIcon }}</bc-icon>\n  <span>{{ text }}</span>\n  <bc-icon *ngIf=\"type === 'icon-right'\">{{ customIcon }}</bc-icon>\n</div>\n", components: [{ type: i1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-status', template: "<div\n  [class.bc-status-disabled]=\"disabledTag\"\n  [style.--bc-status-width]=\"widthTag\"\n  class=\"bc-status bc-status-{{ type }} bc-status-color-{{ color }}\n  bc-status-border-{{ border }}\"\n>\n  <bc-icon *ngIf=\"type === 'icon-left'\">{{ customIcon }}</bc-icon>\n  <span>{{ text }}</span>\n  <bc-icon *ngIf=\"type === 'icon-right'\">{{ customIcon }}</bc-icon>\n</div>\n" }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], border: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], text: [{
                type: Input
            }], disabledTag: [{
                type: Input
            }], widthTag: [{
                type: Input
            }] } });

class BcStatusModule {
}
BcStatusModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStatusModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcStatusModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStatusModule, declarations: [BcStatusComponent], imports: [BcIconModule, CommonModule, FormsModule], exports: [BcStatusComponent] });
BcStatusModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStatusModule, imports: [[BcIconModule, CommonModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStatusModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcStatusComponent],
                    imports: [BcIconModule, CommonModule, FormsModule],
                    exports: [BcStatusComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcStatusComponent, BcStatusModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-status.mjs.map
