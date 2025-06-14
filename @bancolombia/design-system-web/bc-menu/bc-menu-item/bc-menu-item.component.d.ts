import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Item del menu
 *
 * @export
 * @class BcMenuItemComponent
 * @implements {OnInit}
 */
export declare class BcMenuItemComponent implements OnInit {
    /**
     * Texto del item
     *
     * @type {string}
     * @memberof BcMenuItemComponent
     */
    text: string;
    /**
     * item activo por defecto
     *
     * @type {string}
     * @memberof BcMenuItemComponent
     */
    itemActive: string;
    /**
     * Nombre del icono
     *
     * @type {string}
     * @memberof BcMenuItemComponent
     */
    iconName: string;
    /**
     * Ruta or url del item
     *
     * @type {string}
     * @memberof BcMenuItemComponent
     */
    path?: string;
    /**
     * Id del elemento
     *
     * @type {string}
     * @memberof BcMenuItemComponent
     */
    identifierContent?: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcMenuItemComponent, "bc-menu-item", never, { "text": "text"; "itemActive": "itemActive"; "iconName": "iconName"; "path": "path"; "identifierContent": "identifierContent"; }, {}, never, never>;
}
