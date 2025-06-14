import { Component, Input, Output, EventEmitter, ViewChild, } from '@angular/core';
import { BcDropdownBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
export class BcTableDropdownComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Array con las opciones a mostrar en el submenú de opciones de cada fila.
         * Este Array es de tipo Options, es decir, cada elemento del array debe llevar la siguiente estructura:
         * {
         *  id: string;
         *  icon: string;
         *  text: string;
         * }
         *
         * @type {Array<Options>}
         * @memberof BcTableDropdownComponent
         */
        this.options = [];
        /**
         * Es la fila en la cual se encuentra el dropdown.
         *
         * @type {*}
         * @memberof BcTableDropdownComponent
         */
        this.row = null;
        /**
         * Se emite cuando alguna de las opciones del dropdown es seleccionada,
         * retornando el id de la opción y la respectiva fila.
         *
         * @type {EventEmitter<any>}
         * @memberof BcTableDropdownComponent
         */
        this.onChange = new EventEmitter();
        /**
         * Id del dropdown, se genera aleatoreamente.
         *
         * @memberof BcTableDropdownComponent
         */
        this.dropdownId = this.bcHelperService.getId(this);
        this.changed = new EventEmitter();
    }
    ngAfterViewInit() {
        this.overWriteClickEvent();
        this.dropdownContent = document.getElementById(`BcDropdown_${this.dropdownId}`);
    }
    /**
     * Update del behavior para el dropdown actual y clickItem
     *
     */
    eventEnterDropdown() {
        const dropBehavior = new BcDropdownBehavior();
        dropBehavior.setElement(this.dropdownContent);
        dropBehavior.setConfig({ isPopUp: true });
        dropBehavior.setUp();
        dropBehavior.toggleDropdown();
        this.clickItem();
    }
    overWriteClickEvent() {
        if (this.optionList) {
            for (const option of this.optionList.nativeElement.querySelectorAll('a')) {
                const opt = option;
                opt.onclick = () => this.selectOption(opt.getAttribute('id'));
            }
        }
    }
    ngOnChanges(changes) {
        if (changes && !changes.options['firstChange']) {
            setTimeout(() => {
                this.overWriteClickEvent();
                this.changed.emit();
            });
        }
    }
    /**
     * Se ejecuta cuando se selecciona una opción y emite un evento con el id de la opción y la respectiva fila.
     * @param optionId id del la opción seleccionada
     */
    selectOption(optionId) {
        this.onChange.emit({
            optionSeleted: optionId,
            rowData: this.row ? this.row : null,
            customData: this.data ? this.data : null,
        });
    }
    /**
     * Busca las celdas de clase action para verificar que no se sobrepongan al dropdown
     *
     */
    clickItem() {
        const testElement = this.dropdownContent.parentNode.parentNode;
        const tableElement = testElement.parentNode.parentNode;
        const cells = Array.from(tableElement.getElementsByClassName('bc-table-fixed-action-cell'));
        cells.forEach(element => {
            if (element == testElement) {
                element.style.zIndex = '1';
            }
            else {
                element.style.zIndex = '0';
            }
        });
    }
}
BcTableDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableDropdownComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcTableDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableDropdownComponent, selector: "bc-table-dropdown", inputs: { options: "options", row: "row", data: "data" }, outputs: { onChange: "onChange", changed: "changed" }, viewQueries: [{ propertyName: "optionList", first: true, predicate: ["optionList"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div (keyup.enter)=\"eventEnterDropdown()\" (keyup.space)=\"eventEnterDropdown()\" tabindex=\"0\" class=\"bc-dropdown\"\n  id=\"BcDropdown_{{dropdownId}}\" [attr.aria-angular]=\"true\">\n  <em (click)=\"clickItem()\" class=\"bc-dropdown-toggle bc-icon bc-sm\" [attr.aria-controls]=\"dropdownId\">\n    secondary-menu\n  </em>\n  <div class=\"bc-dropdown-content\" [id]=\"dropdownId\">\n    <ul #optionList>\n      <li tabindex=\"0\" class=\"bc-dropdown-item\" *ngFor=\"let option of options\">\n        <a class=\"bc-link\" [id]=\"option.id\">\n          <em class=\"bc-icon bc-sm\">{{option.icon}}</em>\n          <span>{{option.text}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n", directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-table-dropdown', template: "<div (keyup.enter)=\"eventEnterDropdown()\" (keyup.space)=\"eventEnterDropdown()\" tabindex=\"0\" class=\"bc-dropdown\"\n  id=\"BcDropdown_{{dropdownId}}\" [attr.aria-angular]=\"true\">\n  <em (click)=\"clickItem()\" class=\"bc-dropdown-toggle bc-icon bc-sm\" [attr.aria-controls]=\"dropdownId\">\n    secondary-menu\n  </em>\n  <div class=\"bc-dropdown-content\" [id]=\"dropdownId\">\n    <ul #optionList>\n      <li tabindex=\"0\" class=\"bc-dropdown-item\" *ngFor=\"let option of options\">\n        <a class=\"bc-link\" [id]=\"option.id\">\n          <em class=\"bc-icon bc-sm\">{{option.icon}}</em>\n          <span>{{option.text}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { options: [{
                type: Input
            }], row: [{
                type: Input
            }], data: [{
                type: Input
            }], onChange: [{
                type: Output
            }], optionList: [{
                type: ViewChild,
                args: ['optionList']
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFibGUtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXRhYmxlL2JjLXRhYmxlLWRyb3Bkb3duL2JjLXRhYmxlLWRyb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWJsZS9iYy10YWJsZS1kcm9wZG93bi9iYy10YWJsZS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUsxRSxNQUFNLE9BQU8sd0JBQXdCO0lBNkNuQyxZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUE1Q3BEOzs7Ozs7Ozs7OztXQVdHO1FBQ00sWUFBTyxHQUFtQixFQUFFLENBQUM7UUFDdEM7Ozs7O1dBS0c7UUFDTSxRQUFHLEdBQVEsSUFBSSxDQUFDO1FBUXpCOzs7Ozs7V0FNRztRQUNPLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRDs7OztXQUlHO1FBQ0gsZUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3BDLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNGLENBQUM7SUFDekQsZUFBZTtRQUNiLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQkFBa0I7UUFDaEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzlDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4RSxNQUFNLEdBQUcsR0FBRyxNQUFxQixDQUFDO2dCQUNsQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM5QyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxTQUFTO1FBQ1AsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBeUIsQ0FBQztRQUM5RSxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQXlCLENBQUM7UUFDdEUsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLENBQUMsQ0FBa0IsQ0FBQztRQUM3RyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RCLElBQUksT0FBTyxJQUFJLFdBQVcsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7cUhBNUdVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLHlTQ2pCckMsK3JCQWdCQTsyRkRDYSx3QkFBd0I7a0JBSnBDLFNBQVM7K0JBQ0UsbUJBQW1CO3NHQWdCcEIsT0FBTztzQkFBZixLQUFLO2dCQU9HLEdBQUc7c0JBQVgsS0FBSztnQkFPRyxJQUFJO3NCQUFaLEtBQUs7Z0JBUUksUUFBUTtzQkFBakIsTUFBTTtnQkFRa0IsVUFBVTtzQkFBbEMsU0FBUzt1QkFBQyxZQUFZO2dCQUNiLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNEcm9wZG93bkJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXRhYmxlLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLXRhYmxlLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNUYWJsZURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIEFycmF5IGNvbiBsYXMgb3BjaW9uZXMgYSBtb3N0cmFyIGVuIGVsIHN1Ym1lbsO6IGRlIG9wY2lvbmVzIGRlIGNhZGEgZmlsYS5cbiAgICogRXN0ZSBBcnJheSBlcyBkZSB0aXBvIE9wdGlvbnMsIGVzIGRlY2lyLCBjYWRhIGVsZW1lbnRvIGRlbCBhcnJheSBkZWJlIGxsZXZhciBsYSBzaWd1aWVudGUgZXN0cnVjdHVyYTpcbiAgICoge1xuICAgKiAgaWQ6IHN0cmluZztcbiAgICogIGljb246IHN0cmluZztcbiAgICogIHRleHQ6IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBAdHlwZSB7QXJyYXk8T3B0aW9ucz59XG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlRHJvcGRvd25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG9wdGlvbnM6IEFycmF5PE9wdGlvbnM+ID0gW107XG4gIC8qKlxuICAgKiBFcyBsYSBmaWxhIGVuIGxhIGN1YWwgc2UgZW5jdWVudHJhIGVsIGRyb3Bkb3duLlxuICAgKlxuICAgKiBAdHlwZSB7Kn1cbiAgICogQG1lbWJlcm9mIEJjVGFibGVEcm9wZG93bkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgcm93OiBhbnkgPSBudWxsO1xuICAvKipcbiAgICogRGF0YSBwZXJzb25hbGl6YWRhIHBvciBlbCB1c3VhcmlvLlxuICAgKlxuICAgKiBAdHlwZSB7Kn1cbiAgICogQG1lbWJlcm9mIEJjVGFibGVEcm9wZG93bkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZGF0YTogYW55O1xuICAvKipcbiAgICogU2UgZW1pdGUgY3VhbmRvIGFsZ3VuYSBkZSBsYXMgb3BjaW9uZXMgZGVsIGRyb3Bkb3duIGVzIHNlbGVjY2lvbmFkYSxcbiAgICogcmV0b3JuYW5kbyBlbCBpZCBkZSBsYSBvcGNpw7NuIHkgbGEgcmVzcGVjdGl2YSBmaWxhLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGFueT59XG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlRHJvcGRvd25Db21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKlxuICAgKiBJZCBkZWwgZHJvcGRvd24sIHNlIGdlbmVyYSBhbGVhdG9yZWFtZW50ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFibGVEcm9wZG93bkNvbXBvbmVudFxuICAgKi9cbiAgZHJvcGRvd25JZCA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuICBkcm9wZG93bkNvbnRlbnQ6IEhUTUxFbGVtZW50O1xuICBAVmlld0NoaWxkKCdvcHRpb25MaXN0Jykgb3B0aW9uTGlzdDogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7IH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcldyaXRlQ2xpY2tFdmVudCgpO1xuICAgIHRoaXMuZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYEJjRHJvcGRvd25fJHt0aGlzLmRyb3Bkb3duSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGRlbCBiZWhhdmlvciBwYXJhIGVsIGRyb3Bkb3duIGFjdHVhbCB5IGNsaWNrSXRlbVxuICAgKlxuICAgKi9cbiAgZXZlbnRFbnRlckRyb3Bkb3duKCkge1xuICAgIGNvbnN0IGRyb3BCZWhhdmlvciA9IG5ldyBCY0Ryb3Bkb3duQmVoYXZpb3IoKTtcbiAgICBkcm9wQmVoYXZpb3Iuc2V0RWxlbWVudCh0aGlzLmRyb3Bkb3duQ29udGVudCk7XG4gICAgZHJvcEJlaGF2aW9yLnNldENvbmZpZyh7IGlzUG9wVXA6IHRydWUgfSk7XG4gICAgZHJvcEJlaGF2aW9yLnNldFVwKCk7XG4gICAgZHJvcEJlaGF2aW9yLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgdGhpcy5jbGlja0l0ZW0oKTtcbiAgfVxuXG4gIHByaXZhdGUgb3ZlcldyaXRlQ2xpY2tFdmVudCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25MaXN0KSB7XG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbkxpc3QubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJykpIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gb3B0aW9uIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBvcHQub25jbGljayA9ICgpID0+IHRoaXMuc2VsZWN0T3B0aW9uKG9wdC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcyAmJiAhY2hhbmdlcy5vcHRpb25zWydmaXJzdENoYW5nZSddKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVyV3JpdGVDbGlja0V2ZW50KCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNlIGVqZWN1dGEgY3VhbmRvIHNlIHNlbGVjY2lvbmEgdW5hIG9wY2nDs24geSBlbWl0ZSB1biBldmVudG8gY29uIGVsIGlkIGRlIGxhIG9wY2nDs24geSBsYSByZXNwZWN0aXZhIGZpbGEuXG4gICAqIEBwYXJhbSBvcHRpb25JZCBpZCBkZWwgbGEgb3BjacOzbiBzZWxlY2Npb25hZGFcbiAgICovXG4gIHNlbGVjdE9wdGlvbihvcHRpb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgIG9wdGlvblNlbGV0ZWQ6IG9wdGlvbklkLFxuICAgICAgcm93RGF0YTogdGhpcy5yb3cgPyB0aGlzLnJvdyA6IG51bGwsXG4gICAgICBjdXN0b21EYXRhOiB0aGlzLmRhdGEgPyB0aGlzLmRhdGEgOiBudWxsLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1c2NhIGxhcyBjZWxkYXMgZGUgY2xhc2UgYWN0aW9uIHBhcmEgdmVyaWZpY2FyIHF1ZSBubyBzZSBzb2JyZXBvbmdhbiBhbCBkcm9wZG93blxuICAgKlxuICAgKi9cbiAgY2xpY2tJdGVtKCkge1xuICAgIGNvbnN0IHRlc3RFbGVtZW50ID0gdGhpcy5kcm9wZG93bkNvbnRlbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHRhYmxlRWxlbWVudCA9IHRlc3RFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjZWxscyA9IEFycmF5LmZyb20odGFibGVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JjLXRhYmxlLWZpeGVkLWFjdGlvbi1jZWxsJykpIGFzIEhUTUxFbGVtZW50W107XG4gICAgY2VsbHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09IHRlc3RFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSAnMCc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogSW50ZXJmYXogcGFyYSBsYXMgb3BjaW9uZXMgZGVsIGRyb3Bkb3duLlxuICpcbiAqIEBpbnRlcmZhY2UgT3B0aW9uc1xuICovXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIGlkPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuIiwiPGRpdiAoa2V5dXAuZW50ZXIpPVwiZXZlbnRFbnRlckRyb3Bkb3duKClcIiAoa2V5dXAuc3BhY2UpPVwiZXZlbnRFbnRlckRyb3Bkb3duKClcIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImJjLWRyb3Bkb3duXCJcbiAgaWQ9XCJCY0Ryb3Bkb3duX3t7ZHJvcGRvd25JZH19XCIgW2F0dHIuYXJpYS1hbmd1bGFyXT1cInRydWVcIj5cbiAgPGVtIChjbGljayk9XCJjbGlja0l0ZW0oKVwiIGNsYXNzPVwiYmMtZHJvcGRvd24tdG9nZ2xlIGJjLWljb24gYmMtc21cIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRyb3Bkb3duSWRcIj5cbiAgICBzZWNvbmRhcnktbWVudVxuICA8L2VtPlxuICA8ZGl2IGNsYXNzPVwiYmMtZHJvcGRvd24tY29udGVudFwiIFtpZF09XCJkcm9wZG93bklkXCI+XG4gICAgPHVsICNvcHRpb25MaXN0PlxuICAgICAgPGxpIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYmMtZHJvcGRvd24taXRlbVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPlxuICAgICAgICA8YSBjbGFzcz1cImJjLWxpbmtcIiBbaWRdPVwib3B0aW9uLmlkXCI+XG4gICAgICAgICAgPGVtIGNsYXNzPVwiYmMtaWNvbiBiYy1zbVwiPnt7b3B0aW9uLmljb259fTwvZW0+XG4gICAgICAgICAgPHNwYW4+e3tvcHRpb24udGV4dH19PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=