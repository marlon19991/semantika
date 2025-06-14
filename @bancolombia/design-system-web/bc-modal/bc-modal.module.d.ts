import * as i0 from "@angular/core";
import * as i1 from "./bc-modal.component";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@bancolombia/design-system-web/bc-button";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * @package bc-modal
 * @description Los modales son mensajes que comunican información y permiten dar una respuesta oportuna de parte del usuario
 * @param() title = ''; es el titulo de la alerta
 * @param() subTitle = ''; es el texto bajo el titulo de la alerta
 * @param() textBtn = ''; Texto del boton principal
 * @param() textBtnLeft = ''; Texto del boton secundario
 * @param() showModal= false; Boleano que detona el modal
 * @param() typeIcon = 'default'; tipo de icono pueder ser success, warning, info, inactive, error
 * @param() typeAction = 'simple'; tipo de acción establece si hay uno o dos botones sus posibles valores simple, double
 * @Output() stateClick = new EventEmitter<boolean>(); Emisor que retorna true cuando se oprime
 * el botón principal, false en el boton secundario
 * @example
 * @author: Bancolombia S.A
 */
export declare class BcModalModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcModalModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcModalModule, [typeof i1.BcModalComponent], [typeof i2.BcIconModule, typeof i3.BcButtonModule, typeof i4.CommonModule, typeof i5.FormsModule], [typeof i1.BcModalComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcModalModule>;
}
