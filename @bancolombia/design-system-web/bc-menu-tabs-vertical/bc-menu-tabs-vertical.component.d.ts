import { AfterViewInit } from '@angular/core';
import { BcMenuTabsVerticalBehavior, BcMenuTabsVerticalItemConfig } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcMenuTabsVerticalComponent implements AfterViewInit {
    private bcHelperService;
    /**
     * Id del elemento
     *
     * @memberof BcMenuTabsVerticalComponent
     */
    componentId: string;
    /**
     * Listado de items a renderizar en el menú
     *
     * @memberof BcMenuTabsVerticalComponent
     */
    menuItems: BcMenuTabsVerticalItemConfig[];
    /**
     * Orientación del menú, puede ser: left o right.
     *
     * @memberof BcMenuTabsVerticalComponent
     */
    orientation: 'left' | 'right';
    bcMenuTabsVerticalBehavior: BcMenuTabsVerticalBehavior;
    constructor(bcHelperService: BcHelperService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcMenuTabsVerticalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcMenuTabsVerticalComponent, "bc-menu-tabs-vertical", never, { "componentId": "componentId"; "menuItems": "menuItems"; "orientation": "orientation"; }, {}, never, [".bc-menu-tabs-vertical-content"]>;
}
