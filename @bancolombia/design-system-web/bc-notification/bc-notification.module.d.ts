import * as i0 from "@angular/core";
import * as i1 from "./bc-notification.component";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-button";
import * as i4 from "@angular/common";
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
export declare class BcNotificationModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcNotificationModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcNotificationModule, [typeof i1.BcNotificationComponent], [typeof i2.BcIconModule, typeof i3.BcButtonModule, typeof i4.CommonModule], [typeof i1.BcNotificationComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcNotificationModule>;
}
