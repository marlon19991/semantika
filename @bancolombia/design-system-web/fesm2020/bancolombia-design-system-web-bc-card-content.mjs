import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import * as i5 from '@bancolombia/design-system-web/bc-float-menu';
import { BcFloatMenuModule } from '@bancolombia/design-system-web/bc-float-menu';
import * as i4 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i6 from '@bancolombia/design-system-web/bc-icon-button';
import { BcIconButtonModule } from '@bancolombia/design-system-web/bc-icon-button';
import * as i3 from '@bancolombia/design-system-web/bc-status';
import { BcStatusModule } from '@bancolombia/design-system-web/bc-status';
import { BcTagModule } from '@bancolombia/design-system-web/bc-tag';
import * as i1 from '@bancolombia/design-system-web/bc-card-container';
import { BcCardContainerModule } from '@bancolombia/design-system-web/bc-card-container';
import * as i2 from '@bancolombia/design-system-web/bc-illustration';
import { BcIllustrationModule } from '@bancolombia/design-system-web/bc-illustration';
import * as i8 from '@bancolombia/design-system-web/bc-link';
import { BcLinkModule } from '@bancolombia/design-system-web/bc-link';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcRadioModule } from '@bancolombia/design-system-web/bc-radio';
import * as i2$1 from '@bancolombia/design-system-web/bc-logo';
import { BcLogoModule } from '@bancolombia/design-system-web/bc-logo';

