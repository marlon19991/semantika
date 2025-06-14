import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcFooterBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BcAccordionModule } from '@bancolombia/design-system-web/bc-accordion';

/**
 * Importa el componente footer con los diseños de Bancolombia S.A. este componente,
 * se utiliza para los pie de página.
 *
 * @export
 * @class BcfooterComponent
 * @implements {AfterViewInit}
 */
class BcFooterComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcfooterComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Links con alineacion en el top del footer, los posibles valores de align (alineación) son "flex-end" | "flex-start" | "center".
         *
         * @type {ITopLinks}
         * @memberof BcfooterComponent
         */
        this.topLinks = {
            alignContent: 'flex-end',
            links: [
                {
                    text: '',
                    method: '',
                    link: '',
                    isSelf: false,
                },
            ],
        };
        this.topMethods = {
            alignContent: 'flex-end',
            methods: [
                {
                    text: '',
                    method: '',
                },
            ],
        };
        /**
         * Objeto para mostrar los textos de la parte superior del footer.
         *
         * @type {ITopTextContent[]}
         * @memberof BcfooterComponent
         */
        this.topTextContent = [
            {
                title: { text: '', link: '', onlyStyleText: false, isSelf: false },
                texts: [{ text: '', link: '', isSelf: false }],
            },
        ];
        /**
         * Array de textos que se muestra en la parte inferior izquierda del footer.
         *
         * @type {Array<string>}
         * @memberof BcfooterComponent
         */
        this.bottomTextLeftContent = [];
        /**
         * Array de textos que se muestra en la parte inferior derecha del footer.
         *
         * @type {Array<string>}
         * @memberof BcfooterComponent
         */
        this.bottomTextRighContent = [];
        /**
         * Array de objetos para las redes sociales. En name pueden ir facebook,twitter,linkedin,instagram,youtube.
         *
         * @type {ISocialNetBottomRight[]}
         * @memberof BcfooterComponent
         */
        this.socialNetBottomRight = [{ name: '', link: '', isSelf: false }];
        /**
         * Boolean que por defecto esta true y muestra el icono bancolombia en la parte inferior.
         *
         * @type {boolean}
         * @memberof BcfooterComponent
         */
        this.isBancoLogoBottom = false;
        /**
         * Boolean que por defecto esta true y muestra el icono vigilado en la parte inferior.
         *
         * @type {boolean}
         * @memberof BcfooterComponent
         */
        this.isVigilaLogoBottom = true;
        /**
         * Boolean que por defecto esta en false y cambia el background del footer a blanco.
         *
         * @type {boolean}
         * @memberof BcfooterComponent
         */
        this.bgWhite = false;
        /**
         * Define el tipo de color de fondo del footersi esta en true cambiara a gris.
         *
         * @type {boolean}
         * @memberof BcfooterComponent
         */
        this.bgGray = false;
        /**
         * String el cual nos permite alinear el logo de bancolombia a la izquierda( el que se encuentra cerca de los copyright).
         *
         * @type {string}
         * @memberof BcfooterComponent
         */
        this.icon = 'left';
        /**
         * Define el logo a usar en el footer.
         *
         * @type {string}
         * @memberof BcfooterComponent
         */
        this.logo = 'isotipo-bancolombia';
        this.methodCallout = new EventEmitter();
        this.bcFooterBehavior = new BcFooterBehavior();
    }
    methodCall(method) {
        this.methodCallout.emit(method);
    }
    ngAfterViewInit() {
        this.bcFooterBehavior.setId(this.componentId);
        this.bcFooterBehavior.setUp();
        this.bcFooterBehavior.createParameterizationStrokeColors(this.colorStroke);
    }
}
BcFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcFooterComponent, selector: "bc-footer", inputs: { componentId: "componentId", topLinks: "topLinks", topMethods: "topMethods", topTextContent: "topTextContent", bottomTextLeftContent: "bottomTextLeftContent", bottomTextRighContent: "bottomTextRighContent", socialNetBottomRight: "socialNetBottomRight", isBancoLogoBottom: "isBancoLogoBottom", isVigilaLogoBottom: "isVigilaLogoBottom", bgWhite: "bgWhite", bgGray: "bgGray", icon: "icon", logo: "logo", colorStroke: "colorStroke" }, outputs: { methodCallout: "methodCallout" }, ngImport: i0, template: "<div class=\"bc-footer\" style=\"overflow: hidden;\" [id]=\"componentId\" [ngClass]=\"{ 'bc-footer-white': bgWhite , 'bc-footer-gray': bgGray}\">\n    <div class=\"bc-container\">\n        <div class=\"bc-footer-top bc-row\" *ngIf=\"topTextContent[0].title.text\">\n            <div class=\"bc-footer-top-container\" *ngFor=\"let content of topTextContent; let i = index\">\n                <div class=\"bc-footer-top-container-t\">\n                    <h6 *ngIf=\"!content.title.onlyStyleText\">\n                        <ng-container *ngIf=\"!content.title.link\">\n                            {{ content.title.text }}\n                        </ng-container>\n                        <a *ngIf=\"content.title.link\" href=\"{{ content.title.link }}\"\n                            target=\"{{ content.title.isSelf ? '' : 'blank' }}\">\n                            {{ content.title.text }}\n                        </a>\n                    </h6>\n                    <h6 *ngIf=\"content.title.onlyStyleText\">\n                        <ng-container *ngIf=\"!content.title.link\">\n                            {{ content.title.text }}\n                        </ng-container>\n                        <a *ngIf=\"content.title.link\" href=\"{{ content.title.link }}\"\n                            target=\"{{ content.title.isSelf ? '' : 'blank' }}\">\n                            {{ content.title.text }}\n                        </a>\n                    </h6>\n                </div>\n                <div class=\"bc-footer-top-container-p\" *ngIf=\"content.texts\">\n                    <ng-container *ngFor=\"let p of content.texts\">\n                        <a  [href]=\"p.link ? p.link: '#' \" target=\"{{ p.isSelf ? '' : 'blank' }}\">\n                            {{ p.text }}\n                        </a>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"bc-footer-top-links bc-row bc-flex bc-justify-content-md-flex-end bc-direction-xs-column\n        bc-padding-top-3\" *ngIf=\"topLinks.links[0].text\">\n        <div class=\"bc-footer-top-links-ca\" *ngFor=\"let content of topLinks.links; let i = index\">\n            <a *ngIf=\"content.link != '' && content.link != null\" class=\"bc-footer-top-links-ca-a\" [href]=\"content.link\"\n                target=\"{{ content.isSelf ? '' : '_blank' }}\">\n                {{ content.text }}\n            </a>\n\n            <a *ngIf=\"content.method != '' && content.method != null\" class=\"bc-footer-top-links-ca-a\"\n                (click)=\"methodCall(content.method)\">\n                {{ content.text }}\n            </a>\n        </div>\n    </div>\n    <div class=\"bc-footer-divisor\" *ngIf=\"topLinks.links[0].text || topTextContent[0].title.text\" ></div>\n    <div class=\"bc-footer-bottom-left\">\n        <div class=\"bc-footer-bottom-left-icon\" *ngIf=\"icon == 'left'\">\n            <bc-icon aria-hidden=\"true\" size=\"md\" aria-label=\"footer-logo1\">\n                {{logo}}\n            </bc-icon>\n        </div>\n        <div class=\"bc-footer-bottom-left-side bc-col-sm-8 bc-col-md-5 bc-col-lg-8\">\n            <div class=\"bc-footer-bottom-top-icon\" *ngIf=\"isBancoLogoBottom\">\n                <img alt=\"\" src=\"assets/icons/logos/bancolombia-horizontal.svg\">\n            </div>\n            <p *ngFor=\"let text of bottomTextLeftContent\" [innerHTML]=\"text\">\n            </p>\n            <div class=\"bc-footer-bottom-left-side-vigilant\" *ngIf=\"isVigilaLogoBottom\">\n                <img alt=\"\" src=\"assets/icons/logos/logo-vigilado.svg\">\n            </div>\n        </div>\n        <div class=\"bc-footer-bottom-right bc-col-sm-3 bc-col-md-5 bc-col-lg-3\">\n            <div class=\"bc-footer-bottom-right-network-icons\" *ngIf=\"socialNetBottomRight[0]\" >\n                <a *ngFor=\"let social of socialNetBottomRight\" href=\"{{ social.link }}\"\n                    target=\"{{ social.isSelf ? '' : 'blank' }}\">\n                    <bc-icon aria-hidden=\"true\">\n                        {{ social.name }}\n                    </bc-icon>\n                </a>\n            </div>\n            <div class=\"bc-footer-bottom-right-text\" *ngIf=\"bottomTextRighContent.length > 0\">\n                <p *ngFor=\"let text of bottomTextRighContent\">{{ text }}</p>\n            </div>\n            <svg id=\"bc-footer-stroke\" class=\"bc-footer-stroke-colors\" width=\"420\" height=\"155\" viewBox=\"0 0 420 155\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect width=\"420\" height=\"155\"/>\n                <path id=\"color1\" d=\"M11.2288 128.765C10.5005 128.765 9.75837 128.571 9.08558 128.169C7.12271 126.983 6.49848 124.43 7.68452 122.467L8.27408 121.496C8.46828 121.177 8.74572 120.713 9.09945 120.234L10.8751 117.82C11.7837 116.711 12.72 115.566 13.8436 114.47C16.2712 112.008 18.8791 109.899 21.598 108.207C24.414 106.431 27.3548 104.947 30.3165 103.81C33.2851 102.679 36.3715 101.777 39.5205 101.125C42.6347 100.522 45.7836 100.127 48.9325 99.9464C52.2132 99.8077 55.3621 99.8632 58.3585 100.113C58.8787 100.154 59.3919 100.217 59.9052 100.272L61.9513 100.508L63.0471 100.675C63.3315 100.723 63.5743 100.758 63.817 100.793C64.3442 100.876 64.8713 100.952 65.3915 101.056L67.5832 101.5C67.9231 101.562 68.3601 101.66 68.8733 101.791L70.0871 102.09C70.7946 102.263 71.5298 102.443 72.3066 102.686L74.54 103.352L76.6416 104.073C78.8056 104.822 79.9569 107.187 79.2079 109.352C78.4588 111.516 76.0936 112.667 73.9296 111.918L71.9182 111.224L69.879 110.621C69.2964 110.44 68.7207 110.295 68.1104 110.142L66.848 109.83C66.5498 109.754 66.2862 109.691 66.0157 109.636L63.7754 109.185C63.3939 109.109 62.9847 109.046 62.5755 108.984C62.2911 108.942 62.0137 108.901 61.7363 108.852L60.7652 108.7L59.7456 108.582C59.5098 108.554 59.2393 108.526 58.9688 108.498C58.5388 108.45 58.1088 108.401 57.6718 108.367C55.0223 108.152 52.2132 108.103 49.3348 108.221C46.6159 108.374 43.8415 108.72 41.1504 109.247C38.487 109.802 35.8167 110.579 33.2781 111.55C30.8367 112.487 28.3883 113.728 26.0023 115.226C23.8106 116.593 21.702 118.299 19.7253 120.31L19.6559 120.38C18.8583 121.15 18.1023 122.079 17.2977 123.057L17.0619 123.341L15.751 125.172C15.6539 125.297 15.5152 125.54 15.3834 125.748L14.78 126.74C14.0032 128.03 12.6298 128.744 11.2218 128.744L11.2288 128.765Z\" fill=\"#9062CD\"/>\n                <path id=\"color2\" d=\"M129.514 144.912C128.522 144.912 127.517 144.738 126.532 144.378L69.0467 123.237C66.0781 122.176 62.8391 121.385 59.4821 120.914C52.8305 119.984 45.853 120.317 39.3124 121.878C34.6653 122.987 30.0043 120.116 28.8946 115.469C27.7849 110.822 30.6563 106.161 35.3034 105.051C43.9178 102.998 53.1079 102.561 61.8819 103.782C66.4111 104.42 70.8015 105.488 74.9492 106.972L86.4975 111.21L132.511 128.141C136.991 129.792 139.287 134.758 137.643 139.245C136.353 142.741 133.045 144.912 129.528 144.912H129.514Z\" fill=\"#FDDA23\"/>\n                <path id=\"color6\" d=\"M294.277 68.7694C292.834 68.7694 291.377 68.4087 290.032 67.6527C285.87 65.3083 284.4 60.0301 286.751 55.8685C292.723 45.2843 301.109 31.8216 313.038 21.5703C339.131 -0.8466 383.334 -2.7956 411.57 17.2146C415.468 19.9751 416.391 25.3712 413.623 29.2692C410.863 33.1672 405.467 34.0828 401.569 31.3223C379.783 15.8829 344.403 17.4226 324.309 34.6862C314.481 43.1342 307.42 54.4259 301.816 64.3581C300.228 67.1741 297.294 68.7555 294.277 68.7555V68.7694Z\" fill=\"#FF7E41\"/>\n                <path id=\"color5\" d=\"M233.664 130.721C231.992 130.721 230.348 129.91 229.35 128.412C227.761 126.033 228.406 122.814 230.785 121.226C231.951 120.449 239.74 114.623 246.544 109.477L249.603 106.716L253.833 102.152L255.914 99.4057L258.037 96.2776C258.481 95.6464 258.931 94.9459 259.41 94.1968C259.632 93.843 259.861 93.4962 260.083 93.1494L296.739 36.2262C296.982 35.8448 297.232 35.4633 297.495 35.0679L298.653 33.3686C299.035 32.7791 299.43 32.2658 299.777 31.8011L300.082 31.3988C300.214 31.2324 300.339 31.0659 300.464 30.8925C300.755 30.4972 301.095 30.0533 301.483 29.5886L301.872 29.1239C302.635 28.2014 303.425 27.2511 304.313 26.3079C305.159 25.3507 306.026 24.4976 306.859 23.6722L307.462 23.0757C310.035 20.6689 312.123 18.9142 314.218 17.3952L315.182 16.6739L317.942 14.8011L319.975 13.5527C320.238 13.3862 320.502 13.2267 320.779 13.0741L321.681 12.5747C326.793 9.68243 332.362 7.46987 338.195 5.99945C340.97 5.29892 343.786 6.98435 344.486 9.75873C345.187 12.5331 343.501 15.3491 340.727 16.0496C335.788 17.2911 331.086 19.1639 326.744 21.6192L325.815 22.1394C325.697 22.2087 325.579 22.285 325.454 22.3544L323.484 23.5682L321.14 25.1634L320.328 25.7669C318.601 27.0153 316.833 28.5066 314.599 30.5943L314.141 31.0451C313.372 31.8011 312.65 32.5155 312.012 33.2369L311.88 33.3825C311.208 34.09 310.542 34.8876 309.841 35.7338L309.418 36.2471C309.175 36.5314 308.974 36.8089 308.766 37.0863C308.613 37.2944 308.454 37.5025 308.294 37.7105L308.038 38.0504C307.76 38.418 307.497 38.7648 307.303 39.063L307.247 39.1463L306.089 40.8525C305.888 41.1577 305.673 41.4837 305.465 41.8166L268.787 98.7814C268.565 99.1282 268.35 99.4542 268.142 99.7802C267.636 100.571 267.109 101.389 266.554 102.187L264.265 105.544L261.616 108.998L256.719 114.249L252.973 117.599C251.503 118.708 238.54 128.502 236.535 129.841C235.654 130.43 234.656 130.714 233.664 130.714V130.721Z\" fill=\"#FDDA23\"/>\n                <path id=\"color3\" d=\"M182.733 149.157C182.054 149.157 181.402 149.136 180.757 149.115L178.301 149.039C177.781 149.025 177.185 149.011 176.546 148.942L172.225 148.595L167.842 148.026C167.613 147.999 167.377 147.971 167.148 147.929L166.219 147.763L162.82 147.145C157.514 146.022 153.263 144.863 149.455 143.504C147.762 142.942 146.042 142.304 144.378 141.687L98.3993 124.652C95.7151 123.653 94.3418 120.671 95.3337 117.987C96.3324 115.303 99.3149 113.929 101.999 114.921L147.984 131.956C149.649 132.573 151.223 133.163 152.756 133.662L152.881 133.704C156.231 134.903 160.046 135.944 164.88 136.97L168.813 137.685C168.91 137.699 169.007 137.713 169.104 137.719L173.405 138.274L177.518 138.6C177.809 138.628 178.183 138.642 178.579 138.649L181.083 138.725C181.908 138.753 182.692 138.781 183.399 138.753H183.51L186.749 138.69C187.387 138.663 188.025 138.614 188.664 138.573C189.073 138.545 189.482 138.517 189.898 138.489L191.396 138.392L192.915 138.219C193.304 138.17 193.713 138.122 194.129 138.08C194.76 138.011 195.391 137.934 196.016 137.851C196.605 137.747 197.195 137.657 197.777 137.56C199.303 137.31 200.739 137.081 202.112 136.755C204.901 136.09 207.696 137.81 208.362 140.598C209.027 143.386 207.307 146.181 204.519 146.847C202.778 147.263 201.079 147.541 199.442 147.804C198.859 147.901 198.27 147.992 197.687 148.096L197.493 148.123C196.765 148.22 196.03 148.304 195.301 148.387C194.913 148.429 194.524 148.477 194.136 148.519L192.215 148.734L190.564 148.845C190.155 148.872 189.773 148.9 189.385 148.921C188.643 148.976 187.894 149.025 187.152 149.06H187.013L183.753 149.122C183.399 149.136 183.052 149.143 182.713 149.143L182.733 149.157Z\" fill=\"#FF7E41\"/>\n                <path id=\"color4\" d=\"M230.085 144.649C226.964 144.649 223.954 142.956 222.414 140.001C220.201 135.771 221.845 130.541 226.083 128.335C236.182 123.064 245.094 116.1 252.571 107.638C253.161 106.966 253.75 106.251 254.347 105.537C254.687 105.128 255.027 104.718 255.373 104.309C255.477 104.177 255.588 104.052 255.699 103.921L255.859 103.726L258.058 100.806C258.571 100.154 259.098 99.3638 259.667 98.5176C259.903 98.1708 260.131 97.824 260.367 97.4772L261.56 95.6947L272.436 78.667C275.009 74.6441 280.357 73.465 284.38 76.0313C288.402 78.6046 289.581 83.9522 287.015 87.975L275.973 105.259L274.683 107.181C274.433 107.541 274.232 107.846 274.024 108.152C273.351 109.15 272.595 110.281 271.715 111.412L269.703 114.089C269.398 114.505 269.114 114.838 268.905 115.081L268.649 115.393C268.316 115.788 267.99 116.183 267.664 116.579C266.97 117.411 266.277 118.25 265.562 119.062C256.657 129.147 246.072 137.414 234.087 143.671C232.811 144.336 231.444 144.655 230.092 144.655L230.085 144.649Z\" fill=\"#9062CD\"/>\n            </svg>\n        </div>\n    </div>\n    \n</div>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-footer', template: "<div class=\"bc-footer\" style=\"overflow: hidden;\" [id]=\"componentId\" [ngClass]=\"{ 'bc-footer-white': bgWhite , 'bc-footer-gray': bgGray}\">\n    <div class=\"bc-container\">\n        <div class=\"bc-footer-top bc-row\" *ngIf=\"topTextContent[0].title.text\">\n            <div class=\"bc-footer-top-container\" *ngFor=\"let content of topTextContent; let i = index\">\n                <div class=\"bc-footer-top-container-t\">\n                    <h6 *ngIf=\"!content.title.onlyStyleText\">\n                        <ng-container *ngIf=\"!content.title.link\">\n                            {{ content.title.text }}\n                        </ng-container>\n                        <a *ngIf=\"content.title.link\" href=\"{{ content.title.link }}\"\n                            target=\"{{ content.title.isSelf ? '' : 'blank' }}\">\n                            {{ content.title.text }}\n                        </a>\n                    </h6>\n                    <h6 *ngIf=\"content.title.onlyStyleText\">\n                        <ng-container *ngIf=\"!content.title.link\">\n                            {{ content.title.text }}\n                        </ng-container>\n                        <a *ngIf=\"content.title.link\" href=\"{{ content.title.link }}\"\n                            target=\"{{ content.title.isSelf ? '' : 'blank' }}\">\n                            {{ content.title.text }}\n                        </a>\n                    </h6>\n                </div>\n                <div class=\"bc-footer-top-container-p\" *ngIf=\"content.texts\">\n                    <ng-container *ngFor=\"let p of content.texts\">\n                        <a  [href]=\"p.link ? p.link: '#' \" target=\"{{ p.isSelf ? '' : 'blank' }}\">\n                            {{ p.text }}\n                        </a>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"bc-footer-top-links bc-row bc-flex bc-justify-content-md-flex-end bc-direction-xs-column\n        bc-padding-top-3\" *ngIf=\"topLinks.links[0].text\">\n        <div class=\"bc-footer-top-links-ca\" *ngFor=\"let content of topLinks.links; let i = index\">\n            <a *ngIf=\"content.link != '' && content.link != null\" class=\"bc-footer-top-links-ca-a\" [href]=\"content.link\"\n                target=\"{{ content.isSelf ? '' : '_blank' }}\">\n                {{ content.text }}\n            </a>\n\n            <a *ngIf=\"content.method != '' && content.method != null\" class=\"bc-footer-top-links-ca-a\"\n                (click)=\"methodCall(content.method)\">\n                {{ content.text }}\n            </a>\n        </div>\n    </div>\n    <div class=\"bc-footer-divisor\" *ngIf=\"topLinks.links[0].text || topTextContent[0].title.text\" ></div>\n    <div class=\"bc-footer-bottom-left\">\n        <div class=\"bc-footer-bottom-left-icon\" *ngIf=\"icon == 'left'\">\n            <bc-icon aria-hidden=\"true\" size=\"md\" aria-label=\"footer-logo1\">\n                {{logo}}\n            </bc-icon>\n        </div>\n        <div class=\"bc-footer-bottom-left-side bc-col-sm-8 bc-col-md-5 bc-col-lg-8\">\n            <div class=\"bc-footer-bottom-top-icon\" *ngIf=\"isBancoLogoBottom\">\n                <img alt=\"\" src=\"assets/icons/logos/bancolombia-horizontal.svg\">\n            </div>\n            <p *ngFor=\"let text of bottomTextLeftContent\" [innerHTML]=\"text\">\n            </p>\n            <div class=\"bc-footer-bottom-left-side-vigilant\" *ngIf=\"isVigilaLogoBottom\">\n                <img alt=\"\" src=\"assets/icons/logos/logo-vigilado.svg\">\n            </div>\n        </div>\n        <div class=\"bc-footer-bottom-right bc-col-sm-3 bc-col-md-5 bc-col-lg-3\">\n            <div class=\"bc-footer-bottom-right-network-icons\" *ngIf=\"socialNetBottomRight[0]\" >\n                <a *ngFor=\"let social of socialNetBottomRight\" href=\"{{ social.link }}\"\n                    target=\"{{ social.isSelf ? '' : 'blank' }}\">\n                    <bc-icon aria-hidden=\"true\">\n                        {{ social.name }}\n                    </bc-icon>\n                </a>\n            </div>\n            <div class=\"bc-footer-bottom-right-text\" *ngIf=\"bottomTextRighContent.length > 0\">\n                <p *ngFor=\"let text of bottomTextRighContent\">{{ text }}</p>\n            </div>\n            <svg id=\"bc-footer-stroke\" class=\"bc-footer-stroke-colors\" width=\"420\" height=\"155\" viewBox=\"0 0 420 155\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect width=\"420\" height=\"155\"/>\n                <path id=\"color1\" d=\"M11.2288 128.765C10.5005 128.765 9.75837 128.571 9.08558 128.169C7.12271 126.983 6.49848 124.43 7.68452 122.467L8.27408 121.496C8.46828 121.177 8.74572 120.713 9.09945 120.234L10.8751 117.82C11.7837 116.711 12.72 115.566 13.8436 114.47C16.2712 112.008 18.8791 109.899 21.598 108.207C24.414 106.431 27.3548 104.947 30.3165 103.81C33.2851 102.679 36.3715 101.777 39.5205 101.125C42.6347 100.522 45.7836 100.127 48.9325 99.9464C52.2132 99.8077 55.3621 99.8632 58.3585 100.113C58.8787 100.154 59.3919 100.217 59.9052 100.272L61.9513 100.508L63.0471 100.675C63.3315 100.723 63.5743 100.758 63.817 100.793C64.3442 100.876 64.8713 100.952 65.3915 101.056L67.5832 101.5C67.9231 101.562 68.3601 101.66 68.8733 101.791L70.0871 102.09C70.7946 102.263 71.5298 102.443 72.3066 102.686L74.54 103.352L76.6416 104.073C78.8056 104.822 79.9569 107.187 79.2079 109.352C78.4588 111.516 76.0936 112.667 73.9296 111.918L71.9182 111.224L69.879 110.621C69.2964 110.44 68.7207 110.295 68.1104 110.142L66.848 109.83C66.5498 109.754 66.2862 109.691 66.0157 109.636L63.7754 109.185C63.3939 109.109 62.9847 109.046 62.5755 108.984C62.2911 108.942 62.0137 108.901 61.7363 108.852L60.7652 108.7L59.7456 108.582C59.5098 108.554 59.2393 108.526 58.9688 108.498C58.5388 108.45 58.1088 108.401 57.6718 108.367C55.0223 108.152 52.2132 108.103 49.3348 108.221C46.6159 108.374 43.8415 108.72 41.1504 109.247C38.487 109.802 35.8167 110.579 33.2781 111.55C30.8367 112.487 28.3883 113.728 26.0023 115.226C23.8106 116.593 21.702 118.299 19.7253 120.31L19.6559 120.38C18.8583 121.15 18.1023 122.079 17.2977 123.057L17.0619 123.341L15.751 125.172C15.6539 125.297 15.5152 125.54 15.3834 125.748L14.78 126.74C14.0032 128.03 12.6298 128.744 11.2218 128.744L11.2288 128.765Z\" fill=\"#9062CD\"/>\n                <path id=\"color2\" d=\"M129.514 144.912C128.522 144.912 127.517 144.738 126.532 144.378L69.0467 123.237C66.0781 122.176 62.8391 121.385 59.4821 120.914C52.8305 119.984 45.853 120.317 39.3124 121.878C34.6653 122.987 30.0043 120.116 28.8946 115.469C27.7849 110.822 30.6563 106.161 35.3034 105.051C43.9178 102.998 53.1079 102.561 61.8819 103.782C66.4111 104.42 70.8015 105.488 74.9492 106.972L86.4975 111.21L132.511 128.141C136.991 129.792 139.287 134.758 137.643 139.245C136.353 142.741 133.045 144.912 129.528 144.912H129.514Z\" fill=\"#FDDA23\"/>\n                <path id=\"color6\" d=\"M294.277 68.7694C292.834 68.7694 291.377 68.4087 290.032 67.6527C285.87 65.3083 284.4 60.0301 286.751 55.8685C292.723 45.2843 301.109 31.8216 313.038 21.5703C339.131 -0.8466 383.334 -2.7956 411.57 17.2146C415.468 19.9751 416.391 25.3712 413.623 29.2692C410.863 33.1672 405.467 34.0828 401.569 31.3223C379.783 15.8829 344.403 17.4226 324.309 34.6862C314.481 43.1342 307.42 54.4259 301.816 64.3581C300.228 67.1741 297.294 68.7555 294.277 68.7555V68.7694Z\" fill=\"#FF7E41\"/>\n                <path id=\"color5\" d=\"M233.664 130.721C231.992 130.721 230.348 129.91 229.35 128.412C227.761 126.033 228.406 122.814 230.785 121.226C231.951 120.449 239.74 114.623 246.544 109.477L249.603 106.716L253.833 102.152L255.914 99.4057L258.037 96.2776C258.481 95.6464 258.931 94.9459 259.41 94.1968C259.632 93.843 259.861 93.4962 260.083 93.1494L296.739 36.2262C296.982 35.8448 297.232 35.4633 297.495 35.0679L298.653 33.3686C299.035 32.7791 299.43 32.2658 299.777 31.8011L300.082 31.3988C300.214 31.2324 300.339 31.0659 300.464 30.8925C300.755 30.4972 301.095 30.0533 301.483 29.5886L301.872 29.1239C302.635 28.2014 303.425 27.2511 304.313 26.3079C305.159 25.3507 306.026 24.4976 306.859 23.6722L307.462 23.0757C310.035 20.6689 312.123 18.9142 314.218 17.3952L315.182 16.6739L317.942 14.8011L319.975 13.5527C320.238 13.3862 320.502 13.2267 320.779 13.0741L321.681 12.5747C326.793 9.68243 332.362 7.46987 338.195 5.99945C340.97 5.29892 343.786 6.98435 344.486 9.75873C345.187 12.5331 343.501 15.3491 340.727 16.0496C335.788 17.2911 331.086 19.1639 326.744 21.6192L325.815 22.1394C325.697 22.2087 325.579 22.285 325.454 22.3544L323.484 23.5682L321.14 25.1634L320.328 25.7669C318.601 27.0153 316.833 28.5066 314.599 30.5943L314.141 31.0451C313.372 31.8011 312.65 32.5155 312.012 33.2369L311.88 33.3825C311.208 34.09 310.542 34.8876 309.841 35.7338L309.418 36.2471C309.175 36.5314 308.974 36.8089 308.766 37.0863C308.613 37.2944 308.454 37.5025 308.294 37.7105L308.038 38.0504C307.76 38.418 307.497 38.7648 307.303 39.063L307.247 39.1463L306.089 40.8525C305.888 41.1577 305.673 41.4837 305.465 41.8166L268.787 98.7814C268.565 99.1282 268.35 99.4542 268.142 99.7802C267.636 100.571 267.109 101.389 266.554 102.187L264.265 105.544L261.616 108.998L256.719 114.249L252.973 117.599C251.503 118.708 238.54 128.502 236.535 129.841C235.654 130.43 234.656 130.714 233.664 130.714V130.721Z\" fill=\"#FDDA23\"/>\n                <path id=\"color3\" d=\"M182.733 149.157C182.054 149.157 181.402 149.136 180.757 149.115L178.301 149.039C177.781 149.025 177.185 149.011 176.546 148.942L172.225 148.595L167.842 148.026C167.613 147.999 167.377 147.971 167.148 147.929L166.219 147.763L162.82 147.145C157.514 146.022 153.263 144.863 149.455 143.504C147.762 142.942 146.042 142.304 144.378 141.687L98.3993 124.652C95.7151 123.653 94.3418 120.671 95.3337 117.987C96.3324 115.303 99.3149 113.929 101.999 114.921L147.984 131.956C149.649 132.573 151.223 133.163 152.756 133.662L152.881 133.704C156.231 134.903 160.046 135.944 164.88 136.97L168.813 137.685C168.91 137.699 169.007 137.713 169.104 137.719L173.405 138.274L177.518 138.6C177.809 138.628 178.183 138.642 178.579 138.649L181.083 138.725C181.908 138.753 182.692 138.781 183.399 138.753H183.51L186.749 138.69C187.387 138.663 188.025 138.614 188.664 138.573C189.073 138.545 189.482 138.517 189.898 138.489L191.396 138.392L192.915 138.219C193.304 138.17 193.713 138.122 194.129 138.08C194.76 138.011 195.391 137.934 196.016 137.851C196.605 137.747 197.195 137.657 197.777 137.56C199.303 137.31 200.739 137.081 202.112 136.755C204.901 136.09 207.696 137.81 208.362 140.598C209.027 143.386 207.307 146.181 204.519 146.847C202.778 147.263 201.079 147.541 199.442 147.804C198.859 147.901 198.27 147.992 197.687 148.096L197.493 148.123C196.765 148.22 196.03 148.304 195.301 148.387C194.913 148.429 194.524 148.477 194.136 148.519L192.215 148.734L190.564 148.845C190.155 148.872 189.773 148.9 189.385 148.921C188.643 148.976 187.894 149.025 187.152 149.06H187.013L183.753 149.122C183.399 149.136 183.052 149.143 182.713 149.143L182.733 149.157Z\" fill=\"#FF7E41\"/>\n                <path id=\"color4\" d=\"M230.085 144.649C226.964 144.649 223.954 142.956 222.414 140.001C220.201 135.771 221.845 130.541 226.083 128.335C236.182 123.064 245.094 116.1 252.571 107.638C253.161 106.966 253.75 106.251 254.347 105.537C254.687 105.128 255.027 104.718 255.373 104.309C255.477 104.177 255.588 104.052 255.699 103.921L255.859 103.726L258.058 100.806C258.571 100.154 259.098 99.3638 259.667 98.5176C259.903 98.1708 260.131 97.824 260.367 97.4772L261.56 95.6947L272.436 78.667C275.009 74.6441 280.357 73.465 284.38 76.0313C288.402 78.6046 289.581 83.9522 287.015 87.975L275.973 105.259L274.683 107.181C274.433 107.541 274.232 107.846 274.024 108.152C273.351 109.15 272.595 110.281 271.715 111.412L269.703 114.089C269.398 114.505 269.114 114.838 268.905 115.081L268.649 115.393C268.316 115.788 267.99 116.183 267.664 116.579C266.97 117.411 266.277 118.25 265.562 119.062C256.657 129.147 246.072 137.414 234.087 143.671C232.811 144.336 231.444 144.655 230.092 144.655L230.085 144.649Z\" fill=\"#9062CD\"/>\n            </svg>\n        </div>\n    </div>\n    \n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], topLinks: [{
                type: Input
            }], topMethods: [{
                type: Input
            }], topTextContent: [{
                type: Input
            }], bottomTextLeftContent: [{
                type: Input
            }], bottomTextRighContent: [{
                type: Input
            }], socialNetBottomRight: [{
                type: Input
            }], isBancoLogoBottom: [{
                type: Input
            }], isVigilaLogoBottom: [{
                type: Input
            }], bgWhite: [{
                type: Input
            }], bgGray: [{
                type: Input
            }], icon: [{
                type: Input
            }], logo: [{
                type: Input
            }], colorStroke: [{
                type: Input
            }], methodCallout: [{
                type: Output
            }] } });

