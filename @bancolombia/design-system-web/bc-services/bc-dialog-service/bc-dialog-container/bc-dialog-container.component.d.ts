import { ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { BcDialog } from '../models/bc-dialog/bc-dialog.model';
import * as i0 from "@angular/core";
export declare class BcDialogContainerComponent {
    private componentFactoryResolver;
    private modalContainer;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    createModal<T extends BcDialog>(component: Type<T>): ComponentRef<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcDialogContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcDialogContainerComponent, "ng-component", never, {}, {}, never, never>;
}
