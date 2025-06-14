import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcSliderDoubleComponent } from './bc-slider-double/bc-slider-double.component';
import { BcSliderComponent } from './bc-slider-simple/bc-slider.component';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';
import * as i0 from "@angular/core";
/**
 * Importa el componete de Slider simple y doble con
 * los diseños de Bancolombia S.A.
 * @package bc-slider-simple
 * @Component bc-slider
 * @param  id Identificador unico||  (default)
 * @param  name Nombre del componente ||  (default)
 * @param  value Valor del componente que define el punto en el slider donde se inicializa || 0 (default)
 * @param  min valor por defecto en 0 || 0 (default)
 * @param  max valor por defecto en 100 || 100 (default)
 * @param  referenceValue Define el valor del tope a calcular para sobre el value|| 0 (default)
 * @param  outputValue Salida del componente donde se calcula el valor seleccionado en el slider || 0 (default)
 * @example
 * <bc-slider [value]=0 [referenceValue]=1230000></bc-slider>
 *
 *
 * @author: Bancolombia S.A
 */
/**
 * Importa el componete de Slider simple y doble con
 * los diseños de Bancolombia S.A.
 * @package bc-slider-double
 *   @Component bc-slider-double
 *   @param  id Identificador unico||  (default)
 *   @param  name Nombre del componente ||  (default)
 *   @param  valueLeft Valor del componente que define el punto en el slider donde se inicialize el thumb izquierdo || 0 (default)
 *   @param  valueRight Valor del componente que define el punto en el slider donde se  inicialize el thumb derecho || 0 (default)
 *   @param  min valor que define el porcentaje minimo por defecto en 0 || 0 (default)
 *   @param  max valor define el porcentaje minimo por defecto en 100 || 100 (default)
 *   @param  referenceValue Define el valor del tope a calcular para sobre el value|| 0 (default)
 *   @param  outputValue Salida del componente donde se calcula el valor seleccionado en el slider || 0 (default)
 *   @example
 *                    <bc-slider [value]=0 [referenceValue]=1230000></bc-slider>
 *
 *
 * @author: Bancolombia S.A
 */
