import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BcShortcutComponent {
    constructor(elRef) {
        this.elRef = elRef;
        /**
         * Este valor de entrada define el tipo de shortcut.
         * Los valores permitidos [ single(default) | multiple | horizontal ]
         *
         * @type {string}
         * @memberof BcShortcutComponent
         */
        this.typeShortcut = 'single';
        /**
         * Nombre de la acción que describe el shortcut.
         *
         * @type {string}
         * @memberof BcShortcutComponent
         */
        this.text = 'Nombre de la acción';
        /**
         * Nombre del icono que identifica al shortcut.
         *
         * @type {string}
         * @memberof BcShortcutComponent
         */
        this.icon = 'help';
        /**
         * Permite indicar si el shortcut es nuevo.
         *
         * @type {boolean}
         * @memberof BcShortcutComponent
         */
        this.isNew = false;
        /**
         * Permite indicar si está deshabilitado
         *
         * @type {boolean}
         * @memberof BcShortcutComponent
         */
        this.isDisabled = false;
    }
    ngAfterViewInit() {
        this.overrideLinkClickEvent();
    }
    overrideLinkClickEvent() {
        const link = this.elRef.nativeElement.querySelector('a');
        if (!this.route) {
            link.addEventListener('click', (event) => event.preventDefault());
        }
    }
}
BcShortcutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcShortcutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcShortcutComponent, selector: "bc-shortcut", inputs: { typeShortcut: "typeShortcut", text: "text", icon: "icon", description: "description", route: "route", isNew: "isNew", isDisabled: "isDisabled" }, ngImport: i0, template: "<a aria-label=\"Boton\" class=\"bc-shortcut-{{isNew}} bc-shortcut-{{typeShortcut}} bc-shortcut-disabled-{{isDisabled}}\" \n    aria-hidden=\"true\" href=\"{{ route }}\" >\n  <em class=\"bc-icon bc-md\">{{ icon }}</em>\n  <div class=\"bc-shortcut-text\">\n    <label>{{ text }}</label>\n    <div *ngIf=\"description\">\n      <p>{{ description }}</p>\n    </div>\n    <div *ngIf=\"isNew\">\n      <p class=\"bc-shortcut-alert\">\u00A1Nuevo!</p>\n    </div>\n  </div>\n</a>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcShortcutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-shortcut', template: "<a aria-label=\"Boton\" class=\"bc-shortcut-{{isNew}} bc-shortcut-{{typeShortcut}} bc-shortcut-disabled-{{isDisabled}}\" \n    aria-hidden=\"true\" href=\"{{ route }}\" >\n  <em class=\"bc-icon bc-md\">{{ icon }}</em>\n  <div class=\"bc-shortcut-text\">\n    <label>{{ text }}</label>\n    <div *ngIf=\"description\">\n      <p>{{ description }}</p>\n    </div>\n    <div *ngIf=\"isNew\">\n      <p class=\"bc-shortcut-alert\">\u00A1Nuevo!</p>\n    </div>\n  </div>\n</a>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { typeShortcut: [{
                type: Input
            }], text: [{
                type: Input
            }], icon: [{
                type: Input
            }], description: [{
                type: Input
            }], route: [{
                type: Input
            }], isNew: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtc2hvcnRjdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXNob3J0Y3V0L2JjLXNob3J0Y3V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1zaG9ydGN1dC9iYy1zaG9ydGN1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU01RSxNQUFNLE9BQU8sbUJBQW1CO0lBMEQ5QixZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBekRyQzs7Ozs7O1dBTUc7UUFDTSxpQkFBWSxHQUF5QyxRQUFRLENBQUM7UUFFdkU7Ozs7O1dBS0c7UUFDTSxTQUFJLEdBQVcscUJBQXFCLENBQUM7UUFFOUM7Ozs7O1dBS0c7UUFDTSxTQUFJLEdBQVcsTUFBTSxDQUFDO1FBa0IvQjs7Ozs7V0FLRztRQUNNLFVBQUssR0FBWSxLQUFLLENBQUM7UUFFaEM7Ozs7O1dBS0c7UUFDTSxlQUFVLEdBQVksS0FBSyxDQUFDO0lBRUcsQ0FBQztJQUV6QyxlQUFlO1FBQ2IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLHNCQUFzQjtRQUMzQixNQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOztnSEFyRVUsbUJBQW1CO29HQUFuQixtQkFBbUIsK01DTmhDLHlkQVlJOzJGRE5TLG1CQUFtQjtrQkFKL0IsU0FBUzsrQkFDRSxhQUFhO2lHQVdkLFlBQVk7c0JBQXBCLEtBQUs7Z0JBUUcsSUFBSTtzQkFBWixLQUFLO2dCQVFHLElBQUk7c0JBQVosS0FBSztnQkFRRyxXQUFXO3NCQUFuQixLQUFLO2dCQVFHLEtBQUs7c0JBQWIsS0FBSztnQkFRRyxLQUFLO3NCQUFiLEtBQUs7Z0JBUUcsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtc2hvcnRjdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtc2hvcnRjdXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY1Nob3J0Y3V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBFc3RlIHZhbG9yIGRlIGVudHJhZGEgZGVmaW5lIGVsIHRpcG8gZGUgc2hvcnRjdXQuXG4gICAqIExvcyB2YWxvcmVzIHBlcm1pdGlkb3MgWyBzaW5nbGUoZGVmYXVsdCkgfCBtdWx0aXBsZSB8IGhvcml6b250YWwgXVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTaG9ydGN1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdHlwZVNob3J0Y3V0OiAnc2luZ2xlJyB8ICdtdWx0aXBsZScgfCAnaG9yaXpvbnRhbCcgPSAnc2luZ2xlJztcblxuICAvKipcbiAgICogTm9tYnJlIGRlIGxhIGFjY2nDs24gcXVlIGRlc2NyaWJlIGVsIHNob3J0Y3V0LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNTaG9ydGN1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJ05vbWJyZSBkZSBsYSBhY2Npw7NuJztcblxuICAvKipcbiAgICogTm9tYnJlIGRlbCBpY29ubyBxdWUgaWRlbnRpZmljYSBhbCBzaG9ydGN1dC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjU2hvcnRjdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICdoZWxwJztcblxuICAvKipcbiAgICogRGVzY3JpcGNpw7NuIGRlIGxhIGFjY2nDs24gZGVsIHNob3J0Y3V0IGVuIGNhc28gZGUgcXVlIGFwbGlxdWUuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1Nob3J0Y3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSdXRhIGhhY2lhIGRvbmRlIGRpcmlqZSBlbCBzaG9ydGN1dC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjU2hvcnRjdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBlcm1pdGUgaW5kaWNhciBzaSBlbCBzaG9ydGN1dCBlcyBudWV2by5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY1Nob3J0Y3V0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpc05ldzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQZXJtaXRlIGluZGljYXIgc2kgZXN0w6EgZGVzaGFiaWxpdGFkb1xuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjU2hvcnRjdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJyaWRlTGlua0NsaWNrRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZUxpbmtDbGlja0V2ZW50KCkge1xuICAgIGNvbnN0IGxpbms6IEhUTUxFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICBpZiAoIXRoaXMucm91dGUpIHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxhIGFyaWEtbGFiZWw9XCJCb3RvblwiIGNsYXNzPVwiYmMtc2hvcnRjdXQte3tpc05ld319IGJjLXNob3J0Y3V0LXt7dHlwZVNob3J0Y3V0fX0gYmMtc2hvcnRjdXQtZGlzYWJsZWQte3tpc0Rpc2FibGVkfX1cIiBcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiBocmVmPVwie3sgcm91dGUgfX1cIiA+XG4gIDxlbSBjbGFzcz1cImJjLWljb24gYmMtbWRcIj57eyBpY29uIH19PC9lbT5cbiAgPGRpdiBjbGFzcz1cImJjLXNob3J0Y3V0LXRleHRcIj5cbiAgICA8bGFiZWw+e3sgdGV4dCB9fTwvbGFiZWw+XG4gICAgPGRpdiAqbmdJZj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICA8cD57eyBkZXNjcmlwdGlvbiB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiaXNOZXdcIj5cbiAgICAgIDxwIGNsYXNzPVwiYmMtc2hvcnRjdXQtYWxlcnRcIj7CoU51ZXZvITwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2E+Il19