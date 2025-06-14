import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';
import { BcAvatarDirective } from './bc-avatar.directive';
import { BcAvatarComponent } from './bc-avatar.component';
import * as i0 from "@angular/core";
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
export class BcAvatarModule {
}
BcAvatarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcAvatarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarModule, declarations: [BcAvatarDirective, BcAvatarComponent], imports: [CommonModule, BcTooltipModule], exports: [BcAvatarDirective, BcAvatarComponent] });
BcAvatarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarModule, imports: [[CommonModule, BcTooltipModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcAvatarDirective, BcAvatarComponent],
                    imports: [CommonModule, BcTooltipModule],
                    exports: [BcAvatarDirective, BcAvatarComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYXZhdGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hdmF0YXIvYmMtYXZhdGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTFEOzs7Ozs7Ozs7OztHQVdHO0FBTUgsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFKVixpQkFBaUIsRUFBRSxpQkFBaUIsYUFDekMsWUFBWSxFQUFFLGVBQWUsYUFDN0IsaUJBQWlCLEVBQUUsaUJBQWlCOzRHQUVuQyxjQUFjLFlBSGhCLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQzsyRkFHN0IsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDcEQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY1Rvb2x0aXBNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtdG9vbHRpcCc7XG5pbXBvcnQgeyBCY0F2YXRhckRpcmVjdGl2ZSB9IGZyb20gJy4vYmMtYXZhdGFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCY0F2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vYmMtYXZhdGFyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogSW1wb3J0YSBsYSBkaXJlY3RpdmEgZGUgYXZhdGFyIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICogQHBhY2thZ2UgYmMtYXZhdGFyXG4gKiAgIEBEaXJlY3RpdmEgYmMtYXZhdGFyXG4gKiAgIEBwYXJhbSAgdHlwZUF2YXRhciBUaXBvIGRlbCBhdmF0YXIgfHwgcHVmZnkgfHwgc21hbGxcbiAqICAgPGltZyBiYy1hdmF0YXIgdHlwZUF2YXRhciA9J3B1ZmZ5JyBzcmM9XCJpbWFnZS5qcGdcIiBhbHQ9XCJcIj5cbiAqXG4gKiBATm90YSBDdWFuZG8gdW4gYXZhdGFyIG5vIGVzdMOhIGRpc3BvbmlibGUgKHBvciBlamVtcGxvLCBkZWJpZG8gYSB1biBlcnJvciBkZSBpbWFnZW4pLFxuICogc2UgbXVlc3RyYSB1biBhdmF0YXIgcHJlZGV0ZXJtaW5hZG8uXG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjQXZhdGFyRGlyZWN0aXZlLCBCY0F2YXRhckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEJjVG9vbHRpcE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtCY0F2YXRhckRpcmVjdGl2ZSwgQmNBdmF0YXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY0F2YXRhck1vZHVsZSB7fVxuIl19