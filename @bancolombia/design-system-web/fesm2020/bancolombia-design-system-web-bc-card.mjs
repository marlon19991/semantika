import * as i0 from '@angular/core';
import { Injectable, Directive, Input, HostBinding, NgModule } from '@angular/core';

class BcCardService {
}
BcCardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BcCardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

const DEFAULT = 'bc-card';
const DEFAULT_COLOR = 'bc-card-color';
const CARD_TYPE = {
    default: DEFAULT,
    image: DEFAULT + '-image',
    circle: DEFAULT + '-circle',
    rounded: DEFAULT + '-rounded',
    'rounded-header': DEFAULT + '-rounded-header',
    'rounded-horizontal': DEFAULT + '-rounded-horizontal',
    'rounded-header-horizontal': DEFAULT + '-rounded-header-horizontal',
    horizontal: DEFAULT + '-horizontal',
    'header-horizontal': DEFAULT + '-header-horizontal',
    header: DEFAULT + '-header'
};
const BACKGROUND_COLOR = {
    warning: DEFAULT_COLOR + '-warning',
    info: DEFAULT_COLOR + '-info',
    success: DEFAULT_COLOR + '-success',
    error: DEFAULT_COLOR + '-error',
};
/**
 * Importa los cards con los diseños de Bancolombia S.A para mostrar una vista previa del contenido al que se vincular.
 *
 * @export
 * @class BcCardDirective
 * @implements {OnInit}
 */
class BcCardDirective {
    constructor() {
        /**
         * Indica la clase de card.
         *
         * @type {string}
         * @memberof BcCardDirective
         */
        this.class = '';
    }
    /**
     * Hace binding de las clases que se asignan a la directiva (tipo y color)
     * @type {string}
     * @memberof BcCardDirective
     */
    get hostClasses() {
        return [
            this.class,
            this.setTypeCard(),
            this.setCardColor(),
        ].join(' ');
    }
    /**
     * Setea el tipo de card
     *
     * @returns
     * @memberof BcCardDirective
     */
    setTypeCard() {
        let response = CARD_TYPE[this.type];
        if (!response) {
            response = CARD_TYPE.default;
        }
        return response;
    }
    /**
   * Setea el color de card
   *
   * @returns
   * @memberof BcCardDirective
   */
    setCardColor() {
        let response = BACKGROUND_COLOR[this.backgroundColor];
        if (!response) {
            response = '';
        }
        return response;
    }
    /**
    * Inicializa la directiva
    * @memberof BcCardDirective
    */
    ngOnInit() {
        this.setTypeCard();
    }
}
BcCardDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcCardDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcCardDirective, selector: "[bc-card]", inputs: { class: "class", type: ["typeCard", "type"], backgroundColor: "backgroundColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-card]'
                }]
        }], propDecorators: { class: [{
                type: Input
            }], type: [{
                type: Input,
                args: ['typeCard']
            }], backgroundColor: [{
                type: Input,
                args: ['backgroundColor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

/**
 * Importa la directiva de botones con
 * los diseños de Bancolombia S.A.
 * @package bc-card
 *   @Directiva bc-card
 *   @param  typeCard Tipo de tarjeta
 *                    || circle || rounded || rounded-header || rounded-horizontal || rounded-header-horizontal
 *                    || horizontal || header-horizontal || header || default (Default)
 *   @example
 *   <img bc-card typeCard="circle" src="assets/face.png" alt="">
 *
 * @author: Bancolombia S.A
 */
class BcCardModule {
}
BcCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardModule, declarations: [BcCardDirective], exports: [BcCardDirective] });
BcCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCardDirective],
                    imports: [],
                    exports: [BcCardDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCardDirective, BcCardModule, BcCardService };
//# sourceMappingURL=bancolombia-design-system-web-bc-card.mjs.map
