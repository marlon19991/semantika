import { BcStrokeComponent } from './bc-stroke-component/bc-stroke.component';
import { NgModule } from '@angular/core';
import { BcConfigStrokeModule } from './bc-config-stroke-module';
import * as i0 from "@angular/core";
export class BcStrokeModule {
    static forRoot(conf = defaultConfig) {
        return {
            ngModule: BcStrokeModule,
            providers: [{ provide: BcConfigStrokeModule, useValue: conf }],
        };
    }
}
BcStrokeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcStrokeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeModule, declarations: [BcStrokeComponent], exports: [BcStrokeComponent] });
BcStrokeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcStrokeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcStrokeComponent
                    ],
                    imports: [],
                    exports: [BcStrokeComponent]
                }]
        }] });
const defaultConfig = new BcConfigStrokeModule();
defaultConfig.path = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc3Ryb2tlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zdHJva2UvYmMtc3Ryb2tlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFTakUsTUFBTSxPQUFPLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUE2QixhQUFhO1FBQ3ZELE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDL0QsQ0FBQztJQUNKLENBQUM7OzJHQU5VLGNBQWM7NEdBQWQsY0FBYyxpQkFMdkIsaUJBQWlCLGFBR1QsaUJBQWlCOzRHQUVoQixjQUFjLFlBSGhCLEVBQUU7MkZBR0EsY0FBYztrQkFQMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0I7O0FBVUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQ2pELGFBQWEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmNTdHJva2VDb21wb25lbnQgfSBmcm9tICcuL2JjLXN0cm9rZS1jb21wb25lbnQvYmMtc3Ryb2tlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNDb25maWdTdHJva2VNb2R1bGUgfSBmcm9tICcuL2JjLWNvbmZpZy1zdHJva2UtbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmNTdHJva2VDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtCY1N0cm9rZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQmNTdHJva2VNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25mOiBCY0NvbmZpZ1N0cm9rZU1vZHVsZSA9IGRlZmF1bHRDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJjU3Ryb2tlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCY1N0cm9rZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQmNDb25maWdTdHJva2VNb2R1bGUsIHVzZVZhbHVlOiBjb25mIH1dLFxuICAgIH07XG4gIH1cbiB9XG5cbmNvbnN0IGRlZmF1bHRDb25maWcgPSBuZXcgQmNDb25maWdTdHJva2VNb2R1bGUoKTtcbmRlZmF1bHRDb25maWcucGF0aCA9ICcnO1xuXG4iXX0=