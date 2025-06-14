/**
 * Importa el componente tabs con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-tabs-group></bc-tabs-group>
 * @fileoverview Permite crear un tabulador para agrupar elementos por pestañas.
 * @param typeTheme default: 'light';
 * @fires changeState: Emite el índice del tab seleccionado cuando existe un cambio (number);
 * @param orientation : string default=horizontal;
 * @param selectedIndex default: 0;
 * @example
 * <bc-tabs-group
 *          (changeState)="myEvent($event)"
 *          [typeTheme]="'dark'"
 *          orientation="vertical"
 *          selectedIndex="1">
 *  </bc-tabs-group>
 *
 *
 * @componente <bc-tab></bc-tab>
 * @fileoverview Corresponde a un elemento de un tabulador, que puede admitir contenido por parte del usuario.
 * @description Si se desea agregar contenido a la cabecera del tabulador se debe crear una plantilla o layout (ng-template)
 * y pasar por referencia la misma al elemento usando el identificador de la misma. Lo que se encuentre dentro del tag
 * correspondiente al componente será renderizado en el cuerpo del tabulador, con excepción claro está del ng-template.
 * Si se define tanto una plantilla como un titulo de encabezado se tiene prioridad en el parámetro 'label'.
 * Si no se especifica ninguno de los anteriores se mostrará un espacion en blanco.
 * @param  label: string default: '';
 * @param  labelTemplate: TemplateRef<any> default:null;
 * @example
 * <bc-tabs-group
 *          (changeState)="myEvent($event)"
 *          [typeTheme]="'dark'"
 *          orientation="vertical"
 *          selectedIndex="1">
 *
 *        <bc-tab [labelTemplate]="tab1">
 *             <ng-template #tab1>
 *               <bc-icon size="sm" aria-hidden="true" aria-label="Tab 1">cog</bc-icon>
 *             </ng-template>
 *             <p>Disposición Inicial</p>
 *         </bc-tab>
 *  </bc-tabs-group>
 *
 *
 * @author: Bancolombia S.A.
 * _-_
 */
