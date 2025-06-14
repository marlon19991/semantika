import * as i0 from "@angular/core";
import * as i1 from "./bc-checkbox.component";
import * as i2 from "./bc-checkbox-group/bc-checkbox-group.component";
import * as i3 from "@angular/common";
/**
 * Importa el componete de Checks con
 * los diseños de Bancolombia S.A.
 * @package bc-checkbox
 * @Component bc-checkbox
 * @param  id Identificador unico||  (default)
 * @param  name Nombre del componente ||  (default)
 * @param  value Valor del componente ||  (default)
 * @param  label Texto del checkbox || (default)
 * @param  enabled Habilita o deshabilita el componente || true (default)
 * @param  isChecked Selecciona el check|| false (default)
 * @param  indeterminate Define el componente como indeterminado || false (default)
 * @param  themeDark Aplica diferentes estilos si se usara en aplicaciones oscuras || false (default)
 * @example
 *                    <bc-checkbox [isChecked]="true"></bc-checkbox>
 *
 *
 * @author: Bancolombia S.A
 */
export declare class BcCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcCheckboxModule, [typeof i1.BcCheckboxComponent, typeof i2.BcCheckBoxGroupComponent], [typeof i3.CommonModule], [typeof i1.BcCheckboxComponent, typeof i2.BcCheckBoxGroupComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcCheckboxModule>;
}
