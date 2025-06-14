import * as i0 from '@angular/core';
import { EventEmitter, Component, HostBinding, Input, Output, ChangeDetectionStrategy, ContentChildren, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcTabsGroupBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
 * Componente tab del componente
 *
 * @export
 * @class BcTabComponent
 * @implements {OnInit}
 */
class BcTabComponent {
    constructor(el) {
        this.el = el;
        /**
         * Muestra o oculta el tab
         *
         * @type {boolean}
         * @memberof BcTabComponent
         */
        this.show = true;
        /**
         * Valor cada vez que cambia el tab.
         *
         * @type {EventEmitter<boolean>}
         * @memberof BcCheckboxComponent
         */
        this.changeState = new EventEmitter();
    }
    ngOnInit() {
        this.classTab = this.classTab != null ? this.classTab : 'bc-tab-content';
        this.elementClass = this.classTab;
    }
    ngOnChanges(changes) {
        if (!changes.firstChange) {
            this.changeState.emit(null);
        }
    }
}
BcTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTabComponent, selector: "bc-tab", inputs: { disabledTab: "disabledTab", label: "label", labelTemplate: "labelTemplate", show: "show", icon: "icon" }, outputs: { changeState: "changeState" }, host: { properties: { "class": "this.elementClass" } }, usesOnChanges: true, ngImport: i0, template: "<ng-content *ngIf=\"show\"></ng-content>\n\n", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-tab', template: "<ng-content *ngIf=\"show\"></ng-content>\n\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { elementClass: [{
                type: HostBinding,
                args: ['class']
            }], disabledTab: [{
                type: Input
            }], label: [{
                type: Input
            }], labelTemplate: [{
                type: Input
            }], show: [{
                type: Input
            }], icon: [{
                type: Input
            }], changeState: [{
                type: Output
            }] } });

/**
 * Componente tabs
 *
 * @export
 * @class BcTabsGroupComponent
 * @implements {DoCheck}
 * @implements {AfterViewInit}
 */
