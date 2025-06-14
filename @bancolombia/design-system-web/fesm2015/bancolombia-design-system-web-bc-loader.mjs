import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';

/**
 * Componente estilo cargando
 *
 * @export
 * @class BcLoaderComponent
 * @implements {OnInit}
 */
class BcLoaderComponent {
    constructor() {
        /**
         * Tamaño del componente.
         *
         * @type {string}
         * @memberof BcLoaderComponent
         */
        this.sizeLoader = 'xl';
        /**
         * Velocidad. Representa valor en segundos.
         *
         * @type {string}
         * @memberof BcLoaderComponent
         */
        this.speedLoader = '2';
        /**
         * Texto de atributo aria-label.
         *
         * @type {string}
         * @memberof BcLoaderComponent
         */
        this.ariaLabel = 'Cargando';
    }
}
BcLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcLoaderComponent, selector: "bc-loader", inputs: { sizeLoader: "sizeLoader", speedLoader: "speedLoader", ariaLabel: "ariaLabel" }, ngImport: i0, template: "<em\n  [class]=\"'bc-icon bc-' + sizeLoader + ' bc-loader'\"\n  [style.--bc-loader-animation-duration]=\"speedLoader + 's'\"\n  role=\"status\"\n  [attr.aria-label]=\"ariaLabel\"\n>\n  spinner\n</em>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-loader', template: "<em\n  [class]=\"'bc-icon bc-' + sizeLoader + ' bc-loader'\"\n  [style.--bc-loader-animation-duration]=\"speedLoader + 's'\"\n  role=\"status\"\n  [attr.aria-label]=\"ariaLabel\"\n>\n  spinner\n</em>\n" }]
        }], propDecorators: { sizeLoader: [{
                type: Input
            }], speedLoader: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class BcLoaderModule {
}
BcLoaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLoaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcLoaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLoaderModule, declarations: [BcLoaderComponent], exports: [BcLoaderComponent] });
BcLoaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLoaderModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLoaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcLoaderComponent],
                    imports: [],
                    exports: [BcLoaderComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcLoaderComponent, BcLoaderModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-loader.mjs.map
