import { NgModule } from '@angular/core';
import { BcInputSelectV2Component } from './bc-input-select-v2.component';
import { CommonModule } from '@angular/common';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * Importa el componente BcInputSelectV2 con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-select-v2></bc-input-select-v2>
 *
 * @param  [iconName](opcional): Texto que indica el id del componente
 * @param  [label](opcional): Texto que indica el placeholder del select
 * @param  [helpText](opcional): Texto que aparece en la parte de abajo del select
 * @param  values: Array tipo [{ label: string, value: string, icon: string }] que indica los valores del select
 * @param  onChange: Output Valor de salida que indica los valores seleccionados
 *
 * @example
 *
 * <bc-input-select-v2
 * [id] = "'bc-select1'"
 * [values]="objSelect.values"
 * [label]="objSelect.placeholder"
 * [helpText]="objSelect.textBelow"
 * (onChange) = "showSelectedValue($event)"
 * ></bc-input-select-v2>
 *
 * @author: Bancolombia S.A
 */
export class BcInputSelectV2Module {
}
BcInputSelectV2Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputSelectV2Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Module, declarations: [BcInputSelectV2Component], imports: [CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule], exports: [BcInputSelectV2Component] });
BcInputSelectV2Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Module, imports: [[CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputSelectV2Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputSelectV2Component],
                    imports: [CommonModule, BcCheckboxModule, BcIconModule, ReactiveFormsModule, FormsModule],
                    exports: [BcInputSelectV2Component],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtc2VsZWN0LXYyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1zZWxlY3QtdjIvYmMtaW5wdXQtc2VsZWN0LXYyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFPSCxNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO21IQUFyQixxQkFBcUIsaUJBSmpCLHdCQUF3QixhQUM3QixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsYUFDOUUsd0JBQXdCO21IQUV2QixxQkFBcUIsWUFIdkIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQzsyRkFHOUUscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQztvQkFDekYsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjSW5wdXRTZWxlY3RWMkNvbXBvbmVudCB9IGZyb20gJy4vYmMtaW5wdXQtc2VsZWN0LXYyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNDaGVja2JveE1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1jaGVja2JveCc7XG5pbXBvcnQgeyBCY0ljb25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaWNvbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgQmNJbnB1dFNlbGVjdFYyIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtaW5wdXQtc2VsZWN0LXYyPjwvYmMtaW5wdXQtc2VsZWN0LXYyPlxuICpcbiAqIEBwYXJhbSAgW2ljb25OYW1lXShvcGNpb25hbCk6IFRleHRvIHF1ZSBpbmRpY2EgZWwgaWQgZGVsIGNvbXBvbmVudGVcbiAqIEBwYXJhbSAgW2xhYmVsXShvcGNpb25hbCk6IFRleHRvIHF1ZSBpbmRpY2EgZWwgcGxhY2Vob2xkZXIgZGVsIHNlbGVjdFxuICogQHBhcmFtICBbaGVscFRleHRdKG9wY2lvbmFsKTogVGV4dG8gcXVlIGFwYXJlY2UgZW4gbGEgcGFydGUgZGUgYWJham8gZGVsIHNlbGVjdFxuICogQHBhcmFtICB2YWx1ZXM6IEFycmF5IHRpcG8gW3sgbGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaWNvbjogc3RyaW5nIH1dIHF1ZSBpbmRpY2EgbG9zIHZhbG9yZXMgZGVsIHNlbGVjdFxuICogQHBhcmFtICBvbkNoYW5nZTogT3V0cHV0IFZhbG9yIGRlIHNhbGlkYSBxdWUgaW5kaWNhIGxvcyB2YWxvcmVzIHNlbGVjY2lvbmFkb3NcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIDxiYy1pbnB1dC1zZWxlY3QtdjJcbiAqIFtpZF0gPSBcIidiYy1zZWxlY3QxJ1wiXG4gKiBbdmFsdWVzXT1cIm9ialNlbGVjdC52YWx1ZXNcIlxuICogW2xhYmVsXT1cIm9ialNlbGVjdC5wbGFjZWhvbGRlclwiXG4gKiBbaGVscFRleHRdPVwib2JqU2VsZWN0LnRleHRCZWxvd1wiXG4gKiAob25DaGFuZ2UpID0gXCJzaG93U2VsZWN0ZWRWYWx1ZSgkZXZlbnQpXCJcbiAqID48L2JjLWlucHV0LXNlbGVjdC12Mj5cbiAqXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY0lucHV0U2VsZWN0VjJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0NoZWNrYm94TW9kdWxlLCBCY0ljb25Nb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZXhwb3J0czogW0JjSW5wdXRTZWxlY3RWMkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5wdXRTZWxlY3RWMk1vZHVsZSB7fVxuIl19