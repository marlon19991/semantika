import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Componente para el resultado de los filtros.
 *
 * @export
 * @class BcSearchResultFilterComponent
 */
export class BcSearchResultFilterComponent {
    constructor() {
        /**
            * texto label elemento
            *
            * @type {boolean}
            * @memberof BcSearchLeftComponent
        */
        this.labelResultNull = '';
        /**
            * Imagen del elemento cuando no encuentra resultados.
            *
            * @type {boolean}
            * @memberof BcSearchLeftComponent
        */
        this.imageResultNull = '';
    }
}
BcSearchResultFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchResultFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcSearchResultFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchResultFilterComponent, selector: "bc-search-result-filter", inputs: { itemsli: "itemsli", labelResultNull: "labelResultNull", imageResultNull: "imageResultNull" }, ngImport: i0, template: "<div class=\"bc-col-xl-12 bc-col-lg-12 bc-col-md-12 bc-col-sm-12 bc-col-xs-12\">\n    <div class=\"bc-search-result\">\n        <div class=\"bc-content-show-result\"></div>\n        <div class=\"bc-search-content-clear\">\n            <span class=\"bc-search-clear\">Limpiar b\u00FAsqueda</span>\n        </div>\n    </div>\n</div>\n\n<div class=\"bc-col-xl-12 bc-col-lg-12 bc-col-md-12 bc-col-sm-12 bc-col-xs-12\">\n    <div class=\"bc-search-result-null\">\n        <div>\n            <img alt=\"iconMenu\" [src]=\"imageResultNull\" />\n        </div>\n        <div>\n            <label>{{labelResultNull}}</label>\n            <ul *ngFor=\"let item of itemsli\">\n                <li>{{item}}</li>\n            </ul>\n        </div>\n    </div>\n</div>", directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchResultFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search-result-filter', template: "<div class=\"bc-col-xl-12 bc-col-lg-12 bc-col-md-12 bc-col-sm-12 bc-col-xs-12\">\n    <div class=\"bc-search-result\">\n        <div class=\"bc-content-show-result\"></div>\n        <div class=\"bc-search-content-clear\">\n            <span class=\"bc-search-clear\">Limpiar b\u00FAsqueda</span>\n        </div>\n    </div>\n</div>\n\n<div class=\"bc-col-xl-12 bc-col-lg-12 bc-col-md-12 bc-col-sm-12 bc-col-xs-12\">\n    <div class=\"bc-search-result-null\">\n        <div>\n            <img alt=\"iconMenu\" [src]=\"imageResultNull\" />\n        </div>\n        <div>\n            <label>{{labelResultNull}}</label>\n            <ul *ngFor=\"let item of itemsli\">\n                <li>{{item}}</li>\n            </ul>\n        </div>\n    </div>\n</div>" }]
        }], propDecorators: { itemsli: [{
                type: Input
            }], labelResultNull: [{
                type: Input
            }], imageResultNull: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2VhcmNoLXJlc3VsdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXNlYXJjaC9iYy1zZWFyY2gtcmVzdWx0LWZpbHRlci9iYy1zZWFyY2gtcmVzdWx0LWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2VhcmNoL2JjLXNlYXJjaC1yZXN1bHQtZmlsdGVyL2JjLXNlYXJjaC1yZXN1bHQtZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFakQ7Ozs7O0dBS0c7QUFLSCxNQUFNLE9BQU8sNkJBQTZCO0lBSjFDO1FBY0k7Ozs7O1VBS0U7UUFFTyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUU5Qjs7Ozs7VUFLRTtRQUVPLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0tBQ2pDOzswSEEzQlksNkJBQTZCOzhHQUE3Qiw2QkFBNkIsdUtDWjFDLHF2QkFxQk07MkZEVE8sNkJBQTZCO2tCQUp6QyxTQUFTOytCQUNJLHlCQUF5Qjs4QkFXMUIsT0FBTztzQkFBZixLQUFLO2dCQVNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBU0csZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBDb21wb25lbnRlIHBhcmEgZWwgcmVzdWx0YWRvIGRlIGxvcyBmaWx0cm9zLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1NlYXJjaFJlc3VsdEZpbHRlckNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JjLXNlYXJjaC1yZXN1bHQtZmlsdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmMtc2VhcmNoLXJlc3VsdC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJjU2VhcmNoUmVzdWx0RmlsdGVyQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAgICAqIEl0ZW1zIHBhcmEgbG9zIGxpIGN1YW5kbyBubyBzZSBlbmN1ZW50cmFuIHJlc3VsdGFkb3MuXG4gICAgICAgICpcbiAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hMZWZ0Q29tcG9uZW50XG4gICAgKi9cbiAgICBASW5wdXQoKSBpdGVtc2xpOiBhbnlbXTtcblxuICAgIC8qKlxuICAgICAgICAqIHRleHRvIGxhYmVsIGVsZW1lbnRvXG4gICAgICAgICpcbiAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hMZWZ0Q29tcG9uZW50XG4gICAgKi9cblxuICAgIEBJbnB1dCgpIGxhYmVsUmVzdWx0TnVsbCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICAgICogSW1hZ2VuIGRlbCBlbGVtZW50byBjdWFuZG8gbm8gZW5jdWVudHJhIHJlc3VsdGFkb3MuXG4gICAgICAgICpcbiAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgKiBAbWVtYmVyb2YgQmNTZWFyY2hMZWZ0Q29tcG9uZW50XG4gICAgKi9cblxuICAgIEBJbnB1dCgpIGltYWdlUmVzdWx0TnVsbCA9ICcnO1xufVxuIiwiPGRpdiBjbGFzcz1cImJjLWNvbC14bC0xMiBiYy1jb2wtbGctMTIgYmMtY29sLW1kLTEyIGJjLWNvbC1zbS0xMiBiYy1jb2wteHMtMTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtc2VhcmNoLXJlc3VsdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtY29udGVudC1zaG93LXJlc3VsdFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmMtc2VhcmNoLWNvbnRlbnQtY2xlYXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmMtc2VhcmNoLWNsZWFyXCI+TGltcGlhciBiw7pzcXVlZGE8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJiYy1jb2wteGwtMTIgYmMtY29sLWxnLTEyIGJjLWNvbC1tZC0xMiBiYy1jb2wtc20tMTIgYmMtY29sLXhzLTEyXCI+XG4gICAgPGRpdiBjbGFzcz1cImJjLXNlYXJjaC1yZXN1bHQtbnVsbFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJpY29uTWVudVwiIFtzcmNdPVwiaW1hZ2VSZXN1bHROdWxsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+e3tsYWJlbFJlc3VsdE51bGx9fTwvbGFiZWw+XG4gICAgICAgICAgICA8dWwgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNsaVwiPlxuICAgICAgICAgICAgICAgIDxsaT57e2l0ZW19fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==