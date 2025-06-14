import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BcExpansionPanelBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Importa el expansion panel  con los diseños de Bancolombia S.A.
 * Sirve para mostrar pequeños datos sobre un producto o una transacción.
 * @export
 * @class BcExpansionPanelComponent
 * @implements {AfterViewInit}
 */
export class BcExpansionPanelComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento.
         *
         * @type {string}
         * @memberof BcfooterComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Evento que se ejecuta cuando se expande.
         *
         * @type {EventEmitter}
         * @memberof BcExpansionPanelComponent
         */
        this.expanded = new EventEmitter();
        /**
         * Evento que se ejecuta cuando se contrae.
         *
         * @type {EventEmitter}
         * @memberof BcExpansionPanelComponent
         */
        this.contracted = new EventEmitter();
        this.bcExpansionPanelBehavior = new BcExpansionPanelBehavior();
    }
    ngAfterViewInit() {
        this.bcExpansionPanelBehavior.setId(this.componentId);
        this.bcExpansionPanelBehavior.setUp();
        this.bcExpansionPanelBehavior.on('expanded', () => {
            this.expanded.emit(null);
        });
        this.bcExpansionPanelBehavior.on('contracted', () => {
            this.contracted.emit(null);
        });
    }
}
BcExpansionPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcExpansionPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcExpansionPanelComponent, selector: "bc-expansion-panel", inputs: { componentId: "componentId" }, outputs: { expanded: "expanded", contracted: "contracted" }, ngImport: i0, template: "<div class=\"bc-expansion-panel\" [id]=\"componentId\">\n    <ng-content></ng-content>\n    <div class=\"bc-expansion-panel-footer\">\n        <em aria-hidden=\"true\" class=\"bc-icon bc-xs bc-expansion-footer-icon\">arrow-angle-double-dow</em>\n    </div>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-expansion-panel', template: "<div class=\"bc-expansion-panel\" [id]=\"componentId\">\n    <ng-content></ng-content>\n    <div class=\"bc-expansion-panel-footer\">\n        <em aria-hidden=\"true\" class=\"bc-icon bc-xs bc-expansion-footer-icon\">arrow-angle-double-dow</em>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], expanded: [{
                type: Output
            }], contracted: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1leHBhbnNpb24tcGFuZWwvYmMtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1leHBhbnNpb24tcGFuZWwvYmMtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFJaEY7Ozs7OztHQU1HO0FBTUgsTUFBTSxPQUFPLHlCQUF5QjtJQTRCcEMsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBMUJwRDs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEU7Ozs7O1dBS0c7UUFDTyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoRDs7Ozs7V0FLRztRQUNPLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBS2hELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7c0hBekNVLHlCQUF5QjswR0FBekIseUJBQXlCLCtKQ2pCdEMsMFFBS007MkZEWU8seUJBQXlCO2tCQUpyQyxTQUFTOytCQUNFLG9CQUFvQjtzR0FXckIsV0FBVztzQkFBbkIsS0FBSztnQkFRSSxRQUFRO3NCQUFqQixNQUFNO2dCQVFHLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNFeHBhbnNpb25QYW5lbEJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuXG4vKipcbiAqIEltcG9ydGEgZWwgZXhwYW5zaW9uIHBhbmVsICBjb24gbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIFNpcnZlIHBhcmEgbW9zdHJhciBwZXF1ZcOxb3MgZGF0b3Mgc29icmUgdW4gcHJvZHVjdG8gbyB1bmEgdHJhbnNhY2Npw7NuLlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjRXhwYW5zaW9uUGFuZWxDb21wb25lbnRcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWV4cGFuc2lvbi1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnYmMtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNFeHBhbnNpb25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIC8qKlxuICAgKiBJZCBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY2Zvb3RlckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBFdmVudG8gcXVlIHNlIGVqZWN1dGEgY3VhbmRvIHNlIGV4cGFuZGUuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG4gICAqIEBtZW1iZXJvZiBCY0V4cGFuc2lvblBhbmVsQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogRXZlbnRvIHF1ZSBzZSBlamVjdXRhIGN1YW5kbyBzZSBjb250cmFlLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuICAgKiBAbWVtYmVyb2YgQmNFeHBhbnNpb25QYW5lbENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGNvbnRyYWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBiY0V4cGFuc2lvblBhbmVsQmVoYXZpb3I7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSkge1xuICAgIHRoaXMuYmNFeHBhbnNpb25QYW5lbEJlaGF2aW9yID0gbmV3IEJjRXhwYW5zaW9uUGFuZWxCZWhhdmlvcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYmNFeHBhbnNpb25QYW5lbEJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuYmNFeHBhbnNpb25QYW5lbEJlaGF2aW9yLnNldFVwKCk7XG4gICAgdGhpcy5iY0V4cGFuc2lvblBhbmVsQmVoYXZpb3Iub24oJ2V4cGFuZGVkJywgKCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZC5lbWl0KG51bGwpO1xuICAgIH0pO1xuICAgIHRoaXMuYmNFeHBhbnNpb25QYW5lbEJlaGF2aW9yLm9uKCdjb250cmFjdGVkJywgKCkgPT4ge1xuICAgICAgdGhpcy5jb250cmFjdGVkLmVtaXQobnVsbCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJiYy1leHBhbnNpb24tcGFuZWxcIiBbaWRdPVwiY29tcG9uZW50SWRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImJjLWV4cGFuc2lvbi1wYW5lbC1mb290ZXJcIj5cbiAgICAgICAgPGVtIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmMtaWNvbiBiYy14cyBiYy1leHBhbnNpb24tZm9vdGVyLWljb25cIj5hcnJvdy1hbmdsZS1kb3VibGUtZG93PC9lbT5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==