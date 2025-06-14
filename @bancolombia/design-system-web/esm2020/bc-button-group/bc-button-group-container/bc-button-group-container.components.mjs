import { Component, HostListener, Output, EventEmitter, Input, ContentChildren } from '@angular/core';
import { BcButtonGroupBehavior } from '@bancolombia/design-system-behaviors';
import { BcButtonGroupComponent } from '../bc-button-group.component';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
/**
 * Importa el button group con los diseños de Bancolombia S.A.
 *
 * @export
 * @class BcButtonGroupContentComponent
 */
export class BcButtonGroupContainerComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
        * Esta salida emite el id del botón seleccionado.
        *
        * @type {EventEmitter<any>}
        * @memberof BcButtonGroupContentComponent
        */
        this.onchange = new EventEmitter();
        /**
          *
          * Id del componente.
          *
          * @type {string}
          * @memberof BcButtonGroupContentComponent
          */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Color del indicador del botón activo.
         * @type {string}
         * @memberof BcButtonGroupComponent
         */
        this.blackActiveIndicator = false;
        /**
       * Tamaño de letra de los botones.
       * @type {string}
       * @memberof BcButtonGroupComponent
       */
        this.fontSize = '';
    }
    onClick(target) {
        if (target.id) {
            this.onchange.emit(target.id);
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.setNameForChildrens();
        });
        this.bcButtonGroupBehavior = new BcButtonGroupBehavior();
        const activeIndicatorColor = !this.blackActiveIndicator ? 'defaultActiveIndicator' : 'blackActiveIndicator';
        this.bcButtonGroupBehavior.setId(this.componentId);
        this.bcButtonGroupBehavior.setUp();
        this.bcButtonGroupBehavior.setInitialIndicator();
        this.bcButtonGroupBehavior.setActiveButtonColor(activeIndicatorColor);
        this.bcButtonGroupBehavior.setFontSize(this.fontSize);
    }
    setNameForChildrens() {
        for (const btn of this.childrens) {
            btn.name = this.groupName;
            btn.parentReady = true;
        }
    }
}
BcButtonGroupContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonGroupContainerComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcButtonGroupContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcButtonGroupContainerComponent, selector: "bc-button-group-container", inputs: { blackActiveIndicator: "blackActiveIndicator", fontSize: "fontSize", groupName: "groupName" }, outputs: { onchange: "onchange" }, host: { listeners: { "click": "onClick($event.target)" } }, queries: [{ propertyName: "childrens", predicate: BcButtonGroupComponent }], ngImport: i0, template: `
  <article class="bc-button-group-container" role="button" [id]=componentId>
  <div class="bc-button-indicator" 
       id="bc-button-indicator" 
       aria-hidden="true"><span></span></div>
    <ng-content></ng-content>
  </article>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcButtonGroupContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bc-button-group-container',
                    template: `
  <article class="bc-button-group-container" role="button" [id]=componentId>
  <div class="bc-button-indicator" 
       id="bc-button-indicator" 
       aria-hidden="true"><span></span></div>
    <ng-content></ng-content>
  </article>`
                }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { onchange: [{
                type: Output
            }], blackActiveIndicator: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], groupName: [{
                type: Input
            }], childrens: [{
                type: ContentChildren,
                args: [BcButtonGroupComponent]
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event.target']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYnV0dG9uLWdyb3VwLWNvbnRhaW5lci5jb21wb25lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWJ1dHRvbi1ncm91cC9iYy1idXR0b24tZ3JvdXAtY29udGFpbmVyL2JjLWJ1dHRvbi1ncm91cC1jb250YWluZXIuY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFFdEU7Ozs7O0dBS0c7QUFXSCxNQUFNLE9BQU8sK0JBQStCO0lBK0MxQyxZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUE3Q3BEOzs7OztVQUtFO1FBQ1EsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdEOzs7Ozs7WUFNSTtRQUNJLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0Q7Ozs7V0FJRztRQUNNLHlCQUFvQixHQUFZLEtBQUssQ0FBQTtRQUM1Qzs7OztTQUlDO1FBRU0sYUFBUSxHQUFXLEVBQUUsQ0FBQTtJQWtCMEIsQ0FBQztJQU56RCxPQUFPLENBQUMsTUFBVztRQUNqQixJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBSUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDekQsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFBO1FBQzNHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs0SEFuRVUsK0JBQStCO2dIQUEvQiwrQkFBK0Isa1NBcUN6QixzQkFBc0IsNkJBN0M3Qjs7Ozs7O2FBTUM7MkZBRUEsK0JBQStCO2tCQVYzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRTs7Ozs7O2FBTUM7aUJBQ1o7c0dBU1csUUFBUTtzQkFBakIsTUFBTTtnQkFjRSxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSztnQkFNRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVtQyxTQUFTO3NCQUFqRCxlQUFlO3VCQUFDLHNCQUFzQjtnQkFJdkMsT0FBTztzQkFGTixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0J1dHRvbkdyb3VwQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuaW1wb3J0IHsgQmNCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2JjLWJ1dHRvbi1ncm91cC5jb21wb25lbnQnO1xuXG4vKipcbiAqIEltcG9ydGEgZWwgYnV0dG9uIGdyb3VwIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0J1dHRvbkdyb3VwQ29udGVudENvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYy1idXR0b24tZ3JvdXAtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGFydGljbGUgY2xhc3M9XCJiYy1idXR0b24tZ3JvdXAtY29udGFpbmVyXCIgcm9sZT1cImJ1dHRvblwiIFtpZF09Y29tcG9uZW50SWQ+XG4gIDxkaXYgY2xhc3M9XCJiYy1idXR0b24taW5kaWNhdG9yXCIgXG4gICAgICAgaWQ9XCJiYy1idXR0b24taW5kaWNhdG9yXCIgXG4gICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHNwYW4+PC9zcGFuPjwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9hcnRpY2xlPmBcbn0pXG5leHBvcnQgY2xhc3MgQmNCdXR0b25Hcm91cENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGJjQnV0dG9uR3JvdXBCZWhhdmlvcjogQmNCdXR0b25Hcm91cEJlaGF2aW9yOyAgXG4gIC8qKlxuICAqIEVzdGEgc2FsaWRhIGVtaXRlIGVsIGlkIGRlbCBib3TDs24gc2VsZWNjaW9uYWRvLlxuICAqXG4gICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxuICAqIEBtZW1iZXJvZiBCY0J1dHRvbkdyb3VwQ29udGVudENvbXBvbmVudFxuICAqL1xuICBAT3V0cHV0KCkgb25jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuLyoqXG4gICogXG4gICogSWQgZGVsIGNvbXBvbmVudGUuXG4gICpcbiAgKiBAdHlwZSB7c3RyaW5nfVxuICAqIEBtZW1iZXJvZiBCY0J1dHRvbkdyb3VwQ29udGVudENvbXBvbmVudFxuICAqL1xuIHB1YmxpYyBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG4gIC8qKlxuICAgKiBDb2xvciBkZWwgaW5kaWNhZG9yIGRlbCBib3TDs24gYWN0aXZvLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25Hcm91cENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgYmxhY2tBY3RpdmVJbmRpY2F0b3I6IGJvb2xlYW4gPSBmYWxzZVxuICAgIC8qKlxuICAgKiBUYW1hw7FvIGRlIGxldHJhIGRlIGxvcyBib3RvbmVzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNCdXR0b25Hcm91cENvbXBvbmVudFxuICAgKi9cblxuICBASW5wdXQoKSBmb250U2l6ZTogc3RyaW5nID0gJydcbiAgLyoqXG4gICAqIEVzdGEgZW50cmFkYSBwZXJtaXRlIGluZGljYXIgZWwgbm9tYnJlIGRlbCBncnVwbyBkZSBib3RvbmVzLCBwdWVkZSB0ZW5lciBjdWFscXVpZXIgdmFsb3IgZGUgdGlwbyBzdHJpbmcuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0J1dHRvbkdyb3VwQ29udGVudENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZ3JvdXBOYW1lOiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihCY0J1dHRvbkdyb3VwQ29tcG9uZW50KSBjaGlsZHJlbnM6IFF1ZXJ5TGlzdDxCY0J1dHRvbkdyb3VwQ29tcG9uZW50PjtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuXG4gIG9uQ2xpY2sodGFyZ2V0OiBhbnkpIHtcbiAgICBpZiAodGFyZ2V0LmlkKSB7XG4gICAgICB0aGlzLm9uY2hhbmdlLmVtaXQodGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldE5hbWVGb3JDaGlsZHJlbnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmJjQnV0dG9uR3JvdXBCZWhhdmlvciA9IG5ldyBCY0J1dHRvbkdyb3VwQmVoYXZpb3IoKTtcbiAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3JDb2xvciA9ICF0aGlzLmJsYWNrQWN0aXZlSW5kaWNhdG9yID8gJ2RlZmF1bHRBY3RpdmVJbmRpY2F0b3InIDogJ2JsYWNrQWN0aXZlSW5kaWNhdG9yJ1xuICAgIHRoaXMuYmNCdXR0b25Hcm91cEJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuYmNCdXR0b25Hcm91cEJlaGF2aW9yLnNldFVwKCk7XG4gICAgdGhpcy5iY0J1dHRvbkdyb3VwQmVoYXZpb3Iuc2V0SW5pdGlhbEluZGljYXRvcigpO1xuICAgIHRoaXMuYmNCdXR0b25Hcm91cEJlaGF2aW9yLnNldEFjdGl2ZUJ1dHRvbkNvbG9yKGFjdGl2ZUluZGljYXRvckNvbG9yKTtcbiAgICB0aGlzLmJjQnV0dG9uR3JvdXBCZWhhdmlvci5zZXRGb250U2l6ZSh0aGlzLmZvbnRTaXplKTtcbiAgfVxuXG4gIHNldE5hbWVGb3JDaGlsZHJlbnMoKSB7XG4gICAgZm9yIChjb25zdCBidG4gb2YgdGhpcy5jaGlsZHJlbnMpIHtcbiAgICAgIGJ0bi5uYW1lID0gdGhpcy5ncm91cE5hbWU7XG4gICAgICBidG4ucGFyZW50UmVhZHkgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19