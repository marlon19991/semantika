import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcInlineAlertComponent } from './bc-inline-alert.component';
import { BcIconButtonModule } from '@bancolombia/design-system-web/bc-icon-button';
import { BcTransactionStatusModule } from '@bancolombia/design-system-web/bc-transaction-status';
import { BcLinkModule } from '@bancolombia/design-system-web/bc-link';
import * as i0 from "@angular/core";
export class BcInlineAlertModule {
}
BcInlineAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInlineAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertModule, declarations: [BcInlineAlertComponent], imports: [BcLinkModule, BcIconButtonModule, BcTransactionStatusModule, CommonModule], exports: [BcInlineAlertComponent] });
BcInlineAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertModule, imports: [[BcLinkModule, BcIconButtonModule, BcTransactionStatusModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInlineAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInlineAlertComponent],
                    imports: [BcLinkModule, BcIconButtonModule, BcTransactionStatusModule, CommonModule],
                    exports: [BcInlineAlertComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5saW5lLWFsZXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbmxpbmUtYWxlcnQvYmMtaW5saW5lLWFsZXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNuRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0FBTXRFLE1BQU0sT0FBTyxtQkFBbUI7O2dIQUFuQixtQkFBbUI7aUhBQW5CLG1CQUFtQixpQkFKYixzQkFBc0IsYUFDM0IsWUFBWSxFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLFlBQVksYUFDekUsc0JBQXNCO2lIQUV2QixtQkFBbUIsWUFIbkIsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxDQUFDOzJGQUczRSxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxZQUFZLENBQUM7b0JBQ3BGLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmNJbmxpbmVBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYmMtaW5saW5lLWFsZXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY0ljb25CdXR0b25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaWNvbi1idXR0b24nO1xuaW1wb3J0IHsgQmNUcmFuc2FjdGlvblN0YXR1c01vZHVsZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy10cmFuc2FjdGlvbi1zdGF0dXMnO1xuaW1wb3J0IHsgQmNMaW5rTW9kdWxlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWxpbmsnO1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtCY0lubGluZUFsZXJ0Q29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQmNMaW5rTW9kdWxlLCBCY0ljb25CdXR0b25Nb2R1bGUsIEJjVHJhbnNhY3Rpb25TdGF0dXNNb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0JjSW5saW5lQWxlcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5saW5lQWxlcnRNb2R1bGUgeyB9XG4iXX0=