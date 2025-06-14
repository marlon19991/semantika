import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { Component, Input, EventEmitter, ContentChildren, Output, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BcSearchBehavior } from '@bancolombia/design-system-behaviors';
import { BcInputDateComponent } from '@bancolombia/design-system-web/bc-input-date';
import { BehaviorSubject } from 'rxjs';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i1$3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@bancolombia/design-system-web/bc-tooltip';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';
import * as i1$2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@bancolombia/design-system-web/bc-button';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcInputSelectModule } from '@bancolombia/design-system-web/bc-input-select';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';

/**
 * Componente para los filtros avanzados.
 *
 * @export
 * @class BcSearchAdvancedItemComponent
 */
class BcSearchAdvancedItemComponent {
    constructor() {
        /**
         * Crea una instancia de BcSearchAdvancedItemComponent.
         * @memberof BcSearchAdvancedItemComponent
         */
        /**
       * Tipo de item
       * Type = input o select.
       * @type {boolean}
       * @memberof BcSearchAdvancedItemComponent
       */
        this.type = '';
        /**
       * Tipo de input
       * Type = text, number, etc.
       * @type {boolean}
       * @memberof BcSearchAdvancedItemComponent
       */
        this.inputType = 'text';
        /**
         * Nombre  del elemento.
         *
         * @memberof BcSearchAdvancedItemComponent
         */
        this.name = '';
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.id = '';
        /**
         * Valores que va a tener el selector.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.valuesSelect = '';
        /**
         * Texto del elemento.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.textLabel = '';
        /**
         * Icono que aparece en el elemento.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.iconInput = '';
        /**
         * Esta entrada de tipo string nos indica el tipo de formato de salida de nuestro valor actual, esta puede ser
         * de tipo full para devolver el objeto completo o simple para devolver un único valor.
         *
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
         */
        this.typeSelect = '';
        /**
         * Data del elemento este se utiliza en caso de que se quieran hacer dos filtros
         * en un mismo campo de entrada ejemplo: en Input nombre de producto tambien se quiere filtrar
         * el número de producto, el data value debe ser igual al nombre de la propiedad del objeto que se va a filtrar,
         *objectArrayItem = [
                    {
                      'nombreProducto': 'Bancolombia ahorros',
                      'numeroProducto': '345268',
                      'entidad': "Bancolombia S.A",
                      'cuenta': "corriente",
                    },
                ]
        
         *data_value = "'numeroProducto'".
         * @type {string}
         * @memberof BcSearchAdvancedItemComponent
        */
        this.data_value = '';
        this.valueSelected = new BehaviorSubject(null);
    }
    onSelect(event) {
        this.valueSelected.next({
            name: this.data_value,
            value: event,
        });
    }
}
BcSearchAdvancedItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchAdvancedItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchAdvancedItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchAdvancedItemComponent, selector: "bc-search-item-advanced", inputs: { type: "type", inputType: "inputType", name: "name", id: "id", valuesSelect: "valuesSelect", textLabel: "textLabel", iconInput: "iconInput", typeSelect: "typeSelect", data_value: "data_value" }, ngImport: i0, template: "<div class=\"bc-search-items-advance\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchAdvancedItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-item-advanced', template: "<div class=\"bc-search-items-advance\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }], propDecorators: { type: [{
                type: Input
            }], inputType: [{
                type: Input
            }], name: [{
                type: Input
            }], id: [{
                type: Input
            }], valuesSelect: [{
                type: Input
            }], textLabel: [{
                type: Input
            }], iconInput: [{
                type: Input
            }], typeSelect: [{
                type: Input
            }], data_value: [{
                type: Input
            }] } });

/**
 * Componente busqueda
 *
 * @export
 * @class BcSearchComponent
 * @implements {OnInit}
 * @implements {AfterViewChecked}
 * @implements {AfterViewInit}
 */
