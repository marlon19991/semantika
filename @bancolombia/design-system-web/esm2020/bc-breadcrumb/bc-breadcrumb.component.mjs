import { Component, Input } from '@angular/core';
import { BcBreadcrumbBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
export class BcBreadcrumbComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtYnJlYWRjcnVtYi9iYy1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1icmVhZGNydW1iL2JjLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBUzVFLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsWUFBb0IsZUFBZ0MsRUFBVSxjQUE4QjtRQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGbkYsZ0JBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUd0RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBcUIsRUFBRSxNQUFjLEVBQUUsRUFBRSxjQUE2QixFQUFFO1FBQ2hHLE1BQU0sUUFBUSxHQUFxQixLQUFLLENBQUMsUUFBUSxDQUFDO1FBRWxELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLFFBQVEsRUFBRTtZQUM1QixNQUFNLFFBQVEsR0FBVyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckYsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO2dCQUNuQixHQUFHLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQzthQUN2QjtZQUVELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsRCxJQUFJLFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzVFLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQ25EO1lBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2tIQTFDVSxxQkFBcUI7c0dBQXJCLHFCQUFxQiw2RkNYbEMscVdBU0E7MkZERWEscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLGVBQWUsVUFFakIsRUFBRTttSUFNRCxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQnJlYWRjcnVtYiB9IGZyb20gJy4vbW9kZWxzL2JyZWFkY3J1bWIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJjQnJlYWRjcnVtYkJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYy1icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCY0JyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBiY0JyZWFkY3J1bWJCZWhhdmlvcjogQmNCcmVhZGNydW1iQmVoYXZpb3I7XG4gIGJyZWFkY3J1bWJzOiBJQnJlYWRjcnVtYltdO1xuXG4gIEBJbnB1dCgpIGNvbXBvbmVudElkID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiY0hlbHBlclNlcnZpY2U6IEJjSGVscGVyU2VydmljZSwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB0aGlzLmJjQnJlYWRjcnVtYkJlaGF2aW9yID0gbmV3IEJjQnJlYWRjcnVtYkJlaGF2aW9yKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5jcmVhdGVCcmVhZGNydW1icyh0aGlzLmFjdGl2YXRlZFJvdXRlLnJvb3QpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYmNCcmVhZGNydW1iQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY0JyZWFkY3J1bWJCZWhhdmlvci5zZXRVcCgpO1xuICAgIHRoaXMuYmNCcmVhZGNydW1iQmVoYXZpb3IuY2hhbmdlQnJlYWRDcnVtYigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCcmVhZGNydW1icyhyb3V0ZTogQWN0aXZhdGVkUm91dGUsIHVybDogc3RyaW5nID0gJycsIGJyZWFkY3J1bWJzOiBJQnJlYWRjcnVtYltdID0gW10pOiBhbnlbXSB7XG4gICAgY29uc3QgY2hpbGRyZW46IEFjdGl2YXRlZFJvdXRlW10gPSByb3V0ZS5jaGlsZHJlbjtcblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBjb25zdCByb3V0ZVVSTDogc3RyaW5nID0gY2hpbGQuc25hcHNob3QudXJsLm1hcCgoc2VnbWVudCkgPT4gc2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XG4gICAgICBpZiAocm91dGVVUkwgIT09ICcnKSB7XG4gICAgICAgIHVybCArPSBgLyR7cm91dGVVUkx9YDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnJlYWRjcnVtYiA9IGNoaWxkLnNuYXBzaG90LmRhdGEuYnJlYWRjcnVtYjtcbiAgICAgIGlmIChicmVhZGNydW1iICYmICFicmVhZGNydW1icy5tYXAoKGl0ZW0pID0+IGl0ZW0udGV4dCkuaW5jbHVkZXMoYnJlYWRjcnVtYikpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7IHBhdGg6IHVybCwgdGV4dDogYnJlYWRjcnVtYiB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQnJlYWRjcnVtYnMoY2hpbGQsIHVybCwgYnJlYWRjcnVtYnMpO1xuICAgIH1cblxuICAgIHJldHVybiBicmVhZGNydW1icztcbiAgfVxufVxuIiwiPG5hdiBjbGFzcz1cImJjLWJyZWFkY3J1bWJcIiBhcmlhLWxhYmVsPVwiQnJlYWRjcnVtYlwiIFtpZF09XCJjb21wb25lbnRJZFwiPlxuICAgIDxvbCBjbGFzcz1cImJjLWJyZWFkY3J1bWItaXRlbXNcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiICpuZ0Zvcj1cImxldCBsaW5rIG9mIGJyZWFkY3J1bWJzXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJjLWxpbmsgbGluay1kZWZhdWx0XCIgW3JvdXRlckxpbmtdPVwibGluay5wYXRoXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgbGluay50ZXh0IH19PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvb2w+XG48L25hdj5cbiJdfQ==