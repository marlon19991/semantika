import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * Componente Transaction Status
 * Icono utilizado en diferentes componentes y plantillas con el fín de identificar un estado.
 *
 * @export
 * @class BcTransactionStatusComponent
 */
class BcTransactionStatusComponent {
    constructor() {
        this.SizeIcon = '';
        this.borderr = '';
        /**
         * Parámetro para denotar el tipo de estado
         *
         * @type {('success' | 'error' | 'warning' | 'info' | 'generic'|'dynamic'|'dynamicTxt'|'dynamicxs' )}
         * @memberof BcTransactionStatusComponent
         */
        this.status = 'info';
        /**
         * Parámetro para denotar el tamaño del componente
         *
         * @type {('xs' | 'sm' | 'md'|'2xs'|'emd'|'sn')}
         * @memberof BcTransactionStatusComponent
         */
        this.size = 'md';
        /**
         * Tipos de iconos
         *
         * @memberof BcTransactionStatusComponent
         */
        this.icons = {
            success: 'ok',
            error: 'error',
            warning: 'hand',
            info: 'idea',
            generic: 'megaphone',
            "": 'idea'
        };
        /**
         * Parámetro para el custom icon del componente.
         *
         * @type {string}
         * @memberof BcTransactionStatusComponent
         */
        this.customIcon = '';
        /**
            * Parámetro para el custom icon del componente.
            *
            * @type {string}
            * @memberof BcTransactionStatusComponent
            */
        this.texto = '';
        /**
            * Parámetro para el color del componente.
            *
            * @type {string}
            * @memberof BcTransactionStatusComponent
            */
        this.color = '';
        /**
            * Parámetro para el agregar border al componente.
            *
            * @type {string}
            * @memberof BcTransactionStatusComponent
            */
        this.border = '';
        /**
            * Parámetro para el agregar border al componente.
            *
            * @type {string}
            * @memberof BcTransactionStatusComponent
            */
        this.textAriaLabel = '';
    }
    ngOnChanges() {
        const sizeMap = {
            'sm': '2xs',
            '2xs': 'xs',
            'xs': 'xs',
            'emd': 'sm',
            'md': 'md'
        };
        this.SizeIcon = sizeMap[this.size];
    }
}
BcTransactionStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTransactionStatusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcTransactionStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTransactionStatusComponent, selector: "bc-transaction-status", inputs: { status: "status", size: "size", customIcon: "customIcon", texto: "texto", color: "color", border: "border", textAriaLabel: "textAriaLabel" }, usesOnChanges: true, ngImport: i0, template: "<div [attr.aria-label]=\"textAriaLabel\" class=\"bc-transaction-status bc-transaction-status-{{ status }} bc-transaction-status-{{ size }}  {{color}} {{border}}  \">\n  <bc-icon\n  [size]=\"SizeIcon?SizeIcon:size\"\n  >{{ customIcon ? customIcon : icons[status]}}<p class=\"texto\">{{texto}}</p></bc-icon>\n</div>\n", components: [{ type: i1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTransactionStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-transaction-status', template: "<div [attr.aria-label]=\"textAriaLabel\" class=\"bc-transaction-status bc-transaction-status-{{ status }} bc-transaction-status-{{ size }}  {{color}} {{border}}  \">\n  <bc-icon\n  [size]=\"SizeIcon?SizeIcon:size\"\n  >{{ customIcon ? customIcon : icons[status]}}<p class=\"texto\">{{texto}}</p></bc-icon>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { status: [{
                type: Input
            }], size: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], texto: [{
                type: Input
            }], color: [{
                type: Input
            }], border: [{
                type: Input
            }], textAriaLabel: [{
                type: Input
            }] } });

class BcTransactionStatusModule {
}
BcTransactionStatusModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTransactionStatusModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTransactionStatusModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTransactionStatusModule, declarations: [BcTransactionStatusComponent], imports: [i1.BcIconModule], exports: [BcTransactionStatusComponent] });
BcTransactionStatusModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTransactionStatusModule, imports: [[
            BcIconModule.forRoot({ path: '' }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTransactionStatusModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcTransactionStatusComponent],
                    imports: [
                        BcIconModule.forRoot({ path: '' }),
                    ],
                    exports: [BcTransactionStatusComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcTransactionStatusComponent, BcTransactionStatusModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-transaction-status.mjs.map