/**
 * Componente Card Content
 *
 * @export
 * @class BcCardContentComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcCardContentComponent {
    constructor() {
        /**
         * Parámetro para el texto alternativo de la imagen o la ilustración
         * @type BcCardContentConfig
         * @memberof BcCardContentComponent
         */
        this.altImgIllustrator = "";
        /**
        * Salida de evento del componente Tag.
        *
        * @type {(EventEmitter<any>)}
        * @memberof BcCardContentComponent
        */
        this.handleEvent = new EventEmitter();
        this.propagateEvent = (id) => {
            this.handleEvent.emit(id);
        };
    }
    ngOnInit() {
        this.componentStatus = this.dataConfig.componentStatus;
        this.componentButtonOne = this.dataConfig.componentButtonOne;
        this.componentButtonTwo = this.dataConfig.componentButtonTwo;
        this.componentIconButton = this.dataConfig.componentIconButton;
        this.componentLink = this.dataConfig.componentLink;
        this.setPositionButtons();
        this.setTemplate();
    }
    setPositionButtons() {
        const positionButtonsMap = {
            'horizontal-fill': 'buttons',
            'vertical-fill': 'buttons-vertical',
            'horizontal-hug': 'buttons-horizontal-auto',
            'vertical-hug': 'buttons-vertical-auto',
        };
        const { componentButtonPosition } = this.dataConfig;
        this.positionButtons = positionButtonsMap[componentButtonPosition];
    }
    setTemplate() {
        const templateMap = {
            'vertical-card-icon': 1,
            'horizontal-card-icon': 2,
            'vertical-card-illustration': 3,
            'horizontal-card-illustration': 4,
            'vertical-card-photo': 5,
            'horizontal-card-photo': 6,
        };
        const { cardPosition, cardType } = this.dataConfig;
        this.template = templateMap[cardPosition.concat("-", cardType)];
    }
}
BcCardContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcCardContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardContentComponent, selector: "bc-card-content", inputs: { dataConfig: "dataConfig", altImgIllustrator: "altImgIllustrator" }, outputs: { handleEvent: "handleEvent" }, ngImport: i0, template: "<ng-template [ngIf]=\"template == 1\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\">\n    <section class=\"bc-card-content bc-border-radius-3-full bc-card-primary-{{ dataConfig.cardPosition}}\">\n      <ng-template *ngTemplateOutlet=\"verticalBody\"></ng-template>\n    </section>\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 2\">\n  <bc-card-container\n  [id]=\"dataConfig.idCard\"\n  cardType=\"default\"\n  borderClass=\"bc-border-radius-3-full\"\n  shadowClass=\"bc-shadow-02\"\n  tabindex=\"0\">\n    <ng-template *ngTemplateOutlet=\"horizontalBody\"></ng-template>\n\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 3\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\">\n    <section class=\"bc-card-container-illustration-{{dataConfig.cardSize}} bc-border-radius-3-top\">\n      <bc-illustration\n          [name]=\"dataConfig.icon\"\n          [size]= \"dataConfig.cardSize === 'small'? '180px' : '240px'\"\n          aria-hidden=\"true\"\n          [alt]=\"altImgIllustrator\"\n          ></bc-illustration>\n    </section>\n    <section class=\"bc-card-content bc-border-radius-3-bottom\" data-position=\"horizontal\">\n      <ng-template *ngTemplateOutlet=\"verticalBody\"></ng-template>\n    </section>\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 4\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\"\n    otherClass=\"bc-card-container-horizontal\">\n    <section class=\"bc-card-container-illustration-{{dataConfig.cardSize}}\">\n      <bc-illustration\n          [name]=\"dataConfig.icon\"\n          [size]= \"dataConfig.cardSize === 'small'? '110px' : '170px'\"\n          aria-hidden=\"true\"\n          [alt]=\"altImgIllustrator\"\n          ></bc-illustration>\n    </section>\n    <ng-template *ngTemplateOutlet=\"horizontalBody\"></ng-template>\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 5\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\">\n    <section\n      class=\"bc-card-container-photo bc-card-container-photo-{{dataConfig.cardSize}} bc-border-radius-3-top\">\n      <img\n        class=\"bc-illustration bc-border-radius-3-top\"\n        [src]=\"dataConfig.urlImage\"\n        [alt]=\"altImgIllustrator\"/>\n      <div class=\"icon bc-me-3 \">\n        <i class=\"bc-icon bc-sm bc-p-2 bc-shadow-02\">{{dataConfig.iconFloat}}</i>\n      </div>\n    </section>\n    <section class=\"bc-card-content bc-border-radius-3-bottom\" data-position=\"horizontal\">\n      <ng-template *ngTemplateOutlet=\"verticalBody\"></ng-template>\n    </section>\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 6\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\"\n    otherClass=\"bc-card-container-photo-horizontal\">\n    <section class=\"bc-card-container-photo-{{dataConfig.cardSize}}\">\n      <img\n        class=\"bc-illustration bc-border-radius-3-left\"\n        [src]=\"dataConfig.urlImage\"\n        [alt]=\"altImgIllustrator\"/>\n    </section>\n    <ng-template *ngTemplateOutlet=\"horizontalBody\"></ng-template>\n  </bc-card-container>\n</ng-template>\n\n<ng-template #verticalBody>\n  <bc-status\n    *ngIf=\"componentStatus\"\n    [type]=\"componentStatus.type\"\n    [color]=\"componentStatus.color\"\n    [border]=\"componentStatus.border\"\n    [customIcon]=\"componentStatus.icon\"\n    [text]=\"componentStatus.text\"\n    [widthTag]=\"componentStatus.widthTag\">\n  </bc-status>\n  <div\n    *ngIf=\"dataConfig.cardType === 'card-icon'\"\n    class=\"bc-d-flex bc-align-items-center bc-mt-3\">\n    <div class=\"bc-card-content-icon bc-me-2\">\n      <i class=\"bc-icon bc-st bc-p-2\">{{dataConfig.icon}}</i>\n    </div>\n    <h1 class=\"bc-card-content-title {{dataConfig.title.classText}} overflow-title\">\n      {{dataConfig.title.text}}\n    </h1>\n  </div>\n  <h2 class=\"bc-card-content-subtitle {{dataConfig.subtitle.classText}} bc-mb-2 overflow-title bc-mt-3\">\n    {{dataConfig.subtitle.text}}\n  </h2>\n  <h1\n    *ngIf=\"dataConfig.cardType !== 'card-icon'\"\n    class=\"bc-card-content-title {{dataConfig.title.classText}} overflow-title\">\n    {{dataConfig.title.text}}\n  </h1>\n  <p class=\"bc-card-content-text {{dataConfig.text.classText}} bc-mb-3 overflow-paragraph\">\n    {{dataConfig.text.text}}\n  </p>\n  <a *ngIf=\"componentLink\" bc-link [href]=\"componentLink.url\" sizeLink=\"default\">\n    <bc-icon\n      *ngIf=\"componentLink.iconLeft\"\n      class=\"bc-line bc-mr-2\"\n      size=\"xs\"\n      aria-hidden=\"true\"\n      [ariaLabel]=\"componentLink.iconLeft\">\n      {{componentLink.iconLeft}}\n    </bc-icon>\n    <span>{{componentLink.text}}</span>\n    <bc-icon\n      *ngIf=\"componentLink.iconRight\"\n      size=\"xs\"\n      aria-hidden=\"true\"\n      [ariaLabel]=\"componentLink.iconRight\">\n      {{componentLink.iconRight}}\n    </bc-icon>\n  </a>\n  <section\n    *ngIf=\"dataConfig.componentButtonOne || dataConfig.componentButtonTwo\"\n    class=\"{{this.positionButtons }} bc-d-flex bc-gap-3 bc-mb-3 bc-mt-3\">\n    <button\n      [id]=\"componentButtonOne.id\"\n      *ngIf=\"this.componentButtonOne \"\n      class=\"bc-button-{{componentButtonOne.type}} bc-button-small\"\n      (click)=\"this.propagateEvent(componentButtonOne.id)\">\n      {{componentButtonOne.text}}\n    </button>\n    <button\n      [id]=\"componentButtonTwo.id\"\n      *ngIf=\"dataConfig.componentButtonTwo\"\n      class=\"bc-button-{{componentButtonTwo.type}} bc-button-small\"\n      (click)=\"this.propagateEvent(componentButtonTwo.id)\">\n      {{componentButtonTwo.text}}\n    </button>\n  </section>\n  <section class=\"additional-content bc-d-flex bc-align-items-center\">\n    <em\n      *ngIf=\"dataConfig.additionalIcon\"\n      class=\"bc-icon bc-sm\"\n      aria-hidden=\"true\"\n      aria-label=\"prueba\">\n      {{dataConfig.additionalIcon}}\n    </em>\n    <span\n      *ngIf=\"dataConfig.additionalText\"\n      class=\"additional-text {{dataConfig.additionalText.classText}} bc-ms-2 overflow-title\">\n      {{dataConfig.additionalText.text}}\n    </span>\n    <bc-float-menu *ngIf=\"componentIconButton\" [options]=\"componentIconButton.options\" class=\"bc-ms-auto\">\n      <bc-icon-button  type=\"outline\" size=\"small\" customIcon=\"secondary-menu\">\n      </bc-icon-button>\n    </bc-float-menu>\n  </section>\n</ng-template>\n\n<ng-template #horizontalBody>\n  <section\n    class=\"bc-card-content bc-border-radius-3-full bc-card-primary-{{ dataConfig.cardPosition}}\">\n    <bc-status\n      *ngIf=\"componentStatus\"\n      [type]=\"componentStatus.type\"\n      [color]=\"componentStatus.color\"\n      [border]=\"componentStatus.border\"\n      [customIcon]=\"componentStatus.icon\"\n      [text]=\"componentStatus.text\"\n      [widthTag]=\"componentStatus.widthTag\"></bc-status>\n    <div class=\"bc-d-flex bc-align-items-center bc-mb-2 bc-mt-3\">\n      <div *ngIf=\"dataConfig.cardType === 'card-icon'\" class=\"bc-card-content-icon bc-me-2\">\n        <i class=\"bc-icon bc-st bc-p-2\">{{dataConfig.icon}}</i>\n      </div>\n      <h1 class=\"bc-card-content-title {{dataConfig.title.classText}} overflow-title\">\n        {{dataConfig.title.text}}\n      </h1>\n    </div>\n    <p class=\"bc-card-content-text {{dataConfig.text.classText}} bc-mb-3 overflow-paragraph\">\n      {{dataConfig.text.text}}\n    </p>\n    <section\n      *ngIf=\"dataConfig.componentButtonOne || dataConfig.componentButtonTwo\"\n      class=\"{{this.positionButtons }} bc-d-flex bc-gap-3 bc-mb-3 bc-mt-3\">\n      <button\n        [id]=\"componentButtonOne.id\"\n        *ngIf=\"this.componentButtonOne \"\n        class=\"bc-button-{{componentButtonOne.type}} bc-button-small\"\n        (click)=\"this.propagateEvent(componentButtonOne.id)\">\n        {{componentButtonOne.text}}\n      </button>\n      <button\n        [id]=\"componentButtonTwo.id\"\n        *ngIf=\"dataConfig.componentButtonTwo\"\n        class=\"bc-button-{{componentButtonTwo.type}} bc-button-small\"\n        (click)=\"this.propagateEvent(componentButtonTwo.id)\">\n        {{componentButtonTwo.text}}\n      </button>\n    </section>\n  </section>\n</ng-template>\n\n\n", components: [{ type: i1.BcCardContainerComponent, selector: "bc-card-container", inputs: ["cardType", "borderClass", "shadowClass", "cardColorClass", "borderColorClass", "otherClass"] }, { type: i2.BcIllustrationComponent, selector: "bc-illustration", inputs: ["size", "alt", "name", "class"] }, { type: i3.BcStatusComponent, selector: "bc-status", inputs: ["type", "color", "border", "customIcon", "text", "disabledTag", "widthTag"] }, { type: i4.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }, { type: i5.BcFloatMenuComponent, selector: "bc-float-menu", inputs: ["componentId", "checkbox", "radioButtons", "options", "arrowCenter", "arrowLeft", "arrowRight", "positionRight", "positionLeft", "selectedIcon", "row", "data", "havePreloader", "numOfpreloaders", "floatMenuWidth"], outputs: ["onChange", "changed"] }, { type: i6.BcIconButtonComponent, selector: "bc-icon-button", inputs: ["type", "color", "size", "shadow", "customIcon", "statusButton", "seleted", "selected", "ariaLabel"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i8.BcLinkDirective, selector: "[bc-link]", inputs: ["typeLink", "sizeLink", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-content', template: "<ng-template [ngIf]=\"template == 1\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\">\n    <section class=\"bc-card-content bc-border-radius-3-full bc-card-primary-{{ dataConfig.cardPosition}}\">\n      <ng-template *ngTemplateOutlet=\"verticalBody\"></ng-template>\n    </section>\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 2\">\n  <bc-card-container\n  [id]=\"dataConfig.idCard\"\n  cardType=\"default\"\n  borderClass=\"bc-border-radius-3-full\"\n  shadowClass=\"bc-shadow-02\"\n  tabindex=\"0\">\n    <ng-template *ngTemplateOutlet=\"horizontalBody\"></ng-template>\n\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 3\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\">\n    <section class=\"bc-card-container-illustration-{{dataConfig.cardSize}} bc-border-radius-3-top\">\n      <bc-illustration\n          [name]=\"dataConfig.icon\"\n          [size]= \"dataConfig.cardSize === 'small'? '180px' : '240px'\"\n          aria-hidden=\"true\"\n          [alt]=\"altImgIllustrator\"\n          ></bc-illustration>\n    </section>\n    <section class=\"bc-card-content bc-border-radius-3-bottom\" data-position=\"horizontal\">\n      <ng-template *ngTemplateOutlet=\"verticalBody\"></ng-template>\n    </section>\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 4\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\"\n    otherClass=\"bc-card-container-horizontal\">\n    <section class=\"bc-card-container-illustration-{{dataConfig.cardSize}}\">\n      <bc-illustration\n          [name]=\"dataConfig.icon\"\n          [size]= \"dataConfig.cardSize === 'small'? '110px' : '170px'\"\n          aria-hidden=\"true\"\n          [alt]=\"altImgIllustrator\"\n          ></bc-illustration>\n    </section>\n    <ng-template *ngTemplateOutlet=\"horizontalBody\"></ng-template>\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 5\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\">\n    <section\n      class=\"bc-card-container-photo bc-card-container-photo-{{dataConfig.cardSize}} bc-border-radius-3-top\">\n      <img\n        class=\"bc-illustration bc-border-radius-3-top\"\n        [src]=\"dataConfig.urlImage\"\n        [alt]=\"altImgIllustrator\"/>\n      <div class=\"icon bc-me-3 \">\n        <i class=\"bc-icon bc-sm bc-p-2 bc-shadow-02\">{{dataConfig.iconFloat}}</i>\n      </div>\n    </section>\n    <section class=\"bc-card-content bc-border-radius-3-bottom\" data-position=\"horizontal\">\n      <ng-template *ngTemplateOutlet=\"verticalBody\"></ng-template>\n    </section>\n  </bc-card-container>\n</ng-template>\n\n<ng-template [ngIf]=\"template == 6\">\n  <bc-card-container\n    [id]=\"dataConfig.idCard\"\n    cardType=\"default\"\n    borderClass=\"bc-border-radius-3-full\"\n    shadowClass=\"bc-shadow-02\"\n    tabindex=\"0\"\n    otherClass=\"bc-card-container-photo-horizontal\">\n    <section class=\"bc-card-container-photo-{{dataConfig.cardSize}}\">\n      <img\n        class=\"bc-illustration bc-border-radius-3-left\"\n        [src]=\"dataConfig.urlImage\"\n        [alt]=\"altImgIllustrator\"/>\n    </section>\n    <ng-template *ngTemplateOutlet=\"horizontalBody\"></ng-template>\n  </bc-card-container>\n</ng-template>\n\n<ng-template #verticalBody>\n  <bc-status\n    *ngIf=\"componentStatus\"\n    [type]=\"componentStatus.type\"\n    [color]=\"componentStatus.color\"\n    [border]=\"componentStatus.border\"\n    [customIcon]=\"componentStatus.icon\"\n    [text]=\"componentStatus.text\"\n    [widthTag]=\"componentStatus.widthTag\">\n  </bc-status>\n  <div\n    *ngIf=\"dataConfig.cardType === 'card-icon'\"\n    class=\"bc-d-flex bc-align-items-center bc-mt-3\">\n    <div class=\"bc-card-content-icon bc-me-2\">\n      <i class=\"bc-icon bc-st bc-p-2\">{{dataConfig.icon}}</i>\n    </div>\n    <h1 class=\"bc-card-content-title {{dataConfig.title.classText}} overflow-title\">\n      {{dataConfig.title.text}}\n    </h1>\n  </div>\n  <h2 class=\"bc-card-content-subtitle {{dataConfig.subtitle.classText}} bc-mb-2 overflow-title bc-mt-3\">\n    {{dataConfig.subtitle.text}}\n  </h2>\n  <h1\n    *ngIf=\"dataConfig.cardType !== 'card-icon'\"\n    class=\"bc-card-content-title {{dataConfig.title.classText}} overflow-title\">\n    {{dataConfig.title.text}}\n  </h1>\n  <p class=\"bc-card-content-text {{dataConfig.text.classText}} bc-mb-3 overflow-paragraph\">\n    {{dataConfig.text.text}}\n  </p>\n  <a *ngIf=\"componentLink\" bc-link [href]=\"componentLink.url\" sizeLink=\"default\">\n    <bc-icon\n      *ngIf=\"componentLink.iconLeft\"\n      class=\"bc-line bc-mr-2\"\n      size=\"xs\"\n      aria-hidden=\"true\"\n      [ariaLabel]=\"componentLink.iconLeft\">\n      {{componentLink.iconLeft}}\n    </bc-icon>\n    <span>{{componentLink.text}}</span>\n    <bc-icon\n      *ngIf=\"componentLink.iconRight\"\n      size=\"xs\"\n      aria-hidden=\"true\"\n      [ariaLabel]=\"componentLink.iconRight\">\n      {{componentLink.iconRight}}\n    </bc-icon>\n  </a>\n  <section\n    *ngIf=\"dataConfig.componentButtonOne || dataConfig.componentButtonTwo\"\n    class=\"{{this.positionButtons }} bc-d-flex bc-gap-3 bc-mb-3 bc-mt-3\">\n    <button\n      [id]=\"componentButtonOne.id\"\n      *ngIf=\"this.componentButtonOne \"\n      class=\"bc-button-{{componentButtonOne.type}} bc-button-small\"\n      (click)=\"this.propagateEvent(componentButtonOne.id)\">\n      {{componentButtonOne.text}}\n    </button>\n    <button\n      [id]=\"componentButtonTwo.id\"\n      *ngIf=\"dataConfig.componentButtonTwo\"\n      class=\"bc-button-{{componentButtonTwo.type}} bc-button-small\"\n      (click)=\"this.propagateEvent(componentButtonTwo.id)\">\n      {{componentButtonTwo.text}}\n    </button>\n  </section>\n  <section class=\"additional-content bc-d-flex bc-align-items-center\">\n    <em\n      *ngIf=\"dataConfig.additionalIcon\"\n      class=\"bc-icon bc-sm\"\n      aria-hidden=\"true\"\n      aria-label=\"prueba\">\n      {{dataConfig.additionalIcon}}\n    </em>\n    <span\n      *ngIf=\"dataConfig.additionalText\"\n      class=\"additional-text {{dataConfig.additionalText.classText}} bc-ms-2 overflow-title\">\n      {{dataConfig.additionalText.text}}\n    </span>\n    <bc-float-menu *ngIf=\"componentIconButton\" [options]=\"componentIconButton.options\" class=\"bc-ms-auto\">\n      <bc-icon-button  type=\"outline\" size=\"small\" customIcon=\"secondary-menu\">\n      </bc-icon-button>\n    </bc-float-menu>\n  </section>\n</ng-template>\n\n<ng-template #horizontalBody>\n  <section\n    class=\"bc-card-content bc-border-radius-3-full bc-card-primary-{{ dataConfig.cardPosition}}\">\n    <bc-status\n      *ngIf=\"componentStatus\"\n      [type]=\"componentStatus.type\"\n      [color]=\"componentStatus.color\"\n      [border]=\"componentStatus.border\"\n      [customIcon]=\"componentStatus.icon\"\n      [text]=\"componentStatus.text\"\n      [widthTag]=\"componentStatus.widthTag\"></bc-status>\n    <div class=\"bc-d-flex bc-align-items-center bc-mb-2 bc-mt-3\">\n      <div *ngIf=\"dataConfig.cardType === 'card-icon'\" class=\"bc-card-content-icon bc-me-2\">\n        <i class=\"bc-icon bc-st bc-p-2\">{{dataConfig.icon}}</i>\n      </div>\n      <h1 class=\"bc-card-content-title {{dataConfig.title.classText}} overflow-title\">\n        {{dataConfig.title.text}}\n      </h1>\n    </div>\n    <p class=\"bc-card-content-text {{dataConfig.text.classText}} bc-mb-3 overflow-paragraph\">\n      {{dataConfig.text.text}}\n    </p>\n    <section\n      *ngIf=\"dataConfig.componentButtonOne || dataConfig.componentButtonTwo\"\n      class=\"{{this.positionButtons }} bc-d-flex bc-gap-3 bc-mb-3 bc-mt-3\">\n      <button\n        [id]=\"componentButtonOne.id\"\n        *ngIf=\"this.componentButtonOne \"\n        class=\"bc-button-{{componentButtonOne.type}} bc-button-small\"\n        (click)=\"this.propagateEvent(componentButtonOne.id)\">\n        {{componentButtonOne.text}}\n      </button>\n      <button\n        [id]=\"componentButtonTwo.id\"\n        *ngIf=\"dataConfig.componentButtonTwo\"\n        class=\"bc-button-{{componentButtonTwo.type}} bc-button-small\"\n        (click)=\"this.propagateEvent(componentButtonTwo.id)\">\n        {{componentButtonTwo.text}}\n      </button>\n    </section>\n  </section>\n</ng-template>\n\n\n" }]
        }], propDecorators: { dataConfig: [{
                type: Input
            }], altImgIllustrator: [{
                type: Input
            }], handleEvent: [{
                type: Output
            }] } });

