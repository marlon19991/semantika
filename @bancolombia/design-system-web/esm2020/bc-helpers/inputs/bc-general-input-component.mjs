import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BcGeneralInputComponent {
    constructor() {
        this.onChange = (m) => { };
        this.onTouch = () => { };
    }
    get model() {
        return this.value;
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    set(value) {
        this.value = value;
        this.onChange(this.value);
    }
    addOrRemove(value) {
        if (this.contains(value)) {
            this.remove(value);
        }
        else {
            this.add(value);
        }
    }
    contains(value) {
        if (this.value instanceof Array) {
            return this.value.indexOf(value) > -1;
        }
        else if (!!this.value) {
            return this.value === value;
        }
        return false;
    }
    remove(value) {
        const index = this.value.indexOf(value);
        if (!this.value || index < 0) {
            return;
        }
        this.value.splice(index, 1);
        this.onChange(this.value);
    }
    add(value) {
        if (!this.contains(value)) {
            if (this.value instanceof Array) {
                this.value.push(value);
            }
            else {
                this.value = [value];
            }
            this.onChange(this.value);
        }
    }
}
BcGeneralInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcGeneralInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BcGeneralInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcGeneralInputComponent, selector: "ng-component", inputs: { data: "data" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcGeneralInputComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtZ2VuZXJhbC1pbnB1dC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaGVscGVycy9pbnB1dHMvYmMtZ2VuZXJhbC1pbnB1dC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS2pELE1BQU0sT0FBTyx1QkFBdUI7SUFIcEM7UUFRRSxhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUMxQixZQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBdURwQjtJQXREQyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxHQUFHLENBQUMsS0FBVTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBVTtRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkM7YUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7U0FDN0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxNQUFNLENBQUMsS0FBVTtRQUN2QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sR0FBRyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLEtBQUssRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOztvSEE1RFUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsOEVBRnhCLEVBQUU7MkZBRUQsdUJBQXVCO2tCQUhuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOzhCQUVVLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIHZhbHVlOiBhbnk7XG4gIG9uQ2hhbmdlID0gKG06IGFueSkgPT4ge307XG4gIG9uVG91Y2ggPSAoKSA9PiB7fTtcbiAgZ2V0IG1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgc2V0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGFkZE9yUmVtb3ZlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5jb250YWlucyh2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5zKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5pbmRleE9mKHZhbHVlKSA+IC0xO1xuICAgIH0gZWxzZSBpZiAoISF0aGlzLnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKCF0aGlzLnZhbHVlIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuY29udGFpbnModmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMudmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gW3ZhbHVlXTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=