class BcSearchComponent {
    constructor(elRef, bcHelperService) {
        this.elRef = elRef;
        this.bcHelperService = bcHelperService;
        /**
       * Id del elemento.
       *
       * @type {string}
       * @memberOf BcPaginatorComponent
       */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * items del componente search a buscar.
         *
         * @type {array}
         * @memberof BcSearchComponent
         */
        this.items = [];
        /**
         * Evento que emite los Objetos filtrados para realizar busquedas externas  .
         *
         * @type {string}
         * @memberof BcSearchComponent
         */
        this.objFilter = new EventEmitter();
        /**
         * Evento que emite evento cuando se limpian los filtros.
         *
         * @type {CustomEvent}
         * @memberof BcSearchComponent
         */
        this.clearEvent = new EventEmitter();
        this.bcSearchBehavior = new BcSearchBehavior();
    }
    ngOnInit() {
        this.bcSearchBehavior.setElement(this.elRef.nativeElement);
        this.bcSearchBehavior.clearSearchOutput();
        this.bcSearchBehavior.outputFunctionClear = (data) => {
            this.clearEvent.emit(data);
        };
    }
    ngAfterViewChecked() {
        this.bcSearchBehavior.setItems(this.items);
        this.bcSearchBehavior.outputFunction = (data) => {
            this.objFilter.emit(data);
        };
        this.bcSearchBehavior.preSearchFunction = (data) => __awaiter(this, void 0, void 0, function* () {
            if (this.preSearchFunction) {
                yield this.preSearchFunction(data);
            }
        });
        this.bcSearchBehavior.setInputsElementSelect(this.itemsSelect);
    }
    ngAfterViewInit() {
        this.bcSearchBehavior.setUp();
        this.advanceItems.forEach((item) => {
            item.valueSelected.subscribe((data) => {
                if (data) {
                    this.bcSearchBehavior.searchObject();
                }
            });
        });
        this.inputsDate.forEach((element) => {
            element.updateValue.subscribe((value) => {
                this.bcSearchBehavior.searchObject();
            });
        });
    }
    /**
     * CLimpia los filtros del search.
     *
     * @memberof BcInputDateRangeComponent
    */
    clearSearch() {
        this.bcSearchBehavior.cleanValidationSearch();
    }
}
BcSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchComponent, deps: [{ token: i0.ElementRef }, { token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchComponent, selector: "bc-search", inputs: { componentId: "componentId", items: "items", itemsSelect: "itemsSelect", preSearchFunction: "preSearchFunction" }, outputs: { objFilter: "objFilter", clearEvent: "clearEvent" }, queries: [{ propertyName: "advanceItems", predicate: BcSearchAdvancedItemComponent, descendants: true }, { propertyName: "inputsDate", predicate: BcInputDateComponent, descendants: true }], ngImport: i0, template: "<div   [id]=\"componentId\" class=\"bc-search\">\n  <ng-content></ng-content>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search', template: "<div   [id]=\"componentId\" class=\"bc-search\">\n  <ng-content></ng-content>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.BcHelperService }]; }, propDecorators: { advanceItems: [{
                type: ContentChildren,
                args: [BcSearchAdvancedItemComponent, { descendants: true }]
            }], inputsDate: [{
                type: ContentChildren,
                args: [BcInputDateComponent, { descendants: true }]
            }], componentId: [{
                type: Input
            }], items: [{
                type: Input
            }], itemsSelect: [{
                type: Input
            }], preSearchFunction: [{
                type: Input
            }], objFilter: [{
                type: Output
            }], clearEvent: [{
                type: Output
            }] } });

/**
 * Comoponente para el logo izquierdo del header.
 *
 * @export
 * @class BcSearchLeftComponent
 */
