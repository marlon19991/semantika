import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcCircleLoadingBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcLoaderModule } from '@bancolombia/design-system-web/bc-loader';

/**
 * Es un elemento visual que informa al usuario que se
 * está realizando un proceso dentro del sistema.
 *
 * @export
 * @class BcCircleLoadingComponent
 * @implements {AfterViewInit}
 */
class BcCircleLoadingComponent {
    constructor(helper) {
        this.helper = helper;
        /**
         * Texto principal del circle loading.
         *
         * @type {string}
         * @memberof BcCircleLoadingComponent
         */
        this.text = '';
        /**
         * Este atributo está siendo deprecado.
         * Tamaño del componente Loader.
         *
         * @type {string}
         * @memberof BcLoaderComponent
         * @deprecated el componente cuenta con un tamaño fijo de loader (xl)
         */
        this.sizeLoader = 'xl';
        /**
         * Id del componente.
         *
         * @type {string}
         * @memberof BcCircleLoadingComponent
         */
        this.componentId = this.helper.getId(this);
        /**
         * Label de accesibilidad para circle loading.
         *
         * @type {string}
         * @memberof BcCircleLoadingComponent
         */
        this.accessibilityLabel = '';
    }
    /**
     * Muestra el circle loading.
     *
     * @memberof BcCircleLoadingComponent
     */
    showCircleLoading() {
        this._bcCircleLoaderBehavior.showCircleLoading();
    }
    /**
     * Oculta el circle loading.
     *
     * @memberof BcCircleLoadingComponent
     */
    hideCircleLoading() {
        this._bcCircleLoaderBehavior.hideCircleLoading();
    }
    ngAfterViewInit() {
        this._bcCircleLoaderBehavior = new BcCircleLoadingBehavior();
        this._bcCircleLoaderBehavior.setId(this.componentId);
        this._bcCircleLoaderBehavior.setUp();
    }
}
BcCircleLoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCircleLoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCircleLoadingComponent, selector: "bc-circle-loading", inputs: { text: "text", sizeLoader: "sizeLoader", componentId: "componentId", accessibilityLabel: "accessibilityLabel", speedLoader: "speedLoader" }, ngImport: i0, template: "<article\n  class=\"bc-circle-loading\"\n  [id]=\"componentId\"\n  [attr.data-text]=\"text\"\n  [attr.data-accessibility-label]=\"accessibilityLabel\"\n  [attr.data-speed-loader]=\"speedLoader\"\n></article>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-circle-loading', styles: [], template: "<article\n  class=\"bc-circle-loading\"\n  [id]=\"componentId\"\n  [attr.data-text]=\"text\"\n  [attr.data-accessibility-label]=\"accessibilityLabel\"\n  [attr.data-speed-loader]=\"speedLoader\"\n></article>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { text: [{
                type: Input
            }], sizeLoader: [{
                type: Input
            }], componentId: [{
                type: Input
            }], accessibilityLabel: [{
                type: Input
            }], speedLoader: [{
                type: Input
            }] } });

/**
 * Importa el componente bcCircleLoading con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-circle-loading></bc-circle-loading>
 *
 * @param  text: Texto general del componente de carga
 * @param  accessibilityLabel: Texto usado para ayuda en la accesibilidad, usado para dar la descripción del estado de carga para los lectores de pantalla
 * @param  speedLoader: Velocidad de la animación del loader, para mayor info consultar el componente <bc-loader>.
 * @param componentId: ID que se le asignará en el html del componente, debe ser asignado para
 * facilitar la automatizacion y la certificación
 *
 * @example
 *
 * <bc-circle-loading
 *  text="Cargando..."
 *  id="ejemplo"
 *  accessibilityLabel="ejemplo de aria label"
 *  speedLoader="2">
 * </bc-circle-loading>
 *
 * @author: Bancolombia S.A
 */
class BcCircleLoadingModule {
}
BcCircleLoadingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCircleLoadingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingModule, declarations: [BcCircleLoadingComponent], imports: [BcLoaderModule, CommonModule], exports: [BcCircleLoadingComponent] });
BcCircleLoadingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingModule, imports: [[BcLoaderModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCircleLoadingComponent],
                    imports: [BcLoaderModule, CommonModule],
                    exports: [BcCircleLoadingComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCircleLoadingComponent, BcCircleLoadingModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-circle-loading.mjs.map
