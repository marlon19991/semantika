import { TemplateRef } from '@angular/core';
import { AlertInfo } from './models/template.interface';
import { FootText } from './models/footer.interface';
import { Logo } from './models/logo.interface';
import { Title } from './models/title.interface';
import { Stepper } from './models/stepper.interface';
import * as i0 from "@angular/core";
/**
 * Componente template autenticacion
 *
 * @export
 * @class BcTemplateAuthenticationComponent
 */
export declare class BcTemplateAuthenticationComponent {
    /**
     * Titulo elemento .
     *
     * @type {object}
     * @memberof BcTemplateAuthenticationComponent
     */
    title: Title;
    /**
     * Subtitulo del elemento .
     *
     * @type {object}
     * @memberof BcTemplateAuthenticationComponent
     */
    subtitle: {
        subtitle: string;
        haveSubtitle: boolean;
        subtitleClass: string;
    };
    /**
     * Logo parte superior del elemento .
     *
     * @type {object}
     * @memberof BcTemplateAuthenticationComponent
     */
    logo: Logo;
    /**
     * Trazo  del elemento .
     *
     * @type {string}
     * @memberof BcTemplateAuthenticationComponent
     */
    trazo: string;
    /**
     *Stepper  del elemento .
     *
     * @type {object}
     * @memberof BcTemplateAuthenticationComponent
     */
    stepper: Stepper;
    /**
     * Shortcuts del elemento .
     *
     * @type {boolean}
     * @memberof BcTemplateAuthenticationComponent
     */
    haveShortcuts: boolean;
    /**
     * componente del elemento .
     *
     * @type {ElementRef}
     * @memberof BcTemplateAuthenticationComponent
     */
    component: TemplateRef<any>;
    /**
     * Shortcuts del elemento .
     *
     * @type {ElementRef}
     * @memberof BcTemplateAuthenticationComponent
     */
    shortcuts: TemplateRef<any>;
    /**
     * Alerta del elemento .
     *
     * @type {object}
     * @memberof BcTemplateAuthenticationComponent
     */
    alertInfo: AlertInfo;
    /**
     * Footer del elemento .
     *
     * @type {object}
     * @memberof BcTemplateAuthenticationComponent
     */
    footerText: FootText;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTemplateAuthenticationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTemplateAuthenticationComponent, "bc-template-authentication", never, { "title": "title"; "subtitle": "subtitle"; "logo": "logo"; "trazo": "trazo"; "stepper": "stepper"; "haveShortcuts": "haveShortcuts"; "component": "component"; "shortcuts": "shortcuts"; "alertInfo": "alertInfo"; "footerText": "footerText"; }, {}, never, never>;
}
