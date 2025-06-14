import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BcKeyValidationBehavior } from '@bancolombia/design-system-behaviors';
import { BC_DEFAULT_CONFIG } from './bc-key-validation-constants';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-button";
import * as i4 from "@angular/common";
import * as i5 from "@bancolombia/design-system-web/bc-link";
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
export class BcKeyValidationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMta2V5LXZhbGlkYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWtleS12YWxpZGF0aW9uL2JjLWtleS12YWxpZGF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1rZXktdmFsaWRhdGlvbi9iYy1rZXktdmFsaWRhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUcvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQTBCLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFFMUY7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUtILE1BQU0sT0FBTyx3QkFBd0I7SUEyRG5DOzs7O09BSUc7SUFDSCxZQUFvQixnQkFBaUM7UUFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQXZEckQ7Ozs7OztXQU1HO1FBQ00sZ0JBQVcsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFOzs7OztXQUtHO1FBQ00sa0JBQWEsR0FBMkIsaUJBQWlCLENBQUM7UUFDbkU7Ozs7O1dBS0c7UUFDTyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUQ7Ozs7O1dBS0c7UUFDTyxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZFOzs7OztXQUtHO1FBQ08sY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pFOzs7OztXQUtHO1FBQ08sa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyRTs7Ozs7V0FLRztRQUNPLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFNWixDQUFDO0lBQ3pEOzs7OztPQUtHO0lBQ0ssYUFBYTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILElBQUk7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILFlBQVksQ0FBQyxJQU9aO1FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzRSxDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O3FIQWpJVSx3QkFBd0I7eUdBQXhCLHdCQUF3QiwwUkM3QnJDLG9tRUFtREE7MkZEdEJhLHdCQUF3QjtrQkFKcEMsU0FBUzsrQkFDRSxtQkFBbUI7c0dBbUJwQixXQUFXO3NCQUFuQixLQUFLO2dCQU9HLGFBQWE7c0JBQXJCLEtBQUs7Z0JBT0ksTUFBTTtzQkFBZixNQUFNO2dCQU9HLGVBQWU7c0JBQXhCLE1BQU07Z0JBT0csU0FBUztzQkFBbEIsTUFBTTtnQkFPRyxhQUFhO3NCQUF0QixNQUFNO2dCQU9HLFlBQVk7c0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNLZXlWYWxpZGF0aW9uQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG5pbXBvcnQgeyBCQ19ERUZBVUxUX0NPTkZJRywgSUJjS2V5VmFsaWRhdGlvbkNvbmZpZyB9IGZyb20gJy4vYmMta2V5LXZhbGlkYXRpb24tY29uc3RhbnRzJztcblxuLyoqXG4gKiBDb21wb25lbnRlIHBhcmEgdmFsaWRhciB1biBjw7NkaWdvIGRlIHNlZ3VyaWRhZC5cbiAqIEVzdGUgY29tcG9uZW50ZSBlcyB1biB3cmFwcGVyIGRlIGJjLWtleS12YWxpZGF0aW9uIGRlIGRlc2lnbi1zeXN0ZW0td2ViXG4gKiBAc2VlXG4gKiBAZXhhbXBsZVxuICogPGJjLWtleS12YWxpZGF0aW9uXG4gKiAgW2NvbXBvbmVudElkXT1cImNvbXBvbmVudElkXCJcbiAqIFtjb25maWd1cmF0aW9uXT1cImNvbXBvbmVudENvbmZpZ1wiXG4gKiAoY2xvc2VkKT1cIm9uQ2xvc2UoKVwiXG4gKiAoaW5mb0FsZXJ0Q2xvc2VkKT1cIm9uSW5mb0FsZXJ0Q2xvc2VkKClcIlxuICogKG5vQXR0ZW1wcyk9XCJvbk5vQXR0ZW1wcygpXCJcbiAqIChyZXF1ZXN0ZWRDb2RlKT1cIm9uUmVxdWVzdGVkQ29kZSgkZXZlbnQpXCJcbiAqIChpbnB1dHNGaWxsZWQpPVwib25JbnB1dHNGaWxsZWQoJGV2ZW50KVwiXG4gKiA+PC9iYy1rZXktdmFsaWRhdGlvbj5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNLZXlWYWxpZGF0aW9uQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMta2V5LXZhbGlkYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMta2V5LXZhbGlkYXRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0tleVZhbGlkYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIEluc3RhbmNpYSBkZWwgY29tcG9ydGFtaWVudG8gZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0JjS2V5VmFsaWRhdGlvbkJlaGF2aW9yfVxuICAgKiBAbWVtYmVyb2YgQmNLZXlWYWxpZGF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIF9iZWhhdmlvcjogQmNLZXlWYWxpZGF0aW9uQmVoYXZpb3I7XG4gIC8qKlxuICAgKiBJZGVudGlmaWNhZG9yIGRlbCBjb21wb25lbnRlXG4gICAqIEBkZWZhdWx0IHRoaXMuX2JjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNLZXlWYWxpZGF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5fYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuICAvKipcbiAgICogQ29uZmlndXJhY2nDs24gZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge0lCY0tleVZhbGlkYXRpb25Db25maWd9XG4gICAqIEBtZW1iZXJvZiBCY0tleVZhbGlkYXRpb25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNvbmZpZ3VyYXRpb246IElCY0tleVZhbGlkYXRpb25Db25maWcgPSBCQ19ERUZBVUxUX0NPTkZJRztcbiAgLyoqXG4gICAqIEVtaXRlIHVuIGV2ZW50byBjdWFuZG8gc2UgY2llcnJhIGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNLZXlWYWxpZGF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogRW1pdGUgdW4gZXZlbnRvIGN1YW5kbyBzZSBjaWVycmEgbGEgYWxlcnRhIGRlIGluZm9ybWFjacOzblxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGFueT59XG4gICAqIEBtZW1iZXJvZiBCY0tleVZhbGlkYXRpb25Db21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBpbmZvQWxlcnRDbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKlxuICAgKiBFbWl0ZSB1biBldmVudG8gY3VhbmRvIHNlIGFnb3RhbiBsb3MgaW50ZW50b3NcbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNLZXlWYWxpZGF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgbm9BdHRlbXBzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogRW1pdGUgdW4gZXZlbnRvIGN1YW5kbyBzZSBzb2xpY2l0YSB1biBudWV2byBjw7NkaWdvXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8YW55Pn1cbiAgICogQG1lbWJlcm9mIEJjS2V5VmFsaWRhdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIHJlcXVlc3RlZENvZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKlxuICAgKiBFbWl0ZSB1biBldmVudG8gY3VhbmRvIHNlIGxsZW5hbiB0b2RvcyBsb3MgaW5wdXRzXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8YW55Pn1cbiAgICogQG1lbWJlcm9mIEJjS2V5VmFsaWRhdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGlucHV0c0ZpbGxlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLyoqXG4gICAqIENyZWEgdW5hIGluc3RhbmNpYSBkZSBCY0tleVZhbGlkYXRpb25Db21wb25lbnQuXG4gICAqIEBwYXJhbSB7QmNIZWxwZXJTZXJ2aWNlfSBfYmNIZWxwZXJTZXJ2aWNlIFNlcnZpY2lvIHBhcmEgZ2VuZXJhciBpZGVudGlmaWNhZG9yZXMgw7puaWNvc1xuICAgKiBAbWVtYmVyb2YgQmNLZXlWYWxpZGF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9iY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSkge31cbiAgLyoqXG4gICAqIEluaWNpYWxpemEgZWwgY29tcG9ydGFtaWVudG8gZGVsIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEJjS2V5VmFsaWRhdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdEJlaGF2aW9yKCk6IHZvaWQge1xuICAgIHRoaXMuX2JlaGF2aW9yID0gbmV3IEJjS2V5VmFsaWRhdGlvbkJlaGF2aW9yKCk7XG4gICAgdGhpcy5fYmVoYXZpb3IuY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX2JlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuX2JlaGF2aW9yLm9uQ2xvc2UgPSAoKSA9PiB0aGlzLmNsb3NlZC5lbWl0KCk7XG4gICAgdGhpcy5fYmVoYXZpb3Iub25JbmZvQWxlcnRDbG9zZSA9ICgpID0+IHRoaXMuaW5mb0FsZXJ0Q2xvc2VkLmVtaXQoKTtcbiAgICB0aGlzLl9iZWhhdmlvci5vbk5vQXR0ZW1wcyA9ICgpID0+IHRoaXMubm9BdHRlbXBzLmVtaXQoKTtcbiAgICB0aGlzLl9iZWhhdmlvci5vblJlcXVlc3RDb2RlID0gKGRhdGEpID0+IHRoaXMucmVxdWVzdGVkQ29kZS5lbWl0KGRhdGEpO1xuICAgIHRoaXMuX2JlaGF2aW9yLm9uRmlsbElucHV0ID0gKGRhdGEpID0+IHRoaXMuaW5wdXRzRmlsbGVkLmVtaXQoZGF0YSk7XG4gICAgdGhpcy5fYmVoYXZpb3Iuc2V0VXAoKTtcbiAgfVxuICAvKipcbiAgICogQWJyZSBlbCBjb21wb25lbnRlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0tleVZhbGlkYXRpb25Db21wb25lbnRcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fYmVoYXZpb3Iub3BlbigpO1xuICB9XG4gIC8qKlxuICAgKiBDaWVycmEgZWwgY29tcG9uZW50ZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNLZXlWYWxpZGF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9iZWhhdmlvci5jbG9zZSgpO1xuICB9XG4gIC8qKlxuICAgKiBBY3R1YWxpemEgZWwgZXN0YWRvIGRlbCBjb21wb25lbnRlXG4gICAqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgICAgc3RhdHVzOiAnZXJyb3InIHwgJ2ludmFsaWQnO1xuICAgKiAgICAgaW52YWxpZEFsZXJ0Pzoge1xuICAgKiAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgKiAgICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB9O1xuICAgKiAgICAgcmVtYWluaW5nQXR0ZW1wcz86IG51bWJlcjtcbiAgICogICB9fSBbZGF0YV0gRGF0b3MgcGFyYSBhY3R1YWxpemFyIGVsIGVzdGFkbyBkZWwgY29tcG9uZW50ZSAob3BjaW9uYWwpLCBzaSBlbCBlc3RhZG8gZXMgJ2ludmFsaWQnIHNlIGRlYmUgZW52aWFyIGVsIG9iamV0byBpbnZhbGlkQWxlcnRcbiAgICogQG1lbWJlcm9mIEJjS2V5VmFsaWRhdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgdXBkYXRlU3RhdHVzKGRhdGE/OiB7XG4gICAgc3RhdHVzOiAnZXJyb3InIHwgJ2ludmFsaWQnO1xuICAgIGludmFsaWRBbGVydD86IHtcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgfTtcbiAgICByZW1haW5pbmdBdHRlbXBzPzogbnVtYmVyO1xuICB9KTogdm9pZCB7XG4gICAgZGF0YSA/IHRoaXMuX2JlaGF2aW9yLnVwZGF0ZVN0YXR1cyhkYXRhKSA6IHRoaXMuX2JlaGF2aW9yLnVwZGF0ZVN0YXR1cygpO1xuICB9XG4gIC8qKlxuICAgKiBTZSBlamVjdXRhIGN1YW5kbyBlbCBkb20gZGVsIGNvbXBvbmVudGUgZXN0w6EgbGlzdG9cbiAgICogSW5pY2lhbGl6YSBlbCBjb21wb3J0YW1pZW50byBkZWwgY29tcG9uZW50ZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNLZXlWYWxpZGF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdEJlaGF2aW9yKCk7XG4gIH1cbn1cbiIsIjxhcnRpY2xlIGNsYXNzPVwiYmMta2V5LXZhbGlkYXRpb25cIiBbaWRdPVwiY29tcG9uZW50SWRcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaWRcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICA8ZGl2IGNsYXNzPVwiYmMta2V5LXZhbGlkYXRpb24tZGlhbG9nXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImFsZXJ0ZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmMta2V5LXZhbGlkYXRpb24tY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJjLWtleS12YWxpZGF0aW9uLWhlYWRlclwiPlxuICAgICAgICA8aDMgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAge3sgY29uZmlndXJhdGlvbi50aXRsZSB9fVxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmMta2V5LXZhbGlkYXRpb24tYm9keVwiPlxuICAgICAgICA8cCBjbGFzcz1cImJjLWtleS12YWxpZGF0aW9uLWRlc2NyaXB0aW9uXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAge3sgY29uZmlndXJhdGlvbi5kZXNjcmlwdGlvbiB9fVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYy1rZXktdmFsaWRhdGlvbi10aW1lb3V0LWNvbnRhaW5lclwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAgIDxwPnt7IGNvbmZpZ3VyYXRpb24udGltZXJMYWJlbCB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYy1rZXktdmFsaWRhdGlvbi1mb290ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJjLWtleS12YWxpZGF0aW9uLWFjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGJjLWJ1dHRvbiB0eXBlQnV0dG9uPVwic2Vjb25kYXJ5XCIgc2l6ZUJ1dHRvbj1cInNtYWxsXCIgY2xhc3M9XCJiYy1jbGVhci1idXR0b25cIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgICAgICAgIHt7IGNvbmZpZ3VyYXRpb24uY2xlYXJMYWJlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gYmMtYnV0dG9uIHNpemVCdXR0b249XCJzbWFsbFwiIGNsYXNzPVwiYmMtY29udGludWUtYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAgICB7eyBjb25maWd1cmF0aW9uLmNvbnRpbnVlTGFiZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJjLWtleS12YWxpZGF0aW9uLWV4dHJhLWluZm8tY29udGFpbmVyXCIgKm5nSWY9XCJjb25maWd1cmF0aW9uLm9wdGlvbkxpc3Q/Lmxlbmd0aFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYy1rZXktdmFsaWRhdGlvbi10b2tlbi1saW5rcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoNiB0YWJpbmRleD1cIjBcIj57eyBjb25maWd1cmF0aW9uLm9wdGlvbkxpc3RUaXRsZSB9fTwvaDY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmMta2V5LXZhbGlkYXRpb24tdG9rZW4tbGlua3NcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBiYy1saW5rXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBbaHJlZl09XCJvcHRpb24ubGlua1wiXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWd1cmF0aW9uLm9wdGlvbkxpc3RcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJjLWtleS12YWxpZGF0aW9uLWNsb3NlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgIDxiYy1pY29uIGNsYXNzPVwiYmMta2V5LXZhbGlkYXRpb24tY2xvc2UtYnV0dG9uXCIgc2l6ZT1cInNtXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIkNlcnJhclwiIHJvbGU9XCJidXR0b25cIlxuICAgICAgICA+ZXJyb3I8L2JjLWljb25cbiAgICAgID5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2FydGljbGU+XG4iXX0=