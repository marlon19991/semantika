import * as i0 from '@angular/core';
import { Directive, Input, HostBinding, NgModule, HostListener } from '@angular/core';

const BUTTON_CLASSES = {
    primary: 'bc-button-primary',
    secondary: 'bc-button-secondary',
    terciary: 'bc-button-terciary',
    tertiary: 'bc-button-tertiary',
    background: 'bc-button-background',
    ghost: 'bc-button-ghost',
    default: 'bc-button-primary',
};
const BUTTON_SIZES = {
    small: 'bc-button-small',
    puffy: 'bc-button-puffy',
    default: 'bc-button',
};
const BUTTON_WIDTH_CLASSES = {
    fill: 'bc-button-fill',
    hug: 'bc-button-hug',
    default: 'bc-button-fill',
};
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonDirective
 */
class BcButtonDirective {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Parámetro para denotar la clase de botón.
         *
         * @type {string}
         * @memberof BcButtonDirective
         */
        this.class = '';
        this.classes = [
            this.class,
            this.setStyles(),
            this.setSize(),
            this.setWidth(),
        ].join(' ');
    }
    /**
     * Configura los estilos del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setStyles() {
        return BUTTON_CLASSES[this.typeButton] || BUTTON_CLASSES.default;
    }
    /**
     * Configura el tamaño del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setSize() {
        return BUTTON_SIZES[this.sizeButton] || BUTTON_SIZES.default;
    }
    /**
     * Configura el ancho del botón.
     *
     * @returns {string}
     * @memberof BcButtonDirective
     */
    setWidth() {
        return BUTTON_WIDTH_CLASSES[this.width] || BUTTON_WIDTH_CLASSES.default;
    }
    ngAfterViewInit() {
        this.classes = [
            this.class,
            this.setStyles(),
            this.setSize(),
            this.setWidth(),
        ].join(' ');
        this.changeDetectorRef.detectChanges();
    }
}
BcButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonDirective, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
BcButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcButtonDirective, selector: "[bc-button]", inputs: { typeButton: "typeButton", sizeButton: "sizeButton", width: "width", class: "class" }, host: { properties: { "class": "this.classes" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-button]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { typeButton: [{
                type: Input
            }], sizeButton: [{
                type: Input
            }], width: [{
                type: Input
            }], class: [{
                type: Input
            }], classes: [{
                type: HostBinding,
                args: ['class']
            }] } });

/**
 * Importa la directiva de botones con
 * los diseños de Bancolombia S.A.
 * @package bc-button, bc-button-ico
 *   @Directiva bc-button
 *   @param  typeButton  Tipo de botón  primary (default) || secondary || terciary (a ser deprecada por tertiary) || tertiary ||  background || ghost
 *   @param  sizeButton  (default) || small || puffy
 *   @example
 *   <button disabled bc-button
 *       typeButton="secondary"
 *       sizeButton="puffy"
 *   >
 *       Acá texto del botón
 *   </button>
 *
 *   @Directiva bc-button-icon
 *   @description (deprecada) Utilizar componente bc-icon-button
 *   @Dependencias Esta directiva depende directamente del comoponente bc-icons
 *   @example
 *   <button bc-button-icon typeButton="icon" class="child">
 *       <bc-icons
 *           svgIconName="apple"
 *           height="40" width="40"
 *           color="#00448d">
 *       </bc-icons>
 *   </button>
 *
 *   @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
class BcButtonModule {
}
BcButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonModule, declarations: [BcButtonDirective], exports: [BcButtonDirective] });
BcButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcButtonDirective],
                    imports: [],
                    exports: [BcButtonDirective],
                }]
        }] });

const ICON_STATUS = {
    enabled: 'bc-button-icon',
    disabled: 'bc-button-icon-disabled',
};
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonIconDirective
 * @implements {AfterContentInit}
 * @deprecated  Utilizar componente BcIconButtonComponent
 */