export class BcSliderModule {
}
BcSliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcSliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderModule, declarations: [BcSliderDoubleComponent, BcSliderComponent], imports: [CommonModule, BcInputModule], exports: [BcSliderComponent, BcSliderDoubleComponent] });
BcSliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderModule, imports: [[CommonModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSliderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcSliderDoubleComponent, BcSliderComponent],
                    imports: [CommonModule, BcInputModule],
                    exports: [BcSliderComponent, BcSliderDoubleComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zbGlkZXIvYmMtc2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBRXhFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFNSCxNQUFNLE9BQU8sY0FBYzs7MkdBQWQsY0FBYzs0R0FBZCxjQUFjLGlCQUpWLHVCQUF1QixFQUFFLGlCQUFpQixhQUMvQyxZQUFZLEVBQUUsYUFBYSxhQUMzQixpQkFBaUIsRUFBRSx1QkFBdUI7NEdBRXpDLGNBQWMsWUFIaEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDOzJGQUczQixjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLGlCQUFpQixDQUFDO29CQUMxRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztpQkFDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjU2xpZGVyRG91YmxlQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1zbGlkZXItZG91YmxlL2JjLXNsaWRlci1kb3VibGUuY29tcG9uZW50JztcbmltcG9ydCB7IEJjU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1zbGlkZXItc2ltcGxlL2JjLXNsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNJbnB1dE1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pbnB1dCc7XG5cbi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25ldGUgZGUgU2xpZGVyIHNpbXBsZSB5IGRvYmxlIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIEBwYWNrYWdlIGJjLXNsaWRlci1zaW1wbGVcbiAqIEBDb21wb25lbnQgYmMtc2xpZGVyXG4gKiBAcGFyYW0gIGlkIElkZW50aWZpY2Fkb3IgdW5pY298fCAgKGRlZmF1bHQpXG4gKiBAcGFyYW0gIG5hbWUgTm9tYnJlIGRlbCBjb21wb25lbnRlIHx8ICAoZGVmYXVsdClcbiAqIEBwYXJhbSAgdmFsdWUgVmFsb3IgZGVsIGNvbXBvbmVudGUgcXVlIGRlZmluZSBlbCBwdW50byBlbiBlbCBzbGlkZXIgZG9uZGUgc2UgaW5pY2lhbGl6YSB8fCAwIChkZWZhdWx0KVxuICogQHBhcmFtICBtaW4gdmFsb3IgcG9yIGRlZmVjdG8gZW4gMCB8fCAwIChkZWZhdWx0KVxuICogQHBhcmFtICBtYXggdmFsb3IgcG9yIGRlZmVjdG8gZW4gMTAwIHx8IDEwMCAoZGVmYXVsdClcbiAqIEBwYXJhbSAgcmVmZXJlbmNlVmFsdWUgRGVmaW5lIGVsIHZhbG9yIGRlbCB0b3BlIGEgY2FsY3VsYXIgcGFyYSBzb2JyZSBlbCB2YWx1ZXx8IDAgKGRlZmF1bHQpXG4gKiBAcGFyYW0gIG91dHB1dFZhbHVlIFNhbGlkYSBkZWwgY29tcG9uZW50ZSBkb25kZSBzZSBjYWxjdWxhIGVsIHZhbG9yIHNlbGVjY2lvbmFkbyBlbiBlbCBzbGlkZXIgfHwgMCAoZGVmYXVsdClcbiAqIEBleGFtcGxlXG4gKiA8YmMtc2xpZGVyIFt2YWx1ZV09MCBbcmVmZXJlbmNlVmFsdWVdPTEyMzAwMDA+PC9iYy1zbGlkZXI+XG4gKlxuICpcbiAqIEBhdXRob3I6IEJhbmNvbG9tYmlhIFMuQVxuICovXG5cbi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25ldGUgZGUgU2xpZGVyIHNpbXBsZSB5IGRvYmxlIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIEBwYWNrYWdlIGJjLXNsaWRlci1kb3VibGVcbiAqICAgQENvbXBvbmVudCBiYy1zbGlkZXItZG91YmxlXG4gKiAgIEBwYXJhbSAgaWQgSWRlbnRpZmljYWRvciB1bmljb3x8ICAoZGVmYXVsdClcbiAqICAgQHBhcmFtICBuYW1lIE5vbWJyZSBkZWwgY29tcG9uZW50ZSB8fCAgKGRlZmF1bHQpXG4gKiAgIEBwYXJhbSAgdmFsdWVMZWZ0IFZhbG9yIGRlbCBjb21wb25lbnRlIHF1ZSBkZWZpbmUgZWwgcHVudG8gZW4gZWwgc2xpZGVyIGRvbmRlIHNlIGluaWNpYWxpemUgZWwgdGh1bWIgaXpxdWllcmRvIHx8IDAgKGRlZmF1bHQpXG4gKiAgIEBwYXJhbSAgdmFsdWVSaWdodCBWYWxvciBkZWwgY29tcG9uZW50ZSBxdWUgZGVmaW5lIGVsIHB1bnRvIGVuIGVsIHNsaWRlciBkb25kZSBzZSAgaW5pY2lhbGl6ZSBlbCB0aHVtYiBkZXJlY2hvIHx8IDAgKGRlZmF1bHQpXG4gKiAgIEBwYXJhbSAgbWluIHZhbG9yIHF1ZSBkZWZpbmUgZWwgcG9yY2VudGFqZSBtaW5pbW8gcG9yIGRlZmVjdG8gZW4gMCB8fCAwIChkZWZhdWx0KVxuICogICBAcGFyYW0gIG1heCB2YWxvciBkZWZpbmUgZWwgcG9yY2VudGFqZSBtaW5pbW8gcG9yIGRlZmVjdG8gZW4gMTAwIHx8IDEwMCAoZGVmYXVsdClcbiAqICAgQHBhcmFtICByZWZlcmVuY2VWYWx1ZSBEZWZpbmUgZWwgdmFsb3IgZGVsIHRvcGUgYSBjYWxjdWxhciBwYXJhIHNvYnJlIGVsIHZhbHVlfHwgMCAoZGVmYXVsdClcbiAqICAgQHBhcmFtICBvdXRwdXRWYWx1ZSBTYWxpZGEgZGVsIGNvbXBvbmVudGUgZG9uZGUgc2UgY2FsY3VsYSBlbCB2YWxvciBzZWxlY2Npb25hZG8gZW4gZWwgc2xpZGVyIHx8IDAgKGRlZmF1bHQpXG4gKiAgIEBleGFtcGxlXG4gKiAgICAgICAgICAgICAgICAgICAgPGJjLXNsaWRlciBbdmFsdWVdPTAgW3JlZmVyZW5jZVZhbHVlXT0xMjMwMDAwPjwvYmMtc2xpZGVyPlxuICpcbiAqXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNTbGlkZXJEb3VibGVDb21wb25lbnQsIEJjU2xpZGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQmNJbnB1dE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtCY1NsaWRlckNvbXBvbmVudCwgQmNTbGlkZXJEb3VibGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY1NsaWRlck1vZHVsZSB7fVxuIl19