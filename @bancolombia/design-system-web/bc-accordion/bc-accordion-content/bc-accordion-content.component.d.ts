import { ElementRef } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { BcAccordionContentDirDirective } from './bc-accordion-content-dir.directive';
import * as i0 from "@angular/core";
/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 *
 * @export
 * @class BcAccordionContentComponent
 */
export declare class BcAccordionContentComponent {
    private bcHelperService;
    private elementHTML;
    componentId: string;
    content: BcAccordionContentDirDirective;
    private _wasOpened;
    constructor(bcHelperService: BcHelperService, elementHTML: ElementRef);
    isActive(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAccordionContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcAccordionContentComponent, "bc-accordion-content", never, { "componentId": "componentId"; }, {}, ["content"], ["*"]>;
}
