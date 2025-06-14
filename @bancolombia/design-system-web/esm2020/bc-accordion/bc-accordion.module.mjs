import { BcAccordionContentComponent } from './bc-accordion-content/bc-accordion-content.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcAccordionGroupComponent } from './bc-accordion-group.component';
import { BcAccordionComponent } from './bc-accordion/bc-accordion.component';
import { BcAccordionHeaderComponent } from './bc-accordion-header/bc-accordion-header.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';
import { BcIconButtonModule } from '@bancolombia/design-system-web/bc-icon-button';
import { BcAccordionContentDirDirective } from './bc-accordion-content/bc-accordion-content-dir.directive';
import * as i0 from "@angular/core";
/**
 * Importa el acordion con los diseños de Bancolombia S.A.
 * @package bc-accordions-group, bc-accordion, bc-accordion-header, bc-accordion-content
 * @Component bc-accordions-group
 * @Description Este componente parametriza el comportamiento del acordeon como grupo
 * @param multiple Define el comportamiento de evento expandir de la acordeón
 * Si es multiple, solo se podrá expandir una acordeón a la vez
 * es decir, al expandir una se cierra la que estaba activa
 * @Component bc-accordion
 * @Description Este componente se encarga de dar formato a cada acordeon y el comportamiento
 * de abierto y cerrado
 * @param type Tipo de accordeón [ basic(default) | info | advance | column | minimal | minimal-unbordered]
 * @Component bc-accordion-header
 * @param title  Título principal
 * @param subtitle  Subtítulo
 * @param leftIcon  Icono a la izquierda
 * @param titleIcon  Icono al lado del título
 * @param subtitleIcon  Icono al lado del subtítulo
 * @param active  Indicar si esta activo
 * @param actionsIcon  Icono de las acciones a la derecha
 * @param columns  Valores de las columnas a la derecha de tipo AccordionColumn
 * @param label  Label a la parte derecha
 * @param actionSelected Evento cuando se selecciona una acción
 * @param iconRight Icono al extremo derecho, permite expadir o contraer la acordeón
 * @Component bc-accordion-content
 * @Description Este componente organiza administra el contenido del acordeon el cual
 * es libre para el desarrollador
 *
 * @example
 *  <h3>Acordeón avazando</h3>
 *   <bc-accordions-group>
 *     <bc-accordion>
 *       <bc-accordion-header
 *         leftIcon="idea"
 *         title="Acordeón avazando"
 *         titleIcon="info"
 *         subtitle="Subtítulo"
 *         subtitleIcon="info"
 *         [actionsIcon]="actionsIcon"
 *         (actionSelected)="myAction($event)"
 *       ></bc-accordion-header>
 *       <bc-accordion-content>
 *         Tiene los elementos esenciales y se le adiciona un subtítulo y más
 *         opciones de iconos para acciones relacionadas al componente.
 *       </bc-accordion-content>
 *     </bc-accordion>
 *   </bc-accordions-group>
 *
 * @author: Bancolombia S.A
 */
export class BcAccordionModule {
}
BcAccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcAccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionModule, declarations: [BcAccordionGroupComponent,
        BcAccordionComponent,
        BcAccordionHeaderComponent,
        BcAccordionContentComponent,
        BcAccordionContentDirDirective], imports: [CommonModule, BcIconModule, BcTooltipModule, BcIconButtonModule], exports: [BcAccordionGroupComponent, BcAccordionComponent, BcAccordionHeaderComponent, BcAccordionContentComponent, BcAccordionContentDirDirective] });
BcAccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionModule, imports: [[CommonModule, BcIconModule, BcTooltipModule, BcIconButtonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcAccordionGroupComponent,
                        BcAccordionComponent,
                        BcAccordionHeaderComponent,
                        BcAccordionContentComponent,
                        BcAccordionContentDirDirective
                    ],
                    imports: [CommonModule, BcIconModule, BcTooltipModule, BcIconButtonModule],
                    exports: [BcAccordionGroupComponent, BcAccordionComponent, BcAccordionHeaderComponent, BcAccordionContentComponent, BcAccordionContentDirDirective],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hY2NvcmRpb24vYmMtYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztBQUUzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlERztBQWFILE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFWMUIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLDhCQUE4QixhQUV0QixZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsYUFDL0QseUJBQXlCLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsMkJBQTJCLEVBQUUsOEJBQThCOytHQUd2SSxpQkFBaUIsWUFKbkIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQzsyRkFJL0QsaUJBQWlCO2tCQVo3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLDhCQUE4QjtxQkFDL0I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7b0JBQzFFLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO29CQUNuSixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCY0FjY29yZGlvbkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2JjLWFjY29yZGlvbi1jb250ZW50L2JjLWFjY29yZGlvbi1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjQWNjb3JkaW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2JjLWFjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2JjLWFjY29yZGlvbi9iYy1hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1hY2NvcmRpb24taGVhZGVyL2JjLWFjY29yZGlvbi1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcbmltcG9ydCB7IEJjVG9vbHRpcE1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy10b29sdGlwJztcbmltcG9ydCB7IEJjSWNvbkJ1dHRvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uLWJ1dHRvbic7XG5pbXBvcnQgeyBCY0FjY29yZGlvbkNvbnRlbnREaXJEaXJlY3RpdmUgfSBmcm9tICcuL2JjLWFjY29yZGlvbi1jb250ZW50L2JjLWFjY29yZGlvbi1jb250ZW50LWRpci5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIEltcG9ydGEgZWwgYWNvcmRpb24gY29uIGxvcyBkaXNlw7FvcyBkZSBCYW5jb2xvbWJpYSBTLkEuXG4gKiBAcGFja2FnZSBiYy1hY2NvcmRpb25zLWdyb3VwLCBiYy1hY2NvcmRpb24sIGJjLWFjY29yZGlvbi1oZWFkZXIsIGJjLWFjY29yZGlvbi1jb250ZW50XG4gKiBAQ29tcG9uZW50IGJjLWFjY29yZGlvbnMtZ3JvdXBcbiAqIEBEZXNjcmlwdGlvbiBFc3RlIGNvbXBvbmVudGUgcGFyYW1ldHJpemEgZWwgY29tcG9ydGFtaWVudG8gZGVsIGFjb3JkZW9uIGNvbW8gZ3J1cG9cbiAqIEBwYXJhbSBtdWx0aXBsZSBEZWZpbmUgZWwgY29tcG9ydGFtaWVudG8gZGUgZXZlbnRvIGV4cGFuZGlyIGRlIGxhIGFjb3JkZcOzblxuICogU2kgZXMgbXVsdGlwbGUsIHNvbG8gc2UgcG9kcsOhIGV4cGFuZGlyIHVuYSBhY29yZGXDs24gYSBsYSB2ZXpcbiAqIGVzIGRlY2lyLCBhbCBleHBhbmRpciB1bmEgc2UgY2llcnJhIGxhIHF1ZSBlc3RhYmEgYWN0aXZhXG4gKiBAQ29tcG9uZW50IGJjLWFjY29yZGlvblxuICogQERlc2NyaXB0aW9uIEVzdGUgY29tcG9uZW50ZSBzZSBlbmNhcmdhIGRlIGRhciBmb3JtYXRvIGEgY2FkYSBhY29yZGVvbiB5IGVsIGNvbXBvcnRhbWllbnRvXG4gKiBkZSBhYmllcnRvIHkgY2VycmFkb1xuICogQHBhcmFtIHR5cGUgVGlwbyBkZSBhY2NvcmRlw7NuIFsgYmFzaWMoZGVmYXVsdCkgfCBpbmZvIHwgYWR2YW5jZSB8IGNvbHVtbiB8IG1pbmltYWwgfCBtaW5pbWFsLXVuYm9yZGVyZWRdXG4gKiBAQ29tcG9uZW50IGJjLWFjY29yZGlvbi1oZWFkZXJcbiAqIEBwYXJhbSB0aXRsZSAgVMOtdHVsbyBwcmluY2lwYWxcbiAqIEBwYXJhbSBzdWJ0aXRsZSAgU3VidMOtdHVsb1xuICogQHBhcmFtIGxlZnRJY29uICBJY29ubyBhIGxhIGl6cXVpZXJkYVxuICogQHBhcmFtIHRpdGxlSWNvbiAgSWNvbm8gYWwgbGFkbyBkZWwgdMOtdHVsb1xuICogQHBhcmFtIHN1YnRpdGxlSWNvbiAgSWNvbm8gYWwgbGFkbyBkZWwgc3VidMOtdHVsb1xuICogQHBhcmFtIGFjdGl2ZSAgSW5kaWNhciBzaSBlc3RhIGFjdGl2b1xuICogQHBhcmFtIGFjdGlvbnNJY29uICBJY29ubyBkZSBsYXMgYWNjaW9uZXMgYSBsYSBkZXJlY2hhXG4gKiBAcGFyYW0gY29sdW1ucyAgVmFsb3JlcyBkZSBsYXMgY29sdW1uYXMgYSBsYSBkZXJlY2hhIGRlIHRpcG8gQWNjb3JkaW9uQ29sdW1uXG4gKiBAcGFyYW0gbGFiZWwgIExhYmVsIGEgbGEgcGFydGUgZGVyZWNoYVxuICogQHBhcmFtIGFjdGlvblNlbGVjdGVkIEV2ZW50byBjdWFuZG8gc2Ugc2VsZWNjaW9uYSB1bmEgYWNjacOzblxuICogQHBhcmFtIGljb25SaWdodCBJY29ubyBhbCBleHRyZW1vIGRlcmVjaG8sIHBlcm1pdGUgZXhwYWRpciBvIGNvbnRyYWVyIGxhIGFjb3JkZcOzblxuICogQENvbXBvbmVudCBiYy1hY2NvcmRpb24tY29udGVudFxuICogQERlc2NyaXB0aW9uIEVzdGUgY29tcG9uZW50ZSBvcmdhbml6YSBhZG1pbmlzdHJhIGVsIGNvbnRlbmlkbyBkZWwgYWNvcmRlb24gZWwgY3VhbFxuICogZXMgbGlicmUgcGFyYSBlbCBkZXNhcnJvbGxhZG9yXG4gKlxuICogQGV4YW1wbGVcbiAqICA8aDM+QWNvcmRlw7NuIGF2YXphbmRvPC9oMz5cbiAqICAgPGJjLWFjY29yZGlvbnMtZ3JvdXA+XG4gKiAgICAgPGJjLWFjY29yZGlvbj5cbiAqICAgICAgIDxiYy1hY2NvcmRpb24taGVhZGVyXG4gKiAgICAgICAgIGxlZnRJY29uPVwiaWRlYVwiXG4gKiAgICAgICAgIHRpdGxlPVwiQWNvcmRlw7NuIGF2YXphbmRvXCJcbiAqICAgICAgICAgdGl0bGVJY29uPVwiaW5mb1wiXG4gKiAgICAgICAgIHN1YnRpdGxlPVwiU3VidMOtdHVsb1wiXG4gKiAgICAgICAgIHN1YnRpdGxlSWNvbj1cImluZm9cIlxuICogICAgICAgICBbYWN0aW9uc0ljb25dPVwiYWN0aW9uc0ljb25cIlxuICogICAgICAgICAoYWN0aW9uU2VsZWN0ZWQpPVwibXlBY3Rpb24oJGV2ZW50KVwiXG4gKiAgICAgICA+PC9iYy1hY2NvcmRpb24taGVhZGVyPlxuICogICAgICAgPGJjLWFjY29yZGlvbi1jb250ZW50PlxuICogICAgICAgICBUaWVuZSBsb3MgZWxlbWVudG9zIGVzZW5jaWFsZXMgeSBzZSBsZSBhZGljaW9uYSB1biBzdWJ0w610dWxvIHkgbcOhc1xuICogICAgICAgICBvcGNpb25lcyBkZSBpY29ub3MgcGFyYSBhY2Npb25lcyByZWxhY2lvbmFkYXMgYWwgY29tcG9uZW50ZS5cbiAqICAgICAgIDwvYmMtYWNjb3JkaW9uLWNvbnRlbnQ+XG4gKiAgICAgPC9iYy1hY2NvcmRpb24+XG4gKiAgIDwvYmMtYWNjb3JkaW9ucy1ncm91cD5cbiAqXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmNBY2NvcmRpb25Hcm91cENvbXBvbmVudCxcbiAgICBCY0FjY29yZGlvbkNvbXBvbmVudCxcbiAgICBCY0FjY29yZGlvbkhlYWRlckNvbXBvbmVudCxcbiAgICBCY0FjY29yZGlvbkNvbnRlbnRDb21wb25lbnQsXG4gICAgQmNBY2NvcmRpb25Db250ZW50RGlyRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEJjSWNvbk1vZHVsZSwgQmNUb29sdGlwTW9kdWxlLCBCY0ljb25CdXR0b25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQmNBY2NvcmRpb25Hcm91cENvbXBvbmVudCwgQmNBY2NvcmRpb25Db21wb25lbnQsIEJjQWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50LCBCY0FjY29yZGlvbkNvbnRlbnRDb21wb25lbnQsIEJjQWNjb3JkaW9uQ29udGVudERpckRpcmVjdGl2ZV0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgQmNBY2NvcmRpb25Nb2R1bGUge31cbiJdfQ==