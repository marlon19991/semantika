import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcCircleLoadingComponent } from './bc-circle-loading.component';
import { BcLoaderModule } from '@bancolombia/design-system-web/bc-loader';
import * as i0 from "@angular/core";
/**
 * Importa el componente bcCircleLoading con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-circle-loading></bc-circle-loading>
 *
 * @param  text: Texto general del componente de carga
 * @param  accessibilityLabel: Texto usado para ayuda en la accesibilidad, usado para dar la descripción del estado de carga para los lectores de pantalla
 * @param  speedLoader: Velocidad de la animación del loader, para mayor info consultar el componente <bc-loader>.
 * @param componentId: ID que se le asignará en el html del componente, debe ser asignado para
 * facilitar la automatizacion y la certificación
 *
 * @example
 *
 * <bc-circle-loading
 *  text="Cargando..."
 *  id="ejemplo"
 *  accessibilityLabel="ejemplo de aria label"
 *  speedLoader="2">
 * </bc-circle-loading>
 *
 * @author: Bancolombia S.A
 */
export class BcCircleLoadingModule {
}
BcCircleLoadingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCircleLoadingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingModule, declarations: [BcCircleLoadingComponent], imports: [BcLoaderModule, CommonModule], exports: [BcCircleLoadingComponent] });
BcCircleLoadingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingModule, imports: [[BcLoaderModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCircleLoadingComponent],
                    imports: [BcLoaderModule, CommonModule],
                    exports: [BcCircleLoadingComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2lyY2xlLWxvYWRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNpcmNsZS1sb2FkaW5nL2JjLWNpcmNsZS1sb2FkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBRTFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBT0gsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQUpqQix3QkFBd0IsYUFDN0IsY0FBYyxFQUFFLFlBQVksYUFDNUIsd0JBQXdCO21IQUV2QixxQkFBcUIsWUFIdkIsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDOzJGQUc1QixxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNDaXJjbGVMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1jaXJjbGUtbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNMb2FkZXJNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtbG9hZGVyJztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgYmNDaXJjbGVMb2FkaW5nIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtY2lyY2xlLWxvYWRpbmc+PC9iYy1jaXJjbGUtbG9hZGluZz5cbiAqXG4gKiBAcGFyYW0gIHRleHQ6IFRleHRvIGdlbmVyYWwgZGVsIGNvbXBvbmVudGUgZGUgY2FyZ2FcbiAqIEBwYXJhbSAgYWNjZXNzaWJpbGl0eUxhYmVsOiBUZXh0byB1c2FkbyBwYXJhIGF5dWRhIGVuIGxhIGFjY2VzaWJpbGlkYWQsIHVzYWRvIHBhcmEgZGFyIGxhIGRlc2NyaXBjacOzbiBkZWwgZXN0YWRvIGRlIGNhcmdhIHBhcmEgbG9zIGxlY3RvcmVzIGRlIHBhbnRhbGxhXG4gKiBAcGFyYW0gIHNwZWVkTG9hZGVyOiBWZWxvY2lkYWQgZGUgbGEgYW5pbWFjacOzbiBkZWwgbG9hZGVyLCBwYXJhIG1heW9yIGluZm8gY29uc3VsdGFyIGVsIGNvbXBvbmVudGUgPGJjLWxvYWRlcj4uXG4gKiBAcGFyYW0gY29tcG9uZW50SWQ6IElEIHF1ZSBzZSBsZSBhc2lnbmFyw6EgZW4gZWwgaHRtbCBkZWwgY29tcG9uZW50ZSwgZGViZSBzZXIgYXNpZ25hZG8gcGFyYVxuICogZmFjaWxpdGFyIGxhIGF1dG9tYXRpemFjaW9uIHkgbGEgY2VydGlmaWNhY2nDs25cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIDxiYy1jaXJjbGUtbG9hZGluZ1xuICogIHRleHQ9XCJDYXJnYW5kby4uLlwiXG4gKiAgaWQ9XCJlamVtcGxvXCJcbiAqICBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJlamVtcGxvIGRlIGFyaWEgbGFiZWxcIlxuICogIHNwZWVkTG9hZGVyPVwiMlwiPlxuICogPC9iYy1jaXJjbGUtbG9hZGluZz5cbiAqXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY0NpcmNsZUxvYWRpbmdDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQmNMb2FkZXJNb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtCY0NpcmNsZUxvYWRpbmdDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY0NpcmNsZUxvYWRpbmdNb2R1bGUge31cbiJdfQ==