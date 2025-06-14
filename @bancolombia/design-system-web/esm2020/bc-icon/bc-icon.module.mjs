import { NgModule } from '@angular/core';
import { BcConfigIconModule } from './bc-config-icon-module';
import { BcIconComponent } from './bc-icon-component/bc-icon.component';
import * as i0 from "@angular/core";
/**
 * Importa el componente y la directiva de iconos con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-icon></bc-icon>
 * @param  class Clase CSS
 * @param  size Tamaño del icono values [ xs || 2xs || sm (Default) || md || lg || xl || 2xl || 3xl ]
 * @example
 *
 * <bc-icon bc-icon
 *      size="xl"
 *      class="'mi-icono'">
 * </bc-icon>
 *
 * @author: Bancolombia S.A
 */
export class BcIconModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcIconModule,
            providers: [{ provide: BcConfigIconModule, useValue: conf }],
        };
    }
}
BcIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconModule, declarations: [BcIconComponent], exports: [BcIconComponent] });
BcIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcIconComponent],
                    imports: [],
                    exports: [BcIconComponent],
                }]
        }] });
const defaultConfig = new BcConfigIconModule();
defaultConfig.path = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaWNvbi9iYy1pY29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRXhFOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQU1ILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBMkIsYUFBYTtRQUNyRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzdELENBQUM7SUFDSixDQUFDOzt5R0FOVSxZQUFZOzBHQUFaLFlBQVksaUJBSlIsZUFBZSxhQUVwQixlQUFlOzBHQUVkLFlBQVksWUFIZCxFQUFFOzJGQUdBLFlBQVk7a0JBTHhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCOztBQVVELE1BQU0sYUFBYSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUMvQyxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0NvbmZpZ0ljb25Nb2R1bGUgfSBmcm9tICcuL2JjLWNvbmZpZy1pY29uLW1vZHVsZSc7XG5pbXBvcnQgeyBCY0ljb25Db21wb25lbnQgfSBmcm9tICcuL2JjLWljb24tY29tcG9uZW50L2JjLWljb24uY29tcG9uZW50JztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgeSBsYSBkaXJlY3RpdmEgZGUgaWNvbm9zIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtaWNvbj48L2JjLWljb24+XG4gKiBAcGFyYW0gIGNsYXNzIENsYXNlIENTU1xuICogQHBhcmFtICBzaXplIFRhbWHDsW8gZGVsIGljb25vIHZhbHVlcyBbIHhzIHx8IDJ4cyB8fCBzbSAoRGVmYXVsdCkgfHzCoG1kIHx8wqBsZyB8fMKgeGwgfHzCoDJ4bCB8fMKgM3hswqBdXG4gKiBAZXhhbXBsZVxuICpcbiAqIDxiYy1pY29uIGJjLWljb25cbiAqICAgICAgc2l6ZT1cInhsXCJcbiAqICAgICAgY2xhc3M9XCInbWktaWNvbm8nXCI+XG4gKiA8L2JjLWljb24+XG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjSWNvbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbQmNJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNJY29uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZjogQmNDb25maWdJY29uTW9kdWxlID0gZGVmYXVsdENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QmNJY29uTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCY0ljb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEJjQ29uZmlnSWNvbk1vZHVsZSwgdXNlVmFsdWU6IGNvbmYgfV0sXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0Q29uZmlnID0gbmV3IEJjQ29uZmlnSWNvbk1vZHVsZSgpO1xuZGVmYXVsdENvbmZpZy5wYXRoID0gJyc7XG4iXX0=