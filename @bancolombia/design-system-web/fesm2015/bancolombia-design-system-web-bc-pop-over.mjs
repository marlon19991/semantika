import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcPopOverBehavior } from '@bancolombia/design-system-behaviors';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';

/**
* Importa el pop over con los diseños de Bancolombia S.A.
* El componente pop over representa un indicador de novedad sobre un elemento
*
* @export
* @class BcPopOverComponent
* @implements {AfterViewInit}
*/
class BcPopOverComponent {
    constructor() {
        /**
       * Define el comportamiento de Hover del componente.
       *
       * @type {string}
       * @memberof BcPopOverComponent
       */
        this.hover = 'false';
        /**
      * Define si el componente se pone en pantalla completa para pantallas Mobile.
      *
      * @type {string}
      * @memberof BcPopOverComponent
      */
        this.fullScreen = 'false';
        /**
    * Define si se agrega scroll al contenedor, para que esta propiedad se aplique se debe
      definir un alto y un ancho al componente.
    *
    * @type {string}
    * @memberof BcPopOverComponent
    */
        this.scroll = 'false';
        /**
      * Define si se aplica un backdrop a la ventana.
      *
      * @type {string}
      * @memberof BcPopOverComponent
      */
        this.backdrop = 'false';
        /**
      * Crea el boton de cerrar el modal.
      *
      * @type {string}
      * @memberof BcPopOverComponent
      */
        this.buttonClose = 'false';
        /**
      * Oculta la flecha del componente.
      *
      * @type {string}
      * @memberof BcPopOverComponent
      */
        this.hiddenArrow = 'false';
        /**
      * Habilita cerrar el pop over dando click por fuera del mismo.
      *
      * @type {string}
      * @memberof BcPopOverComponent
      */
        this.closeOutside = 'false';
        /**
           * Parámetro para denotar el color del pop over
           * @memberof BcPopOverComponent
           */
        this.color = 'false';
        /**
       * Atributo para la posicion del pop over desktop
       *
       * @memberof BcPopOverComponent
       */
        this.position = '';
        /**
       * Atributo para la posicion del pop over en mobile
       *
       * @memberof BcPopOverComponent
       */
        this.positionMobile = '';
        /**
       * Atributo para la posicion del pop over en tablet
       *
       * @memberof BcPopOverComponent
       */
        this.positionTablet = '';
        this.bcPopOverBehavior = new BcPopOverBehavior();
    }
    ngAfterViewInit() {
        this.bcPopOverBehavior.setId(this.componentId);
        this.bcPopOverBehavior.setUp();
    }
    /**
   * Funcion para abrir el pop-over.
   *
   * @memberof BcPopOverComponent
   */
    openPopOver() {
        this.bcPopOverBehavior.openPopOver();
    }
    /**
   * Funcion para cerrar el pop-over.
   *
   * @memberof BcPopOverComponent
   */
    closePopOver() {
        this.bcPopOverBehavior.closePopOver();
    }
    /**
   * Funcion para crear un toogle al abrir y cerrar el pop-over el pop-over.
   *
   * @memberof BcPopOverComponent
   */
    tooglePopOver() {
        this.bcPopOverBehavior.tooglePopOver();
    }
}
BcPopOverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPopOverComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcPopOverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPopOverComponent, selector: "bc-pop-over", inputs: { componentId: "componentId", hover: "hover", fullScreen: "fullScreen", scroll: "scroll", backdrop: "backdrop", width: "width", typeWidth: "typeWidth", height: "height", typeHeight: "typeHeight", buttonClose: "buttonClose", hiddenArrow: "hiddenArrow", closeOutside: "closeOutside", color: "color", position: "position", positionMobile: "positionMobile", positionTablet: "positionTablet" }, ngImport: i0, template: "\n\n<section class=\"bc-pop-over\"\n  [attr.hover]=\"hover\"\n  [attr.fullScreen]=\"fullScreen\"\n  [attr.scroll]=\"scroll\"\n  [attr.backdrop]=\"backdrop\"\n  [attr.width]=\"width\"\n  [attr.typeWidth]=\"typeWidth\"\n  [attr.height]=\"height\"\n  [attr.typeHeight]=\"typeHeight\"\n  [attr.buttonClose]=\"buttonClose\"\n  [attr.id]=\"componentId\"\n  [attr.hiddenArrow]=\"hiddenArrow\"\n  [attr.closeOutside]=\"closeOutside\"\n  [attr.position]=\"position\"\n  [attr.positionMobile]=\"positionMobile\"\n  [attr.positionTablet]=\" positionTablet\"\n  >\n  <section class=\"bc-pop-over-container bc-pop-over-{{color}}\">\n    <ng-content></ng-content>\n  </section>\n</section>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPopOverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-pop-over', styles: [], template: "\n\n<section class=\"bc-pop-over\"\n  [attr.hover]=\"hover\"\n  [attr.fullScreen]=\"fullScreen\"\n  [attr.scroll]=\"scroll\"\n  [attr.backdrop]=\"backdrop\"\n  [attr.width]=\"width\"\n  [attr.typeWidth]=\"typeWidth\"\n  [attr.height]=\"height\"\n  [attr.typeHeight]=\"typeHeight\"\n  [attr.buttonClose]=\"buttonClose\"\n  [attr.id]=\"componentId\"\n  [attr.hiddenArrow]=\"hiddenArrow\"\n  [attr.closeOutside]=\"closeOutside\"\n  [attr.position]=\"position\"\n  [attr.positionMobile]=\"positionMobile\"\n  [attr.positionTablet]=\" positionTablet\"\n  >\n  <section class=\"bc-pop-over-container bc-pop-over-{{color}}\">\n    <ng-content></ng-content>\n  </section>\n</section>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { componentId: [{
                type: Input
            }], hover: [{
                type: Input
            }], fullScreen: [{
                type: Input
            }], scroll: [{
                type: Input
            }], backdrop: [{
                type: Input
            }], width: [{
                type: Input
            }], typeWidth: [{
                type: Input
            }], height: [{
                type: Input
            }], typeHeight: [{
                type: Input
            }], buttonClose: [{
                type: Input
            }], hiddenArrow: [{
                type: Input
            }], closeOutside: [{
                type: Input
            }], color: [{
                type: Input
            }], position: [{
                type: Input
            }], positionMobile: [{
                type: Input
            }], positionTablet: [{
                type: Input
            }] } });

class BcPopOverModule {
}
BcPopOverModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPopOverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPopOverModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPopOverModule, declarations: [BcPopOverComponent], imports: [BcIconModule, CommonModule], exports: [BcPopOverComponent] });
BcPopOverModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPopOverModule, imports: [[BcIconModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPopOverModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPopOverComponent],
                    imports: [BcIconModule, CommonModule],
                    exports: [BcPopOverComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcPopOverComponent, BcPopOverModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-pop-over.mjs.map
