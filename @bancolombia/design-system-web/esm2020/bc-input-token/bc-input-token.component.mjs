import { Component, Input, EventEmitter, Output, ViewChild, forwardRef, } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BcInputTokenBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent, } from '@bancolombia/design-system-web/bc-helpers';
import { INPUT_TOKEN_NUM_3 } from './bc-input-token.constants';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Componente input token
 *
 * @export
 * @class BcTokenInputComponent
 * @implements {OnChanges, AfterViewInit}
 */
export class BcInputTokenComponent extends BcGeneralInputComponent {
    constructor(bcHelperService) {
        super();
        this.bcHelperService = bcHelperService;
        /**
         * Cantidad de inputs a mostrar.
         *
         * @memberof BcInputTokenComponent
         */
        this.numInputs = INPUT_TOKEN_NUM_3;
        /**
         * Estado del input 'disabled' | 'error' | 'default'.
         *
         * @memberof BcInputTokenComponent
         */
        this.status = 'default';
        /**
         * Muestra la salida del input.
         *
         * @memberof BcInputTokenComponent
         */
        /**
         * Tipo unmasked
         *
         * @memberof BcInputTokenComponent
         */
        this.unmasked = 'false';
        /**
         * Mostrar mensajes informativos
         *
         * @memberof BcInputTokenComponent
         */
        this.showInfoMessage = 'true';
        /**
         * Mensaje informativo personalizado
         *
         * @memberof BcInputTokenComponent
         */
        this.infoMessage = '';
        /**
         * Mensaje error personalizado
         *
         * @memberof BcInputTokenComponent
         */
        this.errorMessage = '';
        this.changeValue = new EventEmitter();
        /**
         * Indica si todos los inputs tienen un valor valido. true | false.
         *
         * @memberof BcInputTokenComponent
         */
        this.validated = new EventEmitter();
        this.control = new FormControl('');
    }
    ngOnInit() {
        this.componentId = this.componentId ?? this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        this.initInputToken();
    }
    ngOnChanges(changes) {
        if (changes.status) {
            this.bcTokenInputBehavior?.setStatus(this.status);
        }
        if (changes.errorMessage) {
            setTimeout(() => {
                this.bcTokenInputBehavior?.setStatus(this.status);
            });
        }
    }
    initInputToken() {
        this.bcTokenInputBehavior = new BcInputTokenBehavior();
        this.bcTokenInputBehavior.setId(this.componentId);
        this.bcTokenInputBehavior.outputValue = (param) => {
            this.dispatchChange(param);
            this.changeValue.emit(param);
        };
        this.bcTokenInputBehavior.outputStatus = (param) => {
            this.validated.emit(param);
        };
        this.bcTokenInputBehavior.setUp();
    }
    /**
     * Función que setea el estado del componente.
     *
     * @memberof BcInputSelectV2Component
     */
    setStatus(newStatus) {
        this.bcTokenInputBehavior.setStatus(newStatus);
    }
    /**
     * Cambia el item seleccionado. Se puede enviar un string vacio para limpiar el contenido
     *
     * @memberof BcInputTokenComponent
     */
    setValue(newValue) {
        this.bcTokenInputBehavior.setValue(newValue);
        this.dispatchChange(newValue);
    }
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en disable() o enable()
     *
     * @memberof BcInputSelectV2Component
     */
    setDisabledState(disabled) {
        this.bcTokenInputBehavior.setStatus(disabled ? 'disabled' : 'default');
    }
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en reset()
     *
     * @memberof BcInputSelectV2Component
     */
    writeValue(value) {
        this.dispatchChange(value);
    }
    /**
     * Función utilizada cuando el componente es parte de un FormGroup
     * Se utiliza en reset() o writeValue()
     *
     * @memberof BcInputSelectV2Component
     */
    dispatchChange(value) {
        this.value = value;
        if (value === null || value === undefined) {
            this.bcTokenInputBehavior?.setValue(this.value);
        }
        else {
            this.onTouch();
            this.control.markAsTouched();
            this.control.markAsDirty();
        }
        this.onChange(this.value);
        this.control.setValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
}
BcInputTokenComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputTokenComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcInputTokenComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputTokenComponent, selector: "bc-input-token", inputs: { componentId: "componentId", numInputs: ["num-inputs", "numInputs"], status: "status", unmasked: "unmasked", showInfoMessage: ["show-info-message", "showInfoMessage"], infoMessage: ["info-message", "infoMessage"], errorMessage: ["error-message", "errorMessage"] }, outputs: { changeValue: "changeValue", validated: "validated" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BcInputTokenComponent),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "bcInputToken", first: true, predicate: ["inputToken"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n  [id]=\"componentId\"\n  class=\"bc-input-token\"\n  [attr.status]=\"status\"\n  #inputToken\n>\n  <div\n    class=\"bc-input-token-container\"\n    [attr.num-inputs]=\"numInputs\"\n    [attr.unmasked]=\"unmasked\"\n    [attr.show-info-message]=\"showInfoMessage\"\n    [attr.info-message]=\"infoMessage\"\n    [attr.error-message]=\"errorMessage\"\n  ></div>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputTokenComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-token', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BcInputTokenComponent),
                            multi: true,
                        },
                    ], template: "<div\n  [id]=\"componentId\"\n  class=\"bc-input-token\"\n  [attr.status]=\"status\"\n  #inputToken\n>\n  <div\n    class=\"bc-input-token-container\"\n    [attr.num-inputs]=\"numInputs\"\n    [attr.unmasked]=\"unmasked\"\n    [attr.show-info-message]=\"showInfoMessage\"\n    [attr.info-message]=\"infoMessage\"\n    [attr.error-message]=\"errorMessage\"\n  ></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], numInputs: [{
                type: Input,
                args: ['num-inputs']
            }], status: [{
                type: Input
            }], unmasked: [{
                type: Input,
                args: ['unmasked']
            }], showInfoMessage: [{
                type: Input,
                args: ['show-info-message']
            }], infoMessage: [{
                type: Input,
                args: ['info-message']
            }], errorMessage: [{
                type: Input,
                args: ['error-message']
            }], changeValue: [{
                type: Output
            }], validated: [{
                type: Output
            }], bcInputToken: [{
                type: ViewChild,
                args: ['inputToken']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtdG9rZW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWlucHV0LXRva2VuL2JjLWlucHV0LXRva2VuLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC10b2tlbi9iYy1pbnB1dC10b2tlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUlOLFNBQVMsRUFHVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFDTCx1QkFBdUIsR0FFeEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRS9EOzs7Ozs7R0FNRztBQVlILE1BQU0sT0FBTyxxQkFDWCxTQUFRLHVCQUF1QjtJQXdFL0IsWUFBb0IsZUFBZ0M7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFEVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUE5RHBEOzs7O1dBSUc7UUFDa0IsY0FBUyxHQUFXLGlCQUFpQixDQUFDO1FBRTNEOzs7O1dBSUc7UUFDTSxXQUFNLEdBQXFDLFNBQVMsQ0FBQztRQUU5RDs7OztXQUlHO1FBRUg7Ozs7V0FJRztRQUNnQixhQUFRLEdBQVcsT0FBTyxDQUFDO1FBRTlDOzs7O1dBSUc7UUFDeUIsb0JBQWUsR0FBVyxNQUFNLENBQUM7UUFFN0Q7Ozs7V0FJRztRQUNvQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUVoRDs7OztXQUlHO1FBQ3FCLGlCQUFZLEdBQVcsRUFB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkluaXQsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmNJbnB1dFRva2VuQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHtcbiAgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQsXG4gIEJjSGVscGVyU2VydmljZSxcbn0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuaW1wb3J0IHsgSU5QVVRfVE9LRU5fTlVNXzMgfSBmcm9tICcuL2JjLWlucHV0LXRva2VuLmNvbnN0YW50cyc7XG5cbi8qKlxuICogQ29tcG9uZW50ZSBpbnB1dCB0b2tlblxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1Rva2VuSW5wdXRDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtPbkNoYW5nZXMsIEFmdGVyVmlld0luaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWlucHV0LXRva2VuJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1pbnB1dC10b2tlbi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQmNJbnB1dFRva2VuQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5wdXRUb2tlbkNvbXBvbmVudFxuICBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXRcbntcbiAgLyoqXG4gICAqIElkIGRlbCBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFRva2VuQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYW50aWRhZCBkZSBpbnB1dHMgYSBtb3N0cmFyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFRva2VuQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ251bS1pbnB1dHMnKSBudW1JbnB1dHM6IG51bWJlciA9IElOUFVUX1RPS0VOX05VTV8zO1xuXG4gIC8qKlxuICAgKiBFc3RhZG8gZGVsIGlucHV0ICdkaXNhYmxlZCcgfCAnZXJyb3InIHwgJ2RlZmF1bHQnLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFRva2VuQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXM6ICdkaXNhYmxlZCcgfCAnZXJyb3InIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBNdWVzdHJhIGxhIHNhbGlkYSBkZWwgaW5wdXQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0VG9rZW5Db21wb25lbnRcbiAgICovXG5cbiAgLyoqXG4gICAqIFRpcG8gdW5tYXNrZWRcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRUb2tlbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCd1bm1hc2tlZCcpIHVubWFza2VkOiBzdHJpbmcgPSAnZmFsc2UnO1xuXG4gIC8qKlxuICAgKiBNb3N0cmFyIG1lbnNhamVzIGluZm9ybWF0aXZvc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFRva2VuQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ3Nob3ctaW5mby1tZXNzYWdlJykgc2hvd0luZm9NZXNzYWdlOiBzdHJpbmcgPSAndHJ1ZSc7XG5cbiAgLyoqXG4gICAqIE1lbnNhamUgaW5mb3JtYXRpdm8gcGVyc29uYWxpemFkb1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFRva2VuQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ2luZm8tbWVzc2FnZScpIGluZm9NZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogTWVuc2FqZSBlcnJvciBwZXJzb25hbGl6YWRvXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0VG9rZW5Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZScpIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgQE91dHB1dCgpIGNoYW5nZVZhbHVlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgdG9kb3MgbG9zIGlucHV0cyB0aWVuZW4gdW4gdmFsb3IgdmFsaWRvLiB0cnVlIHwgZmFsc2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0VG9rZW5Db21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSB2YWxpZGF0ZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dFRva2VuJykgYmNJbnB1dFRva2VuOiBFbGVtZW50UmVmO1xuXG4gIGJjVG9rZW5JbnB1dEJlaGF2aW9yOiBCY0lucHV0VG9rZW5CZWhhdmlvcjtcbiAgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQgPz8gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0SW5wdXRUb2tlbigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnN0YXR1cykge1xuICAgICAgdGhpcy5iY1Rva2VuSW5wdXRCZWhhdmlvcj8uc2V0U3RhdHVzKHRoaXMuc3RhdHVzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5iY1Rva2VuSW5wdXRCZWhhdmlvcj8uc2V0U3RhdHVzKHRoaXMuc3RhdHVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGluaXRJbnB1dFRva2VuKCk6IHZvaWQge1xuICAgIHRoaXMuYmNUb2tlbklucHV0QmVoYXZpb3IgPSBuZXcgQmNJbnB1dFRva2VuQmVoYXZpb3IoKTtcbiAgICB0aGlzLmJjVG9rZW5JbnB1dEJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuYmNUb2tlbklucHV0QmVoYXZpb3Iub3V0cHV0VmFsdWUgPSAocGFyYW0pID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UocGFyYW0pO1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KHBhcmFtKTtcbiAgICB9O1xuICAgIHRoaXMuYmNUb2tlbklucHV0QmVoYXZpb3Iub3V0cHV0U3RhdHVzID0gKHBhcmFtKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlZC5lbWl0KHBhcmFtKTtcbiAgICB9O1xuICAgIHRoaXMuYmNUb2tlbklucHV0QmVoYXZpb3Iuc2V0VXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jacOzbiBxdWUgc2V0ZWEgZWwgZXN0YWRvIGRlbCBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBzZXRTdGF0dXMobmV3U3RhdHVzOiAnZXJyb3InIHwgJ2Rpc2FibGVkJyB8ICdkZWZhdWx0Jyk6IHZvaWQge1xuICAgIHRoaXMuYmNUb2tlbklucHV0QmVoYXZpb3Iuc2V0U3RhdHVzKG5ld1N0YXR1cyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FtYmlhIGVsIGl0ZW0gc2VsZWNjaW9uYWRvLiBTZSBwdWVkZSBlbnZpYXIgdW4gc3RyaW5nIHZhY2lvIHBhcmEgbGltcGlhciBlbCBjb250ZW5pZG9cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRUb2tlbkNvbXBvbmVudFxuICAgKi9cbiAgc2V0VmFsdWUobmV3VmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYmNUb2tlbklucHV0QmVoYXZpb3Iuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UobmV3VmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmNpw7NuIHV0aWxpemFkYSBjdWFuZG8gZWwgY29tcG9uZW50ZSBlcyBwYXJ0ZSBkZSB1biBGb3JtR3JvdXBcbiAgICogU2UgdXRpbGl6YSBlbiBkaXNhYmxlKCkgbyBlbmFibGUoKVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5iY1Rva2VuSW5wdXRCZWhhdmlvci5zZXRTdGF0dXMoZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJ2RlZmF1bHQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jacOzbiB1dGlsaXphZGEgY3VhbmRvIGVsIGNvbXBvbmVudGUgZXMgcGFydGUgZGUgdW4gRm9ybUdyb3VwXG4gICAqIFNlIHV0aWxpemEgZW4gcmVzZXQoKVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdFYyQ29tcG9uZW50XG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY2nDs24gdXRpbGl6YWRhIGN1YW5kbyBlbCBjb21wb25lbnRlIGVzIHBhcnRlIGRlIHVuIEZvcm1Hcm91cFxuICAgKiBTZSB1dGlsaXphIGVuIHJlc2V0KCkgbyB3cml0ZVZhbHVlKClcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudFxuICAgKi9cbiAgZGlzcGF0Y2hDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5iY1Rva2VuSW5wdXRCZWhhdmlvcj8uc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xuICAgICAgdGhpcy5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cbn1cbiIsIjxkaXZcbiAgW2lkXT1cImNvbXBvbmVudElkXCJcbiAgY2xhc3M9XCJiYy1pbnB1dC10b2tlblwiXG4gIFthdHRyLnN0YXR1c109XCJzdGF0dXNcIlxuICAjaW5wdXRUb2tlblxuPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJiYy1pbnB1dC10b2tlbi1jb250YWluZXJcIlxuICAgIFthdHRyLm51bS1pbnB1dHNdPVwibnVtSW5wdXRzXCJcbiAgICBbYXR0ci51bm1hc2tlZF09XCJ1bm1hc2tlZFwiXG4gICAgW2F0dHIuc2hvdy1pbmZvLW1lc3NhZ2VdPVwic2hvd0luZm9NZXNzYWdlXCJcbiAgICBbYXR0ci5pbmZvLW1lc3NhZ2VdPVwiaW5mb01lc3NhZ2VcIlxuICAgIFthdHRyLmVycm9yLW1lc3NhZ2VdPVwiZXJyb3JNZXNzYWdlXCJcbiAgPjwvZGl2PlxuPC9kaXY+XG4iXX0=