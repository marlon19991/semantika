import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { BcPaginatorBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Componente paginador
 *
 * @export
 * @class BcPaginatorComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
export class BcPaginatorComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Tipo de paginador.
         * @type {string}
         * @memberof BcPaginatorComponent
         */
        this.type = '';
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberOf BcPaginatorComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Emitir número de página seleccionada.
         * @type {EventEmitter<number>}
         * @memberof BcPaginatorComponent
         */
        this.onChangePage = new EventEmitter(true);
        /**
        * Indica si es el primer cambio del componente
        * @type {boolean}
        * @memberof BcPaginatorComponent
        */
        this.firstChange = false;
    }
    ngOnInit() { }
    /**
     * Indica cambios generados en el componente
     * @memberof BcPaginatorComponent
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (this.firstChange) {
            this.bcPaginatorBehavior.getMySelf().innerHTML = '';
            setTimeout(() => {
                this.initPaginatorBehavior();
            });
        }
    }
    /**
     * Configuración del componente despues de cargar la vista
     * @memberof BcPaginatorComponent
     */
    ngAfterViewInit() {
        this.initPaginatorBehavior();
    }
    /**
     * Inicialización del paginador
     * @memberof BcPaginatorComponent
     */
    initPaginatorBehavior() {
        this.bcPaginatorBehavior = new BcPaginatorBehavior();
        this.bcPaginatorBehavior.setId(this.componentId);
        this.bcPaginatorBehavior.changeState = (param) => this.onChangePage.emit(param);
        this.bcPaginatorBehavior.setUp();
        this.firstChange = true;
    }
}
BcPaginatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcPaginatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPaginatorComponent, selector: "bc-paginator", inputs: { type: "type", componentId: "componentId", totalRegisters: "totalRegisters", perPage: "perPage", perMultiple: "perMultiple" }, outputs: { onChangePage: "onChangePage" }, usesOnChanges: true, ngImport: i0, template: "<nav\n  class=\"bc-paginator\"\n  [id]=\"componentId\"\n  role=\"navigation\"\n  aria-label=\"paginador\"\n  [attr.totalregisters]=\"totalRegisters\"\n  [attr.perpage]=\"perPage\"\n  [attr.multiple]=\"perMultiple\"\n  [attr.typepaginator]=\"type\"\n></nav>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-paginator', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav\n  class=\"bc-paginator\"\n  [id]=\"componentId\"\n  role=\"navigation\"\n  aria-label=\"paginador\"\n  [attr.totalregisters]=\"totalRegisters\"\n  [attr.perpage]=\"perPage\"\n  [attr.multiple]=\"perMultiple\"\n  [attr.typepaginator]=\"type\"\n></nav>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { type: [{
                type: Input
            }], componentId: [{
                type: Input
            }], totalRegisters: [{
                type: Input
            }], perPage: [{
                type: Input
            }], perMultiple: [{
                type: Input
            }], onChangePage: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wYWdpbmF0b3IvYmMtcGFnaW5hdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wYWdpbmF0b3IvYmMtcGFnaW5hdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFHM0U7Ozs7Ozs7R0FPRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7SUEyRC9CLFlBQ1UsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBMUQxQzs7OztXQUlHO1FBQ00sU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVuQjs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUF5QmhFOzs7O1dBSUc7UUFFSCxpQkFBWSxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQU1uRTs7OztVQUlFO1FBQ0gsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFJMUIsQ0FBQztJQUVKLFFBQVEsS0FBVyxDQUFDO0lBQ3BCOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1lBQ25ELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNEOzs7T0FHRztJQUNILHFCQUFxQjtRQUNuQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOztpSEE5RlUsb0JBQW9CO3FHQUFwQixvQkFBb0IsNFBDMUJqQyxvUUFVQTsyRkRnQmEsb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLGNBQWMsbUJBQ1AsdUJBQXVCLENBQUMsTUFBTTtzR0FVdEMsSUFBSTtzQkFBWixLQUFLO2dCQVFHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFRRyxPQUFPO3NCQUFmLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFRTixZQUFZO3NCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY1BhZ2luYXRvckJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuLyoqXG4gKiBDb21wb25lbnRlIHBhZ2luYWRvclxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1BhZ2luYXRvckNvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1wYWdpbmF0b3InLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXBhZ2luYXRvci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJjUGFnaW5hdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICAvKipcbiAgICogVGlwbyBkZSBwYWdpbmFkb3IuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBCY1BhZ2luYXRvckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBUb3RhbCBkZSByZWdpc3Ryb3MuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJPZiBCY1BhZ2luYXRvckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdG90YWxSZWdpc3RlcnM6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FudGlkYWQgZGUgcmVnaXN0cm9zIGEgbW9zdHJhciBwb3IgcMOhZ2luYS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIEJjUGFnaW5hdG9yQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBwZXJQYWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE3Dumx0aXBsbyBxdWUgc2UgdmEgdXNhciBwYXJhIG1vc3RyYXIgZWwgZHJvcGRvd24gcGVyUGFnZS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlck9mIEJjUGFnaW5hdG9yQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBwZXJNdWx0aXBsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFbWl0aXIgbsO6bWVybyBkZSBww6FnaW5hIHNlbGVjY2lvbmFkYS5cbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxudW1iZXI+fVxuICAgKiBAbWVtYmVyb2YgQmNQYWdpbmF0b3JDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZVBhZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KHRydWUpO1xuICAvKipcbiAgICogdmFyaWFibGUgcXVlIGhhY2UgcmVmZXJlbmNpYSBhbCBjb21wb3J0YW1pZW50byBuYXRpdm8gZGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjUGFnaW5hdG9yQ29tcG9uZW50XG4gICAqL1xuICBiY1BhZ2luYXRvckJlaGF2aW9yOiBhbnk7XG4gICAvKipcbiAgICogSW5kaWNhIHNpIGVzIGVsIHByaW1lciBjYW1iaW8gZGVsIGNvbXBvbmVudGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvckNvbXBvbmVudFxuICAgKi9cbiAgZmlyc3RDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuICAvKipcbiAgICogSW5kaWNhIGNhbWJpb3MgZ2VuZXJhZG9zIGVuIGVsIGNvbXBvbmVudGVcbiAgICogQG1lbWJlcm9mIEJjUGFnaW5hdG9yQ29tcG9uZW50XG4gICAqIEBwYXJhbSB7U2ltcGxlQ2hhbmdlc30gY2hhbmdlc1xuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmJjUGFnaW5hdG9yQmVoYXZpb3IuZ2V0TXlTZWxmKCkuaW5uZXJIVE1MID0gJydcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXRQYWdpbmF0b3JCZWhhdmlvcigpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENvbmZpZ3VyYWNpw7NuIGRlbCBjb21wb25lbnRlIGRlc3B1ZXMgZGUgY2FyZ2FyIGxhIHZpc3RhXG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvckNvbXBvbmVudFxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFBhZ2luYXRvckJlaGF2aW9yKCk7XG4gIH1cbiAgLyoqXG4gICAqIEluaWNpYWxpemFjacOzbiBkZWwgcGFnaW5hZG9yXG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvckNvbXBvbmVudFxuICAgKi9cbiAgaW5pdFBhZ2luYXRvckJlaGF2aW9yKCk6IHZvaWQge1xuICAgIHRoaXMuYmNQYWdpbmF0b3JCZWhhdmlvciA9IG5ldyBCY1BhZ2luYXRvckJlaGF2aW9yKCk7XG4gICAgdGhpcy5iY1BhZ2luYXRvckJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuYmNQYWdpbmF0b3JCZWhhdmlvci5jaGFuZ2VTdGF0ZSA9IChwYXJhbSkgPT4gdGhpcy5vbkNoYW5nZVBhZ2UuZW1pdChwYXJhbSk7XG4gICAgdGhpcy5iY1BhZ2luYXRvckJlaGF2aW9yLnNldFVwKCk7XG4gICAgdGhpcy5maXJzdENoYW5nZSA9IHRydWU7XG4gIH1cblxufSIsIjxuYXZcbiAgY2xhc3M9XCJiYy1wYWdpbmF0b3JcIlxuICBbaWRdPVwiY29tcG9uZW50SWRcIlxuICByb2xlPVwibmF2aWdhdGlvblwiXG4gIGFyaWEtbGFiZWw9XCJwYWdpbmFkb3JcIlxuICBbYXR0ci50b3RhbHJlZ2lzdGVyc109XCJ0b3RhbFJlZ2lzdGVyc1wiXG4gIFthdHRyLnBlcnBhZ2VdPVwicGVyUGFnZVwiXG4gIFthdHRyLm11bHRpcGxlXT1cInBlck11bHRpcGxlXCJcbiAgW2F0dHIudHlwZXBhZ2luYXRvcl09XCJ0eXBlXCJcbj48L25hdj5cbiJdfQ==