import { EventEmitter, ElementRef, OnChanges, Renderer2, OnInit } from '@angular/core';
import { AccordionColumn } from '../bc-accordion-interfaces';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
interface ItooltipIcon {
    isTooltip: boolean;
    textTooltip: string;
    positionTooltip: string;
}
/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 *
 * @export
 * @class BcAccordionHeaderComponent
 */
export declare class BcAccordionHeaderComponent implements OnChanges, OnInit {
    private bcHelperService;
    elementRef: ElementRef;
    private render;
    /**
     * Esta entrada permite indicar un id único al componente dentro del DOM.
     *
     * @type {string}
     * @memberof BcInputSelectComponent
     */
    componentId: string;
    /**
     * Esta Variable se utiliza para guardar el ultimo elemento de las
     * columnas, este aplica solo para el acordeon con columnas y se usa en
     * responsive
     * @type {string}
     */
    lastValueColumn: string;
    /**
     * Título principal, es obligatorio y puede tener cualquier valor string.
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    title: string;
    /**
     * Subtítulo, es opcional y puede tener cualquier valor string.
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    subtitle: string;
    /**
     * Icono a la izquierda, es de tipo funcional y va al lado izquierdo la acordeón.
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    leftIcon: string;
    /**
     * Icono al lado del título, es de tipo funcional y va a la derecha del título.
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    titleIcon: string;
    /**
     * Icono al lado del subtítulo, es de tipo funcional y va a la derecha del subtítulo.
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    subtitleIcon: string;
    /**
     * Indica el aria-labelledby para el comportamiento del componente.
     */
    ariaLabelledby: string;
    /**
     * Indica el aria-label para el comportamiento del componente.
     */
    ariaLabel: string;
    /**
     * Icono de las acciones a la derecha, se muestran si la variable tiene algun valor diferente de [] (vacio),
     * recibe un array de strings con los nombres de los iconos funcionales a mostrar.
     *
     * @type {Array<string>}
     * @memberof BcAccordionHeaderComponent
     */
    actionsIcon: Array<string>;
    /**
     * Valores de las columnas a la derecha, se muestran si la variable tiene algun valor diferente de [] (vacio),
     * recibe un array de tipo AccordionColumn con los valores que el usuario desee mostrar, máximo son 3 columnas (recomendado).
     *
     * @type {Array<AccordionColumn>}
     * @memberof BcAccordionHeaderComponent
     */
    columns: Array<AccordionColumn>;
    /**
     * Evento cuando se selecciona una acción, se ejecuta cuando se ha hecho clic en algún icono de acción
     * y retorna el nombre del icono al cual se le hizo clic.
     *
     * @type {EventEmitter}
     * @memberof BcAccordionHeaderComponent
     */
    actionSelected: EventEmitter<any>;
    /**
     * Logo, va al lado izquierdo la acordeón.
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    srcLogo: string;
    /**
     * Logo, va al lado izquierdo la acordeón.
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    altLogo: string;
    /**
     * Label a la parte derecha, es opcional y recibe cualquier valor string.
     *
     * @type {string}
     * @memberof BcAccordionHeaderComponent
     */
    label: string;
    /**
     * Icono al extremo derecho, permite expandir o contraer la acordeón.
     * Este rota 180º cuando esta activa de los contrario se mantiene en 0º.
     *
     * @memberof BcAccordionHeaderComponent
     */
    iconRight: 'arrow2-down' | 'arrow2-up';
    updated: EventEmitter<any>;
    /**
     * Tooltip ubicado en el header del acordeón.
     *  @type {ItooltipIcon}
     * @memberof BcAccordionHeaderComponent
     */
    tooltipIcon: ItooltipIcon;
    /**
     * Creates an instance of BcAccordionHeaderComponent.
     * @memberof BcAccordionHeaderComponent
     */
    constructor(bcHelperService: BcHelperService, elementRef: ElementRef, render: Renderer2);
    ngOnInit(): void;
    ngOnChanges(): void;
    /**
     * Retorna el nombre del icono de la acción clickeada
     * @param action  acción seleccionada
     */
    selectAction(action: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAccordionHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcAccordionHeaderComponent, "bc-accordion-header", never, { "componentId": "componentId"; "title": "title"; "subtitle": "subtitle"; "leftIcon": "leftIcon"; "titleIcon": "titleIcon"; "subtitleIcon": "subtitleIcon"; "ariaLabelledby": "aria-labelledby"; "ariaLabel": "aria-label"; "actionsIcon": "actionsIcon"; "columns": "columns"; "srcLogo": "srcLogo"; "altLogo": "altLogo"; "label": "label"; "iconRight": "iconRight"; "tooltipIcon": "tooltipIcon"; }, { "actionSelected": "actionSelected"; }, never, never>;
}
export {};
