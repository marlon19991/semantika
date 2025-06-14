import { AfterViewInit } from '@angular/core';
import { BcHeaderBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Este componente Header es utilizado para el menú de los sitios bancolombia
 *
 * @export
 * @class BcHeaderComponent
 * @implements {OnInit}
 */
export declare class BcHeaderComponent implements AfterViewInit {
    private bcHelperService;
    /**
     * Posición del header fija [true (default) | false].
     *
     * @type {boolean}
     * @memberof BcHeaderComponent
     */
    fixed: boolean;
    /**
     * Id del componente.
     *
     * @memberof BcHeaderComponent
     */
    id: string;
    /**
     * Indica si existe un menú lateral y si este va a tener interacción con el header, por defecto es true.
     *
     * @type {boolean}
     * @memberof BcHeaderComponent
     */
    menuInteraction: boolean;
    /**
   *  headerType define el tipo de header a mostrar pueden ser tipo white o black.
   *
   * @memberof BcHeaderItemMenuComponent
   */
    headerType: 'bc-header-wrapper' | 'bc-header-wrapper-black';
    /**
     * Comportamiento de componente
     *
     * @type {BcHeaderBehavior}
     * @memberof BcHeaderComponent
     */
    bcHeaderBehavior: BcHeaderBehavior;
    /**
     * Crea una instancia de of BcHeaderComponent.
     * @param {BcHelperService} bcHelperService Servicios para generar el Id aleatoriamente
     * @memberof BcHeaderComponent
     */
    constructor(bcHelperService: BcHelperService);
    /**
     * Se ejecuta después de cargar el dom
     *
     * @memberof BcHeaderComponent
     */
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcHeaderComponent, "bc-header", never, { "fixed": "fixed"; "id": "id"; "menuInteraction": "menuInteraction"; "headerType": "headerType"; }, {}, never, ["*", "[role=bc-header-mobile-content]"]>;
}
