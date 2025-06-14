import * as i0 from '@angular/core';
import { InjectionToken, Component, Attribute, Input, HostBinding, NgModule } from '@angular/core';

class BcConfigPictogramModule {
}
const CONFIG = new InjectionToken("forRoot() BcPictogramModule configuration.");

/**
 * pictograms del showcase
 * @export
 * @class BcPictogramaComponent
 */
class BcPictogramComponent {
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
BcPictogramComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramComponent, deps: [{ token: i0.ElementRef }, { token: 'aria-hidden', attribute: true }, { token: i0.Renderer2 }, { token: BcConfigPictogramModule }], target: i0.ɵɵFactoryTarget.Component });
BcPictogramComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPictogramComponent, selector: "bc-pictogram", inputs: { size: "size", alt: "alt", name: "name", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-pictogram',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                        type: Attribute,
                        args: ['aria-hidden']
                    }] }, { type: i0.Renderer2 }, { type: BcConfigPictogramModule }];
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

class BcPictogramModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcPictogramModule,
            providers: [{ provide: BcConfigPictogramModule, useValue: conf }],
        };
    }
}
BcPictogramModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPictogramModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramModule, declarations: [BcPictogramComponent], exports: [BcPictogramComponent] });
BcPictogramModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcPictogramComponent
                    ],
                    imports: [],
                    exports: [BcPictogramComponent]
                }]
        }] });
const defaultConfig = new BcConfigPictogramModule();
defaultConfig.path = '';

