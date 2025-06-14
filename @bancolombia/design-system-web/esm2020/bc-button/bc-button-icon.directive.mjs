import { Directive, HostBinding, Input, HostListener, } from '@angular/core';
import * as i0 from "@angular/core";
const ICON_STATUS = {
    enabled: 'bc-button-icon',
    disabled: 'bc-button-icon-disabled',
};
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonIconDirective
 * @implements {AfterContentInit}
 * @deprecated  Utilizar componente BcIconButtonComponent
 */
export class BcButtonIconDirective {
    constructor() {
        /**
         * Este atributo nos configura el tipo de botón mediante su clase.
         *
         * @type {string}
         * @memberof BcButtonIconDirective
         * @deprecated  Utilizar componente BcIconButtonComponent
         */
        this.class = '';
        /**
         * Este atributo nos indica si el botón está habilitado o deshabilitado.
         *
         * @type {boolean}
         * @memberof BcButtonIconDirective
         * @deprecated  Utilizar componente BcIconButtonComponent
         */
        this.disabled = false;
        this.clases = [this.class].join(' ');
    }
    get tabIndex() {
        return '0';
    }
    onFocusOut() {
        this.clases = this.clases.replace(this.setAccesibility(), '');
    }
    onFocus(event) {
        if (event && event.key === 'Tab') {
            this.clases += ' ' + this.setAccesibility();
        }
    }
    /**
     * Configura estado del botón icono.
     *
     * @returns {string}
     * @memberof BcButtonIconDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setStatus() {
        let response = '';
        if (this.disabled) {
            response = ICON_STATUS.disabled;
        }
        else {
            response = ICON_STATUS.enabled;
        }
        return response;
    }
    /**
     * Configura la accesibilidad del componente.
     *
     * @returns {string}
     * @memberof BcButtonIconDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setAccesibility() {
        return 'outline-element';
    }
    ngAfterContentInit() {
        this.clases = [this.class, this.setStatus()].join(' ');
    }
}
BcButtonIconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonIconDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcButtonIconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcButtonIconDirective, selector: "[bc-button-icon]", inputs: { class: "class", disabled: "disabled" }, host: { listeners: { "focusout": "onFocusOut()", "keyup": "onFocus($event)" }, properties: { "attr.tabindex": "this.tabIndex", "class": "this.clases" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonIconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-button-icon]',
                }]
        }], propDecorators: { tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], class: [{
                type: Input
            }], disabled: [{
                type: Input
            }], clases: [{
                type: HostBinding,
                args: ['class']
            }], onFocusOut: [{
                type: HostListener,
                args: ['focusout']
            }], onFocus: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYnV0dG9uLWljb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWJ1dHRvbi9iYy1idXR0b24taWNvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsTUFBTSxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QixRQUFRLEVBQUUseUJBQXlCO0NBQ3BDLENBQUM7QUFFRjs7Ozs7OztHQU9HO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQVFFOzs7Ozs7V0FNRztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDcEI7Ozs7OztXQU1HO1FBQ00sYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVKLFdBQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0EyQ3ZEO0lBaEVDLElBQWtDLFFBQVE7UUFDeEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBcUJ5QixVQUFVO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFa0MsT0FBTyxDQUFDLEtBQW9CO1FBQzdELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxTQUFTO1FBQ1AsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztTQUNqQzthQUFNO1lBQ0wsUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7U0FDaEM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsZUFBZTtRQUNiLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7a0hBaEVVLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7OEJBRW1DLFFBQVE7c0JBQXpDLFdBQVc7dUJBQUMsZUFBZTtnQkFXbkIsS0FBSztzQkFBYixLQUFLO2dCQVFHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRWdCLE1BQU07c0JBQTNCLFdBQVc7dUJBQUMsT0FBTztnQkFFTSxVQUFVO3NCQUFuQyxZQUFZO3VCQUFDLFVBQVU7Z0JBSVcsT0FBTztzQkFBekMsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBBZnRlckNvbnRlbnRJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgSUNPTl9TVEFUVVMgPSB7XG4gIGVuYWJsZWQ6ICdiYy1idXR0b24taWNvbicsXG4gIGRpc2FibGVkOiAnYmMtYnV0dG9uLWljb24tZGlzYWJsZWQnLFxufTtcblxuLyoqXG4gKiBJbXBvcnRhIGxhIGRpcmVjdGl2YSBkZSBib3RvbmVzIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0J1dHRvbkljb25EaXJlY3RpdmVcbiAqIEBpbXBsZW1lbnRzIHtBZnRlckNvbnRlbnRJbml0fVxuICogQGRlcHJlY2F0ZWQgIFV0aWxpemFyIGNvbXBvbmVudGUgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYy1idXR0b24taWNvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBCY0J1dHRvbkljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JykgZ2V0IHRhYkluZGV4KCkge1xuICAgIHJldHVybiAnMCc7XG4gIH1cblxuICAvKipcbiAgICogRXN0ZSBhdHJpYnV0byBub3MgY29uZmlndXJhIGVsIHRpcG8gZGUgYm90w7NuIG1lZGlhbnRlIHN1IGNsYXNlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25JY29uRGlyZWN0aXZlXG4gICAqIEBkZXByZWNhdGVkICBVdGlsaXphciBjb21wb25lbnRlIEJjSWNvbkJ1dHRvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY2xhc3MgPSAnJztcbiAgLyoqXG4gICAqIEVzdGUgYXRyaWJ1dG8gbm9zIGluZGljYSBzaSBlbCBib3TDs24gZXN0w6EgaGFiaWxpdGFkbyBvIGRlc2hhYmlsaXRhZG8uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25JY29uRGlyZWN0aXZlXG4gICAqIEBkZXByZWNhdGVkICBVdGlsaXphciBjb21wb25lbnRlIEJjSWNvbkJ1dHRvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc2VzID0gW3RoaXMuY2xhc3NdLmpvaW4oJyAnKTtcblxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpIG9uRm9jdXNPdXQoKSB7XG4gICAgdGhpcy5jbGFzZXMgPSB0aGlzLmNsYXNlcy5yZXBsYWNlKHRoaXMuc2V0QWNjZXNpYmlsaXR5KCksICcnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSkgb25Gb2N1cyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudCAmJiBldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICB0aGlzLmNsYXNlcyArPSAnICcgKyB0aGlzLnNldEFjY2VzaWJpbGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmEgZXN0YWRvIGRlbCBib3TDs24gaWNvbm8uXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0J1dHRvbkljb25EaXJlY3RpdmVcbiAgICogQGRlcHJlY2F0ZWQgIFV0aWxpemFyIGNvbXBvbmVudGUgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBzZXRTdGF0dXMoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzcG9uc2UgPSAnJztcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmVzcG9uc2UgPSBJQ09OX1NUQVRVUy5kaXNhYmxlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UgPSBJQ09OX1NUQVRVUy5lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJhIGxhIGFjY2VzaWJpbGlkYWQgZGVsIGNvbXBvbmVudGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0J1dHRvbkljb25EaXJlY3RpdmVcbiAgICogQGRlcHJlY2F0ZWQgIFV0aWxpemFyIGNvbXBvbmVudGUgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBzZXRBY2Nlc2liaWxpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ291dGxpbmUtZWxlbWVudCc7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzZXMgPSBbdGhpcy5jbGFzcywgdGhpcy5zZXRTdGF0dXMoKV0uam9pbignICcpO1xuICB9XG59XG4iXX0=