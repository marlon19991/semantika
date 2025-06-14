import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BcCardTdcComponent } from './bc-card-tdc.component';
import { FormatAmountPipe } from './pipes/format-amount.pipe';
import { BcLogoModule } from '@bancolombia/design-system-web/bc-logo';
import { BcRadioModule } from '@bancolombia/design-system-web/bc-radio';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { MaskCardNumberPipe } from './pipes/mask-card-number.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-logo";
export class BcCardTdcModule {
}
BcCardTdcModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcCardTdcModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcModule, declarations: [BcCardTdcComponent,
        FormatAmountPipe,
        MaskCardNumberPipe], imports: [CommonModule, i1.BcLogoModule, BcRadioModule, BcCheckboxModule], exports: [BcCardTdcComponent] });
BcCardTdcModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcModule, providers: [CurrencyPipe], imports: [[CommonModule, BcLogoModule.forRoot(), BcRadioModule, BcCheckboxModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardTdcModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcCardTdcComponent,
                        FormatAmountPipe,
                        MaskCardNumberPipe
                    ],
                    imports: [CommonModule, BcLogoModule.forRoot(), BcRadioModule, BcCheckboxModule],
                    exports: [BcCardTdcComponent],
                    providers: [CurrencyPipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2FyZC10ZGMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhcmQtdGRjL2JjLWNhcmQtdGRjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBWW5FLE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBUnhCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsa0JBQWtCLGFBRVYsWUFBWSxtQkFBMEIsYUFBYSxFQUFFLGdCQUFnQixhQUNyRSxrQkFBa0I7NkdBR2pCLGVBQWUsYUFGZixDQUFDLFlBQVksQ0FBQyxZQUZoQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDOzJGQUlyRSxlQUFlO2tCQVYzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDaEYsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQzdCLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBDdXJyZW5jeVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNDYXJkVGRjQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1jYXJkLXRkYy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0QW1vdW50UGlwZSB9IGZyb20gJy4vcGlwZXMvZm9ybWF0LWFtb3VudC5waXBlJztcbmltcG9ydCB7IEJjTG9nb01vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1sb2dvJztcbmltcG9ydCB7IEJjUmFkaW9Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtcmFkaW8nO1xuaW1wb3J0IHsgQmNDaGVja2JveE1vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1jaGVja2JveCc7XG5pbXBvcnQgeyBNYXNrQ2FyZE51bWJlclBpcGUgfSBmcm9tICcuL3BpcGVzL21hc2stY2FyZC1udW1iZXIucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJjQ2FyZFRkY0NvbXBvbmVudCxcbiAgICBGb3JtYXRBbW91bnRQaXBlLFxuICAgIE1hc2tDYXJkTnVtYmVyUGlwZVxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCY0xvZ29Nb2R1bGUuZm9yUm9vdCgpLCBCY1JhZGlvTW9kdWxlLCBCY0NoZWNrYm94TW9kdWxlXSxcbiAgZXhwb3J0czogW0JjQ2FyZFRkY0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0N1cnJlbmN5UGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJjQ2FyZFRkY01vZHVsZSB7IH1cbiJdfQ==