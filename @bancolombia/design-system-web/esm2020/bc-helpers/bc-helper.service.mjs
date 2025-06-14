import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BcHelperService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaGVscGVycy9iYy1oZWxwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVMzQyxNQUFNLE9BQU8sZUFBZTtJQUUxQixLQUFLLENBQUMsUUFBUTtRQUNaLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3pDLE1BQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE9BQU8sR0FBRyxNQUFNLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFvQixFQUFFLE1BQWU7UUFDNUMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3BFLElBQUksTUFBTSxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDM0MsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7NEdBcEJVLGVBQWU7Z0hBQWYsZUFBZSxjQUZkLE1BQU07MkZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBBY3Rpb24ge1xuICBldmVudD86IEZ1bmN0aW9uO1xuICBhcmdzPzogW107XG59XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCY0hlbHBlclNlcnZpY2Uge1xuXG4gIGdldElkKGNsYXNzUmVmKSB7XG4gICAgY29uc3QgcHJlZml4ID0gY2xhc3NSZWYuY29uc3RydWN0b3IubmFtZTtcbiAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50MzJBcnJheSgxKTtcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnJheSk7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0uJHtyYW5kb21OdW1iZXJbMF19YDtcbiAgfVxuXG4gIGtleUV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBhY3Rpb24/OiBBY3Rpb24pIHtcbiAgICBpZiAoZXZlbnQua2V5ICYmIGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ICYmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnICcpKSB7XG4gICAgICBpZiAoYWN0aW9uKSB7IGFjdGlvbi5ldmVudCgpOyB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnR5cGUgJiYgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19