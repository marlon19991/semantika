import * as i0 from '@angular/core';
import { EventEmitter, forwardRef, Component, ChangeDetectionStrategy, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BcCardSelectV2Behavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';
import { BcCardModule } from '@bancolombia/design-system-web/bc-card';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcStatusModule } from '@bancolombia/design-system-web/bc-status';

const CARD_SELECT_MIN_FILTER_CHA = 3;
const SEARCH_PLACEHOLDER = 'Buscar producto';

/**
 * Componente Card Select
 *
 * @export
 * @class BcCardSelectV2Component
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcCardSelectV2Component extends BcGeneralInputComponent {
    constructor(bcHelperService, changeDetectorRef) {
        super();
        this.bcHelperService = bcHelperService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Esta entrada permite indicar un id único al componente dentro del DOM.
         *
         * @type {string}
         * @memberof BcCardSelectV2Component
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Muestra el button del dropdown por defecto en falso
         * true | false
         *
         * @type {boolean}
         * @memberof BcCardSelectV2Component
         */
        this.showDropDowButton = true;
        /**
        * Esta entrada habilita o deshabilita el componente.
        *
        * @type {boolean}
        * @memberof BcCardSelectV2Component
        */
        this.disabled = false;
        /**
        * Texto en caso de que no existan datos en el select
        *
        * @type {string}
        * @memberof BcCardSelectV2Component
        */
        this.messageNotData = '';
        /**
        * Esta entrada permite indicar el placeholder para el input search del card select.
        *
        * @type {string}
        * @memberof BcCardSelectV2Component
        */
        this.searchPlaceholder = SEARCH_PLACEHOLDER;
        /**
       * Permite ocultar la flecha
       *
       * @type {boolean}
       * @memberof BcCardSelectV2Component
       */
        this.hideArrow = false;
        /**
         * Evento que retorna el valor del item seleccionado.
         *
         * @type {(EventEmitter<any>)}
         * @memberof BcCardSelectV2Component
         */
        this.valueOutput = new EventEmitter();
        /**
         * Evento que se emite cuando se da clic al button action
         *
         * @type {(EventEmitter<any>)}
         * @memberof BcCardSelectV2Component
         */
        this.actionButtonOutput = new EventEmitter();
        /**
        * Cambios en el input del search del componente.
        *
        * @type {(EventEmitter<any>)}
        * @memberof BcCardSelectV2Component
        */
        this.changeValueOutput = new EventEmitter();
        /**
         * Configuración inicial del componente
         * @memberof BcCardSelectV2Component
         */
        this.config = {
            firstLoad: true,
        };
        /**
         * Configuración de los cambios del componente
         * @memberof BcCardSelectV2Component
         */
        this.onChanges = new Subject();
        this.bcCardSelectBehavior = new BcCardSelectV2Behavior();
    }
    ngOnInit() {
        this.setEvents();
    }
    async ngAfterViewInit() {
        this.initComponent();
        this.setChanges();
    }
    /**
    * Registro y envío de los cambios del componente
    * @param {SimpleChanges} changes
    * @memberof BcCardSelectV2Component
    */
    ngOnChanges(changes) {
        this.onChanges.next(changes);
    }
    /**
     * Destrucción del componente
     * @memberof BcCardSelectV2Component
     */
    ngOnDestroy() {
        this.onChanges.complete();
    }
    /**
     * Inicialización y configuración del componente
     * @memberof BcCardSelectV2Component
     */
    initComponent() {
        this.bcCardSelectBehavior.setId(this.componentId);
        if (this.configDropDownButton) {
            this.bcCardSelectBehavior.dropdownButtonConfig = {
                event: () => this.actionButtonOutput.emit(),
                icon: this.configDropDownButton.icon,
                text: this.configDropDownButton.text,
            };
        }
        this.bcCardSelectBehavior.setItems(this.values);
        this.bcCardSelectBehavior.setMessageNotData(this.messageNotData);
        if (this.componentStyle) {
            this.bcCardSelectBehavior.setComponentStyle(this.componentStyle);
        }
        this.bcCardSelectBehavior.setUp();
        this.bcCardSelectBehavior.setHideArrowState(this.hideArrow);
        this.bcCardSelectBehavior.setIniText(this.titleCardSelect);
        this.bcCardSelectBehavior.setSubtitleText(this.subTitleCardSelect);
        this.bcCardSelectBehavior.hideDropdown(!this.showDropDowButton);
        this.bcCardSelectBehavior.setDefaultValue(this.defaultValue);
        this.bcCardSelectBehavior.setDisable(this.disabled);
    }
    /**
     *Captura de eventos desde el behavior y el emit de los mismos en el componente.
     * @memberof BcCardSelectV2Component
     */
    setEvents() {
        this.bcCardSelectBehavior.eventValueOutput = (item) => {
            this.valueOutput.emit(item);
        };
        this.bcCardSelectBehavior.returnValueInput = (key) => {
            this.changeValueOutput.emit(key);
        };
    }
    /**
     *Actualización del estado del componente con respecto a los parámetros.
     * @memberof BcCardSelectV2Component
     */
    setChanges() {
        this.onChanges.subscribe((changes) => {
            if (changes.showDropDowButton) {
                this.bcCardSelectBehavior.hideDropdown(!this.showDropDowButton);
            }
            if (changes.defaultValue) {
                this.bcCardSelectBehavior.setDefaultValue(this.defaultValue);
            }
            if (changes.disabled) {
                this.bcCardSelectBehavior.setDisable(this.disabled);
            }
            if (changes.resetComponent) {
                this.bcCardSelectBehavior.resetComponent();
            }
            if (changes.hideArrow) {
                this.bcCardSelectBehavior.setHideArrowState(this.hideArrow);
            }
        });
    }
}
BcCardSelectV2Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectV2Component, deps: [{ token: i1.BcHelperService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
BcCardSelectV2Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardSelectV2Component, selector: "bc-card-select-v2", inputs: { componentId: "componentId", titleCardSelect: "titleCardSelect", subTitleCardSelect: "subTitleCardSelect", configDropDownButton: "configDropDownButton", showDropDowButton: "showDropDowButton", values: "values", defaultValue: "defaultValue", disabled: "disabled", messageNotData: "messageNotData", componentStyle: "componentStyle", resetComponent: "resetComponent", searchPlaceholder: "searchPlaceholder", hideArrow: "hideArrow" }, outputs: { valueOutput: "valueOutput", actionButtonOutput: "actionButtonOutput", changeValueOutput: "changeValueOutput" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BcCardSelectV2Component),
            multi: true,
        },
    ], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "\n<div class=\"bc-card-select\" [id]=\"componentId\" tabindex=\"0\">\n  <div class=\"bc-card-select-control\">\n    <div class=\"bc-card-select-input\">\n      <input class=\"bc-input\" \n        aria-label=\"A\" \n        [id]=\"componentId +'-input'\" \n        type=\"text\" value=\"\" \n        [placeholder]=\"searchPlaceholder\"/>\n          <em class=\"bc-icon bc-card-select-search\">search</em>\n          <label class=\"bc-card-select-label\" for=\"componentId +'-input'\"></label>\n    </div>\n    <div class=\"bc-card-select-content-toggle\">\n      <em class=\"bc-icon bc-card-select-toggle arrow-direction\" \n      [attr.aria-controls]=\"componentId + '-content'\"></em>\n    </div>\n  </div>\n</div>\n\n\n\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectV2Component, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-select-v2', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BcCardSelectV2Component),
                            multi: true,
                        },
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<div class=\"bc-card-select\" [id]=\"componentId\" tabindex=\"0\">\n  <div class=\"bc-card-select-control\">\n    <div class=\"bc-card-select-input\">\n      <input class=\"bc-input\" \n        aria-label=\"A\" \n        [id]=\"componentId +'-input'\" \n        type=\"text\" value=\"\" \n        [placeholder]=\"searchPlaceholder\"/>\n          <em class=\"bc-icon bc-card-select-search\">search</em>\n          <label class=\"bc-card-select-label\" for=\"componentId +'-input'\"></label>\n    </div>\n    <div class=\"bc-card-select-content-toggle\">\n      <em class=\"bc-icon bc-card-select-toggle arrow-direction\" \n      [attr.aria-controls]=\"componentId + '-content'\"></em>\n    </div>\n  </div>\n</div>\n\n\n\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], titleCardSelect: [{
                type: Input
            }], subTitleCardSelect: [{
                type: Input
            }], configDropDownButton: [{
                type: Input
            }], showDropDowButton: [{
                type: Input
            }], values: [{
                type: Input
            }], defaultValue: [{
                type: Input
            }], disabled: [{
                type: Input
            }], messageNotData: [{
                type: Input
            }], componentStyle: [{
                type: Input
            }], resetComponent: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], hideArrow: [{
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
class BcCardSelectV2Module {
}
BcCardSelectV2Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectV2Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardSelectV2Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectV2Module, declarations: [BcCardSelectV2Component], imports: [CommonModule, BcIconModule, BcInputModule, BcButtonModule, BcCardModule, BcStatusModule], exports: [BcCardSelectV2Component] });
BcCardSelectV2Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectV2Module, imports: [[CommonModule, BcIconModule, BcInputModule, BcButtonModule, BcCardModule, BcStatusModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardSelectV2Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCardSelectV2Component],
                    imports: [CommonModule, BcIconModule, BcInputModule, BcButtonModule, BcCardModule, BcStatusModule],
                    exports: [BcCardSelectV2Component],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCardSelectV2Component, BcCardSelectV2Module };
//# sourceMappingURL=bancolombia-design-system-web-bc-card-select-v2.mjs.map
