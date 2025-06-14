import * as i0 from "@angular/core";
import * as i1 from "./bc-accordion-group.component";
import * as i2 from "./bc-accordion/bc-accordion.component";
import * as i3 from "./bc-accordion-header/bc-accordion-header.component";
import * as i4 from "./bc-accordion-content/bc-accordion-content.component";
import * as i5 from "./bc-accordion-content/bc-accordion-content-dir.directive";
import * as i6 from "@angular/common";
import * as i7 from "@bancolombia/design-system-web/bc-icon";
import * as i8 from "@bancolombia/design-system-web/bc-tooltip";
import * as i9 from "@bancolombia/design-system-web/bc-icon-button";
/**
 * Importa el acordion con los diseños de Bancolombia S.A.
 * @package bc-accordions-group, bc-accordion, bc-accordion-header, bc-accordion-content
 * @Component bc-accordions-group
 * @Description Este componente parametriza el comportamiento del acordeon como grupo
 * @param multiple Define el comportamiento de evento expandir de la acordeón
 * Si es multiple, solo se podrá expandir una acordeón a la vez
 * es decir, al expandir una se cierra la que estaba activa
 * @Component bc-accordion
 * @Description Este componente se encarga de dar formato a cada acordeon y el comportamiento
 * de abierto y cerrado
 * @param type Tipo de accordeón [ basic(default) | info | advance | column | minimal | minimal-unbordered]
 * @Component bc-accordion-header
 * @param title  Título principal
 * @param subtitle  Subtítulo
 * @param leftIcon  Icono a la izquierda
 * @param titleIcon  Icono al lado del título
 * @param subtitleIcon  Icono al lado del subtítulo
 * @param active  Indicar si esta activo
 * @param actionsIcon  Icono de las acciones a la derecha
 * @param columns  Valores de las columnas a la derecha de tipo AccordionColumn
 * @param label  Label a la parte derecha
 * @param actionSelected Evento cuando se selecciona una acción
 * @param iconRight Icono al extremo derecho, permite expadir o contraer la acordeón
 * @Component bc-accordion-content
 * @Description Este componente organiza administra el contenido del acordeon el cual
 * es libre para el desarrollador
 *
 * @example
 *  <h3>Acordeón avazando</h3>
 *   <bc-accordions-group>
 *     <bc-accordion>
 *       <bc-accordion-header
 *         leftIcon="idea"
 *         title="Acordeón avazando"
 *         titleIcon="info"
 *         subtitle="Subtítulo"
 *         subtitleIcon="info"
 *         [actionsIcon]="actionsIcon"
 *         (actionSelected)="myAction($event)"
 *       ></bc-accordion-header>
 *       <bc-accordion-content>
 *         Tiene los elementos esenciales y se le adiciona un subtítulo y más
 *         opciones de iconos para acciones relacionadas al componente.
 *       </bc-accordion-content>
 *     </bc-accordion>
 *   </bc-accordions-group>
 *
 * @author: Bancolombia S.A
 */
export declare class BcAccordionModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAccordionModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcAccordionModule, [typeof i1.BcAccordionGroupComponent, typeof i2.BcAccordionComponent, typeof i3.BcAccordionHeaderComponent, typeof i4.BcAccordionContentComponent, typeof i5.BcAccordionContentDirDirective], [typeof i6.CommonModule, typeof i7.BcIconModule, typeof i8.BcTooltipModule, typeof i9.BcIconButtonModule], [typeof i1.BcAccordionGroupComponent, typeof i2.BcAccordionComponent, typeof i3.BcAccordionHeaderComponent, typeof i4.BcAccordionContentComponent, typeof i5.BcAccordionContentDirDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcAccordionModule>;
}
