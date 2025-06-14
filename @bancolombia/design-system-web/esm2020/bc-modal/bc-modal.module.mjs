import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcModalComponent } from './bc-modal.component';
import { FormsModule } from '@angular/forms';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i0 from "@angular/core";
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
export class BcModalModule {
}
BcModalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcModalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalModule, declarations: [BcModalComponent], imports: [BcIconModule, BcButtonModule, CommonModule, FormsModule], exports: [BcModalComponent] });
BcModalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalModule, imports: [[BcIconModule, BcButtonModule, CommonModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcModalComponent],
                    imports: [BcIconModule, BcButtonModule, CommonModule, FormsModule],
                    exports: [BcModalComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLW1vZGFsL2JjLW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFDdEU7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBT0gsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkFKVCxnQkFBZ0IsYUFDckIsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsV0FBVyxhQUN2RCxnQkFBZ0I7MkdBRWYsYUFBYSxZQUhmLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDOzJGQUd2RCxhQUFhO2tCQUx6QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7b0JBQ2xFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vYmMtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmNCdXR0b25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtYnV0dG9uJztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcbi8qKlxuICogSW1wb3J0YSBsYXMgYWxlcnRhcyBjb24gbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIEBwYWNrYWdlIGJjLW1vZGFsXG4gKiBAZGVzY3JpcHRpb24gTG9zIG1vZGFsZXMgc29uIG1lbnNhamVzIHF1ZSBjb211bmljYW4gaW5mb3JtYWNpw7NuIHkgcGVybWl0ZW4gZGFyIHVuYSByZXNwdWVzdGEgb3BvcnR1bmEgZGUgcGFydGUgZGVsIHVzdWFyaW9cbiAqIEBwYXJhbSgpIHRpdGxlID0gJyc7IGVzIGVsIHRpdHVsbyBkZSBsYSBhbGVydGFcbiAqIEBwYXJhbSgpIHN1YlRpdGxlID0gJyc7IGVzIGVsIHRleHRvIGJham8gZWwgdGl0dWxvIGRlIGxhIGFsZXJ0YVxuICogQHBhcmFtKCkgdGV4dEJ0biA9ICcnOyBUZXh0byBkZWwgYm90b24gcHJpbmNpcGFsXG4gKiBAcGFyYW0oKSB0ZXh0QnRuTGVmdCA9ICcnOyBUZXh0byBkZWwgYm90b24gc2VjdW5kYXJpb1xuICogQHBhcmFtKCkgc2hvd01vZGFsPSBmYWxzZTsgQm9sZWFubyBxdWUgZGV0b25hIGVsIG1vZGFsXG4gKiBAcGFyYW0oKSB0eXBlSWNvbiA9ICdkZWZhdWx0JzsgdGlwbyBkZSBpY29ubyBwdWVkZXIgc2VyIHN1Y2Nlc3MsIHdhcm5pbmcsIGluZm8sIGluYWN0aXZlLCBlcnJvclxuICogQHBhcmFtKCkgdHlwZUFjdGlvbiA9ICdzaW1wbGUnOyB0aXBvIGRlIGFjY2nDs24gZXN0YWJsZWNlIHNpIGhheSB1bm8gbyBkb3MgYm90b25lcyBzdXMgcG9zaWJsZXMgdmFsb3JlcyBzaW1wbGUsIGRvdWJsZVxuICogQE91dHB1dCgpIHN0YXRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IEVtaXNvciBxdWUgcmV0b3JuYSB0cnVlIGN1YW5kbyBzZSBvcHJpbWVcbiAqIGVsIGJvdMOzbiBwcmluY2lwYWwsIGZhbHNlIGVuIGVsIGJvdG9uIHNlY3VuZGFyaW9cbiAqIEBleGFtcGxlXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY01vZGFsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0JjSWNvbk1vZHVsZSwgQmNCdXR0b25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbQmNNb2RhbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjTW9kYWxNb2R1bGUge31cbiJdfQ==