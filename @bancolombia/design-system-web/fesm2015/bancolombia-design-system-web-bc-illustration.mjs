import * as i0 from '@angular/core';
import { InjectionToken, Component, Attribute, Input, HostBinding, NgModule } from '@angular/core';

class BcConfigIllustrationModule {
}
const CONFIG = new InjectionToken("forRoot() BcIllustrationModule configuration.");

/**
 * Ilustraciones del showcase
 * @export
 * @class BcIllustrationComponent
 */
class BcIllustrationComponent {
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
BcIllustrationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: BcConfigIllustrationModule }], target: i0.ɵɵFactoryTarget.Component });
BcIllustrationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcIllustrationComponent, selector: "bc-illustration", inputs: { size: "size", alt: "alt", name: "name", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-illustration',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                        type: Attribute,
                        args: ['aria-hidden']
                    }] }, { type: i0.Renderer2 }, { type: BcConfigIllustrationModule }];
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

class BcIllustrationModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcIllustrationModule,
            providers: [{ provide: BcConfigIllustrationModule, useValue: conf }],
        };
    }
}
BcIllustrationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcIllustrationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationModule, declarations: [BcIllustrationComponent], exports: [BcIllustrationComponent] });
BcIllustrationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcIllustrationComponent
                    ],
                    imports: [],
                    exports: [BcIllustrationComponent]
                }]
        }] });
const defaultConfig = new BcConfigIllustrationModule();
defaultConfig.path = '';

const BC_ILLUSTRATION_IMAGES = [
    'il-accept-terms',
    'il-activation-face-id',
    'il-ad-products',
    'il-adn',
    'il-amex',
    'il-app-1',
    'il-app-2',
    'il-app-processes-2',
    'il-app-processes',
    'il-birthday',
    'il-calendar-home',
    'il-camera-permissions',
    'il-car-key',
    'il-car-trip',
    'il-card-financing',
    'il-cards-1',
    'il-cards-2',
    'il-cash-atm',
    'il-chemistry',
    'il-christmas',
    'il-compare-products',
    'il-configure-face-id-1',
    'il-configure-face-id-2',
    'il-configure-face-id',
    'il-configure-touch-id',
    'il-currency-pay',
    'il-devices',
    'il-enrollment-1',
    'il-enrollment-2',
    'il-enrollment-3',
    'il-enrollment-indicator',
    'il-entertainment',
    'il-explore-home',
    'il-explore-items',
    'il-explore-money',
    'il-face-id-wrong',
    'il-family-1',
    'il-family-home',
    'il-fee-simulation',
    'il-generic-bc',
    'il-gift',
    'il-growth',
    'il-habitat-construction',
    'il-habitat-sustainable-project',
    'il-habitat-sustainable',
    'il-hand-select',
    'il-hardtoken-2',
    'il-hardtoken',
    'il-help',
    'il-hexagono',
    'il-holy-communion',
    'il-home-check-list',
    'il-location-home',
    'il-location-mobility',
    'il-location',
    'il-love',
    'il-manage-enrollment',
    'il-marriage',
    'il-master-seek',
    'il-master',
    'il-money-saving',
    'il-networking',
    'il-no-customer',
    'il-not-found',
    'il-pay-card',
    'il-pre-approved-credit-online',
    'il-process-error',
    'il-process-mistake',
    'il-process-ok',
    'il-process-successful',
    'il-puntos-colombia',
    'il-qr-code',
    'il-register-bill-2',
    'il-register-bill-3',
    'il-register-bill',
    'il-request-accounts',
    'il-request-cards',
    'il-saving-car',
    'il-saving-home-1',
    'il-saving-home',
    'il-scan-qr',
    'il-select',
    'il-send-receive-qr',
    'il-setting-biometric-face',
    'il-setting-biometric',
    'il-setting-wallet',
    'il-signature',
    'il-softcorrecten',
    'il-softoken-2',
    'il-softoken',
    'il-store',
    'il-sv-process',
    'il-touch-id-activacion-1',
    'il-touch-id-activacion-2',
    'il-touch-id-activation',
    'il-vehicle-offer',
    'il-visa',
    'il-wallet-activation-1',
    'il-wallet-activation-2',
    'il-wallet-success',
    'il-wallet',
    'il-baby-shower',
    'il-cajero',
    'il-charts-general',
    'il-corresponsal',
    'il-documents',
    'il-documents-folder',
    'il-giftbox',
    'il-gift-select',
    'il-graduation',
    'il-graduation-dark',
    'il-life-insurance-hands',
    'il-request-gift',
    'il-request-gift-dark',
    'il-request-gift-together',
    'il-request-gift-together-dark',
    'il-security-password-1',
    'il-security-password-2',
    'il-send-money-gift',
    'il-send-money-international',
    'il-send-money-international-dark',
    'il-send-money-to',
    'il-shield-security',
    'il-shield-security-people',
    'il-shield-security-people-dark',
    'il-sucursal',
    'il-sucursal-dark',
    'il-transversal-sve',
    'il-transversal-sve-dark',
    'il-transversal-svp',
    'il-transversal-svp-dark',
];

/**
 * Generated bundle index. Do not edit.
 */

export { BC_ILLUSTRATION_IMAGES, BcIllustrationComponent, BcIllustrationModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-illustration.mjs.map
