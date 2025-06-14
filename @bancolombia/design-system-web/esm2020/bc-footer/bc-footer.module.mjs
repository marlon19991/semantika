import { NgModule } from '@angular/core';
import { BcFooterComponent } from './bc-footer.component';
import { CommonModule } from '@angular/common';
import { BcAccordionModule } from '@bancolombia/design-system-web/bc-accordion';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i0 from "@angular/core";
/**
 * Importa el componente BcFooter con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-footer></bc-footer>
 *
 * @param  [topTextContent] : [{
 *      title: { text: '', link: '' (opcional), onlyStyleText:false (opcional), isSelf: false (opcional) },
 *       texts: [ { text: '', link:'',(opcional) isSelf: false (opcional) },]
 *   }] (opcional) : Objeto para mostrar los textos de arriba del footer
 * @param  [bottomTextLeftContent](opcional): Array de textos que se muestra en la parte
 * inferior izquierda del footer
 * @param  [bottomTextRighContent](opcional): Array de textos que se muestra en la parte
 * inferior derecha del footer
 * @param  [socialNetBottomRight : [{ name:'', link:'', isSelf:false (opcional) }]]: Array de
 * objetos para las redes sociales. En name pueden ir facebook,twitter,linkedin,instagram,youtube
 * @param [isBancoLogoBottom](opcional): Boolean que por defecto esta true y muestra el icono
 * bancolombia en la parte inferior
 * @param [isVigilaLogoBottom](opcional): Boolean que por defecto esta true y muestra el icono
 * vigilado en la parte inferior
 * @param [id](opcional): string : Indica el id del componente
 *
 *
 * @example
 *
 * <bc-footer [topTextContent]="[
 * {
 *    title: { text: 'Titulo columna 01' },
 *     texts: [
 * { text: 'Lorem ipsum' },
 * { text: 'Lorem ipsum' },
 *  { text: 'Lorem ipsum' },
 *  { text: 'Lorem ipsum' }, ]
 * },
 * {
 *    title: { text: 'Titulo columna 02' },
 *   texts: [ { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' } ]
 * },
 * {
 *     title: { text: 'Titulo columna 03' },
 *     texts: [ { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' } ]
 * },
 * {
 *     title: { text: 'Titulo columna 04' },
 *     texts: [ { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' }, { text: 'Lorem ipsum' } ]
 * }]" [socialNetBottomRight]="[
 *     { name:'facebook', link:'http://google.com' },
 *     { name:'twitter', link:'http://google.com' },
 *     { name:'linkedin', link:'http://google.com' },
 *     { name:'instagram', link:'http://google.com' },
 *     { name:'youtube', link:'http://google.com' }
 * ]" [bottomTextRighContent]="['Dirección IP 190.144.71.250','Última visita Jueves 31 de Julio de 2019 10:06 a.m']"
 *     [bottomTextLeftContent]="['Copyright © 2020 Grupo Bancolombia. Sed egestas, ante et vulputate volutpat, eros',
 * 'pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus ',
 * 'adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit ',
 * 'tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis.']">
 * </bc-footer>
 *
 * @author: Bancolombia S.A
 */
