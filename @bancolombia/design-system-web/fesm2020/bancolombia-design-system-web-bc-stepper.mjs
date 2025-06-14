import * as i0 from '@angular/core';
import { EventEmitter, Component, Self, Optional, Input, Output, NgModule } from '@angular/core';
import { ThemeCircles, BcStepperBehavior } from '@bancolombia/design-system-behaviors';
import * as i2 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i1 from '@angular/forms';

class BcStepperComponent extends BcGeneralInputComponent {
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

/**
 * Importa el componente switch con
 * los diseños de Bancolombia S.A.
 *
 * @componente <lib-bc-switch-web></lib-bc-switch-web>
 *
 * @param  disabled default: false
 * @param  required default: true
 * @fires changeState: Emite el valor del switch cuando hay un cambio (true || false)
 * @example
 * <lib-bc-switch-web
 *          (changeState)="myEvent($event)"
 *          [id]="'yourID'"
 *          [disabled]=false
 *          [required]=true
 *          [isChecked]=false> Label
 *  </lib-bc-switch-web>
 *
 * @author: Bancolombia S.A
 */
class BcStepperModule {
}
BcStepperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcStepperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperModule, declarations: [BcStepperComponent], exports: [BcStepperComponent] });
BcStepperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcStepperComponent],
                    imports: [],
                    exports: [BcStepperComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcStepperComponent, BcStepperModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-stepper.mjs.map
