import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { BcBadgeBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@bancolombia/design-system-web/bc-icon';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@bancolombia/design-system-web/bc-avatar';
import { BcAvatarModule } from '@bancolombia/design-system-web/bc-avatar';

/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * El componente badge representa un indicador de novedad sobre un elemento
 *
 * @export
 * @class BcBadgeComponent
 * @implements {AfterViewInit}
 */
class BcBadgeComponent {
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

class BcBadgeModule {
}
BcBadgeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBadgeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcBadgeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBadgeModule, declarations: [BcBadgeComponent], imports: [BcIconModule, CommonModule, BcAvatarModule], exports: [BcBadgeComponent] });
BcBadgeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBadgeModule, imports: [[BcIconModule, CommonModule, BcAvatarModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcBadgeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcBadgeComponent],
                    imports: [BcIconModule, CommonModule, BcAvatarModule],
                    exports: [BcBadgeComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcBadgeComponent, BcBadgeModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-badge.mjs.map
