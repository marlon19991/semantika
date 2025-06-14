import { Component, ContentChild, Input, ViewChild } from '@angular/core';
import { BcAccordionContentDirDirective } from './bc-accordion-content-dir.directive';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Importa el acordeón para contener info
 * El acordeón colapsa desde un contenedor principal para de esta manera
 * mostrar información interna que haya dentro del mismo el cual se expande o se contrae al realizar clic.
 *
 * @export
 * @class BcAccordionContentComponent
 */
export class BcAccordionContentComponent {
    constructor(bcHelperService, elementHTML) {
        this.bcHelperService = bcHelperService;
        this.elementHTML = elementHTML;
        this.componentId = this.bcHelperService.getId(this);
        this._wasOpened = false;
    }
    isActive() {
        const hostElement = this.elementHTML.nativeElement;
        const parentElement = hostElement.parentNode;
        const isOpen = parentElement.classList.contains('bc-active');
        if (!this._wasOpened && isOpen) {
            this._wasOpened = true;
        }
        return this._wasOpened;
    }
}
BcAccordionContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionContentComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcAccordionContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAccordionContentComponent, selector: "bc-accordion-content", inputs: { componentId: "componentId" }, queries: [{ propertyName: "content", first: true, predicate: BcAccordionContentDirDirective, descendants: true }], viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["contentRef"], descendants: true }], ngImport: i0, template: "<section class=\"bc-accordion-content\" [id]=\"componentId\">\n  <div *ngIf=\"isActive()\">\n    <ng-content></ng-content>\n    <ng-container [ngTemplateOutlet]=\"content?.templateRef\"></ng-container>\n  </div>\n</section>\n", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAccordionContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-accordion-content', queries: {
                        contentRef: new ViewChild('contentRef')
                    }, template: "<section class=\"bc-accordion-content\" [id]=\"componentId\">\n  <div *ngIf=\"isActive()\">\n    <ng-content></ng-content>\n    <ng-container [ngTemplateOutlet]=\"content?.templateRef\"></ng-container>\n  </div>\n</section>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { componentId: [{
                type: Input
            }], content: [{
                type: ContentChild,
                args: [BcAccordionContentDirDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYWNjb3JkaW9uLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWFjY29yZGlvbi9iYy1hY2NvcmRpb24tY29udGVudC9iYy1hY2NvcmRpb24tY29udGVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtYWNjb3JkaW9uL2JjLWFjY29yZGlvbi1jb250ZW50L2JjLWFjY29yZGlvbi1jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFjLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFdEY7Ozs7Ozs7R0FPRztBQVFILE1BQU0sT0FBTywyQkFBMkI7SUFPdEMsWUFBb0IsZUFBZ0MsRUFBVSxXQUF1QjtRQUFqRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQU41RSxnQkFBVyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSXhELGVBQVUsR0FBWSxLQUFLLENBQUM7SUFFb0QsQ0FBQztJQUV6RixRQUFRO1FBQ04sTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUE0QixDQUFDO1FBQ2xFLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxVQUF5QixDQUFDO1FBQzVELE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzt3SEFqQlUsMkJBQTJCOzRHQUEzQiwyQkFBMkIseUlBR3hCLDhCQUE4QiwwSkN0QjlDLG1PQU1BOzJGRGFhLDJCQUEyQjtrQkFQdkMsU0FBUzsrQkFDRSxzQkFBc0IsV0FDdkI7d0JBQ1AsVUFBVSxFQUFFLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQztxQkFDeEM7K0hBSVEsV0FBVztzQkFBbkIsS0FBSztnQkFFd0MsT0FBTztzQkFBcEQsWUFBWTt1QkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuaW1wb3J0IHsgQmNBY2NvcmRpb25Db250ZW50RGlyRGlyZWN0aXZlIH0gZnJvbSAnLi9iYy1hY2NvcmRpb24tY29udGVudC1kaXIuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBJbXBvcnRhIGVsIGFjb3JkZcOzbiBwYXJhIGNvbnRlbmVyIGluZm9cbiAqIEVsIGFjb3JkZcOzbiBjb2xhcHNhIGRlc2RlIHVuIGNvbnRlbmVkb3IgcHJpbmNpcGFsIHBhcmEgZGUgZXN0YSBtYW5lcmFcbiAqIG1vc3RyYXIgaW5mb3JtYWNpw7NuIGludGVybmEgcXVlIGhheWEgZGVudHJvIGRlbCBtaXNtbyBlbCBjdWFsIHNlIGV4cGFuZGUgbyBzZSBjb250cmFlIGFsIHJlYWxpemFyIGNsaWMuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjQWNjb3JkaW9uQ29udGVudENvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1hY2NvcmRpb24tY29udGVudCcsXG4gIHF1ZXJpZXM6IHtcbiAgICBjb250ZW50UmVmOiBuZXcgVmlld0NoaWxkKCdjb250ZW50UmVmJylcbiAgfSxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLWFjY29yZGlvbi1jb250ZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCY0FjY29yZGlvbkNvbnRlbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbiAgQENvbnRlbnRDaGlsZChCY0FjY29yZGlvbkNvbnRlbnREaXJEaXJlY3RpdmUpIGNvbnRlbnQhOiBCY0FjY29yZGlvbkNvbnRlbnREaXJEaXJlY3RpdmU7XG5cbiAgcHJpdmF0ZSBfd2FzT3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50SFRNTDogRWxlbWVudFJlZikge31cblxuICBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuZWxlbWVudEhUTUwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gaG9zdEVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBpc09wZW4gPSBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYmMtYWN0aXZlJyk7XG4gICAgaWYgKCF0aGlzLl93YXNPcGVuZWQgJiYgaXNPcGVuKSB7XG4gICAgICB0aGlzLl93YXNPcGVuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fd2FzT3BlbmVkO1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImJjLWFjY29yZGlvbi1jb250ZW50XCIgW2lkXT1cImNvbXBvbmVudElkXCI+XG4gIDxkaXYgKm5nSWY9XCJpc0FjdGl2ZSgpXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudD8udGVtcGxhdGVSZWZcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXX0=