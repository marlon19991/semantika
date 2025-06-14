import { Directive, Input, HostBinding, } from '@angular/core';
import { BcAvatarBehavior, BC_AVATAR_CLASS, } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
var SizeAvatar;
(function (SizeAvatar) {
    SizeAvatar["tiny"] = "tiny";
    SizeAvatar["small"] = "small";
    SizeAvatar["medium"] = "medium";
    SizeAvatar["large"] = "large";
    SizeAvatar["xlarge"] = "xlarge";
})(SizeAvatar || (SizeAvatar = {}));
/**
 * El avatar define una colección de estilos el cual permite asignar un tamaño y una imagen
 * que hay en la colección de tamaños los cuales pueden ser puffy(Grande) o small(pequeño).
 * @export
 * @class BcAvatarDirective
 * @implements {AfterContentInit}
 */
export class BcAvatarDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * El sizeAvatar es el tamaño que se le puede asignar, los cuales pueden ser puffy o small.
         *
         * @type {string}
         * @memberof BcAvatarDirective
         */
        this.sizeAvatar = SizeAvatar.medium;
        this.class = null;
    }
    get hostClasses() {
        const sizeClass = Object.values(SizeAvatar).includes(this.sizeAvatar)
            ? this.sizeAvatar
            : SizeAvatar.medium;
        const avatarClasses = `${BC_AVATAR_CLASS} ${BC_AVATAR_CLASS}-${sizeClass}`;
        return avatarClasses;
    }
    ngAfterViewInit() {
        this.bcAvatarBehavior = new BcAvatarBehavior();
        this.bcAvatarBehavior.setElement(this.elementRef.nativeElement);
        this.bcAvatarBehavior.setUp();
    }
}
BcAvatarDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BcAvatarDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcAvatarDirective, selector: "[bc-avatar]", inputs: { sizeAvatar: "sizeAvatar", class: "class" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-avatar]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { sizeAvatar: [{
                type: Input
            }], class: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYXZhdGFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1hdmF0YXIvYmMtYXZhdGFyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEdBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sc0NBQXNDLENBQUM7O0FBRTlDLElBQUssVUFNSjtBQU5ELFdBQUssVUFBVTtJQUNiLDJCQUFhLENBQUE7SUFDYiw2QkFBZSxDQUFBO0lBQ2YsK0JBQWlCLENBQUE7SUFDakIsNkJBQWUsQ0FBQTtJQUNmLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFOSSxVQUFVLEtBQVYsVUFBVSxRQU1kO0FBRUQ7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBWjFDOzs7OztXQUtHO1FBQ00sZUFBVSxHQUFlLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFM0MsVUFBSyxHQUFHLElBQUksQ0FBQztJQUl1QixDQUFDO0lBRTlDLElBQTBCLFdBQVc7UUFDbkMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDakIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDdEIsTUFBTSxhQUFhLEdBQUcsR0FBRyxlQUFlLElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQzNFLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7OzhHQTNCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4QjtpR0FRVSxVQUFVO3NCQUFsQixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFNb0IsV0FBVztzQkFBcEMsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIEFmdGVyVmlld0luaXQsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmNBdmF0YXJCZWhhdmlvcixcbiAgQkNfQVZBVEFSX0NMQVNTLFxufSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuXG5lbnVtIFNpemVBdmF0YXIge1xuICB0aW55ID0gJ3RpbnknLFxuICBzbWFsbCA9ICdzbWFsbCcsXG4gIG1lZGl1bSA9ICdtZWRpdW0nLFxuICBsYXJnZSA9ICdsYXJnZScsXG4gIHhsYXJnZSA9ICd4bGFyZ2UnLFxufVxuXG4vKipcbiAqIEVsIGF2YXRhciBkZWZpbmUgdW5hIGNvbGVjY2nDs24gZGUgZXN0aWxvcyBlbCBjdWFsIHBlcm1pdGUgYXNpZ25hciB1biB0YW1hw7FvIHkgdW5hIGltYWdlblxuICogcXVlIGhheSBlbiBsYSBjb2xlY2Npw7NuIGRlIHRhbWHDsW9zIGxvcyBjdWFsZXMgcHVlZGVuIHNlciBwdWZmeShHcmFuZGUpIG8gc21hbGwocGVxdWXDsW8pLlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJjQXZhdGFyRGlyZWN0aXZlXG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJDb250ZW50SW5pdH1cbiAqL1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmMtYXZhdGFyXScsXG59KVxuZXhwb3J0IGNsYXNzIEJjQXZhdGFyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBFbCBzaXplQXZhdGFyIGVzIGVsIHRhbWHDsW8gcXVlIHNlIGxlIHB1ZWRlIGFzaWduYXIsIGxvcyBjdWFsZXMgcHVlZGVuIHNlciBwdWZmeSBvIHNtYWxsLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNBdmF0YXJEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHNpemVBdmF0YXI6IFNpemVBdmF0YXIgPSBTaXplQXZhdGFyLm1lZGl1bTtcblxuICBASW5wdXQoKSBjbGFzcyA9IG51bGw7XG5cbiAgYmNBdmF0YXJCZWhhdmlvcjogQmNBdmF0YXJCZWhhdmlvcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpemVDbGFzcyA9IE9iamVjdC52YWx1ZXMoU2l6ZUF2YXRhcikuaW5jbHVkZXModGhpcy5zaXplQXZhdGFyKVxuICAgICAgPyB0aGlzLnNpemVBdmF0YXJcbiAgICAgIDogU2l6ZUF2YXRhci5tZWRpdW07XG4gICAgY29uc3QgYXZhdGFyQ2xhc3NlcyA9IGAke0JDX0FWQVRBUl9DTEFTU30gJHtCQ19BVkFUQVJfQ0xBU1N9LSR7c2l6ZUNsYXNzfWA7XG4gICAgcmV0dXJuIGF2YXRhckNsYXNzZXM7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5iY0F2YXRhckJlaGF2aW9yID0gbmV3IEJjQXZhdGFyQmVoYXZpb3IoKTtcbiAgICB0aGlzLmJjQXZhdGFyQmVoYXZpb3Iuc2V0RWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5iY0F2YXRhckJlaGF2aW9yLnNldFVwKCk7XG4gIH1cbn1cbiJdfQ==