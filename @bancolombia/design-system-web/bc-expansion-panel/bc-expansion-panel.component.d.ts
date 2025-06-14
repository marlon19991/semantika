import { AfterViewInit, EventEmitter } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Importa el expansion panel  con los diseños de Bancolombia S.A.
 * Sirve para mostrar pequeños datos sobre un producto o una transacción.
 * @export
 * @class BcExpansionPanelComponent
 * @implements {AfterViewInit}
 */
export declare class BcExpansionPanelComponent implements AfterViewInit {
    private bcHelperService;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcfooterComponent
     */
    componentId: string;
    /**
     * Evento que se ejecuta cuando se expande.
     *
     * @type {EventEmitter}
     * @memberof BcExpansionPanelComponent
     */
    expanded: EventEmitter<string>;
    /**
     * Evento que se ejecuta cuando se contrae.
     *
     * @type {EventEmitter}
     * @memberof BcExpansionPanelComponent
     */
    contracted: EventEmitter<string>;
    bcExpansionPanelBehavior: any;
    constructor(bcHelperService: BcHelperService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcExpansionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcExpansionPanelComponent, "bc-expansion-panel", never, { "componentId": "componentId"; }, { "expanded": "expanded"; "contracted": "contracted"; }, never, ["*"]>;
}
