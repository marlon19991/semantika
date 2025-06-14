import * as i11 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i12 from '@bancolombia/design-system-web/bc-button';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import * as i6 from '@bancolombia/design-system-web/bc-float-menu';
import { BcFloatMenuModule } from '@bancolombia/design-system-web/bc-float-menu';
import * as i8 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i7 from '@bancolombia/design-system-web/bc-icon-button';
import { BcIconButtonModule } from '@bancolombia/design-system-web/bc-icon-button';
import * as i5 from '@bancolombia/design-system-web/bc-status';
import { BcStatusModule } from '@bancolombia/design-system-web/bc-status';
import * as i9 from '@bancolombia/design-system-web/bc-tag';
import { BcTagModule } from '@bancolombia/design-system-web/bc-tag';
import * as i1 from '@bancolombia/design-system-web/bc-card-container';
import { BcCardContainerModule } from '@bancolombia/design-system-web/bc-card-container';
import * as i10 from '@bancolombia/design-system-web/bc-illustration';
import { BcIllustrationModule } from '@bancolombia/design-system-web/bc-illustration';
import { BcFloatMenuBehavior } from '@bancolombia/design-system-behaviors';
import * as i2 from '@bancolombia/design-system-web/bc-logo';
import { BcLogoModule } from '@bancolombia/design-system-web/bc-logo';
import * as i3 from '@bancolombia/design-system-web/bc-checkbox';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import * as i4 from '@bancolombia/design-system-web/bc-radio';
import { BcRadioModule } from '@bancolombia/design-system-web/bc-radio';