class BcCardContentModule {
}
BcCardContentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardContentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContentModule, declarations: [BcCardContentComponent], imports: [BcIconModule, i2.BcIllustrationModule, i2$1.BcLogoModule, BcStatusModule,
        BcButtonModule,
        BcTagModule,
        BcLinkModule,
        BcIconButtonModule,
        BcFloatMenuModule,
        BcCheckboxModule,
        BcRadioModule,
        BcCardContainerModule,
        CommonModule,
        FormsModule], exports: [BcCardContentComponent] });
BcCardContentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContentModule, imports: [[
            BcIconModule,
            BcIllustrationModule.forRoot({ path: '' }),
            BcLogoModule.forRoot({ path: '' }),
            BcStatusModule,
            BcButtonModule,
            BcTagModule,
            BcLinkModule,
            BcIconButtonModule,
            BcFloatMenuModule,
            BcCheckboxModule,
            BcRadioModule,
            BcCardContainerModule,
            CommonModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardContentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCardContentComponent],
                    imports: [
                        BcIconModule,
                        BcIllustrationModule.forRoot({ path: '' }),
                        BcLogoModule.forRoot({ path: '' }),
                        BcStatusModule,
                        BcButtonModule,
                        BcTagModule,
                        BcLinkModule,
                        BcIconButtonModule,
                        BcFloatMenuModule,
                        BcCheckboxModule,
                        BcRadioModule,
                        BcCardContainerModule,
                        CommonModule,
                        FormsModule
                    ],
                    exports: [BcCardContentComponent]
                }]
        }] });

const CardContentType = {
    cardPhoto: "card-photo",
    cardIllustration: "card-illustration",
    cardIcon: "card-icon"
};
const ButtonPosition = {
    horizontalFill: "horizontal-fill",
    verticalFill: "vertical-fill",
    horizontalHug: "horizontal-hug",
    verticalHug: "vertical-hug",
};

/**
 * Generated bundle index. Do not edit.
 */

export { BcCardContentComponent, BcCardContentModule, CardContentType };
//# sourceMappingURL=bancolombia-design-system-web-bc-card-content.mjs.map
