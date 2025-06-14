import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcInputDateComponent } from './bc-input-date.component';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';
import * as i0 from "@angular/core";
/**
 * Importa el componente bcInputDate con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-date></bc-input-date>
 * @param componentId: string de id de html
 * IMPORTANTE: Este componente debe tener 2 input en su interior
 *
 *
 * @author: Bancolombia S.A
 */
export class BcInputDateModule {
}
BcInputDateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputDateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateModule, declarations: [BcInputDateComponent], imports: [CommonModule, BcInputModule], exports: [BcInputDateComponent] });
BcInputDateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateModule, imports: [[CommonModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputDateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputDateComponent],
                    imports: [CommonModule, BcInputModule],
                    exports: [BcInputDateComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtZGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaW5wdXQtZGF0ZS9iYy1pbnB1dC1kYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBRXhFOzs7Ozs7Ozs7O0dBVUc7QUFPSCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBSmIsb0JBQW9CLGFBQ3pCLFlBQVksRUFBRSxhQUFhLGFBQzNCLG9CQUFvQjsrR0FFbkIsaUJBQWlCLFlBSG5CLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQzsyRkFHM0IsaUJBQWlCO2tCQUw3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjSW5wdXREYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1pbnB1dC1kYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY0lucHV0TW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWlucHV0JztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgYmNJbnB1dERhdGUgY29uXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy1pbnB1dC1kYXRlPjwvYmMtaW5wdXQtZGF0ZT5cbiAqIEBwYXJhbSBjb21wb25lbnRJZDogc3RyaW5nIGRlIGlkIGRlIGh0bWxcbiAqIElNUE9SVEFOVEU6IEVzdGUgY29tcG9uZW50ZSBkZWJlIHRlbmVyIDIgaW5wdXQgZW4gc3UgaW50ZXJpb3JcbiAqXG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNJbnB1dERhdGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0lucHV0TW9kdWxlXSxcbiAgZXhwb3J0czogW0JjSW5wdXREYXRlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNJbnB1dERhdGVNb2R1bGUge31cbiJdfQ==