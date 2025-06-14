import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcTagBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@bancolombia/design-system-web/bc-float-menu';
import { BcFloatMenuModule } from '@bancolombia/design-system-web/bc-float-menu';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';

/**
 * Componente Tag
 *
 * @export
 * @class BcTagComponent
 */
class BcTagComponent {
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
        var _a;
        this.componentId = (_a = this.componentId) !== null && _a !== void 0 ? _a : this.bcHelperService.getId(this);
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

/**
 * Importa la directiva de labels con
 * los diseños de Bancolombia S.A.
 * @package bc-tag, bc-label
 * @Component bc-tag
 * @param icon = Icono que se usara en el componente
 * @param {boolean} dismissible = Indica si se tendrá el icono de x al lado derecho o no
 * @param status = selected (seleccionado) || disabled (deshabilitado)
 * @example <bc-tag icon="calendar-alt" dismissible="true" status="selected">Label</bc-tag>
 * @Directiva bc-tag
 * @param  type Aplica el estilo al label, values [ secondary || info (Default) || alert || error || success ]
 * @example
 *           <label bc-tag type="error">Error</label>
 *
 * @Directiva bc-label
 * @param  theme Tema del label default || dark
 * @param  sizeLabel Tamaño de label default || small
 * @example
 *   <label bc-label sizeLabel="small" theme="dark">Texto del label</label>
 *
 * @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
class BcTagModule {
}
BcTagModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTagModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagModule, declarations: [BcTagComponent], imports: [BcIconModule, BcButtonModule, CommonModule, BcFloatMenuModule], exports: [BcTagComponent] });
BcTagModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagModule, imports: [[BcIconModule, BcButtonModule, CommonModule, BcFloatMenuModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcTagComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule, BcFloatMenuModule],
                    exports: [BcTagComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcTagComponent, BcTagModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-tag.mjs.map
