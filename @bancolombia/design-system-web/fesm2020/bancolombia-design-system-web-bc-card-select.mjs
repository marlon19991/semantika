import * as i0 from '@angular/core';
import { EventEmitter, forwardRef, Component, ChangeDetectionStrategy, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BcCardSelectBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@bancolombia/design-system-web/bc-status';
import { BcStatusModule } from '@bancolombia/design-system-web/bc-status';
import * as i4 from '@bancolombia/design-system-web/bc-input';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcCardModule } from '@bancolombia/design-system-web/bc-card';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';

const WITH_MAX = 12;
const MESSAGENOTDATA = 'No se han encontrado resultados para la búsqueda, prueba con otra información ';
const CARD_SELECT_MIN_FILTER_CHA = 3;

/**
 * Componente Card Select
 *
 * @export
 * @class BcCardSelectComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcCardSelectComponent extends BcGeneralInputComponent {
    constructor(bcHelperService, changeDetectorRef) {
        super();
        this.bcHelperService = bcHelperService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Esta entrada permite indicar un id único al componente dentro del DOM.
         *
         * @type {string}
         * @memberof BcCardSelectComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Esta entrada de tipo number nos permite indicarle el número de columnas de ancho
         *
         * @type {number}
         * @memberof BcCardSelectComponent
         */
        this.sizeCardSelect = WITH_MAX;
        /**
         * Muestra el button del dropdown por defecto en falso
         * true | false
         *
         * @type {boolean}
         * @memberof BcCardSelectComponent
         */
        this.showDropDowButton = false;
        /**
       * Input que permite configurar el tamaño de la fuente
       *
       * @type {number}
       * @memberof BcCardSelectComponent
       */
        this.sizeFont = 0;
        /**
        * Esta entrada habilita o deshabilita el input del componente.
        *
        * @type {boolean}
        * @memberof BcCardSelectComponent
        */
        this.disabled = false;
        /**
      * Texto en caso de que no existan datos en el select
      *
      * @type {string}
      * @memberof BcCardSelectComponent
      */
        this.messageNotData = MESSAGENOTDATA;
        /**
        * Esta entrada permite indicar el placeholder para el input search del card select.
        *
        * @type {string}
        * @memberof BcCardSelectComponent
        */
        this.searchPlaceholder = '';
        /**
         * Salida del valor actual del componente.
         *
         * @type {(EventEmitter<any>)}
         * @memberof BcCardSelectComponent
         */
        this.valueOutput = new EventEmitter();
        /**
         * Evento que se emite cuando se da clic al button action
         *
         * @type {(EventEmitter<any>)}
         * @memberof BcCardSelectComponent
         */
        this.actionButtonOutput = new EventEmitter();
        /**
        * Cambios en el input del search del componente.
        *
        * @type {(EventEmitter<any>)}
        * @memberof BcCardSelectComponent
        */
        this.changeValueOutput = new EventEmitter();
        /**
         * Configuración inicial del componente
         * @memberof BcCardSelectComponent
         */
        this.config = {
            firstLoad: true,
        };
        /**
         * Configuración de los cambios del componente
         * @memberof BcCardSelectComponent
         */
        this.onChanges = new Subject();
        this.bcCardSelectBehavior = new BcCardSelectBehavior();
    }
    ngOnInit() {
        this.componentIdContent = `${this.componentId}-content`;
    }
    /**
    * Registro y envío de los cambios del componente
    * @param {SimpleChanges} changes
    * @memberof BcCardSelectComponent
    */
    ngOnChanges(changes) {
        this.onChanges.next(changes);
    }
    /**
     * Destrucción del componente
     * @memberof BcCardSelectComponent
     */
    ngOnDestroy() {
        this.onChanges.complete();
    }
    /**
     *Actualización de los valores del select del drop down
     * @param changes
     * @memberof BcCardSelectComponent
     */
    updateDropdownValues(changes) {
        this.bcCardSelectBehavior = new BcCardSelectBehavior();
        this.bcCardSelectBehavior.createItemsFlag = false;
        this.bcCardSelectBehavior.setId(this.componentId);
        this.bcCardSelectBehavior.restoreFilters();
        this.bcCardSelectBehavior.setItems(changes['values'].currentValue, this.sizeFont);
        this.bcCardSelectBehavior.outputFunction = this.itemSelected.bind(this);
        this.bcCardSelectBehavior.setUp();
        this.bcCardSelectBehavior.filterDropdown();
    }
    /**
     * Inicialización y configuración del componente
     * @memberof BcCardSelectComponent
     */
    initComponent() {
        this.bcCardSelectBehavior = new BcCardSelectBehavior();
        this.bcCardSelectBehavior.createItemsFlag = false;
        this.bcCardSelectBehavior.setId(this.componentId);
        if (this.configDropDownButton) {
            this.bcCardSelectBehavior.dropdownButtonConfig = {
                event: () => this.actionButtonOutput.emit(),
                icon: this.configDropDownButton.icon,
                text: this.configDropDownButton.text,
            };
        }
        this.bcCardSelectBehavior.setItems(this.values, this.sizeFont);
        this.bcCardSelectBehavior.outputFunction = this.itemSelected.bind(this);
        this.bcCardSelectBehavior.setUp();
        if (this.defaultValue !== 'undefined' || this.defaultValue !== null) {
            this.writeValue(this.defaultValue);
        }
        this.bcCardSelectBehavior.setDisable(this.disabled);
        this.bcCardSelectBehavior.createDropDownNotdata();
    }
    /**
     * Obtener card seleccionada
     * @memberof BcCardSelectComponent
     */
    getCardSelected() {
        return this.value;
    }
    getTypeSubtitle(subtitle) {
        return typeof subtitle === "string";
    }
    /**
     * Configuración del componente despues de cargar la vista
     * @memberof BcCardSelectComponent
     */
    async ngAfterViewInit() {
        this.config.firstLoad = false;
        this.initComponent();
        this.onChanges.subscribe((changes) => {
            if (changes.values && changes.values.currentValue.length > 0) {
                this.changeDetectorRef.detectChanges();
                this.updateDropdownValues(changes);
                if (this.defaultValue !== 'undefined' || this.defaultValue !== null) {
                    this.writeValue(this.defaultValue);
                }
            }
            if (changes.disabled) {
                this.bcCardSelectBehavior.setDisable(this.disabled);
            }
        });
    }
    /**
     * Obtiene el item seleccionado del select
     * @param {BcCardProductConfig} card
     * @memberof BcCardSelectComponent
     */
    itemSelected(card) {
        this.value = card.value;
        this.onChange(this.value);
        this.onTouch();
        this.valueOutput.emit(card);
    }
    /**
     * Envia el valor por defecto seleccionado
     * @param {any} value
     * @memberof BcCardSelectComponent
     */
    writeValue(value) {
        if (value) {
            this.value = value;
            if (this.bcCardSelectBehavior) {
                this.bcCardSelectBehavior.setDefaultValue(value);
            }
        }
    }
    /**
     * Setea el estado
     * @memberof BcCardSelectComponent
     */
    setDisabledState() {
        this.bcCardSelectBehavior.setDisable(this.disabled);
    }
    /**
     * Emite el valor seleccionado cada que ocurre un cambio en el input
     * @memberof BcCardSelectComponent
     */
    changeEvent() {
        const inputValue = this.bcCardSelectBehavior?.returnValueInput();
        this.bcCardSelectBehavior.setIconNotData();
        if (typeof inputValue === "string") {
            if (inputValue.length >= CARD_SELECT_MIN_FILTER_CHA) {
                this.bcCardSelectBehavior.filterDropdown();
            }
            else {
                this.bcCardSelectBehavior.showAllItems();
            }
            this.bcCardSelectBehavior.setIconNotData();
        }
        this.changeValueOutput.emit(inputValue);
    }
}
BcCardSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
BcCardSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardSelectComponent, selector: "bc-card-select", inputs: { componentId: "componentId", titleCardSelect: "titleCardSelect", subTitleCardSelect: "subTitleCardSelect", configDropDownButton: "configDropDownButton", sizeCardSelect: "sizeCardSelect", showDropDowButton: "showDropDowButton", typeContent: "typeContent", typeItem: "typeItem", typeContainer: "typeContainer", position: "position", sizeFont: "sizeFont", values: "values", defaultValue: "defaultValue", disabled: "disabled", messageNotData: "messageNotData", searchPlaceholder: "searchPlaceholder" }, outputs: { valueOutput: "valueOutput", actionButtonOutput: "actionButtonOutput", changeValueOutput: "changeValueOutput" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BcCardSelectComponent),
            multi: true,
        },
    ], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-card-select\" [id]=\"componentId\">\n  <div class=\"bc-card-select-control bc-border-radius-2-full\">\n    <div class=\"bc-card-select-input\">\n      <input\n        bc-input\n        aria-label=\"A\"\n        [id]=\"componentId + '-input'\"\n        (keyup)=\"changeEvent()\"\n        type=\"text\"\n        value=\"\"\n        [placeholder]=\"searchPlaceholder\"\n      />\n      <em class=\"bc-icon bc-card-select-search\">search</em>\n      <label for=\"card2-input\">{{ titleCardSelect }}</label>\n      <span>{{ subTitleCardSelect }}</span>\n    </div>\n    <div class=\"bc-card-select-content-toggle\">\n      <em\n        class=\"bc-icon bc-card-select-toggle arrow-direction\"\n        [attr.aria-controls]=\"componentId + '-content'\"\n      ></em>\n    </div>\n    <div class=\"bc-card-select-icon-notData-init\">\n      <div class=\"bc-card-select-icon-notData bc-w-100 bc-col-12 bc-py-5\">\n        <div class=\"bc-d-flex bc-justify-content-center\">\n          <bc-icon\n            name=\"search2\"\n            aria-hidden=\"true\"\n            aria-label=\"busqueda\"\n          ></bc-icon>\n        </div>\n        <div\n          class=\"bc-col-10 bc-offset-1 bc-pb-4 bc-d-flex bc-justify-content-center bc-text-center\"\n        >\n          <h6>\n            {{ messageNotData }}\n          </h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bc-card-select-content bc-border-radius-2-bottom\" [id]=\"componentIdContent\">\n    <div class=\"bc-card-select-content-body\">\n      <ul>\n        <li class=\"bc-card-select-item\" tabindex=\"0\" *ngFor=\"let item of values\">\n          <div class=\"bc-card-product bc-card-3\">\n            <div class=\"bc-card-product-img\" *ngIf=\"item.icon\">\n              <bc-icon [name]=\"item.icon\" size=\"xl\" width=\"100%\" >\n              </bc-icon>\n              <bc-illustration\n                [name]=\"item.icon \"\n                size=\"5rem\"\n                aria-hidden=\"true\"\n                aria-label=\"prueba\"\n                *ngIf=\"item.typeIcon=== 'illustrations'\"\n              ></bc-illustration>\n            </div>\n            <div class=\"bc-card-product-body\">\n              <div class=\"bc-card-head\">\n                <h6 class=\"bc-card-tittle\" *ngIf=\"item.tittle\">\n                  {{item.tittle}}\n                </h6>\n                <em class=\"bc-card-toggle bc-icon arrow-direction\">\n                </em>\n              </div>\n              <p class=\"bc-card-subtittle\" *ngIf=\"item.subtittle && this.getTypeSubtitle(item.subtittle)\">\n                {{item.subtittle}}\n              </p>\n              <p class=\"bc-card-subtittle\" *ngIf=\"item.subtittle && !this.getTypeSubtitle(item.subtittle)\">\n                {{item.subtittle[0]}}\n              </p>\n              <p class=\"bc-card-subtittle-description\" *ngIf=\"item.subtittle && !this.getTypeSubtitle(item.subtittle)\">\n                {{item.subtittle[1]}}\n              </p>\n              <div class=\"bc-card-info\">\n                <p class=\"bc-card-info-title-balance\" *ngIf=\"item.titleBalance\">\n                  {{item.titleBalance}}\n                </p>\n                <div class=\"bc-card-info-status\">\n                  <bc-status *ngIf=\"item.statusComponentType\"\n                    [type]=\"item.statusComponentType\"\n                    [color]=\"item.statusComponentColor\"\n                    [border]=\"item.statusComponentBorder\"\n                    [customIcon]=\"item.statusComponentIcon\"\n                    [text]=\"item.statusComponentText\"\n                    ></bc-status>\n                </div>\n                <h6 class=\"bc-card-info-balance\" *ngIf=\"item.balance\">\n                  {{item.balance}}\n                </h6>\n                <p class=\"bc-card-info-aditional-text\"  *ngIf=\"item.additionalText\">\n                  {{item.additionalText}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }, { type: i3.BcStatusComponent, selector: "bc-status", inputs: ["type", "color", "border", "customIcon", "text", "disabledTag", "widthTag"] }], directives: [{ type: i4.BcInputDirective, selector: "[bc-input]", inputs: ["state", "aria-label", "inputValue", "inputValidation"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-select', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BcCardSelectComponent),
                            multi: true,
                        },
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bc-card-select\" [id]=\"componentId\">\n  <div class=\"bc-card-select-control bc-border-radius-2-full\">\n    <div class=\"bc-card-select-input\">\n      <input\n        bc-input\n        aria-label=\"A\"\n        [id]=\"componentId + '-input'\"\n        (keyup)=\"changeEvent()\"\n        type=\"text\"\n        value=\"\"\n        [placeholder]=\"searchPlaceholder\"\n      />\n      <em class=\"bc-icon bc-card-select-search\">search</em>\n      <label for=\"card2-input\">{{ titleCardSelect }}</label>\n      <span>{{ subTitleCardSelect }}</span>\n    </div>\n    <div class=\"bc-card-select-content-toggle\">\n      <em\n        class=\"bc-icon bc-card-select-toggle arrow-direction\"\n        [attr.aria-controls]=\"componentId + '-content'\"\n      ></em>\n    </div>\n    <div class=\"bc-card-select-icon-notData-init\">\n      <div class=\"bc-card-select-icon-notData bc-w-100 bc-col-12 bc-py-5\">\n        <div class=\"bc-d-flex bc-justify-content-center\">\n          <bc-icon\n            name=\"search2\"\n            aria-hidden=\"true\"\n            aria-label=\"busqueda\"\n          ></bc-icon>\n        </div>\n        <div\n          class=\"bc-col-10 bc-offset-1 bc-pb-4 bc-d-flex bc-justify-content-center bc-text-center\"\n        >\n          <h6>\n            {{ messageNotData }}\n          </h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bc-card-select-content bc-border-radius-2-bottom\" [id]=\"componentIdContent\">\n    <div class=\"bc-card-select-content-body\">\n      <ul>\n        <li class=\"bc-card-select-item\" tabindex=\"0\" *ngFor=\"let item of values\">\n          <div class=\"bc-card-product bc-card-3\">\n            <div class=\"bc-card-product-img\" *ngIf=\"item.icon\">\n              <bc-icon [name]=\"item.icon\" size=\"xl\" width=\"100%\" >\n              </bc-icon>\n              <bc-illustration\n                [name]=\"item.icon \"\n                size=\"5rem\"\n                aria-hidden=\"true\"\n                aria-label=\"prueba\"\n                *ngIf=\"item.typeIcon=== 'illustrations'\"\n              ></bc-illustration>\n            </div>\n            <div class=\"bc-card-product-body\">\n              <div class=\"bc-card-head\">\n                <h6 class=\"bc-card-tittle\" *ngIf=\"item.tittle\">\n                  {{item.tittle}}\n                </h6>\n                <em class=\"bc-card-toggle bc-icon arrow-direction\">\n                </em>\n              </div>\n              <p class=\"bc-card-subtittle\" *ngIf=\"item.subtittle && this.getTypeSubtitle(item.subtittle)\">\n                {{item.subtittle}}\n              </p>\n              <p class=\"bc-card-subtittle\" *ngIf=\"item.subtittle && !this.getTypeSubtitle(item.subtittle)\">\n                {{item.subtittle[0]}}\n              </p>\n              <p class=\"bc-card-subtittle-description\" *ngIf=\"item.subtittle && !this.getTypeSubtitle(item.subtittle)\">\n                {{item.subtittle[1]}}\n              </p>\n              <div class=\"bc-card-info\">\n                <p class=\"bc-card-info-title-balance\" *ngIf=\"item.titleBalance\">\n                  {{item.titleBalance}}\n                </p>\n                <div class=\"bc-card-info-status\">\n                  <bc-status *ngIf=\"item.statusComponentType\"\n                    [type]=\"item.statusComponentType\"\n                    [color]=\"item.statusComponentColor\"\n                    [border]=\"item.statusComponentBorder\"\n                    [customIcon]=\"item.statusComponentIcon\"\n                    [text]=\"item.statusComponentText\"\n                    ></bc-status>\n                </div>\n                <h6 class=\"bc-card-info-balance\" *ngIf=\"item.balance\">\n                  {{item.balance}}\n                </h6>\n                <p class=\"bc-card-info-aditional-text\"  *ngIf=\"item.additionalText\">\n                  {{item.additionalText}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], titleCardSelect: [{
                type: Input
            }], subTitleCardSelect: [{
                type: Input
            }], configDropDownButton: [{
                type: Input
            }], sizeCardSelect: [{
                type: Input
            }], showDropDowButton: [{
                type: Input
            }], typeContent: [{
                type: Input
            }], typeItem: [{
                type: Input
            }], typeContainer: [{
                type: Input
            }], position: [{
                type: Input
            }], sizeFont: [{
                type: Input
            }], values: [{
                type: Input
            }], defaultValue: [{
                type: Input
            }], disabled: [{
                type: Input
            }], messageNotData: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], valueOutput: [{
                type: Output
            }], actionButtonOutput: [{
                type: Output
            }], changeValueOutput: [{
                type: Output
            }] } });

/**
 * Importa el componente BcCardSelect con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-dropdown-select></bc-dropdown-select>
 *
 * @param  values: Array tipo [{ text: string }] que indica los valores de la card
 * @param  valueOutput: Output Valor de salida que indica los valores seleccionados
 *
 * @example
 *
 * @author: Bancolombia S.A
 */
class BcCardSelectModule {
}
BcCardSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectModule, declarations: [BcCardSelectComponent], imports: [CommonModule, BcIconModule, BcInputModule, BcButtonModule, BcCardModule, BcStatusModule], exports: [BcCardSelectComponent] });
BcCardSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectModule, imports: [[CommonModule, BcIconModule, BcInputModule, BcButtonModule, BcCardModule, BcStatusModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCardSelectComponent],
                    imports: [CommonModule, BcIconModule, BcInputModule, BcButtonModule, BcCardModule, BcStatusModule],
                    exports: [BcCardSelectComponent],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCardSelectComponent, BcCardSelectModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-card-select.mjs.map
