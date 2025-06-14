import { NgModule } from '@angular/core';
import { BcInputSelectComponent } from './bc-input-select.component';
import { CommonModule } from '@angular/common';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * Importa el componente BcInputSelect con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-select></bc-input-select>
 *
 * @param  [iconLeft](opcional): Texto que indica el id del componente
 * @param  [placeholder](opcional): Texto que indica el placeholder del select
 * @param  [textBelow](opcional): Texto que aparece en la parte de abajo del select
 * @param  values: Array tipo [{ text: string }] que indica los valores del select
 * @param [iconLeft](opcional): Boolean que indica si el select tiene iconos a la izquierda.
 * Si tiene se deben de enviar [{ text: string, icon: string }]
 * @param [valueInput](opcional): Array tipo [{ text: string }] y si es isMultipleChk true.
 * Si no debe de ser el valueinput texto
 * @param [isError](opcional): Boolean que indica si tiene estilo error el select o no. por defecto falso
 * @param [isDisabled](opcional): Boolean que indica si tiene estilo disabled el select o no. por defecto falso
 * @param  [isMultipleChk](opcional): Boolean que indica si tiene checkbox de seleccion multiple
 * @param  valueOutput: Output Valor de salida que indica los valores seleccionados
 *
 * @example
 *
 * <bc-input-select
 * [id] = "'bc-select1'"
 * [values]="objSelect.values"
 * [placeholder]="objSelect.placeholder"
 * [textBelow]="objSelect.textBelow"
 * (valueOutput) = "showSelectedValue($event)"
 * ></bc-input-select>
 *
 * @author: Bancolombia S.A
 */
export class BcInputSelectModule {
}
BcInputSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectModule, declarations: [BcInputSelectComponent], imports: [CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule], exports: [BcInputSelectComponent] });
BcInputSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectModule, imports: [[CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputSelectComponent],
                    imports: [CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule],
                    exports: [BcInputSelectComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1zZWxlY3QvYmMtaW5wdXQtc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBT0gsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQUpmLHNCQUFzQixhQUMzQixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsYUFDOUUsc0JBQXNCO2lIQUVyQixtQkFBbUIsWUFIckIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQzsyRkFHOUUsbUJBQW1CO2tCQUwvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQztvQkFDekYsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjSW5wdXRTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2JjLWlucHV0LXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtY2hlY2tib3gnO1xuaW1wb3J0IHsgQmNJY29uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWljb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25lbnRlIEJjSW5wdXRTZWxlY3QgY29uXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy1pbnB1dC1zZWxlY3Q+PC9iYy1pbnB1dC1zZWxlY3Q+XG4gKlxuICogQHBhcmFtICBbaWNvbkxlZnRdKG9wY2lvbmFsKTogVGV4dG8gcXVlIGluZGljYSBlbCBpZCBkZWwgY29tcG9uZW50ZVxuICogQHBhcmFtICBbcGxhY2Vob2xkZXJdKG9wY2lvbmFsKTogVGV4dG8gcXVlIGluZGljYSBlbCBwbGFjZWhvbGRlciBkZWwgc2VsZWN0XG4gKiBAcGFyYW0gIFt0ZXh0QmVsb3ddKG9wY2lvbmFsKTogVGV4dG8gcXVlIGFwYXJlY2UgZW4gbGEgcGFydGUgZGUgYWJham8gZGVsIHNlbGVjdFxuICogQHBhcmFtICB2YWx1ZXM6IEFycmF5IHRpcG8gW3sgdGV4dDogc3RyaW5nIH1dIHF1ZSBpbmRpY2EgbG9zIHZhbG9yZXMgZGVsIHNlbGVjdFxuICogQHBhcmFtIFtpY29uTGVmdF0ob3BjaW9uYWwpOiBCb29sZWFuIHF1ZSBpbmRpY2Egc2kgZWwgc2VsZWN0IHRpZW5lIGljb25vcyBhIGxhIGl6cXVpZXJkYS5cbiAqIFNpIHRpZW5lIHNlIGRlYmVuIGRlIGVudmlhciBbeyB0ZXh0OiBzdHJpbmcsIGljb246IHN0cmluZyB9XVxuICogQHBhcmFtIFt2YWx1ZUlucHV0XShvcGNpb25hbCk6IEFycmF5IHRpcG8gW3sgdGV4dDogc3RyaW5nIH1dIHkgc2kgZXMgaXNNdWx0aXBsZUNoayB0cnVlLlxuICogU2kgbm8gZGViZSBkZSBzZXIgZWwgdmFsdWVpbnB1dCB0ZXh0b1xuICogQHBhcmFtIFtpc0Vycm9yXShvcGNpb25hbCk6IEJvb2xlYW4gcXVlIGluZGljYSBzaSB0aWVuZSBlc3RpbG8gZXJyb3IgZWwgc2VsZWN0IG8gbm8uIHBvciBkZWZlY3RvIGZhbHNvXG4gKiBAcGFyYW0gW2lzRGlzYWJsZWRdKG9wY2lvbmFsKTogQm9vbGVhbiBxdWUgaW5kaWNhIHNpIHRpZW5lIGVzdGlsbyBkaXNhYmxlZCBlbCBzZWxlY3QgbyBuby4gcG9yIGRlZmVjdG8gZmFsc29cbiAqIEBwYXJhbSAgW2lzTXVsdGlwbGVDaGtdKG9wY2lvbmFsKTogQm9vbGVhbiBxdWUgaW5kaWNhIHNpIHRpZW5lIGNoZWNrYm94IGRlIHNlbGVjY2lvbiBtdWx0aXBsZVxuICogQHBhcmFtICB2YWx1ZU91dHB1dDogT3V0cHV0IFZhbG9yIGRlIHNhbGlkYSBxdWUgaW5kaWNhIGxvcyB2YWxvcmVzIHNlbGVjY2lvbmFkb3NcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIDxiYy1pbnB1dC1zZWxlY3RcbiAqIFtpZF0gPSBcIidiYy1zZWxlY3QxJ1wiXG4gKiBbdmFsdWVzXT1cIm9ialNlbGVjdC52YWx1ZXNcIlxuICogW3BsYWNlaG9sZGVyXT1cIm9ialNlbGVjdC5wbGFjZWhvbGRlclwiXG4gKiBbdGV4dEJlbG93XT1cIm9ialNlbGVjdC50ZXh0QmVsb3dcIlxuICogKHZhbHVlT3V0cHV0KSA9IFwic2hvd1NlbGVjdGVkVmFsdWUoJGV2ZW50KVwiXG4gKiA+PC9iYy1pbnB1dC1zZWxlY3Q+XG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNJbnB1dFNlbGVjdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEJjQ2hlY2tib3hNb2R1bGUsIEJjSWNvbk1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbQmNJbnB1dFNlbGVjdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5wdXRTZWxlY3RNb2R1bGUge31cbiJdfQ==