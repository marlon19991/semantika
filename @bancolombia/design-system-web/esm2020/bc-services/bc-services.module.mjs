import { BcDialogContainerComponent } from './bc-dialog-service/bc-dialog-container/bc-dialog-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcDialogService } from './bc-dialog-service/bc-dialog.service';
import { BcDynamicHostDirective } from './bc-dynamic-host-service/directives/bc-dynamic-host.directive';
import { BcDynamicHostService } from './bc-dynamic-host-service/bc-dynamic-host.service';
import * as i0 from "@angular/core";
export class BcServicesModule {
    static forRoot() {
        return {
            ngModule: BcServicesModule,
            providers: [BcDialogService, BcDynamicHostService],
        };
    }
}
BcServicesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcServicesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcServicesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcServicesModule, declarations: [BcDialogContainerComponent, BcDynamicHostDirective], imports: [CommonModule], exports: [BcDialogContainerComponent, BcDynamicHostDirective] });
BcServicesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcServicesModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcServicesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [BcDialogContainerComponent, BcDynamicHostDirective],
                    exports: [BcDialogContainerComponent, BcDynamicHostDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXNlcnZpY2VzL2JjLXNlcnZpY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNuSCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOztBQU96RixNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDO1NBQ25ELENBQUM7SUFDSixDQUFDOzs2R0FOVSxnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkFIViwwQkFBMEIsRUFBRSxzQkFBc0IsYUFEdkQsWUFBWSxhQUVaLDBCQUEwQixFQUFFLHNCQUFzQjs4R0FFbkQsZ0JBQWdCLFlBSmhCLENBQUMsWUFBWSxDQUFDOzJGQUlkLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLHNCQUFzQixDQUFDO29CQUNsRSxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxzQkFBc0IsQ0FBQztpQkFDaEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCY0RpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYmMtZGlhbG9nLXNlcnZpY2UvYmMtZGlhbG9nLWNvbnRhaW5lci9iYy1kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjRGlhbG9nU2VydmljZSB9IGZyb20gJy4vYmMtZGlhbG9nLXNlcnZpY2UvYmMtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmNEeW5hbWljSG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vYmMtZHluYW1pYy1ob3N0LXNlcnZpY2UvZGlyZWN0aXZlcy9iYy1keW5hbWljLWhvc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJjRHluYW1pY0hvc3RTZXJ2aWNlIH0gZnJvbSAnLi9iYy1keW5hbWljLWhvc3Qtc2VydmljZS9iYy1keW5hbWljLWhvc3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQmNEaWFsb2dDb250YWluZXJDb21wb25lbnQsIEJjRHluYW1pY0hvc3REaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtCY0RpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCwgQmNEeW5hbWljSG9zdERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQmNTZXJ2aWNlc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QmNTZXJ2aWNlc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQmNTZXJ2aWNlc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0JjRGlhbG9nU2VydmljZSwgQmNEeW5hbWljSG9zdFNlcnZpY2VdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==