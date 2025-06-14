import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcProgressBarBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * Componente barra de progreso.
 * La barra de progreso indica el estado actual
 * de lo que se está procesando.
 * @export
 * @class BcProgressBarComponent
 */
class BcProgressBarComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         *
         *
         * @type {('lineal' | 'circle' | 'semi-circle')}
         * @memberof BcProgressBarComponent
         */
        this.type = 'lineal';
        /**
         * Id del elemento planner.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Tipo de color del background.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.backgroundColor = 'light';
        this.firstTime = false;
    }
    ngOnChanges(changes) {
        if (this.firstTime) {
            if (changes.value) {
                this.behavior.setProgress(this.value);
            }
        }
        this.firstTime = true;
    }
    ngAfterViewInit() {
        this.behavior = new BcProgressBarBehavior();
        this.behavior.setId(this.componentId);
        this.behavior.setUp();
    }
}
BcProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcProgressBarComponent, selector: "bc-progress-bar", inputs: { value: "value", type: "type", color: "color", diameter: "diameter", componentId: "componentId", backgroundColor: "backgroundColor", stroke: "stroke", orientation: "orientation" }, usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"bc-progress-bar\"\n  [attr.type]=\"type\"\n  [attr.value]=\"value\"\n  [attr.color]=\"color\"\n  [attr.backgroundColor]=\"backgroundColor\"\n  [id]=\"componentId\"\n  [attr.orientation]=\"orientation\"\n  *ngIf=\"type == 'lineal'\"\n></div>\n\n<div\n  class=\"bc-progress-bar\"\n  [attr.type]=\"type\"\n  [attr.value]=\"value\"\n  [attr.color]=\"color\"\n  [attr.backgroundColor]=\"backgroundColor\"\n  [attr.stroke]=\"stroke\"\n  [attr.diameter]=\"diameter\"\n  [id]=\"componentId\"\n  *ngIf=\"type == 'circle' || type == 'semi-circle'\"\n>\n  <div class=\"bc-progress-bar-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-progress-bar', template: "<div\n  class=\"bc-progress-bar\"\n  [attr.type]=\"type\"\n  [attr.value]=\"value\"\n  [attr.color]=\"color\"\n  [attr.backgroundColor]=\"backgroundColor\"\n  [id]=\"componentId\"\n  [attr.orientation]=\"orientation\"\n  *ngIf=\"type == 'lineal'\"\n></div>\n\n<div\n  class=\"bc-progress-bar\"\n  [attr.type]=\"type\"\n  [attr.value]=\"value\"\n  [attr.color]=\"color\"\n  [attr.backgroundColor]=\"backgroundColor\"\n  [attr.stroke]=\"stroke\"\n  [attr.diameter]=\"diameter\"\n  [id]=\"componentId\"\n  *ngIf=\"type == 'circle' || type == 'semi-circle'\"\n>\n  <div class=\"bc-progress-bar-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { value: [{
                type: Input
            }], type: [{
                type: Input
            }], color: [{
                type: Input
            }], diameter: [{
                type: Input
            }], componentId: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], stroke: [{
                type: Input
            }], orientation: [{
                type: Input
            }] } });

/**
 * Importa el componente de barra de progreso con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-progress-bar></bc-progress-bar>
 *
 * @param  size Tamaño en pixeles de la barra de progreso
 * @param  direction Vertical || horizontal (default)
 * @param  progress Valor porcentual de la barra
 * @param  maxValue Valor maximo de la barra
 * @param  minValue Valor minimo de la barra
 * @example
 * <bc-progress-bar
 *      size="500"
 *      progress="10"
 *      maxValue = 200
 *      minValue = 0
 *      direction="vertical">
 * </bc-progress-bar>
 *
 * @author: Bancolombia S.A
 */
class BcProgressBarWebModule {
}
BcProgressBarWebModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarWebModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcProgressBarWebModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarWebModule, declarations: [BcProgressBarComponent], imports: [CommonModule], exports: [BcProgressBarComponent] });
BcProgressBarWebModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarWebModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarWebModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcProgressBarComponent],
                    imports: [CommonModule],
                    exports: [BcProgressBarComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcProgressBarComponent, BcProgressBarWebModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-progress-bar.mjs.map
