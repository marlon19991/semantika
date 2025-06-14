import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { BcModalBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@bancolombia/design-system-web/bc-button';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { FormsModule } from '@angular/forms';

const MODAL_N100 = 100;
/**
 * Componente modal
 *
 * @export
 * @class BcModalComponent
 * @implements {OnInit}
 */
class BcModalComponent {
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

/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * @package bc-modal
 * @description Los modales son mensajes que comunican información y permiten dar una respuesta oportuna de parte del usuario
 * @param() title = ''; es el titulo de la alerta
 * @param() subTitle = ''; es el texto bajo el titulo de la alerta
 * @param() textBtn = ''; Texto del boton principal
 * @param() textBtnLeft = ''; Texto del boton secundario
 * @param() showModal= false; Boleano que detona el modal
 * @param() typeIcon = 'default'; tipo de icono pueder ser success, warning, info, inactive, error
 * @param() typeAction = 'simple'; tipo de acción establece si hay uno o dos botones sus posibles valores simple, double
 * @Output() stateClick = new EventEmitter<boolean>(); Emisor que retorna true cuando se oprime
 * el botón principal, false en el boton secundario
 * @example
 * @author: Bancolombia S.A
 */
class BcModalModule {
}
BcModalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcModalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalModule, declarations: [BcModalComponent], imports: [BcIconModule, BcButtonModule, CommonModule, FormsModule], exports: [BcModalComponent] });
BcModalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalModule, imports: [[BcIconModule, BcButtonModule, CommonModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcModalComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule, FormsModule],
                    exports: [BcModalComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcModalComponent, BcModalModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-modal.mjs.map
