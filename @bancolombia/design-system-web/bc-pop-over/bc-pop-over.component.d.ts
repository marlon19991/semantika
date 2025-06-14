import { AfterViewInit } from '@angular/core';
import { BcPopOverBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
* Importa el pop over con los diseños de Bancolombia S.A.
* El componente pop over representa un indicador de novedad sobre un elemento
*
* @export
* @class BcPopOverComponent
* @implements {AfterViewInit}
*/
export declare class BcPopOverComponent implements AfterViewInit {
    bcPopOverBehavior: BcPopOverBehavior;
    constructor();
    ngAfterViewInit(): void;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcPopOverComponent
     */
    componentId: string;
    /**
   * Define el comportamiento de Hover del componente.
   *
   * @type {string}
   * @memberof BcPopOverComponent
   */
    hover: string;
    /**
  * Define si el componente se pone en pantalla completa para pantallas Mobile.
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    fullScreen: string;
    /**
* Define si se agrega scroll al contenedor, para que esta propiedad se aplique se debe
  definir un alto y un ancho al componente.
*
* @type {string}
* @memberof BcPopOverComponent
*/
    scroll: string;
    /**
  * Define si se aplica un backdrop a la ventana.
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    backdrop: string;
    /**
  * Setea un ancho al componente.
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    width: string;
    /**
  * Setea un tipo de medida al ancho del componente
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    typeWidth: string;
    /**
  * Setea un alto al componente.
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    height: string;
    /**
  * Setea un tipo de medida al ancho del componente
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    typeHeight: string;
    /**
  * Crea el boton de cerrar el modal.
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    buttonClose: string;
    /**
  * Oculta la flecha del componente.
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    hiddenArrow: string;
    /**
  * Habilita cerrar el pop over dando click por fuera del mismo.
  *
  * @type {string}
  * @memberof BcPopOverComponent
  */
    closeOutside: string;
    /**
   * Funcion para abrir el pop-over.
   *
   * @memberof BcPopOverComponent
   */
    openPopOver(): void;
    /**
   * Funcion para cerrar el pop-over.
   *
   * @memberof BcPopOverComponent
   */
    closePopOver(): void;
    /**
       * Parámetro para denotar el color del pop over
       * @memberof BcPopOverComponent
       */
    color: string;
    /**
   * Funcion para crear un toogle al abrir y cerrar el pop-over el pop-over.
   *
   * @memberof BcPopOverComponent
   */
    tooglePopOver(): void;
    /**
   * Atributo para la posicion del pop over desktop
   *
   * @memberof BcPopOverComponent
   */
    position: string;
    /**
   * Atributo para la posicion del pop over en mobile
   *
   * @memberof BcPopOverComponent
   */
    positionMobile: string;
    /**
   * Atributo para la posicion del pop over en tablet
   *
   * @memberof BcPopOverComponent
   */
    positionTablet: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcPopOverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcPopOverComponent, "bc-pop-over", never, { "componentId": "componentId"; "hover": "hover"; "fullScreen": "fullScreen"; "scroll": "scroll"; "backdrop": "backdrop"; "width": "width"; "typeWidth": "typeWidth"; "height": "height"; "typeHeight": "typeHeight"; "buttonClose": "buttonClose"; "hiddenArrow": "hiddenArrow"; "closeOutside": "closeOutside"; "color": "color"; "position": "position"; "positionMobile": "positionMobile"; "positionTablet": "positionTablet"; }, {}, never, ["*"]>;
}
