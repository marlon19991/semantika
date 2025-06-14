import * as i0 from "@angular/core";
import * as i1 from "./bc-avatar.directive";
import * as i2 from "./bc-avatar.component";
import * as i3 from "@angular/common";
import * as i4 from "@bancolombia/design-system-web/bc-tooltip";
/**
 * Importa la directiva de avatar con los diseños de Bancolombia S.A.
 * @package bc-avatar
 *   @Directiva bc-avatar
 *   @param  typeAvatar Tipo del avatar || puffy || small
 *   <img bc-avatar typeAvatar ='puffy' src="image.jpg" alt="">
 *
 * @Nota Cuando un avatar no está disponible (por ejemplo, debido a un error de imagen),
 * se muestra un avatar predeterminado.
 *
 * @author: Bancolombia S.A
 */
export declare class BcAvatarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAvatarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcAvatarModule, [typeof i1.BcAvatarDirective, typeof i2.BcAvatarComponent], [typeof i3.CommonModule, typeof i4.BcTooltipModule], [typeof i1.BcAvatarDirective, typeof i2.BcAvatarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcAvatarModule>;
}
