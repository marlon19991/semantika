import { Directive, HostBinding, Input, } from '@angular/core';
import * as i0 from "@angular/core";
const BUTTON_CLASSES = {
    primary: 'bc-button-primary',
    secondary: 'bc-button-secondary',
    terciary: 'bc-button-terciary',
    tertiary: 'bc-button-tertiary',
    background: 'bc-button-background',
    ghost: 'bc-button-ghost',
    default: 'bc-button-primary',
};
const BUTTON_SIZES = {
    small: 'bc-button-small',
    puffy: 'bc-button-puffy',
    default: 'bc-button',
};
const BUTTON_WIDTH_CLASSES = {
    fill: 'bc-button-fill',
    hug: 'bc-button-hug',
    default: 'bc-button-fill',
};
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonDirective
 */
export class BcButtonDirective {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Parámetro para denotar la clase de botón.
         *
         * @type {string}
         * @memberof BcButtonDirective
         */
        this.class = '';
        this.classes = [
            this.class,
            this.setStyles(),
            this.setSize(),
            this.setWidth(),
        ].join(' ');
    }
    /**
     * Configura los estilos del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setStyles() {
        return BUTTON_CLASSES[this.typeButton] || BUTTON_CLASSES.default;
    }
    /**
     * Configura el tamaño del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setSize() {
        return BUTTON_SIZES[this.sizeButton] || BUTTON_SIZES.default;
    }
    /**
     * Configura el ancho del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setWidth() {
        return BUTTON_WIDTH_CLASSES[this.width] || BUTTON_WIDTH_CLASSES.default;
    }
    ngAfterViewInit() {
        this.classes = [
            this.class,
            this.setStyles(),
            this.setSize(),
            this.setWidth(),
        ].join(' ');
        this.changeDetectorRef.detectChanges();
    }
}
BcButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonDirective, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
BcButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcButtonDirective, selector: "[bc-button]", inputs: { typeButton: "typeButton", sizeButton: "sizeButton", width: "width", class: "class" }, host: { properties: { "class": "this.classes" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-button]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { typeButton: [{
                type: Input
            }], sizeButton: [{
                type: Input
            }], width: [{
                type: Input
            }], class: [{
                type: Input
            }], classes: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1idXR0b24vYmMtYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7O0FBRXZCLE1BQU0sY0FBYyxHQUFHO0lBQ3JCLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxRQUFRLEVBQUUsb0JBQW9CO0lBQzlCLFFBQVEsRUFBRSxvQkFBb0I7SUFDOUIsVUFBVSxFQUFFLHNCQUFzQjtJQUNsQyxLQUFLLEVBQUUsaUJBQWlCO0lBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7Q0FDN0IsQ0FBQztBQUNGLE1BQU0sWUFBWSxHQUFHO0lBQ25CLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixPQUFPLEVBQUUsV0FBVztDQUNyQixDQUFDO0FBQ0YsTUFBTSxvQkFBb0IsR0FBRztJQUMzQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLEdBQUcsRUFBRSxlQUFlO0lBQ3BCLE9BQU8sRUFBRSxnQkFBZ0I7Q0FDMUIsQ0FBQztBQUVGOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWdDeEQ7Ozs7O1dBS0c7UUFDTSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRUUsWUFBTyxHQUFHO1lBQzlCLElBQUksQ0FBQyxLQUFLO1lBQ1YsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRTtTQUNoQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQTdDK0MsQ0FBQztJQStDNUQ7Ozs7O09BS0c7SUFDSCxTQUFTO1FBQ1AsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsT0FBTztRQUNMLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFFBQVE7UUFDTixPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7SUFDMUUsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsSUFBSSxDQUFDLEtBQUs7WUFDVixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFO1NBQ2hCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7OzhHQXRGVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjt3R0FVVSxVQUFVO3NCQUFsQixLQUFLO2dCQWNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBUUcsS0FBSztzQkFBYixLQUFLO2dCQVFHLEtBQUs7c0JBQWIsS0FBSztnQkFFZ0IsT0FBTztzQkFBNUIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgQlVUVE9OX0NMQVNTRVMgPSB7XG4gIHByaW1hcnk6ICdiYy1idXR0b24tcHJpbWFyeScsXG4gIHNlY29uZGFyeTogJ2JjLWJ1dHRvbi1zZWNvbmRhcnknLFxuICB0ZXJjaWFyeTogJ2JjLWJ1dHRvbi10ZXJjaWFyeScsXG4gIHRlcnRpYXJ5OiAnYmMtYnV0dG9uLXRlcnRpYXJ5JyxcbiAgYmFja2dyb3VuZDogJ2JjLWJ1dHRvbi1iYWNrZ3JvdW5kJyxcbiAgZ2hvc3Q6ICdiYy1idXR0b24tZ2hvc3QnLFxuICBkZWZhdWx0OiAnYmMtYnV0dG9uLXByaW1hcnknLFxufTtcbmNvbnN0IEJVVFRPTl9TSVpFUyA9IHtcbiAgc21hbGw6ICdiYy1idXR0b24tc21hbGwnLFxuICBwdWZmeTogJ2JjLWJ1dHRvbi1wdWZmeScsXG4gIGRlZmF1bHQ6ICdiYy1idXR0b24nLFxufTtcbmNvbnN0IEJVVFRPTl9XSURUSF9DTEFTU0VTID0ge1xuICBmaWxsOiAnYmMtYnV0dG9uLWZpbGwnLFxuICBodWc6ICdiYy1idXR0b24taHVnJyxcbiAgZGVmYXVsdDogJ2JjLWJ1dHRvbi1maWxsJyxcbn07XG5cbi8qKlxuICogSW1wb3J0YSBsYSBkaXJlY3RpdmEgZGUgYm90b25lcyBjb24gbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNCdXR0b25EaXJlY3RpdmVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JjLWJ1dHRvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBCY0J1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgZWwgdGlwbyBkZSBib3TDs24uXG4gICAqXG4gICAqIEB0eXBlIHsoJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVyY2lhcnknIHwgJ3RlcnRpYXJ5JyB8ICdiYWNrZ3JvdW5kJyB8ICdnaG9zdCcpfVxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25EaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVCdXR0b246XG4gICAgfCAncHJpbWFyeSdcbiAgICB8ICdzZWNvbmRhcnknXG4gICAgfCAndGVyY2lhcnknXG4gICAgfCAndGVydGlhcnknXG4gICAgfCAnYmFja2dyb3VuZCdcbiAgICB8ICdnaG9zdCc7XG5cbiAgLyoqXG4gICAqIFBhcsOhbWV0cm8gcGFyYSBkZW5vdGFyIGVsIHRhbWHDsW8gZGUgYm90w7NuLlxuICAgKlxuICAgKiBAdHlwZSB7KCdkZWZhdWx0JyB8ICdzbWFsbCcgfCAncHVmZnknKX1cbiAgICogQG1lbWJlcm9mIEJjQnV0dG9uRGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBzaXplQnV0dG9uOiAnZGVmYXVsdCcgfCAnc21hbGwnIHwgJ3B1ZmZ5JztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgbGEgY29uZmlndXJhY2nDs24gZGUgYW5jaG8gZGVsIGJvdMOzbi5cbiAgICpcbiAgICogQHR5cGUgeygnZmlsbCcgfCAnaHVnJyl9XG4gICAqIEBtZW1iZXJvZiBCY0J1dHRvbkRpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgd2lkdGg6ICdmaWxsJyB8ICdodWcnO1xuXG4gIC8qKlxuICAgKiBQYXLDoW1ldHJvIHBhcmEgZGVub3RhciBsYSBjbGFzZSBkZSBib3TDs24uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0J1dHRvbkRpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3NlcyA9IFtcbiAgICB0aGlzLmNsYXNzLFxuICAgIHRoaXMuc2V0U3R5bGVzKCksXG4gICAgdGhpcy5zZXRTaXplKCksXG4gICAgdGhpcy5zZXRXaWR0aCgpLFxuICBdLmpvaW4oJyAnKTtcblxuICAvKipcbiAgICogQ29uZmlndXJhIGxvcyBlc3RpbG9zIGRlbCBib3TDs24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0J1dHRvbkRpcmVjdGl2ZVxuICAgKi9cbiAgc2V0U3R5bGVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEJVVFRPTl9DTEFTU0VTW3RoaXMudHlwZUJ1dHRvbl0gfHwgQlVUVE9OX0NMQVNTRVMuZGVmYXVsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmEgZWwgdGFtYcOxbyBkZWwgYm90w7NuLlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25EaXJlY3RpdmVcbiAgICovXG4gIHNldFNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQlVUVE9OX1NJWkVTW3RoaXMuc2l6ZUJ1dHRvbl0gfHwgQlVUVE9OX1NJWkVTLmRlZmF1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJhIGVsIGFuY2hvIGRlbCBib3TDs24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0J1dHRvbkRpcmVjdGl2ZVxuICAgKi9cbiAgc2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIEJVVFRPTl9XSURUSF9DTEFTU0VTW3RoaXMud2lkdGhdIHx8IEJVVFRPTl9XSURUSF9DTEFTU0VTLmRlZmF1bHQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gW1xuICAgICAgdGhpcy5jbGFzcyxcbiAgICAgIHRoaXMuc2V0U3R5bGVzKCksXG4gICAgICB0aGlzLnNldFNpemUoKSxcbiAgICAgIHRoaXMuc2V0V2lkdGgoKSxcbiAgICBdLmpvaW4oJyAnKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19