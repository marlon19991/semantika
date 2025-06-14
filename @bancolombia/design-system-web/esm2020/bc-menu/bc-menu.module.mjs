/**
 *
 * @componente <bc-menu></bc-menu>
 * @fileoverview Permite crear un menu lateral para ubicar opciones de navegación.
 * @param config JSON con la configuración del menu.

 * @param componentId Identificador del componente.
 * @example
 *  <bc-menu [config]="configMenu" textCloseButton='Close' [functionCloseButton]='closeSession()'></bc-menu>
 *
 * @componente <bc-menu-drawer></bc-menu-drawer>
 * @fileoverview Permite crear una opción del menú lateral.
 * @param textCloseButton Texto del botón del footer del menú.
 * @param functionCloseButton Función al presionar el botón del footer del menú.
 * @example
 * <bc-menu-drawer textCloseButton='Close' [functionCloseButton]='closeSession'></bc-menu-drawer>
 *
 * @componente <bc-menu-item></bc-menu-item>
 * @fileoverview Permite crear una opción del menú lateral.
 * @param text?: Texto de la opción
 * @param iconName?: Nombre del ícono
 * @param path?: Ruta de navegación
 * @param identifierContent?: Identificador del contenido;
 * @example
 *  <bc-menu-item path='#' identifierContent='id1' text='Inicio' iconName='hogar'></bc-menu-item>
 *
 * @componente <bc-menu-main></bc-menu-main>
 * @fileoverview Permite configurar los contenidos.
 * @example
 *  <bc-menu-main></bc-menu-main>
 *
 * @componente <bc-menu-body></bc-menu-body>
 * @fileoverview Permite configurar un submenú con las opciones pertinentes al mismo.
 * @param identifier Identificador del grupo de opciones
 * @example
 * <bc-menu-body identifier='id1'></bc-menu-body>
 *
 * @componente <bc-menu-column></bc-menu-column>
 * @fileoverview Permite configurar las columnas de las opciones del ítem.
 * @example
 *  <bc-menu-column></bc-menu-column>
 *
 * @componente <bc-menu-section></bc-menu-section>
 * @fileoverview Permite configurar las diferentes secciones de una columna.
 * @param title: Título de la sección
 * @example
 *  <bc-menu-section></bc-menu-section>
 *
 * @componente <bc-menu-option></bc-menu-option>
 * @fileoverview Permite configurar las diferentes secciones de una columna.
 * @param text: Texto de la opción
 * @param href: Ruta de la opción
 *
 * @example
 *  <bc-menu-option text='Transacciones' href='transactions'></bc-menu-option>
 *
 * A continuación un ejemplo completo del menú.
 *
 *
 * <bc-menu>
 *     <bc-menu-drawer textCloseButton='Close' [functionCloseButton]='closeSession'>
 *         <bc-menu-item path='#' identifierContent='id1' text='Inicio' iconName='hogar'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id2' text='Pagos' iconName='pagar'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id3' text='Transferir' iconName='transferir'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id4' text='Gastos' iconName='gastos_financieros'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id5' text='Impuestos' iconName='impuestos'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id6' text='Direccionamiento' iconName='direccionamiento'></bc-menu-item>
 *         <bc-menu-item path='#' identifierContent='id7' text='Configuración' iconName='configuracion'></bc-menu-item>
 *     </bc-menu-drawer>
 *     <bc-menu-main>
 *         <bc-menu-body identifier='id1'>
 *             <bc-menu-column>
 *                 <bc-menu-section title='Saldos Consolidados #2'>
 *                     <bc-menu-option text='Saldos totales' href='ammount'></bc-menu-option>
 *                     <bc-menu-option text='Saldos por grupos de productos' href='products'></bc-menu-option>
 *                 </bc-menu-section>
 *                 <bc-menu-section title='Saldos Consolidados #3'>
 *                     <bc-menu-option text='Saldos totales' href='ammount'></bc-menu-option>
 *                     <bc-menu-option text='Saldos por grupos de productos' href='products'></bc-menu-option>
 *                 </bc-menu-section>
 *             </bc-menu-column>
 *         </bc-menu-body>
 *
 *         <bc-menu-body identifier='id2'>
 *             <bc-menu-column>
 *                 <bc-menu-section title='Saldos 1Consolidados #2'>
 *                     <bc-menu-option text='Saldos totales' href='ammount'></bc-menu-option>
 *                     <bc-menu-option text='Saldos por grupos de productos' href='products'></bc-menu-option>
 *                 </bc-menu-section>
 *                 <bc-menu-section title='Saldos Consolidados #3'>
 *                     <bc-menu-option text='Saldos totales' href='ammount'></bc-menu-option>
 *                     <bc-menu-option text='Saldos por grupos de productos' href='products'></bc-menu-option>
 *                 </bc-menu-section>
 *             </bc-menu-column>
 *         </bc-menu-body>
 *     </bc-menu-main>
 * </bc-menu>
 *
 * También es posible realizar un menú a través de un archivo de configuración con la siguiente estructura:
 * Estructura del archivo de configuración
 *
 * interface BcMenuConfig {
 * items: [
 *   {
 *     text?: string;
 *     iconName?: string;
 *     path?: string;
 *     identifierContent?: string;
 *   }
 * ];
 * contents?: [
 *   {
 *     identifierContent: string;
 *     columns: [
 *       {
 *         sections: [
 *           {
 *             title: string;
 *             options: [
 *               {
 *                 text: string;
 *                 path?: string;
 *               }
 *             ];
 *           }
 *         ]
 *       }
 *     ];
 *   }
 * ];
 * closeOptions?: {
 *   text: string;
 *   function?: () => void;
 * };
 * }

 */
