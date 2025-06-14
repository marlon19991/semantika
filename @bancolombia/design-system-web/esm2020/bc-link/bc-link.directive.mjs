import { Directive, Input, HostBinding, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
const LINK_CLASSES = {
    underline: 'link-underline',
    underlineSmall: 'link-underline-small',
    underlineDefault: 'link-underline-default',
    underlineLarge: 'link-underline-large',
    simple: 'bc-link',
    large: 'link-large',
    small: 'link-small',
    default: 'link-default'
};
/**
 * Componente links se usa para indicar un vínculo a diferentes vistas.
 *
 * @export
 * @class BcLinkDirective
 * @implements {AfterContentInit}
 */
export class BcLinkDirective {
    constructor() {
        /**
         * Estilo de link.
         *
         * @type {('simple' | 'underline')}
         * @memberof BcLinkDirective
         */
        this.typeLink = 'simple';
        /**
         * Tamaño del link.
         *
         * @type {('default' | 'small' | 'large' | 'underlineSmall' | 'underlineLarge' | 'underlineDefault')}
         * @memberof BcLinkDirective
         */
        this.sizeLink = 'default';
        /**
         * Clase del link.
         *
         * @type {string}
         * @memberof BcLinkDirective
         */
        this.class = '';
        this.clazzes = [
            'bc-link',
            this.class,
            this.getStyles(),
        ].join(' ');
    }
    onFocusOut() {
        this.clazzes = this.clazzes.replace(this.setAccesibility(), '');
    }
    onFocus(event) {
        if (event && event.key === 'Tab') {
            this.clazzes += ' ' + this.setAccesibility();
        }
    }
    /**
     * Metodo para la accesibilidad
     *
     * @returns {string}
     * @memberof BcLinkDirective
     */
    setAccesibility() {
        return 'outline-element';
    }
    ngAfterContentInit() {
        this.clazzes = [
            'bc-link',
            this.class,
            this.getStyles(),
            this.getSize(),
        ].join(' ');
    }
    /**
     * Obtener estilos por defecto
     *
     * @returns {string}
     * @memberof BcLinkDirective
     */
    getStyles() {
        return LINK_CLASSES[this.typeLink] || LINK_CLASSES.simple;
    }
    getSize() {
        return LINK_CLASSES[this.sizeLink] || LINK_CLASSES.default;
    }
}
BcLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcLinkDirective, selector: "[bc-link]", inputs: { typeLink: "typeLink", sizeLink: "sizeLink", class: "class" }, host: { listeners: { "focusout": "onFocusOut()", "keyup": "onFocus($event)" }, properties: { "class": "this.clazzes" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-link]'
                }]
        }], propDecorators: { typeLink: [{
                type: Input
            }], sizeLink: [{
                type: Input
            }], class: [{
                type: Input
            }], clazzes: [{
                type: HostBinding,
                args: ['class']
            }], onFocusOut: [{
                type: HostListener,
                args: ['focusout']
            }], onFocus: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtbGluay9iYy1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFvQixNQUFNLGVBQWUsQ0FBQzs7QUFFOUYsTUFBTSxZQUFZLEdBQUc7SUFDbkIsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQixjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLGdCQUFnQixFQUFFLHdCQUF3QjtJQUMxQyxjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLEtBQUssRUFBRSxZQUFZO0lBQ25CLEtBQUssRUFBRSxZQUFZO0lBQ25CLE9BQU8sRUFBRSxjQUFjO0NBQ3hCLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFJSCxNQUFNLE9BQU8sZUFBZTtJQUg1QjtRQU1FOzs7OztXQUtHO1FBQ00sYUFBUSxHQUEyQixRQUFRLENBQUM7UUFDckQ7Ozs7O1dBS0c7UUFDTyxhQUFRLEdBQTZGLFNBQVMsQ0FBQztRQUN6SDs7Ozs7V0FLRztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFRSxZQUFPLEdBQUc7WUFDOUIsU0FBUztZQUNULElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLFNBQVMsRUFBRTtTQUNqQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQTBDYjtJQXhDMkIsVUFBVTtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRWtDLE9BQU8sQ0FBQyxLQUFvQjtRQUM3RCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxlQUFlO1FBQ2IsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixTQUFTO1lBQ1QsSUFBSSxDQUFDLEtBQUs7WUFDVixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUU7U0FDZixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFNBQVM7UUFDUCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUM1RCxDQUFDO0lBQ0QsT0FBTztRQUNMLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQzdELENBQUM7OzRHQXRFVSxlQUFlO2dHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFIM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7OEJBVVUsUUFBUTtzQkFBaEIsS0FBSztnQkFPSSxRQUFRO3NCQUFoQixLQUFLO2dCQU9FLEtBQUs7c0JBQWIsS0FBSztnQkFFZ0IsT0FBTztzQkFBNUIsV0FBVzt1QkFBQyxPQUFPO2dCQU1NLFVBQVU7c0JBQW5DLFlBQVk7dUJBQUMsVUFBVTtnQkFJVyxPQUFPO3NCQUF6QyxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTElOS19DTEFTU0VTID0ge1xuICB1bmRlcmxpbmU6ICdsaW5rLXVuZGVybGluZScsXG4gIHVuZGVybGluZVNtYWxsOiAnbGluay11bmRlcmxpbmUtc21hbGwnLFxuICB1bmRlcmxpbmVEZWZhdWx0OiAnbGluay11bmRlcmxpbmUtZGVmYXVsdCcsXG4gIHVuZGVybGluZUxhcmdlOiAnbGluay11bmRlcmxpbmUtbGFyZ2UnLFxuICBzaW1wbGU6ICdiYy1saW5rJyxcbiAgbGFyZ2U6ICdsaW5rLWxhcmdlJyxcbiAgc21hbGw6ICdsaW5rLXNtYWxsJyxcbiAgZGVmYXVsdDogJ2xpbmstZGVmYXVsdCdcbn07XG5cbi8qKlxuICogQ29tcG9uZW50ZSBsaW5rcyBzZSB1c2EgcGFyYSBpbmRpY2FyIHVuIHbDrW5jdWxvIGEgZGlmZXJlbnRlcyB2aXN0YXMuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjTGlua0RpcmVjdGl2ZVxuICogQGltcGxlbWVudHMge0FmdGVyQ29udGVudEluaXR9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYy1saW5rXSdcbn0pXG5leHBvcnQgY2xhc3MgQmNMaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cblxuICAvKipcbiAgICogRXN0aWxvIGRlIGxpbmsuXG4gICAqXG4gICAqIEB0eXBlIHsoJ3NpbXBsZScgfCAndW5kZXJsaW5lJyl9XG4gICAqIEBtZW1iZXJvZiBCY0xpbmtEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVMaW5rOiAnc2ltcGxlJyB8ICd1bmRlcmxpbmUnID0gJ3NpbXBsZSc7XG4gIC8qKlxuICAgKiBUYW1hw7FvIGRlbCBsaW5rLlxuICAgKlxuICAgKiBAdHlwZSB7KCdkZWZhdWx0JyB8ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ3VuZGVybGluZVNtYWxsJyB8ICd1bmRlcmxpbmVMYXJnZScgfCAndW5kZXJsaW5lRGVmYXVsdCcpfVxuICAgKiBAbWVtYmVyb2YgQmNMaW5rRGlyZWN0aXZlXG4gICAqL1xuICAgQElucHV0KCkgc2l6ZUxpbms6ICdkZWZhdWx0JyB8ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ3VuZGVybGluZVNtYWxsJyB8ICd1bmRlcmxpbmVMYXJnZScgfCAndW5kZXJsaW5lRGVmYXVsdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiBDbGFzZSBkZWwgbGluay5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTGlua0RpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhenplcyA9IFtcbiAgICAnYmMtbGluaycsXG4gICAgdGhpcy5jbGFzcyxcbiAgICB0aGlzLmdldFN0eWxlcygpLFxuICBdLmpvaW4oJyAnKTtcblxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpIG9uRm9jdXNPdXQoKSB7XG4gICAgdGhpcy5jbGF6emVzID0gdGhpcy5jbGF6emVzLnJlcGxhY2UodGhpcy5zZXRBY2Nlc2liaWxpdHkoKSwgJycpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKSBvbkZvY3VzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIHRoaXMuY2xhenplcyArPSAnICcgKyB0aGlzLnNldEFjY2VzaWJpbGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRvZG8gcGFyYSBsYSBhY2Nlc2liaWxpZGFkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xpbmtEaXJlY3RpdmVcbiAgICovXG4gIHNldEFjY2VzaWJpbGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnb3V0bGluZS1lbGVtZW50JztcbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGF6emVzID0gW1xuICAgICAgJ2JjLWxpbmsnLFxuICAgICAgdGhpcy5jbGFzcyxcbiAgICAgIHRoaXMuZ2V0U3R5bGVzKCksXG4gICAgICB0aGlzLmdldFNpemUoKSxcbiAgICBdLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnRlbmVyIGVzdGlsb3MgcG9yIGRlZmVjdG9cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTGlua0RpcmVjdGl2ZVxuICAgKi9cbiAgZ2V0U3R5bGVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIExJTktfQ0xBU1NFU1t0aGlzLnR5cGVMaW5rXSB8fCBMSU5LX0NMQVNTRVMuc2ltcGxlO1xuICB9XG4gIGdldFNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTElOS19DTEFTU0VTW3RoaXMuc2l6ZUxpbmtdIHx8IExJTktfQ0xBU1NFUy5kZWZhdWx0O1xuICB9XG59XG4iXX0=