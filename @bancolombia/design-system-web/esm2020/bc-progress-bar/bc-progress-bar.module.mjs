import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcProgressBarComponent } from './bc-progress-bar.component';
import * as i0 from "@angular/core";
/**
 * Importa el componente de barra de progreso con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-progress-bar></bc-progress-bar>
 *
 * @param  size Tamaño en pixeles de la barra de progreso
 * @param  direction Vertical || horizontal (default)
 * @param  progress Valor porcentual de la barra
 * @param  maxValue Valor maximo de la barra
 * @param  minValue Valor minimo de la barra
 * @example
 * <bc-progress-bar
 *      size="500"
 *      progress="10"
 *      maxValue = 200
 *      minValue = 0
 *      direction="vertical">
 * </bc-progress-bar>
 *
 * @author: Bancolombia S.A
 */
export class BcProgressBarWebModule {
}
BcProgressBarWebModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarWebModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcProgressBarWebModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarWebModule, declarations: [BcProgressBarComponent], imports: [CommonModule], exports: [BcProgressBarComponent] });
BcProgressBarWebModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarWebModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcProgressBarWebModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcProgressBarComponent],
                    imports: [CommonModule],
                    exports: [BcProgressBarComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcHJvZ3Jlc3MtYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wcm9ncmVzcy1iYXIvYmMtcHJvZ3Jlc3MtYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFckU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQU1ILE1BQU0sT0FBTyxzQkFBc0I7O21IQUF0QixzQkFBc0I7b0hBQXRCLHNCQUFzQixpQkFKbEIsc0JBQXNCLGFBQzNCLFlBQVksYUFDWixzQkFBc0I7b0hBRXJCLHNCQUFzQixZQUh4QixDQUFDLFlBQVksQ0FBQzsyRkFHWixzQkFBc0I7a0JBTGxDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY1Byb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgZGUgYmFycmEgZGUgcHJvZ3Jlc28gY29uXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy1wcm9ncmVzcy1iYXI+PC9iYy1wcm9ncmVzcy1iYXI+XG4gKlxuICogQHBhcmFtICBzaXplIFRhbWHDsW8gZW4gcGl4ZWxlcyBkZSBsYSBiYXJyYSBkZSBwcm9ncmVzb1xuICogQHBhcmFtICBkaXJlY3Rpb24gVmVydGljYWwgfHwgaG9yaXpvbnRhbCAoZGVmYXVsdClcbiAqIEBwYXJhbSAgcHJvZ3Jlc3MgVmFsb3IgcG9yY2VudHVhbCBkZSBsYSBiYXJyYVxuICogQHBhcmFtICBtYXhWYWx1ZSBWYWxvciBtYXhpbW8gZGUgbGEgYmFycmFcbiAqIEBwYXJhbSAgbWluVmFsdWUgVmFsb3IgbWluaW1vIGRlIGxhIGJhcnJhXG4gKiBAZXhhbXBsZVxuICogPGJjLXByb2dyZXNzLWJhclxuICogICAgICBzaXplPVwiNTAwXCJcbiAqICAgICAgcHJvZ3Jlc3M9XCIxMFwiXG4gKiAgICAgIG1heFZhbHVlID0gMjAwXG4gKiAgICAgIG1pblZhbHVlID0gMFxuICogICAgICBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICogPC9iYy1wcm9ncmVzcy1iYXI+XG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjUHJvZ3Jlc3NCYXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0JjUHJvZ3Jlc3NCYXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY1Byb2dyZXNzQmFyV2ViTW9kdWxlIHt9XG4iXX0=