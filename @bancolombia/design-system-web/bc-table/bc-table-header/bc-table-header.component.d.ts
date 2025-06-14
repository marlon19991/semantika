import { AfterViewInit, EventEmitter } from '@angular/core';
import { BcTableActionButton, BcTableOptionMenu } from '@bancolombia/design-system-behaviors';
import { BcPaginatorComponent } from '@bancolombia/design-system-web/bc-paginator';
import * as i0 from "@angular/core";
export declare class BcTableHeaderComponent implements AfterViewInit {
    /**
     * Título de la tabla, este puede tomar cualquier valor string, por defecto es 'Título de la tabla'.
     *
     * @memberof BcTableHeaderComponent
     */
    title: string;
    /**
     * Texto o label que se muestra en el botón de acción cuando la tabla es de tipo selección,
     * este se visualiza cuando algunas de las filas es seleccionada. Por defecto es 'Acción'.
     *
     * @memberof BcTableHeaderComponent
     */
    actionsSelections: BcTableActionButton[];
    /**
     * Texto o label que se muestra en el botón de acción cuando la tabla es de tipo selección,
     * este se visualiza cuando algunas de las filas es seleccionada. Por defecto es 'Acción'.
     *
     * @memberof BcTableHeaderComponent
     */
    menuOptions: BcTableOptionMenu[];
    /**
     * Evento de salida para cuando se da click a algunas de las acciones del header en modo selección.
     *
     * @type {EventEmitter<any>}
     * @memberof BcTableHeaderComponent
     */
    actionClicked: EventEmitter<any>;
    /**
     * content que hace referencia al paginador alojado dentro del header
     * @memberof BcTableHeaderComponent
     */
    content: BcPaginatorComponent;
    ngAfterViewInit(): void;
    /**
     * metodo para obtener la referencia del paginador sino lo encuentra
     * lo retorna como undefined
     * @returns paginador o undefined
     */
    getPaginator(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTableHeaderComponent, "bc-table-header", never, { "title": "title"; "actionsSelections": "actionsSelections"; "menuOptions": "menuOptions"; }, { "actionClicked": "actionClicked"; }, ["content"], ["*"]>;
}