class BcSearchLeftComponent {
    constructor() {
        /**
         * Crea una instacia de BcSearchLeftComponent.
         * @memberof BcSearchLeftComponent
         */
        /**
         * Icono elemento.
         *
         * @type {boolean}
         * @memberof BcSearchLeftComponent
        */
        this.inputIcon = '';
        /**
        * Placeholder input.
        *
        * @type {boolean}
        * @memberof BcSearchLeftComponent
        */
        this.txtPlacheholder = '';
        /**
          * Tipo de input ejemplo: text,tel...
          *
          * @memberof BcSearchLeftComponent
          */
        this.type = '';
        /**
         * Name del elemento
         *
         * @memberof BcSearchLeftComponent
         */
        this.name = '';
        /**
         * Id del elemento
         *
         * @type {string}
         * @memberof BcSearchLeftComponent
         */
        this.id = '';
        /**
         * Data del elemento este se utiliza en caso de que se quieran hacer dos filtros
         * en un mismo campo de entrada ejemplo: en Input nombre de producto tambien se quiere filtrar
         * el número de producto, el data value debe ser igual al nombre de la propiedad del objeto que se va a filtrar,
         *objectArrayItem = [
                    {
                      'nombreProducto': 'Bancolombia ahorros',
                      'numeroProducto': '345268',
                      'entidad': "Bancolombia S.A",
                      'cuenta': "corriente",
                    },
                ]
      
         *data_value = "'numeroProducto'".
         *
         * @type {string}
         * @memberof BcSearchLeftComponent
        */
        this.data_value = '';
    }
}
BcSearchLeftComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchLeftComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchLeftComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchLeftComponent, selector: "bc-search-left", inputs: { inputIcon: "inputIcon", txtPlacheholder: "txtPlacheholder", type: "type", name: "name", id: "id", data_value: "data_value" }, ngImport: i0, template: "<div class=\"bc-search-input\">\r\n    <ng-content></ng-content>\r\n</div>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchLeftComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-left', template: "<div class=\"bc-search-input\">\r\n    <ng-content></ng-content>\r\n</div>\r\n" }]
        }], propDecorators: { inputIcon: [{
                type: Input
            }], txtPlacheholder: [{
                type: Input
            }], type: [{
                type: Input
            }], name: [{
                type: Input
            }], id: [{
                type: Input
            }], data_value: [{
                type: Input
            }] } });

/**
 * Comoponente para el logo izquierdo del header.
 *
 * @export
 * @class BcSearchRightComponent
 */
class BcSearchRightComponent {
}
BcSearchRightComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchRightComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchRightComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchRightComponent, selector: "bc-search-right", ngImport: i0, template: "<div class=\"bc-search-input\">\n    <ng-content></ng-content>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchRightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-right', template: "<div class=\"bc-search-input\">\n    <ng-content></ng-content>\n</div>" }]
        }] });

/**
 * Componente acción buscar.
 *
 * @export
 * @class BcSearchButtonComponent
 */
class BcSearchButtonComponent {
    constructor() {
        /**
         * Icono que ejecuta la acción de buscar.
         *
         * @memberof BcSearchLeftComponent
        */
        this.iconSearch = '';
    }
}
BcSearchButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchButtonComponent, selector: "bc-search-button", inputs: { iconSearch: "iconSearch" }, ngImport: i0, template: "<div class=\"bc-search-button\">\n    <i class=\"bc-icon\" bc-tooltip bcTooltipText=\"Buscar\">{{iconSearch}}</i>\n</div>", directives: [{ type: i1$1.BcTooltipDirective, selector: "[bc-tooltip]", inputs: ["bcTooltipPosition", "bcTooltipTitle", "bcTooltipText", "bcTooltipButtonText", "bcTooltipParentElement"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-button', template: "<div class=\"bc-search-button\">\n    <i class=\"bc-icon\" bc-tooltip bcTooltipText=\"Buscar\">{{iconSearch}}</i>\n</div>" }]
        }], propDecorators: { iconSearch: [{
                type: Input
            }] } });

/**
 * Componente Contenedor búsqueda avanzada.
 *
 * @export
 * @class BcSearchAdvancedComponent
 */
