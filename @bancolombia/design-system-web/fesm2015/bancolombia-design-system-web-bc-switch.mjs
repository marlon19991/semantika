import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcSwitchBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * componente Switch
 *
 * @export
 * @class BcSwitchWebComponent
 */
class BcSwitchComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcSwitchWebComponent
         */
        this.id = this.bcHelperService.getId(this);
        /**
         * Indica si el elemento esta deshabilitado.
         *
         * @type {boolean}
         * @memberof BcSwitchWebComponent
         */
        this.disabled = false;
        /**
         * Indica si el elemento es requerido.
         *
         * @type {boolean}
         * @memberof BcSwitchWebComponent
         */
        this.required = false;
        /**
         * Indica si el elemento lleva el label a la izquierda.
         *
         * @type {boolean}
         * @memberof BcSwitchWebComponent
         */
        this.leftLabel = false;
        /**
         * Valor del elemento seleccionado.
         *
         * @type {EventEmitter<boolean>}
         * @memberof BcSwitchWebComponent
         */
        this.changeState = new EventEmitter();
        this.outline = false;
        this.componentId = this.bcHelperService.getId(this);
        this.isChecked = false;
    }
    ngOnChanges(changes) {
        var _a;
        const isChecked = (_a = changes.isChecked) === null || _a === void 0 ? void 0 : _a.currentValue;
        if (isChecked !== undefined) {
            setTimeout(() => {
                this.bcSwitchBehavior.changeValue(this.isChecked);
                this.changeState.emit(this.isChecked);
            });
        }
    }
    ngAfterViewInit() {
        this.bcSwitchBehavior = new BcSwitchBehavior();
        this.bcSwitchBehavior.setId(this.componentId);
        const element = document.getElementById(this.componentId).parentElement;
        this.bcSwitchBehavior.setElement(element);
        this.bcSwitchBehavior.setUp();
    }
    /**
     * Cambio de estado del elemento.
     *
     * @memberof BcSwitchWebComponent
     */
    toggle() {
        this.isChecked = !this.isChecked;
        this.changeState.emit(this.isChecked);
    }
}
BcSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSwitchComponent, selector: "bc-switch", inputs: { isChecked: "isChecked", id: "id", disabled: "disabled", required: "required", leftLabel: "leftLabel" }, outputs: { changeState: "changeState" }, usesOnChanges: true, ngImport: i0, template: "<label class=\"bc-switch-container\" for=\"{{ componentId }}\"\n  [ngClass]=\"{ 'outline-element': outline, 'bc-switch-label-left': leftLabel }\" tabindex=\"{{ disabled ? -1 : 0 }}\"\n  attr.aria-disabled=\"{{ disabled ? 'true' : 'false' }}\">\n  <input type=\"checkbox\" (click)=\"toggle()\" [id]=\"componentId\" [disabled]=\"disabled\" [checked]=\"isChecked\"\n    [required]=\"required\" />\n  <div class=\"bc-switch\">\n    <div class=\"bc-switch-round\"></div>\n  </div>\n  <span><ng-content></ng-content></span>\n</label>", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-switch', template: "<label class=\"bc-switch-container\" for=\"{{ componentId }}\"\n  [ngClass]=\"{ 'outline-element': outline, 'bc-switch-label-left': leftLabel }\" tabindex=\"{{ disabled ? -1 : 0 }}\"\n  attr.aria-disabled=\"{{ disabled ? 'true' : 'false' }}\">\n  <input type=\"checkbox\" (click)=\"toggle()\" [id]=\"componentId\" [disabled]=\"disabled\" [checked]=\"isChecked\"\n    [required]=\"required\" />\n  <div class=\"bc-switch\">\n    <div class=\"bc-switch-round\"></div>\n  </div>\n  <span><ng-content></ng-content></span>\n</label>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { isChecked: [{
                type: Input
            }], id: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], leftLabel: [{
                type: Input
            }], changeState: [{
                type: Output
            }] } });

/**
 * Importa el componente switch con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-switch></bc-switch>
 *
 * @param  id ID personalizado del input (default: bc-toggle-input-1)
 * @param  disabled default: false
 * @param  required default: false
 * @param  isChecked default: false
 * @fires changeState: Emite el valor del switch cuando hay un cambio (true || false)
 * @example
 * <bc-switch
 *          (changeState)="myEvent($event)"
 *          [id]="'yourID'"
 *          [disabled]=false
 *          [required]=true
 *          [isChecked]=false> Label
 *  </bc-switch>
 *
 * @author: Bancolombia S.A
 */
class BcSwitchModule {
}
BcSwitchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcSwitchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchModule, declarations: [BcSwitchComponent], imports: [CommonModule], exports: [BcSwitchComponent] });
BcSwitchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcSwitchComponent],
                    imports: [CommonModule],
                    exports: [BcSwitchComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcSwitchComponent, BcSwitchModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-switch.mjs.map
