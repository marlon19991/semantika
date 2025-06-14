import { AfterViewInit } from '@angular/core';
import { BcSkipLinkBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcSkipLinkComponent implements AfterViewInit {
    private bcHelperService;
    constructor(bcHelperService: BcHelperService);
    /**
   * Esta entrada permite indicar un id único al componente dentro del DOM.
   *
   * @type {string}
   * @memberof BcSkipLinkComponent
   */
    id: string;
    /**
     * Texto en el label.
     *
     * @type {string}
     * @memberof BcSkipLinkComponent
     */
    textLink: string;
    /**
     * se indica a que id se va a trasladar la página
     *
     * @type {string}
     * @memberof BcSkipLinkComponent
     */
    referenceId: string;
    skipLinkBehavior: BcSkipLinkBehavior;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSkipLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcSkipLinkComponent, "bc-skip-link", never, { "id": "id"; "textLink": "text-link"; "referenceId": "refence-id"; }, {}, never, never>;
}
