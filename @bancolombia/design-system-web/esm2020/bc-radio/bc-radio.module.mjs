import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcRadioGroupComponent } from './bc-radio-group/bc-radio-group.component';
import { BcRadioComponent } from './bc-radio.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i0 from "@angular/core";
/**
 * Importa el componete de Radio Buttons con
 * los diseños de Bancolombia S.A.
 *
 * @package bc-radio-group, bc-radio
 *   @Component bc-radio-group
 *   @Output onChange() evento que se dispara al detectar cambios en el grupo de bc-radio,
 *           devuelve un objeto con el elemento activo: { label: string, checked: boolean value: string }
 *
 * @package bc-radio
 *   @Component bc-radio
 *   @param  id Identificador unico||  (default)
 *   @param  name Nombre del componente ||  (default)
 *   @param  value Valor del componente ||  (default)
 *   @param  enabled Habilita o deshabilita el componente || true (default)
 *   @param  checked Selecciona el check|| false (default)
 *   @example
 *    <bc-radio-group (onChange)="yourFunction($event)">
 *         <bc-radio value="1">Default 1</bc-radio>
 *         <bc-radio value="2">Default 2</bc-radio>
 *       </bc-radio-group>
 *
 *
 * @author: Bancolombia S.A
 */
export class BcRadioModule {
}
BcRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioModule, declarations: [BcRadioGroupComponent, BcRadioComponent], imports: [CommonModule, BcIconModule], exports: [BcRadioGroupComponent, BcRadioComponent] });
BcRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioModule, imports: [[CommonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcRadioGroupComponent, BcRadioComponent],
                    imports: [CommonModule, BcIconModule],
                    exports: [BcRadioGroupComponent, BcRadioComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXJhZGlvL2JjLXJhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0FBRXRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFNSCxNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQUpULHFCQUFxQixFQUFFLGdCQUFnQixhQUM1QyxZQUFZLEVBQUUsWUFBWSxhQUMxQixxQkFBcUIsRUFBRSxnQkFBZ0I7MkdBRXRDLGFBQWEsWUFIZixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7MkZBRzFCLGFBQWE7a0JBTHpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3ZELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDO2lCQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNSYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1yYWRpby1ncm91cC9iYy1yYWRpby1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vYmMtcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmV0ZSBkZSBSYWRpbyBCdXR0b25zIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAcGFja2FnZSBiYy1yYWRpby1ncm91cCwgYmMtcmFkaW9cbiAqICAgQENvbXBvbmVudCBiYy1yYWRpby1ncm91cFxuICogICBAT3V0cHV0IG9uQ2hhbmdlKCkgZXZlbnRvIHF1ZSBzZSBkaXNwYXJhIGFsIGRldGVjdGFyIGNhbWJpb3MgZW4gZWwgZ3J1cG8gZGUgYmMtcmFkaW8sXG4gKiAgICAgICAgICAgZGV2dWVsdmUgdW4gb2JqZXRvIGNvbiBlbCBlbGVtZW50byBhY3Rpdm86IHsgbGFiZWw6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbiB2YWx1ZTogc3RyaW5nIH1cbiAqXG4gKiBAcGFja2FnZSBiYy1yYWRpb1xuICogICBAQ29tcG9uZW50IGJjLXJhZGlvXG4gKiAgIEBwYXJhbSAgaWQgSWRlbnRpZmljYWRvciB1bmljb3x8ICAoZGVmYXVsdClcbiAqICAgQHBhcmFtICBuYW1lIE5vbWJyZSBkZWwgY29tcG9uZW50ZSB8fCAgKGRlZmF1bHQpXG4gKiAgIEBwYXJhbSAgdmFsdWUgVmFsb3IgZGVsIGNvbXBvbmVudGUgfHwgIChkZWZhdWx0KVxuICogICBAcGFyYW0gIGVuYWJsZWQgSGFiaWxpdGEgbyBkZXNoYWJpbGl0YSBlbCBjb21wb25lbnRlIHx8IHRydWUgKGRlZmF1bHQpXG4gKiAgIEBwYXJhbSAgY2hlY2tlZCBTZWxlY2Npb25hIGVsIGNoZWNrfHwgZmFsc2UgKGRlZmF1bHQpXG4gKiAgIEBleGFtcGxlXG4gKiAgICA8YmMtcmFkaW8tZ3JvdXAgKG9uQ2hhbmdlKT1cInlvdXJGdW5jdGlvbigkZXZlbnQpXCI+XG4gKiAgICAgICAgIDxiYy1yYWRpbyB2YWx1ZT1cIjFcIj5EZWZhdWx0IDE8L2JjLXJhZGlvPlxuICogICAgICAgICA8YmMtcmFkaW8gdmFsdWU9XCIyXCI+RGVmYXVsdCAyPC9iYy1yYWRpbz5cbiAqICAgICAgIDwvYmMtcmFkaW8tZ3JvdXA+XG4gKlxuICpcbiAqIEBhdXRob3I6IEJhbmNvbG9tYmlhIFMuQVxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY1JhZGlvR3JvdXBDb21wb25lbnQsIEJjUmFkaW9Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0ljb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQmNSYWRpb0dyb3VwQ29tcG9uZW50LCBCY1JhZGlvQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNSYWRpb01vZHVsZSB7fVxuIl19