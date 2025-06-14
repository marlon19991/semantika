import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BcTableDirective {
    constructor(el) {
        /**
         * Permite indicar si la tabla va a tener celdas para la selección de filas
         * Si el valor es true, entonces se inicializa el comportamiento para los checkbox
         * Por defecto es false.
         *
         * @memberof BcTableDirective
         */
        this.selection = false;
        /**
         * Permite indicar si la tabla será de tipo scroll, es decir, con columna fija y se puedan mostrar/ocultar columnas
         * Si el valor es true, entonces se pinta en la parte superior derecha el ícono de setting y se agrega la clase
         * Por defecto es false.
         *
         * @memberof BcTableDirective
         */
        this.scroll = false;
        /**
         * Permite indicar si la tabla será de tipo accordion, con contenedor vacio
         *
         * @memberof BcTableDirective
         */
        this.accordionEmpty = false;
        /**
         * Permite indicar si la tabla se podrá ordenar por columna
         *
         * @memberof BcTableDirective
         */
        this.sort = false;
        /**
         * Permite indicar si la tabla tiene acciones dropdown
         *
         * @memberof BcTableDirective
         */
        this.dropdownActions = false;
        /**
         * Permite indicar si la tabla tiene dropdowns en inicializados en el html
         *
         * @memberof BcTableDirective
         */
        this.dropdownHtml = false;
        /**
         * Permite indicar si la tabla tiene acciones en fila
         *
         * @memberof BcTableDirective
         */
        this.inlineActions = false;
        /**
         * Permite indicar si la no debería de ocultar los paginadores al momento de hacer una selección
         *
         * @memberof BcTableDirective
         */
        this.isNotHidePaginator = false;
        /**
         * Hace referencia al elemento sobre el cual actúa la directiva.
         *
         * @type {ElementRef}
         * @memberof BcTableDirective
         */
        this.pairPaginators = false;
        this.element = el;
        this.element.nativeElement.classList.add('bc-table');
    }
    ngAfterViewInit() {
        if (this.selection) {
            this.element.nativeElement.classList.add('bc-table-selection');
        }
        if (this.scroll) {
            this.element.nativeElement.classList.add('bc-table-scroll');
        }
        if (this.accordionEmpty) {
            this.element.nativeElement.classList.add('bc-table-empy-accordion');
        }
        if (this.sort) {
            this.element.nativeElement.classList.add('bc-table-sort');
        }
        if (this.dropdownActions) {
            this.element.nativeElement.classList.add('bc-table-action-cell-dropdown');
        }
        if (this.inlineActions) {
            this.element.nativeElement.classList.add('bc-table-action-cell-inline');
        }
        if (this.dropdownHtml) {
            this.element.nativeElement.classList.add('bc-table-action-cell-dropdown-html');
        }
        if (this.isNotHidePaginator) {
            this.element.nativeElement.classList.add('bc-table-not-hide-paginators');
        }
    }
}
BcTableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BcTableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcTableDirective, selector: "[bc-table]", inputs: { selection: "selection", scroll: "scroll", accordionEmpty: "accordionEmpty", sort: "sort", dropdownActions: "dropdownActions", dropdownHtml: "dropdownHtml", inlineActions: "inlineActions", isNotHidePaginator: "isNotHidePaginator", pairPaginators: "pairPaginators" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-table]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { selection: [{
                type: Input
            }], scroll: [{
                type: Input
            }], accordionEmpty: [{
                type: Input
            }], sort: [{
                type: Input
            }], dropdownActions: [{
                type: Input
            }], dropdownHtml: [{
                type: Input
            }], inlineActions: [{
                type: Input
            }], isNotHidePaginator: [{
                type: Input
            }], pairPaginators: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLXRhYmxlL2JjLXRhYmxlLWRpcmVjdGl2ZXMvYmMtdGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLNUUsTUFBTSxPQUFPLGdCQUFnQjtJQW1FM0IsWUFBWSxFQUFjO1FBbEUxQjs7Ozs7O1dBTUc7UUFDTSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCOzs7Ozs7V0FNRztRQUNNLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDeEI7Ozs7V0FJRztRQUNNLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDOzs7O1dBSUc7UUFDTSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCOzs7O1dBSUc7UUFDTSxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQzs7OztXQUlHO1FBQ00saUJBQVksR0FBRyxLQUFLLENBQUM7UUFDOUI7Ozs7V0FJRztRQUNNLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9COzs7O1dBSUc7UUFDTSx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDcEM7Ozs7O1dBS0c7UUFDTSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQVM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDekU7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzs7NkdBaEdVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCO2lHQVNVLFNBQVM7c0JBQWpCLEtBQUs7Z0JBUUcsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLGNBQWM7c0JBQXRCLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU1HLGVBQWU7c0JBQXZCLEtBQUs7Z0JBTUcsWUFBWTtzQkFBcEIsS0FBSztnQkFNRyxhQUFhO3NCQUFyQixLQUFLO2dCQU1HLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFPRyxjQUFjO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmMtdGFibGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNUYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogUGVybWl0ZSBpbmRpY2FyIHNpIGxhIHRhYmxhIHZhIGEgdGVuZXIgY2VsZGFzIHBhcmEgbGEgc2VsZWNjacOzbiBkZSBmaWxhc1xuICAgKiBTaSBlbCB2YWxvciBlcyB0cnVlLCBlbnRvbmNlcyBzZSBpbmljaWFsaXphIGVsIGNvbXBvcnRhbWllbnRvIHBhcmEgbG9zIGNoZWNrYm94XG4gICAqIFBvciBkZWZlY3RvIGVzIGZhbHNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZURpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0aW9uID0gZmFsc2U7XG4gIC8qKlxuICAgKiBQZXJtaXRlIGluZGljYXIgc2kgbGEgdGFibGEgc2Vyw6EgZGUgdGlwbyBzY3JvbGwsIGVzIGRlY2lyLCBjb24gY29sdW1uYSBmaWphIHkgc2UgcHVlZGFuIG1vc3RyYXIvb2N1bHRhciBjb2x1bW5hc1xuICAgKiBTaSBlbCB2YWxvciBlcyB0cnVlLCBlbnRvbmNlcyBzZSBwaW50YSBlbiBsYSBwYXJ0ZSBzdXBlcmlvciBkZXJlY2hhIGVsIMOtY29ubyBkZSBzZXR0aW5nIHkgc2UgYWdyZWdhIGxhIGNsYXNlXG4gICAqIFBvciBkZWZlY3RvIGVzIGZhbHNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZURpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgc2Nyb2xsID0gZmFsc2U7XG4gIC8qKlxuICAgKiBQZXJtaXRlIGluZGljYXIgc2kgbGEgdGFibGEgc2Vyw6EgZGUgdGlwbyBhY2NvcmRpb24sIGNvbiBjb250ZW5lZG9yIHZhY2lvXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlRGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBhY2NvcmRpb25FbXB0eSA9IGZhbHNlO1xuICAvKipcbiAgICogUGVybWl0ZSBpbmRpY2FyIHNpIGxhIHRhYmxhIHNlIHBvZHLDoSBvcmRlbmFyIHBvciBjb2x1bW5hXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlRGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBzb3J0ID0gZmFsc2U7XG4gIC8qKlxuICAgKiBQZXJtaXRlIGluZGljYXIgc2kgbGEgdGFibGEgdGllbmUgYWNjaW9uZXMgZHJvcGRvd25cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFibGVEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIGRyb3Bkb3duQWN0aW9ucyA9IGZhbHNlO1xuICAvKipcbiAgICogUGVybWl0ZSBpbmRpY2FyIHNpIGxhIHRhYmxhIHRpZW5lIGRyb3Bkb3ducyBlbiBpbmljaWFsaXphZG9zIGVuIGVsIGh0bWxcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFibGVEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIGRyb3Bkb3duSHRtbCA9IGZhbHNlO1xuICAvKipcbiAgICogUGVybWl0ZSBpbmRpY2FyIHNpIGxhIHRhYmxhIHRpZW5lIGFjY2lvbmVzIGVuIGZpbGFcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVGFibGVEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIGlubGluZUFjdGlvbnMgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFBlcm1pdGUgaW5kaWNhciBzaSBsYSBubyBkZWJlcsOtYSBkZSBvY3VsdGFyIGxvcyBwYWdpbmFkb3JlcyBhbCBtb21lbnRvIGRlIGhhY2VyIHVuYSBzZWxlY2Npw7NuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlRGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBpc05vdEhpZGVQYWdpbmF0b3IgPSBmYWxzZTtcbiAgLyoqXG4gICAqIEhhY2UgcmVmZXJlbmNpYSBhbCBlbGVtZW50byBzb2JyZSBlbCBjdWFsIGFjdMO6YSBsYSBkaXJlY3RpdmEuXG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmfVxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZURpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcGFpclBhZ2luYXRvcnMgPSBmYWxzZTtcbiAgLyoqXG4gICAqIEhhY2UgcmVmZXJlbmNpYSBhbCBlbGVtZW50byBzb2JyZSBlbCBjdWFsIGFjdMO6YSBsYSBkaXJlY3RpdmEuXG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmfVxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZURpcmVjdGl2ZVxuICAgKi9cbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbDtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYy10YWJsZScpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLXNlbGVjdGlvbicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY3JvbGwpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLXNjcm9sbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY2NvcmRpb25FbXB0eSkge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmMtdGFibGUtZW1weS1hY2NvcmRpb24nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc29ydCkge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmMtdGFibGUtc29ydCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kcm9wZG93bkFjdGlvbnMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLWFjdGlvbi1jZWxsLWRyb3Bkb3duJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlubGluZUFjdGlvbnMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLWFjdGlvbi1jZWxsLWlubGluZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kcm9wZG93bkh0bWwpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLWFjdGlvbi1jZWxsLWRyb3Bkb3duLWh0bWwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNOb3RIaWRlUGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYy10YWJsZS1ub3QtaGlkZS1wYWdpbmF0b3JzJyk7XG4gICAgfVxuICB9XG59XG4iXX0=