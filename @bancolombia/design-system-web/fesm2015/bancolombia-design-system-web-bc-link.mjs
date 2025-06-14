import * as i0 from '@angular/core';
import { Directive, Input, HostBinding, HostListener, NgModule } from '@angular/core';

const LINK_CLASSES = {
    underline: 'link-underline',
    underlineSmall: 'link-underline-small',
    underlineDefault: 'link-underline-default',
    underlineLarge: 'link-underline-large',
    simple: 'bc-link',
    large: 'link-large',
    small: 'link-small',
    default: 'link-default'
};
/**
 * Componente links se usa para indicar un vínculo a diferentes vistas.
 *
 * @export
 * @class BcLinkDirective
 * @implements {AfterContentInit}
 */
class BcLinkDirective {
    constructor() {
        /**
         * Estilo de link.
         *
         * @type {('simple' | 'underline')}
         * @memberof BcLinkDirective
         */
        this.typeLink = 'simple';
        /**
         * Tamaño del link.
         *
         * @type {('default' | 'small' | 'large' | 'underlineSmall' | 'underlineLarge' | 'underlineDefault')}
         * @memberof BcLinkDirective
         */
        this.sizeLink = 'default';
        /**
         * Clase del link.
         *
         * @type {string}
         * @memberof BcLinkDirective
         */
        this.class = '';
        this.clazzes = [
            'bc-link',
            this.class,
            this.getStyles(),
        ].join(' ');
    }
    onFocusOut() {
        this.clazzes = this.clazzes.replace(this.setAccesibility(), '');
    }
    onFocus(event) {
        if (event && event.key === 'Tab') {
            this.clazzes += ' ' + this.setAccesibility();
        }
    }
    /**
     * Metodo para la accesibilidad
     *
     * @returns {string}
     * @memberof BcLinkDirective
     */
    setAccesibility() {
        return 'outline-element';
    }
    ngAfterContentInit() {
        this.clazzes = [
            'bc-link',
            this.class,
            this.getStyles(),
            this.getSize(),
        ].join(' ');
    }
    /**
     * Obtener estilos por defecto
     *
     * @returns {string}
     * @memberof BcLinkDirective
     */
    getStyles() {
        return LINK_CLASSES[this.typeLink] || LINK_CLASSES.simple;
    }
    getSize() {
        return LINK_CLASSES[this.sizeLink] || LINK_CLASSES.default;
    }
}
BcLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcLinkDirective, selector: "[bc-link]", inputs: { typeLink: "typeLink", sizeLink: "sizeLink", class: "class" }, host: { listeners: { "focusout": "onFocusOut()", "keyup": "onFocus($event)" }, properties: { "class": "this.clazzes" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-link]'
                }]
        }], propDecorators: { typeLink: [{
                type: Input
            }], sizeLink: [{
                type: Input
            }], class: [{
                type: Input
            }], clazzes: [{
                type: HostBinding,
                args: ['class']
            }], onFocusOut: [{
                type: HostListener,
                args: ['focusout']
            }], onFocus: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });

/**
 * Importa la directiva de labels con
 * los diseños de Bancolombia S.A.
 * @package bc-lnk
 *   @Directiva bc-lnk
 *   @param  typeLink Tipo de link default || gray || white
 *   @example
 *
 *   <a bc-lnk href="#Botones">Botones</a>
 *
 * @author: Bancolombia S.A
 */
class BcLinkModule {
}
BcLinkModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLinkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcLinkModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLinkModule, declarations: [BcLinkDirective], exports: [BcLinkDirective] });
BcLinkModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLinkModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLinkModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcLinkDirective],
                    imports: [],
                    exports: [BcLinkDirective]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcLinkDirective, BcLinkModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-link.mjs.map