class BcTabsGroupComponent {
    constructor(changeDetector, bcHelperService, zone) {
        this.changeDetector = changeDetector;
        this.bcHelperService = bcHelperService;
        this.zone = zone;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcTabsGroupComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Animación. (este parámetro próximamente será deprecado)
         * @memberof BcTabsGroupComponent
         */
        this.animation = false;
        /**
         * Ocultar flechas. (este parámetro próximamente será deprecado)
         *
         * @type {boolean}
         * @memberof BcTabsGroupComponent
         */
        this.hiddenArrows = false;
        /**
        * Distribucion de los tabs. (este parámetro próximamente será deprecado)
        *
        * @type {string}
        * @memberof BcTabsGroupComponent
        */
        this.justifyContent = 'space-between';
        /**
         * Alineación de las tabs a la derecha, por defecto esta en false. (este parámetro próximamente será deprecado)
         * @memberof BcTabsGroupComponent
         */
        this.right = false;
        /**
         * Alineación de las tabs a la izquierda, por defecto esta en false. (este parámetro próximamente será deprecado)
         * @memberof BcTabsGroupComponent
         */
        this.left = false;
        /**
         * Parámetro para denotar el tipo de tab cuando está seleccionado
         *
         * @type {('regular | contrast')}
         * @memberof BcTabsGroupComponent
         */
        this.tabType = 'regular';
        /**
         * Parámetro para posicionar el lugar del ícono
         *
         * @type {('left | right')}
         * @memberof BcTabsGroupComponent
         */
        this.iconPosition = 'left';
        /**
         * Muestra el valor al cambiar el tab
         *
         * @memberof BcTabsGroupComponent
         */
        /**
         * Define si tiene o no tiene brackound el tab (este parámetro próximamente será deprecado)
         * Por defecto es false   true | false
         * @type {string}
         * @memberof BcTabsGroupComponent
         */
        this.backgroundTab = false;
        this.changeState = new EventEmitter();
        this.status = false;
        this.currentIndex = 0;
        this.headerTab = [];
        this.bcTabsGroupBehavior = new BcTabsGroupBehavior();
    }
    ngAfterViewInit() {
        this.initLabel();
        this.bcTabsGroupBehavior.setId(this.componentId);
        this.bcTabsGroupBehavior.setUp(true);
        this.changeDetector.detectChanges();
    }
    ngDoCheck() {
        this.setStyleClass();
        this.changeDetector.markForCheck();
    }
    ngOnInit() {
        this.bcTabsGroupBehavior.callBackTabSelected(this.onSelectedTab.bind(this));
    }
    /**
     * Permite actualizar el contenido desde un ámbito externo.
     *
     * @memberof BcTabsGroupComponent
     */
    updateState() {
        if (!this.status) {
            this.status = true;
            this.zone.runOutsideAngular(() => {
                this.bcTabsGroupBehavior.setUp(true);
            });
        }
    }
    /**
     * Inicializa el arreglo de títulos dentro del Tab, ya sea un ngTemplate o un string.
     *
     * @private
     * @memberof BcTabsGroupComponent
     */
    initLabel() {
        this.tabsElements.forEach((element, index) => {
            const templateTab = element.labelTemplate;
            const labelTab = element.label;
            let content = labelTab;
            let typeLabel = 'Label';
            if (labelTab === undefined && templateTab) {
                typeLabel = 'Template';
                content = templateTab;
            }
            this.headerTab.push({
                type: typeLabel,
                content,
                show: element.show,
                icon: element.icon,
                index,
                disabled: element.disabledTab
            });
        });
    }
    /**
     * Actualiza la clase padre según la orientación y el tema del componente.
     *
     * @memberof BcTabsGroupComponent
     */
    setStyleClass() {
        this.tabClass = 'bc-tabs-group';
    }
    /**
     * Evento que se ejecuta cuando seleccionan un tab
     *
     * @memberof BcTabsGroupComponent
     */
    onSelectedTab(index) {
        this.changeState.emit(index);
        this.currentIndex = index;
    }
    /**
     * Devuelve el index del tab actual seleccionado
     *
     * @memberof BcTabsGroupComponent
     */
    getCurrentIndex() {
        return this.currentIndex;
    }
    /**
    * Selecciona un tab
    *
    * @memberof BcTabsGroupComponent
    */
    selectIndex(index) {
        this.bcTabsGroupBehavior.selectTab(index);
    }
}
BcTabsGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsGroupComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.BcHelperService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
BcTabsGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTabsGroupComponent, selector: "bc-tabs-group", inputs: { componentId: "componentId", selectedIndex: "selectedIndex", orientation: "orientation", animation: "animation", hiddenArrows: "hiddenArrows", justifyContent: "justifyContent", right: "right", left: "left", tabType: "tabType", iconPosition: "iconPosition", backgroundTab: "backgroundTab" }, outputs: { changeState: "changeState" }, queries: [{ propertyName: "tabsElements", predicate: BcTabComponent, descendants: true }], ngImport: i0, template: "<div [ngClass]=\"tabClass\" [id]=componentId>\n\n    <nav class=\"bc-tab-header bc-tab-background\">\n        <ng-container *ngTemplateOutlet=\"labelContent\"></ng-container>\n        <div class=\"arrow-buttons\">\n            <button class=\"prev bc-icon-button bc-icon-button-ghost bc-icon-button-medium\"><i\n                class=\"bc-icon\">angle-left-small</i></button>\n            <button class=\"next bc-icon-button bc-icon-button-ghost bc-icon-button-medium\"><i\n                class=\"bc-icon\">angle-right-small</i></button>\n        </div>\n    </nav>\n\n    <ng-template #labelContent>\n        <ul #labels class=\"bc-tabs\">\n            <li class=\"bc-tab {{tabType == 'regular' ? 'bc-tab-regular' : 'bc-tab-contrast'}}\" \n                [ngClass]=\"tab.disabled == true ? 'bc-tab-disabled' : ''\" *ngFor=\"let tab of headerTab; let i = index;\">\n                {{i==headerTab.length-1 ? updateState() : ''}}\n                <em *ngIf=\"tab.icon\" class=\"bc-icon bc-sm {{iconPosition == 'left' ? 'bc-tab-icon-left' : 'bc-tab-icon-right'}}\" aria-hidden=\"true\">{{tab.icon}}</em>\n                <ng-container *ngIf=\"tab['type'] == 'Label'\">\n                    <span>\n                        {{tab[\"content\"]}}\n                    </span>\n                </ng-container>\n            </li>\n            <span *ngIf=\"tabType == 'regular'\" class=\"bc-tabs-border\"></span>\n        </ul>\n    </ng-template>\n\n    <div class=\"bc-tab-body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-tabs-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [ngClass]=\"tabClass\" [id]=componentId>\n\n    <nav class=\"bc-tab-header bc-tab-background\">\n        <ng-container *ngTemplateOutlet=\"labelContent\"></ng-container>\n        <div class=\"arrow-buttons\">\n            <button class=\"prev bc-icon-button bc-icon-button-ghost bc-icon-button-medium\"><i\n                class=\"bc-icon\">angle-left-small</i></button>\n            <button class=\"next bc-icon-button bc-icon-button-ghost bc-icon-button-medium\"><i\n                class=\"bc-icon\">angle-right-small</i></button>\n        </div>\n    </nav>\n\n    <ng-template #labelContent>\n        <ul #labels class=\"bc-tabs\">\n            <li class=\"bc-tab {{tabType == 'regular' ? 'bc-tab-regular' : 'bc-tab-contrast'}}\" \n                [ngClass]=\"tab.disabled == true ? 'bc-tab-disabled' : ''\" *ngFor=\"let tab of headerTab; let i = index;\">\n                {{i==headerTab.length-1 ? updateState() : ''}}\n                <em *ngIf=\"tab.icon\" class=\"bc-icon bc-sm {{iconPosition == 'left' ? 'bc-tab-icon-left' : 'bc-tab-icon-right'}}\" aria-hidden=\"true\">{{tab.icon}}</em>\n                <ng-container *ngIf=\"tab['type'] == 'Label'\">\n                    <span>\n                        {{tab[\"content\"]}}\n                    </span>\n                </ng-container>\n            </li>\n            <span *ngIf=\"tabType == 'regular'\" class=\"bc-tabs-border\"></span>\n        </ul>\n    </ng-template>\n\n    <div class=\"bc-tab-body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.BcHelperService }, { type: i0.NgZone }]; }, propDecorators: { componentId: [{
                type: Input
            }], selectedIndex: [{
                type: Input
            }], orientation: [{
                type: Input
            }], animation: [{
                type: Input
            }], hiddenArrows: [{
                type: Input
            }], justifyContent: [{
                type: Input
            }], right: [{
                type: Input
            }], left: [{
                type: Input
            }], tabType: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }], backgroundTab: [{
                type: Input
            }], changeState: [{
                type: Output
            }], tabsElements: [{
                type: ContentChildren,
                args: [BcTabComponent, { descendants: true }]
            }] } });