/**
 * Componente Card Select
 *
 * @export
 * @class BcCardSelectComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcCardPrimaryComponent {
    constructor() {
        /**
        * Salida de evento del componente Tag.
        *
        * @type {(EventEmitter<any>)}
        * @memberof BcCardPrimaryComponent
        */
        this.handleEvent = new EventEmitter();
        this.propagateEvent = (id) => {
            this.handleEvent.emit(id);
        };
    }
    ngOnInit() {
        this.infoAccount = this.dataConfig.infoAccount;
        this.dataOne = this.dataConfig.dataOne;
        this.dataTwo = this.dataConfig.dataTwo;
        this.componentStatus = this.dataConfig.componentStatus;
        this.componentTagOne = this.dataConfig.componentTagOne;
        this.componentTagTwo = this.dataConfig.componentTagTwo;
        this.componentButton = this.dataConfig.componentButton;
        this.componentIconButton = this.dataConfig.componentIconButton;
    }
    ngAfterViewInit() {
        BcFloatMenuBehavior.setUpAll();
    }
}
BcCardPrimaryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardPrimaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcCardPrimaryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardPrimaryComponent, selector: "bc-card-primary", inputs: { dataConfig: "dataConfig" }, outputs: { handleEvent: "handleEvent" }, ngImport: i0, template: "<ng-container\n  *ngIf=\"dataConfig.cardPosition === 'horizontal'; then cardHorizontal; else cardVertical\">\n</ng-container>\n<ng-template #cardHorizontal>\n<bc-card-container [id]=\"dataConfig.idCard\" cardType=\"default\" borderClass=\"bc-border-radius-3-right\" tabindex=\"0\">\n  <div class=\"bc-card-primary bc-card-primary-{{ dataConfig.cardPosition}} {{ dataConfig.classColorBorder }}\"\n  [ngClass]=\"dataConfig.borderColor ? 'bc-card-primary-color-' + dataConfig.cardPosition : ''\"\n  [attr.aria-label]=\"dataConfig.textAriaLabel\">\n    <section class=\"bc-card-primary-header bc-d-flex\">\n      <div class=\"icon bc-me-3\" *ngIf=\"dataConfig.icon\">\n        <i *ngIf=\"dataConfig.typeIcon === 'icon'\" class=\"bc-icon bc-st bc-p-2\">{{dataConfig.icon}}</i>\n        <bc-logo *ngIf=\"dataConfig.typeIcon === 'logos'\"\n        [name]=\"dataConfig.icon\"\n        size=\"64px\"\n        aria-hidden=\"true\"\n        [attr.aria-label]=\"dataConfig.icon\"\n        class=\"image-franchise\"\n        ></bc-logo>\n      </div>\n      <div *ngIf=\"dataConfig.componentCheckbox === true\">\n        <bc-checkbox (changeState)=\"propagateEvent(dataConfig.idCard)\"></bc-checkbox>\n      </div>\n      <div *ngIf=\"dataConfig.componentRadio === true\">\n        <bc-radio-group defaultValue=\"0\" (onChange)=\"propagateEvent(dataConfig.idCard)\">\n          <bc-radio class=\"bc-my-4\" value=\"1\"></bc-radio>\n        </bc-radio-group>\n      </div>\n      <div class=\"info-cuenta bc-me-3\">\n        <p *ngIf=\"infoAccount.title\" class=\"{{infoAccount.classTitle}} bc-d-block\">{{infoAccount.title}}</p>\n        <p *ngIf=\"infoAccount.subtitle\" class=\"{{infoAccount.classSubtitle}} bc-d-block\">{{infoAccount.subtitle}}</p>\n        <p *ngIf=\"infoAccount.textOptional\" class=\"{{infoAccount.classTextOptional}} bc-d-block\">{{infoAccount.textOptional}}</p>\n        <p *ngIf=\"infoAccount.textOptionalTwo\" class=\"{{infoAccount.classTextOptionalTwo}} bc-d-block\">{{infoAccount.textOptionalTwo}}</p>\n        <bc-status *ngIf=\"componentStatus\" [type]=\"componentStatus.type\" [color]=\"componentStatus.color\" [border]=\"componentStatus.border\" [customIcon]=\"componentStatus.icon\" [text]=\"componentStatus.text\"></bc-status>\n      </div>\n      <bc-float-menu *ngIf=\"componentIconButton\" [options]=\"componentIconButton.options\" class=\"bc-ms-auto\">\n          <bc-icon-button  type=\"outline\" size=\"small\" customIcon=\"secondary-menu\" >\n          </bc-icon-button>\n      </bc-float-menu>\n      <div *ngIf=\"dataConfig.cardType === 'light-card'||dataConfig.cardType === 'new-product-home-card'\" class=\"actions bc-d-flex bc-align-items-center\">\n        <em class=\"bc-icon\" aria-hidden=\"true\">arrow2-right</em>\n      </div>\n    </section>\n    <section *ngIf=\"dataOne || dataTwo\" class=\"bc-card-primary-body bc-mt-3\">\n      <div class=\"saldo bc-d-flex bc-justify-content-between\" *ngIf=\"dataOne\" >\n        <div>\n          <p class=\"label-saldo bc-opensans-font-style-2-regular bc-mb-1 bc-d-block\">{{dataOne.titleData}}</p>\n          <p class=\"numero-saldo bc-d-block\" [ngClass]=\"dataOne.numericCustomClass\">{{dataOne.data}}</p>\n        </div>\n        <bc-logo *ngIf=\"dataOne.iconFranchise\"\n        [name]=\"dataOne.iconFranchise\"\n        size=\"80px\"\n        aria-hidden=\"true\"\n        [attr.aria-label]=\"dataOne.iconFranchise\"\n        class=\"image-franchise\"\n        [ngClass]=\"{'image-franchise': dataOne.iconFranchise !== 'mastercard'}\"\n        ></bc-logo>\n      </div>\n      <div class=\"saldo bc-mt-3\" *ngIf=\"dataTwo\">\n        <p class=\"label-saldo bc-opensans-font-style-2-regular bc-mb-1 bc-d-block\">{{dataTwo.titleData}}</p>\n        <p class=\"numero-saldo bc-d-block\" [ngClass]=\"dataTwo.numericCustomClass\">{{dataTwo.data}}</p>\n      </div>\n    </section>\n    <section class=\"bc-card-primary-buttons bc-mt-4\" *ngIf=\"componentButton || componentTagOne || componentTagTwo\">\n      <button *ngIf=\"componentButton\" bc-button sizeButton=\"small\" (click)=\"this.propagateEvent(componentButton.id)\">\n        {{componentButton.text}} <bc-icon *ngIf=\"componentButton.icon\">{{componentButton.icon}}</bc-icon>\n      </button>\n\n      <bc-tag *ngIf=\"componentTagOne\"\n        [textElement]=\"componentTagOne.textElement\"\n        [componentId]=\"componentTagOne.componentId\"\n        [textAriaLabel]=\"componentTagOne.textAriaLabel\"\n        [widthTag]=\"componentTagOne.widthTag\"\n        (click)=\"this.propagateEvent(componentTagOne.componentId)\"\n      >\n      </bc-tag>\n      <bc-tag *ngIf=\"componentTagTwo\"\n        [textElement]=\"componentTagTwo.textElement\"\n        [componentId]=\"componentTagTwo.componentId\"\n        [textAriaLabel]=\"componentTagTwo.textAriaLabel\"\n        [widthTag]=\"componentTagTwo.widthTag\"\n        (click)=\"this.propagateEvent(componentTagTwo.componentId)\"\n      >\n      </bc-tag>\n    </section>\n  </div>\n</bc-card-container>\n</ng-template>\n\n<ng-template #cardVertical>\n  <bc-card-container id=\"card1\" cardType=\"default\" borderClass=\"bc-border-radius-3-bottom\" tabindex=\"0\">\n    <div class=\"bc-card-primary bc-card-primary-{{ dataConfig.cardPosition}} {{ dataConfig.classColorBorder }}\"\n    [ngClass]=\"dataConfig.borderColor ? 'bc-card-primary-color-' + dataConfig.cardPosition : ''\"\n    [attr.aria-label]=\"dataConfig.textAriaLabel\">\n      <section class=\"bc-card-primary-header bc-d-flex bc-justify-content-between bc-mb-2\">\n        <div class=\"icon bc-d-flex bc-align-items-center\">\n          <i *ngIf=\"dataConfig.typeIcon === 'icon'\" class=\"bc-icon bc-st bc-p-2\">\n            {{dataConfig.icon}}\n          </i>\n          <bc-illustration *ngIf=\"dataConfig.typeIcon === 'illustrations'\"\n          [name]=\"dataConfig.icon\"\n          size=\"5rem\"\n          aria-hidden=\"true\"\n          a[attr.aria-label]=\"dataConfig.icon\"\n          ></bc-illustration>\n        </div>\n        <div class=\"actions bc-d-flex bc-align-items-center\">\n          <em class=\"bc-icon\" aria-hidden=\"true\">arrow2-right</em>\n        </div>\n      </section>\n      <section *ngIf=\"dataOne\" class=\"bc-card-primary-body\">\n        <div class=\"cuenta bc-mb-4\">\n          <p *ngIf=\"infoAccount.title\" class=\"{{infoAccount.classTitle}} bc-d-block bc-mb-1\">{{infoAccount.title}}</p>\n          <p *ngIf=\"infoAccount.subtitle\" class=\"{{infoAccount.classSubtitle}} bc-d-block bc-mb-1\">{{infoAccount.subtitle}}</p>\n          <p *ngIf=\"infoAccount.textOptional\" class=\"{{infoAccount.classTextOptional}} bc-d-block\">{{infoAccount.textOptional}}</p>\n          <p *ngIf=\"infoAccount.textOptionalTwo\" class=\"{{infoAccount.classTextOptionalTwo}} bc-d-block\">{{infoAccount.textOptionalTwo}}</p>\n          <bc-status *ngIf=\"componentStatus\"  [type]=\"componentStatus.type\" [color]=\"componentStatus.color\" [border]=\"componentStatus.border\" [customIcon]=\"componentStatus.icon\" [text]=\"componentStatus.text\"></bc-status>\n        </div>\n        <div class=\"saldo\" *ngIf=\"dataOne\">\n          <p *ngIf=\"dataOne.titleData\" class=\"label-saldo bc-opensans-font-style-2-regular bc-mb-1 bc-d-block\">{{dataOne.titleData}}</p>\n          <p *ngIf=\"dataOne.data\"class=\"numero-saldo bc-d-block\">{{dataOne.data}}</p>\n        </div>\n      </section>\n    </div>\n  </bc-card-container>\n</ng-template>\n\n\n", components: [{ type: i1.BcCardContainerComponent, selector: "bc-card-container", inputs: ["cardType", "borderClass", "shadowClass", "cardColorClass", "borderColorClass", "otherClass"] }, { type: i2.BcLogoComponent, selector: "bc-logo", inputs: ["size", "alt", "name", "class"] }, { type: i3.BcCheckboxComponent, selector: "bc-checkbox", inputs: ["id", "name", "value", "label", "enabled", "isChecked", "indeterminate"], outputs: ["changeState", "changeStateForParent"] }, { type: i4.BcRadioGroupComponent, selector: "bc-radio-group", inputs: ["disabled", "defaultValue", "name", "background"], outputs: ["changeValue", "onDisabled"] }, { type: i4.BcRadioComponent, selector: "bc-radio", inputs: ["id", "name", "value", "enabled"], outputs: ["changeStateForParent"] }, { type: i5.BcStatusComponent, selector: "bc-status", inputs: ["type", "color", "border", "customIcon", "text", "disabledTag", "widthTag"] }, { type: i6.BcFloatMenuComponent, selector: "bc-float-menu", inputs: ["componentId", "checkbox", "radioButtons", "options", "arrowCenter", "arrowLeft", "arrowRight", "positionRight", "positionLeft", "selectedIcon", "row", "data", "havePreloader", "numOfpreloaders", "floatMenuWidth"], outputs: ["onChange", "changed"] }, { type: i7.BcIconButtonComponent, selector: "bc-icon-button", inputs: ["type", "color", "size", "shadow", "customIcon", "statusButton", "seleted", "selected", "ariaLabel"] }, { type: i8.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }, { type: i9.BcTagComponent, selector: "bc-tag", inputs: ["componentId", "iconLeft", "iconRight", "iconAdd", "iconDelete", "textElement", "status", "typeTag", "values", "typeButtonTag", "textAriaLabel", "widthTag", "showOptionSelected"], outputs: ["valueOutput", "onClickButton"] }, { type: i10.BcIllustrationComponent, selector: "bc-illustration", inputs: ["size", "alt", "name", "class"] }], directives: [{ type: i11.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i12.BcButtonDirective, selector: "[bc-button]", inputs: ["typeButton", "sizeButton", "width", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardPrimaryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-primary', template: "<ng-container\n  *ngIf=\"dataConfig.cardPosition === 'horizontal'; then cardHorizontal; else cardVertical\">\n</ng-container>\n<ng-template #cardHorizontal>\n<bc-card-container [id]=\"dataConfig.idCard\" cardType=\"default\" borderClass=\"bc-border-radius-3-right\" tabindex=\"0\">\n  <div class=\"bc-card-primary bc-card-primary-{{ dataConfig.cardPosition}} {{ dataConfig.classColorBorder }}\"\n  [ngClass]=\"dataConfig.borderColor ? 'bc-card-primary-color-' + dataConfig.cardPosition : ''\"\n  [attr.aria-label]=\"dataConfig.textAriaLabel\">\n    <section class=\"bc-card-primary-header bc-d-flex\">\n      <div class=\"icon bc-me-3\" *ngIf=\"dataConfig.icon\">\n        <i *ngIf=\"dataConfig.typeIcon === 'icon'\" class=\"bc-icon bc-st bc-p-2\">{{dataConfig.icon}}</i>\n        <bc-logo *ngIf=\"dataConfig.typeIcon === 'logos'\"\n        [name]=\"dataConfig.icon\"\n        size=\"64px\"\n        aria-hidden=\"true\"\n        [attr.aria-label]=\"dataConfig.icon\"\n        class=\"image-franchise\"\n        ></bc-logo>\n      </div>\n      <div *ngIf=\"dataConfig.componentCheckbox === true\">\n        <bc-checkbox (changeState)=\"propagateEvent(dataConfig.idCard)\"></bc-checkbox>\n      </div>\n      <div *ngIf=\"dataConfig.componentRadio === true\">\n        <bc-radio-group defaultValue=\"0\" (onChange)=\"propagateEvent(dataConfig.idCard)\">\n          <bc-radio class=\"bc-my-4\" value=\"1\"></bc-radio>\n        </bc-radio-group>\n      </div>\n      <div class=\"info-cuenta bc-me-3\">\n        <p *ngIf=\"infoAccount.title\" class=\"{{infoAccount.classTitle}} bc-d-block\">{{infoAccount.title}}</p>\n        <p *ngIf=\"infoAccount.subtitle\" class=\"{{infoAccount.classSubtitle}} bc-d-block\">{{infoAccount.subtitle}}</p>\n        <p *ngIf=\"infoAccount.textOptional\" class=\"{{infoAccount.classTextOptional}} bc-d-block\">{{infoAccount.textOptional}}</p>\n        <p *ngIf=\"infoAccount.textOptionalTwo\" class=\"{{infoAccount.classTextOptionalTwo}} bc-d-block\">{{infoAccount.textOptionalTwo}}</p>\n        <bc-status *ngIf=\"componentStatus\" [type]=\"componentStatus.type\" [color]=\"componentStatus.color\" [border]=\"componentStatus.border\" [customIcon]=\"componentStatus.icon\" [text]=\"componentStatus.text\"></bc-status>\n      </div>\n      <bc-float-menu *ngIf=\"componentIconButton\" [options]=\"componentIconButton.options\" class=\"bc-ms-auto\">\n          <bc-icon-button  type=\"outline\" size=\"small\" customIcon=\"secondary-menu\" >\n          </bc-icon-button>\n      </bc-float-menu>\n      <div *ngIf=\"dataConfig.cardType === 'light-card'||dataConfig.cardType === 'new-product-home-card'\" class=\"actions bc-d-flex bc-align-items-center\">\n        <em class=\"bc-icon\" aria-hidden=\"true\">arrow2-right</em>\n      </div>\n    </section>\n    <section *ngIf=\"dataOne || dataTwo\" class=\"bc-card-primary-body bc-mt-3\">\n      <div class=\"saldo bc-d-flex bc-justify-content-between\" *ngIf=\"dataOne\" >\n        <div>\n          <p class=\"label-saldo bc-opensans-font-style-2-regular bc-mb-1 bc-d-block\">{{dataOne.titleData}}</p>\n          <p class=\"numero-saldo bc-d-block\" [ngClass]=\"dataOne.numericCustomClass\">{{dataOne.data}}</p>\n        </div>\n        <bc-logo *ngIf=\"dataOne.iconFranchise\"\n        [name]=\"dataOne.iconFranchise\"\n        size=\"80px\"\n        aria-hidden=\"true\"\n        [attr.aria-label]=\"dataOne.iconFranchise\"\n        class=\"image-franchise\"\n        [ngClass]=\"{'image-franchise': dataOne.iconFranchise !== 'mastercard'}\"\n        ></bc-logo>\n      </div>\n      <div class=\"saldo bc-mt-3\" *ngIf=\"dataTwo\">\n        <p class=\"label-saldo bc-opensans-font-style-2-regular bc-mb-1 bc-d-block\">{{dataTwo.titleData}}</p>\n        <p class=\"numero-saldo bc-d-block\" [ngClass]=\"dataTwo.numericCustomClass\">{{dataTwo.data}}</p>\n      </div>\n    </section>\n    <section class=\"bc-card-primary-buttons bc-mt-4\" *ngIf=\"componentButton || componentTagOne || componentTagTwo\">\n      <button *ngIf=\"componentButton\" bc-button sizeButton=\"small\" (click)=\"this.propagateEvent(componentButton.id)\">\n        {{componentButton.text}} <bc-icon *ngIf=\"componentButton.icon\">{{componentButton.icon}}</bc-icon>\n      </button>\n\n      <bc-tag *ngIf=\"componentTagOne\"\n        [textElement]=\"componentTagOne.textElement\"\n        [componentId]=\"componentTagOne.componentId\"\n        [textAriaLabel]=\"componentTagOne.textAriaLabel\"\n        [widthTag]=\"componentTagOne.widthTag\"\n        (click)=\"this.propagateEvent(componentTagOne.componentId)\"\n      >\n      </bc-tag>\n      <bc-tag *ngIf=\"componentTagTwo\"\n        [textElement]=\"componentTagTwo.textElement\"\n        [componentId]=\"componentTagTwo.componentId\"\n        [textAriaLabel]=\"componentTagTwo.textAriaLabel\"\n        [widthTag]=\"componentTagTwo.widthTag\"\n        (click)=\"this.propagateEvent(componentTagTwo.componentId)\"\n      >\n      </bc-tag>\n    </section>\n  </div>\n</bc-card-container>\n</ng-template>\n\n<ng-template #cardVertical>\n  <bc-card-container id=\"card1\" cardType=\"default\" borderClass=\"bc-border-radius-3-bottom\" tabindex=\"0\">\n    <div class=\"bc-card-primary bc-card-primary-{{ dataConfig.cardPosition}} {{ dataConfig.classColorBorder }}\"\n    [ngClass]=\"dataConfig.borderColor ? 'bc-card-primary-color-' + dataConfig.cardPosition : ''\"\n    [attr.aria-label]=\"dataConfig.textAriaLabel\">\n      <section class=\"bc-card-primary-header bc-d-flex bc-justify-content-between bc-mb-2\">\n        <div class=\"icon bc-d-flex bc-align-items-center\">\n          <i *ngIf=\"dataConfig.typeIcon === 'icon'\" class=\"bc-icon bc-st bc-p-2\">\n            {{dataConfig.icon}}\n          </i>\n          <bc-illustration *ngIf=\"dataConfig.typeIcon === 'illustrations'\"\n          [name]=\"dataConfig.icon\"\n          size=\"5rem\"\n          aria-hidden=\"true\"\n          a[attr.aria-label]=\"dataConfig.icon\"\n          ></bc-illustration>\n        </div>\n        <div class=\"actions bc-d-flex bc-align-items-center\">\n          <em class=\"bc-icon\" aria-hidden=\"true\">arrow2-right</em>\n        </div>\n      </section>\n      <section *ngIf=\"dataOne\" class=\"bc-card-primary-body\">\n        <div class=\"cuenta bc-mb-4\">\n          <p *ngIf=\"infoAccount.title\" class=\"{{infoAccount.classTitle}} bc-d-block bc-mb-1\">{{infoAccount.title}}</p>\n          <p *ngIf=\"infoAccount.subtitle\" class=\"{{infoAccount.classSubtitle}} bc-d-block bc-mb-1\">{{infoAccount.subtitle}}</p>\n          <p *ngIf=\"infoAccount.textOptional\" class=\"{{infoAccount.classTextOptional}} bc-d-block\">{{infoAccount.textOptional}}</p>\n          <p *ngIf=\"infoAccount.textOptionalTwo\" class=\"{{infoAccount.classTextOptionalTwo}} bc-d-block\">{{infoAccount.textOptionalTwo}}</p>\n          <bc-status *ngIf=\"componentStatus\"  [type]=\"componentStatus.type\" [color]=\"componentStatus.color\" [border]=\"componentStatus.border\" [customIcon]=\"componentStatus.icon\" [text]=\"componentStatus.text\"></bc-status>\n        </div>\n        <div class=\"saldo\" *ngIf=\"dataOne\">\n          <p *ngIf=\"dataOne.titleData\" class=\"label-saldo bc-opensans-font-style-2-regular bc-mb-1 bc-d-block\">{{dataOne.titleData}}</p>\n          <p *ngIf=\"dataOne.data\"class=\"numero-saldo bc-d-block\">{{dataOne.data}}</p>\n        </div>\n      </section>\n    </div>\n  </bc-card-container>\n</ng-template>\n\n\n" }]
        }], propDecorators: { dataConfig: [{
                type: Input
            }], handleEvent: [{
                type: Output
            }] } });

