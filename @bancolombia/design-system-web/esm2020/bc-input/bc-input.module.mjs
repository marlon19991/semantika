import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcInputDirective } from './bc-input.directive';
import { BcFormFieldComponent } from './bc-form-field/bc-form-field.component';
import * as i0 from "@angular/core";
/**
 * Importa la directiva de campos input con
 * los diseños de Bancolombia S.A.
 * @package bc-input
 *   @Directiva bc-input
 *   @param  theme Tema para input: default || dark
 *   @param typeInput Tipo de input: input-default || input-icon-left || input-icon-right || input-area
 *   @example
 *
 *    <input bc-input typeInput="input-default" type="text" placeholder="Text" value="">
 *    <input bc-input typeInput="input-icon-left" theme="dark" type="text" placeholder="Text" value="">
 *  @component bc-form-field
 *  @param {string} inputType: seleccione "date" para selector con calendario
 *  @param {string} calendarType: seleccione "split" para un calendario con el selector dividido
 *
 *  @example
 *  <bc-form-field inputType="date" calendarType="split">
 *    <input bc-input typeInput="input-default-left" type="date" value="" required/>
 *    <label>Split Date Picker</label>
 *    <em>calendar-alt</em>
 *    <span>Selecciona una fecha del calendario</span>
 *    </bc-form-field>
 *
 *
 *   @Advertencia El uso de colores por letras ejemplo red, green, blue no son compatibles
 *                  pues no hacen parte del sistema de diseño
 *
 * @author: Bancolombia S.A
 */
export class BcInputModule {
}
BcInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputModule, declarations: [BcInputDirective, BcFormFieldComponent], imports: [CommonModule], exports: [BcInputDirective, BcFormFieldComponent] });
BcInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputDirective, BcFormFieldComponent],
                    imports: [CommonModule],
                    exports: [BcInputDirective, BcFormFieldComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWlucHV0L2JjLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFL0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFNSCxNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQUpULGdCQUFnQixFQUFFLG9CQUFvQixhQUMzQyxZQUFZLGFBQ1osZ0JBQWdCLEVBQUUsb0JBQW9COzJHQUVyQyxhQUFhLFlBSGYsQ0FBQyxZQUFZLENBQUM7MkZBR1osYUFBYTtrQkFMekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQztvQkFDdEQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQztpQkFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2JjLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCY0Zvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vYmMtZm9ybS1maWVsZC9iYy1mb3JtLWZpZWxkLmNvbXBvbmVudCc7XG5cbi8qKlxuICogSW1wb3J0YSBsYSBkaXJlY3RpdmEgZGUgY2FtcG9zIGlucHV0IGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIEBwYWNrYWdlIGJjLWlucHV0XG4gKiAgIEBEaXJlY3RpdmEgYmMtaW5wdXRcbiAqICAgQHBhcmFtICB0aGVtZSBUZW1hIHBhcmEgaW5wdXQ6IGRlZmF1bHQgfHwgZGFya1xuICogICBAcGFyYW0gdHlwZUlucHV0IFRpcG8gZGUgaW5wdXQ6IGlucHV0LWRlZmF1bHQgfHwgaW5wdXQtaWNvbi1sZWZ0IHx8IGlucHV0LWljb24tcmlnaHQgfHwgaW5wdXQtYXJlYVxuICogICBAZXhhbXBsZVxuICpcbiAqICAgIDxpbnB1dCBiYy1pbnB1dCB0eXBlSW5wdXQ9XCJpbnB1dC1kZWZhdWx0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRleHRcIiB2YWx1ZT1cIlwiPlxuICogICAgPGlucHV0IGJjLWlucHV0IHR5cGVJbnB1dD1cImlucHV0LWljb24tbGVmdFwiIHRoZW1lPVwiZGFya1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUZXh0XCIgdmFsdWU9XCJcIj5cbiAqICBAY29tcG9uZW50IGJjLWZvcm0tZmllbGRcbiAqICBAcGFyYW0ge3N0cmluZ30gaW5wdXRUeXBlOiBzZWxlY2Npb25lIFwiZGF0ZVwiIHBhcmEgc2VsZWN0b3IgY29uIGNhbGVuZGFyaW9cbiAqICBAcGFyYW0ge3N0cmluZ30gY2FsZW5kYXJUeXBlOiBzZWxlY2Npb25lIFwic3BsaXRcIiBwYXJhIHVuIGNhbGVuZGFyaW8gY29uIGVsIHNlbGVjdG9yIGRpdmlkaWRvXG4gKlxuICogIEBleGFtcGxlXG4gKiAgPGJjLWZvcm0tZmllbGQgaW5wdXRUeXBlPVwiZGF0ZVwiIGNhbGVuZGFyVHlwZT1cInNwbGl0XCI+XG4gKiAgICA8aW5wdXQgYmMtaW5wdXQgdHlwZUlucHV0PVwiaW5wdXQtZGVmYXVsdC1sZWZ0XCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkLz5cbiAqICAgIDxsYWJlbD5TcGxpdCBEYXRlIFBpY2tlcjwvbGFiZWw+XG4gKiAgICA8ZW0+Y2FsZW5kYXItYWx0PC9lbT5cbiAqICAgIDxzcGFuPlNlbGVjY2lvbmEgdW5hIGZlY2hhIGRlbCBjYWxlbmRhcmlvPC9zcGFuPlxuICogICAgPC9iYy1mb3JtLWZpZWxkPlxuICpcbiAqXG4gKiAgIEBBZHZlcnRlbmNpYSBFbCB1c28gZGUgY29sb3JlcyBwb3IgbGV0cmFzIGVqZW1wbG8gcmVkLCBncmVlbiwgYmx1ZSBubyBzb24gY29tcGF0aWJsZXNcbiAqICAgICAgICAgICAgICAgICAgcHVlcyBubyBoYWNlbiBwYXJ0ZSBkZWwgc2lzdGVtYSBkZSBkaXNlw7FvXG4gKlxuICogQGF1dGhvcjogQmFuY29sb21iaWEgUy5BXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JjSW5wdXREaXJlY3RpdmUsIEJjRm9ybUZpZWxkQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtCY0lucHV0RGlyZWN0aXZlLCBCY0Zvcm1GaWVsZENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjSW5wdXRNb2R1bGUge31cbiJdfQ==