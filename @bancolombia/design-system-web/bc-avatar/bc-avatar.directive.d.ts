import { AfterViewInit, ElementRef } from '@angular/core';
import { BcAvatarBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
declare enum SizeAvatar {
    tiny = "tiny",
    small = "small",
    medium = "medium",
    large = "large",
    xlarge = "xlarge"
}
/**
 * El avatar define una colección de estilos el cual permite asignar un tamaño y una imagen
 * que hay en la colección de tamaños los cuales pueden ser puffy(Grande) o small(pequeño).
 * @export
 * @class BcAvatarDirective
 * @implements {AfterContentInit}
 */
export declare class BcAvatarDirective implements AfterViewInit {
    private elementRef;
    /**
     * El sizeAvatar es el tamaño que se le puede asignar, los cuales pueden ser puffy o small.
     *
     * @type {string}
     * @memberof BcAvatarDirective
     */
    sizeAvatar: SizeAvatar;
    class: any;
    bcAvatarBehavior: BcAvatarBehavior;
    constructor(elementRef: ElementRef);
    get hostClasses(): string;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAvatarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BcAvatarDirective, "[bc-avatar]", never, { "sizeAvatar": "sizeAvatar"; "class": "class"; }, {}, never>;
}
export {};
