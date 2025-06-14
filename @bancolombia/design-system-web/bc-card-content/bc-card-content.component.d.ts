import { EventEmitter, OnInit } from '@angular/core';
import { BcCardContentConfig, CardContentButton, CardContentIconButton, CardContentStatus, CardContentLink } from './bc-cad-content-interfaces';
import * as i0 from "@angular/core";
/**
 * Componente Card Content
 *
 * @export
 * @class BcCardContentComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcCardContentComponent implements OnInit {
    componentStatus: CardContentStatus;
    componentButtonOne: CardContentButton;
    componentButtonTwo: CardContentButton;
    componentIconButtonOne: CardContentIconButton;
    componentIconButton: CardContentIconButton;
    componentLink: CardContentLink;
    positionButtons: string;
    template: number;
    /**
     * Parámetro para denotar el tipo de card
     * @type BcCardContentConfig
     * @memberof BcCardContentComponent
     */
    dataConfig: BcCardContentConfig;
    /**
     * Parámetro para el texto alternativo de la imagen o la ilustración
     * @type BcCardContentConfig
     * @memberof BcCardContentComponent
     */
    altImgIllustrator: string;
    /**
    * Salida de evento del componente Tag.
    *
    * @type {(EventEmitter<any>)}
    * @memberof BcCardContentComponent
    */
    handleEvent: EventEmitter<any>;
    ngOnInit(): void;
    propagateEvent: (id: string) => void;
    setPositionButtons(): void;
    setTemplate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCardContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCardContentComponent, "bc-card-content", never, { "dataConfig": "dataConfig"; "altImgIllustrator": "altImgIllustrator"; }, { "handleEvent": "handleEvent"; }, never, never>;
}
