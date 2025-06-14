import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-icon";
/**
 * Componente Transaction Status
 * Icono utilizado en diferentes componentes y plantillas con el fín de identificar un estado.
 *
 * @export
 * @class BcTransactionStatusComponent
 */
export class BcTransactionStatusComponent {
    constructor() {
        this.SizeIcon = '';
        this.borderr = '';
        /**
         * Parámetro para denotar el tipo de estado
         *
         * @type {('success' | 'error' | 'warning' | 'info' | 'generic'|'dynamic'|'dynamicTxt'|'dynamicxs' )}
         * @memberof BcTransactionStatusComponent
         */
        this.status = 'info';
        /**
         * Parámetro para denotar el tamaño del componente
         *
         * @type {('xs' | 'sm' | 'md'|'2xs'|'emd'|'sn')}
         * @memberof BcTransactionStatusComponent
         */
        this.size = 'md';
        /**
         * Tipos de iconos
         *
         * @memberof BcTransactionStatusComponent
         */
        this.icons = {
            success: 'ok',
            error: 'error',
            warning: 'hand',
            info: 'idea',
            generic: 'megaphone',
            "": 'idea'
        };
        /**
         * Parámetro para el custom icon del componente.
         *
         * @type {string}
         * @memberof BcTransactionStatusComponent
         */
        this.customIcon = '';
        /**
            * Parámetro para el custom icon del componente.
            *
            * @type {string}
            * @memberof BcTransactionStatusComponent
            */
        this.texto = '';
        /**
            * Parámetro para el color del componente.
            *
            * @type {string}
            * @memberof BcTransactionStatusComponent
            */
        this.color = '';
        /**
            * Parámetro para el agregar border al componente.
            *
            * @type {string}
            * @memberof BcTransactionStatusComponent
            */
        this.border = '';
        /**
            * Parámetro para el agregar border al componente.
            *
            * @type {string}
            * @memberof BcTransactionStatusComponent
            */
        this.textAriaLabel = '';
    }
    ngOnChanges() {
        const sizeMap = {
            'sm': '2xs',
            '2xs': 'xs',
            'xs': 'xs',
            'emd': 'sm',
            'md': 'md'
        };
        this.SizeIcon = sizeMap[this.size];
    }
}
BcTransactionStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTransactionStatusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcTransactionStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcTransactionStatusComponent, selector: "bc-transaction-status", inputs: { status: "status", size: "size", customIcon: "customIcon", texto: "texto", color: "color", border: "border", textAriaLabel: "textAriaLabel" }, usesOnChanges: true, ngImport: i0, template: "<div [attr.aria-label]=\"textAriaLabel\" class=\"bc-transaction-status bc-transaction-status-{{ status }} bc-transaction-status-{{ size }}  {{color}} {{border}}  \">\n  <bc-icon\n  [size]=\"SizeIcon?SizeIcon:size\"\n  >{{ customIcon ? customIcon : icons[status]}}<p class=\"texto\">{{texto}}</p></bc-icon>\n</div>\n", components: [{ type: i1.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTransactionStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-transaction-status', template: "<div [attr.aria-label]=\"textAriaLabel\" class=\"bc-transaction-status bc-transaction-status-{{ status }} bc-transaction-status-{{ size }}  {{color}} {{border}}  \">\n  <bc-icon\n  [size]=\"SizeIcon?SizeIcon:size\"\n  >{{ customIcon ? customIcon : icons[status]}}<p class=\"texto\">{{texto}}</p></bc-icon>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { status: [{
                type: Input
            }], size: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], texto: [{
                type: Input
            }], color: [{
                type: Input
            }], border: [{
                type: Input
            }], textAriaLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdHJhbnNhY3Rpb24tc3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10cmFuc2FjdGlvbi1zdGF0dXMvYmMtdHJhbnNhY3Rpb24tc3RhdHVzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy10cmFuc2FjdGlvbi1zdGF0dXMvYmMtdHJhbnNhY3Rpb24tc3RhdHVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDOzs7QUFDM0Q7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLDRCQUE0QjtJQWtFdkM7UUFqRUEsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ25COzs7OztXQUtHO1FBQ08sV0FBTSxHQUE0RixNQUFNLENBQUM7UUFDbEg7Ozs7O1dBS0c7UUFDTSxTQUFJLEdBQW9DLElBQUksQ0FBQztRQUV2RDs7OztXQUlHO1FBQ0gsVUFBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsV0FBVztZQUNwQixFQUFFLEVBQUUsTUFBTTtTQUNYLENBQUE7UUFDQTs7Ozs7V0FLRztRQUNPLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDckM7Ozs7O2NBS007UUFDRyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQzVCOzs7OztjQUtNO1FBQ0csVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUM1Qjs7Ozs7Y0FLTTtRQUNHLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDN0I7Ozs7O2NBS007UUFDRyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ2pCLFdBQVc7UUFDVCxNQUFNLE9BQU8sR0FBRztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxJQUFJO1NBQ1QsQ0FBQztRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzt5SEE1RVUsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsME9DWnpDLDZUQUtBOzJGRE9hLDRCQUE0QjtrQkFKeEMsU0FBUzsrQkFDRSx1QkFBdUI7MEVBWXZCLE1BQU07c0JBQWQsS0FBSztnQkFPRyxJQUFJO3NCQUFaLEtBQUs7Z0JBcUJJLFVBQVU7c0JBQWxCLEtBQUs7Z0JBT0QsS0FBSztzQkFBYixLQUFLO2dCQU9HLEtBQUs7c0JBQWIsS0FBSztnQkFPRyxNQUFNO3NCQUFkLEtBQUs7Z0JBT0csYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIENvbXBvbmVudGUgVHJhbnNhY3Rpb24gU3RhdHVzXG4gKiBJY29ubyB1dGlsaXphZG8gZW4gZGlmZXJlbnRlcyBjb21wb25lbnRlcyB5IHBsYW50aWxsYXMgY29uIGVsIGbDrW4gZGUgaWRlbnRpZmljYXIgdW4gZXN0YWRvLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY1RyYW5zYWN0aW9uU3RhdHVzQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXRyYW5zYWN0aW9uLXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnYmMtdHJhbnNhY3Rpb24tc3RhdHVzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY1RyYW5zYWN0aW9uU3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgU2l6ZUljb246IHN0cmluZyA9ICcnO1xuIGJvcmRlcnI6c3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBQYXLDoW1ldHJvIHBhcmEgZGVub3RhciBlbCB0aXBvIGRlIGVzdGFkb1xuICAgKlxuICAgKiBAdHlwZSB7KCdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZ2VuZXJpYyd8J2R5bmFtaWMnfCdkeW5hbWljVHh0J3wnZHluYW1pY3hzJyApfVxuICAgKiBAbWVtYmVyb2YgQmNUcmFuc2FjdGlvblN0YXR1c0NvbXBvbmVudFxuICAgKi9cbiAgIEBJbnB1dCgpIHN0YXR1czogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICdnZW5lcmljJyB8ICdkeW5hbWljJ3wnZHluYW1pY1R4dCd8J2R5bmFtaWN4cyd8J2luZm8nID0gJ2luZm8nO1xuICAgLyoqXG4gICAgKiBQYXLDoW1ldHJvIHBhcmEgZGVub3RhciBlbCB0YW1hw7FvIGRlbCBjb21wb25lbnRlXG4gICAgKlxuICAgICogQHR5cGUgeygneHMnIHwgJ3NtJyB8ICdtZCd8JzJ4cyd8J2VtZCd8J3NuJyl9XG4gICAgKiBAbWVtYmVyb2YgQmNUcmFuc2FjdGlvblN0YXR1c0NvbXBvbmVudFxuICAgICovXG4gICBASW5wdXQoKSBzaXplOiAneHMnfCdzbSd8J2VtZCd8JzJ4cyd8J3NuJ3wnbWQnID0gJ21kJztcblxuICAvKipcbiAgICogVGlwb3MgZGUgaWNvbm9zXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1RyYW5zYWN0aW9uU3RhdHVzQ29tcG9uZW50XG4gICAqL1xuICBpY29ucyA9IHtcbiAgICBzdWNjZXNzOiAnb2snLFxuICAgIGVycm9yOiAnZXJyb3InLFxuICAgIHdhcm5pbmc6ICdoYW5kJyxcbiAgICBpbmZvOiAnaWRlYScsXG4gICAgZ2VuZXJpYzogJ21lZ2FwaG9uZScsXG4gICAgXCJcIjogJ2lkZWEnXG4gIH1cbiAgIC8qKlxuICAgICogUGFyw6FtZXRybyBwYXJhIGVsIGN1c3RvbSBpY29uIGRlbCBjb21wb25lbnRlLlxuICAgICpcbiAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgKiBAbWVtYmVyb2YgQmNUcmFuc2FjdGlvblN0YXR1c0NvbXBvbmVudFxuICAgICovXG4gICAgQElucHV0KCkgY3VzdG9tSWNvbjogc3RyaW5nID0gJyc7XG4vKipcbiAgICAqIFBhcsOhbWV0cm8gcGFyYSBlbCBjdXN0b20gaWNvbiBkZWwgY29tcG9uZW50ZS5cbiAgICAqXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICogQG1lbWJlcm9mIEJjVHJhbnNhY3Rpb25TdGF0dXNDb21wb25lbnRcbiAgICAqL1xuQElucHV0KCkgdGV4dG86IHN0cmluZyA9ICcnO1xuLyoqXG4gICAgKiBQYXLDoW1ldHJvIHBhcmEgZWwgY29sb3IgZGVsIGNvbXBvbmVudGUuXG4gICAgKlxuICAgICogQHR5cGUge3N0cmluZ31cbiAgICAqIEBtZW1iZXJvZiBCY1RyYW5zYWN0aW9uU3RhdHVzQ29tcG9uZW50XG4gICAgKi9cbkBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnJztcbi8qKlxuICAgICogUGFyw6FtZXRybyBwYXJhIGVsIGFncmVnYXIgYm9yZGVyIGFsIGNvbXBvbmVudGUuXG4gICAgKlxuICAgICogQHR5cGUge3N0cmluZ31cbiAgICAqIEBtZW1iZXJvZiBCY1RyYW5zYWN0aW9uU3RhdHVzQ29tcG9uZW50XG4gICAgKi9cbkBJbnB1dCgpIGJvcmRlcjogc3RyaW5nID0gJyc7XG4vKipcbiAgICAqIFBhcsOhbWV0cm8gcGFyYSBlbCBhZ3JlZ2FyIGJvcmRlciBhbCBjb21wb25lbnRlLlxuICAgICpcbiAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgKiBAbWVtYmVyb2YgQmNUcmFuc2FjdGlvblN0YXR1c0NvbXBvbmVudFxuICAgICovXG5ASW5wdXQoKSB0ZXh0QXJpYUxhYmVsOiBzdHJpbmcgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgbmdPbkNoYW5nZXMoKTp2b2lkIHtcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICdzbSc6ICcyeHMnLFxuICAgICcyeHMnOiAneHMnLFxuICAgICd4cyc6ICd4cycsXG4gICAgJ2VtZCc6ICdzbScsXG4gICAgJ21kJzogJ21kJ1xuICAgIH07XG4gIHRoaXMuU2l6ZUljb24gPSBzaXplTWFwW3RoaXMuc2l6ZV07XG4gIH1cbn1cbiIsIjxkaXYgW2F0dHIuYXJpYS1sYWJlbF09XCJ0ZXh0QXJpYUxhYmVsXCIgY2xhc3M9XCJiYy10cmFuc2FjdGlvbi1zdGF0dXMgYmMtdHJhbnNhY3Rpb24tc3RhdHVzLXt7IHN0YXR1cyB9fSBiYy10cmFuc2FjdGlvbi1zdGF0dXMte3sgc2l6ZSB9fSAge3tjb2xvcn19IHt7Ym9yZGVyfX0gIFwiPlxuICA8YmMtaWNvblxuICBbc2l6ZV09XCJTaXplSWNvbj9TaXplSWNvbjpzaXplXCJcbiAgPnt7IGN1c3RvbUljb24gPyBjdXN0b21JY29uIDogaWNvbnNbc3RhdHVzXX19PHAgY2xhc3M9XCJ0ZXh0b1wiPnt7dGV4dG99fTwvcD48L2JjLWljb24+XG48L2Rpdj5cbiJdfQ==