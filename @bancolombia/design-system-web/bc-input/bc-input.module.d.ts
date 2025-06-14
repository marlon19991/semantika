import * as i0 from "@angular/core";
import * as i1 from "./bc-input.directive";
import * as i2 from "./bc-form-field/bc-form-field.component";
import * as i3 from "@angular/common";
/**
 * Importa la directiva de campos input con
 * los diseños de Bancolombia S.A.
 * @package bc-input
 *   @Directiva bc-input
 *   @param  theme Tema para input: default || dark
 *   @param typeInput Tipo de input: input-default || input-icon-left || input-icon-right || input-area
 *   @example
 *
 *    <input bc-input typeInput="input-default" type="text" placeholder="Text" value="">
 *    <input bc-input typeInput="input-icon-left" theme="dark" type="text" placeholder="Text" value="">
 *  @component bc-form-field
 *  @param {string} inputType: seleccione "date" para selector con calendario
 *  @param {string} calendarType: seleccione "split" para un calendario con el selector dividido
 *
 *  @example
 *  <bc-form-field inputType="date" calendarType="split">
 *    <input bc-input typeInput="input-default-left" type="date" value="" required/>
 *    <label>Split Date Picker</label>
 *    <em>calendar-alt</em>
 *    <span>Selecciona una fecha del calendario</span>
 *    </bc-form-field>
 *
 *
 *   @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 *
 * @author: Bancolombia S.A
 */
export declare class BcInputModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcInputModule, [typeof i1.BcInputDirective, typeof i2.BcFormFieldComponent], [typeof i3.CommonModule], [typeof i1.BcInputDirective, typeof i2.BcFormFieldComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcInputModule>;
}
