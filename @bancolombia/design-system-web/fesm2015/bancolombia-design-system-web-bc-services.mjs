import * as i0 from '@angular/core';
import { ViewContainerRef, Component, ViewChild, Injectable, Directive, NgModule } from '@angular/core';
import { Subject, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

class BcDialogContainerComponent {
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

/* istanbul ignore file */
class BcDialogRef {
    constructor(modalContainer, modal) {
        this.modalContainer = modalContainer;
        this.modal = modal;
        this.result = new Subject();
        this.modal.instance.modalInstance = this;
    }
    close(output) {
        this.result.next(output);
        this._destroy();
    }
    dismiss(output) {
        this.result.error(output);
        this._destroy();
    }
    onResult() {
        return this.result.asObservable();
    }
    _destroy() {
        this.modal.destroy();
        this.modalContainer.destroy();
        this.result.complete();
    }
}

/* istanbul ignore file */
class BcDialog {
    close(output) {
        this.modalInstance.close(output);
    }
    dismiss(output) {
        this.modalInstance.dismiss(output);
    }
}

class BcDialogService {
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

class BcDynamicHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
BcDynamicHostDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDynamicHostDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
BcDynamicHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcDynamicHostDirective, selector: "[bcBcDynamicHost]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcDynamicHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bcBcDynamicHost]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });

class BcDynamicHostService {
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

class BcServicesModule {
    static forRoot() {
        return {
            ngModule: BcServicesModule,
            providers: [BcDialogService, BcDynamicHostService],
        };
    }
}
BcServicesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcServicesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcServicesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcServicesModule, declarations: [BcDialogContainerComponent, BcDynamicHostDirective], imports: [CommonModule], exports: [BcDialogContainerComponent, BcDynamicHostDirective] });
BcServicesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcServicesModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcServicesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [BcDialogContainerComponent, BcDynamicHostDirective],
                    exports: [BcDialogContainerComponent, BcDynamicHostDirective]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcDialog, BcDialogContainerComponent, BcDialogRef, BcDialogService, BcDynamicHostDirective, BcDynamicHostService, BcServicesModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-services.mjs.map
