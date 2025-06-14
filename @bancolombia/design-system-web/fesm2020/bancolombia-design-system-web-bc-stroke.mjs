import * as i0 from '@angular/core';
import { InjectionToken, Component, Attribute, Input, HostBinding, NgModule } from '@angular/core';

class BcConfigStrokeModule {
}
const CONFIG = new InjectionToken("forRoot() BcStrokeModule configuration.");

/**
 * strokes del showcase
 * @export
 * @class BcStrokeComponent
 */
class BcStrokeComponent {
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
BcStrokeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: BcConfigStrokeModule }], target: i0.ɵɵFactoryTarget.Component });
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
                }] }, { type: i0.Renderer2 }, { type: BcConfigStrokeModule }]; }, propDecorators: { size: [{
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

class BcStrokeModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcStrokeModule,
            providers: [{ provide: BcConfigStrokeModule, useValue: conf }],
        };
    }
}
BcStrokeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcStrokeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeModule, declarations: [BcStrokeComponent], exports: [BcStrokeComponent] });
BcStrokeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcStrokeComponent
                    ],
                    imports: [],
                    exports: [BcStrokeComponent]
                }]
        }] });
const defaultConfig = new BcConfigStrokeModule();
defaultConfig.path = '';

const BC_STROKE_IMAGES_LIST = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'];

/**
 * Generated bundle index. Do not edit.
 */

export { BC_STROKE_IMAGES_LIST, BcStrokeComponent, BcStrokeModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-stroke.mjs.map
