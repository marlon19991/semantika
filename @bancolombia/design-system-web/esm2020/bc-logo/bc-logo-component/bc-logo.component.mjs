import { Component, Input, Attribute, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../bc-config-logo-module";
/**
 * logos del showcase
 * @export
 * @class BcLogoComponent
 */
export class BcLogoComponent {
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
         * @memberof BcLogoComponent
         */
        this.size = '100px';
        /**
         * Accesibilidad, texto alternativo para el logo
         * @type {string}
         * @memberof BcLogoComponent
         */
        this.alt = "";
        this.config = config;
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    get hostClasses() {
        return 'bc-logo';
    }
    /**
     * Inicializa el componente
     * @memberof BcLogoComponent
     */
    ngOnInit() {
        this.buildLogo();
    }
    /**
     * Se dispara cada que se dectecta un cambio
     * @memberof BcLogoComponent
     */
    ngOnChanges() {
        this.buildLogo();
    }
    /**
     * Construye el logo
     * @memberof BcLogoComponent
     */
    buildLogo() {
        const path = `${this.config.path}/assets/icons/logos/${this.name}`;
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
BcLogoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: i1.BcConfigLogoModule }], target: i0.ɵɵFactoryTarget.Component });
BcLogoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcLogoComponent, selector: "bc-logo", inputs: { size: "size", alt: "alt", name: "name", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-logo',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['aria-hidden']
                }] }, { type: i0.Renderer2 }, { type: i1.BcConfigLogoModule }]; }, propDecorators: { size: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtbG9nby9iYy1sb2dvLWNvbXBvbmVudC9iYy1sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWMsV0FBVyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7O0FBR3hHOzs7O0dBSUc7QUFLSCxNQUFNLE9BQU8sZUFBZTtJQW9DMUI7OztPQUdHO0lBQ0gsWUFDVSxVQUFtQyxFQUNqQixVQUFrQixFQUNwQyxRQUFtQixFQUUzQixNQUEwQjtRQUpsQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUVuQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBeEM3Qjs7OztXQUlHO1FBQ00sU0FBSSxHQUFHLE9BQU8sQ0FBQztRQUV4Qjs7OztXQUlHO1FBQ00sUUFBRyxHQUFHLEVBQUUsQ0FBQztRQWdDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFwQkQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQWtCRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRDs7O09BR0c7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRDs7O09BR0c7SUFDSyxTQUFTO1FBQ2YsTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksdUJBQXVCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRSxNQUFNLGFBQWEsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDO1FBQ3BDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDakUsT0FBTyxVQUFVLEVBQUUsRUFBRTtZQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7NEdBckZVLGVBQWUsNENBMENiLGFBQWE7Z0dBMUNmLGVBQWUsK0xBRmhCLDJCQUEyQjsyRkFFMUIsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OzBCQTJDSSxTQUFTOzJCQUFDLGFBQWE7cUdBbENqQixJQUFJO3NCQUFaLEtBQUs7Z0JBT0csR0FBRztzQkFBWCxLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBdHRyaWJ1dGUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNDb25maWdMb2dvTW9kdWxlIH0gZnJvbSAnLi4vYmMtY29uZmlnLWxvZ28tbW9kdWxlJztcblxuLyoqXG4gKiBsb2dvcyBkZWwgc2hvd2Nhc2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0xvZ29Db21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtbG9nbycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIEJjTG9nb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgY29uZmlnOiBCY0NvbmZpZ0xvZ29Nb2R1bGU7XG5cbiAgLyoqXG4gICAqIFRhbWHDsW8gZW4gcGl4ZWxlcyBkZWwgcmVjdXJzby4gUG9yIGRlZmVjdG8gc29uIDEwMHB4XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xvZ29Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNpemUgPSAnMTAwcHgnO1xuXG4gIC8qKlxuICAgKiBBY2Nlc2liaWxpZGFkLCB0ZXh0byBhbHRlcm5hdGl2byBwYXJhIGVsIGxvZ29cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTG9nb0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYWx0ID0gXCJcIjtcblxuICAvKipcbiAgICogTm9tYnJlIGRlbCByZWN1cnNvIHZpc3VhbCBhIHVzYXIsIHNlcsOhIHVuYSBpbWFnZW4gc3ZnLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNMb2dvQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENsYXNlIGRlbCBsb2dvXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0xvZ29Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYmMtbG9nbyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGVsZW1lbnRSZWYgUmVmZXJlbmNpYSBkZWwgaG9zdFxuICAgKiBAcGFyYW0gYXJpYUhpZGRlbiBTZSB0b21hIGVsIHZhbG9yIGRlbCBwYXJhbWV0cm8gYXJpYS1oaWRkZW4sIHNpIG5vIGV4aXN0ZSBlbCBhdHJpYnV0byBzZSBwb25lIGVuIHRydWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSBhcmlhSGlkZGVuOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXG4gICAgY29uZmlnOiBCY0NvbmZpZ0xvZ29Nb2R1bGVcbiAgKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgaWYgKCFhcmlhSGlkZGVuKSB7XG4gICAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbmljaWFsaXphIGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjTG9nb0NvbXBvbmVudFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZExvZ28oKTtcbiAgfVxuICAvKipcbiAgICogU2UgZGlzcGFyYSBjYWRhIHF1ZSBzZSBkZWN0ZWN0YSB1biBjYW1iaW9cbiAgICogQG1lbWJlcm9mIEJjTG9nb0NvbXBvbmVudFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZExvZ28oKTtcbiAgfVxuICAvKipcbiAgICogQ29uc3RydXllIGVsIGxvZ29cbiAgICogQG1lbWJlcm9mIEJjTG9nb0NvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZExvZ28oKTogdm9pZCB7XG4gICAgY29uc3QgcGF0aCA9IGAke3RoaXMuY29uZmlnLnBhdGh9L2Fzc2V0cy9pY29ucy9sb2dvcy8ke3RoaXMubmFtZX1gO1xuICAgIGNvbnN0IFBJQ1RPR1JBTV9VUkwgPSBgJHtwYXRofS5zdmdgO1xuICAgIGNvbnN0IFBJQyA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoUElDLCAnc3JjJywgUElDVE9HUkFNX1VSTCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwnd2lkdGgnLCB0aGlzLnNpemUpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsJ2FsdCcsIHRoaXMuYWx0KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFBJQywgJ3dpZHRoJywgdGhpcy5zaXplKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShQSUMsICdhbHQnLCB0aGlzLmFsdCk7XG4gICAgbGV0IGNoaWxkQ291bnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoY2hpbGRDb3VudC0tKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbY2hpbGRDb3VudF07XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIFBJQyk7XG4gIH1cbn1cbiJdfQ==