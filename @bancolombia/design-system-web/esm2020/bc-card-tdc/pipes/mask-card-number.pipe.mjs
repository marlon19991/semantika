import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MaskCardNumberPipe {
    transform(value) {
        return `*${value.slice(-4)}`;
    }
}
MaskCardNumberPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: MaskCardNumberPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
MaskCardNumberPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: MaskCardNumberPipe, name: "maskCardNumber" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: MaskCardNumberPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'maskCardNumber'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay1jYXJkLW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhcmQtdGRjL3BpcGVzL21hc2stY2FyZC1udW1iZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixTQUFTLENBQ1AsS0FBYTtRQUViLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQixDQUFDOzsrR0FMVSxrQkFBa0I7NkdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdtYXNrQ2FyZE51bWJlcidcbn0pXG5leHBvcnQgY2xhc3MgTWFza0NhcmROdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogc3RyaW5nLFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBgKiR7dmFsdWUuc2xpY2UoLTQpfWA7XG4gIH1cbn1cbiJdfQ==