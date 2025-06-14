import * as i0 from "@angular/core";
import * as i1 from "./directives/bc-list-row-table.directive";
import * as i2 from "./directives/bc-list-row.directive";
import * as i3 from "./directives/bc-list-column.directive";
import * as i4 from "./directives/bc-list-column-content-data.directive";
import * as i5 from "@bancolombia/design-system-web/bc-icon";
import * as i6 from "@bancolombia/design-system-web/bc-checkbox";
import * as i7 from "@bancolombia/design-system-web/bc-float-menu";
import * as i8 from "@angular/common";
import * as i9 from "@bancolombia/design-system-web/bc-tag";
import * as i10 from "@bancolombia/design-system-web/bc-radio";
/**
 * Importa directivas de estilos para el bc-list-row con los diseños de Bancolombia S.A.
 *
 * @example
 *  <h4 class="bc-margin-top-6 bc-margin-bottom-2">List Row con checkbox y menú</h4>
 * <table bc-list-row-table>
 *   <tr bc-list-row [showElevation]="true" id="table_1_row_1">
 *     <td bc-column-content [actionColumn]="true" alignment="right">
 *       <bc-checkbox class="col-4 offset-5"></bc-checkbox>
 *     </td>
 *     <td bc-column-content [hasBrand]="true">
 *       <div>
 *         <bc-icon [attr.id]="'listRowIcon_1'" class="bc-list-row-content-figure" size="xl" width="70px"
 *           [name]="'il-master'" aria-hidden="true" [aria-label]="'icono mastercard'"></bc-icon>
 *       </div>
 *       <div>
 *         hola mundo
 *       </div>
 *     </td>
 *     <td bc-column-content [hasBrand]="true">
 *       <div>
 *         <bc-icon [attr.id]="'listRowIcon_1'" class="bc-list-row-content-figure" size="xl" width="70px"
 *           [name]="'il-master'" aria-hidden="true" [aria-label]="'icono mastercard'"></bc-icon>
 *       </div>
 *       <div class="bc-text-start" bc-column-content-data [hasTextToShrink]="true">
 *         <p #data>Datos de la tarjeta de credito</p>
 *         <p #data>Tarjeta de credito Oro</p>
 *       </div>
 *     </td>
 *     <td bc-column-content alignment="center" [displayPrimary]="true">hola mundo</td>
 *     <td bc-column-content>
 *       <bc-tag [textElement]="'hola mundo'" componentId="bc-item-1" [status]="'disabled'" [typeButtonTag]="'secondary'"
 *         [iconLeft]="'calendar-alt'">
 *       </bc-tag>
 *     </td>
 *     <td bc-column-content [displayPrimary]="true">
 *       <div class="bc-text-start" bc-column-content-data>
 *         <p >Label 5</p>
 *         <p >0.000,00</p>
 *       </div>
 *     </td>
 *     <td bc-column-content alignment="center" [displayPrimary]="true">hola mundo</td>
 *     <td bc-column-content alignment="center" [displayPrimary]="true">hola mundo</td>
 *     <td bc-column-content alignment="center" [displayPrimary]="true">hola mundo</td>
 *     <td bc-column-content [menuColumn]="true" >
 *       <bc-float-menu [options]=options>
 *         <em class="bc-icon bc-md bc-float-menu-toggle" aria-controls="myDropdown">secondary-menu</em>
 *       </bc-float-menu>
 *     </td>
 *   </tr>
 * </table>
 *
 * @author: Bancolombia S.A
 */
export declare class BcListRowModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcListRowModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcListRowModule, [typeof i1.BcListRowTableDirective, typeof i2.BcListRowDirective, typeof i3.BcListColumnDirective, typeof i4.BcListColumnContentDataDirective], [typeof i5.BcIconModule, typeof i6.BcCheckboxModule, typeof i7.BcFloatMenuModule, typeof i8.CommonModule, typeof i9.BcTagModule, typeof i10.BcRadioModule], [typeof i1.BcListRowTableDirective, typeof i2.BcListRowDirective, typeof i3.BcListColumnDirective, typeof i4.BcListColumnContentDataDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcListRowModule>;
}
