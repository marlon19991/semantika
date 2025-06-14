import * as i0 from '@angular/core';
import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BcInputCreateBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import { BcGeneralInputComponent, BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import { CommonModule } from '@angular/common';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { BcInputModule } from '@bancolombia/design-system-web/bc-input';

class BcInputCreateComponent extends BcGeneralInputComponent {
    constructor(bcHelperService) {
        super();
        this.bcHelperService = bcHelperService;
        /**
         * Id del elemento.
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Tipo del input: user, password, password-create, password-update
         * @type {('user' | 'password' | 'password-create' | 'password-update' )}
         * @memberof BcInputCreateComponent
         */
        this.type = 'password-update';
        /**
         * Asigna los condicionales que tendrá el input para modificar o crear la clave.
         * Las condiciones se agregan en orden, si primero va maxLenght, este aparecera primero.
         * @type {JSON} Se debe ingresar un texto con estructura de json.
         * @memberof BcInputCreateComponent
         */
        this.conditionals = `{"maxLength": {"description":"Entre 8 y 20 caracteres", "max":20, "min":8 },
    "capitalLetters": {"description":"Por lo menos una mayuscula","type":"uppercase" },
    "someNumbers": {"description":"Por lo menos un numero", "numbers":1 },
    "initialCharacter": {"description":"Debe iniciar con una letra","type":"character"},
    "specialCharacter": {"description":"debe contener un caracter especial","condition":true},
    "consecutiveNumbers": {"description":"no puede contener 3 numeros consecutivos", "max":3, "ascAndDesc":true}}`;
        /**
         * Titulo del dropdown
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.title = "La clave debe contener";
        /**
         * Icono con el que contará el primer input, correspondiente al espacio del current password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.firstIcon = 'user';
        /**
         * Icono con el que contará el segundo input, correspondiente al espacio del new password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.secondIcon = 'user';
        /**
         * Icono con el que contará el tercer input, correspondiente al espacio del validation password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.thirdIcon = 'user';
        /**
         * Identificador del primer input, correspondiente al current password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.firstIdInput = 'firstId';
        /**
         * Identificador del segundo input, correspondiente al new password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.secondIdInput = 'secondId';
        /**
         * Identificador del tercer input, correspondiente al validation password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.thirdIdInput = 'thirdId';
        /**
         * Texto auxiliar con el que contará el primer input, correspondiente al espacio del current password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.firstLabel = 'Clave';
        /**
         * Texto auxiliar con el que contará el segundo input, correspondiente al espacio del new password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.secondLabel = 'Nueva Clave';
        /**
         * Texto auxiliar con el que contará el tercer input, correspondiente al espacio del validation password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.thirdLabel = 'Confirmacion Clave';
        /**
         * Texto de error con el que contará el primer input, correspondiente al espacio del current password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.firstMsgError = "La clave no cumple con los requerimientos necesarios";
        /**
         * Texto de error con el que contará el segundo input, correspondiente al espacio del new password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.secondMsgError = "La clave no cumple con los requerimientos necesarios";
        /**
         * Texto de error con el que contará el tercer input, correspondiente al espacio del validation password
         * @type {string}
         * @memberof BcInputCreateComponent
         */
        this.thirdMsgError = "Las claves no coinciden";
        /**
         * Enmascaramiento de la clave inicializado en verdadero
         * @type {boolean}
         * @memberof BcInputCreateComponent
         */
        this.mask = true;
        /**
        * Icono del título del dropdown
        * @type {string}
        * @memberof BcInputCreateComponent
        */
        this.titleIcon = 'lock';
        /**
         * Estatus que indica si se habilita o deshabilita el componente
         * @type {boolean}
         * @memberof BcInputCreateComponent
         */
        this.disableStatus = false;
        /**
         * Indica si es el primer cambio del componente
         * @type {boolean}
         * @memberof BcInputCreateComponent
         */
        this.firstChange = false;
    }
    /**
     * Indica cambios generados en el componente
     * @memberof BcInputCreateComponent
     * @param {SimpleChanges} changes
     */
    ngOnChanges(changes) {
        if (this.firstChange) {
            setTimeout(() => {
                this.initInputCreateBehavior();
            });
        }
    }
    /**
     * Acciones a realizar despues de cargar la vista del componente
     * @memberof BcInputCreateComponent
     */
    ngAfterViewInit() {
        this.initInputCreateBehavior();
    }
    /**
     * Inicializa el comportamiento del input-create
     */
    initInputCreateBehavior() {
        this.bcInputCreateBehavior = new BcInputCreateBehavior();
        this.bcInputCreateBehavior.setId(this.componentId);
        this.bcInputCreateBehavior.setUp();
        this.firstChange = true;
    }
}
BcInputCreateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcInputCreateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputCreateComponent, selector: "bc-input-create", inputs: { componentId: "componentId", type: "type", conditionals: "conditionals", supportText: "supportText", title: "title", firstIcon: "firstIcon", secondIcon: "secondIcon", thirdIcon: "thirdIcon", firstIdInput: "firstIdInput", secondIdInput: "secondIdInput", thirdIdInput: "thirdIdInput", firstLabel: "firstLabel", secondLabel: "secondLabel", thirdLabel: "thirdLabel", firstMsgError: "firstMsgError", secondMsgError: "secondMsgError", thirdMsgError: "thirdMsgError", mask: "mask", titleIcon: "titleIcon", disableStatus: "disableStatus" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<section class=\"bc-input-create\" [attr.id]=\"componentId\" [attr.disableStatus]=\"disableStatus\" [attr.firstIdInput]=\"firstIdInput\" [attr.secondIdInput]=\"secondIdInput\"\n    [attr.thirdIdInput]=\"thirdIdInput\" [attr.type]=\"type\" [attr.supportText]=\"supportText\" [attr.title]=\"title\"\n    [attr.firstIcon]=\"firstIcon\" [attr.secondIcon]=\"secondIcon\" [attr.thirdIcon]=\"thirdIcon\"\n    [attr.firstLabel]=\"firstLabel\" [attr.secondLabel]=\"secondLabel\" [attr.thirdLabel]=\"thirdLabel\"\n    [attr.firstMsgError]=\"firstMsgError\" [attr.secondMsgError]=\"secondMsgError\" [attr.thirdMsgError]=\"thirdMsgError\"\n    [attr.mask]=\"mask\" [attr.titleIcon]=\"titleIcon\" [attr.conditionals]=\"conditionals\">\n</section>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-create', template: "<section class=\"bc-input-create\" [attr.id]=\"componentId\" [attr.disableStatus]=\"disableStatus\" [attr.firstIdInput]=\"firstIdInput\" [attr.secondIdInput]=\"secondIdInput\"\n    [attr.thirdIdInput]=\"thirdIdInput\" [attr.type]=\"type\" [attr.supportText]=\"supportText\" [attr.title]=\"title\"\n    [attr.firstIcon]=\"firstIcon\" [attr.secondIcon]=\"secondIcon\" [attr.thirdIcon]=\"thirdIcon\"\n    [attr.firstLabel]=\"firstLabel\" [attr.secondLabel]=\"secondLabel\" [attr.thirdLabel]=\"thirdLabel\"\n    [attr.firstMsgError]=\"firstMsgError\" [attr.secondMsgError]=\"secondMsgError\" [attr.thirdMsgError]=\"thirdMsgError\"\n    [attr.mask]=\"mask\" [attr.titleIcon]=\"titleIcon\" [attr.conditionals]=\"conditionals\">\n</section>" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { componentId: [{
                type: Input
            }], type: [{
                type: Input
            }], conditionals: [{
                type: Input
            }], supportText: [{
                type: Input
            }], title: [{
                type: Input
            }], firstIcon: [{
                type: Input
            }], secondIcon: [{
                type: Input
            }], thirdIcon: [{
                type: Input
            }], firstIdInput: [{
                type: Input
            }], secondIdInput: [{
                type: Input
            }], thirdIdInput: [{
                type: Input
            }], firstLabel: [{
                type: Input
            }], secondLabel: [{
                type: Input
            }], thirdLabel: [{
                type: Input
            }], firstMsgError: [{
                type: Input
            }], secondMsgError: [{
                type: Input
            }], thirdMsgError: [{
                type: Input
            }], mask: [{
                type: Input
            }], titleIcon: [{
                type: Input
            }], disableStatus: [{
                type: Input
            }] } });

class BcInputCreateModule {
}
BcInputCreateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputCreateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateModule, declarations: [BcInputCreateComponent], imports: [CommonModule, BcIconModule, BcInputModule], exports: [BcInputCreateComponent] });
BcInputCreateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateModule, providers: [BcHelperService], imports: [[CommonModule, BcIconModule, BcInputModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputCreateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputCreateComponent],
                    imports: [CommonModule, BcIconModule, BcInputModule],
                    providers: [BcHelperService],
                    exports: [BcInputCreateComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputCreateComponent, BcInputCreateModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-create.mjs.map
