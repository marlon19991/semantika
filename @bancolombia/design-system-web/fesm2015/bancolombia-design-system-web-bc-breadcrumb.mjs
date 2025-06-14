import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcBreadcrumbBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class BcBreadcrumbComponent {
    constructor(bcHelperService, activatedRoute) {
        this.bcHelperService = bcHelperService;
        this.activatedRoute = activatedRoute;
        this.componentId = this.bcHelperService.getId(this);
        this.bcBreadcrumbBehavior = new BcBreadcrumbBehavior();
    }
    ngOnInit() {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    }
    ngAfterViewInit() {
        this.bcBreadcrumbBehavior.setId(this.componentId);
        this.bcBreadcrumbBehavior.setUp();
        this.bcBreadcrumbBehavior.changeBreadCrumb();
    }
    createBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            const routeURL = child.snapshot.url.map((segment) => segment.path).join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;
            }
            const breadcrumb = child.snapshot.data.breadcrumb;
            if (breadcrumb && !breadcrumbs.map((item) => item.text).includes(breadcrumb)) {
                breadcrumbs.push({ path: url, text: breadcrumb });
            }
            return this.createBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
BcBreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBreadcrumbComponent, deps: [{ token: i1.BcHelperService }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
BcBreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcBreadcrumbComponent, selector: "bc-breadcrumb", inputs: { componentId: "componentId" }, ngImport: i0, template: "<nav class=\"bc-breadcrumb\" aria-label=\"Breadcrumb\" [id]=\"componentId\">\n    <ol class=\"bc-breadcrumb-items\">\n        <li class=\"item\" *ngFor=\"let link of breadcrumbs\">\n            <a class=\"bc-link link-default\" [routerLink]=\"link.path\">\n                <span>{{ link.text }}</span>\n            </a>\n        </li>\n    </ol>\n</nav>\n", directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-breadcrumb', styles: [], template: "<nav class=\"bc-breadcrumb\" aria-label=\"Breadcrumb\" [id]=\"componentId\">\n    <ol class=\"bc-breadcrumb-items\">\n        <li class=\"item\" *ngFor=\"let link of breadcrumbs\">\n            <a class=\"bc-link link-default\" [routerLink]=\"link.path\">\n                <span>{{ link.text }}</span>\n            </a>\n        </li>\n    </ol>\n</nav>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }, { type: i2.ActivatedRoute }]; }, propDecorators: { componentId: [{
                type: Input
            }] } });

class BcBreadcrumbModule {
}
BcBreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcBreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBreadcrumbModule, declarations: [BcBreadcrumbComponent], imports: [RouterModule, CommonModule], exports: [BcBreadcrumbComponent] });
BcBreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBreadcrumbModule, imports: [[RouterModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcBreadcrumbComponent],
                    imports: [RouterModule, CommonModule],
                    exports: [BcBreadcrumbComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcBreadcrumbComponent, BcBreadcrumbModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-breadcrumb.mjs.map
