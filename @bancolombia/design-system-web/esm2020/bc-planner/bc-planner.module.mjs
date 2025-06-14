import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcPlannerComponent } from './bc-planner.component';
import * as i0 from "@angular/core";
/**
 * Importa el componente bcCalendar con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-calendar>
 *
 * @param  {string} calendarType: Tipo de calendario a mostrar 'split' 'simple 'range' default : simple
 * @param {number[]} fastButtons: array de MAXIMO 3 numeros enteros para botones d eseleccion rapida. default: ninguno
 * @param {string} componentId: id html del elemento
 * @example
 * <bc-calendar></bc-calendar>
 *
 * @author: Bancolombia S.A
 */
export class BcPlannerModule {
}
BcPlannerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPlannerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerModule, declarations: [BcPlannerComponent], imports: [CommonModule], exports: [BcPlannerComponent] });
BcPlannerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPlannerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcPlannerComponent],
                    imports: [CommonModule],
                    exports: [BcPlannerComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGxhbm5lci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtcGxhbm5lci9iYy1wbGFubmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFNUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQU9ILE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBSlgsa0JBQWtCLGFBQ3ZCLFlBQVksYUFDWixrQkFBa0I7NkdBRWpCLGVBQWUsWUFIakIsQ0FBQyxZQUFZLENBQUM7MkZBR1osZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjUGxhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmMtcGxhbm5lci5jb21wb25lbnQnO1xuXG4vKipcbiAqIEltcG9ydGEgZWwgY29tcG9uZW50ZSBiY0NhbGVuZGFyIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtY2FsZW5kYXI+XG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjYWxlbmRhclR5cGU6IFRpcG8gZGUgY2FsZW5kYXJpbyBhIG1vc3RyYXIgJ3NwbGl0JyAnc2ltcGxlICdyYW5nZScgZGVmYXVsdCA6IHNpbXBsZVxuICogQHBhcmFtIHtudW1iZXJbXX0gZmFzdEJ1dHRvbnM6IGFycmF5IGRlIE1BWElNTyAzIG51bWVyb3MgZW50ZXJvcyBwYXJhIGJvdG9uZXMgZCBlc2VsZWNjaW9uIHJhcGlkYS4gZGVmYXVsdDogbmluZ3Vub1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudElkOiBpZCBodG1sIGRlbCBlbGVtZW50b1xuICogQGV4YW1wbGVcbiAqIDxiYy1jYWxlbmRhcj48L2JjLWNhbGVuZGFyPlxuICpcbiAqIEBhdXRob3I6IEJhbmNvbG9tYmlhIFMuQVxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjUGxhbm5lckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQmNQbGFubmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNQbGFubmVyTW9kdWxlIHt9XG4iXX0=