const BC_PICTOGRAM_IMAGES_LIST = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'acciones',
    'add',
    'affection',
    'agenda',
    'ahorro',
    'alimentacion',
    'apartaestudio',
    'apartamento',
    'archivo',
    'armor-user',
    'asistencia_medica',
    'ayuda',
    'badge',
    'BB_multicolor_asistencias',
    'BB_multicolor_avances_desembolsos',
    'billete',
    'billetera',
    'bloqueos',
    'botiquin',
    'boton_bancolombia',
    'busqueda',
    'camara_foto',
    'canales',
    'capital_pic',
    'casa',
    'centro_de_ayuda',
    'Chart',
    'chatea_con_nosotros',
    'cheques',
    'clave',
    'clave_dinamica',
    'computadora',
    'configuracion',
    'conoce_nuestra_app',
    'consultar_productos',
    'contacta_con_tu_asesor',
    'Copia de idea',
    'Copia de idioma',
    'corazon',
    'correct',
    'crediagil',
    'creditoapartaestudio',
    'creditoapartamento',
    'creditobici',
    'creditocarro',
    'creditocasa',
    'creditomoto',
    'creditos',
    'cuentas',
    'defensor_financiero',
    'Definir',
    'Desarrollar',
    'descripcion',
    'Descubrir',
    'Despegar',
    'dia a dia',
    'direccionamiento',
    'documento',
    'documentos',
    'documento_entrega',
    'electronic_card',
    'electronic_prepay',
    'Empezar 1',
    'entretenimiento',
    'error-1',
    'explore',
    'extintor',
    'extras',
    'face-angry-color',
    'face-laugh-color',
    'face-laugh-wink-color',
    'face-laughbeam-color',
    'face-meh-color',
    'face-sad-color',
    'face-smile-color',
    'face-wink-color',
    'failure',
    'financieras',
    'financiero',
    'flecha_arriba',
    'flecha_ascendente',
    'flecha_derecha',
    'flypass-color',
    'goal',
    'hogar',
    'huella',
    'idea-color',
    'idioma',
    'imprimir',
    'impuestos',
    'ingreso_efectivomodeda',
    'inscribir_productos',
    'intercambio_divisas',
    'inversiones',
    'key',
    'like-color',
    'lineas_atencion',
    'mail-color',
    'mano_1',
    'mano_2',
    'mano_3',
    'mano_4-1',
    'mano_4',
    'mano_5',
    'mano_cubrir',
    'mano_palma',
    'mascotas',
    'moda',
    'ninos',
    'notificacion',
    'novedades',
    'no_contact',
    'nublado',
    'ofertas',
    'oficina',
    'otros',
    'otros_bancos',
    'p-education',
    'pagar_tarjetas_de_credito',
    'pagar_y_administrar_facturas',
    'pago_movil',
    'plant',
    'porcentaje',
    'power cord',
    'preferente',
    'preguntas_frequentes',
    'premium-star',
    'prestamos',
    'producto_destino',
    'producto_origen',
    'prohibido_fumar',
    'project-color',
    'puntoscolombia',
    'puntos_atencion',
    'recibir_dinero',
    'renovar',
    'rentabilidad',
    'retirar_tarjeta',
    'rocket',
    'salario',
    'salud',
    'search2',
    'seguridad-42',
    'seguridad-88',
    'seguros-57',
    'servicio_mixto',
    'shield-money',
    'simulador',
    'smart_watch',
    'soleado',
    'solicitar_productos',
    'sonido_activo',
    'stone',
    'tarjeta',
    'tarjetascredito',
    'Tecnologia',
    'temperatura',
    'te_llamamos',
    'theory',
    'thumbtack-color',
    'tienda',
    'time_pic',
    'pic_change',
    'angle_down',
    'pic_download',
    'tips_seguridad',
    'transferir_dinero',
    'transporte',
    'user error',
    'usuario-1',
    'usuario',
    'valor',
    'valores copia',
    'viajes',
    'visible',
];
const BC_PICTOGRAM_IMAGES_NEWS_LIST = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "pic-affinity", "pic-angle-down", "pic-aparment", "pic-aparment-coin",
    "pic-aparment-studio", "pic-aparment-studio-coin", "pic-arrow-diagonal",
    "pic-arrow-right", "pic-arrow-up", "pic-bell", "pic-bike", "pic-book",
    "pic-box", "pic-briefcase-2", "pic-briefcase-medical", "pic-building-2",
    "pic-bus", "pic-calculator", "pic-calendar", "pic-calendar-check",
    "pic-calendar-month", "pic-camera", "pic-car", "pic-card",
    "pic-card-contactless", "pic-card-id", "pic-card-prepago", "pic-card-removing",
    "pic-cards", "pic-car-half", "pic-change", "pic-channels", "pic-chart",
    "pic-chart-pie", "pic-check", "pic-checks", "pic-children",
    "pic-circle-money", "pic-circle-plus", "pic-circle-question", "pic-clock",
    "pic-cloud-sun", "pic-coffee", "pic-coin", "pic-coins-growth",
    "pic-comment-line", "pic-comments-dots", "pic-constructor", "pic-define",
    "pic-desktop", "pic-develop", "pic-directions", "pic-discover",
    "pic-document", "pic-documents", "pic-download", "pic-e-card",
    "pic-elderly", "pic-error", "pic-face-angry", "pic-face-grin-wink-1",
    "pic-face-grin-wink-2", "pic-face-laugh", "pic-face-laughbeam",
    "pic-face-meh", "pic-face-sad", "pic-face-smile", "pic-file-add",
    "pic-file-coin", "pic-file-search", "pic-files-money", "pic-fire-extinguisher",
    "pic-flight", "pic-flypass", "pic-folder", "pic-frequent-questions",
    "pic-gavel", "pic-gem", "pic-gift", "pic-globe-2", "pic-hand-five",
    "pic-hand-four", "pic-hand-handshake", "pic-hand-holding-box",
    "pic-hand-holding-card", "pic-hand-holding-cash", "pic-hand-holding-coins",
    "pic-hand-holding-document", "pic-hand-investment", "pic-hand-one",
    "pic-hand-paper", "pic-hand-tap", "pic-hand-three", "pic-hand-two",
    "pic-headset", "pic-heart", "pic-help-center", "pic-hiking",
    "pic-home", "pic-hospital", "pic-house", "pic-house-coin",
    "pic-id-fingerprint", "pic-insert-coin", "pic-investment", "pic-invoice",
    "pic-key", "pic-laptop", "pic-lightbulb", "pic-like", "pic-lock",
    "pic-lock-dynamic-key", "pic-lock-error", "pic-mail", "pic-marker",
    "pic-medal", "pic-medal-2", "pic-megaphone", "pic-mobile",
    "pic-mobile-info", "pic-mobile-wave", "pic-money", "pic-money-2",
    "pic-money-check", "pic-money-exchange", "pic-money-minus",
    "pic-money-plus", "pic-motorcycle-scooter", "pic-movie", "pic-museum",
    "pic-newslatter", "pic-no-smoking", "pic-password", "pic-pet",
    "pic-phone-contact", "pic-phone-money", "pic-plant", "pic-plug",
    "pic-pocket", "pic-printer", "pic-project", "pic-puntos-colombia",
    "pic-qr-scan", "pic-restaurant", "pic-restroom", "pic-rocket",
    "pic-sack-cash", "pic-saving", "pic-search", "pic-search-2",
    "pic-search-text", "pic-send-money", "pic-send-money-from",
    "pic-send-money-to", "pic-settings", "pic-share", "pic-shield",
    "pic-shield-assists", "pic-shield-money", "pic-shield-user", "pic-shine",
    "pic-shopping", "pic-shopping-cart-plus", "pic-slider-2",
    "pic-smart-watch", "pic-star", "pic-start", "pic-stethoscope",
    "pic-stone", "pic-store", "pic-store-error", "pic-store-ok",
    "pic-sync", "pic-sync-money", "pic-tag-sale", "pic-take-off",
    "pic-temperature", "pic-thumbtack", "pic-trophy", "pic-umbrella",
    "pic-user", "pic-user-error", "pic-view", "pic-user-money", "pic-user-ok",
    "pic-view", "pic-volume", "pic-wallet", "pic-wheelchair", "pic-withdraw-cash", "pic-percentage"
];

/**
 * Generated bundle index. Do not edit.
 */

export { BC_PICTOGRAM_IMAGES_LIST, BC_PICTOGRAM_IMAGES_NEWS_LIST, BcPictogramComponent, BcPictogramModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-pictogram.mjs.map
