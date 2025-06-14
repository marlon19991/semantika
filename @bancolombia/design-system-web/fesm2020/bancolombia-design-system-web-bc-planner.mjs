import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, NgModule } from '@angular/core';
import * as i2 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcPlannerBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Importa el componente de calendario con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcPlannerComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
class BcPlannerComponent extends BcGeneralInputComponent {
    constructor(controlDirective, bcHelperService, changeDetectorRef) {
        super();
        this.controlDirective = controlDirective;
        this.bcHelperService = bcHelperService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Id del elemento planner.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Dato de entrada que recibe los items a mostrar.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.items = [];
        /**
         *.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.itemsTop = [];
        /**
         * Dato de salida que muestra cuando cambia el valor.
         *
         * @type {string}
         * @memberOf BcPlannerComponent
         */
        this.changeValue = new EventEmitter();
        this.today = new Date();
        this.todayMonth = this.today.getMonth();
        this.todayYear = this.today.getFullYear();
        this.element = new BcPlannerBehavior();
        this.element.outputChanges = (value) => {
            this.changesBehavior = value;
            this.setMonth_Year();
        };
        this.element.outputValues = (value) => {
            this.onInput(value);
        };
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.element.setId(this.componentId);
        this.element.setUp();
        if (this.items) {
            this.element.setItems(this.postItems(this.items));
        }
        if (this.itemsTop) {
            this.element.setItemsTop(this.itemsTop);
        }
    }
    ngOnChanges(changes) {
        if (changes) {
            this.changeDetectorRef.detectChanges();
            if (changes.items) {
                this.element.setItems(this.postItems(changes.items.currentValue));
            }
        }
    }
    postItems(Items) {
        return Items.filter((a) => {
            if (a.date.getMonth() == this.todayMonth && a.date.getFullYear() == this.todayYear) {
                return true;
            }
            return false;
        });
    }
    setMonth_Year() {
        this.todayMonth = this.changesBehavior.monthValue;
        this.todayYear = this.changesBehavior.yearValue;
        if (this.items) {
            this.element.setItems(this.postItems(this.items));
        }
    }
    onInput(value) {
        this.changeValue.emit(value);
    }
}
BcPlannerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.BcHelperService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
BcPlannerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPlannerComponent, selector: "bc-planner", inputs: { componentId: "componentId", items: "items", itemsTop: "itemsTop" }, outputs: { changeValue: "changeValue" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"bc-planner\" [id]=\"componentId\"></div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-planner', template: "<div class=\"bc-planner\" [id]=\"componentId\"></div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i2.BcHelperService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], items: [{
                type: Input
            }], itemsTop: [{
                type: Input
            }], changeValue: [{
                type: Output
            }] } });

/**
 * Importa el componente bcCalendar con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-calendar>
 *
 * @param  {string} calendarType: Tipo de calendario a mostrar 'split' 'simple 'range' default : simple
 * @param {number[]} fastButtons: array de MAXIMO 3 numeros enteros para botones d eseleccion rapida. default: ninguno
 * @param {string} componentId: id html del elemento
 * @example
 * <bc-calendar></bc-calendar>
 *
 * @author: Bancolombia S.A
 */
class BcPlannerModule {
}
BcPlannerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPlannerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerModule, declarations: [BcPlannerComponent], imports: [CommonModule], exports: [BcPlannerComponent] });
BcPlannerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPlannerComponent],
                    imports: [CommonModule],
                    exports: [BcPlannerComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcPlannerComponent, BcPlannerModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-planner.mjs.map
