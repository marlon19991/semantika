import { Component, Input, EventEmitter, Output, ViewChild, Optional, Self, } from '@angular/core';
import { BcInputSelectBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@bancolombia/design-system-web/bc-helpers";
import * as i3 from "@angular/common";
/**
 * componente Select
 *
 * @export
 * @class BcInputSelectComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {OnChanges}
 */
export class BcInputSelectComponent extends BcGeneralInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1zZWxlY3QvYmMtaW5wdXQtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1zZWxlY3QvYmMtaW5wdXQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBS04sU0FBUyxFQUdULFFBQVEsRUFDUixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFtQix1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7OztBQUdyRzs7Ozs7Ozs7R0FRRztBQUtILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx1QkFBdUI7SUFnSWpFLFlBQzZCLGdCQUEyQixFQUM5QyxlQUFnQyxFQUNoQyxRQUFtQixFQUNuQixpQkFBb0M7UUFFNUMsS0FBSyxFQUFFLENBQUM7UUFMbUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQzlDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFuSTlDOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQTZEaEU7Ozs7O1dBS0c7UUFDTSxXQUFNLEdBQWtDLFNBQVMsQ0FBQztRQUUzRDs7Ozs7V0FLRztRQUNNLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUI7Ozs7O1dBS0c7UUFDTSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXhC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cG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNJbnB1dFNlbGVjdEJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSwgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogY29tcG9uZW50ZSBTZWxlY3RcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICogQGltcGxlbWVudHMge09uQ2hhbmdlc31cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtaW5wdXQtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1pbnB1dC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0lucHV0U2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIHBlcm1pdGUgaW5kaWNhciB1biBpZCDDum5pY28gYWwgY29tcG9uZW50ZSBkZW50cm8gZGVsIERPTS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIHN0cmluZyBub3MgcGVybWl0ZSBpbmRpY2FybGUgYWwgc2VsZWN0b3IgdW4gbGFiZWwgZGVzY3JpcHRpdm8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0U2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDtcblxuICAvKipcbiAgICogbmFtZSBkZWwgZWxlbWVudG9cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBwZXJtaXRlIGHDsWFkaXJsZSBhbCBzZWxlY3RvciB1biBzcGFuLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3BhbjtcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBlcyBlbCBhcnJlZ2xvIGRlIGNvbmZpZ3VyYWNpw7NuIGRlIG51ZXN0cm8gY29tcG9uZW50ZVxuICAgKlxuICAgKiBAdHlwZSB7QXJyYXk8eyB0ZXh0OiBzdHJpbmcgfT59XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0U2VsZWN0Q29tcG9uZW50XG4gICAqL1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgbm9zIHBlcm1pdGUgc2V0ZWFyIGVsIHZhbG9yIGluaWNpYWwgZGUgbnVlc3RybyBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaW5pdFZhbHVlO1xuXG4gIC8qKlxuICAgKiBFc3RhIGVudHJhZGEgbm9zIGFzaWduYXIgZWwgdmFsb3IgZGVsIHNlbGVjdG9yLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cblxuICBASW5wdXQoKSB2YWx1ZXM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueTsgaWNvbj86IHN0cmluZyB9PjtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBwZXJtaXRlIGFjdGl2YXIgZWwgw61jb25vIGRlbnRybyBkZSBudWVzdHJhcyBvcGNpb25lcywgZXMgaW1wb3J0YW50ZVxuICAgKiB0ZW5lciBlbiBjdWVudGEgcXVlIGxhIGVudHJhZGEgcmVjaWJlIGVsIG5vbWJyZSBkZWwgw61jb25vLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gbnVtw6lyaWNvIG5vcyBpbmRpY2EgZWwgw61uZGljZSBkZSBsYSBvcGNpw7NuIHBvciBkZWZlY3RvLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZGVmYXVsdEluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIGJvb2xlYW5hIG5vcyBwZXJtaXRlIGluZGljYXIgc2kgZWwgY29tcG9uZW50ZSBlc3TDoSBlbiBlc3RhZG8gZGUgZXJyb3IuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3RhdHVzOiAnZXJyb3InIHwgJ2Rpc2FibGVkJ3wgJ2VuYWJsZWQnPSdlbmFibGVkJztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gYm9vbGVhbmEgbm9zIGluZGljYSBzaSBlbCBjb21wb25lbnRlIGVzIGRlIGVudHJhZGEgbcO6bHRpcGxlLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIGJvb2xlYW5hIG5vcyBpbmRpY2Egc2kgZWwgY29tcG9uZW50ZSBmaWx0cmEgbGEgbGlzdGEgZGUgb3BjaW9uZXMuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyT2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZmlsdGVyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNhbGlkYSBkZWwgdmFsb3IgYWN0dWFsIGRlbCBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAdHlwZSB7KEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBzdHJpbmdbXT4pfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIHZhbHVlT3V0cHV0OiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgc3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBzdHJpbmdbXT4oKTtcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIGRlIHRpcG8gc3RyaW5nIG5vcyBpbmRpY2EgZWwgdGlwbyBkZSBmb3JtYXRvIGRlIHNhbGlkYSBkZSBudWVzdHJvIHZhbG9yIGFjdHVhbCwgZXN0YSBwdWVkZSBzZXJcbiAgICogZGUgdGlwbyBmdWxsIHBhcmEgZGV2b2x2ZXIgZWwgb2JqZXRvIGNvbXBsZXRvIG8gc2ltcGxlIHBhcmEgZGV2b2x2ZXIgdW4gw7puaWNvIHZhbG9yLlxuICAgKlxuICAgKiBAdHlwZSB7KCdmdWxsJyB8ICdzaW1wbGUnKX1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdFR5cGU6ICdmdWxsJyB8ICdzaW1wbGUnID0gJ3NpbXBsZSc7XG5cbiAgY29kZXNiY0lucHV0U2VsZWN0OiBhbnk7XG4gIGJjSW5wdXRTZWxlY3RCZWhhdmlvcjogYW55O1xuICBmb3JtQ29udHJvbE5hbWU6IGFueTtcblxuICBASW5wdXQoJ3NlbGVjdGVkLWl0ZW1zLWRpc3BsYXknKSBzZWxlY3RlZEl0ZW1zRGlzcGxheTtcblxuICAgLyoqXG4gICAqIEFsdHVyYSBtYXhpbWEgZGVsIGNvbnRlbmlkb1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKSBtYXhIZWlnaHRDb250ZW50IDogbnVtYmVyO1xuXG4gIGNvbmZpZyA9IHtcbiAgICBmaXJzdExvYWQ6IHRydWUsXG4gIH07XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIEBPcHRpb25hbCgpIHB1YmxpYyBjb250cm9sRGlyZWN0aXZlOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5iY0lucHV0U2VsZWN0QmVoYXZpb3IgPSBuZXcgQmNJbnB1dFNlbGVjdEJlaGF2aW9yKCk7XG4gICAgaWYodGhpcy5tYXhIZWlnaHRDb250ZW50KXtcbiAgICAgIHRoaXMuYmNJbnB1dFNlbGVjdEJlaGF2aW9yLm1heEhlaWdodENvbnRlbnQgPSB0aGlzLm1heEhlaWdodENvbnRlbnQ7XG4gICAgfVxuICAgIGlmIChjb250cm9sRGlyZWN0aXZlKSB7XG4gICAgICBjb250cm9sRGlyZWN0aXZlLnZhbHVlQWNjZXNzb3IgPSB0aGlzIGFzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50O1xuICAgIH1cbiAgfVxuXG5cbiAgb25Ub3VjaCA9ICgpID0+IHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcyAmJiAhdGhpcy5jb25maWcuZmlyc3RMb2FkKSB7XG4gICAgICBpZiAoY2hhbmdlcy52YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRzKCk7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRJbmRleCkge1xuICAgICAgICAgIHRoaXMuYmNJbnB1dFNlbGVjdEJlaGF2aW9yLnNldERlZmF1bHRJbmRleCh0aGlzLmRlZmF1bHRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmJjSW5wdXRTZWxlY3RCZWhhdmlvci5zZXREZWZhdWx0VmFsdWUodGhpcy52YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmNJbnB1dFNlbGVjdEJlaGF2aW9yLnNldFVwKHRydWUpO1xuICAgICAgICB0aGlzLmJjSW5wdXRTZWxlY3RCZWhhdmlvci5zZXREZWZhdWx0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlcy5zdGF0dXMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXMubXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5zZXRNdWx0aXBsZVN0YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29uZmlnLmZpcnN0TG9hZCA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHRoaXMuc2V0SW5wdXRzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnNldE11bHRpcGxlU3RhdGUoKTtcbiAgICAgIHRoaXMuc2V0RmlsdGVyU3RhdGUoKTtcbiAgICAgIHRoaXMuYmNJbnB1dFNlbGVjdEJlaGF2aW9yLnNldFVwKCk7XG4gICAgICB0aGlzLmJjSW5wdXRTZWxlY3RCZWhhdmlvci5zZXREZWZhdWx0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnZhbGlkYXRlRXJyb3JTdGF0dXMoKTtcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSlcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBvbkJsdXIoZXY6IEV2ZW50KSB7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKVxuICB9XG5cbiAgdmFsaWRhdGVFcnJvclN0YXR1cygpIHtcbiAgICBpZiAodGhpcy5jb250cm9sRGlyZWN0aXZlICYmIHRoaXMuY29udHJvbERpcmVjdGl2ZS5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNvbnRyb2xEaXJlY3RpdmUuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09ICdJTlZBTElEJykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAnYmMtaW5wdXQtZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2JjLWlucHV0LWVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdiYy1pbnB1dC1lcnJvcicpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc3RhdHVzLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdiYy1pbnB1dC1lcnJvcicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdiYy1pbnB1dCcpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5iY0lucHV0U2VsZWN0QmVoYXZpb3Iuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB0aGlzLmJjSW5wdXRTZWxlY3RCZWhhdmlvci5kZWxldGVBY3RpdmVJY29uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGNvbnN0IG1hcmtJdGVtID0gKHZhbCkgPT4ge1xuICAgICAgaWYgKHRoaXMudmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy52YWx1ZXMubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKS5pbmRleE9mKHZhbCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5iY0lucHV0U2VsZWN0QmVoYXZpb3IubWFya0l0ZW1CeUluZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIEFycmF5LmZyb20odmFsdWUpLmZvckVhY2gobWFya0l0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrSXRlbSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TXVsdGlwbGVTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ211bHRpcGxlJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnbXVsdGlwbGUnKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXJTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdmaWx0ZXInLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdmaWx0ZXInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2V0ZWEgbG9zIGlucHV0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0U2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBzZXRJbnB1dHMoKSB7XG4gICAgdGhpcy5iY0lucHV0U2VsZWN0QmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY0lucHV0U2VsZWN0QmVoYXZpb3Iuc2V0RGVmYXVsdEluZGV4KHRoaXMuZGVmYXVsdEluZGV4KTtcbiAgICB0aGlzLmJjSW5wdXRTZWxlY3RCZWhhdmlvci5vdXRwdXRGdW5jdGlvbiA9IChwYXJhbSkgPT4gdGhpcy5zZXR2YWx1ZU91dHB1dChwYXJhbSk7XG4gICAgdGhpcy5iY0lucHV0U2VsZWN0QmVoYXZpb3Iuc2V0SXRlbXModGhpcy52YWx1ZXMpO1xuICAgIGlmICh0aGlzLmZvcm1hdFR5cGUpIHtcbiAgICAgIHRoaXMuYmNJbnB1dFNlbGVjdEJlaGF2aW9yLnNldEZvcm1hdE91dHB1dCh0aGlzLmZvcm1hdFR5cGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zRGlzcGxheSkge1xuICAgICAgdGhpcy5iY0lucHV0U2VsZWN0QmVoYXZpb3Iuc2V0U2VsZWN0ZWRJdGVtc0Rpc3BsYXkodGhpcy5zZWxlY3RlZEl0ZW1zRGlzcGxheSk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogdmFsb3JlcyBhIHNhbGlyXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZyB8IHN0cmluZ1tdKX0gcGFyYW1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIHNldHZhbHVlT3V0cHV0KHBhcmFtOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHRoaXMudmFsdWUgPSBwYXJhbTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgICB0aGlzLnNldE11bHRpcGxlU3RhdGUoKTtcbiAgICB0aGlzLnNldEZpbHRlclN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnZhbHVlT3V0cHV0LmVtaXQocGFyYW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhYmlsaXRhciB5IGRlc2hhYmlsaXRhciBkcm9wZG93blxuICAgKlxuICAgKiBAcGFyYW0geyhib29sZWFuKX0gcGFyYW1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuYmNJbnB1dFNlbGVjdEJlaGF2aW9yLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgY2xlYW5TZWFyY2goKSB7XG4gICAgdGhpcy5iY0lucHV0U2VsZWN0QmVoYXZpb3IuY2xlYW5TZWFyY2hCZWhhdmlvcigpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYmMtaW5wdXQtc2VsZWN0XCIgI2NvbnRhaW5lciBbaWRdPVwiY29tcG9uZW50SWRcIj5cbiAgICA8ZW0gKm5nSWY9XCJpY29uXCI+e3sgaWNvbiB9fTwvZW0+XG4gICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiIFtuYW1lXT1uYW1lIGNsYXNzPVwiYmMtaW5wdXRcIiBbaWRdPVwiY29tcG9uZW50SWQrJy1pbnB1dCdcIi8+XG4gICAgPGVtIGNsYXNzPVwiYmMtaW5wdXQtc2VsZWN0LXRvZ2dsZVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiY29tcG9uZW50SWQrJy1jb250YWluZXInXCI+YXJyb3cyLWRvd248L2VtPlxuICAgIDxsYWJlbCAqbmdJZj1cImxhYmVsXCIgW2Zvcl09XCJjb21wb25lbnRJZCsnLWlucHV0J1wiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICA8c3BhbiAqbmdJZj1cInNwYW5cIj4ge3sgc3BhbiB9fTwvc3Bhbj5cbiAgICA8dWwgY2xhc3M9XCJiYy1pbnB1dC1zZWxlY3QtY29udGVudFwiIFtpZF09XCJjb21wb25lbnRJZCsnLWNvbnRhaW5lcidcIj5cbiAgICA8L3VsPlxuPC9kaXY+XG4iXX0=