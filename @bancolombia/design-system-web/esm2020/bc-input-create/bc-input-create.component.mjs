import { Component, Input } from '@angular/core';
import { BcInputCreateBehavior } from '@bancolombia/design-system-behaviors';
import { BcGeneralInputComponent } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
export class BcInputCreateComponent extends BcGeneralInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1jcmVhdGUvYmMtaW5wdXQtY3JlYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1jcmVhdGUvYmMtaW5wdXQtY3JlYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7O0FBUXBGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx1QkFBdUI7SUFFakUsWUFBb0IsZUFBZ0M7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFEVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFJcEQ7Ozs7V0FJRztRQUNNLGdCQUFXLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEU7Ozs7V0FJRztRQUNNLFNBQUksR0FBZ0UsaUJBQWlCLENBQUM7UUFFL0Y7Ozs7O1dBS0c7UUFDTSxpQkFBWSxHQUFXOzs7OztrSEFLZ0YsQ0FBQztRQVNqSDs7OztXQUlHO1FBQ00sVUFBSyxHQUFXLHdCQUF3QixDQUFDO1FBRWxEOzs7O1dBSUc7UUFDTSxjQUFTLEdBQVcsTUFBTSxDQUFDO1FBRXBDOzs7O1dBSUc7UUFDTSxlQUFVLEdBQVcsTUFBTSxDQUFDO1FBRXJDOzs7O1dBSUc7UUFDTSxjQUFTLEdBQVcsTUFBTSxDQUFDO1FBRXBDOzs7O1dBSUc7UUFDTSxpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUUxQzs7OztXQUlHO1FBQ00sa0JBQWEsR0FBVyxVQUFVLENBQUM7UUFFNUM7Ozs7V0FJRztRQUNNLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBRTFDOzs7O1dBSUc7UUFDTSxlQUFVLEdBQVcsT0FBTyxDQUFDO1FBRXRDOzs7O1dBSUc7UUFDTSxnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUU3Qzs7OztXQUlHO1FBQ00sZUFBVSxHQUFXLG9CQUFvQixDQUFDO1FBRW5EOzs7O1dBSUc7UUFDTSxrQkFBYSxHQUFXLHNEQUFzRCxDQUFDO1FBRXhGOzs7O1dBSUc7UUFDTSxtQkFBYyxHQUFXLHNEQUFzRCxDQUFDO1FBRXpGOzs7O1dBSUc7UUFDTSxrQkFBYSxHQUFXLHlCQUF5QixDQUFDO1FBRTNEOzs7O1dBSUc7UUFDTSxTQUFJLEdBQVksSUFBSSxDQUFDO1FBRTlCOzs7O1VBSUU7UUFDTyxjQUFTLEdBQVcsTUFBTSxDQUFDO1FBRXBDOzs7O1dBSUc7UUFDTSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUF4SjdCLENBQUM7SUF5SkQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNEOzs7T0FHRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0Q7O09BRUc7SUFDSCx1QkFBdUI7UUFDckIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7bUhBeExVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGlvQkNWbkMsK3RCQU1VOzJGRElHLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxpQkFBaUI7c0dBZWxCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQVFHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBWUcsV0FBVztzQkFBbkIsS0FBSztnQkFPRyxLQUFLO3NCQUFiLEtBQUs7Z0JBT0csU0FBUztzQkFBakIsS0FBSztnQkFPRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0csWUFBWTtzQkFBcEIsS0FBSztnQkFPRyxhQUFhO3NCQUFyQixLQUFLO2dCQU9HLFlBQVk7c0JBQXBCLEtBQUs7Z0JBT0csVUFBVTtzQkFBbEIsS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBT0csYUFBYTtzQkFBckIsS0FBSztnQkFPRyxjQUFjO3NCQUF0QixLQUFLO2dCQU9HLGFBQWE7c0JBQXJCLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQU9HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0csYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjSW5wdXRDcmVhdGVCZWhhdmlvciB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLWJlaGF2aW9ycyc7XG5pbXBvcnQgeyBCY0dlbmVyYWxJbnB1dENvbXBvbmVudCB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmMtaW5wdXQtY3JlYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JjLWlucHV0LWNyZWF0ZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBCY0lucHV0Q3JlYXRlQ29tcG9uZW50IGV4dGVuZHMgQmNHZW5lcmFsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgYmNJbnB1dENyZWF0ZUJlaGF2aW9yOiBCY0lucHV0Q3JlYXRlQmVoYXZpb3I7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNIZWxwZXJTZXJ2aWNlOiBCY0hlbHBlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIElkIGRlbCBlbGVtZW50by5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRDcmVhdGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGNvbXBvbmVudElkOiBzdHJpbmcgPSB0aGlzLmJjSGVscGVyU2VydmljZS5nZXRJZCh0aGlzKTtcblxuICAvKipcbiAgICogVGlwbyBkZWwgaW5wdXQ6IHVzZXIsIHBhc3N3b3JkLCBwYXNzd29yZC1jcmVhdGUsIHBhc3N3b3JkLXVwZGF0ZVxuICAgKiBAdHlwZSB7KCd1c2VyJyB8ICdwYXNzd29yZCcgfCAncGFzc3dvcmQtY3JlYXRlJyB8ICdwYXNzd29yZC11cGRhdGUnICl9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiAndXNlcicgfCAncGFzc3dvcmQnIHwgJ3Bhc3N3b3JkLWNyZWF0ZScgfCAncGFzc3dvcmQtdXBkYXRlJyA9ICdwYXNzd29yZC11cGRhdGUnO1xuXG4gIC8qKlxuICAgKiBBc2lnbmEgbG9zIGNvbmRpY2lvbmFsZXMgcXVlIHRlbmRyw6EgZWwgaW5wdXQgcGFyYSBtb2RpZmljYXIgbyBjcmVhciBsYSBjbGF2ZS5cbiAgICogTGFzIGNvbmRpY2lvbmVzIHNlIGFncmVnYW4gZW4gb3JkZW4sIHNpIHByaW1lcm8gdmEgbWF4TGVuZ2h0LCBlc3RlIGFwYXJlY2VyYSBwcmltZXJvLlxuICAgKiBAdHlwZSB7SlNPTn0gU2UgZGViZSBpbmdyZXNhciB1biB0ZXh0byBjb24gZXN0cnVjdHVyYSBkZSBqc29uLlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dENyZWF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY29uZGl0aW9uYWxzOiBzdHJpbmcgPSBge1wibWF4TGVuZ3RoXCI6IHtcImRlc2NyaXB0aW9uXCI6XCJFbnRyZSA4IHkgMjAgY2FyYWN0ZXJlc1wiLCBcIm1heFwiOjIwLCBcIm1pblwiOjggfSxcbiAgICBcImNhcGl0YWxMZXR0ZXJzXCI6IHtcImRlc2NyaXB0aW9uXCI6XCJQb3IgbG8gbWVub3MgdW5hIG1heXVzY3VsYVwiLFwidHlwZVwiOlwidXBwZXJjYXNlXCIgfSxcbiAgICBcInNvbWVOdW1iZXJzXCI6IHtcImRlc2NyaXB0aW9uXCI6XCJQb3IgbG8gbWVub3MgdW4gbnVtZXJvXCIsIFwibnVtYmVyc1wiOjEgfSxcbiAgICBcImluaXRpYWxDaGFyYWN0ZXJcIjoge1wiZGVzY3JpcHRpb25cIjpcIkRlYmUgaW5pY2lhciBjb24gdW5hIGxldHJhXCIsXCJ0eXBlXCI6XCJjaGFyYWN0ZXJcIn0sXG4gICAgXCJzcGVjaWFsQ2hhcmFjdGVyXCI6IHtcImRlc2NyaXB0aW9uXCI6XCJkZWJlIGNvbnRlbmVyIHVuIGNhcmFjdGVyIGVzcGVjaWFsXCIsXCJjb25kaXRpb25cIjp0cnVlfSxcbiAgICBcImNvbnNlY3V0aXZlTnVtYmVyc1wiOiB7XCJkZXNjcmlwdGlvblwiOlwibm8gcHVlZGUgY29udGVuZXIgMyBudW1lcm9zIGNvbnNlY3V0aXZvc1wiLCBcIm1heFwiOjMsIFwiYXNjQW5kRGVzY1wiOnRydWV9fWA7XG5cbiAgLyoqXG4gICAqIENvbnRlbmlkbyBkZWwgdGV4dG8gZGUgc29wb3J0ZSBxdWUgdGVuZHJhIGVsIGRyb3Bkb3duXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzdXBwb3J0VGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaXR1bG8gZGVsIGRyb3Bkb3duXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gXCJMYSBjbGF2ZSBkZWJlIGNvbnRlbmVyXCI7XG5cbiAgLyoqXG4gICAqIEljb25vIGNvbiBlbCBxdWUgY29udGFyw6EgZWwgcHJpbWVyIGlucHV0LCBjb3JyZXNwb25kaWVudGUgYWwgZXNwYWNpbyBkZWwgY3VycmVudCBwYXNzd29yZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dENyZWF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZmlyc3RJY29uOiBzdHJpbmcgPSAndXNlcic7XG5cbiAgLyoqXG4gICAqIEljb25vIGNvbiBlbCBxdWUgY29udGFyw6EgZWwgc2VndW5kbyBpbnB1dCwgY29ycmVzcG9uZGllbnRlIGFsIGVzcGFjaW8gZGVsIG5ldyBwYXNzd29yZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dENyZWF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2Vjb25kSWNvbjogc3RyaW5nID0gJ3VzZXInO1xuXG4gIC8qKlxuICAgKiBJY29ubyBjb24gZWwgcXVlIGNvbnRhcsOhIGVsIHRlcmNlciBpbnB1dCwgY29ycmVzcG9uZGllbnRlIGFsIGVzcGFjaW8gZGVsIHZhbGlkYXRpb24gcGFzc3dvcmRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRDcmVhdGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRoaXJkSWNvbjogc3RyaW5nID0gJ3VzZXInO1xuXG4gIC8qKlxuICAgKiBJZGVudGlmaWNhZG9yIGRlbCBwcmltZXIgaW5wdXQsIGNvcnJlc3BvbmRpZW50ZSBhbCBjdXJyZW50IHBhc3N3b3JkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBmaXJzdElkSW5wdXQ6IHN0cmluZyA9ICdmaXJzdElkJztcblxuICAvKipcbiAgICogSWRlbnRpZmljYWRvciBkZWwgc2VndW5kbyBpbnB1dCwgY29ycmVzcG9uZGllbnRlIGFsIG5ldyBwYXNzd29yZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dENyZWF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2Vjb25kSWRJbnB1dDogc3RyaW5nID0gJ3NlY29uZElkJztcblxuICAvKipcbiAgICogSWRlbnRpZmljYWRvciBkZWwgdGVyY2VyIGlucHV0LCBjb3JyZXNwb25kaWVudGUgYWwgdmFsaWRhdGlvbiBwYXNzd29yZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dENyZWF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGhpcmRJZElucHV0OiBzdHJpbmcgPSAndGhpcmRJZCc7XG5cbiAgLyoqXG4gICAqIFRleHRvIGF1eGlsaWFyIGNvbiBlbCBxdWUgY29udGFyw6EgZWwgcHJpbWVyIGlucHV0LCBjb3JyZXNwb25kaWVudGUgYWwgZXNwYWNpbyBkZWwgY3VycmVudCBwYXNzd29yZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dENyZWF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZmlyc3RMYWJlbDogc3RyaW5nID0gJ0NsYXZlJztcblxuICAvKipcbiAgICogVGV4dG8gYXV4aWxpYXIgY29uIGVsIHF1ZSBjb250YXLDoSBlbCBzZWd1bmRvIGlucHV0LCBjb3JyZXNwb25kaWVudGUgYWwgZXNwYWNpbyBkZWwgbmV3IHBhc3N3b3JkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzZWNvbmRMYWJlbDogc3RyaW5nID0gJ051ZXZhIENsYXZlJztcblxuICAvKipcbiAgICogVGV4dG8gYXV4aWxpYXIgY29uIGVsIHF1ZSBjb250YXLDoSBlbCB0ZXJjZXIgaW5wdXQsIGNvcnJlc3BvbmRpZW50ZSBhbCBlc3BhY2lvIGRlbCB2YWxpZGF0aW9uIHBhc3N3b3JkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0aGlyZExhYmVsOiBzdHJpbmcgPSAnQ29uZmlybWFjaW9uIENsYXZlJztcblxuICAvKipcbiAgICogVGV4dG8gZGUgZXJyb3IgY29uIGVsIHF1ZSBjb250YXLDoSBlbCBwcmltZXIgaW5wdXQsIGNvcnJlc3BvbmRpZW50ZSBhbCBlc3BhY2lvIGRlbCBjdXJyZW50IHBhc3N3b3JkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBmaXJzdE1zZ0Vycm9yOiBzdHJpbmcgPSBcIkxhIGNsYXZlIG5vIGN1bXBsZSBjb24gbG9zIHJlcXVlcmltaWVudG9zIG5lY2VzYXJpb3NcIjtcblxuICAvKipcbiAgICogVGV4dG8gZGUgZXJyb3IgY29uIGVsIHF1ZSBjb250YXLDoSBlbCBzZWd1bmRvIGlucHV0LCBjb3JyZXNwb25kaWVudGUgYWwgZXNwYWNpbyBkZWwgbmV3IHBhc3N3b3JkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBzZWNvbmRNc2dFcnJvcjogc3RyaW5nID0gXCJMYSBjbGF2ZSBubyBjdW1wbGUgY29uIGxvcyByZXF1ZXJpbWllbnRvcyBuZWNlc2FyaW9zXCI7XG5cbiAgLyoqXG4gICAqIFRleHRvIGRlIGVycm9yIGNvbiBlbCBxdWUgY29udGFyw6EgZWwgdGVyY2VyIGlucHV0LCBjb3JyZXNwb25kaWVudGUgYWwgZXNwYWNpbyBkZWwgdmFsaWRhdGlvbiBwYXNzd29yZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dENyZWF0ZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGhpcmRNc2dFcnJvcjogc3RyaW5nID0gXCJMYXMgY2xhdmVzIG5vIGNvaW5jaWRlblwiO1xuXG4gIC8qKlxuICAgKiBFbm1hc2NhcmFtaWVudG8gZGUgbGEgY2xhdmUgaW5pY2lhbGl6YWRvIGVuIHZlcmRhZGVyb1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRDcmVhdGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIG1hc2s6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAqIEljb25vIGRlbCB0w610dWxvIGRlbCBkcm9wZG93blxuICAqIEB0eXBlIHtzdHJpbmd9XG4gICogQG1lbWJlcm9mIEJjSW5wdXRDcmVhdGVDb21wb25lbnRcbiAgKi9cbiAgQElucHV0KCkgdGl0bGVJY29uOiBzdHJpbmcgPSAnbG9jayc7XG5cbiAgLyoqXG4gICAqIEVzdGF0dXMgcXVlIGluZGljYSBzaSBzZSBoYWJpbGl0YSBvIGRlc2hhYmlsaXRhIGVsIGNvbXBvbmVudGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlU3RhdHVzOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBJbmRpY2Egc2kgZXMgZWwgcHJpbWVyIGNhbWJpbyBkZWwgY29tcG9uZW50ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRDcmVhdGVDb21wb25lbnRcbiAgICovXG4gIGZpcnN0Q2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBJbmRpY2EgY2FtYmlvcyBnZW5lcmFkb3MgZW4gZWwgY29tcG9uZW50ZVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dENyZWF0ZUNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1NpbXBsZUNoYW5nZXN9IGNoYW5nZXNcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXJzdENoYW5nZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdElucHV0Q3JlYXRlQmVoYXZpb3IoKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBY2Npb25lcyBhIHJlYWxpemFyIGRlc3B1ZXMgZGUgY2FyZ2FyIGxhIHZpc3RhIGRlbCBjb21wb25lbnRlXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0Q3JlYXRlQ29tcG9uZW50XG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0SW5wdXRDcmVhdGVCZWhhdmlvcigpO1xuICB9XG4gIC8qKlxuICAgKiBJbmljaWFsaXphIGVsIGNvbXBvcnRhbWllbnRvIGRlbCBpbnB1dC1jcmVhdGVcbiAgICovXG4gIGluaXRJbnB1dENyZWF0ZUJlaGF2aW9yKCk6IHZvaWQge1xuICAgIHRoaXMuYmNJbnB1dENyZWF0ZUJlaGF2aW9yID0gbmV3IEJjSW5wdXRDcmVhdGVCZWhhdmlvcigpO1xuICAgIHRoaXMuYmNJbnB1dENyZWF0ZUJlaGF2aW9yLnNldElkKHRoaXMuY29tcG9uZW50SWQpO1xuICAgIHRoaXMuYmNJbnB1dENyZWF0ZUJlaGF2aW9yLnNldFVwKCk7XG4gICAgdGhpcy5maXJzdENoYW5nZSA9IHRydWU7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiYmMtaW5wdXQtY3JlYXRlXCIgW2F0dHIuaWRdPVwiY29tcG9uZW50SWRcIiBbYXR0ci5kaXNhYmxlU3RhdHVzXT1cImRpc2FibGVTdGF0dXNcIiBbYXR0ci5maXJzdElkSW5wdXRdPVwiZmlyc3RJZElucHV0XCIgW2F0dHIuc2Vjb25kSWRJbnB1dF09XCJzZWNvbmRJZElucHV0XCJcbiAgICBbYXR0ci50aGlyZElkSW5wdXRdPVwidGhpcmRJZElucHV0XCIgW2F0dHIudHlwZV09XCJ0eXBlXCIgW2F0dHIuc3VwcG9ydFRleHRdPVwic3VwcG9ydFRleHRcIiBbYXR0ci50aXRsZV09XCJ0aXRsZVwiXG4gICAgW2F0dHIuZmlyc3RJY29uXT1cImZpcnN0SWNvblwiIFthdHRyLnNlY29uZEljb25dPVwic2Vjb25kSWNvblwiIFthdHRyLnRoaXJkSWNvbl09XCJ0aGlyZEljb25cIlxuICAgIFthdHRyLmZpcnN0TGFiZWxdPVwiZmlyc3RMYWJlbFwiIFthdHRyLnNlY29uZExhYmVsXT1cInNlY29uZExhYmVsXCIgW2F0dHIudGhpcmRMYWJlbF09XCJ0aGlyZExhYmVsXCJcbiAgICBbYXR0ci5maXJzdE1zZ0Vycm9yXT1cImZpcnN0TXNnRXJyb3JcIiBbYXR0ci5zZWNvbmRNc2dFcnJvcl09XCJzZWNvbmRNc2dFcnJvclwiIFthdHRyLnRoaXJkTXNnRXJyb3JdPVwidGhpcmRNc2dFcnJvclwiXG4gICAgW2F0dHIubWFza109XCJtYXNrXCIgW2F0dHIudGl0bGVJY29uXT1cInRpdGxlSWNvblwiIFthdHRyLmNvbmRpdGlvbmFsc109XCJjb25kaXRpb25hbHNcIj5cbjwvc2VjdGlvbj4iXX0=