import { AfterViewInit, EventEmitter } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
interface ITopLinks {
    /** asas */
    alignContent: 'flex-end' | 'flex-start' | 'center';
    links?: Array<{
        text: string;
        link?: string;
        method?: string;
        isSelf?: boolean;
    }>;
}
interface ITopMethods {
    alignContent: 'flex-end' | 'flex-start' | 'center';
    methods: Array<{
        text: string;
        method: string;
    }>;
}
interface ITopTextContent {
    title: {
        text: string;
        link: string;
        onlyStyleText: boolean;
        isSelf: boolean;
    };
    texts: Array<{
        text: string;
        link: string;
        isSelf: boolean;
    }>;
}
interface ISocialNetBottomRight {
    name: string;
    link: string;
    isSelf: boolean;
}
interface IColorsStroke {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    color6: string;
}
/**
 * Importa el componente footer con los diseños de Bancolombia S.A. este componente,
 * se utiliza para los pie de página.
 *
 * @export
 * @class BcfooterComponent
 * @implements {AfterViewInit}
 */
export declare class BcFooterComponent implements AfterViewInit {
    private bcHelperService;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcfooterComponent
     */
    componentId: string;
    /**
     * Links con alineacion en el top del footer, los posibles valores de align (alineación) son "flex-end" | "flex-start" | "center".
     *
     * @type {ITopLinks}
     * @memberof BcfooterComponent
     */
    topLinks: ITopLinks;
    topMethods: ITopMethods;
    /**
     * Objeto para mostrar los textos de la parte superior del footer.
     *
     * @type {ITopTextContent[]}
     * @memberof BcfooterComponent
     */
    topTextContent: ITopTextContent[];
    /**
     * Array de textos que se muestra en la parte inferior izquierda del footer.
     *
     * @type {Array<string>}
     * @memberof BcfooterComponent
     */
    bottomTextLeftContent: Array<string>;
    /**
     * Array de textos que se muestra en la parte inferior derecha del footer.
     *
     * @type {Array<string>}
     * @memberof BcfooterComponent
     */
    bottomTextRighContent: Array<string>;
    /**
     * Array de objetos para las redes sociales. En name pueden ir facebook,twitter,linkedin,instagram,youtube.
     *
     * @type {ISocialNetBottomRight[]}
     * @memberof BcfooterComponent
     */
    socialNetBottomRight: ISocialNetBottomRight[];
    /**
     * Boolean que por defecto esta true y muestra el icono bancolombia en la parte inferior.
     *
     * @type {boolean}
     * @memberof BcfooterComponent
     */
    isBancoLogoBottom: boolean;
    /**
     * Boolean que por defecto esta true y muestra el icono vigilado en la parte inferior.
     *
     * @type {boolean}
     * @memberof BcfooterComponent
     */
    isVigilaLogoBottom: boolean;
    /**
     * Boolean que por defecto esta en false y cambia el background del footer a blanco.
     *
     * @type {boolean}
     * @memberof BcfooterComponent
     */
    bgWhite: boolean;
    /**
     * Define el tipo de color de fondo del footersi esta en true cambiara a gris.
     *
     * @type {boolean}
     * @memberof BcfooterComponent
     */
    bgGray: boolean;
    /**
     * String el cual nos permite alinear el logo de bancolombia a la izquierda( el que se encuentra cerca de los copyright).
     *
     * @type {string}
     * @memberof BcfooterComponent
     */
    icon: 'left' | 'top';
    /**
     * Define el logo a usar en el footer.
     *
     * @type {string}
     * @memberof BcfooterComponent
     */
    logo: string;
    /**
     * Objeto que permite cambiar los colores del trazo,
     * el color stroke va desde 1 hasta el 6.
     * @type {IColorsStroke}
     * @memberof BcfooterComponent
     */
    colorStroke: IColorsStroke;
    methodCallout: EventEmitter<string>;
    bcFooterBehavior: any;
    constructor(bcHelperService: BcHelperService);
    methodCall(method: string): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcFooterComponent, "bc-footer", never, { "componentId": "componentId"; "topLinks": "topLinks"; "topMethods": "topMethods"; "topTextContent": "topTextContent"; "bottomTextLeftContent": "bottomTextLeftContent"; "bottomTextRighContent": "bottomTextRighContent"; "socialNetBottomRight": "socialNetBottomRight"; "isBancoLogoBottom": "isBancoLogoBottom"; "isVigilaLogoBottom": "isVigilaLogoBottom"; "bgWhite": "bgWhite"; "bgGray": "bgGray"; "icon": "icon"; "logo": "logo"; "colorStroke": "colorStroke"; }, { "methodCallout": "methodCallout"; }, never, never>;
}
export {};
