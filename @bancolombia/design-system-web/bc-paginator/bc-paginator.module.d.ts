import * as i0 from "@angular/core";
import * as i1 from "./bc-paginator.component";
import * as i2 from "@angular/common";
import * as i3 from "@bancolombia/design-system-web/bc-button";
import * as i4 from "@bancolombia/design-system-web/bc-icon";
/**
 * Importa componente paginador con
 * los diseños de Bancolombia S.A.
 * @componente <bc-paginator></bc-paginator>
 * @fileoverview Corresponde a un elemento de un paginador, que puede admitir cantidad paginas para paginar.
 * @description Para cambiar de pagina de un contenido dado el paginador expone un evento numerico onChangePage
 * el cual indica el indice de la pagina seleccionada en el paginador.
 * @param type: string - Indica el tipo de paginador. los diferente tipos se eligen con los siguientes textos
 * 'basic', 'simple', 'default', 'full', 'bullet'
 * El paginador tipo 'bullet' solo puede paginar hasta 5 paginas.
 * @param showNumber: boolean - Indica al paginador si muestra a o no los numeros indicadores de las paginas, para los paginadores
 * de tipo basic y simple este parametro esta en falso por defecto, este parametro admite booleano false o true
 * @param pageSize: string - Indica al paginador la cantidad maxima de paginas que va a paginar, admite texto numerico
 * @param onChangePage: Event():number - Evento que se ejecuta cuando seleccionan una pagina ya sea desde los botones o paginas, el
 * parametro que emite es numerico e indica la pagina seleccionada.
 * @example
 * <bc-paginator
 *      type="basic"
 *      showNumbers=true
 *      pageSize="maximumPages"
 *      (onChangePage)="onPageChangeExample($event)">
 * </bc-paginator>
 *
 * @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
export declare class BcPaginatorModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPaginatorModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcPaginatorModule, [typeof i1.BcPaginatorComponent], [typeof i2.CommonModule, typeof i3.BcButtonModule, typeof i4.BcIconModule], [typeof i1.BcPaginatorComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcPaginatorModule>;
}
