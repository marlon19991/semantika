import { Component, ViewChild, ViewContainerRef, } from '@angular/core';
import * as i0 from "@angular/core";
export class BcDialogContainerComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    createModal(component) {
        this.modalContainer.clear();
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        return this.modalContainer.createComponent(factory, 0);
    }
}
BcDialogContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDialogContainerComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component });
BcDialogContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcDialogContainerComponent, selector: "ng-component", viewQueries: [{ propertyName: "modalContainer", first: true, predicate: ["modalContainer"], descendants: true, read: ViewContainerRef, static: true }], ngImport: i0, template: ` <ng-template #modalContainer></ng-template> `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDialogContainerComponent, decorators: [{
            type: Component,
            args: [{
                    template: ` <ng-template #modalContainer></ng-template> `,
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }]; }, propDecorators: { modalContainer: [{
                type: ViewChild,
                args: ['modalContainer', { read: ViewContainerRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2VydmljZXMvYmMtZGlhbG9nLXNlcnZpY2UvYmMtZGlhbG9nLWNvbnRhaW5lci9iYy1kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxnQkFBZ0IsR0FLakIsTUFBTSxlQUFlLENBQUM7O0FBTXZCLE1BQU0sT0FBTywwQkFBMEI7SUFJckMsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFBRyxDQUFDO0lBRTFFLFdBQVcsQ0FBcUIsU0FBa0I7UUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QixNQUFNLE9BQU8sR0FBd0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUN4RixTQUFTLENBQ1YsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O3VIQWRVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLGlKQUNBLGdCQUFnQiwyQ0FIM0MsK0NBQStDOzJGQUU5QywwQkFBMEI7a0JBSHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLCtDQUErQztpQkFDMUQ7K0dBR1MsY0FBYztzQkFEckIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgVHlwZSxcbiAgQ29tcG9uZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjRGlhbG9nIH0gZnJvbSAnLi4vbW9kZWxzL2JjLWRpYWxvZy9iYy1kaWFsb2cubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlICNtb2RhbENvbnRhaW5lcj48L25nLXRlbXBsYXRlPiBgLFxufSlcbmV4cG9ydCBjbGFzcyBCY0RpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBtb2RhbENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxuXG4gIGNyZWF0ZU1vZGFsPFQgZXh0ZW5kcyBCY0RpYWxvZz4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsZWFyKCk7XG5cbiAgICBjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBjb21wb25lbnRcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMubW9kYWxDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIDApO1xuICB9XG59XG4iXX0=