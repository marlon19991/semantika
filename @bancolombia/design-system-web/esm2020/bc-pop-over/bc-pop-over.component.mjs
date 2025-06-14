import { Component, Input } from '@angular/core';
import { BcPopOverBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
* Importa el pop over con los diseños de Bancolombia S.A.
* El componente pop over representa un indicador de novedad sobre un elemento
*
* @export
* @class BcPopOverComponent
* @implements {AfterViewInit}
*/
export class BcPopOverComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcG9wLW92ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXBvcC1vdmVyL2JjLXBvcC1vdmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wb3Atb3Zlci9iYy1wb3Atb3Zlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRXpFOzs7Ozs7O0VBT0U7QUFPRixNQUFNLE9BQU8sa0JBQWtCO0lBSTdCO1FBaUJBOzs7OztTQUtDO1FBQ1EsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUVqQzs7Ozs7UUFLQTtRQUNTLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFFcEM7Ozs7OztNQU1GO1FBQ08sV0FBTSxHQUFXLE9BQU8sQ0FBQztRQUVoQzs7Ozs7UUFLQTtRQUNPLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFxQ2xDOzs7OztRQUtBO1FBQ08sZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFFckM7Ozs7O1FBS0E7UUFDTyxnQkFBVyxHQUFXLE9BQU8sQ0FBQztRQUVyQzs7Ozs7UUFLQTtRQUNPLGlCQUFZLEdBQVcsT0FBTyxDQUFDO1FBcUJ4Qzs7O2FBR0s7UUFDSSxVQUFLLEdBQVcsT0FBTyxDQUFDO1FBVy9COzs7O1NBSUM7UUFDUSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRy9COzs7O1NBSUM7UUFDUSxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUdyQzs7OztTQUlDO1FBQ1EsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFuS25DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQXVHRDs7OztLQUlDO0lBQ0QsV0FBVztRQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUM7Ozs7S0FJQztJQUNELFlBQVk7UUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQVFDOzs7O0tBSUM7SUFDQyxhQUFhO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7OytHQWpKVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixpY0NsQi9CLHFxQkFzQlU7MkZESkcsa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLGFBQWEsVUFFZixFQUFFOzBFQXNCRCxXQUFXO3NCQUFuQixLQUFLO2dCQVFHLEtBQUs7c0JBQWIsS0FBSztnQkFRRyxVQUFVO3NCQUFsQixLQUFLO2dCQVNDLE1BQU07c0JBQWQsS0FBSztnQkFRRyxRQUFRO3NCQUFoQixLQUFLO2dCQVNHLEtBQUs7c0JBQWIsS0FBSztnQkFRRyxTQUFTO3NCQUFqQixLQUFLO2dCQVNHLE1BQU07c0JBQWQsS0FBSztnQkFTRyxVQUFVO3NCQUFsQixLQUFLO2dCQVFHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsV0FBVztzQkFBbkIsS0FBSztnQkFRRyxZQUFZO3NCQUFwQixLQUFLO2dCQXlCRyxLQUFLO3NCQUFiLEtBQUs7Z0JBZ0JLLFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFRRyxjQUFjO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY1BvcE92ZXJCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5cbi8qKlxuKiBJbXBvcnRhIGVsIHBvcCBvdmVyIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuKiBFbCBjb21wb25lbnRlIHBvcCBvdmVyIHJlcHJlc2VudGEgdW4gaW5kaWNhZG9yIGRlIG5vdmVkYWQgc29icmUgdW4gZWxlbWVudG9cbipcbiogQGV4cG9ydFxuKiBAY2xhc3MgQmNQb3BPdmVyQ29tcG9uZW50XG4qIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXBvcC1vdmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1wb3Atb3Zlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG59KVxuXG5leHBvcnQgY2xhc3MgQmNQb3BPdmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgYmNQb3BPdmVyQmVoYXZpb3I6IEJjUG9wT3ZlckJlaGF2aW9yO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5iY1BvcE92ZXJCZWhhdmlvciA9IG5ldyBCY1BvcE92ZXJCZWhhdmlvcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYmNQb3BPdmVyQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY1BvcE92ZXJCZWhhdmlvci5zZXRVcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIElkIGRlbCBlbGVtZW50by5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjUG9wT3ZlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZztcblxuICAvKipcbiAqIERlZmluZSBlbCBjb21wb3J0YW1pZW50byBkZSBIb3ZlciBkZWwgY29tcG9uZW50ZS5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQG1lbWJlcm9mIEJjUG9wT3ZlckNvbXBvbmVudFxuICovXG4gIEBJbnB1dCgpIGhvdmVyOiBzdHJpbmcgPSAnZmFsc2UnO1xuXG4gIC8qKlxuKiBEZWZpbmUgc2kgZWwgY29tcG9uZW50ZSBzZSBwb25lIGVuIHBhbnRhbGxhIGNvbXBsZXRhIHBhcmEgcGFudGFsbGFzIE1vYmlsZS5cbipcbiogQHR5cGUge3N0cmluZ31cbiogQG1lbWJlcm9mIEJjUG9wT3ZlckNvbXBvbmVudFxuKi9cbiAgQElucHV0KCkgZnVsbFNjcmVlbjogc3RyaW5nID0gJ2ZhbHNlJztcblxuICAgIC8qKlxuKiBEZWZpbmUgc2kgc2UgYWdyZWdhIHNjcm9sbCBhbCBjb250ZW5lZG9yLCBwYXJhIHF1ZSBlc3RhIHByb3BpZWRhZCBzZSBhcGxpcXVlIHNlIGRlYmVcbiAgZGVmaW5pciB1biBhbHRvIHkgdW4gYW5jaG8gYWwgY29tcG9uZW50ZS5cbipcbiogQHR5cGUge3N0cmluZ31cbiogQG1lbWJlcm9mIEJjUG9wT3ZlckNvbXBvbmVudFxuKi9cbkBJbnB1dCgpIHNjcm9sbDogc3RyaW5nID0gJ2ZhbHNlJztcblxuICAvKipcbiogRGVmaW5lIHNpIHNlIGFwbGljYSB1biBiYWNrZHJvcCBhIGxhIHZlbnRhbmEuXG4qXG4qIEB0eXBlIHtzdHJpbmd9XG4qIEBtZW1iZXJvZiBCY1BvcE92ZXJDb21wb25lbnRcbiovXG5ASW5wdXQoKSBiYWNrZHJvcDogc3RyaW5nID0gJ2ZhbHNlJztcblxuXG4gIC8qKlxuKiBTZXRlYSB1biBhbmNobyBhbCBjb21wb25lbnRlLlxuKlxuKiBAdHlwZSB7c3RyaW5nfVxuKiBAbWVtYmVyb2YgQmNQb3BPdmVyQ29tcG9uZW50XG4qL1xuQElucHV0KCkgd2lkdGg6IHN0cmluZztcblxuICAvKipcbiogU2V0ZWEgdW4gdGlwbyBkZSBtZWRpZGEgYWwgYW5jaG8gZGVsIGNvbXBvbmVudGVcbipcbiogQHR5cGUge3N0cmluZ31cbiogQG1lbWJlcm9mIEJjUG9wT3ZlckNvbXBvbmVudFxuKi9cbkBJbnB1dCgpIHR5cGVXaWR0aDogc3RyaW5nO1xuXG5cbiAgLyoqXG4qIFNldGVhIHVuIGFsdG8gYWwgY29tcG9uZW50ZS5cbipcbiogQHR5cGUge3N0cmluZ31cbiogQG1lbWJlcm9mIEJjUG9wT3ZlckNvbXBvbmVudFxuKi9cbkBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xuXG5cbiAgLyoqXG4qIFNldGVhIHVuIHRpcG8gZGUgbWVkaWRhIGFsIGFuY2hvIGRlbCBjb21wb25lbnRlXG4qXG4qIEB0eXBlIHtzdHJpbmd9XG4qIEBtZW1iZXJvZiBCY1BvcE92ZXJDb21wb25lbnRcbiovXG5ASW5wdXQoKSB0eXBlSGVpZ2h0OiBzdHJpbmc7XG5cbiAgLyoqXG4qIENyZWEgZWwgYm90b24gZGUgY2VycmFyIGVsIG1vZGFsLlxuKlxuKiBAdHlwZSB7c3RyaW5nfVxuKiBAbWVtYmVyb2YgQmNQb3BPdmVyQ29tcG9uZW50XG4qL1xuQElucHV0KCkgYnV0dG9uQ2xvc2U6IHN0cmluZyA9ICdmYWxzZSc7XG5cbiAgLyoqXG4qIE9jdWx0YSBsYSBmbGVjaGEgZGVsIGNvbXBvbmVudGUuXG4qXG4qIEB0eXBlIHtzdHJpbmd9XG4qIEBtZW1iZXJvZiBCY1BvcE92ZXJDb21wb25lbnRcbiovXG5ASW5wdXQoKSBoaWRkZW5BcnJvdzogc3RyaW5nID0gJ2ZhbHNlJztcblxuICAvKipcbiogSGFiaWxpdGEgY2VycmFyIGVsIHBvcCBvdmVyIGRhbmRvIGNsaWNrIHBvciBmdWVyYSBkZWwgbWlzbW8uXG4qXG4qIEB0eXBlIHtzdHJpbmd9XG4qIEBtZW1iZXJvZiBCY1BvcE92ZXJDb21wb25lbnRcbiovXG5ASW5wdXQoKSBjbG9zZU91dHNpZGU6IHN0cmluZyA9ICdmYWxzZSc7XG5cblxuICAvKipcbiAqIEZ1bmNpb24gcGFyYSBhYnJpciBlbCBwb3Atb3Zlci5cbiAqXG4gKiBAbWVtYmVyb2YgQmNQb3BPdmVyQ29tcG9uZW50XG4gKi9cbiAgb3BlblBvcE92ZXIoKSB7XG4gIHRoaXMuYmNQb3BPdmVyQmVoYXZpb3Iub3BlblBvcE92ZXIoKTtcbn1cblxuICAvKipcbiAqIEZ1bmNpb24gcGFyYSBjZXJyYXIgZWwgcG9wLW92ZXIuXG4gKlxuICogQG1lbWJlcm9mIEJjUG9wT3ZlckNvbXBvbmVudFxuICovXG4gIGNsb3NlUG9wT3ZlcigpIHtcbiAgdGhpcy5iY1BvcE92ZXJCZWhhdmlvci5jbG9zZVBvcE92ZXIoKTtcbn1cblxuLyoqXG4gICAqIFBhcsOhbWV0cm8gcGFyYSBkZW5vdGFyIGVsIGNvbG9yIGRlbCBwb3Agb3ZlclxuICAgKiBAbWVtYmVyb2YgQmNQb3BPdmVyQ29tcG9uZW50XG4gICAqL1xuQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdmYWxzZSc7XG5cbiAgLyoqXG4gKiBGdW5jaW9uIHBhcmEgY3JlYXIgdW4gdG9vZ2xlIGFsIGFicmlyIHkgY2VycmFyIGVsIHBvcC1vdmVyIGVsIHBvcC1vdmVyLlxuICpcbiAqIEBtZW1iZXJvZiBCY1BvcE92ZXJDb21wb25lbnRcbiAqL1xuICAgIHRvb2dsZVBvcE92ZXIoKSB7XG4gICAgdGhpcy5iY1BvcE92ZXJCZWhhdmlvci50b29nbGVQb3BPdmVyKCk7XG4gIH1cblxuICAvKipcbiAqIEF0cmlidXRvIHBhcmEgbGEgcG9zaWNpb24gZGVsIHBvcCBvdmVyIGRlc2t0b3BcbiAqXG4gKiBAbWVtYmVyb2YgQmNQb3BPdmVyQ29tcG9uZW50XG4gKi9cbiAgQElucHV0KCkgcG9zaXRpb246IHN0cmluZyA9ICcnO1xuXG5cbiAgLyoqXG4gKiBBdHJpYnV0byBwYXJhIGxhIHBvc2ljaW9uIGRlbCBwb3Agb3ZlciBlbiBtb2JpbGVcbiAqXG4gKiBAbWVtYmVyb2YgQmNQb3BPdmVyQ29tcG9uZW50XG4gKi9cbiAgQElucHV0KCkgcG9zaXRpb25Nb2JpbGU6IHN0cmluZyA9ICcnO1xuXG5cbiAgLyoqXG4gKiBBdHJpYnV0byBwYXJhIGxhIHBvc2ljaW9uIGRlbCBwb3Agb3ZlciBlbiB0YWJsZXRcbiAqXG4gKiBAbWVtYmVyb2YgQmNQb3BPdmVyQ29tcG9uZW50XG4gKi9cbiAgQElucHV0KCkgcG9zaXRpb25UYWJsZXQ6IHN0cmluZyA9ICcnO1xuICBcblxuXG5cbn1cbiIsIlxuXG48c2VjdGlvbiBjbGFzcz1cImJjLXBvcC1vdmVyXCJcbiAgW2F0dHIuaG92ZXJdPVwiaG92ZXJcIlxuICBbYXR0ci5mdWxsU2NyZWVuXT1cImZ1bGxTY3JlZW5cIlxuICBbYXR0ci5zY3JvbGxdPVwic2Nyb2xsXCJcbiAgW2F0dHIuYmFja2Ryb3BdPVwiYmFja2Ryb3BcIlxuICBbYXR0ci53aWR0aF09XCJ3aWR0aFwiXG4gIFthdHRyLnR5cGVXaWR0aF09XCJ0eXBlV2lkdGhcIlxuICBbYXR0ci5oZWlnaHRdPVwiaGVpZ2h0XCJcbiAgW2F0dHIudHlwZUhlaWdodF09XCJ0eXBlSGVpZ2h0XCJcbiAgW2F0dHIuYnV0dG9uQ2xvc2VdPVwiYnV0dG9uQ2xvc2VcIlxuICBbYXR0ci5pZF09XCJjb21wb25lbnRJZFwiXG4gIFthdHRyLmhpZGRlbkFycm93XT1cImhpZGRlbkFycm93XCJcbiAgW2F0dHIuY2xvc2VPdXRzaWRlXT1cImNsb3NlT3V0c2lkZVwiXG4gIFthdHRyLnBvc2l0aW9uXT1cInBvc2l0aW9uXCJcbiAgW2F0dHIucG9zaXRpb25Nb2JpbGVdPVwicG9zaXRpb25Nb2JpbGVcIlxuICBbYXR0ci5wb3NpdGlvblRhYmxldF09XCIgcG9zaXRpb25UYWJsZXRcIlxuICA+XG4gIDxzZWN0aW9uIGNsYXNzPVwiYmMtcG9wLW92ZXItY29udGFpbmVyIGJjLXBvcC1vdmVyLXt7Y29sb3J9fVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zZWN0aW9uPlxuPC9zZWN0aW9uPiJdfQ==