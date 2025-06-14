import { ContentChildren, Directive, HostBinding, Input } from "@angular/core";
import { BcListRowVariants, BC_LIST_COLUMN } from "./bc-list-row-constants";
import * as i0 from "@angular/core";
/**
 * Aplica el diseño y los estilos relacionados al texto dentro de las columnas del bc-list creados para Bancolombia S.A.
 *
 * @export
 * @class BcListColumnContentDataDirective
 * @implements {AfterContentInit}
 */
export class BcListColumnContentDataDirective {
    constructor(renderer) {
        this.renderer = renderer;
        /**
        * Propiedad que define el estilo por defecto de las columnas
        * @type  `string`
        * @memberof BcListColumnContentDataDirective
        */
        this.defaultClass = `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}-${BcListRowVariants.DATA}`;
        /**
        * Propiedad que permite capturar otras clases ingresadas desde el atributo class
        * @type  `string`
        * @memberof BcListColumnDirective
        */
        this.class = '';
        /**
        * Propiedad que permite configurar el texto dentro de la columna con ellipsis
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.hasTextToShrink = false;
    }
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListColumnContentDataDirective
    */
    get hostClasses() {
        return [
            this.defaultClass,
            this.class
        ].join(' ');
    }
    ngAfterContentInit() {
        this.setTextEllipsis();
    }
    /**
     * Verifica que la columna ha sido configurada para mostrar texto con ellipis. Agrega la clase
     * `bc-list-column-content-data-text-shrinkable` a cada contenedor secundario
     * @memberof BcListColumnContentDataDirective
     */
    setTextEllipsis() {
        if (this.hasTextToShrink) {
            const styleShrinkeable = `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}-${BcListRowVariants.DATA}-${BcListRowVariants.TEXT}-${BcListRowVariants.SHRINKABLE}`;
            this.childContainers.toArray().forEach((container) => {
                this.renderer.addClass(container.nativeElement, styleShrinkeable);
            });
        }
    }
}
BcListColumnContentDataDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListColumnContentDataDirective, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
BcListColumnContentDataDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcListColumnContentDataDirective, selector: "[bc-column-content-data]", inputs: { class: "class", hasTextToShrink: "hasTextToShrink" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "childContainers", predicate: ["data"] }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListColumnContentDataDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-column-content-data]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { class: [{
                type: Input
            }], hasTextToShrink: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], childContainers: [{
                type: ContentChildren,
                args: ['data']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbGlzdC1jb2x1bW4tY29udGVudC1kYXRhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1saXN0LXJvdy9kaXJlY3RpdmVzL2JjLWxpc3QtY29sdW1uLWNvbnRlbnQtZGF0YS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFNUU7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLGdDQUFnQztJQWlDekMsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWhDdkM7Ozs7VUFJRTtRQUNNLGlCQUFZLEdBQVcsR0FBRyxjQUFjLElBQUksaUJBQWlCLENBQUMsT0FBTyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFHOzs7O1VBSUU7UUFDTyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQzVCOzs7O1VBSUU7UUFDTyxvQkFBZSxHQUFZLEtBQUssQ0FBQztJQWVDLENBQUM7SUFkNUM7Ozs7TUFJRTtJQUNGLElBQTBCLFdBQVc7UUFDakMsT0FBTztZQUNILElBQUksQ0FBQyxZQUFZO1lBQ2pCLElBQUksQ0FBQyxLQUFLO1NBQ2IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQU1ELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGVBQWU7UUFDWCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLGNBQWMsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLElBQUksaUJBQWlCLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLElBQUksSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUM3SixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQWtDLEVBQUUsRUFBRTtnQkFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ3JFLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDOzs2SEFuRFEsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0M7MkZBQWhDLGdDQUFnQztrQkFINUMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2lCQUN2QztnR0FhWSxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsZUFBZTtzQkFBdkIsS0FBSztnQkFNb0IsV0FBVztzQkFBcEMsV0FBVzt1QkFBQyxPQUFPO2dCQU9LLGVBQWU7c0JBQXZDLGVBQWU7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJjTGlzdFJvd1ZhcmlhbnRzLCBCQ19MSVNUX0NPTFVNTiB9IGZyb20gXCIuL2JjLWxpc3Qtcm93LWNvbnN0YW50c1wiO1xuXG4vKipcbiAqIEFwbGljYSBlbCBkaXNlw7FvIHkgbG9zIGVzdGlsb3MgcmVsYWNpb25hZG9zIGFsIHRleHRvIGRlbnRybyBkZSBsYXMgY29sdW1uYXMgZGVsIGJjLWxpc3QgY3JlYWRvcyBwYXJhIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNMaXN0Q29sdW1uQ29udGVudERhdGFEaXJlY3RpdmVcbiAqIEBpbXBsZW1lbnRzIHtBZnRlckNvbnRlbnRJbml0fVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tiYy1jb2x1bW4tY29udGVudC1kYXRhXSdcbn0pXG5leHBvcnQgY2xhc3MgQmNMaXN0Q29sdW1uQ29udGVudERhdGFEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICAvKipcbiAgICAqIFByb3BpZWRhZCBxdWUgZGVmaW5lIGVsIGVzdGlsbyBwb3IgZGVmZWN0byBkZSBsYXMgY29sdW1uYXNcbiAgICAqIEB0eXBlICBgc3RyaW5nYFxuICAgICogQG1lbWJlcm9mIEJjTGlzdENvbHVtbkNvbnRlbnREYXRhRGlyZWN0aXZlXG4gICAgKi9cbiAgICBwcml2YXRlIGRlZmF1bHRDbGFzczogc3RyaW5nID0gYCR7QkNfTElTVF9DT0xVTU59LSR7QmNMaXN0Um93VmFyaWFudHMuQ09OVEVOVH0tJHtCY0xpc3RSb3dWYXJpYW50cy5EQVRBfWA7XG4gICAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIHBlcm1pdGUgY2FwdHVyYXIgb3RyYXMgY2xhc2VzIGluZ3Jlc2FkYXMgZGVzZGUgZWwgYXRyaWJ1dG8gY2xhc3NcbiAgICAqIEB0eXBlICBgc3RyaW5nYFxuICAgICogQG1lbWJlcm9mIEJjTGlzdENvbHVtbkRpcmVjdGl2ZVxuICAgICovXG4gICAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuICAgIC8qKlxuICAgICogUHJvcGllZGFkIHF1ZSBwZXJtaXRlIGNvbmZpZ3VyYXIgZWwgdGV4dG8gZGVudHJvIGRlIGxhIGNvbHVtbmEgY29uIGVsbGlwc2lzXG4gICAgKiBAdHlwZSAgYGJvb2xlYW5gXG4gICAgKiBAbWVtYmVyb2YgQmNMaXN0Q29sdW1uRGlyZWN0aXZlXG4gICAgKi9cbiAgICBASW5wdXQoKSBoYXNUZXh0VG9TaHJpbms6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAqIEdldHRlciBxdWUgcGVybWl0ZSBhZ3JlZ2FyIHRvZGFzIGxhcyBjbGFzZXMgYWp1c3RhZGFzIGVuIGxhIGRpcmVjdGl2YVxuICAgICogQHR5cGUgYHN0cmluZ2BcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5Db250ZW50RGF0YURpcmVjdGl2ZVxuICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q2xhc3MsXG4gICAgICAgICAgICB0aGlzLmNsYXNzXG4gICAgICAgIF0uam9pbignICcpO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2RhdGEnKSBjaGlsZENvbnRhaW5lcnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPlxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRUZXh0RWxsaXBzaXMoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcmlmaWNhIHF1ZSBsYSBjb2x1bW5hIGhhIHNpZG8gY29uZmlndXJhZGEgcGFyYSBtb3N0cmFyIHRleHRvIGNvbiBlbGxpcGlzLiBBZ3JlZ2EgbGEgY2xhc2VcbiAgICAgKiBgYmMtbGlzdC1jb2x1bW4tY29udGVudC1kYXRhLXRleHQtc2hyaW5rYWJsZWAgYSBjYWRhIGNvbnRlbmVkb3Igc2VjdW5kYXJpb1xuICAgICAqIEBtZW1iZXJvZiBCY0xpc3RDb2x1bW5Db250ZW50RGF0YURpcmVjdGl2ZVxuICAgICAqL1xuICAgIHNldFRleHRFbGxpcHNpcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzVGV4dFRvU2hyaW5rKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZVNocmlua2VhYmxlID0gYCR7QkNfTElTVF9DT0xVTU59LSR7QmNMaXN0Um93VmFyaWFudHMuQ09OVEVOVH0tJHtCY0xpc3RSb3dWYXJpYW50cy5EQVRBfS0ke0JjTGlzdFJvd1ZhcmlhbnRzLlRFWFR9LSR7QmNMaXN0Um93VmFyaWFudHMuU0hSSU5LQUJMRX1gIFxuICAgICAgICAgICAgdGhpcy5jaGlsZENvbnRhaW5lcnMudG9BcnJheSgpLmZvckVhY2goKGNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBzdHlsZVNocmlua2VhYmxlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=