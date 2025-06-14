import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, ViewChild, NgModule } from '@angular/core';
import { BcInputSelectBehavior } from '@bancolombia/design-system-behaviors';
import * as i2 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * componente Select
 *
 * @export
 * @class BcInputSelectComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {OnChanges}
 */
class BcInputSelectComponent extends BcGeneralInputComponent {
    constructor(controlDirective, bcHelperService, renderer, changeDetectorRef) {
        super();
        this.controlDirective = controlDirective;
        this.bcHelperService = bcHelperService;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Esta entrada permite indicar un id único al componente dentro del DOM.
         *
         * @type {string}
         * @memberof BcInputSelectComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Esta entrada de tipo booleana nos permite indicar si el componente está en estado de error.
         *
         * @type {boolean}
         * @memberof BcInputSelectComponent
         */
        this.status = 'enabled';
        /**
         * Esta entrada de tipo booleana nos indica si el componente es de entrada múltiple.
         *
         * @type {boolean}
         * @memberof BcInputSelectComponent
         */
        this.multiple = false;
        /**
         * Esta entrada de tipo booleana nos indica si el componente filtra la lista de opciones.
         *
         * @type {boolean}
         * @memberOf BcInputSelectComponent
         */
        this.filter = false;
        /**
         * Salida del valor actual del componente.
         *
         * @type {(EventEmitter<string | string[]>)}
         * @memberof BcInputSelectComponent
         */
        this.valueOutput = new EventEmitter();
        /**
         * Esta entrada de tipo string nos indica el tipo de formato de salida de nuestro valor actual, esta puede ser
         * de tipo full para devolver el objeto completo o simple para devolver un único valor.
         *
         * @type {('full' | 'simple')}
         * @memberof BcInputSelectComponent
         */
        this.formatType = 'simple';
        this.config = {
            firstLoad: true,
        };
        this.onTouch = () => {
            this.changeDetectorRef.detectChanges();
        };
        this.bcInputSelectBehavior = new BcInputSelectBehavior();
        if (this.maxHeightContent) {
            this.bcInputSelectBehavior.maxHeightContent = this.maxHeightContent;
        }
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnChanges(changes) {
        if (changes && !this.config.firstLoad) {
            if (changes.values) {
                this.changeDetectorRef.detectChanges();
                this.setInputs();
                if (this.defaultIndex) {
                    this.bcInputSelectBehavior.setDefaultIndex(this.defaultIndex);
                }
                if (this.value) {
                    this.bcInputSelectBehavior.setDefaultValue(this.value);
                }
                this.bcInputSelectBehavior.setUp(true);
                this.bcInputSelectBehavior.setDefaultValue(this.value);
            }
            if (changes.status) {
                this.updateState();
            }
            if (changes.multiple) {
                this.setMultipleState();
            }
        }
    }
    ngAfterViewInit() {
        this.config.firstLoad = false;
        setTimeout(() => {
            this.setInputs();
            this.updateState();
            this.setMultipleState();
            this.setFilterState();
            this.bcInputSelectBehavior.setUp();
            this.bcInputSelectBehavior.setDefaultValue(this.value);
            this.validateErrorStatus();
            this.input.nativeElement.addEventListener('blur', this.onBlur.bind(this));
            this.writeValue(this.value);
        });
    }
    onBlur(ev) {
        this.onTouch();
        this.onChange(this.value);
    }
    validateErrorStatus() {
        if (this.controlDirective && this.controlDirective.statusChanges) {
            this.controlDirective.statusChanges.subscribe((element) => {
                if (element === 'INVALID') {
                    this.renderer.addClass(this.input.nativeElement, 'bc-input-error');
                }
                else {
                    this.renderer.removeClass(this.input.nativeElement, 'bc-input-error');
                }
            });
        }
    }
    updateState() {
        if (this.status === 'error') {
            this.renderer.addClass(this.input.nativeElement, 'bc-input-error');
        }
        else if (this.status === 'disabled') {
            this.renderer.setAttribute(this.container.nativeElement, this.status, '');
        }
        else {
            this.renderer.removeAttribute(this.container.nativeElement, 'disabled');
            this.renderer.removeClass(this.input.nativeElement, 'bc-input-error');
            this.renderer.addClass(this.input.nativeElement, 'bc-input');
        }
    }
    writeValue(value) {
        if (value == null || typeof value == 'undefined') {
            this.bcInputSelectBehavior.setInputValue(value);
            this.bcInputSelectBehavior.deleteActiveIcon();
            return;
        }
        this.value = value;
        const markItem = (val) => {
            if (this.values) {
                const index = this.values.map((item) => item.value).indexOf(val);
                if (index >= 0) {
                    this.bcInputSelectBehavior.markItemByIndex(index);
                }
            }
        };
        if (this.multiple) {
            Array.from(value).forEach(markItem);
        }
        else {
            markItem(value);
        }
    }
    setMultipleState() {
        if (this.multiple) {
            this.renderer.setAttribute(this.container.nativeElement, 'multiple', '');
        }
        else {
            this.renderer.removeAttribute(this.container.nativeElement, 'multiple');
        }
    }
    setFilterState() {
        if (this.filter) {
            this.renderer.setAttribute(this.container.nativeElement, 'filter', '');
        }
        else {
            this.renderer.removeAttribute(this.container.nativeElement, 'filter');
        }
    }
    /**
     * setea los input
     *
     * @memberof BcInputSelectComponent
     */
    setInputs() {
        this.bcInputSelectBehavior.setId(this.componentId);
        this.bcInputSelectBehavior.setDefaultIndex(this.defaultIndex);
        this.bcInputSelectBehavior.outputFunction = (param) => this.setvalueOutput(param);
        this.bcInputSelectBehavior.setItems(this.values);
        if (this.formatType) {
            this.bcInputSelectBehavior.setFormatOutput(this.formatType);
        }
        if (this.selectedItemsDisplay) {
            this.bcInputSelectBehavior.setSelectedItemsDisplay(this.selectedItemsDisplay);
        }
    }
    /**
     * valores a salir
     *
     * @param {(string | string[])} param
     * @memberof BcInputSelectComponent
     */
    setvalueOutput(param) {
        this.value = param;
        this.onTouch();
        this.setMultipleState();
        this.setFilterState();
        this.onChange(this.value);
        this.valueOutput.emit(param);
    }
    /**
     * Habilitar y deshabilitar dropdown
     *
     * @param {(boolean)} param
     * @memberof BcInputSelectComponent
     */
    setDisabledState(isDisabled) {
        this.bcInputSelectBehavior.setDisabled(isDisabled);
    }
    cleanSearch() {
        this.bcInputSelectBehavior.cleanSearchBehavior();
    }
}
BcInputSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.BcHelperService }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
BcInputSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputSelectComponent, selector: "bc-input-select", inputs: { componentId: "componentId", label: "label", name: "name", span: "span", initValue: "initValue", values: "values", icon: "icon", defaultIndex: "defaultIndex", status: "status", multiple: "multiple", filter: "filter", formatType: "formatType", selectedItemsDisplay: ["selected-items-display", "selectedItemsDisplay"], maxHeightContent: "maxHeightContent" }, outputs: { valueOutput: "valueOutput" }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true }, { propertyName: "input", first: true, predicate: ["input"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-input-select\" #container [id]=\"componentId\">\n    <em *ngIf=\"icon\">{{ icon }}</em>\n    <input #input type=\"text\" [name]=name class=\"bc-input\" [id]=\"componentId+'-input'\"/>\n    <em class=\"bc-input-select-toggle\" [attr.aria-controls]=\"componentId+'-container'\">arrow2-down</em>\n    <label *ngIf=\"label\" [for]=\"componentId+'-input'\">{{ label }}</label>\n    <span *ngIf=\"span\"> {{ span }}</span>\n    <ul class=\"bc-input-select-content\" [id]=\"componentId+'-container'\">\n    </ul>\n</div>\n", directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-select', template: "<div class=\"bc-input-select\" #container [id]=\"componentId\">\n    <em *ngIf=\"icon\">{{ icon }}</em>\n    <input #input type=\"text\" [name]=name class=\"bc-input\" [id]=\"componentId+'-input'\"/>\n    <em class=\"bc-input-select-toggle\" [attr.aria-controls]=\"componentId+'-container'\">arrow2-down</em>\n    <label *ngIf=\"label\" [for]=\"componentId+'-input'\">{{ label }}</label>\n    <span *ngIf=\"span\"> {{ span }}</span>\n    <ul class=\"bc-input-select-content\" [id]=\"componentId+'-container'\">\n    </ul>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i2.BcHelperService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], label: [{
                type: Input
            }], name: [{
                type: Input
            }], span: [{
                type: Input
            }], initValue: [{
                type: Input
            }], values: [{
                type: Input
            }], icon: [{
                type: Input
            }], defaultIndex: [{
                type: Input
            }], status: [{
                type: Input
            }], multiple: [{
                type: Input
            }], filter: [{
                type: Input
            }], valueOutput: [{
                type: Output
            }], formatType: [{
                type: Input
            }], selectedItemsDisplay: [{
                type: Input,
                args: ['selected-items-display']
            }], maxHeightContent: [{
                type: Input
            }], container: [{
                type: ViewChild,
                args: ['container']
            }], input: [{
                type: ViewChild,
                args: ['input']
            }] } });

