import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-tooltip";
/**
 * Componente acción buscar.
 *
 * @export
 * @class BcSearchButtonComponent
 */
export class BcSearchButtonComponent {
    constructor() {
        /**
         * Icono que ejecuta la acción de buscar.
         *
         * @memberof BcSearchLeftComponent
        */
        this.iconSearch = '';
    }
}
BcSearchButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchButtonComponent, selector: "bc-search-button", inputs: { iconSearch: "iconSearch" }, ngImport: i0, template: "<div class=\"bc-search-button\">\n    <i class=\"bc-icon\" bc-tooltip bcTooltipText=\"Buscar\">{{iconSearch}}</i>\n</div>", directives: [{ type: i1.BcTooltipDirective, selector: "[bc-tooltip]", inputs: ["bcTooltipPosition", "bcTooltipTitle", "bcTooltipText", "bcTooltipButtonText", "bcTooltipParentElement"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-button', template: "<div class=\"bc-search-button\">\n    <i class=\"bc-icon\" bc-tooltip bcTooltipText=\"Buscar\">{{iconSearch}}</i>\n</div>" }]
        }], propDecorators: { iconSearch: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2VhcmNoLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2VhcmNoL2JjLXNlYXJjaC1idXR0b24vYmMtc2VhcmNoLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2VhcmNoL2JjLXNlYXJjaC1idXR0b24vYmMtc2VhcmNoLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRWpEOzs7OztHQUtHO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQU1JOzs7O1VBSUU7UUFDTyxlQUFVLEdBQUcsRUFBRSxDQUFDO0tBRTVCOztvSEFUWSx1QkFBdUI7d0dBQXZCLHVCQUF1Qiw4RkNacEMsMkhBRU07MkZEVU8sdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNJLGtCQUFrQjs4QkFVbkIsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBDb21wb25lbnRlIGFjY2nDs24gYnVzY2FyLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1NlYXJjaEJ1dHRvbkNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JjLXNlYXJjaC1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYy1zZWFyY2gtYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY1NlYXJjaEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBJY29ubyBxdWUgZWplY3V0YSBsYSBhY2Npw7NuIGRlIGJ1c2Nhci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBCY1NlYXJjaExlZnRDb21wb25lbnRcbiAgICAqL1xuICAgIEBJbnB1dCgpIGljb25TZWFyY2ggPSAnJztcblxufVxuIiwiPGRpdiBjbGFzcz1cImJjLXNlYXJjaC1idXR0b25cIj5cbiAgICA8aSBjbGFzcz1cImJjLWljb25cIiBiYy10b29sdGlwIGJjVG9vbHRpcFRleHQ9XCJCdXNjYXJcIj57e2ljb25TZWFyY2h9fTwvaT5cbjwvZGl2PiJdfQ==