class BcCardPrimaryModule {
}
BcCardPrimaryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardPrimaryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardPrimaryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardPrimaryModule, declarations: [BcCardPrimaryComponent], imports: [BcIconModule, i10.BcIllustrationModule, i2.BcLogoModule, BcStatusModule,
        BcButtonModule,
        BcTagModule,
        BcIconButtonModule,
        BcFloatMenuModule,
        BcCheckboxModule,
        BcRadioModule,
        BcCardContainerModule,
        CommonModule,
        FormsModule], exports: [BcCardPrimaryComponent] });
BcCardPrimaryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardPrimaryModule, imports: [[
            BcIconModule,
            BcIllustrationModule.forRoot({ path: '' }),
            BcLogoModule.forRoot({ path: '' }),
            BcStatusModule,
            BcButtonModule,
            BcTagModule,
            BcIconButtonModule,
            BcFloatMenuModule,
            BcCheckboxModule,
            BcRadioModule,
            BcCardContainerModule,
            CommonModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardPrimaryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCardPrimaryComponent],
                    imports: [
                        BcIconModule,
                        BcIllustrationModule.forRoot({ path: '' }),
                        BcLogoModule.forRoot({ path: '' }),
                        BcStatusModule,
                        BcButtonModule,
                        BcTagModule,
                        BcIconButtonModule,
                        BcFloatMenuModule,
                        BcCheckboxModule,
                        BcRadioModule,
                        BcCardContainerModule,
                        CommonModule,
                        FormsModule
                    ],
                    exports: [BcCardPrimaryComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCardPrimaryComponent, BcCardPrimaryModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-card-primary.mjs.map
