import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcPaginatorV2Component } from './bc-paginator-v2.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
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
export class BcPaginatorV2Module {
}
BcPaginatorV2Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPaginatorV2Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Module, declarations: [BcPaginatorV2Component], imports: [CommonModule, BcButtonModule, BcIconModule], exports: [BcPaginatorV2Component] });
BcPaginatorV2Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Module, providers: [BcHelperService], imports: [[CommonModule, BcButtonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPaginatorV2Component],
                    imports: [CommonModule, BcButtonModule, BcIconModule],
                    providers: [BcHelperService],
                    exports: [BcPaginatorV2Component],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGFnaW5hdG9yLXYyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wYWdpbmF0b3ItdjIvYmMtcGFnaW5hdG9yLXYyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFRSCxNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBTGYsc0JBQXNCLGFBQzNCLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxhQUUxQyxzQkFBc0I7aUhBRXJCLG1CQUFtQixhQUhuQixDQUFDLGVBQWUsQ0FBQyxZQURuQixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDOzJGQUkxQyxtQkFBbUI7a0JBTi9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDO29CQUNyRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNQYWdpbmF0b3JWMkNvbXBvbmVudCB9IGZyb20gJy4vYmMtcGFnaW5hdG9yLXYyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY0ljb25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaWNvbic7XG5pbXBvcnQgeyBCY0J1dHRvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1idXR0b24nO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG4vKipcbiAqIEltcG9ydGEgY29tcG9uZW50ZSBwYWdpbmFkb3IgY29uXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICogQGNvbXBvbmVudGUgPGJjLXBhZ2luYXRvci12Mj48L2JjLXBhZ2luYXRvci12Mj5cbiAqIEBmaWxlb3ZlcnZpZXcgQ29ycmVzcG9uZGUgYSB1biBlbGVtZW50byBkZSB1biBwYWdpbmFkb3IsIHF1ZSBwdWVkZSBhZG1pdGlyIGNhbnRpZGFkIHBhZ2luYXMgcGFyYSBwYWdpbmFyLlxuICogQGRlc2NyaXB0aW9uIFBhcmEgY2FtYmlhciBkZSBwYWdpbmEgZGUgdW4gY29udGVuaWRvIGRhZG8gZWwgcGFnaW5hZG9yIGV4cG9uZSB1biBldmVudG8gbnVtZXJpY28gb25DaGFuZ2VQYWdlXG4gKiBlbCBjdWFsIGluZGljYSBlbCBpbmRpY2UgZGUgbGEgcGFnaW5hIHNlbGVjY2lvbmFkYSBlbiBlbCBwYWdpbmFkb3IuXG4gKiBAcGFyYW0gdHlwZTogc3RyaW5nIC0gSW5kaWNhIGVsIHRpcG8gZGUgcGFnaW5hZG9yLiBsb3MgZGlmZXJlbnRlIHRpcG9zIHNlIGVsaWdlbiBjb24gbG9zIHNpZ3VpZW50ZXMgdGV4dG9zIFxuICogQHBhcmFtIG9uQ2hhbmdlUGFnZTogRXZlbnQoKTpudW1iZXIgLSBFdmVudG8gcXVlIHNlIGVqZWN1dGEgY3VhbmRvIHNlbGVjY2lvbmFuIHVuYSBwYWdpbmEgeWEgc2VhIGRlc2RlIGxvcyBib3RvbmVzIG8gcGFnaW5hcywgZWxcbiAqIHBhcmFtZXRybyBxdWUgZW1pdGUgZXMgbnVtZXJpY28gZSBpbmRpY2EgbGEgcGFnaW5hIHNlbGVjY2lvbmFkYS5cbiAqIEBleGFtcGxlXG4gKiA8YmMtcGFnaW5hdG9yLXYyXG4gKiAgICAgIHR5cGU9XCJiYXNpY1wiICogICAgICBcbiAqICAgICAgKG9uQ2hhbmdlUGFnZSk9XCJvblBhZ2VDaGFuZ2VFeGFtcGxlKCRldmVudClcIj5cbiAqIDwvYmMtcGFnaW5hdG9yLXYyPlxuICpcbiAqIEBBZHZlcnRlbmNpYSBFbCB1c28gZGUgY29sb3JlcyBwb3IgbGV0cmFzIGVqZW1wbG8gcmVkLCBncmVlbiwgYmx1ZSBubyBzb24gY29tcGF0aWJsZXNcbiAqICAgICAgICAgICAgICAgICAgcHVlcyBubyBoYWNlbiBwYXJ0ZSBkZWwgc2lzdGVtYSBkZSBkaXNlw7FvXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY1BhZ2luYXRvclYyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQmNCdXR0b25Nb2R1bGUsIEJjSWNvbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0JjSGVscGVyU2VydmljZV0sXG4gIGV4cG9ydHM6IFtCY1BhZ2luYXRvclYyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNQYWdpbmF0b3JWMk1vZHVsZSB7fVxuIl19