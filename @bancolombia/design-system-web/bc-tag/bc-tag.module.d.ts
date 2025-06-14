import * as i0 from "@angular/core";
import * as i1 from "./bc-tag.component";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-button";
import * as i4 from "@angular/common";
import * as i5 from "@bancolombia/design-system-web/bc-float-menu";
/**
 * Importa la directiva de labels con
 * los diseños de Bancolombia S.A.
 * @package bc-tag, bc-label
 * @Component bc-tag
 * @param icon = Icono que se usara en el componente
 * @param {boolean} dismissible = Indica si se tendrá el icono de x al lado derecho o no
 * @param status = selected (seleccionado) || disabled (deshabilitado)
 * @example <bc-tag icon="calendar-alt" dismissible="true" status="selected">Label</bc-tag>
 * @Directiva bc-tag
 * @param  type Aplica el estilo al label, values [ secondary || info (Default) || alert || error || success ]
 * @example
 *           <label bc-tag type="error">Error</label>
 *
 * @Directiva bc-label
 * @param  theme Tema del label default || dark
 * @param  sizeLabel Tamaño de label default || small
 * @example
 *   <label bc-label sizeLabel="small" theme="dark">Texto del label</label>
 *
 * @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
export declare class BcTagModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTagModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcTagModule, [typeof i1.BcTagComponent], [typeof i2.BcIconModule, typeof i3.BcButtonModule, typeof i4.CommonModule, typeof i5.BcFloatMenuModule], [typeof i1.BcTagComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcTagModule>;
}
