import * as i0 from "@angular/core";
import * as i1 from "./bc-switch.component";
import * as i2 from "@angular/common";
/**
 * Importa el componente switch con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-switch></bc-switch>
 *
 * @param  id ID personalizado del input (default: bc-toggle-input-1)
 * @param  disabled default: false
 * @param  required default: false
 * @param  isChecked default: false
 * @fires changeState: Emite el valor del switch cuando hay un cambio (true || false)
 * @example
 * <bc-switch
 *          (changeState)="myEvent($event)"
 *          [id]="'yourID'"
 *          [disabled]=false
 *          [required]=true
 *          [isChecked]=false> Label
 *  </bc-switch>
 *
 * @author: Bancolombia S.A
 */
export declare class BcSwitchModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSwitchModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcSwitchModule, [typeof i1.BcSwitchComponent], [typeof i2.CommonModule], [typeof i1.BcSwitchComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcSwitchModule>;
}
