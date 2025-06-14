import { Component, Input } from '@angular/core';
import { BcTotalValueCellSpacingGap, } from './bc-total-value-interfaces';
import { BcTotalValueBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@angular/common";
import * as i4 from "@bancolombia/design-system-web/bc-tooltip";
/**
 * Componente TotalValue
 * import { BcTotalValueComponent } from '@bancolombia/design-system-web/bc-total-value';
 * @export
 * @class BcTotalValueComponent
 */
export class BcTotalValueComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdG90YWwtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXRvdGFsLXZhbHVlL2JjLXRvdGFsLXZhbHVlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10b3RhbC12YWx1ZS9iYy10b3RhbC12YWx1ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUdMLDBCQUEwQixHQUUzQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFFNUU7Ozs7O0dBS0c7QUFLSCxNQUFNLE9BQU8scUJBQXFCO0lBd0VoQyxZQUFvQixlQUFnQyxFQUFFLEVBQWM7UUFBaEQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBdEVwRCxxQkFBZ0IsR0FBc0MsRUFBRSxDQUFDO1FBQ3pELFlBQU8sR0FBVyxDQUFDLENBQUM7UUFPcEI7Ozs7O1dBS0c7UUFDTSxnQkFBVyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhFOzs7OztXQUtHO1FBQ00sc0JBQWlCLEdBQVksSUFBSSxDQUFDO1FBaUR6QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFqREQ7Ozs7O09BS0c7SUFDSCxJQUFhLGVBQWUsQ0FBQyxlQUE0QztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDdEQs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QUMvRSxJQUFJLGFBQWEsRUFBRTtZQUNqQixhQUFhLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN2RDtRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOztrSEExSVUscUJBQXFCO3NHQUFyQixxQkFBcUIsMFJDcEJsQyxxc0VBNEVBOzJGRHhEYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0Usb0JBQW9COytIQW1CckIsV0FBVztzQkFBbkIsS0FBSztnQkFRRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBUU8sZUFBZTtzQkFBM0IsS0FBSztnQkFXTyxhQUFhO3NCQUF6QixLQUFLO2dCQWFGLGNBQWM7c0JBRGpCLEtBQUs7Z0JBWU8sa0JBQWtCO3NCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuaW1wb3J0IHtcbiAgQmNUb3RhbFZhbHVlT2JqZWN0LFxuICBCY1RvdGFsVmFsdWVDb2x1bW4sXG4gIEJjVG90YWxWYWx1ZUNlbGxTcGFjaW5nR2FwLFxuICBCY1RvdGFsVmFsdWVCYWNrZ3JvdW5kQ29sb3IsXG59IGZyb20gJy4vYmMtdG90YWwtdmFsdWUtaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBCY1RvdGFsVmFsdWVCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50ZSBUb3RhbFZhbHVlXG4gKiBpbXBvcnQgeyBCY1RvdGFsVmFsdWVDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtdG90YWwtdmFsdWUnO1xuICogQGV4cG9ydFxuICogQGNsYXNzIEJjVG90YWxWYWx1ZUNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltiYy10b3RhbC12YWx1ZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtdG90YWwtdmFsdWUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY1RvdGFsVmFsdWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgYmNUb3RhbFZhbHVlQmVoYXZpb3I6IEJjVG90YWxWYWx1ZUJlaGF2aW9yO1xuICBjb250YWluZXJDbGFzc2VzOiB7IGRhdGE6IHN0cmluZzsgY2xhc3M6IHN0cmluZyB9W10gPSBbXTtcbiAgY29sdW1uczogbnVtYmVyID0gMDtcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgYmNUb3RhbFZhbHVlOiBCY1RvdGFsVmFsdWVPYmplY3Q7XG4gIF9iYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgX2RpdmlkZXJCb3R0b206IGJvb2xlYW47XG4gIF9jZWxsU3BhY2luZ0dhcDogQmNUb3RhbFZhbHVlQ2VsbFNwYWNpbmdHYXA7XG5cbiAgLyoqXG4gICAqIElkIGRlbCBlbGVtZW50by5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjVG90YWxWYWx1ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBUb2RhcyBsYXMgY29sdW1uYXMgY29uIGVsIG1pc21vIGFuY2hvXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNUb3RhbFZhbHVlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBhbGxDZWxsc1NhbWVXaWR0aDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJhY2tncm91bmQgZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge0JjVG90YWxWYWx1ZUJhY2tncm91bmRDb2xvcn1cbiAgICogQG1lbWJlcm9mIEJjVG90YWxWYWx1ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2V0IGJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3I6IEJjVG90YWxWYWx1ZUJhY2tncm91bmRDb2xvcikge1xuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLnNldENsYXNzZXMoJ2JhY2tncm91bmRDb2xvcicsIGJhY2tncm91bmRDb2xvcik7XG4gIH1cblxuICAvKipcbiAgICogTW9zdHJhciBkaXZpZGVyIGluZmVyaW9yXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNUb3RhbFZhbHVlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzZXQgZGl2aWRlckJvdHRvbShkaXZpZGVyQm90dG9tOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGl2aWRlckJvdHRvbSA9IGRpdmlkZXJCb3R0b207XG4gICAgY29uc3QgZGl2aWRlciA9IGRpdmlkZXJCb3R0b20gPyAnYmMtdG90YWwtdmFsdWUtY29udGFpbmVyLWRpdmlkZXItYm90dG9tJyA6ICcnO1xuICAgIHRoaXMuc2V0Q2xhc3NlcygnZGl2aWRlckJvdHRvbScsIGRpdmlkZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVzcGFjaW9zIGVudHJlIGNvbHVtbmFzXG4gICAqXG4gICAqIEB0eXBlIHtCY1RvdGFsVmFsdWVDZWxsU3BhY2luZ0dhcH1cbiAgICogQG1lbWJlcm9mIEJjVG90YWxWYWx1ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGNlbGxTcGFjaW5nR2FwKGNlbGxTcGFjaW5nR2FwOiBCY1RvdGFsVmFsdWVDZWxsU3BhY2luZ0dhcCkge1xuICAgIHRoaXMuX2NlbGxTcGFjaW5nR2FwID0gY2VsbFNwYWNpbmdHYXA7XG4gICAgdGhpcy5zZXRDbGFzc2VzKCdjZWxsU3BhY2luZ0dhcCcsIGNlbGxTcGFjaW5nR2FwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYmpldG8gcGFyYSBjYXJnYXIgaW5mb3JtYWNpb24geSBmb3JtYXRvIGRlIGNvbHVtbmFzIGRlbCBjb21wb25lbnRlXG4gICAqXG4gICAqIEB0eXBlIHtCY1RvdGFsVmFsdWVPYmplY3R9XG4gICAqIEBtZW1iZXJvZiBCY1RvdGFsVmFsdWVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNldCBiY1RvdGFsVmFsdWVPYmplY3QoZGF0YTogQmNUb3RhbFZhbHVlT2JqZWN0KSB7XG4gICAgdGhpcy5iY1RvdGFsVmFsdWUgPSBkYXRhO1xuICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuYmNUb3RhbFZhbHVlLmluZm9ybWF0aW9uLmRhdGEubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWw7XG4gICAgdGhpcy5iY1RvdGFsVmFsdWVCZWhhdmlvciA9IG5ldyBCY1RvdGFsVmFsdWVCZWhhdmlvcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NlcygnY29udGFpbmVyJywgJ2JjLXRvdGFsLXZhbHVlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuc2V0Q2xhc3NlcygnY2VsbFNwYWNpbmdHYXAnLCB0aGlzLl9jZWxsU3BhY2luZ0dhcCA/IHRoaXMuX2NlbGxTcGFjaW5nR2FwIDogQmNUb3RhbFZhbHVlQ2VsbFNwYWNpbmdHYXAuR0FQXzAzKTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY1RvdGFsVmFsdWVCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICB0aGlzLmJjVG90YWxWYWx1ZUJlaGF2aW9yLnNldFVwKCk7XG4gIH1cblxuICAvKipcbiAgICogT2J0aWVuZSBlbCBzdHJpbmcgY29uIGxhcyBjbGFzZXMgY3NzIHBhcmEgbGEgY29sdW1uYSBkZWwgY29tcG9uZW50ZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjVG90YWxWYWx1ZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0Q29sV2lkdGhDbGFzcyhpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb250YWluZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh0aGlzLmFsbENlbGxzU2FtZVdpZHRoKSB7XG4gICAgICBjb25zdCBjb2x1bW5zID0gKyEhdGhpcy5iY1RvdGFsVmFsdWUuY29tcGxlbWVudGFyeSArIHRoaXMuYmNUb3RhbFZhbHVlLmluZm9ybWF0aW9uLmRhdGEubGVuZ3RoO1xuICAgICAgY29udGFpbmVyQ2xhc3Nlcy5wdXNoKGBiYy10b3RhbC12YWx1ZS0ke2NvbHVtbnN9LWNvbC13aWR0aGApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5iY1RvdGFsVmFsdWUuaW5mb3JtYXRpb24uZGF0YVtpbmRleF0ub3B0aW9uYWwpIHtcbiAgICAgIGNvbnRhaW5lckNsYXNzZXMucHVzaCgnYmMtdG90YWwtdmFsdWUtY2VsbC1pbmZvcm1hdGlvbi1wcmltYXJ5Jyk7XG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXJDbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnRpZW5lIGVsIHN0eWxlIHdpZHRoIHBhcmEgbGEgY29sdW1uYSBkZWwgY29tcG9uZW50ZVxuICAgKlxuICAgKiBAcGFyYW0ge0JjVG90YWxWYWx1ZUNvbHVtbn0gY29sdW1uXG4gICAqIEByZXR1cm5zIHsgd2lkdGg6IHN0cmluZyB9XG4gICAqIEBtZW1iZXJvZiBCY1RvdGFsVmFsdWVDb21wb25lbnRcbiAgICovXG4gIGdldENvbFdpZHRoU3R5bGUoY29sdW1uOiBCY1RvdGFsVmFsdWVDb2x1bW4pOiB7IHdpZHRoOiBzdHJpbmcgfSB7XG4gICAgbGV0IHN0eWxlOiBzdHJpbmcgPSAnJztcbiAgICBpZiAoY29sdW1uLmZpeGVkV2lkdGgpIHtcbiAgICAgIHN0eWxlID0gY29sdW1uLmZpeGVkV2lkdGg7XG4gICAgfSBlbHNlIGlmIChjb2x1bW4uaHVnQ29udGVudFdpZHRoKSB7XG4gICAgICBzdHlsZSA9ICdmaXQtY29udGVudCc7XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoOiBzdHlsZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFncmVnYSBjbGFzZXMgY3NzIHBhcmEgbGEgY29sdW1uYSBkZWwgY29tcG9uZW50ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3Q2xhc3NcbiAgICogQG1lbWJlcm9mIEJjVG90YWxWYWx1ZUNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBzZXRDbGFzc2VzKGRhdGE6IHN0cmluZywgbmV3Q2xhc3M6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGV4aXN0aW5nQ2xhc3MgPSB0aGlzLmNvbnRhaW5lckNsYXNzZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5kYXRhID09PSBkYXRhKTtcbiAgICBpZiAoZXhpc3RpbmdDbGFzcykge1xuICAgICAgZXhpc3RpbmdDbGFzcy5jbGFzcyA9IG5ld0NsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lckNsYXNzZXMucHVzaCh7IGRhdGEsIGNsYXNzOiBuZXdDbGFzcyB9KTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuY29udGFpbmVyQ2xhc3Nlcy5tYXAoKGl0ZW0pID0+IGl0ZW0uY2xhc3MpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzLmpvaW4oJyAnKSk7XG4gIH1cbn1cbiIsIjx0ZFxuICBjbGFzcz1cImJjLXRvdGFsLXZhbHVlIGJjLXRvdGFsLXZhbHVlLWNlbGwtY29tcGxlbWVudGFyeSBiYy10b3RhbC12YWx1ZS01LWNvbC13aWR0aFwiXG4gICpuZ0lmPVwiYmNUb3RhbFZhbHVlPy5jb21wbGVtZW50YXJ5XCJcbiAgW25nQ2xhc3NdPVwie1xuICAgICdiYy10b3RhbC12YWx1ZS1jZWxsLWNvbXBsZW1lbnRhcnktcHJpbWFyeSc6XG4gICAgICAhYmNUb3RhbFZhbHVlPy5jb21wbGVtZW50YXJ5Lm9wdGlvbmFsXG4gIH1cIlxuICBbbmdTdHlsZV09XCJnZXRDb2xXaWR0aFN0eWxlKGJjVG90YWxWYWx1ZT8uY29tcGxlbWVudGFyeSlcIlxuPlxuICA8ZGl2IGNsYXNzPVwiYmMtdG90YWwtdmFsdWUtY29tcGxlbWVudGFyeS1sYWJlbFwiPlxuICAgIDxzcGFuXG4gICAgICBjbGFzcz1cImJjLXRvdGFsLXZhbHVlLWVsbGlwc2lzXCJcbiAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICBiY1RvdGFsVmFsdWU/LmNvbXBsZW1lbnRhcnk/LmxhYmVsRm9udENzc0NsYXNzIHx8XG4gICAgICAgICdiYy10b3RhbC12YWx1ZS1jb21wbGVtZW50YXJ5LWxhYmVsLWZvbnQnXG4gICAgICBcIlxuICAgID5cbiAgICAgIHt7IGJjVG90YWxWYWx1ZT8uY29tcGxlbWVudGFyeT8ubGFiZWwudGV4dCB9fVxuICAgIDwvc3Bhbj5cbiAgICA8YmMtaWNvblxuICAgICAgKm5nSWY9XCJiY1RvdGFsVmFsdWU/LmNvbXBsZW1lbnRhcnk/LmxhYmVsLnRvb2x0aXBUZXh0IGFzIHRvb2x0aXBUZXh0XCJcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBjbGFzcz1cImJjLWljb24gYmMtdG9vbHRpcFwiXG4gICAgICBiYy10b29sdGlwXG4gICAgICBbYmNUb29sdGlwUG9zaXRpb25dPVwiJ3RvcCdcIlxuICAgICAgW2JjVG9vbHRpcFRleHRdPVwidG9vbHRpcFRleHRcIlxuICAgID5cbiAgICAgIGluZm9cbiAgICA8L2JjLWljb24+XG4gIDwvZGl2PlxuICA8cFxuICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgYmNUb3RhbFZhbHVlPy5jb21wbGVtZW50YXJ5Py5kYXRhRm9udENzc0NsYXNzIHx8XG4gICAgICAnYmMtdG90YWwtdmFsdWUtY29tcGxlbWVudGFyeS1kYXRhJ1xuICAgIFwiXG4gID5cbiAgICB7eyBiY1RvdGFsVmFsdWU/LmNvbXBsZW1lbnRhcnk/LmRhdGEgfX1cbiAgPC9wPlxuPC90ZD5cbjx0ZFxuICBjbGFzcz1cImJjLXRvdGFsLXZhbHVlIGJjLXRvdGFsLXZhbHVlLWNlbGwtaW5mb3JtYXRpb25cIlxuICAqbmdGb3I9XCJsZXQgaW5mbyBvZiBiY1RvdGFsVmFsdWUuaW5mb3JtYXRpb24uZGF0YTsgbGV0IGkgPSBpbmRleFwiXG4gIFtuZ0NsYXNzXT1cImdldENvbFdpZHRoQ2xhc3MoaSlcIlxuICBbbmdTdHlsZV09XCJnZXRDb2xXaWR0aFN0eWxlKGluZm8pXCJcbj5cbiAgPGRpdiBjbGFzcz1cImJjLXRvdGFsLXZhbHVlLWluZm9ybWF0aW9uLWxhYmVsXCI+XG4gICAgPHNwYW5cbiAgICAgIGNsYXNzPVwiYmMtdG90YWwtdmFsdWUtZWxsaXBzaXNcIlxuICAgICAgW25nQ2xhc3NdPVwiXG4gICAgICAgIGJjVG90YWxWYWx1ZS5pbmZvcm1hdGlvbi5pbmZvcm1hdGlvbkxhYmVsRm9udENzc0NsYXNzIHx8XG4gICAgICAgICdiYy10b3RhbC12YWx1ZS1pbmZvcm1hdGlvbi1sYWJlbC1mb250J1xuICAgICAgXCJcbiAgICA+XG4gICAgICB7eyBpbmZvLmxhYmVsLnRleHQgfX1cbiAgICA8L3NwYW4+XG4gICAgPGJjLWljb25cbiAgICAgICpuZ0lmPVwiaW5mby5sYWJlbC50b29sdGlwVGV4dCBhcyB0b29sdGlwVGV4dFwiXG4gICAgICBzaXplPVwic21cIlxuICAgICAgY2xhc3M9XCJiYy1pY29uIGJjLXRvb2x0aXBcIlxuICAgICAgYmMtdG9vbHRpcFxuICAgICAgW2JjVG9vbHRpcFBvc2l0aW9uXT1cIid0b3AnXCJcbiAgICAgIFtiY1Rvb2x0aXBUZXh0XT1cInRvb2x0aXBUZXh0XCJcbiAgICA+XG4gICAgICBpbmZvXG4gICAgPC9iYy1pY29uPlxuICA8L2Rpdj5cbiAgPHBcbiAgICBjbGFzcz1cImJjLXRvdGFsLXZhbHVlLWluZm9ybWF0aW9uLWRhdGFcIlxuICAgIFtuZ0NsYXNzXT1cImluZm8uZGF0YUZvbnRDc3NDbGFzcyB8fCAnYmMtdG90YWwtdmFsdWUtaW5mb3JtYXRpb24tZGF0YS1mb250J1wiXG4gID5cbiAgICB7eyBpbmZvLmRhdGEuY3VycmVuY3kgfX0ge3sgaW5mby5kYXRhLmludGVnZXIgfX08c3BhblxuICAgICAgY2xhc3M9XCJiYy10b3RhbC12YWx1ZS1pbmZvcm1hdGlvbi1kYXRhLWRlY2ltYWxcIlxuICAgICAgKm5nSWY9XCJpbmZvLmRhdGEuZGVjaW1hbFwiXG4gICAgPnt7IGluZm8uZGF0YS5kZWNpbWFsIH19PC9zcGFuPlxuICA8L3A+XG48L3RkPlxuIl19