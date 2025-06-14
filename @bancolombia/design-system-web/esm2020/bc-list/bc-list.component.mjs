import { Component, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { BcListBehavior, BcDropdownBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@angular/common";
/**
 * Componente estilo cargando
 *
 * @export
 * @class BcListComponent
 * @implements {AfterViewInitnit}
 */
export class BcListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtbGlzdC9iYy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1saXN0L2JjLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUkxRjs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8sZUFBZTtJQTJLMUIsWUFBb0IsUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUF2SzdDOzs7OztXQUtHO1FBQ08sYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQjs7Ozs7VUFLRTtRQUNRLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRTFCOzs7OztTQUtDO1FBQ1EsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFN0I7Ozs7O1dBS0c7UUFDTyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUUzQjs7Ozs7VUFLRTtRQUNRLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRTdCOzs7OztXQUtHO1FBQ08saUJBQVksR0FBRyxFQUFFLENBQUM7UUFFM0I7Ozs7O1VBS0U7UUFDUSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUUzQjs7OztVQUlFO1FBQ08sZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV6Qjs7Ozs7U0FLQztRQUNPLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRTFCOzs7OztVQUtFO1FBQ1EsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFMUI7Ozs7U0FJQztRQUNNLFdBQU0sR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRDs7OztXQUlHO1FBQ00sYUFBUSxHQUE4QixLQUFLLENBQUM7UUFtQnJEOzs7O1dBSUc7UUFDTSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBYXBCOzs7O1dBSUc7UUFDTSxlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQ25DOzs7OztXQUtHO1FBQ08sbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRTs7OztXQUlHO1FBQ0gsZUFBVSxHQUFHLGtCQUFrQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzNEOzs7OztXQUtHO1FBQ00sZUFBVSxHQUFZLEtBQUssQ0FBQztRQUNyQzs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFTdkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQVJELHFCQUFxQixDQUFDLEtBQUs7UUFDekIsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFNRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzNCLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0lBQzlDLENBQUM7OzRHQXRMVSxlQUFlO2dHQUFmLGVBQWUsOHNCQ2hCNUIsOHRGQTRDVTsyRkQ1QkcsZUFBZTtrQkFKM0IsU0FBUzsrQkFDRSxTQUFTO3NHQWFULFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUksV0FBVztzQkFBbkIsS0FBSztnQkFRRyxZQUFZO3NCQUFwQixLQUFLO2dCQVFFLFlBQVk7c0JBQXBCLEtBQUs7Z0JBUUksWUFBWTtzQkFBcEIsS0FBSztnQkFRRSxZQUFZO3NCQUFwQixLQUFLO2dCQVFJLFlBQVk7c0JBQXBCLEtBQUs7Z0JBT0csVUFBVTtzQkFBbEIsS0FBSztnQkFRRSxXQUFXO3NCQUFuQixLQUFLO2dCQVFJLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0MsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFNRyxPQUFPO3NCQUFmLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU1HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTUcsWUFBWTtzQkFBcEIsS0FBSztnQkFNRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9JLGNBQWM7c0JBQXZCLE1BQU07Z0JBYUUsVUFBVTtzQkFBbEIsS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQUdOLHFCQUFxQjtzQkFEcEIsWUFBWTt1QkFBQyw4QkFBOEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNMaXN0QmVoYXZpb3IsIEJjRHJvcGRvd25CZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBCY0hlYWRlck5hdkl0ZW0gfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVhZGVyJztcblxuLyoqXG4gKiBDb21wb25lbnRlIGVzdGlsbyBjYXJnYW5kb1xuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0xpc3RDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0bml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1saXN0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGJjTGlzdEJlaGF2aW9yOiBCY0xpc3RCZWhhdmlvcjtcbiAgICBiY0Ryb3Bkb3duQmVoYXZpb3I6IEJjRHJvcGRvd25CZWhhdmlvcjtcbiAgIFxuICAvKipcbiAgICogQ2FzaWxsYSBwYXJhIHNlbGVjY2lvbmFyIHVuIGl0ZW0gbyB2YXJpb3MsIGVzIG9wY2lvbmFsLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjTGlzdENvbXBvbmVudFxuICAgKi9cbiAgIEBJbnB1dCgpIGNoZWNrYm94ID0gZmFsc2U7XG5cbiAgIC8qKlxuICAgKiBEYXRvIHByaW5jaXBhbCBxdWUgcGVybWl0ZSBpZGVudGlmaWNhciBsYSBmaWxhICxlcyBvYmxpZ2F0b3JpbywgcHVlZGUgdGVuZXIgY3VhbHF1aWVyIHZhbG9yIHN0cmluZy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTGlzdENvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKSBtYWluQ29udGVudCA9ICcnO1xuXG4gICAgLyoqXG4gICAqIERhdG8gcHJpbmNpcGFsIGNvbiB2YXJpYW50ZSBkZSBhbGluZWFjaW9uLGVzIG9wY2lvbmFsLCBwdWVkZSB0ZW5lciBjdWFscXVpZXIgdmFsb3Igc3RyaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29tcG9uZW50XG4gICAqL1xuICAgIEBJbnB1dCgpIG1haW5Db250ZW50MiA9ICcnO1xuXG4gIC8qKlxuICAgKiBMYSBsaXN0YSBwZXJtaXRlIHVuIG1pbmltbyBkZSAzIGRhdG9zLCBlc3RlIGRhdG8gZXMgb2JsaWdhdG9yaW8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xpc3RDb21wb25lbnRcbiAgICovXG4gICBASW5wdXQoKSBjb250ZW50RGF0YTEgPSAnJztcblxuICAgLyoqXG4gICAqIExhIGxpc3RhIHBlcm1pdGUgdW4gbWluaW1vIGRlIDMgZGF0b3MsIGVzdGUgZGF0byBlcyBvYmxpZ2F0b3Jpby5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTGlzdENvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKSBjb250ZW50RGF0YTIgPSAnJztcblxuICAvKipcbiAgICogTGEgbGlzdGEgcGVybWl0ZSB1biBtaW5pbW8gZGUgMyBkYXRvcyB5IHVuIG1heGltbyBkZSA1LCBlc3RlIGRhdG8gZXMgb3BjaW9uYWwuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xpc3RDb21wb25lbnRcbiAgICovXG4gICBASW5wdXQoKSBjb250ZW50RGF0YTMgPSAnJztcblxuICAgLyoqXG4gICAqIExhIGxpc3RhIHBlcm1pdGUgdW4gbWluaW1vIGRlIDMgZGF0b3MgeSB1biBtYXhpbW8gZGUgNSwgZXN0ZSBkYXRvIGVzIG9wY2lvbmFsLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29tcG9uZW50XG4gICAqL1xuICAgIEBJbnB1dCgpIGNvbnRlbnREYXRhNCA9ICcnO1xuICBcbiAgICAvKipcbiAgICAqIE5vbWJyZSBkZWwgw61jb25vIHF1ZSBlamVjdXRhIHVuYSBhY2Npw7NuLlxuICAgICpcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb21wb25lbnRcbiAgICAqL1xuICAgIEBJbnB1dCgpIGFjdGlvbkljb24gPSAnJztcblxuICAgIC8qKlxuICAgKiBJY29ubyBhY29tcGHDsWFudGUgZGUgdGV4dG8gZGVsIGljb25vIGFjY2lvbmFibGUuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xpc3RDb21wb25lbnRcbiAgICovXG4gICBASW5wdXQoKSBjb250ZW50SWNvbiA9ICcnO1xuXG4gICAvKipcbiAgICogVGV4dG8gZGUgb3BjaW9uZXMgZGVsIGljb25vIGFjY2lvbmFibGUuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xpc3RDb21wb25lbnRcbiAgICovXG4gICAgQElucHV0KCkgY29udGVudFRleHQgPSAnJztcblxuICAgIC8qKlxuICAgKiBJZCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySXRlbU1lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGl0ZW1JZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlci5nZXRJZCh0aGlzKTtcbiAgLyoqXG4gICAqICBpdGVtVHlwZSBkZWZpbmUgZWwgdGlwbyBkZSBpY29ubyBhIG1vc3RyYXIgcHVlZGVuIHNlciB0aXBvIHVzZXIgbyBsb2dvdXQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckl0ZW1NZW51Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpdGVtVHlwZTogJ2FueScgfCAndXNlcicgfCAnbG9nb3V0JyA9ICdhbnknO1xuICAvKipcbiAgICogRGVmaW5lIGVsIGljb25vIGEgbW9zdHJhciBlbiBjYWRhIGl0ZW0gZGVsIG1lbsO6LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAvKipcbiAgICogRGVmaW5lIGVsIHRleHRvIGEgbW9zdHJhciBlbiBjYWRhIGl0ZW0gZGVsIG1lbsO6LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogRGVmaW5lIGVsIHRleHRvIGN1YW5kbyBzZSBxdWllcmUgY29sb2NhciBlbiB1bmEgc2VndW5kYSBsw61uZWEgZWplbXBsbzogZWwgbnVtZXJvIGRlIE5JVC5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySXRlbU1lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHN1YlRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmluZSBsYSB1cmwgYSBsYSBjdWFsIHZhbW9zIGEgcmVkaXJpZ2lyIGNhZGEgZW5sYWNlIGRlbCBtZW7Dui5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySXRlbU1lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHJvdXRlID0gJyc7XG4gIC8qKlxuICAgKiBEZWZpbmUgc2kgZWwgaXRlbSBkZWwgbWVuw7ogdGllbmUgdGllbmUgdW5hIGxpc3RhIGRlc3BsZWdhYmxlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaXNEcm9wZG93bjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERlZmluZSBsYSBsaXN0YSBkZSBlbGVtZW50b3MgcXVlIHZhIGEgY29udGVuZXIgZWwgZHJvcERvd24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckl0ZW1NZW51Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBkcm9wZG93bkxpc3Q6IEFycmF5PEJjSGVhZGVyTmF2SXRlbT47XG4gIC8qKlxuICAgKiBEZWZpbmUgZWwgdGlwbyBkZSBhdmF0YXIgcXVlIHNlIHZhIGEgbW9zdHJhciBlbiBlbCBtZW7Dui5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySXRlbU1lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHVzZXJBdmF0YXI6IHN0cmluZyA9IG51bGw7XG4gIC8qKlxuICAgKiBFdmVudG8gZGUgc2FsaWRhIHF1ZSBpbmRpY2EgbGEgb3BjacOzbiBzZWxlY2Npb25hZGEgZW4gZWwgZHJvcGRvd25cbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIG9wdGlvblNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIElkIGRlbCBkZWwgZHJvcGRvd25cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSGVhZGVySXRlbU1lbnVDb21wb25lbnRcbiAgICovXG4gIGRyb3Bkb3duSWQgPSBgaGVhZGVyRHJvcGRvd25fJHt0aGlzLmJjSGVscGVyLmdldElkKHRoaXMpfWA7XG4gIC8qKlxuICAgKiBJbmlkaWNhIHNpIGVsIGl0ZW0gZXN0w6EgZGVzaGFiaWxpdGFkbywgcG9yIGRlZmVjdG8gZXMgZmFsc2VcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY0hlYWRlckl0ZW1NZW51Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBJZCBkZWwgaXRlbVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNIZWFkZXJJdGVtTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXIuZ2V0SWQodGhpcyk7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmhlYWRlckRyb3Bkb3duQ2hhbmdlZCcsIFsnJGV2ZW50J10pXG4gIGhlYWRlckRyb3Bkb3duQ2hhbmdlZChldmVudCkge1xuICAgIGlmKHRoaXMuaXNEcm9wZG93bikge1xuICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZC5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXI6IEJjSGVscGVyU2VydmljZSkge1xuICAgIHRoaXMuYmNMaXN0QmVoYXZpb3IgPSBuZXcgQmNMaXN0QmVoYXZpb3IoKTtcbiAgICB0aGlzLmJjRHJvcGRvd25CZWhhdmlvciA9IG5ldyBCY0Ryb3Bkb3duQmVoYXZpb3IoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkgeyAgXG4gICAgdGhpcy5iY0xpc3RCZWhhdmlvci5zZXRVcCgpXG4gICAgQmNEcm9wZG93bkJlaGF2aW9yLnNldFVwQWxsKHtpc1BvcFVwOiB0cnVlfSlcbiAgfVxuXG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImJjLWxpc3QgYmMtbWFyZ2luLXRvcC0yXCIgaWQ9XCJsaXN0XCI+IFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtbGlzdC1tYWluLWNvbnRlbnRcIj4gXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImJjLWNvbnRhaW5lci1jaGVja2JveFwiIGFyaWEtbGFiZWw9XCJDYXNpbGxhIGRlIHZlcmlmaWNhY2lvblwiICpuZ0lmPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmMtbGlzdC1jaGVja2JveCBiYy1jaGVja2JveFwiPjwvc3Bhbj4gXG4gICAgICAgIDwvbGFiZWw+IFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJjLWxpc3QtbWFpbi1kYXRhLWNoZWNrYm94XCI+IFxuICAgICAgICAgICAgPHAgY2xhc3M9XCJiYy1saXN0LWZvbnRcIj57eyBtYWluQ29udGVudCB9fTwvcD4gXG4gICAgICAgICAgICA8c3Ryb25nPnt7IG1haW5Db250ZW50MiB9fTwvc3Ryb25nPiBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvbj4gXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1saXN0LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJjLWxpc3QtYWN0aW9uLWljb25cIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVwieydiYy1kcm9wZG93biBiYy1kcm9wZG93bi1jdXN0b20gYmMtZHJvcGRvd20tdGFibGV0JzogaXNEcm9wZG93bixcbiAgICAgICAgICAgICAgICAnYmMtaGVhZGVyLW5hdi1pdGVtX2xvZ291dCBiYy1yZXZlcnNlLWQtbGctbm9uZSc6IGl0ZW1UeXBlID09PSAnbG9nb3V0J31cIiBbaWRdPVwiY29tcG9uZW50SWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJiYy1saXN0LWl0ZW1zXCIgW2F0dHIuaHJlZl09XCJyb3V0ZSE9Jyc/IHJvdXRlOiBudWxsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JjLWRyb3Bkb3duLXRvZ2dsZSc6IGlzRHJvcGRvd24sICdiYy1kaXNhYmxlZCc6IGlzRGlzYWJsZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiaXNEcm9wZG93biA/IGRyb3Bkb3duSWQgOiBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW0gY2xhc3M9XCJiYy1pY29uIGJjLXh4c1wiICpuZ0lmPVwiaWNvbiAhPT0gJydcIj57e2ljb259fTwvZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtaGVhZGVyLW5hdi1pdGVtLXRleHRcIj4gPHA+e3t0ZXh0fX08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YmMtaWNvbiBjbGFzcz1cImJjLWxpc3QtbWVudS1kcm9wZG93biBiYy1pY29uIGJjLW1kIGJjLWRyb3Bkb3duLXRvZ2dsZVwiICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BjaW9uZXMgZGUgbGEgZmlsYVwiIGFyaWEtY29udHJvbHM9XCJteURyb3Bkb3duNFwiIHRhYmluZGV4PVwiMFwiICpuZ0lmPVwiaXNEcm9wZG93blwiPnt7IGFjdGlvbkljb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYmMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtZHJvcGRvd24tY29udGVudFwiIFtpZF09XCJkcm9wZG93bklkXCIgKm5nSWY9XCJpc0Ryb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmMtZHJvcGRvd24taXRlbVwiIFtpZF09XCJkcm9wZG93bklkKydfJytpXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZHJvcGRvd25MaXN0OyBsZXQgaSA9IGluZGV4XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYmMtZGlzYWJsZWQnOiBpdGVtLmRpc2FibGVkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJjLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbSBjbGFzcz1cImJjLWljb24gYmMteHhzXCIgKm5nSWY9XCJpdGVtLmljb25cIj57e2l0ZW0uaWNvbn19PC9lbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYy1kcm9wZG93bi1pdGVtLXRleHRcIj48cD57e2l0ZW0udGV4dH19PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtbGlzdC1jb250ZW50LWRhdGFcIj57eyBjb250ZW50RGF0YTEgfX08L3NlY3Rpb24+ICBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1saXN0LWNvbnRlbnQtZGF0YVwiPnt7IGNvbnRlbnREYXRhMiB9fTwvc2VjdGlvbj4gXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtbGlzdC1jb250ZW50LWRhdGFcIj57eyBjb250ZW50RGF0YTMgfX08L3NlY3Rpb24+IFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJjLWxpc3QtY29udGVudC1kYXRhXCI+e3sgY29udGVudERhdGE0IH19PC9zZWN0aW9uPiBcbiAgICA8L3NlY3Rpb24+IFxuPC9zZWN0aW9uPiJdfQ==