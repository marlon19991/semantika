import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ContentChildren, HostListener, NgModule } from '@angular/core';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcButtonGroupBehavior } from '@bancolombia/design-system-behaviors';

/**
 * Importa el componente de Checks con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonGroupComponent
 * @implements {OnInit}
 */
class BcButtonGroupComponent {
    constructor(helper) {
        this.helper = helper;
        this.parentReady = false;
        /**
         * Id del elemento.
         *
         * @memberof BcButtonGroupComponent
         */
        this.buttonId = this.helper.getId(this);
        /**
         * valor del elemento.
         *
         * @memberof BcButtonGroupComponent
         */
        this.value = '';
        /**
         * Name del elemento.
         *
         * @memberof BcButtonGroupComponent
         */
        this.name = '';
        /**
         * taxindex del elemento.
         *
         * @memberof BcButtonGroupComponent
         */
        this.tabindex = 0;
        /**
         * Muestra opción seleccionada.
         *
         * @memberof BcButtonGroupComponent
         */
        this.changeState = new EventEmitter();
    }
}
BcButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonGroupComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcButtonGroupComponent, selector: "bc-button-group", inputs: { buttonId: "buttonId", value: "value", name: "name", tabindex: "tabindex" }, outputs: { changeState: "changeState" }, ngImport: i0, template: "<input class=\"bc-button-group-input\" [id]=\"buttonId\" type=\"radio\" [name]=\"name\" [value]=\"value\" tabindex=\"tabindex\">\n<label [for]=\"buttonId\"><span *ngIf=\"parentReady\">{{value}}</span></label>", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-button-group', template: "<input class=\"bc-button-group-input\" [id]=\"buttonId\" type=\"radio\" [name]=\"name\" [value]=\"value\" tabindex=\"tabindex\">\n<label [for]=\"buttonId\"><span *ngIf=\"parentReady\">{{value}}</span></label>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { buttonId: [{
                type: Input
            }], value: [{
                type: Input
            }], name: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], changeState: [{
                type: Output
            }] } });

/**
 * Importa el button group con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonGroupContentComponent
 */
class BcButtonGroupContainerComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
        * Esta salida emite el id del botón seleccionado.
        *
        * @type {EventEmitter<any>}
        * @memberof BcButtonGroupContentComponent
        */
        this.onchange = new EventEmitter();
        /**
          *
          * Id del componente.
          *
          * @type {string}
          * @memberof BcButtonGroupContentComponent
          */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Color del indicador del botón activo.
         * @type {string}
         * @memberof BcButtonGroupComponent
         */
        this.blackActiveIndicator = false;
        /**
       * Tamaño de letra de los botones.
       * @type {string}
       * @memberof BcButtonGroupComponent
       */
        this.fontSize = '';
    }
    onClick(target) {
        if (target.id) {
            this.onchange.emit(target.id);
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.setNameForChildrens();
        });
        this.bcButtonGroupBehavior = new BcButtonGroupBehavior();
        const activeIndicatorColor = !this.blackActiveIndicator ? 'defaultActiveIndicator' : 'blackActiveIndicator';
        this.bcButtonGroupBehavior.setId(this.componentId);
        this.bcButtonGroupBehavior.setUp();
        this.bcButtonGroupBehavior.setInitialIndicator();
        this.bcButtonGroupBehavior.setActiveButtonColor(activeIndicatorColor);
        this.bcButtonGroupBehavior.setFontSize(this.fontSize);
    }
    setNameForChildrens() {
        for (const btn of this.childrens) {
            btn.name = this.groupName;
            btn.parentReady = true;
        }
    }
}
BcButtonGroupContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonGroupContainerComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcButtonGroupContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcButtonGroupContainerComponent, selector: "bc-button-group-container", inputs: { blackActiveIndicator: "blackActiveIndicator", fontSize: "fontSize", groupName: "groupName" }, outputs: { onchange: "onchange" }, host: { listeners: { "click": "onClick($event.target)" } }, queries: [{ propertyName: "childrens", predicate: BcButtonGroupComponent }], ngImport: i0, template: `
  <article class="bc-button-group-container" role="button" [id]=componentId>
  <div class="bc-button-indicator" 
       id="bc-button-indicator" 
       aria-hidden="true"><span></span></div>
    <ng-content></ng-content>
  </article>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonGroupContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-button-group-container',
                    template: `
  <article class="bc-button-group-container" role="button" [id]=componentId>
  <div class="bc-button-indicator" 
       id="bc-button-indicator" 
       aria-hidden="true"><span></span></div>
    <ng-content></ng-content>
  </article>`
                }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { onchange: [{
                type: Output
            }], blackActiveIndicator: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], groupName: [{
                type: Input
            }], childrens: [{
                type: ContentChildren,
                args: [BcButtonGroupComponent]
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event.target']]
            }] } });

/**
 * Importa el componete de Checks con
 * los diseños de Bancolombia S.A.
 * @package bc-button-group
 * @Component bc-button-group
 * @param  id Identificador unico||  (default)
 * @param  name Nombre del componente ||  (default)
 * @param  value Valor del componente ||  (default)
 * @param  label Texto del checkbox || (default)
 * @param  enabled Habilita o deshabilita el componente || true (default)
 * @param  isChecked Selecciona el check|| false (default)
 * @param  indeterminate Define el componente como indeterminado || false (default)
 * @param  themeDark Aplica diferentes estilos si se usara en aplicaciones oscuras || false (default)
 * @example
 *
 * @author: Bancolombia S.A
 */
class BcBtnGroupModule {
}
BcBtnGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBtnGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcBtnGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBtnGroupModule, declarations: [BcButtonGroupComponent, BcButtonGroupContainerComponent], imports: [CommonModule], exports: [BcButtonGroupComponent, BcButtonGroupContainerComponent] });
BcBtnGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBtnGroupModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBtnGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcButtonGroupComponent, BcButtonGroupContainerComponent],
                    imports: [CommonModule],
                    exports: [BcButtonGroupComponent, BcButtonGroupContainerComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcBtnGroupModule, BcButtonGroupComponent, BcButtonGroupContainerComponent };
//# sourceMappingURL=bancolombia-design-system-web-bc-button-group.mjs.map
