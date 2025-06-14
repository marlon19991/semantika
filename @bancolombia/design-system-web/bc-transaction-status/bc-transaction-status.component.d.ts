import { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente Transaction Status
 * Icono utilizado en diferentes componentes y plantillas con el fín de identificar un estado.
 *
 * @export
 * @class BcTransactionStatusComponent
 */
export declare class BcTransactionStatusComponent implements OnChanges {
    SizeIcon: string;
    borderr: string;
    /**
     * Parámetro para denotar el tipo de estado
     *
     * @type {('success' | 'error' | 'warning' | 'info' | 'generic'|'dynamic'|'dynamicTxt'|'dynamicxs' )}
     * @memberof BcTransactionStatusComponent
     */
    status: 'success' | 'error' | 'warning' | 'generic' | 'dynamic' | 'dynamicTxt' | 'dynamicxs' | 'info';
    /**
     * Parámetro para denotar el tamaño del componente
     *
     * @type {('xs' | 'sm' | 'md'|'2xs'|'emd'|'sn')}
     * @memberof BcTransactionStatusComponent
     */
    size: 'xs' | 'sm' | 'emd' | '2xs' | 'sn' | 'md';
    /**
     * Tipos de iconos
     *
     * @memberof BcTransactionStatusComponent
     */
    icons: {
        success: string;
        error: string;
        warning: string;
        info: string;
        generic: string;
        "": string;
    };
    /**
     * Parámetro para el custom icon del componente.
     *
     * @type {string}
     * @memberof BcTransactionStatusComponent
     */
    customIcon: string;
    /**
        * Parámetro para el custom icon del componente.
        *
        * @type {string}
        * @memberof BcTransactionStatusComponent
        */
    texto: string;
    /**
        * Parámetro para el color del componente.
        *
        * @type {string}
        * @memberof BcTransactionStatusComponent
        */
    color: string;
    /**
        * Parámetro para el agregar border al componente.
        *
        * @type {string}
        * @memberof BcTransactionStatusComponent
        */
    border: string;
    /**
        * Parámetro para el agregar border al componente.
        *
        * @type {string}
        * @memberof BcTransactionStatusComponent
        */
    textAriaLabel: string;
    constructor();
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTransactionStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTransactionStatusComponent, "bc-transaction-status", never, { "status": "status"; "size": "size"; "customIcon": "customIcon"; "texto": "texto"; "color": "color"; "border": "border"; "textAriaLabel": "textAriaLabel"; }, {}, never, never>;
}
