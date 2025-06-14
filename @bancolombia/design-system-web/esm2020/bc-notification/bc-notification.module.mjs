import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcNotificationComponent } from './bc-notification.component';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i0 from "@angular/core";
/**
 * Importa las notificaciones con los diseños de Bancolombia S.A.
 * @param text Mensaje a mostrar en la notification
 * @param typeNotification Tipo de notification
 *
 * @description Notificacion para error
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de error" typeNotification='error'></bc-notification>
 *
 * @description Notificacion para éxito
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de exito" typeNotification='success'></bc-notification>
 *
 * @description Notificacion para información
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de información" typeNotification='info'></bc-notification>
 *
 * @description Notificacion para advertencia
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de advertencia" typeNotification='warning'></bc-notification>
 *
 * @description Notificacion para inactividad
 * @example
 * <bc-notification class="bc-notifications-container" text ="Mensaje de informativo" typeNotification='inactive'></bc-notification>
 *
 * @author: Bancolombia S.A
 */
export class BcNotificationModule {
}
BcNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationModule, declarations: [BcNotificationComponent], imports: [BcIconModule, BcButtonModule, CommonModule], exports: [BcNotificationComponent] });
BcNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationModule, imports: [[BcIconModule, BcButtonModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcNotificationComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule],
                    exports: [BcNotificationComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1ub3RpZmljYXRpb24vYmMtbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUV0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7QUFPSCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBSmhCLHVCQUF1QixhQUM1QixZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksYUFDMUMsdUJBQXVCO2tIQUV0QixvQkFBb0IsWUFIdEIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQzsyRkFHMUMsb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQztvQkFDckQsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY05vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYmMtbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY0J1dHRvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1idXR0b24nO1xuaW1wb3J0IHsgQmNJY29uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWljb24nO1xuXG4vKipcbiAqIEltcG9ydGEgbGFzIG5vdGlmaWNhY2lvbmVzIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICogQHBhcmFtIHRleHQgTWVuc2FqZSBhIG1vc3RyYXIgZW4gbGEgbm90aWZpY2F0aW9uXG4gKiBAcGFyYW0gdHlwZU5vdGlmaWNhdGlvbiBUaXBvIGRlIG5vdGlmaWNhdGlvblxuICpcbiAqIEBkZXNjcmlwdGlvbiBOb3RpZmljYWNpb24gcGFyYSBlcnJvclxuICogQGV4YW1wbGVcbiAqIDxiYy1ub3RpZmljYXRpb24gY2xhc3M9XCJiYy1ub3RpZmljYXRpb25zLWNvbnRhaW5lclwiIHRleHQgPVwiTWVuc2FqZSBkZSBlcnJvclwiIHR5cGVOb3RpZmljYXRpb249J2Vycm9yJz48L2JjLW5vdGlmaWNhdGlvbj5cbiAqXG4gKiBAZGVzY3JpcHRpb24gTm90aWZpY2FjaW9uIHBhcmEgw6l4aXRvXG4gKiBAZXhhbXBsZVxuICogPGJjLW5vdGlmaWNhdGlvbiBjbGFzcz1cImJjLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyXCIgdGV4dCA9XCJNZW5zYWplIGRlIGV4aXRvXCIgdHlwZU5vdGlmaWNhdGlvbj0nc3VjY2Vzcyc+PC9iYy1ub3RpZmljYXRpb24+XG4gKlxuICogQGRlc2NyaXB0aW9uIE5vdGlmaWNhY2lvbiBwYXJhIGluZm9ybWFjacOzblxuICogQGV4YW1wbGVcbiAqIDxiYy1ub3RpZmljYXRpb24gY2xhc3M9XCJiYy1ub3RpZmljYXRpb25zLWNvbnRhaW5lclwiIHRleHQgPVwiTWVuc2FqZSBkZSBpbmZvcm1hY2nDs25cIiB0eXBlTm90aWZpY2F0aW9uPSdpbmZvJz48L2JjLW5vdGlmaWNhdGlvbj5cbiAqXG4gKiBAZGVzY3JpcHRpb24gTm90aWZpY2FjaW9uIHBhcmEgYWR2ZXJ0ZW5jaWFcbiAqIEBleGFtcGxlXG4gKiA8YmMtbm90aWZpY2F0aW9uIGNsYXNzPVwiYmMtbm90aWZpY2F0aW9ucy1jb250YWluZXJcIiB0ZXh0ID1cIk1lbnNhamUgZGUgYWR2ZXJ0ZW5jaWFcIiB0eXBlTm90aWZpY2F0aW9uPSd3YXJuaW5nJz48L2JjLW5vdGlmaWNhdGlvbj5cbiAqXG4gKiBAZGVzY3JpcHRpb24gTm90aWZpY2FjaW9uIHBhcmEgaW5hY3RpdmlkYWRcbiAqIEBleGFtcGxlXG4gKiA8YmMtbm90aWZpY2F0aW9uIGNsYXNzPVwiYmMtbm90aWZpY2F0aW9ucy1jb250YWluZXJcIiB0ZXh0ID1cIk1lbnNhamUgZGUgaW5mb3JtYXRpdm9cIiB0eXBlTm90aWZpY2F0aW9uPSdpbmFjdGl2ZSc+PC9iYy1ub3RpZmljYXRpb24+XG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNOb3RpZmljYXRpb25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQmNJY29uTW9kdWxlLCBCY0J1dHRvbk1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0JjTm90aWZpY2F0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNOb3RpZmljYXRpb25Nb2R1bGUge31cbiJdfQ==