/**
 * Importa el componente BcInputSelect con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-select></bc-input-select>
 *
 * @param  [iconLeft](opcional): Texto que indica el id del componente
 * @param  [placeholder](opcional): Texto que indica el placeholder del select
 * @param  [textBelow](opcional): Texto que aparece en la parte de abajo del select
 * @param  values: Array tipo [{ text: string }] que indica los valores del select
 * @param [iconLeft](opcional): Boolean que indica si el select tiene iconos a la izquierda.
 * Si tiene se deben de enviar [{ text: string, icon: string }]
 * @param [valueInput](opcional): Array tipo [{ text: string }] y si es isMultipleChk true.
 * Si no debe de ser el valueinput texto
 * @param [isError](opcional): Boolean que indica si tiene estilo error el select o no. por defecto falso
 * @param [isDisabled](opcional): Boolean que indica si tiene estilo disabled el select o no. por defecto falso
 * @param  [isMultipleChk](opcional): Boolean que indica si tiene checkbox de seleccion multiple
 * @param  valueOutput: Output Valor de salida que indica los valores seleccionados
 *
 * @example
 *
 * <bc-input-select
 * [id] = "'bc-select1'"
 * [values]="objSelect.values"
 * [placeholder]="objSelect.placeholder"
 * [textBelow]="objSelect.textBelow"
 * (valueOutput) = "showSelectedValue($event)"
 * ></bc-input-select>
 *
 * @author: Bancolombia S.A
 */
class BcInputSelectModule {
}
BcInputSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectModule, declarations: [BcInputSelectComponent], imports: [CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule], exports: [BcInputSelectComponent] });
BcInputSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectModule, imports: [[CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputSelectComponent],
                    imports: [CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule],
                    exports: [BcInputSelectComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputSelectComponent, BcInputSelectModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-select.mjs.map
