import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcInputCreateComponent } from './bc-input-create.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export class BcInputCreateModule {
}
BcInputCreateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputCreateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateModule, declarations: [BcInputCreateComponent], imports: [CommonModule, BcIconModule, BcInputModule], exports: [BcInputCreateComponent] });
BcInputCreateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateModule, providers: [BcHelperService], imports: [[CommonModule, BcIconModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputCreateComponent],
                    imports: [CommonModule, BcIconModule, BcInputModule],
                    providers: [BcHelperService],
                    exports: [BcInputCreateComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtY3JlYXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1jcmVhdGUvYmMtaW5wdXQtY3JlYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFTNUUsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQU5mLHNCQUFzQixhQUMzQixZQUFZLEVBQUMsWUFBWSxFQUFFLGFBQWEsYUFFeEMsc0JBQXNCO2lIQUdyQixtQkFBbUIsYUFKbkIsQ0FBQyxlQUFlLENBQUMsWUFEbkIsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQzsyRkFLeEMsbUJBQW1CO2tCQVAvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDbkQsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY0lucHV0Q3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1pbnB1dC1jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcbmltcG9ydCB7IEJjSW5wdXRNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaW5wdXQnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY0lucHV0Q3JlYXRlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxCY0ljb25Nb2R1bGUsIEJjSW5wdXRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtCY0hlbHBlclNlcnZpY2VdLFxuICBleHBvcnRzOiBbQmNJbnB1dENyZWF0ZUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBCY0lucHV0Q3JlYXRlTW9kdWxlIHt9Il19