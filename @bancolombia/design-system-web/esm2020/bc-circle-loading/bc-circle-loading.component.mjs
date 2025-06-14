import { Component, Input } from '@angular/core';
import { BcCircleLoadingBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Es un elemento visual que informa al usuario que se
 * está realizando un proceso dentro del sistema.
 *
 * @export
 * @class BcCircleLoadingComponent
 * @implements {AfterViewInit}
 */
export class BcCircleLoadingComponent {
    constructor(helper) {
        this.helper = helper;
        /**
         * Texto principal del circle loading.
         *
         * @type {string}
         * @memberof BcCircleLoadingComponent
         */
        this.text = '';
        /**
         * Este atributo está siendo deprecado.
         * Tamaño del componente Loader.
         *
         * @type {string}
         * @memberof BcLoaderComponent
         * @deprecated el componente cuenta con un tamaño fijo de loader (xl)
         */
        this.sizeLoader = 'xl';
        /**
         * Id del componente.
         *
         * @type {string}
         * @memberof BcCircleLoadingComponent
         */
        this.componentId = this.helper.getId(this);
        /**
         * Label de accesibilidad para circle loading.
         *
         * @type {string}
         * @memberof BcCircleLoadingComponent
         */
        this.accessibilityLabel = '';
    }
    /**
     * Muestra el circle loading.
     *
     * @memberof BcCircleLoadingComponent
     */
    showCircleLoading() {
        this._bcCircleLoaderBehavior.showCircleLoading();
    }
    /**
     * Oculta el circle loading.
     *
     * @memberof BcCircleLoadingComponent
     */
    hideCircleLoading() {
        this._bcCircleLoaderBehavior.hideCircleLoading();
    }
    ngAfterViewInit() {
        this._bcCircleLoaderBehavior = new BcCircleLoadingBehavior();
        this._bcCircleLoaderBehavior.setId(this.componentId);
        this._bcCircleLoaderBehavior.setUp();
    }
}
BcCircleLoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCircleLoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCircleLoadingComponent, selector: "bc-circle-loading", inputs: { text: "text", sizeLoader: "sizeLoader", componentId: "componentId", accessibilityLabel: "accessibilityLabel", speedLoader: "speedLoader" }, ngImport: i0, template: "<article\n  class=\"bc-circle-loading\"\n  [id]=\"componentId\"\n  [attr.data-text]=\"text\"\n  [attr.data-accessibility-label]=\"accessibilityLabel\"\n  [attr.data-speed-loader]=\"speedLoader\"\n></article>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCircleLoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-circle-loading', styles: [], template: "<article\n  class=\"bc-circle-loading\"\n  [id]=\"componentId\"\n  [attr.data-text]=\"text\"\n  [attr.data-accessibility-label]=\"accessibilityLabel\"\n  [attr.data-speed-loader]=\"speedLoader\"\n></article>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { text: [{
                type: Input
            }], sizeLoader: [{
                type: Input
            }], componentId: [{
                type: Input
            }], accessibilityLabel: [{
                type: Input
            }], speedLoader: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2lyY2xlLWxvYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNpcmNsZS1sb2FkaW5nL2JjLWNpcmNsZS1sb2FkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jaXJjbGUtbG9hZGluZy9iYy1jaXJjbGUtbG9hZGluZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQUUvRTs7Ozs7OztHQU9HO0FBTUgsTUFBTSxPQUFPLHdCQUF3QjtJQXNFbkMsWUFBb0IsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUE3RDNDOzs7OztXQUtHO1FBQ00sU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVuQjs7Ozs7OztXQU9HO1FBQ00sZUFBVSxHQUFHLElBQUksQ0FBQztRQUUzQjs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkQ7Ozs7O1dBS0c7UUFDTSx1QkFBa0IsR0FBRyxFQUFFLENBQUM7SUE2QmEsQ0FBQztJQWxCL0M7Ozs7T0FJRztJQUNILGlCQUFpQjtRQUNmLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUlELGVBQWU7UUFDYixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDOztxSEE1RVUsd0JBQXdCO3lHQUF4Qix3QkFBd0IsK01DakJyQyxpTkFNVzsyRkRXRSx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0UsbUJBQW1CLFVBRXJCLEVBQUU7c0dBaUJELElBQUk7c0JBQVosS0FBSztnQkFVRyxVQUFVO3NCQUFsQixLQUFLO2dCQVFHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsa0JBQWtCO3NCQUExQixLQUFLO2dCQVNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQgeyBCY0NpcmNsZUxvYWRpbmdCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5cbi8qKlxuICogRXMgdW4gZWxlbWVudG8gdmlzdWFsIHF1ZSBpbmZvcm1hIGFsIHVzdWFyaW8gcXVlIHNlXG4gKiBlc3TDoSByZWFsaXphbmRvIHVuIHByb2Nlc28gZGVudHJvIGRlbCBzaXN0ZW1hLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0NpcmNsZUxvYWRpbmdDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1jaXJjbGUtbG9hZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnYmMtY2lyY2xlLWxvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBCY0NpcmNsZUxvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIENvbXBvcnRhbWllbnRvXG4gICAqXG4gICAqIEB0eXBlIHtCY0NpcmNsZUxvYWRpbmdCZWhhdmlvcn1cbiAgICogQG1lbWJlcm9mIEJjQ2lyY2xlTG9hZGluZ0NvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBfYmNDaXJjbGVMb2FkZXJCZWhhdmlvcjogQmNDaXJjbGVMb2FkaW5nQmVoYXZpb3I7XG5cbiAgLyoqXG4gICAqIFRleHRvIHByaW5jaXBhbCBkZWwgY2lyY2xlIGxvYWRpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NpcmNsZUxvYWRpbmdDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRleHQgPSAnJztcblxuICAvKipcbiAgICogRXN0ZSBhdHJpYnV0byBlc3TDoSBzaWVuZG8gZGVwcmVjYWRvLlxuICAgKiBUYW1hw7FvIGRlbCBjb21wb25lbnRlIExvYWRlci5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjTG9hZGVyQ29tcG9uZW50XG4gICAqIEBkZXByZWNhdGVkIGVsIGNvbXBvbmVudGUgY3VlbnRhIGNvbiB1biB0YW1hw7FvIGZpam8gZGUgbG9hZGVyICh4bClcbiAgICovXG4gIEBJbnB1dCgpIHNpemVMb2FkZXIgPSAneGwnO1xuXG4gIC8qKlxuICAgKiBJZCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2lyY2xlTG9hZGluZ0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuaGVscGVyLmdldElkKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBkZSBhY2Nlc2liaWxpZGFkIHBhcmEgY2lyY2xlIGxvYWRpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0NpcmNsZUxvYWRpbmdDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGFjY2Vzc2liaWxpdHlMYWJlbCA9ICcnO1xuXG4gIC8qKlxuICAgKiBWZWxvY2lkYWQgZGUgZ2lybyBkZWwgbG9hZGVyIGVuIHNlZ3VuZG9zXG4gICAqIFZhbG9yIHBvciBkZWZhdWx0IGxvIHRvbWEgZGVsIGNvbXBvbmVudGUgQmNMb2FkZXJcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2lyY2xlTG9hZGluZ0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc3BlZWRMb2FkZXI7XG5cbiAgLyoqXG4gICAqIE11ZXN0cmEgZWwgY2lyY2xlIGxvYWRpbmcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0NpcmNsZUxvYWRpbmdDb21wb25lbnRcbiAgICovXG4gIHNob3dDaXJjbGVMb2FkaW5nKCkge1xuICAgIHRoaXMuX2JjQ2lyY2xlTG9hZGVyQmVoYXZpb3Iuc2hvd0NpcmNsZUxvYWRpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPY3VsdGEgZWwgY2lyY2xlIGxvYWRpbmcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0NpcmNsZUxvYWRpbmdDb21wb25lbnRcbiAgICovXG4gIGhpZGVDaXJjbGVMb2FkaW5nKCkge1xuICAgIHRoaXMuX2JjQ2lyY2xlTG9hZGVyQmVoYXZpb3IuaGlkZUNpcmNsZUxvYWRpbmcoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVscGVyOiBCY0hlbHBlclNlcnZpY2UpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2JjQ2lyY2xlTG9hZGVyQmVoYXZpb3IgPSBuZXcgQmNDaXJjbGVMb2FkaW5nQmVoYXZpb3IoKTtcbiAgICB0aGlzLl9iY0NpcmNsZUxvYWRlckJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuX2JjQ2lyY2xlTG9hZGVyQmVoYXZpb3Iuc2V0VXAoKTtcbiAgfVxufVxuIiwiPGFydGljbGVcbiAgY2xhc3M9XCJiYy1jaXJjbGUtbG9hZGluZ1wiXG4gIFtpZF09XCJjb21wb25lbnRJZFwiXG4gIFthdHRyLmRhdGEtdGV4dF09XCJ0ZXh0XCJcbiAgW2F0dHIuZGF0YS1hY2Nlc3NpYmlsaXR5LWxhYmVsXT1cImFjY2Vzc2liaWxpdHlMYWJlbFwiXG4gIFthdHRyLmRhdGEtc3BlZWQtbG9hZGVyXT1cInNwZWVkTG9hZGVyXCJcbj48L2FydGljbGU+Il19