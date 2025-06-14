import * as i0 from "@angular/core";
import * as i1 from "./bc-input-select-v2.component";
import * as i2 from "@angular/common";
import * as i3 from "@bancolombia/design-system-web/bc-checkbox";
import * as i4 from "@bancolombia/design-system-web/bc-icon";
import * as i5 from "@angular/forms";
/**
 * Importa el componente BcInputSelectV2 con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-select-v2></bc-input-select-v2>
 *
 * @param  [iconName](opcional): Texto que indica el id del componente
 * @param  [label](opcional): Texto que indica el placeholder del select
 * @param  [helpText](opcional): Texto que aparece en la parte de abajo del select
 * @param  values: Array tipo [{ label: string, value: string, icon: string }] que indica los valores del select
 * @param  onChange: Output Valor de salida que indica los valores seleccionados
 *
 * @example
 *
 * <bc-input-select-v2
 * [id] = "'bc-select1'"
 * [values]="objSelect.values"
 * [label]="objSelect.placeholder"
 * [helpText]="objSelect.textBelow"
 * (onChange) = "showSelectedValue($event)"
 * ></bc-input-select-v2>
 *
 * @author: Bancolombia S.A
 */
export declare class BcInputSelectV2Module {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputSelectV2Module, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcInputSelectV2Module, [typeof i1.BcInputSelectV2Component], [typeof i2.CommonModule, typeof i3.BcCheckboxModule, typeof i4.BcIconModule, typeof i5.ReactiveFormsModule, typeof i5.FormsModule], [typeof i1.BcInputSelectV2Component]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcInputSelectV2Module>;
}
