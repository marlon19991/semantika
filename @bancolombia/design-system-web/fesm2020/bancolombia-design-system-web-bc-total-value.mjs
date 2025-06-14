import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcTotalValueBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@bancolombia/design-system-web/bc-tooltip';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';

/**
 * Enumerable para fondos del componte
 *
 * @export
 * @interface BcTotalValueBackgroundColor
 */
var BcTotalValueBackgroundColor;
(function (BcTotalValueBackgroundColor) {
    BcTotalValueBackgroundColor["BG_BRAND_PRIMARY_PAIR_01_00"] = "bc-bg-brand-primary-pair-01-00";
    BcTotalValueBackgroundColor["BG_BRAND_N_PAIR_50_900"] = "bc-bg-brand-N-P-pair-50-900";
})(BcTotalValueBackgroundColor || (BcTotalValueBackgroundColor = {}));
/**
 * Enumerable para espacios entre columnas
 *
 * @export
 * @interface BcTotalValueCellSpacingGap
 */
var BcTotalValueCellSpacingGap;
(function (BcTotalValueCellSpacingGap) {
    BcTotalValueCellSpacingGap["GAP_01"] = "bc-total-value-gap-01";
    BcTotalValueCellSpacingGap["GAP_02"] = "bc-total-value-gap-02";
    BcTotalValueCellSpacingGap["GAP_03"] = "bc-total-value-gap-03";
    BcTotalValueCellSpacingGap["GAP_04"] = "bc-total-value-gap-04";
})(BcTotalValueCellSpacingGap || (BcTotalValueCellSpacingGap = {}));

/**
 * Componente TotalValue
 * import { BcTotalValueComponent } from '@bancolombia/design-system-web/bc-total-value';
 * @export
 * @class BcTotalValueComponent
 */
