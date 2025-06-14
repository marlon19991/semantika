import { AfterViewInit, EventEmitter } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export interface IRightButtons {
    icon: string;
    id: string;
}
export interface IRBreadcrumbs {
    text: string;
    link: string;
}
/**
 * Importa el componente BcFooter para el pie de página
 *
 * @export
 * @class BcfooterComponent
 * @implements {AfterViewInit}
 */
export declare class BcPageHeaderComponent implements AfterViewInit {
    private bcHelperService;
    /**
     * Id del elemento
     *
     * @type {string}
     * @memberof BcPageHeaderComponent
     */
    componentId: string;
    /**
     * Links del lado derecho
     *
     * @type {IRightButtons[]}
     * @memberof BcPageHeaderComponent
     */
    rightButtons: IRightButtons[];
    /**
     * Fecha de lado derecho
     *
     * @type {string}
     * @memberof BcPageHeaderComponent
     */
    date: string;
    /**
     * Titulo de la pagina
     *
     * @type {string}
     * @memberof BcPageHeaderComponent
     */
    title: string;
    /**
     * Coloca el background blanco
     *
     * @type {boolean}
     * @memberof BcPageHeaderComponent
     */
    bgWhite: boolean;
    /**
     * Coloca el background blanco
     *
     * @type {boolean}
     * @memberof BcPageHeaderComponent
     */
    showBackButton: boolean;
    /**
     * Evento click de los botos de la derecha
     *
     * @type {EventEmitter}
     * @memberof BcPageHeaderComponent
     */
    clickButtonRight: EventEmitter<string>;
    /**
     * Evento click para retroceder
     *
     * @type {EventEmitter}
     * @memberof BcPageHeaderComponent
     */
    clickBackButton: EventEmitter<string>;
    bcPageHeaderBehavior: any;
    constructor(bcHelperService: BcHelperService);
    ngAfterViewInit(): void;
    buttonClick(idButton: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPageHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcPageHeaderComponent, "bc-page-header", never, { "componentId": "componentId"; "rightButtons": "rightButtons"; "date": "date"; "title": "title"; "bgWhite": "bgWhite"; "showBackButton": "showBackButton"; }, { "clickButtonRight": "clickButtonRight"; "clickBackButton": "clickBackButton"; }, never, never>;
}
