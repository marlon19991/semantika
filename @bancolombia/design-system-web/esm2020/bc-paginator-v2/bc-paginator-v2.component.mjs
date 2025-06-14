import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { BcPaginatorV2Behavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
export class BcPaginatorV2Component {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        this.onChangePage = new EventEmitter(true);
        this.componentReady = false;
    }
    ngOnInit() {
        this.id = this.id ?? this.bcHelperService.getId(this);
    }
    ngAfterViewInit() {
        this.initPaginatorBehavior();
    }
    ngOnChanges(changes) {
        if (this.componentReady) {
            setTimeout(() => {
                this.initPaginatorBehavior();
            });
        }
    }
    initPaginatorBehavior() {
        this.bcPaginatorBehavior = new BcPaginatorV2Behavior();
        this.bcPaginatorBehavior.setId(this.id);
        this.bcPaginatorBehavior.onChangePage = (param) => {
            this.onChangePage.emit(param);
        };
        this.bcPaginatorBehavior.setUp();
        this.componentReady = true;
    }
}
BcPaginatorV2Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Component, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcPaginatorV2Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcPaginatorV2Component, selector: "bc-paginator-v2", inputs: { type: "type", id: "id", prevText: "prevText", nextText: "nextText", totalItems: "totalItems", itemsPerPage: "itemsPerPage", initialPage: "initialPage", showPageSize: "showPageSize", pageSizeOptions: "pageSizeOptions", showInfoItems: "showInfoItems", customTextInfoItems: "customTextInfoItems", ariaLabel: ["aria-label", "ariaLabel"], classToSync: "classToSync" }, outputs: { onChangePage: "onChangePage" }, usesOnChanges: true, ngImport: i0, template: "<nav\n  class=\"bc-paginator-v2\"\n  [id]=\"id\"\n  [attr.type]=\"type\"\n  [attr.prevText]=\"prevText\"\n  [attr.nextText]=\"nextText\"\n  [attr.totalItems]=\"totalItems\"\n  [attr.initialPage]=\"initialPage\"\n  [attr.itemsPerPage]=\"itemsPerPage\"\n  [attr.showPageSize]=\"showPageSize\"\n  [attr.pageSizeOptions]=\"pageSizeOptions\"\n  [attr.showInfoItems]=\"showInfoItems\"\n  [attr.customTextInfoItems]=\"customTextInfoItems\"\n  [attr.aria-label]=\"ariaLabel\"\n  [attr.classToSync]=\"classToSync\"\n></nav>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcPaginatorV2Component, decorators: [{
            type: Component,
            args: [{ selector: 'bc-paginator-v2', template: "<nav\n  class=\"bc-paginator-v2\"\n  [id]=\"id\"\n  [attr.type]=\"type\"\n  [attr.prevText]=\"prevText\"\n  [attr.nextText]=\"nextText\"\n  [attr.totalItems]=\"totalItems\"\n  [attr.initialPage]=\"initialPage\"\n  [attr.itemsPerPage]=\"itemsPerPage\"\n  [attr.showPageSize]=\"showPageSize\"\n  [attr.pageSizeOptions]=\"pageSizeOptions\"\n  [attr.showInfoItems]=\"showInfoItems\"\n  [attr.customTextInfoItems]=\"customTextInfoItems\"\n  [attr.aria-label]=\"ariaLabel\"\n  [attr.classToSync]=\"classToSync\"\n></nav>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { type: [{
                type: Input
            }], id: [{
                type: Input
            }], prevText: [{
                type: Input
            }], nextText: [{
                type: Input
            }], totalItems: [{
                type: Input
            }], itemsPerPage: [{
                type: Input
            }], initialPage: [{
                type: Input
            }], showPageSize: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], showInfoItems: [{
                type: Input
            }], customTextInfoItems: [{
                type: Input
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], classToSync: [{
                type: Input
            }], onChangePage: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtcGFnaW5hdG9yLXYyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wYWdpbmF0b3ItdjIvYmMtcGFnaW5hdG9yLXYyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1wYWdpbmF0b3ItdjIvYmMtcGFnaW5hdG9yLXYyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQU83RSxNQUFNLE9BQU8sc0JBQXNCO0lBa0dqQyxZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMMUMsaUJBQVksR0FBc0IsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHbkUsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFFdUIsQ0FBQztJQUV4RCxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7bUhBNUhVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLDZlQ2hCbkMsb2dCQWVPOzJGRENNLHNCQUFzQjtrQkFKbEMsU0FBUzsrQkFDRSxpQkFBaUI7c0dBU2xCLElBQUk7c0JBQVosS0FBSztnQkFPRyxFQUFFO3NCQUFWLEtBQUs7Z0JBT0csUUFBUTtzQkFBaEIsS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBUUcsWUFBWTtzQkFBcEIsS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQVFHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBUUcsZUFBZTtzQkFBdkIsS0FBSztnQkFRRyxhQUFhO3NCQUFyQixLQUFLO2dCQU9HLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFRZSxTQUFTO3NCQUE3QixLQUFLO3VCQUFDLFlBQVk7Z0JBRVYsV0FBVztzQkFBbkIsS0FBSztnQkFHSSxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjUGFnaW5hdG9yVjJCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0hlbHBlclNlcnZpY2UgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS13ZWIvYmMtaGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLXBhZ2luYXRvci12MicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1wYWdpbmF0b3ItdjIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY1BhZ2luYXRvclYyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogVGlwbyBkZSBwYWdpbmFkb3IsIHZhbG9yZXMgcGVybWl0aWRvczogYmFzaWMgbyBudW1lcmljXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvclYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElkZW50aWZpY2Fkb3IgZGUgcGFnaW5hZG9yLiBTaSBlc3RhIHZhY2lvIHNlIGF1dG9nZW5lcmEgZWwgaWRcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjUGFnaW5hdG9yVjJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRleHRvIGRlIGVubGFjZSBcIkFudGVyaW9yXCIgZW4gcGFnaW5hZG9yIGJhc2ljXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvclYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBwcmV2VGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUZXh0byBkZSBlbmxhY2UgXCJTaWd1aWVudGVcIiBlbiBwYWdpbmFkb3IgYmFzaWNcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjUGFnaW5hdG9yVjJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG5leHRUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRvdGFsIGRlIGVsZW1lbnRvc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNQYWdpbmF0b3JWMkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdG90YWxJdGVtczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBFbGVtZW50b3MgYSBtb3N0cmFyIHBvciBww6FnaW5hLiBTaSBzaG93UGFnZVNpemUgZXMgdHJ1ZSxcbiAgICogdmFsb3Igc2VyYSBjb25maWd1cmFkbyBjb21vIGluaWNpYWwgZW4gc2VsZWN0b3IgZGUgZWxlbWVudG9zIHBvciBww6FnaW5hLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNQYWdpbmF0b3JWMkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE7Dum1lcm8gZGUgcMOhZ2luYSBhY3R1YWwuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvclYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBpbml0aWFsUGFnZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgc2UgbW9zdHJhcsOhIHNlbGVjdG9yIGRlIGVsZW1lbnRvcyBwb3IgcMOhZ2luYS4gVHJ1ZSBwYXJhIG1vc3RyYXIgaW5wdXQgc2VsZWN0LlxuICAgKiBWYWxvciBkZWZhdWx0IGVzIGZhbHNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNQYWdpbmF0b3JWMkNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2hvd1BhZ2VTaXplOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQZXJtaXRlIGNvbmZpZ3VyYXIgbGFzIG9wY2lvbmVzIGEgbW9zdHJhciBlbiBlbCBzZWxlY3RvciBkZSBlbGVtZW50b3MgcG9yIHDDoWdpbmEuXG4gICAqIFZhbG9yZXMgc2UgZGViZW4gc2VwYXJhciBjb24gY29tYW4gXCIsXCIuIFNlIHBlcm1pdGVuIG3DoXhpbW8gNSBvcGNpb25lcy4gRWplbXBsbzogXCI1LDE1LDI1XCJcbiAgICpcbiAgICogQG1lbWJlcm9mIEJjUGFnaW5hdG9yVjJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9uczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgc2UgbW9zdHJhcsOhIHRleHRvIGluZm9ybWF0aXZvIGRlIGVsZW1lbnRvcy4gVHJ1ZSBwYXJhIG1vc3RyYXIgdGV4dG8uXG4gICAqIFZhbG9yIGRlZmF1bHQgZXMgZmFsc2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvclYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzaG93SW5mb0l0ZW1zOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaSBzaG93SW5mb0l0ZW1zIGVzIHRydWUsIHBlcm1pdGUgcGVyc29uYWxpemFyIGVsIHRleHRvIGluZm9ybWF0aXZvIFwiZWxlbWVudG9zXCIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1BhZ2luYXRvclYyQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjdXN0b21UZXh0SW5mb0l0ZW1zOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBlcm1pdGUgY29uZmlndXJhciBlbCB2YWxvciBkZWwgYXRyaWJ1dG8gYXJpYS1sYWJlbC5cbiAgICogVmFsb3IgZGVmYXVsdCBlcyBQYWdpbmFjacOzbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjUGFnaW5hdG9yVjJDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNsYXNzVG9TeW5jOiBzdHJpbmc7XG5cblxuICBAT3V0cHV0KCkgb25DaGFuZ2VQYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG5cbiAgYmNQYWdpbmF0b3JCZWhhdmlvcjogQmNQYWdpbmF0b3JWMkJlaGF2aW9yO1xuICBjb21wb25lbnRSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pZCA9IHRoaXMuaWQgPz8gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0UGFnaW5hdG9yQmVoYXZpb3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWFkeSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFBhZ2luYXRvckJlaGF2aW9yKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbml0UGFnaW5hdG9yQmVoYXZpb3IoKTogdm9pZCB7XG4gICAgdGhpcy5iY1BhZ2luYXRvckJlaGF2aW9yID0gbmV3IEJjUGFnaW5hdG9yVjJCZWhhdmlvcigpO1xuICAgIHRoaXMuYmNQYWdpbmF0b3JCZWhhdmlvci5zZXRJZCh0aGlzLmlkKTtcbiAgICB0aGlzLmJjUGFnaW5hdG9yQmVoYXZpb3Iub25DaGFuZ2VQYWdlID0gKHBhcmFtKSA9PiB7XG4gICAgICB0aGlzLm9uQ2hhbmdlUGFnZS5lbWl0KHBhcmFtKTtcbiAgICB9O1xuICAgIHRoaXMuYmNQYWdpbmF0b3JCZWhhdmlvci5zZXRVcCgpO1xuICAgIHRoaXMuY29tcG9uZW50UmVhZHkgPSB0cnVlO1xuICB9XG59XG4iLCI8bmF2XG4gIGNsYXNzPVwiYmMtcGFnaW5hdG9yLXYyXCJcbiAgW2lkXT1cImlkXCJcbiAgW2F0dHIudHlwZV09XCJ0eXBlXCJcbiAgW2F0dHIucHJldlRleHRdPVwicHJldlRleHRcIlxuICBbYXR0ci5uZXh0VGV4dF09XCJuZXh0VGV4dFwiXG4gIFthdHRyLnRvdGFsSXRlbXNdPVwidG90YWxJdGVtc1wiXG4gIFthdHRyLmluaXRpYWxQYWdlXT1cImluaXRpYWxQYWdlXCJcbiAgW2F0dHIuaXRlbXNQZXJQYWdlXT1cIml0ZW1zUGVyUGFnZVwiXG4gIFthdHRyLnNob3dQYWdlU2l6ZV09XCJzaG93UGFnZVNpemVcIlxuICBbYXR0ci5wYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcbiAgW2F0dHIuc2hvd0luZm9JdGVtc109XCJzaG93SW5mb0l0ZW1zXCJcbiAgW2F0dHIuY3VzdG9tVGV4dEluZm9JdGVtc109XCJjdXN0b21UZXh0SW5mb0l0ZW1zXCJcbiAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICBbYXR0ci5jbGFzc1RvU3luY109XCJjbGFzc1RvU3luY1wiXG4+PC9uYXY+Il19