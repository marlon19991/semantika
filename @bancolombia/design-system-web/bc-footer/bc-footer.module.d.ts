import * as i0 from "@angular/core";
import * as i1 from "./bc-footer.component";
import * as i2 from "@angular/common";
import * as i3 from "@bancolombia/design-system-web/bc-icon";
import * as i4 from "@bancolombia/design-system-web/bc-accordion";
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
export declare class BcFooterModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcFooterModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcFooterModule, [typeof i1.BcFooterComponent], [typeof i2.CommonModule, typeof i3.BcIconModule, typeof i4.BcAccordionModule], [typeof i1.BcFooterComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcFooterModule>;
}
