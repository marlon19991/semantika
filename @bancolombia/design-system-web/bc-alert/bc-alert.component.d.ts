import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { BcAlertBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcDialog } from '@bancolombia/design-system-web/bc-services';
import * as i0 from "@angular/core";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * Las alertas corresponde a un cuadro de diálogo que disponibiliza
 * información de manera flotante o fija.
 *
 * @export
 * @class BcAlertsComponent
 * @implements {AfterViewInit}
 */
export declare class BcAlertComponent extends BcDialog implements AfterViewInit, OnInit {
    private helper;
    /**
     * Comportamiento
     *
     * @type {BcAlertBehavior}
     * @memberof BcAlertsComponent
     */
    bcAlertBehavior: BcAlertBehavior;
    icon: string;
    /**
     * Tipos de iconos
     *
     * @memberof BcAlertsComponent
     */
    icons: {
        error: string;
        success: string;
        info: string;
        warning: string;
        inactive: string;
    };
    /**
    * Título de la alerta.
    *
    * @memberof BcAlertsComponent
    */
    title: string;
    /**
     * Texto de la alerta.
     *
     * @memberof BcAlertsComponent
     */
    text: string;
    /**
   * Links en la alerta, solo se pintan los 2 primeros items del arreglo.
   *
   * @memberof BcAlertsComponent
   */
    links: Array<LinkAlert>;
    /**
     * Tipo de alerta [ "error" | "success" | "info" | "warning" | "inactive" ].
     * @type {string}
     * @memberof BcAlertsComponent
     */
    type: string;
    /**
     * Id del componente.
     *
     * @type {string}
     * @memberof BcAlertsComponent
     */
    componentId: string;
    /**
     * Indica si la alerta es fija.
     * Si la alert es fija significa que aparecerá como un cuadro de
     * diálogo (popup) en la parte superior de la ventana; por el contrario si no
     * lo es, aparecerá insertada en el documento.
     *
     * @type {boolean}
     * @memberof BcAlertsComponent
     */
    fixed: boolean;
    /**
     * Tiempo de cerrado de la alerta en milisegundos.
     * @type {number}
     * @memberof BcAlertsComponent
     */
    timeOut: number;
    /**
     * Indica si la alerta es estática o inline.
     * Si la alert es estática significa que aparecerá como un cuadro de
     * diálogo (popup) en la parte superior de la ventana; por el contrario si no
     * lo es, aparecerá insertada en el documento.
     *
     * @type {boolean}
     * @memberof BcAlertsComponent
     */
    inline: boolean;
    /**
     * Si la alerta es estática, indica si se puede descartar o cerrar.
     *
     * @type {boolean}
     * @memberof BcAlertsComponent
     */
    dismissible: boolean;
    /**
     * Se ejecuta cuando la alerta se cierra, aplica solo para alertas inline.
     *
     * @type {EventEmitter<any>}
     * @memberof BcAlertsComponent
     */
    onclose: EventEmitter<any>;
    /**
     * Indica el id del elemento de referencia para insertar la alerta
     *
     * @type {EventEmitter<any>}
     * @memberof BcAlertsComponent
     */
    elementRef: any;
    constructor(helper: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Validar icono según tipo de alerta
     *
     * @memberof BcAlertsComponent
     */
    setIconByType(): void;
    /**
     * Atributos de la alerta
     *
     * @param {*} inputs
     * @memberof BcAlertsComponent
     */
    onInjectInputs(inputs: any): void;
    /**
     * Cerrar alerta
     *
     * @memberof BcAlertsComponent
     */
    closeIt(): void;
    /**
     * Cancelar alerta
     *
     * @memberof BcAlertsComponent
     */
    cancelIt(): void;
    /**
     * Cerrar alerta según timeout
     *
     * @memberof BcAlertsComponent
     */
    closeByTimeout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcAlertComponent, "bc-alert", never, { "title": "title"; "text": "text"; "links": "links"; "type": "type"; "componentId": "componentId"; "inline": "inline"; "dismissible": "dismissible"; }, { "onclose": "onclose"; }, never, never>;
}
interface LinkAlert {
    url: string;
    text: string;
}
export {};
