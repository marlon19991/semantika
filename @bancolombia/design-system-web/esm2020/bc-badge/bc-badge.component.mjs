import { Component, Input } from '@angular/core';
import { BcBadgeBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@bancolombia/design-system-web/bc-icon";
import * as i3 from "@angular/common";
import * as i4 from "@bancolombia/design-system-web/bc-avatar";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * El componente badge representa un indicador de novedad sobre un elemento
 *
 * @export
 * @class BcBadgeComponent
 * @implements {AfterViewInit}
 */
export class BcBadgeComponent {
    constructor(helper) {
        this.helper = helper;
        this.avatarElement = false;
        this.iconElement = false;
        /**
         * Indica el id para el comportamiento del componente.
         * @type {string}
         * @memberof BcBadgeComponent
         */
        this.componentId = this.helper.getId(this);
        /**
        * Nombre del ícono.
        * @type {string}
        * @memberof BcBadgeComponent
        */
        this.icon = '';
        /**
         * Tamaño del icono que contiene al badge.
         * @type {('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |)}
         * @memberof BcBadgeComponent
         */
        this.sizeIcon = 'xl';
        /**
         * Tamaño del avatar o imagen que contiene al badge.
         * @type {('puffy' | 'small' |)}
         * @memberof BcBadgeComponent
         */
        this.sizeAvatar = 'small';
        /**
         * Asigna las clases de borde en el badge.
         * @type {boolean}
         * @memberof BcBadgeComponent
         */
        this.border = false;
        /**
         * Url de la imagen a visualizar
         * @type {string}
         * @memberof BcBadgeComponent
         */
        this.srcAvatar = '';
        /**
        * Tamaño del badge.
        * @type {('small' | 'medium' |)}
        * @memberof BcBadgeComponent
        */
        this.sizeBadge = 'medium';
        /**
         * Color del badge.
         * @type {('red' | 'blue' | 'yellow' | 'green' | 'purple' | 'pink' |)}
         * @memberof BcBadgeComponent
         */
        this.color = 'red';
        /**
        * Posición del badge.
        * @type {('button-left' | 'button-right' | 'top-right' | 'top-left' |)}
        * @memberof BcBadgeComponent
        */
        this.position = 'button-right';
        this.bcBadgeBehavior = new BcBadgeBehavior();
        this.elementId = this.componentId + 'element';
        this.avatarElement = false;
        this.iconElement = false;
    }
    /**
    * Configuracióon del componente despues de cargar la vista
    * @type {void}
    * @memberof BcBadgeComponent
    */
    ngAfterViewInit() {
        this.bcBadgeBehavior.setId(this.componentId);
        this.bcBadgeBehavior.setUp();
        this.bcBadgeBehavior.setPosition(this.position);
        this.bcBadgeBehavior.setColor(this.color);
        this.bcBadgeBehavior.setSize(this.sizeBadge);
        this.bcBadgeBehavior.setBorder(this.border);
        setTimeout(() => {
            this.setTypeElement();
        });
    }
    /**
    * Configuración de las notificaciones cuando se detecta un cambio.
    * @type {void}
    * @memberof BcBadgeComponent
    */
    ngOnChanges(changes) {
        if (changes.notification) {
            this.numberNotifcation = this.bcBadgeBehavior.setNotification(this.sizeBadge, this.notification);
            this.bcBadgeBehavior.setAnimation();
        }
    }
    /**
     * Habilita el elemento complementario al badge, ya sea un ícono o un avatar.
     * @type {void}
     * @memberof BcBadgeComponent
     */
    setTypeElement() {
        if (this.srcAvatar.length > 0) {
            this.avatarElement = true;
            this.iconElement = false;
        }
        else if (this.icon.length > 0) {
            this.iconElement = true;
            this.avatarElement = false;
        }
        else {
            this.avatarElement = false;
            this.iconElement = false;
        }
    }
}
BcBadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBadgeComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcBadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcBadgeComponent, selector: "bc-badge", inputs: { componentId: "componentId", icon: "icon", sizeIcon: "sizeIcon", sizeAvatar: "sizeAvatar", border: "border", srcAvatar: "srcAvatar", sizeBadge: "sizeBadge", color: "color", position: "position", notification: "notification" }, usesOnChanges: true, ngImport: i0, template: "<article>\n  <section>\n    <div class=\"bc-badge-body\">\n      <bc-icon size=\"{{ sizeIcon }}\" aria-hidden=\"true\" *ngIf=\"iconElement\">\n        {{ icon }}\n      </bc-icon>\n      <img\n        bc-avatar\n        sizeAvatar=\"{{ sizeAvatar }}\"\n        src=\"{{ srcAvatar }}\"\n        alt=\"avatar\"\n        id=\"elementId\"\n        *ngIf=\"avatarElement\"\n      />\n      <p [id]=\"componentId\">{{ numberNotifcation }}</p>\n    </div>\n  </section>\n</article>\n", components: [{ type: i2.BcIconComponent, selector: "bc-icon", inputs: ["ariaLabel", "size", "width", "name", "class"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.BcAvatarDirective, selector: "[bc-avatar]", inputs: ["sizeAvatar", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-badge', styles: [], template: "<article>\n  <section>\n    <div class=\"bc-badge-body\">\n      <bc-icon size=\"{{ sizeIcon }}\" aria-hidden=\"true\" *ngIf=\"iconElement\">\n        {{ icon }}\n      </bc-icon>\n      <img\n        bc-avatar\n        sizeAvatar=\"{{ sizeAvatar }}\"\n        src=\"{{ srcAvatar }}\"\n        alt=\"avatar\"\n        id=\"elementId\"\n        *ngIf=\"avatarElement\"\n      />\n      <p [id]=\"componentId\">{{ numberNotifcation }}</p>\n    </div>\n  </section>\n</article>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], icon: [{
                type: Input
            }], sizeIcon: [{
                type: Input
            }], sizeAvatar: [{
                type: Input
            }], border: [{
                type: Input
            }], srcAvatar: [{
                type: Input
            }], sizeBadge: [{
                type: Input
            }], color: [{
                type: Input
            }], position: [{
                type: Input
            }], notification: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdfYmRzL2JjLWJhZGdlL2JjLWJhZGdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1iYWRnZS9iYy1iYWRnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFJdkU7Ozs7Ozs7R0FPRztBQVFELE1BQU0sT0FBTyxnQkFBZ0I7SUE4RTNCLFlBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBMUUxQyxrQkFBYSxHQUFVLEtBQUssQ0FBQztRQUM3QixnQkFBVyxHQUFVLEtBQUssQ0FBQztRQUc5Qjs7OztXQUlHO1FBRU0sZ0JBQVcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RDs7OztVQUlFO1FBQ08sU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUU1Qjs7OztXQUlHO1FBQ08sYUFBUSxHQUFnRCxJQUFJLENBQUM7UUFFdkU7Ozs7V0FJRztRQUNPLGVBQVUsR0FBMkIsT0FBTyxDQUFDO1FBRXZEOzs7O1dBSUc7UUFDTyxXQUFNLEdBQWEsS0FBSyxDQUFDO1FBRW5DOzs7O1dBSUc7UUFDTyxjQUFTLEdBQVksRUFBRSxDQUFDO1FBRWpDOzs7O1VBSUU7UUFDUyxjQUFTLEdBQXlCLFFBQVEsQ0FBQztRQUV2RDs7OztXQUlHO1FBQ1MsVUFBSyxHQUF5RCxLQUFLLENBQUM7UUFDL0U7Ozs7VUFJRTtRQUNTLGFBQVEsR0FBNkQsY0FBYyxDQUFDO1FBVXpGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDTDs7OztNQUlFO0lBQ0YsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNEOzs7O01BSUU7SUFDRixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxPQUFPLENBQUMsWUFBWSxFQUFDO1lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVGOzs7O09BSUc7SUFDRixjQUFjO1FBQ1osSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDMUI7YUFBSyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUNHO1lBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs2R0FqSVksZ0JBQWdCO2lHQUFoQixnQkFBZ0IsaVRDckIvQiw4ZEFrQkE7MkZER2UsZ0JBQWdCO2tCQVA3QixTQUFTOytCQUNHLFVBQVUsVUFFWixFQUFFO3NHQWtCSCxXQUFXO3NCQUFuQixLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBT0csTUFBTTtzQkFBZCxLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0ssU0FBUztzQkFBakIsS0FBSztnQkFPRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsUUFBUTtzQkFBaEIsS0FBSztnQkFPRyxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0JhZGdlQmVoYXZpb3IgfSBmcm9tICdAYmFuY29sb21iaWEvZGVzaWduLXN5c3RlbS1iZWhhdmlvcnMnO1xuaW1wb3J0IHsgQmNIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0td2ViL2JjLWhlbHBlcnMnO1xuXG5cbi8qKlxuICogSW1wb3J0YSBsYXMgYWxlcnRhcyBjb24gbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqIEVsIGNvbXBvbmVudGUgYmFkZ2UgcmVwcmVzZW50YSB1biBpbmRpY2Fkb3IgZGUgbm92ZWRhZCBzb2JyZSB1biBlbGVtZW50b1xuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0JhZGdlQ29tcG9uZW50XG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cbiAqL1xuIEBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYmMtYmFkZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYmMtYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW10sXG4gIH0pXG5cblxuICBleHBvcnQgY2xhc3MgQmNCYWRnZUNvbXBvbmVudCAge1xuXG4gICAgIGJjQmFkZ2VCZWhhdmlvcjogQmNCYWRnZUJlaGF2aW9yO1xuICAgICBlbGVtZW50SWQ6IHN0cmluZztcbiAgICAgYXZhdGFyRWxlbWVudDogYm9vbGVhbj1mYWxzZTtcbiAgICAgaWNvbkVsZW1lbnQ6IGJvb2xlYW49ZmFsc2U7XG4gICAgIG51bWJlck5vdGlmY2F0aW9uOnN0cmluZ1xuXG4gIC8qKlxuICAgKiBJbmRpY2EgZWwgaWQgcGFyYSBlbCBjb21wb3J0YW1pZW50byBkZWwgY29tcG9uZW50ZS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjQmFkZ2VDb21wb25lbnRcbiAgICovXG5cbiAgQElucHV0KCkgY29tcG9uZW50SWQ6IHN0cmluZyA9IHRoaXMuaGVscGVyLmdldElkKHRoaXMpO1xuXG4gIC8qKlxuICAqIE5vbWJyZSBkZWwgw61jb25vLlxuICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQG1lbWJlcm9mIEJjQmFkZ2VDb21wb25lbnRcbiAgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJyc7XG5cbiAvKipcbiAgKiBUYW1hw7FvIGRlbCBpY29ubyBxdWUgY29udGllbmUgYWwgYmFkZ2UuXG4gICogQHR5cGUgeygneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcyeGwnIHwgJzN4bCcgfCl9XG4gICogQG1lbWJlcm9mIEJjQmFkZ2VDb21wb25lbnRcbiAgKi9cbiAgQElucHV0KCkgc2l6ZUljb24gOiAneHMnIHwgJ3NtJ3wgJ21kJ3wgJ2xnJ3wgJ3hsJ3wgJzJ4bCd8JzN4bCcgPSAneGwnO1xuICBcbiAvKipcbiAgKiBUYW1hw7FvIGRlbCBhdmF0YXIgbyBpbWFnZW4gcXVlIGNvbnRpZW5lIGFsIGJhZGdlLlxuICAqIEB0eXBlIHsoJ3B1ZmZ5JyB8ICdzbWFsbCcgfCl9XG4gICogQG1lbWJlcm9mIEJjQmFkZ2VDb21wb25lbnRcbiAgKi9cbiAgQElucHV0KCkgc2l6ZUF2YXRhciA6ICdwdWZmeScgfCAnc21hbGwnfCAnJyA9ICdzbWFsbCc7XG5cbiAvKipcbiAgKiBBc2lnbmEgbGFzIGNsYXNlcyBkZSBib3JkZSBlbiBlbCBiYWRnZS5cbiAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgKiBAbWVtYmVyb2YgQmNCYWRnZUNvbXBvbmVudFxuICAqL1xuICBASW5wdXQoKSBib3JkZXIgOiBib29sZWFuID0gZmFsc2U7XG5cbiAvKipcbiAgKiBVcmwgZGUgbGEgaW1hZ2VuIGEgdmlzdWFsaXphclxuICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQG1lbWJlcm9mIEJjQmFkZ2VDb21wb25lbnRcbiAgKi9cbiAgQElucHV0KCkgc3JjQXZhdGFyIDogc3RyaW5nID0gJyc7XG4gICBcbiAgLyoqXG4gICogVGFtYcOxbyBkZWwgYmFkZ2UuXG4gICogQHR5cGUgeygnc21hbGwnIHwgJ21lZGl1bScgfCl9XG4gICogQG1lbWJlcm9mIEJjQmFkZ2VDb21wb25lbnRcbiAgKi9cbiAgICBASW5wdXQoKSBzaXplQmFkZ2UgOiAnc21hbGwnIHwgJ21lZGl1bScgID0gJ21lZGl1bSc7XG5cbiAvKipcbiAgKiBDb2xvciBkZWwgYmFkZ2UuXG4gICogQHR5cGUgeygncmVkJyB8ICdibHVlJyB8ICd5ZWxsb3cnIHwgJ2dyZWVuJyB8ICdwdXJwbGUnIHwgJ3BpbmsnIHwpfVxuICAqIEBtZW1iZXJvZiBCY0JhZGdlQ29tcG9uZW50XG4gICovXG4gICAgQElucHV0KCkgY29sb3IgOiAncmVkJyB8ICdibHVlJ3wgJ3llbGxvdyd8ICdncmVlbid8ICdwdXJwbGUnfCAncGluaycgPSAncmVkJztcbiAgLyoqXG4gICogUG9zaWNpw7NuIGRlbCBiYWRnZS5cbiAgKiBAdHlwZSB7KCdidXR0b24tbGVmdCcgfCAnYnV0dG9uLXJpZ2h0JyB8ICd0b3AtcmlnaHQnIHwgJ3RvcC1sZWZ0JyB8KX1cbiAgKiBAbWVtYmVyb2YgQmNCYWRnZUNvbXBvbmVudFxuICAqL1xuICAgIEBJbnB1dCgpIHBvc2l0aW9uIDogJ2J1dHRvbi1sZWZ0JyB8ICdidXR0b24tcmlnaHQnfCAndG9wLXJpZ2h0J3wgJ3RvcC1sZWZ0JyA9ICdidXR0b24tcmlnaHQnO1xuXG4gIC8qKlxuICAqIE11ZXN0cmEgZWwgbsO6bWVybyBkZSBub3RpZmljYWNpb25lcy5cbiAgKiBAdHlwZSB7c3RyaW5nfVxuICAqIEBtZW1iZXJvZiBCY0JhZGdlQ29tcG9uZW50XG4gICovXG4gICAgQElucHV0KCkgbm90aWZpY2F0aW9uIDogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVscGVyOiBCY0hlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5iY0JhZGdlQmVoYXZpb3IgPSBuZXcgQmNCYWRnZUJlaGF2aW9yKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gdGhpcy5jb21wb25lbnRJZCArICdlbGVtZW50JztcbiAgICAgICAgdGhpcy5hdmF0YXJFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWNvbkVsZW1lbnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgLyoqXG4gICogQ29uZmlndXJhY2nDs29uIGRlbCBjb21wb25lbnRlIGRlc3B1ZXMgZGUgY2FyZ2FyIGxhIHZpc3RhXG4gICogQHR5cGUge3ZvaWR9XG4gICogQG1lbWJlcm9mIEJjQmFkZ2VDb21wb25lbnRcbiAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmNCYWRnZUJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpOyAgIFxuICAgIHRoaXMuYmNCYWRnZUJlaGF2aW9yLnNldFVwKCk7XG4gICAgdGhpcy5iY0JhZGdlQmVoYXZpb3Iuc2V0UG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5iY0JhZGdlQmVoYXZpb3Iuc2V0Q29sb3IodGhpcy5jb2xvcik7XG4gICAgdGhpcy5iY0JhZGdlQmVoYXZpb3Iuc2V0U2l6ZSh0aGlzLnNpemVCYWRnZSk7XG4gICAgdGhpcy5iY0JhZGdlQmVoYXZpb3Iuc2V0Qm9yZGVyKHRoaXMuYm9yZGVyKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHlwZUVsZW1lbnQoKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgKiBDb25maWd1cmFjacOzbiBkZSBsYXMgbm90aWZpY2FjaW9uZXMgY3VhbmRvIHNlIGRldGVjdGEgdW4gY2FtYmlvLlxuICAqIEB0eXBlIHt2b2lkfVxuICAqIEBtZW1iZXJvZiBCY0JhZGdlQ29tcG9uZW50XG4gICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZihjaGFuZ2VzLm5vdGlmaWNhdGlvbil7XG4gICAgICB0aGlzLm51bWJlck5vdGlmY2F0aW9uPXRoaXMuYmNCYWRnZUJlaGF2aW9yLnNldE5vdGlmaWNhdGlvbih0aGlzLnNpemVCYWRnZSx0aGlzLm5vdGlmaWNhdGlvbik7XG4gICAgICAgIHRoaXMuYmNCYWRnZUJlaGF2aW9yLnNldEFuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gLyoqXG4gICogSGFiaWxpdGEgZWwgZWxlbWVudG8gY29tcGxlbWVudGFyaW8gYWwgYmFkZ2UsIHlhIHNlYSB1biDDrWNvbm8gbyB1biBhdmF0YXIuXG4gICogQHR5cGUge3ZvaWR9XG4gICogQG1lbWJlcm9mIEJjQmFkZ2VDb21wb25lbnRcbiAgKi9cbiAgc2V0VHlwZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgaWYodGhpcy5zcmNBdmF0YXIubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLmF2YXRhckVsZW1lbnQgPSB0cnVlO1xuICAgICAgdGhpcy5pY29uRWxlbWVudCA9IGZhbHNlO1xuICAgIH1lbHNlIGlmKHRoaXMuaWNvbi5sZW5ndGggPiAwKXtcbiAgICAgIHRoaXMuaWNvbkVsZW1lbnQgPSB0cnVlO1xuICAgICAgdGhpcy5hdmF0YXJFbGVtZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLmF2YXRhckVsZW1lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaWNvbkVsZW1lbnQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiAgXG4iLCI8YXJ0aWNsZT5cbiAgPHNlY3Rpb24+XG4gICAgPGRpdiBjbGFzcz1cImJjLWJhZGdlLWJvZHlcIj5cbiAgICAgIDxiYy1pY29uIHNpemU9XCJ7eyBzaXplSWNvbiB9fVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiICpuZ0lmPVwiaWNvbkVsZW1lbnRcIj5cbiAgICAgICAge3sgaWNvbiB9fVxuICAgICAgPC9iYy1pY29uPlxuICAgICAgPGltZ1xuICAgICAgICBiYy1hdmF0YXJcbiAgICAgICAgc2l6ZUF2YXRhcj1cInt7IHNpemVBdmF0YXIgfX1cIlxuICAgICAgICBzcmM9XCJ7eyBzcmNBdmF0YXIgfX1cIlxuICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICBpZD1cImVsZW1lbnRJZFwiXG4gICAgICAgICpuZ0lmPVwiYXZhdGFyRWxlbWVudFwiXG4gICAgICAvPlxuICAgICAgPHAgW2lkXT1cImNvbXBvbmVudElkXCI+e3sgbnVtYmVyTm90aWZjYXRpb24gfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbjwvYXJ0aWNsZT5cbiJdfQ==