/**
 * Importa el componente tabs con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-tabs-group></bc-tabs-group>
 * @fileoverview Permite crear un tabulador para agrupar elementos por pestañas.
 * @param typeTheme default: 'light';
 * @fires changeState: Emite el índice del tab seleccionado cuando existe un cambio (number);
 * @param orientation : string default=horizontal;
 * @param selectedIndex default: 0;
 * @example
 * <bc-tabs-group
 *          (changeState)="myEvent($event)"
 *          [typeTheme]="'dark'"
 *          orientation="vertical"
 *          selectedIndex="1">
 *  </bc-tabs-group>
 *
 *
 * @componente <bc-tab></bc-tab>
 * @fileoverview Corresponde a un elemento de un tabulador, que puede admitir contenido por parte del usuario.
 * @description Si se desea agregar contenido a la cabecera del tabulador se debe crear una plantilla o layout (ng-template)
 * y pasar por referencia la misma al elemento usando el identificador de la misma. Lo que se encuentre dentro del tag
 * correspondiente al componente será renderizado en el cuerpo del tabulador, con excepción claro está del ng-template.
 * Si se define tanto una plantilla como un titulo de encabezado se tiene prioridad en el parámetro 'label'.
 * Si no se especifica ninguno de los anteriores se mostrará un espacion en blanco.
 * @param  label: string default: '';
 * @param  labelTemplate: TemplateRef<any> default:null;
 * @example
 * <bc-tabs-group
 *          (changeState)="myEvent($event)"
 *          [typeTheme]="'dark'"
 *          orientation="vertical"
 *          selectedIndex="1">
 *
 *        <bc-tab [labelTemplate]="tab1">
 *             <ng-template #tab1>
 *               <bc-icon size="sm" aria-hidden="true" aria-label="Tab 1">cog</bc-icon>
 *             </ng-template>
 *             <p>Disposición Inicial</p>
 *         </bc-tab>
 *  </bc-tabs-group>
 *
 *
 * @author: Bancolombia S.A.
 * _-_
 */
class BcTabsModule {
}
BcTabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsModule, declarations: [BcTabsGroupComponent, BcTabComponent], imports: [CommonModule, BcIconModule], exports: [BcTabsGroupComponent, BcTabComponent] });
BcTabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsModule, providers: [BcHelperService], imports: [[CommonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcTabsGroupComponent, BcTabComponent],
                    imports: [CommonModule, BcIconModule],
                    providers: [BcHelperService],
                    exports: [BcTabsGroupComponent, BcTabComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcTabComponent, BcTabsGroupComponent, BcTabsModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-tabs-group.mjs.map
