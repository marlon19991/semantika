import * as i0 from '@angular/core';
import { Pipe, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BcCardTdcBehavior } from '@bancolombia/design-system-behaviors';
import * as i1$1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-checkbox';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import * as i3 from '@bancolombia/design-system-web/bc-radio';
import { BcRadioModule } from '@bancolombia/design-system-web/bc-radio';
import * as i4 from '@bancolombia/design-system-web/bc-logo';
import { BcLogoModule } from '@bancolombia/design-system-web/bc-logo';

var CREDIT_CARD_FRANCHISES;
(function (CREDIT_CARD_FRANCHISES) {
    CREDIT_CARD_FRANCHISES["MASTERCARD"] = "Mastercard";
    CREDIT_CARD_FRANCHISES["AMERICAN_EXPRESS"] = "American Express";
    CREDIT_CARD_FRANCHISES["VISA"] = "Visa";
    CREDIT_CARD_FRANCHISES["MASTERCARD_MAESTRO"] = "Mastercard Maestro";
})(CREDIT_CARD_FRANCHISES || (CREDIT_CARD_FRANCHISES = {}));

class MaskCardNumberPipe {
    transform(value) {
        return `*${value.slice(-4)}`;
    }
}
MaskCardNumberPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: MaskCardNumberPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
MaskCardNumberPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: MaskCardNumberPipe, name: "maskCardNumber" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: MaskCardNumberPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'maskCardNumber'
                }]
        }] });

class FormatAmountPipe {
    constructor(currencyPipe) {
        this.currencyPipe = currencyPipe;
    }
    transform(value) {
        const [int, decimal] = (value.toString().split(',').join('').split('.').join(',')).split(',');
        return {
            int: (this.currencyPipe.transform(Math.trunc(+int), 'CUP', '', '0.0-0'))?.split(',').join('.'),
            decimal: decimal || '00'
        };
    }
}
FormatAmountPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: FormatAmountPipe, deps: [{ token: i1.CurrencyPipe }], target: i0.ɵɵFactoryTarget.Pipe });
FormatAmountPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: FormatAmountPipe, name: "formatAmount" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: FormatAmountPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'formatAmount'
                }]
        }], ctorParameters: function () { return [{ type: i1.CurrencyPipe }]; } });

/**
 * Componente CardTdc
 * import { BcCardTdcComponent } from '@bancolombia/design-system-web/bc-card-tdc';
 * @export
 * @class BcCardTdcComponent
 */
