import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BcCoachMarkComponent } from './bc-coach-mark.component';
import { CommonModule } from '@angular/common';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
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
export class BcCoachMarkModule {
}
BcCoachMarkModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCoachMarkModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkModule, declarations: [BcCoachMarkComponent], imports: [BcIconModule, BcButtonModule, CommonModule], exports: [BcCoachMarkComponent] });
BcCoachMarkModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkModule, imports: [[BcIconModule, BcButtonModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcCoachMarkComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule],
                    exports: [BcCoachMarkComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY29hY2gtbWFyay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtY29hY2gtbWFyay9iYy1jb2FjaC1tYXJrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUN0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFPSCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBTFgsb0JBQW9CLGFBQ3pCLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxhQUMxQyxvQkFBb0I7K0dBR3JCLGlCQUFpQixZQUpqQixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDOzJGQUk1QyxpQkFBaUI7a0JBTjdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDO29CQUNyRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjQ29hY2hNYXJrQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1jb2FjaC1tYXJrLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY0J1dHRvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1idXR0b24nO1xuaW1wb3J0IHsgQmNJY29uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWljb24nO1xuLyoqXG4gKiBJbXBvcnRhIGxhIGRpcmVjdGl2YSBkZSBsYWJlbHMgY29uXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICogQHBhY2thZ2UgYmMtdGFnLCBiYy1sYWJlbFxuICogQENvbXBvbmVudCBiYy10YWdcbiAqIEBwYXJhbSBpY29uID0gSWNvbm8gcXVlIHNlIHVzYXJhIGVuIGVsIGNvbXBvbmVudGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzbWlzc2libGUgPSBJbmRpY2Egc2kgc2UgdGVuZHLDoSBlbCBpY29ubyBkZSB4IGFsIGxhZG8gZGVyZWNobyBvIG5vXG4gKiBAcGFyYW0gc3RhdHVzID0gc2VsZWN0ZWQgKHNlbGVjY2lvbmFkbykgfHwgZGlzYWJsZWQgKGRlc2hhYmlsaXRhZG8pXG4gKiBAZXhhbXBsZSA8YmMtdGFnIGljb249XCJjYWxlbmRhci1hbHRcIiBkaXNtaXNzaWJsZT1cInRydWVcIiBzdGF0dXM9XCJzZWxlY3RlZFwiPkxhYmVsPC9iYy10YWc+XG4gKiBARGlyZWN0aXZhIGJjLXRhZ1xuICogQHBhcmFtICB0eXBlIEFwbGljYSBlbCBlc3RpbG8gYWwgbGFiZWwsIHZhbHVlcyBbIHNlY29uZGFyeSB8fMKgaW5mbyAoRGVmYXVsdCkgfHwgYWxlcnQgfHwgZXJyb3IgfHzCoHN1Y2Nlc3MgXVxuICogQGV4YW1wbGVcbiAqICAgICAgICAgICA8bGFiZWwgYmMtdGFnIHR5cGU9XCJlcnJvclwiPkVycm9yPC9sYWJlbD5cbiAqXG4gKiBARGlyZWN0aXZhIGJjLWxhYmVsXG4gKiBAcGFyYW0gIHRoZW1lIFRlbWEgZGVsIGxhYmVsIGRlZmF1bHQgfHwgZGFya1xuICogQHBhcmFtICBzaXplTGFiZWwgVGFtYcOxbyBkZSBsYWJlbCBkZWZhdWx0IHx8IHNtYWxsXG4gKiBAZXhhbXBsZVxuICogICA8bGFiZWwgYmMtbGFiZWwgc2l6ZUxhYmVsPVwic21hbGxcIiB0aGVtZT1cImRhcmtcIj5UZXh0byBkZWwgbGFiZWw8L2xhYmVsPlxuICpcbiAqIEBBZHZlcnRlbmNpYSBFbCB1c28gZGUgY29sb3JlcyBwb3IgbGV0cmFzIGVqZW1wbG8gcmVkLCBncmVlbiwgYmx1ZSBubyBzb24gY29tcGF0aWJsZXNcbiAqICAgICAgICAgICAgICAgICAgcHVlcyBubyBoYWNlbiBwYXJ0ZSBkZWwgc2lzdGVtYSBkZSBkaXNlw7FvXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtCY0NvYWNoTWFya0NvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0JjSWNvbk1vZHVsZSwgQmNCdXR0b25Nb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0JjQ29hY2hNYXJrQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEJjQ29hY2hNYXJrTW9kdWxlIHsgfSJdfQ==