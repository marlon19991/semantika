import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class BcDynamicHostService {
    constructor(cfr) {
        this.cfr = cfr;
    }
    forChild(vcr, cl) {
        return from(cl.loadChildren()).pipe(map((component) => this.cfr.resolveComponentFactory(component)), map(componentFactory => vcr.createComponent(componentFactory)));
    }
}
BcDynamicHostService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDynamicHostService, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Injectable });
BcDynamicHostService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDynamicHostService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDynamicHostService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZHluYW1pYy1ob3N0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2VydmljZXMvYmMtZHluYW1pYy1ob3N0LXNlcnZpY2UvYmMtZHluYW1pYy1ob3N0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFVBQVUsRUFHWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNckMsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFvQixHQUE2QjtRQUE3QixRQUFHLEdBQUgsR0FBRyxDQUEwQjtJQUFJLENBQUM7SUFFdEQsUUFBUSxDQUFDLEdBQXFCLEVBQUUsRUFBcUI7UUFDbkQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNqQyxHQUFHLENBQUMsQ0FBQyxTQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDcEUsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FDL0QsQ0FBQztJQUNKLENBQUM7O2lIQVZVLG9CQUFvQjtxSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07MkZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJjQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi9tb2RlbHMvYmMtY29tcG9uZW50LWxvYWRlci9iYy1jb21wb25lbnQtbG9hZGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmNEeW5hbWljSG9zdFNlcnZpY2Uge1xuXG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cblxuICBmb3JDaGlsZCh2Y3I6IFZpZXdDb250YWluZXJSZWYsIGNsOiBCY0NvbXBvbmVudExvYWRlcikge1xuICAgIHJldHVybiBmcm9tKGNsLmxvYWRDaGlsZHJlbigpKS5waXBlKFxuICAgICAgbWFwKChjb21wb25lbnQ6IGFueSkgPT4gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KSksXG4gICAgICBtYXAoY29tcG9uZW50RmFjdG9yeSA9PiB2Y3IuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==