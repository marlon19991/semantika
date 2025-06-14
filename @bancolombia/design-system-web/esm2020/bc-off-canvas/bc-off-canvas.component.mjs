import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BcOffCanvasBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
export class BcOffCanvasComponent {
    constructor(ref, helperService) {
        this.ref = ref;
        this.helperService = helperService;
        /**
         * Id del offCanvas.
         *
         * @type {string}
         * @memberof BcOffCanvasComponent
         */
        this.id = this.helperService.getId(this);
        /**
         * Tipo de offCanvas.
         *
         * @type {string}
         * @memberof BcOffCanvasComponent
         */
        this.tipoOffcanvas = 'vertical';
        /**
         * Backdrop Apagado.
         *
         * @type {string}
         * @memberof BcOffCanvasComponent
         */
        this.backdrop = '';
        /**
         * Define la altura del componente horizontal
         *
         * @type {string}
         * @memberof BcOffCanvasComponent
         */
        this.alturaHorizontal = '';
        /**
       * Se ejecuta cuando el offCanvas es cerrado
       *
       * @type {EventEmitter<any>}
       * @memberof BcOffCanvasComponent
       */
        this.closed = new EventEmitter();
        this.bcOffCanvasBehavior = new BcOffCanvasBehavior();
    }
    ngAfterViewInit() {
        this.bcOffCanvasBehavior.setId(this.id);
        this.bcOffCanvasBehavior.setUp();
    }
    /**
     * Abre el offcanvas.
     *
     * @memberof BcOffCanvasComponent
     */
    openOffCanvas() {
        this.bcOffCanvasBehavior.open();
    }
    /**
   * Cierra el offcanvas.
   *
   * @param {any} param
   * @memberof BcOffCanvasComponent
   */
    closeOffCanvas(param) {
        this.bcOffCanvasBehavior.close();
        this.closed.emit(param);
    }
}
BcOffCanvasComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcOffCanvasComponent, deps: [{ token: i0.ElementRef }, { token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcOffCanvasComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcOffCanvasComponent, selector: "bc-off-canvas", inputs: { id: "id", tipoOffcanvas: "tipoOffcanvas", backdrop: "backdrop", alturaHorizontal: "alturaHorizontal" }, outputs: { closed: "closed" }, ngImport: i0, template: "<section class=\"bc-off-canvas\" [id]=\"id\" [attr.type]=\"tipoOffcanvas\" [attr.backdrop]=\"backdrop\">\n    <aside attr.style=\"height:{{alturaHorizontal}}\" >\n        <section>\n            <button aria-label=\"cerrar\">error</button>\n        </section>\n        <div >\n            <ng-content select=\"[offCanvasContent]\"></ng-content>\n        </div>\n    </aside>\n</section>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcOffCanvasComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-off-canvas', template: "<section class=\"bc-off-canvas\" [id]=\"id\" [attr.type]=\"tipoOffcanvas\" [attr.backdrop]=\"backdrop\">\n    <aside attr.style=\"height:{{alturaHorizontal}}\" >\n        <section>\n            <button aria-label=\"cerrar\">error</button>\n        </section>\n        <div >\n            <ng-content select=\"[offCanvasContent]\"></ng-content>\n        </div>\n    </aside>\n</section>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.BcHelperService }]; }, propDecorators: { id: [{
                type: Input
            }], tipoOffcanvas: [{
                type: Input
            }], backdrop: [{
                type: Input
            }], alturaHorizontal: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtb2ZmLWNhbnZhcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtb2ZmLWNhbnZhcy9iYy1vZmYtY2FudmFzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1vZmYtY2FudmFzL2JjLW9mZi1jYW52YXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQU8zRSxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQW9CLEdBQWUsRUFBVSxhQUE4QjtRQUF2RCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBRzNFOzs7OztXQUtHO1FBQ00sT0FBRSxHQUFXLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJEOzs7OztXQUtHO1FBQ00sa0JBQWEsR0FBOEIsVUFBVSxDQUFDO1FBRS9EOzs7OztXQUtHO1FBQ00sYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUVuQzs7Ozs7V0FLRztRQUNNLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUVyQzs7Ozs7U0FLQztRQUNVLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQXhDL0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBeUNELGVBQWU7UUFDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhO1FBQ1gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDQzs7Ozs7S0FLQztJQUNILGNBQWMsQ0FBQyxLQUFXO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOztpSEFuRVUsb0JBQW9CO3FHQUFwQixvQkFBb0Isc01DUmpDLG1ZQVNVOzJGRERHLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSxlQUFlOytIQWNoQixFQUFFO3NCQUFWLEtBQUs7Z0JBUUcsYUFBYTtzQkFBckIsS0FBSztnQkFRRyxRQUFRO3NCQUFoQixLQUFLO2dCQVFHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFRTyxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNPZmZDYW52YXNCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLW9mZi1jYW52YXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtb2ZmLWNhbnZhcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjT2ZmQ2FudmFzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGJjT2ZmQ2FudmFzQmVoYXZpb3I7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGhlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSkge1xuICAgIHRoaXMuYmNPZmZDYW52YXNCZWhhdmlvciA9IG5ldyBCY09mZkNhbnZhc0JlaGF2aW9yKCk7XG4gIH1cbiAgLyoqXG4gICAqIElkIGRlbCBvZmZDYW52YXMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY09mZkNhbnZhc0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuaGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcblxuICAvKipcbiAgICogVGlwbyBkZSBvZmZDYW52YXMuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY09mZkNhbnZhc0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGlwb09mZmNhbnZhczogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XG5cbiAgLyoqXG4gICAqIEJhY2tkcm9wIEFwYWdhZG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY09mZkNhbnZhc0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYmFja2Ryb3A6ICdvZmYnIHwgJycgPSAnJztcblxuICAvKipcbiAgICogRGVmaW5lIGxhIGFsdHVyYSBkZWwgY29tcG9uZW50ZSBob3Jpem9udGFsXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY09mZkNhbnZhc0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYWx0dXJhSG9yaXpvbnRhbDogc3RyaW5nID0gJyc7XG5cbiAgICAvKipcbiAgICogU2UgZWplY3V0YSBjdWFuZG8gZWwgb2ZmQ2FudmFzIGVzIGNlcnJhZG9cbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAgKiBAbWVtYmVyb2YgQmNPZmZDYW52YXNDb21wb25lbnRcbiAgICovXG4gICAgIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYmNPZmZDYW52YXNCZWhhdmlvci5zZXRJZCh0aGlzLmlkKTtcbiAgICB0aGlzLmJjT2ZmQ2FudmFzQmVoYXZpb3Iuc2V0VXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBYnJlIGVsIG9mZmNhbnZhcy5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjT2ZmQ2FudmFzQ29tcG9uZW50XG4gICAqL1xuICBvcGVuT2ZmQ2FudmFzKCkge1xuICAgIHRoaXMuYmNPZmZDYW52YXNCZWhhdmlvci5vcGVuKCk7XG4gIH1cbiAgICAvKipcbiAgICogQ2llcnJhIGVsIG9mZmNhbnZhcy5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHBhcmFtXG4gICAqIEBtZW1iZXJvZiBCY09mZkNhbnZhc0NvbXBvbmVudFxuICAgKi9cbiAgY2xvc2VPZmZDYW52YXMocGFyYW0gOiBhbnkpIHtcbiAgICB0aGlzLmJjT2ZmQ2FudmFzQmVoYXZpb3IuY2xvc2UoKTtcbiAgICB0aGlzLmNsb3NlZC5lbWl0KHBhcmFtKTtcbiAgfVxufSIsIjxzZWN0aW9uIGNsYXNzPVwiYmMtb2ZmLWNhbnZhc1wiIFtpZF09XCJpZFwiIFthdHRyLnR5cGVdPVwidGlwb09mZmNhbnZhc1wiIFthdHRyLmJhY2tkcm9wXT1cImJhY2tkcm9wXCI+XG4gICAgPGFzaWRlIGF0dHIuc3R5bGU9XCJoZWlnaHQ6e3thbHR1cmFIb3Jpem9udGFsfX1cIiA+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiY2VycmFyXCI+ZXJyb3I8L2J1dHRvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvZmZDYW52YXNDb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbjwvc2VjdGlvbj4iXX0=