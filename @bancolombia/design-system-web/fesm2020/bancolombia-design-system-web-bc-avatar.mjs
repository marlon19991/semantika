import * as i0 from '@angular/core';
import { Directive, Input, HostBinding, Component, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@bancolombia/design-system-web/bc-tooltip';
import { BcTooltipModule } from '@bancolombia/design-system-web/bc-tooltip';
import { BC_AVATAR_CLASS, BcAvatarBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';

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
class BcAvatarDirective {
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

class BcAvatarComponent {
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

/**
 * Importa la directiva de avatar con los diseños de Bancolombia S.A.
 * @package bc-avatar
 *   @Directiva bc-avatar
 *   @param  typeAvatar Tipo del avatar || puffy || small
 *   <img bc-avatar typeAvatar ='puffy' src="image.jpg" alt="">
 *
 * @Nota Cuando un avatar no está disponible (por ejemplo, debido a un error de imagen),
 * se muestra un avatar predeterminado.
 *
 * @author: Bancolombia S.A
 */
class BcAvatarModule {
}
BcAvatarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcAvatarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarModule, declarations: [BcAvatarDirective, BcAvatarComponent], imports: [CommonModule, BcTooltipModule], exports: [BcAvatarDirective, BcAvatarComponent] });
BcAvatarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarModule, imports: [[CommonModule, BcTooltipModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcAvatarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcAvatarDirective, BcAvatarComponent],
                    imports: [CommonModule, BcTooltipModule],
                    exports: [BcAvatarDirective, BcAvatarComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcAvatarComponent, BcAvatarDirective, BcAvatarModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-avatar.mjs.map
