import { AfterViewInit, EventEmitter } from '@angular/core';
import { BcInlineAlertBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcDialog } from '@bancolombia/design-system-web/bc-services';
import * as i0 from "@angular/core";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * Las alertas corresponde a un cuadro de diálogo que disponibiliza
 * información de manera flotante o fija.
 *
 * @export
 * @class BcInlineAlertComponent
 * @implements {AfterViewInit}
 */
export declare class BcInlineAlertComponent extends BcDialog implements AfterViewInit {
    private helper;
    /**
     * Comportamiento
     *
     * @type {BcInlineAlertBehavior}
     * @memberof BcInlineAlertComponent
     */
    bcAlertBehavior: BcInlineAlertBehavior;
    icon: string;
    /**
     * Tipos de iconos
     *
     * @memberof BcInlineAlertComponent
     */
    icons: {
        error: string;
        success: string;
        info: string;
        warning: string;
    };
    /**
    * Título de la alerta.
    *
    * @memberof BcInlineAlertComponent
    */
    title: string;
    /**
     * Texto de la alerta.
     *
     * @memberof BcInlineAlertComponent
     */
    text: string;
    /**
     *
     * Variante de color secundaria en tema light/dark
     * @type {boolean}
     * @memberof BcInlineAlertComponent
     */
    secondColor: boolean;
    /**
     * Links en la alerta, solo se pintan los 2 primeros items del arreglo.
     * @type: Array<Link>
     * @memberof BcInlineAlertComponent
     */
    links: Array<LinkAlert>;
    /**
     * Tipo de alerta [ "error" | "success" | "info" | "warning" ].
     * @type {string}
     * @memberof BcInlineAlertComponent
     */
    type: string;
    /**
     *
     * Id del componente.
     *
     * @type {string}
     * @memberof BcInlineAlertComponent
     */
    componentId: string;
    /**
     *
     * Aria Label del botón de cierre
     *
     * @type {string}
     * @memberof BcInlineAlertComponent
     */
    lectorBtnClose: string;
    /**
     *
     * Aria Label del componente Alert
     *
     * @type {string}
     * @memberof BcInlineAlertComponent
     */
    lectorAlert: string;
    /**
     * Si la alerta es estática, indica si se puede descartar o cerrar.
     *
     * @type {boolean}
     * @memberof BcInlineAlertComponent
     */
    dismissible: boolean;
    /**
     * Se ejecuta cuando la alerta se cierra, aplica solo para alertas inline.
     *
     * @type {EventEmitter<any>}
     * @memberof BcInlineAlertComponent
     */
    onclose: EventEmitter<any>;
    /**
     * Se ejecuta cuando se le da click a un link dentro del inline.
     *
     * @type {EventEmitter<any>}
     * @memberof BcInlineAlertComponent
     */
    linkClick: EventEmitter<any>;
    /**
     * Indica el id del elemento de referencia para insertar la alerta
     *
     * @type {EventEmitter<any>}
     * @memberof BcInlineAlertComponent
     */
    elementRef: any;
    constructor(helper: BcHelperService);
    ngAfterViewInit(): void;
    /**
     * Validar icono según tipo de alerta
     *
     * @memberof BcInlineAlertComponent
     */
    setIconByType(): void;
    /**
     * Atributos de la alerta
     *
     * @param {*} inputs
     * @memberof BcInlineAlertComponent
     */
    onInjectInputs(inputs: any): void;
    /**
     * Cerrar alerta
     *
     * @memberof BcInlineAlertComponent
     */
    closeIt(): void;
    /**
     * Cancelar alerta
     *
     * @memberof BcInlineAlertComponent
     */
    cancelIt(): void;
    /**
     * Emite el evento cuando se le da click a un link
     *
     * @memberof BcInlineAlertComponent
     */
    clickEventLink(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInlineAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInlineAlertComponent, "bc-inline-alert", never, { "title": "title"; "text": "text"; "secondColor": "secondColor"; "links": "links"; "type": "type"; "componentId": "componentId"; "lectorBtnClose": "lectorBtnClose"; "lectorAlert": "lectorAlert"; "dismissible": "dismissible"; }, { "onclose": "onclose"; "linkClick": "linkClick"; }, never, never>;
}
interface LinkAlert {
    url: string;
    text: string;
}
export {};
