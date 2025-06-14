import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * Componente Icon Button.
 * El Icon Button es un accionable que sintetiza y resalta
 * una funcionalidad dentro de una interfaz.
 *
 * @export
 * @class BcIconButtonComponent
 */
class BcIconButtonComponent {
    constructor() {
        this.classList = '';
        this.ariaLabelFabSelected = 'Cerrar';
        /**
         * Parámetro para denotar el shadow del botton en variante Solid
         * @type {boolean}
         * @memberof BcIconButtonComponent
         */
        this.shadow = false;
        /**
         * Parámetro para el custom icon del componente.
         * @type {string}
         * @memberof BcIconButtonComponent
         */
        this.customIcon = '';
        /**
         * Desabilitar button
         * @type {boolean}
         * @memberof BcIconButtonComponent
         */
        this.statusButton = false;
        /**
         * Por deprecar. Utilizar 'selected'
         * @type {boolean}
         * @memberof BcIconButtonComponent
         */
        this.seleted = false;
        /**
         * Parámetro para poner el componente en un estado seleccionado.
         * @type {boolean}
         * @memberof BcIconButtonComponent
         */
        this.selected = false;
    }
    ngOnChanges(changes) {
        var _a;
        if (this.type === 'solid') {
            const newColor = ((_a = changes.color) === null || _a === void 0 ? void 0 : _a.currentValue) || this.color;
            this.color = newColor || 'white';
            this.classList = `bc-icon-button-${this.color}`;
        }
        else {
            this.classList = '';
        }
        if (changes.selected || changes.type) {
            this.updateAriaLabel();
        }
    }
    updateAriaLabel() {
        if (this.type === 'fab' && (this.selected || this.seleted)) {
            this.ariaLabelValue = this.ariaLabelFabSelected;
        }
        else {
            this.ariaLabelValue = this.ariaLabel;
        }
    }
}
BcIconButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcIconButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcIconButtonComponent, selector: "bc-icon-button", inputs: { type: "type", color: "color", size: "size", shadow: "shadow", customIcon: "customIcon", statusButton: "statusButton", seleted: "seleted", selected: "selected", ariaLabel: "ariaLabel" }, usesOnChanges: true, ngImport: i0, template: "<button\n  class=\"bc-icon-button bc-icon-button-{{ type }} bc-icon-button-{{ size }} {{\n    classList\n  }}\"\n  [ngClass]=\"{\n    'bc-shadow-02': type == 'solid' && shadow,\n    'bc-icon-button-selected': seleted || selected,\n    'bc-float-menu-toggle': type == 'outline'\n  }\"\n  [disabled]=\"statusButton\"\n  [attr.aria-label]=\"ariaLabelValue\"\n>\n  <i\n    class=\"bc-icon\"\n    aria-hidden=\"true\"\n    [ngClass]=\"{ 'bc-float-menu-toggle': type == 'outline' }\"\n    >{{ customIcon }}</i\n  >\n</button>", directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-icon-button', template: "<button\n  class=\"bc-icon-button bc-icon-button-{{ type }} bc-icon-button-{{ size }} {{\n    classList\n  }}\"\n  [ngClass]=\"{\n    'bc-shadow-02': type == 'solid' && shadow,\n    'bc-icon-button-selected': seleted || selected,\n    'bc-float-menu-toggle': type == 'outline'\n  }\"\n  [disabled]=\"statusButton\"\n  [attr.aria-label]=\"ariaLabelValue\"\n>\n  <i\n    class=\"bc-icon\"\n    aria-hidden=\"true\"\n    [ngClass]=\"{ 'bc-float-menu-toggle': type == 'outline' }\"\n    >{{ customIcon }}</i\n  >\n</button>" }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], shadow: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], statusButton: [{
                type: Input
            }], seleted: [{
                type: Input
            }], selected: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class BcIconButtonModule {
}
BcIconButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcIconButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconButtonModule, declarations: [BcIconButtonComponent], imports: [BcIconModule,
        CommonModule,
        FormsModule], exports: [BcIconButtonComponent] });
BcIconButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconButtonModule, imports: [[
            BcIconModule,
            CommonModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcIconButtonComponent],
                    imports: [
                        BcIconModule,
                        CommonModule,
                        FormsModule
                    ],
                    exports: [BcIconButtonComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcIconButtonComponent, BcIconButtonModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-icon-button.mjs.map
