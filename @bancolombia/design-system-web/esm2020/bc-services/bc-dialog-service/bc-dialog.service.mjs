import { Injectable, } from '@angular/core';
import { BcDialogContainerComponent } from './bc-dialog-container/bc-dialog-container.component';
import { BcDialogRef } from './models/bc-dialog-ref/bc-dialog-ref.model';
import * as i0 from "@angular/core";
export class BcDialogService {
    constructor(componentFactoryResolver, appRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.setupModalContainerFactory();
    }
    open(component, inputs) {
        this.setupModalContainerDiv(inputs);
        const modalContainerRef = this.appRef.bootstrap(this.modalContainerFactory, this.modalContainer);
        const modalComponentRef = modalContainerRef.instance.createModal(component);
        if (inputs) {
            modalComponentRef.instance.onInjectInputs(inputs);
        }
        const modalRef = new BcDialogRef(modalContainerRef, modalComponentRef);
        this.closeEsc(modalRef);
        return modalRef;
    }
    setupModalContainerDiv(inputs) {
        this.modalContainer = document.createElement('div');
        if (inputs && inputs.elementRef && inputs.insertBefore && document.getElementById(inputs.elementRef)) {
            document.getElementById(inputs.elementRef).before(this.modalContainer);
        }
        else if (inputs && inputs.elementRef && document.getElementById(inputs.elementRef)) {
            document.getElementById(inputs.elementRef).after(this.modalContainer);
        }
        else {
            document
                .getElementsByTagName('body')[0]
                .appendChild(this.modalContainer);
        }
    }
    setupModalContainerFactory() {
        this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(BcDialogContainerComponent);
    }
    closeEsc(modalRef) {
        document.body.addEventListener("keyup", (event) => {
            if (event.code === 'Escape') {
                modalRef.close('');
            }
        });
    }
}
BcDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDialogService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }], target: i0.ɵɵFactoryTarget.Injectable });
BcDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtc2VydmljZXMvYmMtZGlhbG9nLXNlcnZpY2UvYmMtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFVBQVUsR0FLWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNENBQTRDLENBQUM7O0FBR3pFLE1BQU0sT0FBTyxlQUFlO0lBSTFCLFlBQ1Usd0JBQWtELEVBQ2xELE1BQXNCO1FBRHRCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFFOUIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksQ0FBcUIsU0FBa0IsRUFBRSxNQUFZO1FBQ3ZELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUM3QyxJQUFJLENBQUMscUJBQXFCLEVBQzFCLElBQUksQ0FBQyxjQUFjLENBQ3BCLENBQUM7UUFFRixNQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUUsSUFBSSxNQUFNLEVBQUU7WUFDVixpQkFBaUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxNQUFXO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4RTthQUFNLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN2RTthQUFNO1lBQ0wsUUFBUTtpQkFDTCxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQy9CLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRU8sMEJBQTBCO1FBQ2hDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ2hGLDBCQUEwQixDQUMzQixDQUFDO0lBQ0osQ0FBQztJQUVBLFFBQVEsQ0FBQyxRQUFRO1FBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBUyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBQztnQkFDMUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNsQjtRQUNMLENBQUMsQ0FDQSxDQUFDO0lBQ0osQ0FBQzs7NEdBdkRVLGVBQWU7Z0hBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBBcHBsaWNhdGlvblJlZixcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0RpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYmMtZGlhbG9nLWNvbnRhaW5lci9iYy1kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY0RpYWxvZ1JlZiB9IGZyb20gJy4vbW9kZWxzL2JjLWRpYWxvZy1yZWYvYmMtZGlhbG9nLXJlZi5tb2RlbCc7XG5pbXBvcnQgeyBCY0RpYWxvZyB9IGZyb20gJy4vbW9kZWxzL2JjLWRpYWxvZy9iYy1kaWFsb2cubW9kZWwnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJjRGlhbG9nU2VydmljZSB7XG4gIHByaXZhdGUgbW9kYWxDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIG1vZGFsQ29udGFpbmVyRmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxCY0RpYWxvZ0NvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWZcbiAgKSB7XG4gICAgdGhpcy5zZXR1cE1vZGFsQ29udGFpbmVyRmFjdG9yeSgpO1xuICB9XG5cbiAgb3BlbjxUIGV4dGVuZHMgQmNEaWFsb2c+KGNvbXBvbmVudDogVHlwZTxUPiwgaW5wdXRzPzogYW55KTogQmNEaWFsb2dSZWYge1xuICAgIHRoaXMuc2V0dXBNb2RhbENvbnRhaW5lckRpdihpbnB1dHMpO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyUmVmID0gdGhpcy5hcHBSZWYuYm9vdHN0cmFwKFxuICAgICAgdGhpcy5tb2RhbENvbnRhaW5lckZhY3RvcnksXG4gICAgICB0aGlzLm1vZGFsQ29udGFpbmVyXG4gICAgKTtcblxuICAgIGNvbnN0IG1vZGFsQ29tcG9uZW50UmVmID0gbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UuY3JlYXRlTW9kYWwoY29tcG9uZW50KTtcblxuICAgIGlmIChpbnB1dHMpIHtcbiAgICAgIG1vZGFsQ29tcG9uZW50UmVmLmluc3RhbmNlLm9uSW5qZWN0SW5wdXRzKGlucHV0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kYWxSZWYgPSBuZXcgQmNEaWFsb2dSZWYobW9kYWxDb250YWluZXJSZWYsIG1vZGFsQ29tcG9uZW50UmVmKTtcbiAgICB0aGlzLmNsb3NlRXNjKG1vZGFsUmVmKVxuICAgIHJldHVybiBtb2RhbFJlZjtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBNb2RhbENvbnRhaW5lckRpdihpbnB1dHM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoaW5wdXRzICYmIGlucHV0cy5lbGVtZW50UmVmICYmIGlucHV0cy5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRzLmVsZW1lbnRSZWYpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dHMuZWxlbWVudFJlZikuYmVmb3JlKHRoaXMubW9kYWxDb250YWluZXIpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRzICYmIGlucHV0cy5lbGVtZW50UmVmICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0cy5lbGVtZW50UmVmKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRzLmVsZW1lbnRSZWYpLmFmdGVyKHRoaXMubW9kYWxDb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXVxuICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cE1vZGFsQ29udGFpbmVyRmFjdG9yeSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsQ29udGFpbmVyRmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgQmNEaWFsb2dDb250YWluZXJDb21wb25lbnRcbiAgICApO1xuICB9XG5cbiAgIGNsb3NlRXNjKG1vZGFsUmVmKXtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQ6YW55KSA9PntcbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJyl7ICBcbiAgICAgICAgbW9kYWxSZWYuY2xvc2UoJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgICk7XG4gIH1cblxufVxuIl19