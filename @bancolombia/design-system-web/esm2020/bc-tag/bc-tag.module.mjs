import { NgModule } from '@angular/core';
import { BcTagComponent } from './bc-tag.component';
import { CommonModule } from '@angular/common';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcFloatMenuModule } from '@bancolombia/design-system-web/bc-float-menu';
import * as i0 from "@angular/core";
/**
 * Importa la directiva de labels con
 * los diseños de Bancolombia S.A.
 * @package bc-tag, bc-label
 * @Component bc-tag
 * @param icon = Icono que se usara en el componente
 * @param {boolean} dismissible = Indica si se tendrá el icono de x al lado derecho o no
 * @param status = selected (seleccionado) || disabled (deshabilitado)
 * @example <bc-tag icon="calendar-alt" dismissible="true" status="selected">Label</bc-tag>
 * @Directiva bc-tag
 * @param  type Aplica el estilo al label, values [ secondary || info (Default) || alert || error || success ]
 * @example
 *           <label bc-tag type="error">Error</label>
 *
 * @Directiva bc-label
 * @param  theme Tema del label default || dark
 * @param  sizeLabel Tamaño de label default || small
 * @example
 *   <label bc-label sizeLabel="small" theme="dark">Texto del label</label>
 *
 * @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
export class BcTagModule {
}
BcTagModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTagModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagModule, declarations: [BcTagComponent], imports: [BcIconModule, BcButtonModule, CommonModule, BcFloatMenuModule], exports: [BcTagComponent] });
BcTagModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagModule, imports: [[BcIconModule, BcButtonModule, CommonModule, BcFloatMenuModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTagModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcTagComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule, BcFloatMenuModule],
                    exports: [BcTagComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWcvYmMtdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFDakY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBTUgsTUFBTSxPQUFPLFdBQVc7O3dHQUFYLFdBQVc7eUdBQVgsV0FBVyxpQkFKUCxjQUFjLGFBQ25CLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixhQUM3RCxjQUFjO3lHQUViLFdBQVcsWUFIYixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDOzJGQUc3RCxXQUFXO2tCQUx2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3hFLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNUYWdDb21wb25lbnQgfSBmcm9tICcuL2JjLXRhZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWJ1dHRvbic7XG5pbXBvcnQgeyBCY0ljb25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaWNvbic7XG5pbXBvcnQgeyBCY0Zsb2F0TWVudU1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1mbG9hdC1tZW51Jztcbi8qKlxuICogSW1wb3J0YSBsYSBkaXJlY3RpdmEgZGUgbGFiZWxzIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIEBwYWNrYWdlIGJjLXRhZywgYmMtbGFiZWxcbiAqIEBDb21wb25lbnQgYmMtdGFnXG4gKiBAcGFyYW0gaWNvbiA9IEljb25vIHF1ZSBzZSB1c2FyYSBlbiBlbCBjb21wb25lbnRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRpc21pc3NpYmxlID0gSW5kaWNhIHNpIHNlIHRlbmRyw6EgZWwgaWNvbm8gZGUgeCBhbCBsYWRvIGRlcmVjaG8gbyBub1xuICogQHBhcmFtIHN0YXR1cyA9IHNlbGVjdGVkIChzZWxlY2Npb25hZG8pIHx8IGRpc2FibGVkIChkZXNoYWJpbGl0YWRvKVxuICogQGV4YW1wbGUgPGJjLXRhZyBpY29uPVwiY2FsZW5kYXItYWx0XCIgZGlzbWlzc2libGU9XCJ0cnVlXCIgc3RhdHVzPVwic2VsZWN0ZWRcIj5MYWJlbDwvYmMtdGFnPlxuICogQERpcmVjdGl2YSBiYy10YWdcbiAqIEBwYXJhbSAgdHlwZSBBcGxpY2EgZWwgZXN0aWxvIGFsIGxhYmVsLCB2YWx1ZXMgWyBzZWNvbmRhcnkgfHzCoGluZm8gKERlZmF1bHQpIHx8IGFsZXJ0IHx8IGVycm9yIHx8wqBzdWNjZXNzIF1cbiAqIEBleGFtcGxlXG4gKiAgICAgICAgICAgPGxhYmVsIGJjLXRhZyB0eXBlPVwiZXJyb3JcIj5FcnJvcjwvbGFiZWw+XG4gKlxuICogQERpcmVjdGl2YSBiYy1sYWJlbFxuICogQHBhcmFtICB0aGVtZSBUZW1hIGRlbCBsYWJlbCBkZWZhdWx0IHx8IGRhcmtcbiAqIEBwYXJhbSAgc2l6ZUxhYmVsIFRhbWHDsW8gZGUgbGFiZWwgZGVmYXVsdCB8fCBzbWFsbFxuICogQGV4YW1wbGVcbiAqICAgPGxhYmVsIGJjLWxhYmVsIHNpemVMYWJlbD1cInNtYWxsXCIgdGhlbWU9XCJkYXJrXCI+VGV4dG8gZGVsIGxhYmVsPC9sYWJlbD5cbiAqXG4gKiBAQWR2ZXJ0ZW5jaWEgRWwgdXNvIGRlIGNvbG9yZXMgcG9yIGxldHJhcyBlamVtcGxvIHJlZCwgZ3JlZW4sIGJsdWUgbm8gc29uIGNvbXBhdGlibGVzXG4gKiAgICAgICAgICAgICAgICAgIHB1ZXMgbm8gaGFjZW4gcGFydGUgZGVsIHNpc3RlbWEgZGUgZGlzZcOxb1xuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjVGFnQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0JjSWNvbk1vZHVsZSwgQmNCdXR0b25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgQmNGbG9hdE1lbnVNb2R1bGVdLFxuICBleHBvcnRzOiBbQmNUYWdDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY1RhZ01vZHVsZSB7fVxuIl19