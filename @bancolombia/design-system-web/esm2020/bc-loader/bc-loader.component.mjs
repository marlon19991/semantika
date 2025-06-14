import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente estilo cargando
 *
 * @export
 * @class BcLoaderComponent
 * @implements {OnInit}
 */
export class BcLoaderComponent {
    constructor() {
        /**
         * Tamaño del componente.
         *
         * @type {string}
         * @memberof BcLoaderComponent
         */
        this.sizeLoader = 'xl';
        /**
         * Velocidad. Representa valor en segundos.
         *
         * @type {string}
         * @memberof BcLoaderComponent
         */
        this.speedLoader = '2';
        /**
         * Texto de atributo aria-label.
         *
         * @type {string}
         * @memberof BcLoaderComponent
         */
        this.ariaLabel = 'Cargando';
    }
}
BcLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcLoaderComponent, selector: "bc-loader", inputs: { sizeLoader: "sizeLoader", speedLoader: "speedLoader", ariaLabel: "ariaLabel" }, ngImport: i0, template: "<em\n  [class]=\"'bc-icon bc-' + sizeLoader + ' bc-loader'\"\n  [style.--bc-loader-animation-duration]=\"speedLoader + 's'\"\n  role=\"status\"\n  [attr.aria-label]=\"ariaLabel\"\n>\n  spinner\n</em>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-loader', template: "<em\n  [class]=\"'bc-icon bc-' + sizeLoader + ' bc-loader'\"\n  [style.--bc-loader-animation-duration]=\"speedLoader + 's'\"\n  role=\"status\"\n  [attr.aria-label]=\"ariaLabel\"\n>\n  spinner\n</em>\n" }]
        }], propDecorators: { sizeLoader: [{
                type: Input
            }], speedLoader: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1sb2FkZXIvYmMtbG9hZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1sb2FkZXIvYmMtbG9hZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUNqRDs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8saUJBQWlCO0lBSjlCO1FBS0U7Ozs7O1dBS0c7UUFDTSxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRTNCOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFFM0I7Ozs7O1dBS0c7UUFDTSxjQUFTLEdBQUcsVUFBVSxDQUFDO0tBQ2pDOzs4R0F4QlksaUJBQWlCO2tHQUFqQixpQkFBaUIsMklDWjlCLDJNQVFBOzJGRElhLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxXQUFXOzhCQVVaLFVBQVU7c0JBQWxCLEtBQUs7Z0JBUUcsV0FBVztzQkFBbkIsS0FBSztnQkFRRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBDb21wb25lbnRlIGVzdGlsbyBjYXJnYW5kb1xuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0xvYWRlckNvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtbG9hZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0xvYWRlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUYW1hw7FvIGRlbCBjb21wb25lbnRlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNMb2FkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNpemVMb2FkZXIgPSAneGwnO1xuXG4gIC8qKlxuICAgKiBWZWxvY2lkYWQuIFJlcHJlc2VudGEgdmFsb3IgZW4gc2VndW5kb3MuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xvYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3BlZWRMb2FkZXIgPSAnMic7XG5cbiAgLyoqXG4gICAqIFRleHRvIGRlIGF0cmlidXRvIGFyaWEtbGFiZWwuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xvYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYXJpYUxhYmVsID0gJ0NhcmdhbmRvJztcbn1cbiIsIjxlbVxuICBbY2xhc3NdPVwiJ2JjLWljb24gYmMtJyArIHNpemVMb2FkZXIgKyAnIGJjLWxvYWRlcidcIlxuICBbc3R5bGUuLS1iYy1sb2FkZXItYW5pbWF0aW9uLWR1cmF0aW9uXT1cInNwZWVkTG9hZGVyICsgJ3MnXCJcbiAgcm9sZT1cInN0YXR1c1wiXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCJcbj5cbiAgc3Bpbm5lclxuPC9lbT5cbiJdfQ==