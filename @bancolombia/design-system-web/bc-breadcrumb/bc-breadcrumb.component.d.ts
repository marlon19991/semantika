import { OnInit } from '@angular/core';
import { IBreadcrumb } from './models/breadcrumb.interface';
import { BcBreadcrumbBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class BcBreadcrumbComponent implements OnInit {
    private bcHelperService;
    private activatedRoute;
    bcBreadcrumbBehavior: BcBreadcrumbBehavior;
    breadcrumbs: IBreadcrumb[];
    componentId: string;
    constructor(bcHelperService: BcHelperService, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private createBreadcrumbs;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcBreadcrumbComponent, "bc-breadcrumb", never, { "componentId": "componentId"; }, {}, never, never>;
}
