import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcFloatMenuBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-preloader';
import { BcPreloaderModule } from '@bancolombia/design-system-web/bc-preloader';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

var NumberOfPreloaders;
(function (NumberOfPreloaders) {
    NumberOfPreloaders[NumberOfPreloaders["ONE"] = 1] = "ONE";
    NumberOfPreloaders[NumberOfPreloaders["TWO"] = 2] = "TWO";
    NumberOfPreloaders[NumberOfPreloaders["THREE"] = 3] = "THREE";
    NumberOfPreloaders[NumberOfPreloaders["FOUR"] = 4] = "FOUR";
})(NumberOfPreloaders || (NumberOfPreloaders = {}));
class BcFloatMenuComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        this.componentId = this.bcHelperService.getId(this);
        this.checkbox = false;
        this.radioButtons = false;
        this.options = [];
        this.arrowCenter = false;
        this.arrowLeft = false;
        this.arrowRight = false;
        this.positionRight = false;
        this.positionLeft = false;
        this.selectedIcon = false;
        this.row = null;
        /**
         * Parametro que permite mostrar el preloader
         * @param havePreloader
         * @type boolean
         * @default false
         */
        this.havePreloader = false;
        /**
         * Parametro que permite configurar el ancho del preloader
         * @param floatMenuWidth
         * @type string
         * @default 'default'
         * @description valid values: 'full', 'default'
         * @description 'full' = 100% width
         * @description 'default' = preloader width (100px)
         */
        this.floatMenuWidth = 'default';
        this.onChange = new EventEmitter();
        this.dropdownId = this.bcHelperService.getId(this);
        this.changed = new EventEmitter();
        this.preloaderList = [];
    }
    ngOnInit() {
        this.generatePreloaderList();
    }
    ngAfterViewInit() {
        this.bcFloatMenuBehavior = new BcFloatMenuBehavior();
        this.bcFloatMenuBehavior.setId(this.componentId);
        const element = this.bcFloatMenuBehavior.getMySelf().querySelector(`[class~='bc-float-menu']`);
        this.bcFloatMenuBehavior.setElement(element);
        this.bcFloatMenuBehavior.setUp();
    }
    ngOnChanges(change) {
        const TIMEOUT_MS = 500;
        if (change.options.currentValue.length > 0 && this.havePreloader) {
            BcFloatMenuBehavior.closeAll();
            this.bcFloatMenuBehavior.setUp();
            setTimeout(() => {
                this.bcFloatMenuBehavior.setUp();
            }, TIMEOUT_MS);
        }
    }
    generatePreloaderList() {
        this.preloaderList = Array.from({ length: this.numOfpreloaders }, (_, index) => index + 1);
    }
    selectOption(event, optionId) {
        this.onChange.emit({
            optionSeleted: optionId,
            rowData: this.row ? this.row : null,
            customData: this.data ? this.data : null,
        });
    }
}
BcFloatMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFloatMenuComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcFloatMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcFloatMenuComponent, selector: "bc-float-menu", inputs: { componentId: "componentId", checkbox: "checkbox", radioButtons: "radioButtons", options: "options", arrowCenter: "arrowCenter", arrowLeft: "arrowLeft", arrowRight: "arrowRight", positionRight: "positionRight", positionLeft: "positionLeft", selectedIcon: "selectedIcon", row: "row", data: "data", havePreloader: "havePreloader", numOfpreloaders: "numOfpreloaders", floatMenuWidth: "floatMenuWidth" }, outputs: { onChange: "onChange", changed: "changed" }, usesOnChanges: true, ngImport: i0, template: "<div [id]=\"componentId\">\n  <ng-content></ng-content>\n  <div\n    class=\"bc-float-menu\"\n    id=\"BcDropdown_{{ dropdownId }}\"\n    [ngClass]=\"{\n      'bc-float-menu-arrow-center': arrowCenter,\n      'bc-float-menu-arrow-right': arrowRight,\n      'bc-float-menu-arrow-left': arrowLeft,\n      'bc-float-menu-positon-right': positionRight,\n      'bc-float-menu-positon-left': positionLeft\n    }\"\n    [attr.width]=\"floatMenuWidth\"\n    [attr.aria-angular]=\"true\"\n  >\n    <div\n      *ngIf=\"arrowCenter || arrowRight || arrowLeft\"\n      class=\"bc-float-menu-arrow\"\n    ></div>\n    <section\n      class=\"bc-float-menu-content\"\n      [ngClass]=\"{ 'bc-float-menu-selected-icon': selectedIcon }\"\n      [id]=\"dropdownId\"\n    >\n      <ul>\n        <ng-container\n          *ngIf=\"havePreloader && options.length === 0; else defaultOption\"\n        >\n          <li\n            *ngFor=\"let item of preloaderList\"\n            [attr.aria-disabled]=\"'true'\"\n            [attr.aria-label]=\"'Preloader'\"\n          >\n            <bc-preloader type=\"line\" [width]=\"floatMenuWidth\"></bc-preloader>\n          </li>\n        </ng-container>\n        <ng-template #defaultOption>\n          <li\n            [ngClass]=\"{\n              'bc-float-menu-option-disabled': option.disabled == 'disabled',\n              'bc-float-menu-option': option.disabled != 'disabled'\n            }\"\n            *ngFor=\"let option of options\"\n            (click)=\"selectOption($event, option)\"\n            [attr.aria-disabled]=\"option.disabled ? 'true' : 'false'\"\n          >\n            <img\n              *ngIf=\"option.imagenSrc\"\n              class=\"bc-icon\"\n              src=\"{{ option.imagLeft }}\"\n              alt=\"{{ option.altImg }}\"\n            />\n            <em *ngIf=\"option.iconLeft\" class=\"bc-icon bc-sm\">{{\n              option.iconLeft\n            }}</em>\n            <div *ngIf=\"radioButtons\" class=\"bc-float-menu-inputs\">\n              <div class=\"bc-radio-group\">\n                <label class=\"bc-radio-label\">\n                  <input\n                    class=\"bc-float-menu-input\"\n                    type=\"radio\"\n                    name=\"default\"\n                    value=\"1\"\n                    role=\"radio\"\n                    tabindex=\"0\"\n                    aria-checked=\"false\"\n                    aria-hidden=\"true\"\n                  />\n                  <span class=\"bc-radio\"></span>\n                </label>\n              </div>\n            </div>\n            <div *ngIf=\"checkbox\" class=\"bc-float-menu-inputs\">\n              <label class=\"bc-container-checkbox\">\n                <input\n                  class=\"bc-float-menu-input\"\n                  type=\"checkbox\"\n                  aria-hidden=\"true\"\n                />\n                <span class=\"bc-checkbox\"></span>\n              </label>\n            </div>\n            <a>\n              <span *ngIf=\"option.mainText\" class=\"bc-float-menu-main-text\">{{\n                option.mainText\n              }}</span>\n              <span\n                *ngIf=\"option.secondText\"\n                class=\"bc-float-menu-secondary-text\"\n                >{{ option.secondText }}</span\n              >\n            </a>\n            <em *ngIf=\"option.iconRight\" class=\"bc-icon bc-sm\">{{\n              option.iconRight\n            }}</em>\n            <img\n              *ngIf=\"option.imagRight\"\n              class=\"bc-icon\"\n              [src]=\"option.imagRight\"\n              alt=\"{{ option.altImg }}\"\n            />\n          </li>\n        </ng-template>\n      </ul>\n    </section>\n  </div>\n</div>\n", components: [{ type: i2.BcPreloaderComponent, selector: "bc-preloader", inputs: ["type", "width", "height", "borderRadius"] }], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFloatMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-float-menu', template: "<div [id]=\"componentId\">\n  <ng-content></ng-content>\n  <div\n    class=\"bc-float-menu\"\n    id=\"BcDropdown_{{ dropdownId }}\"\n    [ngClass]=\"{\n      'bc-float-menu-arrow-center': arrowCenter,\n      'bc-float-menu-arrow-right': arrowRight,\n      'bc-float-menu-arrow-left': arrowLeft,\n      'bc-float-menu-positon-right': positionRight,\n      'bc-float-menu-positon-left': positionLeft\n    }\"\n    [attr.width]=\"floatMenuWidth\"\n    [attr.aria-angular]=\"true\"\n  >\n    <div\n      *ngIf=\"arrowCenter || arrowRight || arrowLeft\"\n      class=\"bc-float-menu-arrow\"\n    ></div>\n    <section\n      class=\"bc-float-menu-content\"\n      [ngClass]=\"{ 'bc-float-menu-selected-icon': selectedIcon }\"\n      [id]=\"dropdownId\"\n    >\n      <ul>\n        <ng-container\n          *ngIf=\"havePreloader && options.length === 0; else defaultOption\"\n        >\n          <li\n            *ngFor=\"let item of preloaderList\"\n            [attr.aria-disabled]=\"'true'\"\n            [attr.aria-label]=\"'Preloader'\"\n          >\n            <bc-preloader type=\"line\" [width]=\"floatMenuWidth\"></bc-preloader>\n          </li>\n        </ng-container>\n        <ng-template #defaultOption>\n          <li\n            [ngClass]=\"{\n              'bc-float-menu-option-disabled': option.disabled == 'disabled',\n              'bc-float-menu-option': option.disabled != 'disabled'\n            }\"\n            *ngFor=\"let option of options\"\n            (click)=\"selectOption($event, option)\"\n            [attr.aria-disabled]=\"option.disabled ? 'true' : 'false'\"\n          >\n            <img\n              *ngIf=\"option.imagenSrc\"\n              class=\"bc-icon\"\n              src=\"{{ option.imagLeft }}\"\n              alt=\"{{ option.altImg }}\"\n            />\n            <em *ngIf=\"option.iconLeft\" class=\"bc-icon bc-sm\">{{\n              option.iconLeft\n            }}</em>\n            <div *ngIf=\"radioButtons\" class=\"bc-float-menu-inputs\">\n              <div class=\"bc-radio-group\">\n                <label class=\"bc-radio-label\">\n                  <input\n                    class=\"bc-float-menu-input\"\n                    type=\"radio\"\n                    name=\"default\"\n                    value=\"1\"\n                    role=\"radio\"\n                    tabindex=\"0\"\n                    aria-checked=\"false\"\n                    aria-hidden=\"true\"\n                  />\n                  <span class=\"bc-radio\"></span>\n                </label>\n              </div>\n            </div>\n            <div *ngIf=\"checkbox\" class=\"bc-float-menu-inputs\">\n              <label class=\"bc-container-checkbox\">\n                <input\n                  class=\"bc-float-menu-input\"\n                  type=\"checkbox\"\n                  aria-hidden=\"true\"\n                />\n                <span class=\"bc-checkbox\"></span>\n              </label>\n            </div>\n            <a>\n              <span *ngIf=\"option.mainText\" class=\"bc-float-menu-main-text\">{{\n                option.mainText\n              }}</span>\n              <span\n                *ngIf=\"option.secondText\"\n                class=\"bc-float-menu-secondary-text\"\n                >{{ option.secondText }}</span\n              >\n            </a>\n            <em *ngIf=\"option.iconRight\" class=\"bc-icon bc-sm\">{{\n              option.iconRight\n            }}</em>\n            <img\n              *ngIf=\"option.imagRight\"\n              class=\"bc-icon\"\n              [src]=\"option.imagRight\"\n              alt=\"{{ option.altImg }}\"\n            />\n          </li>\n        </ng-template>\n      </ul>\n    </section>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], checkbox: [{
                type: Input
            }], radioButtons: [{
                type: Input
            }], options: [{
                type: Input
            }], arrowCenter: [{
                type: Input
            }], arrowLeft: [{
                type: Input
            }], arrowRight: [{
                type: Input
            }], positionRight: [{
                type: Input
            }], positionLeft: [{
                type: Input
            }], selectedIcon: [{
                type: Input
            }], row: [{
                type: Input
            }], data: [{
                type: Input
            }], havePreloader: [{
                type: Input
            }], numOfpreloaders: [{
                type: Input
            }], floatMenuWidth: [{
                type: Input
            }], onChange: [{
                type: Output
            }], changed: [{
                type: Output
            }] } });

class BcFloatMenuModule {
}
BcFloatMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFloatMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcFloatMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFloatMenuModule, declarations: [BcFloatMenuComponent], imports: [CommonModule, BcPreloaderModule], exports: [BcFloatMenuComponent] });
BcFloatMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFloatMenuModule, imports: [[CommonModule, BcPreloaderModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFloatMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcFloatMenuComponent],
                    imports: [CommonModule, BcPreloaderModule],
                    exports: [BcFloatMenuComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcFloatMenuComponent, BcFloatMenuModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-float-menu.mjs.map
