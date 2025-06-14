import { Component, Input } from '@angular/core';
import { BcAvatarBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
import * as i3 from "@bancolombia/design-system-web/bc-tooltip";
export class BcAvatarComponent {
    constructor(bcHelperService, el) {
        this.bcHelperService = bcHelperService;
        this.el = el;
        this.useTooltip = false;
    }
    ngOnInit() {
        this.id = this.id ?? this.bcHelperService.getId(this);
        if (this.tooltipText) {
            this.useTooltip = true;
        }
    }
    ngAfterViewInit() {
        this.initAvatarBehavior();
        if (this.ariaLabel) {
            this.el.nativeElement
                .querySelector('div')
                .setAttribute('aria-label', this.ariaLabel);
        }
    }
    initAvatarBehavior() {
        this.bcAvatarBehavior = new BcAvatarBehavior();
        this.bcAvatarBehavior.setId(this.id);
        this.bcAvatarBehavior.setUp();
    }
}
BcAvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarComponent, deps: [{ token: i1.BcHelperService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
BcAvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcAvatarComponent, selector: "bc-avatar", inputs: { size: "size", id: "id", icon: "icon", illustration: "illustration", alt: "alt", focus: "focus", ariaLabel: "ariaLabel", tooltipText: "tooltipText" }, ngImport: i0, template: "<div\n  *ngIf=\"!useTooltip; else withTooltip\"\n  class=\"bc-avatar\"\n  [id]=\"id\"\n  [attr.size]=\"size\"\n  [attr.focus]=\"focus\"\n  [attr.icon]=\"icon\"\n  [attr.illustration]=\"illustration\"\n  [attr.alt]=\"alt\"\n  [attr.public]=\"false\"\n  [attr.aria-label]=\"ariaLabel\"\n></div>\n\n<ng-template #withTooltip>\n  <div\n    class=\"bc-avatar\"\n    [id]=\"id\"\n    [attr.size]=\"size\"\n    [attr.focus]=\"focus\"\n    [attr.icon]=\"icon\"\n    [attr.illustration]=\"illustration\"\n    [attr.alt]=\"alt\"\n    [attr.public]=\"false\"\n    [attr.aria-label]=\"ariaLabel\"\n    bc-tooltip\n    [bcTooltipPosition]=\"'bottom'\"\n    [bcTooltipText]=\"tooltipText\"\n  ></div>\n</ng-template>\n", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.BcTooltipDirective, selector: "[bc-tooltip]", inputs: ["bcTooltipPosition", "bcTooltipTitle", "bcTooltipText", "bcTooltipButtonText", "bcTooltipParentElement"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-avatar', template: "<div\n  *ngIf=\"!useTooltip; else withTooltip\"\n  class=\"bc-avatar\"\n  [id]=\"id\"\n  [attr.size]=\"size\"\n  [attr.focus]=\"focus\"\n  [attr.icon]=\"icon\"\n  [attr.illustration]=\"illustration\"\n  [attr.alt]=\"alt\"\n  [attr.public]=\"false\"\n  [attr.aria-label]=\"ariaLabel\"\n></div>\n\n<ng-template #withTooltip>\n  <div\n    class=\"bc-avatar\"\n    [id]=\"id\"\n    [attr.size]=\"size\"\n    [attr.focus]=\"focus\"\n    [attr.icon]=\"icon\"\n    [attr.illustration]=\"illustration\"\n    [attr.alt]=\"alt\"\n    [attr.public]=\"false\"\n    [attr.aria-label]=\"ariaLabel\"\n    bc-tooltip\n    [bcTooltipPosition]=\"'bottom'\"\n    [bcTooltipText]=\"tooltipText\"\n  ></div>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i0.ElementRef }]; }, propDecorators: { size: [{
                type: Input
            }], id: [{
                type: Input
            }], icon: [{
                type: Input
            }], illustration: [{
                type: Input
            }], alt: [{
                type: Input
            }], focus: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], tooltipText: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hdmF0YXIvYmMtYXZhdGFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hdmF0YXIvYmMtYXZhdGFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQU94RSxNQUFNLE9BQU8saUJBQWlCO0lBYzVCLFlBQ1UsZUFBZ0MsRUFDaEMsRUFBYztRQURkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSnhCLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFLekIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO2lCQUNsQixhQUFhLENBQUMsS0FBSyxDQUFDO2lCQUNwQixZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OEdBdkNVLGlCQUFpQjtrR0FBakIsaUJBQWlCLGlOQ1I5Qixrc0JBNkJBOzJGRHJCYSxpQkFBaUI7a0JBSjdCLFNBQVM7K0JBQ0UsV0FBVzsrSEFJWixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0F2YXRhckJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtYXZhdGFyJyxcbiAgdGVtcGxhdGVVcmw6ICdiYy1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCY0F2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpbGx1c3RyYXRpb246IHN0cmluZztcbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvY3VzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFyaWFMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwVGV4dDogc3RyaW5nO1xuXG4gIGJjQXZhdGFyQmVoYXZpb3I6IEJjQXZhdGFyQmVoYXZpb3I7XG5cbiAgdXNlVG9vbHRpcDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pZCA9IHRoaXMuaWQgPz8gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG4gICAgaWYgKHRoaXMudG9vbHRpcFRleHQpIHtcbiAgICAgIHRoaXMudXNlVG9vbHRpcCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEF2YXRhckJlaGF2aW9yKCk7XG4gICAgaWYgKHRoaXMuYXJpYUxhYmVsKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpXG4gICAgICAgIC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmFyaWFMYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdEF2YXRhckJlaGF2aW9yKCk6IHZvaWQge1xuICAgIHRoaXMuYmNBdmF0YXJCZWhhdmlvciA9IG5ldyBCY0F2YXRhckJlaGF2aW9yKCk7XG4gICAgdGhpcy5iY0F2YXRhckJlaGF2aW9yLnNldElkKHRoaXMuaWQpO1xuICAgIHRoaXMuYmNBdmF0YXJCZWhhdmlvci5zZXRVcCgpO1xuICB9XG59XG4iLCI8ZGl2XG4gICpuZ0lmPVwiIXVzZVRvb2x0aXA7IGVsc2Ugd2l0aFRvb2x0aXBcIlxuICBjbGFzcz1cImJjLWF2YXRhclwiXG4gIFtpZF09XCJpZFwiXG4gIFthdHRyLnNpemVdPVwic2l6ZVwiXG4gIFthdHRyLmZvY3VzXT1cImZvY3VzXCJcbiAgW2F0dHIuaWNvbl09XCJpY29uXCJcbiAgW2F0dHIuaWxsdXN0cmF0aW9uXT1cImlsbHVzdHJhdGlvblwiXG4gIFthdHRyLmFsdF09XCJhbHRcIlxuICBbYXR0ci5wdWJsaWNdPVwiZmFsc2VcIlxuICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXG4+PC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjd2l0aFRvb2x0aXA+XG4gIDxkaXZcbiAgICBjbGFzcz1cImJjLWF2YXRhclwiXG4gICAgW2lkXT1cImlkXCJcbiAgICBbYXR0ci5zaXplXT1cInNpemVcIlxuICAgIFthdHRyLmZvY3VzXT1cImZvY3VzXCJcbiAgICBbYXR0ci5pY29uXT1cImljb25cIlxuICAgIFthdHRyLmlsbHVzdHJhdGlvbl09XCJpbGx1c3RyYXRpb25cIlxuICAgIFthdHRyLmFsdF09XCJhbHRcIlxuICAgIFthdHRyLnB1YmxpY109XCJmYWxzZVwiXG4gICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICAgIGJjLXRvb2x0aXBcbiAgICBbYmNUb29sdGlwUG9zaXRpb25dPVwiJ2JvdHRvbSdcIlxuICAgIFtiY1Rvb2x0aXBUZXh0XT1cInRvb2x0aXBUZXh0XCJcbiAgPjwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==