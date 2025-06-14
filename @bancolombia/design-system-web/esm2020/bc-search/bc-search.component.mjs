import { Component, Input, Output, EventEmitter, ContentChildren, } from '@angular/core';
import { BcSearchBehavior } from '@bancolombia/design-system-behaviors';
import { BcInputDateComponent } from '@bancolombia/design-system-web/bc-input-date';
import { BcSearchAdvancedItemComponent } from './bc-search-item-advanced/bc-search-item-advanced.component';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Componente busqueda
 *
 * @export
 * @class BcSearchComponent
 * @implements {OnInit}
 * @implements {AfterViewChecked}
 * @implements {AfterViewInit}
 */
export class BcSearchComponent {
    constructor(elRef, bcHelperService) {
        this.elRef = elRef;
        this.bcHelperService = bcHelperService;
        /**
       * Id del elemento.
       *
       * @type {string}
       * @memberOf BcPaginatorComponent
       */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * items del componente search a buscar.
         *
         * @type {array}
         * @memberof BcSearchComponent
         */
        this.items = [];
        /**
         * Evento que emite los Objetos filtrados para realizar busquedas externas  .
         *
         * @type {string}
         * @memberof BcSearchComponent
         */
        this.objFilter = new EventEmitter();
        /**
         * Evento que emite evento cuando se limpian los filtros.
         *
         * @type {CustomEvent}
         * @memberof BcSearchComponent
         */
        this.clearEvent = new EventEmitter();
        this.bcSearchBehavior = new BcSearchBehavior();
    }
    ngOnInit() {
        this.bcSearchBehavior.setElement(this.elRef.nativeElement);
        this.bcSearchBehavior.clearSearchOutput();
        this.bcSearchBehavior.outputFunctionClear = (data) => {
            this.clearEvent.emit(data);
        };
    }
    ngAfterViewChecked() {
        this.bcSearchBehavior.setItems(this.items);
        this.bcSearchBehavior.outputFunction = (data) => {
            this.objFilter.emit(data);
        };
        this.bcSearchBehavior.preSearchFunction = async (data) => {
            if (this.preSearchFunction) {
                await this.preSearchFunction(data);
            }
        };
        this.bcSearchBehavior.setInputsElementSelect(this.itemsSelect);
    }
    ngAfterViewInit() {
        this.bcSearchBehavior.setUp();
        this.advanceItems.forEach((item) => {
            item.valueSelected.subscribe((data) => {
                if (data) {
                    this.bcSearchBehavior.searchObject();
                }
            });
        });
        this.inputsDate.forEach((element) => {
            element.updateValue.subscribe((value) => {
                this.bcSearchBehavior.searchObject();
            });
        });
    }
    /**
     * CLimpia los filtros del search.
     *
     * @memberof BcInputDateRangeComponent
    */
    clearSearch() {
        this.bcSearchBehavior.cleanValidationSearch();
    }
}
BcSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchComponent, deps: [{ token: i0.ElementRef }, { token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcSearchComponent, selector: "bc-search", inputs: { componentId: "componentId", items: "items", itemsSelect: "itemsSelect", preSearchFunction: "preSearchFunction" }, outputs: { objFilter: "objFilter", clearEvent: "clearEvent" }, queries: [{ propertyName: "advanceItems", predicate: BcSearchAdvancedItemComponent, descendants: true }, { propertyName: "inputsDate", predicate: BcInputDateComponent, descendants: true }], ngImport: i0, template: "<div   [id]=\"componentId\" class=\"bc-search\">\n  <ng-content></ng-content>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-search', template: "<div   [id]=\"componentId\" class=\"bc-search\">\n  <ng-content></ng-content>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.BcHelperService }]; }, propDecorators: { advanceItems: [{
                type: ContentChildren,
                args: [BcSearchAdvancedItemComponent, { descendants: true }]
            }], inputsDate: [{
                type: ContentChildren,
                args: [BcInputDateComponent, { descendants: true }]
            }], componentId: [{
                type: Input
            }], items: [{
                type: Input
            }], itemsSelect: [{
                type: Input
            }], preSearchFunction: [{
                type: Input
            }], objFilter: [{
                type: Output
            }], clearEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zZWFyY2gvYmMtc2VhcmNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zZWFyY2gvYmMtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUdMLE1BQU0sRUFDTixZQUFZLEVBR1osZUFBZSxHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQzs7O0FBa0I1Rzs7Ozs7Ozs7R0FRRztBQUtILE1BQU0sT0FBTyxpQkFBaUI7SUFnRTVCLFlBQW9CLEtBQWlCLEVBQVUsZUFBZ0M7UUFBM0QsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQXhEL0U7Ozs7O1NBS0M7UUFDUSxnQkFBVyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR2hFOzs7OztXQUtHO1FBRU0sVUFBSyxHQUFHLEVBQUUsQ0FBQztRQW9CcEI7Ozs7O1dBS0c7UUFFTyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6Qzs7Ozs7V0FLRztRQUVPLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN2RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDbkM7UUFDSCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUN0QztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNEOzs7O01BSUU7SUFDRixXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDaEQsQ0FBQzs7OEdBL0dVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHlRQUNYLDZCQUE2QixnRUFHN0Isb0JBQW9CLGdEQ2pEdkMsdUZBRU07MkZEMkNPLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxXQUFXOytIQUtyQixZQUFZO3NCQURYLGVBQWU7dUJBQUMsNkJBQTZCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQUlyRSxVQUFVO3NCQURULGVBQWU7dUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQVVuRCxXQUFXO3NCQUFuQixLQUFLO2dCQVVHLEtBQUs7c0JBQWIsS0FBSztnQkFXRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9HLGlCQUFpQjtzQkFBekIsS0FBSztnQkFTSSxTQUFTO3NCQUFsQixNQUFNO2dCQVNHLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIEVsZW1lbnRSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY1NlYXJjaEJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSW5wdXREYXRlQ29tcG9uZW50IH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWlucHV0LWRhdGUnO1xuaW1wb3J0IHsgQmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2JjLXNlYXJjaC1pdGVtLWFkdmFuY2VkL2JjLXNlYXJjaC1pdGVtLWFkdmFuY2VkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbmludGVyZmFjZSBJdGVtU2VhcmNoIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbnRlbnRTZWxlY3Qge1xuICBuYW1lU2VhcmNoOiBzdHJpbmc7XG4gIHZhbHVlPzogYW55O1xuICB0eXBlU2VsZWN0PzogYW55O1xuICBpdGVtczogSXRlbVNlYXJjaFtdO1xufVxuXG5pbnRlcmZhY2UgRGF0YVNlbGVjdCB7XG4gIFtpZDogc3RyaW5nXTogQ29udGVudFNlbGVjdDtcbn1cbi8qKlxuICogQ29tcG9uZW50ZSBidXNxdWVkYVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1NlYXJjaENvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdDaGVja2VkfVxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY1NlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oQmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgYWR2YW5jZUl0ZW1zOiBRdWVyeUxpc3Q8QmNTZWFyY2hBZHZhbmNlZEl0ZW1Db21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQmNJbnB1dERhdGVDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgaW5wdXRzRGF0ZTogUXVlcnlMaXN0PEJjSW5wdXREYXRlQ29tcG9uZW50PjtcblxuXG4gIC8qKlxuICogSWQgZGVsIGVsZW1lbnRvLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAbWVtYmVyT2YgQmNQYWdpbmF0b3JDb21wb25lbnRcbiAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cblxuICAvKipcbiAgICogaXRlbXMgZGVsIGNvbXBvbmVudGUgc2VhcmNoIGEgYnVzY2FyLlxuICAgKlxuICAgKiBAdHlwZSB7YXJyYXl9XG4gICAqIEBtZW1iZXJvZiBCY1NlYXJjaENvbXBvbmVudFxuICAgKi9cblxuICBASW5wdXQoKSBpdGVtcyA9IFtdO1xuXG5cbiAgLyoqXG4gICAqIEl0ZW1zIGRlbCBjb21wb25lbnRlIHNlbGVjdCBxdWUgdmFuIGEgc2VyIHJlbmRlcml6YWRvcywgREVCRSBzZXIgZGUgdGlwbyBEYXRhU2VsZWN0IHkgZWwgbm9tYnJlIGRlXG4gICAqIGxhIHByb3BpZWRhIGRlYmUgc2VyIGlndWFsIGFsIElEIGRlbFxuICAgKiBpbnB1dCBzZWxlY3QgZWwgY3VhbCBkZWJlIHNlciB1biBvYmpldG8gcXVlIERFQkUgdGVuZXIgbG9zIGRhdG9zXG4gICAqIG5hbWVTZWFyY2g6IHN0cmluZzsgdmFsdWU/OiBhbnk7IHR5cGVTZWxlY3Q/OiBhbnk7IGl0ZW1zOiBJdGVtU2VhcmNoW107XG4gICAqIEB0eXBlIHsoJ0RhdGFTZWxlY3QnKX1cbiAgICogQG1lbWJlcm9mIEJjU2VhcmNoQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpdGVtc1NlbGVjdDogRGF0YVNlbGVjdDtcblxuICAvKipcbiAgICAgKiBGdW5jaW9uIHF1ZSBzZSBlamVjdXRhIHVuYSBwcm9tZXNhIGRlIG1hbmVyYSBzaW5jcm9uYSBhbnRlcyBkZSBlamVjdXRhciBsYSBidXNxdWVkYSBkZSBlbGVtZW50b3MgIFxuICAgICAqIEB0eXBlIHsoJ0Z1bmNpb24oUHJvbWlzZShvYmplY3QpKScpfVxuICAgICAqIEBtZW1iZXJvZiBCY1NlYXJjaENvbXBvbmVudFxuICAgICAqL1xuICBASW5wdXQoKSBwcmVTZWFyY2hGdW5jdGlvbjogKGRhdGEpID0+IFByb21pc2U8b2JqZWN0PjtcblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBlbWl0ZSBsb3MgT2JqZXRvcyBmaWx0cmFkb3MgcGFyYSByZWFsaXphciBidXNxdWVkYXMgZXh0ZXJuYXMgIC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjU2VhcmNoQ29tcG9uZW50XG4gICAqL1xuXG4gIEBPdXRwdXQoKSBvYmpGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50byBxdWUgZW1pdGUgZXZlbnRvIGN1YW5kbyBzZSBsaW1waWFuIGxvcyBmaWx0cm9zLlxuICAgKlxuICAgKiBAdHlwZSB7Q3VzdG9tRXZlbnR9XG4gICAqIEBtZW1iZXJvZiBCY1NlYXJjaENvbXBvbmVudFxuICAgKi9cblxuICBAT3V0cHV0KCkgY2xlYXJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBiY1NlYXJjaEJlaGF2aW9yO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UpIHtcbiAgICB0aGlzLmJjU2VhcmNoQmVoYXZpb3IgPSBuZXcgQmNTZWFyY2hCZWhhdmlvcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iY1NlYXJjaEJlaGF2aW9yLnNldEVsZW1lbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmJjU2VhcmNoQmVoYXZpb3IuY2xlYXJTZWFyY2hPdXRwdXQoKTtcbiAgICB0aGlzLmJjU2VhcmNoQmVoYXZpb3Iub3V0cHV0RnVuY3Rpb25DbGVhciA9IChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyRXZlbnQuZW1pdChkYXRhKTtcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuYmNTZWFyY2hCZWhhdmlvci5zZXRJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICB0aGlzLmJjU2VhcmNoQmVoYXZpb3Iub3V0cHV0RnVuY3Rpb24gPSAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5vYmpGaWx0ZXIuZW1pdChkYXRhKTtcbiAgICB9O1xuICAgIHRoaXMuYmNTZWFyY2hCZWhhdmlvci5wcmVTZWFyY2hGdW5jdGlvbiA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcmVTZWFyY2hGdW5jdGlvbikge1xuICAgICAgICBhd2FpdCB0aGlzLnByZVNlYXJjaEZ1bmN0aW9uKGRhdGEpXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmJjU2VhcmNoQmVoYXZpb3Iuc2V0SW5wdXRzRWxlbWVudFNlbGVjdCh0aGlzLml0ZW1zU2VsZWN0KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmJjU2VhcmNoQmVoYXZpb3Iuc2V0VXAoKTtcbiAgICB0aGlzLmFkdmFuY2VJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLnZhbHVlU2VsZWN0ZWQuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy5iY1NlYXJjaEJlaGF2aW9yLnNlYXJjaE9iamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmlucHV0c0RhdGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC51cGRhdGVWYWx1ZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuYmNTZWFyY2hCZWhhdmlvci5zZWFyY2hPYmplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDTGltcGlhIGxvcyBmaWx0cm9zIGRlbCBzZWFyY2guXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gICovXG4gIGNsZWFyU2VhcmNoKCkge1xuICAgIHRoaXMuYmNTZWFyY2hCZWhhdmlvci5jbGVhblZhbGlkYXRpb25TZWFyY2goKTtcbiAgfVxufVxuIiwiPGRpdiAgIFtpZF09XCJjb21wb25lbnRJZFwiIGNsYXNzPVwiYmMtc2VhcmNoXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PiJdfQ==