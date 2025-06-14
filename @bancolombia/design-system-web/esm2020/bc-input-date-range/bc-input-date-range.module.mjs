import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcInputDateRangeComponent } from './bc-input-date-range.component';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';
import * as i0 from "@angular/core";
/**
 * Importa el componente bcInputDate con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-date-range></bc-input-file-range>
 * @param {number[]} fastButtons: botones de accion rapida para los rangos dl calendario
 * @param componentId: string de id de html
 * IMPORTANTE: Este componente debe tener 2 input en su interior
 *
 *
 * @author: Bancolombia S.A
 */
export class BcInputDateRangeModule {
}
BcInputDateRangeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputDateRangeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeModule, declarations: [BcInputDateRangeComponent], imports: [CommonModule, BcInputModule], exports: [BcInputDateRangeComponent] });
BcInputDateRangeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeModule, imports: [[CommonModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputDateRangeComponent],
                    imports: [CommonModule, BcInputModule],
                    exports: [BcInputDateRangeComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtZGF0ZS1yYW5nZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaW5wdXQtZGF0ZS1yYW5nZS9iYy1pbnB1dC1kYXRlLXJhbmdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBRXhFOzs7Ozs7Ozs7OztHQVdHO0FBT0gsTUFBTSxPQUFPLHNCQUFzQjs7bUhBQXRCLHNCQUFzQjtvSEFBdEIsc0JBQXNCLGlCQUpsQix5QkFBeUIsYUFDOUIsWUFBWSxFQUFFLGFBQWEsYUFDM0IseUJBQXlCO29IQUV4QixzQkFBc0IsWUFIeEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDOzJGQUczQixzQkFBc0I7a0JBTGxDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNJbnB1dERhdGVSYW5nZUNvbXBvbmVudCB9IGZyb20gJy4vYmMtaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNJbnB1dE1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pbnB1dCc7XG5cbi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25lbnRlIGJjSW5wdXREYXRlIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtaW5wdXQtZGF0ZS1yYW5nZT48L2JjLWlucHV0LWZpbGUtcmFuZ2U+XG4gKiBAcGFyYW0ge251bWJlcltdfSBmYXN0QnV0dG9uczogYm90b25lcyBkZSBhY2Npb24gcmFwaWRhIHBhcmEgbG9zIHJhbmdvcyBkbCBjYWxlbmRhcmlvXG4gKiBAcGFyYW0gY29tcG9uZW50SWQ6IHN0cmluZyBkZSBpZCBkZSBodG1sXG4gKiBJTVBPUlRBTlRFOiBFc3RlIGNvbXBvbmVudGUgZGViZSB0ZW5lciAyIGlucHV0IGVuIHN1IGludGVyaW9yXG4gKlxuICpcbiAqIEBhdXRob3I6IEJhbmNvbG9tYmlhIFMuQVxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0lucHV0TW9kdWxlXSxcbiAgZXhwb3J0czogW0JjSW5wdXREYXRlUmFuZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY0lucHV0RGF0ZVJhbmdlTW9kdWxlIHt9XG4iXX0=