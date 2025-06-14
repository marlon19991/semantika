import * as i0 from '@angular/core';
import { Directive, Input, HostBinding, ContentChildren, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcCheckboxModule } from '@bancolombia/design-system-web/bc-checkbox';
import { BcFloatMenuModule } from '@bancolombia/design-system-web/bc-float-menu';
import { BcTagModule } from '@bancolombia/design-system-web/bc-tag';
import { BcRadioModule } from '@bancolombia/design-system-web/bc-radio';
import { BcListRowBehavior } from '@bancolombia/design-system-behaviors';

var BcListRowVariants;
(function (BcListRowVariants) {
    BcListRowVariants["ACTION"] = "action";
    BcListRowVariants["ACTION_CHECKBOX"] = "action-checkbox";
    BcListRowVariants["ALIGN_LEFT"] = "align-left";
    BcListRowVariants["ALIGN_RIGHT"] = "align-right";
    BcListRowVariants["AUTO_WIDTH"] = "auto-width";
    BcListRowVariants["DATA"] = "data";
    BcListRowVariants["CHECKBOX_INPUT"] = "checkbox-input";
    BcListRowVariants["CONTENT"] = "content";
    BcListRowVariants["ELEVATION"] = "elevation";
    BcListRowVariants["HOVER"] = "hover";
    BcListRowVariants["ICON"] = "icon";
    BcListRowVariants["JUSTIFY_CENTER"] = "justify-center";
    BcListRowVariants["JUSTIFY_RIGHT"] = "justify-right";
    BcListRowVariants["MENU"] = "menu";
    BcListRowVariants["SELECTED"] = "selected";
    BcListRowVariants["TITLE"] = "title";
    BcListRowVariants["TEXT"] = "text";
    BcListRowVariants["SHRINKABLE"] = "shrinkable";
    BcListRowVariants["X_MARGIN_FOUR"] = "x-margin-4";
    BcListRowVariants["X_MARGIN_THREE"] = "x-margin-3";
    BcListRowVariants["X_MARGIN_TWO"] = "x-margin-2";
    BcListRowVariants["PRIMARY"] = "primary";
    BcListRowVariants["LEFT_MOBILE_POSITION"] = "left-mobile-position";
})(BcListRowVariants || (BcListRowVariants = {}));
var BcListMainVariants;
(function (BcListMainVariants) {
    BcListMainVariants["NAMESPACE"] = "bc-list";
    BcListMainVariants["COLUMN"] = "column";
    BcListMainVariants["ROW"] = "row";
    BcListMainVariants["TABLE"] = "table";
})(BcListMainVariants || (BcListMainVariants = {}));
const BC_LIST_ROW = `${BcListMainVariants.NAMESPACE}-${BcListMainVariants.ROW}`;
const BC_LIST_COLUMN = `${BcListMainVariants.NAMESPACE}-${BcListMainVariants.COLUMN}`;
const BC_LIST_ROW_TABLE = `${BcListMainVariants.NAMESPACE}-${BcListMainVariants.ROW}-${BcListMainVariants.TABLE}`;

/**
 * Aplica el comportamiento del bc-list-row
 *
 * @export
 * @class BcListRowTableDirective
 */
