import { Component, Input, Attribute, HostBinding } from '@angular/core';
import MAP from '../bc-icon-list/bc-map-kind-icons';
import * as i0 from "@angular/core";
import * as i1 from "../bc-config-icon-module";
export const SIZES = {
    xs: 'bc-xs',
    '2xs': 'bc-2xs',
    sm: 'bc-sm',
    md: 'bc-md',
    lg: 'bc-lg',
    xl: 'bc-xl',
    '2xl': 'bc-2xl',
    '3xl': 'bc-3xl',
};
/**
 * Iconos del showcase
 * @export
 * @class BcIconComponent
 */
export class BcIconComponent {
    /**
     * @param elementRef Referencia del host
     * @param ariaHidden Se toma el valor del parametro aria-hidden, si no existe el atributo se pone en true
     */
    constructor(elementRef, ariaHidden, renderer, config) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cachedMatches = {};
        /**
         * Tamaño en pixeles del recurso. Por defecto son 100px
         * @type {string}
         * @memberof BcIconComponent
         */
        this.width = '100px';
        this.config = config;
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    get hostClasses() {
        return ['bc-icon', this.setSize(), this.class].join(' ');
    }
    /**
     * Configura el tamaño a usar para los íconos, por defecto se establece en SM
     * @returns
     * @memberof BcIconComponent
     */
    setSize() {
        let response = SIZES[this.size];
        if (!response) {
            response = SIZES.sm;
        }
        return response;
    }
    ngOnInit() {
        this.validateIcon();
    }
    ngAfterViewInit() {
        if (this.ariaLabel) {
            this.elementRef.nativeElement
                .setAttribute('aria-label', this.ariaLabel);
        }
    }
    ngOnChanges() {
        this.validateIcon();
    }
    validateIcon() {
        if (this.name) {
            const typeIcon = MAP[this.name];
            if (typeIcon == 'functionals' || typeIcon == 'logos') {
                this.buildIcon(typeIcon);
            }
            else {
                this.buildImage(typeIcon);
            }
        }
    }
    buildIcon(typeIcon) {
        this.elementRef.nativeElement.textContent = this.name;
        if (typeIcon == 'logos') {
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', 'auto');
        }
    }
    buildImage(typeIcon) {
        const path = `${this.config.path}/assets/icons/${typeIcon}/${this.name}`;
        const IMAGE_URL = `${path}.svg`;
        const IMG = this.renderer.createElement('img');
        this.renderer.setAttribute(IMG, 'src', IMAGE_URL);
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.width);
        this.renderer.setStyle(IMG, 'width', this.width);
        let childCount = this.elementRef.nativeElement.childNodes.length;
        while (childCount--) {
            const child = this.elementRef.nativeElement.childNodes[childCount];
            this.elementRef.nativeElement.removeChild(child);
        }
        this.renderer.appendChild(this.elementRef.nativeElement, IMG);
    }
}
BcIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: i1.BcConfigIconModule }], target: i0.ɵɵFactoryTarget.Component });
BcIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcIconComponent, selector: "bc-icon", inputs: { ariaLabel: "ariaLabel", size: "size", width: "width", name: "name", class: "class" }, host: { attributes: { "role": "img" }, properties: { "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-icon',
                    template: '<ng-content></ng-content>',
                    host: { role: 'img' },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['aria-hidden']
                }] }, { type: i0.Renderer2 }, { type: i1.BcConfigIconModule }]; }, propDecorators: { ariaLabel: [{
                type: Input
            }], size: [{
                type: Input
            }], width: [{
                type: Input
            }], name: [{
                type: Input
            }], class: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaWNvbi9iYy1pY29uLWNvbXBvbmVudC9iYy1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWMsV0FBVyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEdBQUcsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBRXBELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNuQixFQUFFLEVBQUUsT0FBTztJQUNYLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLE9BQU87SUFDWCxFQUFFLEVBQUUsT0FBTztJQUNYLEVBQUUsRUFBRSxPQUFPO0lBQ1gsRUFBRSxFQUFFLE9BQU87SUFDWCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0NBQ2hCLENBQUM7QUFJRjs7OztHQUlHO0FBT0gsTUFBTSxPQUFPLGVBQWU7SUF3RDFCOzs7T0FHRztJQUNILFlBQ1UsVUFBbUMsRUFDakIsVUFBa0IsRUFDcEMsUUFBbUIsRUFDM0IsTUFBMEI7UUFIbEIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFFbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTdEckIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFnQjNCOzs7O1dBSUc7UUFDTSxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBMkN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztJQWhDRCxJQUNJLFdBQVc7UUFDYixPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVB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YTtnR0E5RGYsZUFBZSwwUEFIaEIsMkJBQTJCOzJGQUcxQixlQUFlO2tCQUwzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2lCQUN0Qjs7MEJBK0RJLFNBQVM7MkJBQUMsYUFBYTtxR0FyRGpCLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQU9HLEtBQUs7c0JBQWIsS0FBSztnQkFPRyxJQUFJO3NCQUFaLEtBQUs7Z0JBT0csS0FBSztzQkFBYixLQUFLO2dCQUVGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQXR0cmlidXRlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjQ29uZmlnSWNvbk1vZHVsZSB9IGZyb20gJy4uL2JjLWNvbmZpZy1pY29uLW1vZHVsZSc7XG5pbXBvcnQgTUFQIGZyb20gJy4uL2JjLWljb24tbGlzdC9iYy1tYXAta2luZC1pY29ucyc7XG5cbmV4cG9ydCBjb25zdCBTSVpFUyA9IHtcbiAgeHM6ICdiYy14cycsXG4gICcyeHMnOiAnYmMtMnhzJyxcbiAgc206ICdiYy1zbScsXG4gIG1kOiAnYmMtbWQnLFxuICBsZzogJ2JjLWxnJyxcbiAgeGw6ICdiYy14bCcsXG4gICcyeGwnOiAnYmMtMnhsJyxcbiAgJzN4bCc6ICdiYy0zeGwnLFxufTtcblxuZXhwb3J0IHR5cGUgU2l6ZVR5cGUgPSAneHMnIHwgJzJ4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJzJ4bCcgfCAnM3hsJztcblxuLyoqXG4gKiBJY29ub3MgZGVsIHNob3djYXNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNJY29uQ29tcG9uZW50XG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtaWNvbicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGhvc3Q6IHsgcm9sZTogJ2ltZycgfSxcbn0pXG5leHBvcnQgY2xhc3MgQmNJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBjb25maWc6IEJjQ29uZmlnSWNvbk1vZHVsZTtcbiAgcHJpdmF0ZSBjYWNoZWRNYXRjaGVzID0ge307XG4gIFxuICAvKipcbiAgICogYXJpYS1sYWJlbC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSWNvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRhbWHDsW8gZGVsIMOtY29uby5cbiAgICogQHR5cGUge1NpemVUeXBlfVxuICAgKiBAbWVtYmVyb2YgQmNJY29uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzaXplOiBTaXplVHlwZTtcblxuICAvKipcbiAgICogVGFtYcOxbyBlbiBwaXhlbGVzIGRlbCByZWN1cnNvLiBQb3IgZGVmZWN0byBzb24gMTAwcHhcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSWNvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgd2lkdGggPSAnMTAwcHgnO1xuXG4gIC8qKlxuICAgKiBOb21icmUgZGVsIHJlY3Vyc28gdmlzdWFsIGEgdXNhciwgcHVlZGUgc2VyIHVuIMOtY29ubyBvIHVuYSBpbWFnZW4gc3ZnLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJY29uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENsYXNlIGRlbCDDrWNvbm9cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSWNvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBbJ2JjLWljb24nLCB0aGlzLnNldFNpemUoKSwgdGhpcy5jbGFzc10uam9pbignICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYSBlbCB0YW1hw7FvIGEgdXNhciBwYXJhIGxvcyDDrWNvbm9zLCBwb3IgZGVmZWN0byBzZSBlc3RhYmxlY2UgZW4gU01cbiAgICogQHJldHVybnNcbiAgICogQG1lbWJlcm9mIEJjSWNvbkNvbXBvbmVudFxuICAgKi9cbiAgc2V0U2l6ZSgpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBTSVpFU1t0aGlzLnNpemVdO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJlc3BvbnNlID0gU0laRVMuc207XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZWxlbWVudFJlZiBSZWZlcmVuY2lhIGRlbCBob3N0XG4gICAqIEBwYXJhbSBhcmlhSGlkZGVuIFNlIHRvbWEgZWwgdmFsb3IgZGVsIHBhcmFtZXRybyBhcmlhLWhpZGRlbiwgc2kgbm8gZXhpc3RlIGVsIGF0cmlidXRvIHNlIHBvbmUgZW4gdHJ1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpIGFyaWFIaWRkZW46IHN0cmluZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29uZmlnOiBCY0NvbmZpZ0ljb25Nb2R1bGUsXG4gICkge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIGlmICghYXJpYUhpZGRlbikge1xuICAgICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudmFsaWRhdGVJY29uKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXJpYUxhYmVsKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICAuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5hcmlhTGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudmFsaWRhdGVJY29uKCk7XG4gIH1cblxuICB2YWxpZGF0ZUljb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgY29uc3QgdHlwZUljb24gPSBNQVBbdGhpcy5uYW1lXTtcbiAgICAgIGlmICh0eXBlSWNvbiA9PSAnZnVuY3Rpb25hbHMnIHx8IHR5cGVJY29uID09ICdsb2dvcycgKSB7XG4gICAgICAgIHRoaXMuYnVpbGRJY29uKHR5cGVJY29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnVpbGRJbWFnZSh0eXBlSWNvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEljb24odHlwZUljb24pOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICBpZiAodHlwZUljb24gPT0gJ2xvZ29zJyApIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsJ3dpZHRoJywgJ2F1dG8nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkSW1hZ2UodHlwZUljb24pOiB2b2lkIHtcbiAgICBjb25zdCBwYXRoID0gYCR7dGhpcy5jb25maWcucGF0aH0vYXNzZXRzL2ljb25zLyR7dHlwZUljb259LyR7dGhpcy5uYW1lfWA7XG4gICAgY29uc3QgSU1BR0VfVVJMID0gYCR7cGF0aH0uc3ZnYDtcbiAgICBjb25zdCBJTUcgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKElNRywgJ3NyYycsIElNQUdFX1VSTCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwnd2lkdGgnLCB0aGlzLndpZHRoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKElNRywgJ3dpZHRoJywgdGhpcy53aWR0aCk7XG4gICAgbGV0IGNoaWxkQ291bnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoY2hpbGRDb3VudC0tKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbY2hpbGRDb3VudF07XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIElNRyk7XG4gIH1cbn1cbiJdfQ==