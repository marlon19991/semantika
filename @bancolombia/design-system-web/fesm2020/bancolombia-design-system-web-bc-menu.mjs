import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, ViewChild, NgModule } from '@angular/core';
import { BcMenuBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * Componente menú
 *
 * @export
 * @class BcMenuComponent
 * @implements {AfterViewInit}
 */
class BcMenuComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Estado inicial del menu, determina si inicia plegado o desplegado
         *
         * @memberof BcMenuComponent
         */
        this.state = 'open';
        /**
         * Id del elemento
         *
         * @memberof BcMenuComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Permite ocultar el perfil del usuario en el submenu cuando está en mobile.
         *
         * @memberof BcMenuComponent
         */
        this.hideProfileInSubmenu = false;
        /**
         * Permite setear el nombre del usuario y la url para la actualización de datos (opcional)
         *
         * @memberof BcMenuComponent
         */
        this.profileData = { user: '', updateUserDataUrl: '' };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.bcMenuBehavior = new BcMenuBehavior();
        if (this.config != undefined) {
            this.generateMenu();
        }
        else {
            this.bcMenuBehavior.setId(this.componentId);
            this.bcMenuBehavior.setLogoutEvent(this.logoutFunction);
            this.setProfileData();
            this.bcMenuBehavior.setUp();
        }
    }
    /**
     * Genera el menú apartir de la configuración
     *
     * @memberof BcMenuComponent
     */
    generateMenu() {
        this.bcMenuBehavior.generateByConfig(this.config, this.byConfig.nativeElement);
    }
    setProfileData() {
        if (this.profileData.user !== '') {
            this.bcMenuBehavior.profileData = this.profileData;
        }
    }
}
BcMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuComponent, selector: "bc-menu", inputs: { config: "config", state: "state", componentId: "componentId", logoutFunction: "logoutFunction", hideProfileInSubmenu: "hideProfileInSubmenu", profileData: "profileData" }, viewQueries: [{ propertyName: "byConfig", first: true, predicate: ["byConfig"], descendants: true, static: true }], ngImport: i0, template: "<div [id]=\"componentId\" class=\"bc-menu-global-container\" [attr.state]=\"state\">\n    <div class=\"bc-menu\">\n        <ng-container *ngIf=\"config === undefined\">\n            <ng-content select=\"bc-menu-drawer\">\n            </ng-content>\n            <ng-content select=\"bc-menu-main\">\n            </ng-content>\n        </ng-container>\n    </div>\n    <div class=\"bc-content bc-container-solid bc-bg-light\">\n        <ng-content select=\".bc-content-body\"></ng-content>\n    </div>\n</div>\n<div #byConfig>\n\n</div>", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [id]=\"componentId\" class=\"bc-menu-global-container\" [attr.state]=\"state\">\n    <div class=\"bc-menu\">\n        <ng-container *ngIf=\"config === undefined\">\n            <ng-content select=\"bc-menu-drawer\">\n            </ng-content>\n            <ng-content select=\"bc-menu-main\">\n            </ng-content>\n        </ng-container>\n    </div>\n    <div class=\"bc-content bc-container-solid bc-bg-light\">\n        <ng-content select=\".bc-content-body\"></ng-content>\n    </div>\n</div>\n<div #byConfig>\n\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { config: [{
                type: Input
            }], state: [{
                type: Input
            }], componentId: [{
                type: Input
            }], logoutFunction: [{
                type: Input
            }], hideProfileInSubmenu: [{
                type: Input
            }], profileData: [{
                type: Input
            }], byConfig: [{
                type: ViewChild,
                args: ['byConfig', { static: true }]
            }] } });

/**
 * Item del menu
 *
 * @export
 * @class BcMenuItemComponent
 * @implements {OnInit}
 */
