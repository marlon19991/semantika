import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BcShortcutComponent implements AfterViewInit {
    private elRef;
    /**
     * Este valor de entrada define el tipo de shortcut.
     * Los valores permitidos [ single(default) | multiple | horizontal ]
     *
     * @type {string}
     * @memberof BcShortcutComponent
     */
    typeShortcut: 'single' | 'multiple' | 'horizontal';
    /**
     * Nombre de la acción que describe el shortcut.
     *
     * @type {string}
     * @memberof BcShortcutComponent
     */
    text: string;
    /**
     * Nombre del icono que identifica al shortcut.
     *
     * @type {string}
     * @memberof BcShortcutComponent
     */
    icon: string;
    /**
     * Descripción de la acción del shortcut en caso de que aplique.
     *
     * @type {string}
     * @memberof BcShortcutComponent
     */
    description: string;
    /**
     * Ruta hacia donde dirije el shortcut.
     *
     * @type {string}
     * @memberof BcShortcutComponent
     */
    route: string;
    /**
     * Permite indicar si el shortcut es nuevo.
     *
     * @type {boolean}
     * @memberof BcShortcutComponent
     */
    isNew: boolean;
    /**
     * Permite indicar si está deshabilitado
     *
     * @type {boolean}
     * @memberof BcShortcutComponent
     */
    isDisabled: boolean;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
    overrideLinkClickEvent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcShortcutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcShortcutComponent, "bc-shortcut", never, { "typeShortcut": "typeShortcut"; "text": "text"; "icon": "icon"; "description": "description"; "route": "route"; "isNew": "isNew"; "isDisabled": "isDisabled"; }, {}, never, never>;
}
