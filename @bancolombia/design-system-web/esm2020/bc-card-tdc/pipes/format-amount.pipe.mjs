import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FormatAmountPipe {
    constructor(currencyPipe) {
        this.currencyPipe = currencyPipe;
    }
    transform(value) {
        const [int, decimal] = (value.toString().split(',').join('').split('.').join(',')).split(',');
        return {
            int: (this.currencyPipe.transform(Math.trunc(+int), 'CUP', '', '0.0-0'))?.split(',').join('.'),
            decimal: decimal || '00'
        };
    }
}
FormatAmountPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: FormatAmountPipe, deps: [{ token: i1.CurrencyPipe }], target: i0.ɵɵFactoryTarget.Pipe });
FormatAmountPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: FormatAmountPipe, name: "formatAmount" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: FormatAmountPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'formatAmount'
                }]
        }], ctorParameters: function () { return [{ type: i1.CurrencyPipe }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWFtb3VudC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWNhcmQtdGRjL3BpcGVzL2Zvcm1hdC1hbW91bnQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBS3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBRWxELFNBQVMsQ0FDUCxLQUFhO1FBRWIsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUYsT0FBTztZQUNMLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDOUYsT0FBTyxFQUFFLE9BQU8sSUFBSSxJQUFJO1NBQ3pCLENBQUE7SUFDSCxDQUFDOzs2R0FaVSxnQkFBZ0I7MkdBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUg1QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxjQUFjO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2Zvcm1hdEFtb3VudCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0QW1vdW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVuY3lQaXBlOiBDdXJyZW5jeVBpcGUpIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICk6IHtpbnQ6IHN0cmluZywgZGVjaW1hbDogc3RyaW5nfSB7XG4gICAgY29uc3QgW2ludCwgZGVjaW1hbF0gPSAodmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLCcpLmpvaW4oJycpLnNwbGl0KCcuJykuam9pbignLCcpKS5zcGxpdCgnLCcpO1xuICAgIHJldHVybiB7XG4gICAgICBpbnQ6ICh0aGlzLmN1cnJlbmN5UGlwZS50cmFuc2Zvcm0oTWF0aC50cnVuYygraW50KSwgJ0NVUCcsICcnLCAnMC4wLTAnKSk/LnNwbGl0KCcsJykuam9pbignLicpLFxuICAgICAgZGVjaW1hbDogZGVjaW1hbCB8fCAnMDAnXG4gICAgfVxuICB9XG59XG4iXX0=