import { NgModule } from '@angular/core';
import { BcMenuComponent } from './bc-menu.component';
import { BcMenuItemComponent } from './bc-menu-item/bc-menu-item.component';
import { BcMenuMainComponent } from './bc-menu-main/bc-menu-main.component';
import { BcMenuDrawerComponent } from './bc-menu-drawer/bc-menu-drawer.component';
import { CommonModule } from '@angular/common';
import { BcMenuBodyComponent } from './bc-menu-body/bc-menu-body.component';
import { BcMenuColumnComponent } from './bc-menu-column/bc-menu-column.component';
import { BcMenuOptionComponent } from './bc-menu-option/bc-menu-option.component';
import { BcMenuSectionComponent } from './bc-menu-section/bc-menu-section.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i0 from "@angular/core";
export class BcMenuModule {
}
BcMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuModule, declarations: [BcMenuComponent,
        BcMenuItemComponent,
        BcMenuMainComponent,
        BcMenuDrawerComponent,
        BcMenuBodyComponent,
        BcMenuColumnComponent,
        BcMenuOptionComponent,
        BcMenuSectionComponent], imports: [BcIconModule,
        CommonModule], exports: [BcMenuComponent,
        BcMenuItemComponent,
        BcMenuMainComponent,
        BcMenuDrawerComponent,
        BcMenuBodyComponent,
        BcMenuColumnComponent,
        BcMenuOptionComponent,
        BcMenuSectionComponent] });
BcMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuModule, imports: [[
            BcIconModule,
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcMenuComponent,
                        BcMenuItemComponent,
                        BcMenuMainComponent,
                        BcMenuDrawerComponent,
                        BcMenuBodyComponent,
                        BcMenuColumnComponent,
                        BcMenuOptionComponent,
                        BcMenuSectionComponent
                    ],
                    imports: [
                        BcIconModule,
                        CommonModule
                    ],
                    exports: [
                        BcMenuComponent,
                        BcMenuItemComponent,
                        BcMenuMainComponent,
                        BcMenuDrawerComponent,
                        BcMenuBodyComponent,
                        BcMenuColumnComponent,
                        BcMenuOptionComponent,
                        BcMenuSectionComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtbWVudS9iYy1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdJRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0FBNkJ0RSxNQUFNLE9BQU8sWUFBWTs7eUdBQVosWUFBWTswR0FBWixZQUFZLGlCQXpCckIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHNCQUFzQixhQUd0QixZQUFZO1FBQ1osWUFBWSxhQUdaLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixzQkFBc0I7MEdBSWIsWUFBWSxZQWhCZDtZQUNQLFlBQVk7WUFDWixZQUFZO1NBQ2I7MkZBYVUsWUFBWTtrQkEzQnhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjtxQkFFdkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtbWVudT48L2JjLW1lbnU+XG4gKiBAZmlsZW92ZXJ2aWV3IFBlcm1pdGUgY3JlYXIgdW4gbWVudSBsYXRlcmFsIHBhcmEgdWJpY2FyIG9wY2lvbmVzIGRlIG5hdmVnYWNpw7NuLlxuICogQHBhcmFtIGNvbmZpZyBKU09OIGNvbiBsYSBjb25maWd1cmFjacOzbiBkZWwgbWVudS5cblxuICogQHBhcmFtIGNvbXBvbmVudElkIElkZW50aWZpY2Fkb3IgZGVsIGNvbXBvbmVudGUuXG4gKiBAZXhhbXBsZVxuICogIDxiYy1tZW51IFtjb25maWddPVwiY29uZmlnTWVudVwiIHRleHRDbG9zZUJ1dHRvbj0nQ2xvc2UnIFtmdW5jdGlvbkNsb3NlQnV0dG9uXT0nY2xvc2VTZXNzaW9uKCknPjwvYmMtbWVudT5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtbWVudS1kcmF3ZXI+PC9iYy1tZW51LWRyYXdlcj5cbiAqIEBmaWxlb3ZlcnZpZXcgUGVybWl0ZSBjcmVhciB1bmEgb3BjacOzbiBkZWwgbWVuw7ogbGF0ZXJhbC5cbiAqIEBwYXJhbSB0ZXh0Q2xvc2VCdXR0b24gVGV4dG8gZGVsIGJvdMOzbiBkZWwgZm9vdGVyIGRlbCBtZW7Dui5cbiAqIEBwYXJhbSBmdW5jdGlvbkNsb3NlQnV0dG9uIEZ1bmNpw7NuIGFsIHByZXNpb25hciBlbCBib3TDs24gZGVsIGZvb3RlciBkZWwgbWVuw7ouXG4gKiBAZXhhbXBsZVxuICogPGJjLW1lbnUtZHJhd2VyIHRleHRDbG9zZUJ1dHRvbj0nQ2xvc2UnIFtmdW5jdGlvbkNsb3NlQnV0dG9uXT0nY2xvc2VTZXNzaW9uJz48L2JjLW1lbnUtZHJhd2VyPlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy1tZW51LWl0ZW0+PC9iYy1tZW51LWl0ZW0+XG4gKiBAZmlsZW92ZXJ2aWV3IFBlcm1pdGUgY3JlYXIgdW5hIG9wY2nDs24gZGVsIG1lbsO6IGxhdGVyYWwuXG4gKiBAcGFyYW0gdGV4dD86IFRleHRvIGRlIGxhIG9wY2nDs25cbiAqIEBwYXJhbSBpY29uTmFtZT86IE5vbWJyZSBkZWwgw61jb25vXG4gKiBAcGFyYW0gcGF0aD86IFJ1dGEgZGUgbmF2ZWdhY2nDs25cbiAqIEBwYXJhbSBpZGVudGlmaWVyQ29udGVudD86IElkZW50aWZpY2Fkb3IgZGVsIGNvbnRlbmlkbztcbiAqIEBleGFtcGxlXG4gKiAgPGJjLW1lbnUtaXRlbSBwYXRoPScjJyBpZGVudGlmaWVyQ29udGVudD0naWQxJyB0ZXh0PSdJbmljaW8nIGljb25OYW1lPSdob2dhcic+PC9iYy1tZW51LWl0ZW0+XG4gKlxuICogQGNvbXBvbmVudGUgPGJjLW1lbnUtbWFpbj48L2JjLW1lbnUtbWFpbj5cbiAqIEBmaWxlb3ZlcnZpZXcgUGVybWl0ZSBjb25maWd1cmFyIGxvcyBjb250ZW5pZG9zLlxuICogQGV4YW1wbGVcbiAqICA8YmMtbWVudS1tYWluPjwvYmMtbWVudS1tYWluPlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy1tZW51LWJvZHk+PC9iYy1tZW51LWJvZHk+XG4gKiBAZmlsZW92ZXJ2aWV3IFBlcm1pdGUgY29uZmlndXJhciB1biBzdWJtZW7DuiBjb24gbGFzIG9wY2lvbmVzIHBlcnRpbmVudGVzIGFsIG1pc21vLlxuICogQHBhcmFtIGlkZW50aWZpZXIgSWRlbnRpZmljYWRvciBkZWwgZ3J1cG8gZGUgb3BjaW9uZXNcbiAqIEBleGFtcGxlXG4gKiA8YmMtbWVudS1ib2R5IGlkZW50aWZpZXI9J2lkMSc+PC9iYy1tZW51LWJvZHk+XG4gKlxuICogQGNvbXBvbmVudGUgPGJjLW1lbnUtY29sdW1uPjwvYmMtbWVudS1jb2x1bW4+XG4gKiBAZmlsZW92ZXJ2aWV3IFBlcm1pdGUgY29uZmlndXJhciBsYXMgY29sdW1uYXMgZGUgbGFzIG9wY2lvbmVzIGRlbCDDrXRlbS5cbiAqIEBleGFtcGxlXG4gKiAgPGJjLW1lbnUtY29sdW1uPjwvYmMtbWVudS1jb2x1bW4+XG4gKlxuICogQGNvbXBvbmVudGUgPGJjLW1lbnUtc2VjdGlvbj48L2JjLW1lbnUtc2VjdGlvbj5cbiAqIEBmaWxlb3ZlcnZpZXcgUGVybWl0ZSBjb25maWd1cmFyIGxhcyBkaWZlcmVudGVzIHNlY2Npb25lcyBkZSB1bmEgY29sdW1uYS5cbiAqIEBwYXJhbSB0aXRsZTogVMOtdHVsbyBkZSBsYSBzZWNjacOzblxuICogQGV4YW1wbGVcbiAqICA8YmMtbWVudS1zZWN0aW9uPjwvYmMtbWVudS1zZWN0aW9uPlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy1tZW51LW9wdGlvbj48L2JjLW1lbnUtb3B0aW9uPlxuICogQGZpbGVvdmVydmlldyBQZXJtaXRlIGNvbmZpZ3VyYXIgbGFzIGRpZmVyZW50ZXMgc2VjY2lvbmVzIGRlIHVuYSBjb2x1bW5hLlxuICogQHBhcmFtIHRleHQ6IFRleHRvIGRlIGxhIG9wY2nDs25cbiAqIEBwYXJhbSBocmVmOiBSdXRhIGRlIGxhIG9wY2nDs25cbiAqXG4gKiBAZXhhbXBsZVxuICogIDxiYy1tZW51LW9wdGlvbiB0ZXh0PSdUcmFuc2FjY2lvbmVzJyBocmVmPSd0cmFuc2FjdGlvbnMnPjwvYmMtbWVudS1vcHRpb24+XG4gKlxuICogQSBjb250aW51YWNpw7NuIHVuIGVqZW1wbG8gY29tcGxldG8gZGVsIG1lbsO6LlxuICpcbiAqXG4gKiA8YmMtbWVudT5cbiAqICAgICA8YmMtbWVudS1kcmF3ZXIgdGV4dENsb3NlQnV0dG9uPSdDbG9zZScgW2Z1bmN0aW9uQ2xvc2VCdXR0b25dPSdjbG9zZVNlc3Npb24nPlxuICogICAgICAgICA8YmMtbWVudS1pdGVtIHBhdGg9JyMnIGlkZW50aWZpZXJDb250ZW50PSdpZDEnIHRleHQ9J0luaWNpbycgaWNvbk5hbWU9J2hvZ2FyJz48L2JjLW1lbnUtaXRlbT5cbiAqICAgICAgICAgPGJjLW1lbnUtaXRlbSBwYXRoPScjJyBpZGVudGlmaWVyQ29udGVudD0naWQyJyB0ZXh0PSdQYWdvcycgaWNvbk5hbWU9J3BhZ2FyJz48L2JjLW1lbnUtaXRlbT5cbiAqICAgICAgICAgPGJjLW1lbnUtaXRlbSBwYXRoPScjJyBpZGVudGlmaWVyQ29udGVudD0naWQzJyB0ZXh0PSdUcmFuc2ZlcmlyJyBpY29uTmFtZT0ndHJhbnNmZXJpcic+PC9iYy1tZW51LWl0ZW0+XG4gKiAgICAgICAgIDxiYy1tZW51LWl0ZW0gcGF0aD0nIycgaWRlbnRpZmllckNvbnRlbnQ9J2lkNCcgdGV4dD0nR2FzdG9zJyBpY29uTmFtZT0nZ2FzdG9zX2ZpbmFuY2llcm9zJz48L2JjLW1lbnUtaXRlbT5cbiAqICAgICAgICAgPGJjLW1lbnUtaXRlbSBwYXRoPScjJyBpZGVudGlmaWVyQ29udGVudD0naWQ1JyB0ZXh0PSdJbXB1ZXN0b3MnIGljb25OYW1lPSdpbXB1ZXN0b3MnPjwvYmMtbWVudS1pdGVtPlxuICogICAgICAgICA8YmMtbWVudS1pdGVtIHBhdGg9JyMnIGlkZW50aWZpZXJDb250ZW50PSdpZDYnIHRleHQ9J0RpcmVjY2lvbmFtaWVudG8nIGljb25OYW1lPSdkaXJlY2Npb25hbWllbnRvJz48L2JjLW1lbnUtaXRlbT5cbiAqICAgICAgICAgPGJjLW1lbnUtaXRlbSBwYXRoPScjJyBpZGVudGlmaWVyQ29udGVudD0naWQ3JyB0ZXh0PSdDb25maWd1cmFjacOzbicgaWNvbk5hbWU9J2NvbmZpZ3VyYWNpb24nPjwvYmMtbWVudS1pdGVtPlxuICogICAgIDwvYmMtbWVudS1kcmF3ZXI+XG4gKiAgICAgPGJjLW1lbnUtbWFpbj5cbiAqICAgICAgICAgPGJjLW1lbnUtYm9keSBpZGVudGlmaWVyPSdpZDEnPlxuICogICAgICAgICAgICAgPGJjLW1lbnUtY29sdW1uPlxuICogICAgICAgICAgICAgICAgIDxiYy1tZW51LXNlY3Rpb24gdGl0bGU9J1NhbGRvcyBDb25zb2xpZGFkb3MgIzInPlxuICogICAgICAgICAgICAgICAgICAgICA8YmMtbWVudS1vcHRpb24gdGV4dD0nU2FsZG9zIHRvdGFsZXMnIGhyZWY9J2FtbW91bnQnPjwvYmMtbWVudS1vcHRpb24+XG4gKiAgICAgICAgICAgICAgICAgICAgIDxiYy1tZW51LW9wdGlvbiB0ZXh0PSdTYWxkb3MgcG9yIGdydXBvcyBkZSBwcm9kdWN0b3MnIGhyZWY9J3Byb2R1Y3RzJz48L2JjLW1lbnUtb3B0aW9uPlxuICogICAgICAgICAgICAgICAgIDwvYmMtbWVudS1zZWN0aW9uPlxuICogICAgICAgICAgICAgICAgIDxiYy1tZW51LXNlY3Rpb24gdGl0bGU9J1NhbGRvcyBDb25zb2xpZGFkb3MgIzMnPlxuICogICAgICAgICAgICAgICAgICAgICA8YmMtbWVudS1vcHRpb24gdGV4dD0nU2FsZG9zIHRvdGFsZXMnIGhyZWY9J2FtbW91bnQnPjwvYmMtbWVudS1vcHRpb24+XG4gKiAgICAgICAgICAgICAgICAgICAgIDxiYy1tZW51LW9wdGlvbiB0ZXh0PSdTYWxkb3MgcG9yIGdydXBvcyBkZSBwcm9kdWN0b3MnIGhyZWY9J3Byb2R1Y3RzJz48L2JjLW1lbnUtb3B0aW9uPlxuICogICAgICAgICAgICAgICAgIDwvYmMtbWVudS1zZWN0aW9uPlxuICogICAgICAgICAgICAgPC9iYy1tZW51LWNvbHVtbj5cbiAqICAgICAgICAgPC9iYy1tZW51LWJvZHk+XG4gKlxuICogICAgICAgICA8YmMtbWVudS1ib2R5IGlkZW50aWZpZXI9J2lkMic+XG4gKiAgICAgICAgICAgICA8YmMtbWVudS1jb2x1bW4+XG4gKiAgICAgICAgICAgICAgICAgPGJjLW1lbnUtc2VjdGlvbiB0aXRsZT0nU2FsZG9zIDFDb25zb2xpZGFkb3MgIzInPlxuICogICAgICAgICAgICAgICAgICAgICA8YmMtbWVudS1vcHRpb24gdGV4dD0nU2FsZG9zIHRvdGFsZXMnIGhyZWY9J2FtbW91bnQnPjwvYmMtbWVudS1vcHRpb24+XG4gKiAgICAgICAgICAgICAgICAgICAgIDxiYy1tZW51LW9wdGlvbiB0ZXh0PSdTYWxkb3MgcG9yIGdydXBvcyBkZSBwcm9kdWN0b3MnIGhyZWY9J3Byb2R1Y3RzJz48L2JjLW1lbnUtb3B0aW9uPlxuICogICAgICAgICAgICAgICAgIDwvYmMtbWVudS1zZWN0aW9uPlxuICogICAgICAgICAgICAgICAgIDxiYy1tZW51LXNlY3Rpb24gdGl0bGU9J1NhbGRvcyBDb25zb2xpZGFkb3MgIzMnPlxuICogICAgICAgICAgICAgICAgICAgICA8YmMtbWVudS1vcHRpb24gdGV4dD0nU2FsZG9zIHRvdGFsZXMnIGhyZWY9J2FtbW91bnQnPjwvYmMtbWVudS1vcHRpb24+XG4gKiAgICAgICAgICAgICAgICAgICAgIDxiYy1tZW51LW9wdGlvbiB0ZXh0PSdTYWxkb3MgcG9yIGdydXBvcyBkZSBwcm9kdWN0b3MnIGhyZWY9J3Byb2R1Y3RzJz48L2JjLW1lbnUtb3B0aW9uPlxuICogICAgICAgICAgICAgICAgIDwvYmMtbWVudS1zZWN0aW9uPlxuICogICAgICAgICAgICAgPC9iYy1tZW51LWNvbHVtbj5cbiAqICAgICAgICAgPC9iYy1tZW51LWJvZHk+XG4gKiAgICAgPC9iYy1tZW51LW1haW4+XG4gKiA8L2JjLW1lbnU+XG4gKlxuICogVGFtYmnDqW4gZXMgcG9zaWJsZSByZWFsaXphciB1biBtZW7DuiBhIHRyYXbDqXMgZGUgdW4gYXJjaGl2byBkZSBjb25maWd1cmFjacOzbiBjb24gbGEgc2lndWllbnRlIGVzdHJ1Y3R1cmE6XG4gKiBFc3RydWN0dXJhIGRlbCBhcmNoaXZvIGRlIGNvbmZpZ3VyYWNpw7NuXG4gKlxuICogaW50ZXJmYWNlIEJjTWVudUNvbmZpZyB7XG4gKiBpdGVtczogW1xuICogICB7XG4gKiAgICAgdGV4dD86IHN0cmluZztcbiAqICAgICBpY29uTmFtZT86IHN0cmluZztcbiAqICAgICBwYXRoPzogc3RyaW5nO1xuICogICAgIGlkZW50aWZpZXJDb250ZW50Pzogc3RyaW5nO1xuICogICB9XG4gKiBdO1xuICogY29udGVudHM/OiBbXG4gKiAgIHtcbiAqICAgICBpZGVudGlmaWVyQ29udGVudDogc3RyaW5nO1xuICogICAgIGNvbHVtbnM6IFtcbiAqICAgICAgIHtcbiAqICAgICAgICAgc2VjdGlvbnM6IFtcbiAqICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICB0aXRsZTogc3RyaW5nO1xuICogICAgICAgICAgICAgb3B0aW9uczogW1xuICogICAgICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nO1xuICogICAgICAgICAgICAgICAgIHBhdGg/OiBzdHJpbmc7XG4gKiAgICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICAgIF07XG4gKiAgICAgICAgICAgfVxuICogICAgICAgICBdXG4gKiAgICAgICB9XG4gKiAgICAgXTtcbiAqICAgfVxuICogXTtcbiAqIGNsb3NlT3B0aW9ucz86IHtcbiAqICAgdGV4dDogc3RyaW5nO1xuICogICBmdW5jdGlvbj86ICgpID0+IHZvaWQ7XG4gKiB9O1xuICogfVxuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjTWVudUNvbXBvbmVudCB9IGZyb20gJy4vYmMtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNNZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYmMtbWVudS1pdGVtL2JjLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNNZW51TWFpbkNvbXBvbmVudCB9IGZyb20gJy4vYmMtbWVudS1tYWluL2JjLW1lbnUtbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNNZW51RHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1tZW51LWRyYXdlci9iYy1tZW51LWRyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjTWVudUJvZHlDb21wb25lbnQgfSBmcm9tICcuL2JjLW1lbnUtYm9keS9iYy1tZW51LWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IEJjTWVudUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vYmMtbWVudS1jb2x1bW4vYmMtbWVudS1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IEJjTWVudU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYmMtbWVudS1vcHRpb24vYmMtbWVudS1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJjTWVudVNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2JjLW1lbnUtc2VjdGlvbi9iYy1tZW51LXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmNNZW51Q29tcG9uZW50LFxuICAgIEJjTWVudUl0ZW1Db21wb25lbnQsXG4gICAgQmNNZW51TWFpbkNvbXBvbmVudCxcbiAgICBCY01lbnVEcmF3ZXJDb21wb25lbnQsXG4gICAgQmNNZW51Qm9keUNvbXBvbmVudCxcbiAgICBCY01lbnVDb2x1bW5Db21wb25lbnQsXG4gICAgQmNNZW51T3B0aW9uQ29tcG9uZW50LFxuICAgIEJjTWVudVNlY3Rpb25Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJjSWNvbk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJjTWVudUNvbXBvbmVudCxcbiAgICBCY01lbnVJdGVtQ29tcG9uZW50LFxuICAgIEJjTWVudU1haW5Db21wb25lbnQsXG4gICAgQmNNZW51RHJhd2VyQ29tcG9uZW50LFxuICAgIEJjTWVudUJvZHlDb21wb25lbnQsXG4gICAgQmNNZW51Q29sdW1uQ29tcG9uZW50LFxuICAgIEJjTWVudU9wdGlvbkNvbXBvbmVudCxcbiAgICBCY01lbnVTZWN0aW9uQ29tcG9uZW50XG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCY01lbnVNb2R1bGUgeyB9XG4iXX0=