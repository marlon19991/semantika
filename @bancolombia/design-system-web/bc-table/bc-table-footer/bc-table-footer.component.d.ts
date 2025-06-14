import { BcPaginatorComponent } from '@bancolombia/design-system-web/bc-paginator';
import * as i0 from "@angular/core";
export declare class BcTableFooterComponent {
    /**
     * Array con los valores totales que se muestran en el footer de la tabla.
     *
     * @type {Array<BcTableTotalAmount>}
     * @memberof BcTableFooterComponent
     */
    totalAmounts: Array<BcTableTotalAmount>;
    /**
     * content que hace referencia al paginador alojado dentro del header
     *  @memberof BcTableFooterComponent
     */
    content: BcPaginatorComponent;
    ngAfterViewInit(): void;
    /**
     * metodo para obtener la referencia del paginador sino lo encuentra
     * lo retorna como undefined
     * @returns paginador o undefined
     */
    getPaginator(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTableFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTableFooterComponent, "bc-table-footer", never, { "totalAmounts": "totalAmounts"; }, {}, ["content"], ["*"]>;
}
/**
 * Interfaz de los valores totales.
 *
 * @export
 * @interface BcTableTotalAmount
 */
export interface BcTableTotalAmount {
    title?: string;
    amount?: string;
}
