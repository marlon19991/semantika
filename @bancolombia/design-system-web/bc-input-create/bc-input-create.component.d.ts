import { AfterViewInit, SimpleChanges } from '@angular/core';
import { BcInputCreateBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare class BcInputCreateComponent extends BcGeneralInputComponent implements AfterViewInit {
    private bcHelperService;
    bcInputCreateBehavior: BcInputCreateBehavior;
    constructor(bcHelperService: BcHelperService);
    /**
     * Id del elemento.
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    componentId: string;
    /**
     * Tipo del input: user, password, password-create, password-update
     * @type {('user' | 'password' | 'password-create' | 'password-update' )}
     * @memberof BcInputCreateComponent
     */
    type: 'user' | 'password' | 'password-create' | 'password-update';
    /**
     * Asigna los condicionales que tendrá el input para modificar o crear la clave.
     * Las condiciones se agregan en orden, si primero va maxLenght, este aparecera primero.
     * @type {JSON} Se debe ingresar un texto con estructura de json.
     * @memberof BcInputCreateComponent
     */
    conditionals: string;
    /**
     * Contenido del texto de soporte que tendra el dropdown
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    supportText: string;
    /**
     * Titulo del dropdown
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    title: string;
    /**
     * Icono con el que contará el primer input, correspondiente al espacio del current password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    firstIcon: string;
    /**
     * Icono con el que contará el segundo input, correspondiente al espacio del new password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    secondIcon: string;
    /**
     * Icono con el que contará el tercer input, correspondiente al espacio del validation password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    thirdIcon: string;
    /**
     * Identificador del primer input, correspondiente al current password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    firstIdInput: string;
    /**
     * Identificador del segundo input, correspondiente al new password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    secondIdInput: string;
    /**
     * Identificador del tercer input, correspondiente al validation password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    thirdIdInput: string;
    /**
     * Texto auxiliar con el que contará el primer input, correspondiente al espacio del current password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    firstLabel: string;
    /**
     * Texto auxiliar con el que contará el segundo input, correspondiente al espacio del new password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    secondLabel: string;
    /**
     * Texto auxiliar con el que contará el tercer input, correspondiente al espacio del validation password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    thirdLabel: string;
    /**
     * Texto de error con el que contará el primer input, correspondiente al espacio del current password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    firstMsgError: string;
    /**
     * Texto de error con el que contará el segundo input, correspondiente al espacio del new password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    secondMsgError: string;
    /**
     * Texto de error con el que contará el tercer input, correspondiente al espacio del validation password
     * @type {string}
     * @memberof BcInputCreateComponent
     */
    thirdMsgError: string;
    /**
     * Enmascaramiento de la clave inicializado en verdadero
     * @type {boolean}
     * @memberof BcInputCreateComponent
     */
    mask: boolean;
    /**
    * Icono del título del dropdown
    * @type {string}
    * @memberof BcInputCreateComponent
    */
    titleIcon: string;
    /**
     * Estatus que indica si se habilita o deshabilita el componente
     * @type {boolean}
     * @memberof BcInputCreateComponent
     */
    disableStatus: boolean;
    /**
     * Indica si es el primer cambio del componente
     * @type {boolean}
     * @memberof BcInputCreateComponent
     */
    firstChange: boolean;
    /**
     * Indica cambios generados en el componente
     * @memberof BcInputCreateComponent
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Acciones a realizar despues de cargar la vista del componente
     * @memberof BcInputCreateComponent
     */
    ngAfterViewInit(): void;
    /**
     * Inicializa el comportamiento del input-create
     */
    initInputCreateBehavior(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputCreateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInputCreateComponent, "bc-input-create", never, { "componentId": "componentId"; "type": "type"; "conditionals": "conditionals"; "supportText": "supportText"; "title": "title"; "firstIcon": "firstIcon"; "secondIcon": "secondIcon"; "thirdIcon": "thirdIcon"; "firstIdInput": "firstIdInput"; "secondIdInput": "secondIdInput"; "thirdIdInput": "thirdIdInput"; "firstLabel": "firstLabel"; "secondLabel": "secondLabel"; "thirdLabel": "thirdLabel"; "firstMsgError": "firstMsgError"; "secondMsgError": "secondMsgError"; "thirdMsgError": "thirdMsgError"; "mask": "mask"; "titleIcon": "titleIcon"; "disableStatus": "disableStatus"; }, {}, never, never>;
}
