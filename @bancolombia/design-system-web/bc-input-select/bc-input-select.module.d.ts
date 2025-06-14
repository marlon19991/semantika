import * as i0 from "@angular/core";
import * as i1 from "./bc-input-select.component";
import * as i2 from "@angular/common";
import * as i3 from "@bancolombia/design-system-web/bc-checkbox";
import * as i4 from "@bancolombia/design-system-web/bc-icon";
import * as i5 from "@angular/forms";
/**
 * Importa el componente BcInputSelect con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-select></bc-input-select>
 *
 * @param  [iconLeft](opcional): Texto que indica el id del componente
 * @param  [placeholder](opcional): Texto que indica el placeholder del select
 * @param  [textBelow](opcional): Texto que aparece en la parte de abajo del select
 * @param  values: Array tipo [{ text: string }] que indica los valores del select
 * @param [iconLeft](opcional): Boolean que indica si el select tiene iconos a la izquierda.
 * Si tiene se deben de enviar [{ text: string, icon: string }]
 * @param [valueInput](opcional): Array tipo [{ text: string }] y si es isMultipleChk true.
 * Si no debe de ser el valueinput texto
 * @param [isError](opcional): Boolean que indica si tiene estilo error el select o no. por defecto falso
 * @param [isDisabled](opcional): Boolean que indica si tiene estilo disabled el select o no. por defecto falso
 * @param  [isMultipleChk](opcional): Boolean que indica si tiene checkbox de seleccion multiple
 * @param  valueOutput: Output Valor de salida que indica los valores seleccionados
 *
 * @example
 *
 * <bc-input-select
 * [id] = "'bc-select1'"
 * [values]="objSelect.values"
 * [placeholder]="objSelect.placeholder"
 * [textBelow]="objSelect.textBelow"
 * (valueOutput) = "showSelectedValue($event)"
 * ></bc-input-select>
 *
 * @author: Bancolombia S.A
 */
export declare class BcInputSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcInputSelectModule, [typeof i1.BcInputSelectComponent], [typeof i2.CommonModule, typeof i3.BcCheckboxModule, typeof i4.BcIconModule, typeof i5.ReactiveFormsModule, typeof i5.FormsModule], [typeof i1.BcInputSelectComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcInputSelectModule>;
}