/**
 * Importa el componente BcFooter con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-footer></bc-footer>
 *
 * @param  [topTextContent] : [{
 *      title: { text: '', link: '' (opcional), onlyStyleText:false (opcional), isSelf: false (opcional) },
 *       texts: [ { text: '', link:'',(opcional) isSelf: false (opcional) },]
 *   }] (opcional) : Objeto para mostrar los textos de arriba del footer
 * @param  [bottomTextLeftContent](opcional): Array de textos que se muestra en la parte
 * inferior izquierda del footer
 * @param  [bottomTextRighContent](opcional): Array de textos que se muestra en la parte
 * inferior derecha del footer
 * @param  [socialNetBottomRight : [{ name:'', link:'', isSelf:false (opcional) }]]: Array de
 * objetos para las redes sociales. En name pueden ir facebook,twitter,linkedin,instagram,youtube
 * @param [isBancoLogoBottom](opcional): Boolean que por defecto esta true y muestra el icono
 * bancolombia en la parte inferior
 * @param [isVigilaLogoBottom](opcional): Boolean que por defecto esta true y muestra el icono
 * vigilado en la parte inferior
 * @param [id](opcional): string : Indica el id del componente
 *
 *
 * @example
 *
 * <bc-footer [topTextContent]="[
 * {
 *    title: { text: 'Titulo columna 01' },
 *     texts: [
 * { text: 'Lorem ipsum' },
 * { text: 'Lorem ipsum' },
 *  { text: 'Lorem ipsum' },
 *  { text: 'Lorem ipsum' }, ]
 * },
 * {
 *    title: { text: 'Titulo columna 02' },
 *   texts: [ { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' } ]
 * },
 * {
 *     title: { text: 'Titulo columna 03' },
 *     texts: [ { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' } ]
 * },
 * {
 *     title: { text: 'Titulo columna 04' },
 *     texts: [ { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' } ]
 * }]" [socialNetBottomRight]="[
 *     { name:'facebook', link:'http://google.com' },
 *     { name:'twitter', link:'http://google.com' },
 *     { name:'linkedin', link:'http://google.com' },
 *     { name:'instagram', link:'http://google.com' },
 *     { name:'youtube', link:'http://google.com' }
 * ]" [bottomTextRighContent]="['Dirección IP 190.144.71.250','Última visita Jueves 31 de Julio de 2019 10:06 a.m']"
 *     [bottomTextLeftContent]="['Copyright © 2020 Grupo Bancolombia. Sed egestas, ante et vulputate volutpat, eros',
 * 'pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus ',
 * 'adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit ',
 * 'tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis.']">
 * </bc-footer>
 *
 * @author: Bancolombia S.A
 */
class BcFooterModule {
}
BcFooterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcFooterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterModule, declarations: [BcFooterComponent], imports: [CommonModule, BcIconModule, BcAccordionModule], exports: [BcFooterComponent] });
BcFooterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterModule, imports: [[CommonModule, BcIconModule, BcAccordionModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcFooterComponent],
                    imports: [CommonModule, BcIconModule, BcAccordionModule],
                    exports: [BcFooterComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcFooterComponent, BcFooterModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-footer.mjs.map
