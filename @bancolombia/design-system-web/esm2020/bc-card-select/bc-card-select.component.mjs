import { Component, Input, EventEmitter, Output, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { BcCardSelectBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { WITH_MAX, MESSAGENOTDATA } from './bc-card-select.constants';
import { CARD_SELECT_MIN_FILTER_CHA } from './bc-card-select.constants';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-status";
import * as i4 from "@bancolombia/design-system-web/bc-input";
import * as i5 from "@angular/common";
/**
 * Componente Card Select
 *
 * @export
 * @class BcCardSelectComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class BcCardSelectComponent extends BcGeneralInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2FyZC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhcmQtc2VsZWN0L2JjLWNhcmQtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jYXJkLXNlbGVjdC9iYy1jYXJkLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFpQixVQUFVLEVBQTRDLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JLLE9BQU8sRUFBRSxvQkFBb0IsRUFBNkMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2SCxPQUFPLEVBQUUsdUJBQXVCLEVBQW1CLE1BQU0sMkNBQTJDLENBQUM7QUFDckcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFDLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0FBRXhFOzs7Ozs7O0dBT0c7QUFhSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsdUJBQXVCO0lBeUtoRSxZQUNVLGVBQWdDLEVBQ2hDLGlCQUFvQztRQUUxQyxLQUFLLEVBQUUsQ0FBQztRQUhGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBMUs5Qzs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUEwQmhFOzs7OztXQUtHO1FBQ00sbUJBQWMsR0FBUyxRQUFR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RyxRQUFRO3NCQUFoQixLQUFLO2dCQVFJLGNBQWM7c0JBQXRCLEtBQUs7Z0JBUUksaUJBQWlCO3NCQUF6QixLQUFLO2dCQVFFLFdBQVc7c0JBQXBCLE1BQU07Z0JBUUcsa0JBQWtCO3NCQUEzQixNQUFNO2dCQVFLLGlCQUFpQjtzQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBmb3J3YXJkUmVmLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNDYXJkU2VsZWN0QmVoYXZpb3IsIEJjQ2FyZFByb2R1Y3RDb25maWcsIEJjRm9vdGVyQnV0dG9uQ29uZmlnIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjR2VuZXJhbElucHV0Q29tcG9uZW50LCBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdJVEhfTUFYLE1FU1NBR0VOT1REQVRBIH0gZnJvbSAnLi9iYy1jYXJkLXNlbGVjdC5jb25zdGFudHMnO1xuaW1wb3J0IHsgQ0FSRF9TRUxFQ1RfTUlOX0ZJTFRFUl9DSEEgfSBmcm9tICcuL2JjLWNhcmQtc2VsZWN0LmNvbnN0YW50cyc7XG5cbi8qKlxuICogQ29tcG9uZW50ZSBDYXJkIFNlbGVjdFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtPbkluaXR9XG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtY2FyZC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJ2JjLWNhcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCY0NhcmRTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJjQ2FyZFNlbGVjdENvbXBvbmVudCBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgdW4gaWQgw7puaWNvIGFsIGNvbXBvbmVudGUgZGVudHJvIGRlbCBET00uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIHBlcm1pdGUgaW5kaWNhciBlbCB0aXR1bG8gcGFyYSBlbCBjYXJkIHNlbGVjdC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGVDYXJkU2VsZWN0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgZWwgc3VidGl0dWxvIHBhcmEgZWwgY2FyZCBzZWxlY3QuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHN1YlRpdGxlQ2FyZFNlbGVjdDogc3RyaW5nO1xuXG4gIC8qKlxuICAqIENvbmZpZ3VyYWNpw7NuIGRlbCBib3TDs24gZGVsIGRyb3Bkb3duLCBhY8OhIHNlIGRlZmluZSBlbCBpY29ubyB5IGVsIHRleHRvLlxuICAqXG4gICogQHR5cGUge0JjRm9vdGVyQnV0dG9uQ29uZmlnfVxuICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgKi9cbiAgQElucHV0KCkgY29uZmlnRHJvcERvd25CdXR0b246IEJjRm9vdGVyQnV0dG9uQ29uZmlnO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgZGUgdGlwbyBudW1iZXIgbm9zIHBlcm1pdGUgaW5kaWNhcmxlIGVsIG7Dum1lcm8gZGUgY29sdW1uYXMgZGUgYW5jaG9cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2l6ZUNhcmRTZWxlY3Q6IG51bWJlcj1XSVRIX01BWDtcblxuICAvKipcbiAgICogTXVlc3RyYSBlbCBidXR0b24gZGVsIGRyb3Bkb3duIHBvciBkZWZlY3RvIGVuIGZhbHNvXG4gICAqIHRydWUgfCBmYWxzZVxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2hvd0Ryb3BEb3dCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAvKipcbiAgICogIEVzdGEgZW50cmFkYSBlcyBlbCB0aXBvIGRlIGNvbnRlbmlkb1xuICAgKiBAdHlwZSB7YW55fVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlQ29udGVudDtcbiAvKipcbiAgICogIEVzdGEgZW50cmFkYSBlcyBlbCB0aXBvIGRlIGl0ZW1cbiAgICogQHR5cGUge2FueX1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZUl0ZW07XG4gLyoqXG4gICAqICBFc3RhIGVudHJhZGEgZXMgZWwgdGlwbyBkZSBjb250YWluZXJcbiAgICogQHR5cGUge2FueX1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZUNvbnRhaW5lcjtcbiAgIC8qKlxuICAgKiAgRXN0YSBlbnRyYWRhIGVzIGxhIHBvc2ljacOzblxuICAgKiBAdHlwZSB7YW55fVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBwb3NpdGlvbjtcblxuICAgIC8qKlxuICAgKiBJbnB1dCBxdWUgcGVybWl0ZSBjb25maWd1cmFyIGVsIHRhbWHDsW8gZGUgbGEgZnVlbnRlXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gICAgIEBJbnB1dCgpIHNpemVGb250ID0gMDtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGVzIGVsIGFycmVnbG8gZGUgY29uZmlndXJhY2nDs24gZGUgbGFzIGNhcmQgZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge0FycmF5PEJjQ2FyZFByb2R1Y3RDb25maWc+fVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZXM6IEFycmF5PEJjQ2FyZFByb2R1Y3RDb25maWc+O1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgY29uZmlndXJhIGVsIHZhbG9yIHBvciBkZWZlY3RvLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgKiBFc3RhIGVudHJhZGEgaGFiaWxpdGEgbyBkZXNoYWJpbGl0YSBlbCBpbnB1dCBkZWwgY29tcG9uZW50ZS5cbiAgKlxuICAqIEB0eXBlIHtib29sZWFufVxuICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAqIFRleHRvIGVuIGNhc28gZGUgcXVlIG5vIGV4aXN0YW4gZGF0b3MgZW4gZWwgc2VsZWN0XG4gICpcbiAgKiBAdHlwZSB7c3RyaW5nfVxuICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgKi9cbiAgIEBJbnB1dCgpIG1lc3NhZ2VOb3REYXRhOiBzdHJpbmcgPSBNRVNTQUdFTk9UREFUQTtcblxuICAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgZWwgcGxhY2Vob2xkZXIgcGFyYSBlbCBpbnB1dCBzZWFyY2ggZGVsIGNhcmQgc2VsZWN0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICAgIEBJbnB1dCgpIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogU2FsaWRhIGRlbCB2YWxvciBhY3R1YWwgZGVsIGNvbXBvbmVudGUuXG4gICAqXG4gICAqIEB0eXBlIHsoRXZlbnRFbWl0dGVyPGFueT4pfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgdmFsdWVPdXRwdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgc2UgZW1pdGUgY3VhbmRvIHNlIGRhIGNsaWMgYWwgYnV0dG9uIGFjdGlvblxuICAgKlxuICAgKiBAdHlwZSB7KEV2ZW50RW1pdHRlcjxhbnk+KX1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGFjdGlvbkJ1dHRvbk91dHB1dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgLyoqXG4gICAqIENhbWJpb3MgZW4gZWwgaW5wdXQgZGVsIHNlYXJjaCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQHR5cGUgeyhFdmVudEVtaXR0ZXI8YW55Pil9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gICAgQE91dHB1dCgpIGNoYW5nZVZhbHVlT3V0cHV0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogdmFyaWFibGUgcXVlIGhhY2UgcmVmZXJlbmNpYSBhbCBjb21wb3J0YW1pZW50byBuYXRpdm8gZGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgYmNDYXJkU2VsZWN0QmVoYXZpb3I7XG4gIC8qKlxuICAgKiBWYWxvciBhY3R1YWxcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgY3VycmVudFZhbHVlO1xuICAvKipcbiAgICogQ29uZmlndXJhY2nDs24gaW5pY2lhbCBkZWwgY29tcG9uZW50ZVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBjb25maWcgPSB7XG4gICAgZmlyc3RMb2FkOiB0cnVlLFxuICB9O1xuICAvKipcbiAgICogQ29uZmlndXJhY2nDs24gZGUgbG9zIGNhbWJpb3MgZGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgb25DaGFuZ2VzID0gbmV3IFN1YmplY3Q8U2ltcGxlQ2hhbmdlcz4oKTtcbiAgY29tcG9uZW50SWRDb250ZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICApIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yID0gbmV3IEJjQ2FyZFNlbGVjdEJlaGF2aW9yKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudElkQ29udGVudCA9IGAke3RoaXMuY29tcG9uZW50SWR9LWNvbnRlbnRgO1xuICB9XG4gICAvKipcbiAgICogUmVnaXN0cm8geSBlbnbDrW8gZGUgbG9zIGNhbWJpb3MgZGVsIGNvbXBvbmVudGVcbiAgICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgIHRoaXMub25DaGFuZ2VzLm5leHQoY2hhbmdlcyk7XG4gIH1cbiAgLyoqXG4gICAqIERlc3RydWNjacOzbiBkZWwgY29tcG9uZW50ZVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG4gIC8qKlxuICAgKkFjdHVhbGl6YWNpw7NuIGRlIGxvcyB2YWxvcmVzIGRlbCBzZWxlY3QgZGVsIGRyb3AgZG93blxuICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICB1cGRhdGVEcm9wZG93blZhbHVlcyhjaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvciA9IG5ldyBCY0NhcmRTZWxlY3RCZWhhdmlvcigpO1xuICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3IuY3JlYXRlSXRlbXNGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnJlc3RvcmVGaWx0ZXJzKCk7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRJdGVtcyhjaGFuZ2VzWyd2YWx1ZXMnXS5jdXJyZW50VmFsdWUsIHRoaXMuc2l6ZUZvbnQpO1xuICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3Iub3V0cHV0RnVuY3Rpb24gPSB0aGlzLml0ZW1TZWxlY3RlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3Iuc2V0VXAoKTtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLmZpbHRlckRyb3Bkb3duKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pY2lhbGl6YWNpw7NuIHkgY29uZmlndXJhY2nDs24gZGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgaW5pdENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yID0gbmV3IEJjQ2FyZFNlbGVjdEJlaGF2aW9yKCk7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5jcmVhdGVJdGVtc0ZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIGlmICh0aGlzLmNvbmZpZ0Ryb3BEb3duQnV0dG9uKSB7XG4gICAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLmRyb3Bkb3duQnV0dG9uQ29uZmlnID0ge1xuICAgICAgICBldmVudDogKCkgPT4gdGhpcy5hY3Rpb25CdXR0b25PdXRwdXQuZW1pdCgpLFxuICAgICAgICBpY29uOiB0aGlzLmNvbmZpZ0Ryb3BEb3duQnV0dG9uLmljb24sXG4gICAgICAgIHRleHQ6IHRoaXMuY29uZmlnRHJvcERvd25CdXR0b24udGV4dCxcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRJdGVtcyh0aGlzLnZhbHVlcyx0aGlzLnNpemVGb250KTtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLm91dHB1dEZ1bmN0aW9uID0gdGhpcy5pdGVtU2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNldFVwKCk7XG5cbiAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUgIT09ICd1bmRlZmluZWQnIHx8IHRoaXMuZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5kZWZhdWx0VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNldERpc2FibGUodGhpcy5kaXNhYmxlZCk7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5jcmVhdGVEcm9wRG93bk5vdGRhdGEoKTtcbiAgfVxuICAvKipcbiAgICogT2J0ZW5lciBjYXJkIHNlbGVjY2lvbmFkYVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBnZXRDYXJkU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbiAgZ2V0VHlwZVN1YnRpdGxlKHN1YnRpdGxlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBzdWJ0aXRsZSA9PT0gXCJzdHJpbmdcIjtcbiAgfVxuICAvKipcbiAgICogQ29uZmlndXJhY2nDs24gZGVsIGNvbXBvbmVudGUgZGVzcHVlcyBkZSBjYXJnYXIgbGEgdmlzdGFcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgYXN5bmMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29uZmlnLmZpcnN0TG9hZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudCgpO1xuICAgIHRoaXMub25DaGFuZ2VzLnN1YnNjcmliZSgoY2hhbmdlczpTaW1wbGVDaGFuZ2VzKT0+e1xuICAgICAgaWYgKGNoYW5nZXMudmFsdWVzICYmIGNoYW5nZXMudmFsdWVzLmN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duVmFsdWVzKGNoYW5nZXMpO1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUgIT09ICd1bmRlZmluZWQnIHx8IHRoaXMuZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoY2hhbmdlcy5kaXNhYmxlZCl7XG4gICAgICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3Iuc2V0RGlzYWJsZSh0aGlzLmRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gIH1cbiAgLyoqXG4gICAqIE9idGllbmUgZWwgaXRlbSBzZWxlY2Npb25hZG8gZGVsIHNlbGVjdFxuICAgKiBAcGFyYW0ge0JjQ2FyZFByb2R1Y3RDb25maWd9IGNhcmRcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgaXRlbVNlbGVjdGVkKGNhcmQ6IEJjQ2FyZFByb2R1Y3RDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gY2FyZC52YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMub25Ub3VjaCgpO1xuICAgIHRoaXMudmFsdWVPdXRwdXQuZW1pdChjYXJkKVxuICB9XG4gIC8qKlxuICAgKiBFbnZpYSBlbCB2YWxvciBwb3IgZGVmZWN0byBzZWxlY2Npb25hZG9cbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3IpIHtcbiAgICAgICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXREZWZhdWx0VmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0ZWEgZWwgZXN0YWRvXG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXREaXNhYmxlKHRoaXMuZGlzYWJsZWQpO1xuICB9XG4gIC8qKlxuICAgKiBFbWl0ZSBlbCB2YWxvciBzZWxlY2Npb25hZG8gY2FkYSBxdWUgb2N1cnJlIHVuIGNhbWJpbyBlbiBlbCBpbnB1dFxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBjaGFuZ2VFdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlPXRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3I/LnJldHVyblZhbHVlSW5wdXQoKTtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNldEljb25Ob3REYXRhKCk7XG4gICAgaWYodHlwZW9mIGlucHV0VmFsdWUgPT09IFwic3RyaW5nXCIpe1xuICAgICAgaWYgKGlucHV0VmFsdWUubGVuZ3RoID49IENBUkRfU0VMRUNUX01JTl9GSUxURVJfQ0hBKSB7XG4gICAgICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3IuZmlsdGVyRHJvcGRvd24oKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNob3dBbGxJdGVtcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRJY29uTm90RGF0YSgpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVZhbHVlT3V0cHV0LmVtaXQoaW5wdXRWYWx1ZSk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImJjLWNhcmQtc2VsZWN0XCIgW2lkXT1cImNvbXBvbmVudElkXCI+XG4gIDxkaXYgY2xhc3M9XCJiYy1jYXJkLXNlbGVjdC1jb250cm9sIGJjLWJvcmRlci1yYWRpdXMtMi1mdWxsXCI+XG4gICAgPGRpdiBjbGFzcz1cImJjLWNhcmQtc2VsZWN0LWlucHV0XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgYmMtaW5wdXRcbiAgICAgICAgYXJpYS1sYWJlbD1cIkFcIlxuICAgICAgICBbaWRdPVwiY29tcG9uZW50SWQgKyAnLWlucHV0J1wiXG4gICAgICAgIChrZXl1cCk9XCJjaGFuZ2VFdmVudCgpXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hQbGFjZWhvbGRlclwiXG4gICAgICAvPlxuICAgICAgPGVtIGNsYXNzPVwiYmMtaWNvbiBiYy1jYXJkLXNlbGVjdC1zZWFyY2hcIj5zZWFyY2g8L2VtPlxuICAgICAgPGxhYmVsIGZvcj1cImNhcmQyLWlucHV0XCI+e3sgdGl0bGVDYXJkU2VsZWN0IH19PC9sYWJlbD5cbiAgICAgIDxzcGFuPnt7IHN1YlRpdGxlQ2FyZFNlbGVjdCB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtY2FyZC1zZWxlY3QtY29udGVudC10b2dnbGVcIj5cbiAgICAgIDxlbVxuICAgICAgICBjbGFzcz1cImJjLWljb24gYmMtY2FyZC1zZWxlY3QtdG9nZ2xlIGFycm93LWRpcmVjdGlvblwiXG4gICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiY29tcG9uZW50SWQgKyAnLWNvbnRlbnQnXCJcbiAgICAgID48L2VtPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJiYy1jYXJkLXNlbGVjdC1pY29uLW5vdERhdGEtaW5pdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJjLWNhcmQtc2VsZWN0LWljb24tbm90RGF0YSBiYy13LTEwMCBiYy1jb2wtMTIgYmMtcHktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtZC1mbGV4IGJjLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8YmMtaWNvblxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaDJcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJidXNxdWVkYVwiXG4gICAgICAgICAgPjwvYmMtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImJjLWNvbC0xMCBiYy1vZmZzZXQtMSBiYy1wYi00IGJjLWQtZmxleCBiYy1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJjLXRleHQtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgIHt7IG1lc3NhZ2VOb3REYXRhIH19XG4gICAgICAgICAgPC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJiYy1jYXJkLXNlbGVjdC1jb250ZW50IGJjLWJvcmRlci1yYWRpdXMtMi1ib3R0b21cIiBbaWRdPVwiY29tcG9uZW50SWRDb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImJjLWNhcmQtc2VsZWN0LWNvbnRlbnQtYm9keVwiPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3M9XCJiYy1jYXJkLXNlbGVjdC1pdGVtXCIgdGFiaW5kZXg9XCIwXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdmFsdWVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJjLWNhcmQtcHJvZHVjdCBiYy1jYXJkLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYy1jYXJkLXByb2R1Y3QtaW1nXCIgKm5nSWY9XCJpdGVtLmljb25cIj5cbiAgICAgICAgICAgICAgPGJjLWljb24gW25hbWVdPVwiaXRlbS5pY29uXCIgc2l6ZT1cInhsXCIgd2lkdGg9XCIxMDAlXCIgPlxuICAgICAgICAgICAgICA8L2JjLWljb24+XG4gICAgICAgICAgICAgIDxiYy1pbGx1c3RyYXRpb25cbiAgICAgICAgICAgICAgICBbbmFtZV09XCJpdGVtLmljb24gXCJcbiAgICAgICAgICAgICAgICBzaXplPVwiNXJlbVwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJ1ZWJhXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udHlwZUljb249PT0gJ2lsbHVzdHJhdGlvbnMnXCJcbiAgICAgICAgICAgICAgPjwvYmMtaWxsdXN0cmF0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtY2FyZC1wcm9kdWN0LWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJjLWNhcmQtaGVhZFwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImJjLWNhcmQtdGl0dGxlXCIgKm5nSWY9XCJpdGVtLnRpdHRsZVwiPlxuICAgICAgICAgICAgICAgICAge3tpdGVtLnRpdHRsZX19XG4gICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICA8ZW0gY2xhc3M9XCJiYy1jYXJkLXRvZ2dsZSBiYy1pY29uIGFycm93LWRpcmVjdGlvblwiPlxuICAgICAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImJjLWNhcmQtc3VidGl0dGxlXCIgKm5nSWY9XCJpdGVtLnN1YnRpdHRsZSAmJiB0aGlzLmdldFR5cGVTdWJ0aXRsZShpdGVtLnN1YnRpdHRsZSlcIj5cbiAgICAgICAgICAgICAgICB7e2l0ZW0uc3VidGl0dGxlfX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImJjLWNhcmQtc3VidGl0dGxlXCIgKm5nSWY9XCJpdGVtLnN1YnRpdHRsZSAmJiAhdGhpcy5nZXRUeXBlU3VidGl0bGUoaXRlbS5zdWJ0aXR0bGUpXCI+XG4gICAgICAgICAgICAgICAge3tpdGVtLnN1YnRpdHRsZVswXX19XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJiYy1jYXJkLXN1YnRpdHRsZS1kZXNjcmlwdGlvblwiICpuZ0lmPVwiaXRlbS5zdWJ0aXR0bGUgJiYgIXRoaXMuZ2V0VHlwZVN1YnRpdGxlKGl0ZW0uc3VidGl0dGxlKVwiPlxuICAgICAgICAgICAgICAgIHt7aXRlbS5zdWJ0aXR0bGVbMV19fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYy1jYXJkLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJjLWNhcmQtaW5mby10aXRsZS1iYWxhbmNlXCIgKm5nSWY9XCJpdGVtLnRpdGxlQmFsYW5jZVwiPlxuICAgICAgICAgICAgICAgICAge3tpdGVtLnRpdGxlQmFsYW5jZX19XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYy1jYXJkLWluZm8tc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICA8YmMtc3RhdHVzICpuZ0lmPVwiaXRlbS5zdGF0dXNDb21wb25lbnRUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiaXRlbS5zdGF0dXNDb21wb25lbnRUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cIml0ZW0uc3RhdHVzQ29tcG9uZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBbYm9yZGVyXT1cIml0ZW0uc3RhdHVzQ29tcG9uZW50Qm9yZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgW2N1c3RvbUljb25dPVwiaXRlbS5zdGF0dXNDb21wb25lbnRJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiaXRlbS5zdGF0dXNDb21wb25lbnRUZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvYmMtc3RhdHVzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImJjLWNhcmQtaW5mby1iYWxhbmNlXCIgKm5nSWY9XCJpdGVtLmJhbGFuY2VcIj5cbiAgICAgICAgICAgICAgICAgIHt7aXRlbS5iYWxhbmNlfX1cbiAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYmMtY2FyZC1pbmZvLWFkaXRpb25hbC10ZXh0XCIgICpuZ0lmPVwiaXRlbS5hZGRpdGlvbmFsVGV4dFwiPlxuICAgICAgICAgICAgICAgICAge3tpdGVtLmFkZGl0aW9uYWxUZXh0fX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19