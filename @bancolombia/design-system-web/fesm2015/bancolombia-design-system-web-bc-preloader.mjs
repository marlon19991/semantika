import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

const PRELOADER_CSS_CLASSES = {
    fullWidth: 'bc-preloader-full-width',
    fullHeight: 'bc-preloader-full-height',
    borderRadius2: 'bc-preloader-border-radius-2',
    borderRadius3: 'bc-preloader-border-radius-3',
};
const PRELOADER_CSS_CUSTOM_PROPERTIES = {
    width: '--bc-preloader-width',
    height: '--bc-preloader-height',
};
/**
 * Componente preloader - sirve para precargar con un estilo tipo lazy load.
 *
 * @export
 * @class BcPreloaderComponent
 * @implements {OnInit}
 */
class BcPreloaderComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Ancho en píxeles(px) del preloader o 'full'.
         *
         * @memberof BcPreloaderComponent
         */
        this.width = '';
        /**
         * Alto en píxeles(px) del preloader o 'full'.
         *
         * @memberof BcPreloaderComponent
         */
        this.height = '';
    }
    ngAfterViewInit() {
        this.preloaderElement =
            this.elementRef.nativeElement.querySelector('.bc-preloader');
        this.updateStyle();
    }
    updateStyle() {
        this.configureWidth();
        this.configureHeight();
        this.configureBorderRadius();
    }
    configureWidth() {
        if (this.width === 'full') {
            this.preloaderElement.classList.add(PRELOADER_CSS_CLASSES.fullWidth);
        }
        else {
            this.setWidthStyleCustomProperty();
        }
    }
    setWidthStyleCustomProperty() {
        var _a;
        const width = this.checkIsNumberWithoutCssUnits(this.width)
            ? `${Number(this.width)}px`
            : (_a = this.width) === null || _a === void 0 ? void 0 : _a.trim();
        this.preloaderElement.style.setProperty(PRELOADER_CSS_CUSTOM_PROPERTIES.width, width);
    }
    configureHeight() {
        if (this.height === 'full') {
            this.preloaderElement.classList.add(PRELOADER_CSS_CLASSES.fullHeight);
        }
        else {
            this.setHeightStyleCustomProperty();
        }
    }
    setHeightStyleCustomProperty() {
        var _a;
        const height = this.checkIsNumberWithoutCssUnits(this.height)
            ? `${Number(this.height)}px`
            : (_a = this.height) === null || _a === void 0 ? void 0 : _a.trim();
        this.preloaderElement.style.setProperty(PRELOADER_CSS_CUSTOM_PROPERTIES.height, height);
    }
    checkIsNumberWithoutCssUnits(value) {
        const isNotEmpty = (value === null || value === void 0 ? void 0 : value.trim().length) > 0;
        const isNumber = !isNaN(Number(value));
        return isNotEmpty && isNumber;
    }
    configureBorderRadius() {
        if (this.borderRadius === '2') {
            this.preloaderElement.classList.add(PRELOADER_CSS_CLASSES.borderRadius2);
        }
        if (this.borderRadius === '3') {
            this.preloaderElement.classList.add(PRELOADER_CSS_CLASSES.borderRadius3);
        }
    }
}
BcPreloaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcPreloaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPreloaderComponent, selector: "bc-preloader", inputs: { type: "type", width: "width", height: "height", borderRadius: "borderRadius" }, ngImport: i0, template: "<ng-container [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'circle'\" class=\"bc-preloader bc-preloader-circle\"></div>\n    <div *ngSwitchCase=\"'square'\" class=\"bc-preloader bc-preloader-square\"></div>\n    <div *ngSwitchCase=\"'line'\" class=\"bc-preloader bc-preloader-line\"></div>\n    <div *ngSwitchCase=\"'line-vertical'\" class=\"bc-preloader bc-preloader-line-vertical\"></div>\n    <div *ngSwitchDefault class=\"bc-preloader bc-preloader-circle\"></div>\n</ng-container>", directives: [{ type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-preloader', styles: [], template: "<ng-container [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'circle'\" class=\"bc-preloader bc-preloader-circle\"></div>\n    <div *ngSwitchCase=\"'square'\" class=\"bc-preloader bc-preloader-square\"></div>\n    <div *ngSwitchCase=\"'line'\" class=\"bc-preloader bc-preloader-line\"></div>\n    <div *ngSwitchCase=\"'line-vertical'\" class=\"bc-preloader bc-preloader-line-vertical\"></div>\n    <div *ngSwitchDefault class=\"bc-preloader bc-preloader-circle\"></div>\n</ng-container>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { type: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }] } });

/**
 * Importa el componente BcPreloaderComponent de
 * los diseños de Bancolombia S.A.
 *
 * @component <bc-preloader></bc-preloader>
 *
 * @param  type: Recibe un String con el tipo de preloader que se mostrará, este recibe los siguientes parámetros:
 * circle, square, line
 *
 * @param  width: Recibe un String con el numero de ancho en px o la dimensión (%, rem, em, etc) que tendrá el preloader que se mostrará
 *
 * @param  height: Recibe un String con el numero de largo en px o la dimensión (%, rem, em, etc) que tendrá el preloader que se mostrará
 *
 * @param  borderRadius: Recibe un String con el numero correspondiente al radio del borde. Solo se permite 2 o 3
 *
 * @example
 *
 * <bc-preloader type="circle"></bc-preloader>
 * <bc-preloader type="circle" width="150" height="150"></bc-preloader>
 * <bc-preloader type="line" width="60%"></bc-preloader>
 *
 * @author: Bancolombia S.A
 */
class BcPreloaderModule {
}
BcPreloaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPreloaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderModule, declarations: [BcPreloaderComponent], imports: [CommonModule], exports: [BcPreloaderComponent] });
BcPreloaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPreloaderComponent],
                    imports: [CommonModule],
                    exports: [BcPreloaderComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcPreloaderComponent, BcPreloaderModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-preloader.mjs.map
