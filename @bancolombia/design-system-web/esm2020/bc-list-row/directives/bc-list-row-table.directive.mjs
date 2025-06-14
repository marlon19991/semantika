import { Directive, HostBinding, Input } from '@angular/core';
import { BcListRowBehavior } from '@bancolombia/design-system-behaviors';
import { BC_LIST_ROW_TABLE } from './bc-list-row-constants';
import * as i0 from "@angular/core";
/**
 * Aplica el comportamiento del bc-list-row
 *
 * @export
 * @class BcListRowTableDirective
 */
export class BcListRowTableDirective {
    constructor(element) {
        this.element = element;
        /**
          * Propiedad que almacena el valor de la clase `bc-list-row-table` por defecto
          * @type  `BcListRowBehavior`
          * @memberof BcListRowTableDirective
        */
        this.defaultClass = BC_LIST_ROW_TABLE;
        /**
          * Propiedad que permite capturar otras clases ingresadas desde el atributo class
          * @type `string`
          * @memberof BcListRowTableDirective
          */
        this.class = '';
        this.bcListRowBehavior = new BcListRowBehavior();
    }
    /**
      * Getter que permite agregar todas las clases ajustadas en la directiva
      * @type `string`
      * @memberof BcListRowTableDirective
      */
    get hostClasses() {
        return [
            this.defaultClass,
            this.class
        ].join(' ');
    }
    ngAfterViewInit() {
        this.bcListRowBehavior.setElement(this.element.nativeElement);
        this.bcListRowBehavior.setUp();
    }
}
BcListRowTableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowTableDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BcListRowTableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcListRowTableDirective, selector: "[bc-list-row-table]", inputs: { class: "class" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowTableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-list-row-table]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { class: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtbGlzdC1yb3ctdGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWxpc3Qtcm93L2RpcmVjdGl2ZXMvYmMtbGlzdC1yb3ctdGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTVEOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLHVCQUF1QjtJQW1DbEMsWUFBb0IsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUExQnBEOzs7O1VBSUU7UUFDTSxpQkFBWSxHQUFXLGlCQUFpQixDQUFDO1FBRWpEOzs7O1lBSUk7UUFDSyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBZTFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQWREOzs7O1FBSUk7SUFDSixJQUEwQixXQUFXO1FBQ25DLE9BQU87WUFDSCxJQUFJLENBQUMsWUFBWTtZQUNqQixJQUFJLENBQUMsS0FBSztTQUNiLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQU1ELGVBQWU7UUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7O29IQTFDVSx1QkFBdUI7d0dBQXZCLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQUhuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDO2lHQXNCVSxLQUFLO3NCQUFiLEtBQUs7Z0JBT29CLFdBQVc7c0JBQXBDLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0xpc3RSb3dCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCQ19MSVNUX1JPV19UQUJMRSB9IGZyb20gJy4vYmMtbGlzdC1yb3ctY29uc3RhbnRzJztcblxuLyoqXG4gKiBBcGxpY2EgZWwgY29tcG9ydGFtaWVudG8gZGVsIGJjLWxpc3Qtcm93XG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjTGlzdFJvd1RhYmxlRGlyZWN0aXZlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYy1saXN0LXJvdy10YWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIEJjTGlzdFJvd1RhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLyoqXG4gICAgKiBQcm9waWVkYWQgZGVjbGFyYWRhIHBhcmEgaW5pY2lhbGl6YXIgbGEgaW5zdGFuY2lhIGRlbCBjb21wb3J0YW1pZW50byBkZWwgY29tcG9uZW50ZSBiYy1saXN0LXJvd1xuICAgICogQHR5cGUgIGBCY0xpc3RSb3dCZWhhdmlvcmBcbiAgICAqIEBtZW1iZXJvZiBCY0xpc3RSb3dUYWJsZURpcmVjdGl2ZVxuICAqL1xuICBiY0xpc3RSb3dCZWhhdmlvcjogQmNMaXN0Um93QmVoYXZpb3I7XG5cbiAgLyoqXG4gICAgKiBQcm9waWVkYWQgcXVlIGFsbWFjZW5hIGVsIHZhbG9yIGRlIGxhIGNsYXNlIGBiYy1saXN0LXJvdy10YWJsZWAgcG9yIGRlZmVjdG9cbiAgICAqIEB0eXBlICBgQmNMaXN0Um93QmVoYXZpb3JgXG4gICAgKiBAbWVtYmVyb2YgQmNMaXN0Um93VGFibGVEaXJlY3RpdmVcbiAgKi9cbiAgcHJpdmF0ZSBkZWZhdWx0Q2xhc3M6IHN0cmluZyA9IEJDX0xJU1RfUk9XX1RBQkxFO1xuXG4gIC8qKlxuICAgICogUHJvcGllZGFkIHF1ZSBwZXJtaXRlIGNhcHR1cmFyIG90cmFzIGNsYXNlcyBpbmdyZXNhZGFzIGRlc2RlIGVsIGF0cmlidXRvIGNsYXNzXG4gICAgKiBAdHlwZSBgc3RyaW5nYFxuICAgICogQG1lbWJlcm9mIEJjTGlzdFJvd1RhYmxlRGlyZWN0aXZlXG4gICAgKi9cbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgICogR2V0dGVyIHF1ZSBwZXJtaXRlIGFncmVnYXIgdG9kYXMgbGFzIGNsYXNlcyBhanVzdGFkYXMgZW4gbGEgZGlyZWN0aXZhXG4gICAgKiBAdHlwZSBgc3RyaW5nYFxuICAgICogQG1lbWJlcm9mIEJjTGlzdFJvd1RhYmxlRGlyZWN0aXZlXG4gICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuZGVmYXVsdENsYXNzLFxuICAgICAgICB0aGlzLmNsYXNzXG4gICAgXS5qb2luKCcgJyk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgdGhpcy5iY0xpc3RSb3dCZWhhdmlvciA9IG5ldyBCY0xpc3RSb3dCZWhhdmlvcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmNMaXN0Um93QmVoYXZpb3Iuc2V0RWxlbWVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5iY0xpc3RSb3dCZWhhdmlvci5zZXRVcCgpO1xuICB9XG59XG4iXX0=