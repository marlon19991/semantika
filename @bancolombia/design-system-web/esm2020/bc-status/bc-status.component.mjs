import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-icon";
import * as i2 from "@angular/common";
/**
 * Componente Status
 * Las etiquetas tipo status son elementos que permiten a los usuarios
 * identificar rápidamente estados y categorías de artículos
 * mediante palabras clave e iconografía.
 *
 * @export
 * @class BcStatusComponent
 */
export class BcStatusComponent {
    constructor() {
        /**
         * Parámetro para denotar su tipo
         * @type {('icon-left' | 'icon-right' | 'only' | 'simple' )}
         * @memberof BcStatusComponent
         */
        this.type = 'only';
        /**
         * Parámetro para denotar el color
         * @type {('alba' | 'andino' | 'caribe' | 'macondo'| 'flamenco'| 'orquidea'| 'neutro'| 'black'| 'white')}
         * @memberof BcStatusComponent
         */
        this.color = 'alba';
        /**
         * Parámetro para denotar el tipo de borde
         * @type {('center' | 'left' | 'right')}
         * @memberof BcStatusComponent
         */
        this.border = 'center';
        /**
         * Parámetro para el ícono a mostrar
         * @type {string}
         * @memberof BcStatusComponent
         */
        this.customIcon = '';
        /**
         * Parámetro para el texto a mostrar
         * @type {string}
         * @memberof BcStatusComponent
         */
        this.text = '';
        /**
         * Parámetro para mostrar el status con estilo de componente deshabilitado
         * @type {boolean}
         * @memberof BcStatusComponent
         */
        this.disabledTag = false;
        /**
         * Parámetro para ancho explícito del componente
         * @type {string}
         * @memberof BcStatusComponent
         */
        this.widthTag = '';
    }
}
BcStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStatusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcStatusComponent, selector: "bc-status", inputs: { type: "type", color: "color", border: "border", customIcon: "customIcon", text: "text", disabledTag: "disabledTag", widthTag: "widthTag" }, ngImport: i0, template: "<div\n  [class.bc-status-disabled]=\"disabledTag\"\n  [style.--bc-status-width]=\"widthTag\"\n  class=\"bc-status bc-status-{{ type }} bc-status-color-{{ color }}\n  bc-status-border-{{ border }}\"\n>\n  <bc-icon *ngIf=\"type === 'icon-left'\">{{ customIcon }}</bc-icon>\n  <span>{{ text }}</span>\n  <bc-icon *ngIf=\"type === 'icon-right'\">{{ customIcon }}</bc-icon>\n</div>\n", components: [{ type: i1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-status', template: "<div\n  [class.bc-status-disabled]=\"disabledTag\"\n  [style.--bc-status-width]=\"widthTag\"\n  class=\"bc-status bc-status-{{ type }} bc-status-color-{{ color }}\n  bc-status-border-{{ border }}\"\n>\n  <bc-icon *ngIf=\"type === 'icon-left'\">{{ customIcon }}</bc-icon>\n  <span>{{ text }}</span>\n  <bc-icon *ngIf=\"type === 'icon-right'\">{{ customIcon }}</bc-icon>\n</div>\n" }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], border: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], text: [{
                type: Input
            }], disabledTag: [{
                type: Input
            }], widthTag: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zdGF0dXMvYmMtc3RhdHVzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zdGF0dXMvYmMtc3RhdHVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBQ2pEOzs7Ozs7OztHQVFHO0FBS0gsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQUtFOzs7O1dBSUc7UUFDTSxTQUFJLEdBQW1ELE1BQU0sQ0FBQztRQUV2RTs7OztXQUlHO1FBQ00sVUFBSyxHQVNBLE1BQU0sQ0FBQztRQUVyQjs7OztXQUlHO1FBQ00sV0FBTSxHQUFnQyxRQUFRLENBQUM7UUFFeEQ7Ozs7V0FJRztRQUNNLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFakM7Ozs7V0FJRztRQUNNLFNBQUksR0FBRyxFQUFFLENBQUM7UUFFbkI7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRTdCOzs7O1dBSUc7UUFDTSxhQUFRLEdBQVcsRUFBRSxDQUFDO0tBQ2hDOzs4R0ExRFksaUJBQWlCO2tHQUFqQixpQkFBaUIsdU1DZDlCLDRYQVVBOzJGRElhLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxXQUFXOzhCQVNaLElBQUk7c0JBQVosS0FBSztnQkFPRyxLQUFLO3NCQUFiLEtBQUs7Z0JBZ0JHLE1BQU07c0JBQWQsS0FBSztnQkFPRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIENvbXBvbmVudGUgU3RhdHVzXG4gKiBMYXMgZXRpcXVldGFzIHRpcG8gc3RhdHVzIHNvbiBlbGVtZW50b3MgcXVlIHBlcm1pdGVuIGEgbG9zIHVzdWFyaW9zXG4gKiBpZGVudGlmaWNhciByw6FwaWRhbWVudGUgZXN0YWRvcyB5IGNhdGVnb3LDrWFzIGRlIGFydMOtY3Vsb3NcbiAqIG1lZGlhbnRlIHBhbGFicmFzIGNsYXZlIGUgaWNvbm9ncmFmw61hLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1N0YXR1c0NvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1zdGF0dXMnLFxuICB0ZW1wbGF0ZVVybDogJ2JjLXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjU3RhdHVzQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFBhcsOhbWV0cm8gcGFyYSBkZW5vdGFyIHN1IHRpcG9cbiAgICogQHR5cGUgeygnaWNvbi1sZWZ0JyB8ICdpY29uLXJpZ2h0JyB8ICdvbmx5JyB8ICdzaW1wbGUnICl9XG4gICAqIEBtZW1iZXJvZiBCY1N0YXR1c0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogJ2ljb24tbGVmdCcgfCAnaWNvbi1yaWdodCcgfCAnb25seScgfCAnc2ltcGxlJyA9ICdvbmx5JztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgZWwgY29sb3JcbiAgICogQHR5cGUgeygnYWxiYScgfCAnYW5kaW5vJyB8ICdjYXJpYmUnIHwgJ21hY29uZG8nfCAnZmxhbWVuY28nfCAnb3JxdWlkZWEnfCAnbmV1dHJvJ3wgJ2JsYWNrJ3wgJ3doaXRlJyl9XG4gICAqIEBtZW1iZXJvZiBCY1N0YXR1c0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6XG4gICAgfCAnYWxiYSdcbiAgICB8ICdhbmRpbm8nXG4gICAgfCAnY2FyaWJlJ1xuICAgIHwgJ21hY29uZG8nXG4gICAgfCAnZmxhbWVuY28nXG4gICAgfCAnb3JxdWlkZWEnXG4gICAgfCAnbmV1dHJvJ1xuICAgIHwgJ2JsYWNrJ1xuICAgIHwgJ3doaXRlJyA9ICdhbGJhJztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgZWwgdGlwbyBkZSBib3JkZVxuICAgKiBAdHlwZSB7KCdjZW50ZXInIHwgJ2xlZnQnIHwgJ3JpZ2h0Jyl9XG4gICAqIEBtZW1iZXJvZiBCY1N0YXR1c0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYm9yZGVyOiAnY2VudGVyJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnY2VudGVyJztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGVsIMOtY29ubyBhIG1vc3RyYXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjU3RhdHVzQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjdXN0b21JY29uOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGVsIHRleHRvIGEgbW9zdHJhclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTdGF0dXNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRleHQgPSAnJztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIG1vc3RyYXIgZWwgc3RhdHVzIGNvbiBlc3RpbG8gZGUgY29tcG9uZW50ZSBkZXNoYWJpbGl0YWRvXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNTdGF0dXNDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkVGFnID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFBhcsOhbWV0cm8gcGFyYSBhbmNobyBleHBsw61jaXRvIGRlbCBjb21wb25lbnRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1N0YXR1c0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgd2lkdGhUYWc6IHN0cmluZyA9ICcnO1xufVxuIiwiPGRpdlxuICBbY2xhc3MuYmMtc3RhdHVzLWRpc2FibGVkXT1cImRpc2FibGVkVGFnXCJcbiAgW3N0eWxlLi0tYmMtc3RhdHVzLXdpZHRoXT1cIndpZHRoVGFnXCJcbiAgY2xhc3M9XCJiYy1zdGF0dXMgYmMtc3RhdHVzLXt7IHR5cGUgfX0gYmMtc3RhdHVzLWNvbG9yLXt7IGNvbG9yIH19XG4gIGJjLXN0YXR1cy1ib3JkZXIte3sgYm9yZGVyIH19XCJcbj5cbiAgPGJjLWljb24gKm5nSWY9XCJ0eXBlID09PSAnaWNvbi1sZWZ0J1wiPnt7IGN1c3RvbUljb24gfX08L2JjLWljb24+XG4gIDxzcGFuPnt7IHRleHQgfX08L3NwYW4+XG4gIDxiYy1pY29uICpuZ0lmPVwidHlwZSA9PT0gJ2ljb24tcmlnaHQnXCI+e3sgY3VzdG9tSWNvbiB9fTwvYmMtaWNvbj5cbjwvZGl2PlxuIl19