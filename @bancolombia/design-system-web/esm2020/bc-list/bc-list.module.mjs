import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BcListComponent } from './bc-list.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { CommonModule } from '@angular/common';
import { BcPaginatorModule } from '@bancolombia/design-system-web/bc-paginator';
import { BcTableModule } from '@bancolombia/design-system-web/bc-table';
import * as i0 from "@angular/core";
export class BcListModule {
}
BcListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListModule, declarations: [BcListComponent], imports: [BcIconModule, BcCheckboxModule, CommonModule, BcPaginatorModule, BcTableModule], exports: [BcListComponent] });
BcListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListModule, imports: [[BcIconModule, BcCheckboxModule, CommonModule, BcPaginatorModule, BcTableModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcListComponent],
                    imports: [BcIconModule, BcCheckboxModule, CommonModule, BcPaginatorModule, BcTableModule],
                    exports: [BcListComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtbGlzdC9iYy1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFReEUsTUFBTSxPQUFPLFlBQVk7O3lHQUFaLFlBQVk7MEdBQVosWUFBWSxpQkFMUixlQUFlLGFBQ3BCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxhQUM5RSxlQUFlOzBHQUdkLFlBQVksWUFKZCxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxDQUFDOzJGQUk5RSxZQUFZO2tCQU54QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUM7b0JBQ3pGLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYmMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNJY29uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWljb24nO1xuaW1wb3J0IHsgQmNDaGVja2JveE1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1jaGVja2JveCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtcGFnaW5hdG9yJztcbmltcG9ydCB7IEJjVGFibGVNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtdGFibGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY0xpc3RDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQmNJY29uTW9kdWxlLCBCY0NoZWNrYm94TW9kdWxlLCBDb21tb25Nb2R1bGUsIEJjUGFnaW5hdG9yTW9kdWxlLCBCY1RhYmxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0JjTGlzdENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgQmNMaXN0TW9kdWxlIHsgfVxuIl19