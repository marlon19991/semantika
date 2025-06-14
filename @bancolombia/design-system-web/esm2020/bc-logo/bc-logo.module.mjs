import { NgModule } from '@angular/core';
import { BcConfigLogoModule } from './bc-config-logo-module';
import { BcLogoComponent } from './bc-logo-component/bc-logo.component';
import * as i0 from "@angular/core";
export class BcLogoModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcLogoModule,
            providers: [{ provide: BcConfigLogoModule, useValue: conf }],
        };
    }
}
BcLogoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcLogoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoModule, declarations: [BcLogoComponent], exports: [BcLogoComponent] });
BcLogoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcLogoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcLogoComponent
                    ],
                    imports: [],
                    exports: [BcLogoComponent]
                }]
        }] });
const defaultConfig = new BcConfigLogoModule();
defaultConfig.path = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbG9nby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtbG9nby9iYy1sb2dvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBU3hFLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBMkIsYUFBYTtRQUNyRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzdELENBQUM7SUFDSixDQUFDOzt5R0FOVSxZQUFZOzBHQUFaLFlBQVksaUJBTHJCLGVBQWUsYUFHUCxlQUFlOzBHQUVkLFlBQVksWUFIZCxFQUFFOzJGQUdBLFlBQVk7a0JBUHhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0I7O0FBVUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0FBQy9DLGFBQWEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjQ29uZmlnTG9nb01vZHVsZSB9IGZyb20gJy4vYmMtY29uZmlnLWxvZ28tbW9kdWxlJztcbmltcG9ydCB7IEJjTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vYmMtbG9nby1jb21wb25lbnQvYmMtbG9nby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCY0xvZ29Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtCY0xvZ29Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJjTG9nb01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmY6IEJjQ29uZmlnTG9nb01vZHVsZSA9IGRlZmF1bHRDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJjTG9nb01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQmNMb2dvTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBCY0NvbmZpZ0xvZ29Nb2R1bGUsIHVzZVZhbHVlOiBjb25mIH1dLFxuICAgIH07XG4gIH1cbiB9XG5cbmNvbnN0IGRlZmF1bHRDb25maWcgPSBuZXcgQmNDb25maWdMb2dvTW9kdWxlKCk7XG5kZWZhdWx0Q29uZmlnLnBhdGggPSAnJzsiXX0=