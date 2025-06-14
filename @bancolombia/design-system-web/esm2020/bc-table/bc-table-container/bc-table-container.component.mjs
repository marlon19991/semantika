import { BcTableScrollBehavior, BcTableAccordionBehavior, } from '@bancolombia/design-system-behaviors';
import { Component, Input, ContentChildren, } from '@angular/core';
import { BcTableHeaderComponent } from '../bc-table-header/bc-table-header.component';
import { BcTableDirective } from '../bc-table-directives/bc-table.directive';
import { BcTableFooterComponent } from '../bc-table-footer/bc-table-footer.component';
import { BcTableDropdownComponent } from '../bc-table-dropdown/bc-table-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
export class BcTableContainerComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Id del componente, si este no se seteado entonces asigna uno aleatoriamente.
         *
         * @type {string}
         * @memberof BcTableContainerComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Array que se recorre en la tabla, es obligatorio asignarle valor para hacer que la tabla funcione al cambiar de página.
         *
         * @type {*}
         * @memberof BcTableContainerComponent
         */
        this.dataTable = null;
        this.tabActual = null;
        this.tabValidate = false;
        /**
         * lista de opciones para las celdas, pueden ser creadas como dropdowns
         * o inline actions para cada una las filas
         */
        this.cellOptions = [];
    }
    ngOnChanges(changes) {
        if (changes) {
            if (changes['dataTable'] && !changes['tabActual']) {
                if (changes['dataTable'].firstChange === false) {
                    this.reInit();
                }
            }
            else if (changes['tabActual'] && !changes['dataTable']) {
                if (changes['tabActual'].firstChange === false) {
                    this.reInit();
                }
            }
            else if (changes['tabActual'] && changes['dataTable']) {
                if (changes['tabActual'].firstChange === false && changes['dataTable'].firstChange === false) {
                    this.reInit();
                }
            }
        }
    }
    ngAfterViewInit() {
        if (this.dataTable === null) {
            throw new Error("Falta setear el atributo 'dataTable' en bc-table-container");
        }
        if (this.tableDirective.first.dropdownHtml) {
            this.subscribeToDropdownChanges();
        }
        this.initTableBehavior();
        if (this.tableDirective.first.dropdownHtml) {
            this.dropdowns.changes.subscribe(() => {
                this.subscribeToDropdownChanges();
            });
        }
    }
    ngOnDestroy() {
        for (const dropdown of this.dropdowns) {
            dropdown.changed.unsubscribe();
        }
    }
    /**
     * Se inicializa el comportamiento nativo de la tabla segun el atributo scroll (opcional)
     * para scroll=true -> se inicializa el comportamiento BcTableScrollBehavior
     * para scroll=false -> se inicializa el comportamiento BcTableAccordionBehavior
     *
     * @private
     * @memberof BcTableContainerComponent
     */
    initTableBehavior() {
        this.bcTableBehavior = this.tableDirective.first.scroll
            ? new BcTableScrollBehavior()
            : new BcTableAccordionBehavior();
        let validateTabs = false;
        if (this.tabValidate) {
            validateTabs = this.validateTabs();
        }
        if (!validateTabs) {
            this.setIdComponent(this.componentId);
        }
        this.headerTop.first && this.bcTableBehavior.setSelectionAction(this.headerTop.first.actionsSelections);
        this.bcTableBehavior.angularFunction = this.onClickAction.bind(this);
        if (this.tableDirective.first.dropdownActions || this.tableDirective.first.inlineActions) {
            this.bcTableBehavior.setActionCell(this.cellOptions);
        }
        this.bcTableBehavior.setUp();
        if (this.tableDirective.first.pairPaginators) {
            this.pairPaginatorTable();
        }
    }
    validateTabs() {
        if (document.getElementsByClassName('bc-tab').length > 0) {
            const tabContentActive = document.getElementsByClassName('bc-tab-content active')[0];
            if (tabContentActive.children.length > 0) {
                if (tabContentActive.getElementsByTagName('bc-table-container').length > 0) {
                    const containerTable = tabContentActive.children[0].getElementsByTagName('bc-table-container')[0];
                    if (containerTable) {
                        if (containerTable.firstElementChild) {
                            const id = containerTable.firstElementChild.id;
                            this.setIdComponent(id);
                        }
                        else {
                            this.setIdComponent(this.componentId);
                        }
                    }
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    /**
     * Asigna a el behavior de la tabla el id
     *
     * @private
     * @param {string} id
     * @memberof BcTableContainerComponent
     */
    setIdComponent(id) {
        this.bcTableBehavior.setId(id);
    }
    /**
     * Se obitiene la(s) fila(s) seleccionada(s) y el id de la accion a la cual se le hizo click en la cabecera
     * en modo selección
     *
     * @private
     * @param {{ rowSelectedIndex: number[]; actionId: string }} response Esto lo devuelve el comportamiento
     * @memberof BcTableContainerComponent
     */
    onClickAction(response) {
        this.headerTop.first &&
            this.headerTop.first.actionClicked.emit({
                rowsSelected: this.getRowSelectedFromData(response.rowSelectedIndex),
                actionId: response.actionId,
            });
    }
    /**
     * Mapea la data las filas seleccionadas segun el index, para poder devolver la data real que se itera en la tabla
     *
     * @private
     * @param {number[]} indexesRowSelected indice de filas seleccionadas
     * @return {*}  {any[]}
     * @memberof BcTableContainerComponent
     */
    getRowSelectedFromData(indexesRowSelected) {
        let selected = [];
        for (let i = 0; i < this.dataTable.length; i++) {
            const rowData = this.dataTable[i];
            if (indexesRowSelected.indexOf(i + 1) !== -1) {
                selected.push(rowData);
            }
        }
        return selected;
    }
    /**
     * Reinicial el comportamiento de la tabla y cuando esta en modo scroll se borran las celdas (columna) fija
     *
     * @private
     * @memberof BcTableContainerComponent
     */
    reInit() {
        if (this.tableDirective.first.scroll) {
            const fixedCells = document.querySelectorAll('.bc-table-fixed-column-left');
            if (fixedCells !== null && fixedCells.length > 0) {
                this.removeCell(fixedCells);
            }
        }
        else {
            this.bcTableBehavior.closeCurrentExtraInfoRow();
        }
        setTimeout(() => {
            this.initTableBehavior();
        });
    }
    /**
     * Elimina la celda fija
     *
     * @privates
     * @param {NodeListOf<Element>} fixedCells
     * @memberof BcTableContainerComponent
     */
    removeCell(fixedCells) {
        for (let i = 0; i < fixedCells.length; i++) {
            const cell = fixedCells[i];
            cell.remove();
        }
    }
    /**
     * Metodo que con el retorno de los paginadores empareja y permite que los
     * paginadores se sincronicen
     * @private
     * @memberof BcTableContainerComponent
     */
    pairPaginatorTable() {
        const pagTop = this.headerTop.first.getPaginator();
        const footerTop = this.footer.first.getPaginator();
        if (pagTop !== undefined && footerTop !== undefined)
            pagTop.pairPaginator(footerTop);
    }
    /**
     * Permite observar cuando alguno de los dropdowns cambia sus opciones para reiniciar el componente
     *
     * @private
     * @memberof BcTableContainerComponent
     */
    subscribeToDropdownChanges() {
        for (const dropdown of this.dropdowns) {
            dropdown.changed.subscribe(() => {
                this.reInit();
            });
        }
    }
}
BcTableContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableContainerComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcTableContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableContainerComponent, selector: "bc-table-container", inputs: { componentId: "componentId", dataTable: "dataTable", tabActual: "tabActual", tabValidate: "tabValidate", cellOptions: "cellOptions" }, queries: [{ propertyName: "headerTop", predicate: BcTableHeaderComponent }, { propertyName: "footer", predicate: BcTableFooterComponent }, { propertyName: "tableDirective", predicate: BcTableDirective, descendants: true }, { propertyName: "dropdowns", predicate: BcTableDropdownComponent, descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div class="bc-table-container" [id]="componentId">
      <ng-content></ng-content>
    </div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-table-container',
                    template: `
    <div class="bc-table-container" [id]="componentId">
      <ng-content></ng-content>
    </div>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], headerTop: [{
                type: ContentChildren,
                args: [BcTableHeaderComponent]
            }], footer: [{
                type: ContentChildren,
                args: [BcTableFooterComponent]
            }], dataTable: [{
                type: Input
            }], tabActual: [{
                type: Input
            }], tabValidate: [{
                type: Input
            }], tableDirective: [{
                type: ContentChildren,
                args: [BcTableDirective, { descendants: true }]
            }], cellOptions: [{
                type: Input
            }], dropdowns: [{
                type: ContentChildren,
                args: [BcTableDropdownComponent, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10YWJsZS9iYy10YWJsZS1jb250YWluZXIvYmMtdGFibGUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHdCQUF3QixHQUd6QixNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLGVBQWUsR0FJaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQVU1RixNQUFNLE9BQU8seUJBQXlCO0lBOERwQyxZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUE3RHBEOzs7OztXQUtHO1FBQ00sZ0JBQVcsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQXVCaEU7Ozs7O1dBS0c7UUFDTSxjQUFTLEdBQVEsSUFBSSxDQUFDO1FBRXRCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFFdEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFTdEM7OztXQUdHO1FBQ00sZ0JBQVcsR0FBNkIsRUFBRSxDQUFDO0lBU0ksQ0FBQztJQUV6RCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDakQsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtvQkFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNmO2FBQ0Y7aUJBQU0sSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3hELElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDZjthQUNGO2lCQUFNLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtvQkFDNUYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNmO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7U0FDL0U7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUMxQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3JELENBQUMsQ0FBQyxJQUFJLHFCQUFxQixFQUFFO1lBQzdCLENBQUMsQ0FBQyxJQUFJLHdCQUF3QixFQUFFLENBQUM7UUFDbkMsSUFBSSxZQUFZLEdBQVksS0FBSyxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDeEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUM1QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxRQUFRLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4RCxNQUFNLGdCQUFnQixHQUFnQixRQUFRLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUM7WUFDakgsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzFFLE1BQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsRyxJQUFJLGNBQWMsRUFBRTt3QkFDbEIsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUU7NEJBQ3BDLE1BQU0sRUFBRSxHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUE7NEJBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQ3pCOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3lCQUN2QztxQkFDRjtvQkFDRCxPQUFPLElBQUksQ0FBQztpQkFDYjtxQkFBTTtvQkFDTCxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxjQUFjLENBQUMsRUFBVTtRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLGFBQWEsQ0FBQyxRQUEwRDtRQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDdEMsWUFBWSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3BFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTthQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLHNCQUFzQixDQUFDLGtCQUE0QjtRQUN6RCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxNQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDcEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDNUUsSUFBSSxVQUFVLEtBQUssSUFBSSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7YUFDSTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNqRDtRQUNELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxVQUFVLENBQUMsVUFBK0I7UUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssa0JBQWtCO1FBQ3hCLE1BQU0sTUFBTSxHQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RSxNQUFNLFNBQVMsR0FBd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEUsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxTQUFTO1lBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSywwQkFBMEI7UUFDaEMsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztzSEF4UVUseUJBQXlCOzBHQUF6Qix5QkFBeUIsb09BY25CLHNCQUFzQix5Q0FPdEIsc0JBQXNCLGlEQTBCdEIsZ0JBQWdCLCtEQWFoQix3QkFBd0IscUVBbEUvQjs7OztHQUlUOzJGQUVVLHlCQUF5QjtrQkFSckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUU7Ozs7R0FJVDtpQkFDRjtzR0FRVSxXQUFXO3NCQUFuQixLQUFLO2dCQU9tQyxTQUFTO3NCQUFqRCxlQUFlO3VCQUFDLHNCQUFzQjtnQkFPRSxNQUFNO3NCQUE5QyxlQUFlO3VCQUFDLHNCQUFzQjtnQkFlOUIsU0FBUztzQkFBakIsS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT29ELGNBQWM7c0JBQXZFLGVBQWU7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQU0vQyxXQUFXO3NCQUFuQixLQUFLO2dCQU80RCxTQUFTO3NCQUExRSxlQUFlO3VCQUFDLHdCQUF3QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7XG4gIEJjVGFibGVTY3JvbGxCZWhhdmlvcixcbiAgQmNUYWJsZUFjY29yZGlvbkJlaGF2aW9yLFxuICBCY1RhYmxlT3B0aW9uTWVudSxcbiAgQmNQYWdpbmF0b3JCZWhhdmlvcixcbn0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNUYWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2JjLXRhYmxlLWhlYWRlci9iYy10YWJsZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJjVGFibGVEaXJlY3RpdmUgfSBmcm9tICcuLi9iYy10YWJsZS1kaXJlY3RpdmVzL2JjLXRhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCY1RhYmxlRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYmMtdGFibGUtZm9vdGVyL2JjLXRhYmxlLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNUYWJsZURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vYmMtdGFibGUtZHJvcGRvd24vYmMtdGFibGUtZHJvcGRvd24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtdGFibGUtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYmMtdGFibGUtY29udGFpbmVyXCIgW2lkXT1cImNvbXBvbmVudElkXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEJjVGFibGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogSWQgZGVsIGNvbXBvbmVudGUsIHNpIGVzdGUgbm8gc2Ugc2V0ZWFkbyBlbnRvbmNlcyBhc2lnbmEgdW5vIGFsZWF0b3JpYW1lbnRlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZUNvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuYmNIZWxwZXJTZXJ2aWNlLmdldElkKHRoaXMpO1xuICAvKipcbiAgICogSGFjZSByZWZlcmVuY2lhIGFsIGhlYWRlciBzdXBlcmlvciBkZSBsYSB0YWJsYS5cbiAgICpcbiAgICogQHR5cGUge1F1ZXJ5TGlzdDxCY1RhYmxlSGVhZGVyQ29tcG9uZW50Pn1cbiAgICogQG1lbWJlcm9mIEJjVGFibGVDb250YWluZXJDb21wb25lbnRcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQmNUYWJsZUhlYWRlckNvbXBvbmVudCkgaGVhZGVyVG9wOiBRdWVyeUxpc3Q8QmNUYWJsZUhlYWRlckNvbXBvbmVudD47XG4gIC8qKlxuICAgKiBIYWNlIHJlZmVyZW5jaWEgYWwgaGVhZGVyIHN1cGVyaW9yIGRlIGxhIHRhYmxhLlxuICAgKlxuICAgKiBAdHlwZSB7UXVlcnlMaXN0PEJjVGFibGVIZWFkZXJDb21wb25lbnQ+fVxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZUNvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihCY1RhYmxlRm9vdGVyQ29tcG9uZW50KSBmb290ZXI6IFF1ZXJ5TGlzdDxCY1RhYmxlRm9vdGVyQ29tcG9uZW50PjtcbiAgLyoqXG4gICAqIENvbXBvcnRhbWllbnRvIG5hdGl2by5cbiAgICpcbiAgICogQHR5cGUge0JjVGFibGVTY3JvbGxCZWhhdmlvciB8IEJjVGFibGVBY2NvcmRpb25CZWhhdmlvcn1cbiAgICogQG1lbWJlcm9mIEJjVGFibGVDb250YWluZXJDb21wb25lbnRcbiAgICovXG4gIGJjVGFibGVCZWhhdmlvcjogQmNUYWJsZVNjcm9sbEJlaGF2aW9yIHwgQmNUYWJsZUFjY29yZGlvbkJlaGF2aW9yO1xuXG4gIC8qKlxuICAgKiBBcnJheSBxdWUgc2UgcmVjb3JyZSBlbiBsYSB0YWJsYSwgZXMgb2JsaWdhdG9yaW8gYXNpZ25hcmxlIHZhbG9yIHBhcmEgaGFjZXIgcXVlIGxhIHRhYmxhIGZ1bmNpb25lIGFsIGNhbWJpYXIgZGUgcMOhZ2luYS5cbiAgICpcbiAgICogQHR5cGUgeyp9XG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlQ29udGFpbmVyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBkYXRhVGFibGU6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KCkgdGFiQWN0dWFsOiBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpIHRhYlZhbGlkYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBTZSBvYnRpZW5lIGxhIHRhYmxhXG4gICAqXG4gICAqIEB0eXBlIHtRdWVyeUxpc3Q8QmNUYWJsZURpcmVjdGl2ZT59XG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlQ29udGFpbmVyQ29tcG9uZW50XG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKEJjVGFibGVEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgdGFibGVEaXJlY3RpdmU6IFF1ZXJ5TGlzdDxCY1RhYmxlRGlyZWN0aXZlPjtcblxuICAvKipcbiAgICogbGlzdGEgZGUgb3BjaW9uZXMgcGFyYSBsYXMgY2VsZGFzLCBwdWVkZW4gc2VyIGNyZWFkYXMgY29tbyBkcm9wZG93bnNcbiAgICogbyBpbmxpbmUgYWN0aW9ucyBwYXJhIGNhZGEgdW5hIGxhcyBmaWxhc1xuICAgKi9cbiAgQElucHV0KCkgY2VsbE9wdGlvbnM6IEFycmF5PEJjVGFibGVPcHRpb25NZW51PiA9IFtdO1xuICAvKipcbiAgICogRHJvcGRvd25zIGRlIGxhIHRhYmxhXG4gICAqXG4gICAqIEB0eXBlIHtRdWVyeUxpc3Q8QmNUYWJsZURyb3Bkb3duQ29tcG9uZW50Pn1cbiAgICogQG1lbWJlcm9mIEJjVGFibGVDb250YWluZXJDb21wb25lbnRcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQmNUYWJsZURyb3Bkb3duQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGRyb3Bkb3duczogUXVlcnlMaXN0PEJjVGFibGVEcm9wZG93bkNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlc1snZGF0YVRhYmxlJ10gJiYgIWNoYW5nZXNbJ3RhYkFjdHVhbCddKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydkYXRhVGFibGUnXS5maXJzdENoYW5nZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnJlSW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZXNbJ3RhYkFjdHVhbCddICYmICFjaGFuZ2VzWydkYXRhVGFibGUnXSkge1xuICAgICAgICBpZiAoY2hhbmdlc1sndGFiQWN0dWFsJ10uZmlyc3RDaGFuZ2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5yZUluaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGFuZ2VzWyd0YWJBY3R1YWwnXSAmJiBjaGFuZ2VzWydkYXRhVGFibGUnXSkge1xuICAgICAgICBpZiAoY2hhbmdlc1sndGFiQWN0dWFsJ10uZmlyc3RDaGFuZ2UgPT09IGZhbHNlICYmIGNoYW5nZXNbJ2RhdGFUYWJsZSddLmZpcnN0Q2hhbmdlID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMucmVJbml0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0YVRhYmxlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWx0YSBzZXRlYXIgZWwgYXRyaWJ1dG8gJ2RhdGFUYWJsZScgZW4gYmMtdGFibGUtY29udGFpbmVyXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy50YWJsZURpcmVjdGl2ZS5maXJzdC5kcm9wZG93bkh0bWwpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Ecm9wZG93bkNoYW5nZXMoKTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFibGVCZWhhdmlvcigpO1xuICAgIGlmICh0aGlzLnRhYmxlRGlyZWN0aXZlLmZpcnN0LmRyb3Bkb3duSHRtbCkge1xuICAgICAgdGhpcy5kcm9wZG93bnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRHJvcGRvd25DaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBmb3IgKGNvbnN0IGRyb3Bkb3duIG9mIHRoaXMuZHJvcGRvd25zKSB7XG4gICAgICBkcm9wZG93bi5jaGFuZ2VkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlIGluaWNpYWxpemEgZWwgY29tcG9ydGFtaWVudG8gbmF0aXZvIGRlIGxhIHRhYmxhIHNlZ3VuIGVsIGF0cmlidXRvIHNjcm9sbCAob3BjaW9uYWwpXG4gICAqIHBhcmEgc2Nyb2xsPXRydWUgLT4gc2UgaW5pY2lhbGl6YSBlbCBjb21wb3J0YW1pZW50byBCY1RhYmxlU2Nyb2xsQmVoYXZpb3JcbiAgICogcGFyYSBzY3JvbGw9ZmFsc2UgLT4gc2UgaW5pY2lhbGl6YSBlbCBjb21wb3J0YW1pZW50byBCY1RhYmxlQWNjb3JkaW9uQmVoYXZpb3JcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1lbWJlcm9mIEJjVGFibGVDb250YWluZXJDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgaW5pdFRhYmxlQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5iY1RhYmxlQmVoYXZpb3IgPSB0aGlzLnRhYmxlRGlyZWN0aXZlLmZpcnN0LnNjcm9sbFxuICAgICAgPyBuZXcgQmNUYWJsZVNjcm9sbEJlaGF2aW9yKClcbiAgICAgIDogbmV3IEJjVGFibGVBY2NvcmRpb25CZWhhdmlvcigpO1xuICAgIGxldCB2YWxpZGF0ZVRhYnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy50YWJWYWxpZGF0ZSkge1xuICAgICAgdmFsaWRhdGVUYWJzID0gdGhpcy52YWxpZGF0ZVRhYnMoKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZGF0ZVRhYnMpIHtcbiAgICAgIHRoaXMuc2V0SWRDb21wb25lbnQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgfVxuICAgIHRoaXMuaGVhZGVyVG9wLmZpcnN0ICYmIHRoaXMuYmNUYWJsZUJlaGF2aW9yLnNldFNlbGVjdGlvbkFjdGlvbih0aGlzLmhlYWRlclRvcC5maXJzdC5hY3Rpb25zU2VsZWN0aW9ucyk7XG4gICAgdGhpcy5iY1RhYmxlQmVoYXZpb3IuYW5ndWxhckZ1bmN0aW9uID0gdGhpcy5vbkNsaWNrQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgaWYgKHRoaXMudGFibGVEaXJlY3RpdmUuZmlyc3QuZHJvcGRvd25BY3Rpb25zIHx8IHRoaXMudGFibGVEaXJlY3RpdmUuZmlyc3QuaW5saW5lQWN0aW9ucykge1xuICAgICAgdGhpcy5iY1RhYmxlQmVoYXZpb3Iuc2V0QWN0aW9uQ2VsbCh0aGlzLmNlbGxPcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5iY1RhYmxlQmVoYXZpb3Iuc2V0VXAoKTtcbiAgICBpZiAodGhpcy50YWJsZURpcmVjdGl2ZS5maXJzdC5wYWlyUGFnaW5hdG9ycykge1xuICAgICAgdGhpcy5wYWlyUGFnaW5hdG9yVGFibGUoKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZVRhYnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JjLXRhYicpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRhYkNvbnRlbnRBY3RpdmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmMtdGFiLWNvbnRlbnQgYWN0aXZlJylbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFiQ29udGVudEFjdGl2ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0YWJDb250ZW50QWN0aXZlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYy10YWJsZS1jb250YWluZXInKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyVGFibGUgPSB0YWJDb250ZW50QWN0aXZlLmNoaWxkcmVuWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYy10YWJsZS1jb250YWluZXInKVswXTtcbiAgICAgICAgICBpZiAoY29udGFpbmVyVGFibGUpIHtcbiAgICAgICAgICAgIGlmIChjb250YWluZXJUYWJsZS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgICBjb25zdCBpZCA9IGNvbnRhaW5lclRhYmxlLmZpcnN0RWxlbWVudENoaWxkLmlkXG4gICAgICAgICAgICAgIHRoaXMuc2V0SWRDb21wb25lbnQoaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRJZENvbXBvbmVudCh0aGlzLmNvbXBvbmVudElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXNpZ25hIGEgZWwgYmVoYXZpb3IgZGUgbGEgdGFibGEgZWwgaWQgXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICogQG1lbWJlcm9mIEJjVGFibGVDb250YWluZXJDb21wb25lbnRcbiAgICovXG4gIHNldElkQ29tcG9uZW50KGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmJjVGFibGVCZWhhdmlvci5zZXRJZChpZCk7XG4gIH1cblxuICAvKipcbiAgICogU2Ugb2JpdGllbmUgbGEocykgZmlsYShzKSBzZWxlY2Npb25hZGEocykgeSBlbCBpZCBkZSBsYSBhY2Npb24gYSBsYSBjdWFsIHNlIGxlIGhpem8gY2xpY2sgZW4gbGEgY2FiZWNlcmFcbiAgICogZW4gbW9kbyBzZWxlY2Npw7NuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7eyByb3dTZWxlY3RlZEluZGV4OiBudW1iZXJbXTsgYWN0aW9uSWQ6IHN0cmluZyB9fSByZXNwb25zZSBFc3RvIGxvIGRldnVlbHZlIGVsIGNvbXBvcnRhbWllbnRvXG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlQ29udGFpbmVyQ29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIG9uQ2xpY2tBY3Rpb24ocmVzcG9uc2U6IHsgcm93U2VsZWN0ZWRJbmRleDogbnVtYmVyW107IGFjdGlvbklkOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuaGVhZGVyVG9wLmZpcnN0ICYmXG4gICAgICB0aGlzLmhlYWRlclRvcC5maXJzdC5hY3Rpb25DbGlja2VkLmVtaXQoe1xuICAgICAgICByb3dzU2VsZWN0ZWQ6IHRoaXMuZ2V0Um93U2VsZWN0ZWRGcm9tRGF0YShyZXNwb25zZS5yb3dTZWxlY3RlZEluZGV4KSxcbiAgICAgICAgYWN0aW9uSWQ6IHJlc3BvbnNlLmFjdGlvbklkLFxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWFwZWEgbGEgZGF0YSBsYXMgZmlsYXMgc2VsZWNjaW9uYWRhcyBzZWd1biBlbCBpbmRleCwgcGFyYSBwb2RlciBkZXZvbHZlciBsYSBkYXRhIHJlYWwgcXVlIHNlIGl0ZXJhIGVuIGxhIHRhYmxhXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyW119IGluZGV4ZXNSb3dTZWxlY3RlZCBpbmRpY2UgZGUgZmlsYXMgc2VsZWNjaW9uYWRhc1xuICAgKiBAcmV0dXJuIHsqfSAge2FueVtdfVxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZUNvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRSb3dTZWxlY3RlZEZyb21EYXRhKGluZGV4ZXNSb3dTZWxlY3RlZDogbnVtYmVyW10pOiBhbnlbXSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGFUYWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93RGF0YSA9IHRoaXMuZGF0YVRhYmxlW2ldO1xuICAgICAgaWYgKGluZGV4ZXNSb3dTZWxlY3RlZC5pbmRleE9mKGkgKyAxKSAhPT0gLTEpIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChyb3dEYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlaW5pY2lhbCBlbCBjb21wb3J0YW1pZW50byBkZSBsYSB0YWJsYSB5IGN1YW5kbyBlc3RhIGVuIG1vZG8gc2Nyb2xsIHNlIGJvcnJhbiBsYXMgY2VsZGFzIChjb2x1bW5hKSBmaWphXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlQ29udGFpbmVyQ29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIHJlSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJsZURpcmVjdGl2ZS5maXJzdC5zY3JvbGwpIHtcbiAgICAgIGNvbnN0IGZpeGVkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmMtdGFibGUtZml4ZWQtY29sdW1uLWxlZnQnKTtcbiAgICAgIGlmIChmaXhlZENlbGxzICE9PSBudWxsICYmIGZpeGVkQ2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNlbGwoZml4ZWRDZWxscyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5iY1RhYmxlQmVoYXZpb3IuY2xvc2VDdXJyZW50RXh0cmFJbmZvUm93KCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbml0VGFibGVCZWhhdmlvcigpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVsaW1pbmEgbGEgY2VsZGEgZmlqYVxuICAgKlxuICAgKiBAcHJpdmF0ZXNcbiAgICogQHBhcmFtIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fSBmaXhlZENlbGxzXG4gICAqIEBtZW1iZXJvZiBCY1RhYmxlQ29udGFpbmVyQ29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUNlbGwoZml4ZWRDZWxsczogTm9kZUxpc3RPZjxFbGVtZW50Pik6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZml4ZWRDZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGZpeGVkQ2VsbHNbaV07XG4gICAgICBjZWxsLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRvZG8gcXVlIGNvbiBlbCByZXRvcm5vIGRlIGxvcyBwYWdpbmFkb3JlcyBlbXBhcmVqYSB5IHBlcm1pdGUgcXVlIGxvc1xuICAgKiBwYWdpbmFkb3JlcyBzZSBzaW5jcm9uaWNlblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZUNvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBwYWlyUGFnaW5hdG9yVGFibGUoKSB7XG4gICAgY29uc3QgcGFnVG9wOiBCY1BhZ2luYXRvckJlaGF2aW9yID0gdGhpcy5oZWFkZXJUb3AuZmlyc3QuZ2V0UGFnaW5hdG9yKCk7XG4gICAgY29uc3QgZm9vdGVyVG9wOiBCY1BhZ2luYXRvckJlaGF2aW9yID0gdGhpcy5mb290ZXIuZmlyc3QuZ2V0UGFnaW5hdG9yKCk7XG4gICAgaWYgKHBhZ1RvcCAhPT0gdW5kZWZpbmVkICYmIGZvb3RlclRvcCAhPT0gdW5kZWZpbmVkKSBwYWdUb3AucGFpclBhZ2luYXRvcihmb290ZXJUb3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcm1pdGUgb2JzZXJ2YXIgY3VhbmRvIGFsZ3VubyBkZSBsb3MgZHJvcGRvd25zIGNhbWJpYSBzdXMgb3BjaW9uZXMgcGFyYSByZWluaWNpYXIgZWwgY29tcG9uZW50ZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWVtYmVyb2YgQmNUYWJsZUNvbnRhaW5lckNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0Ryb3Bkb3duQ2hhbmdlcygpIHtcbiAgICBmb3IgKGNvbnN0IGRyb3Bkb3duIG9mIHRoaXMuZHJvcGRvd25zKSB7XG4gICAgICBkcm9wZG93bi5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVJbml0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==