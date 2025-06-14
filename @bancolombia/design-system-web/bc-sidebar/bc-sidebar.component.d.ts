import { OnInit, SimpleChange } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcSidebarComponent implements OnInit {
    private bcHelperService;
    bcSidebarBehavior: any;
    constructor(bcHelperService: BcHelperService);
    /**
     * Esta entrada permite indicar un id único al componente dentro del DOM.
     *
     * @type {string}
     * @memberof BcSidebarComponent
     */
    id: string;
    /**
       * Entrada que permite indicar el tipo de Sidebar.
       *
       * @type {string}
       * @memberof BcSidebarComponent
       */
    tipoSidebar: 'fixed' | 'collapsible' | 'states' | 'hide';
    /**
    * Indica el aria-label para el comportamiento del componente.
    */
    ariaLabel: string;
    /**
     * Abre el offcanvas.
     *
     * @memberof BcOffCanvasComponent
     */
    openSidebarHide(): void;
    /**
     *
     *
     * @type {Array<any>}
     * @memberof BcSidebarComponent
     */
    itemsli: Array<any>;
    bcSidebarComponent: BcSidebarComponent;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcSidebarComponent, "bc-sidebar", never, { "id": "id"; "tipoSidebar": "tipoSidebar"; "ariaLabel": "aria-label"; "itemsli": "itemsli"; }, {}, never, ["[mainContent]", "[sidebarContent]"]>;
}
