import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { BcPaginatorComponent } from '@bancolombia/design-system-web/bc-paginator';
import * as i0 from "@angular/core";
export class BcTableHeaderComponent {
    constructor() {
        /**
         * Título de la tabla, este puede tomar cualquier valor string, por defecto es 'Título de la tabla'.
         *
         * @memberof BcTableHeaderComponent
         */
        this.title = 'Título de la tabla';
        /**
         * Texto o label que se muestra en el botón de acción cuando la tabla es de tipo selección,
         * este se visualiza cuando algunas de las filas es seleccionada. Por defecto es 'Acción'.
         *
         * @memberof BcTableHeaderComponent
         */
        this.actionsSelections = [];
        /**
         * Texto o label que se muestra en el botón de acción cuando la tabla es de tipo selección,
         * este se visualiza cuando algunas de las filas es seleccionada. Por defecto es 'Acción'.
         *
         * @memberof BcTableHeaderComponent
         */
        this.menuOptions = [];
        /**
         * Evento de salida para cuando se da click a algunas de las acciones del header en modo selección.
         *
         * @type {EventEmitter<any>}
         * @memberof BcTableHeaderComponent
         */
        this.actionClicked = new EventEmitter();
    }
    ngAfterViewInit() {
        this.getPaginator();
    }
    /**
     * metodo para obtener la referencia del paginador sino lo encuentra
     * lo retorna como undefined
     * @returns paginador o undefined
     */
    getPaginator() {
        if (this.content !== undefined) {
            return this.content.bcPaginatorBehavior;
        }
        return undefined;
    }
}
BcTableHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcTableHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableHeaderComponent, selector: "bc-table-header", inputs: { title: "title", actionsSelections: "actionsSelections", menuOptions: "menuOptions" }, outputs: { actionClicked: "actionClicked" }, queries: [{ propertyName: "content", first: true, predicate: BcPaginatorComponent, descendants: true }], ngImport: i0, template: "<div class=\"bc-table-header-top\">\n  <h6 class=\"bc-table-header-top-title\">{{ title }}</h6>\n  <div class=\"bc-table-header-top-right-container\">\n    <div class=\"bc-table-actions-container\">\n      <div class=\"bc-table-paginator-container\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-table-header', template: "<div class=\"bc-table-header-top\">\n  <h6 class=\"bc-table-header-top-title\">{{ title }}</h6>\n  <div class=\"bc-table-header-top-right-container\">\n    <div class=\"bc-table-actions-container\">\n      <div class=\"bc-table-paginator-container\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { title: [{
                type: Input
            }], actionsSelections: [{
                type: Input
            }], menuOptions: [{
                type: Input
            }], actionClicked: [{
                type: Output
            }], content: [{
                type: ContentChild,
                args: [BcPaginatorComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWJsZS9iYy10YWJsZS1oZWFkZXIvYmMtdGFibGUtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWJsZS9iYy10YWJsZS1oZWFkZXIvYmMtdGFibGUtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtwRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFNbkYsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQUtFOzs7O1dBSUc7UUFDTSxVQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFDdEM7Ozs7O1dBS0c7UUFDTSxzQkFBaUIsR0FBMEIsRUFBRSxDQUFDO1FBQ3ZEOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBd0IsRUFBRSxDQUFDO1FBQy9DOzs7OztXQUtHO1FBQ08sa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQXFCakU7SUFkQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksWUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUksU0FBUyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztTQUN6QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7O21IQS9DVSxzQkFBc0I7dUdBQXRCLHNCQUFzQix5T0FnQ25CLG9CQUFvQixnREMzQ3BDLDZVQVVBOzJGRENhLHNCQUFzQjtrQkFKbEMsU0FBUzsrQkFDRSxpQkFBaUI7OEJBU2xCLEtBQUs7c0JBQWIsS0FBSztnQkFPRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFPSSxhQUFhO3NCQUF0QixNQUFNO2dCQUs2QixPQUFPO3NCQUExQyxZQUFZO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJjVGFibGVBY3Rpb25CdXR0b24sXG4gIEJjVGFibGVPcHRpb25NZW51LFxufSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNQYWdpbmF0b3JDb21wb25lbnQgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtcGFnaW5hdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtdGFibGUtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXRhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xuICAvKipcbiAgICogVMOtdHVsbyBkZSBsYSB0YWJsYSwgZXN0ZSBwdWVkZSB0b21hciBjdWFscXVpZXIgdmFsb3Igc3RyaW5nLCBwb3IgZGVmZWN0byBlcyAnVMOtdHVsbyBkZSBsYSB0YWJsYScuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0aXRsZSA9ICdUw610dWxvIGRlIGxhIHRhYmxhJztcbiAgLyoqXG4gICAqIFRleHRvIG8gbGFiZWwgcXVlIHNlIG11ZXN0cmEgZW4gZWwgYm90w7NuIGRlIGFjY2nDs24gY3VhbmRvIGxhIHRhYmxhIGVzIGRlIHRpcG8gc2VsZWNjacOzbixcbiAgICogZXN0ZSBzZSB2aXN1YWxpemEgY3VhbmRvIGFsZ3VuYXMgZGUgbGFzIGZpbGFzIGVzIHNlbGVjY2lvbmFkYS4gUG9yIGRlZmVjdG8gZXMgJ0FjY2nDs24nLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZUhlYWRlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYWN0aW9uc1NlbGVjdGlvbnM6IEJjVGFibGVBY3Rpb25CdXR0b25bXSA9IFtdO1xuICAvKipcbiAgICogVGV4dG8gbyBsYWJlbCBxdWUgc2UgbXVlc3RyYSBlbiBlbCBib3TDs24gZGUgYWNjacOzbiBjdWFuZG8gbGEgdGFibGEgZXMgZGUgdGlwbyBzZWxlY2Npw7NuLFxuICAgKiBlc3RlIHNlIHZpc3VhbGl6YSBjdWFuZG8gYWxndW5hcyBkZSBsYXMgZmlsYXMgZXMgc2VsZWNjaW9uYWRhLiBQb3IgZGVmZWN0byBlcyAnQWNjacOzbicuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBtZW51T3B0aW9uczogQmNUYWJsZU9wdGlvbk1lbnVbXSA9IFtdO1xuICAvKipcbiAgICogRXZlbnRvIGRlIHNhbGlkYSBwYXJhIGN1YW5kbyBzZSBkYSBjbGljayBhIGFsZ3VuYXMgZGUgbGFzIGFjY2lvbmVzIGRlbCBoZWFkZXIgZW4gbW9kbyBzZWxlY2Npw7NuLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGFueT59XG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlSGVhZGVyQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgYWN0aW9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKlxuICAgKiBjb250ZW50IHF1ZSBoYWNlIHJlZmVyZW5jaWEgYWwgcGFnaW5hZG9yIGFsb2phZG8gZGVudHJvIGRlbCBoZWFkZXJcbiAgICogQG1lbWJlcm9mIEJjVGFibGVIZWFkZXJDb21wb25lbnRcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoQmNQYWdpbmF0b3JDb21wb25lbnQpIGNvbnRlbnQ6IEJjUGFnaW5hdG9yQ29tcG9uZW50O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldFBhZ2luYXRvcigpO1xuICB9XG4gIC8qKlxuICAgKiBtZXRvZG8gcGFyYSBvYnRlbmVyIGxhIHJlZmVyZW5jaWEgZGVsIHBhZ2luYWRvciBzaW5vIGxvIGVuY3VlbnRyYVxuICAgKiBsbyByZXRvcm5hIGNvbW8gdW5kZWZpbmVkXG4gICAqIEByZXR1cm5zIHBhZ2luYWRvciBvIHVuZGVmaW5lZCBcbiAgICovXG4gIHB1YmxpYyBnZXRQYWdpbmF0b3IoKXtcbiAgICBpZiAodGhpcy5jb250ZW50IT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudC5iY1BhZ2luYXRvckJlaGF2aW9yO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYmMtdGFibGUtaGVhZGVyLXRvcFwiPlxuICA8aDYgY2xhc3M9XCJiYy10YWJsZS1oZWFkZXItdG9wLXRpdGxlXCI+e3sgdGl0bGUgfX08L2g2PlxuICA8ZGl2IGNsYXNzPVwiYmMtdGFibGUtaGVhZGVyLXRvcC1yaWdodC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtdGFibGUtYWN0aW9ucy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYy10YWJsZS1wYWdpbmF0b3ItY29udGFpbmVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19