class BcListRowTableDirective {
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

/**
 * Aplica el diseño y los estilos basicos para el contenedor bc list creados para Bancolombia S.A.
 *
 * @export
 * @class BcListRowDirective
 */
class BcListRowDirective {
    constructor() {
        /**
        * Propiedad que almacena el valor de la clase `bc-list-row` por defecto
        * @type `string`
        * @memberof BcListRowDirective
        */
        this.defaultClass = BC_LIST_ROW;
        /**
        * Propiedad que ajusta si se debe agregar la clase `bc-list-row-elevation` o no
        * @type `boolean`
        * @memberof BcListRowDirective
        */
        this.showElevation = false;
        /**
        * Propiedad que ajusta si se debe agregar la clase `bc-list-row-title` o no
        * @type `boolean`
        * @memberof BcListRowDirective
        */
        this.isTitle = false;
        /**
        * Propiedad que permite capturar otras clases ingresadas desde el atributo class
        * @type `string`
        * @memberof BcListRowDirective
        */
        this.class = '';
    }
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListRowDirective
    */
    get hostClasses() {
        return [
            this.defaultClass,
            this.rowVariant(),
            this.setElevation(),
            this.class
        ].join(' ');
    }
    /**
     * Si la propiedad showElevation es verdadera, devuelve la cadena
     * `bc-list-row-elevation` de lo contrario, devuelve una cadena vacía
     * @returns El nombre de clase para la fila.
     */
    setElevation() {
        return this.showElevation ? `${BC_LIST_ROW}-${BcListRowVariants.ELEVATION}` : '';
    }
    /**
     * Si la propiedad isTitle es verdadera, devuelve la cadena
     * `bc-list-row-title` de lo contrario, devuelve una cadena vacía
     * @returns El nombre de clase para la fila.
     */
    rowVariant() {
        return this.isTitle ? `${BC_LIST_ROW}-${BcListRowVariants.TITLE}` : '';
    }
}
BcListRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcListRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcListRowDirective, selector: "[bc-list-row]", inputs: { showElevation: "showElevation", isTitle: "isTitle", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-list-row]',
                }]
        }], propDecorators: { showElevation: [{
                type: Input
            }], isTitle: [{
                type: Input
            }], class: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

/**
 * Aplica el diseño y los estilos basicos para el contenedor bc list y sus columnas creados para Bancolombia S.A.
 *
 * @export
 * @class BcListRowDirective
 * @implements {AfterContentInit}
 */
class BcListColumnDirective {
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        /**
         * Propiedad que define el estilo por defecto de las columnas
         * @type  `string`
         * @memberof BcListColumnDirective
         */
        this.defaultClass = BC_LIST_COLUMN;
        /**
         * Propiedad que define la de verificación
         * @type  `boolean`
         * @memberof BcListColumnDirective
         */
        this.actionColumn = false;
        /**
        * Propiedad que define la columna de menu o accionables
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.menuColumn = false;
        /**
        * Propiedad que define si la columna de datos tiene marca de autorizador internacional
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.hasBrand = false;
        /**
        * Propiedad que define si la columna es de ancho variable
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.hasAutoWidth = false;
        /**
        * Propiedad que define si la columna se mostrará en responsive tablet y/o mobile
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.displayPrimary = false;
        /**
        * Propiedad que define si el componente bc-tag se mostrará en responsive mobile
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.displayMobileBottomLeftContent = false;
        /**
        * Propiedad que permite capturar otras clases ingresadas desde el atributo class
        * @type  `string`
        * @memberof BcListColumnDirective
        */
        this.class = '';
    }
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListColumnDirective
    */
    get hostClasses() {
        return [
            this.defaultClass,
            this.setActionColumn(),
            this.setMenuColumn(),
            this.setContentColumn(),
            this.setBrandContent(),
            this.setMarginBetweenCols(),
            this.setAlignContent(),
            this.setAutoWidth(),
            this.setMobileBottomLeftContent(),
            this.class
        ].join(' ');
    }
    ngAfterContentInit() {
        this.setColumnsToResponsive();
    }
    /**
     * Si la alineación es correcta, devuelve la clase de alineación correcta. Si la alineación es
     * izquierda, devuelve la clase de alineación izquierda. De lo contrario, devuelve una cadena
     * vacía.
     * @returns El nombre de clase para la alineación de la lista.
     * @memberof BcListColumnDirective
     */
    setAlignContent() {
        if (this.alignment === 'right') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.ALIGN_RIGHT}`;
        }
        if (this.alignment === 'left') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.ALIGN_LEFT}`;
        }
        return '';
    }
    /**
     *Valida si una columna es de verificación y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setActionColumn() {
        return this.actionColumn === true ? `${BC_LIST_COLUMN}-${BcListRowVariants.ACTION}` : '';
    }
    /**
     * Valida si una columna es accionable y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setMenuColumn() {
        return this.menuColumn === true ? `${BC_LIST_COLUMN}-${BcListRowVariants.MENU}` : '';
    }
    /**
     * Valida si una columna es de contenido y aplica la clase correspondiente.
     * @returns el nombre de la clase o una cadena vacia.
     * @memberof BcListColumnDirective
     */
    setContentColumn() {
        return this.menuColumn === false && this.actionColumn === false ? `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}` : '';
    }
    /**
     * Verificia la opción que tenga asignada la propiedad marginBetweenCols para aplicar el estilo dependiendo de esa propiedad
     * @memberof BcListColumnDirective
     * @returns el nombre de la clase o una cadena vacia.
     */
    setMarginBetweenCols() {
        if (this.marginBetweenCols === 'two') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.X_MARGIN_TWO}`;
        }
        if (this.marginBetweenCols === 'three') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.X_MARGIN_THREE}`;
        }
        if (this.marginBetweenCols === 'four') {
            return `${BC_LIST_COLUMN}-${BcListRowVariants.X_MARGIN_FOUR}`;
        }
        return '';
    }
    /**
     * Ajusta la opción de que una columna sea muestre de forma adecuada la marca de la tarjeta de crédito.
     * @returns El nombre de clase para el contenido del elemento de lista.
     * @memberof BcListColumnDirective
     */
    setBrandContent() {
        return this.hasBrand ? `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}-${BcListRowVariants.ICON}` : '';
    }
    /**
     * Ajusta la opción para que una columna sea con ancho variable.
     * @returns El nombre de clase para la columna.
     * @memberof BcListColumnDirective
     */
    setAutoWidth() {
        return this.hasAutoWidth ? `${BC_LIST_COLUMN}-${BcListRowVariants.AUTO_WIDTH}` : '';
    }
    /**
     * aplica el responsive a las columnas.
     * @memberof BcListColumnDirective
     */
    setColumnsToResponsive() {
        const element = this.element.nativeElement;
        const primaryClass = `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}-${BcListRowVariants.PRIMARY}`;
        this.displayPrimary && this.renderer.addClass(element, primaryClass);
    }
    /**
     * Ajusta la opción para que una columna pueda o no mostrar el contenido en la parte inferior izquierda en mobile.
     * @returns El nombre de clase para que se visualice el contenido en la parte inferior izquierda en resolución mobile.
     * @memberof BcListColumnDirective
     */
    setMobileBottomLeftContent() {
        return this.displayMobileBottomLeftContent ? `${BC_LIST_COLUMN}-${BcListRowVariants.LEFT_MOBILE_POSITION}` : '';
    }
}
BcListColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListColumnDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BcListColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcListColumnDirective, selector: "[bc-column-content]", inputs: { alignment: "alignment", actionColumn: "actionColumn", menuColumn: "menuColumn", marginBetweenCols: "marginBetweenCols", hasBrand: "hasBrand", hasAutoWidth: "hasAutoWidth", displayPrimary: "displayPrimary", displayMobileBottomLeftContent: "displayMobileBottomLeftContent", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-column-content]',
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { alignment: [{
                type: Input
            }], actionColumn: [{
                type: Input
            }], menuColumn: [{
                type: Input
            }], marginBetweenCols: [{
                type: Input
            }], hasBrand: [{
                type: Input
            }], hasAutoWidth: [{
                type: Input
            }], displayPrimary: [{
                type: Input
            }], displayMobileBottomLeftContent: [{
                type: Input
            }], class: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

/**
 * Aplica el diseño y los estilos relacionados al texto dentro de las columnas del bc-list creados para Bancolombia S.A.
 *
 * @export
 * @class BcListColumnContentDataDirective
 * @implements {AfterContentInit}
 */
class BcListColumnContentDataDirective {
    constructor(renderer) {
        this.renderer = renderer;
        /**
        * Propiedad que define el estilo por defecto de las columnas
        * @type  `string`
        * @memberof BcListColumnContentDataDirective
        */
        this.defaultClass = `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}-${BcListRowVariants.DATA}`;
        /**
        * Propiedad que permite capturar otras clases ingresadas desde el atributo class
        * @type  `string`
        * @memberof BcListColumnDirective
        */
        this.class = '';
        /**
        * Propiedad que permite configurar el texto dentro de la columna con ellipsis
        * @type  `boolean`
        * @memberof BcListColumnDirective
        */
        this.hasTextToShrink = false;
    }
    /**
    * Getter que permite agregar todas las clases ajustadas en la directiva
    * @type `string`
    * @memberof BcListColumnContentDataDirective
    */
    get hostClasses() {
        return [
            this.defaultClass,
            this.class
        ].join(' ');
    }
    ngAfterContentInit() {
        this.setTextEllipsis();
    }
    /**
     * Verifica que la columna ha sido configurada para mostrar texto con ellipis. Agrega la clase
     * `bc-list-column-content-data-text-shrinkable` a cada contenedor secundario
     * @memberof BcListColumnContentDataDirective
     */
    setTextEllipsis() {
        if (this.hasTextToShrink) {
            const styleShrinkeable = `${BC_LIST_COLUMN}-${BcListRowVariants.CONTENT}-${BcListRowVariants.DATA}-${BcListRowVariants.TEXT}-${BcListRowVariants.SHRINKABLE}`;
            this.childContainers.toArray().forEach((container) => {
                this.renderer.addClass(container.nativeElement, styleShrinkeable);
            });
        }
    }
}
BcListColumnContentDataDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListColumnContentDataDirective, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
BcListColumnContentDataDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcListColumnContentDataDirective, selector: "[bc-column-content-data]", inputs: { class: "class", hasTextToShrink: "hasTextToShrink" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "childContainers", predicate: ["data"] }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListColumnContentDataDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-column-content-data]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { class: [{
                type: Input
            }], hasTextToShrink: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], childContainers: [{
                type: ContentChildren,
                args: ['data']
            }] } });

