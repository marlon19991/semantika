import { ElementRef, OnInit } from '@angular/core';
import { BcAvatarBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcAvatarComponent implements OnInit {
    private bcHelperService;
    private el;
    size: string;
    id: string;
    icon: string;
    illustration: string;
    alt: string;
    focus: string;
    ariaLabel: string;
    tooltipText: string;
    bcAvatarBehavior: BcAvatarBehavior;
    useTooltip: boolean;
    constructor(bcHelperService: BcHelperService, el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initAvatarBehavior(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcAvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcAvatarComponent, "bc-avatar", never, { "size": "size"; "id": "id"; "icon": "icon"; "illustration": "illustration"; "alt": "alt"; "focus": "focus"; "ariaLabel": "ariaLabel"; "tooltipText": "tooltipText"; }, {}, never, never>;
}
