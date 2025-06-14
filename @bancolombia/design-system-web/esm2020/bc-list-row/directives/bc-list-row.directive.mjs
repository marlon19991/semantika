import { Directive, Input, HostBinding } from "@angular/core";
import { BC_LIST_ROW, BcListRowVariants } from "./bc-list-row-constants";
import * as i0 from "@angular/core";
/**
 * Aplica el diseño y los estilos basicos para el contenedor bc list creados para Bancolombia S.A.
 *
 * @export
 * @class BcListRowDirective
 */
export class BcListRowDirective {
    constructor() {
        /**
        * Propiedad que almacena el valor de la clase `bc-list-row` por defecto
        * @type `string`
        * @memberof BcListRowDirective
        */
        this.defaultClass = BC_LIST_ROW;
        /**
        * Propiedad que ajusta si se debe agregar la clase `bc-list-row-elevation` o no
        * @type `boolean`
        * @memberof BcListRowDirective
        */
        this.showElevation = false;
        /**
        * Propiedad que ajusta si se debe agregar la clase `bc-list-row-title` o no
        * @type `boolean`
        * @memberof BcListRowDirective
        */
        this.isTitle = false;
        /**
        * Propiedad que permite capturar otras clases ingresadas desde el atributo class
        * @type `string`
        * @memberof BcListRowDirective
        */
        this.class = '';
    }
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListRowDirective
    */
    get hostClasses() {
        return [
            this.defaultClass,
            this.rowVariant(),
            this.setElevation(),
            this.class
        ].join(' ');
    }
    /**
     * Si la propiedad showElevation es verdadera, devuelve la cadena
     * `bc-list-row-elevation` de lo contrario, devuelve una cadena vacía
     * @returns El nombre de clase para la fila.
     */
    setElevation() {
        return this.showElevation ? `${BC_LIST_ROW}-${BcListRowVariants.ELEVATION}` : '';
    }
    /**
     * Si la propiedad isTitle es verdadera, devuelve la cadena
     * `bc-list-row-title` de lo contrario, devuelve una cadena vacía
     * @returns El nombre de clase para la fila.
     */
    rowVariant() {
        return this.isTitle ? `${BC_LIST_ROW}-${BcListRowVariants.TITLE}` : '';
    }
}
BcListRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcListRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcListRowDirective, selector: "[bc-list-row]", inputs: { showElevation: "showElevation", isTitle: "isTitle", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-list-row]',
                }]
        }], propDecorators: { showElevation: [{
                type: Input
            }], isTitle: [{
                type: Input
            }], class: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbGlzdC1yb3cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWxpc3Qtcm93L2RpcmVjdGl2ZXMvYmMtbGlzdC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRXpFOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtJOzs7O1VBSUU7UUFDTSxpQkFBWSxHQUFXLFdBQVcsQ0FBQztRQUUzQzs7OztVQUlFO1FBQ08sa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFeEM7Ozs7VUFJRTtRQUNPLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFbEM7Ozs7VUFJRTtRQUNPLFVBQUssR0FBVyxFQUFFLENBQUM7S0FtQy9CO0lBakNHOzs7O01BSUU7SUFDRixJQUEwQixXQUFXO1FBQ2pDLE9BQU87WUFDSCxJQUFJLENBQUMsWUFBWTtZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUs7U0FDYixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDcEYsQ0FBQztJQUdEOzs7O09BSUc7SUFDSCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFBO0lBQ3pFLENBQUM7OytHQTlEUSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO2lCQUM1Qjs4QkFlWSxhQUFhO3NCQUFyQixLQUFLO2dCQU9HLE9BQU87c0JBQWYsS0FBSztnQkFPRyxLQUFLO3NCQUFiLEtBQUs7Z0JBT29CLFdBQVc7c0JBQXBDLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJDX0xJU1RfUk9XLCBCY0xpc3RSb3dWYXJpYW50cyB9IGZyb20gXCIuL2JjLWxpc3Qtcm93LWNvbnN0YW50c1wiO1xuXG4vKipcbiAqIEFwbGljYSBlbCBkaXNlw7FvIHkgbG9zIGVzdGlsb3MgYmFzaWNvcyBwYXJhIGVsIGNvbnRlbmVkb3IgYmMgbGlzdCBjcmVhZG9zIHBhcmEgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0xpc3RSb3dEaXJlY3RpdmVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYmMtbGlzdC1yb3ddJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNMaXN0Um93RGlyZWN0aXZlIHtcblxuICAgIC8qKlxuICAgICogUHJvcGllZGFkIHF1ZSBhbG1hY2VuYSBlbCB2YWxvciBkZSBsYSBjbGFzZSBgYmMtbGlzdC1yb3dgIHBvciBkZWZlY3RvXG4gICAgKiBAdHlwZSBgc3RyaW5nYFxuICAgICogQG1lbWJlcm9mIEJjTGlzdFJvd0RpcmVjdGl2ZVxuICAgICovXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q2xhc3M6IHN0cmluZyA9IEJDX0xJU1RfUk9XO1xuICAgXG4gICAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIGFqdXN0YSBzaSBzZSBkZWJlIGFncmVnYXIgbGEgY2xhc2UgYGJjLWxpc3Qtcm93LWVsZXZhdGlvbmAgbyBub1xuICAgICogQHR5cGUgYGJvb2xlYW5gXG4gICAgKiBAbWVtYmVyb2YgQmNMaXN0Um93RGlyZWN0aXZlXG4gICAgKi9cbiAgICBASW5wdXQoKSBzaG93RWxldmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIFByb3BpZWRhZCBxdWUgYWp1c3RhIHNpIHNlIGRlYmUgYWdyZWdhciBsYSBjbGFzZSBgYmMtbGlzdC1yb3ctdGl0bGVgIG8gbm9cbiAgICAqIEB0eXBlIGBib29sZWFuYFxuICAgICogQG1lbWJlcm9mIEJjTGlzdFJvd0RpcmVjdGl2ZVxuICAgICovXG4gICAgQElucHV0KCkgaXNUaXRsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIHBlcm1pdGUgY2FwdHVyYXIgb3RyYXMgY2xhc2VzIGluZ3Jlc2FkYXMgZGVzZGUgZWwgYXRyaWJ1dG8gY2xhc3NcbiAgICAqIEB0eXBlIGBzdHJpbmdgXG4gICAgKiBAbWVtYmVyb2YgQmNMaXN0Um93RGlyZWN0aXZlXG4gICAgKi9cbiAgICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG5cbiAgICAvKipcbiAgICAqIEdldHRlciBxdWUgcGVybWl0ZSBhZ3JlZ2FyIHRvZGFzIGxhcyBjbGFzZXMgYWp1c3RhZGFzIGVuIGxhIGRpcmVjdGl2YVxuICAgICogQHR5cGUgYHN0cmluZ2BcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RSb3dEaXJlY3RpdmVcbiAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENsYXNzLFxuICAgICAgICAgICAgdGhpcy5yb3dWYXJpYW50KCksXG4gICAgICAgICAgICB0aGlzLnNldEVsZXZhdGlvbigpLFxuICAgICAgICAgICAgdGhpcy5jbGFzc1xuICAgICAgICBdLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBTaSBsYSBwcm9waWVkYWQgc2hvd0VsZXZhdGlvbiBlcyB2ZXJkYWRlcmEsIGRldnVlbHZlIGxhIGNhZGVuYVxuICAgICAqIGBiYy1saXN0LXJvdy1lbGV2YXRpb25gIGRlIGxvIGNvbnRyYXJpbywgZGV2dWVsdmUgdW5hIGNhZGVuYSB2YWPDrWFcbiAgICAgKiBAcmV0dXJucyBFbCBub21icmUgZGUgY2xhc2UgcGFyYSBsYSBmaWxhLlxuICAgICAqL1xuICAgIHNldEVsZXZhdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93RWxldmF0aW9uID8gYCR7QkNfTElTVF9ST1d9LSR7QmNMaXN0Um93VmFyaWFudHMuRUxFVkFUSU9OfWAgOiAnJ1xuICAgIH1cblxuICAgIFxuICAgIC8qKlxuICAgICAqIFNpIGxhIHByb3BpZWRhZCBpc1RpdGxlIGVzIHZlcmRhZGVyYSwgZGV2dWVsdmUgbGEgY2FkZW5hXG4gICAgICogYGJjLWxpc3Qtcm93LXRpdGxlYCBkZSBsbyBjb250cmFyaW8sIGRldnVlbHZlIHVuYSBjYWRlbmEgdmFjw61hXG4gICAgICogQHJldHVybnMgRWwgbm9tYnJlIGRlIGNsYXNlIHBhcmEgbGEgZmlsYS5cbiAgICAgKi9cbiAgICByb3dWYXJpYW50KCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUaXRsZSA/IGAke0JDX0xJU1RfUk9XfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLlRJVExFfWA6ICcnXG4gICAgfVxufVxuIl19