class BcMenuItemComponent {
    constructor() {
        /**
         * item activo por defecto
         *
         * @type {string}
         * @memberof BcMenuItemComponent
         */
        this.itemActive = 'false';
    }
    ngOnInit() { }
}
BcMenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuItemComponent, selector: "bc-menu-item", inputs: { text: "text", itemActive: "itemActive", iconName: "iconName", path: "path", identifierContent: "identifierContent" }, ngImport: i0, template: "<a [ngClass]='itemActive === \"true\" ? \"bc-menu-item-active\" : \"bc-menu-item\"' \r\n  aria-label='Item del men\u00FA' [attr.for]='identifierContent' \r\n  [attr.href]='path!=\"\" ? path: null'>\r\n  <li>\r\n    <bc-icon name='{{iconName}}' ariaLabel='{{text}}' aria-hidden=\"true\" role=\"img\" size=\"sm\">\r\n    </bc-icon>\r\n    <div>{{text}}</div>\r\n  </li>\r\n</a>\r\n", components: [{ type: i1$1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-item', template: "<a [ngClass]='itemActive === \"true\" ? \"bc-menu-item-active\" : \"bc-menu-item\"' \r\n  aria-label='Item del men\u00FA' [attr.for]='identifierContent' \r\n  [attr.href]='path!=\"\" ? path: null'>\r\n  <li>\r\n    <bc-icon name='{{iconName}}' ariaLabel='{{text}}' aria-hidden=\"true\" role=\"img\" size=\"sm\">\r\n    </bc-icon>\r\n    <div>{{text}}</div>\r\n  </li>\r\n</a>\r\n" }]
        }], propDecorators: { text: [{
                type: Input
            }], itemActive: [{
                type: Input
            }], iconName: [{
                type: Input
            }], path: [{
                type: Input
            }], identifierContent: [{
                type: Input
            }] } });

/**
 * Menu componente principal
 *
 * @export
 * @class BcMenuMainComponent
 * @implements {OnInit}
 */
class BcMenuMainComponent {
    ngOnInit() {
    }
}
BcMenuMainComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuMainComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuMainComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuMainComponent, selector: "bc-menu-main", ngImport: i0, template: "<div class=\"bc-menu-main-content\">\n    <div class=\"bc-menu-content-header\">\n        <h5>{{selectedItem}}</h5>\n        <bc-icon aria-hidden=\"true\" aria-label=\"prueba\" role=\"img\" size=\"sm\">\n            error\n        </bc-icon>\n    </div>\n    <div class=\"bc-menu-content-bodies\">\n\n        <ng-content>\n\n        </ng-content>\n    </div>\n</div>", components: [{ type: i1$1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuMainComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-main', template: "<div class=\"bc-menu-main-content\">\n    <div class=\"bc-menu-content-header\">\n        <h5>{{selectedItem}}</h5>\n        <bc-icon aria-hidden=\"true\" aria-label=\"prueba\" role=\"img\" size=\"sm\">\n            error\n        </bc-icon>\n    </div>\n    <div class=\"bc-menu-content-bodies\">\n\n        <ng-content>\n\n        </ng-content>\n    </div>\n</div>" }]
        }] });

/**
 * Componente drawer menu
 *
 * @export
 * @class BcMenuDrawerComponent
 * @implements {OnInit}
 */
class BcMenuDrawerComponent {
    ngOnInit() {
    }
}
BcMenuDrawerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuDrawerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuDrawerComponent, selector: "bc-menu-drawer", inputs: { textCloseButton: "textCloseButton", functionCloseButton: "functionCloseButton" }, ngImport: i0, template: "<ul class=\"bc-menu-drawer-content\">\n    <ng-content >\n    </ng-content>\n</ul>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuDrawerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-drawer', template: "<ul class=\"bc-menu-drawer-content\">\n    <ng-content >\n    </ng-content>\n</ul>\n" }]
        }], propDecorators: { textCloseButton: [{
                type: Input
            }], functionCloseButton: [{
                type: Input
            }] } });

/**
 * Componente cuerpo menú.
 *
 * @export
 * @class BcMenuBodyComponent
 * @implements {OnInit}
 */
class BcMenuBodyComponent {
    ngOnInit() {
    }
}
BcMenuBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuBodyComponent, selector: "bc-menu-body", inputs: { identifier: "identifier" }, ngImport: i0, template: "\n<div class=\"bc-menu-content-body\" [id]=\"identifier\">\n    <ng-content>\n            \n    </ng-content>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-body', template: "\n<div class=\"bc-menu-content-body\" [id]=\"identifier\">\n    <ng-content>\n            \n    </ng-content>\n</div>" }]
        }], propDecorators: { identifier: [{
                type: Input
            }] } });

/**
 * Columna menú.
 *
 * @export
 * @class BcMenuColumnComponent
 * @implements {OnInit}
 */
class BcMenuColumnComponent {
    ngOnInit() {
    }
}
BcMenuColumnComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuColumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuColumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuColumnComponent, selector: "bc-menu-column", ngImport: i0, template: "<div class=\"bc-menu-content-column\">\n    \n        <ng-content>\n\n        </ng-content>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-column', template: "<div class=\"bc-menu-content-column\">\n    \n        <ng-content>\n\n        </ng-content>\n</div>" }]
        }] });

