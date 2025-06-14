import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@bancolombia/design-system-web/bc-logo';
import { BcLogoModule } from '@bancolombia/design-system-web/bc-logo';
import * as i2 from '@bancolombia/design-system-web/bc-stepper';
import { BcStepperModule } from '@bancolombia/design-system-web/bc-stepper';
import * as i3 from '@bancolombia/design-system-web/bc-inline-alert';
import { BcInlineAlertModule } from '@bancolombia/design-system-web/bc-inline-alert';
import * as i4 from '@bancolombia/design-system-web/bc-footer';
import { BcFooterModule } from '@bancolombia/design-system-web/bc-footer';
import * as i6 from '@bancolombia/design-system-web/bc-card';
import { BcCardModule } from '@bancolombia/design-system-web/bc-card';

/**
 * Componente template autenticacion
 *
 * @export
 * @class BcTemplateAuthenticationComponent
 */
class BcTemplateAuthenticationComponent {
    constructor() {
        /**
         * Titulo elemento .
         *
         * @type {object}
         * @memberof BcTemplateAuthenticationComponent
         */
        this.title = {
            title: '',
            titleClass: 'bc-text-center bc-cibsans-font-style-9-extralight bc-my-4 bc-fs-xs',
        };
        /**
         * Subtitulo del elemento .
         *
         * @type {object}
         * @memberof BcTemplateAuthenticationComponent
         */
        this.subtitle = {
            subtitle: '',
            haveSubtitle: false,
            subtitleClass: 'bc-text-center bc-opensans-font-style-3-regular',
        };
        /**
         * Logo parte superior del elemento .
         *
         * @type {object}
         * @memberof BcTemplateAuthenticationComponent
         */
        this.logo = {
            urlLogo: '',
            targetLogo: '_self',
            sizeLogo: '300px',
            classLogo: '',
            ariaLabelLogo: '',
        };
        /**
         * Trazo  del elemento .
         *
         * @type {string}
         * @memberof BcTemplateAuthenticationComponent
         */
        this.trazo = '';
        /**
         *Stepper  del elemento .
         *
         * @type {object}
         * @memberof BcTemplateAuthenticationComponent
         */
        this.stepper = {
            haveStepper: false,
            arialLabelId: '',
            stepsArray: ['', ''],
            tokenColor: '',
            indexPosition: 0,
            direction: 'horizontal',
        };
        /**
         * Shortcuts del elemento .
         *
         * @type {boolean}
         * @memberof BcTemplateAuthenticationComponent
         */
        this.haveShortcuts = false;
        /**
         * Alerta del elemento .
         *
         * @type {object}
         * @memberof BcTemplateAuthenticationComponent
         */
        this.alertInfo = {
            show: false,
            position: 'top',
            typeAlert: 'inlineAlert',
            type: 'info',
            title: '',
            text: '',
            links: [],
            dismissible: false,
        };
        /**
         * Footer del elemento .
         *
         * @type {object}
         * @memberof BcTemplateAuthenticationComponent
         */
        this.footerText = {
            topLinks: {
                alignContent: 'flex-end',
                links: [{}],
            },
            socialNetBottomRight: [],
            bottomTextLeftContent: [],
            bottomTextRighContent: [],
            logo: '',
            icon: 'top',
            componentId: 'text',
            bgGray: false,
            bgWhite: false,
            isVigilaLogoBottom: true,
            isBancoLogoBottom: false,
        };
    }
}
BcTemplateAuthenticationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTemplateAuthenticationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcTemplateAuthenticationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTemplateAuthenticationComponent, selector: "bc-template-authentication", inputs: { title: "title", subtitle: "subtitle", logo: "logo", trazo: "trazo", stepper: "stepper", haveShortcuts: "haveShortcuts", component: "component", shortcuts: "shortcuts", alertInfo: "alertInfo", footerText: "footerText" }, ngImport: i0, template: "<div\n  [ngClass]=\"\n    [\n      'bc-container-32 bc-bg-brand-sequential-N-pair-100-100 bc-template-authentication',\n      trazo\n    ].join(' ')\n  \"\n>\n  <div\n    *ngIf=\"logo.urlLogo !== ''; else logo_sin_url\"\n    class=\"bc-flex bc-justify-content-center bc-mb-4 bc-logo-authentication\"\n  >\n    <a [href]=\"logo.urlLogo\" [target]=\"logo.targetLogo\">\n      <bc-logo\n        [size]=\"logo.sizeLogo\"\n        [class]=\"logo.classLogo\"\n        name=\"bancolombia-horizontal\"\n        alt=\"logo.ariaLabelLogo\"\n      ></bc-logo>\n    </a>\n  </div>\n\n  <ng-template #logo_sin_url>\n    <div\n      class=\"bc-flex bc-justify-content-center bc-mb-4 bc-logo-authentication\"\n    >\n      <bc-logo\n        [size]=\"logo.sizeLogo\"\n        [class]=\"logo.classLogo\"\n        name=\"bancolombia-horizontal\"\n        alt=\"logo.ariaLabelLogo\"\n      ></bc-logo>\n    </div>\n  </ng-template>\n\n  <h1 [class]=\"title.titleClass\">\n    {{ title.title }}\n  </h1>\n\n  <p *ngIf=\"subtitle.haveSubtitle\" [class]=\"subtitle.subtitleClass\">\n    {{ subtitle.subtitle }}\n  </p>\n\n  <div class=\"bc-row bc-justify-content-center form-container\">\n    <div class=\"bc-col-xs-6 bc-col-md-8 bc-col-lg-5\">\n      <div class=\"bc-my-4\" *ngIf=\"stepper.haveStepper\">\n        <bc-stepper\n          #stepper1\n          (setDisabledState)=\"(true)\"\n          [direction]=\"stepper.direction\"\n          [steps]=\"stepper.stepsArray\"\n          [aria-labelledby]=\"stepper.arialLabelId\"\n          [tokenColor]=\"stepper.tokenColor\"\n        ></bc-stepper>\n      </div>\n\n      <div *ngIf=\"alertInfo.position === 'top' && alertInfo.show\">\n        <bc-inline-alert\n          [type]=\"alertInfo.type\"\n          [title]=\"alertInfo.title\"\n          [text]=\"alertInfo.text\"\n          [links]=\"alertInfo.links\"\n          (onclose)=\"alertInfo.onClosedAlert && alertInfo.onClosedAlert()\"\n        >\n        </bc-inline-alert>\n      </div>\n\n      <div\n        bc-card\n        typeCard=\"rounded\"\n        class=\"bc-card bc-card-container bc-my-4 bc-p-5 bc-border-radius-1-full\"\n      >\n        <div class=\"bc-card-body\">\n          <ng-container [ngTemplateOutlet]=\"component\"></ng-container>\n        </div>\n      </div>\n\n      <div *ngIf=\"alertInfo.position === 'bottom' && alertInfo.show\">\n        <bc-inline-alert\n          [type]=\"alertInfo.type\"\n          [title]=\"alertInfo.title\"\n          [text]=\"alertInfo.text\"\n          [links]=\"alertInfo.links\"\n          (onclose)=\"alertInfo.onClosedAlert && alertInfo.onClosedAlert()\"\n        >\n        </bc-inline-alert>\n      </div>\n\n      <div\n        bc-card\n        typeCard=\"rounded\"\n        class=\"bc-card bc-card-container bc-my-4 bc-p-5 bc-border-radius-1-full\"\n        *ngIf=\"haveShortcuts\"\n      >\n        <div class=\"bc-card-body\">\n          <ng-container [ngTemplateOutlet]=\"shortcuts\"></ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <bc-footer\n    [bgGray]=\"footerText.bgGray\"\n    [bgWhite]=\"footerText.bgWhite\"\n    [bottomTextLeftContent]=\"footerText.bottomTextLeftContent\"\n    [bottomTextRighContent]=\"footerText.bottomTextRighContent\"\n    [componentId]=\"footerText.componentId\"\n    [icon]=\"footerText.icon\"\n    [isBancoLogoBottom]=\"footerText.isBancoLogoBottom\"\n    [isVigilaLogoBottom]=\"footerText.isVigilaLogoBottom\"\n    [logo]=\"footerText.logo\"\n    [socialNetBottomRight]=\"footerText.socialNetBottomRight\"\n    [topLinks]=\"footerText.topLinks\"\n  >\n  </bc-footer>\n</div>\n", components: [{ type: i1.BcLogoComponent, selector: "bc-logo", inputs: ["size", "alt", "name", "class"] }, { type: i2.BcStepperComponent, selector: "bc-stepper", inputs: ["steps", "direction", "tokenColor", "aria-labelledby", "aria-label", "componentId", "indexPosition", "themeCircles", "enabled"], outputs: ["valueOutput"] }, { type: i3.BcInlineAlertComponent, selector: "bc-inline-alert", inputs: ["title", "text", "secondColor", "links", "type", "componentId", "lectorBtnClose", "lectorAlert", "dismissible"], outputs: ["onclose", "linkClick"] }, { type: i4.BcFooterComponent, selector: "bc-footer", inputs: ["componentId", "topLinks", "topMethods", "topTextContent", "bottomTextLeftContent", "bottomTextRighContent", "socialNetBottomRight", "isBancoLogoBottom", "isVigilaLogoBottom", "bgWhite", "bgGray", "icon", "logo", "colorStroke"], outputs: ["methodCallout"] }], directives: [{ type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.BcCardDirective, selector: "[bc-card]", inputs: ["class", "typeCard", "backgroundColor"] }, { type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTemplateAuthenticationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-template-authentication', template: "<div\n  [ngClass]=\"\n    [\n      'bc-container-32 bc-bg-brand-sequential-N-pair-100-100 bc-template-authentication',\n      trazo\n    ].join(' ')\n  \"\n>\n  <div\n    *ngIf=\"logo.urlLogo !== ''; else logo_sin_url\"\n    class=\"bc-flex bc-justify-content-center bc-mb-4 bc-logo-authentication\"\n  >\n    <a [href]=\"logo.urlLogo\" [target]=\"logo.targetLogo\">\n      <bc-logo\n        [size]=\"logo.sizeLogo\"\n        [class]=\"logo.classLogo\"\n        name=\"bancolombia-horizontal\"\n        alt=\"logo.ariaLabelLogo\"\n      ></bc-logo>\n    </a>\n  </div>\n\n  <ng-template #logo_sin_url>\n    <div\n      class=\"bc-flex bc-justify-content-center bc-mb-4 bc-logo-authentication\"\n    >\n      <bc-logo\n        [size]=\"logo.sizeLogo\"\n        [class]=\"logo.classLogo\"\n        name=\"bancolombia-horizontal\"\n        alt=\"logo.ariaLabelLogo\"\n      ></bc-logo>\n    </div>\n  </ng-template>\n\n  <h1 [class]=\"title.titleClass\">\n    {{ title.title }}\n  </h1>\n\n  <p *ngIf=\"subtitle.haveSubtitle\" [class]=\"subtitle.subtitleClass\">\n    {{ subtitle.subtitle }}\n  </p>\n\n  <div class=\"bc-row bc-justify-content-center form-container\">\n    <div class=\"bc-col-xs-6 bc-col-md-8 bc-col-lg-5\">\n      <div class=\"bc-my-4\" *ngIf=\"stepper.haveStepper\">\n        <bc-stepper\n          #stepper1\n          (setDisabledState)=\"(true)\"\n          [direction]=\"stepper.direction\"\n          [steps]=\"stepper.stepsArray\"\n          [aria-labelledby]=\"stepper.arialLabelId\"\n          [tokenColor]=\"stepper.tokenColor\"\n        ></bc-stepper>\n      </div>\n\n      <div *ngIf=\"alertInfo.position === 'top' && alertInfo.show\">\n        <bc-inline-alert\n          [type]=\"alertInfo.type\"\n          [title]=\"alertInfo.title\"\n          [text]=\"alertInfo.text\"\n          [links]=\"alertInfo.links\"\n          (onclose)=\"alertInfo.onClosedAlert && alertInfo.onClosedAlert()\"\n        >\n        </bc-inline-alert>\n      </div>\n\n      <div\n        bc-card\n        typeCard=\"rounded\"\n        class=\"bc-card bc-card-container bc-my-4 bc-p-5 bc-border-radius-1-full\"\n      >\n        <div class=\"bc-card-body\">\n          <ng-container [ngTemplateOutlet]=\"component\"></ng-container>\n        </div>\n      </div>\n\n      <div *ngIf=\"alertInfo.position === 'bottom' && alertInfo.show\">\n        <bc-inline-alert\n          [type]=\"alertInfo.type\"\n          [title]=\"alertInfo.title\"\n          [text]=\"alertInfo.text\"\n          [links]=\"alertInfo.links\"\n          (onclose)=\"alertInfo.onClosedAlert && alertInfo.onClosedAlert()\"\n        >\n        </bc-inline-alert>\n      </div>\n\n      <div\n        bc-card\n        typeCard=\"rounded\"\n        class=\"bc-card bc-card-container bc-my-4 bc-p-5 bc-border-radius-1-full\"\n        *ngIf=\"haveShortcuts\"\n      >\n        <div class=\"bc-card-body\">\n          <ng-container [ngTemplateOutlet]=\"shortcuts\"></ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <bc-footer\n    [bgGray]=\"footerText.bgGray\"\n    [bgWhite]=\"footerText.bgWhite\"\n    [bottomTextLeftContent]=\"footerText.bottomTextLeftContent\"\n    [bottomTextRighContent]=\"footerText.bottomTextRighContent\"\n    [componentId]=\"footerText.componentId\"\n    [icon]=\"footerText.icon\"\n    [isBancoLogoBottom]=\"footerText.isBancoLogoBottom\"\n    [isVigilaLogoBottom]=\"footerText.isVigilaLogoBottom\"\n    [logo]=\"footerText.logo\"\n    [socialNetBottomRight]=\"footerText.socialNetBottomRight\"\n    [topLinks]=\"footerText.topLinks\"\n  >\n  </bc-footer>\n</div>\n" }]
        }], propDecorators: { title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], logo: [{
                type: Input
            }], trazo: [{
                type: Input
            }], stepper: [{
                type: Input
            }], haveShortcuts: [{
                type: Input
            }], component: [{
                type: Input
            }], shortcuts: [{
                type: Input
            }], alertInfo: [{
                type: Input
            }], footerText: [{
                type: Input
            }] } });

class BcTemplateAuthenticationModule {
}
BcTemplateAuthenticationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTemplateAuthenticationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTemplateAuthenticationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTemplateAuthenticationModule, declarations: [BcTemplateAuthenticationComponent], imports: [CommonModule, BcFooterModule, BcInlineAlertModule, BcStepperModule, i1.BcLogoModule, BcCardModule], exports: [BcTemplateAuthenticationComponent] });
BcTemplateAuthenticationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTemplateAuthenticationModule, imports: [[CommonModule, BcFooterModule, BcInlineAlertModule, BcStepperModule, BcLogoModule.forRoot(), BcCardModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTemplateAuthenticationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcTemplateAuthenticationComponent],
                    imports: [CommonModule, BcFooterModule, BcInlineAlertModule, BcStepperModule, BcLogoModule.forRoot(), BcCardModule],
                    exports: [BcTemplateAuthenticationComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcTemplateAuthenticationComponent, BcTemplateAuthenticationModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-template-authentication.mjs.map
