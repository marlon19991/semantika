import { Component, Input, Attribute, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../bc-config-illustration-module";
/**
 * Ilustraciones del showcase
 * @export
 * @class BcIllustrationComponent
 */
export class BcIllustrationComponent {
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
         * @memberof BcIllustrationComponent
         */
        this.size = '100px';
        /**
         * Accesibilidad, texto alternativo para la ilustracion
         * @type {string}
         * @memberof BcIllustrationComponent
         */
        this.alt = "";
        this.config = config;
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    get hostClasses() {
        return 'bc-illustration';
    }
    /**
     * Inicializa el componente
     * @memberof BcIllustrationComponent
     */
    ngOnInit() {
        this.buildIllustration();
    }
    /**
     * Se dispara cada que se dectecta un cambio
     * @memberof BcIllustrationComponent
     */
    ngOnChanges() {
        this.buildIllustration();
    }
    /**
     * Construye la ilustración
     * @memberof BcIllustrationComponent
     */
    buildIllustration() {
        const path = `${this.config.path}/assets/icons/illustrations/${this.name}`;
        const ILLUSTRATION_URL = `${path}.svg`;
        const ILL = this.renderer.createElement('img');
        this.renderer.setAttribute(ILL, 'src', ILLUSTRATION_URL);
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.size);
        this.renderer.setStyle(this.elementRef.nativeElement, 'alt', this.alt);
        this.renderer.setStyle(ILL, 'width', this.size);
        this.renderer.setAttribute(ILL, 'alt', this.alt);
        let childCount = this.elementRef.nativeElement.childNodes.length;
        while (childCount--) {
            const child = this.elementRef.nativeElement.childNodes[childCount];
            this.elementRef.nativeElement.removeChild(child);
        }
        this.renderer.appendChild(this.elementRef.nativeElement, ILL);
    }
}
BcIllustrationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: i1.BcConfigIllustrationModule }], target: i0.ɵɵFactoryTarget.Component });
BcIllustrationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcIllustrationComponent, selector: "bc-illustration", inputs: { size: "size", alt: "alt", name: "name", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-illustration',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['aria-hidden']
                }] }, { type: i0.Renderer2 }, { type: i1.BcConfigIllustrationModule }]; }, propDecorators: { size: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbGx1c3RyYXRpb24vYmMtaWxsdXN0cmF0aW9uLWNvbXBvbmVudC9iYy1pbGx1c3RyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7QUFHeEc7Ozs7R0FJRztBQUtILE1BQU0sT0FBTyx1QkFBdUI7SUFvQ2xDOzs7T0FHRztJQUNILFlBQ1UsVUFBbUMsRUFDakIsVUFBa0IsRUFDcEMsUUFBbUIsRUFFM0IsTUFBa0M7UUFKMUIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFFbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXhDN0I7Ozs7V0FJRztRQUNNLFNBQUksR0FBRyxPQUFPLENBQUM7UUFFeEI7Ozs7V0FJRztRQUNNLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFnQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBcEJELElBQ0ksV0FBVztRQUNiLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQWtCRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNEOzs7T0FHRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssaUJBQWlCO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLCtCQUErQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0UsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDO1FBQ3ZDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxPQUFPLFVBQVUsRUFBRSxFQUFFO1lBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRSxDQUFDOztvSEFyRlUsdUJBQXVCLDRDQTBDckIsYUFBYTt3R0ExQ2YsdUJBQXVCLHVNQUZ4QiwyQkFBMkI7MkZBRTFCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7MEJBMkNJLFNBQVM7MkJBQUMsYUFBYTs2R0FsQ2pCLElBQUk7c0JBQVosS0FBSztnQkFPRyxHQUFHO3NCQUFYLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQU9HLEtBQUs7c0JBQWIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEF0dHJpYnV0ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0NvbmZpZ0lsbHVzdHJhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2JjLWNvbmZpZy1pbGx1c3RyYXRpb24tbW9kdWxlJztcblxuLyoqXG4gKiBJbHVzdHJhY2lvbmVzIGRlbCBzaG93Y2FzZVxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjSWxsdXN0cmF0aW9uQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWlsbHVzdHJhdGlvbicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIEJjSWxsdXN0cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBjb25maWc6IEJjQ29uZmlnSWxsdXN0cmF0aW9uTW9kdWxlO1xuXG4gIC8qKlxuICAgKiBUYW1hw7FvIGVuIHBpeGVsZXMgZGVsIHJlY3Vyc28uIFBvciBkZWZlY3RvIHNvbiAxMDBweFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbGx1c3RyYXRpb25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNpemUgPSAnMTAwcHgnO1xuXG4gIC8qKlxuICAgKiBBY2Nlc2liaWxpZGFkLCB0ZXh0byBhbHRlcm5hdGl2byBwYXJhIGxhIGlsdXN0cmFjaW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lsbHVzdHJhdGlvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYWx0ID0gXCJcIjtcblxuICAvKipcbiAgICogTm9tYnJlIGRlbCByZWN1cnNvIHZpc3VhbCBhIHVzYXIsIHNlcsOhIHVuYSBpbWFnZW4gc3ZnLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbGx1c3RyYXRpb25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2xhc2UgZGUgbGEgaWx1c3RyYWNpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSWxsdXN0cmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2JjLWlsbHVzdHJhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGVsZW1lbnRSZWYgUmVmZXJlbmNpYSBkZWwgaG9zdFxuICAgKiBAcGFyYW0gYXJpYUhpZGRlbiBTZSB0b21hIGVsIHZhbG9yIGRlbCBwYXJhbWV0cm8gYXJpYS1oaWRkZW4sIHNpIG5vIGV4aXN0ZSBlbCBhdHJpYnV0byBzZSBwb25lIGVuIHRydWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSBhcmlhSGlkZGVuOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXG4gICAgY29uZmlnOiBCY0NvbmZpZ0lsbHVzdHJhdGlvbk1vZHVsZVxuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICBpZiAoIWFyaWFIaWRkZW4pIHtcbiAgICAgIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEluaWNpYWxpemEgZWwgY29tcG9uZW50ZVxuICAgKiBAbWVtYmVyb2YgQmNJbGx1c3RyYXRpb25Db21wb25lbnRcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnVpbGRJbGx1c3RyYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogU2UgZGlzcGFyYSBjYWRhIHF1ZSBzZSBkZWN0ZWN0YSB1biBjYW1iaW9cbiAgICogQG1lbWJlcm9mIEJjSWxsdXN0cmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkSWxsdXN0cmF0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIENvbnN0cnV5ZSBsYSBpbHVzdHJhY2nDs25cbiAgICogQG1lbWJlcm9mIEJjSWxsdXN0cmF0aW9uQ29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIGJ1aWxkSWxsdXN0cmF0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhdGggPSBgJHt0aGlzLmNvbmZpZy5wYXRofS9hc3NldHMvaWNvbnMvaWxsdXN0cmF0aW9ucy8ke3RoaXMubmFtZX1gO1xuICAgIGNvbnN0IElMTFVTVFJBVElPTl9VUkwgPSBgJHtwYXRofS5zdmdgO1xuICAgIGNvbnN0IElMTCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoSUxMLCAnc3JjJywgSUxMVVNUUkFUSU9OX1VSTCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwnd2lkdGgnLCB0aGlzLnNpemUpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsJ2FsdCcsIHRoaXMuYWx0KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKElMTCwgJ3dpZHRoJywgdGhpcy5zaXplKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShJTEwsICdhbHQnLCB0aGlzLmFsdCk7XG4gICAgbGV0IGNoaWxkQ291bnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoY2hpbGRDb3VudC0tKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbY2hpbGRDb3VudF07XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIElMTCk7XG4gIH1cbn1cbiJdfQ==