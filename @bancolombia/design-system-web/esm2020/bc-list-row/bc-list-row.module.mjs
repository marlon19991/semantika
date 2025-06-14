import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcFloatMenuModule } from '@bancolombia/design-system-web/bc-float-menu';
import { BcTagModule } from '@bancolombia/design-system-web/bc-tag';
import { BcRadioModule } from '@bancolombia/design-system-web/bc-radio';
import { BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective, BcListRowTableDirective } from './directives';
import * as i0 from "@angular/core";
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
export class BcListRowModule {
}
BcListRowModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcListRowModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowModule, declarations: [BcListRowTableDirective, BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective], imports: [BcIconModule, BcCheckboxModule, BcFloatMenuModule, CommonModule, BcTagModule, BcRadioModule], exports: [BcListRowTableDirective, BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective] });
BcListRowModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowModule, imports: [[BcIconModule, BcCheckboxModule, BcFloatMenuModule, CommonModule, BcTagModule, BcRadioModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcListRowTableDirective, BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective],
                    imports: [BcIconModule, BcCheckboxModule, BcFloatMenuModule, CommonModule, BcTagModule, BcRadioModule],
                    exports: [BcListRowTableDirective, BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbGlzdC1yb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWxpc3Qtcm93L2JjLWxpc3Qtcm93Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOENBQThDLENBQUE7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsZ0NBQWdDLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRXBJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFERztBQU9ILE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBTFgsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsZ0NBQWdDLGFBQ3pHLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsYUFDM0YsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsZ0NBQWdDOzZHQUduRyxlQUFlLFlBSmpCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDOzJGQUkzRixlQUFlO2tCQU4zQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGdDQUFnQyxDQUFDO29CQUNwSCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUM7b0JBQ3RHLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGdDQUFnQyxDQUFDO29CQUMvRyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcbmltcG9ydCB7IEJjQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtY2hlY2tib3gnO1xuaW1wb3J0IHsgQmNGbG9hdE1lbnVNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtZmxvYXQtbWVudSdcbmltcG9ydCB7IEJjVGFnTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLXRhZyc7XG5pbXBvcnQgeyBCY1JhZGlvTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLXJhZGlvJztcbmltcG9ydCB7IEJjTGlzdFJvd0RpcmVjdGl2ZSwgQmNMaXN0Q29sdW1uRGlyZWN0aXZlLCBCY0xpc3RDb2x1bW5Db250ZW50RGF0YURpcmVjdGl2ZSwgQmNMaXN0Um93VGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuXG4vKipcbiAqIEltcG9ydGEgZGlyZWN0aXZhcyBkZSBlc3RpbG9zIHBhcmEgZWwgYmMtbGlzdC1yb3cgY29uIGxvcyBkaXNlw7FvcyBkZSBCYW5jb2xvbWJpYSBTLkEuXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAgPGg0IGNsYXNzPVwiYmMtbWFyZ2luLXRvcC02IGJjLW1hcmdpbi1ib3R0b20tMlwiPkxpc3QgUm93IGNvbiBjaGVja2JveCB5IG1lbsO6PC9oND5cbiAqIDx0YWJsZSBiYy1saXN0LXJvdy10YWJsZT5cbiAqICAgPHRyIGJjLWxpc3Qtcm93IFtzaG93RWxldmF0aW9uXT1cInRydWVcIiBpZD1cInRhYmxlXzFfcm93XzFcIj5cbiAqICAgICA8dGQgYmMtY29sdW1uLWNvbnRlbnQgW2FjdGlvbkNvbHVtbl09XCJ0cnVlXCIgYWxpZ25tZW50PVwicmlnaHRcIj5cbiAqICAgICAgIDxiYy1jaGVja2JveCBjbGFzcz1cImNvbC00IG9mZnNldC01XCI+PC9iYy1jaGVja2JveD5cbiAqICAgICA8L3RkPlxuICogICAgIDx0ZCBiYy1jb2x1bW4tY29udGVudCBbaGFzQnJhbmRdPVwidHJ1ZVwiPlxuICogICAgICAgPGRpdj5cbiAqICAgICAgICAgPGJjLWljb24gW2F0dHIuaWRdPVwiJ2xpc3RSb3dJY29uXzEnXCIgY2xhc3M9XCJiYy1saXN0LXJvdy1jb250ZW50LWZpZ3VyZVwiIHNpemU9XCJ4bFwiIHdpZHRoPVwiNzBweFwiXG4gKiAgICAgICAgICAgW25hbWVdPVwiJ2lsLW1hc3RlcidcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBbYXJpYS1sYWJlbF09XCInaWNvbm8gbWFzdGVyY2FyZCdcIj48L2JjLWljb24+XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICAgIDxkaXY+XG4gKiAgICAgICAgIGhvbGEgbXVuZG9cbiAqICAgICAgIDwvZGl2PlxuICogICAgIDwvdGQ+XG4gKiAgICAgPHRkIGJjLWNvbHVtbi1jb250ZW50IFtoYXNCcmFuZF09XCJ0cnVlXCI+XG4gKiAgICAgICA8ZGl2PlxuICogICAgICAgICA8YmMtaWNvbiBbYXR0ci5pZF09XCInbGlzdFJvd0ljb25fMSdcIiBjbGFzcz1cImJjLWxpc3Qtcm93LWNvbnRlbnQtZmlndXJlXCIgc2l6ZT1cInhsXCIgd2lkdGg9XCI3MHB4XCJcbiAqICAgICAgICAgICBbbmFtZV09XCInaWwtbWFzdGVyJ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFthcmlhLWxhYmVsXT1cIidpY29ubyBtYXN0ZXJjYXJkJ1wiPjwvYmMtaWNvbj5cbiAqICAgICAgIDwvZGl2PlxuICogICAgICAgPGRpdiBjbGFzcz1cImJjLXRleHQtc3RhcnRcIiBiYy1jb2x1bW4tY29udGVudC1kYXRhIFtoYXNUZXh0VG9TaHJpbmtdPVwidHJ1ZVwiPlxuICogICAgICAgICA8cCAjZGF0YT5EYXRvcyBkZSBsYSB0YXJqZXRhIGRlIGNyZWRpdG88L3A+XG4gKiAgICAgICAgIDxwICNkYXRhPlRhcmpldGEgZGUgY3JlZGl0byBPcm88L3A+XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICA8L3RkPlxuICogICAgIDx0ZCBiYy1jb2x1bW4tY29udGVudCBhbGlnbm1lbnQ9XCJjZW50ZXJcIiBbZGlzcGxheVByaW1hcnldPVwidHJ1ZVwiPmhvbGEgbXVuZG88L3RkPlxuICogICAgIDx0ZCBiYy1jb2x1bW4tY29udGVudD5cbiAqICAgICAgIDxiYy10YWcgW3RleHRFbGVtZW50XT1cIidob2xhIG11bmRvJ1wiIGNvbXBvbmVudElkPVwiYmMtaXRlbS0xXCIgW3N0YXR1c109XCInZGlzYWJsZWQnXCIgW3R5cGVCdXR0b25UYWddPVwiJ3NlY29uZGFyeSdcIlxuICogICAgICAgICBbaWNvbkxlZnRdPVwiJ2NhbGVuZGFyLWFsdCdcIj5cbiAqICAgICAgIDwvYmMtdGFnPlxuICogICAgIDwvdGQ+XG4gKiAgICAgPHRkIGJjLWNvbHVtbi1jb250ZW50IFtkaXNwbGF5UHJpbWFyeV09XCJ0cnVlXCI+XG4gKiAgICAgICA8ZGl2IGNsYXNzPVwiYmMtdGV4dC1zdGFydFwiIGJjLWNvbHVtbi1jb250ZW50LWRhdGE+XG4gKiAgICAgICAgIDxwID5MYWJlbCA1PC9wPlxuICogICAgICAgICA8cCA+MC4wMDAsMDA8L3A+XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICA8L3RkPlxuICogICAgIDx0ZCBiYy1jb2x1bW4tY29udGVudCBhbGlnbm1lbnQ9XCJjZW50ZXJcIiBbZGlzcGxheVByaW1hcnldPVwidHJ1ZVwiPmhvbGEgbXVuZG88L3RkPlxuICogICAgIDx0ZCBiYy1jb2x1bW4tY29udGVudCBhbGlnbm1lbnQ9XCJjZW50ZXJcIiBbZGlzcGxheVByaW1hcnldPVwidHJ1ZVwiPmhvbGEgbXVuZG88L3RkPlxuICogICAgIDx0ZCBiYy1jb2x1bW4tY29udGVudCBhbGlnbm1lbnQ9XCJjZW50ZXJcIiBbZGlzcGxheVByaW1hcnldPVwidHJ1ZVwiPmhvbGEgbXVuZG88L3RkPlxuICogICAgIDx0ZCBiYy1jb2x1bW4tY29udGVudCBbbWVudUNvbHVtbl09XCJ0cnVlXCIgPlxuICogICAgICAgPGJjLWZsb2F0LW1lbnUgW29wdGlvbnNdPW9wdGlvbnM+XG4gKiAgICAgICAgIDxlbSBjbGFzcz1cImJjLWljb24gYmMtbWQgYmMtZmxvYXQtbWVudS10b2dnbGVcIiBhcmlhLWNvbnRyb2xzPVwibXlEcm9wZG93blwiPnNlY29uZGFyeS1tZW51PC9lbT5cbiAqICAgICAgIDwvYmMtZmxvYXQtbWVudT5cbiAqICAgICA8L3RkPlxuICogICA8L3RyPlxuICogPC90YWJsZT5cbiAqXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNMaXN0Um93VGFibGVEaXJlY3RpdmUsIEJjTGlzdFJvd0RpcmVjdGl2ZSwgQmNMaXN0Q29sdW1uRGlyZWN0aXZlLCBCY0xpc3RDb2x1bW5Db250ZW50RGF0YURpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtCY0ljb25Nb2R1bGUsIEJjQ2hlY2tib3hNb2R1bGUsIEJjRmxvYXRNZW51TW9kdWxlLCBDb21tb25Nb2R1bGUsIEJjVGFnTW9kdWxlLCBCY1JhZGlvTW9kdWxlXSxcbiAgZXhwb3J0czogW0JjTGlzdFJvd1RhYmxlRGlyZWN0aXZlLCBCY0xpc3RSb3dEaXJlY3RpdmUsIEJjTGlzdENvbHVtbkRpcmVjdGl2ZSwgQmNMaXN0Q29sdW1uQ29udGVudERhdGFEaXJlY3RpdmVdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEJjTGlzdFJvd01vZHVsZSB7IH1cbiJdfQ==