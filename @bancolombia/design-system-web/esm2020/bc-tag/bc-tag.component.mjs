import { EventEmitter, Output, Component, Input, } from '@angular/core';
import { BcTagBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-float-menu";
import * as i4 from "@angular/common";
/**
 * Componente Tag
 *
 * @export
 * @class BcTagComponent
 */
export class BcTagComponent {
    constructor(elementRef, bcHelperService) {
        this.elementRef = elementRef;
        this.bcHelperService = bcHelperService;
        /**
         * Icono del botón izquierdo.
         *
         * @memberof BcTagComponent
         */
        this.iconLeft = '';
        /**
         * Icono del botón derecho para type tag
         *
         * @memberof BcTagComponent
         */
        this.iconRight = '';
        /**
         * Icono '+' del botón derecho para el filtro (indica adición).
         *
         * @memberof BcTagComponent
         */
        this.iconAdd = 'true';
        /**
         * Icono 'x' del botón derecho para el filtro (indica eliminación).
         *
         * @memberof BcTagComponent
         */
        this.iconDelete = 'true';
        /**
         * Texto principal del elemento.
         *
         * @memberof BcTagComponent
         */
        this.textElement = '';
        /**
         * Propiedad que identifica el tipo de botón que se va a utilizar.
         *
         * @memberof BcTagComponent
         */
        this.typeTag = 'button';
        /**
         * Tipo de opciones, por default es el botón primario parametro de entrada 'secondary'.
         *
         * @memberof BcTagComponent
         */
        this.typeButtonTag = '';
        /**
         * Ancho en píxeles(px) del tag.
         *
         * @memberof BcTagComponent
         */
        this.widthTag = 'auto';
        /**
         * Ver opcion seleccionada
         *
         * @memberof BcTagComponent
         */
        this.showOptionSelected = true;
        /**
         * Salida del valor actual del componente.
         *
         * @type {(EventEmitter<string | string[]>)}
         * @memberof BcInputSelectComponent
         */
        this.valueOutput = new EventEmitter();
        this.onClickButton = new EventEmitter();
    }
    ngOnInit() {
        this.componentId = this.componentId ?? this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        switch (this.typeTag) {
            case 'button':
                this.initButton();
                break;
            case 'filter':
                this.initFilter();
                break;
            case 'dropdown':
                this.initDropdown();
                break;
        }
    }
    handleClick(event) {
        if (this.status === 'disabled') {
            event.stopPropagation();
        }
    }
    handleClickButton() {
        this.onClickButton.emit();
    }
    getClassButton() {
        if (this.typeButtonTag === 'secondary') {
            return this.status === 'disabled'
                ? 'bc-tag-secondary-disabled'
                : 'bc-tag-secondary';
        }
        return this.status === 'disabled' ? 'bc-tag-disabled' : 'bc-tag';
    }
    getClassFilter() {
        return this.status === 'disabled'
            ? 'bc-tag-filter-disabled'
            : 'bc-tag-filter';
    }
    initButton() {
        const buttonElement = this.elementRef.nativeElement.querySelector('[role="button"]');
        buttonElement.onclick = this.handleClickButton.bind(this);
        this.bcTagBehavior = new BcTagBehavior();
        this.bcTagBehavior.setId(this.componentId);
        this.bcTagBehavior.setUp();
    }
    initFilter() {
        this.bcTagBehavior = new BcTagBehavior();
        this.bcTagBehavior.setId(this.componentId);
        this.bcTagBehavior.outputFunction = (data) => {
            this.valueOutput.emit(data);
        };
        this.bcTagBehavior.setUp();
    }
    initDropdown() {
        this.bcTagBehavior = new BcTagBehavior();
        this.bcTagBehavior.setId(this.componentId);
        this.bcTagBehavior.outputFunction = (data) => {
            this.valueOutput.emit(data);
        };
        this.bcTagBehavior.setItems(this.values);
        this.bcTagBehavior.setUp();
    }
}
BcTagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagComponent, deps: [{ token: i0.ElementRef }, { token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcTagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTagComponent, selector: "bc-tag", inputs: { componentId: "componentId", iconLeft: "iconLeft", iconRight: "iconRight", iconAdd: "iconAdd", iconDelete: "iconDelete", textElement: "textElement", status: "status", typeTag: "typeTag", values: "values", typeButtonTag: "typeButtonTag", textAriaLabel: "textAriaLabel", widthTag: "widthTag", showOptionSelected: "showOptionSelected" }, outputs: { valueOutput: "valueOutput", onClickButton: "onClickButton" }, ngImport: i0, template: "<div\n  *ngIf=\"typeTag === 'button'\"\n  class=\"bc-tag-content\"\n  [id]=\"componentId\"\n  [attr.widthtag]=\"widthTag\"\n  [attr.aria-hidden]=\"status === 'disabled' ? 'true' : null\"\n  (click)=\"handleClick($event)\"\n>\n  <div\n    [ngClass]=\"getClassButton()\"\n    [attr.tabindex]=\"status !== undefined && status === 'disabled' ? null : '0'\"\n    role=\"button\"\n    [attr.aria-label]=\"textAriaLabel ? textAriaLabel : null\"\n  >\n    <bc-icon *ngIf=\"iconLeft\" class=\"bc-mx-1\" size=\"sm\">\n      {{ iconLeft }}\n    </bc-icon>\n    <span class=\"bc-mx-1\">\n      {{ textElement }}\n    </span>\n    <bc-icon *ngIf=\"iconRight\" class=\"bc-mx-1\" size=\"sm\">\n      {{ iconRight }}\n    </bc-icon>\n  </div>\n</div>\n\n<div\n  *ngIf=\"typeTag === 'filter'\"\n  class=\"bc-tag-content\"\n  [id]=\"componentId\"\n  [attr.widthtag]=\"widthTag\"\n  [attr.aria-label]=\"textAriaLabel\"\n>\n  <div\n    [ngClass]=\"getClassFilter()\"\n    [attr.tabindex]=\"status !== undefined && status === 'disabled' ? null : '0'\"\n    role=\"button\"\n    [attr.icondelete]=\"iconDelete\"\n    [attr.iconadd]=\"iconAdd\"\n  >\n    <bc-icon *ngIf=\"iconLeft\" class=\"bc-mx-1\" size=\"sm\">\n      {{ iconLeft }}\n    </bc-icon>\n    <p class=\"bc-mx-1\">\n      {{ textElement }}\n    </p>\n  </div>\n</div>\n\n<div\n  *ngIf=\"typeTag === 'dropdown' && showOptionSelected == true\"\n  class=\"bc-tag-content bc-tag-dropdown-content\"\n  [id]=\"componentId\"\n  [attr.widthtag]=\"widthTag\"\n  [attr.aria-label]=\"textAriaLabel\"\n  [attr.aria-controls]=\"componentId + '-list'\"\n  selectionTag=\"true\"\n  showOptionSelected=\"true\"\n>\n  <bc-float-menu>\n    <div class=\"bc-tag-content\">\n      <section\n        [ngClass]=\"getClassButton()\"\n        class=\"bc-tag-dropdown bc-float-menu-toggle\"\n        [attr.tabindex]=\"\n          status !== undefined && status === 'disabled' ? null : '0'\n        \"\n      >\n        <bc-icon\n          *ngIf=\"iconLeft\"\n          class=\"bc-float-menu-toggle bc-mx-1\"\n          size=\"sm\"\n        >\n          {{ iconLeft }}\n        </bc-icon>\n        <span class=\"bc-float-menu-toggle bc-mx-1 bc-tag-dropdown-text\">\n          {{ textElement }}\n        </span>\n        <bc-icon\n          class=\"bc-mx-1 bc-float-menu-toggle bc-icon-tag-toggle\"\n          aria-hidden=\"false\"\n          aria-label=\"contraido\"\n          size=\"xs\"\n        >\n          arrow2-down\n        </bc-icon>\n      </section>\n      <div class=\"bc-float-menu\">\n        <section class=\"bc-float-menu-content\">\n          <ul></ul>\n        </section>\n      </div>\n    </div>\n  </bc-float-menu>\n</div>\n\n<div\n  *ngIf=\"typeTag === 'dropdown' && showOptionSelected == false\"\n  class=\"bc-tag-content bc-tag-dropdown-content\"\n  [id]=\"componentId\"\n  [attr.widthtag]=\"widthTag\"\n  [attr.aria-label]=\"textAriaLabel\"\n  [attr.aria-controls]=\"componentId + '-list'\"\n  selectionTag=\"true\"\n  showOptionSelected=\"false\"\n>\n  <bc-float-menu>\n    <div class=\"bc-tag-content\">\n      <section\n        [ngClass]=\"getClassButton()\"\n        class=\"bc-tag-dropdown bc-float-menu-toggle\"\n        [attr.tabindex]=\"\n          status !== undefined && status === 'disabled' ? null : '0'\n        \"\n      >\n        <bc-icon class=\"bc-float-menu-toggle bc-mx-1\" size=\"sm\">\n          {{ iconLeft }}\n        </bc-icon>\n        <span class=\"bc-float-menu-toggle bc-mx-1 bc-tag-dropdown-text\">\n          {{ textElement }}\n        </span>\n        <bc-icon\n          class=\"bc-mx-1 bc-float-menu-toggle bc-icon-tag-toggle\"\n          aria-hidden=\"false\"\n          aria-label=\"contraido\"\n          size=\"xs\"\n        >\n          arrow2-down\n        </bc-icon>\n      </section>\n      <div class=\"bc-float-menu\">\n        <section class=\"bc-float-menu-content\">\n          <ul></ul>\n        </section>\n      </div>\n    </div>\n  </bc-float-menu>\n</div>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }, { type: i3.BcFloatMenuComponent, selector: "bc-float-menu", inputs: ["componentId", "checkbox", "radioButtons", "options", "arrowCenter", "arrowLeft", "arrowRight", "positionRight", "positionLeft", "selectedIcon", "row", "data", "havePreloader", "numOfpreloaders", "floatMenuWidth"], outputs: ["onChange", "changed"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-tag', styles: [], template: "<div\n  *ngIf=\"typeTag === 'button'\"\n  class=\"bc-tag-content\"\n  [id]=\"componentId\"\n  [attr.widthtag]=\"widthTag\"\n  [attr.aria-hidden]=\"status === 'disabled' ? 'true' : null\"\n  (click)=\"handleClick($event)\"\n>\n  <div\n    [ngClass]=\"getClassButton()\"\n    [attr.tabindex]=\"status !== undefined && status === 'disabled' ? null : '0'\"\n    role=\"button\"\n    [attr.aria-label]=\"textAriaLabel ? textAriaLabel : null\"\n  >\n    <bc-icon *ngIf=\"iconLeft\" class=\"bc-mx-1\" size=\"sm\">\n      {{ iconLeft }}\n    </bc-icon>\n    <span class=\"bc-mx-1\">\n      {{ textElement }}\n    </span>\n    <bc-icon *ngIf=\"iconRight\" class=\"bc-mx-1\" size=\"sm\">\n      {{ iconRight }}\n    </bc-icon>\n  </div>\n</div>\n\n<div\n  *ngIf=\"typeTag === 'filter'\"\n  class=\"bc-tag-content\"\n  [id]=\"componentId\"\n  [attr.widthtag]=\"widthTag\"\n  [attr.aria-label]=\"textAriaLabel\"\n>\n  <div\n    [ngClass]=\"getClassFilter()\"\n    [attr.tabindex]=\"status !== undefined && status === 'disabled' ? null : '0'\"\n    role=\"button\"\n    [attr.icondelete]=\"iconDelete\"\n    [attr.iconadd]=\"iconAdd\"\n  >\n    <bc-icon *ngIf=\"iconLeft\" class=\"bc-mx-1\" size=\"sm\">\n      {{ iconLeft }}\n    </bc-icon>\n    <p class=\"bc-mx-1\">\n      {{ textElement }}\n    </p>\n  </div>\n</div>\n\n<div\n  *ngIf=\"typeTag === 'dropdown' && showOptionSelected == true\"\n  class=\"bc-tag-content bc-tag-dropdown-content\"\n  [id]=\"componentId\"\n  [attr.widthtag]=\"widthTag\"\n  [attr.aria-label]=\"textAriaLabel\"\n  [attr.aria-controls]=\"componentId + '-list'\"\n  selectionTag=\"true\"\n  showOptionSelected=\"true\"\n>\n  <bc-float-menu>\n    <div class=\"bc-tag-content\">\n      <section\n        [ngClass]=\"getClassButton()\"\n        class=\"bc-tag-dropdown bc-float-menu-toggle\"\n        [attr.tabindex]=\"\n          status !== undefined && status === 'disabled' ? null : '0'\n        \"\n      >\n        <bc-icon\n          *ngIf=\"iconLeft\"\n          class=\"bc-float-menu-toggle bc-mx-1\"\n          size=\"sm\"\n        >\n          {{ iconLeft }}\n        </bc-icon>\n        <span class=\"bc-float-menu-toggle bc-mx-1 bc-tag-dropdown-text\">\n          {{ textElement }}\n        </span>\n        <bc-icon\n          class=\"bc-mx-1 bc-float-menu-toggle bc-icon-tag-toggle\"\n          aria-hidden=\"false\"\n          aria-label=\"contraido\"\n          size=\"xs\"\n        >\n          arrow2-down\n        </bc-icon>\n      </section>\n      <div class=\"bc-float-menu\">\n        <section class=\"bc-float-menu-content\">\n          <ul></ul>\n        </section>\n      </div>\n    </div>\n  </bc-float-menu>\n</div>\n\n<div\n  *ngIf=\"typeTag === 'dropdown' && showOptionSelected == false\"\n  class=\"bc-tag-content bc-tag-dropdown-content\"\n  [id]=\"componentId\"\n  [attr.widthtag]=\"widthTag\"\n  [attr.aria-label]=\"textAriaLabel\"\n  [attr.aria-controls]=\"componentId + '-list'\"\n  selectionTag=\"true\"\n  showOptionSelected=\"false\"\n>\n  <bc-float-menu>\n    <div class=\"bc-tag-content\">\n      <section\n        [ngClass]=\"getClassButton()\"\n        class=\"bc-tag-dropdown bc-float-menu-toggle\"\n        [attr.tabindex]=\"\n          status !== undefined && status === 'disabled' ? null : '0'\n        \"\n      >\n        <bc-icon class=\"bc-float-menu-toggle bc-mx-1\" size=\"sm\">\n          {{ iconLeft }}\n        </bc-icon>\n        <span class=\"bc-float-menu-toggle bc-mx-1 bc-tag-dropdown-text\">\n          {{ textElement }}\n        </span>\n        <bc-icon\n          class=\"bc-mx-1 bc-float-menu-toggle bc-icon-tag-toggle\"\n          aria-hidden=\"false\"\n          aria-label=\"contraido\"\n          size=\"xs\"\n        >\n          arrow2-down\n        </bc-icon>\n      </section>\n      <div class=\"bc-float-menu\">\n        <section class=\"bc-float-menu-content\">\n          <ul></ul>\n        </section>\n      </div>\n    </div>\n  </bc-float-menu>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], iconLeft: [{
                type: Input
            }], iconRight: [{
                type: Input
            }], iconAdd: [{
                type: Input
            }], iconDelete: [{
                type: Input
            }], textElement: [{
                type: Input
            }], status: [{
                type: Input
            }], typeTag: [{
                type: Input
            }], values: [{
                type: Input
            }], typeButtonTag: [{
                type: Input
            }], textAriaLabel: [{
                type: Input
            }], widthTag: [{
                type: Input
            }], showOptionSelected: [{
                type: Input
            }], valueOutput: [{
                type: Output
            }], onClickButton: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWcvYmMtdGFnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWcvYmMtdGFnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFHckU7Ozs7O0dBS0c7QUFNSCxNQUFNLE9BQU8sY0FBYztJQTRHekIsWUFDVSxVQUFzQixFQUN0QixlQUFnQztRQURoQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQXJHMUM7Ozs7V0FJRztRQUNNLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFdkI7Ozs7V0FJRztRQUNNLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFeEI7Ozs7V0FJRztRQUNNLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFFMUI7Ozs7V0FJRztRQUNNLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFFN0I7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBVTFCOzs7O1dBSUc7UUFDTSxZQUFPLEdBQXFDLFFBQVEsQ0FBQztRQVM5RDs7OztXQUlHO1FBQ00sa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFTNUI7Ozs7V0FJRztRQUNNLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFFM0I7Ozs7V0FJRztRQUNNLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUU1Qzs7Ozs7V0FLRztRQUNPLGdCQUFXLEdBQW9DLElBQUksWUFBWSxFQUV0RSxDQUFDO1FBRU0sa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQU9wRSxD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QUssRUFBRSxDQUFDO0lBQzdCLENBQUM7OzJHQXRMVSxjQUFjOytGQUFkLGNBQWMsK2NDdkIzQixnM0hBMElBOzJGRG5IYSxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFFBQVEsVUFFVixFQUFFOytIQVNELFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSztnQkFPRyxTQUFTO3NCQUFqQixLQUFLO2dCQU9HLE9BQU87c0JBQWYsS0FBSztnQkFPRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsTUFBTTtzQkFBZCxLQUFLO2dCQU9HLE9BQU87c0JBQWYsS0FBSztnQkFPRyxNQUFNO3NCQUFkLEtBQUs7Z0JBT0csYUFBYTtzQkFBckIsS0FBSztnQkFPRyxhQUFhO3NCQUFyQixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csa0JBQWtCO3NCQUExQixLQUFLO2dCQVFJLFdBQVc7c0JBQXBCLE1BQU07Z0JBSUcsYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT3V0cHV0LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNUYWdCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbi8qKlxuICogQ29tcG9uZW50ZSBUYWdcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNUYWdDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy10YWcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBCY1RhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY2Zvb3RlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZztcblxuICAvKipcbiAgICogSWNvbm8gZGVsIGJvdMOzbiBpenF1aWVyZG8uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhZ0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaWNvbkxlZnQgPSAnJztcblxuICAvKipcbiAgICogSWNvbm8gZGVsIGJvdMOzbiBkZXJlY2hvIHBhcmEgdHlwZSB0YWdcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFnQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpY29uUmlnaHQgPSAnJztcblxuICAvKipcbiAgICogSWNvbm8gJysnIGRlbCBib3TDs24gZGVyZWNobyBwYXJhIGVsIGZpbHRybyAoaW5kaWNhIGFkaWNpw7NuKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFnQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpY29uQWRkID0gJ3RydWUnO1xuXG4gIC8qKlxuICAgKiBJY29ubyAneCcgZGVsIGJvdMOzbiBkZXJlY2hvIHBhcmEgZWwgZmlsdHJvIChpbmRpY2EgZWxpbWluYWNpw7NuKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFnQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpY29uRGVsZXRlID0gJ3RydWUnO1xuXG4gIC8qKlxuICAgKiBUZXh0byBwcmluY2lwYWwgZGVsIGVsZW1lbnRvLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUYWdDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRleHRFbGVtZW50ID0gJyc7XG5cbiAgLyoqXG4gICAqIFByb3BpZWRhZCBkZSBlc3RhZG8gcXVlIGluZGljYSBzaSBlc3TDoSBzZWxlY2Npb25hZG8gbyBkZXNoYWJpbGl0YWRvLlxuICAgKlxuICAgKiBAdHlwZSB7KCdkaXNhYmxlZCcgfCAnc2VsZWN0ZWQnKX1cbiAgICogQG1lbWJlcm9mIEJjVGFnQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXM6ICdkaXNhYmxlZCcgfCAnc2VsZWN0ZWQnO1xuXG4gIC8qKlxuICAgKiBQcm9waWVkYWQgcXVlIGlkZW50aWZpY2EgZWwgdGlwbyBkZSBib3TDs24gcXVlIHNlIHZhIGEgdXRpbGl6YXIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhZ0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZVRhZzogJ2J1dHRvbicgfCAnZmlsdGVyJyB8ICdkcm9wZG93bicgPSAnYnV0dG9uJztcblxuICAvKipcbiAgICogT2JqZXRvIGVuY2FyZ2FkbyBkZSBsbGVuYXIgbGFzIGxpc3RhcyBjb24gbGFzIHByb3BpZWRhZGVzIGRlZmluaWRhcy5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFnQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZXM6IEFycmF5PHsgc3BhblRleHQ6IHN0cmluZzsgdmFsdWU6IGFueTsgaWNvbk5hbWU/OiBzdHJpbmcgfT47XG5cbiAgLyoqXG4gICAqIFRpcG8gZGUgb3BjaW9uZXMsIHBvciBkZWZhdWx0IGVzIGVsIGJvdMOzbiBwcmltYXJpbyBwYXJhbWV0cm8gZGUgZW50cmFkYSAnc2Vjb25kYXJ5Jy5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFnQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlQnV0dG9uVGFnID0gJyc7XG5cbiAgLyoqXG4gICAqIFRleHRvIGRlIGFjY2VzaWJpbGlkYWQgZGVsIGVsZW1lbnRvLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUYWdDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRleHRBcmlhTGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogQW5jaG8gZW4gcMOteGVsZXMocHgpIGRlbCB0YWcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhZ0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgd2lkdGhUYWcgPSAnYXV0byc7XG5cbiAgLyoqXG4gICAqIFZlciBvcGNpb24gc2VsZWNjaW9uYWRhXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhZ0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2hvd09wdGlvblNlbGVjdGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogU2FsaWRhIGRlbCB2YWxvciBhY3R1YWwgZGVsIGNvbXBvbmVudGUuXG4gICAqXG4gICAqIEB0eXBlIHsoRXZlbnRFbWl0dGVyPHN0cmluZyB8IHN0cmluZ1tdPil9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0U2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgdmFsdWVPdXRwdXQ6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIHN0cmluZyB8IHN0cmluZ1tdXG4gID4oKTtcblxuICBAT3V0cHV0KCkgb25DbGlja0J1dHRvbjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGJjVGFnQmVoYXZpb3I6IEJjVGFnQmVoYXZpb3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSB0aGlzLmNvbXBvbmVudElkID8/IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlVGFnKSB7XG4gICAgICBjYXNlICdidXR0b24nOlxuICAgICAgICB0aGlzLmluaXRCdXR0b24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWx0ZXInOlxuICAgICAgICB0aGlzLmluaXRGaWx0ZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcm9wZG93bic6XG4gICAgICAgIHRoaXMuaW5pdERyb3Bkb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGlja0J1dHRvbigpIHtcbiAgICB0aGlzLm9uQ2xpY2tCdXR0b24uZW1pdCgpO1xuICB9XG5cbiAgZ2V0Q2xhc3NCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMudHlwZUJ1dHRvblRhZyA9PT0gJ3NlY29uZGFyeScpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rpc2FibGVkJ1xuICAgICAgICA/ICdiYy10YWctc2Vjb25kYXJ5LWRpc2FibGVkJ1xuICAgICAgICA6ICdiYy10YWctc2Vjb25kYXJ5JztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZGlzYWJsZWQnID8gJ2JjLXRhZy1kaXNhYmxlZCcgOiAnYmMtdGFnJztcbiAgfVxuXG4gIGdldENsYXNzRmlsdGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rpc2FibGVkJ1xuICAgICAgPyAnYmMtdGFnLWZpbHRlci1kaXNhYmxlZCdcbiAgICAgIDogJ2JjLXRhZy1maWx0ZXInO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPVxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJidXR0b25cIl0nKTtcbiAgICBidXR0b25FbGVtZW50Lm9uY2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5iY1RhZ0JlaGF2aW9yID0gbmV3IEJjVGFnQmVoYXZpb3IoKTtcbiAgICB0aGlzLmJjVGFnQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY1RhZ0JlaGF2aW9yLnNldFVwKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGaWx0ZXIoKSB7XG4gICAgdGhpcy5iY1RhZ0JlaGF2aW9yID0gbmV3IEJjVGFnQmVoYXZpb3IoKTtcbiAgICB0aGlzLmJjVGFnQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY1RhZ0JlaGF2aW9yLm91dHB1dEZ1bmN0aW9uID0gKGRhdGEpID0+IHtcbiAgICAgIHRoaXMudmFsdWVPdXRwdXQuZW1pdChkYXRhKTtcbiAgICB9O1xuICAgIHRoaXMuYmNUYWdCZWhhdmlvci5zZXRVcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RHJvcGRvd24oKSB7XG4gICAgdGhpcy5iY1RhZ0JlaGF2aW9yID0gbmV3IEJjVGFnQmVoYXZpb3IoKTtcbiAgICB0aGlzLmJjVGFnQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY1RhZ0JlaGF2aW9yLm91dHB1dEZ1bmN0aW9uID0gKGRhdGEpID0+IHtcbiAgICAgIHRoaXMudmFsdWVPdXRwdXQuZW1pdChkYXRhKTtcbiAgICB9O1xuICAgIHRoaXMuYmNUYWdCZWhhdmlvci5zZXRJdGVtcyh0aGlzLnZhbHVlcyk7XG4gICAgdGhpcy5iY1RhZ0JlaGF2aW9yLnNldFVwKCk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgKm5nSWY9XCJ0eXBlVGFnID09PSAnYnV0dG9uJ1wiXG4gIGNsYXNzPVwiYmMtdGFnLWNvbnRlbnRcIlxuICBbaWRdPVwiY29tcG9uZW50SWRcIlxuICBbYXR0ci53aWR0aHRhZ109XCJ3aWR0aFRhZ1wiXG4gIFthdHRyLmFyaWEtaGlkZGVuXT1cInN0YXR1cyA9PT0gJ2Rpc2FibGVkJyA/ICd0cnVlJyA6IG51bGxcIlxuICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiXG4+XG4gIDxkaXZcbiAgICBbbmdDbGFzc109XCJnZXRDbGFzc0J1dHRvbigpXCJcbiAgICBbYXR0ci50YWJpbmRleF09XCJzdGF0dXMgIT09IHVuZGVmaW5lZCAmJiBzdGF0dXMgPT09ICdkaXNhYmxlZCcgPyBudWxsIDogJzAnXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInRleHRBcmlhTGFiZWwgPyB0ZXh0QXJpYUxhYmVsIDogbnVsbFwiXG4gID5cbiAgICA8YmMtaWNvbiAqbmdJZj1cImljb25MZWZ0XCIgY2xhc3M9XCJiYy1teC0xXCIgc2l6ZT1cInNtXCI+XG4gICAgICB7eyBpY29uTGVmdCB9fVxuICAgIDwvYmMtaWNvbj5cbiAgICA8c3BhbiBjbGFzcz1cImJjLW14LTFcIj5cbiAgICAgIHt7IHRleHRFbGVtZW50IH19XG4gICAgPC9zcGFuPlxuICAgIDxiYy1pY29uICpuZ0lmPVwiaWNvblJpZ2h0XCIgY2xhc3M9XCJiYy1teC0xXCIgc2l6ZT1cInNtXCI+XG4gICAgICB7eyBpY29uUmlnaHQgfX1cbiAgICA8L2JjLWljb24+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXZcbiAgKm5nSWY9XCJ0eXBlVGFnID09PSAnZmlsdGVyJ1wiXG4gIGNsYXNzPVwiYmMtdGFnLWNvbnRlbnRcIlxuICBbaWRdPVwiY29tcG9uZW50SWRcIlxuICBbYXR0ci53aWR0aHRhZ109XCJ3aWR0aFRhZ1wiXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwidGV4dEFyaWFMYWJlbFwiXG4+XG4gIDxkaXZcbiAgICBbbmdDbGFzc109XCJnZXRDbGFzc0ZpbHRlcigpXCJcbiAgICBbYXR0ci50YWJpbmRleF09XCJzdGF0dXMgIT09IHVuZGVmaW5lZCAmJiBzdGF0dXMgPT09ICdkaXNhYmxlZCcgPyBudWxsIDogJzAnXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICBbYXR0ci5pY29uZGVsZXRlXT1cImljb25EZWxldGVcIlxuICAgIFthdHRyLmljb25hZGRdPVwiaWNvbkFkZFwiXG4gID5cbiAgICA8YmMtaWNvbiAqbmdJZj1cImljb25MZWZ0XCIgY2xhc3M9XCJiYy1teC0xXCIgc2l6ZT1cInNtXCI+XG4gICAgICB7eyBpY29uTGVmdCB9fVxuICAgIDwvYmMtaWNvbj5cbiAgICA8cCBjbGFzcz1cImJjLW14LTFcIj5cbiAgICAgIHt7IHRleHRFbGVtZW50IH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2XG4gICpuZ0lmPVwidHlwZVRhZyA9PT0gJ2Ryb3Bkb3duJyAmJiBzaG93T3B0aW9uU2VsZWN0ZWQgPT0gdHJ1ZVwiXG4gIGNsYXNzPVwiYmMtdGFnLWNvbnRlbnQgYmMtdGFnLWRyb3Bkb3duLWNvbnRlbnRcIlxuICBbaWRdPVwiY29tcG9uZW50SWRcIlxuICBbYXR0ci53aWR0aHRhZ109XCJ3aWR0aFRhZ1wiXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwidGV4dEFyaWFMYWJlbFwiXG4gIFthdHRyLmFyaWEtY29udHJvbHNdPVwiY29tcG9uZW50SWQgKyAnLWxpc3QnXCJcbiAgc2VsZWN0aW9uVGFnPVwidHJ1ZVwiXG4gIHNob3dPcHRpb25TZWxlY3RlZD1cInRydWVcIlxuPlxuICA8YmMtZmxvYXQtbWVudT5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtdGFnLWNvbnRlbnRcIj5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIFtuZ0NsYXNzXT1cImdldENsYXNzQnV0dG9uKClcIlxuICAgICAgICBjbGFzcz1cImJjLXRhZy1kcm9wZG93biBiYy1mbG9hdC1tZW51LXRvZ2dsZVwiXG4gICAgICAgIFthdHRyLnRhYmluZGV4XT1cIlxuICAgICAgICAgIHN0YXR1cyAhPT0gdW5kZWZpbmVkICYmIHN0YXR1cyA9PT0gJ2Rpc2FibGVkJyA/IG51bGwgOiAnMCdcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGJjLWljb25cbiAgICAgICAgICAqbmdJZj1cImljb25MZWZ0XCJcbiAgICAgICAgICBjbGFzcz1cImJjLWZsb2F0LW1lbnUtdG9nZ2xlIGJjLW14LTFcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBpY29uTGVmdCB9fVxuICAgICAgICA8L2JjLWljb24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmMtZmxvYXQtbWVudS10b2dnbGUgYmMtbXgtMSBiYy10YWctZHJvcGRvd24tdGV4dFwiPlxuICAgICAgICAgIHt7IHRleHRFbGVtZW50IH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGJjLWljb25cbiAgICAgICAgICBjbGFzcz1cImJjLW14LTEgYmMtZmxvYXQtbWVudS10b2dnbGUgYmMtaWNvbi10YWctdG9nZ2xlXCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY29udHJhaWRvXCJcbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICA+XG4gICAgICAgICAgYXJyb3cyLWRvd25cbiAgICAgICAgPC9iYy1pY29uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cImJjLWZsb2F0LW1lbnVcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1mbG9hdC1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICA8dWw+PC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvYmMtZmxvYXQtbWVudT5cbjwvZGl2PlxuXG48ZGl2XG4gICpuZ0lmPVwidHlwZVRhZyA9PT0gJ2Ryb3Bkb3duJyAmJiBzaG93T3B0aW9uU2VsZWN0ZWQgPT0gZmFsc2VcIlxuICBjbGFzcz1cImJjLXRhZy1jb250ZW50IGJjLXRhZy1kcm9wZG93bi1jb250ZW50XCJcbiAgW2lkXT1cImNvbXBvbmVudElkXCJcbiAgW2F0dHIud2lkdGh0YWddPVwid2lkdGhUYWdcIlxuICBbYXR0ci5hcmlhLWxhYmVsXT1cInRleHRBcmlhTGFiZWxcIlxuICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImNvbXBvbmVudElkICsgJy1saXN0J1wiXG4gIHNlbGVjdGlvblRhZz1cInRydWVcIlxuICBzaG93T3B0aW9uU2VsZWN0ZWQ9XCJmYWxzZVwiXG4+XG4gIDxiYy1mbG9hdC1tZW51PlxuICAgIDxkaXYgY2xhc3M9XCJiYy10YWctY29udGVudFwiPlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NCdXR0b24oKVwiXG4gICAgICAgIGNsYXNzPVwiYmMtdGFnLWRyb3Bkb3duIGJjLWZsb2F0LW1lbnUtdG9nZ2xlXCJcbiAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiXG4gICAgICAgICAgc3RhdHVzICE9PSB1bmRlZmluZWQgJiYgc3RhdHVzID09PSAnZGlzYWJsZWQnID8gbnVsbCA6ICcwJ1xuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8YmMtaWNvbiBjbGFzcz1cImJjLWZsb2F0LW1lbnUtdG9nZ2xlIGJjLW14LTFcIiBzaXplPVwic21cIj5cbiAgICAgICAgICB7eyBpY29uTGVmdCB9fVxuICAgICAgICA8L2JjLWljb24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmMtZmxvYXQtbWVudS10b2dnbGUgYmMtbXgtMSBiYy10YWctZHJvcGRvd24tdGV4dFwiPlxuICAgICAgICAgIHt7IHRleHRFbGVtZW50IH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGJjLWljb25cbiAgICAgICAgICBjbGFzcz1cImJjLW14LTEgYmMtZmxvYXQtbWVudS10b2dnbGUgYmMtaWNvbi10YWctdG9nZ2xlXCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY29udHJhaWRvXCJcbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICA+XG4gICAgICAgICAgYXJyb3cyLWRvd25cbiAgICAgICAgPC9iYy1pY29uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cImJjLWZsb2F0LW1lbnVcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1mbG9hdC1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICA8dWw+PC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvYmMtZmxvYXQtbWVudT5cbjwvZGl2PlxuIl19