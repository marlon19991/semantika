import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ContentChildren, Directive, ViewChild, ContentChild, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BcAccordionBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@bancolombia/design-system-web/bc-icon-button';
import { BcIconButtonModule } from '@bancolombia/design-system-web/bc-icon-button';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@bancolombia/design-system-web/bc-tooltip';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';

/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 *
 * @export
 * @class BcAccordionHeaderComponent
 */
class BcAccordionHeaderComponent {
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

/**
 * Importa el Acordeón para contener elementos
 *
 * @export
 * @class BcAccordionsGroupComponent
 * @implements {OnInit}
 */
class BcAccordionGroupComponent {
    /**
     * Creates an instance of BcAccordionGroupComponent.
     * @param {ElementRef} elementRef
     * @memberof BcAccordionGroupComponent
     */
    constructor(bcHelperService, elementRef) {
        this.bcHelperService = bcHelperService;
        this.elementRef = elementRef;
        /**
         * Define el comportamiento de evento expandir de la acordeón
         * Si es single, solo se podrá expandir una acordeón a la vez
         * es decir, al expandir una se cierra la que estaba activa.
         * Valor por defecto es false.
         *
         * @memberof BcAccordionGroupComponent
         */
        this.single = false;
        /**
         * Evento que indica el index de una acordeón cuando esta es abierta o activada
         *
         * @type {EventEmitter<number>}
         * @memberof BcAccordionGroupComponent
         */
        this.select = new EventEmitter();
        this.componentId = this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        this.bcAccordionGroupBehavior = new BcAccordionBehavior();
        this.bcAccordionGroupBehavior.activeFunction = (index) => {
            this.select.emit(index);
        };
        this.initBehavior();
        this.headers.changes.subscribe((res) => {
            this.headers = res;
            this.initBehavior();
        });
    }
    initBehavior() {
        this.bcAccordionGroupBehavior.setElement(this.elementRef.nativeElement);
        this.bcAccordionGroupBehavior.setUp(true);
    }
}
BcAccordionGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionGroupComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcAccordionGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAccordionGroupComponent, selector: "bc-accordions-group", inputs: { single: "single", componentId: "componentId" }, outputs: { select: "select" }, queries: [{ propertyName: "headers", predicate: BcAccordionHeaderComponent, descendants: true }], ngImport: i0, template: "<div\n  [id]=\"componentId\"\n  class=\"bc-accordions-group\"\n  role=\"group\"\n  [attr.data-is-single]=\"single ? 'true' : null\"\n>\n  <ng-content></ng-content>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-accordions-group', template: "<div\n  [id]=\"componentId\"\n  class=\"bc-accordions-group\"\n  role=\"group\"\n  [attr.data-is-single]=\"single ? 'true' : null\"\n>\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { single: [{
                type: Input
            }], select: [{
                type: Output
            }], headers: [{
                type: ContentChildren,
                args: [BcAccordionHeaderComponent, { descendants: true }]
            }], componentId: [{
                type: Input
            }] } });

/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 * @export
 * @class BcAccordionComponent
 */
class BcAccordionComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Esta entrada permite indicar un id único al componente dentro del DOM.
         *
         * @type {string}
         * @memberof BcInputSelectComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Tipo de acordeón [ basic(default) | info | advance | column | minimal | minimal-unbordered]
         * Define la esctructura que va a tener el acordeón, por defecto es básica (basic).
         *
         * @type {string}
         * @memberof BcAccordionHeaderComponent
         */
        this.type = 'basic';
        /**
         * Permite configurar el comportamiento del acordeón para que este se muestre expandido desde su carga en el DOM
         * es de tipo booleana y por defecto es false.
         *
         * @type {boolean}
         * @memberof BcAccordionHeaderComponent
         */
        this.active = false;
        /**
         * Parametro por deprecar, debido a que no es parte del componente, de acuerdo a documentacion Figma.
         * No realiza ninguna acción.
         *
         * @type {boolean}
         * @memberof BcAccordionHeaderComponent
         */
        this.disabled = false;
    }
}
BcAccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcAccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAccordionComponent, selector: "bc-accordion", inputs: { componentId: "componentId", type: "type", active: "active", disabled: "disabled" }, ngImport: i0, template: "<article\n  class=\"bc-accordion bc-accordion-{{ type }} bc-accordion-container-{{ type }}\"\n  id=\"{{ componentId }}\"\n  [ngClass]=\"{ 'bc-active': active}\"\n>\n  <ng-content></ng-content>\n</article>\n", directives: [{ type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-accordion', template: "<article\n  class=\"bc-accordion bc-accordion-{{ type }} bc-accordion-container-{{ type }}\"\n  id=\"{{ componentId }}\"\n  [ngClass]=\"{ 'bc-active': active}\"\n>\n  <ng-content></ng-content>\n</article>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], type: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class BcAccordionContentDirDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
BcAccordionContentDirDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionContentDirDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
BcAccordionContentDirDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcAccordionContentDirDirective, selector: "[bc-accordion-content-dir]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionContentDirDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-accordion-content-dir]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 *
 * @export
 * @class BcAccordionContentComponent
 */
class BcAccordionContentComponent {
    constructor(bcHelperService, elementHTML) {
        this.bcHelperService = bcHelperService;
        this.elementHTML = elementHTML;
        this.componentId = this.bcHelperService.getId(this);
        this._wasOpened = false;
    }
    isActive() {
        const hostElement = this.elementHTML.nativeElement;
        const parentElement = hostElement.parentNode;
        const isOpen = parentElement.classList.contains('bc-active');
        if (!this._wasOpened && isOpen) {
            this._wasOpened = true;
        }
        return this._wasOpened;
    }
}
BcAccordionContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionContentComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcAccordionContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAccordionContentComponent, selector: "bc-accordion-content", inputs: { componentId: "componentId" }, queries: [{ propertyName: "content", first: true, predicate: BcAccordionContentDirDirective, descendants: true }], viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["contentRef"], descendants: true }], ngImport: i0, template: "<section class=\"bc-accordion-content\" [id]=\"componentId\">\n  <div *ngIf=\"isActive()\">\n    <ng-content></ng-content>\n    <ng-container [ngTemplateOutlet]=\"content?.templateRef\"></ng-container>\n  </div>\n</section>\n", directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-accordion-content', queries: {
                        contentRef: new ViewChild('contentRef')
                    }, template: "<section class=\"bc-accordion-content\" [id]=\"componentId\">\n  <div *ngIf=\"isActive()\">\n    <ng-content></ng-content>\n    <ng-container [ngTemplateOutlet]=\"content?.templateRef\"></ng-container>\n  </div>\n</section>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], content: [{
                type: ContentChild,
                args: [BcAccordionContentDirDirective]
            }] } });

