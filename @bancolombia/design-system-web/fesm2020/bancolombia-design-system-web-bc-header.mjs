import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcHeaderBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@bancolombia/design-system-web/bc-tooltip';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';
import { BcAvatarModule } from '@bancolombia/design-system-web/bc-avatar';
import { BcFloatMenuModule } from '@bancolombia/design-system-web/bc-float-menu';

/**
 * Este componente Header es utilizado para el menú de los sitios bancolombia
 *
 * @export
 * @class BcHeaderComponent
 * @implements {OnInit}
 */
class BcHeaderComponent {
    /**
     * Crea una instancia de of BcHeaderComponent.
     * @param {BcHelperService} bcHelperService Servicios para generar el Id aleatoriamente
     * @memberof BcHeaderComponent
     */
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Posición del header fija [true (default) | false].
         *
         * @type {boolean}
         * @memberof BcHeaderComponent
         */
        this.fixed = true;
        /**
         * Id del componente.
         *
         * @memberof BcHeaderComponent
         */
        this.id = this.bcHelperService.getId(this);
        /**
         * Indica si existe un menú lateral y si este va a tener interacción con el header, por defecto es true.
         *
         * @type {boolean}
         * @memberof BcHeaderComponent
         */
        this.menuInteraction = true;
        /**
       *  headerType define el tipo de header a mostrar pueden ser tipo white o black.
       *
       * @memberof BcHeaderItemMenuComponent
       */
        this.headerType = 'bc-header-wrapper';
        /**
         * Comportamiento de componente
         *
         * @type {BcHeaderBehavior}
         * @memberof BcHeaderComponent
         */
        this.bcHeaderBehavior = new BcHeaderBehavior();
    }
    /**
     * Se ejecuta después de cargar el dom
     *
     * @memberof BcHeaderComponent
     */
    ngAfterViewInit() {
        this.bcHeaderBehavior.setId(this.id);
        this.bcHeaderBehavior.communicationWithMenu = this.menuInteraction;
        this.bcHeaderBehavior.setUp();
    }
}
BcHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderComponent, selector: "bc-header", inputs: { fixed: "fixed", id: "id", menuInteraction: "menuInteraction", headerType: "headerType" }, ngImport: i0, template: "<article class=\"{{ headerType }}\" [ngClass]=\"{'bc-fixed': fixed}\" [id]=\"id\">\n  <header class=\"bc-header\">\n    <ng-content></ng-content>\n  </header>\n  <ng-content select=\"[role=bc-header-mobile-content]\"></ng-content>\n</article>\n", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header', template: "<article class=\"{{ headerType }}\" [ngClass]=\"{'bc-fixed': fixed}\" [id]=\"id\">\n  <header class=\"bc-header\">\n    <ng-content></ng-content>\n  </header>\n  <ng-content select=\"[role=bc-header-mobile-content]\"></ng-content>\n</article>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { fixed: [{
                type: Input
            }], id: [{
                type: Input
            }], menuInteraction: [{
                type: Input
            }], headerType: [{
                type: Input
            }] } });

/**
 * Comoponente para el logo izquierdo del header.
 *
 * @export
 * @class BcHeaderLeftComponent
 */
