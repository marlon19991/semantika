import { CurrencyPipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FormatAmountPipe implements PipeTransform {
    private currencyPipe;
    constructor(currencyPipe: CurrencyPipe);
    transform(value: string): {
        int: string;
        decimal: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormatAmountPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FormatAmountPipe, "formatAmount">;
}