/**
 * Importa directivas de estilos para el bc-list-row con los diseños de Bancolombia S.A.
 *
 * @example
 *  <h4 class="bc-margin-top-6 bc-margin-bottom-2">List Row con checkbox y menú</h4>
 * <table bc-list-row-table>
 *   <tr bc-list-row [showElevation]="true" id="table_1_row_1">
 *     <td bc-column-content [actionColumn]="true" alignment="right">
 *       <bc-checkbox class="col-4 offset-5"></bc-checkbox>
 *     </td>
 *     <td bc-column-content [hasBrand]="true">
 *       <div>
 *         <bc-icon [attr.id]="'listRowIcon_1'" class="bc-list-row-content-figure" size="xl" width="70px"
 *           [name]="'il-master'" aria-hidden="true" [aria-label]="'icono mastercard'"></bc-icon>
 *       </div>
 *       <div>
 *         hola mundo
 *       </div>
 *     </td>
 *     <td bc-column-content [hasBrand]="true">
 *       <div>
 *         <bc-icon [attr.id]="'listRowIcon_1'" class="bc-list-row-content-figure" size="xl" width="70px"
 *           [name]="'il-master'" aria-hidden="true" [aria-label]="'icono mastercard'"></bc-icon>
 *       </div>
 *       <div class="bc-text-start" bc-column-content-data [hasTextToShrink]="true">
 *         <p #data>Datos de la tarjeta de credito</p>
 *         <p #data>Tarjeta de credito Oro</p>
 *       </div>
 *     </td>
 *     <td bc-column-content alignment="center" [displayPrimary]="true">hola mundo</td>
 *     <td bc-column-content>
 *       <bc-tag [textElement]="'hola mundo'" componentId="bc-item-1" [status]="'disabled'" [typeButtonTag]="'secondary'"
 *         [iconLeft]="'calendar-alt'">
 *       </bc-tag>
 *     </td>
 *     <td bc-column-content [displayPrimary]="true">
 *       <div class="bc-text-start" bc-column-content-data>
 *         <p >Label 5</p>
 *         <p >0.000,00</p>
 *       </div>
 *     </td>
 *     <td bc-column-content alignment="center" [displayPrimary]="true">hola mundo</td>
 *     <td bc-column-content alignment="center" [displayPrimary]="true">hola mundo</td>
 *     <td bc-column-content alignment="center" [displayPrimary]="true">hola mundo</td>
 *     <td bc-column-content [menuColumn]="true" >
 *       <bc-float-menu [options]=options>
 *         <em class="bc-icon bc-md bc-float-menu-toggle" aria-controls="myDropdown">secondary-menu</em>
 *       </bc-float-menu>
 *     </td>
 *   </tr>
 * </table>
 *
 * @author: Bancolombia S.A
 */
class BcListRowModule {
}
BcListRowModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcListRowModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowModule, declarations: [BcListRowTableDirective, BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective], imports: [BcIconModule, BcCheckboxModule, BcFloatMenuModule, CommonModule, BcTagModule, BcRadioModule], exports: [BcListRowTableDirective, BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective] });
BcListRowModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowModule, imports: [[BcIconModule, BcCheckboxModule, BcFloatMenuModule, CommonModule, BcTagModule, BcRadioModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcListRowModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcListRowTableDirective, BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective],
                    imports: [BcIconModule, BcCheckboxModule, BcFloatMenuModule, CommonModule, BcTagModule, BcRadioModule],
                    exports: [BcListRowTableDirective, BcListRowDirective, BcListColumnDirective, BcListColumnContentDataDirective],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcListColumnContentDataDirective, BcListColumnDirective, BcListRowDirective, BcListRowModule, BcListRowTableDirective };
//# sourceMappingURL=bancolombia-design-system-web-bc-list-row.mjs.map
