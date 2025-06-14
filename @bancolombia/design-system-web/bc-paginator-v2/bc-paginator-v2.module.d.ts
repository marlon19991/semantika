import * as i0 from "@angular/core";
import * as i1 from "./bc-paginator-v2.component";
import * as i2 from "@angular/common";
import * as i3 from "@bancolombia/design-system-web/bc-button";
import * as i4 from "@bancolombia/design-system-web/bc-icon";
/**
 * Importa componente paginador con
 * los diseños de Bancolombia S.A.
 * @componente <bc-paginator-v2></bc-paginator-v2>
 * @fileoverview Corresponde a un elemento de un paginador, que puede admitir cantidad paginas para paginar.
 * @description Para cambiar de pagina de un contenido dado el paginador expone un evento numerico onChangePage
 * el cual indica el indice de la pagina seleccionada en el paginador.
 * @param type: string - Indica el tipo de paginador. los diferente tipos se eligen con los siguientes textos
 * @param onChangePage: Event():number - Evento que se ejecuta cuando seleccionan una pagina ya sea desde los botones o paginas, el
 * parametro que emite es numerico e indica la pagina seleccionada.
 * @example
 * <bc-paginator-v2
 *      type="basic" *
 *      (onChangePage)="onPageChangeExample($event)">
 * </bc-paginator-v2>
 *
 * @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
export declare class BcPaginatorV2Module {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPaginatorV2Module, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcPaginatorV2Module, [typeof i1.BcPaginatorV2Component], [typeof i2.CommonModule, typeof i3.BcButtonModule, typeof i4.BcIconModule], [typeof i1.BcPaginatorV2Component]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcPaginatorV2Module>;
}
