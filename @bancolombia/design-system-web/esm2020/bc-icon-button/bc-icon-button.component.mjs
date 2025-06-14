import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Componente Icon Button.
 * El Icon Button es un accionable que sintetiza y resalta
 * una funcionalidad dentro de una interfaz.
 *
 * @export
 * @class BcIconButtonComponent
 */
export class BcIconButtonComponent {
    constructor() {
        this.classList = '';
        this.ariaLabelFabSelected = 'Cerrar';
        /**
         * Parámetro para denotar el shadow del botton en variante Solid
         * @type {boolean}
         * @memberof BcIconButtonComponent
         */
        this.shadow = false;
        /**
         * Parámetro para el custom icon del componente.
         * @type {string}
         * @memberof BcIconButtonComponent
         */
        this.customIcon = '';
        /**
         * Desabilitar button
         * @type {boolean}
         * @memberof BcIconButtonComponent
         */
        this.statusButton = false;
        /**
         * Por deprecar. Utilizar 'selected'
         * @type {boolean}
         * @memberof BcIconButtonComponent
         */
        this.seleted = false;
        /**
         * Parámetro para poner el componente en un estado seleccionado.
         * @type {boolean}
         * @memberof BcIconButtonComponent
         */
        this.selected = false;
    }
    ngOnChanges(changes) {
        if (this.type === 'solid') {
            const newColor = changes.color?.currentValue || this.color;
            this.color = newColor || 'white';
            this.classList = `bc-icon-button-${this.color}`;
        }
        else {
            this.classList = '';
        }
        if (changes.selected || changes.type) {
            this.updateAriaLabel();
        }
    }
    updateAriaLabel() {
        if (this.type === 'fab' && (this.selected || this.seleted)) {
            this.ariaLabelValue = this.ariaLabelFabSelected;
        }
        else {
            this.ariaLabelValue = this.ariaLabel;
        }
    }
}
BcIconButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcIconButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcIconButtonComponent, selector: "bc-icon-button", inputs: { type: "type", color: "color", size: "size", shadow: "shadow", customIcon: "customIcon", statusButton: "statusButton", seleted: "seleted", selected: "selected", ariaLabel: "ariaLabel" }, usesOnChanges: true, ngImport: i0, template: "<button\n  class=\"bc-icon-button bc-icon-button-{{ type }} bc-icon-button-{{ size }} {{\n    classList\n  }}\"\n  [ngClass]=\"{\n    'bc-shadow-02': type == 'solid' && shadow,\n    'bc-icon-button-selected': seleted || selected,\n    'bc-float-menu-toggle': type == 'outline'\n  }\"\n  [disabled]=\"statusButton\"\n  [attr.aria-label]=\"ariaLabelValue\"\n>\n  <i\n    class=\"bc-icon\"\n    aria-hidden=\"true\"\n    [ngClass]=\"{ 'bc-float-menu-toggle': type == 'outline' }\"\n    >{{ customIcon }}</i\n  >\n</button>", directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcIconButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-icon-button', template: "<button\n  class=\"bc-icon-button bc-icon-button-{{ type }} bc-icon-button-{{ size }} {{\n    classList\n  }}\"\n  [ngClass]=\"{\n    'bc-shadow-02': type == 'solid' && shadow,\n    'bc-icon-button-selected': seleted || selected,\n    'bc-float-menu-toggle': type == 'outline'\n  }\"\n  [disabled]=\"statusButton\"\n  [attr.aria-label]=\"ariaLabelValue\"\n>\n  <i\n    class=\"bc-icon\"\n    aria-hidden=\"true\"\n    [ngClass]=\"{ 'bc-float-menu-toggle': type == 'outline' }\"\n    >{{ customIcon }}</i\n  >\n</button>" }]
        }], propDecorators: { type: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], shadow: [{
                type: Input
            }], customIcon: [{
                type: Input
            }], statusButton: [{
                type: Input
            }], seleted: [{
                type: Input
            }], selected: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaWNvbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWljb24tYnV0dG9uL2JjLWljb24tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pY29uLWJ1dHRvbi9iYy1pY29uLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7OztBQUMzRTs7Ozs7OztHQU9HO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQUtFLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIseUJBQW9CLEdBQVcsUUFBUSxDQUFDO1FBd0J4Qzs7OztXQUlHO1FBQ00sV0FBTSxHQUFZLEtBQUssQ0FBQztRQUVqQzs7OztXQUlHO1FBQ00sZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUVqQzs7OztXQUlHO1FBQ00saUJBQVksR0FBRyxLQUFLLENBQUM7UUFFOUI7Ozs7V0FJRztRQUNNLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFekI7Ozs7V0FJRztRQUNNLGFBQVEsR0FBRyxLQUFLLENBQUM7S0E2QjNCO0lBcEJDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3pCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLElBQUksT0FBTyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN0QztJQUNILENBQUM7O2tIQXZGVSxxQkFBcUI7c0dBQXJCLHFCQUFxQiwrUUNibEMseWdCQWtCUzsyRkRMSSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsZ0JBQWdCOzhCQWFqQixJQUFJO3NCQUFaLEtBQUs7Z0JBT0csS0FBSztzQkFBYixLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxNQUFNO3NCQUFkLEtBQUs7Z0JBT0csVUFBVTtzQkFBbEIsS0FBSztnQkFPRyxZQUFZO3NCQUFwQixLQUFLO2dCQU9HLE9BQU87c0JBQWYsS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogQ29tcG9uZW50ZSBJY29uIEJ1dHRvbi4gXG4gKiBFbCBJY29uIEJ1dHRvbiBlcyB1biBhY2Npb25hYmxlIHF1ZSBzaW50ZXRpemEgeSByZXNhbHRhXG4gKiB1bmEgZnVuY2lvbmFsaWRhZCBkZW50cm8gZGUgdW5hIGludGVyZmF6LlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0ljb25CdXR0b25Db21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtaWNvbi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJ2JjLWljb24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmNJY29uQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgY2xhc3NMaXN0OiBzdHJpbmcgPSAnJztcbiAgYXJpYUxhYmVsRmFiU2VsZWN0ZWQ6IHN0cmluZyA9ICdDZXJyYXInO1xuICBhcmlhTGFiZWxWYWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQYXLDoW1ldHJvIHBhcmEgZGVub3RhciBlbCB0aXBvIGRlIGJvdMOzblxuICAgKiBAdHlwZSB7KCdmYWInIHwgJ3NvbGlkJyB8ICdvdXRsaW5lJyB8ICdnaG9zdCcpfVxuICAgKiBAbWVtYmVyb2YgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiAnZmFiJyB8ICdzb2xpZCcgfCAnb3V0bGluZSd8ICdvdXRsaW5lLWludmVyc2UnIHwgJ2dob3N0JztcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGRlbm90YXIgZWwgY29sb3IgZGUgYm90w7NuXG4gICAqIEB0eXBlIHsoJ3llbGxvdycgfCAnYmxhY2snIHwgJ3doaXRlJyl9XG4gICAqIEBtZW1iZXJvZiBCY0ljb25CdXR0b25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiAneWVsbG93JyB8ICdibGFjaycgfCAnd2hpdGUnO1xuXG4gIC8qKlxuICAgKiBQYXLDoW1ldHJvIHBhcmEgZGVub3RhciBlbCB0YW1hw7FvIGRlbCBib3R0b25cbiAgICogQHR5cGUgeygneHNtYWxsJyB8ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSd8ICd4bGFyZ2UnKX1cbiAgICogQG1lbWJlcm9mIEJjSWNvbkJ1dHRvbkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogJ3hzbWFsbCcgfCAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnIHwgJ3hsYXJnZSc7XG5cbiAgLyoqXG4gICAqIFBhcsOhbWV0cm8gcGFyYSBkZW5vdGFyIGVsIHNoYWRvdyBkZWwgYm90dG9uIGVuIHZhcmlhbnRlIFNvbGlkXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzaGFkb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUGFyw6FtZXRybyBwYXJhIGVsIGN1c3RvbSBpY29uIGRlbCBjb21wb25lbnRlLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjdXN0b21JY29uOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogRGVzYWJpbGl0YXIgYnV0dG9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdGF0dXNCdXR0b24gPSBmYWxzZTtcblxuICAvKipcbiAgICogUG9yIGRlcHJlY2FyLiBVdGlsaXphciAnc2VsZWN0ZWQnXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzZWxldGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFBhcsOhbWV0cm8gcGFyYSBwb25lciBlbCBjb21wb25lbnRlIGVuIHVuIGVzdGFkbyBzZWxlY2Npb25hZG8uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJY29uQnV0dG9uQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQYXLDoW1ldHJvIHBhcmEgZGVmaW5pciBhcmlhLWxhYmVsXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0ljb25CdXR0b25Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnc29saWQnKSB7XG4gICAgICBjb25zdCBuZXdDb2xvciA9IGNoYW5nZXMuY29sb3I/LmN1cnJlbnRWYWx1ZSB8fCB0aGlzLmNvbG9yO1xuICAgICAgdGhpcy5jb2xvciA9IG5ld0NvbG9yIHx8ICd3aGl0ZSc7XG4gICAgICB0aGlzLmNsYXNzTGlzdCA9IGBiYy1pY29uLWJ1dHRvbi0ke3RoaXMuY29sb3J9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QgPSAnJztcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc2VsZWN0ZWQgfHwgY2hhbmdlcy50eXBlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFyaWFMYWJlbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXJpYUxhYmVsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdmYWInICYmICh0aGlzLnNlbGVjdGVkIHx8IHRoaXMuc2VsZXRlZCkpIHtcbiAgICAgIHRoaXMuYXJpYUxhYmVsVmFsdWUgPSB0aGlzLmFyaWFMYWJlbEZhYlNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFyaWFMYWJlbFZhbHVlID0gdGhpcy5hcmlhTGFiZWw7XG4gICAgfVxuICB9XG59XG4iLCI8YnV0dG9uXG4gIGNsYXNzPVwiYmMtaWNvbi1idXR0b24gYmMtaWNvbi1idXR0b24te3sgdHlwZSB9fSBiYy1pY29uLWJ1dHRvbi17eyBzaXplIH19IHt7XG4gICAgY2xhc3NMaXN0XG4gIH19XCJcbiAgW25nQ2xhc3NdPVwie1xuICAgICdiYy1zaGFkb3ctMDInOiB0eXBlID09ICdzb2xpZCcgJiYgc2hhZG93LFxuICAgICdiYy1pY29uLWJ1dHRvbi1zZWxlY3RlZCc6IHNlbGV0ZWQgfHwgc2VsZWN0ZWQsXG4gICAgJ2JjLWZsb2F0LW1lbnUtdG9nZ2xlJzogdHlwZSA9PSAnb3V0bGluZSdcbiAgfVwiXG4gIFtkaXNhYmxlZF09XCJzdGF0dXNCdXR0b25cIlxuICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFZhbHVlXCJcbj5cbiAgPGlcbiAgICBjbGFzcz1cImJjLWljb25cIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgW25nQ2xhc3NdPVwieyAnYmMtZmxvYXQtbWVudS10b2dnbGUnOiB0eXBlID09ICdvdXRsaW5lJyB9XCJcbiAgICA+e3sgY3VzdG9tSWNvbiB9fTwvaVxuICA+XG48L2J1dHRvbj4iXX0=