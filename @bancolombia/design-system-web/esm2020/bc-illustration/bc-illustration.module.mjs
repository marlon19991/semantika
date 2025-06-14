import { NgModule } from '@angular/core';
import { BcConfigIllustrationModule } from './bc-config-illustration-module';
import { BcIllustrationComponent } from './bc-illustration-component/bc-illustration.component';
import * as i0 from "@angular/core";
export class BcIllustrationModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcIllustrationModule,
            providers: [{ provide: BcConfigIllustrationModule, useValue: conf }],
        };
    }
}
BcIllustrationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcIllustrationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationModule, declarations: [BcIllustrationComponent], exports: [BcIllustrationComponent] });
BcIllustrationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIllustrationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcIllustrationComponent
                    ],
                    imports: [],
                    exports: [BcIllustrationComponent]
                }]
        }] });
const defaultConfig = new BcConfigIllustrationModule();
defaultConfig.path = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaWxsdXN0cmF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbGx1c3RyYXRpb24vYmMtaWxsdXN0cmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7QUFTaEcsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQW1DLGFBQWE7UUFDN0QsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3JFLENBQUM7SUFDSixDQUFDOztpSEFOVSxvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFMN0IsdUJBQXVCLGFBR2YsdUJBQXVCO2tIQUV0QixvQkFBb0IsWUFIdEIsRUFBRTsyRkFHQSxvQkFBb0I7a0JBUGhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ25DOztBQVVELE1BQU0sYUFBYSxHQUFHLElBQUksMEJBQTBCLEVBQUUsQ0FBQztBQUN2RCxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0NvbmZpZ0lsbHVzdHJhdGlvbk1vZHVsZSB9IGZyb20gJy4vYmMtY29uZmlnLWlsbHVzdHJhdGlvbi1tb2R1bGUnO1xuaW1wb3J0IHsgQmNJbGx1c3RyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2JjLWlsbHVzdHJhdGlvbi1jb21wb25lbnQvYmMtaWxsdXN0cmF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJjSWxsdXN0cmF0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbQmNJbGx1c3RyYXRpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJjSWxsdXN0cmF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZjogQmNDb25maWdJbGx1c3RyYXRpb25Nb2R1bGUgPSBkZWZhdWx0Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxCY0lsbHVzdHJhdGlvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQmNJbGx1c3RyYXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEJjQ29uZmlnSWxsdXN0cmF0aW9uTW9kdWxlLCB1c2VWYWx1ZTogY29uZiB9XSxcbiAgICB9O1xuICB9XG4gfVxuXG5jb25zdCBkZWZhdWx0Q29uZmlnID0gbmV3IEJjQ29uZmlnSWxsdXN0cmF0aW9uTW9kdWxlKCk7XG5kZWZhdWx0Q29uZmlnLnBhdGggPSAnJzsiXX0=