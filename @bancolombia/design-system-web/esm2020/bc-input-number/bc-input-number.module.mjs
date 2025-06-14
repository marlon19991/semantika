import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';
import { BcInputNumberComponent } from './bc-input-number.component';
import * as i0 from "@angular/core";
/**
 * Importa el componente input-number con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-number></bc-input-number>
 *
 * @param  id ID personalizado del input (default: bc-toggle-input-1)
 * @param  disabled default: false
 * @param  required default: false
 * @param  isChecked default: false
 * @author: Bancolombia S.A
 */
export class BcInputNumberModule {
}
BcInputNumberModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputNumberModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberModule, declarations: [BcInputNumberComponent], imports: [CommonModule, BcButtonModule, BcIconModule, BcInputModule], exports: [BcInputNumberComponent] });
BcInputNumberModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberModule, imports: [[CommonModule, BcButtonModule, BcIconModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputNumberModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputNumberComponent],
                    imports: [CommonModule, BcButtonModule, BcIconModule, BcInputModule],
                    exports: [BcInputNumberComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtbnVtYmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1udW1iZXIvYmMtaW5wdXQtbnVtYmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFckU7Ozs7Ozs7Ozs7O0dBV0c7QUFNSCxNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBSmYsc0JBQXNCLGFBQzNCLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsYUFDekQsc0JBQXNCO2lIQUVyQixtQkFBbUIsWUFIckIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7MkZBR3pELG1CQUFtQjtrQkFML0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUNwRSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWJ1dHRvbic7XG5pbXBvcnQgeyBCY0ljb25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaWNvbic7XG5pbXBvcnQgeyBCY0lucHV0TW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWlucHV0JztcbmltcG9ydCB7IEJjSW5wdXROdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL2JjLWlucHV0LW51bWJlci5jb21wb25lbnQnO1xuXG4vKipcbiAqIEltcG9ydGEgZWwgY29tcG9uZW50ZSBpbnB1dC1udW1iZXIgY29uXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy1pbnB1dC1udW1iZXI+PC9iYy1pbnB1dC1udW1iZXI+XG4gKlxuICogQHBhcmFtICBpZCBJRCBwZXJzb25hbGl6YWRvIGRlbCBpbnB1dCAoZGVmYXVsdDogYmMtdG9nZ2xlLWlucHV0LTEpXG4gKiBAcGFyYW0gIGRpc2FibGVkIGRlZmF1bHQ6IGZhbHNlXG4gKiBAcGFyYW0gIHJlcXVpcmVkIGRlZmF1bHQ6IGZhbHNlXG4gKiBAcGFyYW0gIGlzQ2hlY2tlZCBkZWZhdWx0OiBmYWxzZVxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjSW5wdXROdW1iZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0J1dHRvbk1vZHVsZSwgQmNJY29uTW9kdWxlLCBCY0lucHV0TW9kdWxlXSxcbiAgZXhwb3J0czogW0JjSW5wdXROdW1iZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY0lucHV0TnVtYmVyTW9kdWxlIHt9XG4iXX0=