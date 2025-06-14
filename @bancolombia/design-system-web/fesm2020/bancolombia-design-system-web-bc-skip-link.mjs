import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcSkipLinkBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';

/**
 * Componente Skip-Link
 *
 * @export
 * @class BcSkipLinkComponent
 * @implements {AfterViewInit}
 */
class BcSkipLinkComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
       * Esta entrada permite indicar un id único al componente dentro del DOM.
       *
       * @type {string}
       * @memberof BcSkipLinkComponent
       */
        this.id = this.bcHelperService.getId(this);
        /**
         * Texto en el label.
         *
         * @type {string}
         * @memberof BcSkipLinkComponent
         */
        this.textLink = 'Ir al contenido principal';
        /**
         * se indica a que id se va a trasladar la página
         *
         * @type {string}
         * @memberof BcSkipLinkComponent
         */
        this.referenceId = '';
        this.skipLinkBehavior = new BcSkipLinkBehavior();
    }
    ngAfterViewInit() {
        this.skipLinkBehavior.setId(this.id);
        this.skipLinkBehavior.setUp();
    }
}
BcSkipLinkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSkipLinkComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcSkipLinkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSkipLinkComponent, selector: "bc-skip-link", inputs: { id: "id", textLink: ["text-link", "textLink"], referenceId: ["refence-id", "referenceId"] }, ngImport: i0, template: "<a [id]=\"id\" class=\"bc-skip-link\" href=\"#{{referenceId}}\"onclick=\"event.preventDefault();\">\n    <span>{{textLink}}</span>\n</a>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSkipLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-skip-link', template: "<a [id]=\"id\" class=\"bc-skip-link\" href=\"#{{referenceId}}\"onclick=\"event.preventDefault();\">\n    <span>{{textLink}}</span>\n</a>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], textLink: [{
                type: Input,
                args: ['text-link']
            }], referenceId: [{
                type: Input,
                args: ['refence-id']
            }] } });

class BcSkipLinkModule {
}
BcSkipLinkModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSkipLinkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcSkipLinkModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSkipLinkModule, declarations: [BcSkipLinkComponent], imports: [CommonModule], exports: [BcSkipLinkComponent] });
BcSkipLinkModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSkipLinkModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSkipLinkModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcSkipLinkComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        BcSkipLinkComponent
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcSkipLinkComponent, BcSkipLinkModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-skip-link.mjs.map
