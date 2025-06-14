import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BcPageHeaderBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-breadcrumb";
import * as i3 from "@bancolombia/design-system-web/bc-icon";
import * as i4 from "@angular/common";
/**
 * Importa el componente BcFooter para el pie de página
 *
 * @export
 * @class BcfooterComponent
 * @implements {AfterViewInit}
 */
export class BcPageHeaderComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento
         *
         * @type {string}
         * @memberof BcPageHeaderComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Links del lado derecho
         *
         * @type {IRightButtons[]}
         * @memberof BcPageHeaderComponent
         */
        this.rightButtons = [];
        /**
         * Fecha de lado derecho
         *
         * @type {string}
         * @memberof BcPageHeaderComponent
         */
        this.date = '';
        /**
         * Titulo de la pagina
         *
         * @type {string}
         * @memberof BcPageHeaderComponent
         */
        this.title = '';
        /**
         * Coloca el background blanco
         *
         * @type {boolean}
         * @memberof BcPageHeaderComponent
         */
        this.bgWhite = false;
        /**
         * Coloca el background blanco
         *
         * @type {boolean}
         * @memberof BcPageHeaderComponent
         */
        this.showBackButton = false;
        /**
         * Evento click de los botos de la derecha
         *
         * @type {EventEmitter}
         * @memberof BcPageHeaderComponent
         */
        this.clickButtonRight = new EventEmitter();
        /**
         * Evento click para retroceder
         *
         * @type {EventEmitter}
         * @memberof BcPageHeaderComponent
         */
        this.clickBackButton = new EventEmitter();
        this.bcPageHeaderBehavior = new BcPageHeaderBehavior();
    }
    ngAfterViewInit() {
        this.bcPageHeaderBehavior.setId(this.componentId);
        this.bcPageHeaderBehavior.setUp();
    }
    buttonClick(idButton) {
        this.clickButtonRight.emit(idButton);
    }
}
BcPageHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPageHeaderComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcPageHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPageHeaderComponent, selector: "bc-page-header", inputs: { componentId: "componentId", rightButtons: "rightButtons", date: "date", title: "title", bgWhite: "bgWhite", showBackButton: "showBackButton" }, outputs: { clickButtonRight: "clickButtonRight", clickBackButton: "clickBackButton" }, ngImport: i0, template: "<div class=\"bc-page-header\" [ngClass]=\"{'bc-page-header-white': bgWhite}\" [id]=\"componentId\">\n    <div class=\"bc-container bc-page-header-content\">\n        <div class=\"bc-page-header-content-left bc-col-md-6 bc-col-sm-6 bc-col-xs-12\">\n            <bc-breadcrumb></bc-breadcrumb>\n            <div class=\"bc-page-header-content-left-title\">\n                <bc-icon class=\"bc-page-header-back-button\" size=\"sm\" aria-hidden=\"true\" aria-label=\"prueba\"\n                    *ngIf=\"showBackButton\">arrow-left</bc-icon>\n                <h6 *ngIf=\"title\">{{title}}</h6>\n            </div>\n\n        </div>\n\n        <div class=\"bc-page-header-content-right bc-col-md-6 bc-col-sm-6 bc-col-xs-12\">\n            <div class=\"bc-page-header-content-right-p\">\n                <p *ngIf=\"date\">{{date}}</p>\n\n            </div>\n            <div class=\"bc-page-header-content-right-icons\">\n                <button *ngFor=\"let item of rightButtons; let i = index;\" [id]=\"item.id\" aria-label=\"Boton\"\n                    sizebutton=\"small\" role=\"button\" tabindex=\"0\" class=\"bc-fab-btn-icon bc-page-header-icon\"\n                    (click)=\"buttonClick(item.id)\">\n                    <em class=\"bc-icon bc-xs\" aria-hidden=\"true\" aria-label=\"prueba\">{{item.icon}}</em>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i2.BcBreadcrumbComponent, selector: "bc-breadcrumb", inputs: ["componentId"] }, { type: i3.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-page-header', template: "<div class=\"bc-page-header\" [ngClass]=\"{'bc-page-header-white': bgWhite}\" [id]=\"componentId\">\n    <div class=\"bc-container bc-page-header-content\">\n        <div class=\"bc-page-header-content-left bc-col-md-6 bc-col-sm-6 bc-col-xs-12\">\n            <bc-breadcrumb></bc-breadcrumb>\n            <div class=\"bc-page-header-content-left-title\">\n                <bc-icon class=\"bc-page-header-back-button\" size=\"sm\" aria-hidden=\"true\" aria-label=\"prueba\"\n                    *ngIf=\"showBackButton\">arrow-left</bc-icon>\n                <h6 *ngIf=\"title\">{{title}}</h6>\n            </div>\n\n        </div>\n\n        <div class=\"bc-page-header-content-right bc-col-md-6 bc-col-sm-6 bc-col-xs-12\">\n            <div class=\"bc-page-header-content-right-p\">\n                <p *ngIf=\"date\">{{date}}</p>\n\n            </div>\n            <div class=\"bc-page-header-content-right-icons\">\n                <button *ngFor=\"let item of rightButtons; let i = index;\" [id]=\"item.id\" aria-label=\"Boton\"\n                    sizebutton=\"small\" role=\"button\" tabindex=\"0\" class=\"bc-fab-btn-icon bc-page-header-icon\"\n                    (click)=\"buttonClick(item.id)\">\n                    <em class=\"bc-icon bc-xs\" aria-hidden=\"true\" aria-label=\"prueba\">{{item.icon}}</em>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], rightButtons: [{
                type: Input
            }], date: [{
                type: Input
            }], title: [{
                type: Input
            }], bgWhite: [{
                type: Input
            }], showBackButton: [{
                type: Input
            }], clickButtonRight: [{
                type: Output
            }], clickBackButton: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXBhZ2UtaGVhZGVyL2JjLXBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wYWdlLWhlYWRlci9iYy1wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0FBVzVFOzs7Ozs7R0FNRztBQUtILE1BQU0sT0FBTyxxQkFBcUI7SUFtRWhDLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWxFcEQ7Ozs7O1dBS0c7UUFDTSxnQkFBVyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR2hFOzs7OztXQUtHO1FBQ00saUJBQVksR0FBb0IsRUFBRSxDQUFDO1FBRTVDOzs7OztXQUtHO1FBQ00sU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVuQjs7Ozs7V0FLRztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFcEI7Ozs7O1dBS0c7UUFDTSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXpCOzs7OztXQUtHO1FBQ00sbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFaEM7Ozs7O1dBS0c7UUFDTyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXhEOzs7OztXQUtHO1FBQ08sb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSXJELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7a0hBOUVVLHFCQUFxQjtzR0FBckIscUJBQXFCLHVTQ3hCbEMseTNDQTBCTTsyRkRGTyxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsZ0JBQWdCO3NHQVVqQixXQUFXO3NCQUFuQixLQUFLO2dCQVNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBUUcsSUFBSTtzQkFBWixLQUFLO2dCQVFHLEtBQUs7c0JBQWIsS0FBSztnQkFRRyxPQUFPO3NCQUFmLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFRSSxnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBUUcsZUFBZTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBCY1BhZ2VIZWFkZXJCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJpZ2h0QnV0dG9ucyB7XG4gIGljb246IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVJCcmVhZGNydW1icyB7XG4gIHRleHQ6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufVxuXG4vKipcbiAqIEltcG9ydGEgZWwgY29tcG9uZW50ZSBCY0Zvb3RlciBwYXJhIGVsIHBpZSBkZSBww6FnaW5hXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjZm9vdGVyQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtcGFnZS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ2JjLXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG9cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjUGFnZUhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuXG4gIFxuICAvKipcbiAgICogTGlua3MgZGVsIGxhZG8gZGVyZWNob1xuICAgKlxuICAgKiBAdHlwZSB7SVJpZ2h0QnV0dG9uc1tdfVxuICAgKiBAbWVtYmVyb2YgQmNQYWdlSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSByaWdodEJ1dHRvbnM6IElSaWdodEJ1dHRvbnNbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBGZWNoYSBkZSBsYWRvIGRlcmVjaG9cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjUGFnZUhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZGF0ZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBUaXR1bG8gZGUgbGEgcGFnaW5hXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1BhZ2VIZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG5cbiAgLyoqXG4gICAqIENvbG9jYSBlbCBiYWNrZ3JvdW5kIGJsYW5jb1xuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjUGFnZUhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYmdXaGl0ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb2xvY2EgZWwgYmFja2dyb3VuZCBibGFuY29cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY1BhZ2VIZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHNob3dCYWNrQnV0dG9uID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEV2ZW50byBjbGljayBkZSBsb3MgYm90b3MgZGUgbGEgZGVyZWNoYVxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuICAgKiBAbWVtYmVyb2YgQmNQYWdlSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgY2xpY2tCdXR0b25SaWdodCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudG8gY2xpY2sgcGFyYSByZXRyb2NlZGVyXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG4gICAqIEBtZW1iZXJvZiBCY1BhZ2VIZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBjbGlja0JhY2tCdXR0b24gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgYmNQYWdlSGVhZGVyQmVoYXZpb3I7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSkge1xuICAgIHRoaXMuYmNQYWdlSGVhZGVyQmVoYXZpb3IgPSBuZXcgQmNQYWdlSGVhZGVyQmVoYXZpb3IoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmJjUGFnZUhlYWRlckJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuYmNQYWdlSGVhZGVyQmVoYXZpb3Iuc2V0VXAoKTtcbiAgfVxuXG4gIGJ1dHRvbkNsaWNrKGlkQnV0dG9uKSB7XG4gICAgdGhpcy5jbGlja0J1dHRvblJpZ2h0LmVtaXQoaWRCdXR0b24pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYmMtcGFnZS1oZWFkZXJcIiBbbmdDbGFzc109XCJ7J2JjLXBhZ2UtaGVhZGVyLXdoaXRlJzogYmdXaGl0ZX1cIiBbaWRdPVwiY29tcG9uZW50SWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtY29udGFpbmVyIGJjLXBhZ2UtaGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJjLXBhZ2UtaGVhZGVyLWNvbnRlbnQtbGVmdCBiYy1jb2wtbWQtNiBiYy1jb2wtc20tNiBiYy1jb2wteHMtMTJcIj5cbiAgICAgICAgICAgIDxiYy1icmVhZGNydW1iPjwvYmMtYnJlYWRjcnVtYj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYy1wYWdlLWhlYWRlci1jb250ZW50LWxlZnQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8YmMtaWNvbiBjbGFzcz1cImJjLXBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgc2l6ZT1cInNtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgYXJpYS1sYWJlbD1cInBydWViYVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd0JhY2tCdXR0b25cIj5hcnJvdy1sZWZ0PC9iYy1pY29uPlxuICAgICAgICAgICAgICAgIDxoNiAqbmdJZj1cInRpdGxlXCI+e3t0aXRsZX19PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYy1wYWdlLWhlYWRlci1jb250ZW50LXJpZ2h0IGJjLWNvbC1tZC02IGJjLWNvbC1zbS02IGJjLWNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJjLXBhZ2UtaGVhZGVyLWNvbnRlbnQtcmlnaHQtcFwiPlxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiZGF0ZVwiPnt7ZGF0ZX19PC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYy1wYWdlLWhlYWRlci1jb250ZW50LXJpZ2h0LWljb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiByaWdodEJ1dHRvbnM7IGxldCBpID0gaW5kZXg7XCIgW2lkXT1cIml0ZW0uaWRcIiBhcmlhLWxhYmVsPVwiQm90b25cIlxuICAgICAgICAgICAgICAgICAgICBzaXplYnV0dG9uPVwic21hbGxcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJiYy1mYWItYnRuLWljb24gYmMtcGFnZS1oZWFkZXItaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJidXR0b25DbGljayhpdGVtLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZW0gY2xhc3M9XCJiYy1pY29uIGJjLXhzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgYXJpYS1sYWJlbD1cInBydWViYVwiPnt7aXRlbS5pY29ufX08L2VtPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19