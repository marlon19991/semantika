import { Component, Input, Attribute, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../bc-config-pictogram-module";
/**
 * pictograms del showcase
 * @export
 * @class BcPictogramaComponent
 */
export class BcPictogramComponent {
    /**
     * @param elementRef Referencia del host
     * @param ariaHidden Se toma el valor del parametro aria-hidden, si no existe el atributo se pone en true
     */
    constructor(elementRef, ariaHidden, renderer, config) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * Tamaño en pixeles del recurso. Por defecto son 100px
         * @type {string}
         * @memberof BcPictogramaComponent
         */
        this.size = '100px';
        /**
         * Accesibilidad, texto alternativo para el pictograma
         * @type {string}
         * @memberof BcPictogramaComponent
         */
        this.alt = "";
        this.config = config;
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    get hostClasses() {
        return 'bc-pictogram';
    }
    /**
     * Inicializa el componente
     * @memberof BcPictogramaComponent
     */
    ngOnInit() {
        this.buildPictogram();
    }
    /**
     * Se dispara cada que se dectecta un cambio
     * @memberof BcPictogramaComponent
     */
    ngOnChanges() {
        this.buildPictogram();
    }
    /**
     * Construye el pictograma
     * @memberof BcPictogramaComponent
     */
    buildPictogram() {
        const path = `${this.config.path}/assets/icons/pictograms/${this.name}`;
        const PICTOGRAM_URL = `${path}.svg`;
        const PIC = this.renderer.createElement('img');
        this.renderer.setAttribute(PIC, 'src', PICTOGRAM_URL);
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.size);
        this.renderer.setStyle(this.elementRef.nativeElement, 'alt', this.alt);
        this.renderer.setStyle(PIC, 'width', this.size);
        this.renderer.setAttribute(PIC, 'alt', this.alt);
        let childCount = this.elementRef.nativeElement.childNodes.length;
        while (childCount--) {
            const child = this.elementRef.nativeElement.childNodes[childCount];
            this.elementRef.nativeElement.removeChild(child);
        }
        this.renderer.appendChild(this.elementRef.nativeElement, PIC);
    }
}
BcPictogramComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: i1.BcConfigPictogramModule }], target: i0.ɵɵFactoryTarget.Component });
BcPictogramComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPictogramComponent, selector: "bc-pictogram", inputs: { size: "size", alt: "alt", name: "name", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-pictogram',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['aria-hidden']
                }] }, { type: i0.Renderer2 }, { type: i1.BcConfigPictogramModule }]; }, propDecorators: { size: [{
                type: Input
            }], alt: [{
                type: Input
            }], name: [{
                type: Input
            }], class: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGljdG9ncmFtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1waWN0b2dyYW0vYmMtcGljdG9ncmFtLWNvbXBvbmVudC9iYy1waWN0b2dyYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEc7Ozs7R0FJRztBQUtILE1BQU0sT0FBTyxvQkFBb0I7SUFvQy9COzs7T0FHRztJQUNILFlBQ1UsVUFBbUMsRUFDakIsVUFBa0IsRUFDcEMsUUFBbUIsRUFFM0IsTUFBK0I7UUFKdkIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFFbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXhDN0I7Ozs7V0FJRztRQUNNLFNBQUksR0FBRyxPQUFPLENBQUM7UUFFeEI7Ozs7V0FJRztRQUNNLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFnQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBcEJELElBQ0ksV0FBVztRQUNiLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFrQkQ7OztPQUdHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssY0FBYztRQUNwQixNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSw0QkFBNEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hFLE1BQU0sYUFBYSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUM7UUFDcEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxPQUFPLFVBQVUsRUFBRSxFQUFFO1lBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRSxDQUFDOztpSEFyRlUsb0JBQW9CLDRDQTBDbEIsYUFBYTtxR0ExQ2Ysb0JBQW9CLG9NQUZyQiwyQkFBMkI7MkZBRTFCLG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OzBCQTJDSSxTQUFTOzJCQUFDLGFBQWE7MEdBbENqQixJQUFJO3NCQUFaLEtBQUs7Z0JBT0csR0FBRztzQkFBWCxLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBdHRyaWJ1dGUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNDb25maWdQaWN0b2dyYW1Nb2R1bGUgfSBmcm9tICcuLi9iYy1jb25maWctcGljdG9ncmFtLW1vZHVsZSc7XG5cbi8qKlxuICogcGljdG9ncmFtcyBkZWwgc2hvd2Nhc2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1BpY3RvZ3JhbWFDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtcGljdG9ncmFtJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmNQaWN0b2dyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGNvbmZpZzogQmNDb25maWdQaWN0b2dyYW1Nb2R1bGU7XG5cbiAgLyoqXG4gICAqIFRhbWHDsW8gZW4gcGl4ZWxlcyBkZWwgcmVjdXJzby4gUG9yIGRlZmVjdG8gc29uIDEwMHB4XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1BpY3RvZ3JhbWFDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNpemUgPSAnMTAwcHgnO1xuXG4gIC8qKlxuICAgKiBBY2Nlc2liaWxpZGFkLCB0ZXh0byBhbHRlcm5hdGl2byBwYXJhIGVsIHBpY3RvZ3JhbWFcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjUGljdG9ncmFtYUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYWx0ID0gXCJcIjtcblxuICAvKipcbiAgICogTm9tYnJlIGRlbCByZWN1cnNvIHZpc3VhbCBhIHVzYXIsIHNlcsOhIHVuYSBpbWFnZW4gc3ZnLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNQaWN0b2dyYW1hQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENsYXNlIGRlbCBwaWN0cm9ncmFtYVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNQaWN0b2dyYW1hQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2JjLXBpY3RvZ3JhbSc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGVsZW1lbnRSZWYgUmVmZXJlbmNpYSBkZWwgaG9zdFxuICAgKiBAcGFyYW0gYXJpYUhpZGRlbiBTZSB0b21hIGVsIHZhbG9yIGRlbCBwYXJhbWV0cm8gYXJpYS1oaWRkZW4sIHNpIG5vIGV4aXN0ZSBlbCBhdHJpYnV0byBzZSBwb25lIGVuIHRydWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSBhcmlhSGlkZGVuOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXG4gICAgY29uZmlnOiBCY0NvbmZpZ1BpY3RvZ3JhbU1vZHVsZVxuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICBpZiAoIWFyaWFIaWRkZW4pIHtcbiAgICAgIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEluaWNpYWxpemEgZWwgY29tcG9uZW50ZVxuICAgKiBAbWVtYmVyb2YgQmNQaWN0b2dyYW1hQ29tcG9uZW50XG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkUGljdG9ncmFtKCk7XG4gIH1cbiAgLyoqXG4gICAqIFNlIGRpc3BhcmEgY2FkYSBxdWUgc2UgZGVjdGVjdGEgdW4gY2FtYmlvXG4gICAqIEBtZW1iZXJvZiBCY1BpY3RvZ3JhbWFDb21wb25lbnRcbiAgICovXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuYnVpbGRQaWN0b2dyYW0oKTtcbiAgfVxuICAvKipcbiAgICogQ29uc3RydXllIGVsIHBpY3RvZ3JhbWFcbiAgICogQG1lbWJlcm9mIEJjUGljdG9ncmFtYUNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZFBpY3RvZ3JhbSgpOiB2b2lkIHtcbiAgICBjb25zdCBwYXRoID0gYCR7dGhpcy5jb25maWcucGF0aH0vYXNzZXRzL2ljb25zL3BpY3RvZ3JhbXMvJHt0aGlzLm5hbWV9YDtcbiAgICBjb25zdCBQSUNUT0dSQU1fVVJMID0gYCR7cGF0aH0uc3ZnYDtcbiAgICBjb25zdCBQSUMgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFBJQywgJ3NyYycsIFBJQ1RPR1JBTV9VUkwpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsJ3dpZHRoJywgdGhpcy5zaXplKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCdhbHQnLCB0aGlzLmFsdCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShQSUMsICd3aWR0aCcsIHRoaXMuc2l6ZSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoUElDLCAnYWx0JywgdGhpcy5hbHQpO1xuICAgIGxldCBjaGlsZENvdW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgd2hpbGUgKGNoaWxkQ291bnQtLSkge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzW2NoaWxkQ291bnRdO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBQSUMpO1xuICB9XG59XG4iXX0=