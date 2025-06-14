import { Component, Input, Output, EventEmitter, Optional, Self, } from '@angular/core';
import { BcSliderBehavior } from '@bancolombia/design-system-behaviors';
import { SLIDER_N1, SLIDER_0 } from '../bc-slider-constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/**
 * Componente Slider
 *
 * @export
 * @class BcSliderComponent
 * @implements {OnInit}
 */
export class BcSliderComponent {
    constructor(controlDirective, ref, renderer) {
        this.controlDirective = controlDirective;
        this.ref = ref;
        this.renderer = renderer;
        /**
         * Valor del rango que se inicializa en el slider.
         *
         * @type {number}
         * @memberof BcSliderComponent
         */
        this.value = SLIDER_0;
        /**
         * Valor minimo que puede tomar en el slider.
         *
         * @type {number}
         * @memberof BcSliderComponent
         */
        this.min = SLIDER_0;
        this.step = SLIDER_N1;
        /**
         * Valor de referencia que puede tomar en el slider.
         *
         * @type {number}
         * @memberof BcSliderComponent
         */
        this.referenceValue = SLIDER_0;
        /**
         * Indica el estado del slider por defecto esta habilitado.
         *
         * @type {number}
         * @memberof BcSliderDoubleComponent
         */
        this.disabled = false;
        /**
         * Indica el valor de salida seleccionado en el slider.
         *
         * @type {number}
         * @memberof BcSliderComponent
         */
        this.outputValue = new EventEmitter();
        this.ref = ref;
        this.bcSliderSimpleBehavior = new BcSliderBehavior();
    }
    ngAfterViewInit() {
        const inputElement = this.ref.nativeElement.querySelector('input');
        this.renderer.setProperty(inputElement, 'value', this.value);
        this.getOutputValue();
    }
    ngOnInit() {
        this.bcSliderSimpleBehavior.setElement(this.ref.nativeElement);
    }
    ngAfterViewChecked() {
        this.bcSliderSimpleBehavior.setUp();
    }
    /**
     * Metodo obtener valor del slider.
     *
     * @memberof BcSliderComponent
     */
    getOutputValue() {
        const input = this.ref.nativeElement.querySelector('input');
        this.outputValue.emit(input.value);
    }
    updateValue(valueOutput) {
        this.value = valueOutput;
    }
    writeValue(value) {
        this.updateValue(value);
        this.bcSliderSimpleBehavior.setValue(value);
    }
    /**
     * Deshabilita por medio de esta función el slider media código.
     *
     * @memberof BcSliderComponent
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
BcSliderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
BcSliderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSliderComponent, selector: "bc-slider", inputs: { value: "value", min: "min", max: "max", step: "step", referenceValue: "referenceValue", disabled: "disabled" }, outputs: { outputValue: "outputValue" }, ngImport: i0, template: "<div class=\"bc-slider-container\" #slider>\n  <div class=\"bc-slider-thumb\"></div>\n  <input\n    type=\"range\"\n    class=\"bc-slider\"\n    [value]=\"value\"\n    [min]=\"min\"\n    [max]=\"referenceValue\"\n    [step]=\"step\"\n    (input)=\"this.getOutputValue()\"\n    [disabled]=\"disabled\"\n  />\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-slider', template: "<div class=\"bc-slider-container\" #slider>\n  <div class=\"bc-slider-thumb\"></div>\n  <input\n    type=\"range\"\n    class=\"bc-slider\"\n    [value]=\"value\"\n    [min]=\"min\"\n    [max]=\"referenceValue\"\n    [step]=\"step\"\n    (input)=\"this.getOutputValue()\"\n    [disabled]=\"disabled\"\n  />\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { value: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], referenceValue: [{
                type: Input
            }], disabled: [{
                type: Input
            }], outputValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zbGlkZXIvYmMtc2xpZGVyLXNpbXBsZS9iYy1zbGlkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXNsaWRlci9iYy1zbGlkZXItc2ltcGxlL2JjLXNsaWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUlaLFFBQVEsRUFFUixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFeEUsT0FBTyxFQUFFLFNBQVMsRUFBQyxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRTVEOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyxpQkFBaUI7SUFzRDVCLFlBQXVDLGdCQUEyQixFQUFVLEdBQWUsRUFBVSxRQUFtQjtRQUFqRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQW5EeEg7Ozs7O1dBS0c7UUFDTSxVQUFLLEdBQVcsUUFBUSxDQUFDO1FBRWxDOzs7OztXQUtHO1FBQ00sUUFBRyxHQUFXLFFBQVEsQ0FBQztRQVV2QixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBRWxDOzs7OztXQUtHO1FBQ0ssbUJBQWMsR0FBVyxRQUFRLENBQUM7UUFFMUM7Ozs7O1dBS0c7UUFDTSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRW5DOzs7OztXQUtHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSWpELElBQUksQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQ2IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO1FBQ1osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVyxDQUFDLFdBQVc7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7OEdBbEdVLGlCQUFpQjtrR0FBakIsaUJBQWlCLG9OQzVCOUIsOFRBYUE7MkZEZWEsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLFdBQVc7OzBCQXlEUixJQUFJOzswQkFBSSxRQUFROzZGQTdDcEIsS0FBSztzQkFBYixLQUFLO2dCQVFHLEdBQUc7c0JBQVgsS0FBSztnQkFRRyxHQUFHO3NCQUFYLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLO2dCQVFFLGNBQWM7c0JBQXRCLEtBQUs7Z0JBUUksUUFBUTtzQkFBaEIsS0FBSztnQkFRSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY1NsaWRlckJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNMSURFUl9OMSxTTElERVJfMCB9IGZyb20gJy4uL2JjLXNsaWRlci1jb25zdGFudHMnO1xuXG4vKipcbiAqIENvbXBvbmVudGUgU2xpZGVyXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjU2xpZGVyQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7T25Jbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtc2xpZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY1NsaWRlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLyoqXG4gICAqIFZhbG9yIGRlbCByYW5nbyBxdWUgc2UgaW5pY2lhbGl6YSBlbiBlbCBzbGlkZXIuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IFNMSURFUl8wO1xuXG4gIC8qKlxuICAgKiBWYWxvciBtaW5pbW8gcXVlIHB1ZWRlIHRvbWFyIGVuIGVsIHNsaWRlci5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjU2xpZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBtaW46IG51bWJlciA9IFNMSURFUl8wO1xuXG4gIC8qKlxuICAgKiBWYWxvciBtw6F4aW1vIHF1ZSBwdWVkZSB0b21hciBlbiBlbCBzbGlkZXIuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbWF4OiBudW1iZXI7XG5cbiAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gU0xJREVSX04xO1xuXG4gIC8qKlxuICAgKiBWYWxvciBkZSByZWZlcmVuY2lhIHF1ZSBwdWVkZSB0b21hciBlbiBlbCBzbGlkZXIuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckNvbXBvbmVudFxuICAgKi9cbiBASW5wdXQoKSByZWZlcmVuY2VWYWx1ZTogbnVtYmVyID0gU0xJREVSXzA7XG5cbiAgLyoqXG4gICAqIEluZGljYSBlbCBlc3RhZG8gZGVsIHNsaWRlciBwb3IgZGVmZWN0byBlc3RhIGhhYmlsaXRhZG8uXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckRvdWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5kaWNhIGVsIHZhbG9yIGRlIHNhbGlkYSBzZWxlY2Npb25hZG8gZW4gZWwgc2xpZGVyLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQmNTbGlkZXJDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBvdXRwdXRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGJjU2xpZGVyU2ltcGxlQmVoYXZpb3I6IGFueTtcbiAgY29uc3RydWN0b3IoQFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgY29udHJvbERpcmVjdGl2ZTogTmdDb250cm9sLCBwcml2YXRlIHJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZWY9cmVmO1xuICAgIHRoaXMuYmNTbGlkZXJTaW1wbGVCZWhhdmlvciA9IG5ldyBCY1NsaWRlckJlaGF2aW9yKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZHtcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShpbnB1dEVsZW1lbnQsICd2YWx1ZScsIHRoaXMudmFsdWUpO1xuICAgIHRoaXMuZ2V0T3V0cHV0VmFsdWUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmNTbGlkZXJTaW1wbGVCZWhhdmlvci5zZXRFbGVtZW50KHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuYmNTbGlkZXJTaW1wbGVCZWhhdmlvci5zZXRVcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldG9kbyBvYnRlbmVyIHZhbG9yIGRlbCBzbGlkZXIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckNvbXBvbmVudFxuICAgKi9cbiAgZ2V0T3V0cHV0VmFsdWUoKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgdGhpcy5vdXRwdXRWYWx1ZS5lbWl0KGlucHV0LnZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlT3V0cHV0KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlT3V0cHV0O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgIHRoaXMuYmNTbGlkZXJTaW1wbGVCZWhhdmlvci5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuICAvKipcbiAgICogRGVzaGFiaWxpdGEgcG9yIG1lZGlvIGRlIGVzdGEgZnVuY2nDs24gZWwgc2xpZGVyIG1lZGlhIGPDs2RpZ28uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1NsaWRlckNvbXBvbmVudFxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJiYy1zbGlkZXItY29udGFpbmVyXCIgI3NsaWRlcj5cbiAgPGRpdiBjbGFzcz1cImJjLXNsaWRlci10aHVtYlwiPjwvZGl2PlxuICA8aW5wdXRcbiAgICB0eXBlPVwicmFuZ2VcIlxuICAgIGNsYXNzPVwiYmMtc2xpZGVyXCJcbiAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgIFttaW5dPVwibWluXCJcbiAgICBbbWF4XT1cInJlZmVyZW5jZVZhbHVlXCJcbiAgICBbc3RlcF09XCJzdGVwXCJcbiAgICAoaW5wdXQpPVwidGhpcy5nZXRPdXRwdXRWYWx1ZSgpXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAvPlxuPC9kaXY+XG4iXX0=