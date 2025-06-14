import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, HostListener, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BcListBehavior, BcDropdownBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcPaginatorModule } from '@bancolombia/design-system-web/bc-paginator';
import { BcTableModule } from '@bancolombia/design-system-web/bc-table';

/**
 * Componente estilo cargando
 *
 * @export
 * @class BcListComponent
 * @implements {AfterViewInitnit}
 */
class BcListComponent {
    constructor(bcHelper) {
        this.bcHelper = bcHelper;
        /**
         * Casilla para seleccionar un item o varios, es opcional.
         *
         * @type {boolean}
         * @memberof BcListComponent
         */
        this.checkbox = false;
        /**
        * Dato principal que permite identificar la fila ,es obligatorio, puede tener cualquier valor string.
        *
        * @type {string}
        * @memberof BcListComponent
        */
        this.mainContent = '';
        /**
       * Dato principal con variante de alineacion,es opcional, puede tener cualquier valor string.
       *
       * @type {string}
       * @memberof BcListComponent
       */
        this.mainContent2 = '';
        /**
         * La lista permite un minimo de 3 datos, este dato es obligatorio.
         *
         * @type {string}
         * @memberof BcListComponent
         */
        this.contentData1 = '';
        /**
        * La lista permite un minimo de 3 datos, este dato es obligatorio.
        *
        * @type {string}
        * @memberof BcListComponent
        */
        this.contentData2 = '';
        /**
         * La lista permite un minimo de 3 datos y un maximo de 5, este dato es opcional.
         *
         * @type {string}
         * @memberof BcListComponent
         */
        this.contentData3 = '';
        /**
        * La lista permite un minimo de 3 datos y un maximo de 5, este dato es opcional.
        *
        * @type {string}
        * @memberof BcListComponent
        */
        this.contentData4 = '';
        /**
        * Nombre del ícono que ejecuta una acción.
        *
        * @memberof BcListComponent
        */
        this.actionIcon = '';
        /**
       * Icono acompañante de texto del icono accionable.
       *
       * @type {string}
       * @memberof BcListComponent
       */
        this.contentIcon = '';
        /**
        * Texto de opciones del icono accionable.
        *
        * @type {string}
        * @memberof BcListComponent
        */
        this.contentText = '';
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
         * Define la url a la cual vamos a redirigir cada enlace del menú.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.route = '';
        /**
         * Define el tipo de avatar que se va a mostrar en el menú.
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.userAvatar = null;
        /**
         * Evento de salida que indica la opción seleccionada en el dropdown
         *
         * @type {EventEmitter<any>}
         * @memberof BcHeaderItemMenuComponent
         */
        this.optionSelected = new EventEmitter();
        /**
         * Id del del dropdown
         *
         * @memberof BcHeaderItemMenuComponent
         */
        this.dropdownId = `headerDropdown_${this.bcHelper.getId(this)}`;
        /**
         * Inidica si el item está deshabilitado, por defecto es false
         *
         * @type {boolean}
         * @memberof BcHeaderItemMenuComponent
         */
        this.isDisabled = false;
        /**
         * Id del item
         *
         * @type {string}
         * @memberof BcHeaderItemMenuComponent
         */
        this.componentId = this.bcHelper.getId(this);
        this.bcListBehavior = new BcListBehavior();
        this.bcDropdownBehavior = new BcDropdownBehavior();
    }
    headerDropdownChanged(event) {
        if (this.isDropdown) {
            this.optionSelected.emit(event.detail);
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.bcListBehavior.setUp();
        BcDropdownBehavior.setUpAll({ isPopUp: true });
    }
}
BcListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcListComponent, selector: "bc-list", inputs: { checkbox: "checkbox", mainContent: "mainContent", mainContent2: "mainContent2", contentData1: "contentData1", contentData2: "contentData2", contentData3: "contentData3", contentData4: "contentData4", actionIcon: "actionIcon", contentIcon: "contentIcon", contentText: "contentText", itemId: "itemId", itemType: "itemType", icon: "icon", text: "text", subText: "subText", route: "route", isDropdown: "isDropdown", dropdownList: "dropdownList", userAvatar: "userAvatar", isDisabled: "isDisabled", componentId: "componentId" }, outputs: { optionSelected: "optionSelected" }, host: { listeners: { "window:headerDropdownChanged": "headerDropdownChanged($event)" } }, ngImport: i0, template: "<section class=\"bc-list bc-margin-top-2\" id=\"list\"> \n    <section class=\"bc-list-main-content\"> \n        <label class=\"bc-container-checkbox\" aria-label=\"Casilla de verificacion\" *ngIf=\"checkbox\">\n            <input type=\"checkbox\" name=\"checkbox\">\n            <span class=\"bc-list-checkbox bc-checkbox\"></span> \n        </label> \n        <section class=\"bc-list-main-data-checkbox\"> \n            <p class=\"bc-list-font\">{{ mainContent }}</p> \n            <strong>{{ mainContent2 }}</strong> \n        </section>\n    </section> \n    <section class=\"bc-list-content\">\n        <div class=\"bc-list-action-icon\">\n            <ul>\n                <li [ngClass]=\"{'bc-dropdown bc-dropdown-custom bc-dropdowm-tablet': isDropdown,\n                'bc-header-nav-item_logout bc-reverse-d-lg-none': itemType === 'logout'}\" [id]=\"componentId\">\n                    <a class=\"bc-list-items\" [attr.href]=\"route!=''? route: null\" \n                        [ngClass]=\"{'bc-dropdown-toggle': isDropdown, 'bc-disabled': isDisabled}\"\n                        [attr.aria-controls]=\"isDropdown ? dropdownId : null\">\n                        <em class=\"bc-icon bc-xxs\" *ngIf=\"icon !== ''\">{{icon}}</em>\n                        <div class=\"bc-header-nav-item-text\"> <p>{{text}}</p></div>\n                        <bc-icon class=\"bc-list-menu-dropdown bc-icon bc-md bc-dropdown-toggle\"  \n                            aria-label=\"Opciones de la fila\" aria-controls=\"myDropdown4\" tabindex=\"0\" *ngIf=\"isDropdown\">{{ actionIcon }}\n                        </bc-icon>\n                    </a>\n                    <div class=\"bc-dropdown-content\" [id]=\"dropdownId\" *ngIf=\"isDropdown\">\n                        <ul>\n                            <li class=\"bc-dropdown-item\" [id]=\"dropdownId+'_'+i\" *ngFor=\"let item of dropdownList; let i = index\" \n                                [ngClass]=\"{'bc-disabled': item.disabled}\">\n                                <a class=\"bc-link\">\n                                    <em class=\"bc-icon bc-xxs\" *ngIf=\"item.icon\">{{item.icon}}</em>\n                                    <div class=\"bc-dropdown-item-text\"><p>{{item.text}}</p></div>\n                                </a>    \n                            </li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <section class=\"bc-list-content-data\">{{ contentData1 }}</section>  \n        <section class=\"bc-list-content-data\">{{ contentData2 }}</section> \n        <section class=\"bc-list-content-data\">{{ contentData3 }}</section> \n        <section class=\"bc-list-content-data\">{{ contentData4 }}</section> \n    </section> \n</section>", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-list', template: "<section class=\"bc-list bc-margin-top-2\" id=\"list\"> \n    <section class=\"bc-list-main-content\"> \n        <label class=\"bc-container-checkbox\" aria-label=\"Casilla de verificacion\" *ngIf=\"checkbox\">\n            <input type=\"checkbox\" name=\"checkbox\">\n            <span class=\"bc-list-checkbox bc-checkbox\"></span> \n        </label> \n        <section class=\"bc-list-main-data-checkbox\"> \n            <p class=\"bc-list-font\">{{ mainContent }}</p> \n            <strong>{{ mainContent2 }}</strong> \n        </section>\n    </section> \n    <section class=\"bc-list-content\">\n        <div class=\"bc-list-action-icon\">\n            <ul>\n                <li [ngClass]=\"{'bc-dropdown bc-dropdown-custom bc-dropdowm-tablet': isDropdown,\n                'bc-header-nav-item_logout bc-reverse-d-lg-none': itemType === 'logout'}\" [id]=\"componentId\">\n                    <a class=\"bc-list-items\" [attr.href]=\"route!=''? route: null\" \n                        [ngClass]=\"{'bc-dropdown-toggle': isDropdown, 'bc-disabled': isDisabled}\"\n                        [attr.aria-controls]=\"isDropdown ? dropdownId : null\">\n                        <em class=\"bc-icon bc-xxs\" *ngIf=\"icon !== ''\">{{icon}}</em>\n                        <div class=\"bc-header-nav-item-text\"> <p>{{text}}</p></div>\n                        <bc-icon class=\"bc-list-menu-dropdown bc-icon bc-md bc-dropdown-toggle\"  \n                            aria-label=\"Opciones de la fila\" aria-controls=\"myDropdown4\" tabindex=\"0\" *ngIf=\"isDropdown\">{{ actionIcon }}\n                        </bc-icon>\n                    </a>\n                    <div class=\"bc-dropdown-content\" [id]=\"dropdownId\" *ngIf=\"isDropdown\">\n                        <ul>\n                            <li class=\"bc-dropdown-item\" [id]=\"dropdownId+'_'+i\" *ngFor=\"let item of dropdownList; let i = index\" \n                                [ngClass]=\"{'bc-disabled': item.disabled}\">\n                                <a class=\"bc-link\">\n                                    <em class=\"bc-icon bc-xxs\" *ngIf=\"item.icon\">{{item.icon}}</em>\n                                    <div class=\"bc-dropdown-item-text\"><p>{{item.text}}</p></div>\n                                </a>    \n                            </li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <section class=\"bc-list-content-data\">{{ contentData1 }}</section>  \n        <section class=\"bc-list-content-data\">{{ contentData2 }}</section> \n        <section class=\"bc-list-content-data\">{{ contentData3 }}</section> \n        <section class=\"bc-list-content-data\">{{ contentData4 }}</section> \n    </section> \n</section>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { checkbox: [{
                type: Input
            }], mainContent: [{
                type: Input
            }], mainContent2: [{
                type: Input
            }], contentData1: [{
                type: Input
            }], contentData2: [{
                type: Input
            }], contentData3: [{
                type: Input
            }], contentData4: [{
                type: Input
            }], actionIcon: [{
                type: Input
            }], contentIcon: [{
                type: Input
            }], contentText: [{
                type: Input
            }], itemId: [{
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
            }], isDropdown: [{
                type: Input
            }], dropdownList: [{
                type: Input
            }], userAvatar: [{
                type: Input
            }], optionSelected: [{
                type: Output
            }], isDisabled: [{
                type: Input
            }], componentId: [{
                type: Input
            }], headerDropdownChanged: [{
                type: HostListener,
                args: ['window:headerDropdownChanged', ['$event']]
            }] } });

class BcListModule {
}
BcListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListModule, declarations: [BcListComponent], imports: [BcIconModule, BcCheckboxModule, CommonModule, BcPaginatorModule, BcTableModule], exports: [BcListComponent] });
BcListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListModule, imports: [[BcIconModule, BcCheckboxModule, CommonModule, BcPaginatorModule, BcTableModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcListComponent],
                    imports: [BcIconModule, BcCheckboxModule, CommonModule, BcPaginatorModule, BcTableModule],
                    exports: [BcListComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcListComponent, BcListModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-list.mjs.map
