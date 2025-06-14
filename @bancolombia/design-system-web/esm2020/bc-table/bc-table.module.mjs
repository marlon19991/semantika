import { BcTableContentComponent } from './bc-table-content/bc-table-content.component';
import { BcTableHeaderComponent } from './bc-table-header/bc-table-header.component';
import { BcTableContainerComponent } from './bc-table-container/bc-table-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcTableDirective } from './bc-table-directives/bc-table.directive';
import { BcCellDirective } from './bc-table-directives/bc-cell.directive';
import { BcTableFooterComponent } from './bc-table-footer/bc-table-footer.component';
import { BcTableEmptyContainerComponent } from './bc-table-empy-container/bc-table-empy-container.component';
import { BcTableDropdownComponent } from './bc-table-dropdown/bc-table-dropdown.component';
import { BcPaginatorModule } from '@bancolombia/design-system-web/bc-paginator';
import * as i0 from "@angular/core";
export class BcTableModule {
}
BcTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableModule, declarations: [BcTableContainerComponent,
        BcTableHeaderComponent,
        BcTableContentComponent,
        BcTableDirective,
        BcCellDirective,
        BcTableFooterComponent,
        BcTableDropdownComponent,
        BcTableEmptyContainerComponent], imports: [CommonModule, BcPaginatorModule], exports: [BcTableContainerComponent,
        BcTableHeaderComponent,
        BcTableContentComponent,
        BcTableDirective,
        BcCellDirective,
        BcTableFooterComponent,
        BcTableDropdownComponent,
        BcTableEmptyContainerComponent] });
BcTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableModule, imports: [[CommonModule, BcPaginatorModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcTableContainerComponent,
                        BcTableHeaderComponent,
                        BcTableContentComponent,
                        BcTableDirective,
                        BcCellDirective,
                        BcTableFooterComponent,
                        BcTableDropdownComponent,
                        BcTableEmptyContainerComponent,
                    ],
                    imports: [CommonModule, BcPaginatorModule],
                    exports: [
                        BcTableContainerComponent,
                        BcTableHeaderComponent,
                        BcTableContentComponent,
                        BcTableDirective,
                        BcCellDirective,
                        BcTableFooterComponent,
                        BcTableDropdownComponent,
                        BcTableEmptyContainerComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXRhYmxlL2JjLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0FBeUJoRixNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQXJCdEIseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLDhCQUE4QixhQUV0QixZQUFZLEVBQUUsaUJBQWlCLGFBRXZDLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qiw4QkFBOEI7MkdBR3JCLGFBQWEsWUFaZixDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQzsyRkFZL0IsYUFBYTtrQkF2QnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsOEJBQThCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQzFDLE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2Ysc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLDhCQUE4QjtxQkFDL0I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCY1RhYmxlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vYmMtdGFibGUtY29udGVudC9iYy10YWJsZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1RhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy10YWJsZS1oZWFkZXIvYmMtdGFibGUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1RhYmxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy10YWJsZS1jb250YWluZXIvYmMtdGFibGUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjVGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2JjLXRhYmxlLWRpcmVjdGl2ZXMvYmMtdGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJjQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vYmMtdGFibGUtZGlyZWN0aXZlcy9iYy1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCY1RhYmxlRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy10YWJsZS1mb290ZXIvYmMtdGFibGUtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1RhYmxlRW1wdHlDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JjLXRhYmxlLWVtcHktY29udGFpbmVyL2JjLXRhYmxlLWVtcHktY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1RhYmxlRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2JjLXRhYmxlLWRyb3Bkb3duL2JjLXRhYmxlLWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1BhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1wYWdpbmF0b3InO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCY1RhYmxlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEJjVGFibGVIZWFkZXJDb21wb25lbnQsXG4gICAgQmNUYWJsZUNvbnRlbnRDb21wb25lbnQsXG4gICAgQmNUYWJsZURpcmVjdGl2ZSxcbiAgICBCY0NlbGxEaXJlY3RpdmUsXG4gICAgQmNUYWJsZUZvb3RlckNvbXBvbmVudCxcbiAgICBCY1RhYmxlRHJvcGRvd25Db21wb25lbnQsXG4gICAgQmNUYWJsZUVtcHR5Q29udGFpbmVyQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY1BhZ2luYXRvck1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBCY1RhYmxlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEJjVGFibGVIZWFkZXJDb21wb25lbnQsXG4gICAgQmNUYWJsZUNvbnRlbnRDb21wb25lbnQsXG4gICAgQmNUYWJsZURpcmVjdGl2ZSxcbiAgICBCY0NlbGxEaXJlY3RpdmUsXG4gICAgQmNUYWJsZUZvb3RlckNvbXBvbmVudCxcbiAgICBCY1RhYmxlRHJvcGRvd25Db21wb25lbnQsXG4gICAgQmNUYWJsZUVtcHR5Q29udGFpbmVyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBCY1RhYmxlTW9kdWxlIHt9XG4iXX0=