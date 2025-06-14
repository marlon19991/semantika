import * as i0 from '@angular/core';
import { Directive, Input, HostListener, NgModule } from '@angular/core';
import { BcTooltipBehavior } from '@bancolombia/design-system-behaviors';
import { CommonModule } from '@angular/common';

/**
 * Componente tooltip
 *
 * @export
 * @class BcTooltipDirective
 * @implements {AfterViewInit}
 */
class BcTooltipDirective {
    constructor(el) {
        this.el = el;
        /**
         * Posición del tooltip
         * top | right | bottom | left.
         *
         * @memberof BcTooltipDirective
         */
        this.bcTooltipPosition = 'top';
        /**
         * Texto que esta en el contenedor del tooltip.
         *
         * @memberof BcTooltipDirective
         */
        this.bcTooltipText = 'Text content';
        /**
         * Texto del botón.
         *
         * @memberof BcTooltipDirective
         */
        this.bcTooltipButtonText = undefined;
        /**
         * Padre del tooltip
         * para controlar el scroll
         *
         * @type {string}
         * @memberof BcExpansionPanelComponent
         */
        this.bcTooltipParentElement = undefined;
        this.element = new BcTooltipBehavior();
    }
    ngAfterViewInit() {
        this.el.nativeElement.setAttribute('bcTooltipPosition', this.bcTooltipPosition);
        this.el.nativeElement.setAttribute('bcTooltipTitle', this.bcTooltipTitle);
        this.el.nativeElement.setAttribute('bcTooltipText', this.bcTooltipText);
        this.el.nativeElement.setAttribute('bcTooltipButtonText', this.bcTooltipButtonText);
        this.el.nativeElement.setAttribute('bcTooltipParentElement', this.bcTooltipParentElement);
        this.element.setElement(this.el.nativeElement);
        this.element.setUp();
    }
    onResize(event) {
        this.element.setPosition();
    }
}
BcTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTooltipDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BcTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcTooltipDirective, selector: "[bc-tooltip]", inputs: { bcTooltipPosition: "bcTooltipPosition", bcTooltipTitle: "bcTooltipTitle", bcTooltipText: "bcTooltipText", bcTooltipButtonText: "bcTooltipButtonText", bcTooltipParentElement: "bcTooltipParentElement" }, host: { listeners: { "window:resize": "onResize($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-tooltip]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { bcTooltipPosition: [{
                type: Input
            }], bcTooltipTitle: [{
                type: Input
            }], bcTooltipText: [{
                type: Input
            }], bcTooltipButtonText: [{
                type: Input
            }], bcTooltipParentElement: [{
                type: Input
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

class BcTooltipModule {
}
BcTooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTooltipModule, declarations: [BcTooltipDirective], imports: [CommonModule], exports: [BcTooltipDirective] });
BcTooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTooltipModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcTooltipDirective],
                    imports: [
                        CommonModule
                    ],
                    exports: [BcTooltipDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcTooltipDirective, BcTooltipModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-tooltip.mjs.map
