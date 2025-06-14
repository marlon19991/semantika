import { AfterViewInit, EventEmitter } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { IBcKeyValidationConfig } from './bc-key-validation-constants';
import * as i0 from "@angular/core";
/**
 * Componente para validar un código de seguridad.
 * Este componente es un wrapper de bc-key-validation de design-system-web
 * @see
 * @example
 * <bc-key-validation
 *  [componentId]="componentId"
 * [configuration]="componentConfig"
 * (closed)="onClose()"
 * (infoAlertClosed)="onInfoAlertClosed()"
 * (noAttemps)="onNoAttemps()"
 * (requestedCode)="onRequestedCode($event)"
 * (inputsFilled)="onInputsFilled($event)"
 * ></bc-key-validation>
 *
 * @export
 * @class BcKeyValidationComponent
 * @implements {AfterViewInit}
 */
export declare class BcKeyValidationComponent implements AfterViewInit {
    private _bcHelperService;
    /**
     * Instancia del comportamiento del componente
     *
     * @private
     * @type {BcKeyValidationBehavior}
     * @memberof BcKeyValidationComponent
     */
    private _behavior;
    /**
     * Identificador del componente
     * @default this._bcHelperService.getId(this)
     *
     * @type {string}
     * @memberof BcKeyValidationComponent
     */
    componentId: string;
    /**
     * Configuración del componente
     *
     * @type {IBcKeyValidationConfig}
     * @memberof BcKeyValidationComponent
     */
    configuration: IBcKeyValidationConfig;
    /**
     * Emite un evento cuando se cierra el componente
     *
     * @type {EventEmitter<any>}
     * @memberof BcKeyValidationComponent
     */
    closed: EventEmitter<any>;
    /**
     * Emite un evento cuando se cierra la alerta de información
     *
     * @type {EventEmitter<any>}
     * @memberof BcKeyValidationComponent
     */
    infoAlertClosed: EventEmitter<any>;
    /**
     * Emite un evento cuando se agotan los intentos
     *
     * @type {EventEmitter<any>}
     * @memberof BcKeyValidationComponent
     */
    noAttemps: EventEmitter<any>;
    /**
     * Emite un evento cuando se solicita un nuevo código
     *
     * @type {EventEmitter<any>}
     * @memberof BcKeyValidationComponent
     */
    requestedCode: EventEmitter<any>;
    /**
     * Emite un evento cuando se llenan todos los inputs
     *
     * @type {EventEmitter<any>}
     * @memberof BcKeyValidationComponent
     */
    inputsFilled: EventEmitter<any>;
    /**
     * Crea una instancia de BcKeyValidationComponent.
     * @param {BcHelperService} _bcHelperService Servicio para generar identificadores únicos
     * @memberof BcKeyValidationComponent
     */
    constructor(_bcHelperService: BcHelperService);
    /**
     * Inicializa el comportamiento del componente
     *
     * @private
     * @memberof BcKeyValidationComponent
     */
    private _initBehavior;
    /**
     * Abre el componente
     *
     * @memberof BcKeyValidationComponent
     */
    open(): void;
    /**
     * Cierra el componente
     *
     * @memberof BcKeyValidationComponent
     */
    close(): void;
    /**
     * Actualiza el estado del componente
     *
     * @param {{
     *     status: 'error' | 'invalid';
     *     invalidAlert?: {
     *       title: string;
     *       message: string;
     *     };
     *     remainingAttemps?: number;
     *   }} [data] Datos para actualizar el estado del componente (opcional), si el estado es 'invalid' se debe enviar el objeto invalidAlert
     * @memberof BcKeyValidationComponent
     */
    updateStatus(data?: {
        status: 'error' | 'invalid';
        invalidAlert?: {
            title: string;
            message: string;
        };
        remainingAttemps?: number;
    }): void;
    /**
     * Se ejecuta cuando el dom del componente está listo
     * Inicializa el comportamiento del componente
     *
     * @memberof BcKeyValidationComponent
     */
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcKeyValidationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcKeyValidationComponent, "bc-key-validation", never, { "componentId": "componentId"; "configuration": "configuration"; }, { "closed": "closed"; "infoAlertClosed": "infoAlertClosed"; "noAttemps": "noAttemps"; "requestedCode": "requestedCode"; "inputsFilled": "inputsFilled"; }, never, never>;
}
