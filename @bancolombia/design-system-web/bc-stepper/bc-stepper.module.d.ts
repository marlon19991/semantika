import * as i0 from "@angular/core";
import * as i1 from "./bc-stepper.component";
/**
 * Importa el componente switch con
 * los diseños de Bancolombia S.A.
 *
 * @componente <lib-bc-switch-web></lib-bc-switch-web>
 *
 * @param  disabled default: false
 * @param  required default: true
 * @fires changeState: Emite el valor del switch cuando hay un cambio (true || false)
 * @example
 * <lib-bc-switch-web
 *          (changeState)="myEvent($event)"
 *          [id]="'yourID'"
 *          [disabled]=false
 *          [required]=true
 *          [isChecked]=false> Label
 *  </lib-bc-switch-web>
 *
 * @author: Bancolombia S.A
 */
export declare class BcStepperModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcStepperModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcStepperModule, [typeof i1.BcStepperComponent], never, [typeof i1.BcStepperComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcStepperModule>;
}
