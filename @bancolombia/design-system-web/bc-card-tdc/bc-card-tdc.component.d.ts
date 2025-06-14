import { AfterViewInit, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BcCardTdcBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { cardTdcStatusData } from './interfaces/bc-card-tdc-interfaces';
import { CREDIT_CARD_FRANCHISES } from './constants/bc-card-tdc.constants';
import * as i0 from "@angular/core";
export declare class BcCardTdcComponent implements AfterViewInit, OnChanges {
    private bcHelperService;
    bcCardTdcBehavior: BcCardTdcBehavior;
    element: ElementRef;
    /**
     *Id del elemento.
     *
     * @type {string}
     * @memberof BcCardTdcComponent
     */
    componentId: string;
    /**
     * Tipo de card 'checkbox' o 'radio'
     *
     * @type {('checkbox' | 'radio')}
     * @memberof BcCardTdcComponent
     */
    cardType: 'checkbox' | 'radio';
    /**
     * Nombre de la tarjeta
     *
     * @type {string}
     * @memberof BcCardTdcComponent
     */
    cardName: string;
    /**
     * Número de la tarjeta
     * Formato '*XXXX'
     * @type {string}
     * @memberof BcCardTdcComponent
     */
    cardNumber: string;
    /**
     * Pago mínimo
     *
     * @type {string}
     * @memberof BcCardTdcComponent
     */
    minPayment: string;
    /**
     * Pago mínimo en dolares
     *
     * @type {string}
     * @memberof BcCardTdcComponent
     */
    minUsdPayment?: string;
    /**
     * Nombre del logo
     *
     * @type {string}
     * @memberof BcCardTdcComponent
     */
    logoName: string;
    /**
     * Fecha limite de pago
     *
     * @type {string}
     * @memberof BcCardTdcComponent
     */
    dueDate: string;
    /**
     * Nombre de grupo de radiobuttons
     *
     * @type {string}
     * @memberof BcCardTdcComponent
     */
    radioGroupName: string;
    /**
     * Indicador para mostrar o no abreviación de moneda cuando solo se tenga una deuda ( COP o USD )
     *
     * @type {boolean}
     * @memberof BcCardTdcComponent
     */
    showCurrencyAbbreviation: boolean;
    /**
     * EventEmitter de
     *
     * @type {EventEmitter<cardTdcStatusData>}
     * @memberof BcCardTdcComponent
     */
    selectedEmitter: EventEmitter<cardTdcStatusData>;
    constructor(bcHelperService: BcHelperService, el: ElementRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Función llamada cuando se da click en card, emite datos de la tarjeta
     *
     * @memberof BcCardTdcComponent
     */
    selectCard(): void;
    /**
     * Retorna franquicia bancaria  de la tarjeta según el numero
     *
     * @readonly
     * @type {CREDIT_CARD_FRANCHISES}
     * @memberof BcCardTdcComponent
     */
    get creditCardFranchise(): CREDIT_CARD_FRANCHISES;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCardTdcComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCardTdcComponent, "bc-card-tdc", never, { "componentId": "componentId"; "cardType": "cardType"; "cardName": "cardName"; "cardNumber": "cardNumber"; "minPayment": "minPayment"; "minUsdPayment": "minUsdPayment"; "logoName": "logoName"; "dueDate": "dueDate"; "radioGroupName": "radioGroupName"; "showCurrencyAbbreviation": "showCurrencyAbbreviation"; }, { "selectedEmitter": "selectedEmitter"; }, never, never>;
}
