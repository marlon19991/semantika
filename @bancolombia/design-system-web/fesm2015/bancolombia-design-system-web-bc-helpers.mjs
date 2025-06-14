import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

class BcHelperService {
    getId(classRef) {
        const prefix = classRef.constructor.name;
        const array = new Uint32Array(1);
        const randomNumber = window.crypto.getRandomValues(array);
        return `${prefix}.${randomNumber[0]}`;
    }
    keyEvent(event, action) {
        if (event.key && event.key === 'Tab') {
            return true;
        }
        else if (event.key && (event.key === 'Enter' || event.key === ' ')) {
            if (action) {
                action.event();
            }
            return true;
        }
        if (event.type && event.type === 'focusout') {
            return false;
        }
        return true;
    }
}
BcHelperService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHelperService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BcHelperService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHelperService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcHelperService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class BcGeneralInputComponent {
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

/**
 * Generated bundle index. Do not edit.
 */

export { BcGeneralInputComponent, BcHelperService };
//# sourceMappingURL=bancolombia-design-system-web-bc-helpers.mjs.map
