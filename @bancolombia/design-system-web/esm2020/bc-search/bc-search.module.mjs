import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcSearchComponent } from './bc-search.component';
import { BcSearchLeftComponent } from './bc-search-left/bc-search-left.component';
import { BcSearchRightComponent } from './bc-search-right/bc-search-right.component';
import { BcSearchButtonComponent } from './bc-search-button/bc-search-button.component';
import { BcSearchAdvancedComponent } from './bc-search-advanced/bc-search-advanced.component';
import { BcSearchAdvancedItemComponent } from './bc-search-item-advanced/bc-search-item-advanced.component';
import { BcInputSelectModule } from '@bancolombia/design-system-web/bc-input-select';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcSearchResultFilterComponent } from './bc-search-result-filter/bc-search-result-filter.component';
import { BcSearchContentItemsComponent } from './bc-search-content-item/bc-search-content-items.component';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';
import * as i0 from "@angular/core";
export class BcSearchModule {
}
BcSearchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcSearchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchModule, declarations: [BcSearchComponent,
        BcSearchLeftComponent,
        BcSearchButtonComponent,
        BcSearchAdvancedComponent,
        BcSearchAdvancedItemComponent,
        BcSearchRightComponent,
        BcSearchResultFilterComponent,
        BcSearchContentItemsComponent], imports: [CommonModule,
        BcInputSelectModule,
        BcButtonModule,
        BcCheckboxModule,
        BcIconModule,
        BcInputModule,
        BcTooltipModule], exports: [BcSearchComponent,
        BcSearchLeftComponent,
        BcSearchButtonComponent,
        BcSearchAdvancedComponent,
        BcSearchAdvancedItemComponent,
        BcSearchRightComponent,
        BcSearchResultFilterComponent,
        BcSearchContentItemsComponent] });
BcSearchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchModule, imports: [[
            CommonModule,
            BcInputSelectModule,
            BcButtonModule,
            BcCheckboxModule,
            BcIconModule,
            BcInputModule,
            BcTooltipModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcSearchComponent,
                        BcSearchLeftComponent,
                        BcSearchButtonComponent,
                        BcSearchAdvancedComponent,
                        BcSearchAdvancedItemComponent,
                        BcSearchRightComponent,
                        BcSearchResultFilterComponent,
                        BcSearchContentItemsComponent,
                    ],
                    imports: [
                        CommonModule,
                        BcInputSelectModule,
                        BcButtonModule,
                        BcCheckboxModule,
                        BcIconModule,
                        BcInputModule,
                        BcTooltipModule,
                    ],
                    exports: [
                        BcSearchComponent,
                        BcSearchLeftComponent,
                        BcSearchButtonComponent,
                        BcSearchAdvancedComponent,
                        BcSearchAdvancedItemComponent,
                        BcSearchRightComponent,
                        BcSearchResultFilterComponent,
                        BcSearchContentItemsComponent,
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zZWFyY2gvYmMtc2VhcmNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBa0M1RSxNQUFNLE9BQU8sY0FBYzs7MkdBQWQsY0FBYzs0R0FBZCxjQUFjLGlCQTlCdkIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLDZCQUE2QixhQUc3QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlLGFBR2YsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLDZCQUE2Qjs0R0FJcEIsY0FBYyxZQXJCaEI7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1NBQ2hCOzJGQWFVLGNBQWM7a0JBaEMxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0Isc0JBQXNCO3dCQUN0Qiw2QkFBNkI7d0JBQzdCLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLDZCQUE2Qjt3QkFDN0Isc0JBQXNCO3dCQUN0Qiw2QkFBNkI7d0JBQzdCLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCY1NlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vYmMtc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1NlYXJjaExlZnRDb21wb25lbnQgfSBmcm9tICcuL2JjLXNlYXJjaC1sZWZ0L2JjLXNlYXJjaC1sZWZ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1NlYXJjaFJpZ2h0Q29tcG9uZW50IH0gZnJvbSAnLi9iYy1zZWFyY2gtcmlnaHQvYmMtc2VhcmNoLXJpZ2h0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1NlYXJjaEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYmMtc2VhcmNoLWJ1dHRvbi9iYy1zZWFyY2gtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1NlYXJjaEFkdmFuY2VkQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1zZWFyY2gtYWR2YW5jZWQvYmMtc2VhcmNoLWFkdmFuY2VkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1NlYXJjaEFkdmFuY2VkSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYmMtc2VhcmNoLWl0ZW0tYWR2YW5jZWQvYmMtc2VhcmNoLWl0ZW0tYWR2YW5jZWQuY29tcG9uZW50JztcbmltcG9ydCB7IEJjSW5wdXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaW5wdXQtc2VsZWN0JztcbmltcG9ydCB7IEJjQnV0dG9uTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWJ1dHRvbic7XG5pbXBvcnQgeyBCY0NoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWNoZWNrYm94JztcbmltcG9ydCB7IEJjSWNvbk1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1pY29uJztcbmltcG9ydCB7IEJjU2VhcmNoUmVzdWx0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1zZWFyY2gtcmVzdWx0LWZpbHRlci9iYy1zZWFyY2gtcmVzdWx0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNTZWFyY2hDb250ZW50SXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2JjLXNlYXJjaC1jb250ZW50LWl0ZW0vYmMtc2VhcmNoLWNvbnRlbnQtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IEJjSW5wdXRNb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaW5wdXQnO1xuaW1wb3J0IHsgQmNUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLXRvb2x0aXAnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCY1NlYXJjaENvbXBvbmVudCxcbiAgICBCY1NlYXJjaExlZnRDb21wb25lbnQsXG4gICAgQmNTZWFyY2hCdXR0b25Db21wb25lbnQsXG4gICAgQmNTZWFyY2hBZHZhbmNlZENvbXBvbmVudCxcbiAgICBCY1NlYXJjaEFkdmFuY2VkSXRlbUNvbXBvbmVudCxcbiAgICBCY1NlYXJjaFJpZ2h0Q29tcG9uZW50LFxuICAgIEJjU2VhcmNoUmVzdWx0RmlsdGVyQ29tcG9uZW50LFxuICAgIEJjU2VhcmNoQ29udGVudEl0ZW1zQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJjSW5wdXRTZWxlY3RNb2R1bGUsXG4gICAgQmNCdXR0b25Nb2R1bGUsXG4gICAgQmNDaGVja2JveE1vZHVsZSxcbiAgICBCY0ljb25Nb2R1bGUsXG4gICAgQmNJbnB1dE1vZHVsZSxcbiAgICBCY1Rvb2x0aXBNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCY1NlYXJjaENvbXBvbmVudCxcbiAgICBCY1NlYXJjaExlZnRDb21wb25lbnQsXG4gICAgQmNTZWFyY2hCdXR0b25Db21wb25lbnQsXG4gICAgQmNTZWFyY2hBZHZhbmNlZENvbXBvbmVudCxcbiAgICBCY1NlYXJjaEFkdmFuY2VkSXRlbUNvbXBvbmVudCxcbiAgICBCY1NlYXJjaFJpZ2h0Q29tcG9uZW50LFxuICAgIEJjU2VhcmNoUmVzdWx0RmlsdGVyQ29tcG9uZW50LFxuICAgIEJjU2VhcmNoQ29udGVudEl0ZW1zQ29tcG9uZW50LFxuICBdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEJjU2VhcmNoTW9kdWxlIHt9XG4iXX0=