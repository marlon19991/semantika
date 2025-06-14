import * as i0 from "@angular/core";
/**
 * Componente card container
 * Contenedor dinámico para uso en distintos componentes.
 *
 * @export
 * @class BcCardContainerComponent
 */
export declare class BcCardContainerComponent {
    classTypeCard: {
        default: string;
        'stroke-1': string;
        'stroke-2': string;
    };
    /**
     * Parámetro para denotar el tipo de card container
     *
     * @type {('default' | 'stroke-1' | 'stroke-2')}
     * @memberof BcCardContainerComponent
     */
    cardType: 'default' | 'stroke-1' | 'stroke-2';
    /**
     * Parámetro para denotar el tamaño del borde
     *
     * @type {string}
     * @memberof BcCardContainerComponent
     */
    borderClass: string;
    /**
     * Parámetro para denotar el shadow
     *
     * @type {string}
     * @memberof BcCardContainerComponent
     */
    shadowClass: string;
    /**
     * Parámetro para denotar el color
     *
     * @type {string}
     * @memberof BcCardContainerComponent
     */
    cardColorClass: string;
    /**
     * Parámetro para denotar el color del borde
     *
     * @type {string}
     * @memberof BcCardContainerComponent
     */
    borderColorClass: string;
    /**
     * Parámetro para agregar una class personalizada
     *
     * @type {string}
     * @memberof BcCardContainerComponent
     */
    otherClass: string;
    setCardTypeClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCardContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCardContainerComponent, "bc-card-container", never, { "cardType": "cardType"; "borderClass": "borderClass"; "shadowClass": "shadowClass"; "cardColorClass": "cardColorClass"; "borderColorClass": "borderColorClass"; "otherClass": "otherClass"; }, {}, never, ["*"]>;
}