class BcHeaderLeftComponent {
    constructor() {
        /**
         * Texto en menu izquierdo hamburguesa.
         *
         * @type {boolean}
         * @memberof BcHeaderComponent
         */
        this.txtLeftMenu = 'Menú';
        /**
         * Indica si existe un menú lateral y si este va a tener interacción con el header, por defecto es true.
         *
         * @type {boolean}
         * @memberof BcHeaderLeftComponent
         */
        this.menuInteraction = true;
        /**
        /**
         * Nombre del logo a mostrar.
         *
         * @memberof BcHeaderLeftComponent
         */
        this.logoName = 'bancolombia-horizonal';
        /**
         * Nombre del logo en dispositos moviles a mostrar.
         *
         * @memberof BcHeaderLeftComponent
         */
        this.logoMobile = 'isotipo-bancolombia';
        /**
         * Nombre del canal a mostrar.
         *
         * @memberof BcHeaderLeftComponent
         */
        this.channelName = '';
    }
}
BcHeaderLeftComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderLeftComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcHeaderLeftComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderLeftComponent, selector: "bc-header-left", inputs: { txtLeftMenu: "txtLeftMenu", menuInteraction: "menuInteraction", ariaLabelogo: "ariaLabelogo", ariaLabelChannel: "ariaLabelChannel", logoName: "logoName", logoMobile: "logoMobile", channelName: "channelName" }, ngImport: i0, template: "\n<section class=\"bc-header-brand\">\n  <div class=\"bc-header-brand_menu-toggle bc-reverse-d-lg-none\"\n          *ngIf=\"menuInteraction\" aria-label=\"Men\u00FA principal\" role=\"button\">\n    <em class=\"bc-icon bc-sm\">menu</em>\n    <span>{{txtLeftMenu}}</span>\n  </div>\n  <bc-icon\n          class=\"bc-icon-mobile\"\n          size=\"sm\"\n          [name]=\"logoMobile\"\n          aria-hidden=\"true\"\n          [ariaLabel]=\"ariaLabelogo\">\n  </bc-icon>\n  <bc-icon\n          class=\"bc-header-brand-logo\"\n          size=\"2xl\"\n          [name]=\"logoName\"\n          aria-hidden=\"true\"\n          [ariaLabel]=\"ariaLabelogo\">\n  </bc-icon>\n\n  <div class=\"bc-header-channel\" *ngIf=\"channelName !== ''\" [attr.aria-label]='ariaLabelChannel'>\n    <h5>{{channelName}}</h5>\n  </div>\n</section>\n", components: [{ type: i1$1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderLeftComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header-left', template: "\n<section class=\"bc-header-brand\">\n  <div class=\"bc-header-brand_menu-toggle bc-reverse-d-lg-none\"\n          *ngIf=\"menuInteraction\" aria-label=\"Men\u00FA principal\" role=\"button\">\n    <em class=\"bc-icon bc-sm\">menu</em>\n    <span>{{txtLeftMenu}}</span>\n  </div>\n  <bc-icon\n          class=\"bc-icon-mobile\"\n          size=\"sm\"\n          [name]=\"logoMobile\"\n          aria-hidden=\"true\"\n          [ariaLabel]=\"ariaLabelogo\">\n  </bc-icon>\n  <bc-icon\n          class=\"bc-header-brand-logo\"\n          size=\"2xl\"\n          [name]=\"logoName\"\n          aria-hidden=\"true\"\n          [ariaLabel]=\"ariaLabelogo\">\n  </bc-icon>\n\n  <div class=\"bc-header-channel\" *ngIf=\"channelName !== ''\" [attr.aria-label]='ariaLabelChannel'>\n    <h5>{{channelName}}</h5>\n  </div>\n</section>\n" }]
        }], propDecorators: { txtLeftMenu: [{
                type: Input
            }], menuInteraction: [{
                type: Input
            }], ariaLabelogo: [{
                type: Input
            }], ariaLabelChannel: [{
                type: Input
            }], logoName: [{
                type: Input
            }], logoMobile: [{
                type: Input
            }], channelName: [{
                type: Input
            }] } });

/**
 * Componente de lista para los items del header.
 *
 * @export
 * @class BcHeaderListComponent
 */
class BcHeaderListComponent {
}
BcHeaderListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcHeaderListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderListComponent, selector: "bc-header-list", ngImport: i0, template: "<section>\n  <ul class=\"bc-header-nav\">\n    <ng-content></ng-content>\n  </ul>\n</section>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header-list', template: "<section>\n  <ul class=\"bc-header-nav\">\n    <ng-content></ng-content>\n  </ul>\n</section>\n" }]
        }] });

/**
 * Componente del item para el header
 * Este componente puede ser de 6 tipos ['help' | 'language' | 'notifiaction' | 'user' | 'logout']
 *
 * @export
 * @class BcHeaderItemMenu
 */
