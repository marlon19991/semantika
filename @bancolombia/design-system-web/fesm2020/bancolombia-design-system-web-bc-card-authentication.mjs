import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BcCardAuthenticationBehavior } from '@bancolombia/design-system-behaviors';

class BcCardAuthenticationComponent {
    constructor() {
        /**
         * Parámetro de entrada para el contenido del título.
         *
         * @type {string}
         * @member BcCardAuthenticationComponent
         */
        this.titleCardAuth = null;
        /**
         * Parámetro que permite eligir entre los dos tipos de variantes del card authentication.
         * @member BcCardAuthenticationComponent
         */
        this.typeContainerAuth = 'staticContainer';
        /**
         * Parámetro que permite eligir entre la opcion de dos botones o un boton.
         * @member BcCardAuthenticationComponent
         */
        this.amountOfButtons = 'one';
        /**
         * Salida de los valores que el usuario ingreso en los inputs
         * @member BcCardAuthenticationComponent
         */
        this.onSubmit = new EventEmitter();
    }
    ngAfterViewInit() {
        this.BcCardAuthBehavior = new BcCardAuthenticationBehavior();
        this.BcCardAuthBehavior.setId('card1');
        this.BcCardAuthBehavior.setUp();
        this.BcCardAuthBehavior.outputFunction = (data, state) => {
            this.onSubmit.emit({ data, state });
        };
    }
}
BcCardAuthenticationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardAuthenticationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcCardAuthenticationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCardAuthenticationComponent, selector: "bc-card-authentication", inputs: { titleCardAuth: "titleCardAuth", descriptionCardAuth: "descriptionCardAuth", iconCardAuth: "iconCardAuth", typeContainerAuth: "typeContainerAuth", amountOfButtons: "amountOfButtons" }, outputs: { onSubmit: "onSubmit" }, ngImport: i0, template: "<section class=\"bc-card bc-card-auth bc-card-container\" id=\"card1\" >\n    <section class=\"bc-card-auth-body\" id=\"id00\">\n        <section class=\"bc-card-auth-head\">\n            <section>\n                <em class=\"bc-icon\" aria-hidden=\"true\">{{iconCardAuth}}</em>\n            </section>\n            <h1 *ngIf=\"titleCardAuth !== null\" class=\"bc-card-auth-title bc-cibsans-font-style-5-bold bc-mt-3\">{{titleCardAuth}}</h1>\n            <h3 class=\"bc-card-auth-description bc-mt-3\">{{descriptionCardAuth}}</h3>\n        </section>\n        <form  id=\"form\">\n            <section *ngIf=\"typeContainerAuth === 'staticContainer'\">\n                <ng-content select=\"[cardAuthStaticContainer]\"></ng-content>\n            </section>\n            <section *ngIf=\"typeContainerAuth === 'dynamicContainer'\" class=\"bc-card-auth-dynamic-container\">\n                <ng-content select=\"[cardAuthDynamicContainer]\"></ng-content>\n            </section>\n            <section *ngIf=\"amountOfButtons === 'one'\" class=\"bc-card-auth-button\">\n                <ng-content select=\"[cardAuthButton]\"></ng-content>\n            </section>\n            <section *ngIf=\"amountOfButtons === 'two'\" class=\"bc-card-auth-buttons\">\n                <ng-content select=\"[cardAuthButtons]\"></ng-content>\n            </section>\n        </form>\n        <section class=\"bc-card-auth-link\">\n            <ng-content select=\"[cardAuthMainLink]\"></ng-content>\n        </section>\n        <section>\n            <ng-content select=\"[cardAuthAdditionalLinks]\"></ng-content>\n        </section>\n    </section>\n</section>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardAuthenticationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-card-authentication', template: "<section class=\"bc-card bc-card-auth bc-card-container\" id=\"card1\" >\n    <section class=\"bc-card-auth-body\" id=\"id00\">\n        <section class=\"bc-card-auth-head\">\n            <section>\n                <em class=\"bc-icon\" aria-hidden=\"true\">{{iconCardAuth}}</em>\n            </section>\n            <h1 *ngIf=\"titleCardAuth !== null\" class=\"bc-card-auth-title bc-cibsans-font-style-5-bold bc-mt-3\">{{titleCardAuth}}</h1>\n            <h3 class=\"bc-card-auth-description bc-mt-3\">{{descriptionCardAuth}}</h3>\n        </section>\n        <form  id=\"form\">\n            <section *ngIf=\"typeContainerAuth === 'staticContainer'\">\n                <ng-content select=\"[cardAuthStaticContainer]\"></ng-content>\n            </section>\n            <section *ngIf=\"typeContainerAuth === 'dynamicContainer'\" class=\"bc-card-auth-dynamic-container\">\n                <ng-content select=\"[cardAuthDynamicContainer]\"></ng-content>\n            </section>\n            <section *ngIf=\"amountOfButtons === 'one'\" class=\"bc-card-auth-button\">\n                <ng-content select=\"[cardAuthButton]\"></ng-content>\n            </section>\n            <section *ngIf=\"amountOfButtons === 'two'\" class=\"bc-card-auth-buttons\">\n                <ng-content select=\"[cardAuthButtons]\"></ng-content>\n            </section>\n        </form>\n        <section class=\"bc-card-auth-link\">\n            <ng-content select=\"[cardAuthMainLink]\"></ng-content>\n        </section>\n        <section>\n            <ng-content select=\"[cardAuthAdditionalLinks]\"></ng-content>\n        </section>\n    </section>\n</section>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { titleCardAuth: [{
                type: Input
            }], descriptionCardAuth: [{
                type: Input
            }], iconCardAuth: [{
                type: Input
            }], typeContainerAuth: [{
                type: Input
            }], amountOfButtons: [{
                type: Input
            }], onSubmit: [{
                type: Output
            }] } });

class BcCardAuthenticationModule {
}
BcCardAuthenticationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardAuthenticationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardAuthenticationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardAuthenticationModule, declarations: [BcCardAuthenticationComponent], imports: [CommonModule,
        FormsModule], exports: [BcCardAuthenticationComponent] });
BcCardAuthenticationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardAuthenticationModule, imports: [[
            CommonModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardAuthenticationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCardAuthenticationComponent],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [BcCardAuthenticationComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCardAuthenticationComponent, BcCardAuthenticationModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-card-authentication.mjs.map
