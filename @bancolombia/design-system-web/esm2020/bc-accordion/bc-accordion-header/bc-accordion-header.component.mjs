import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-icon-button";
import * as i4 from "@angular/common";
import * as i5 from "@bancolombia/design-system-web/bc-tooltip";
/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 *
 * @export
 * @class BcAccordionHeaderComponent
 */
export class BcAccordionHeaderComponent {
    /**
     * Creates an instance of BcAccordionHeaderComponent.
     * @memberof BcAccordionHeaderComponent
     */
    constructor(bcHelperService, elementRef, render) {
        this.bcHelperService = bcHelperService;
        this.elementRef = elementRef;
        this.render = render;
        /**
         * Esta entrada permite indicar un id único al componente dentro del DOM.
         *
         * @type {string}
         * @memberof BcInputSelectComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Esta Variable se utiliza para guardar el ultimo elemento de las
         * columnas, este aplica solo para el acordeon con columnas y se usa en
         * responsive
         * @type {string}
         */
        this.lastValueColumn = '';
        /**
         * Título principal, es obligatorio y puede tener cualquier valor string.
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.title = 'Título sección';
        /**
         * Subtítulo, es opcional y puede tener cualquier valor string.
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.subtitle = '';
        /**
         * Icono a la izquierda, es de tipo funcional y va al lado izquierdo la acordeón.
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.leftIcon = '';
        /**
         * Icono al lado del título, es de tipo funcional y va a la derecha del título.
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.titleIcon = '';
        /**
         * Icono al lado del subtítulo, es de tipo funcional y va a la derecha del subtítulo.
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.subtitleIcon = '';
        /**
         * Icono de las acciones a la derecha, se muestran si la variable tiene algun valor diferente de [] (vacio),
         * recibe un array de strings con los nombres de los iconos funcionales a mostrar.
         *
         * @type {Array<string>}
         * @memberof BcAccordionHeaderComponent
         */
        this.actionsIcon = [];
        /**
         * Valores de las columnas a la derecha, se muestran si la variable tiene algun valor diferente de [] (vacio),
         * recibe un array de tipo AccordionColumn con los valores que el usuario desee mostrar, máximo son 3 columnas (recomendado).
         *
         * @type {Array<AccordionColumn>}
         * @memberof BcAccordionHeaderComponent
         */
        this.columns = [];
        /**
         * Evento cuando se selecciona una acción, se ejecuta cuando se ha hecho clic en algún icono de acción
         * y retorna el nombre del icono al cual se le hizo clic.
         *
         * @type {EventEmitter}
         * @memberof BcAccordionHeaderComponent
         */
        this.actionSelected = new EventEmitter();
        /**
         * Logo, va al lado izquierdo la acordeón.
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.srcLogo = '';
        /**
         * Logo, va al lado izquierdo la acordeón.
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.altLogo = 'logo';
        /**
         * Label a la parte derecha, es opcional y recibe cualquier valor string.
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.label = '';
        /**
         * Icono al extremo derecho, permite expandir o contraer la acordeón.
         * Este rota 180º cuando esta activa de los contrario se mantiene en 0º.
         *
         * @memberof BcAccordionHeaderComponent
         */
        this.iconRight = 'arrow2-down';
        this.updated = new EventEmitter();
        /**
         * Tooltip ubicado en el header del acordeón.
         *  @type {ItooltipIcon}
         * @memberof BcAccordionHeaderComponent
         */
        this.tooltipIcon = {
            isTooltip: false,
            textTooltip: 'Text content',
            positionTooltip: 'top'
        };
    }
    ngOnInit() {
        if (this.columns.length > 0) {
            this.lastValueColumn = this.columns[this.columns.length - 1].value;
        }
    }
    ngOnChanges() {
        this.updated.emit(true);
    }
    /**
     * Retorna el nombre del icono de la acción clickeada
     * @param action  acción seleccionada
     */
    selectAction(action) {
        this.actionSelected.emit(action);
    }
}
BcAccordionHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionHeaderComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BcAccordionHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAccordionHeaderComponent, selector: "bc-accordion-header", inputs: { componentId: "componentId", title: "title", subtitle: "subtitle", leftIcon: "leftIcon", titleIcon: "titleIcon", subtitleIcon: "subtitleIcon", ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaLabel: ["aria-label", "ariaLabel"], actionsIcon: "actionsIcon", columns: "columns", srcLogo: "srcLogo", altLogo: "altLogo", label: "label", iconRight: "iconRight", tooltipIcon: "tooltipIcon" }, outputs: { actionSelected: "actionSelected" }, usesOnChanges: true, ngImport: i0, template: "<header [id]=\"componentId\">\n  <ng-container *ngIf=\"columns.length > 0; else otherAccordions\">\n    <section class=\"bc-accordion-container-columns-item bc-flex\">\n      <section class=\"bc-accordion-header-left\">\n        <bc-icon aria-label=\"{{ leftIcon }}\" size=\"sm\" aria-hidden=\"true\" *ngIf=\"leftIcon\">\n          {{ leftIcon }}\n        </bc-icon>\n        <img class=\"bc-img\" src=\"{{ srcLogo }}\" alt=\"{{ altLogo }}\" *ngIf=\"srcLogo\" />\n        <section class=\"bc-accordion-text-container\">\n          <h6 class=\"bc-accordion-title\">\n            {{ title }}\n            <bc-icon\n              *ngIf=\"tooltipIcon.isTooltip\"\n              class=\"bc-icon bc-tooltip\"\n              bc-tooltip\n              [bcTooltipPosition]=\"tooltipIcon.positionTooltip\"\n              [bcTooltipText]=\"tooltipIcon.textTooltip\"\n            >\n              info-circle\n            </bc-icon>\n          </h6>\n          <p class=\"bc-accordion-subtitle\" *ngIf=\"subtitle\">\n            {{ subtitle }}\n            <bc-icon\n              *ngIf=\"subtitleIcon\"\n              size=\"sm\"\n              class=\"bc-icon bc-tooltip\"\n              bc-tooltip\n              [bcTooltipPosition]=\"tooltipIcon.positionTooltip\"\n              [bcTooltipText]=\"tooltipIcon.textTooltip\"\n            >\n              {{ subtitleIcon }}\n            </bc-icon>\n          </p>\n        </section>\n      </section>\n      <section class=\"bc-accordion-header-right\">\n        <p class=\"bc-accordion-label\" *ngIf=\"label\">{{ label }}</p>\n        <div class=\"bc-accordion-columns-container bc-flex\" *ngIf=\"columns.length > 0\">\n          <h6\n            class=\"bc-accordion-column\"\n            *ngFor=\"let column of columns\"\n            [ngClass]=\"{ 'bc-align-left': column.alignLeft }\"\n          >\n            {{ column.value }}\n            <span class=\"bc-accordion-column-exchange\" *ngIf=\"column.exchange\">{{ column.exchange }}</span>\n          </h6>\n        </div>\n        <div class=\"bc-accordion-action-container\" *ngIf=\"actionsIcon.length > 0\">\n          <bc-icon-button\n            *ngFor=\"let icon of actionsIcon\"\n            [type]=\"'ghost'\"\n            [size]=\"'medium'\"\n            [customIcon]=\"icon\"\n            [ariaLabel]=\"icon\"\n            (click)=\"selectAction(icon)\"\n          ></bc-icon-button>\n        </div>\n        <bc-icon size=\"sm \" aria-hidden=\"true\" class=\"bc-toggle-button\">\n          {{ iconRight }}\n        </bc-icon>\n      </section>\n    </section>\n    <section class=\"bc-accordion-container-column-mobile bc-flex bc-justify-content-end\">\n      <div class=\"bc-accordion-columns-container\">\n        <h6 class=\"bc-accordion-column\">{{ lastValueColumn }}</h6>\n      </div>\n    </section>\n  </ng-container>\n\n  <ng-template #otherAccordions>\n    <section class=\"bc-accordion-header-left\">\n      <bc-icon aria-label=\"{{ leftIcon }}\" size=\"sm\" aria-hidden=\"true\" *ngIf=\"leftIcon\">\n        {{ leftIcon }}\n      </bc-icon>\n      <img class=\"bc-img\" src=\"{{ srcLogo }}\" alt=\"{{ altLogo }}\" *ngIf=\"srcLogo\" />\n      <section class=\"bc-accordion-text-container\">\n        <h6 class=\"bc-accordion-title\">\n          {{ title }}\n          <bc-icon\n            *ngIf=\"tooltipIcon.isTooltip\"\n            class=\"bc-icon bc-tooltip\"\n            bc-tooltip\n            [bcTooltipPosition]=\"tooltipIcon.positionTooltip\"\n            [bcTooltipText]=\"tooltipIcon.textTooltip\"\n          >\n            info-circle\n          </bc-icon>\n        </h6>\n        <p class=\"bc-accordion-subtitle\" *ngIf=\"subtitle\">\n          {{ subtitle }}\n          <bc-icon\n            *ngIf=\"subtitleIcon\"\n            size=\"sm\"\n            class=\"bc-icon bc-tooltip\"\n            bc-tooltip\n            [bcTooltipPosition]=\"tooltipIcon.positionTooltip\"\n            [bcTooltipText]=\"tooltipIcon.textTooltip\"\n          >\n            {{ subtitleIcon }}\n          </bc-icon>\n        </p>\n      </section>\n    </section>\n    <section class=\"bc-accordion-header-right\">\n      <p class=\"bc-accordion-label\" *ngIf=\"label\">{{ label }}</p>\n      <div class=\"bc-accordion-columns-container\" *ngIf=\"columns.length > 0\">\n        <h6\n          class=\"bc-accordion-column\"\n          *ngFor=\"let column of columns\"\n          [ngClass]=\"{ 'bc-align-left': column.alignLeft }\"\n        >\n          {{ column.value }}\n          <span class=\"bc-accordion-column-exchange\" *ngIf=\"column.exchange\">{{ column.exchange }}</span>\n        </h6>\n      </div>\n      <div class=\"bc-accordion-action-container\" *ngIf=\"actionsIcon.length > 0\">\n        <bc-icon-button\n          *ngFor=\"let icon of actionsIcon\"\n          [type]=\"'ghost'\"\n          [size]=\"'medium'\"\n          [customIcon]=\"icon\"\n          [ariaLabel]=\"icon\"\n          (click)=\"selectAction(icon)\"\n        ></bc-icon-button>\n      </div>\n      <bc-icon size=\"sm \" aria-hidden=\"true\" class=\"bc-toggle-button\">\n        {{ iconRight }}\n      </bc-icon>\n    </section>\n  </ng-template>\n</header>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }, { type: i3.BcIconButtonComponent, selector: "bc-icon-button", inputs: ["type", "color", "size", "shadow", "customIcon", "statusButton", "seleted", "selected", "ariaLabel"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.BcTooltipDirective, selector: "[bc-tooltip]", inputs: ["bcTooltipPosition", "bcTooltipTitle", "bcTooltipText", "bcTooltipButtonText", "bcTooltipParentElement"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-accordion-header', template: "<header [id]=\"componentId\">\n  <ng-container *ngIf=\"columns.length > 0; else otherAccordions\">\n    <section class=\"bc-accordion-container-columns-item bc-flex\">\n      <section class=\"bc-accordion-header-left\">\n        <bc-icon aria-label=\"{{ leftIcon }}\" size=\"sm\" aria-hidden=\"true\" *ngIf=\"leftIcon\">\n          {{ leftIcon }}\n        </bc-icon>\n        <img class=\"bc-img\" src=\"{{ srcLogo }}\" alt=\"{{ altLogo }}\" *ngIf=\"srcLogo\" />\n        <section class=\"bc-accordion-text-container\">\n          <h6 class=\"bc-accordion-title\">\n            {{ title }}\n            <bc-icon\n              *ngIf=\"tooltipIcon.isTooltip\"\n              class=\"bc-icon bc-tooltip\"\n              bc-tooltip\n              [bcTooltipPosition]=\"tooltipIcon.positionTooltip\"\n              [bcTooltipText]=\"tooltipIcon.textTooltip\"\n            >\n              info-circle\n            </bc-icon>\n          </h6>\n          <p class=\"bc-accordion-subtitle\" *ngIf=\"subtitle\">\n            {{ subtitle }}\n            <bc-icon\n              *ngIf=\"subtitleIcon\"\n              size=\"sm\"\n              class=\"bc-icon bc-tooltip\"\n              bc-tooltip\n              [bcTooltipPosition]=\"tooltipIcon.positionTooltip\"\n              [bcTooltipText]=\"tooltipIcon.textTooltip\"\n            >\n              {{ subtitleIcon }}\n            </bc-icon>\n          </p>\n        </section>\n      </section>\n      <section class=\"bc-accordion-header-right\">\n        <p class=\"bc-accordion-label\" *ngIf=\"label\">{{ label }}</p>\n        <div class=\"bc-accordion-columns-container bc-flex\" *ngIf=\"columns.length > 0\">\n          <h6\n            class=\"bc-accordion-column\"\n            *ngFor=\"let column of columns\"\n            [ngClass]=\"{ 'bc-align-left': column.alignLeft }\"\n          >\n            {{ column.value }}\n            <span class=\"bc-accordion-column-exchange\" *ngIf=\"column.exchange\">{{ column.exchange }}</span>\n          </h6>\n        </div>\n        <div class=\"bc-accordion-action-container\" *ngIf=\"actionsIcon.length > 0\">\n          <bc-icon-button\n            *ngFor=\"let icon of actionsIcon\"\n            [type]=\"'ghost'\"\n            [size]=\"'medium'\"\n            [customIcon]=\"icon\"\n            [ariaLabel]=\"icon\"\n            (click)=\"selectAction(icon)\"\n          ></bc-icon-button>\n        </div>\n        <bc-icon size=\"sm \" aria-hidden=\"true\" class=\"bc-toggle-button\">\n          {{ iconRight }}\n        </bc-icon>\n      </section>\n    </section>\n    <section class=\"bc-accordion-container-column-mobile bc-flex bc-justify-content-end\">\n      <div class=\"bc-accordion-columns-container\">\n        <h6 class=\"bc-accordion-column\">{{ lastValueColumn }}</h6>\n      </div>\n    </section>\n  </ng-container>\n\n  <ng-template #otherAccordions>\n    <section class=\"bc-accordion-header-left\">\n      <bc-icon aria-label=\"{{ leftIcon }}\" size=\"sm\" aria-hidden=\"true\" *ngIf=\"leftIcon\">\n        {{ leftIcon }}\n      </bc-icon>\n      <img class=\"bc-img\" src=\"{{ srcLogo }}\" alt=\"{{ altLogo }}\" *ngIf=\"srcLogo\" />\n      <section class=\"bc-accordion-text-container\">\n        <h6 class=\"bc-accordion-title\">\n          {{ title }}\n          <bc-icon\n            *ngIf=\"tooltipIcon.isTooltip\"\n            class=\"bc-icon bc-tooltip\"\n            bc-tooltip\n            [bcTooltipPosition]=\"tooltipIcon.positionTooltip\"\n            [bcTooltipText]=\"tooltipIcon.textTooltip\"\n          >\n            info-circle\n          </bc-icon>\n        </h6>\n        <p class=\"bc-accordion-subtitle\" *ngIf=\"subtitle\">\n          {{ subtitle }}\n          <bc-icon\n            *ngIf=\"subtitleIcon\"\n            size=\"sm\"\n            class=\"bc-icon bc-tooltip\"\n            bc-tooltip\n            [bcTooltipPosition]=\"tooltipIcon.positionTooltip\"\n            [bcTooltipText]=\"tooltipIcon.textTooltip\"\n          >\n            {{ subtitleIcon }}\n          </bc-icon>\n        </p>\n      </section>\n    </section>\n    <section class=\"bc-accordion-header-right\">\n      <p class=\"bc-accordion-label\" *ngIf=\"label\">{{ label }}</p>\n      <div class=\"bc-accordion-columns-container\" *ngIf=\"columns.length > 0\">\n        <h6\n          class=\"bc-accordion-column\"\n          *ngFor=\"let column of columns\"\n          [ngClass]=\"{ 'bc-align-left': column.alignLeft }\"\n        >\n          {{ column.value }}\n          <span class=\"bc-accordion-column-exchange\" *ngIf=\"column.exchange\">{{ column.exchange }}</span>\n        </h6>\n      </div>\n      <div class=\"bc-accordion-action-container\" *ngIf=\"actionsIcon.length > 0\">\n        <bc-icon-button\n          *ngFor=\"let icon of actionsIcon\"\n          [type]=\"'ghost'\"\n          [size]=\"'medium'\"\n          [customIcon]=\"icon\"\n          [ariaLabel]=\"icon\"\n          (click)=\"selectAction(icon)\"\n        ></bc-icon-button>\n      </div>\n      <bc-icon size=\"sm \" aria-hidden=\"true\" class=\"bc-toggle-button\">\n        {{ iconRight }}\n      </bc-icon>\n    </section>\n  </ng-template>\n</header>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { componentId: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], leftIcon: [{
                type: Input
            }], titleIcon: [{
                type: Input
            }], subtitleIcon: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input,
                args: ['aria-labelledby']
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], actionsIcon: [{
                type: Input
            }], columns: [{
                type: Input
            }], actionSelected: [{
                type: Output
            }], srcLogo: [{
                type: Input
            }], altLogo: [{
                type: Input
            }], label: [{
                type: Input
            }], iconRight: [{
                type: Input
            }], tooltipIcon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYWNjb3JkaW9uLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtYWNjb3JkaW9uL2JjLWFjY29yZGlvbi1oZWFkZXIvYmMtYWNjb3JkaW9uLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtYWNjb3JkaW9uL2JjLWFjY29yZGlvbi1oZWFkZXIvYmMtYWNjb3JkaW9uLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVVqSDs7Ozs7OztHQU9HO0FBS0gsTUFBTSxPQUFPLDBCQUEwQjtJQWdJckM7OztPQUdHO0lBQ0gsWUFBb0IsZUFBZ0MsRUFBUyxVQUFzQixFQUFVLE1BQWlCO1FBQTFGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBbkk5Rzs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEU7Ozs7O1dBS0c7UUFFSCxvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUU3Qjs7Ozs7V0FLRztRQUNNLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQzs7Ozs7V0FLRztRQUNNLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDdkI7Ozs7O1dBS0c7UUFDTSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCOzs7OztXQUtHO1FBQ00sY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN4Qjs7Ozs7V0FLRztRQUNNLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBVTNCOzs7Ozs7V0FNRztRQUNNLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUN6Qzs7Ozs7O1dBTUc7UUFDTSxZQUFPLEdBQTJCLEVBQUUsQ0FBQztRQUM5Qzs7Ozs7O1dBTUc7UUFDTyxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpFOzs7OztXQUtHO1FBQ00sWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUV0Qjs7Ozs7V0FLRztRQUNNLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFFMUI7Ozs7O1dBS0c7UUFDTSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCOzs7OztXQUtHO1FBQ00sY0FBUyxHQUFnQyxhQUFhLENBQUM7UUFDaEUsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hEOzs7O1dBSUc7UUFDTSxnQkFBVyxHQUFpQjtZQUNuQyxTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUUsY0FBYztZQUMzQixlQUFlLEVBQUUsS0FBSztTQUN2QixDQUFDO0lBSytHLENBQUM7SUFFbEgsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsTUFBYztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOzt1SEFySlUsMEJBQTBCOzJHQUExQiwwQkFBMEIsb2hCQ3RCdkMsMGlLQW9JQTsyRkQ5R2EsMEJBQTBCO2tCQUp0QyxTQUFTOytCQUNFLHFCQUFxQjt1SkFVdEIsV0FBVztzQkFBbkIsS0FBSztnQkFpQkcsS0FBSztzQkFBYixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSztnQkFPRyxTQUFTO3NCQUFqQixLQUFLO2dCQU9HLFlBQVk7c0JBQXBCLEtBQUs7Z0JBSW9CLGNBQWM7c0JBQXZDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQUtILFNBQVM7c0JBQTdCLEtBQUs7dUJBQUMsWUFBWTtnQkFRVixXQUFXO3NCQUFuQixLQUFLO2dCQVFHLE9BQU87c0JBQWYsS0FBSztnQkFRSSxjQUFjO3NCQUF2QixNQUFNO2dCQVFFLE9BQU87c0JBQWYsS0FBSztnQkFRRyxPQUFPO3NCQUFmLEtBQUs7Z0JBUUcsS0FBSztzQkFBYixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Db2x1bW4gfSBmcm9tICcuLi9iYy1hY2NvcmRpb24taW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbmludGVyZmFjZSBJdG9vbHRpcEljb24ge1xuICBpc1Rvb2x0aXA6IGJvb2xlYW47XG4gIHRleHRUb29sdGlwOiBzdHJpbmc7XG4gIHBvc2l0aW9uVG9vbHRpcDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEltcG9ydGEgZWwgYWNvcmRlw7NuIHBhcmEgY29udGVuZXIgaW5mb1xuICogRWwgYWNvcmRlw7NuIGNvbGFwc2EgZGVzZGUgdW4gY29udGVuZWRvciBwcmluY2lwYWwgcGFyYSBkZSBlc3RhIG1hbmVyYVxuICogbW9zdHJhciBpbmZvcm1hY2nDs24gaW50ZXJuYSBxdWUgaGF5YSBkZW50cm8gZGVsIG1pc21vIGVsIGN1YWwgc2UgZXhwYW5kZSBvIHNlIGNvbnRyYWUgYWwgcmVhbGl6YXIgY2xpYy5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNBY2NvcmRpb25IZWFkZXJDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtYWNjb3JkaW9uLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1hY2NvcmRpb24taGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgdW4gaWQgw7puaWNvIGFsIGNvbXBvbmVudGUgZGVudHJvIGRlbCBET00uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0U2VsZWN0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbiAgLyoqXG4gICAqIEVzdGEgVmFyaWFibGUgc2UgdXRpbGl6YSBwYXJhIGd1YXJkYXIgZWwgdWx0aW1vIGVsZW1lbnRvIGRlIGxhc1xuICAgKiBjb2x1bW5hcywgZXN0ZSBhcGxpY2Egc29sbyBwYXJhIGVsIGFjb3JkZW9uIGNvbiBjb2x1bW5hcyB5IHNlIHVzYSBlblxuICAgKiByZXNwb25zaXZlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuXG4gIGxhc3RWYWx1ZUNvbHVtbjogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFTDrXR1bG8gcHJpbmNpcGFsLCBlcyBvYmxpZ2F0b3JpbyB5IHB1ZWRlIHRlbmVyIGN1YWxxdWllciB2YWxvciBzdHJpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGUgPSAnVMOtdHVsbyBzZWNjacOzbic7XG4gIC8qKlxuICAgKiBTdWJ0w610dWxvLCBlcyBvcGNpb25hbCB5IHB1ZWRlIHRlbmVyIGN1YWxxdWllciB2YWxvciBzdHJpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3VidGl0bGUgPSAnJztcbiAgLyoqXG4gICAqIEljb25vIGEgbGEgaXpxdWllcmRhLCBlcyBkZSB0aXBvIGZ1bmNpb25hbCB5IHZhIGFsIGxhZG8gaXpxdWllcmRvIGxhIGFjb3JkZcOzbi5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBsZWZ0SWNvbiA9ICcnO1xuICAvKipcbiAgICogSWNvbm8gYWwgbGFkbyBkZWwgdMOtdHVsbywgZXMgZGUgdGlwbyBmdW5jaW9uYWwgeSB2YSBhIGxhIGRlcmVjaGEgZGVsIHTDrXR1bG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGVJY29uID0gJyc7XG4gIC8qKlxuICAgKiBJY29ubyBhbCBsYWRvIGRlbCBzdWJ0w610dWxvLCBlcyBkZSB0aXBvIGZ1bmNpb25hbCB5IHZhIGEgbGEgZGVyZWNoYSBkZWwgc3VidMOtdHVsby5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdWJ0aXRsZUljb24gPSAnJztcbiAgLyoqXG4gICAqIEluZGljYSBlbCBhcmlhLWxhYmVsbGVkYnkgcGFyYSBlbCBjb21wb3J0YW1pZW50byBkZWwgY29tcG9uZW50ZS5cbiAgICovXG4gIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhIGVsIGFyaWEtbGFiZWwgcGFyYSBlbCBjb21wb3J0YW1pZW50byBkZWwgY29tcG9uZW50ZS5cbiAgICovXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogSWNvbm8gZGUgbGFzIGFjY2lvbmVzIGEgbGEgZGVyZWNoYSwgc2UgbXVlc3RyYW4gc2kgbGEgdmFyaWFibGUgdGllbmUgYWxndW4gdmFsb3IgZGlmZXJlbnRlIGRlIFtdICh2YWNpbyksXG4gICAqIHJlY2liZSB1biBhcnJheSBkZSBzdHJpbmdzIGNvbiBsb3Mgbm9tYnJlcyBkZSBsb3MgaWNvbm9zIGZ1bmNpb25hbGVzIGEgbW9zdHJhci5cbiAgICpcbiAgICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gICAqIEBtZW1iZXJvZiBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYWN0aW9uc0ljb246IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgLyoqXG4gICAqIFZhbG9yZXMgZGUgbGFzIGNvbHVtbmFzIGEgbGEgZGVyZWNoYSwgc2UgbXVlc3RyYW4gc2kgbGEgdmFyaWFibGUgdGllbmUgYWxndW4gdmFsb3IgZGlmZXJlbnRlIGRlIFtdICh2YWNpbyksXG4gICAqIHJlY2liZSB1biBhcnJheSBkZSB0aXBvIEFjY29yZGlvbkNvbHVtbiBjb24gbG9zIHZhbG9yZXMgcXVlIGVsIHVzdWFyaW8gZGVzZWUgbW9zdHJhciwgbcOheGltbyBzb24gMyBjb2x1bW5hcyAocmVjb21lbmRhZG8pLlxuICAgKlxuICAgKiBAdHlwZSB7QXJyYXk8QWNjb3JkaW9uQ29sdW1uPn1cbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb2x1bW5zOiBBcnJheTxBY2NvcmRpb25Db2x1bW4+ID0gW107XG4gIC8qKlxuICAgKiBFdmVudG8gY3VhbmRvIHNlIHNlbGVjY2lvbmEgdW5hIGFjY2nDs24sIHNlIGVqZWN1dGEgY3VhbmRvIHNlIGhhIGhlY2hvIGNsaWMgZW4gYWxnw7puIGljb25vIGRlIGFjY2nDs25cbiAgICogeSByZXRvcm5hIGVsIG5vbWJyZSBkZWwgaWNvbm8gYWwgY3VhbCBzZSBsZSBoaXpvIGNsaWMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG4gICAqIEBtZW1iZXJvZiBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGFjdGlvblNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogTG9nbywgdmEgYWwgbGFkbyBpenF1aWVyZG8gbGEgYWNvcmRlw7NuLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNBY2NvcmRpb25IZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNyY0xvZ28gPSAnJztcblxuICAvKipcbiAgICogTG9nbywgdmEgYWwgbGFkbyBpenF1aWVyZG8gbGEgYWNvcmRlw7NuLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNBY2NvcmRpb25IZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGFsdExvZ28gPSAnbG9nbyc7XG5cbiAgLyoqXG4gICAqIExhYmVsIGEgbGEgcGFydGUgZGVyZWNoYSwgZXMgb3BjaW9uYWwgeSByZWNpYmUgY3VhbHF1aWVyIHZhbG9yIHN0cmluZy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICAvKipcbiAgICogSWNvbm8gYWwgZXh0cmVtbyBkZXJlY2hvLCBwZXJtaXRlIGV4cGFuZGlyIG8gY29udHJhZXIgbGEgYWNvcmRlw7NuLlxuICAgKiBFc3RlIHJvdGEgMTgwwrogY3VhbmRvIGVzdGEgYWN0aXZhIGRlIGxvcyBjb250cmFyaW8gc2UgbWFudGllbmUgZW4gMMK6LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNBY2NvcmRpb25IZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGljb25SaWdodDogJ2Fycm93Mi1kb3duJyB8ICdhcnJvdzItdXAnID0gJ2Fycm93Mi1kb3duJztcbiAgdXBkYXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKlxuICAgKiBUb29sdGlwIHViaWNhZG8gZW4gZWwgaGVhZGVyIGRlbCBhY29yZGXDs24uXG4gICAqICBAdHlwZSB7SXRvb2x0aXBJY29ufVxuICAgKiBAbWVtYmVyb2YgQmNBY2NvcmRpb25IZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBJY29uOiBJdG9vbHRpcEljb24gPSB7XG4gICAgaXNUb29sdGlwOiBmYWxzZSxcbiAgICB0ZXh0VG9vbHRpcDogJ1RleHQgY29udGVudCcsXG4gICAgcG9zaXRpb25Ub29sdGlwOiAndG9wJ1xuICB9O1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudC5cbiAgICogQG1lbWJlcm9mIEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubGFzdFZhbHVlQ29sdW1uID0gdGhpcy5jb2x1bW5zW3RoaXMuY29sdW1ucy5sZW5ndGggLSAxXS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZWQuZW1pdCh0cnVlKTtcbiAgfVxuICAvKipcbiAgICogUmV0b3JuYSBlbCBub21icmUgZGVsIGljb25vIGRlIGxhIGFjY2nDs24gY2xpY2tlYWRhXG4gICAqIEBwYXJhbSBhY3Rpb24gIGFjY2nDs24gc2VsZWNjaW9uYWRhXG4gICAqL1xuICBzZWxlY3RBY3Rpb24oYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFjdGlvblNlbGVjdGVkLmVtaXQoYWN0aW9uKTtcbiAgfVxufVxuIiwiPGhlYWRlciBbaWRdPVwiY29tcG9uZW50SWRcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbnMubGVuZ3RoID4gMDsgZWxzZSBvdGhlckFjY29yZGlvbnNcIj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImJjLWFjY29yZGlvbi1jb250YWluZXItY29sdW1ucy1pdGVtIGJjLWZsZXhcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtYWNjb3JkaW9uLWhlYWRlci1sZWZ0XCI+XG4gICAgICAgIDxiYy1pY29uIGFyaWEtbGFiZWw9XCJ7eyBsZWZ0SWNvbiB9fVwiIHNpemU9XCJzbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiICpuZ0lmPVwibGVmdEljb25cIj5cbiAgICAgICAgICB7eyBsZWZ0SWNvbiB9fVxuICAgICAgICA8L2JjLWljb24+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJiYy1pbWdcIiBzcmM9XCJ7eyBzcmNMb2dvIH19XCIgYWx0PVwie3sgYWx0TG9nbyB9fVwiICpuZ0lmPVwic3JjTG9nb1wiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtYWNjb3JkaW9uLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGg2IGNsYXNzPVwiYmMtYWNjb3JkaW9uLXRpdGxlXCI+XG4gICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICAgICAgPGJjLWljb25cbiAgICAgICAgICAgICAgKm5nSWY9XCJ0b29sdGlwSWNvbi5pc1Rvb2x0aXBcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJjLWljb24gYmMtdG9vbHRpcFwiXG4gICAgICAgICAgICAgIGJjLXRvb2x0aXBcbiAgICAgICAgICAgICAgW2JjVG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBJY29uLnBvc2l0aW9uVG9vbHRpcFwiXG4gICAgICAgICAgICAgIFtiY1Rvb2x0aXBUZXh0XT1cInRvb2x0aXBJY29uLnRleHRUb29sdGlwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaW5mby1jaXJjbGVcbiAgICAgICAgICAgIDwvYmMtaWNvbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDxwIGNsYXNzPVwiYmMtYWNjb3JkaW9uLXN1YnRpdGxlXCIgKm5nSWY9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAge3sgc3VidGl0bGUgfX1cbiAgICAgICAgICAgIDxiYy1pY29uXG4gICAgICAgICAgICAgICpuZ0lmPVwic3VidGl0bGVJY29uXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJiYy1pY29uIGJjLXRvb2x0aXBcIlxuICAgICAgICAgICAgICBiYy10b29sdGlwXG4gICAgICAgICAgICAgIFtiY1Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwSWNvbi5wb3NpdGlvblRvb2x0aXBcIlxuICAgICAgICAgICAgICBbYmNUb29sdGlwVGV4dF09XCJ0b29sdGlwSWNvbi50ZXh0VG9vbHRpcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IHN1YnRpdGxlSWNvbiB9fVxuICAgICAgICAgICAgPC9iYy1pY29uPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1hY2NvcmRpb24taGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiYmMtYWNjb3JkaW9uLWxhYmVsXCIgKm5nSWY9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtYWNjb3JkaW9uLWNvbHVtbnMtY29udGFpbmVyIGJjLWZsZXhcIiAqbmdJZj1cImNvbHVtbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgIDxoNlxuICAgICAgICAgICAgY2xhc3M9XCJiYy1hY2NvcmRpb24tY29sdW1uXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdiYy1hbGlnbi1sZWZ0JzogY29sdW1uLmFsaWduTGVmdCB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBjb2x1bW4udmFsdWUgfX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmMtYWNjb3JkaW9uLWNvbHVtbi1leGNoYW5nZVwiICpuZ0lmPVwiY29sdW1uLmV4Y2hhbmdlXCI+e3sgY29sdW1uLmV4Y2hhbmdlIH19PC9zcGFuPlxuICAgICAgICAgIDwvaDY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtYWNjb3JkaW9uLWFjdGlvbi1jb250YWluZXJcIiAqbmdJZj1cImFjdGlvbnNJY29uLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICA8YmMtaWNvbi1idXR0b25cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpY29uIG9mIGFjdGlvbnNJY29uXCJcbiAgICAgICAgICAgIFt0eXBlXT1cIidnaG9zdCdcIlxuICAgICAgICAgICAgW3NpemVdPVwiJ21lZGl1bSdcIlxuICAgICAgICAgICAgW2N1c3RvbUljb25dPVwiaWNvblwiXG4gICAgICAgICAgICBbYXJpYUxhYmVsXT1cImljb25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFjdGlvbihpY29uKVwiXG4gICAgICAgICAgPjwvYmMtaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YmMtaWNvbiBzaXplPVwic20gXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiYy10b2dnbGUtYnV0dG9uXCI+XG4gICAgICAgICAge3sgaWNvblJpZ2h0IH19XG4gICAgICAgIDwvYmMtaWNvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1hY2NvcmRpb24tY29udGFpbmVyLWNvbHVtbi1tb2JpbGUgYmMtZmxleCBiYy1qdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmMtYWNjb3JkaW9uLWNvbHVtbnMtY29udGFpbmVyXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cImJjLWFjY29yZGlvbi1jb2x1bW5cIj57eyBsYXN0VmFsdWVDb2x1bW4gfX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctdGVtcGxhdGUgI290aGVyQWNjb3JkaW9ucz5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImJjLWFjY29yZGlvbi1oZWFkZXItbGVmdFwiPlxuICAgICAgPGJjLWljb24gYXJpYS1sYWJlbD1cInt7IGxlZnRJY29uIH19XCIgc2l6ZT1cInNtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgKm5nSWY9XCJsZWZ0SWNvblwiPlxuICAgICAgICB7eyBsZWZ0SWNvbiB9fVxuICAgICAgPC9iYy1pY29uPlxuICAgICAgPGltZyBjbGFzcz1cImJjLWltZ1wiIHNyYz1cInt7IHNyY0xvZ28gfX1cIiBhbHQ9XCJ7eyBhbHRMb2dvIH19XCIgKm5nSWY9XCJzcmNMb2dvXCIgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtYWNjb3JkaW9uLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cImJjLWFjY29yZGlvbi10aXRsZVwiPlxuICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgPGJjLWljb25cbiAgICAgICAgICAgICpuZ0lmPVwidG9vbHRpcEljb24uaXNUb29sdGlwXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYmMtaWNvbiBiYy10b29sdGlwXCJcbiAgICAgICAgICAgIGJjLXRvb2x0aXBcbiAgICAgICAgICAgIFtiY1Rvb2x0aXBQb3NpdGlvbl09XCJ0b29sdGlwSWNvbi5wb3NpdGlvblRvb2x0aXBcIlxuICAgICAgICAgICAgW2JjVG9vbHRpcFRleHRdPVwidG9vbHRpcEljb24udGV4dFRvb2x0aXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIGluZm8tY2lyY2xlXG4gICAgICAgICAgPC9iYy1pY29uPlxuICAgICAgICA8L2g2PlxuICAgICAgICA8cCBjbGFzcz1cImJjLWFjY29yZGlvbi1zdWJ0aXRsZVwiICpuZ0lmPVwic3VidGl0bGVcIj5cbiAgICAgICAgICB7eyBzdWJ0aXRsZSB9fVxuICAgICAgICAgIDxiYy1pY29uXG4gICAgICAgICAgICAqbmdJZj1cInN1YnRpdGxlSWNvblwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgY2xhc3M9XCJiYy1pY29uIGJjLXRvb2x0aXBcIlxuICAgICAgICAgICAgYmMtdG9vbHRpcFxuICAgICAgICAgICAgW2JjVG9vbHRpcFBvc2l0aW9uXT1cInRvb2x0aXBJY29uLnBvc2l0aW9uVG9vbHRpcFwiXG4gICAgICAgICAgICBbYmNUb29sdGlwVGV4dF09XCJ0b29sdGlwSWNvbi50ZXh0VG9vbHRpcFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgc3VidGl0bGVJY29uIH19XG4gICAgICAgICAgPC9iYy1pY29uPlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtYWNjb3JkaW9uLWhlYWRlci1yaWdodFwiPlxuICAgICAgPHAgY2xhc3M9XCJiYy1hY2NvcmRpb24tbGFiZWxcIiAqbmdJZj1cImxhYmVsXCI+e3sgbGFiZWwgfX08L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmMtYWNjb3JkaW9uLWNvbHVtbnMtY29udGFpbmVyXCIgKm5nSWY9XCJjb2x1bW5zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGg2XG4gICAgICAgICAgY2xhc3M9XCJiYy1hY2NvcmRpb24tY29sdW1uXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2JjLWFsaWduLWxlZnQnOiBjb2x1bW4uYWxpZ25MZWZ0IH1cIlxuICAgICAgICA+XG4gICAgICAgICAge3sgY29sdW1uLnZhbHVlIH19XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYy1hY2NvcmRpb24tY29sdW1uLWV4Y2hhbmdlXCIgKm5nSWY9XCJjb2x1bW4uZXhjaGFuZ2VcIj57eyBjb2x1bW4uZXhjaGFuZ2UgfX08L3NwYW4+XG4gICAgICAgIDwvaDY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYy1hY2NvcmRpb24tYWN0aW9uLWNvbnRhaW5lclwiICpuZ0lmPVwiYWN0aW9uc0ljb24ubGVuZ3RoID4gMFwiPlxuICAgICAgICA8YmMtaWNvbi1idXR0b25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaWNvbiBvZiBhY3Rpb25zSWNvblwiXG4gICAgICAgICAgW3R5cGVdPVwiJ2dob3N0J1wiXG4gICAgICAgICAgW3NpemVdPVwiJ21lZGl1bSdcIlxuICAgICAgICAgIFtjdXN0b21JY29uXT1cImljb25cIlxuICAgICAgICAgIFthcmlhTGFiZWxdPVwiaWNvblwiXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFjdGlvbihpY29uKVwiXG4gICAgICAgID48L2JjLWljb24tYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8YmMtaWNvbiBzaXplPVwic20gXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiYy10b2dnbGUtYnV0dG9uXCI+XG4gICAgICAgIHt7IGljb25SaWdodCB9fVxuICAgICAgPC9iYy1pY29uPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvaGVhZGVyPlxuIl19