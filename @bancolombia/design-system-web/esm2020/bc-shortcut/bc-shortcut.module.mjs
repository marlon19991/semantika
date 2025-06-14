import { NgModule } from '@angular/core';
import { BcShortcutComponent } from './bc-shortcut.component';
import { BcShortcutGroupComponent } from './bc-shortcut-group/bc-shortcut-group.component';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class BcShortcutModule {
}
BcShortcutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcShortcutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutModule, declarations: [BcShortcutComponent,
        BcShortcutGroupComponent], imports: [CommonModule,
        BcIconModule], exports: [BcShortcutComponent,
        BcShortcutGroupComponent] });
BcShortcutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutModule, imports: [[
            CommonModule,
            BcIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcShortcutComponent,
                        BcShortcutGroupComponent
                    ],
                    imports: [
                        CommonModule,
                        BcIconModule
                    ],
                    exports: [
                        BcShortcutComponent,
                        BcShortcutGroupComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2hvcnRjdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXNob3J0Y3V0L2JjLXNob3J0Y3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBZ0IvQyxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBWnpCLG1CQUFtQjtRQUNuQix3QkFBd0IsYUFHeEIsWUFBWTtRQUNaLFlBQVksYUFHWixtQkFBbUI7UUFDbkIsd0JBQXdCOzhHQUdmLGdCQUFnQixZQVRsQjtZQUNQLFlBQVk7WUFDWixZQUFZO1NBQ2I7MkZBTVUsZ0JBQWdCO2tCQWQ1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQix3QkFBd0I7cUJBQ3pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjU2hvcnRjdXRDb21wb25lbnQgfSBmcm9tICcuL2JjLXNob3J0Y3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY1Nob3J0Y3V0R3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2JjLXNob3J0Y3V0LWdyb3VwL2JjLXNob3J0Y3V0LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY0ljb25Nb2R1bGUgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaWNvbic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCY1Nob3J0Y3V0Q29tcG9uZW50LFxuICAgIEJjU2hvcnRjdXRHcm91cENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJjSWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQmNTaG9ydGN1dENvbXBvbmVudCxcbiAgICBCY1Nob3J0Y3V0R3JvdXBDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCY1Nob3J0Y3V0TW9kdWxlIHsgfVxuIl19