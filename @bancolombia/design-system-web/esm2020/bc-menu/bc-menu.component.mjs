import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { BcMenuBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Componente menú
 *
 * @export
 * @class BcMenuComponent
 * @implements {AfterViewInit}
 */
export class BcMenuComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Estado inicial del menu, determina si inicia plegado o desplegado
         *
         * @memberof BcMenuComponent
         */
        this.state = 'open';
        /**
         * Id del elemento
         *
         * @memberof BcMenuComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Permite ocultar el perfil del usuario en el submenu cuando está en mobile.
         *
         * @memberof BcMenuComponent
         */
        this.hideProfileInSubmenu = false;
        /**
         * Permite setear el nombre del usuario y la url para la actualización de datos (opcional)
         *
         * @memberof BcMenuComponent
         */
        this.profileData = { user: '', updateUserDataUrl: '' };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.bcMenuBehavior = new BcMenuBehavior();
        if (this.config != undefined) {
            this.generateMenu();
        }
        else {
            this.bcMenuBehavior.setId(this.componentId);
            this.bcMenuBehavior.setLogoutEvent(this.logoutFunction);
            this.setProfileData();
            this.bcMenuBehavior.setUp();
        }
    }
    /**
     * Genera el menú apartir de la configuración
     *
     * @memberof BcMenuComponent
     */
    generateMenu() {
        this.bcMenuBehavior.generateByConfig(this.config, this.byConfig.nativeElement);
    }
    setProfileData() {
        if (this.profileData.user !== '') {
            this.bcMenuBehavior.profileData = this.profileData;
        }
    }
}
BcMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcMenuComponent, selector: "bc-menu", inputs: { config: "config", state: "state", componentId: "componentId", logoutFunction: "logoutFunction", hideProfileInSubmenu: "hideProfileInSubmenu", profileData: "profileData" }, viewQueries: [{ propertyName: "byConfig", first: true, predicate: ["byConfig"], descendants: true, static: true }], ngImport: i0, template: "<div [id]=\"componentId\" class=\"bc-menu-global-container\" [attr.state]=\"state\">\n    <div class=\"bc-menu\">\n        <ng-container *ngIf=\"config === undefined\">\n            <ng-content select=\"bc-menu-drawer\">\n            </ng-content>\n            <ng-content select=\"bc-menu-main\">\n            </ng-content>\n        </ng-container>\n    </div>\n    <div class=\"bc-content bc-container-solid bc-bg-light\">\n        <ng-content select=\".bc-content-body\"></ng-content>\n    </div>\n</div>\n<div #byConfig>\n\n</div>", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [id]=\"componentId\" class=\"bc-menu-global-container\" [attr.state]=\"state\">\n    <div class=\"bc-menu\">\n        <ng-container *ngIf=\"config === undefined\">\n            <ng-content select=\"bc-menu-drawer\">\n            </ng-content>\n            <ng-content select=\"bc-menu-main\">\n            </ng-content>\n        </ng-container>\n    </div>\n    <div class=\"bc-content bc-container-solid bc-bg-light\">\n        <ng-content select=\".bc-content-body\"></ng-content>\n    </div>\n</div>\n<div #byConfig>\n\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { config: [{
                type: Input
            }], state: [{
                type: Input
            }], componentId: [{
                type: Input
            }], logoutFunction: [{
                type: Input
            }], hideProfileInSubmenu: [{
                type: Input
            }], profileData: [{
                type: Input
            }], byConfig: [{
                type: ViewChild,
                args: ['byConfig', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtbWVudS9iYy1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1tZW51L2JjLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUE2Qix1QkFBdUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFRdEU7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLGVBQWU7SUEwQzFCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQW5DcEQ7Ozs7V0FJRztRQUNRLFVBQUssR0FBcUIsTUFBTSxDQUFDO1FBQzVDOzs7O1dBSUc7UUFDTSxnQkFBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBT3hEOzs7O1dBSUc7UUFDTSx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDdEM7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQXNCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQU12QixDQUFDO0lBRXhELFFBQVEsS0FBVSxDQUFDO0lBRW5CLGVBQWU7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVk7UUFDVixJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs0R0F2RVUsZUFBZTtnR0FBZixlQUFlLHlWQ3JCNUIsd2hCQWVNOzJGRE1PLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsU0FBUyxtQkFFRix1QkFBdUIsQ0FBQyxNQUFNO3NHQVF0QyxNQUFNO3NCQUFkLEtBQUs7Z0JBTUssS0FBSztzQkFBYixLQUFLO2dCQU1DLFdBQVc7c0JBQW5CLEtBQUs7Z0JBTUcsY0FBYztzQkFBdEIsS0FBSztnQkFNRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBTUcsV0FBVztzQkFBbkIsS0FBSztnQkFFbUMsUUFBUTtzQkFBaEQsU0FBUzt1QkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY01lbnVCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmNNZW51UHJvZmlsZURhdGEge1xuICB1c2VyOiBzdHJpbmc7XG4gIHVwZGF0ZVVzZXJEYXRhVXJsPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIENvbXBvbmVudGUgbWVuw7pcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQmNNZW51Q29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJjTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDb25maWd1cmFjacOzbiBkZWwgbWVuw7pcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29uZmlnO1xuICAvKipcbiAgICogRXN0YWRvIGluaWNpYWwgZGVsIG1lbnUsIGRldGVybWluYSBzaSBpbmljaWEgcGxlZ2FkbyBvIGRlc3BsZWdhZG9cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTWVudUNvbXBvbmVudFxuICAgKi9cbiAgICBASW5wdXQoKSBzdGF0ZTogJ29wZW4nIHwgJ2Nsb3NlJyA9ICdvcGVuJztcbiAgLyoqXG4gICAqIElkIGRlbCBlbGVtZW50b1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNNZW51Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZCA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuICAvKipcbiAgICogRXZlbnRvIHBhcmEgZWwgYm90w7NuIGRlIGNlcnJhciBzZXNpw7NuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY01lbnVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGxvZ291dEZ1bmN0aW9uOiAocGFyYW0/OiBhbnkpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBQZXJtaXRlIG9jdWx0YXIgZWwgcGVyZmlsIGRlbCB1c3VhcmlvIGVuIGVsIHN1Ym1lbnUgY3VhbmRvIGVzdMOhIGVuIG1vYmlsZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaGlkZVByb2ZpbGVJblN1Ym1lbnUgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFBlcm1pdGUgc2V0ZWFyIGVsIG5vbWJyZSBkZWwgdXN1YXJpbyB5IGxhIHVybCBwYXJhIGxhIGFjdHVhbGl6YWNpw7NuIGRlIGRhdG9zIChvcGNpb25hbClcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTWVudUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgcHJvZmlsZURhdGE6IEJjTWVudVByb2ZpbGVEYXRhID0geyB1c2VyOiAnJywgdXBkYXRlVXNlckRhdGFVcmw6ICcnIH07XG5cbiAgQFZpZXdDaGlsZCgnYnlDb25maWcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBieUNvbmZpZzogRWxlbWVudFJlZjtcblxuICBiY01lbnVCZWhhdmlvcjogQmNNZW51QmVoYXZpb3I7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmNNZW51QmVoYXZpb3IgPSBuZXcgQmNNZW51QmVoYXZpb3IoKTtcbiAgICBpZiAodGhpcy5jb25maWcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJjTWVudUJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgICAgdGhpcy5iY01lbnVCZWhhdmlvci5zZXRMb2dvdXRFdmVudCh0aGlzLmxvZ291dEZ1bmN0aW9uKTtcbiAgICAgIHRoaXMuc2V0UHJvZmlsZURhdGEoKTtcbiAgICAgIHRoaXMuYmNNZW51QmVoYXZpb3Iuc2V0VXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhIGVsIG1lbsO6IGFwYXJ0aXIgZGUgbGEgY29uZmlndXJhY2nDs25cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjTWVudUNvbXBvbmVudFxuICAgKi9cbiAgZ2VuZXJhdGVNZW51KCkge1xuICAgIHRoaXMuYmNNZW51QmVoYXZpb3IuZ2VuZXJhdGVCeUNvbmZpZyh0aGlzLmNvbmZpZywgdGhpcy5ieUNvbmZpZy5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHNldFByb2ZpbGVEYXRhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2ZpbGVEYXRhLnVzZXIgIT09ICcnKSB7XG4gICAgICB0aGlzLmJjTWVudUJlaGF2aW9yLnByb2ZpbGVEYXRhID0gdGhpcy5wcm9maWxlRGF0YTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgW2lkXT1cImNvbXBvbmVudElkXCIgY2xhc3M9XCJiYy1tZW51LWdsb2JhbC1jb250YWluZXJcIiBbYXR0ci5zdGF0ZV09XCJzdGF0ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJiYy1tZW51XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgPT09IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmMtbWVudS1kcmF3ZXJcIj5cbiAgICAgICAgICAgIDwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJjLW1lbnUtbWFpblwiPlxuICAgICAgICAgICAgPC9uZy1jb250ZW50PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmMtY29udGVudCBiYy1jb250YWluZXItc29saWQgYmMtYmctbGlnaHRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmJjLWNvbnRlbnQtYm9keVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiAjYnlDb25maWc+XG5cbjwvZGl2PiJdfQ==