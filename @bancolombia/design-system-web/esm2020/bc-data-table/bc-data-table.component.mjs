import { Component, Input } from '@angular/core';
import { BcDataTableBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * El componente data-table representa un indicador de novedad sobre un elemento
 *
 * @export
 * @class BcDataTableComponent
 * @implements {AfterViewInit}
 */
export class BcDataTableComponent {
    /**
     * Configuracion de datatable.
     *
     * @memberof BcDataTableConfig
     */
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
    }
    ngOnInit() {
        this.dataTableId = this.bcHelperService.getId(this);
        this.dataTableConfig.id = this.dataTableId;
    }
    ngAfterViewInit() {
        this.bcDataTableBehavior = new BcDataTableBehavior(this.dataTableConfig);
    }
    updateData(dataTableConfig) {
        this.bcDataTableBehavior = new BcDataTableBehavior(dataTableConfig);
    }
}
BcDataTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDataTableComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcDataTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcDataTableComponent, selector: "bc-data-table", inputs: { dataTableConfig: ["data-table-config", "dataTableConfig"] }, ngImport: i0, template: "<div class=\"bc-data-table-container\">\n    <table [id]=\"dataTableId\"></table>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDataTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-data-table', styles: [], template: "<div class=\"bc-data-table-container\">\n    <table [id]=\"dataTableId\"></table>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { dataTableConfig: [{
                type: Input,
                args: ['data-table-config']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtZGF0YS10YWJsZS9iYy1kYXRhLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1kYXRhLXRhYmxlL2JjLWRhdGEtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBcUIsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBSTlGOzs7Ozs7O0dBT0c7QUFRRCxNQUFNLE9BQU8sb0JBQW9CO0lBRy9COzs7O09BSUc7SUFFSCxZQUFxQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSyxDQUFDO0lBSTNELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFVBQVUsQ0FBQyxlQUFpQztRQUMxQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RSxDQUFDOztpSEF4QlUsb0JBQW9CO3FHQUFwQixvQkFBb0IsNEhDckJuQyw2RkFHQTsyRkRrQmUsb0JBQW9CO2tCQVBqQyxTQUFTOytCQUNHLGVBQWUsVUFFakIsRUFBRTtzR0Fla0IsZUFBZTtzQkFBMUMsS0FBSzt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNEYXRhVGFibGVCZWhhdmlvciwgQmNEYXRhVGFibGVDb25maWcgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG5cbi8qKlxuICogSW1wb3J0YSBsYXMgYWxlcnRhcyBjb24gbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIEVsIGNvbXBvbmVudGUgZGF0YS10YWJsZSByZXByZXNlbnRhIHVuIGluZGljYWRvciBkZSBub3ZlZGFkIHNvYnJlIHVuIGVsZW1lbnRvXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjRGF0YVRhYmxlQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cbiAqL1xuIEBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYmMtZGF0YS10YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICdiYy1kYXRhLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdLFxuICB9KVxuXG4gIFxuICBleHBvcnQgY2xhc3MgQmNEYXRhVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGJjRGF0YVRhYmxlQmVoYXZpb3I6IEJjRGF0YVRhYmxlQmVoYXZpb3I7XG4gICAgZGF0YVRhYmxlSWQ7XG4gICAgLyoqXG4gICAgICogQ29uZmlndXJhY2lvbiBkZSBkYXRhdGFibGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQmNEYXRhVGFibGVDb25maWdcbiAgICAgKi9cblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlICkgeyB9XG5cbiAgICBASW5wdXQoJ2RhdGEtdGFibGUtY29uZmlnJykgZGF0YVRhYmxlQ29uZmlnOiBCY0RhdGFUYWJsZUNvbmZpZztcbiAgICBcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGF0YVRhYmxlSWQgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcbiAgICAgIHRoaXMuZGF0YVRhYmxlQ29uZmlnLmlkID0gdGhpcy5kYXRhVGFibGVJZDsgICAgICBcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmJjRGF0YVRhYmxlQmVoYXZpb3IgPSBuZXcgQmNEYXRhVGFibGVCZWhhdmlvcih0aGlzLmRhdGFUYWJsZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YShkYXRhVGFibGVDb25maWc6QmNEYXRhVGFibGVDb25maWcpOnZvaWR7XG4gICAgICB0aGlzLmJjRGF0YVRhYmxlQmVoYXZpb3IgPSBuZXcgQmNEYXRhVGFibGVCZWhhdmlvcihkYXRhVGFibGVDb25maWcpO1xuICAgIH1cbn1cbiAgXG4iLCI8ZGl2IGNsYXNzPVwiYmMtZGF0YS10YWJsZS1jb250YWluZXJcIj5cbiAgICA8dGFibGUgW2lkXT1cImRhdGFUYWJsZUlkXCI+PC90YWJsZT5cbjwvZGl2PlxuIl19