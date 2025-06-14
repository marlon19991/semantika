import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcCalendarComponent } from './bc-calendar.component';
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
export class BcCalendarModule {
}
BcCalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarModule, declarations: [BcCalendarComponent], imports: [CommonModule], exports: [BcCalendarComponent] });
BcCalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcCalendarComponent
                    ],
                    imports: [CommonModule],
                    exports: [
                        BcCalendarComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhbGVuZGFyL2JjLWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFOUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQVdILE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkFQekIsbUJBQW1CLGFBRVgsWUFBWSxhQUVwQixtQkFBbUI7OEdBR1YsZ0JBQWdCLFlBTGxCLENBQUMsWUFBWSxDQUFDOzJGQUtaLGdCQUFnQjtrQkFUNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY0NhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1jYWxlbmRhci5jb21wb25lbnQnO1xuXG4vKipcbiAqIEltcG9ydGEgZWwgY29tcG9uZW50ZSBiY0NhbGVuZGFyIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtY2FsZW5kYXI+XG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBjYWxlbmRhclR5cGU6IFRpcG8gZGUgY2FsZW5kYXJpbyBhIG1vc3RyYXIgJ3NwbGl0JyAnc2ltcGxlICdyYW5nZScgZGVmYXVsdCA6IHNpbXBsZVxuICogQHBhcmFtIHtudW1iZXJbXX0gZmFzdEJ1dHRvbnM6IGFycmF5IGRlIE1BWElNTyAzIG51bWVyb3MgZW50ZXJvcyBwYXJhIGJvdG9uZXMgZCBlc2VsZWNjaW9uIHJhcGlkYS4gZGVmYXVsdDogbmluZ3Vub1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudElkOiBpZCBodG1sIGRlbCBlbGVtZW50b1xuICogQGV4YW1wbGVcbiAqIDxiYy1jYWxlbmRhcj48L2JjLWNhbGVuZGFyPlxuICpcbiAqIEBhdXRob3I6IEJhbmNvbG9tYmlhIFMuQVxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJjQ2FsZW5kYXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBCY0NhbGVuZGFyQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjQ2FsZW5kYXJNb2R1bGUgeyB9XG4iXX0=