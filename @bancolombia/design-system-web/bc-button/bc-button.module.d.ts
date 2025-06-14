import * as i0 from "@angular/core";
import * as i1 from "./bc-button.directive";
/**
 * Importa la directiva de botones con
 * los diseños de Bancolombia S.A.
 * @package bc-button, bc-button-ico
 *   @Directiva bc-button
 *   @param  typeButton  Tipo de botón  primary (default) || secondary || terciary (a ser deprecada por tertiary) || tertiary ||  background || ghost
 *   @param  sizeButton  (default) || small || puffy
 *   @example
 *   <button disabled bc-button
 *       typeButton="secondary"
 *       sizeButton="puffy"
 *   >
 *       Acá texto del botón
 *   </button>
 *
 *   @Directiva bc-button-icon
 *   @description (deprecada) Utilizar componente bc-icon-button
 *   @Dependencias Esta directiva depende directamente del comoponente bc-icons
 *   @example
 *   <button bc-button-icon typeButton="icon" class="child">
 *       <bc-icons
 *           svgIconName="apple"
 *           height="40" width="40"
 *           color="#00448d">
 *       </bc-icons>
 *   </button>
 *
 *   @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 * @author: Bancolombia S.A
 */
export declare class BcButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcButtonModule, [typeof i1.BcButtonDirective], never, [typeof i1.BcButtonDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcButtonModule>;
}
