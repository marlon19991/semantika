import * as i0 from "@angular/core";
import * as i1 from "./bc-slider-double/bc-slider-double.component";
import * as i2 from "./bc-slider-simple/bc-slider.component";
import * as i3 from "@angular/common";
import * as i4 from "@bancolombia/design-system-web/bc-input";
/**
 * Importa el componete de Slider simple y doble con
 * los diseños de Bancolombia S.A.
 * @package bc-slider-simple
 * @Component bc-slider
 * @param  id Identificador unico||  (default)
 * @param  name Nombre del componente ||  (default)
 * @param  value Valor del componente que define el punto en el slider donde se inicializa || 0 (default)
 * @param  min valor por defecto en 0 || 0 (default)
 * @param  max valor por defecto en 100 || 100 (default)
 * @param  referenceValue Define el valor del tope a calcular para sobre el value|| 0 (default)
 * @param  outputValue Salida del componente donde se calcula el valor seleccionado en el slider || 0 (default)
 * @example
 * <bc-slider [value]=0 [referenceValue]=1230000></bc-slider>
 *
 *
 * @author: Bancolombia S.A
 */
/**
 * Importa el componete de Slider simple y doble con
 * los diseños de Bancolombia S.A.
 * @package bc-slider-double
 *   @Component bc-slider-double
 *   @param  id Identificador unico||  (default)
 *   @param  name Nombre del componente ||  (default)
 *   @param  valueLeft Valor del componente que define el punto en el slider donde se inicialize el thumb izquierdo || 0 (default)
 *   @param  valueRight Valor del componente que define el punto en el slider donde se  inicialize el thumb derecho || 0 (default)
 *   @param  min valor que define el porcentaje minimo por defecto en 0 || 0 (default)
 *   @param  max valor define el porcentaje minimo por defecto en 100 || 100 (default)
 *   @param  referenceValue Define el valor del tope a calcular para sobre el value|| 0 (default)
 *   @param  outputValue Salida del componente donde se calcula el valor seleccionado en el slider || 0 (default)
 *   @example
 *                    <bc-slider [value]=0 [referenceValue]=1230000></bc-slider>
 *
 *
 * @author: Bancolombia S.A
 */
export declare class BcSliderModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcSliderModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcSliderModule, [typeof i1.BcSliderDoubleComponent, typeof i2.BcSliderComponent], [typeof i3.CommonModule, typeof i4.BcInputModule], [typeof i2.BcSliderComponent, typeof i1.BcSliderDoubleComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcSliderModule>;
}
