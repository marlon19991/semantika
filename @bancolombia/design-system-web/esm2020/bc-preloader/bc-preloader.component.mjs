import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const PRELOADER_CSS_CLASSES = {
    fullWidth: 'bc-preloader-full-width',
    fullHeight: 'bc-preloader-full-height',
    borderRadius2: 'bc-preloader-border-radius-2',
    borderRadius3: 'bc-preloader-border-radius-3',
};
const PRELOADER_CSS_CUSTOM_PROPERTIES = {
    width: '--bc-preloader-width',
    height: '--bc-preloader-height',
};
/**
 * Componente preloader - sirve para precargar con un estilo tipo lazy load.
 *
 * @export
 * @class BcPreloaderComponent
 * @implements {OnInit}
 */
export class BcPreloaderComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Ancho en píxeles(px) del preloader o 'full'.
         *
         * @memberof BcPreloaderComponent
         */
        this.width = '';
        /**
         * Alto en píxeles(px) del preloader o 'full'.
         *
         * @memberof BcPreloaderComponent
         */
        this.height = '';
    }
    ngAfterViewInit() {
        this.preloaderElement =
            this.elementRef.nativeElement.querySelector('.bc-preloader');
        this.updateStyle();
    }
    updateStyle() {
        this.configureWidth();
        this.configureHeight();
        this.configureBorderRadius();
    }
    configureWidth() {
        if (this.width === 'full') {
            this.preloaderElement.classList.add(PRELOADER_CSS_CLASSES.fullWidth);
        }
        else {
            this.setWidthStyleCustomProperty();
        }
    }
    setWidthStyleCustomProperty() {
        const width = this.checkIsNumberWithoutCssUnits(this.width)
            ? `${Number(this.width)}px`
            : this.width?.trim();
        this.preloaderElement.style.setProperty(PRELOADER_CSS_CUSTOM_PROPERTIES.width, width);
    }
    configureHeight() {
        if (this.height === 'full') {
            this.preloaderElement.classList.add(PRELOADER_CSS_CLASSES.fullHeight);
        }
        else {
            this.setHeightStyleCustomProperty();
        }
    }
    setHeightStyleCustomProperty() {
        const height = this.checkIsNumberWithoutCssUnits(this.height)
            ? `${Number(this.height)}px`
            : this.height?.trim();
        this.preloaderElement.style.setProperty(PRELOADER_CSS_CUSTOM_PROPERTIES.height, height);
    }
    checkIsNumberWithoutCssUnits(value) {
        const isNotEmpty = value?.trim().length > 0;
        const isNumber = !isNaN(Number(value));
        return isNotEmpty && isNumber;
    }
    configureBorderRadius() {
        if (this.borderRadius === '2') {
            this.preloaderElement.classList.add(PRELOADER_CSS_CLASSES.borderRadius2);
        }
        if (this.borderRadius === '3') {
            this.preloaderElement.classList.add(PRELOADER_CSS_CLASSES.borderRadius3);
        }
    }
}
BcPreloaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcPreloaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPreloaderComponent, selector: "bc-preloader", inputs: { type: "type", width: "width", height: "height", borderRadius: "borderRadius" }, ngImport: i0, template: "<ng-container [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'circle'\" class=\"bc-preloader bc-preloader-circle\"></div>\n    <div *ngSwitchCase=\"'square'\" class=\"bc-preloader bc-preloader-square\"></div>\n    <div *ngSwitchCase=\"'line'\" class=\"bc-preloader bc-preloader-line\"></div>\n    <div *ngSwitchCase=\"'line-vertical'\" class=\"bc-preloader bc-preloader-line-vertical\"></div>\n    <div *ngSwitchDefault class=\"bc-preloader bc-preloader-circle\"></div>\n</ng-container>", directives: [{ type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPreloaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-preloader', styles: [], template: "<ng-container [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'circle'\" class=\"bc-preloader bc-preloader-circle\"></div>\n    <div *ngSwitchCase=\"'square'\" class=\"bc-preloader bc-preloader-square\"></div>\n    <div *ngSwitchCase=\"'line'\" class=\"bc-preloader bc-preloader-line\"></div>\n    <div *ngSwitchCase=\"'line-vertical'\" class=\"bc-preloader bc-preloader-line-vertical\"></div>\n    <div *ngSwitchDefault class=\"bc-preloader bc-preloader-circle\"></div>\n</ng-container>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { type: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcHJlbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wcmVsb2FkZXIvYmMtcHJlbG9hZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wcmVsb2FkZXIvYmMtcHJlbG9hZGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTZCLE1BQU0sZUFBZSxDQUFDOzs7QUFFNUUsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixTQUFTLEVBQUUseUJBQXlCO0lBQ3BDLFVBQVUsRUFBRSwwQkFBMEI7SUFDdEMsYUFBYSxFQUFFLDhCQUE4QjtJQUM3QyxhQUFhLEVBQUUsOEJBQThCO0NBQzlDLENBQUM7QUFFRixNQUFNLCtCQUErQixHQUFHO0lBQ3RDLEtBQUssRUFBRSxzQkFBc0I7SUFDN0IsTUFBTSxFQUFFLHVCQUF1QjtDQUNoQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQWdDL0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXJCMUM7Ozs7V0FJRztRQUNNLFVBQUssR0FBWSxFQUFFLENBQUM7UUFFN0I7Ozs7V0FJRztRQUNNLFdBQU0sR0FBWSxFQUFFLENBQUM7SUFTZSxDQUFDO0lBRTlDLGVBQWU7UUFDYixJQUFJLENBQUMsZ0JBQWdCO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RFO2FBQU07WUFDTCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztTQUNwQztJQUNILENBQUM7SUFDTywyQkFBMkI7UUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekQsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDckMsK0JBQStCLENBQUMsS0FBSyxFQUNyQyxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkU7YUFBTTtZQUNMLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUNPLDRCQUE0QjtRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzRCxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUNyQywrQkFBK0IsQ0FBQyxNQUFNLEVBQ3RDLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUVPLDRCQUE0QixDQUFDLEtBQWE7UUFDaEQsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxVQUFVLElBQUksUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOztpSEE3RlUsb0JBQW9CO3FHQUFwQixvQkFBb0IsOElDMUJqQyx3ZUFNZTsyRkRvQkYsb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLGNBQWMsVUFFaEIsRUFBRTtpR0FXRCxJQUFJO3NCQUFaLEtBQUs7Z0JBT0csS0FBSztzQkFBYixLQUFLO2dCQU9HLE1BQU07c0JBQWQsS0FBSztnQkFPRyxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBQUkVMT0FERVJfQ1NTX0NMQVNTRVMgPSB7XG4gIGZ1bGxXaWR0aDogJ2JjLXByZWxvYWRlci1mdWxsLXdpZHRoJyxcbiAgZnVsbEhlaWdodDogJ2JjLXByZWxvYWRlci1mdWxsLWhlaWdodCcsXG4gIGJvcmRlclJhZGl1czI6ICdiYy1wcmVsb2FkZXItYm9yZGVyLXJhZGl1cy0yJyxcbiAgYm9yZGVyUmFkaXVzMzogJ2JjLXByZWxvYWRlci1ib3JkZXItcmFkaXVzLTMnLFxufTtcblxuY29uc3QgUFJFTE9BREVSX0NTU19DVVNUT01fUFJPUEVSVElFUyA9IHtcbiAgd2lkdGg6ICctLWJjLXByZWxvYWRlci13aWR0aCcsXG4gIGhlaWdodDogJy0tYmMtcHJlbG9hZGVyLWhlaWdodCcsXG59O1xuXG4vKipcbiAqIENvbXBvbmVudGUgcHJlbG9hZGVyIC0gc2lydmUgcGFyYSBwcmVjYXJnYXIgY29uIHVuIGVzdGlsbyB0aXBvIGxhenkgbG9hZC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNQcmVsb2FkZXJDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtPbkluaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXByZWxvYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnYmMtcHJlbG9hZGVyLmh0bWwnLFxuICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBCY1ByZWxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcmVsb2FkZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogVGlwbyBkZSBwcmVsb2FkZXIuXG4gICAqXG4gICAqIEB0eXBlIHsoJ2NpcmNsZScgfCAnc3F1YXJlJyB8ICdsaW5lJyB8ICdsaW5lLXZlcnRpY2FsJyl9XG4gICAqIEBtZW1iZXJvZiBCY1ByZWxvYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogJ2NpcmNsZScgfCAnc3F1YXJlJyB8ICdsaW5lJyB8ICdsaW5lLXZlcnRpY2FsJztcblxuICAvKipcbiAgICogQW5jaG8gZW4gcMOteGVsZXMocHgpIGRlbCBwcmVsb2FkZXIgbyAnZnVsbCcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1ByZWxvYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgd2lkdGg/OiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQWx0byBlbiBww614ZWxlcyhweCkgZGVsIHByZWxvYWRlciBvICdmdWxsJy5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjUHJlbG9hZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBoZWlnaHQ/OiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQm9yZGUgZGVsIGNvbXBvbmVudGUgKDIgbyAzKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjUHJlbG9hZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBib3JkZXJSYWRpdXM/OiAnMicgfCAnMyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnByZWxvYWRlckVsZW1lbnQgPVxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJjLXByZWxvYWRlcicpO1xuICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3R5bGUoKSB7XG4gICAgdGhpcy5jb25maWd1cmVXaWR0aCgpO1xuICAgIHRoaXMuY29uZmlndXJlSGVpZ2h0KCk7XG4gICAgdGhpcy5jb25maWd1cmVCb3JkZXJSYWRpdXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlV2lkdGgoKSB7XG4gICAgaWYgKHRoaXMud2lkdGggPT09ICdmdWxsJykge1xuICAgICAgdGhpcy5wcmVsb2FkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoUFJFTE9BREVSX0NTU19DTEFTU0VTLmZ1bGxXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0V2lkdGhTdHlsZUN1c3RvbVByb3BlcnR5KCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgc2V0V2lkdGhTdHlsZUN1c3RvbVByb3BlcnR5KCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jaGVja0lzTnVtYmVyV2l0aG91dENzc1VuaXRzKHRoaXMud2lkdGgpXG4gICAgICA/IGAke051bWJlcih0aGlzLndpZHRoKX1weGBcbiAgICAgIDogdGhpcy53aWR0aD8udHJpbSgpO1xuICAgIHRoaXMucHJlbG9hZGVyRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFBSRUxPQURFUl9DU1NfQ1VTVE9NX1BST1BFUlRJRVMud2lkdGgsXG4gICAgICB3aWR0aFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5oZWlnaHQgPT09ICdmdWxsJykge1xuICAgICAgdGhpcy5wcmVsb2FkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoUFJFTE9BREVSX0NTU19DTEFTU0VTLmZ1bGxIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEhlaWdodFN0eWxlQ3VzdG9tUHJvcGVydHkoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBzZXRIZWlnaHRTdHlsZUN1c3RvbVByb3BlcnR5KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2hlY2tJc051bWJlcldpdGhvdXRDc3NVbml0cyh0aGlzLmhlaWdodClcbiAgICAgID8gYCR7TnVtYmVyKHRoaXMuaGVpZ2h0KX1weGBcbiAgICAgIDogdGhpcy5oZWlnaHQ/LnRyaW0oKTtcbiAgICB0aGlzLnByZWxvYWRlckVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBQUkVMT0FERVJfQ1NTX0NVU1RPTV9QUk9QRVJUSUVTLmhlaWdodCxcbiAgICAgIGhlaWdodFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrSXNOdW1iZXJXaXRob3V0Q3NzVW5pdHModmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGlzTm90RW1wdHkgPSB2YWx1ZT8udHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgY29uc3QgaXNOdW1iZXIgPSAhaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG4gICAgcmV0dXJuIGlzTm90RW1wdHkgJiYgaXNOdW1iZXI7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUJvcmRlclJhZGl1cygpIHtcbiAgICBpZiAodGhpcy5ib3JkZXJSYWRpdXMgPT09ICcyJykge1xuICAgICAgdGhpcy5wcmVsb2FkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoUFJFTE9BREVSX0NTU19DTEFTU0VTLmJvcmRlclJhZGl1czIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5ib3JkZXJSYWRpdXMgPT09ICczJykge1xuICAgICAgdGhpcy5wcmVsb2FkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoUFJFTE9BREVSX0NTU19DTEFTU0VTLmJvcmRlclJhZGl1czMpO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHlwZVwiPlxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaXJjbGUnXCIgY2xhc3M9XCJiYy1wcmVsb2FkZXIgYmMtcHJlbG9hZGVyLWNpcmNsZVwiPjwvZGl2PlxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidzcXVhcmUnXCIgY2xhc3M9XCJiYy1wcmVsb2FkZXIgYmMtcHJlbG9hZGVyLXNxdWFyZVwiPjwvZGl2PlxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidsaW5lJ1wiIGNsYXNzPVwiYmMtcHJlbG9hZGVyIGJjLXByZWxvYWRlci1saW5lXCI+PC9kaXY+XG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2xpbmUtdmVydGljYWwnXCIgY2xhc3M9XCJiYy1wcmVsb2FkZXIgYmMtcHJlbG9hZGVyLWxpbmUtdmVydGljYWxcIj48L2Rpdj5cbiAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJiYy1wcmVsb2FkZXIgYmMtcHJlbG9hZGVyLWNpcmNsZVwiPjwvZGl2PlxuPC9uZy1jb250YWluZXI+Il19