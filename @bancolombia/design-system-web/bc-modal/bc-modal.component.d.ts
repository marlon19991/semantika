import { EventEmitter, OnChanges, SimpleChanges, ElementRef, AfterViewInit } from '@angular/core';
import { BcModalBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente modal
 *
 * @export
 * @class BcModalComponent
 * @implements {OnInit}
 */
export declare class BcModalComponent implements AfterViewInit, OnChanges {
    private ref;
    private helperService;
    bcModalBehavior: BcModalBehavior;
    constructor(ref: ElementRef, helperService: BcHelperService);
    /**
     * Id del modal.
     *
     * @type {string}
     * @memberof BcModalComponent
     */
    id: string;
    /**
     * Título del modal.
     *
     * @type {string}
     * @memberof BcModalComponent
     */
    title: string;
    /**
     * Subtítulo del modal este se sitúa de bajo del titulo principal de la modal).
     *
     * @type {string}
     * @memberof BcModalComponent
     */
    subTitle: string;
    /**
     * Texto del bóton del modal.
     *
     * @type {string}
     * @memberof BcModalComponent
     */
    textBtn: string;
    /**
     * Texto del botón izquierdo.
     *
     * @type {string}
     * @memberof BcModalComponent
     */
    textBtnLeft: string;
    /**
     * Tipo del ícono que usará el modal, los permitidos son : {'error', 'success', 'warning', 'info'},
     * el ícono por defecto es 'default' (vacío),Si el type Icon es diferente de default no va a mostrar la ilustración.
     *
     * @type {string}
     * @memberof BcModalComponent
     */
    typeIcon: 'error' | 'success' | 'warning' | 'info' | 'default';
    /**
      * texto para el aria-label del botón de cerrar.
      *
      * @type {string}
      * @memberof BcTransactionStatusComponent
      */
    textAriaLabel: 'cerrar';
    /**
        * texto para aria-label del modal.
        *
        * @type {string}
        * @memberof BcTransactionStatusComponent
        */
    arialabelmodal: '';
    /**
     * Tipo de acción, por defecto "Simple", este dado de entrada sirve para definir si el pop-up tiene botón de cancelación o no.
     *
     * @type {string}
     * @memberof BcModalComponent
     */
    isCancellable: true | false;
    /**
     * Indica el ancho del modal, por defecto "Small".
     * @type {string}
     * @memberof BcModalComponent
     */
    customWidth: 'small' | 'medium' | 'large';
    /**
     * Indica la alineación del título del modal, por defecto "center".
     * @type {string}
     * @memberof BcModalComponent
     */
    titleAlign: 'center' | 'left';
    /**
     * Indica si el modal puede o no cerrarse haciendo click fuera de él, admite dos valores, true o false.
     *
     * @type {(true | false)}
     * @memberof BcModalComponent
     */
    outerCloseTap: boolean;
    /**
     * Se ejecuta cuando se hace click en alguno de los botones de acción
     *
     * @type {EventEmitter<number>}
     * @memberof BcModalComponent
     */
    stateClick: EventEmitter<number>;
    /**
     * Se ejecuta cuando el modal es cerrado (descartado) desde la equis
     *
     * @type {EventEmitter<any>}
     * @memberof BcModalComponent
     */
    closeModalEvent: EventEmitter<any>;
    /**
   * Permite deshabilitar el cierre del modal por medio de la tecla ESc
   * valor por defecto es true (habilitado)
   *
   * @type {boolean}
   * @memberof BcModalComponent
   */
    closedModalEsc: boolean;
    /**
     * Indica la orientación del modal ejemplo en caso de tener varios botones les da una, alineación vertical u horizontal.
     * @type {Boolean}
     * @memberof BcModalComponent
     */
    buttonAlignment: 'horizontal' | 'vertical';
    /**
     * Indica la posibilidad de utilizar o no los botones por defecto del modal
     * (Primary-Secondary), por defecto "True".
     * @type {boolean}
     * @memberof BcModalComponent
     */
    displayButton: boolean;
    /**
     * Indica la posibilidad ocultar el boton close de la esquina superior derecha
     * por defecto es false.
     * @type {boolean}
     * @memberof BcModalComponent
     */
    hideCloseButton: boolean;
    /**
     * Permite deshabilitar el boton primario (derecho) del modal
     * valor por defecto es false
     *
     * @type {boolean}
     * @memberof BcModalComponent
     */
    primaryButtonDisabled: boolean;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Abre el modal.
     *
     * @memberof BcModalComponent
     */
    openModal(): void;
    /**
     * Cierra el modal.
     *
     * @memberof BcModalComponent
     */
    shutDown(): void;
    /**
     * Retorna el tipo de tarea ejecuta por cada uno de los botones del modal (Primario o Secundario).
     *
     * @memberof BcModalComponent
     */
    private callback;
    /**
     * Se ejecuta cuando se cierra (descarta) el modal.
     *
     * @memberof BcModalComponent
     */
    closeModalEmitEvent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcModalComponent, "bc-modal", never, { "id": "id"; "title": "title"; "subTitle": "subTitle"; "textBtn": "textBtn"; "textBtnLeft": "textBtnLeft"; "typeIcon": "typeIcon"; "textAriaLabel": "textAriaLabel"; "arialabelmodal": "arialabelmodal"; "isCancellable": "isCancellable"; "customWidth": "customWidth"; "titleAlign": "titleAlign"; "outerCloseTap": "outerCloseTap"; "closedModalEsc": "closedModalEsc"; "buttonAlignment": "buttonAlignment"; "displayButton": "displayButton"; "hideCloseButton": "hideCloseButton"; "primaryButtonDisabled": "primaryButtonDisabled"; }, { "stateClick": "stateClick"; "closeModalEvent": "closeModalEvent"; }, never, ["[illustration]", "[modalContent]", "[modalFooter] "]>;
}
