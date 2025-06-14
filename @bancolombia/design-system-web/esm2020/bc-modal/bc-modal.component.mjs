import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { BcModalBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@angular/common";
import * as i4 from "@bancolombia/design-system-web/bc-button";
const MODAL_N100 = 100;
/**
 * Componente modal
 *
 * @export
 * @class BcModalComponent
 * @implements {OnInit}
 */
export class BcModalComponent {
    constructor(ref, helperService) {
        this.ref = ref;
        this.helperService = helperService;
        /**
         * Id del modal.
         *
         * @type {string}
         * @memberof BcModalComponent
         */
        this.id = this.helperService.getId(this);
        /**
         * Título del modal.
         *
         * @type {string}
         * @memberof BcModalComponent
         */
        this.title = '';
        /**
         * Subtítulo del modal este se sitúa de bajo del titulo principal de la modal).
         *
         * @type {string}
         * @memberof BcModalComponent
         */
        this.subTitle = '';
        /**
         * Texto del bóton del modal.
         *
         * @type {string}
         * @memberof BcModalComponent
         */
        this.textBtn = '';
        /**
         * Texto del botón izquierdo.
         *
         * @type {string}
         * @memberof BcModalComponent
         */
        this.textBtnLeft = '';
        /**
         * Tipo del ícono que usará el modal, los permitidos son : {'error', 'success', 'warning', 'info'},
         * el ícono por defecto es 'default' (vacío),Si el type Icon es diferente de default no va a mostrar la ilustración.
         *
         * @type {string}
         * @memberof BcModalComponent
         */
        this.typeIcon = 'default';
        /**
          * texto para el aria-label del botón de cerrar.
          *
          * @type {string}
          * @memberof BcTransactionStatusComponent
          */
        this.textAriaLabel = 'cerrar';
        /**
         * Tipo de acción, por defecto "Simple", este dado de entrada sirve para definir si el pop-up tiene botón de cancelación o no.
         *
         * @type {string}
         * @memberof BcModalComponent
         */
        this.isCancellable = false;
        /**
         * Indica el ancho del modal, por defecto "Small".
         * @type {string}
         * @memberof BcModalComponent
         */
        this.customWidth = 'medium';
        /**
         * Indica la alineación del título del modal, por defecto "center".
         * @type {string}
         * @memberof BcModalComponent
         */
        this.titleAlign = 'center';
        /**
         * Indica si el modal puede o no cerrarse haciendo click fuera de él, admite dos valores, true o false.
         *
         * @type {(true | false)}
         * @memberof BcModalComponent
         */
        this.outerCloseTap = true;
        /**
         * Se ejecuta cuando se hace click en alguno de los botones de acción
         *
         * @type {EventEmitter<number>}
         * @memberof BcModalComponent
         */
        this.stateClick = new EventEmitter();
        /**
         * Se ejecuta cuando el modal es cerrado (descartado) desde la equis
         *
         * @type {EventEmitter<any>}
         * @memberof BcModalComponent
         */
        this.closeModalEvent = new EventEmitter();
        /**
       * Permite deshabilitar el cierre del modal por medio de la tecla ESc
       * valor por defecto es true (habilitado)
       *
       * @type {boolean}
       * @memberof BcModalComponent
       */
        this.closedModalEsc = true;
        /**
         * Indica la orientación del modal ejemplo en caso de tener varios botones les da una, alineación vertical u horizontal.
         * @type {Boolean}
         * @memberof BcModalComponent
         */
        this.buttonAlignment = 'horizontal';
        /**
         * Indica la posibilidad de utilizar o no los botones por defecto del modal
         * (Primary-Secondary), por defecto "True".
         * @type {boolean}
         * @memberof BcModalComponent
         */
        this.displayButton = true;
        /**
         * Indica la posibilidad ocultar el boton close de la esquina superior derecha
         * por defecto es false.
         * @type {boolean}
         * @memberof BcModalComponent
         */
        this.hideCloseButton = false;
        /**
         * Permite deshabilitar el boton primario (derecho) del modal
         * valor por defecto es false
         *
         * @type {boolean}
         * @memberof BcModalComponent
         */
        this.primaryButtonDisabled = false;
        this.bcModalBehavior = new BcModalBehavior();
        this.bcModalBehavior.closeModalCallback = () => {
            this.closeModalEmitEvent();
        };
    }
    ngAfterViewInit() {
        this.bcModalBehavior.setId(this.id);
        this.bcModalBehavior.callback = (typeTask) => {
            this.callback(typeTask);
        };
        this.bcModalBehavior.setUp();
    }
    ngOnChanges(changes) {
        const sizeMap = {
            'error': 'Mensaje de error',
            'success': 'Mensaje de exito',
            'warning': 'Mensaje de alerta',
            'info': 'Mensaje informativo',
        };
        this.arialabelmodal = sizeMap[this.typeIcon];
        setTimeout(() => {
            this.bcModalBehavior.setId(this.id);
            this.bcModalBehavior.setUp(true);
        }, MODAL_N100);
        this.bcModalBehavior.setEventCloseEsc(this.closedModalEsc);
    }
    /**
     * Abre el modal.
     *
     * @memberof BcModalComponent
     */
    openModal() {
        this.bcModalBehavior.openModal();
    }
    /**
     * Cierra el modal.
     *
     * @memberof BcModalComponent
     */
    shutDown() {
        this.bcModalBehavior.closeModal();
    }
    /**
     * Retorna el tipo de tarea ejecuta por cada uno de los botones del modal (Primario o Secundario).
     *
     * @memberof BcModalComponent
     */
    callback(typeTask) {
        this.stateClick.emit(typeTask);
    }
    /**
     * Se ejecuta cuando se cierra (descarta) el modal.
     *
     * @memberof BcModalComponent
     */
    closeModalEmitEvent() {
        this.closeModalEvent.emit(null);
    }
}
BcModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalComponent, deps: [{ token: i0.ElementRef }, { token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcModalComponent, selector: "bc-modal", inputs: { id: "id", title: "title", subTitle: "subTitle", textBtn: "textBtn", textBtnLeft: "textBtnLeft", typeIcon: "typeIcon", textAriaLabel: "textAriaLabel", arialabelmodal: "arialabelmodal", isCancellable: "isCancellable", customWidth: "customWidth", titleAlign: "titleAlign", outerCloseTap: "outerCloseTap", closedModalEsc: "closedModalEsc", buttonAlignment: "buttonAlignment", displayButton: "displayButton", hideCloseButton: "hideCloseButton", primaryButtonDisabled: "primaryButtonDisabled" }, outputs: { stateClick: "stateClick", closeModalEvent: "closeModalEvent" }, usesOnChanges: true, ngImport: i0, template: "<article class=\"bc-modal\" [id]=\"id\" role=\"dialog\" [attr.outerCloseTap]=\"outerCloseTap\"\n    aria-labelledby=\"id\" aria-modal=\"true\">\n    <label for=\"\" class=\"bc-modal-close\"></label>\n    <section [attr.customWidth]=\"customWidth\" class=\"bc-modal-container\" [attr.titleAlign]=\"titleAlign\"\n        [attr.buttonAlignment]=\"buttonAlignment\" [attr.subTitle]=\"typeIcon\"\n        [attr.typeIcon]=\"typeIcon\" [attr.isCancellable]=\"isCancellable\" [attr.displayButton]=\"displayButton\"\n        [attr.role]=\"'alertdialog'\"[attr.aria-modal]=\"'true'\"\n        [attr.aria-label]=\"arialabelmodal?arialabelmodal:typeIcon\">\n\n        <section class=\"bc-modal-close-button-container\">\n          <div>\n            <button class=\"bc-direction-row bc-icon bc-modal-close-button bc-sm\" *ngIf=\"!hideCloseButton\"\n            [attr.aria-label]=\"textAriaLabel\">error\n          </button>\n        </div>\n        </section>\n        <div *ngIf=\"typeIcon === 'default'\" class=\"bc-modal-illustration\">\n            <ng-content select=\"[illustration]\"></ng-content>\n        </div>\n        <section *ngIf=\"typeIcon !== 'default'\" class=\"bc-modal-icon-container\">\n            <div [ngSwitch]=\"typeIcon\">\n                <bc-icon class=\" bc-modal-center-icon bc-md\" *ngSwitchCase=\"'error'\">error-circle</bc-icon>\n                <bc-icon class=\" bc-modal-center-icon bc-md\" *ngSwitchCase=\"'warning'\">hand</bc-icon>\n                <bc-icon class=\" bc-modal-center-icon bc-md\" *ngSwitchCase=\"'success'\">ok</bc-icon>\n                <bc-icon class=\" bc-modal-center-icon bc-md\" *ngSwitchCase=\"'info'\">idea</bc-icon>\n            </div>\n        </section>\n        <section class=\"bc-modal-title bc-direction-row bc-margin-top-2 bc-margin-bottom-2\"[attr.aria-labelledby]=\"id\">\n            <h4 [id]=\"id\" class=\"modal-title-label\" id=\"modal title\">{{title}}</h4>\n        </section>\n        <section class=\"bc-modal-title bc-direction-row\">\n            <p>{{subTitle}}</p>\n        </section>\n        <section class=\"bc-modal-content\" [attr.aria-describedby]=\"'elemento Descripcion'\">\n            <ng-content select=\"[modalContent]\"></ng-content>\n        </section>\n        <section class=\"bc-modal-button-container\">\n            <button bc-button sizeButton=\"small\" [disabled]=\"primaryButtonDisabled\">{{textBtn}}</button>\n            <button *ngIf=\" isCancellable \" bc-button typeButton=\"secondary\" sizeButton=\"small\">{{textBtnLeft}}</button>\n        </section>\n        <section class=\"bc-modal-footer\">\n            <ng-content select=\"[modalFooter] \"></ng-content>\n        </section>\n    </section>\n</article>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i3.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i4.BcButtonDirective, selector: "[bc-button]", inputs: ["typeButton", "sizeButton", "width", "class"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"bc-modal\" [id]=\"id\" role=\"dialog\" [attr.outerCloseTap]=\"outerCloseTap\"\n    aria-labelledby=\"id\" aria-modal=\"true\">\n    <label for=\"\" class=\"bc-modal-close\"></label>\n    <section [attr.customWidth]=\"customWidth\" class=\"bc-modal-container\" [attr.titleAlign]=\"titleAlign\"\n        [attr.buttonAlignment]=\"buttonAlignment\" [attr.subTitle]=\"typeIcon\"\n        [attr.typeIcon]=\"typeIcon\" [attr.isCancellable]=\"isCancellable\" [attr.displayButton]=\"displayButton\"\n        [attr.role]=\"'alertdialog'\"[attr.aria-modal]=\"'true'\"\n        [attr.aria-label]=\"arialabelmodal?arialabelmodal:typeIcon\">\n\n        <section class=\"bc-modal-close-button-container\">\n          <div>\n            <button class=\"bc-direction-row bc-icon bc-modal-close-button bc-sm\" *ngIf=\"!hideCloseButton\"\n            [attr.aria-label]=\"textAriaLabel\">error\n          </button>\n        </div>\n        </section>\n        <div *ngIf=\"typeIcon === 'default'\" class=\"bc-modal-illustration\">\n            <ng-content select=\"[illustration]\"></ng-content>\n        </div>\n        <section *ngIf=\"typeIcon !== 'default'\" class=\"bc-modal-icon-container\">\n            <div [ngSwitch]=\"typeIcon\">\n                <bc-icon class=\" bc-modal-center-icon bc-md\" *ngSwitchCase=\"'error'\">error-circle</bc-icon>\n                <bc-icon class=\" bc-modal-center-icon bc-md\" *ngSwitchCase=\"'warning'\">hand</bc-icon>\n                <bc-icon class=\" bc-modal-center-icon bc-md\" *ngSwitchCase=\"'success'\">ok</bc-icon>\n                <bc-icon class=\" bc-modal-center-icon bc-md\" *ngSwitchCase=\"'info'\">idea</bc-icon>\n            </div>\n        </section>\n        <section class=\"bc-modal-title bc-direction-row bc-margin-top-2 bc-margin-bottom-2\"[attr.aria-labelledby]=\"id\">\n            <h4 [id]=\"id\" class=\"modal-title-label\" id=\"modal title\">{{title}}</h4>\n        </section>\n        <section class=\"bc-modal-title bc-direction-row\">\n            <p>{{subTitle}}</p>\n        </section>\n        <section class=\"bc-modal-content\" [attr.aria-describedby]=\"'elemento Descripcion'\">\n            <ng-content select=\"[modalContent]\"></ng-content>\n        </section>\n        <section class=\"bc-modal-button-container\">\n            <button bc-button sizeButton=\"small\" [disabled]=\"primaryButtonDisabled\">{{textBtn}}</button>\n            <button *ngIf=\" isCancellable \" bc-button typeButton=\"secondary\" sizeButton=\"small\">{{textBtnLeft}}</button>\n        </section>\n        <section class=\"bc-modal-footer\">\n            <ng-content select=\"[modalFooter] \"></ng-content>\n        </section>\n    </section>\n</article>\n", styles: [] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], title: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], textBtn: [{
                type: Input
            }], textBtnLeft: [{
                type: Input
            }], typeIcon: [{
                type: Input
            }], textAriaLabel: [{
                type: Input
            }], arialabelmodal: [{
                type: Input
            }], isCancellable: [{
                type: Input
            }], customWidth: [{
                type: Input
            }], titleAlign: [{
                type: Input
            }], outerCloseTap: [{
                type: Input
            }], stateClick: [{
                type: Output
            }], closeModalEvent: [{
                type: Output
            }], closedModalEsc: [{
                type: Input
            }], buttonAlignment: [{
                type: Input
            }], displayButton: [{
                type: Input
            }], hideCloseButton: [{
                type: Input
            }], primaryButtonDisabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLW1vZGFsL2JjLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1tb2RhbC9iYy1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUtaLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7OztBQUV2RSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFFdkI7Ozs7OztHQU1HO0FBT0gsTUFBTSxPQUFPLGdCQUFnQjtJQUczQixZQUFvQixHQUFlLEVBQVUsYUFBOEI7UUFBdkQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQU8zRTs7Ozs7V0FLRztRQUNNLE9BQUUsR0FBVyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyRDs7Ozs7V0FLRztRQUNNLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFNUI7Ozs7O1dBS0c7UUFDTSxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRS9COzs7OztXQUtHO1FBQ00sWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUU5Qjs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRWxDOzs7Ozs7V0FNRztRQUNNLGFBQVEsR0FBeUQsU0FBUyxDQUFDO1FBRXBGOzs7OztZQUtJO1FBQ0csa0JBQWEsR0FBWSxRQUFRLENBQUM7UUFVekM7Ozs7O1dBS0c7UUFDTSxrQkFBYSxHQUFpQixLQUFLLENBQUM7UUFFN0M7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQWlDLFFBQVEsQ0FB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SztnQkFRQyxhQUFhO3NCQUFyQixLQUFLO2dCQVFHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBUUssYUFBYTtzQkFBckIsS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBUUcsYUFBYTtzQkFBckIsS0FBSztnQkFRSSxVQUFVO3NCQUFuQixNQUFNO2dCQVFHLGVBQWU7c0JBQXhCLE1BQU07Z0JBU0ksY0FBYztzQkFBdEIsS0FBSztnQkFPQyxlQUFlO3NCQUF2QixLQUFLO2dCQVFHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBUUcsZUFBZTtzQkFBdkIsS0FBSztnQkFRRyxxQkFBcUI7c0JBQTdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY01vZGFsQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuY29uc3QgTU9EQUxfTjEwMCA9IDEwMDtcblxuLyoqXG4gKiBDb21wb25lbnRlIG1vZGFsXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjTW9kYWxDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtPbkluaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCY01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgYmNNb2RhbEJlaGF2aW9yOiBCY01vZGFsQmVoYXZpb3I7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgaGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5iY01vZGFsQmVoYXZpb3IgPSBuZXcgQmNNb2RhbEJlaGF2aW9yKCk7XG4gICAgdGhpcy5iY01vZGFsQmVoYXZpb3IuY2xvc2VNb2RhbENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWxFbWl0RXZlbnQoKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIElkIGRlbCBtb2RhbC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTW9kYWxDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSB0aGlzLmhlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbiAgLyoqXG4gICAqIFTDrXR1bG8gZGVsIG1vZGFsLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNNb2RhbENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBTdWJ0w610dWxvIGRlbCBtb2RhbCBlc3RlIHNlIHNpdMO6YSBkZSBiYWpvIGRlbCB0aXR1bG8gcHJpbmNpcGFsIGRlIGxhIG1vZGFsKS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTW9kYWxDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogVGV4dG8gZGVsIGLDs3RvbiBkZWwgbW9kYWwuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY01vZGFsQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0ZXh0QnRuOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogVGV4dG8gZGVsIGJvdMOzbiBpenF1aWVyZG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY01vZGFsQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0ZXh0QnRuTGVmdDogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFRpcG8gZGVsIMOtY29ubyBxdWUgdXNhcsOhIGVsIG1vZGFsLCBsb3MgcGVybWl0aWRvcyBzb24gOiB7J2Vycm9yJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdpbmZvJ30sXG4gICAqIGVsIMOtY29ubyBwb3IgZGVmZWN0byBlcyAnZGVmYXVsdCcgKHZhY8OtbyksU2kgZWwgdHlwZSBJY29uIGVzIGRpZmVyZW50ZSBkZSBkZWZhdWx0IG5vIHZhIGEgbW9zdHJhciBsYSBpbHVzdHJhY2nDs24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY01vZGFsQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlSWNvbjogJ2Vycm9yJyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcblxuICAvKipcbiAgICAqIHRleHRvIHBhcmEgZWwgYXJpYS1sYWJlbCBkZWwgYm90w7NuIGRlIGNlcnJhci5cbiAgICAqXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICogQG1lbWJlcm9mIEJjVHJhbnNhY3Rpb25TdGF0dXNDb21wb25lbnRcbiAgICAqL1xuQElucHV0KCkgdGV4dEFyaWFMYWJlbDogJ2NlcnJhcic9ICdjZXJyYXInO1xuXG4vKipcbiAgICAqIHRleHRvIHBhcmEgYXJpYS1sYWJlbCBkZWwgbW9kYWwuXG4gICAgKlxuICAgICogQHR5cGUge3N0cmluZ31cbiAgICAqIEBtZW1iZXJvZiBCY1RyYW5zYWN0aW9uU3RhdHVzQ29tcG9uZW50XG4gICAgKi9cbkBJbnB1dCgpIGFyaWFsYWJlbG1vZGFsOiAnJztcblxuICAvKipcbiAgICogVGlwbyBkZSBhY2Npw7NuLCBwb3IgZGVmZWN0byBcIlNpbXBsZVwiLCBlc3RlIGRhZG8gZGUgZW50cmFkYSBzaXJ2ZSBwYXJhIGRlZmluaXIgc2kgZWwgcG9wLXVwIHRpZW5lIGJvdMOzbiBkZSBjYW5jZWxhY2nDs24gbyBuby5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTW9kYWxDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlzQ2FuY2VsbGFibGU6IHRydWUgfCBmYWxzZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbmRpY2EgZWwgYW5jaG8gZGVsIG1vZGFsLCBwb3IgZGVmZWN0byBcIlNtYWxsXCIuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY01vZGFsQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjdXN0b21XaWR0aDogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyA9ICdtZWRpdW0nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2EgbGEgYWxpbmVhY2nDs24gZGVsIHTDrXR1bG8gZGVsIG1vZGFsLCBwb3IgZGVmZWN0byBcImNlbnRlclwiLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNNb2RhbENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGVBbGlnbjogJ2NlbnRlcicgfCAnbGVmdCcgPSAnY2VudGVyJztcblxuICAvKipcbiAgICogSW5kaWNhIHNpIGVsIG1vZGFsIHB1ZWRlIG8gbm8gY2VycmFyc2UgaGFjaWVuZG8gY2xpY2sgZnVlcmEgZGUgw6lsLCBhZG1pdGUgZG9zIHZhbG9yZXMsIHRydWUgbyBmYWxzZS5cbiAgICpcbiAgICogQHR5cGUgeyh0cnVlIHwgZmFsc2UpfVxuICAgKiBAbWVtYmVyb2YgQmNNb2RhbENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgb3V0ZXJDbG9zZVRhcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFNlIGVqZWN1dGEgY3VhbmRvIHNlIGhhY2UgY2xpY2sgZW4gYWxndW5vIGRlIGxvcyBib3RvbmVzIGRlIGFjY2nDs25cbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxudW1iZXI+fVxuICAgKiBAbWVtYmVyb2YgQmNNb2RhbENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIHN0YXRlQ2xpY2s6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIFNlIGVqZWN1dGEgY3VhbmRvIGVsIG1vZGFsIGVzIGNlcnJhZG8gKGRlc2NhcnRhZG8pIGRlc2RlIGxhIGVxdWlzXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8YW55Pn1cbiAgICogQG1lbWJlcm9mIEJjTW9kYWxDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBjbG9zZU1vZGFsRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICogUGVybWl0ZSBkZXNoYWJpbGl0YXIgZWwgY2llcnJlIGRlbCBtb2RhbCBwb3IgbWVkaW8gZGUgbGEgdGVjbGEgRVNjXG4gICAqIHZhbG9yIHBvciBkZWZlY3RvIGVzIHRydWUgKGhhYmlsaXRhZG8pXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNNb2RhbENvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKSBjbG9zZWRNb2RhbEVzYzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEluZGljYSBsYSBvcmllbnRhY2nDs24gZGVsIG1vZGFsIGVqZW1wbG8gZW4gY2FzbyBkZSB0ZW5lciB2YXJpb3MgYm90b25lcyBsZXMgZGEgdW5hLCBhbGluZWFjacOzbiB2ZXJ0aWNhbCB1IGhvcml6b250YWwuXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNNb2RhbENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYnV0dG9uQWxpZ25tZW50OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuXG4gIC8qKlxuICAgKiBJbmRpY2EgbGEgcG9zaWJpbGlkYWQgZGUgdXRpbGl6YXIgbyBubyBsb3MgYm90b25lcyBwb3IgZGVmZWN0byBkZWwgbW9kYWxcbiAgICogKFByaW1hcnktU2Vjb25kYXJ5KSwgcG9yIGRlZmVjdG8gXCJUcnVlXCIuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNNb2RhbENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZGlzcGxheUJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEluZGljYSBsYSBwb3NpYmlsaWRhZCBvY3VsdGFyIGVsIGJvdG9uIGNsb3NlIGRlIGxhIGVzcXVpbmEgc3VwZXJpb3IgZGVyZWNoYVxuICAgKiBwb3IgZGVmZWN0byBlcyBmYWxzZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY01vZGFsQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBoaWRlQ2xvc2VCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFBlcm1pdGUgZGVzaGFiaWxpdGFyIGVsIGJvdG9uIHByaW1hcmlvIChkZXJlY2hvKSBkZWwgbW9kYWxcbiAgICogdmFsb3IgcG9yIGRlZmVjdG8gZXMgZmFsc2VcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY01vZGFsQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBwcmltYXJ5QnV0dG9uRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIFxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmJjTW9kYWxCZWhhdmlvci5zZXRJZCh0aGlzLmlkKTtcbiAgICB0aGlzLmJjTW9kYWxCZWhhdmlvci5jYWxsYmFjayA9ICh0eXBlVGFzaykgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjayh0eXBlVGFzayk7XG4gICAgfTtcbiAgICB0aGlzLmJjTW9kYWxCZWhhdmlvci5zZXRVcCgpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ2Vycm9yJzogJ01lbnNhamUgZGUgZXJyb3InLFxuICAgICAgJ3N1Y2Nlc3MnOiAnTWVuc2FqZSBkZSBleGl0bycsXG4gICAgICAnd2FybmluZyc6ICdNZW5zYWplIGRlIGFsZXJ0YScsXG4gICAgICAnaW5mbyc6ICdNZW5zYWplIGluZm9ybWF0aXZvJyxcblxuICAgICAgfTtcbiAgICB0aGlzLmFyaWFsYWJlbG1vZGFsID0gc2l6ZU1hcFt0aGlzLnR5cGVJY29uXTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5iY01vZGFsQmVoYXZpb3Iuc2V0SWQodGhpcy5pZCk7XG4gICAgICB0aGlzLmJjTW9kYWxCZWhhdmlvci5zZXRVcCh0cnVlKTtcbiAgICB9LCBNT0RBTF9OMTAwKTtcbiAgICB0aGlzLmJjTW9kYWxCZWhhdmlvci5zZXRFdmVudENsb3NlRXNjKHRoaXMuY2xvc2VkTW9kYWxFc2MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFicmUgZWwgbW9kYWwuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY01vZGFsQ29tcG9uZW50XG4gICAqL1xuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5iY01vZGFsQmVoYXZpb3Iub3Blbk1vZGFsKCk7XG4gIH1cbiAgLyoqXG4gICAqIENpZXJyYSBlbCBtb2RhbC5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTW9kYWxDb21wb25lbnRcbiAgICovXG4gIHNodXREb3duKCkge1xuICAgIHRoaXMuYmNNb2RhbEJlaGF2aW9yLmNsb3NlTW9kYWwoKTtcbiAgfVxuICAvKipcbiAgICogUmV0b3JuYSBlbCB0aXBvIGRlIHRhcmVhIGVqZWN1dGEgcG9yIGNhZGEgdW5vIGRlIGxvcyBib3RvbmVzIGRlbCBtb2RhbCAoUHJpbWFyaW8gbyBTZWN1bmRhcmlvKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTW9kYWxDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgY2FsbGJhY2sodHlwZVRhc2s6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdGVDbGljay5lbWl0KHR5cGVUYXNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZSBlamVjdXRhIGN1YW5kbyBzZSBjaWVycmEgKGRlc2NhcnRhKSBlbCBtb2RhbC5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTW9kYWxDb21wb25lbnRcbiAgICovXG4gIGNsb3NlTW9kYWxFbWl0RXZlbnQoKSB7XG4gICAgdGhpcy5jbG9zZU1vZGFsRXZlbnQuZW1pdChudWxsKTtcbiAgfVxuXG5cbn1cbiIsIjxhcnRpY2xlIGNsYXNzPVwiYmMtbW9kYWxcIiBbaWRdPVwiaWRcIiByb2xlPVwiZGlhbG9nXCIgW2F0dHIub3V0ZXJDbG9zZVRhcF09XCJvdXRlckNsb3NlVGFwXCJcbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJpZFwiIGFyaWEtbW9kYWw9XCJ0cnVlXCI+XG4gICAgPGxhYmVsIGZvcj1cIlwiIGNsYXNzPVwiYmMtbW9kYWwtY2xvc2VcIj48L2xhYmVsPlxuICAgIDxzZWN0aW9uIFthdHRyLmN1c3RvbVdpZHRoXT1cImN1c3RvbVdpZHRoXCIgY2xhc3M9XCJiYy1tb2RhbC1jb250YWluZXJcIiBbYXR0ci50aXRsZUFsaWduXT1cInRpdGxlQWxpZ25cIlxuICAgICAgICBbYXR0ci5idXR0b25BbGlnbm1lbnRdPVwiYnV0dG9uQWxpZ25tZW50XCIgW2F0dHIuc3ViVGl0bGVdPVwidHlwZUljb25cIlxuICAgICAgICBbYXR0ci50eXBlSWNvbl09XCJ0eXBlSWNvblwiIFthdHRyLmlzQ2FuY2VsbGFibGVdPVwiaXNDYW5jZWxsYWJsZVwiIFthdHRyLmRpc3BsYXlCdXR0b25dPVwiZGlzcGxheUJ1dHRvblwiXG4gICAgICAgIFthdHRyLnJvbGVdPVwiJ2FsZXJ0ZGlhbG9nJ1wiW2F0dHIuYXJpYS1tb2RhbF09XCIndHJ1ZSdcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFsYWJlbG1vZGFsP2FyaWFsYWJlbG1vZGFsOnR5cGVJY29uXCI+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1tb2RhbC1jbG9zZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiYy1kaXJlY3Rpb24tcm93IGJjLWljb24gYmMtbW9kYWwtY2xvc2UtYnV0dG9uIGJjLXNtXCIgKm5nSWY9XCIhaGlkZUNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwidGV4dEFyaWFMYWJlbFwiPmVycm9yXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJ0eXBlSWNvbiA9PT0gJ2RlZmF1bHQnXCIgY2xhc3M9XCJiYy1tb2RhbC1pbGx1c3RyYXRpb25cIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltpbGx1c3RyYXRpb25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gKm5nSWY9XCJ0eXBlSWNvbiAhPT0gJ2RlZmF1bHQnXCIgY2xhc3M9XCJiYy1tb2RhbC1pY29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwidHlwZUljb25cIj5cbiAgICAgICAgICAgICAgICA8YmMtaWNvbiBjbGFzcz1cIiBiYy1tb2RhbC1jZW50ZXItaWNvbiBiYy1tZFwiICpuZ1N3aXRjaENhc2U9XCInZXJyb3InXCI+ZXJyb3ItY2lyY2xlPC9iYy1pY29uPlxuICAgICAgICAgICAgICAgIDxiYy1pY29uIGNsYXNzPVwiIGJjLW1vZGFsLWNlbnRlci1pY29uIGJjLW1kXCIgKm5nU3dpdGNoQ2FzZT1cIid3YXJuaW5nJ1wiPmhhbmQ8L2JjLWljb24+XG4gICAgICAgICAgICAgICAgPGJjLWljb24gY2xhc3M9XCIgYmMtbW9kYWwtY2VudGVyLWljb24gYmMtbWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ3N1Y2Nlc3MnXCI+b2s8L2JjLWljb24+XG4gICAgICAgICAgICAgICAgPGJjLWljb24gY2xhc3M9XCIgYmMtbW9kYWwtY2VudGVyLWljb24gYmMtbWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ2luZm8nXCI+aWRlYTwvYmMtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtbW9kYWwtdGl0bGUgYmMtZGlyZWN0aW9uLXJvdyBiYy1tYXJnaW4tdG9wLTIgYmMtbWFyZ2luLWJvdHRvbS0yXCJbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiaWRcIj5cbiAgICAgICAgICAgIDxoNCBbaWRdPVwiaWRcIiBjbGFzcz1cIm1vZGFsLXRpdGxlLWxhYmVsXCIgaWQ9XCJtb2RhbCB0aXRsZVwiPnt7dGl0bGV9fTwvaDQ+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1tb2RhbC10aXRsZSBiYy1kaXJlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICA8cD57e3N1YlRpdGxlfX08L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1tb2RhbC1jb250ZW50XCIgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCInZWxlbWVudG8gRGVzY3JpcGNpb24nXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbW9kYWxDb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJjLW1vZGFsLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gYmMtYnV0dG9uIHNpemVCdXR0b249XCJzbWFsbFwiIFtkaXNhYmxlZF09XCJwcmltYXJ5QnV0dG9uRGlzYWJsZWRcIj57e3RleHRCdG59fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiBpc0NhbmNlbGxhYmxlIFwiIGJjLWJ1dHRvbiB0eXBlQnV0dG9uPVwic2Vjb25kYXJ5XCIgc2l6ZUJ1dHRvbj1cInNtYWxsXCI+e3t0ZXh0QnRuTGVmdH19PC9idXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1tb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlttb2RhbEZvb3Rlcl0gXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPlxuPC9hcnRpY2xlPlxuIl19