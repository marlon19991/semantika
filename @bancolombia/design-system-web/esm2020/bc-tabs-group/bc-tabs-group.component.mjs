import { Component, Input, Output, EventEmitter, ContentChildren, ChangeDetectionStrategy } from '@angular/core';
import { BcTabComponent } from './bc-tab/bc-tab.component';
import { BcTabsGroupBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Componente tabs
 *
 * @export
 * @class BcTabsGroupComponent
 * @implements {DoCheck}
 * @implements {AfterViewInit}
 */
export class BcTabsGroupComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFicy1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtdGFicy1ncm91cC9iYy10YWJzLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWJzLWdyb3VwL2JjLXRhYnMtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixlQUFlLEVBQ2YsdUJBQXVCLEVBTXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQVEzRTs7Ozs7OztHQU9HO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQWdHL0IsWUFBb0IsY0FBaUMsRUFDM0MsZUFBZ0MsRUFBVSxJQUFZO1FBRDVDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUMzQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBL0ZoRTs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFjaEU7OztXQUdHO1FBQ00sY0FBUyxHQUFZLEtBQUssQ0FBQztRQUVwQzs7Ozs7V0FLRztRQUNNLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRXZDOzs7OztVQUtFO1FBQ08sbUJBQWMsR0FBVyxlQUFlLENBQUM7UUFFbEQ7OztXQUdHO1FBQ00sVUFBSyxHQUFHLEtBQUssQ0FBQztRQUV2Qjs7O1dBR0c7UUFDTSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRXRCOzs7OztXQUtHO1FBQ00sWUFBTyxHQUFXLFNBQVMsQ0FB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Q0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7aUhBck1VLG9CQUFvQjtxR0FBcEIsb0JBQW9CLHVhQXdGZCxjQUFjLGdEQzVIakMsKy9DQWdDQTsyRkRJYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UsZUFBZSxtQkFFUix1QkFBdUIsQ0FBQyxNQUFNOzJKQVV0QyxXQUFXO3NCQUFuQixLQUFLO2dCQU9HLGFBQWE7c0JBQXJCLEtBQUs7Z0JBTUcsV0FBVztzQkFBbkIsS0FBSztnQkFLRyxTQUFTO3NCQUFqQixLQUFLO2dCQVFHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFNRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQVFHLE9BQU87c0JBQWYsS0FBSztnQkFRRyxZQUFZO3NCQUFwQixLQUFLO2dCQWVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRUksV0FBVztzQkFBcEIsTUFBTTtnQkFDaUQsWUFBWTtzQkFBbkUsZUFBZTt1QkFBQyxjQUFjLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEb0NoZWNrLFxuICBBZnRlclZpZXdJbml0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9iYy10YWIvYmMtdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBCY1RhYnNHcm91cEJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmludGVyZmFjZSBMYWJlbFR5cGVJbnRlcmZhY2Uge1xuICB0eXBlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IGFueTtcbiAgc2hvdzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29tcG9uZW50ZSB0YWJzXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjVGFic0dyb3VwQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7RG9DaGVja31cbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy10YWJzLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXRhYnMtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQmNUYWJzR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1RhYnNHcm91cENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuICAvKipcbiAgICogSW5kaWNlLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQmNUYWJzR3JvdXBDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAqIE9yaWVudGFjacOzbi4gKGVzdGUgcGFyw6FtZXRybyBwcsOzeGltYW1lbnRlIHNlcsOhIGRlcHJlY2FkbylcbiAqIEBtZW1iZXJvZiBCY1RhYnNHcm91cENvbXBvbmVudFxuICovXG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbmltYWNpw7NuLiAoZXN0ZSBwYXLDoW1ldHJvIHByw7N4aW1hbWVudGUgc2Vyw6EgZGVwcmVjYWRvKVxuICAgKiBAbWVtYmVyb2YgQmNUYWJzR3JvdXBDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPY3VsdGFyIGZsZWNoYXMuIChlc3RlIHBhcsOhbWV0cm8gcHLDs3hpbWFtZW50ZSBzZXLDoSBkZXByZWNhZG8pXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNUYWJzR3JvdXBDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGhpZGRlbkFycm93czogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIERpc3RyaWJ1Y2lvbiBkZSBsb3MgdGFicy4gKGVzdGUgcGFyw6FtZXRybyBwcsOzeGltYW1lbnRlIHNlcsOhIGRlcHJlY2FkbylcbiAgKlxuICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQG1lbWJlcm9mIEJjVGFic0dyb3VwQ29tcG9uZW50XG4gICovXG4gIEBJbnB1dCgpIGp1c3RpZnlDb250ZW50OiBzdHJpbmcgPSAnc3BhY2UtYmV0d2Vlbic7XG5cbiAgLyoqXG4gICAqIEFsaW5lYWNpw7NuIGRlIGxhcyB0YWJzIGEgbGEgZGVyZWNoYSwgcG9yIGRlZmVjdG8gZXN0YSBlbiBmYWxzZS4gKGVzdGUgcGFyw6FtZXRybyBwcsOzeGltYW1lbnRlIHNlcsOhIGRlcHJlY2FkbylcbiAgICogQG1lbWJlcm9mIEJjVGFic0dyb3VwQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSByaWdodCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbGluZWFjacOzbiBkZSBsYXMgdGFicyBhIGxhIGl6cXVpZXJkYSwgcG9yIGRlZmVjdG8gZXN0YSBlbiBmYWxzZS4gKGVzdGUgcGFyw6FtZXRybyBwcsOzeGltYW1lbnRlIHNlcsOhIGRlcHJlY2FkbylcbiAgICogQG1lbWJlcm9mIEJjVGFic0dyb3VwQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBsZWZ0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFBhcsOhbWV0cm8gcGFyYSBkZW5vdGFyIGVsIHRpcG8gZGUgdGFiIGN1YW5kbyBlc3TDoSBzZWxlY2Npb25hZG9cbiAgICpcbiAgICogQHR5cGUgeygncmVndWxhciB8IGNvbnRyYXN0Jyl9XG4gICAqIEBtZW1iZXJvZiBCY1RhYnNHcm91cENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGFiVHlwZTogc3RyaW5nID0gJ3JlZ3VsYXInO1xuXG4gIC8qKlxuICAgKiBQYXLDoW1ldHJvIHBhcmEgcG9zaWNpb25hciBlbCBsdWdhciBkZWwgw61jb25vXG4gICAqXG4gICAqIEB0eXBlIHsoJ2xlZnQgfCByaWdodCcpfVxuICAgKiBAbWVtYmVyb2YgQmNUYWJzR3JvdXBDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGljb25Qb3NpdGlvbjogc3RyaW5nID0gJ2xlZnQnO1xuXG4gIC8qKlxuICAgKiBNdWVzdHJhIGVsIHZhbG9yIGFsIGNhbWJpYXIgZWwgdGFiXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhYnNHcm91cENvbXBvbmVudFxuICAgKi9cblxuICAvKipcbiAgICogRGVmaW5lIHNpIHRpZW5lIG8gbm8gdGllbmUgYnJhY2tvdW5kIGVsIHRhYiAoZXN0ZSBwYXLDoW1ldHJvIHByw7N4aW1hbWVudGUgc2Vyw6EgZGVwcmVjYWRvKVxuICAgKiBQb3IgZGVmZWN0byBlcyBmYWxzZSAgIHRydWUgfCBmYWxzZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNUYWJzR3JvdXBDb21wb25lbnRcbiAgICovXG5cbiAgQElucHV0KCkgYmFja2dyb3VuZFRhYjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2VTdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAQ29udGVudENoaWxkcmVuKEJjVGFiQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHRhYnNFbGVtZW50czogQmNUYWJDb21wb25lbnRbXTsgIFxuXG4gIGhlYWRlclRhYjogTGFiZWxUeXBlSW50ZXJmYWNlW107XG4gIGJjVGFic0dyb3VwQmVoYXZpb3I7XG4gIHRhYkNsYXNzOiBzdHJpbmc7XG4gIHN0YXR1cyA9IGZhbHNlO1xuICBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcblxuICAgIHRoaXMuaGVhZGVyVGFiID0gW107XG4gICAgdGhpcy5iY1RhYnNHcm91cEJlaGF2aW9yID0gbmV3IEJjVGFic0dyb3VwQmVoYXZpb3IoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRMYWJlbCgpO1xuICAgIHRoaXMuYmNUYWJzR3JvdXBCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICB0aGlzLmJjVGFic0dyb3VwQmVoYXZpb3Iuc2V0VXAodHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdHlsZUNsYXNzKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmNUYWJzR3JvdXBCZWhhdmlvci5jYWxsQmFja1RhYlNlbGVjdGVkKHRoaXMub25TZWxlY3RlZFRhYi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJtaXRlIGFjdHVhbGl6YXIgZWwgY29udGVuaWRvIGRlc2RlIHVuIMOhbWJpdG8gZXh0ZXJuby5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFic0dyb3VwQ29tcG9uZW50XG4gICAqL1xuICB1cGRhdGVTdGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdHVzKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IHRydWU7XG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLmJjVGFic0dyb3VwQmVoYXZpb3Iuc2V0VXAodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pY2lhbGl6YSBlbCBhcnJlZ2xvIGRlIHTDrXR1bG9zIGRlbnRybyBkZWwgVGFiLCB5YSBzZWEgdW4gbmdUZW1wbGF0ZSBvIHVuIHN0cmluZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEJjVGFic0dyb3VwQ29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIGluaXRMYWJlbCgpIHtcbiAgICB0aGlzLnRhYnNFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGVUYWIgPSBlbGVtZW50LmxhYmVsVGVtcGxhdGU7XG4gICAgICBjb25zdCBsYWJlbFRhYiA9IGVsZW1lbnQubGFiZWw7XG4gICAgICBsZXQgY29udGVudCA9IGxhYmVsVGFiO1xuICAgICAgbGV0IHR5cGVMYWJlbCA9ICdMYWJlbCc7XG4gICAgICBpZiAobGFiZWxUYWIgPT09IHVuZGVmaW5lZCAmJiB0ZW1wbGF0ZVRhYikge1xuICAgICAgICB0eXBlTGFiZWwgPSAnVGVtcGxhdGUnO1xuICAgICAgICBjb250ZW50ID0gdGVtcGxhdGVUYWI7XG4gICAgICB9XG4gICAgICB0aGlzLmhlYWRlclRhYi5wdXNoKHtcbiAgICAgICAgdHlwZTogdHlwZUxhYmVsLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBzaG93OiBlbGVtZW50LnNob3csXG4gICAgICAgIGljb246IGVsZW1lbnQuaWNvbixcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGRpc2FibGVkOiBlbGVtZW50LmRpc2FibGVkVGFiXG4gICAgICB9IGFzIExhYmVsVHlwZUludGVyZmFjZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsaXphIGxhIGNsYXNlIHBhZHJlIHNlZ8O6biBsYSBvcmllbnRhY2nDs24geSBlbCB0ZW1hIGRlbCBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUYWJzR3JvdXBDb21wb25lbnRcbiAgICovXG4gIHB1YmxpYyBzZXRTdHlsZUNsYXNzKCkge1xuICAgIHRoaXMudGFiQ2xhc3MgPSAnYmMtdGFicy1ncm91cCc7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGVqZWN1dGEgY3VhbmRvIHNlbGVjY2lvbmFuIHVuIHRhYlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUYWJzR3JvdXBDb21wb25lbnRcbiAgICovXG4gIG9uU2VsZWN0ZWRUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUuZW1pdChpbmRleCk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIERldnVlbHZlIGVsIGluZGV4IGRlbCB0YWIgYWN0dWFsIHNlbGVjY2lvbmFkb1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUYWJzR3JvdXBDb21wb25lbnRcbiAgICovXG4gIGdldEN1cnJlbnRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50SW5kZXg7XG4gIH1cblxuICAvKipcbiAgKiBTZWxlY2Npb25hIHVuIHRhYlxuICAqXG4gICogQG1lbWJlcm9mIEJjVGFic0dyb3VwQ29tcG9uZW50XG4gICovXG4gIHNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmJjVGFic0dyb3VwQmVoYXZpb3Iuc2VsZWN0VGFiKGluZGV4KTtcbiAgfVxuXG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cInRhYkNsYXNzXCIgW2lkXT1jb21wb25lbnRJZD5cblxuICAgIDxuYXYgY2xhc3M9XCJiYy10YWItaGVhZGVyIGJjLXRhYi1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsYWJlbENvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFycm93LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmV2IGJjLWljb24tYnV0dG9uIGJjLWljb24tYnV0dG9uLWdob3N0IGJjLWljb24tYnV0dG9uLW1lZGl1bVwiPjxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiYy1pY29uXCI+YW5nbGUtbGVmdC1zbWFsbDwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0IGJjLWljb24tYnV0dG9uIGJjLWljb24tYnV0dG9uLWdob3N0IGJjLWljb24tYnV0dG9uLW1lZGl1bVwiPjxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiYy1pY29uXCI+YW5nbGUtcmlnaHQtc21hbGw8L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuXG4gICAgPG5nLXRlbXBsYXRlICNsYWJlbENvbnRlbnQ+XG4gICAgICAgIDx1bCAjbGFiZWxzIGNsYXNzPVwiYmMtdGFic1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiYmMtdGFiIHt7dGFiVHlwZSA9PSAncmVndWxhcicgPyAnYmMtdGFiLXJlZ3VsYXInIDogJ2JjLXRhYi1jb250cmFzdCd9fVwiIFxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInRhYi5kaXNhYmxlZCA9PSB0cnVlID8gJ2JjLXRhYi1kaXNhYmxlZCcgOiAnJ1wiICpuZ0Zvcj1cImxldCB0YWIgb2YgaGVhZGVyVGFiOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgICAgICAgICAgICAgIHt7aT09aGVhZGVyVGFiLmxlbmd0aC0xID8gdXBkYXRlU3RhdGUoKSA6ICcnfX1cbiAgICAgICAgICAgICAgICA8ZW0gKm5nSWY9XCJ0YWIuaWNvblwiIGNsYXNzPVwiYmMtaWNvbiBiYy1zbSB7e2ljb25Qb3NpdGlvbiA9PSAnbGVmdCcgPyAnYmMtdGFiLWljb24tbGVmdCcgOiAnYmMtdGFiLWljb24tcmlnaHQnfX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj57e3RhYi5pY29ufX08L2VtPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJbJ3R5cGUnXSA9PSAnTGFiZWwnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3t0YWJbXCJjb250ZW50XCJdfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGFiVHlwZSA9PSAncmVndWxhcidcIiBjbGFzcz1cImJjLXRhYnMtYm9yZGVyXCI+PC9zcGFuPlxuICAgICAgICA8L3VsPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtdGFiLWJvZHlcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=