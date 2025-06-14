import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

class BcShortcutComponent {
    constructor(elRef) {
        this.elRef = elRef;
        /**
         * Este valor de entrada define el tipo de shortcut.
         * Los valores permitidos [ single(default) | multiple | horizontal ]
         *
         * @type {string}
         * @memberof BcShortcutComponent
         */
        this.typeShortcut = 'single';
        /**
         * Nombre de la acción que describe el shortcut.
         *
         * @type {string}
         * @memberof BcShortcutComponent
         */
        this.text = 'Nombre de la acción';
        /**
         * Nombre del icono que identifica al shortcut.
         *
         * @type {string}
         * @memberof BcShortcutComponent
         */
        this.icon = 'help';
        /**
         * Permite indicar si el shortcut es nuevo.
         *
         * @type {boolean}
         * @memberof BcShortcutComponent
         */
        this.isNew = false;
        /**
         * Permite indicar si está deshabilitado
         *
         * @type {boolean}
         * @memberof BcShortcutComponent
         */
        this.isDisabled = false;
    }
    ngAfterViewInit() {
        this.overrideLinkClickEvent();
    }
    overrideLinkClickEvent() {
        const link = this.elRef.nativeElement.querySelector('a');
        if (!this.route) {
            link.addEventListener('click', (event) => event.preventDefault());
        }
    }
}
BcShortcutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcShortcutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcShortcutComponent, selector: "bc-shortcut", inputs: { typeShortcut: "typeShortcut", text: "text", icon: "icon", description: "description", route: "route", isNew: "isNew", isDisabled: "isDisabled" }, ngImport: i0, template: "<a aria-label=\"Boton\" class=\"bc-shortcut-{{isNew}} bc-shortcut-{{typeShortcut}} bc-shortcut-disabled-{{isDisabled}}\" \n    aria-hidden=\"true\" href=\"{{ route }}\" >\n  <em class=\"bc-icon bc-md\">{{ icon }}</em>\n  <div class=\"bc-shortcut-text\">\n    <label>{{ text }}</label>\n    <div *ngIf=\"description\">\n      <p>{{ description }}</p>\n    </div>\n    <div *ngIf=\"isNew\">\n      <p class=\"bc-shortcut-alert\">\u00A1Nuevo!</p>\n    </div>\n  </div>\n</a>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-shortcut', template: "<a aria-label=\"Boton\" class=\"bc-shortcut-{{isNew}} bc-shortcut-{{typeShortcut}} bc-shortcut-disabled-{{isDisabled}}\" \n    aria-hidden=\"true\" href=\"{{ route }}\" >\n  <em class=\"bc-icon bc-md\">{{ icon }}</em>\n  <div class=\"bc-shortcut-text\">\n    <label>{{ text }}</label>\n    <div *ngIf=\"description\">\n      <p>{{ description }}</p>\n    </div>\n    <div *ngIf=\"isNew\">\n      <p class=\"bc-shortcut-alert\">\u00A1Nuevo!</p>\n    </div>\n  </div>\n</a>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { typeShortcut: [{
                type: Input
            }], text: [{
                type: Input
            }], icon: [{
                type: Input
            }], description: [{
                type: Input
            }], route: [{
                type: Input
            }], isNew: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }] } });

class BcShortcutGroupComponent {
    constructor() {
        /**
         * Este valor de entrada define el tipo de shortcut.
         * Los valores permitidos [ single(default) | multiple | horizontal ]
         *
         * @type {string}
         * @memberof BcShortcutComponent
         */
        this.typeShortcut = 'single';
    }
}
BcShortcutGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcShortcutGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcShortcutGroupComponent, selector: "bc-shortcut-group", inputs: { typeShortcut: "typeShortcut" }, ngImport: i0, template: "<section aria-hidden=\"true\" class=\"bc-shortcut-group-{{typeShortcut}}\">\n  <ng-content></ng-content>\n</section>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-shortcut-group', template: "<section aria-hidden=\"true\" class=\"bc-shortcut-group-{{typeShortcut}}\">\n  <ng-content></ng-content>\n</section>\n" }]
        }], propDecorators: { typeShortcut: [{
                type: Input
            }] } });

class BcShortcutModule {
}
BcShortcutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcShortcutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutModule, declarations: [BcShortcutComponent,
        BcShortcutGroupComponent], imports: [CommonModule,
        BcIconModule], exports: [BcShortcutComponent,
        BcShortcutGroupComponent] });
BcShortcutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutModule, imports: [[
            CommonModule,
            BcIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcShortcutComponent,
                        BcShortcutGroupComponent
                    ],
                    imports: [
                        CommonModule,
                        BcIconModule
                    ],
                    exports: [
                        BcShortcutComponent,
                        BcShortcutGroupComponent
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcShortcutComponent, BcShortcutGroupComponent, BcShortcutModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-shortcut.mjs.map
