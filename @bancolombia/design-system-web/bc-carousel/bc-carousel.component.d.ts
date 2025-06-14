import { AfterViewInit } from '@angular/core';
import { BcCarouselBehavior, BcCarouselConfig } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente Carousel
 *
 * @export
 * @class BcCarouselBehavior
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export declare class BcCarouselComponent implements AfterViewInit {
    private bcHelperService;
    /**
   * Esta entrada permite indicar un id único al componente dentro del DOM.
   *
   * @type {string}
   * @memberof BcCarouselComponent
   *
   */
    componentId: string;
    /**
     * Esta entrada de tipo BcCarouselComponent permite indicarle las opciones de configuración para construir el carousel.
     * Las opciones son: {
          iconNamePrev: string;
          iconNameNext: string;
          spacingBetweenItems?: 0 | 1 | 2 | 3 | 4 | 5;
          swipeSpeed: 1 | 2 | 3;
          items?: Array<BcCarouselItemsConfig>
          arrows: boolean;
          bullets: boolean;
          accessibility: boolean;
          initialSlide: number;
          slidesToShow: number;
          slidesToScroll: number;
          swipe: boolean;
          variableWidth: boolean;
          infinity: boolean;
          gridSystem: boolean;
          arrowsInBullets?: boolean;
          autoPlay?: boolean;
          sliderPagination?: boolean;
          autoplayTimeout?:number;
     * }
     * @type {BcCarouselComponent}
     * @memberof BcCarouselComponent
     */
    configCarouselInitial: BcCarouselConfig;
    /**
     * Esta entrada se utiliza para dar el posicionamiento de los botones .
     * Las opciones son: top | bottom
     *
     * @type {('top' | 'bottom')}
     * @memberof BcInputSelectComponent
     */
    positionArrows: 'top' | 'bottom';
    /**
     * Esta entrada se utiliza para asignarle titulo al carousel,
     * para temas de accesbilidad.
     * @type {string}
     * @memberof BcInputSelectComponent
     */
    ariaLabelCarousel: string;
    /**
     * Comportamiento de componente
     *
     * @type {BcHeaderBehavior}
     * @memberof BcCarouselBehavior
     */
    BcCarouselBehavior: BcCarouselBehavior;
    constructor(bcHelperService: BcHelperService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCarouselComponent, "bc-carousel", never, { "componentId": "componentId"; "configCarouselInitial": "configCarouselInitial"; "positionArrows": "positionArrows"; "ariaLabelCarousel": "ariaLabelCarousel"; }, {}, never, ["*"]>;
}
