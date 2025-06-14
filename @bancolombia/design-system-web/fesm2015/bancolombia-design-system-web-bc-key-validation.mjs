import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i3 from '@bancolombia/design-system-web/bc-button';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i5 from '@bancolombia/design-system-web/bc-link';
import { BcLinkModule } from '@bancolombia/design-system-web/bc-link';
import { BcKeyValidationBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';

const BC_DEFAULT_CONFIG = {
    timeout: 5,
    numberOfAttemps: 3,
    numberOfDigits: 6,
    expiredTitle: 'Tu clave expiró',
    expiredMessage: 'La clave solicitada ha expirado, por favor solicita una de nuevo.',
    getNewCodeLabel: 'Solicitar nuevo código de seguridad',
    attempsLabel: 'Intento {{current}}/{{total}}',
    loadingLabel: 'Validando...',
    inputErrorAlert: {
        elementId: 'BcInputTokenErrorAlert',
        title: 'Ocurrio un error',
        description: 'Lo sentimos, ocurrio un error por favor intenta de nuevo.',
        disposable: true
    },
    infoAlert: {
        elementId: 'BcFooterInfoAlert',
        show: true,
        title: 'Información',
        description: 'Esta es una alerta de información opcional para monstrar contenido de interes.',
        disposable: true
    },
    title: 'Titulo del componente',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quis delectus harum maxime est tempore laboriosam repellatperspiciatis fuga, atque exercitationem, maiores tenetur et quas quam laborum nisi illum doloribus',
    clearLabel: 'Limpiar',
    continueLabel: 'Continuar',
    timerLabel: 'El código enviado vencerá en:',
    optionList: [
        { label: 'Opcion_1', link: '/' },
        { label: 'Opcion_2', link: '/' },
        { label: 'Opcion_2', link: '/' }
    ],
    optionListTitle: 'Opciones'
};

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
class BcKeyValidationComponent {
    /**
     * Crea una instancia de BcKeyValidationComponent.
     * @param {BcHelperService} _bcHelperService Servicio para generar identificadores únicos
     * @memberof BcKeyValidationComponent
     */
    constructor(_bcHelperService) {
        this._bcHelperService = _bcHelperService;
        /**
         * Identificador del componente
         * @default this._bcHelperService.getId(this)
         *
         * @type {string}
         * @memberof BcKeyValidationComponent
         */
        this.componentId = this._bcHelperService.getId(this);
        /**
         * Configuración del componente
         *
         * @type {IBcKeyValidationConfig}
         * @memberof BcKeyValidationComponent
         */
        this.configuration = BC_DEFAULT_CONFIG;
        /**
         * Emite un evento cuando se cierra el componente
         *
         * @type {EventEmitter<any>}
         * @memberof BcKeyValidationComponent
         */
        this.closed = new EventEmitter();
        /**
         * Emite un evento cuando se cierra la alerta de información
         *
         * @type {EventEmitter<any>}
         * @memberof BcKeyValidationComponent
         */
        this.infoAlertClosed = new EventEmitter();
        /**
         * Emite un evento cuando se agotan los intentos
         *
         * @type {EventEmitter<any>}
         * @memberof BcKeyValidationComponent
         */
        this.noAttemps = new EventEmitter();
        /**
         * Emite un evento cuando se solicita un nuevo código
         *
         * @type {EventEmitter<any>}
         * @memberof BcKeyValidationComponent
         */
        this.requestedCode = new EventEmitter();
        /**
         * Emite un evento cuando se llenan todos los inputs
         *
         * @type {EventEmitter<any>}
         * @memberof BcKeyValidationComponent
         */
        this.inputsFilled = new EventEmitter();
    }
    /**
     * Inicializa el comportamiento del componente
     *
     * @private
     * @memberof BcKeyValidationComponent
     */
    _initBehavior() {
        this._behavior = new BcKeyValidationBehavior();
        this._behavior.config = this.configuration;
        this._behavior.setId(this.componentId);
        this._behavior.onClose = () => this.closed.emit();
        this._behavior.onInfoAlertClose = () => this.infoAlertClosed.emit();
        this._behavior.onNoAttemps = () => this.noAttemps.emit();
        this._behavior.onRequestCode = (data) => this.requestedCode.emit(data);
        this._behavior.onFillInput = (data) => this.inputsFilled.emit(data);
        this._behavior.setUp();
    }
    /**
     * Abre el componente
     *
     * @memberof BcKeyValidationComponent
     */
    open() {
        this._behavior.open();
    }
    /**
     * Cierra el componente
     *
     * @memberof BcKeyValidationComponent
     */
    close() {
        this._behavior.close();
    }
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
    updateStatus(data) {
        data ? this._behavior.updateStatus(data) : this._behavior.updateStatus();
    }
    /**
     * Se ejecuta cuando el dom del componente está listo
     * Inicializa el comportamiento del componente
     *
     * @memberof BcKeyValidationComponent
     */
    ngAfterViewInit() {
        this._initBehavior();
    }
}
BcKeyValidationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcKeyValidationComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcKeyValidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcKeyValidationComponent, selector: "bc-key-validation", inputs: { componentId: "componentId", configuration: "configuration" }, outputs: { closed: "closed", infoAlertClosed: "infoAlertClosed", noAttemps: "noAttemps", requestedCode: "requestedCode", inputsFilled: "inputsFilled" }, ngImport: i0, template: "<article class=\"bc-key-validation\" [id]=\"componentId\" role=\"dialog\" aria-labelledby=\"id\" aria-modal=\"true\">\n  <div class=\"bc-key-validation-dialog\" tabindex=\"0\" role=\"alertdialog\" aria-modal=\"true\">\n    <div class=\"bc-key-validation-content\">\n      <div class=\"bc-key-validation-header\">\n        <h3 tabindex=\"0\">\n          {{ configuration.title }}\n        </h3>\n      </div>\n      <div class=\"bc-key-validation-body\">\n        <p class=\"bc-key-validation-description\" tabindex=\"0\">\n          {{ configuration.description }}\n        </p>\n        <div class=\"bc-key-validation-timeout-container\" tabindex=\"0\">\n          <p>{{ configuration.timerLabel }}</p>\n        </div>\n      </div>\n      <div class=\"bc-key-validation-footer\">\n        <div class=\"bc-key-validation-action-container\">\n          <button bc-button typeButton=\"secondary\" sizeButton=\"small\" class=\"bc-clear-button\" tabindex=\"0\">\n            {{ configuration.clearLabel }}\n          </button>\n          <button bc-button sizeButton=\"small\" class=\"bc-continue-button\" tabindex=\"0\">\n            {{ configuration.continueLabel }}\n          </button>\n        </div>\n\n        <div class=\"bc-key-validation-extra-info-container\" *ngIf=\"configuration.optionList?.length\">\n          <div class=\"bc-key-validation-token-links-container\">\n            <h6 tabindex=\"0\">{{ configuration.optionListTitle }}</h6>\n            <div class=\"bc-key-validation-token-links\">\n              <a\n                bc-link\n                target=\"_blank\"\n                [href]=\"option.link\"\n                *ngFor=\"let option of configuration.optionList\"\n                tabindex=\"\"\n              >\n                <span>{{ option.label }}</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bc-key-validation-close-button-container\">\n      <bc-icon class=\"bc-key-validation-close-button\" size=\"sm\" tabindex=\"0\" aria-label=\"Cerrar\" role=\"button\"\n        >error</bc-icon\n      >\n    </div>\n  </div>\n</article>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.BcButtonDirective, selector: "[bc-button]", inputs: ["typeButton", "sizeButton", "width", "class"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.BcLinkDirective, selector: "[bc-link]", inputs: ["typeLink", "sizeLink", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcKeyValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-key-validation', template: "<article class=\"bc-key-validation\" [id]=\"componentId\" role=\"dialog\" aria-labelledby=\"id\" aria-modal=\"true\">\n  <div class=\"bc-key-validation-dialog\" tabindex=\"0\" role=\"alertdialog\" aria-modal=\"true\">\n    <div class=\"bc-key-validation-content\">\n      <div class=\"bc-key-validation-header\">\n        <h3 tabindex=\"0\">\n          {{ configuration.title }}\n        </h3>\n      </div>\n      <div class=\"bc-key-validation-body\">\n        <p class=\"bc-key-validation-description\" tabindex=\"0\">\n          {{ configuration.description }}\n        </p>\n        <div class=\"bc-key-validation-timeout-container\" tabindex=\"0\">\n          <p>{{ configuration.timerLabel }}</p>\n        </div>\n      </div>\n      <div class=\"bc-key-validation-footer\">\n        <div class=\"bc-key-validation-action-container\">\n          <button bc-button typeButton=\"secondary\" sizeButton=\"small\" class=\"bc-clear-button\" tabindex=\"0\">\n            {{ configuration.clearLabel }}\n          </button>\n          <button bc-button sizeButton=\"small\" class=\"bc-continue-button\" tabindex=\"0\">\n            {{ configuration.continueLabel }}\n          </button>\n        </div>\n\n        <div class=\"bc-key-validation-extra-info-container\" *ngIf=\"configuration.optionList?.length\">\n          <div class=\"bc-key-validation-token-links-container\">\n            <h6 tabindex=\"0\">{{ configuration.optionListTitle }}</h6>\n            <div class=\"bc-key-validation-token-links\">\n              <a\n                bc-link\n                target=\"_blank\"\n                [href]=\"option.link\"\n                *ngFor=\"let option of configuration.optionList\"\n                tabindex=\"\"\n              >\n                <span>{{ option.label }}</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bc-key-validation-close-button-container\">\n      <bc-icon class=\"bc-key-validation-close-button\" size=\"sm\" tabindex=\"0\" aria-label=\"Cerrar\" role=\"button\"\n        >error</bc-icon\n      >\n    </div>\n  </div>\n</article>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], configuration: [{
                type: Input
            }], closed: [{
                type: Output
            }], infoAlertClosed: [{
                type: Output
            }], noAttemps: [{
                type: Output
            }], requestedCode: [{
                type: Output
            }], inputsFilled: [{
                type: Output
            }] } });

class BcKeyValidationModule {
}
BcKeyValidationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcKeyValidationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcKeyValidationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcKeyValidationModule, declarations: [BcKeyValidationComponent], imports: [BcIconModule, BcLinkModule, CommonModule, BcButtonModule], exports: [BcKeyValidationComponent] });
BcKeyValidationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcKeyValidationModule, imports: [[BcIconModule, BcLinkModule, CommonModule, BcButtonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcKeyValidationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcKeyValidationComponent],
                    imports: [BcIconModule, BcLinkModule, CommonModule, BcButtonModule],
                    exports: [BcKeyValidationComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcKeyValidationComponent, BcKeyValidationModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-key-validation.mjs.map