class BcSearchAdvancedComponent {
}
BcSearchAdvancedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchAdvancedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchAdvancedComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchAdvancedComponent, selector: "bc-search-advanced", ngImport: i0, template: "<div class=\"bc-search-button-expanded\">\n  <bc-icon\n    size=\"sm\"\n    class=\"bc-icon bc-tooltip\"\n    bc-tooltip\n    [bcTooltipText]=\"'B\u00FAsqueda avanzada'\"\n  >\n    arrow2-down\n  </bc-icon>\n</div>\n<div class=\"bc-content-advanced-search\">\n  <h5>B\u00FAsqueda avanzada</h5>\n  <div class=\"content-form-search\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"bc-search-button\">\n    <button bc-button sizeButton=\"small\" role=\"button\" tabindex=\"0\" disabled=\"\">\n      Buscar\n    </button>\n  </div>\n</div>\n", components: [{ type: i1$2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i1$1.BcTooltipDirective, selector: "[bc-tooltip]", inputs: ["bcTooltipPosition", "bcTooltipTitle", "bcTooltipText", "bcTooltipButtonText", "bcTooltipParentElement"] }, { type: i3.BcButtonDirective, selector: "[bc-button]", inputs: ["typeButton", "sizeButton", "width", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchAdvancedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-advanced', template: "<div class=\"bc-search-button-expanded\">\n  <bc-icon\n    size=\"sm\"\n    class=\"bc-icon bc-tooltip\"\n    bc-tooltip\n    [bcTooltipText]=\"'B\u00FAsqueda avanzada'\"\n  >\n    arrow2-down\n  </bc-icon>\n</div>\n<div class=\"bc-content-advanced-search\">\n  <h5>B\u00FAsqueda avanzada</h5>\n  <div class=\"content-form-search\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"bc-search-button\">\n    <button bc-button sizeButton=\"small\" role=\"button\" tabindex=\"0\" disabled=\"\">\n      Buscar\n    </button>\n  </div>\n</div>\n" }]
        }] });

/**
 * Componente para el resultado de los filtros.
 *
 * @export
 * @class BcSearchResultFilterComponent
 */
class BcSearchResultFilterComponent {
    constructor() {
        /**
            * texto label elemento
            *
            * @type {boolean}
            * @memberof BcSearchLeftComponent
        */
        this.labelResultNull = '';
        /**
            * Imagen del elemento cuando no encuentra resultados.
            *
            * @type {boolean}
            * @memberof BcSearchLeftComponent
        */
        this.imageResultNull = '';
    }
}
BcSearchResultFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchResultFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchResultFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchResultFilterComponent, selector: "bc-search-result-filter", inputs: { itemsli: "itemsli", labelResultNull: "labelResultNull", imageResultNull: "imageResultNull" }, ngImport: i0, template: "<div class=\"bc-col-xl-12 bc-col-lg-12 bc-col-md-12 bc-col-sm-12 bc-col-xs-12\">\n    <div class=\"bc-search-result\">\n        <div class=\"bc-content-show-result\"></div>\n        <div class=\"bc-search-content-clear\">\n            <span class=\"bc-search-clear\">Limpiar b\u00FAsqueda</span>\n        </div>\n    </div>\n</div>\n\n<div class=\"bc-col-xl-12 bc-col-lg-12 bc-col-md-12 bc-col-sm-12 bc-col-xs-12\">\n    <div class=\"bc-search-result-null\">\n        <div>\n            <img alt=\"iconMenu\" [src]=\"imageResultNull\" />\n        </div>\n        <div>\n            <label>{{labelResultNull}}</label>\n            <ul *ngFor=\"let item of itemsli\">\n                <li>{{item}}</li>\n            </ul>\n        </div>\n    </div>\n</div>", directives: [{ type: i1$3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchResultFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-result-filter', template: "<div class=\"bc-col-xl-12 bc-col-lg-12 bc-col-md-12 bc-col-sm-12 bc-col-xs-12\">\n    <div class=\"bc-search-result\">\n        <div class=\"bc-content-show-result\"></div>\n        <div class=\"bc-search-content-clear\">\n            <span class=\"bc-search-clear\">Limpiar b\u00FAsqueda</span>\n        </div>\n    </div>\n</div>\n\n<div class=\"bc-col-xl-12 bc-col-lg-12 bc-col-md-12 bc-col-sm-12 bc-col-xs-12\">\n    <div class=\"bc-search-result-null\">\n        <div>\n            <img alt=\"iconMenu\" [src]=\"imageResultNull\" />\n        </div>\n        <div>\n            <label>{{labelResultNull}}</label>\n            <ul *ngFor=\"let item of itemsli\">\n                <li>{{item}}</li>\n            </ul>\n        </div>\n    </div>\n</div>" }]
        }], propDecorators: { itemsli: [{
                type: Input
            }], labelResultNull: [{
                type: Input
            }], imageResultNull: [{
                type: Input
            }] } });

