import { ModuleWithProviders } from '@angular/core';
import { BcConfigIconModule } from './bc-config-icon-module';
import * as i0 from "@angular/core";
import * as i1 from "./bc-icon-component/bc-icon.component";
/**
 * Importa el componente y la directiva de iconos con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-icon></bc-icon>
 * @param  class Clase CSS
 * @param  size Tamaño del icono values [ xs || 2xs || sm (Default) || md || lg || xl || 2xl || 3xl ]
 * @example
 *
 * <bc-icon bc-icon
 *      size="xl"
 *      class="'mi-icono'">
 * </bc-icon>
 *
 * @author: Bancolombia S.A
 */
export declare class BcIconModule {
    static forRoot(conf?: BcConfigIconModule): ModuleWithProviders<BcIconModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcIconModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcIconModule, [typeof i1.BcIconComponent], never, [typeof i1.BcIconComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcIconModule>;
}
