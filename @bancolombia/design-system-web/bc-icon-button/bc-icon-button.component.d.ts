import { OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente Icon Button.
 * El Icon Button es un accionable que sintetiza y resalta
 * una funcionalidad dentro de una interfaz.
 *
 * @export
 * @class BcIconButtonComponent
 */
export declare class BcIconButtonComponent implements OnChanges {
    classList: string;
    ariaLabelFabSelected: string;
    ariaLabelValue: string;
    /**
     * Parámetro para denotar el tipo de botón
     * @type {('fab' | 'solid' | 'outline' | 'ghost')}
     * @memberof BcIconButtonComponent
     */
    type: 'fab' | 'solid' | 'outline' | 'outline-inverse' | 'ghost';
    /**
     * Parámetro para denotar el color de botón
     * @type {('yellow' | 'black' | 'white')}
     * @memberof BcIconButtonComponent
     */
    color: 'yellow' | 'black' | 'white';
    /**
     * Parámetro para denotar el tamaño del botton
     * @type {('xsmall' | 'small' | 'medium' | 'large'| 'xlarge')}
     * @memberof BcIconButtonComponent
     */
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    /**
     * Parámetro para denotar el shadow del botton en variante Solid
     * @type {boolean}
     * @memberof BcIconButtonComponent
     */
    shadow: boolean;
    /**
     * Parámetro para el custom icon del componente.
     * @type {string}
     * @memberof BcIconButtonComponent
     */
    customIcon: string;
    /**
     * Desabilitar button
     * @type {boolean}
     * @memberof BcIconButtonComponent
     */
    statusButton: boolean;
    /**
     * Por deprecar. Utilizar 'selected'
     * @type {boolean}
     * @memberof BcIconButtonComponent
     */
    seleted: boolean;
    /**
     * Parámetro para poner el componente en un estado seleccionado.
     * @type {boolean}
     * @memberof BcIconButtonComponent
     */
    selected: boolean;
    /**
     * Parámetro para definir aria-label
     * @type {string}
     * @memberof BcIconButtonComponent
     */
    ariaLabel: string;
    ngOnChanges(changes: SimpleChanges): void;
    private updateAriaLabel;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcIconButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcIconButtonComponent, "bc-icon-button", never, { "type": "type"; "color": "color"; "size": "size"; "shadow": "shadow"; "customIcon": "customIcon"; "statusButton": "statusButton"; "seleted": "seleted"; "selected": "selected"; "ariaLabel": "ariaLabel"; }, {}, never, never>;
}