class BcButtonIconDirective {
    constructor() {
        /**
         * Este atributo nos configura el tipo de botón mediante su clase.
         *
         * @type {string}
         * @memberof BcButtonIconDirective
         * @deprecated  Utilizar componente BcIconButtonComponent
         */
        this.class = '';
        /**
         * Este atributo nos indica si el botón está habilitado o deshabilitado.
         *
         * @type {boolean}
         * @memberof BcButtonIconDirective
         * @deprecated  Utilizar componente BcIconButtonComponent
         */
        this.disabled = false;
        this.clases = [this.class].join(' ');
    }
    get tabIndex() {
        return '0';
    }
    onFocusOut() {
        this.clases = this.clases.replace(this.setAccesibility(), '');
    }
    onFocus(event) {
        if (event && event.key === 'Tab') {
            this.clases += ' ' + this.setAccesibility();
        }
    }
    /**
     * Configura estado del botón icono.
     *
     * @returns {string}
     * @memberof BcButtonIconDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setStatus() {
        let response = '';
        if (this.disabled) {
            response = ICON_STATUS.disabled;
        }
        else {
            response = ICON_STATUS.enabled;
        }
        return response;
    }
    /**
     * Configura la accesibilidad del componente.
     *
     * @returns {string}
     * @memberof BcButtonIconDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setAccesibility() {
        return 'outline-element';
    }
    ngAfterContentInit() {
        this.clases = [this.class, this.setStatus()].join(' ');
    }
}
BcButtonIconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonIconDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcButtonIconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcButtonIconDirective, selector: "[bc-button-icon]", inputs: { class: "class", disabled: "disabled" }, host: { listeners: { "focusout": "onFocusOut()", "keyup": "onFocus($event)" }, properties: { "attr.tabindex": "this.tabIndex", "class": "this.clases" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonIconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-button-icon]',
                }]
        }], propDecorators: { tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], class: [{
                type: Input
            }], disabled: [{
                type: Input
            }], clases: [{
                type: HostBinding,
                args: ['class']
            }], onFocusOut: [{
                type: HostListener,
                args: ['focusout']
            }], onFocus: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });

const FAB_TYPES = {
    mini: 'bc-fab-button bc-fab-button-mini',
    primary: ' bc-fab-button bc-fab-button-primary',
    secondary: 'bc-fab-button bc-fab-button-secondary',
};
/**
 * Importa la directiva de botones con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcFabButtonDirective
 * @implements {AfterContentInit}
 * @deprecated  Utilizar variante de componente BcIconButtonComponent
 */
class BcFabButtonDirective {
    constructor() {
        this.class = '';
        this.classes = [this.class, this.setStyle()].join(' ');
    }
    get role() {
        return 'button';
    }
    get tabIndex() {
        return '0';
    }
    onFocusOut() {
        this.classes = this.classes.replace(this.setAccesibility(), '');
    }
    onFocus(event) {
        if (event) {
            if (event.key === 'Tab') {
                this.classes += ' ' + this.setAccesibility();
            }
        }
    }
    /**
     * Indica la accesibilidad del componente.
     *
     * @returns {string}
     * @memberof BcFabButtonDirective
     * @deprecated  Utilizar variante de componente BcIconButtonComponent
     */
    setAccesibility() {
        return 'outline-element';
    }
    ngAfterContentInit() {
        this.setStyle();
        this.classes = [this.class, this.setStyle()].join(' ');
    }
    /**
     * Configura los estilos del botón.
     *
     * @returns
     * @memberof BcFabButtonDirective
     * @deprecated  Utilizar componente BcIconButtonComponent
     */
    setStyle() {
        let response = FAB_TYPES[this.typeButton];
        if (!response) {
            response = FAB_TYPES.primary;
        }
        return response;
    }
}
BcFabButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFabButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcFabButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcFabButtonDirective, selector: "[bc-fab-button]", inputs: { typeButton: "typeButton", class: "class" }, host: { listeners: { "focusout": "onFocusOut()", "keyup": "onFocus($event)" }, properties: { "attr.role": "this.role", "attr.tabindex": "this.tabIndex", "class": "this.classes" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFabButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-fab-button]',
                }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], typeButton: [{
                type: Input
            }], class: [{
                type: Input
            }], classes: [{
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
 * Generated bundle index. Do not edit.
 */

export { BcButtonDirective, BcButtonIconDirective, BcButtonModule, BcFabButtonDirective };
//# sourceMappingURL=bancolombia-design-system-web-bc-button.mjs.map
