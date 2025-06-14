import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 * @export
 * @class BcAccordionComponent
 */
export declare class BcAccordionComponent {
    private bcHelperService;
    /**
     * Esta entrada permite indicar un id único al componente dentro del DOM.
     *
     * @type {string}
     * @memberof BcInputSelectComponent
     */
    componentId: string;
    /**
     * Tipo de acordeón [ basic(default) | info | advance | column | minimal | minimal-unbordered]
     * Define la esctructura que va a tener el acordeón, por defecto es básica (basic).
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    type: string;
    /**
     * Permite configurar el comportamiento del acordeón para que este se muestre expandido desde su carga en el DOM
     * es de tipo booleana y por defecto es false.
     *
     * @type {boolean}
     * @memberof BcAccordionHeaderComponent
     */
    active: boolean;
    /**
     * Parametro por deprecar, debido a que no es parte del componente, de acuerdo a documentacion Figma.
     * No realiza ninguna acción.
     *
     * @type {boolean}
     * @memberof BcAccordionHeaderComponent
     */
    disabled: boolean;
    constructor(bcHelperService: BcHelperService);
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcAccordionComponent, "bc-accordion", never, { "componentId": "componentId"; "type": "type"; "active": "active"; "disabled": "disabled"; }, {}, never, ["*"]>;
}
