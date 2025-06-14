import { Component, Input } from '@angular/core';
import { BcCoachMarkBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-button";
/**
 * Componente CoachMark
 * import { BcCoachMarkComponent } from '@bancolombia/design-system-web/bc-coach-mark';
 * @export
 * @class BcCoachMarkComponent
 */
export class BcCoachMarkComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcCoachMarkComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Hace referencia al id que tenga el elemento html del paso a resaltar
         *
         * @memberof BcCoachMarkStepComponent
         */
        this.dataController = '';
        /**
          * Hace referencia al id que tenga el contenido del paso a resaltar
          *
          * @memberof BcCoachMarkStepComponent
          */
        this.id = '';
    }
    ngAfterViewInit() {
        this.bcCoachMarkBehavior = new BcCoachMarkBehavior();
        this.bcCoachMarkBehavior.setId(this.componentId);
        this.bcCoachMarkBehavior.setUp();
    }
    /**
     * Este Metodo se encarga de inicializar el coachmark
     * @type {string}
     * @memberof BcCoachMarkComponent
     */
    initTourStep() {
        this.bcCoachMarkBehavior.initTour();
    }
}
BcCoachMarkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcCoachMarkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcCoachMarkComponent, selector: "bc-coach-mark", inputs: { componentId: "componentId", dataCoachmark: "dataCoachmark", dataController: "dataController", id: "id" }, ngImport: i0, template: "<section class=\"bc-coach-mark\" [id]=\"componentId\">\n    <section class=\"bc-coach-mark-container\">\n        <section class=\"bc-coach-mark-close\">\n            <button>error</button>\n        </section>\n        \n        <section class=\"bc-coach-mark-body\">\n                <ng-content select=\"[coachmarkContent]\" [attr.dataCoachmark]=\"dataCoachmark\" \n                [attr.dataController]=\"dataController\" [attr.id]=\"id\"></ng-content>\n        </section>\n        <section class=\"bc-coach-mark-quantity-items\"></section>\n        <section class=\"bc-coach-mark-footer\">\n            <button  bc-button\n                sizeButton=\"small\"\n                typeButton=\"primary\" class=\"bc-coach-mark-next\">\n                Siguiente\n            </button>\n            <button  bc-button\n                sizeButton=\"small\"\n                typeButton=\"secondary\" class=\"bc-coach-mark-prev\">\n                Volver\n            </button>\n        </section>\n    </section>\n</section>", directives: [{ type: i2.BcButtonDirective, selector: "[bc-button]", inputs: ["typeButton", "sizeButton", "width", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCoachMarkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-coach-mark', styles: [], template: "<section class=\"bc-coach-mark\" [id]=\"componentId\">\n    <section class=\"bc-coach-mark-container\">\n        <section class=\"bc-coach-mark-close\">\n            <button>error</button>\n        </section>\n        \n        <section class=\"bc-coach-mark-body\">\n                <ng-content select=\"[coachmarkContent]\" [attr.dataCoachmark]=\"dataCoachmark\" \n                [attr.dataController]=\"dataController\" [attr.id]=\"id\"></ng-content>\n        </section>\n        <section class=\"bc-coach-mark-quantity-items\"></section>\n        <section class=\"bc-coach-mark-footer\">\n            <button  bc-button\n                sizeButton=\"small\"\n                typeButton=\"primary\" class=\"bc-coach-mark-next\">\n                Siguiente\n            </button>\n            <button  bc-button\n                sizeButton=\"small\"\n                typeButton=\"secondary\" class=\"bc-coach-mark-prev\">\n                Volver\n            </button>\n        </section>\n    </section>\n</section>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], dataCoachmark: [{
                type: Input
            }], dataController: [{
                type: Input
            }], id: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY29hY2gtbWFyay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtY29hY2gtbWFyay9iYy1jb2FjaC1tYXJrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1jb2FjaC1tYXJrL2JjLWNvYWNoLW1hcmsuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBTSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBSS9FOzs7OztHQUtHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQUc3QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFTcEQ7Ozs7O1dBS0c7UUFDTSxnQkFBVyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBVS9EOzs7O1dBSUc7UUFDTSxtQkFBYyxHQUFFLEVBQUUsQ0FBQztRQUU3Qjs7OztZQUlJO1FBQ1MsT0FBRSxHQUFHLEVBQUUsQ0FBQztJQXBDckIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBaUNEOzs7O09BSUc7SUFFSCxZQUFZO1FBQ1IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7O2lIQW5EUSxvQkFBb0I7cUdBQXBCLG9CQUFvQix5S0NoQmpDLDYvQkF3QlU7MkZEUkcsb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNJLGVBQWUsVUFFakIsRUFBRTtzR0FvQkQsV0FBVztzQkFBbkIsS0FBSztnQkFPSSxhQUFhO3NCQUFyQixLQUFLO2dCQVFHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBT00sRUFBRTtzQkFBVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNDb2FjaE1hcmtCZWhhdmlvciAgICAgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG5cbi8qKlxuICogQ29tcG9uZW50ZSBDb2FjaE1hcmtcbiAqIGltcG9ydCB7IEJjQ29hY2hNYXJrQ29tcG9uZW50IH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWNvYWNoLW1hcmsnO1xuICogQGV4cG9ydFxuICogQGNsYXNzIEJjQ29hY2hNYXJrQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYmMtY29hY2gtbWFyaycsXG4gICAgdGVtcGxhdGVVcmw6ICdiYy1jb2FjaC1tYXJrLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBCY0NvYWNoTWFya0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgYmNDb2FjaE1hcmtCZWhhdmlvcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmNDb2FjaE1hcmtCZWhhdmlvciA9IG5ldyBCY0NvYWNoTWFya0JlaGF2aW9yKCk7XG4gICAgICAgIHRoaXMuYmNDb2FjaE1hcmtCZWhhdmlvci5zZXRJZCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICAgICAgdGhpcy5iY0NvYWNoTWFya0JlaGF2aW9yLnNldFVwKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWQgZGVsIGVsZW1lbnRvLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmNDb2FjaE1hcmtDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgZWwgb3JkZW4gZGUgbG9zIHBhc29zIGNvbWVuemFuZG8gcG9yIDAuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQmNDb2FjaE1hcmtTdGVwQ29tcG9uZW50XG4gICAgICovXG4gICAgIEBJbnB1dCgpIGRhdGFDb2FjaG1hcms6IHN0cmluZztcblxuXG4gICAgIC8qKlxuICAgICAgKiBIYWNlIHJlZmVyZW5jaWEgYWwgaWQgcXVlIHRlbmdhIGVsIGVsZW1lbnRvIGh0bWwgZGVsIHBhc28gYSByZXNhbHRhclxuICAgICAgKlxuICAgICAgKiBAbWVtYmVyb2YgQmNDb2FjaE1hcmtTdGVwQ29tcG9uZW50XG4gICAgICAqL1xuICAgICBASW5wdXQoKSBkYXRhQ29udHJvbGxlcj0gJyc7XG5cbiAgICAvKipcbiAgICAgICogSGFjZSByZWZlcmVuY2lhIGFsIGlkIHF1ZSB0ZW5nYSBlbCBjb250ZW5pZG8gZGVsIHBhc28gYSByZXNhbHRhclxuICAgICAgKlxuICAgICAgKiBAbWVtYmVyb2YgQmNDb2FjaE1hcmtTdGVwQ29tcG9uZW50XG4gICAgICAqL1xuICAgICAgICBASW5wdXQoKSBpZCA9ICcnO1xuIFxuXG4gICAgLyoqXG4gICAgICogRXN0ZSBNZXRvZG8gc2UgZW5jYXJnYSBkZSBpbmljaWFsaXphciBlbCBjb2FjaG1hcmtcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCY0NvYWNoTWFya0NvbXBvbmVudFxuICAgICAqL1xuXG4gICAgaW5pdFRvdXJTdGVwKCkge1xuICAgICAgICB0aGlzLmJjQ29hY2hNYXJrQmVoYXZpb3IuaW5pdFRvdXIoKTtcbiAgICB9XG5cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiYmMtY29hY2gtbWFya1wiIFtpZF09XCJjb21wb25lbnRJZFwiPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtY29hY2gtbWFyay1jb250YWluZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiYy1jb2FjaC1tYXJrLWNsb3NlXCI+XG4gICAgICAgICAgICA8YnV0dG9uPmVycm9yPC9idXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtY29hY2gtbWFyay1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvYWNobWFya0NvbnRlbnRdXCIgW2F0dHIuZGF0YUNvYWNobWFya109XCJkYXRhQ29hY2htYXJrXCIgXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YUNvbnRyb2xsZXJdPVwiZGF0YUNvbnRyb2xsZXJcIiBbYXR0ci5pZF09XCJpZFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJjLWNvYWNoLW1hcmstcXVhbnRpdHktaXRlbXNcIj48L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmMtY29hY2gtbWFyay1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gIGJjLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemVCdXR0b249XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgdHlwZUJ1dHRvbj1cInByaW1hcnlcIiBjbGFzcz1cImJjLWNvYWNoLW1hcmstbmV4dFwiPlxuICAgICAgICAgICAgICAgIFNpZ3VpZW50ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uICBiYy1idXR0b25cbiAgICAgICAgICAgICAgICBzaXplQnV0dG9uPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHR5cGVCdXR0b249XCJzZWNvbmRhcnlcIiBjbGFzcz1cImJjLWNvYWNoLW1hcmstcHJldlwiPlxuICAgICAgICAgICAgICAgIFZvbHZlclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L3NlY3Rpb24+XG48L3NlY3Rpb24+Il19