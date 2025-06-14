import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BcSwitchComponent } from './bc-switch.component';
import * as i0 from "@angular/core";
/**
 * Importa el componente switch con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-switch></bc-switch>
 *
 * @param  id ID personalizado del input (default: bc-toggle-input-1)
 * @param  disabled default: false
 * @param  required default: false
 * @param  isChecked default: false
 * @fires changeState: Emite el valor del switch cuando hay un cambio (true || false)
 * @example
 * <bc-switch
 *          (changeState)="myEvent($event)"
 *          [id]="'yourID'"
 *          [disabled]=false
 *          [required]=true
 *          [isChecked]=false> Label
 *  </bc-switch>
 *
 * @author: Bancolombia S.A
 */
export class BcSwitchModule {
}
BcSwitchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcSwitchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchModule, declarations: [BcSwitchComponent], imports: [CommonModule], exports: [BcSwitchComponent] });
BcSwitchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcSwitchComponent],
                    imports: [CommonModule],
                    exports: [BcSwitchComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc3dpdGNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zd2l0Y2gvYmMtc3dpdGNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQU1ILE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBSlYsaUJBQWlCLGFBQ3RCLFlBQVksYUFDWixpQkFBaUI7NEdBRWhCLGNBQWMsWUFIaEIsQ0FBQyxZQUFZLENBQUM7MkZBR1osY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1zd2l0Y2guY29tcG9uZW50JztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgc3dpdGNoIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtc3dpdGNoPjwvYmMtc3dpdGNoPlxuICpcbiAqIEBwYXJhbSAgaWQgSUQgcGVyc29uYWxpemFkbyBkZWwgaW5wdXQgKGRlZmF1bHQ6IGJjLXRvZ2dsZS1pbnB1dC0xKVxuICogQHBhcmFtICBkaXNhYmxlZCBkZWZhdWx0OiBmYWxzZVxuICogQHBhcmFtICByZXF1aXJlZCBkZWZhdWx0OiBmYWxzZVxuICogQHBhcmFtICBpc0NoZWNrZWQgZGVmYXVsdDogZmFsc2VcbiAqIEBmaXJlcyBjaGFuZ2VTdGF0ZTogRW1pdGUgZWwgdmFsb3IgZGVsIHN3aXRjaCBjdWFuZG8gaGF5IHVuIGNhbWJpbyAodHJ1ZSB8fCBmYWxzZSlcbiAqIEBleGFtcGxlXG4gKiA8YmMtc3dpdGNoXG4gKiAgICAgICAgICAoY2hhbmdlU3RhdGUpPVwibXlFdmVudCgkZXZlbnQpXCJcbiAqICAgICAgICAgIFtpZF09XCIneW91cklEJ1wiXG4gKiAgICAgICAgICBbZGlzYWJsZWRdPWZhbHNlXG4gKiAgICAgICAgICBbcmVxdWlyZWRdPXRydWVcbiAqICAgICAgICAgIFtpc0NoZWNrZWRdPWZhbHNlPiBMYWJlbFxuICogIDwvYmMtc3dpdGNoPlxuICpcbiAqIEBhdXRob3I6IEJhbmNvbG9tYmlhIFMuQVxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY1N3aXRjaENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQmNTd2l0Y2hDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY1N3aXRjaE1vZHVsZSB7fVxuIl19