import { SimpleChanges } from '@angular/core';
import { BcBadgeBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Importa las alertas con los diseños de Bancolombia S.A.
 * El componente badge representa un indicador de novedad sobre un elemento
 *
 * @export
 * @class BcBadgeComponent
 * @implements {AfterViewInit}
 */
export declare class BcBadgeComponent {
    private helper;
    bcBadgeBehavior: BcBadgeBehavior;
    elementId: string;
    avatarElement: boolean;
    iconElement: boolean;
    numberNotifcation: string;
    /**
     * Indica el id para el comportamiento del componente.
     * @type {string}
     * @memberof BcBadgeComponent
     */
    componentId: string;
    /**
    * Nombre del ícono.
    * @type {string}
    * @memberof BcBadgeComponent
    */
    icon: string;
    /**
     * Tamaño del icono que contiene al badge.
     * @type {('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |)}
     * @memberof BcBadgeComponent
     */
    sizeIcon: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    /**
     * Tamaño del avatar o imagen que contiene al badge.
     * @type {('puffy' | 'small' |)}
     * @memberof BcBadgeComponent
     */
    sizeAvatar: 'puffy' | 'small' | '';
    /**
     * Asigna las clases de borde en el badge.
     * @type {boolean}
     * @memberof BcBadgeComponent
     */
    border: boolean;
    /**
     * Url de la imagen a visualizar
     * @type {string}
     * @memberof BcBadgeComponent
     */
    srcAvatar: string;
    /**
    * Tamaño del badge.
    * @type {('small' | 'medium' |)}
    * @memberof BcBadgeComponent
    */
    sizeBadge: 'small' | 'medium';
    /**
     * Color del badge.
     * @type {('red' | 'blue' | 'yellow' | 'green' | 'purple' | 'pink' |)}
     * @memberof BcBadgeComponent
     */
    color: 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'pink';
    /**
    * Posición del badge.
    * @type {('button-left' | 'button-right' | 'top-right' | 'top-left' |)}
    * @memberof BcBadgeComponent
    */
    position: 'button-left' | 'button-right' | 'top-right' | 'top-left';
    /**
    * Muestra el número de notificaciones.
    * @type {string}
    * @memberof BcBadgeComponent
    */
    notification: string;
    constructor(helper: BcHelperService);
    /**
    * Configuracióon del componente despues de cargar la vista
    * @type {void}
    * @memberof BcBadgeComponent
    */
    ngAfterViewInit(): void;
    /**
    * Configuración de las notificaciones cuando se detecta un cambio.
    * @type {void}
    * @memberof BcBadgeComponent
    */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Habilita el elemento complementario al badge, ya sea un ícono o un avatar.
     * @type {void}
     * @memberof BcBadgeComponent
     */
    setTypeElement(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcBadgeComponent, "bc-badge", never, { "componentId": "componentId"; "icon": "icon"; "sizeIcon": "sizeIcon"; "sizeAvatar": "sizeAvatar"; "border": "border"; "srcAvatar": "srcAvatar"; "sizeBadge": "sizeBadge"; "color": "color"; "position": "position"; "notification": "notification"; }, {}, never, never>;
}
