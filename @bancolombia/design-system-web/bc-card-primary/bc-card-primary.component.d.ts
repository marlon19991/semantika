import { EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { BcCardPrimaryConfig, CardPrimaryButton, CardPrimaryIconButton, CardPrimaryInfoAccount, CardPrimaryInfoData, CardPrimaryStatus, CardPrimaryTag } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
 * Componente Card Select
 *
 * @export
 * @class BcCardSelectComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcCardPrimaryComponent implements AfterViewInit, OnInit {
    infoAccount: CardPrimaryInfoAccount;
    dataOne: CardPrimaryInfoData;
    dataTwo: CardPrimaryInfoData;
    componentStatus: CardPrimaryStatus;
    componentTagOne: CardPrimaryTag;
    componentTagTwo: CardPrimaryTag;
    componentButton: CardPrimaryButton;
    componentIconButton: CardPrimaryIconButton;
    /**
     * Parámetro para denotar el tipo de tag
     * @type BcCardPrimaryConfig
     * @memberof BcCardPrimaryComponent
     */
    dataConfig: BcCardPrimaryConfig;
    /**
    * Salida de evento del componente Tag.
    *
    * @type {(EventEmitter<any>)}
    * @memberof BcCardPrimaryComponent
    */
    handleEvent: EventEmitter<any>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    propagateEvent: (id: string) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCardPrimaryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCardPrimaryComponent, "bc-card-primary", never, { "dataConfig": "dataConfig"; }, { "handleEvent": "handleEvent"; }, never, never>;
}
