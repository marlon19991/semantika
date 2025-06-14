import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BcSwitchBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * componente Switch
 *
 * @export
 * @class BcSwitchWebComponent
 */
export class BcSwitchComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcSwitchWebComponent
         */
        this.id = this.bcHelperService.getId(this);
        /**
         * Indica si el elemento esta deshabilitado.
         *
         * @type {boolean}
         * @memberof BcSwitchWebComponent
         */
        this.disabled = false;
        /**
         * Indica si el elemento es requerido.
         *
         * @type {boolean}
         * @memberof BcSwitchWebComponent
         */
        this.required = false;
        /**
         * Indica si el elemento lleva el label a la izquierda.
         *
         * @type {boolean}
         * @memberof BcSwitchWebComponent
         */
        this.leftLabel = false;
        /**
         * Valor del elemento seleccionado.
         *
         * @type {EventEmitter<boolean>}
         * @memberof BcSwitchWebComponent
         */
        this.changeState = new EventEmitter();
        this.outline = false;
        this.componentId = this.bcHelperService.getId(this);
        this.isChecked = false;
    }
    ngOnChanges(changes) {
        const isChecked = changes.isChecked?.currentValue;
        if (isChecked !== undefined) {
            setTimeout(() => {
                this.bcSwitchBehavior.changeValue(this.isChecked);
                this.changeState.emit(this.isChecked);
            });
        }
    }
    ngAfterViewInit() {
        this.bcSwitchBehavior = new BcSwitchBehavior();
        this.bcSwitchBehavior.setId(this.componentId);
        const element = document.getElementById(this.componentId).parentElement;
        this.bcSwitchBehavior.setElement(element);
        this.bcSwitchBehavior.setUp();
    }
    /**
     * Cambio de estado del elemento.
     *
     * @memberof BcSwitchWebComponent
     */
    toggle() {
        this.isChecked = !this.isChecked;
        this.changeState.emit(this.isChecked);
    }
}
BcSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSwitchComponent, selector: "bc-switch", inputs: { isChecked: "isChecked", id: "id", disabled: "disabled", required: "required", leftLabel: "leftLabel" }, outputs: { changeState: "changeState" }, usesOnChanges: true, ngImport: i0, template: "<label class=\"bc-switch-container\" for=\"{{ componentId }}\"\n  [ngClass]=\"{ 'outline-element': outline, 'bc-switch-label-left': leftLabel }\" tabindex=\"{{ disabled ? -1 : 0 }}\"\n  attr.aria-disabled=\"{{ disabled ? 'true' : 'false' }}\">\n  <input type=\"checkbox\" (click)=\"toggle()\" [id]=\"componentId\" [disabled]=\"disabled\" [checked]=\"isChecked\"\n    [required]=\"required\" />\n  <div class=\"bc-switch\">\n    <div class=\"bc-switch-round\"></div>\n  </div>\n  <span><ng-content></ng-content></span>\n</label>", directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-switch', template: "<label class=\"bc-switch-container\" for=\"{{ componentId }}\"\n  [ngClass]=\"{ 'outline-element': outline, 'bc-switch-label-left': leftLabel }\" tabindex=\"{{ disabled ? -1 : 0 }}\"\n  attr.aria-disabled=\"{{ disabled ? 'true' : 'false' }}\">\n  <input type=\"checkbox\" (click)=\"toggle()\" [id]=\"componentId\" [disabled]=\"disabled\" [checked]=\"isChecked\"\n    [required]=\"required\" />\n  <div class=\"bc-switch\">\n    <div class=\"bc-switch-round\"></div>\n  </div>\n  <span><ng-content></ng-content></span>\n</label>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { isChecked: [{
                type: Input
            }], id: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], leftLabel: [{
                type: Input
            }], changeState: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zd2l0Y2gvYmMtc3dpdGNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zd2l0Y2gvYmMtc3dpdGNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRWpHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRXhFOzs7OztHQUtHO0FBS0gsTUFBTSxPQUFPLGlCQUFpQjtJQWtENUIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBekNwRDs7Ozs7V0FLRztRQUNNLE9BQUUsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RDs7Ozs7V0FLRztRQUNNLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUI7Ozs7O1dBS0c7UUFDTSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFCOzs7OztXQUtHO1FBQ00sY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUzQjs7Ozs7V0FLRztRQUNPLGdCQUFXLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFM0UsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixnQkFBVyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7UUFDbEQsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OEdBaEZVLGlCQUFpQjtrR0FBakIsaUJBQWlCLGlPQ2Q5QixpaEJBU1E7MkZES0ssaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLFdBQVc7c0dBVVosU0FBUztzQkFBakIsS0FBSztnQkFRRyxFQUFFO3NCQUFWLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLO2dCQVFHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBUUksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEJjU3dpdGNoQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuXG4vKipcbiAqIGNvbXBvbmVudGUgU3dpdGNoXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjU3dpdGNoV2ViQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnYmMtc3dpdGNoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY1N3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZWwgZWxlbWVudG8gZXN0YSBzZWxlY2Npb25hZG8uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNTd2l0Y2hXZWJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlzQ2hlY2tlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWQgZGVsIGVsZW1lbnRvLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTd2l0Y2hXZWJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcbiAgLyoqXG4gICAqIEluZGljYSBzaSBlbCBlbGVtZW50byBlc3RhIGRlc2hhYmlsaXRhZG8uXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNTd2l0Y2hXZWJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZWwgZWxlbWVudG8gZXMgcmVxdWVyaWRvLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjU3dpdGNoV2ViQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZWwgZWxlbWVudG8gbGxldmEgZWwgbGFiZWwgYSBsYSBpenF1aWVyZGEuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNTd2l0Y2hXZWJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGxlZnRMYWJlbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBWYWxvciBkZWwgZWxlbWVudG8gc2VsZWNjaW9uYWRvLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGJvb2xlYW4+fVxuICAgKiBAbWVtYmVyb2YgQmNTd2l0Y2hXZWJDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VTdGF0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIG91dGxpbmUgPSBmYWxzZTtcbiAgYmNTd2l0Y2hCZWhhdmlvcjogQmNTd2l0Y2hCZWhhdmlvcjtcbiAgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBjaGFuZ2VzLmlzQ2hlY2tlZD8uY3VycmVudFZhbHVlO1xuICAgIGlmIChpc0NoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYmNTd2l0Y2hCZWhhdmlvci5jaGFuZ2VWYWx1ZSh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5iY1N3aXRjaEJlaGF2aW9yID0gbmV3IEJjU3dpdGNoQmVoYXZpb3IoKTtcbiAgICB0aGlzLmJjU3dpdGNoQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29tcG9uZW50SWQpLnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5iY1N3aXRjaEJlaGF2aW9yLnNldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5iY1N3aXRjaEJlaGF2aW9yLnNldFVwKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FtYmlvIGRlIGVzdGFkbyBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1N3aXRjaFdlYkNvbXBvbmVudFxuICAgKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgIHRoaXMuY2hhbmdlU3RhdGUuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gIH1cbn1cbiIsIjxsYWJlbCBjbGFzcz1cImJjLXN3aXRjaC1jb250YWluZXJcIiBmb3I9XCJ7eyBjb21wb25lbnRJZCB9fVwiXG4gIFtuZ0NsYXNzXT1cInsgJ291dGxpbmUtZWxlbWVudCc6IG91dGxpbmUsICdiYy1zd2l0Y2gtbGFiZWwtbGVmdCc6IGxlZnRMYWJlbCB9XCIgdGFiaW5kZXg9XCJ7eyBkaXNhYmxlZCA/IC0xIDogMCB9fVwiXG4gIGF0dHIuYXJpYS1kaXNhYmxlZD1cInt7IGRpc2FibGVkID8gJ3RydWUnIDogJ2ZhbHNlJyB9fVwiPlxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCIgW2lkXT1cImNvbXBvbmVudElkXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2NoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiAvPlxuICA8ZGl2IGNsYXNzPVwiYmMtc3dpdGNoXCI+XG4gICAgPGRpdiBjbGFzcz1cImJjLXN3aXRjaC1yb3VuZFwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbjwvbGFiZWw+Il19