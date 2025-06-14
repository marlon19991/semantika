import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BcCardTdcBehavior } from '@bancolombia/design-system-behaviors';
import { CREDIT_CARD_FRANCHISES } from './constants/bc-card-tdc.constants';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-checkbox";
import * as i3 from "@bancolombia/design-system-web/bc-radio";
import * as i4 from "@bancolombia/design-system-web/bc-logo";
import * as i5 from "@angular/common";
import * as i6 from "./pipes/mask-card-number.pipe";
import * as i7 from "./pipes/format-amount.pipe";
/**
 * Componente CardTdc
 * import { BcCardTdcComponent } from '@bancolombia/design-system-web/bc-card-tdc';
 * @export
 * @class BcCardTdcComponent
 */
export class BcCardTdcComponent {
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
BcCardTdcComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcCardTdcComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardTdcComponent, selector: "bc-card-tdc", inputs: { componentId: "componentId", cardType: "cardType", cardName: "cardName", cardNumber: "cardNumber", minPayment: "minPayment", minUsdPayment: "minUsdPayment", logoName: "logoName", dueDate: "dueDate", radioGroupName: "radioGroupName", showCurrencyAbbreviation: "showCurrencyAbbreviation" }, outputs: { selectedEmitter: "selectedEmitter" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-card-tdc\" (click)=\"selectCard()\">\n  <div class=\"bc-d-flex bc-justify-content-between\">\n    <bc-checkbox\n      *ngIf=\"cardType == 'checkbox'\"\n      [value]=\"componentId\"\n    ></bc-checkbox>\n\n    <bc-radio-group *ngIf=\"cardType !== 'checkbox'\" >\n      <bc-radio class=\"bc-my-2\" [value]=\"componentId\"></bc-radio>\n    </bc-radio-group>\n\n    <div>\n      <bc-logo [size]=\"'64px'\" [name]=\"logoName\" aria-hidden=\"false\" alt=\"creditCardFranchise\" tabindex=\"0\"></bc-logo>\n    </div>\n  </div>\n  <div class=\"bc-card-tdc-header\">\n    <div class=\"bc-card-tdc-title\">\n      {{ cardName | titlecase }}\n    </div>\n    <div class=\"bc-card-tdc-card-number\">{{ cardNumber | maskCardNumber}}</div>\n  </div>\n  <div class=\"bc-card-tdc-minimum-payment\">\n    <div class=\"bc-card-tdc-payment-title\">Pago m\u00EDnimo</div>\n\n    <div class=\"bc-card-tdc-currency-container bc-d-flex bc-wrap\" *ngIf=\"minPayment\">\n      <span class=\"bc-card-tdc-currency-title\" *ngIf=\"minUsdPayment || (!minUsdPayment && showCurrencyAbbreviation)\">COP</span>\n      <span class=\"bc-card-tdc-amount cop\">\n        $ {{ (minPayment | formatAmount)?.int }},<span class=\"bc-card-tdc-cents\">{{ (minPayment | formatAmount)?.decimal }}</span>\n      </span>\n    </div>\n\n    <div class=\"bc-card-tdc-currency-container bc-d-flex bc-wrap\" *ngIf=\"minUsdPayment\">\n      <span class=\"bc-card-tdc-currency-title\" *ngIf=\"minPayment || (!minPayment && showCurrencyAbbreviation)\">USD</span>\n      <span class=\"bc-card-tdc-amount usd\">\n        $ {{ (minUsdPayment | formatAmount)?.int }},<span class=\"bc-card-tdc-cents\">{{ (minUsdPayment | formatAmount)?.decimal }}</span>\n      </span>\n    </div>\n\n  </div>\n  <span class=\"bc-card-tdc-due-date\">\n    <p class=\"bc-card-tdc-payment-title\">Fecha l\u00EDmite de pago</p>\n    <p class=\"bc-card-tdc-payment-date\">{{ dueDate }}</p>\n  </span>\n</div>\n\n", components: [{ type: i2.BcCheckboxComponent, selector: "bc-checkbox", inputs: ["id", "name", "value", "label", "enabled", "isChecked", "indeterminate"], outputs: ["changeState", "changeStateForParent"] }, { type: i3.BcRadioGroupComponent, selector: "bc-radio-group", inputs: ["disabled", "defaultValue", "name", "background"], outputs: ["changeValue", "onDisabled"] }, { type: i3.BcRadioComponent, selector: "bc-radio", inputs: ["id", "name", "value", "enabled"], outputs: ["changeStateForParent"] }, { type: i4.BcLogoComponent, selector: "bc-logo", inputs: ["size", "alt", "name", "class"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "titlecase": i5.TitleCasePipe, "maskCardNumber": i6.MaskCardNumberPipe, "formatAmount": i7.FormatAmountPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-tdc', template: "<div class=\"bc-card-tdc\" (click)=\"selectCard()\">\n  <div class=\"bc-d-flex bc-justify-content-between\">\n    <bc-checkbox\n      *ngIf=\"cardType == 'checkbox'\"\n      [value]=\"componentId\"\n    ></bc-checkbox>\n\n    <bc-radio-group *ngIf=\"cardType !== 'checkbox'\" >\n      <bc-radio class=\"bc-my-2\" [value]=\"componentId\"></bc-radio>\n    </bc-radio-group>\n\n    <div>\n      <bc-logo [size]=\"'64px'\" [name]=\"logoName\" aria-hidden=\"false\" alt=\"creditCardFranchise\" tabindex=\"0\"></bc-logo>\n    </div>\n  </div>\n  <div class=\"bc-card-tdc-header\">\n    <div class=\"bc-card-tdc-title\">\n      {{ cardName | titlecase }}\n    </div>\n    <div class=\"bc-card-tdc-card-number\">{{ cardNumber | maskCardNumber}}</div>\n  </div>\n  <div class=\"bc-card-tdc-minimum-payment\">\n    <div class=\"bc-card-tdc-payment-title\">Pago m\u00EDnimo</div>\n\n    <div class=\"bc-card-tdc-currency-container bc-d-flex bc-wrap\" *ngIf=\"minPayment\">\n      <span class=\"bc-card-tdc-currency-title\" *ngIf=\"minUsdPayment || (!minUsdPayment && showCurrencyAbbreviation)\">COP</span>\n      <span class=\"bc-card-tdc-amount cop\">\n        $ {{ (minPayment | formatAmount)?.int }},<span class=\"bc-card-tdc-cents\">{{ (minPayment | formatAmount)?.decimal }}</span>\n      </span>\n    </div>\n\n    <div class=\"bc-card-tdc-currency-container bc-d-flex bc-wrap\" *ngIf=\"minUsdPayment\">\n      <span class=\"bc-card-tdc-currency-title\" *ngIf=\"minPayment || (!minPayment && showCurrencyAbbreviation)\">USD</span>\n      <span class=\"bc-card-tdc-amount usd\">\n        $ {{ (minUsdPayment | formatAmount)?.int }},<span class=\"bc-card-tdc-cents\">{{ (minUsdPayment | formatAmount)?.decimal }}</span>\n      </span>\n    </div>\n\n  </div>\n  <span class=\"bc-card-tdc-due-date\">\n    <p class=\"bc-card-tdc-payment-title\">Fecha l\u00EDmite de pago</p>\n    <p class=\"bc-card-tdc-payment-date\">{{ dueDate }}</p>\n  </span>\n</div>\n\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { componentId: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2FyZC10ZGMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhcmQtdGRjL2JjLWNhcmQtdGRjLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jYXJkLXRkYy9iYy1jYXJkLXRkYy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7QUFNM0U7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sa0JBQWtCO0lBNEY3QixZQUNVLGVBQWdDLEVBQ3hDLEVBQWM7UUFETixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUF6RjFDOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRTs7Ozs7V0FLRztRQUNNLGFBQVEsR0FBeUIsVUFBVSxDQUFDO1FBMERyRDs7Ozs7V0FLRztRQUNNLDZCQUF3QixHQUFZLEtBQUssQ0FBQztRQUVuRDs7Ozs7V0FLRztRQUNPLG9CQUFlLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUFNOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQztJQUMvRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFVBQVU7UUFDZixNQUFNLFFBQVEsR0FBc0I7WUFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNuQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUE7UUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxtQkFBbUI7UUFDckIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVU7YUFDakMsS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUNULElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksVUFBa0MsQ0FBQztRQUN2QyxRQUFRLFlBQVksRUFBRTtZQUNwQixLQUFLLEdBQUc7Z0JBQ04sVUFBVSxHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQztnQkFDL0MsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixVQUFVLEdBQUcsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3JELE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sVUFBVSxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixVQUFVLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDO2dCQUMvQyxNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDdkQsTUFBTTtZQUNSO2dCQUNFLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUM7Z0JBQy9DLE1BQU07U0FDVDtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7OytHQXpLVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixtYUNoQi9CLGc2REE2Q0E7MkZEN0JhLGtCQUFrQjtrQkFWOUIsU0FBUzsrQkFDRSxhQUFhOytIQW1CZCxXQUFXO3NCQUFuQixLQUFLO2dCQVFHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUcsUUFBUTtzQkFBaEIsS0FBSztnQkFRRyxVQUFVO3NCQUFsQixLQUFLO2dCQVFHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBUUcsYUFBYTtzQkFBckIsS0FBSztnQkFRRyxRQUFRO3NCQUFoQixLQUFLO2dCQVFHLE9BQU87c0JBQWYsS0FBSztnQkFRRyxjQUFjO3NCQUF0QixLQUFLO2dCQVFHLHdCQUF3QjtzQkFBaEMsS0FBSztnQkFRSSxlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0NhcmRUZGNCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBjYXJkVGRjU3RhdHVzRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcy9iYy1jYXJkLXRkYy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IENSRURJVF9DQVJEX0ZSQU5DSElTRVMgfSBmcm9tICcuL2NvbnN0YW50cy9iYy1jYXJkLXRkYy5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1jYXJkLXRkYycsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1jYXJkLXRkYy5jb21wb25lbnQuaHRtbCcsXG59KVxuLyoqXG4gKiBDb21wb25lbnRlIENhcmRUZGNcbiAqIGltcG9ydCB7IEJjQ2FyZFRkY0NvbXBvbmVudCB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1jYXJkLXRkYyc7XG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNDYXJkVGRjQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBCY0NhcmRUZGNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBiY0NhcmRUZGNCZWhhdmlvcjogQmNDYXJkVGRjQmVoYXZpb3I7XG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqSWQgZGVsIGVsZW1lbnRvLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkVGRjQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbiAgLyoqXG4gICAqIFRpcG8gZGUgY2FyZCAnY2hlY2tib3gnIG8gJ3JhZGlvJ1xuICAgKlxuICAgKiBAdHlwZSB7KCdjaGVja2JveCcgfCAncmFkaW8nKX1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFRkY0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY2FyZFR5cGU6ICdjaGVja2JveCcgfCAncmFkaW8nID0gJ2NoZWNrYm94JztcblxuICAvKipcbiAgICogTm9tYnJlIGRlIGxhIHRhcmpldGFcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFRkY0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY2FyZE5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogTsO6bWVybyBkZSBsYSB0YXJqZXRhXG4gICAqIEZvcm1hdG8gJypYWFhYJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkVGRjQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjYXJkTnVtYmVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBhZ28gbcOtbmltb1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkVGRjQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBtaW5QYXltZW50OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBhZ28gbcOtbmltbyBlbiBkb2xhcmVzXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRUZGNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG1pblVzZFBheW1lbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5vbWJyZSBkZWwgbG9nb1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkVGRjQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBsb2dvTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGZWNoYSBsaW1pdGUgZGUgcGFnb1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkVGRjQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBkdWVEYXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5vbWJyZSBkZSBncnVwbyBkZSByYWRpb2J1dHRvbnNcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFRkY0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgcmFkaW9Hcm91cE5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhZG9yIHBhcmEgbW9zdHJhciBvIG5vIGFicmV2aWFjacOzbiBkZSBtb25lZGEgY3VhbmRvIHNvbG8gc2UgdGVuZ2EgdW5hIGRldWRhICggQ09QIG8gVVNEIClcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRUZGNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNob3dDdXJyZW5jeUFiYnJldmlhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgZGVcbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxjYXJkVGRjU3RhdHVzRGF0YT59XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRUZGNDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxjYXJkVGRjU3RhdHVzRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSxcbiAgICBlbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbDtcbiAgICB0aGlzLmJjQ2FyZFRkY0JlaGF2aW9yID0gbmV3IEJjQ2FyZFRkY0JlaGF2aW9yKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuYmNDYXJkVGRjQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY0NhcmRUZGNCZWhhdmlvci5zZXRVcCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5iY0NhcmRUZGNCZWhhdmlvci5yYWRpb0dyb3VwTmFtZSA9IGNoYW5nZXMucmFkaW9Hcm91cE5hbWU/LmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jacOzbiBsbGFtYWRhIGN1YW5kbyBzZSBkYSBjbGljayBlbiBjYXJkLCBlbWl0ZSBkYXRvcyBkZSBsYSB0YXJqZXRhXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0NhcmRUZGNDb21wb25lbnRcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RDYXJkKCk6IHZvaWQge1xuICAgIGNvbnN0IGNhcmRJbmZvOiBjYXJkVGRjU3RhdHVzRGF0YSA9IHtcbiAgICAgIGNhcmROYW1lOiB0aGlzLmNhcmROYW1lLFxuICAgICAgY2FyZE51bWJlcjogdGhpcy5jYXJkTnVtYmVyLFxuICAgICAgbWluUGF5bWVudDogdGhpcy5taW5QYXltZW50LFxuICAgICAgbWluVXNkUGF5bWVudDogdGhpcy5taW5Vc2RQYXltZW50LFxuICAgICAgZHVlRGF0ZTogdGhpcy5kdWVEYXRlLFxuICAgICAgbG9nb05hbWU6IHRoaXMubG9nb05hbWUsXG4gICAgICBlbGVtZW50SWQ6IHRoaXMuY29tcG9uZW50SWQsXG4gICAgICB0eXBlOiB0aGlzLmNhcmRUeXBlLFxuICAgICAgcmFkaW9Hcm91cE5hbWU6IHRoaXMucmFkaW9Hcm91cE5hbWUsXG4gICAgICBjYXJkVHlwZTogdGhpcy5jYXJkVHlwZVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbWl0dGVyLmVtaXQoey4uLmNhcmRJbmZvLCBzZWxlY3RlZDogdGhpcy5iY0NhcmRUZGNCZWhhdmlvci5pc1NlbGVjdGVkfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0b3JuYSBmcmFucXVpY2lhIGJhbmNhcmlhICBkZSBsYSB0YXJqZXRhIHNlZ8O6biBlbCBudW1lcm9cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtDUkVESVRfQ0FSRF9GUkFOQ0hJU0VTfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkVGRjQ29tcG9uZW50XG4gICAqL1xuICBnZXQgY3JlZGl0Q2FyZEZyYW5jaGlzZSgpIDogQ1JFRElUX0NBUkRfRlJBTkNISVNFUyB7XG4gICAgY29uc3QgaW5pdGlhbERpZ2l0ID0gdGhpcy5jYXJkTnVtYmVyXG4gICAgICAuc3BsaXQoJycpXG4gICAgICAuZmluZCgodmFsdWUpID0+IHZhbHVlICE9PSAnMCcpO1xuICAgIGxldCBmcmFuY2hpc2VzOiBDUkVESVRfQ0FSRF9GUkFOQ0hJU0VTO1xuICAgIHN3aXRjaCAoaW5pdGlhbERpZ2l0KSB7XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgZnJhbmNoaXNlcyA9IENSRURJVF9DQVJEX0ZSQU5DSElTRVMuTUFTVEVSQ0FSRDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgZnJhbmNoaXNlcyA9IENSRURJVF9DQVJEX0ZSQU5DSElTRVMuQU1FUklDQU5fRVhQUkVTUztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgZnJhbmNoaXNlcyA9IENSRURJVF9DQVJEX0ZSQU5DSElTRVMuVklTQTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc1JzpcbiAgICAgICAgZnJhbmNoaXNlcyA9IENSRURJVF9DQVJEX0ZSQU5DSElTRVMuTUFTVEVSQ0FSRDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc2JzpcbiAgICAgICAgZnJhbmNoaXNlcyA9IENSRURJVF9DQVJEX0ZSQU5DSElTRVMuTUFTVEVSQ0FSRF9NQUVTVFJPO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZyYW5jaGlzZXMgPSBDUkVESVRfQ0FSRF9GUkFOQ0hJU0VTLk1BU1RFUkNBUkQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZnJhbmNoaXNlcztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImJjLWNhcmQtdGRjXCIgKGNsaWNrKT1cInNlbGVjdENhcmQoKVwiPlxuICA8ZGl2IGNsYXNzPVwiYmMtZC1mbGV4IGJjLWp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgPGJjLWNoZWNrYm94XG4gICAgICAqbmdJZj1cImNhcmRUeXBlID09ICdjaGVja2JveCdcIlxuICAgICAgW3ZhbHVlXT1cImNvbXBvbmVudElkXCJcbiAgICA+PC9iYy1jaGVja2JveD5cblxuICAgIDxiYy1yYWRpby1ncm91cCAqbmdJZj1cImNhcmRUeXBlICE9PSAnY2hlY2tib3gnXCIgPlxuICAgICAgPGJjLXJhZGlvIGNsYXNzPVwiYmMtbXktMlwiIFt2YWx1ZV09XCJjb21wb25lbnRJZFwiPjwvYmMtcmFkaW8+XG4gICAgPC9iYy1yYWRpby1ncm91cD5cblxuICAgIDxkaXY+XG4gICAgICA8YmMtbG9nbyBbc2l6ZV09XCInNjRweCdcIiBbbmFtZV09XCJsb2dvTmFtZVwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhbHQ9XCJjcmVkaXRDYXJkRnJhbmNoaXNlXCIgdGFiaW5kZXg9XCIwXCI+PC9iYy1sb2dvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJjLWNhcmQtdGRjLWhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJiYy1jYXJkLXRkYy10aXRsZVwiPlxuICAgICAge3sgY2FyZE5hbWUgfCB0aXRsZWNhc2UgfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtY2FyZC10ZGMtY2FyZC1udW1iZXJcIj57eyBjYXJkTnVtYmVyIHwgbWFza0NhcmROdW1iZXJ9fTwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJjLWNhcmQtdGRjLW1pbmltdW0tcGF5bWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJiYy1jYXJkLXRkYy1wYXltZW50LXRpdGxlXCI+UGFnbyBtw61uaW1vPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtY2FyZC10ZGMtY3VycmVuY3ktY29udGFpbmVyIGJjLWQtZmxleCBiYy13cmFwXCIgKm5nSWY9XCJtaW5QYXltZW50XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImJjLWNhcmQtdGRjLWN1cnJlbmN5LXRpdGxlXCIgKm5nSWY9XCJtaW5Vc2RQYXltZW50IHx8ICghbWluVXNkUGF5bWVudCAmJiBzaG93Q3VycmVuY3lBYmJyZXZpYXRpb24pXCI+Q09QPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJiYy1jYXJkLXRkYy1hbW91bnQgY29wXCI+XG4gICAgICAgICQge3sgKG1pblBheW1lbnQgfCBmb3JtYXRBbW91bnQpPy5pbnQgfX0sPHNwYW4gY2xhc3M9XCJiYy1jYXJkLXRkYy1jZW50c1wiPnt7IChtaW5QYXltZW50IHwgZm9ybWF0QW1vdW50KT8uZGVjaW1hbCB9fTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJiYy1jYXJkLXRkYy1jdXJyZW5jeS1jb250YWluZXIgYmMtZC1mbGV4IGJjLXdyYXBcIiAqbmdJZj1cIm1pblVzZFBheW1lbnRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYmMtY2FyZC10ZGMtY3VycmVuY3ktdGl0bGVcIiAqbmdJZj1cIm1pblBheW1lbnQgfHwgKCFtaW5QYXltZW50ICYmIHNob3dDdXJyZW5jeUFiYnJldmlhdGlvbilcIj5VU0Q8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImJjLWNhcmQtdGRjLWFtb3VudCB1c2RcIj5cbiAgICAgICAgJCB7eyAobWluVXNkUGF5bWVudCB8IGZvcm1hdEFtb3VudCk/LmludCB9fSw8c3BhbiBjbGFzcz1cImJjLWNhcmQtdGRjLWNlbnRzXCI+e3sgKG1pblVzZFBheW1lbnQgfCBmb3JtYXRBbW91bnQpPy5kZWNpbWFsIH19PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICA8c3BhbiBjbGFzcz1cImJjLWNhcmQtdGRjLWR1ZS1kYXRlXCI+XG4gICAgPHAgY2xhc3M9XCJiYy1jYXJkLXRkYy1wYXltZW50LXRpdGxlXCI+RmVjaGEgbMOtbWl0ZSBkZSBwYWdvPC9wPlxuICAgIDxwIGNsYXNzPVwiYmMtY2FyZC10ZGMtcGF5bWVudC1kYXRlXCI+e3sgZHVlRGF0ZSB9fTwvcD5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbiJdfQ==