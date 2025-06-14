import { Directive, HostListener, Input } from '@angular/core';
import { BcTooltipBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
/**
 * Componente tooltip
 *
 * @export
 * @class BcTooltipDirective
 * @implements {AfterViewInit}
 */
export class BcTooltipDirective {
    constructor(el) {
        this.el = el;
        /**
         * Posición del tooltip
         * top | right | bottom | left.
         *
         * @memberof BcTooltipDirective
         */
        this.bcTooltipPosition = 'top';
        /**
         * Texto que esta en el contenedor del tooltip.
         *
         * @memberof BcTooltipDirective
         */
        this.bcTooltipText = 'Text content';
        /**
         * Texto del botón.
         *
         * @memberof BcTooltipDirective
         */
        this.bcTooltipButtonText = undefined;
        /**
         * Padre del tooltip
         * para controlar el scroll
         *
         * @type {string}
         * @memberof BcExpansionPanelComponent
         */
        this.bcTooltipParentElement = undefined;
        this.element = new BcTooltipBehavior();
    }
    ngAfterViewInit() {
        this.el.nativeElement.setAttribute('bcTooltipPosition', this.bcTooltipPosition);
        this.el.nativeElement.setAttribute('bcTooltipTitle', this.bcTooltipTitle);
        this.el.nativeElement.setAttribute('bcTooltipText', this.bcTooltipText);
        this.el.nativeElement.setAttribute('bcTooltipButtonText', this.bcTooltipButtonText);
        this.el.nativeElement.setAttribute('bcTooltipParentElement', this.bcTooltipParentElement);
        this.element.setElement(this.el.nativeElement);
        this.element.setUp();
    }
    onResize(event) {
        this.element.setPosition();
    }
}
BcTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTooltipDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BcTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcTooltipDirective, selector: "[bc-tooltip]", inputs: { bcTooltipPosition: "bcTooltipPosition", bcTooltipTitle: "bcTooltipTitle", bcTooltipText: "bcTooltipText", bcTooltipButtonText: "bcTooltipButtonText", bcTooltipParentElement: "bcTooltipParentElement" }, host: { listeners: { "window:resize": "onResize($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-tooltip]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { bcTooltipPosition: [{
                type: Input
            }], bcTooltipTitle: [{
                type: Input
            }], bcTooltipText: [{
                type: Input
            }], bcTooltipButtonText: [{
                type: Input
            }], bcTooltipParentElement: [{
                type: Input
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtdG9vbHRpcC9iYy10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUV6RTs7Ozs7O0dBTUc7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBd0M3QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXRDbEM7Ozs7O1dBS0c7UUFDTSxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFRbkM7Ozs7V0FJRztRQUNNLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBRXhDOzs7O1dBSUc7UUFDTSx3QkFBbUIsR0FBRyxTQUFTLENBQUM7UUFFekM7Ozs7OztXQU1HO1FBRU0sMkJBQXNCLEdBQUcsU0FBUyxDQUFDO1FBRzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOzsrR0F6RFUsa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7aUdBU1UsaUJBQWlCO3NCQUF6QixLQUFLO2dCQU9HLGNBQWM7c0JBQXRCLEtBQUs7Z0JBTUcsYUFBYTtzQkFBckIsS0FBSztnQkFPRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBVUcsc0JBQXNCO3NCQUE5QixLQUFLO2dCQWlCTixRQUFRO3NCQURQLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY1Rvb2x0aXBCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50ZSB0b29sdGlwXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjVG9vbHRpcERpcmVjdGl2ZVxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYy10b29sdGlwXScsXG59KVxuZXhwb3J0IGNsYXNzIEJjVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBlbGVtZW50O1xuICAvKipcbiAgICogUG9zaWNpw7NuIGRlbCB0b29sdGlwXG4gICAqIHRvcCB8IHJpZ2h0IHwgYm90dG9tIHwgbGVmdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIEJjVG9vbHRpcERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgYmNUb29sdGlwUG9zaXRpb24gPSAndG9wJztcbiAgLyoqXG4gICAqIFTDrXR1bG8gZGVsIHRvb2x0aXAuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY1Rvb2x0aXBEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIGJjVG9vbHRpcFRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUZXh0byBxdWUgZXN0YSBlbiBlbCBjb250ZW5lZG9yIGRlbCB0b29sdGlwLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNUb29sdGlwRGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBiY1Rvb2x0aXBUZXh0ID0gJ1RleHQgY29udGVudCc7XG5cbiAgLyoqXG4gICAqIFRleHRvIGRlbCBib3TDs24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY1Rvb2x0aXBEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIGJjVG9vbHRpcEJ1dHRvblRleHQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFBhZHJlIGRlbCB0b29sdGlwXG4gICAqIHBhcmEgY29udHJvbGFyIGVsIHNjcm9sbFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNFeHBhbnNpb25QYW5lbENvbXBvbmVudFxuICAgKi9cblxuICBASW5wdXQoKSBiY1Rvb2x0aXBQYXJlbnRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQmNUb29sdGlwQmVoYXZpb3IoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdiY1Rvb2x0aXBQb3NpdGlvbicsIHRoaXMuYmNUb29sdGlwUG9zaXRpb24pO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2JjVG9vbHRpcFRpdGxlJywgdGhpcy5iY1Rvb2x0aXBUaXRsZSk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYmNUb29sdGlwVGV4dCcsIHRoaXMuYmNUb29sdGlwVGV4dCk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYmNUb29sdGlwQnV0dG9uVGV4dCcsIHRoaXMuYmNUb29sdGlwQnV0dG9uVGV4dCk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYmNUb29sdGlwUGFyZW50RWxlbWVudCcsIHRoaXMuYmNUb29sdGlwUGFyZW50RWxlbWVudCk7XG4gICAgdGhpcy5lbGVtZW50LnNldEVsZW1lbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0VXAoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRQb3NpdGlvbigpO1xuICB9XG59XG4iXX0=