/**
 * Componente opciones de menu
 *
 * @export
 * @class BcMenuOptionComponent
 * @implements {OnInit}
 */
class BcMenuOptionComponent {
    ngOnInit() {
    }
}
BcMenuOptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuOptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuOptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuOptionComponent, selector: "bc-menu-option", inputs: { text: "text", href: "href" }, ngImport: i0, template: "<a [attr.href]=\"href!=''? href: null\">\n  <li>\n    {{text}}\n  </li>\n</a>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-option', template: "<a [attr.href]=\"href!=''? href: null\">\n  <li>\n    {{text}}\n  </li>\n</a>\n" }]
        }], propDecorators: { text: [{
                type: Input
            }], href: [{
                type: Input
            }] } });

/**
 * Componente sección menú.
 *
 * @export
 * @class BcMenuSectionComponent
 * @implements {OnInit}
 */
class BcMenuSectionComponent {
    ngOnInit() {
    }
}
BcMenuSectionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuSectionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcMenuSectionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuSectionComponent, selector: "bc-menu-section", inputs: { title: "title" }, ngImport: i0, template: "\n<ul>\n    <a>\n        <li>\n            <h6>\n                {{title}}\n            </h6>\n        </li>\n    </a>\n    <ng-content>\n        \n    </ng-content>\n</ul>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuSectionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu-section', template: "\n<ul>\n    <a>\n        <li>\n            <h6>\n                {{title}}\n            </h6>\n        </li>\n    </a>\n    <ng-content>\n        \n    </ng-content>\n</ul>\n" }]
        }], propDecorators: { title: [{
                type: Input
            }] } });

