import { Component, Input, Attribute, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../bc-config-stroke-module";
/**
 * strokes del showcase
 * @export
 * @class BcStrokeComponent
 */
export class BcStrokeComponent {
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
         * @memberof BcStrokeComponent
         */
        this.size = '100px';
        /**
         * Accesibilidad, texto alternativo para el trazo
         * @type {string}
         * @memberof BcStrokeComponent
         */
        this.alt = "";
        this.config = config;
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    get hostClasses() {
        return 'bc-stroke';
    }
    /**
     * Inicializa el componente
     * @memberof BcStrokeComponent
     */
    ngOnInit() {
        this.buildStroke();
    }
    /**
     * Se dispara cada que se dectecta un cambio
     * @memberof BcStrokeComponent
     */
    ngOnChanges() {
        this.buildStroke();
    }
    /**
     * Construye el stroke
     * @memberof BcStrokeComponent
     */
    buildStroke() {
        const path = `${this.config.path}/assets/icons/strokes/${this.name}`;
        const STROKE_URL = `${path}.svg`;
        const STR = this.renderer.createElement('img');
        this.renderer.setAttribute(STR, 'src', STROKE_URL);
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.size);
        this.renderer.setStyle(this.elementRef.nativeElement, 'alt', this.alt);
        this.renderer.setStyle(STR, 'width', this.size);
        this.renderer.setAttribute(STR, 'alt', this.alt);
        let childCount = this.elementRef.nativeElement.childNodes.length;
        while (childCount--) {
            const child = this.elementRef.nativeElement.childNodes[childCount];
            this.elementRef.nativeElement.removeChild(child);
        }
        this.renderer.appendChild(this.elementRef.nativeElement, STR);
    }
}
BcStrokeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: i1.BcConfigStrokeModule }], target: i0.ɵɵFactoryTarget.Component });
BcStrokeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcStrokeComponent, selector: "bc-stroke", inputs: { size: "size", alt: "alt", name: "name", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-stroke',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['aria-hidden']
                }] }, { type: i0.Renderer2 }, { type: i1.BcConfigStrokeModule }]; }, propDecorators: { size: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc3Ryb2tlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zdHJva2UvYmMtc3Ryb2tlLWNvbXBvbmVudC9iYy1zdHJva2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEc7Ozs7R0FJRztBQUtILE1BQU0sT0FBTyxpQkFBaUI7SUFvQzVCOzs7T0FHRztJQUNILFlBQ1UsVUFBbUMsRUFDakIsVUFBa0IsRUFDcEMsUUFBbUIsRUFFM0IsTUFBNEI7UUFKcEIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFFbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXhDN0I7Ozs7V0FJRztRQUNNLFNBQUksR0FBRyxPQUFPLENBQUM7UUFFeEI7Ozs7V0FJRztRQUNNLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFnQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBcEJELElBQ0ksV0FBVztRQUNiLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFrQkQ7OztPQUdHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssV0FBVztRQUNqQixNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSx5QkFBeUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JFLE1BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxPQUFPLFVBQVUsRUFBRSxFQUFFO1lBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs4R0FyRlUsaUJBQWlCLDRDQTBDZixhQUFhO2tHQTFDZixpQkFBaUIsaU1BRmxCLDJCQUEyQjsyRkFFMUIsaUJBQWlCO2tCQUo3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7MEJBMkNJLFNBQVM7MkJBQUMsYUFBYTt1R0FsQ2pCLElBQUk7c0JBQVosS0FBSztnQkFPRyxHQUFHO3NCQUFYLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQU9HLEtBQUs7c0JBQWIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEF0dHJpYnV0ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0NvbmZpZ1N0cm9rZU1vZHVsZSB9IGZyb20gJy4uL2JjLWNvbmZpZy1zdHJva2UtbW9kdWxlJztcblxuLyoqXG4gKiBzdHJva2VzIGRlbCBzaG93Y2FzZVxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjU3Ryb2tlQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXN0cm9rZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIEJjU3Ryb2tlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBjb25maWc6IEJjQ29uZmlnU3Ryb2tlTW9kdWxlO1xuXG4gIC8qKlxuICAgKiBUYW1hw7FvIGVuIHBpeGVsZXMgZGVsIHJlY3Vyc28uIFBvciBkZWZlY3RvIHNvbiAxMDBweFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTdHJva2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNpemUgPSAnMTAwcHgnO1xuXG4gIC8qKlxuICAgKiBBY2Nlc2liaWxpZGFkLCB0ZXh0byBhbHRlcm5hdGl2byBwYXJhIGVsIHRyYXpvXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1N0cm9rZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYWx0ID0gXCJcIjtcblxuICAvKipcbiAgICogTm9tYnJlIGRlbCByZWN1cnNvIHZpc3VhbCBhIHVzYXIsIHNlcsOhIHVuYSBpbWFnZW4gc3ZnLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTdHJva2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2xhc2UgZGVsIHN0cm9rZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTdHJva2VDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYmMtc3Ryb2tlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZWxlbWVudFJlZiBSZWZlcmVuY2lhIGRlbCBob3N0XG4gICAqIEBwYXJhbSBhcmlhSGlkZGVuIFNlIHRvbWEgZWwgdmFsb3IgZGVsIHBhcmFtZXRybyBhcmlhLWhpZGRlbiwgc2kgbm8gZXhpc3RlIGVsIGF0cmlidXRvIHNlIHBvbmUgZW4gdHJ1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpIGFyaWFIaWRkZW46IHN0cmluZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cbiAgICBjb25maWc6IEJjQ29uZmlnU3Ryb2tlTW9kdWxlXG4gICkge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIGlmICghYXJpYUhpZGRlbikge1xuICAgICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5pY2lhbGl6YSBlbCBjb21wb25lbnRlXG4gICAqIEBtZW1iZXJvZiBCY1N0cm9rZUNvbXBvbmVudFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZFN0cm9rZSgpO1xuICB9XG4gIC8qKlxuICAgKiBTZSBkaXNwYXJhIGNhZGEgcXVlIHNlIGRlY3RlY3RhIHVuIGNhbWJpb1xuICAgKiBAbWVtYmVyb2YgQmNTdHJva2VDb21wb25lbnRcbiAgICovXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuYnVpbGRTdHJva2UoKTtcbiAgfVxuICAvKipcbiAgICogQ29uc3RydXllIGVsIHN0cm9rZVxuICAgKiBAbWVtYmVyb2YgQmNTdHJva2VDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgYnVpbGRTdHJva2UoKTogdm9pZCB7XG4gICAgY29uc3QgcGF0aCA9IGAke3RoaXMuY29uZmlnLnBhdGh9L2Fzc2V0cy9pY29ucy9zdHJva2VzLyR7dGhpcy5uYW1lfWA7XG4gICAgY29uc3QgU1RST0tFX1VSTCA9IGAke3BhdGh9LnN2Z2A7XG4gICAgY29uc3QgU1RSID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShTVFIsICdzcmMnLCBTVFJPS0VfVVJMKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCd3aWR0aCcsIHRoaXMuc2l6ZSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwnYWx0JywgdGhpcy5hbHQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoU1RSLCAnd2lkdGgnLCB0aGlzLnNpemUpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFNUUiwgJ2FsdCcsIHRoaXMuYWx0KTtcbiAgICBsZXQgY2hpbGRDb3VudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIHdoaWxlIChjaGlsZENvdW50LS0pIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1tjaGlsZENvdW50XTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgU1RSKTtcbiAgfVxufVxuXG4iXX0=