/**
 * Importa el acordion con los diseños de Bancolombia S.A.
 * @package bc-accordions-group, bc-accordion, bc-accordion-header, bc-accordion-content
 * @Component bc-accordions-group
 * @Description Este componente parametriza el comportamiento del acordeon como grupo
 * @param multiple Define el comportamiento de evento expandir de la acordeón
 * Si es multiple, solo se podrá expandir una acordeón a la vez
 * es decir, al expandir una se cierra la que estaba activa
 * @Component bc-accordion
 * @Description Este componente se encarga de dar formato a cada acordeon y el comportamiento
 * de abierto y cerrado
 * @param type Tipo de accordeón [ basic(default) | info | advance | column | minimal | minimal-unbordered]
 * @Component bc-accordion-header
 * @param title  Título principal
 * @param subtitle  Subtítulo
 * @param leftIcon  Icono a la izquierda
 * @param titleIcon  Icono al lado del título
 * @param subtitleIcon  Icono al lado del subtítulo
 * @param active  Indicar si esta activo
 * @param actionsIcon  Icono de las acciones a la derecha
 * @param columns  Valores de las columnas a la derecha de tipo AccordionColumn
 * @param label  Label a la parte derecha
 * @param actionSelected Evento cuando se selecciona una acción
 * @param iconRight Icono al extremo derecho, permite expadir o contraer la acordeón
 * @Component bc-accordion-content
 * @Description Este componente organiza administra el contenido del acordeon el cual
 * es libre para el desarrollador
 *
 * @example
 *  <h3>Acordeón avazando</h3>
 *   <bc-accordions-group>
 *     <bc-accordion>
 *       <bc-accordion-header
 *         leftIcon="idea"
 *         title="Acordeón avazando"
 *         titleIcon="info"
 *         subtitle="Subtítulo"
 *         subtitleIcon="info"
 *         [actionsIcon]="actionsIcon"
 *         (actionSelected)="myAction($event)"
 *       ></bc-accordion-header>
 *       <bc-accordion-content>
 *         Tiene los elementos esenciales y se le adiciona un subtítulo y más
 *         opciones de iconos para acciones relacionadas al componente.
 *       </bc-accordion-content>
 *     </bc-accordion>
 *   </bc-accordions-group>
 *
 * @author: Bancolombia S.A
 */
class BcAccordionModule {
}
BcAccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcAccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionModule, declarations: [BcAccordionGroupComponent,
        BcAccordionComponent,
        BcAccordionHeaderComponent,
        BcAccordionContentComponent,
        BcAccordionContentDirDirective], imports: [CommonModule, BcIconModule, BcTooltipModule, BcIconButtonModule], exports: [BcAccordionGroupComponent, BcAccordionComponent, BcAccordionHeaderComponent, BcAccordionContentComponent, BcAccordionContentDirDirective] });
BcAccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionModule, imports: [[CommonModule, BcIconModule, BcTooltipModule, BcIconButtonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcAccordionGroupComponent,
                        BcAccordionComponent,
                        BcAccordionHeaderComponent,
                        BcAccordionContentComponent,
                        BcAccordionContentDirDirective
                    ],
                    imports: [CommonModule, BcIconModule, BcTooltipModule, BcIconButtonModule],
                    exports: [BcAccordionGroupComponent, BcAccordionComponent, BcAccordionHeaderComponent, BcAccordionContentComponent, BcAccordionContentDirDirective],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcAccordionComponent, BcAccordionContentComponent, BcAccordionContentDirDirective, BcAccordionGroupComponent, BcAccordionHeaderComponent, BcAccordionModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-accordion.mjs.map