/**
 *
 * @componente <bc-menu></bc-menu>
 * @fileoverview Permite crear un menu lateral para ubicar opciones de navegación.
 * @param config JSON con la configuración del menu.

 * @param componentId Identificador del componente.
 * @example
 *  <bc-menu [config]="configMenu" textCloseButton='Close' [functionCloseButton]='closeSession()'></bc-menu>
 *
 * @componente <bc-menu-drawer></bc-menu-drawer>
 * @fileoverview Permite crear una opción del menú lateral.
 * @param textCloseButton Texto del botón del footer del menú.
 * @param functionCloseButton Función al presionar el botón del footer del menú.
 * @example
 * <bc-menu-drawer textCloseButton='Close' [functionCloseButton]='closeSession'></bc-menu-drawer>
 *
 * @componente <bc-menu-item></bc-menu-item>
 * @fileoverview Permite crear una opción del menú lateral.
 * @param text?: Texto de la opción
 * @param iconName?: Nombre del ícono
 * @param path?: Ruta de navegación
 * @param identifierContent?: Identificador del contenido;
 * @example
 *  <bc-menu-item path='#' identifierContent='id1' text='Inicio' iconName='hogar'></bc-menu-item>
 *
 * @componente <bc-menu-main></bc-menu-main>
 * @fileoverview Permite configurar los contenidos.
 * @example
 *  <bc-menu-main></bc-menu-main>
 *
 * @componente <bc-menu-body></bc-menu-body>
 * @fileoverview Permite configurar un submenú con las opciones pertinentes al mismo.
 * @param identifier Identificador del grupo de opciones
 * @example
 * <bc-menu-body identifier='id1'></bc-menu-body>
 *
 * @componente <bc-menu-column></bc-menu-column>
 * @fileoverview Permite configurar las columnas de las opciones del ítem.
 * @example
 *  <bc-menu-column></bc-menu-column>
 *
 * @componente <bc-menu-section></bc-menu-section>
 * @fileoverview Permite configurar las diferentes secciones de una columna.
 * @param title: Título de la sección
 * @example
 *  <bc-menu-section></bc-menu-section>
 *
 * @componente <bc-menu-option></bc-menu-option>
 * @fileoverview Permite configurar las diferentes secciones de una columna.
 * @param text: Texto de la opción
 * @param href: Ruta de la opción
 *
 * @example
 *  <bc-menu-option text='Transacciones' href='transactions'></bc-menu-option>
 *
 * A continuación un ejemplo completo del menú.
 *
 *
 * <bc-menu>
 *     <bc-menu-drawer textCloseButton='Close' [functionCloseButton]='closeSession'>
 *         <bc-menu-item path='#' identifierContent='id1' text='Inicio' iconName='hogar'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id2' text='Pagos' iconName='pagar'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id3' text='Transferir' iconName='transferir'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id4' text='Gastos' iconName='gastos_financieros'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id5' text='Impuestos' iconName='impuestos'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id6' text='Direccionamiento' iconName='direccionamiento'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id7' text='Configuración' iconName='configuracion'></bc-menu-item>
 *     </bc-menu-drawer>
 *     <bc-menu-main>
 *         <bc-menu-body identifier='id1'>
 *             <bc-menu-column>
 *                 <bc-menu-section title='Saldos Consolidados #2'>
 *                     <bc-menu-option text='Saldos totales' href='ammount'></bc-menu-option>
 *                     <bc-menu-option text='Saldos por grupos de productos' href='products'></bc-menu-option>
 *                 </bc-menu-section>
 *                 <bc-menu-section title='Saldos Consolidados #3'>
 *                     <bc-menu-option text='Saldos totales' href='ammount'></bc-menu-option>
 *                     <bc-menu-option text='Saldos por grupos de productos' href='products'></bc-menu-option>
 *                 </bc-menu-section>
 *             </bc-menu-column>
 *         </bc-menu-body>
 *
 *         <bc-menu-body identifier='id2'>
 *             <bc-menu-column>
 *                 <bc-menu-section title='Saldos 1Consolidados #2'>
 *                     <bc-menu-option text='Saldos totales' href='ammount'></bc-menu-option>
 *                     <bc-menu-option text='Saldos por grupos de productos' href='products'></bc-menu-option>
 *                 </bc-menu-section>
 *                 <bc-menu-section title='Saldos Consolidados #3'>
 *                     <bc-menu-option text='Saldos totales' href='ammount'></bc-menu-option>
 *                     <bc-menu-option text='Saldos por grupos de productos' href='products'></bc-menu-option>
 *                 </bc-menu-section>
 *             </bc-menu-column>
 *         </bc-menu-body>
 *     </bc-menu-main>
 * </bc-menu>
 *
 * También es posible realizar un menú a través de un archivo de configuración con la siguiente estructura:
 * Estructura del archivo de configuración
 *
 * interface BcMenuConfig {
 * items: [
 *   {
 *     text?: string;
 *     iconName?: string;
 *     path?: string;
 *     identifierContent?: string;
 *   }
 * ];
 * contents?: [
 *   {
 *     identifierContent: string;
 *     columns: [
 *       {
 *         sections: [
 *           {
 *             title: string;
 *             options: [
 *               {
 *                 text: string;
 *                 path?: string;
 *               }
 *             ];
 *           }
 *         ]
 *       }
 *     ];
 *   }
 * ];
 * closeOptions?: {
 *   text: string;
 *   function?: () => void;
 * };
 * }

 */
class BcMenuModule {
}
BcMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuModule, declarations: [BcMenuComponent,
        BcMenuItemComponent,
        BcMenuMainComponent,
        BcMenuDrawerComponent,
        BcMenuBodyComponent,
        BcMenuColumnComponent,
        BcMenuOptionComponent,
        BcMenuSectionComponent], imports: [BcIconModule,
        CommonModule], exports: [BcMenuComponent,
        BcMenuItemComponent,
        BcMenuMainComponent,
        BcMenuDrawerComponent,
        BcMenuBodyComponent,
        BcMenuColumnComponent,
        BcMenuOptionComponent,
        BcMenuSectionComponent] });
BcMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuModule, imports: [[
            BcIconModule,
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcMenuComponent,
                        BcMenuItemComponent,
                        BcMenuMainComponent,
                        BcMenuDrawerComponent,
                        BcMenuBodyComponent,
                        BcMenuColumnComponent,
                        BcMenuOptionComponent,
                        BcMenuSectionComponent
                    ],
                    imports: [
                        BcIconModule,
                        CommonModule
                    ],
                    exports: [
                        BcMenuComponent,
                        BcMenuItemComponent,
                        BcMenuMainComponent,
                        BcMenuDrawerComponent,
                        BcMenuBodyComponent,
                        BcMenuColumnComponent,
                        BcMenuOptionComponent,
                        BcMenuSectionComponent
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcMenuBodyComponent, BcMenuColumnComponent, BcMenuComponent, BcMenuDrawerComponent, BcMenuItemComponent, BcMenuMainComponent, BcMenuModule, BcMenuOptionComponent, BcMenuSectionComponent };
//# sourceMappingURL=bancolombia-design-system-web-bc-menu.mjs.map
