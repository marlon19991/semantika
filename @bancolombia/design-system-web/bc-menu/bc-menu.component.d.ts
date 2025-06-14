import { ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { BcMenuBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export interface BcMenuProfileData {
    user: string;
    updateUserDataUrl?: string;
}
/**
 * Componente menú
 *
 * @export
 * @class BcMenuComponent
 * @implements {AfterViewInit}
 */
export declare class BcMenuComponent implements AfterViewInit, OnInit {
    private bcHelperService;
    /**
     * Configuración del menú
     *
     * @memberof BcMenuComponent
     */
    config: any;
    /**
     * Estado inicial del menu, determina si inicia plegado o desplegado
     *
     * @memberof BcMenuComponent
     */
    state: 'open' | 'close';
    /**
     * Id del elemento
     *
     * @memberof BcMenuComponent
     */
    componentId: string;
    /**
     * Evento para el botón de cerrar sesión
     *
     * @memberof BcMenuComponent
     */
    logoutFunction: (param?: any) => void;
    /**
     * Permite ocultar el perfil del usuario en el submenu cuando está en mobile.
     *
     * @memberof BcMenuComponent
     */
    hideProfileInSubmenu: boolean;
    /**
     * Permite setear el nombre del usuario y la url para la actualización de datos (opcional)
     *
     * @memberof BcMenuComponent
     */
    profileData: BcMenuProfileData;
    byConfig: ElementRef;
    bcMenuBehavior: BcMenuBehavior;
    constructor(bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Genera el menú apartir de la configuración
     *
     * @memberof BcMenuComponent
     */
    generateMenu(): void;
    setProfileData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcMenuComponent, "bc-menu", never, { "config": "config"; "state": "state"; "componentId": "componentId"; "logoutFunction": "logoutFunction"; "hideProfileInSubmenu": "hideProfileInSubmenu"; "profileData": "profileData"; }, {}, never, ["bc-menu-drawer", "bc-menu-main", ".bc-content-body"]>;
}