class BcHeaderItemMenuComponent {
    constructor(bcHelper) {
        this.bcHelper = bcHelper;
        /**
         * Id del componente.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.itemId = this.bcHelper.getId(this);
        /**
         *  itemType define el tipo de icono a mostrar pueden ser tipo user o logout.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.itemType = 'any';
        /**
         * Define el icono a mostrar en cada item del header.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.icon = null;
        /**
         * Define la url a la cual vamos a redirigir cada enlace del header.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.route = '';
        /**
         * Define el tipo de avatar que se va a mostrar en el header.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.userAvatar = null;
        /**
         * Id del item.
         *
         * @type {string}
         * @memberof BcHeaderItemMenuComponent
         */
        this.componentId = this.bcHelper.getId(this);
    }
}
BcHeaderItemMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderItemMenuComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcHeaderItemMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderItemMenuComponent, selector: "bc-header-item", inputs: { itemId: "itemId", itemType: "itemType", icon: "icon", text: "text", subText: "subText", route: "route", userAvatar: "userAvatar", componentId: "componentId" }, ngImport: i0, template: "<li class=\"bc-header-nav-item\" [ngClass]=\"{'bc-header-nav-item_logout': itemType === 'logout'}\" [id]=\"componentId\">\n    <a class=\"bc-link\" [attr.href]=\"route!=''? route: null\">\n        <em class=\"bc-icon bc-sm\" *ngIf=\"icon !== null\">{{icon}}</em>\n        <img class=\"bc-avatar bc-avatar-small\" src=\"{{userAvatar}}\" alt=\"avatar\" *ngIf=\"itemType === 'user' && userAvatar !== null\">\n        <div class=\"bc-header-nav-item-text\">\n            <p>{{text}}</p><small *ngIf=\"subText !== ''\">{{subText}}</small>\n        </div>\n    </a>\n</li>\n", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderItemMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header-item', template: "<li class=\"bc-header-nav-item\" [ngClass]=\"{'bc-header-nav-item_logout': itemType === 'logout'}\" [id]=\"componentId\">\n    <a class=\"bc-link\" [attr.href]=\"route!=''? route: null\">\n        <em class=\"bc-icon bc-sm\" *ngIf=\"icon !== null\">{{icon}}</em>\n        <img class=\"bc-avatar bc-avatar-small\" src=\"{{userAvatar}}\" alt=\"avatar\" *ngIf=\"itemType === 'user' && userAvatar !== null\">\n        <div class=\"bc-header-nav-item-text\">\n            <p>{{text}}</p><small *ngIf=\"subText !== ''\">{{subText}}</small>\n        </div>\n    </a>\n</li>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { itemId: [{
                type: Input
            }], itemType: [{
                type: Input
            }], icon: [{
                type: Input
            }], text: [{
                type: Input
            }], subText: [{
                type: Input
            }], route: [{
                type: Input
            }], userAvatar: [{
                type: Input
            }], componentId: [{
                type: Input
            }] } });

/**
 * Componente del item de iconos para el header.
 * Seccion de iconos funcionales, no usan las etiquetas y deben llevar un tooltip.
 *
 * @export
 * @class BcHeaderIconMenu
 */
