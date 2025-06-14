import { NgModule } from '@angular/core';
import { BcPreloaderComponent } from './bc-preloader.component';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * Importa el componente BcPreloaderComponent de
 * los diseños de Bancolombia S.A.
 *
 * @component <bc-preloader></bc-preloader>
 *
 * @param  type: Recibe un String con el tipo de preloader que se mostrará, este recibe los siguientes parámetros:
 * circle, square, line
 *
 * @param  width: Recibe un String con el numero de ancho en px o la dimensión (%, rem, em, etc) que tendrá el preloader que se mostrará
 *
 * @param  height: Recibe un String con el numero de largo en px o la dimensión (%, rem, em, etc) que tendrá el preloader que se mostrará
 *
 * @param  borderRadius: Recibe un String con el numero correspondiente al radio del borde. Solo se permite 2 o 3
 *
 * @example
 *
 * <bc-preloader type="circle"></bc-preloader>
 * <bc-preloader type="circle" width="150" height="150"></bc-preloader>
 * <bc-preloader type="line" width="60%"></bc-preloader>
 *
 * @author: Bancolombia S.A
 */
export class BcPreloaderModule {
}
BcPreloaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPreloaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderModule, declarations: [BcPreloaderComponent], imports: [CommonModule], exports: [BcPreloaderComponent] });
BcPreloaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPreloaderComponent],
                    imports: [CommonModule],
                    exports: [BcPreloaderComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcHJlbG9hZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wcmVsb2FkZXIvYmMtcHJlbG9hZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFNSCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBSmIsb0JBQW9CLGFBQ3pCLFlBQVksYUFDWixvQkFBb0I7K0dBRW5CLGlCQUFpQixZQUhuQixDQUFDLFlBQVksQ0FBQzsyRkFHWixpQkFBaUI7a0JBTDdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjUHJlbG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1wcmVsb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25lbnRlIEJjUHJlbG9hZGVyQ29tcG9uZW50IGRlXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBjb21wb25lbnQgPGJjLXByZWxvYWRlcj48L2JjLXByZWxvYWRlcj5cbiAqXG4gKiBAcGFyYW0gIHR5cGU6IFJlY2liZSB1biBTdHJpbmcgY29uIGVsIHRpcG8gZGUgcHJlbG9hZGVyIHF1ZSBzZSBtb3N0cmFyw6EsIGVzdGUgcmVjaWJlIGxvcyBzaWd1aWVudGVzIHBhcsOhbWV0cm9zOlxuICogY2lyY2xlLCBzcXVhcmUsIGxpbmVcbiAqXG4gKiBAcGFyYW0gIHdpZHRoOiBSZWNpYmUgdW4gU3RyaW5nIGNvbiBlbCBudW1lcm8gZGUgYW5jaG8gZW4gcHggbyBsYSBkaW1lbnNpw7NuICglLCByZW0sIGVtLCBldGMpIHF1ZSB0ZW5kcsOhIGVsIHByZWxvYWRlciBxdWUgc2UgbW9zdHJhcsOhXG4gKlxuICogQHBhcmFtICBoZWlnaHQ6IFJlY2liZSB1biBTdHJpbmcgY29uIGVsIG51bWVybyBkZSBsYXJnbyBlbiBweCBvIGxhIGRpbWVuc2nDs24gKCUsIHJlbSwgZW0sIGV0YykgcXVlIHRlbmRyw6EgZWwgcHJlbG9hZGVyIHF1ZSBzZSBtb3N0cmFyw6FcbiAqXG4gKiBAcGFyYW0gIGJvcmRlclJhZGl1czogUmVjaWJlIHVuIFN0cmluZyBjb24gZWwgbnVtZXJvIGNvcnJlc3BvbmRpZW50ZSBhbCByYWRpbyBkZWwgYm9yZGUuIFNvbG8gc2UgcGVybWl0ZSAyIG8gM1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogPGJjLXByZWxvYWRlciB0eXBlPVwiY2lyY2xlXCI+PC9iYy1wcmVsb2FkZXI+XG4gKiA8YmMtcHJlbG9hZGVyIHR5cGU9XCJjaXJjbGVcIiB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjE1MFwiPjwvYmMtcHJlbG9hZGVyPlxuICogPGJjLXByZWxvYWRlciB0eXBlPVwibGluZVwiIHdpZHRoPVwiNjAlXCI+PC9iYy1wcmVsb2FkZXI+XG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjUHJlbG9hZGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtCY1ByZWxvYWRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjUHJlbG9hZGVyTW9kdWxlIHt9XG4iXX0=