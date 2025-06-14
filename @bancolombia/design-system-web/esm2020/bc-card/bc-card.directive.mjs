import { Directive, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
const DEFAULT = 'bc-card';
const DEFAULT_COLOR = 'bc-card-color';
const CARD_TYPE = {
    default: DEFAULT,
    image: DEFAULT + '-image',
    circle: DEFAULT + '-circle',
    rounded: DEFAULT + '-rounded',
    'rounded-header': DEFAULT + '-rounded-header',
    'rounded-horizontal': DEFAULT + '-rounded-horizontal',
    'rounded-header-horizontal': DEFAULT + '-rounded-header-horizontal',
    horizontal: DEFAULT + '-horizontal',
    'header-horizontal': DEFAULT + '-header-horizontal',
    header: DEFAULT + '-header'
};
const BACKGROUND_COLOR = {
    warning: DEFAULT_COLOR + '-warning',
    info: DEFAULT_COLOR + '-info',
    success: DEFAULT_COLOR + '-success',
    error: DEFAULT_COLOR + '-error',
};
/**
 * Importa los cards con los diseños de Bancolombia S.A para mostrar una vista previa del contenido al que se vincular.
 *
 * @export
 * @class BcCardDirective
 * @implements {OnInit}
 */
export class BcCardDirective {
    constructor() {
        /**
         * Indica la clase de card.
         *
         * @type {string}
         * @memberof BcCardDirective
         */
        this.class = '';
    }
    /**
     * Hace binding de las clases que se asignan a la directiva (tipo y color)
     * @type {string}
     * @memberof BcCardDirective
     */
    get hostClasses() {
        return [
            this.class,
            this.setTypeCard(),
            this.setCardColor(),
        ].join(' ');
    }
    /**
     * Setea el tipo de card
     *
     * @returns
     * @memberof BcCardDirective
     */
    setTypeCard() {
        let response = CARD_TYPE[this.type];
        if (!response) {
            response = CARD_TYPE.default;
        }
        return response;
    }
    /**
   * Setea el color de card
   *
   * @returns
   * @memberof BcCardDirective
   */
    setCardColor() {
        let response = BACKGROUND_COLOR[this.backgroundColor];
        if (!response) {
            response = '';
        }
        return response;
    }
    /**
    * Inicializa la directiva
    * @memberof BcCardDirective
    */
    ngOnInit() {
        this.setTypeCard();
    }
}
BcCardDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BcCardDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.4.0", type: BcCardDirective, selector: "[bc-card]", inputs: { class: "class", type: ["typeCard", "type"], backgroundColor: "backgroundColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcCardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bc-card]'
                }]
        }], propDecorators: { class: [{
                type: Input
            }], type: [{
                type: Input,
                args: ['typeCard']
            }], backgroundColor: [{
                type: Input,
                args: ['backgroundColor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtY2FyZC9iYy1jYXJkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXRFLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUMxQixNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFFdEMsTUFBTSxTQUFTLEdBQUc7SUFDaEIsT0FBTyxFQUFFLE9BQU87SUFDaEIsS0FBSyxFQUFFLE9BQU8sR0FBRyxRQUFRO0lBQ3pCLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUztJQUMzQixPQUFPLEVBQUUsT0FBTyxHQUFHLFVBQVU7SUFDN0IsZ0JBQWdCLEVBQUUsT0FBTyxHQUFHLGlCQUFpQjtJQUM3QyxvQkFBb0IsRUFBRSxPQUFPLEdBQUcscUJBQXFCO0lBQ3JELDJCQUEyQixFQUFFLE9BQU8sR0FBRyw0QkFBNEI7SUFDbkUsVUFBVSxFQUFFLE9BQU8sR0FBRyxhQUFhO0lBQ25DLG1CQUFtQixFQUFFLE9BQU8sR0FBRyxvQkFBb0I7SUFDbkQsTUFBTSxFQUFFLE9BQU8sR0FBRyxTQUFTO0NBQzVCLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLE9BQU8sRUFBRSxhQUFhLEdBQUcsVUFBVTtJQUNuQyxJQUFJLEVBQUUsYUFBYSxHQUFHLE9BQU87SUFDN0IsT0FBTyxFQUFFLGFBQWEsR0FBRyxVQUFVO0lBQ25DLEtBQUssRUFBRSxhQUFhLEdBQUcsUUFBUTtDQUNoQyxDQUFDO0FBQ0Y7Ozs7OztHQU1HO0FBS0gsTUFBTSxPQUFPLGVBQWU7SUFKNUI7UUFNRTs7Ozs7V0FLRztRQUNNLFVBQUssR0FBRyxFQUFFLENBQUM7S0FvRXJCO0lBaERDOzs7O09BSUc7SUFFSCxJQUEwQixXQUFXO1FBQ25DLE9BQU87WUFDTCxJQUFJLENBQUMsS0FBSztZQUNWLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRTtTQUNwQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVc7UUFDVCxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUM5QjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7S0FLQztJQUNELFlBQVk7UUFDVixJQUFJLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDRjs7O01BR0U7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7OzRHQTNFVSxlQUFlO2dHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7OEJBVVUsS0FBSztzQkFBYixLQUFLO2dCQVNhLElBQUk7c0JBQXRCLEtBQUs7dUJBQUMsVUFBVTtnQkFVUyxlQUFlO3NCQUF4QyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFPRSxXQUFXO3NCQUFwQyxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IERFRkFVTFQgPSAnYmMtY2FyZCc7XG5jb25zdCBERUZBVUxUX0NPTE9SID0gJ2JjLWNhcmQtY29sb3InO1xuXG5jb25zdCBDQVJEX1RZUEUgPSB7XG4gIGRlZmF1bHQ6IERFRkFVTFQsXG4gIGltYWdlOiBERUZBVUxUICsgJy1pbWFnZScsXG4gIGNpcmNsZTogREVGQVVMVCArICctY2lyY2xlJyxcbiAgcm91bmRlZDogREVGQVVMVCArICctcm91bmRlZCcsXG4gICdyb3VuZGVkLWhlYWRlcic6IERFRkFVTFQgKyAnLXJvdW5kZWQtaGVhZGVyJyxcbiAgJ3JvdW5kZWQtaG9yaXpvbnRhbCc6IERFRkFVTFQgKyAnLXJvdW5kZWQtaG9yaXpvbnRhbCcsXG4gICdyb3VuZGVkLWhlYWRlci1ob3Jpem9udGFsJzogREVGQVVMVCArICctcm91bmRlZC1oZWFkZXItaG9yaXpvbnRhbCcsXG4gIGhvcml6b250YWw6IERFRkFVTFQgKyAnLWhvcml6b250YWwnLFxuICAnaGVhZGVyLWhvcml6b250YWwnOiBERUZBVUxUICsgJy1oZWFkZXItaG9yaXpvbnRhbCcsXG4gIGhlYWRlcjogREVGQVVMVCArICctaGVhZGVyJ1xufTtcblxuY29uc3QgQkFDS0dST1VORF9DT0xPUiA9IHtcbiAgd2FybmluZzogREVGQVVMVF9DT0xPUiArICctd2FybmluZycsXG4gIGluZm86IERFRkFVTFRfQ09MT1IgKyAnLWluZm8nLFxuICBzdWNjZXNzOiBERUZBVUxUX0NPTE9SICsgJy1zdWNjZXNzJyxcbiAgZXJyb3I6IERFRkFVTFRfQ09MT1IgKyAnLWVycm9yJyxcbn07XG4vKipcbiAqIEltcG9ydGEgbG9zIGNhcmRzIGNvbiBsb3MgZGlzZcOxb3MgZGUgQmFuY29sb21iaWEgUy5BIHBhcmEgbW9zdHJhciB1bmEgdmlzdGEgcHJldmlhIGRlbCBjb250ZW5pZG8gYWwgcXVlIHNlIHZpbmN1bGFyLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0NhcmREaXJlY3RpdmVcbiAqIEBpbXBsZW1lbnRzIHtPbkluaXR9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYy1jYXJkXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBCY0NhcmREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8qKlxuICAgKiBJbmRpY2EgbGEgY2xhc2UgZGUgY2FyZC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICAvKipcbiAgICogVGlwbyBkZSBjYXJkLlxuICAgKlxuICAgKiBAdHlwZSB7KCdkZWZhdWx0JyB8ICdyb3VuZGVkJyB8ICdyb3VuZGVkLWhlYWRlcicgfCAncm91bmRlZC1ob3Jpem9udGFsJyB8ICdyb3VuZGVkLWhlYWRlci1ob3Jpem9udGFsJyB8XG4gICAqICAgICAnaG9yaXpvbnRhbCcgfCAnaGVhZGVyLWhvcml6b250YWwnIHwgJ2hlYWRlcicpfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkRGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoJ3R5cGVDYXJkJykgdHlwZTogJ2RlZmF1bHQnIHwgJ2ltYWdlJyB8ICdyb3VuZGVkJyB8ICdyb3VuZGVkLWhlYWRlcicgfCAncm91bmRlZC1ob3Jpem9udGFsJyB8ICdyb3VuZGVkLWhlYWRlci1ob3Jpem9udGFsJyB8XG4gICAgJ2hvcml6b250YWwnIHwgJ2hlYWRlci1ob3Jpem9udGFsJyB8ICdoZWFkZXInO1xuXG4gIC8qKlxuICAgKiBDb2xvciBkZSBsYSBjYXJkLlxuICAgKlxuICAgKiBAdHlwZSB7KCdkZWZhdWx0JyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdlcnJvcicgfCAnc3VjY2VzcycpfVxuICAgKiBAbWVtYmVyb2YgQmNDYXJkRGlyZWN0aXZlXG4gICAqL1xuXG4gIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYmFja2dyb3VuZENvbG9yOiAnZGVmYXVsdCcgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZXJyb3InIHwgJ3N1Y2Nlc3MnO1xuICAvKipcbiAgICogSGFjZSBiaW5kaW5nIGRlIGxhcyBjbGFzZXMgcXVlIHNlIGFzaWduYW4gYSBsYSBkaXJlY3RpdmEgKHRpcG8geSBjb2xvcilcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQ2FyZERpcmVjdGl2ZVxuICAgKi9cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGhvc3RDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuY2xhc3MsXG4gICAgICB0aGlzLnNldFR5cGVDYXJkKCksXG4gICAgICB0aGlzLnNldENhcmRDb2xvcigpLFxuICAgIF0uam9pbignICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldGVhIGVsIHRpcG8gZGUgY2FyZFxuICAgKlxuICAgKiBAcmV0dXJuc1xuICAgKiBAbWVtYmVyb2YgQmNDYXJkRGlyZWN0aXZlXG4gICAqL1xuICBzZXRUeXBlQ2FyZCgpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBDQVJEX1RZUEVbdGhpcy50eXBlXTtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXNwb25zZSA9IENBUkRfVFlQRS5kZWZhdWx0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAqIFNldGVhIGVsIGNvbG9yIGRlIGNhcmRcbiAqXG4gKiBAcmV0dXJuc1xuICogQG1lbWJlcm9mIEJjQ2FyZERpcmVjdGl2ZVxuICovXG4gIHNldENhcmRDb2xvcigpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBCQUNLR1JPVU5EX0NPTE9SW3RoaXMuYmFja2dyb3VuZENvbG9yXTtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXNwb25zZSA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbiAvKipcbiAqIEluaWNpYWxpemEgbGEgZGlyZWN0aXZhXG4gKiBAbWVtYmVyb2YgQmNDYXJkRGlyZWN0aXZlXG4gKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRUeXBlQ2FyZCgpO1xuICB9XG59XG5cbiJdfQ==