export class BcFooterModule {
}
BcFooterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcFooterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterModule, declarations: [BcFooterComponent], imports: [CommonModule, BcIconModule, BcAccordionModule], exports: [BcFooterComponent] });
BcFooterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterModule, imports: [[CommonModule, BcIconModule, BcAccordionModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcFooterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcFooterComponent],
                    imports: [CommonModule, BcIconModule, BcAccordionModule],
                    exports: [BcFooterComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZm9vdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1mb290ZXIvYmMtZm9vdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0FBRXRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJERztBQU9ILE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBSlYsaUJBQWlCLGFBQ3RCLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLGFBQzdDLGlCQUFpQjs0R0FFaEIsY0FBYyxZQUhoQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUM7MkZBRzdDLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3hELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYmMtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtYWNjb3JkaW9uJztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGNvbXBvbmVudGUgQmNGb290ZXIgY29uXG4gKiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBjb21wb25lbnRlIDxiYy1mb290ZXI+PC9iYy1mb290ZXI+XG4gKlxuICogQHBhcmFtICBbdG9wVGV4dENvbnRlbnRdIDogW3tcbiAqICAgICAgdGl0bGU6IHsgdGV4dDogJycsIGxpbms6ICcnIChvcGNpb25hbCksIG9ubHlTdHlsZVRleHQ6ZmFsc2UgKG9wY2lvbmFsKSwgaXNTZWxmOiBmYWxzZSAob3BjaW9uYWwpIH0sXG4gKiAgICAgICB0ZXh0czogWyB7IHRleHQ6ICcnLCBsaW5rOicnLChvcGNpb25hbCkgaXNTZWxmOiBmYWxzZSAob3BjaW9uYWwpIH0sXVxuICogICB9XSAob3BjaW9uYWwpIDogT2JqZXRvIHBhcmEgbW9zdHJhciBsb3MgdGV4dG9zIGRlIGFycmliYSBkZWwgZm9vdGVyXG4gKiBAcGFyYW0gIFtib3R0b21UZXh0TGVmdENvbnRlbnRdKG9wY2lvbmFsKTogQXJyYXkgZGUgdGV4dG9zIHF1ZSBzZSBtdWVzdHJhIGVuIGxhIHBhcnRlXG4gKiBpbmZlcmlvciBpenF1aWVyZGEgZGVsIGZvb3RlclxuICogQHBhcmFtICBbYm90dG9tVGV4dFJpZ2hDb250ZW50XShvcGNpb25hbCk6IEFycmF5IGRlIHRleHRvcyBxdWUgc2UgbXVlc3RyYSBlbiBsYSBwYXJ0ZVxuICogaW5mZXJpb3IgZGVyZWNoYSBkZWwgZm9vdGVyXG4gKiBAcGFyYW0gIFtzb2NpYWxOZXRCb3R0b21SaWdodCA6IFt7IG5hbWU6JycsIGxpbms6JycsIGlzU2VsZjpmYWxzZSAob3BjaW9uYWwpIH1dXTogQXJyYXkgZGVcbiAqIG9iamV0b3MgcGFyYSBsYXMgcmVkZXMgc29jaWFsZXMuIEVuIG5hbWUgcHVlZGVuIGlyIGZhY2Vib29rLHR3aXR0ZXIsbGlua2VkaW4saW5zdGFncmFtLHlvdXR1YmVcbiAqIEBwYXJhbSBbaXNCYW5jb0xvZ29Cb3R0b21dKG9wY2lvbmFsKTogQm9vbGVhbiBxdWUgcG9yIGRlZmVjdG8gZXN0YSB0cnVlIHkgbXVlc3RyYSBlbCBpY29ub1xuICogYmFuY29sb21iaWEgZW4gbGEgcGFydGUgaW5mZXJpb3JcbiAqIEBwYXJhbSBbaXNWaWdpbGFMb2dvQm90dG9tXShvcGNpb25hbCk6IEJvb2xlYW4gcXVlIHBvciBkZWZlY3RvIGVzdGEgdHJ1ZSB5IG11ZXN0cmEgZWwgaWNvbm9cbiAqIHZpZ2lsYWRvIGVuIGxhIHBhcnRlIGluZmVyaW9yXG4gKiBAcGFyYW0gW2lkXShvcGNpb25hbCk6IHN0cmluZyA6IEluZGljYSBlbCBpZCBkZWwgY29tcG9uZW50ZVxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIDxiYy1mb290ZXIgW3RvcFRleHRDb250ZW50XT1cIltcbiAqIHtcbiAqICAgIHRpdGxlOiB7IHRleHQ6ICdUaXR1bG8gY29sdW1uYSAwMScgfSxcbiAqICAgICB0ZXh0czogW1xuICogeyB0ZXh0OiAnTG9yZW0gaXBzdW0nIH0sXG4gKiB7IHRleHQ6ICdMb3JlbSBpcHN1bScgfSxcbiAqICB7IHRleHQ6ICdMb3JlbSBpcHN1bScgfSxcbiAqICB7IHRleHQ6ICdMb3JlbSBpcHN1bScgfSwgXVxuICogfSxcbiAqIHtcbiAqICAgIHRpdGxlOiB7IHRleHQ6ICdUaXR1bG8gY29sdW1uYSAwMicgfSxcbiAqICAgdGV4dHM6IFsgeyB0ZXh0OiAnTG9yZW0gaXBzdW0nIH0sIHsgdGV4dDogJ0xvcmVtIGlwc3VtJyB9LCB7IHRleHQ6ICdMb3JlbSBpcHN1bScgfSwgeyB0ZXh0OiAnTG9yZW0gaXBzdW0nIH0gXVxuICogfSxcbiAqIHtcbiAqICAgICB0aXRsZTogeyB0ZXh0OiAnVGl0dWxvIGNvbHVtbmEgMDMnIH0sXG4gKiAgICAgdGV4dHM6IFsgeyB0ZXh0OiAnTG9yZW0gaXBzdW0nIH0sIHsgdGV4dDogJ0xvcmVtIGlwc3VtJyB9LCB7IHRleHQ6ICdMb3JlbSBpcHN1bScgfSwgeyB0ZXh0OiAnTG9yZW0gaXBzdW0nIH0gXVxuICogfSxcbiAqIHtcbiAqICAgICB0aXRsZTogeyB0ZXh0OiAnVGl0dWxvIGNvbHVtbmEgMDQnIH0sXG4gKiAgICAgdGV4dHM6IFsgeyB0ZXh0OiAnTG9yZW0gaXBzdW0nIH0sIHsgdGV4dDogJ0xvcmVtIGlwc3VtJyB9LCB7IHRleHQ6ICdMb3JlbSBpcHN1bScgfSwgeyB0ZXh0OiAnTG9yZW0gaXBzdW0nIH0gXVxuICogfV1cIiBbc29jaWFsTmV0Qm90dG9tUmlnaHRdPVwiW1xuICogICAgIHsgbmFtZTonZmFjZWJvb2snLCBsaW5rOidodHRwOi8vZ29vZ2xlLmNvbScgfSxcbiAqICAgICB7IG5hbWU6J3R3aXR0ZXInLCBsaW5rOidodHRwOi8vZ29vZ2xlLmNvbScgfSxcbiAqICAgICB7IG5hbWU6J2xpbmtlZGluJywgbGluazonaHR0cDovL2dvb2dsZS5jb20nIH0sXG4gKiAgICAgeyBuYW1lOidpbnN0YWdyYW0nLCBsaW5rOidodHRwOi8vZ29vZ2xlLmNvbScgfSxcbiAqICAgICB7IG5hbWU6J3lvdXR1YmUnLCBsaW5rOidodHRwOi8vZ29vZ2xlLmNvbScgfVxuICogXVwiIFtib3R0b21UZXh0UmlnaENvbnRlbnRdPVwiWydEaXJlY2Npw7NuIElQIDE5MC4xNDQuNzEuMjUwJywnw5psdGltYSB2aXNpdGEgSnVldmVzIDMxIGRlIEp1bGlvIGRlIDIwMTkgMTA6MDYgYS5tJ11cIlxuICogICAgIFtib3R0b21UZXh0TGVmdENvbnRlbnRdPVwiWydDb3B5cmlnaHQgwqkgMjAyMCBHcnVwbyBCYW5jb2xvbWJpYS4gU2VkIGVnZXN0YXMsIGFudGUgZXQgdnVscHV0YXRlIHZvbHV0cGF0LCBlcm9zJyxcbiAqICdwZWRlIHNlbXBlciBlc3QsIHZpdGFlIGx1Y3R1cyBtZXR1cyBsaWJlcm8gZXUgYXVndWUuIE1vcmJpIHB1cnVzIGxpYmVybywgZmF1Y2lidXMgJyxcbiAqICdhZGlwaXNjaW5nLCBjb21tb2RvIHF1aXMsIGdyYXZpZGEgaWQsIGVzdC4gU2VkIGxlY3R1cy4gUHJhZXNlbnQgZWxlbWVudHVtIGhlbmRyZXJpdCAnLFxuICogJ3RvcnRvci4gU2VkIHNlbXBlciBsb3JlbSBhdCBmZWxpcy4gVmVzdGlidWx1bSB2b2x1dHBhdCwgbGFjdXMgYSB1bHRyaWNlcyBzYWdpdHRpcy4nXVwiPlxuICogPC9iYy1mb290ZXI+XG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQmNGb290ZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0ljb25Nb2R1bGUsIEJjQWNjb3JkaW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0JjRm9vdGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmNGb290ZXJNb2R1bGUge31cbiJdfQ==