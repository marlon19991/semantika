import { Directive, Input, HostBinding, HostListener, } from '@angular/core';
import * as i0 from "@angular/core";
const FAB_TYPES = {
    mini: 'bc-fab-button bc-fab-button-mini',
    primary: ' bc-fab-button bc-fab-button-primary',
    secondary: 'bc-fab-button bc-fab-button-secondary',
};
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcFabButtonDirective
 * @implements {AfterContentInit}
 * @deprecated  Utilizar variante de componente BcIconButtonComponent
 */
export class BcFabButtonDirective {
    constructor() {
        this.class = '';
        this.classes = [this.class, this.setStyle()].join(' ');
    }
    get role() {
        return 'button';
    }
    get tabIndex() {
        return '0';
    }
    onFocusOut() {
        this.classes = this.classes.replace(this.setAccesibility(), '');
    }
    onFocus(event) {
        if (event) {
            if (event.key === 'Tab') {
                this.classes += ' ' + this.setAccesibility();
            }
        }
    }
    /**
     * Indica la accesibilidad del componente.
     *
     * @returns {string}
     * @memberof BcFabButtonDirective
     * @deprecated  Utilizar variante de componente BcIconButtonComponent
     */
    setAccesibility() {
        return 'outline-element';
    }
    ngAfterContentInit() {
        this.setStyle();
        this.classes = [this.class, this.setStyle()].join(' ');
    }
    /**
     * Configura los estilos del botón.
     *
     * @returns
     * @memberof BcFabButtonDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setStyle() {
        let response = FAB_TYPES[this.typeButton];
        if (!response) {
            response = FAB_TYPES.primary;
        }
        return response;
    }
}
BcFabButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFabButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcFabButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcFabButtonDirective, selector: "[bc-fab-button]", inputs: { typeButton: "typeButton", class: "class" }, host: { listeners: { "focusout": "onFocusOut()", "keyup": "onFocus($event)" }, properties: { "attr.role": "this.role", "attr.tabindex": "this.tabIndex", "class": "this.classes" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFabButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-fab-button]',
                }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], typeButton: [{
                type: Input
            }], class: [{
                type: Input
            }], classes: [{
                type: HostBinding,
                args: ['class']
            }], onFocusOut: [{
                type: HostListener,
                args: ['focusout']
            }], onFocus: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZmFiLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtYnV0dG9uL2JjLWZhYi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLElBQUksRUFBRSxrQ0FBa0M7SUFDeEMsT0FBTyxFQUFFLHNDQUFzQztJQUMvQyxTQUFTLEVBQUUsdUNBQXVDO0NBQ25ELENBQUM7QUFDRjs7Ozs7OztHQU9HO0FBSUgsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQW1CVyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRUUsWUFBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0F5Q3pFO0lBMURDLElBQThCLElBQUk7UUFDaEMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQWtDLFFBQVE7UUFDeEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBY3lCLFVBQVU7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVrQyxPQUFPLENBQUMsS0FBb0I7UUFDN0QsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO2dCQUN2QixJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDOUM7U0FDRjtJQUNILENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSCxlQUFlO1FBQ2IsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNILFFBQVE7UUFDTixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUM5QjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2lIQTFEVSxvQkFBb0I7cUdBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzhCQUUrQixJQUFJO3NCQUFqQyxXQUFXO3VCQUFDLFdBQVc7Z0JBR1UsUUFBUTtzQkFBekMsV0FBVzt1QkFBQyxlQUFlO2dCQVVuQixVQUFVO3NCQUFsQixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFFZ0IsT0FBTztzQkFBNUIsV0FBVzt1QkFBQyxPQUFPO2dCQUVNLFVBQVU7c0JBQW5DLFlBQVk7dUJBQUMsVUFBVTtnQkFJVyxPQUFPO3NCQUF6QyxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBGQUJfVFlQRVMgPSB7XG4gIG1pbmk6ICdiYy1mYWItYnV0dG9uIGJjLWZhYi1idXR0b24tbWluaScsXG4gIHByaW1hcnk6ICcgYmMtZmFiLWJ1dHRvbiBiYy1mYWItYnV0dG9uLXByaW1hcnknLFxuICBzZWNvbmRhcnk6ICdiYy1mYWItYnV0dG9uIGJjLWZhYi1idXR0b24tc2Vjb25kYXJ5Jyxcbn07XG4vKipcbiAqIEltcG9ydGEgbGEgZGlyZWN0aXZhIGRlIGJvdG9uZXMgY29uIGxvcyBkaXNlw7FvcyBkZSBCYW5jb2xvbWJpYSBTLkEuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjRmFiQnV0dG9uRGlyZWN0aXZlXG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJDb250ZW50SW5pdH1cbiAqIEBkZXByZWNhdGVkICBVdGlsaXphciB2YXJpYW50ZSBkZSBjb21wb25lbnRlIEJjSWNvbkJ1dHRvbkNvbXBvbmVudFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmMtZmFiLWJ1dHRvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBCY0ZhYkJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIGdldCByb2xlKCkge1xuICAgIHJldHVybiAnYnV0dG9uJztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKSBnZXQgdGFiSW5kZXgoKSB7XG4gICAgcmV0dXJuICcwJztcbiAgfVxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgZWwgdGlwbyBkZSBib3TDs24uXG4gICAqXG4gICAqIEB0eXBlIHsoJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnbWluaScpfVxuICAgKiBAbWVtYmVyb2YgQmNGYWJCdXR0b25EaXJlY3RpdmVcbiAgICogQGRlcHJlY2F0ZWQgIFV0aWxpemFyIHZhcmlhbnRlIGRlIGNvbXBvbmVudGUgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlQnV0dG9uOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdtaW5pJztcblxuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBjbGFzc2VzID0gW3RoaXMuY2xhc3MsIHRoaXMuc2V0U3R5bGUoKV0uam9pbignICcpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0Jykgb25Gb2N1c091dCgpIHtcbiAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLmNsYXNzZXMucmVwbGFjZSh0aGlzLnNldEFjY2VzaWJpbGl0eSgpLCAnJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pIG9uRm9jdXMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyB0aGlzLnNldEFjY2VzaWJpbGl0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5kaWNhIGxhIGFjY2VzaWJpbGlkYWQgZGVsIGNvbXBvbmVudGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0ZhYkJ1dHRvbkRpcmVjdGl2ZVxuICAgKiBAZGVwcmVjYXRlZCAgVXRpbGl6YXIgdmFyaWFudGUgZGUgY29tcG9uZW50ZSBCY0ljb25CdXR0b25Db21wb25lbnRcbiAgICovXG4gIHNldEFjY2VzaWJpbGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnb3V0bGluZS1lbGVtZW50JztcbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIHRoaXMuY2xhc3NlcyA9IFt0aGlzLmNsYXNzLCB0aGlzLnNldFN0eWxlKCldLmpvaW4oJyAnKTtcbiAgfVxuICAvKipcbiAgICogQ29uZmlndXJhIGxvcyBlc3RpbG9zIGRlbCBib3TDs24uXG4gICAqXG4gICAqIEByZXR1cm5zXG4gICAqIEBtZW1iZXJvZiBCY0ZhYkJ1dHRvbkRpcmVjdGl2ZVxuICAgKiBAZGVwcmVjYXRlZCAgVXRpbGl6YXIgY29tcG9uZW50ZSBCY0ljb25CdXR0b25Db21wb25lbnRcbiAgICovXG4gIHNldFN0eWxlKCkge1xuICAgIGxldCByZXNwb25zZSA9IEZBQl9UWVBFU1t0aGlzLnR5cGVCdXR0b25dO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJlc3BvbnNlID0gRkFCX1RZUEVTLnByaW1hcnk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuIl19