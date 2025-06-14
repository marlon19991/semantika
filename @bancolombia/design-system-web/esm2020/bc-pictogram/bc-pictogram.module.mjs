import { BcPictogramComponent } from './bc-pictogram-component/bc-pictogram.component';
import { NgModule } from '@angular/core';
import { BcConfigPictogramModule } from './bc-config-pictogram-module';
import * as i0 from "@angular/core";
export class BcPictogramModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcPictogramModule,
            providers: [{ provide: BcConfigPictogramModule, useValue: conf }],
        };
    }
}
BcPictogramModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcPictogramModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramModule, declarations: [BcPictogramComponent], exports: [BcPictogramComponent] });
BcPictogramModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPictogramModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcPictogramComponent
                    ],
                    imports: [],
                    exports: [BcPictogramComponent]
                }]
        }] });
const defaultConfig = new BcConfigPictogramModule();
defaultConfig.path = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGljdG9ncmFtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1waWN0b2dyYW0vYmMtcGljdG9ncmFtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWdDLGFBQWE7UUFDMUQsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ2xFLENBQUM7SUFDSixDQUFDOzs4R0FOVSxpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFMMUIsb0JBQW9CLGFBR1osb0JBQW9COytHQUVuQixpQkFBaUIsWUFIbkIsRUFBRTsyRkFHQSxpQkFBaUI7a0JBUDdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2hDOztBQVVELE1BQU0sYUFBYSxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztBQUNwRCxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJjUGljdG9ncmFtQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1waWN0b2dyYW0tY29tcG9uZW50L2JjLXBpY3RvZ3JhbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjQ29uZmlnUGljdG9ncmFtTW9kdWxlIH0gZnJvbSAnLi9iYy1jb25maWctcGljdG9ncmFtLW1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJjUGljdG9ncmFtQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbQmNQaWN0b2dyYW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJjUGljdG9ncmFtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZjogQmNDb25maWdQaWN0b2dyYW1Nb2R1bGUgPSBkZWZhdWx0Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxCY1BpY3RvZ3JhbU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQmNQaWN0b2dyYW1Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEJjQ29uZmlnUGljdG9ncmFtTW9kdWxlLCB1c2VWYWx1ZTogY29uZiB9XSxcbiAgICB9O1xuICB9XG4gfVxuXG5jb25zdCBkZWZhdWx0Q29uZmlnID0gbmV3IEJjQ29uZmlnUGljdG9ncmFtTW9kdWxlKCk7XG5kZWZhdWx0Q29uZmlnLnBhdGggPSAnJztcbiJdfQ==