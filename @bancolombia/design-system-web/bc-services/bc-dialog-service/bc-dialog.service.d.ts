import { ComponentFactoryResolver, ApplicationRef, Type } from '@angular/core';
import { BcDialogRef } from './models/bc-dialog-ref/bc-dialog-ref.model';
import { BcDialog } from './models/bc-dialog/bc-dialog.model';
import * as i0 from "@angular/core";
export declare class BcDialogService {
    private componentFactoryResolver;
    private appRef;
    private modalContainer;
    private modalContainerFactory;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef);
    open<T extends BcDialog>(component: Type<T>, inputs?: any): BcDialogRef;
    private setupModalContainerDiv;
    private setupModalContainerFactory;
    closeEsc(modalRef: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BcDialogService>;
}
