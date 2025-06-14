import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-logo";
import * as i2 from "@bancolombia/design-system-web/bc-stepper";
import * as i3 from "@bancolombia/design-system-web/bc-inline-alert";
import * as i4 from "@bancolombia/design-system-web/bc-footer";
import * as i5 from "@angular/common";
import * as i6 from "@bancolombia/design-system-web/bc-card";
/**
 * Componente template autenticacion
 *
 * @export
 * @class BcTemplateAuthenticationComponent
 */
export class BcTemplateAuthenticationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGVtcGxhdGUtYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXRlbXBsYXRlLWF1dGhlbnRpY2F0aW9uL2JjLXRlbXBsYXRlLWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10ZW1wbGF0ZS1hdXRoZW50aWNhdGlvbi9iYy10ZW1wbGF0ZS1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFPOUQ7Ozs7O0dBS0c7QUFLSCxNQUFNLE9BQU8saUNBQWlDO0lBSjlDO1FBTUU7Ozs7O1dBS0c7UUFDTSxVQUFLLEdBQVU7WUFDdEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxVQUFVLEVBQ1Isb0VBQW9FO1NBQ3ZFLENBQUM7UUFFRjs7Ozs7V0FLRztRQUNNLGFBQVEsR0FBRztZQUNsQixRQUFRLEVBQUUsRUFBRTtZQUNaLFlBQVksRUFBRSxLQUFLO1lBQ25CLGFBQWEsRUFBRSxpREFBaUQ7U0FDakUsQ0FBQztRQUVGOzs7OztXQUtHO1FBQ00sU0FBSSxHQUFTO1lBQ3BCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLE9BQU87WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLEVBQUU7WUFDYixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDO1FBRUY7Ozs7O1dBS0c7UUFDTSxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBRTNCOzs7OztXQUtHO1FBQ00sWUFBTyxHQUFZO1lBQzFCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDcEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsQ0FBQztZQUNoQixTQUFTLEVBQUUsWUFBWTtTQUN4QixDQUFDO1FBRUY7Ozs7O1dBS0c7UUFDTSxrQkFBYSxHQUFXLEtBQUssQ0FBQztRQWtCdkM7Ozs7O1dBS0c7UUFDTSxjQUFTLEdBQWM7WUFDOUIsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQztRQUVGOzs7OztXQUtHO1FBQ00sZUFBVSxHQUFhO1lBQzlCLFFBQVEsRUFBRTtnQkFDUixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ1o7WUFDRCxvQkFBb0IsRUFBRSxFQUFFO1lBQ3hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIscUJBQXFCLEVBQUUsRUFBRTtZQUN6QixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxLQUFLO1lBQ1gsV0FBVyxFQUFFLE1BQU07WUFDbkIsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsS0FBSztZQUNkLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsaUJBQWlCLEVBQUUsS0FBSztTQUN6QixDQUFDO0tBR0g7OzhIQWhJWSxpQ0FBaUM7a0hBQWpDLGlDQUFpQyx3U0NqQjlDLHVnSEFvSEE7MkZEbkdhLGlDQUFpQztrQkFKN0MsU0FBUzsrQkFDRSw0QkFBNEI7OEJBVzdCLEtBQUs7c0JBQWIsS0FBSztnQkFZRyxRQUFRO3NCQUFoQixLQUFLO2dCQVlHLElBQUk7c0JBQVosS0FBSztnQkFjRyxLQUFLO3NCQUFiLEtBQUs7Z0JBUUcsT0FBTztzQkFBZixLQUFLO2dCQWVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBUUcsU0FBUztzQkFBakIsS0FBSztnQkFRRyxTQUFTO3NCQUFqQixLQUFLO2dCQVFHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBaUJHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRJbmZvIH0gZnJvbSAnLi9tb2RlbHMvdGVtcGxhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvb3RUZXh0IH0gZnJvbSAnLi9tb2RlbHMvZm9vdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi9tb2RlbHMvbG9nby5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuL21vZGVscy90aXRsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3RlcHBlciB9IGZyb20gJy4vbW9kZWxzL3N0ZXBwZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBDb21wb25lbnRlIHRlbXBsYXRlIGF1dGVudGljYWNpb25cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNUZW1wbGF0ZUF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXRlbXBsYXRlLWF1dGhlbnRpY2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXRlbXBsYXRlLWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNUZW1wbGF0ZUF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogVGl0dWxvIGVsZW1lbnRvIC5cbiAgICpcbiAgICogQHR5cGUge29iamVjdH1cbiAgICogQG1lbWJlcm9mIEJjVGVtcGxhdGVBdXRoZW50aWNhdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IFRpdGxlID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0aXRsZUNsYXNzOlxuICAgICAgJ2JjLXRleHQtY2VudGVyIGJjLWNpYnNhbnMtZm9udC1zdHlsZS05LWV4dHJhbGlnaHQgYmMtbXktNCBiYy1mcy14cycsXG4gIH07XG5cbiAgLyoqXG4gICAqIFN1YnRpdHVsbyBkZWwgZWxlbWVudG8gLlxuICAgKlxuICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgKiBAbWVtYmVyb2YgQmNUZW1wbGF0ZUF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9IHtcbiAgICBzdWJ0aXRsZTogJycsXG4gICAgaGF2ZVN1YnRpdGxlOiBmYWxzZSxcbiAgICBzdWJ0aXRsZUNsYXNzOiAnYmMtdGV4dC1jZW50ZXIgYmMtb3BlbnNhbnMtZm9udC1zdHlsZS0zLXJlZ3VsYXInLFxuICB9O1xuXG4gIC8qKlxuICAgKiBMb2dvIHBhcnRlIHN1cGVyaW9yIGRlbCBlbGVtZW50byAuXG4gICAqXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqIEBtZW1iZXJvZiBCY1RlbXBsYXRlQXV0aGVudGljYXRpb25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGxvZ286IExvZ28gPSB7XG4gICAgdXJsTG9nbzogJycsXG4gICAgdGFyZ2V0TG9nbzogJ19zZWxmJyxcbiAgICBzaXplTG9nbzogJzMwMHB4JyxcbiAgICBjbGFzc0xvZ286ICcnLFxuICAgIGFyaWFMYWJlbExvZ286ICcnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBUcmF6byAgZGVsIGVsZW1lbnRvIC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjVGVtcGxhdGVBdXRoZW50aWNhdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHJhem86c3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqU3RlcHBlciAgZGVsIGVsZW1lbnRvIC5cbiAgICpcbiAgICogQHR5cGUge29iamVjdH1cbiAgICogQG1lbWJlcm9mIEJjVGVtcGxhdGVBdXRoZW50aWNhdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3RlcHBlcjogU3RlcHBlciA9IHtcbiAgICBoYXZlU3RlcHBlcjogZmFsc2UsXG4gICAgYXJpYWxMYWJlbElkOiAnJyxcbiAgICBzdGVwc0FycmF5OiBbJycsICcnXSxcbiAgICB0b2tlbkNvbG9yOiAnJyxcbiAgICBpbmRleFBvc2l0aW9uOiAwLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBTaG9ydGN1dHMgZGVsIGVsZW1lbnRvIC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY1RlbXBsYXRlQXV0aGVudGljYXRpb25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGhhdmVTaG9ydGN1dHM6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBjb21wb25lbnRlIGRlbCBlbGVtZW50byAuXG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmfVxuICAgKiBAbWVtYmVyb2YgQmNUZW1wbGF0ZUF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnQhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBTaG9ydGN1dHMgZGVsIGVsZW1lbnRvIC5cbiAgICpcbiAgICogQHR5cGUge0VsZW1lbnRSZWZ9XG4gICAqIEBtZW1iZXJvZiBCY1RlbXBsYXRlQXV0aGVudGljYXRpb25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNob3J0Y3V0cyE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEFsZXJ0YSBkZWwgZWxlbWVudG8gLlxuICAgKlxuICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgKiBAbWVtYmVyb2YgQmNUZW1wbGF0ZUF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBhbGVydEluZm86IEFsZXJ0SW5mbyA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgdHlwZUFsZXJ0OiAnaW5saW5lQWxlcnQnLFxuICAgIHR5cGU6ICdpbmZvJyxcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogJycsXG4gICAgbGlua3M6IFtdLFxuICAgIGRpc21pc3NpYmxlOiBmYWxzZSxcbiAgfTtcblxuICAvKipcbiAgICogRm9vdGVyIGRlbCBlbGVtZW50byAuXG4gICAqXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqIEBtZW1iZXJvZiBCY1RlbXBsYXRlQXV0aGVudGljYXRpb25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGZvb3RlclRleHQ6IEZvb3RUZXh0ID0ge1xuICAgIHRvcExpbmtzOiB7XG4gICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICBsaW5rczogW3t9XSxcbiAgICB9LFxuICAgIHNvY2lhbE5ldEJvdHRvbVJpZ2h0OiBbXSxcbiAgICBib3R0b21UZXh0TGVmdENvbnRlbnQ6IFtdLFxuICAgIGJvdHRvbVRleHRSaWdoQ29udGVudDogW10sXG4gICAgbG9nbzogJycsXG4gICAgaWNvbjogJ3RvcCcsXG4gICAgY29tcG9uZW50SWQ6ICd0ZXh0JyxcbiAgICBiZ0dyYXk6IGZhbHNlLFxuICAgIGJnV2hpdGU6IGZhbHNlLFxuICAgIGlzVmlnaWxhTG9nb0JvdHRvbTogdHJ1ZSxcbiAgICBpc0JhbmNvTG9nb0JvdHRvbTogZmFsc2UsXG4gIH07XG5cblxufVxuIiwiPGRpdlxuICBbbmdDbGFzc109XCJcbiAgICBbXG4gICAgICAnYmMtY29udGFpbmVyLTMyIGJjLWJnLWJyYW5kLXNlcXVlbnRpYWwtTi1wYWlyLTEwMC0xMDAgYmMtdGVtcGxhdGUtYXV0aGVudGljYXRpb24nLFxuICAgICAgdHJhem9cbiAgICBdLmpvaW4oJyAnKVxuICBcIlxuPlxuICA8ZGl2XG4gICAgKm5nSWY9XCJsb2dvLnVybExvZ28gIT09ICcnOyBlbHNlIGxvZ29fc2luX3VybFwiXG4gICAgY2xhc3M9XCJiYy1mbGV4IGJjLWp1c3RpZnktY29udGVudC1jZW50ZXIgYmMtbWItNCBiYy1sb2dvLWF1dGhlbnRpY2F0aW9uXCJcbiAgPlxuICAgIDxhIFtocmVmXT1cImxvZ28udXJsTG9nb1wiIFt0YXJnZXRdPVwibG9nby50YXJnZXRMb2dvXCI+XG4gICAgICA8YmMtbG9nb1xuICAgICAgICBbc2l6ZV09XCJsb2dvLnNpemVMb2dvXCJcbiAgICAgICAgW2NsYXNzXT1cImxvZ28uY2xhc3NMb2dvXCJcbiAgICAgICAgbmFtZT1cImJhbmNvbG9tYmlhLWhvcml6b250YWxcIlxuICAgICAgICBhbHQ9XCJsb2dvLmFyaWFMYWJlbExvZ29cIlxuICAgICAgPjwvYmMtbG9nbz5cbiAgICA8L2E+XG4gIDwvZGl2PlxuXG4gIDxuZy10ZW1wbGF0ZSAjbG9nb19zaW5fdXJsPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYmMtZmxleCBiYy1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJjLW1iLTQgYmMtbG9nby1hdXRoZW50aWNhdGlvblwiXG4gICAgPlxuICAgICAgPGJjLWxvZ29cbiAgICAgICAgW3NpemVdPVwibG9nby5zaXplTG9nb1wiXG4gICAgICAgIFtjbGFzc109XCJsb2dvLmNsYXNzTG9nb1wiXG4gICAgICAgIG5hbWU9XCJiYW5jb2xvbWJpYS1ob3Jpem9udGFsXCJcbiAgICAgICAgYWx0PVwibG9nby5hcmlhTGFiZWxMb2dvXCJcbiAgICAgID48L2JjLWxvZ28+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPGgxIFtjbGFzc109XCJ0aXRsZS50aXRsZUNsYXNzXCI+XG4gICAge3sgdGl0bGUudGl0bGUgfX1cbiAgPC9oMT5cblxuICA8cCAqbmdJZj1cInN1YnRpdGxlLmhhdmVTdWJ0aXRsZVwiIFtjbGFzc109XCJzdWJ0aXRsZS5zdWJ0aXRsZUNsYXNzXCI+XG4gICAge3sgc3VidGl0bGUuc3VidGl0bGUgfX1cbiAgPC9wPlxuXG4gIDxkaXYgY2xhc3M9XCJiYy1yb3cgYmMtanVzdGlmeS1jb250ZW50LWNlbnRlciBmb3JtLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJiYy1jb2wteHMtNiBiYy1jb2wtbWQtOCBiYy1jb2wtbGctNVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJjLW15LTRcIiAqbmdJZj1cInN0ZXBwZXIuaGF2ZVN0ZXBwZXJcIj5cbiAgICAgICAgPGJjLXN0ZXBwZXJcbiAgICAgICAgICAjc3RlcHBlcjFcbiAgICAgICAgICAoc2V0RGlzYWJsZWRTdGF0ZSk9XCIodHJ1ZSlcIlxuICAgICAgICAgIFtkaXJlY3Rpb25dPVwic3RlcHBlci5kaXJlY3Rpb25cIlxuICAgICAgICAgIFtzdGVwc109XCJzdGVwcGVyLnN0ZXBzQXJyYXlcIlxuICAgICAgICAgIFthcmlhLWxhYmVsbGVkYnldPVwic3RlcHBlci5hcmlhbExhYmVsSWRcIlxuICAgICAgICAgIFt0b2tlbkNvbG9yXT1cInN0ZXBwZXIudG9rZW5Db2xvclwiXG4gICAgICAgID48L2JjLXN0ZXBwZXI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiAqbmdJZj1cImFsZXJ0SW5mby5wb3NpdGlvbiA9PT0gJ3RvcCcgJiYgYWxlcnRJbmZvLnNob3dcIj5cbiAgICAgICAgPGJjLWlubGluZS1hbGVydFxuICAgICAgICAgIFt0eXBlXT1cImFsZXJ0SW5mby50eXBlXCJcbiAgICAgICAgICBbdGl0bGVdPVwiYWxlcnRJbmZvLnRpdGxlXCJcbiAgICAgICAgICBbdGV4dF09XCJhbGVydEluZm8udGV4dFwiXG4gICAgICAgICAgW2xpbmtzXT1cImFsZXJ0SW5mby5saW5rc1wiXG4gICAgICAgICAgKG9uY2xvc2UpPVwiYWxlcnRJbmZvLm9uQ2xvc2VkQWxlcnQgJiYgYWxlcnRJbmZvLm9uQ2xvc2VkQWxlcnQoKVwiXG4gICAgICAgID5cbiAgICAgICAgPC9iYy1pbmxpbmUtYWxlcnQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBiYy1jYXJkXG4gICAgICAgIHR5cGVDYXJkPVwicm91bmRlZFwiXG4gICAgICAgIGNsYXNzPVwiYmMtY2FyZCBiYy1jYXJkLWNvbnRhaW5lciBiYy1teS00IGJjLXAtNSBiYy1ib3JkZXItcmFkaXVzLTEtZnVsbFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYy1jYXJkLWJvZHlcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbXBvbmVudFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2ICpuZ0lmPVwiYWxlcnRJbmZvLnBvc2l0aW9uID09PSAnYm90dG9tJyAmJiBhbGVydEluZm8uc2hvd1wiPlxuICAgICAgICA8YmMtaW5saW5lLWFsZXJ0XG4gICAgICAgICAgW3R5cGVdPVwiYWxlcnRJbmZvLnR5cGVcIlxuICAgICAgICAgIFt0aXRsZV09XCJhbGVydEluZm8udGl0bGVcIlxuICAgICAgICAgIFt0ZXh0XT1cImFsZXJ0SW5mby50ZXh0XCJcbiAgICAgICAgICBbbGlua3NdPVwiYWxlcnRJbmZvLmxpbmtzXCJcbiAgICAgICAgICAob25jbG9zZSk9XCJhbGVydEluZm8ub25DbG9zZWRBbGVydCAmJiBhbGVydEluZm8ub25DbG9zZWRBbGVydCgpXCJcbiAgICAgICAgPlxuICAgICAgICA8L2JjLWlubGluZS1hbGVydD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGJjLWNhcmRcbiAgICAgICAgdHlwZUNhcmQ9XCJyb3VuZGVkXCJcbiAgICAgICAgY2xhc3M9XCJiYy1jYXJkIGJjLWNhcmQtY29udGFpbmVyIGJjLW15LTQgYmMtcC01IGJjLWJvcmRlci1yYWRpdXMtMS1mdWxsXCJcbiAgICAgICAgKm5nSWY9XCJoYXZlU2hvcnRjdXRzXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJjLWNhcmQtYm9keVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwic2hvcnRjdXRzXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxiYy1mb290ZXJcbiAgICBbYmdHcmF5XT1cImZvb3RlclRleHQuYmdHcmF5XCJcbiAgICBbYmdXaGl0ZV09XCJmb290ZXJUZXh0LmJnV2hpdGVcIlxuICAgIFtib3R0b21UZXh0TGVmdENvbnRlbnRdPVwiZm9vdGVyVGV4dC5ib3R0b21UZXh0TGVmdENvbnRlbnRcIlxuICAgIFtib3R0b21UZXh0UmlnaENvbnRlbnRdPVwiZm9vdGVyVGV4dC5ib3R0b21UZXh0UmlnaENvbnRlbnRcIlxuICAgIFtjb21wb25lbnRJZF09XCJmb290ZXJUZXh0LmNvbXBvbmVudElkXCJcbiAgICBbaWNvbl09XCJmb290ZXJUZXh0Lmljb25cIlxuICAgIFtpc0JhbmNvTG9nb0JvdHRvbV09XCJmb290ZXJUZXh0LmlzQmFuY29Mb2dvQm90dG9tXCJcbiAgICBbaXNWaWdpbGFMb2dvQm90dG9tXT1cImZvb3RlclRleHQuaXNWaWdpbGFMb2dvQm90dG9tXCJcbiAgICBbbG9nb109XCJmb290ZXJUZXh0LmxvZ29cIlxuICAgIFtzb2NpYWxOZXRCb3R0b21SaWdodF09XCJmb290ZXJUZXh0LnNvY2lhbE5ldEJvdHRvbVJpZ2h0XCJcbiAgICBbdG9wTGlua3NdPVwiZm9vdGVyVGV4dC50b3BMaW5rc1wiXG4gID5cbiAgPC9iYy1mb290ZXI+XG48L2Rpdj5cbiJdfQ==