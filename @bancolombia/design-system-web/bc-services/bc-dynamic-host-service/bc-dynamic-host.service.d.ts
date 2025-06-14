import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BcComponentLoader } from './models/bc-component-loader/bc-component-loader.model';
import * as i0 from "@angular/core";
export declare class BcDynamicHostService {
    private cfr;
    constructor(cfr: ComponentFactoryResolver);
    forChild(vcr: ViewContainerRef, cl: BcComponentLoader): import("rxjs").Observable<import("@angular/core").ComponentRef<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcDynamicHostService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BcDynamicHostService>;
}
