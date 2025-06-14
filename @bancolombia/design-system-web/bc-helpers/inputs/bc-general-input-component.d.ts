import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class BcGeneralInputComponent implements ControlValueAccessor {
    data: any;
    isDisabled: boolean;
    value: any;
    onChange: (m: any) => void;
    onTouch: () => void;
    get model(): any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    set(value: any): void;
    addOrRemove(value: any): void;
    contains(value: any): boolean;
    private remove;
    private add;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcGeneralInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcGeneralInputComponent, "ng-component", never, { "data": "data"; }, {}, never, never>;
}
