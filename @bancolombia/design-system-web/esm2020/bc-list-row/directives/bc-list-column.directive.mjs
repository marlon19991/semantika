import { Directive, Input, HostBinding } from "@angular/core";
import { BC_LIST_COLUMN, BcListRowVariants } from "./bc-list-row-constants";
import * as i0 from "@angular/core";
/**
 * Aplica el diseño y los estilos basicos para el contenedor bc list y sus columnas creados para Bancolombia S.A.
 *
 * @export
 * @class BcListRowDirective
 * @implements {AfterContentInit}
 */
export class BcListColumnDirective {
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        /**
         * Propiedad que define el estilo por defecto de las columnas
         * @type  `string`
         * @memberof BcListColumnDirective
         */
        this.defaultClass = BC_LIST_COLUMN;
        /**
         * Propiedad que define la de verificación
         * @type  `boolean`
         * @memberof BcListColumnDirective
         */
        this.actionColumn = false;
        /**
        * Propiedad que define la columna de menu o accionables
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.menuColumn = false;
        /**
        * Propiedad que define si la columna de datos tiene marca de autorizador internacional
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.hasBrand = false;
        /**
        * Propiedad que define si la columna es de ancho variable
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.hasAutoWidth = false;
        /**
        * Propiedad que define si la columna se mostrará en responsive tablet y/o mobile
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.displayPrimary = false;
        /**
        * Propiedad que define si el componente bc-tag se mostrará en responsive mobile
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.displayMobileBottomLeftContent = false;
        /**
        * Propiedad que permite capturar otras clases ingresadas desde el atributo class
        * @type  `string`
        * @memberof BcListColumnDirective
        */
        this.class = '';
    }
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListColumnDirective
    */
    get hostClasses() {
        return [
            this.defaultClass,
            this.setActionColumn(),
            this.setMenuColumn(),
            this.setContentColumn(),
            this.setBrandContent(),
            this.setMarginBetweenCols(),
            this.setAlignContent(),
            this.setAutoWidth(),
            this.setMobileBottomLeftContent(),
            this.class
        ].join(' ');
    }
    ngAfterContentInit() {
        this.setColumnsToResponsive();
    }
    /**
     * Si la alineación es correcta, devuelve la clase de alineación correcta. Si la alineación es
     * izquierda, devuelve la clase de alineación izquierda. De lo contrario, devuelve una cadena
     * vacía.
     * @returns El nombre de clase para la alineación de la lista.
     * @memberof BcListColumnDirective
     */
    setAlignContent() {
        if (this.alignment === 'right') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.ALIGN_RIGHT}`;
        }
        if (this.alignment === 'left') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.ALIGN_LEFT}`;
        }
        return '';
    }
    /**
     *Valida si una columna es de verificación y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setActionColumn() {
        return this.actionColumn === true ? `${BC_LIST_COLUMN}-${BcListRowVariants.ACTION}` : '';
    }
    /**
     * Valida si una columna es accionable y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setMenuColumn() {
        return this.menuColumn === true ? `${BC_LIST_COLUMN}-${BcListRowVariants.MENU}` : '';
    }
    /**
     * Valida si una columna es de contenido y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setContentColumn() {
        return this.menuColumn === false && this.actionColumn === false ? `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}` : '';
    }
    /**
     * Verificia la opción que tenga asignada la propiedad marginBetweenCols para aplicar el estilo dependiendo de esa propiedad
     * @memberof BcListColumnDirective
     * @returns el nombre de la clase o una cadena vacia.
     */
    setMarginBetweenCols() {
        if (this.marginBetweenCols === 'two') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.X_MARGIN_TWO}`;
        }
        if (this.marginBetweenCols === 'three') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.X_MARGIN_THREE}`;
        }
        if (this.marginBetweenCols === 'four') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.X_MARGIN_FOUR}`;
        }
        return '';
    }
    /**
     * Ajusta la opción de que una columna sea muestre de forma adecuada la marca de la tarjeta de crédito.
     * @returns El nombre de clase para el contenido del elemento de lista.
     * @memberof BcListColumnDirective
     */
    setBrandContent() {
        return this.hasBrand ? `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}-${BcListRowVariants.ICON}` : '';
    }
    /**
     * Ajusta la opción para que una columna sea con ancho variable.
     * @returns El nombre de clase para la columna.
     * @memberof BcListColumnDirective
     */
    setAutoWidth() {
        return this.hasAutoWidth ? `${BC_LIST_COLUMN}-${BcListRowVariants.AUTO_WIDTH}` : '';
    }
    /**
     * aplica el responsive a las columnas.
     * @memberof BcListColumnDirective
     */
    setColumnsToResponsive() {
        const element = this.element.nativeElement;
        const primaryClass = `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}-${BcListRowVariants.PRIMARY}`;
        this.displayPrimary && this.renderer.addClass(element, primaryClass);
    }
    /**
     * Ajusta la opción para que una columna pueda o no mostrar el contenido en la parte inferior izquierda en mobile.
     * @returns El nombre de clase para que se visualice el contenido en la parte inferior izquierda en resolución mobile.
     * @memberof BcListColumnDirective
     */
    setMobileBottomLeftContent() {
        return this.displayMobileBottomLeftContent ? `${BC_LIST_COLUMN}-${BcListRowVariants.LEFT_MOBILE_POSITION}` : '';
    }
}
BcListColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListColumnDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BcListColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcListColumnDirective, selector: "[bc-column-content]", inputs: { alignment: "alignment", actionColumn: "actionColumn", menuColumn: "menuColumn", marginBetweenCols: "marginBetweenCols", hasBrand: "hasBrand", hasAutoWidth: "hasAutoWidth", displayPrimary: "displayPrimary", displayMobileBottomLeftContent: "displayMobileBottomLeftContent", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-column-content]',
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { alignment: [{
                type: Input
            }], actionColumn: [{
                type: Input
            }], menuColumn: [{
                type: Input
            }], marginBetweenCols: [{
                type: Input
            }], hasBrand: [{
                type: Input
            }], hasAutoWidth: [{
                type: Input
            }], displayPrimary: [{
                type: Input
            }], displayMobileBottomLeftContent: [{
                type: Input
            }], class: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbGlzdC1jb2x1bW4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWxpc3Qtcm93L2RpcmVjdGl2ZXMvYmMtbGlzdC1jb2x1bW4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBMkMsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUNILGNBQWMsRUFBaUMsaUJBQWlCLEVBQ25FLE1BQU0seUJBQXlCLENBQUM7O0FBRWpDOzs7Ozs7R0FNRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFrRjlCLFlBQW9CLFFBQW1CLEVBQVUsT0FBZ0M7UUFBN0QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBaEZsRjs7OztXQUlHO1FBQ00saUJBQVksR0FBVyxjQUFjLENBQUM7UUFPL0M7Ozs7V0FJRztRQUNPLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQ3ZDOzs7O1VBSUU7UUFDTyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBT3JDOzs7O1VBSUU7UUFDTyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ25DOzs7O1VBSUU7UUFDTyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUN2Qzs7OztVQUlFO1FBQ08sbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDekM7Ozs7VUFJRTtRQUNPLG1DQUE4QixHQUFZLEtBQUssQ0FBQztRQUN6RDs7OztVQUlFO1FBQ08sVUFBSyxHQUFXLEVBQUUsQ0FBQztJQXFCeUQsQ0FBQztJQXBCdEY7Ozs7TUFJRTtJQUNGLElBQTBCLFdBQVc7UUFDakMsT0FBTztZQUNILElBQUksQ0FBQyxZQUFZO1lBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFD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Q0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMEJBQTBCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsSUFBSSxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEgsQ0FBQzs7a0hBeExRLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtpQkFDbEM7eUhBY1ksU0FBUztzQkFBakIsS0FBSztnQkFNRyxZQUFZO3NCQUFwQixLQUFLO2dCQU1HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTUcsaUJBQWlCO3NCQUF6QixLQUFLO2dCQU1HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBTUcsWUFBWTtzQkFBcEIsS0FBSztnQkFNRyxjQUFjO3NCQUF0QixLQUFLO2dCQU1HLDhCQUE4QjtzQkFBdEMsS0FBSztnQkFNRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTW9CLFdBQVc7c0JBQXBDLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBBZnRlckNvbnRlbnRJbml0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBCQ19MSVNUX0NPTFVNTiwgQWxpZ25tZW50LCBYTWFyZ2luQmV0d2VlbkNvbHMsIEJjTGlzdFJvd1ZhcmlhbnRzXG59IGZyb20gXCIuL2JjLWxpc3Qtcm93LWNvbnN0YW50c1wiO1xuXG4vKipcbiAqIEFwbGljYSBlbCBkaXNlw7FvIHkgbG9zIGVzdGlsb3MgYmFzaWNvcyBwYXJhIGVsIGNvbnRlbmVkb3IgYmMgbGlzdCB5IHN1cyBjb2x1bW5hcyBjcmVhZG9zIHBhcmEgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0xpc3RSb3dEaXJlY3RpdmVcbiAqIEBpbXBsZW1lbnRzIHtBZnRlckNvbnRlbnRJbml0fVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tiYy1jb2x1bW4tY29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBCY0xpc3RDb2x1bW5EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIGRlZmluZSBlbCBlc3RpbG8gcG9yIGRlZmVjdG8gZGUgbGFzIGNvbHVtbmFzXG4gICAgKiBAdHlwZSAgYHN0cmluZ2BcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAqL1xuICAgIHByaXZhdGUgZGVmYXVsdENsYXNzOiBzdHJpbmcgPSBCQ19MSVNUX0NPTFVNTjtcbiAgICAvKipcbiAgICAqIFByb3BpZWRhZCBxdWUgZGVmaW5lIGxhIGFsaW5lYWNpw7NuIGRlIGxhcyBjb2x1bW5hc1xuICAgICogQHR5cGUgIHtBbGlnbm1lbnR9XG4gICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29sdW1uRGlyZWN0aXZlXG4gICAgKi9cbiAgICBASW5wdXQoKSBhbGlnbm1lbnQ6IEFsaWdubWVudDtcbiAgIC8qKlxuICAgICogUHJvcGllZGFkIHF1ZSBkZWZpbmUgbGEgZGUgdmVyaWZpY2FjacOzblxuICAgICogQHR5cGUgIGBib29sZWFuYFxuICAgICogQG1lbWJlcm9mIEJjTGlzdENvbHVtbkRpcmVjdGl2ZVxuICAgICovXG4gICAgQElucHV0KCkgYWN0aW9uQ29sdW1uOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIGRlZmluZSBsYSBjb2x1bW5hIGRlIG1lbnUgbyBhY2Npb25hYmxlc1xuICAgICogQHR5cGUgIGBib29sZWFuYFxuICAgICogQG1lbWJlcm9mIEJjTGlzdENvbHVtbkRpcmVjdGl2ZVxuICAgICovXG4gICAgQElucHV0KCkgbWVudUNvbHVtbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICogUHJvcGllZGFkIHF1ZSBkZWZpbmUgZWwgYW5jaG8gcGFyYW3DqXRyaWNvIGVudHJlIGNvbHVtbmFzXG4gICAgKiBAdHlwZSAge1hNYXJnaW5CZXR3ZWVuQ29sc31cbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAqL1xuICAgIEBJbnB1dCgpIG1hcmdpbkJldHdlZW5Db2xzOiBYTWFyZ2luQmV0d2VlbkNvbHM7XG4gICAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIGRlZmluZSBzaSBsYSBjb2x1bW5hIGRlIGRhdG9zIHRpZW5lIG1hcmNhIGRlIGF1dG9yaXphZG9yIGludGVybmFjaW9uYWxcbiAgICAqIEB0eXBlICBgYm9vbGVhbmBcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAqL1xuICAgIEBJbnB1dCgpIGhhc0JyYW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIGRlZmluZSBzaSBsYSBjb2x1bW5hIGVzIGRlIGFuY2hvIHZhcmlhYmxlXG4gICAgKiBAdHlwZSAgYGJvb2xlYW5gXG4gICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29sdW1uRGlyZWN0aXZlXG4gICAgKi9cbiAgICBASW5wdXQoKSBoYXNBdXRvV2lkdGg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAqIFByb3BpZWRhZCBxdWUgZGVmaW5lIHNpIGxhIGNvbHVtbmEgc2UgbW9zdHJhcsOhIGVuIHJlc3BvbnNpdmUgdGFibGV0IHkvbyBtb2JpbGVcbiAgICAqIEB0eXBlICBgYm9vbGVhbmBcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAqL1xuICAgIEBJbnB1dCgpIGRpc3BsYXlQcmltYXJ5OiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIGRlZmluZSBzaSBlbCBjb21wb25lbnRlIGJjLXRhZyBzZSBtb3N0cmFyw6EgZW4gcmVzcG9uc2l2ZSBtb2JpbGVcbiAgICAqIEB0eXBlICBgYm9vbGVhbmBcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAqL1xuICAgIEBJbnB1dCgpIGRpc3BsYXlNb2JpbGVCb3R0b21MZWZ0Q29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICogUHJvcGllZGFkIHF1ZSBwZXJtaXRlIGNhcHR1cmFyIG90cmFzIGNsYXNlcyBpbmdyZXNhZGFzIGRlc2RlIGVsIGF0cmlidXRvIGNsYXNzXG4gICAgKiBAdHlwZSAgYHN0cmluZ2BcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAqL1xuICAgIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcbiAgICAvKipcbiAgICAqIEdldHRlciBxdWUgcGVybWl0ZSBhZ3JlZ2FyIHRvZGFzIGxhcyBjbGFzZXMgYWp1c3RhZGFzIGVuIGxhIGRpcmVjdGl2YVxuICAgICogQHR5cGUgYHN0cmluZ2BcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENsYXNzLFxuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25Db2x1bW4oKSxcbiAgICAgICAgICAgIHRoaXMuc2V0TWVudUNvbHVtbigpLFxuICAgICAgICAgICAgdGhpcy5zZXRDb250ZW50Q29sdW1uKCksXG4gICAgICAgICAgICB0aGlzLnNldEJyYW5kQ29udGVudCgpLFxuICAgICAgICAgICAgdGhpcy5zZXRNYXJnaW5CZXR3ZWVuQ29scygpLFxuICAgICAgICAgICAgdGhpcy5zZXRBbGlnbkNvbnRlbnQoKSxcbiAgICAgICAgICAgIHRoaXMuc2V0QXV0b1dpZHRoKCksXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZUJvdHRvbUxlZnRDb250ZW50KCksXG4gICAgICAgICAgICB0aGlzLmNsYXNzXG4gICAgICAgIF0uam9pbignICcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PikgeyB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0Q29sdW1uc1RvUmVzcG9uc2l2ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpIGxhIGFsaW5lYWNpw7NuIGVzIGNvcnJlY3RhLCBkZXZ1ZWx2ZSBsYSBjbGFzZSBkZSBhbGluZWFjacOzbiBjb3JyZWN0YS4gU2kgbGEgYWxpbmVhY2nDs24gZXNcbiAgICAgKiBpenF1aWVyZGEsIGRldnVlbHZlIGxhIGNsYXNlIGRlIGFsaW5lYWNpw7NuIGl6cXVpZXJkYS4gRGUgbG8gY29udHJhcmlvLCBkZXZ1ZWx2ZSB1bmEgY2FkZW5hXG4gICAgICogdmFjw61hLlxuICAgICAqIEByZXR1cm5zIEVsIG5vbWJyZSBkZSBjbGFzZSBwYXJhIGxhIGFsaW5lYWNpw7NuIGRlIGxhIGxpc3RhLlxuICAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAgKi9cbiAgICBzZXRBbGlnbkNvbnRlbnQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuYWxpZ25tZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7QkNfTElTVF9DT0xVTU59LSR7QmNMaXN0Um93VmFyaWFudHMuQUxJR05fUklHSFR9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hbGlnbm1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGAke0JDX0xJU1RfQ09MVU1OfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLkFMSUdOX0xFRlR9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpWYWxpZGEgc2kgdW5hIGNvbHVtbmEgZXMgZGUgdmVyaWZpY2FjacOzbiB5IGFwbGljYSBsYSBjbGFzZSBjb3JyZXNwb25kaWVudGUuXG4gICAgICogQHJldHVybnMgZWwgbm9tYnJlIGRlIGxhIGNsYXNlIG8gdW5hIGNhZGVuYSB2YWNpYS5cbiAgICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29sdW1uRGlyZWN0aXZlXG4gICAgICovXG4gICAgc2V0QWN0aW9uQ29sdW1uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbkNvbHVtbiA9PT0gdHJ1ZSA/IGAke0JDX0xJU1RfQ09MVU1OfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLkFDVElPTn1gIDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhIHNpIHVuYSBjb2x1bW5hIGVzIGFjY2lvbmFibGUgeSBhcGxpY2EgbGEgY2xhc2UgY29ycmVzcG9uZGllbnRlLlxuICAgICAqIEByZXR1cm5zIGVsIG5vbWJyZSBkZSBsYSBjbGFzZSBvIHVuYSBjYWRlbmEgdmFjaWEuXG4gICAgICogQG1lbWJlcm9mIEJjTGlzdENvbHVtbkRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHNldE1lbnVDb2x1bW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudUNvbHVtbiA9PT0gdHJ1ZSA/IGAke0JDX0xJU1RfQ09MVU1OfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLk1FTlV9YCA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYSBzaSB1bmEgY29sdW1uYSBlcyBkZSBjb250ZW5pZG8geSBhcGxpY2EgbGEgY2xhc2UgY29ycmVzcG9uZGllbnRlLlxuICAgICAqIEByZXR1cm5zIGVsIG5vbWJyZSBkZSBsYSBjbGFzZSBvIHVuYSBjYWRlbmEgdmFjaWEuXG4gICAgICogQG1lbWJlcm9mIEJjTGlzdENvbHVtbkRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHNldENvbnRlbnRDb2x1bW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudUNvbHVtbiA9PT0gZmFsc2UgJiYgdGhpcy5hY3Rpb25Db2x1bW4gPT09IGZhbHNlID8gYCR7QkNfTElTVF9DT0xVTU59LSR7QmNMaXN0Um93VmFyaWFudHMuQ09OVEVOVH1gIDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVyaWZpY2lhIGxhIG9wY2nDs24gcXVlIHRlbmdhIGFzaWduYWRhIGxhIHByb3BpZWRhZCBtYXJnaW5CZXR3ZWVuQ29scyBwYXJhIGFwbGljYXIgZWwgZXN0aWxvIGRlcGVuZGllbmRvIGRlIGVzYSBwcm9waWVkYWRcbiAgICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29sdW1uRGlyZWN0aXZlXG4gICAgICogQHJldHVybnMgZWwgbm9tYnJlIGRlIGxhIGNsYXNlIG8gdW5hIGNhZGVuYSB2YWNpYS5cbiAgICAgKi9cbiAgICBzZXRNYXJnaW5CZXR3ZWVuQ29scygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5tYXJnaW5CZXR3ZWVuQ29scyA9PT0gJ3R3bycpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtCQ19MSVNUX0NPTFVNTn0tJHtCY0xpc3RSb3dWYXJpYW50cy5YX01BUkdJTl9UV099YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXJnaW5CZXR3ZWVuQ29scyA9PT0gJ3RocmVlJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke0JDX0xJU1RfQ09MVU1OfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLlhfTUFSR0lOX1RIUkVFfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWFyZ2luQmV0d2VlbkNvbHMgPT09ICdmb3VyJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke0JDX0xJU1RfQ09MVU1OfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLlhfTUFSR0lOX0ZPVVJ9YFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBanVzdGEgbGEgb3BjacOzbiBkZSBxdWUgdW5hIGNvbHVtbmEgc2VhIG11ZXN0cmUgZGUgZm9ybWEgYWRlY3VhZGEgbGEgbWFyY2EgZGUgbGEgdGFyamV0YSBkZSBjcsOpZGl0by5cbiAgICAgKiBAcmV0dXJucyBFbCBub21icmUgZGUgY2xhc2UgcGFyYSBlbCBjb250ZW5pZG8gZGVsIGVsZW1lbnRvIGRlIGxpc3RhLlxuICAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5EaXJlY3RpdmVcbiAgICAgKi9cbiAgICBzZXRCcmFuZENvbnRlbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQnJhbmQgPyBgJHtCQ19MSVNUX0NPTFVNTn0tJHtCY0xpc3RSb3dWYXJpYW50cy5DT05URU5UfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLklDT059YCA6ICcnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBanVzdGEgbGEgb3BjacOzbiBwYXJhIHF1ZSB1bmEgY29sdW1uYSBzZWEgY29uIGFuY2hvIHZhcmlhYmxlLlxuICAgICAqIEByZXR1cm5zIEVsIG5vbWJyZSBkZSBjbGFzZSBwYXJhIGxhIGNvbHVtbmEuXG4gICAgICogQG1lbWJlcm9mIEJjTGlzdENvbHVtbkRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHNldEF1dG9XaWR0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdXRvV2lkdGggPyBgJHtCQ19MSVNUX0NPTFVNTn0tJHtCY0xpc3RSb3dWYXJpYW50cy5BVVRPX1dJRFRIfWAgOiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBhcGxpY2EgZWwgcmVzcG9uc2l2ZSBhIGxhcyBjb2x1bW5hcy5cbiAgICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29sdW1uRGlyZWN0aXZlXG4gICAgICovXG4gICAgc2V0Q29sdW1uc1RvUmVzcG9uc2l2ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBwcmltYXJ5Q2xhc3MgPSBgJHtCQ19MSVNUX0NPTFVNTn0tJHtCY0xpc3RSb3dWYXJpYW50cy5DT05URU5UfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLlBSSU1BUll9YFxuICAgICAgICB0aGlzLmRpc3BsYXlQcmltYXJ5ICYmIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgcHJpbWFyeUNsYXNzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBanVzdGEgbGEgb3BjacOzbiBwYXJhIHF1ZSB1bmEgY29sdW1uYSBwdWVkYSBvIG5vIG1vc3RyYXIgZWwgY29udGVuaWRvIGVuIGxhIHBhcnRlIGluZmVyaW9yIGl6cXVpZXJkYSBlbiBtb2JpbGUuXG4gICAgICogQHJldHVybnMgRWwgbm9tYnJlIGRlIGNsYXNlIHBhcmEgcXVlIHNlIHZpc3VhbGljZSBlbCBjb250ZW5pZG8gZW4gbGEgcGFydGUgaW5mZXJpb3IgaXpxdWllcmRhIGVuIHJlc29sdWNpw7NuIG1vYmlsZS5cbiAgICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29sdW1uRGlyZWN0aXZlXG4gICAgICovXG4gICAgc2V0TW9iaWxlQm90dG9tTGVmdENvbnRlbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheU1vYmlsZUJvdHRvbUxlZnRDb250ZW50ID8gYCR7QkNfTElTVF9DT0xVTU59LSR7QmNMaXN0Um93VmFyaWFudHMuTEVGVF9NT0JJTEVfUE9TSVRJT059YCA6ICcnO1xuICAgIH1cbn1cbiJdfQ==