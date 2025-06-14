import { Component, Input, EventEmitter, Output, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { BcCardSelectV2Behavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { SEARCH_PLACEHOLDER } from './bc-card-select-v2.constants';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Componente Card Select
 *
 * @export
 * @class BcCardSelectV2Component
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class BcCardSelectV2Component extends BcGeneralInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2FyZC1zZWxlY3QtdjIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhcmQtc2VsZWN0LXYyL2JjLWNhcmQtc2VsZWN0LXYyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jYXJkLXNlbGVjdC12Mi9iYy1jYXJkLXNlbGVjdC12Mi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFpQixVQUFVLEVBQTRDLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JLLE9BQU8sRUFBRSxzQkFBc0IsRUFBcUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqSixPQUFPLEVBQUUsdUJBQXVCLEVBQW1CLE1BQU0sMkNBQTJDLENBQUM7QUFDckcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBR25FOzs7Ozs7O0dBT0c7QUFhSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsdUJBQXVCO0lBc0psRSxZQUNVLGVBQWdDLEVBQ2hDLGlCQUFvQztRQUUxQyxLQUFLLEVBQUUsQ0FBQztRQUhGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBdko5Qzs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUEwQmhFOzs7Ozs7V0FNRztRQUNNLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQWtCM0M7Ozs7O1VBS0U7UUFDTyxhQUFRLEdBQVksS0FB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T0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3RELEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRixzRUN6QkgscXRCQXFCQTsyRkRPYSx1QkFBdUI7a0JBWm5DLFNBQVM7K0JBQ0UsbUJBQW1CLGFBRWxCO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDOzRCQUN0RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRixtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTtzSUFTdEMsV0FBVztzQkFBbkIsS0FBSztnQkFRRyxlQUFlO3NCQUF2QixLQUFLO2dCQVFHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFRRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBU0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQVFHLE1BQU07c0JBQWQsS0FBSztnQkFRRyxZQUFZO3NCQUFwQixLQUFLO2dCQVFHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFRRyxjQUFjO3NCQUF0QixLQUFLO2dCQU9NLGNBQWM7c0JBQXRCLEtBQUs7Z0JBUUUsaUJBQWlCO3NCQUF6QixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0UsV0FBVztzQkFBcEIsTUFBTTtnQkFPRyxrQkFBa0I7c0JBQTNCLE1BQU07Z0JBUUcsaUJBQWlCO3NCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0NhcmRTZWxlY3RWMkJlaGF2aW9yLCBCY0NhcmRQcm9kdWN0VjJDb25maWcsIEJjRm9vdGVyQnV0dG9uVjJDb25maWcsQmNDYXJkU2VsZWN0VjJTdHlsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCwgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRUFSQ0hfUExBQ0VIT0xERVIgfSBmcm9tICcuL2JjLWNhcmQtc2VsZWN0LXYyLmNvbnN0YW50cyc7XG5cblxuLyoqXG4gKiBDb21wb25lbnRlIENhcmQgU2VsZWN0XG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWNhcmQtc2VsZWN0LXYyJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1jYXJkLXNlbGVjdC12Mi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQmNDYXJkU2VsZWN0VjJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50IGV4dGVuZHMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIHBlcm1pdGUgaW5kaWNhciB1biBpZCDDum5pY28gYWwgY29tcG9uZW50ZSBkZW50cm8gZGVsIERPTS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgZWwgdGl0dWxvIHBhcmEgZWwgY2FyZCBzZWxlY3QuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGVDYXJkU2VsZWN0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgZWwgc3VidGl0dWxvIHBhcmEgZWwgY2FyZCBzZWxlY3QuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3ViVGl0bGVDYXJkU2VsZWN0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICogQ29uZmlndXJhY2nDs24gZGVsIGJvdMOzbiBkZWwgZHJvcGRvd24sIGFjw6Egc2UgZGVmaW5lIGVsIGljb25vIHkgZWwgdGV4dG8uXG4gICpcbiAgKiBAdHlwZSB7QmNGb290ZXJCdXR0b25Db25maWd9XG4gICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICovXG4gIEBJbnB1dCgpIGNvbmZpZ0Ryb3BEb3duQnV0dG9uOiBCY0Zvb3RlckJ1dHRvblYyQ29uZmlnO1xuXG4gIC8qKlxuICAgKiBNdWVzdHJhIGVsIGJ1dHRvbiBkZWwgZHJvcGRvd24gcG9yIGRlZmVjdG8gZW4gZmFsc29cbiAgICogdHJ1ZSB8IGZhbHNlXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0VjJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNob3dEcm9wRG93QnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGVzIGVsIGFycmVnbG8gZGUgY29uZmlndXJhY2nDs24gZGUgbGFzIGNhcmQgZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge0FycmF5PEJjQ2FyZFByb2R1Y3RDb25maWc+fVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0VjJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlczogQXJyYXk8QmNDYXJkUHJvZHVjdFYyQ29uZmlnPjtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGNvbmZpZ3VyYSBlbCB2YWxvciBwb3IgZGVmZWN0by5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgKiBFc3RhIGVudHJhZGEgaGFiaWxpdGEgbyBkZXNoYWJpbGl0YSBlbCBjb21wb25lbnRlLlxuICAqXG4gICogQHR5cGUge2Jvb2xlYW59XG4gICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICogVGV4dG8gZW4gY2FzbyBkZSBxdWUgbm8gZXhpc3RhbiBkYXRvcyBlbiBlbCBzZWxlY3RcbiAgKlxuICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICovXG4gIEBJbnB1dCgpIG1lc3NhZ2VOb3REYXRhOiBzdHJpbmcgPScnO1xuICBcbiAgLyoqXG4gICogVGV4dG8gZW4gY2FzbyBkZSBxdWUgbm8gZXhpc3RhbiBkYXRvcyBlbiBlbCBzZWxlY3RcbiAgKlxuICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICovXG4gIEBJbnB1dCgpIGNvbXBvbmVudFN0eWxlOiBCY0NhcmRTZWxlY3RWMlN0eWxlO1xuICAgICAvKipcbiAgICogRXN0YSBlbnRyYWRhIHBlcm1pdGUgcmVpbmljaWFyIGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgICAgQElucHV0KCkgcmVzZXRDb21wb25lbnQ6IGJvb2xlYW4gO1xuXG4gICAvKipcbiAgICogRXN0YSBlbnRyYWRhIHBlcm1pdGUgaW5kaWNhciBlbCBwbGFjZWhvbGRlciBwYXJhIGVsIGlucHV0IHNlYXJjaCBkZWwgY2FyZCBzZWxlY3QuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKSBzZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nID0gU0VBUkNIX1BMQUNFSE9MREVSO1xuICAgIC8qKlxuICAgKiBQZXJtaXRlIG9jdWx0YXIgbGEgZmxlY2hhIFxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICAgIEBJbnB1dCgpIGhpZGVBcnJvdzogYm9vbGVhbiA9ZmFsc2U7XG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHJldG9ybmEgZWwgdmFsb3IgZGVsIGl0ZW0gc2VsZWNjaW9uYWRvLlxuICAgKlxuICAgKiBAdHlwZSB7KEV2ZW50RW1pdHRlcjxhbnk+KX1cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgdmFsdWVPdXRwdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGVtaXRlIGN1YW5kbyBzZSBkYSBjbGljIGFsIGJ1dHRvbiBhY3Rpb25cbiAgICpcbiAgICogQHR5cGUgeyhFdmVudEVtaXR0ZXI8YW55Pil9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGFjdGlvbkJ1dHRvbk91dHB1dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgLyoqXG4gICAqIENhbWJpb3MgZW4gZWwgaW5wdXQgZGVsIHNlYXJjaCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQHR5cGUgeyhFdmVudEVtaXR0ZXI8YW55Pil9XG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVZhbHVlT3V0cHV0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogdmFyaWFibGUgcXVlIGhhY2UgcmVmZXJlbmNpYSBhbCBjb21wb3J0YW1pZW50byBuYXRpdm8gZGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBiY0NhcmRTZWxlY3RCZWhhdmlvcjtcbiAgLyoqXG4gICAqIFZhbG9yIGFjdHVhbFxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0VjJDb21wb25lbnRcbiAgICovXG4gIGN1cnJlbnRWYWx1ZTtcbiAgLyoqXG4gICAqIENvbmZpZ3VyYWNpw7NuIGluaWNpYWwgZGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBjb25maWcgPSB7XG4gICAgZmlyc3RMb2FkOiB0cnVlLFxuICB9O1xuICAvKipcbiAgICogQ29uZmlndXJhY2nDs24gZGUgbG9zIGNhbWJpb3MgZGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBvbkNoYW5nZXMgPSBuZXcgU3ViamVjdDxTaW1wbGVDaGFuZ2VzPigpO1xuICBcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvciA9IG5ldyBCY0NhcmRTZWxlY3RWMkJlaGF2aW9yKCk7XG5cbiAgICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgfVxuXG4gIGFzeW5jIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmluaXRDb21wb25lbnQoKTtcbiAgICB0aGlzLnNldENoYW5nZXMoKTtcbiAgfVxuXG4gICAvKipcbiAgICogUmVnaXN0cm8geSBlbnbDrW8gZGUgbG9zIGNhbWJpb3MgZGVsIGNvbXBvbmVudGVcbiAgICogQHBhcmFtIHtTaW1wbGVDaGFuZ2VzfSBjaGFuZ2VzXG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgdGhpcy5vbkNoYW5nZXMubmV4dChjaGFuZ2VzKTtcbiAgfVxuICAvKipcbiAgICogRGVzdHJ1Y2Npw7NuIGRlbCBjb21wb25lbnRlXG4gICAqIEBtZW1iZXJvZiBCY0NhcmRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmljaWFsaXphY2nDs24geSBjb25maWd1cmFjacOzbiBkZWwgY29tcG9uZW50ZVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0VjJDb21wb25lbnRcbiAgICovXG4gIGluaXRDb21wb25lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTsgIFxuICAgIGlmICh0aGlzLmNvbmZpZ0Ryb3BEb3duQnV0dG9uKSB7XG4gICAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLmRyb3Bkb3duQnV0dG9uQ29uZmlnID0ge1xuICAgICAgICBldmVudDogKCkgPT4gdGhpcy5hY3Rpb25CdXR0b25PdXRwdXQuZW1pdCgpLFxuICAgICAgICBpY29uOiB0aGlzLmNvbmZpZ0Ryb3BEb3duQnV0dG9uLmljb24sXG4gICAgICAgIHRleHQ6IHRoaXMuY29uZmlnRHJvcERvd25CdXR0b24udGV4dCxcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRJdGVtcyh0aGlzLnZhbHVlcyk7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRNZXNzYWdlTm90RGF0YSh0aGlzLm1lc3NhZ2VOb3REYXRhKTtcbiAgICBpZih0aGlzLmNvbXBvbmVudFN0eWxlKXt0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNldENvbXBvbmVudFN0eWxlKHRoaXMuY29tcG9uZW50U3R5bGUpO31cbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNldFVwKCk7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRIaWRlQXJyb3dTdGF0ZSh0aGlzLmhpZGVBcnJvdyk7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXRJbmlUZXh0KHRoaXMudGl0bGVDYXJkU2VsZWN0KTtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNldFN1YnRpdGxlVGV4dCh0aGlzLnN1YlRpdGxlQ2FyZFNlbGVjdCk7XG4gICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5oaWRlRHJvcGRvd24oIXRoaXMuc2hvd0Ryb3BEb3dCdXR0b24pO1xuICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3Iuc2V0RGVmYXVsdFZhbHVlKHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnNldERpc2FibGUodGhpcy5kaXNhYmxlZCk7XG5cbiAgfVxuICAvKipcbiAgICpDYXB0dXJhIGRlIGV2ZW50b3MgZGVzZGUgZWwgYmVoYXZpb3IgeSBlbCBlbWl0IGRlIGxvcyBtaXNtb3MgZW4gZWwgY29tcG9uZW50ZS5cbiAgICogQG1lbWJlcm9mIEJjQ2FyZFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBzZXRFdmVudHMoKXtcbiAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLmV2ZW50VmFsdWVPdXRwdXQ9KGl0ZW06YW55KT0+IHtcbiAgICAgIHRoaXMudmFsdWVPdXRwdXQuZW1pdChpdGVtKTtcbiAgICB9O1xuICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3IucmV0dXJuVmFsdWVJbnB1dD0oa2V5OmFueSk9PiB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlT3V0cHV0LmVtaXQoa2V5KTtcbiAgICB9O1xuICAgXG4gIH1cbiAgXG4gIC8qKlxuICAgKkFjdHVhbGl6YWNpw7NuIGRlbCBlc3RhZG8gZGVsIGNvbXBvbmVudGUgY29uIHJlc3BlY3RvIGEgbG9zIHBhcsOhbWV0cm9zLlxuICAgKiBAbWVtYmVyb2YgQmNDYXJkU2VsZWN0VjJDb21wb25lbnRcbiAgICovXG4gIHNldENoYW5nZXMoKXtcbiAgICB0aGlzLm9uQ2hhbmdlcy5zdWJzY3JpYmUoKGNoYW5nZXM6U2ltcGxlQ2hhbmdlcyk9PntcbiAgICAgIGlmIChjaGFuZ2VzLnNob3dEcm9wRG93QnV0dG9uICkge1xuICAgICAgICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3IuaGlkZURyb3Bkb3duKCF0aGlzLnNob3dEcm9wRG93QnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzLmRlZmF1bHRWYWx1ZSApIHtcbiAgICAgICAgdGhpcy5iY0NhcmRTZWxlY3RCZWhhdmlvci5zZXREZWZhdWx0VmFsdWUodGhpcy5kZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQgKSB7XG4gICAgICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3Iuc2V0RGlzYWJsZSh0aGlzLmRpc2FibGVkKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzLnJlc2V0Q29tcG9uZW50ICkge1xuICAgICAgICB0aGlzLmJjQ2FyZFNlbGVjdEJlaGF2aW9yLnJlc2V0Q29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlcy5oaWRlQXJyb3cgKSB7XG4gICAgICAgIHRoaXMuYmNDYXJkU2VsZWN0QmVoYXZpb3Iuc2V0SGlkZUFycm93U3RhdGUodGhpcy5oaWRlQXJyb3cpO1xuICAgIH1cbiAgICB9KTtcbiAgfVxufSIsIlxuPGRpdiBjbGFzcz1cImJjLWNhcmQtc2VsZWN0XCIgW2lkXT1cImNvbXBvbmVudElkXCIgdGFiaW5kZXg9XCIwXCI+XG4gIDxkaXYgY2xhc3M9XCJiYy1jYXJkLXNlbGVjdC1jb250cm9sXCI+XG4gICAgPGRpdiBjbGFzcz1cImJjLWNhcmQtc2VsZWN0LWlucHV0XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJiYy1pbnB1dFwiIFxuICAgICAgICBhcmlhLWxhYmVsPVwiQVwiIFxuICAgICAgICBbaWRdPVwiY29tcG9uZW50SWQgKyctaW5wdXQnXCIgXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlYXJjaFBsYWNlaG9sZGVyXCIvPlxuICAgICAgICAgIDxlbSBjbGFzcz1cImJjLWljb24gYmMtY2FyZC1zZWxlY3Qtc2VhcmNoXCI+c2VhcmNoPC9lbT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJiYy1jYXJkLXNlbGVjdC1sYWJlbFwiIGZvcj1cImNvbXBvbmVudElkICsnLWlucHV0J1wiPjwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJjLWNhcmQtc2VsZWN0LWNvbnRlbnQtdG9nZ2xlXCI+XG4gICAgICA8ZW0gY2xhc3M9XCJiYy1pY29uIGJjLWNhcmQtc2VsZWN0LXRvZ2dsZSBhcnJvdy1kaXJlY3Rpb25cIiBcbiAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwiY29tcG9uZW50SWQgKyAnLWNvbnRlbnQnXCI+PC9lbT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG5cbiJdfQ==