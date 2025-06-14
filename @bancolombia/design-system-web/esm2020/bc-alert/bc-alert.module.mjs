import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcAlertComponent } from './bc-alert.component';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcDialogService } from '@bancolombia/design-system-web/bc-services';
import * as i0 from "@angular/core";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * Las alertas corresponde a un cuadro de diálogo que disponibiliza
 * información de manera flotante o fija.
 * @param text Mensaje a mostrar en la alerta
 * @param typeAlert Tipo de alerta
 *
 * @description Alerta para error
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de error" typeAlert='error'></bc-alert>
 *
 * @description Alerta para éxito
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de exito" typeAlert='success'></bc-alert>
 *
 * @description Alerta para información
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de información" typeAlert='info'></bc-alert>
 *
 * @description Alerta para advertencia
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de advertencia" typeAlert='warning'></bc-alert>
 *
 * @description Alerta para inactividad
 * @example
 * <bc-alert class="bc-alerts-container" text ="Mensaje de informativo" typeAlert='inactive'></bc-alert>
 *
 * @author: Bancolombia S.A
 */
export class BcAlertModule {
}
BcAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertModule, declarations: [BcAlertComponent], imports: [BcIconModule, BcButtonModule, CommonModule], exports: [BcAlertComponent] });
BcAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertModule, providers: [BcDialogService], imports: [[BcIconModule, BcButtonModule, CommonModule,]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcAlertComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule,],
                    exports: [BcAlertComponent],
                    providers: [BcDialogService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWFsZXJ0L2JjLWFsZXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUFFN0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFRSCxNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQUxQLGdCQUFnQixhQUNyQixZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksYUFDMUMsZ0JBQWdCOzJHQUdqQixhQUFhLGFBRlgsQ0FBQyxlQUFlLENBQUMsWUFGbkIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRTsyRkFJN0MsYUFBYTtrQkFOekIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUU7b0JBQ3RELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY0FsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYy1hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNCdXR0b25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtYnV0dG9uJztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcbmltcG9ydCB7IEJjRGlhbG9nU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1zZXJ2aWNlcyc7XG5cbi8qKlxuICogSW1wb3J0YSBsYXMgYWxlcnRhcyBjb24gbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIExhcyBhbGVydGFzIGNvcnJlc3BvbmRlIGEgdW4gY3VhZHJvIGRlIGRpw6Fsb2dvIHF1ZSBkaXNwb25pYmlsaXphXG4gKiBpbmZvcm1hY2nDs24gZGUgbWFuZXJhIGZsb3RhbnRlIG8gZmlqYS5cbiAqIEBwYXJhbSB0ZXh0IE1lbnNhamUgYSBtb3N0cmFyIGVuIGxhIGFsZXJ0YVxuICogQHBhcmFtIHR5cGVBbGVydCBUaXBvIGRlIGFsZXJ0YVxuICpcbiAqIEBkZXNjcmlwdGlvbiBBbGVydGEgcGFyYSBlcnJvclxuICogQGV4YW1wbGVcbiAqIDxiYy1hbGVydCBjbGFzcz1cImJjLWFsZXJ0cy1jb250YWluZXJcIiB0ZXh0ID1cIk1lbnNhamUgZGUgZXJyb3JcIiB0eXBlQWxlcnQ9J2Vycm9yJz48L2JjLWFsZXJ0PlxuICpcbiAqIEBkZXNjcmlwdGlvbiBBbGVydGEgcGFyYSDDqXhpdG9cbiAqIEBleGFtcGxlXG4gKiA8YmMtYWxlcnQgY2xhc3M9XCJiYy1hbGVydHMtY29udGFpbmVyXCIgdGV4dCA9XCJNZW5zYWplIGRlIGV4aXRvXCIgdHlwZUFsZXJ0PSdzdWNjZXNzJz48L2JjLWFsZXJ0PlxuICpcbiAqIEBkZXNjcmlwdGlvbiBBbGVydGEgcGFyYSBpbmZvcm1hY2nDs25cbiAqIEBleGFtcGxlXG4gKiA8YmMtYWxlcnQgY2xhc3M9XCJiYy1hbGVydHMtY29udGFpbmVyXCIgdGV4dCA9XCJNZW5zYWplIGRlIGluZm9ybWFjacOzblwiIHR5cGVBbGVydD0naW5mbyc+PC9iYy1hbGVydD5cbiAqXG4gKiBAZGVzY3JpcHRpb24gQWxlcnRhIHBhcmEgYWR2ZXJ0ZW5jaWFcbiAqIEBleGFtcGxlXG4gKiA8YmMtYWxlcnQgY2xhc3M9XCJiYy1hbGVydHMtY29udGFpbmVyXCIgdGV4dCA9XCJNZW5zYWplIGRlIGFkdmVydGVuY2lhXCIgdHlwZUFsZXJ0PSd3YXJuaW5nJz48L2JjLWFsZXJ0PlxuICpcbiAqIEBkZXNjcmlwdGlvbiBBbGVydGEgcGFyYSBpbmFjdGl2aWRhZFxuICogQGV4YW1wbGVcbiAqIDxiYy1hbGVydCBjbGFzcz1cImJjLWFsZXJ0cy1jb250YWluZXJcIiB0ZXh0ID1cIk1lbnNhamUgZGUgaW5mb3JtYXRpdm9cIiB0eXBlQWxlcnQ9J2luYWN0aXZlJz48L2JjLWFsZXJ0PlxuICpcbiAqIEBhdXRob3I6IEJhbmNvbG9tYmlhIFMuQVxuICovXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQmNBbGVydENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0JjSWNvbk1vZHVsZSwgQmNCdXR0b25Nb2R1bGUsIENvbW1vbk1vZHVsZSxdLFxuICAgIGV4cG9ydHM6IFtCY0FsZXJ0Q29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtCY0RpYWxvZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEJjQWxlcnRNb2R1bGUgeyB9XG4iXX0=