class BcTotalValueComponent {
    constructor(bcHelperService, el) {
        this.bcHelperService = bcHelperService;
        this.containerClasses = [];
        this.columns = 0;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcTotalValueComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Todas las columnas con el mismo ancho
         *
         * @type {boolean}
         * @memberof BcTotalValueComponent
         */
        this.allCellsSameWidth = true;
        this.element = el;
        this.bcTotalValueBehavior = new BcTotalValueBehavior();
    }
    /**
     * Background del componente
     *
     * @type {BcTotalValueBackgroundColor}
     * @memberof BcTotalValueComponent
     */
    set backgroundColor(backgroundColor) {
        this._backgroundColor = backgroundColor;
        this.setClasses('backgroundColor', backgroundColor);
    }
    /**
     * Mostrar divider inferior
     *
     * @type {boolean}
     * @memberof BcTotalValueComponent
     */
    set dividerBottom(dividerBottom) {
        this._dividerBottom = dividerBottom;
        const divider = dividerBottom ? 'bc-total-value-container-divider-bottom' : '';
        this.setClasses('dividerBottom', divider);
    }
    /**
     * Espacios entre columnas
     *
     * @type {BcTotalValueCellSpacingGap}
     * @memberof BcTotalValueComponent
     */
    set cellSpacingGap(cellSpacingGap) {
        this._cellSpacingGap = cellSpacingGap;
        this.setClasses('cellSpacingGap', cellSpacingGap);
    }
    /**
     * Objeto para cargar informacion y formato de columnas del componente
     *
     * @type {BcTotalValueObject}
     * @memberof BcTotalValueComponent
     */
    set bcTotalValueObject(data) {
        this.bcTotalValue = data;
        this.columns = this.bcTotalValue.information.data.length - 1;
    }
    ngAfterViewInit() {
        this.setClasses('container', 'bc-total-value-container');
        this.setClasses('cellSpacingGap', this._cellSpacingGap ? this._cellSpacingGap : BcTotalValueCellSpacingGap.GAP_03);
        this.element.nativeElement.setAttribute('id', this.componentId);
        this.bcTotalValueBehavior.setId(this.componentId);
        this.bcTotalValueBehavior.setUp();
    }
    /**
     * Obtiene el string con las clases css para la columna del componente
     *
     * @param {number} index
     * @returns {string}
     * @memberof BcTotalValueComponent
     */
    getColWidthClass(index) {
        const containerClasses = [];
        if (this.allCellsSameWidth) {
            const columns = +!!this.bcTotalValue.complementary + this.bcTotalValue.information.data.length;
            containerClasses.push(`bc-total-value-${columns}-col-width`);
        }
        if (!this.bcTotalValue.information.data[index].optional) {
            containerClasses.push('bc-total-value-cell-information-primary');
        }
        return containerClasses.join(' ');
    }
    /**
     * Obtiene el style width para la columna del componente
     *
     * @param {BcTotalValueColumn} column
     * @returns { width: string }
     * @memberof BcTotalValueComponent
     */
    getColWidthStyle(column) {
        let style = '';
        if (column.fixedWidth) {
            style = column.fixedWidth;
        }
        else if (column.hugContentWidth) {
            style = 'fit-content';
        }
        return { width: style };
    }
    /**
     * Agrega clases css para la columna del componente
     *
     * @param {string} data
     * @param {string} newClass
     * @memberof BcTotalValueComponent
     */
    setClasses(data, newClass) {
        const existingClass = this.containerClasses.find((item) => item.data === data);
        if (existingClass) {
            existingClass.class = newClass;
        }
        else {
            this.containerClasses.push({ data, class: newClass });
        }
        const classes = this.containerClasses.map((item) => item.class);
        this.element.nativeElement.setAttribute('class', classes.join(' '));
    }
}
BcTotalValueComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTotalValueComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcTotalValueComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTotalValueComponent, selector: "tr[bc-total-value]", inputs: { componentId: "componentId", allCellsSameWidth: "allCellsSameWidth", backgroundColor: "backgroundColor", dividerBottom: "dividerBottom", cellSpacingGap: "cellSpacingGap", bcTotalValueObject: "bcTotalValueObject" }, ngImport: i0, template: "<td\n  class=\"bc-total-value bc-total-value-cell-complementary bc-total-value-5-col-width\"\n  *ngIf=\"bcTotalValue?.complementary\"\n  [ngClass]=\"{\n    'bc-total-value-cell-complementary-primary':\n      !bcTotalValue?.complementary.optional\n  }\"\n  [ngStyle]=\"getColWidthStyle(bcTotalValue?.complementary)\"\n>\n  <div class=\"bc-total-value-complementary-label\">\n    <span\n      class=\"bc-total-value-ellipsis\"\n      [ngClass]=\"\n        bcTotalValue?.complementary?.labelFontCssClass ||\n        'bc-total-value-complementary-label-font'\n      \"\n    >\n      {{ bcTotalValue?.complementary?.label.text }}\n    </span>\n    <bc-icon\n      *ngIf=\"bcTotalValue?.complementary?.label.tooltipText as tooltipText\"\n      size=\"sm\"\n      class=\"bc-icon bc-tooltip\"\n      bc-tooltip\n      [bcTooltipPosition]=\"'top'\"\n      [bcTooltipText]=\"tooltipText\"\n    >\n      info\n    </bc-icon>\n  </div>\n  <p\n    [ngClass]=\"\n      bcTotalValue?.complementary?.dataFontCssClass ||\n      'bc-total-value-complementary-data'\n    \"\n  >\n    {{ bcTotalValue?.complementary?.data }}\n  </p>\n</td>\n<td\n  class=\"bc-total-value bc-total-value-cell-information\"\n  *ngFor=\"let info of bcTotalValue.information.data; let i = index\"\n  [ngClass]=\"getColWidthClass(i)\"\n  [ngStyle]=\"getColWidthStyle(info)\"\n>\n  <div class=\"bc-total-value-information-label\">\n    <span\n      class=\"bc-total-value-ellipsis\"\n      [ngClass]=\"\n        bcTotalValue.information.informationLabelFontCssClass ||\n        'bc-total-value-information-label-font'\n      \"\n    >\n      {{ info.label.text }}\n    </span>\n    <bc-icon\n      *ngIf=\"info.label.tooltipText as tooltipText\"\n      size=\"sm\"\n      class=\"bc-icon bc-tooltip\"\n      bc-tooltip\n      [bcTooltipPosition]=\"'top'\"\n      [bcTooltipText]=\"tooltipText\"\n    >\n      info\n    </bc-icon>\n  </div>\n  <p\n    class=\"bc-total-value-information-data\"\n    [ngClass]=\"info.dataFontCssClass || 'bc-total-value-information-data-font'\"\n  >\n    {{ info.data.currency }} {{ info.data.integer }}<span\n      class=\"bc-total-value-information-data-decimal\"\n      *ngIf=\"info.data.decimal\"\n    >{{ info.data.decimal }}</span>\n  </p>\n</td>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i4.BcTooltipDirective, selector: "[bc-tooltip]", inputs: ["bcTooltipPosition", "bcTooltipTitle", "bcTooltipText", "bcTooltipButtonText", "bcTooltipParentElement"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTotalValueComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tr[bc-total-value]', template: "<td\n  class=\"bc-total-value bc-total-value-cell-complementary bc-total-value-5-col-width\"\n  *ngIf=\"bcTotalValue?.complementary\"\n  [ngClass]=\"{\n    'bc-total-value-cell-complementary-primary':\n      !bcTotalValue?.complementary.optional\n  }\"\n  [ngStyle]=\"getColWidthStyle(bcTotalValue?.complementary)\"\n>\n  <div class=\"bc-total-value-complementary-label\">\n    <span\n      class=\"bc-total-value-ellipsis\"\n      [ngClass]=\"\n        bcTotalValue?.complementary?.labelFontCssClass ||\n        'bc-total-value-complementary-label-font'\n      \"\n    >\n      {{ bcTotalValue?.complementary?.label.text }}\n    </span>\n    <bc-icon\n      *ngIf=\"bcTotalValue?.complementary?.label.tooltipText as tooltipText\"\n      size=\"sm\"\n      class=\"bc-icon bc-tooltip\"\n      bc-tooltip\n      [bcTooltipPosition]=\"'top'\"\n      [bcTooltipText]=\"tooltipText\"\n    >\n      info\n    </bc-icon>\n  </div>\n  <p\n    [ngClass]=\"\n      bcTotalValue?.complementary?.dataFontCssClass ||\n      'bc-total-value-complementary-data'\n    \"\n  >\n    {{ bcTotalValue?.complementary?.data }}\n  </p>\n</td>\n<td\n  class=\"bc-total-value bc-total-value-cell-information\"\n  *ngFor=\"let info of bcTotalValue.information.data; let i = index\"\n  [ngClass]=\"getColWidthClass(i)\"\n  [ngStyle]=\"getColWidthStyle(info)\"\n>\n  <div class=\"bc-total-value-information-label\">\n    <span\n      class=\"bc-total-value-ellipsis\"\n      [ngClass]=\"\n        bcTotalValue.information.informationLabelFontCssClass ||\n        'bc-total-value-information-label-font'\n      \"\n    >\n      {{ info.label.text }}\n    </span>\n    <bc-icon\n      *ngIf=\"info.label.tooltipText as tooltipText\"\n      size=\"sm\"\n      class=\"bc-icon bc-tooltip\"\n      bc-tooltip\n      [bcTooltipPosition]=\"'top'\"\n      [bcTooltipText]=\"tooltipText\"\n    >\n      info\n    </bc-icon>\n  </div>\n  <p\n    class=\"bc-total-value-information-data\"\n    [ngClass]=\"info.dataFontCssClass || 'bc-total-value-information-data-font'\"\n  >\n    {{ info.data.currency }} {{ info.data.integer }}<span\n      class=\"bc-total-value-information-data-decimal\"\n      *ngIf=\"info.data.decimal\"\n    >{{ info.data.decimal }}</span>\n  </p>\n</td>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], allCellsSameWidth: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], dividerBottom: [{
                type: Input
            }], cellSpacingGap: [{
                type: Input
            }], bcTotalValueObject: [{
                type: Input
            }] } });

class BcTotalValueModule {
}
BcTotalValueModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTotalValueModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTotalValueModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTotalValueModule, declarations: [BcTotalValueComponent], imports: [CommonModule, BcIconModule, BcTooltipModule], exports: [BcTotalValueComponent] });
BcTotalValueModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTotalValueModule, imports: [[CommonModule, BcIconModule, BcTooltipModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTotalValueModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcTotalValueComponent],
                    imports: [CommonModule, BcIconModule, BcTooltipModule],
                    exports: [BcTotalValueComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcTotalValueBackgroundColor, BcTotalValueCellSpacingGap, BcTotalValueComponent, BcTotalValueModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-total-value.mjs.map