/**
 * Componente contenedor de items para el buscador.
 *
 * @export
 * @class BcSearchButtonComponent
 */
class BcSearchContentItemsComponent {
}
BcSearchContentItemsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchContentItemsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchContentItemsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchContentItemsComponent, selector: "bc-search-content-items", ngImport: i0, template: "<div class=\"bc-search-content\">\n    <ng-content></ng-content>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchContentItemsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-content-items', template: "<div class=\"bc-search-content\">\n    <ng-content></ng-content>\n</div>" }]
        }] });

class BcSearchModule {
}
BcSearchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcSearchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchModule, declarations: [BcSearchComponent,
        BcSearchLeftComponent,
        BcSearchButtonComponent,
        BcSearchAdvancedComponent,
        BcSearchAdvancedItemComponent,
        BcSearchRightComponent,
        BcSearchResultFilterComponent,
        BcSearchContentItemsComponent], imports: [CommonModule,
        BcInputSelectModule,
        BcButtonModule,
        BcCheckboxModule,
        BcIconModule,
        BcInputModule,
        BcTooltipModule], exports: [BcSearchComponent,
        BcSearchLeftComponent,
        BcSearchButtonComponent,
        BcSearchAdvancedComponent,
        BcSearchAdvancedItemComponent,
        BcSearchRightComponent,
        BcSearchResultFilterComponent,
        BcSearchContentItemsComponent] });
BcSearchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchModule, imports: [[
            CommonModule,
            BcInputSelectModule,
            BcButtonModule,
            BcCheckboxModule,
            BcIconModule,
            BcInputModule,
            BcTooltipModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcSearchComponent,
                        BcSearchLeftComponent,
                        BcSearchButtonComponent,
                        BcSearchAdvancedComponent,
                        BcSearchAdvancedItemComponent,
                        BcSearchRightComponent,
                        BcSearchResultFilterComponent,
                        BcSearchContentItemsComponent,
                    ],
                    imports: [
                        CommonModule,
                        BcInputSelectModule,
                        BcButtonModule,
                        BcCheckboxModule,
                        BcIconModule,
                        BcInputModule,
                        BcTooltipModule,
                    ],
                    exports: [
                        BcSearchComponent,
                        BcSearchLeftComponent,
                        BcSearchButtonComponent,
                        BcSearchAdvancedComponent,
                        BcSearchAdvancedItemComponent,
                        BcSearchRightComponent,
                        BcSearchResultFilterComponent,
                        BcSearchContentItemsComponent,
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcSearchAdvancedComponent, BcSearchAdvancedItemComponent, BcSearchButtonComponent, BcSearchComponent, BcSearchContentItemsComponent, BcSearchLeftComponent, BcSearchModule, BcSearchResultFilterComponent, BcSearchRightComponent };
//# sourceMappingURL=bancolombia-design-system-web-bc-search.mjs.map
