import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcPaginatorComponent } from './bc-paginator.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
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
export class BcPaginatorModule {
}
BcPaginatorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPaginatorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorModule, declarations: [BcPaginatorComponent], imports: [CommonModule, BcButtonModule, BcIconModule], exports: [BcPaginatorComponent] });
BcPaginatorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorModule, providers: [BcHelperService], imports: [[CommonModule, BcButtonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPaginatorComponent],
                    imports: [CommonModule, BcButtonModule, BcIconModule],
                    providers: [BcHelperService],
                    exports: [BcPaginatorComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGFnaW5hdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wYWdpbmF0b3IvYmMtcGFnaW5hdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBUUgsTUFBTSxPQUFPLGlCQUFpQjs7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLGlCQUxiLG9CQUFvQixhQUN6QixZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksYUFFMUMsb0JBQW9COytHQUVuQixpQkFBaUIsYUFIakIsQ0FBQyxlQUFlLENBQUMsWUFEbkIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQzsyRkFJMUMsaUJBQWlCO2tCQU43QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQztvQkFDckQsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjUGFnaW5hdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1wYWdpbmF0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcbmltcG9ydCB7IEJjQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWJ1dHRvbic7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbi8qKlxuICogSW1wb3J0YSBjb21wb25lbnRlIHBhZ2luYWRvciBjb25cbiAqIGxvcyBkaXNlw7FvcyBkZSBCYW5jb2xvbWJpYSBTLkEuXG4gKiBAY29tcG9uZW50ZSA8YmMtcGFnaW5hdG9yPjwvYmMtcGFnaW5hdG9yPlxuICogQGZpbGVvdmVydmlldyBDb3JyZXNwb25kZSBhIHVuIGVsZW1lbnRvIGRlIHVuIHBhZ2luYWRvciwgcXVlIHB1ZWRlIGFkbWl0aXIgY2FudGlkYWQgcGFnaW5hcyBwYXJhIHBhZ2luYXIuXG4gKiBAZGVzY3JpcHRpb24gUGFyYSBjYW1iaWFyIGRlIHBhZ2luYSBkZSB1biBjb250ZW5pZG8gZGFkbyBlbCBwYWdpbmFkb3IgZXhwb25lIHVuIGV2ZW50byBudW1lcmljbyBvbkNoYW5nZVBhZ2VcbiAqIGVsIGN1YWwgaW5kaWNhIGVsIGluZGljZSBkZSBsYSBwYWdpbmEgc2VsZWNjaW9uYWRhIGVuIGVsIHBhZ2luYWRvci5cbiAqIEBwYXJhbSB0eXBlOiBzdHJpbmcgLSBJbmRpY2EgZWwgdGlwbyBkZSBwYWdpbmFkb3IuIGxvcyBkaWZlcmVudGUgdGlwb3Mgc2UgZWxpZ2VuIGNvbiBsb3Mgc2lndWllbnRlcyB0ZXh0b3MgXG4gKiAnYmFzaWMnLCAnc2ltcGxlJywgJ2RlZmF1bHQnLCAnZnVsbCcsICdidWxsZXQnXG4gKiBFbCBwYWdpbmFkb3IgdGlwbyAnYnVsbGV0JyBzb2xvIHB1ZWRlIHBhZ2luYXIgaGFzdGEgNSBwYWdpbmFzLlxuICogQHBhcmFtIHNob3dOdW1iZXI6IGJvb2xlYW4gLSBJbmRpY2EgYWwgcGFnaW5hZG9yIHNpIG11ZXN0cmEgYSBvIG5vIGxvcyBudW1lcm9zIGluZGljYWRvcmVzIGRlIGxhcyBwYWdpbmFzLCBwYXJhIGxvcyBwYWdpbmFkb3Jlc1xuICogZGUgdGlwbyBiYXNpYyB5IHNpbXBsZSBlc3RlIHBhcmFtZXRybyBlc3RhIGVuIGZhbHNvIHBvciBkZWZlY3RvLCBlc3RlIHBhcmFtZXRybyBhZG1pdGUgYm9vbGVhbm8gZmFsc2UgbyB0cnVlXG4gKiBAcGFyYW0gcGFnZVNpemU6IHN0cmluZyAtIEluZGljYSBhbCBwYWdpbmFkb3IgbGEgY2FudGlkYWQgbWF4aW1hIGRlIHBhZ2luYXMgcXVlIHZhIGEgcGFnaW5hciwgYWRtaXRlIHRleHRvIG51bWVyaWNvXG4gKiBAcGFyYW0gb25DaGFuZ2VQYWdlOiBFdmVudCgpOm51bWJlciAtIEV2ZW50byBxdWUgc2UgZWplY3V0YSBjdWFuZG8gc2VsZWNjaW9uYW4gdW5hIHBhZ2luYSB5YSBzZWEgZGVzZGUgbG9zIGJvdG9uZXMgbyBwYWdpbmFzLCBlbFxuICogcGFyYW1ldHJvIHF1ZSBlbWl0ZSBlcyBudW1lcmljbyBlIGluZGljYSBsYSBwYWdpbmEgc2VsZWNjaW9uYWRhLlxuICogQGV4YW1wbGVcbiAqIDxiYy1wYWdpbmF0b3JcbiAqICAgICAgdHlwZT1cImJhc2ljXCJcbiAqICAgICAgc2hvd051bWJlcnM9dHJ1ZVxuICogICAgICBwYWdlU2l6ZT1cIm1heGltdW1QYWdlc1wiXG4gKiAgICAgIChvbkNoYW5nZVBhZ2UpPVwib25QYWdlQ2hhbmdlRXhhbXBsZSgkZXZlbnQpXCI+XG4gKiA8L2JjLXBhZ2luYXRvcj5cbiAqXG4gKiBAQWR2ZXJ0ZW5jaWEgRWwgdXNvIGRlIGNvbG9yZXMgcG9yIGxldHJhcyBlamVtcGxvIHJlZCwgZ3JlZW4sIGJsdWUgbm8gc29uIGNvbXBhdGlibGVzXG4gKiAgICAgICAgICAgICAgICAgIHB1ZXMgbm8gaGFjZW4gcGFydGUgZGVsIHNpc3RlbWEgZGUgZGlzZcOxb1xuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNQYWdpbmF0b3JDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0J1dHRvbk1vZHVsZSwgQmNJY29uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbQmNIZWxwZXJTZXJ2aWNlXSxcbiAgZXhwb3J0czogW0JjUGFnaW5hdG9yQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNQYWdpbmF0b3JNb2R1bGUge31cbiJdfQ==