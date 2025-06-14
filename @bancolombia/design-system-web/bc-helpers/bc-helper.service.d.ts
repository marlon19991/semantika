import * as i0 from "@angular/core";
interface Action {
    event?: Function;
    args?: [];
}
export declare class BcHelperService {
    getId(classRef: any): string;
    keyEvent(event: KeyboardEvent, action?: Action): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcHelperService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BcHelperService>;
}
export {};
