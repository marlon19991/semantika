import { Component, Input, forwardRef } from '@angular/core';
import { BcCarouselBehavior } from '@bancolombia/design-system-behaviors';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@angular/common";
/**
 * Componente Carousel
 *
 * @export
 * @class BcCarouselBehavior
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class BcCarouselComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
       * Esta entrada permite indicar un id único al componente dentro del DOM.
       *
       * @type {string}
       * @memberof BcCarouselComponent
       *
       */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Esta entrada se utiliza para dar el posicionamiento de los botones .
         * Las opciones son: top | bottom
         *
         * @type {('top' | 'bottom')}
         * @memberof BcInputSelectComponent
         */
        this.positionArrows = 'bottom';
        /**
         * Esta entrada se utiliza para asignarle titulo al carousel,
         * para temas de accesbilidad.
         * @type {string}
         * @memberof BcInputSelectComponent
         */
        this.ariaLabelCarousel = '';
        /**
         * Comportamiento de componente
         *
         * @type {BcHeaderBehavior}
         * @memberof BcCarouselBehavior
         */
        this.BcCarouselBehavior = new BcCarouselBehavior();
    }
    ngAfterViewInit() {
        this.BcCarouselBehavior.setId(this.componentId);
        this.BcCarouselBehavior.setOptions(this.configCarouselInitial);
        this.BcCarouselBehavior.setUp();
    }
}
BcCarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCarouselComponent, selector: "bc-carousel", inputs: { componentId: "componentId", configCarouselInitial: "configCarouselInitial", positionArrows: "positionArrows", ariaLabelCarousel: "ariaLabelCarousel" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BcCarouselBehavior),
            multi: true,
        },
    ], ngImport: i0, template: "<section class=\"bc-carousel\" [id]=\"componentId\" \n           [attr.aria-label]=\"ariaLabelCarousel\">\n    <div *ngIf=\"positionArrows== 'top'\" class=\"bc-carousel-container-top-button\">\n      <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-prev\" \n            aria-hidden=\"false\" aria-label=\"Anterior slide\" >\n          <bc-icon [name]=\"configCarouselInitial.iconNamePrev\" aria-hidden=\"true\" aria-label=\"prevArrow\"></bc-icon>\n      </div>\n      <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-next\" \n            aria-hidden=\"true\" aria-label=\"Siguiente slide\">\n          <bc-icon [name]=\"configCarouselInitial.iconNameNext\" aria-hidden=\"true\" aria-label=\"netxArrow\"></bc-icon>\n      </div>\n    </div>\n\n    <section class=\"bc-carousel-list\">\n        <ul class=\"bc-carousel-track\">\n          <ng-content></ng-content>\n        </ul>\n    </section>\n    <div *ngIf=\"positionArrows == 'bottom'\" class=\"bc-carousel-container-bottom-button\">\n        <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-prev\">\n          <bc-icon [name]=\"configCarouselInitial.iconNamePrev\" aria-hidden=\"true\" aria-label=\"prevArrow\"></bc-icon>\n        </div>\n        <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-next\">\n          <bc-icon [name]=\"configCarouselInitial.iconNameNext\" aria-hidden=\"true\" aria-label=\"netxArrow\"></bc-icon>\n        </div>\n    </div>\n  </section>\n\n\n\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-carousel', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BcCarouselBehavior),
                            multi: true,
                        },
                    ], template: "<section class=\"bc-carousel\" [id]=\"componentId\" \n           [attr.aria-label]=\"ariaLabelCarousel\">\n    <div *ngIf=\"positionArrows== 'top'\" class=\"bc-carousel-container-top-button\">\n      <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-prev\" \n            aria-hidden=\"false\" aria-label=\"Anterior slide\" >\n          <bc-icon [name]=\"configCarouselInitial.iconNamePrev\" aria-hidden=\"true\" aria-label=\"prevArrow\"></bc-icon>\n      </div>\n      <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-next\" \n            aria-hidden=\"true\" aria-label=\"Siguiente slide\">\n          <bc-icon [name]=\"configCarouselInitial.iconNameNext\" aria-hidden=\"true\" aria-label=\"netxArrow\"></bc-icon>\n      </div>\n    </div>\n\n    <section class=\"bc-carousel-list\">\n        <ul class=\"bc-carousel-track\">\n          <ng-content></ng-content>\n        </ul>\n    </section>\n    <div *ngIf=\"positionArrows == 'bottom'\" class=\"bc-carousel-container-bottom-button\">\n        <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-prev\">\n          <bc-icon [name]=\"configCarouselInitial.iconNamePrev\" aria-hidden=\"true\" aria-label=\"prevArrow\"></bc-icon>\n        </div>\n        <div tabindex=\"0\" class=\"bc-carousel-arrow bc-carousel-arrow-next\">\n          <bc-icon [name]=\"configCarouselInitial.iconNameNext\" aria-hidden=\"true\" aria-label=\"netxArrow\"></bc-icon>\n        </div>\n    </div>\n  </section>\n\n\n\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], configCarouselInitial: [{
                type: Input
            }], positionArrows: [{
                type: Input
            }], ariaLabelCarousel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhcm91c2VsL2JjLWNhcm91c2VsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jYXJvdXNlbC9iYy1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBb0IsTUFBTSxzQ0FBc0MsQ0FBQztBQUU1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFHbkQ7Ozs7Ozs7R0FPRztBQVlILE1BQU0sT0FBTyxtQkFBbUI7SUE4RDlCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTdEcEQ7Ozs7OztTQU1DO1FBQ1EsZ0JBQVcsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQTZCaEU7Ozs7OztXQU1HO1FBQ00sbUJBQWMsR0FBcUIsUUFBUSxDQUFDO1FBRXJEOzs7OztXQUtHO1FBQ00sc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRWhDOzs7OztXQUtHO1FBQ0gsdUJBQWtCLEdBQXVCLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUdsRSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dIQXJFVSxtQkFBbUI7b0dBQW5CLG1CQUFtQix3TUFSbkI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUNqRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsMEJDdkJILHE5Q0E4QkE7MkZETGEsbUJBQW1CO2tCQVgvQixTQUFTOytCQUNFLGFBQWEsYUFFWjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDOzRCQUNqRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtzR0FVUSxXQUFXO3NCQUFuQixLQUFLO2dCQTJCRyxxQkFBcUI7c0JBQTdCLEtBQUs7Z0JBU0csY0FBYztzQkFBdEIsS0FBSztnQkFRRyxpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0Nhcm91c2VsQmVoYXZpb3IsIEJjQ2Fyb3VzZWxDb25maWcgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuLyoqXG4gKiBDb21wb25lbnRlIENhcm91c2VsXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjQ2Fyb3VzZWxCZWhhdmlvclxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnYmMtY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJjQ2Fyb3VzZWxCZWhhdmlvciksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBCY0Nhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgdW4gaWQgw7puaWNvIGFsIGNvbXBvbmVudGUgZGVudHJvIGRlbCBET00uXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqIEBtZW1iZXJvZiBCY0Nhcm91c2VsQ29tcG9uZW50XG4gKlxuICovXG4gIEBJbnB1dCgpIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBkZSB0aXBvIEJjQ2Fyb3VzZWxDb21wb25lbnQgcGVybWl0ZSBpbmRpY2FybGUgbGFzIG9wY2lvbmVzIGRlIGNvbmZpZ3VyYWNpw7NuIHBhcmEgY29uc3RydWlyIGVsIGNhcm91c2VsLlxuICAgKiBMYXMgb3BjaW9uZXMgc29uOiB7XG4gICAgICAgIGljb25OYW1lUHJldjogc3RyaW5nO1xuICAgICAgICBpY29uTmFtZU5leHQ6IHN0cmluZztcbiAgICAgICAgc3BhY2luZ0JldHdlZW5JdGVtcz86IDAgfCAxIHwgMiB8IDMgfCA0IHwgNTtcbiAgICAgICAgc3dpcGVTcGVlZDogMSB8IDIgfCAzO1xuICAgICAgICBpdGVtcz86IEFycmF5PEJjQ2Fyb3VzZWxJdGVtc0NvbmZpZz5cbiAgICAgICAgYXJyb3dzOiBib29sZWFuO1xuICAgICAgICBidWxsZXRzOiBib29sZWFuO1xuICAgICAgICBhY2Nlc3NpYmlsaXR5OiBib29sZWFuO1xuICAgICAgICBpbml0aWFsU2xpZGU6IG51bWJlcjtcbiAgICAgICAgc2xpZGVzVG9TaG93OiBudW1iZXI7XG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBudW1iZXI7XG4gICAgICAgIHN3aXBlOiBib29sZWFuO1xuICAgICAgICB2YXJpYWJsZVdpZHRoOiBib29sZWFuO1xuICAgICAgICBpbmZpbml0eTogYm9vbGVhbjtcbiAgICAgICAgZ3JpZFN5c3RlbTogYm9vbGVhbjtcbiAgICAgICAgYXJyb3dzSW5CdWxsZXRzPzogYm9vbGVhbjtcbiAgICAgICAgYXV0b1BsYXk/OiBib29sZWFuO1xuICAgICAgICBzbGlkZXJQYWdpbmF0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0PzpudW1iZXI7XG4gICAqIH1cbiAgICogQHR5cGUge0JjQ2Fyb3VzZWxDb21wb25lbnR9XG4gICAqIEBtZW1iZXJvZiBCY0Nhcm91c2VsQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb25maWdDYXJvdXNlbEluaXRpYWw6IEJjQ2Fyb3VzZWxDb25maWc7XG5cbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBzZSB1dGlsaXphIHBhcmEgZGFyIGVsIHBvc2ljaW9uYW1pZW50byBkZSBsb3MgYm90b25lcyAuXG4gICAqIExhcyBvcGNpb25lcyBzb246IHRvcCB8IGJvdHRvbVxuICAgKlxuICAgKiBAdHlwZSB7KCd0b3AnIHwgJ2JvdHRvbScpfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dFNlbGVjdENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb25BcnJvd3M6ICd0b3AnIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcblxuICAvKipcbiAgICogRXN0YSBlbnRyYWRhIHNlIHV0aWxpemEgcGFyYSBhc2lnbmFybGUgdGl0dWxvIGFsIGNhcm91c2VsLFxuICAgKiBwYXJhIHRlbWFzIGRlIGFjY2VzYmlsaWRhZC5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRTZWxlY3RDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGFyaWFMYWJlbENhcm91c2VsID0gJyc7XG5cbiAgLyoqXG4gICAqIENvbXBvcnRhbWllbnRvIGRlIGNvbXBvbmVudGVcbiAgICpcbiAgICogQHR5cGUge0JjSGVhZGVyQmVoYXZpb3J9XG4gICAqIEBtZW1iZXJvZiBCY0Nhcm91c2VsQmVoYXZpb3JcbiAgICovXG4gIEJjQ2Fyb3VzZWxCZWhhdmlvcjogQmNDYXJvdXNlbEJlaGF2aW9yID0gbmV3IEJjQ2Fyb3VzZWxCZWhhdmlvcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLkJjQ2Fyb3VzZWxCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICB0aGlzLkJjQ2Fyb3VzZWxCZWhhdmlvci5zZXRPcHRpb25zKHRoaXMuY29uZmlnQ2Fyb3VzZWxJbml0aWFsKTtcbiAgICB0aGlzLkJjQ2Fyb3VzZWxCZWhhdmlvci5zZXRVcCgpO1xuICB9XG5cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiYmMtY2Fyb3VzZWxcIiBbaWRdPVwiY29tcG9uZW50SWRcIiBcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxDYXJvdXNlbFwiPlxuICAgIDxkaXYgKm5nSWY9XCJwb3NpdGlvbkFycm93cz09ICd0b3AnXCIgY2xhc3M9XCJiYy1jYXJvdXNlbC1jb250YWluZXItdG9wLWJ1dHRvblwiPlxuICAgICAgPGRpdiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImJjLWNhcm91c2VsLWFycm93IGJjLWNhcm91c2VsLWFycm93LXByZXZcIiBcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiQW50ZXJpb3Igc2xpZGVcIiA+XG4gICAgICAgICAgPGJjLWljb24gW25hbWVdPVwiY29uZmlnQ2Fyb3VzZWxJbml0aWFsLmljb25OYW1lUHJldlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJwcmV2QXJyb3dcIj48L2JjLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJiYy1jYXJvdXNlbC1hcnJvdyBiYy1jYXJvdXNlbC1hcnJvdy1uZXh0XCIgXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIiBhcmlhLWxhYmVsPVwiU2lndWllbnRlIHNsaWRlXCI+XG4gICAgICAgICAgPGJjLWljb24gW25hbWVdPVwiY29uZmlnQ2Fyb3VzZWxJbml0aWFsLmljb25OYW1lTmV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJuZXR4QXJyb3dcIj48L2JjLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtY2Fyb3VzZWwtbGlzdFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJiYy1jYXJvdXNlbC10cmFja1wiPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGRpdiAqbmdJZj1cInBvc2l0aW9uQXJyb3dzID09ICdib3R0b20nXCIgY2xhc3M9XCJiYy1jYXJvdXNlbC1jb250YWluZXItYm90dG9tLWJ1dHRvblwiPlxuICAgICAgICA8ZGl2IHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYmMtY2Fyb3VzZWwtYXJyb3cgYmMtY2Fyb3VzZWwtYXJyb3ctcHJldlwiPlxuICAgICAgICAgIDxiYy1pY29uIFtuYW1lXT1cImNvbmZpZ0Nhcm91c2VsSW5pdGlhbC5pY29uTmFtZVByZXZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBhcmlhLWxhYmVsPVwicHJldkFycm93XCI+PC9iYy1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImJjLWNhcm91c2VsLWFycm93IGJjLWNhcm91c2VsLWFycm93LW5leHRcIj5cbiAgICAgICAgICA8YmMtaWNvbiBbbmFtZV09XCJjb25maWdDYXJvdXNlbEluaXRpYWwuaWNvbk5hbWVOZXh0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgYXJpYS1sYWJlbD1cIm5ldHhBcnJvd1wiPjwvYmMtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cblxuXG5cbiJdfQ==