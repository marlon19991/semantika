import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { BcNotificationBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcDialog } from '@bancolombia/design-system-web/bc-services';
import * as i0 from "@angular/core";
/**
 * Importa las Notificaciones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcNotificationsComponent
 * @implements {AfterViewInit}
 */
export declare class BcNotificationComponent extends BcDialog implements AfterViewInit, OnInit {
    private helper;
    /**
     * Comportamiento
     *
     * @type {BcNotificationBehavior}
     * @memberof BcNotificationsComponent
     */
    bcNotificationBehavior: BcNotificationBehavior;
    icon: string;
    /**
     * Tipos de iconos
     *
     * @memberof BcNotificationsComponent
     */
    icons: {
        error: string;
        success: string;
        info: string;
        warning: string;
        inactive: string;
    };
    /**
    * Titulo de la notificacion
    *
    * @memberof BcNotificationsComponent
    */
    title: string;
    /**
     * Texto de la notificacion
     *
     * @memberof BcNotificationsComponent
     */
    text: string;
    /**
     * Tipo de notificacion [ 'error' | 'success' | 'info' | 'warning' | 'inactive' (default) ]
     *
     * @type {string}
     * @memberof BcNotificationsComponent
     */
    type: string;
    /**
     * Id del componente
     *
     * @type {string}
     * @memberof BcNotificationsComponent
     */
    id: string;
    /**
     * Indica si la notificacion es fija
     *
     * @type {boolean}
     * @memberof BcNotificationsComponent
     */
    fixed: boolean;
    /**
     * Tiempo de cerrado de la notificacion
     *
     * @type {number}
     * @memberof BcNotificationsComponent
     */
    timeOut: number;
    /**
     * Indica si la notificacion es estática ó inline
     *
     * @type {boolean}
     * @memberof BcNotificationsComponent
     */
    inline: boolean;
    /**
     * Indica si la notificacion es estática se puede descartar o cerrar
     *
     * @type {boolean}
     * @memberof BcNotificationsComponent
     */
    dismissible: boolean;
    /**
     * Se ejecuta cuando la notificacion es cerrada, aplica solo para notificacions inline
     *
     * @type {EventEmitter<any>}
     * @memberof BcNotificationsComponent
     */
    onclose: EventEmitter<any>;
    /**
     * Indica el elemento de referencia para insertar la notificacion
     *
     * @type {EventEmitter<any>}
     * @memberof BcNotificationsComponent
     */
    elementRef: string;
    constructor(helper: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Validar icono según tipo de notificacion
     *
     * @memberof BcNotificationsComponent
     */
    setIconByType(): void;
    /**
     * Atributos de la notificacion
     *
     * @param {*} inputs
     * @memberof BcNotificationsComponent
     */
    onInjectInputs(inputs: any): void;
    /**
     * Cerrar notificacion
     *
     * @memberof BcNotificationsComponent
     */
    closeIt(): void;
    /**
     * Cancelar notificacion
     *
     * @memberof BcNotificationsComponent
     */
    cancelIt(): void;
    /**
     * Cerrar notificacion según timeout
     *
     * @memberof BcNotificationsComponent
     */
    closeByTimeout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcNotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcNotificationComponent, "bc-notification", never, { "title": "title"; "text": "text"; "type": "type"; "id": "id"; "inline": "inline"; "dismissible": "dismissible"; }, { "onclose": "onclose"; }, never, never>;
}