import { NgModule } from '@angular/core';
import { BcTabsGroupComponent } from './bc-tabs-group.component';
import { CommonModule } from '@angular/common';
import { BcTabComponent } from './bc-tab/bc-tab.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export class BcTabsModule {
}
BcTabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsModule, declarations: [BcTabsGroupComponent, BcTabComponent], imports: [CommonModule, BcIconModule], exports: [BcTabsGroupComponent, BcTabComponent] });
BcTabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsModule, providers: [BcHelperService], imports: [[CommonModule, BcIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcTabsGroupComponent, BcTabComponent],
                    imports: [CommonModule, BcIconModule],
                    providers: [BcHelperService],
                    exports: [BcTabsGroupComponent, BcTabComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFicy1ncm91cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtdGFicy1ncm91cC9iYy10YWJzLWdyb3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQVE1RSxNQUFNLE9BQU8sWUFBWTs7eUdBQVosWUFBWTswR0FBWixZQUFZLGlCQUxSLG9CQUFvQixFQUFFLGNBQWMsYUFDekMsWUFBWSxFQUFFLFlBQVksYUFFMUIsb0JBQW9CLEVBQUUsY0FBYzswR0FFbkMsWUFBWSxhQUhaLENBQUMsZUFBZSxDQUFDLFlBRG5CLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzsyRkFJMUIsWUFBWTtrQkFOeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLENBQUM7b0JBQ3BELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25lbnRlIHRhYnMgY29uXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy10YWJzLWdyb3VwPjwvYmMtdGFicy1ncm91cD5cbiAqIEBmaWxlb3ZlcnZpZXcgUGVybWl0ZSBjcmVhciB1biB0YWJ1bGFkb3IgcGFyYSBhZ3J1cGFyIGVsZW1lbnRvcyBwb3IgcGVzdGHDsWFzLlxuICogQHBhcmFtIHR5cGVUaGVtZSBkZWZhdWx0OiAnbGlnaHQnO1xuICogQGZpcmVzIGNoYW5nZVN0YXRlOiBFbWl0ZSBlbCDDrW5kaWNlIGRlbCB0YWIgc2VsZWNjaW9uYWRvIGN1YW5kbyBleGlzdGUgdW4gY2FtYmlvIChudW1iZXIpO1xuICogQHBhcmFtIG9yaWVudGF0aW9uIDogc3RyaW5nIGRlZmF1bHQ9aG9yaXpvbnRhbDtcbiAqIEBwYXJhbSBzZWxlY3RlZEluZGV4IGRlZmF1bHQ6IDA7XG4gKiBAZXhhbXBsZVxuICogPGJjLXRhYnMtZ3JvdXBcbiAqICAgICAgICAgIChjaGFuZ2VTdGF0ZSk9XCJteUV2ZW50KCRldmVudClcIlxuICogICAgICAgICAgW3R5cGVUaGVtZV09XCInZGFyaydcIlxuICogICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gKiAgICAgICAgICBzZWxlY3RlZEluZGV4PVwiMVwiPlxuICogIDwvYmMtdGFicy1ncm91cD5cbiAqXG4gKlxuICogQGNvbXBvbmVudGUgPGJjLXRhYj48L2JjLXRhYj5cbiAqIEBmaWxlb3ZlcnZpZXcgQ29ycmVzcG9uZGUgYSB1biBlbGVtZW50byBkZSB1biB0YWJ1bGFkb3IsIHF1ZSBwdWVkZSBhZG1pdGlyIGNvbnRlbmlkbyBwb3IgcGFydGUgZGVsIHVzdWFyaW8uXG4gKiBAZGVzY3JpcHRpb24gU2kgc2UgZGVzZWEgYWdyZWdhciBjb250ZW5pZG8gYSBsYSBjYWJlY2VyYSBkZWwgdGFidWxhZG9yIHNlIGRlYmUgY3JlYXIgdW5hIHBsYW50aWxsYSBvIGxheW91dCAobmctdGVtcGxhdGUpXG4gKiB5IHBhc2FyIHBvciByZWZlcmVuY2lhIGxhIG1pc21hIGFsIGVsZW1lbnRvIHVzYW5kbyBlbCBpZGVudGlmaWNhZG9yIGRlIGxhIG1pc21hLiBMbyBxdWUgc2UgZW5jdWVudHJlIGRlbnRybyBkZWwgdGFnXG4gKiBjb3JyZXNwb25kaWVudGUgYWwgY29tcG9uZW50ZSBzZXLDoSByZW5kZXJpemFkbyBlbiBlbCBjdWVycG8gZGVsIHRhYnVsYWRvciwgY29uIGV4Y2VwY2nDs24gY2xhcm8gZXN0w6EgZGVsIG5nLXRlbXBsYXRlLlxuICogU2kgc2UgZGVmaW5lIHRhbnRvIHVuYSBwbGFudGlsbGEgY29tbyB1biB0aXR1bG8gZGUgZW5jYWJlemFkbyBzZSB0aWVuZSBwcmlvcmlkYWQgZW4gZWwgcGFyw6FtZXRybyAnbGFiZWwnLlxuICogU2kgbm8gc2UgZXNwZWNpZmljYSBuaW5ndW5vIGRlIGxvcyBhbnRlcmlvcmVzIHNlIG1vc3RyYXLDoSB1biBlc3BhY2lvbiBlbiBibGFuY28uXG4gKiBAcGFyYW0gIGxhYmVsOiBzdHJpbmcgZGVmYXVsdDogJyc7XG4gKiBAcGFyYW0gIGxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gZGVmYXVsdDpudWxsO1xuICogQGV4YW1wbGVcbiAqIDxiYy10YWJzLWdyb3VwXG4gKiAgICAgICAgICAoY2hhbmdlU3RhdGUpPVwibXlFdmVudCgkZXZlbnQpXCJcbiAqICAgICAgICAgIFt0eXBlVGhlbWVdPVwiJ2RhcmsnXCJcbiAqICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICogICAgICAgICAgc2VsZWN0ZWRJbmRleD1cIjFcIj5cbiAqXG4gKiAgICAgICAgPGJjLXRhYiBbbGFiZWxUZW1wbGF0ZV09XCJ0YWIxXCI+XG4gKiAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3RhYjE+XG4gKiAgICAgICAgICAgICAgIDxiYy1pY29uIHNpemU9XCJzbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJUYWIgMVwiPmNvZzwvYmMtaWNvbj5cbiAqICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICAgICAgICAgICA8cD5EaXNwb3NpY2nDs24gSW5pY2lhbDwvcD5cbiAqICAgICAgICAgPC9iYy10YWI+XG4gKiAgPC9iYy10YWJzLWdyb3VwPlxuICpcbiAqXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkEuXG4gKiBfLV9cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNUYWJzR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2JjLXRhYnMtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY1RhYkNvbXBvbmVudCB9IGZyb20gJy4vYmMtdGFiL2JjLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNJY29uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWljb24nO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY1RhYnNHcm91cENvbXBvbmVudCwgQmNUYWJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0ljb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtCY0hlbHBlclNlcnZpY2VdLFxuICBleHBvcnRzOiBbQmNUYWJzR3JvdXBDb21wb25lbnQsIEJjVGFiQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNUYWJzTW9kdWxlIHt9XG4iXX0=