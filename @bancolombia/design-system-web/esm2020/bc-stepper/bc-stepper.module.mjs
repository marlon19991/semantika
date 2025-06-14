import { NgModule } from '@angular/core';
import { BcStepperComponent } from './bc-stepper.component';
import * as i0 from "@angular/core";
/**
 * Importa el componente switch con
 * los diseños de Bancolombia S.A.
 *
 * @componente <lib-bc-switch-web></lib-bc-switch-web>
 *
 * @param  disabled default: false
 * @param  required default: true
 * @fires changeState: Emite el valor del switch cuando hay un cambio (true || false)
 * @example
 * <lib-bc-switch-web
 *          (changeState)="myEvent($event)"
 *          [id]="'yourID'"
 *          [disabled]=false
 *          [required]=true
 *          [isChecked]=false> Label
 *  </lib-bc-switch-web>
 *
 * @author: Bancolombia S.A
 */
export class BcStepperModule {
}
BcStepperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcStepperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperModule, declarations: [BcStepperComponent], exports: [BcStepperComponent] });
BcStepperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcStepperComponent],
                    imports: [],
                    exports: [BcStepperComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc3RlcHBlci9iYy1zdGVwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQU1ILE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBSlgsa0JBQWtCLGFBRXZCLGtCQUFrQjs2R0FFakIsZUFBZSxZQUhqQixFQUFFOzJGQUdBLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY1N0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2JjLXN0ZXBwZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgc3dpdGNoIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8bGliLWJjLXN3aXRjaC13ZWI+PC9saWItYmMtc3dpdGNoLXdlYj5cbiAqXG4gKiBAcGFyYW0gIGRpc2FibGVkIGRlZmF1bHQ6IGZhbHNlXG4gKiBAcGFyYW0gIHJlcXVpcmVkIGRlZmF1bHQ6IHRydWVcbiAqIEBmaXJlcyBjaGFuZ2VTdGF0ZTogRW1pdGUgZWwgdmFsb3IgZGVsIHN3aXRjaCBjdWFuZG8gaGF5IHVuIGNhbWJpbyAodHJ1ZSB8fCBmYWxzZSlcbiAqIEBleGFtcGxlXG4gKiA8bGliLWJjLXN3aXRjaC13ZWJcbiAqICAgICAgICAgIChjaGFuZ2VTdGF0ZSk9XCJteUV2ZW50KCRldmVudClcIlxuICogICAgICAgICAgW2lkXT1cIid5b3VySUQnXCJcbiAqICAgICAgICAgIFtkaXNhYmxlZF09ZmFsc2VcbiAqICAgICAgICAgIFtyZXF1aXJlZF09dHJ1ZVxuICogICAgICAgICAgW2lzQ2hlY2tlZF09ZmFsc2U+IExhYmVsXG4gKiAgPC9saWItYmMtc3dpdGNoLXdlYj5cbiAqXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNTdGVwcGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtCY1N0ZXBwZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY1N0ZXBwZXJNb2R1bGUge31cbiJdfQ==