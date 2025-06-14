import * as i0 from "@angular/core";
import * as i1 from "./bc-radio-group/bc-radio-group.component";
import * as i2 from "./bc-radio.component";
import * as i3 from "@angular/common";
import * as i4 from "@bancolombia/design-system-web/bc-icon";
/**
 * Importa el componete de Radio Buttons con
 * los diseños de Bancolombia S.A.
 *
 * @package bc-radio-group, bc-radio
 *   @Component bc-radio-group
 *   @Output onChange() evento que se dispara al detectar cambios en el grupo de bc-radio,
 *           devuelve un objeto con el elemento activo: { label: string, checked: boolean value: string }
 *
 * @package bc-radio
 *   @Component bc-radio
 *   @param  id Identificador unico||  (default)
 *   @param  name Nombre del componente ||  (default)
 *   @param  value Valor del componente ||  (default)
 *   @param  enabled Habilita o deshabilita el componente || true (default)
 *   @param  checked Selecciona el check|| false (default)
 *   @example
 *    <bc-radio-group (onChange)="yourFunction($event)">
 *         <bc-radio value="1">Default 1</bc-radio>
 *         <bc-radio value="2">Default 2</bc-radio>
 *       </bc-radio-group>
 *
 *
 * @author: Bancolombia S.A
 */
export declare class BcRadioModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcRadioModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcRadioModule, [typeof i1.BcRadioGroupComponent, typeof i2.BcRadioComponent], [typeof i3.CommonModule, typeof i4.BcIconModule], [typeof i1.BcRadioGroupComponent, typeof i2.BcRadioComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcRadioModule>;
}
