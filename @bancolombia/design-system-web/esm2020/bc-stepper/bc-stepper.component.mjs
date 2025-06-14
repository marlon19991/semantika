import { Component, Input, Output, EventEmitter, Optional, Self } from '@angular/core';
import { BcStepperBehavior, ThemeCircles } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@bancolombia/design-system-web/bc-helpers";
export class BcStepperComponent extends BcGeneralInputComponent {
    constructor(controlDirective, helper, elementRef, render) {
        super();
        this.controlDirective = controlDirective;
        this.helper = helper;
        this.elementRef = elementRef;
        this.render = render;
        /**
         * String que indicará la dirección horizontal o vertical del Stepper.
         *
         * @type {string}
         * @memberof BcStepperComponent
         */
        this.direction = 'horizontal';
        /**
         * String que indicará la equivalencia de color que tiene el componente.
         *
         * @type {string}
         * @memberof BcStepperComponent
         */
        this.tokenColor = 'gray-gray';
        /**
         * Indica el id para el comportamiento del componente.
         */
        this.componentId = this.helper.getId(this);
        /**Indica la posición inicial del paso en el componente, por defecto es el paso 1. */
        this.indexPosition = 0;
        /**
          * String que indicará el color de los cículos de los pasos inactivos.
          *
          * @type {string}
          * @memberof BcStepperComponent
          */
        this.themeCircles = ThemeCircles.DARK;
        /**
         * Habilita o deshabilita el componente.
         *
         * @type {(boolean)}
         * @memberof BcStepperComponent
         */
        this.enabled = true;
        /**
         * Salida del valor actual del componente.
         *
         * @type {(EventEmitter<number>)}
         * @memberof BcStepperComponent
         */
        this.valueOutput = new EventEmitter();
        this.bcStepperBehavior = new BcStepperBehavior();
        if (controlDirective) {
            controlDirective.valueAccessor = this;
        }
    }
    ngOnChanges(changes) {
        this.setAria();
    }
    ngAfterViewInit() {
        this.setAria();
        this.bcStepperBehavior.setId(this.componentId);
        this.bcStepperBehavior.setLabels(this.steps);
        this.bcStepperBehavior.setThemeCircles(this.themeCircles);
        this.bcStepperBehavior.setInitIndexPosition(this.indexPosition);
        this.bcStepperBehavior.outputFunction = (value) => this.setvalueOutput(value);
        this.bcStepperBehavior.setUp();
    }
    /**
     * Función que se encarga de avanzar el Stepper.
     *
     * @memberof BcStepperComponent
     */
    next() {
        if (this.enabled) {
            this.bcStepperBehavior.next();
        }
    }
    /**
     * Función que se encarga de retroceder el Stepper.
     *
     * @memberof BcStepperComponent
     */
    back() {
        if (this.enabled) {
            this.bcStepperBehavior.back();
        }
    }
    /**
     * Valores a salir.
     *
     * @param {(number)} param
     * @memberof BcStepperComponent
     */
    setvalueOutput(param) {
        this.value = param;
        this.onTouch();
        this.onChange(this.value);
        this.valueOutput.emit(param);
    }
    /**
     * Habilita o deshabilita el stepper
     * true | false por defecto es false.
     * @memberof BcStepperComponent
     */
    setDisabledState(isDisabled) {
        this.enabled = !isDisabled;
    }
    writeValue(value) {
        this.bcStepperBehavior.setValue(value);
    }
    setAria() {
        const element = this.elementRef.nativeElement.querySelector(`article`);
        if (this.ariaLabelledby) {
            this.render.setAttribute(element, 'aria-labelledby', this.ariaLabelledby);
        }
        else {
            this.render.setAttribute(element, 'aria-label', this.ariaLabel);
        }
    }
}
BcStepperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.BcHelperService }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BcStepperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcStepperComponent, selector: "bc-stepper", inputs: { steps: "steps", direction: "direction", tokenColor: "tokenColor", ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaLabel: ["aria-label", "ariaLabel"], componentId: "componentId", indexPosition: "indexPosition", themeCircles: "themeCircles", enabled: "enabled" }, outputs: { valueOutput: "valueOutput" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<article [id]=\"componentId\" class=\"bc-stepper-{{direction}}\" role=\"tablist\" [attr.tokenColor]=\"tokenColor\">\n  <div class=\"bc-stepper-track\"></div>\n</article>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-stepper', template: "<article [id]=\"componentId\" class=\"bc-stepper-{{direction}}\" role=\"tablist\" [attr.tokenColor]=\"tokenColor\">\n  <div class=\"bc-stepper-track\"></div>\n</article>" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i2.BcHelperService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { steps: [{
                type: Input
            }], direction: [{
                type: Input
            }], tokenColor: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input,
                args: ['aria-labelledby']
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], componentId: [{
                type: Input
            }], indexPosition: [{
                type: Input
            }], themeCircles: [{
                type: Input
            }], enabled: [{
                type: Input
            }], valueOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc3RlcHBlci9iYy1zdGVwcGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zdGVwcGVyL2JjLXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBbUQsTUFBTSxlQUFlLENBQUM7QUFFdkosT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBbUIsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQU1yRyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsdUJBQXVCO0lBdUQ3RCxZQUF1QyxnQkFBMkIsRUFBVSxNQUF1QixFQUFVLFVBQXNCLEVBQVUsTUFBaUI7UUFDNUosS0FBSyxFQUFFLENBQUM7UUFENkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQTlDOUo7Ozs7O1dBS0c7UUFDTSxjQUFTLEdBQThCLFlBQVksQ0FBQztRQUU3RDs7Ozs7V0FLRztRQUNRLGVBQVUsR0FBOEQsV0FBVyxDQUFDO1FBYy9GOztXQUVHO1FBRU0sZ0JBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RCxxRkFBcUY7UUFFNUUsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDcEM7Ozs7O1lBS0k7UUFDTSxpQkFBWSxHQUFlLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFjdEQ7Ozs7O1dB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LEtBQUs7Z0JBTW1CLGNBQWM7c0JBQXZDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQU1GLFNBQVM7c0JBQTdCLEtBQUs7dUJBQUMsWUFBWTtnQkFNWixXQUFXO3NCQUFuQixLQUFLO2dCQUlHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBT0csWUFBWTtzQkFBcEIsS0FBSztnQkFxQkcsT0FBTztzQkFBZixLQUFLO2dCQVFJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwsIFNlbGYsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCY1N0ZXBwZXJCZWhhdmlvciwgVGhlbWVDaXJjbGVzIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSwgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJ2JjLXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJjU3RlcHBlckNvbXBvbmVudCBleHRlbmRzIEJjR2VuZXJhbElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIEFycmVnbG8gZGUgcGFzb3MgcXVlIGNvbnRlbmRyw6EgbnVlc3RybyBTdGVwcGVyLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBtZW1iZXJvZiBCY1N0ZXBwZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHN0ZXBzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU3RyaW5nIHF1ZSBpbmRpY2Fyw6EgbGEgZGlyZWNjacOzbiBob3Jpem9udGFsIG8gdmVydGljYWwgZGVsIFN0ZXBwZXIuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1N0ZXBwZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICAvKipcbiAgICogU3RyaW5nIHF1ZSBpbmRpY2Fyw6EgbGEgZXF1aXZhbGVuY2lhIGRlIGNvbG9yIHF1ZSB0aWVuZSBlbCBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTdGVwcGVyQ29tcG9uZW50XG4gICAqL1xuICAgIEBJbnB1dCgpIHRva2VuQ29sb3I6ICd3aGl0ZS1ncmF5JyB8ICd3aGl0ZS1ibGFjaycgfCAnZ3JheS1ncmF5JyB8ICdncmF5LWJsYWNrJyA9ICdncmF5LWdyYXknO1xuXG4gIC8qKlxuICAgKiBJbmRpY2EgZWwgYXJpYS1sYWJlbGxlZGJ5IHBhcmEgZWwgY29tcG9ydGFtaWVudG8gZGVsIGNvbXBvbmVudGUuXG4gICAqL1xuXG4gICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG5cbiAgIC8qKlxuICAgKiBJbmRpY2EgZWwgYXJpYS1sYWJlbCBwYXJhIGVsIGNvbXBvcnRhbWllbnRvIGRlbCBjb21wb25lbnRlLlxuICAgKi9cblxuICAgIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2EgZWwgaWQgcGFyYSBlbCBjb21wb3J0YW1pZW50byBkZWwgY29tcG9uZW50ZS5cbiAgICovXG5cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuaGVscGVyLmdldElkKHRoaXMpO1xuXG4gIC8qKkluZGljYSBsYSBwb3NpY2nDs24gaW5pY2lhbCBkZWwgcGFzbyBlbiBlbCBjb21wb25lbnRlLCBwb3IgZGVmZWN0byBlcyBlbCBwYXNvIDEuICovXG5cbiAgQElucHV0KCkgaW5kZXhQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAvKipcbiAgICogU3RyaW5nIHF1ZSBpbmRpY2Fyw6EgZWwgY29sb3IgZGUgbG9zIGPDrWN1bG9zIGRlIGxvcyBwYXNvcyBpbmFjdGl2b3MuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1N0ZXBwZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRoZW1lQ2lyY2xlczogVGhlbWVDaXJjbGVzPVRoZW1lQ2lyY2xlcy5EQVJLO1xuICBcbiAgYmNTdGVwcGVyQmVoYXZpb3I6IGFueTtcbiAgY29uc3RydWN0b3IoQFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgY29udHJvbERpcmVjdGl2ZTogTmdDb250cm9sLCBwcml2YXRlIGhlbHBlcjogQmNIZWxwZXJTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmNTdGVwcGVyQmVoYXZpb3IgPSBuZXcgQmNTdGVwcGVyQmVoYXZpb3IoKTtcbiAgICBpZiAoY29udHJvbERpcmVjdGl2ZSkge1xuICAgICAgY29udHJvbERpcmVjdGl2ZS52YWx1ZUFjY2Vzc29yID0gdGhpcyBhcyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudDtcbiAgICB9XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0QXJpYSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhYmlsaXRhIG8gZGVzaGFiaWxpdGEgZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQHR5cGUgeyhib29sZWFuKX1cbiAgICogQG1lbWJlcm9mIEJjU3RlcHBlckNvbXBvbmVudFxuICAgKi9cblxuICBASW5wdXQoKSBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogU2FsaWRhIGRlbCB2YWxvciBhY3R1YWwgZGVsIGNvbXBvbmVudGUuXG4gICAqXG4gICAqIEB0eXBlIHsoRXZlbnRFbWl0dGVyPG51bWJlcj4pfVxuICAgKiBAbWVtYmVyb2YgQmNTdGVwcGVyQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgdmFsdWVPdXRwdXQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QXJpYSgpO1xuICAgIHRoaXMuYmNTdGVwcGVyQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY1N0ZXBwZXJCZWhhdmlvci5zZXRMYWJlbHModGhpcy5zdGVwcyk7XG4gICAgdGhpcy5iY1N0ZXBwZXJCZWhhdmlvci5zZXRUaGVtZUNpcmNsZXModGhpcy50aGVtZUNpcmNsZXMpO1xuICAgIHRoaXMuYmNTdGVwcGVyQmVoYXZpb3Iuc2V0SW5pdEluZGV4UG9zaXRpb24odGhpcy5pbmRleFBvc2l0aW9uKTtcbiAgICB0aGlzLmJjU3RlcHBlckJlaGF2aW9yLm91dHB1dEZ1bmN0aW9uID0gKHZhbHVlKSA9PiB0aGlzLnNldHZhbHVlT3V0cHV0KHZhbHVlKTtcbiAgICB0aGlzLmJjU3RlcHBlckJlaGF2aW9yLnNldFVwKCk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY2nDs24gcXVlIHNlIGVuY2FyZ2EgZGUgYXZhbnphciBlbCBTdGVwcGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNTdGVwcGVyQ29tcG9uZW50XG4gICAqL1xuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuYmNTdGVwcGVyQmVoYXZpb3IubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jacOzbiBxdWUgc2UgZW5jYXJnYSBkZSByZXRyb2NlZGVyIGVsIFN0ZXBwZXIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1N0ZXBwZXJDb21wb25lbnRcbiAgICovXG4gIGJhY2soKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5iY1N0ZXBwZXJCZWhhdmlvci5iYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbG9yZXMgYSBzYWxpci5cbiAgICpcbiAgICogQHBhcmFtIHsobnVtYmVyKX0gcGFyYW1cbiAgICogQG1lbWJlcm9mIEJjU3RlcHBlckNvbXBvbmVudFxuICAgKi9cbiAgc2V0dmFsdWVPdXRwdXQocGFyYW06IG51bWJlcikge1xuICAgIHRoaXMudmFsdWUgPSBwYXJhbTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMudmFsdWVPdXRwdXQuZW1pdChwYXJhbSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBIYWJpbGl0YSBvIGRlc2hhYmlsaXRhIGVsIHN0ZXBwZXJcbiAgICogdHJ1ZSB8IGZhbHNlIHBvciBkZWZlY3RvIGVzIGZhbHNlLlxuICAgKiBAbWVtYmVyb2YgQmNTdGVwcGVyQ29tcG9uZW50XG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmVuYWJsZWQgPSAhaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6bnVtYmVyKSB7XG4gICAgdGhpcy5iY1N0ZXBwZXJCZWhhdmlvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHNldEFyaWEoKXtcbiAgICBjb25zdCBlbGVtZW50PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBhcnRpY2xlYCk7XG4gICAgaWYodGhpcy5hcmlhTGFiZWxsZWRieSl7XG4gICAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwnYXJpYS1sYWJlbGxlZGJ5Jyx0aGlzLmFyaWFMYWJlbGxlZGJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsJ2FyaWEtbGFiZWwnLHRoaXMuYXJpYUxhYmVsKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxhcnRpY2xlIFtpZF09XCJjb21wb25lbnRJZFwiIGNsYXNzPVwiYmMtc3RlcHBlci17e2RpcmVjdGlvbn19XCIgcm9sZT1cInRhYmxpc3RcIiBbYXR0ci50b2tlbkNvbG9yXT1cInRva2VuQ29sb3JcIj5cbiAgPGRpdiBjbGFzcz1cImJjLXN0ZXBwZXItdHJhY2tcIj48L2Rpdj5cbjwvYXJ0aWNsZT4iXX0=