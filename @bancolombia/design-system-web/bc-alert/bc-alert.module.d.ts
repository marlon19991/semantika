import * as i0 from "@angular/core";
import * as i1 from "./bc-alert.component";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-button";
import * as i4 from "@angular/common";
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
export declare class BcAlertModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAlertModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcAlertModule, [typeof i1.BcAlertComponent], [typeof i2.BcIconModule, typeof i3.BcButtonModule, typeof i4.CommonModule], [typeof i1.BcAlertComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcAlertModule>;
}