class BcHeaderIconMenuComponent {
    constructor(bcHelper) {
        this.bcHelper = bcHelper;
        /**
         * Tooltip ubicado en los iconos del header.
         *  @type {ItooltipIcon}
         * @memberof BcHeaderIconComponent
         */
        this.tooltipIcon = {
            isTooltip: false,
            textTooltip: '',
            positionTooltip: '',
        };
        /**
         * Define la url a la cual vamos a redirigir cada enlace del header.
         *
         * @memberof BcHeaderIconMenuComponent
         */
        this.route = '';
        /**
         * Id del item
         *
         * @type {string}
         * @memberof BcHeaderIconMenuComponent
         */
        this.componentId = this.bcHelper.getId(this);
    }
}
BcHeaderIconMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderIconMenuComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcHeaderIconMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderIconMenuComponent, selector: "bc-header-icon", inputs: { tooltipIcon: "tooltipIcon", icon: "icon", text: "text", subText: "subText", route: "route", componentId: "componentId" }, ngImport: i0, template: "<li class=\"bc-header-nav-div\" [id]=\"componentId\">\n  <a class=\"bc-link bc-icon\" bc-tooltip [bcTooltipPosition]=\"tooltipIcon.positionTooltip\" [bcTooltipText]=\"tooltipIcon.textTooltip\" [attr.href]=\"route!=''? route: null\">\n      <bc-icon\n          class=\"bc-icon\"\n          size=\"sm\"\n          *ngIf=\"icon !== ''\" \n          [name]='icon'\n      >\n  </bc-icon>\n  </a>\n</li>\n", components: [{ type: i1$1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.BcTooltipDirective, selector: "[bc-tooltip]", inputs: ["bcTooltipPosition", "bcTooltipTitle", "bcTooltipText", "bcTooltipButtonText", "bcTooltipParentElement"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderIconMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header-icon', template: "<li class=\"bc-header-nav-div\" [id]=\"componentId\">\n  <a class=\"bc-link bc-icon\" bc-tooltip [bcTooltipPosition]=\"tooltipIcon.positionTooltip\" [bcTooltipText]=\"tooltipIcon.textTooltip\" [attr.href]=\"route!=''? route: null\">\n      <bc-icon\n          class=\"bc-icon\"\n          size=\"sm\"\n          *ngIf=\"icon !== ''\" \n          [name]='icon'\n      >\n  </bc-icon>\n  </a>\n</li>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { tooltipIcon: [{
                type: Input
            }], icon: [{
                type: Input
            }], text: [{
                type: Input
            }], subText: [{
                type: Input
            }], route: [{
                type: Input
            }], componentId: [{
                type: Input
            }] } });

/**
 * Componente de lista para los items del header.
 *
 * @export
 * @class BcHeaderMobileComponent
 */
class BcHeaderMobileComponent {
}
BcHeaderMobileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderMobileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcHeaderMobileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcHeaderMobileComponent, selector: "bc-header-mobile", ngImport: i0, template: "<header class=\"bc-header-mobile\">\n  <ul class=\"bc-header-nav\">\n    <li class=\"bc-header-nav-item\">\n      <ng-content></ng-content>\n    </li>\n  </ul>\n</header>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderMobileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-header-mobile', template: "<header class=\"bc-header-mobile\">\n  <ul class=\"bc-header-nav\">\n    <li class=\"bc-header-nav-item\">\n      <ng-content></ng-content>\n    </li>\n  </ul>\n</header>\n" }]
        }] });

class BcHeaderModule {
}
BcHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderModule, declarations: [BcHeaderComponent,
        BcHeaderLeftComponent,
        BcHeaderListComponent,
        BcHeaderItemMenuComponent,
        BcHeaderIconMenuComponent,
        BcHeaderMobileComponent], imports: [CommonModule, BcIconModule, BcAvatarModule, BcTooltipModule, BcFloatMenuModule], exports: [BcHeaderComponent,
        BcHeaderLeftComponent,
        BcHeaderListComponent,
        BcHeaderItemMenuComponent,
        BcHeaderIconMenuComponent,
        BcHeaderMobileComponent] });
BcHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderModule, imports: [[CommonModule, BcIconModule, BcAvatarModule, BcTooltipModule, BcFloatMenuModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcHeaderComponent,
                        BcHeaderLeftComponent,
                        BcHeaderListComponent,
                        BcHeaderItemMenuComponent,
                        BcHeaderIconMenuComponent,
                        BcHeaderMobileComponent,
                    ],
                    imports: [CommonModule, BcIconModule, BcAvatarModule, BcTooltipModule, BcFloatMenuModule],
                    exports: [
                        BcHeaderComponent,
                        BcHeaderLeftComponent,
                        BcHeaderListComponent,
                        BcHeaderItemMenuComponent,
                        BcHeaderIconMenuComponent,
                        BcHeaderMobileComponent,
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcHeaderComponent, BcHeaderIconMenuComponent, BcHeaderItemMenuComponent, BcHeaderLeftComponent, BcHeaderListComponent, BcHeaderMobileComponent, BcHeaderModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-header.mjs.map
