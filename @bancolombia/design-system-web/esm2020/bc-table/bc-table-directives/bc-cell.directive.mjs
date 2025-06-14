import { Directive, Input, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class BcCellDirective {
    constructor(el) {
        /**
         * Indica si la columna es favorita, es decir, aparecerá en la pantalla mobile, máximo 3 celdas.
         *
         * @type {boolean}
         * @memberof BcCellDirective
         */
        this.favorite = false;
        /**
         * Indica si es la columna fija, es decir, será la primera columna a la izquerda con posición fija.
         * Las demas filas quedan dentro un contenedor con scroll.
         *
         * @type {boolean}
         * @memberof BcCellDirective
         */
        this.fixed = false;
        this.changed = new EventEmitter();
        this.element = el;
    }
    ngAfterViewInit() {
        if (this.element.nativeElement.tagName === 'TH') {
            this.setColumnType();
            this.setFavoriteClass();
            this.setFiexColumnClass();
        }
        else {
            this.setCellType();
        }
    }
    /**
     * Permite añadir la clase que indica el tipo de columna según el atributo type:
     * Para type = 'number' la clase es bc-table-number-column.
     *
     * Por defecto la clase es bc-table-cell.
     *
     * @memberof BcCellDirective
     */
    setColumnType() {
        switch (this.type) {
            case 'number':
                this.element.nativeElement.classList.add('bc-table-number-column');
                break;
            case 'action':
                this.element.nativeElement.classList.add('bc-table-action-column');
                break;
            case 'total':
                this.element.nativeElement.classList.add('bc-table-total-column');
                break;
            default:
                this.element.nativeElement.classList.add('bc-table-column');
                break;
        }
    }
    /**
     * Permite añadir la clase que indica el tipo de celda según el atributo type:
     * Para type = 'number' la clase es bc-table-number-cell.
     * Para type = 'total' la clase es bc-table-number-cell y bc-table-total-cell.
     * Para type = 'text' la clase es bc-table-text-cell.
     *
     * Por defecto la clase es bc-table-cell.
     *
     * @memberof BcCellDirective
     */
    setCellType() {
        switch (this.type) {
            case 'number':
                this.element.nativeElement.classList.add('bc-table-number-cell');
                break;
            case 'total':
                this.element.nativeElement.classList.add('bc-table-number-cell', 'bc-total-cell');
                break;
            case 'text':
                this.element.nativeElement.classList.add('bc-table-text-cell');
                break;
            case 'action':
                this.element.nativeElement.classList.add('bc-table-action-cell');
                break;
            default:
                this.element.nativeElement.classList.add('bc-table-cell');
                break;
        }
    }
    /**
     * Permite asignar la clase que indica si la columna es favorita, es decir,
     * se muestra en la tabla mobile.
     *
     * @memberof BcCellDirective
     */
    setFavoriteClass() {
        if (this.favorite) {
            this.element.nativeElement.classList.add('bc-table-favorite-column');
        }
    }
    /**
     * Permite asignar la clase que indica si la columna es favorita, es decir,
     * se muestra en la tabla mobile.
     *
     * @memberof BcCellDirective
     */
    setFiexColumnClass() {
        if (this.fixed) {
            this.element.nativeElement.classList.add('bc-table-fixed-column');
        }
    }
}
BcCellDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCellDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BcCellDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcCellDirective, selector: "[bc-cell]", inputs: { type: "type", favorite: "favorite", fixed: "fixed" }, outputs: { changed: "changed" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-cell]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { type: [{
                type: Input
            }], favorite: [{
                type: Input
            }], fixed: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2VsbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtdGFibGUvYmMtdGFibGUtZGlyZWN0aXZlcy9iYy1jZWxsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBaUIsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLbEcsTUFBTSxPQUFPLGVBQWU7SUE0QjFCLFlBQVksRUFBYztRQXBCMUI7Ozs7O1dBS0c7UUFDTSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ25DOzs7Ozs7V0FNRztRQUNNLFVBQUssR0FBWSxLQUFLLENBQUM7UUFLdEIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQy9DLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSCxhQUFhO1FBQ1gsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ25FLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDbEUsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDNUQsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILFdBQVc7UUFDVCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDakUsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUNsRixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDL0QsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ2pFLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ0gsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7OzRHQW5IVSxlQUFlO2dHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFIM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7aUdBUVUsSUFBSTtzQkFBWixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUcsS0FBSztzQkFBYixLQUFLO2dCQUtJLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBBZnRlclZpZXdJbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmMtY2VsbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBCY0NlbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIFRpcG8gZGUgY2VsZGEsIGVzdGEgcHVlZGUgdG9tYXIgbG9zIHZhbG9yZXM6IGNoZWNrYm94LCBudW1iZXIsIGFjdGlvbiBvIHRvdGFsLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNDZWxsRGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgbGEgY29sdW1uYSBlcyBmYXZvcml0YSwgZXMgZGVjaXIsIGFwYXJlY2Vyw6EgZW4gbGEgcGFudGFsbGEgbW9iaWxlLCBtw6F4aW1vIDMgY2VsZGFzLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjQ2VsbERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEluZGljYSBzaSBlcyBsYSBjb2x1bW5hIGZpamEsIGVzIGRlY2lyLCBzZXLDoSBsYSBwcmltZXJhIGNvbHVtbmEgYSBsYSBpenF1ZXJkYSBjb24gcG9zaWNpw7NuIGZpamEuXG4gICAqIExhcyBkZW1hcyBmaWxhcyBxdWVkYW4gZGVudHJvIHVuIGNvbnRlbmVkb3IgY29uIHNjcm9sbC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY0NlbGxEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBIYWNlIHJlZmVyZW5jaWEgYWwgZWxlbWVudG8gZW4gZWwgY3VhbCBhY3TDumEgbGEgZGlyZWN0aXZhLlxuICAgKi9cbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ1RIJykge1xuICAgICAgdGhpcy5zZXRDb2x1bW5UeXBlKCk7XG4gICAgICB0aGlzLnNldEZhdm9yaXRlQ2xhc3MoKTtcbiAgICAgIHRoaXMuc2V0RmlleENvbHVtbkNsYXNzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0Q2VsbFR5cGUoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFBlcm1pdGUgYcOxYWRpciBsYSBjbGFzZSBxdWUgaW5kaWNhIGVsIHRpcG8gZGUgY29sdW1uYSBzZWfDum4gZWwgYXRyaWJ1dG8gdHlwZTpcbiAgICogUGFyYSB0eXBlID0gJ251bWJlcicgbGEgY2xhc2UgZXMgYmMtdGFibGUtbnVtYmVyLWNvbHVtbi5cbiAgICpcbiAgICogUG9yIGRlZmVjdG8gbGEgY2xhc2UgZXMgYmMtdGFibGUtY2VsbC5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjQ2VsbERpcmVjdGl2ZVxuICAgKi9cbiAgc2V0Q29sdW1uVHlwZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmMtdGFibGUtbnVtYmVyLWNvbHVtbicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLWFjdGlvbi1jb2x1bW4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3RhbCc6XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLXRvdGFsLWNvbHVtbicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLWNvbHVtbicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGVybWl0ZSBhw7FhZGlyIGxhIGNsYXNlIHF1ZSBpbmRpY2EgZWwgdGlwbyBkZSBjZWxkYSBzZWfDum4gZWwgYXRyaWJ1dG8gdHlwZTpcbiAgICogUGFyYSB0eXBlID0gJ251bWJlcicgbGEgY2xhc2UgZXMgYmMtdGFibGUtbnVtYmVyLWNlbGwuXG4gICAqIFBhcmEgdHlwZSA9ICd0b3RhbCcgbGEgY2xhc2UgZXMgYmMtdGFibGUtbnVtYmVyLWNlbGwgeSBiYy10YWJsZS10b3RhbC1jZWxsLlxuICAgKiBQYXJhIHR5cGUgPSAndGV4dCcgbGEgY2xhc2UgZXMgYmMtdGFibGUtdGV4dC1jZWxsLlxuICAgKlxuICAgKiBQb3IgZGVmZWN0byBsYSBjbGFzZSBlcyBiYy10YWJsZS1jZWxsLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNDZWxsRGlyZWN0aXZlXG4gICAqL1xuICBzZXRDZWxsVHlwZSgpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmMtdGFibGUtbnVtYmVyLWNlbGwnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3RhbCc6XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JjLXRhYmxlLW51bWJlci1jZWxsJywgJ2JjLXRvdGFsLWNlbGwnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmMtdGFibGUtdGV4dC1jZWxsJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWN0aW9uJzpcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmMtdGFibGUtYWN0aW9uLWNlbGwnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYy10YWJsZS1jZWxsJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUGVybWl0ZSBhc2lnbmFyIGxhIGNsYXNlIHF1ZSBpbmRpY2Egc2kgbGEgY29sdW1uYSBlcyBmYXZvcml0YSwgZXMgZGVjaXIsXG4gICAqIHNlIG11ZXN0cmEgZW4gbGEgdGFibGEgbW9iaWxlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNDZWxsRGlyZWN0aXZlXG4gICAqL1xuICBzZXRGYXZvcml0ZUNsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZhdm9yaXRlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYy10YWJsZS1mYXZvcml0ZS1jb2x1bW4nKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFBlcm1pdGUgYXNpZ25hciBsYSBjbGFzZSBxdWUgaW5kaWNhIHNpIGxhIGNvbHVtbmEgZXMgZmF2b3JpdGEsIGVzIGRlY2lyLFxuICAgKiBzZSBtdWVzdHJhIGVuIGxhIHRhYmxhIG1vYmlsZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjQ2VsbERpcmVjdGl2ZVxuICAgKi9cbiAgc2V0RmlleENvbHVtbkNsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpeGVkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYy10YWJsZS1maXhlZC1jb2x1bW4nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==