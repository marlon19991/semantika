import { NgModule } from '@angular/core';
import { BcButtonDirective } from './bc-button.directive';
import * as i0 from "@angular/core";
/**
 * Importa la directiva de botones con
 * los diseños de Bancolombia S.A.
 * @package bc-button, bc-button-ico
 *   @Directiva bc-button
 *   @param  typeButton  Tipo de botón  primary (default) || secondary || terciary (a ser deprecada por tertiary) || tertiary ||  background || ghost
 *   @param  sizeButton  (default) || small || puffy
 *   @example
 *   <button disabled bc-button
 *       typeButton="secondary"
 *       sizeButton="puffy"
 *   >
 *       Acá texto del botón
 *   </button>
 *
 *   @Directiva bc-button-icon
 *   @description (deprecada) Utilizar componente bc-icon-button
 *   @Dependencias Esta directiva depende directamente del comoponente bc-icons
 *   @example
 *   <button bc-button-icon typeButton="icon" class="child">
 *       <bc-icons
 *           svgIconName="apple"
 *           height="40" width="40"
 *           color="#00448d">
 *       </bc-icons>
 *   </button>
 *
 *   @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
export class BcButtonModule {
}
BcButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonModule, declarations: [BcButtonDirective], exports: [BcButtonDirective] });
BcButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcButtonDirective],
                    imports: [],
                    exports: [BcButtonDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1idXR0b24vYmMtYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUUxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBTUgsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFKVixpQkFBaUIsYUFFdEIsaUJBQWlCOzRHQUVoQixjQUFjLFlBSGhCLEVBQUU7MkZBR0EsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9iYy1idXR0b24uZGlyZWN0aXZlJztcblxuLyoqXG4gKiBJbXBvcnRhIGxhIGRpcmVjdGl2YSBkZSBib3RvbmVzIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIEBwYWNrYWdlIGJjLWJ1dHRvbiwgYmMtYnV0dG9uLWljb1xuICogICBARGlyZWN0aXZhIGJjLWJ1dHRvblxuICogICBAcGFyYW0gIHR5cGVCdXR0b24gIFRpcG8gZGUgYm90w7NuICBwcmltYXJ5IChkZWZhdWx0KSB8fCBzZWNvbmRhcnkgfHwgdGVyY2lhcnkgKGEgc2VyIGRlcHJlY2FkYSBwb3IgdGVydGlhcnkpIHx8IHRlcnRpYXJ5IHx8ICBiYWNrZ3JvdW5kIHx8IGdob3N0XG4gKiAgIEBwYXJhbSAgc2l6ZUJ1dHRvbiAgKGRlZmF1bHQpIHx8IHNtYWxsIHx8IHB1ZmZ5XG4gKiAgIEBleGFtcGxlXG4gKiAgIDxidXR0b24gZGlzYWJsZWQgYmMtYnV0dG9uXG4gKiAgICAgICB0eXBlQnV0dG9uPVwic2Vjb25kYXJ5XCJcbiAqICAgICAgIHNpemVCdXR0b249XCJwdWZmeVwiXG4gKiAgID5cbiAqICAgICAgIEFjw6EgdGV4dG8gZGVsIGJvdMOzblxuICogICA8L2J1dHRvbj5cbiAqXG4gKiAgIEBEaXJlY3RpdmEgYmMtYnV0dG9uLWljb25cbiAqICAgQGRlc2NyaXB0aW9uIChkZXByZWNhZGEpIFV0aWxpemFyIGNvbXBvbmVudGUgYmMtaWNvbi1idXR0b25cbiAqICAgQERlcGVuZGVuY2lhcyBFc3RhIGRpcmVjdGl2YSBkZXBlbmRlIGRpcmVjdGFtZW50ZSBkZWwgY29tb3BvbmVudGUgYmMtaWNvbnNcbiAqICAgQGV4YW1wbGVcbiAqICAgPGJ1dHRvbiBiYy1idXR0b24taWNvbiB0eXBlQnV0dG9uPVwiaWNvblwiIGNsYXNzPVwiY2hpbGRcIj5cbiAqICAgICAgIDxiYy1pY29uc1xuICogICAgICAgICAgIHN2Z0ljb25OYW1lPVwiYXBwbGVcIlxuICogICAgICAgICAgIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiXG4gKiAgICAgICAgICAgY29sb3I9XCIjMDA0NDhkXCI+XG4gKiAgICAgICA8L2JjLWljb25zPlxuICogICA8L2J1dHRvbj5cbiAqXG4gKiAgIEBBZHZlcnRlbmNpYSBFbCB1c28gZGUgY29sb3JlcyBwb3IgbGV0cmFzIGVqZW1wbG8gcmVkLCBncmVlbiwgYmx1ZSBubyBzb24gY29tcGF0aWJsZXNcbiAqICAgICAgICAgICAgICAgICAgcHVlcyBubyBoYWNlbiBwYXJ0ZSBkZWwgc2lzdGVtYSBkZSBkaXNlw7FvXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNCdXR0b25EaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW0JjQnV0dG9uRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgQmNCdXR0b25Nb2R1bGUge31cbiJdfQ==