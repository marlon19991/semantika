import * as i0 from "@angular/core";
import * as i1 from "./bc-preloader.component";
import * as i2 from "@angular/common";
/**
 * Importa el componente BcPreloaderComponent de
 * los diseños de Bancolombia S.A.
 *
 * @component <bc-preloader></bc-preloader>
 *
 * @param  type: Recibe un String con el tipo de preloader que se mostrará, este recibe los siguientes parámetros:
 * circle, square, line
 *
 * @param  width: Recibe un String con el numero de ancho en px o la dimensión (%, rem, em, etc) que tendrá el preloader que se mostrará
 *
 * @param  height: Recibe un String con el numero de largo en px o la dimensión (%, rem, em, etc) que tendrá el preloader que se mostrará
 *
 * @param  borderRadius: Recibe un String con el numero correspondiente al radio del borde. Solo se permite 2 o 3
 *
 * @example
 *
 * <bc-preloader type="circle"></bc-preloader>
 * <bc-preloader type="circle" width="150" height="150"></bc-preloader>
 * <bc-preloader type="line" width="60%"></bc-preloader>
 *
 * @author: Bancolombia S.A
 */
export declare class BcPreloaderModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPreloaderModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcPreloaderModule, [typeof i1.BcPreloaderComponent], [typeof i2.CommonModule], [typeof i1.BcPreloaderComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcPreloaderModule>;
}