class BcCardTdcComponent {
    constructor(bcHelperService, el) {
        this.bcHelperService = bcHelperService;
        /**
         *Id del elemento.
         *
         * @type {string}
         * @memberof BcCardTdcComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Tipo de card 'checkbox' o 'radio'
         *
         * @type {('checkbox' | 'radio')}
         * @memberof BcCardTdcComponent
         */
        this.cardType = 'checkbox';
        /**
         * Indicador para mostrar o no abreviación de moneda cuando solo se tenga una deuda ( COP o USD )
         *
         * @type {boolean}
         * @memberof BcCardTdcComponent
         */
        this.showCurrencyAbbreviation = false;
        /**
         * EventEmitter de
         *
         * @type {EventEmitter<cardTdcStatusData>}
         * @memberof BcCardTdcComponent
         */
        this.selectedEmitter = new EventEmitter();
        this.element = el;
        this.bcCardTdcBehavior = new BcCardTdcBehavior();
    }
    ngAfterViewInit() {
        this.element.nativeElement.setAttribute('id', this.componentId);
        this.bcCardTdcBehavior.setId(this.componentId);
        this.bcCardTdcBehavior.setUp();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.bcCardTdcBehavior.radioGroupName = changes.radioGroupName?.currentValue;
    }
    /**
     * Función llamada cuando se da click en card, emite datos de la tarjeta
     *
     * @memberof BcCardTdcComponent
     */
    selectCard() {
        const cardInfo = {
            cardName: this.cardName,
            cardNumber: this.cardNumber,
            minPayment: this.minPayment,
            minUsdPayment: this.minUsdPayment,
            dueDate: this.dueDate,
            logoName: this.logoName,
            elementId: this.componentId,
            type: this.cardType,
            radioGroupName: this.radioGroupName,
            cardType: this.cardType
        };
        setTimeout(() => {
            this.selectedEmitter.emit({ ...cardInfo, selected: this.bcCardTdcBehavior.isSelected });
        });
    }
    /**
     * Retorna franquicia bancaria  de la tarjeta según el numero
     *
     * @readonly
     * @type {CREDIT_CARD_FRANCHISES}
     * @memberof BcCardTdcComponent
     */
    get creditCardFranchise() {
        const initialDigit = this.cardNumber
            .split('')
            .find((value) => value !== '0');
        let franchises;
        switch (initialDigit) {
            case '2':
                franchises = CREDIT_CARD_FRANCHISES.MASTERCARD;
                break;
            case '3':
                franchises = CREDIT_CARD_FRANCHISES.AMERICAN_EXPRESS;
                break;
            case '4':
                franchises = CREDIT_CARD_FRANCHISES.VISA;
                break;
            case '5':
                franchises = CREDIT_CARD_FRANCHISES.MASTERCARD;
                break;
            case '6':
                franchises = CREDIT_CARD_FRANCHISES.MASTERCARD_MAESTRO;
                break;
            default:
                franchises = CREDIT_CARD_FRANCHISES.MASTERCARD;
                break;
        }
        return franchises;
    }
}
BcCardTdcComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcComponent, deps: [{ token: i1$1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcCardTdcComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardTdcComponent, selector: "bc-card-tdc", inputs: { componentId: "componentId", cardType: "cardType", cardName: "cardName", cardNumber: "cardNumber", minPayment: "minPayment", minUsdPayment: "minUsdPayment", logoName: "logoName", dueDate: "dueDate", radioGroupName: "radioGroupName", showCurrencyAbbreviation: "showCurrencyAbbreviation" }, outputs: { selectedEmitter: "selectedEmitter" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-card-tdc\" (click)=\"selectCard()\">\n  <div class=\"bc-d-flex bc-justify-content-between\">\n    <bc-checkbox\n      *ngIf=\"cardType == 'checkbox'\"\n      [value]=\"componentId\"\n    ></bc-checkbox>\n\n    <bc-radio-group *ngIf=\"cardType !== 'checkbox'\" >\n      <bc-radio class=\"bc-my-2\" [value]=\"componentId\"></bc-radio>\n    </bc-radio-group>\n\n    <div>\n      <bc-logo [size]=\"'64px'\" [name]=\"logoName\" aria-hidden=\"false\" alt=\"creditCardFranchise\" tabindex=\"0\"></bc-logo>\n    </div>\n  </div>\n  <div class=\"bc-card-tdc-header\">\n    <div class=\"bc-card-tdc-title\">\n      {{ cardName | titlecase }}\n    </div>\n    <div class=\"bc-card-tdc-card-number\">{{ cardNumber | maskCardNumber}}</div>\n  </div>\n  <div class=\"bc-card-tdc-minimum-payment\">\n    <div class=\"bc-card-tdc-payment-title\">Pago m\u00EDnimo</div>\n\n    <div class=\"bc-card-tdc-currency-container bc-d-flex bc-wrap\" *ngIf=\"minPayment\">\n      <span class=\"bc-card-tdc-currency-title\" *ngIf=\"minUsdPayment || (!minUsdPayment && showCurrencyAbbreviation)\">COP</span>\n      <span class=\"bc-card-tdc-amount cop\">\n        $ {{ (minPayment | formatAmount)?.int }},<span class=\"bc-card-tdc-cents\">{{ (minPayment | formatAmount)?.decimal }}</span>\n      </span>\n    </div>\n\n    <div class=\"bc-card-tdc-currency-container bc-d-flex bc-wrap\" *ngIf=\"minUsdPayment\">\n      <span class=\"bc-card-tdc-currency-title\" *ngIf=\"minPayment || (!minPayment && showCurrencyAbbreviation)\">USD</span>\n      <span class=\"bc-card-tdc-amount usd\">\n        $ {{ (minUsdPayment | formatAmount)?.int }},<span class=\"bc-card-tdc-cents\">{{ (minUsdPayment | formatAmount)?.decimal }}</span>\n      </span>\n    </div>\n\n  </div>\n  <span class=\"bc-card-tdc-due-date\">\n    <p class=\"bc-card-tdc-payment-title\">Fecha l\u00EDmite de pago</p>\n    <p class=\"bc-card-tdc-payment-date\">{{ dueDate }}</p>\n  </span>\n</div>\n\n", components: [{ type: i2.BcCheckboxComponent, selector: "bc-checkbox", inputs: ["id", "name", "value", "label", "enabled", "isChecked", "indeterminate"], outputs: ["changeState", "changeStateForParent"] }, { type: i3.BcRadioGroupComponent, selector: "bc-radio-group", inputs: ["disabled", "defaultValue", "name", "background"], outputs: ["changeValue", "onDisabled"] }, { type: i3.BcRadioComponent, selector: "bc-radio", inputs: ["id", "name", "value", "enabled"], outputs: ["changeStateForParent"] }, { type: i4.BcLogoComponent, selector: "bc-logo", inputs: ["size", "alt", "name", "class"] }], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "titlecase": i1.TitleCasePipe, "maskCardNumber": MaskCardNumberPipe, "formatAmount": FormatAmountPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-tdc', template: "<div class=\"bc-card-tdc\" (click)=\"selectCard()\">\n  <div class=\"bc-d-flex bc-justify-content-between\">\n    <bc-checkbox\n      *ngIf=\"cardType == 'checkbox'\"\n      [value]=\"componentId\"\n    ></bc-checkbox>\n\n    <bc-radio-group *ngIf=\"cardType !== 'checkbox'\" >\n      <bc-radio class=\"bc-my-2\" [value]=\"componentId\"></bc-radio>\n    </bc-radio-group>\n\n    <div>\n      <bc-logo [size]=\"'64px'\" [name]=\"logoName\" aria-hidden=\"false\" alt=\"creditCardFranchise\" tabindex=\"0\"></bc-logo>\n    </div>\n  </div>\n  <div class=\"bc-card-tdc-header\">\n    <div class=\"bc-card-tdc-title\">\n      {{ cardName | titlecase }}\n    </div>\n    <div class=\"bc-card-tdc-card-number\">{{ cardNumber | maskCardNumber}}</div>\n  </div>\n  <div class=\"bc-card-tdc-minimum-payment\">\n    <div class=\"bc-card-tdc-payment-title\">Pago m\u00EDnimo</div>\n\n    <div class=\"bc-card-tdc-currency-container bc-d-flex bc-wrap\" *ngIf=\"minPayment\">\n      <span class=\"bc-card-tdc-currency-title\" *ngIf=\"minUsdPayment || (!minUsdPayment && showCurrencyAbbreviation)\">COP</span>\n      <span class=\"bc-card-tdc-amount cop\">\n        $ {{ (minPayment | formatAmount)?.int }},<span class=\"bc-card-tdc-cents\">{{ (minPayment | formatAmount)?.decimal }}</span>\n      </span>\n    </div>\n\n    <div class=\"bc-card-tdc-currency-container bc-d-flex bc-wrap\" *ngIf=\"minUsdPayment\">\n      <span class=\"bc-card-tdc-currency-title\" *ngIf=\"minPayment || (!minPayment && showCurrencyAbbreviation)\">USD</span>\n      <span class=\"bc-card-tdc-amount usd\">\n        $ {{ (minUsdPayment | formatAmount)?.int }},<span class=\"bc-card-tdc-cents\">{{ (minUsdPayment | formatAmount)?.decimal }}</span>\n      </span>\n    </div>\n\n  </div>\n  <span class=\"bc-card-tdc-due-date\">\n    <p class=\"bc-card-tdc-payment-title\">Fecha l\u00EDmite de pago</p>\n    <p class=\"bc-card-tdc-payment-date\">{{ dueDate }}</p>\n  </span>\n</div>\n\n" }]
        }], ctorParameters: function () { return [{ type: i1$1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], cardType: [{
                type: Input
            }], cardName: [{
                type: Input
            }], cardNumber: [{
                type: Input
            }], minPayment: [{
                type: Input
            }], minUsdPayment: [{
                type: Input
            }], logoName: [{
                type: Input
            }], dueDate: [{
                type: Input
            }], radioGroupName: [{
                type: Input
            }], showCurrencyAbbreviation: [{
                type: Input
            }], selectedEmitter: [{
                type: Output
            }] } });

class BcCardTdcModule {
}
BcCardTdcModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardTdcModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcModule, declarations: [BcCardTdcComponent,
        FormatAmountPipe,
        MaskCardNumberPipe], imports: [CommonModule, i4.BcLogoModule, BcRadioModule, BcCheckboxModule], exports: [BcCardTdcComponent] });
BcCardTdcModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcModule, providers: [CurrencyPipe], imports: [[CommonModule, BcLogoModule.forRoot(), BcRadioModule, BcCheckboxModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcCardTdcComponent,
                        FormatAmountPipe,
                        MaskCardNumberPipe
                    ],
                    imports: [CommonModule, BcLogoModule.forRoot(), BcRadioModule, BcCheckboxModule],
                    exports: [BcCardTdcComponent],
                    providers: [CurrencyPipe],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCardTdcComponent, BcCardTdcModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-card-tdc.mjs.map
