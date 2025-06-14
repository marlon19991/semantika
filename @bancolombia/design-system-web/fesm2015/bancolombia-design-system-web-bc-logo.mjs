import * as i0 from '@angular/core';
import { InjectionToken, Component, Attribute, Input, HostBinding, NgModule } from '@angular/core';

class BcConfigLogoModule {
}
const CONFIG = new InjectionToken("forRoot() BcLogoModule configuration.");

/**
 * logos del showcase
 * @export
 * @class BcLogoComponent
 */
class BcLogoComponent {
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
BcLogoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: BcConfigLogoModule }], target: i0.ɵɵFactoryTarget.Component });
BcLogoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcLogoComponent, selector: "bc-logo", inputs: { size: "size", alt: "alt", name: "name", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-logo',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                        type: Attribute,
                        args: ['aria-hidden']
                    }] }, { type: i0.Renderer2 }, { type: BcConfigLogoModule }];
    }, propDecorators: { size: [{
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

class BcLogoModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcLogoModule,
            providers: [{ provide: BcConfigLogoModule, useValue: conf }],
        };
    }
}
BcLogoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcLogoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoModule, declarations: [BcLogoComponent], exports: [BcLogoComponent] });
BcLogoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcLogoComponent
                    ],
                    imports: [],
                    exports: [BcLogoComponent]
                }]
        }] });
const defaultConfig = new BcConfigLogoModule();
defaultConfig.path = '';

const BC_LOGOS = [
    'amex-white',
    'amex',
    'applepay-white',
    'applepay',
    'bam-grupo-horizontal',
    'bam-grupo-horizontal-negative',
    'bam-grupo-vertical',
    'bam-grupo-vertical-negative',
    'Bam-horizontal',
    'Bam-horizontal-negative',
    'bam-vertical',
    'bam-vertical-negative',
    'banca-inversion-horizontal',
    'banca-inversion-horizontal-negative',
    'banca-inversion-vertical',
    'banca-inversion-vertical-negative',
    'bancoagrario-grupo-horizontal',
    'bancoagrario-grupo-horizontal-negative',
    'bancoagrario-grupo-vertical',
    'bancoagrario-grupo-vertical-negative',
    'bancoagrario-horizontal',
    'bancoagrario-horizontal-negative',
    'bancoagrario-vertical',
    'bancoagrario-vertical-negative',
    'bancolombia-grupo-horizontal',
    'bancolombia-grupo-horizontal-negative',
    'bancolombia-grupo-vertical',
    'bancolombia-grupo-vertical-negative',
    'bancolombia-cayman-horizontal',
    'bancolombia-cayman-horizontal-negative',
    'bancolombia-cayman-vertical',
    'bancolombia-cayman-vertical-negative',
    'bancolomba-panama-horizontal',
    'bancolomba-panama-horizontal-negative',
    'bancolombia-panama-vertical',
    'bancolombia-panama-vertical-negative',
    'bancolombia-puertorico-horizontal',
    'bancolombia-puertorico-horizontal-negative',
    'bancolombia-puertorico-vertical',
    'bancolombia-puertorico-vertical-negative',
    'isotipo-bancolombia',
    'isotipo-bancolombia-negative',
    'bancolombia-horizontal',
    'bancolombia-horizontal-negative',
    'bancolombia-vetical',
    'bancolombia-vetical-negative',
    'grupo-bancolombia-banitsmo-horizontal',
    'grupo-bancolombia-banitsmo-horizontal-negative',
    'grupo-bancolomba-banitsmo-vertical',
    'grupo-bancolomba-banitsmo-vertical-negative',
    'banitsmo-horizontal',
    'banitsmo-horizontal-negative',
    'banitsmo-vertial',
    'banitsmo-vertial-negative',
    'fundacion-grupo-bancolombia-horizontal',
    'fundacion-grupo-bancolombia-horizontal-negative',
    'fundacion-grupo-bancolombia-vertical',
    'fundacion-grupo-bancolombia-vertical-negative',
    'grupo-bancolombia',
    'grupo-bancolombia-negative',
    'grupo-bancolombia-horizontal',
    'grupo-bancolombia-horizontal-negative',
    'grupo-bancolombia-vertical',
    'grupo-bancolombia-vertical-negative',
    'logo-vigilado',
    'logo-vigilado-negative',
    'maestro',
    'maestro-negative',
    'mastercard',
    'visa-white',
    'visa',
    'bancolombia-horizontal-no-spacing',
    'bancolombia-horizontal-no-spacing-negative',
    'grupo-bancolombia-horizontal-no-spacing',
    'grupo-bancolombia-horizontal-no-spacing-negative',
    'Gestor-transaccional',
    'Gestor-transaccional-negative',
    'grupo-bancolombia-capital',
    'grupo-bancolombia-capital-negative',
    'isotipo-grupo-bancolombia',
    'isotipo-grupo-bancolombia-negative'
];

/**
 * Generated bundle index. Do not edit.
 */

export { BC_LOGOS, BcLogoComponent, BcLogoModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-logo.mjs.map
