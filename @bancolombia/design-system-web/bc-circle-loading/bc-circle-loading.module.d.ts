import * as i0 from "@angular/core";
import * as i1 from "./bc-circle-loading.component";
import * as i2 from "@bancolombia/design-system-web/bc-loader";
import * as i3 from "@angular/common";
/**
 * Importa el componente bcCircleLoading con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-circle-loading></bc-circle-loading>
 *
 * @param  text: Texto general del componente de carga
 * @param  accessibilityLabel: Texto usado para ayuda en la accesibilidad, usado para dar la descripción del estado de carga para los lectores de pantalla
 * @param  speedLoader: Velocidad de la animación del loader, para mayor info consultar el componente <bc-loader>.
 * @param componentId: ID que se le asignará en el html del componente, debe ser asignado para
 * facilitar la automatizacion y la certificación
 *
 * @example
 *
 * <bc-circle-loading
 *  text="Cargando..."
 *  id="ejemplo"
 *  accessibilityLabel="ejemplo de aria label"
 *  speedLoader="2">
 * </bc-circle-loading>
 *
 * @author: Bancolombia S.A
 */
export declare class BcCircleLoadingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCircleLoadingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcCircleLoadingModule, [typeof i1.BcCircleLoadingComponent], [typeof i2.BcLoaderModule, typeof i3.CommonModule], [typeof i1.BcCircleLoadingComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcCircleLoadingModule>;
}
