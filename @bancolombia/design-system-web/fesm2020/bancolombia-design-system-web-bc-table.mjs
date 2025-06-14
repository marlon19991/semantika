import * as i0 from '@angular/core';
import { Component, EventEmitter, Input, Output, ContentChild, Directive, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { BcPaginatorComponent, BcPaginatorModule } from '@bancolombia/design-system-web/bc-paginator';
import { BcDropdownBehavior, BcTableScrollBehavior, BcTableAccordionBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@bancolombia/design-system-web/bc-helpers';

class BcTableContentComponent {
}
BcTableContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcTableContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableContentComponent, selector: "bc-table-content", ngImport: i0, template: `
    <div class="bc-table-content">
      <ng-content></ng-content>
    </div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-table-content',
                    template: `
    <div class="bc-table-content">
      <ng-content></ng-content>
    </div>
  `,
                }]
        }] });

class BcTableHeaderComponent {
    constructor() {
        /**
         * Título de la tabla, este puede tomar cualquier valor string, por defecto es 'Título de la tabla'.
         *
         * @memberof BcTableHeaderComponent
         */
        this.title = 'Título de la tabla';
        /**
         * Texto o label que se muestra en el botón de acción cuando la tabla es de tipo selección,
         * este se visualiza cuando algunas de las filas es seleccionada. Por defecto es 'Acción'.
         *
         * @memberof BcTableHeaderComponent
         */
        this.actionsSelections = [];
        /**
         * Texto o label que se muestra en el botón de acción cuando la tabla es de tipo selección,
         * este se visualiza cuando algunas de las filas es seleccionada. Por defecto es 'Acción'.
         *
         * @memberof BcTableHeaderComponent
         */
        this.menuOptions = [];
        /**
         * Evento de salida para cuando se da click a algunas de las acciones del header en modo selección.
         *
         * @type {EventEmitter<any>}
         * @memberof BcTableHeaderComponent
         */
        this.actionClicked = new EventEmitter();
    }
    ngAfterViewInit() {
        this.getPaginator();
    }
    /**
     * metodo para obtener la referencia del paginador sino lo encuentra
     * lo retorna como undefined
     * @returns paginador o undefined
     */
    getPaginator() {
        if (this.content !== undefined) {
            return this.content.bcPaginatorBehavior;
        }
        return undefined;
    }
}
BcTableHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcTableHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableHeaderComponent, selector: "bc-table-header", inputs: { title: "title", actionsSelections: "actionsSelections", menuOptions: "menuOptions" }, outputs: { actionClicked: "actionClicked" }, queries: [{ propertyName: "content", first: true, predicate: BcPaginatorComponent, descendants: true }], ngImport: i0, template: "<div class=\"bc-table-header-top\">\n  <h6 class=\"bc-table-header-top-title\">{{ title }}</h6>\n  <div class=\"bc-table-header-top-right-container\">\n    <div class=\"bc-table-actions-container\">\n      <div class=\"bc-table-paginator-container\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-table-header', template: "<div class=\"bc-table-header-top\">\n  <h6 class=\"bc-table-header-top-title\">{{ title }}</h6>\n  <div class=\"bc-table-header-top-right-container\">\n    <div class=\"bc-table-actions-container\">\n      <div class=\"bc-table-paginator-container\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { title: [{
                type: Input
            }], actionsSelections: [{
                type: Input
            }], menuOptions: [{
                type: Input
            }], actionClicked: [{
                type: Output
            }], content: [{
                type: ContentChild,
                args: [BcPaginatorComponent]
            }] } });

class BcTableDirective {
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

class BcTableFooterComponent {
    constructor() {
        /**
         * Array con los valores totales que se muestran en el footer de la tabla.
         *
         * @type {Array<BcTableTotalAmount>}
         * @memberof BcTableFooterComponent
         */
        this.totalAmounts = [];
    }
    ngAfterViewInit() {
        this.getPaginator();
    }
    /**
     * metodo para obtener la referencia del paginador sino lo encuentra
     * lo retorna como undefined
     * @returns paginador o undefined
     */
    getPaginator() {
        if (this.content !== undefined) {
            return this.content.bcPaginatorBehavior;
        }
        return undefined;
    }
}
BcTableFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcTableFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableFooterComponent, selector: "bc-table-footer", inputs: { totalAmounts: "totalAmounts" }, queries: [{ propertyName: "content", first: true, predicate: BcPaginatorComponent, descendants: true }], ngImport: i0, template: "<div class=\"bc-table-footer\">\n  <div class=\"bc-table-footer-container\">\n    <div class=\"bc-table-footer-total-container\" *ngIf=\"totalAmounts.length > 0\">\n      <div class=\"bc-table-footer-total-column\" *ngFor=\"let item of totalAmounts\">\n        <p class=\"bc-table-footer-total-column-title\">{{item.title}}</p>\n        <h6 class=\"bc-table-footer-total-column-value\">{{item.amount}}</h6>\n      </div>\n    </div>\n    <div class=\"bc-table-footer-subcontainer\">\n      <div class=\"bc-table-actions-container\">\n        <div class=\"bc-table-paginator-container\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-table-footer', template: "<div class=\"bc-table-footer\">\n  <div class=\"bc-table-footer-container\">\n    <div class=\"bc-table-footer-total-container\" *ngIf=\"totalAmounts.length > 0\">\n      <div class=\"bc-table-footer-total-column\" *ngFor=\"let item of totalAmounts\">\n        <p class=\"bc-table-footer-total-column-title\">{{item.title}}</p>\n        <h6 class=\"bc-table-footer-total-column-value\">{{item.amount}}</h6>\n      </div>\n    </div>\n    <div class=\"bc-table-footer-subcontainer\">\n      <div class=\"bc-table-actions-container\">\n        <div class=\"bc-table-paginator-container\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { totalAmounts: [{
                type: Input
            }], content: [{
                type: ContentChild,
                args: [BcPaginatorComponent]
            }] } });

class BcTableDropdownComponent {
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
BcTableDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableDropdownComponent, deps: [{ token: i1$1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcTableDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableDropdownComponent, selector: "bc-table-dropdown", inputs: { options: "options", row: "row", data: "data" }, outputs: { onChange: "onChange", changed: "changed" }, viewQueries: [{ propertyName: "optionList", first: true, predicate: ["optionList"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div (keyup.enter)=\"eventEnterDropdown()\" (keyup.space)=\"eventEnterDropdown()\" tabindex=\"0\" class=\"bc-dropdown\"\n  id=\"BcDropdown_{{dropdownId}}\" [attr.aria-angular]=\"true\">\n  <em (click)=\"clickItem()\" class=\"bc-dropdown-toggle bc-icon bc-sm\" [attr.aria-controls]=\"dropdownId\">\n    secondary-menu\n  </em>\n  <div class=\"bc-dropdown-content\" [id]=\"dropdownId\">\n    <ul #optionList>\n      <li tabindex=\"0\" class=\"bc-dropdown-item\" *ngFor=\"let option of options\">\n        <a class=\"bc-link\" [id]=\"option.id\">\n          <em class=\"bc-icon bc-sm\">{{option.icon}}</em>\n          <span>{{option.text}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n", directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-table-dropdown', template: "<div (keyup.enter)=\"eventEnterDropdown()\" (keyup.space)=\"eventEnterDropdown()\" tabindex=\"0\" class=\"bc-dropdown\"\n  id=\"BcDropdown_{{dropdownId}}\" [attr.aria-angular]=\"true\">\n  <em (click)=\"clickItem()\" class=\"bc-dropdown-toggle bc-icon bc-sm\" [attr.aria-controls]=\"dropdownId\">\n    secondary-menu\n  </em>\n  <div class=\"bc-dropdown-content\" [id]=\"dropdownId\">\n    <ul #optionList>\n      <li tabindex=\"0\" class=\"bc-dropdown-item\" *ngFor=\"let option of options\">\n        <a class=\"bc-link\" [id]=\"option.id\">\n          <em class=\"bc-icon bc-sm\">{{option.icon}}</em>\n          <span>{{option.text}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1$1.BcHelperService }]; }, propDecorators: { options: [{
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

class BcTableContainerComponent {
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
BcTableContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableContainerComponent, deps: [{ token: i1$1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: function () { return [{ type: i1$1.BcHelperService }]; }, propDecorators: { componentId: [{
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

class BcCellDirective {
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

class BcTableEmptyContainerComponent {
    constructor(el) {
        this.element = el;
        this.element.nativeElement.classList.add('bc-table-extra-info-row');
    }
}
BcTableEmptyContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableEmptyContainerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcTableEmptyContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTableEmptyContainerComponent, selector: "[bc-table-empty-container]", viewQueries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true, static: true }], ngImport: i0, template: `
  <td>
    <div class="bc-table-extra-info-row-content">
      <ng-content></ng-content>
    </div>
  </td>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableEmptyContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[bc-table-empty-container]',
                    template: `
  <td>
    <div class="bc-table-extra-info-row-content">
      <ng-content></ng-content>
    </div>
  </td>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { template: [{
                type: ViewChild,
                args: ['template', { static: true }]
            }] } });

class BcTableModule {
}
BcTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableModule, declarations: [BcTableContainerComponent,
        BcTableHeaderComponent,
        BcTableContentComponent,
        BcTableDirective,
        BcCellDirective,
        BcTableFooterComponent,
        BcTableDropdownComponent,
        BcTableEmptyContainerComponent], imports: [CommonModule, BcPaginatorModule], exports: [BcTableContainerComponent,
        BcTableHeaderComponent,
        BcTableContentComponent,
        BcTableDirective,
        BcCellDirective,
        BcTableFooterComponent,
        BcTableDropdownComponent,
        BcTableEmptyContainerComponent] });
BcTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableModule, imports: [[CommonModule, BcPaginatorModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BcTableContainerComponent,
                        BcTableHeaderComponent,
                        BcTableContentComponent,
                        BcTableDirective,
                        BcCellDirective,
                        BcTableFooterComponent,
                        BcTableDropdownComponent,
                        BcTableEmptyContainerComponent,
                    ],
                    imports: [CommonModule, BcPaginatorModule],
                    exports: [
                        BcTableContainerComponent,
                        BcTableHeaderComponent,
                        BcTableContentComponent,
                        BcTableDirective,
                        BcCellDirective,
                        BcTableFooterComponent,
                        BcTableDropdownComponent,
                        BcTableEmptyContainerComponent,
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcCellDirective, BcTableContainerComponent, BcTableContentComponent, BcTableDirective, BcTableDropdownComponent, BcTableEmptyContainerComponent, BcTableFooterComponent, BcTableHeaderComponent, BcTableModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-table.mjs.map
