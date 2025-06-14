import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BcInputFileBehavior } from '@bancolombia/design-system-behaviors';
import * as i1 from '@bancolombia/design-system-web/bc-helpers';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * Componente subir archivos
 *
 * @export
 * @class BcInputFileComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {DoCheck}
 */
class BcInputFileComponent {
    constructor(bcHelperService) {
        this.bcHelperService = bcHelperService;
        /**
         * Área arrastrar true | false.
         *
         * @type {boolean}
         * @memberof BcInputFileComponent
         */
        this.dropArea = true;
        /**
         * Texto donde se arrastran los elementos.
         *
         * @memberof BcInputFileComponent
         */
        this.dropAreaText = 'Arrastra aquí los archivos desde tu computador o';
        /**
         * Ícono arrastrar elementos.
         *
         * @type {string}
         * @memberof BcInputFileComponent
         */
        this.dropAreaIcon = 'cloud-upload';
        /**
         * Habilitar múltiples archivos.
         *
         * @type {boolean}
         * @memberof BcInputFileComponent
         */
        this.multipleFiles = true;
        /**
         * Id del componente.
         *
         * @type {string}
         * @memberof BcInputFileComponent
         */
        this.componentId = this.bcHelperService.getId(this);
        /**
         * Tipo de validación.
         *
         * @type {string[]}
         * @memberof BcInputFileComponent
         */
        this.validType = [];
        this.idInput = 'input-' + this.componentId;
        this.validTypesString = JSON.stringify(this.validType);
        /**
         * Etiqueta personalizable a la experiencia para el botón de carga de archivos.
         *
         * @type {string}
         * @memberof BcInputFileComponent
         */
        this.buttonLabel = 'SELECCIONA UN ARCHIVO';
        /**
       * Nombre seguido a los formatos permitidos.
       *
       * @type {string}
       * @memberof BcInputFileComponent
       */
        this.textFormat = 'Formatos';
        /**
         * Nombre seguido al tamaño maximo permitido.
         *
         * @type {string}
         * @memberof BcInputFileComponent
         */
        this.textMaxSize = 'máximo';
        /**
        * Valida si se muestran los errores dentro de la lista o no.
        * true | false
        * @type {boolean}
        * @memberof BcInputFileComponent
        */
        this.isShowListFiles = true;
        /**
         * Corresponde al emisor que devuelve los archivos que se han seleccionado. Se llama cada vez que se agrega o elimina un archivo.
         *
         * @memberof BcInputFileComponent
         */
        this.getFilesAdded = new EventEmitter;
        this.getFilesAddedErr = new EventEmitter;
        /**
         * Encargado de notificar cuando un usuario intenta agregar más archivos del [maxFiles] indicado.
         *
         * @memberof BcInputFileComponent
         */
        this.getMaxFilesNotification = new EventEmitter;
        this.bcInputFileBehavior = new BcInputFileBehavior();
    }
    ngOnInit() {
        this.validTypesString = JSON.stringify(this.validType);
        this.idInput = 'input-' + this.componentId;
    }
    ngAfterViewInit() {
        this.init();
    }
    init(force = false) {
        this.bcInputFileBehavior.setId(this.componentId);
        this.bcInputFileBehavior.changeState = (param) => this.getFilesAdded.emit(param);
        this.bcInputFileBehavior.changeStateErr = (param, fileErrors) => this.getFilesAddedErr.emit({ param, fileErrors });
        this.bcInputFileBehavior.changeStateMaxFiles = (param) => this.getMaxFilesNotification.emit(param);
        this.bcInputFileBehavior.setUp(force);
    }
}
BcInputFileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileComponent, deps: [{ token: i1.BcHelperService }], target: i0.ɵɵFactoryTarget.Component });
BcInputFileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: BcInputFileComponent, selector: "bc-input-file", inputs: { title: "title", description: "description", dropArea: "dropArea", dropAreaText: "dropAreaText", dropAreaIcon: "dropAreaIcon", multipleFiles: "multipleFiles", componentId: "componentId", validType: "validType", buttonLabel: "buttonLabel", maxSize: "maxSize", maxCards: "maxCards", textFormat: "textFormat", textMaxSize: "textMaxSize", maxFiles: "maxFiles", isShowListFiles: "isShowListFiles" }, outputs: { getFilesAdded: "getFilesAdded", getFilesAddedErr: "getFilesAddedErr", getMaxFilesNotification: "getMaxFilesNotification" }, ngImport: i0, template: "<div class=\"bc-input-file\" [id]=\"componentId\" *ngIf=\"dropArea\">\n  <div class=\"bc-input-file-header center\">\n      <h6>{{title}}</h6>\n      <p class=\"text-black-gray\">{{description}}</p>\n      <p class=\"bc-my-4 bc-text-center\" *ngIf=\"maxFiles\">\n        <span *ngIf=\"maxFiles == 1\">Seleccione o arrastre 1 solo archivo</span>\n        <span *ngIf=\"maxFiles > 1\">Seleccione o arrastre {{maxFiles}} archivos</span>\n      </p>\n  </div>\n  <div class=\"bc-drop-area\">\n      <div class=\"bc-container-header-drop-area\">\n          <em class=\"bc-icon bc-xl\">{{dropAreaIcon}}</em>\n          <p>{{dropAreaText}}</p>\n      </div>\n      <div class=\"bc-container-button-input-file\" >\n        <button class=\"bc-button-secondary bc-button-small bc-button-select-file\">{{buttonLabel}}</button>\n        <input \n          [id]=\"idInput\" \n          type=\"file\" \n          [multiple]=\"multipleFiles\" \n          [attr.validtype]=validTypesString \n          [attr.maxSize]=maxSize \n          [attr.maxCards]=maxCards \n          [attr.maxFiles]=maxFiles\n          value=\"\" \n          class=\"bc-drop-area-input\" />\n      </div>\n      <div class=\"bc-container-info-files\">\n        <span class=\"bc-info-files-type\" *ngIf=\"validType.length > 0\">{{textFormat}} \n            <em *ngFor=\"let type of validType\"> .{{type.toUpperCase()}}</em>\n        </span>\n        <span class=\"bc-info-files-size\" \n          *ngIf=\"maxSize; else minSize\">{{ (maxSize / 1024).toFixed(2) }} MB {{textMaxSize}}\n        </span>\n        <ng-template  #minSize><span class=\"bc-info-files-size\">5 MB {{textMaxSize}}</span></ng-template>\n      </div>\n  </div>\n  <div class=\"bc-files-container\" [ngClass]=\"isShowListFiles ? 'bc-input-file-show-list-upload': '' \"></div>\n  <div class=\"bc-files-show-more-container bc-none\"></div>\n</div>\n\n\n\n\n<div class=\"bc-input-file\" [id]=\"componentId\" *ngIf=\"!dropArea\">\n  <div class=\"bc-input-file-header\">\n    <h6>{{title}}</h6>\n    <p class=\"text-black-gray\">{{description}}</p>\n  </div>\n  <div class=\"bc-drop-area bc-drop-area-none\">\n    <div class=\"bc-container-button-input-file\">\n      <button class=\"bc-button-secondary bc-button-small bc-button-select-file\">{{buttonLabel}}</button>\n      <input \n        [id]=\"idInput\" \n        type=\"file\" \n        [multiple]=true \n        [attr.validtype]=validTypesString \n        [attr.maxCards]=maxCards \n        [attr.maxSize]=maxSize \n        [attr.maxFiles]=maxFiles\n        value=\"\" \n        class=\"bc-drop-area-input\" />\n    </div>\n  </div>\n  <div class=\"bc-files-container\"></div>\n  <div class=\"bc-files-show-more-container bc-none\"></div>\n</div>\n", directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bc-input-file', template: "<div class=\"bc-input-file\" [id]=\"componentId\" *ngIf=\"dropArea\">\n  <div class=\"bc-input-file-header center\">\n      <h6>{{title}}</h6>\n      <p class=\"text-black-gray\">{{description}}</p>\n      <p class=\"bc-my-4 bc-text-center\" *ngIf=\"maxFiles\">\n        <span *ngIf=\"maxFiles == 1\">Seleccione o arrastre 1 solo archivo</span>\n        <span *ngIf=\"maxFiles > 1\">Seleccione o arrastre {{maxFiles}} archivos</span>\n      </p>\n  </div>\n  <div class=\"bc-drop-area\">\n      <div class=\"bc-container-header-drop-area\">\n          <em class=\"bc-icon bc-xl\">{{dropAreaIcon}}</em>\n          <p>{{dropAreaText}}</p>\n      </div>\n      <div class=\"bc-container-button-input-file\" >\n        <button class=\"bc-button-secondary bc-button-small bc-button-select-file\">{{buttonLabel}}</button>\n        <input \n          [id]=\"idInput\" \n          type=\"file\" \n          [multiple]=\"multipleFiles\" \n          [attr.validtype]=validTypesString \n          [attr.maxSize]=maxSize \n          [attr.maxCards]=maxCards \n          [attr.maxFiles]=maxFiles\n          value=\"\" \n          class=\"bc-drop-area-input\" />\n      </div>\n      <div class=\"bc-container-info-files\">\n        <span class=\"bc-info-files-type\" *ngIf=\"validType.length > 0\">{{textFormat}} \n            <em *ngFor=\"let type of validType\"> .{{type.toUpperCase()}}</em>\n        </span>\n        <span class=\"bc-info-files-size\" \n          *ngIf=\"maxSize; else minSize\">{{ (maxSize / 1024).toFixed(2) }} MB {{textMaxSize}}\n        </span>\n        <ng-template  #minSize><span class=\"bc-info-files-size\">5 MB {{textMaxSize}}</span></ng-template>\n      </div>\n  </div>\n  <div class=\"bc-files-container\" [ngClass]=\"isShowListFiles ? 'bc-input-file-show-list-upload': '' \"></div>\n  <div class=\"bc-files-show-more-container bc-none\"></div>\n</div>\n\n\n\n\n<div class=\"bc-input-file\" [id]=\"componentId\" *ngIf=\"!dropArea\">\n  <div class=\"bc-input-file-header\">\n    <h6>{{title}}</h6>\n    <p class=\"text-black-gray\">{{description}}</p>\n  </div>\n  <div class=\"bc-drop-area bc-drop-area-none\">\n    <div class=\"bc-container-button-input-file\">\n      <button class=\"bc-button-secondary bc-button-small bc-button-select-file\">{{buttonLabel}}</button>\n      <input \n        [id]=\"idInput\" \n        type=\"file\" \n        [multiple]=true \n        [attr.validtype]=validTypesString \n        [attr.maxCards]=maxCards \n        [attr.maxSize]=maxSize \n        [attr.maxFiles]=maxFiles\n        value=\"\" \n        class=\"bc-drop-area-input\" />\n    </div>\n  </div>\n  <div class=\"bc-files-container\"></div>\n  <div class=\"bc-files-show-more-container bc-none\"></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BcHelperService }]; }, propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], dropArea: [{
                type: Input
            }], dropAreaText: [{
                type: Input
            }], dropAreaIcon: [{
                type: Input
            }], multipleFiles: [{
                type: Input
            }], componentId: [{
                type: Input
            }], validType: [{
                type: Input
            }], buttonLabel: [{
                type: Input
            }], maxSize: [{
                type: Input
            }], maxCards: [{
                type: Input
            }], textFormat: [{
                type: Input
            }], textMaxSize: [{
                type: Input
            }], maxFiles: [{
                type: Input
            }], isShowListFiles: [{
                type: Input
            }], getFilesAdded: [{
                type: Output
            }], getFilesAddedErr: [{
                type: Output
            }], getMaxFilesNotification: [{
                type: Output
            }] } });

/**
 * Importa el componente bcInputFile con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-file></bc-input-file>
 *
 * @param  title: Titulo del label
 * @param  description: La descripción del archivo que sube el usuario
 * @param  dropAreaText(opcional): texto del area para arrastrar. Default: Arrastra aquí los archivos desde tu computadora.
 * @param  dropAreaIcon(opcional): Texto del icono (como se ha indicado en la seccion de iconos funcionales) del drop area".
 *  Default: folder
 * @param [multipleFiles] (opcional): Boolean que indica si el input[file] acepta mas de un archivo. Default: true
 * @param [dropArea](opcional): Boolean que indica si se quiere un input[file] con area para arrastar o solo con el
 * boton de agregar archivo Default: true
 * @param componentId: ID que se le asignará en el html del componente, debe ser asignado para
 * facilitar la automatizacion y la certificación
 * @param accept: funciona igual que el "accept" disponible para el input[type=file] para limitar el tipo de
 * archivo que se puede subir. Default= acepta varios tipos de archivos
 *
 * @example
 *
 * <bc-input-file title="Selector de archivos"
 * description="Este selector contiene un dropArea con los valores predeterminados, pero pueden ser cambiados"
 * [dropArea]=true
 * [multipleFiles]=false
 * accept="image/*"
 * componentId="InputConDropArea">
 * </bc-input-file>
 *
 * @author: Bancolombia S.A
 */
class BcInputFileModule {
}
BcInputFileModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputFileModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileModule, declarations: [BcInputFileComponent], imports: [CommonModule], exports: [BcInputFileComponent] });
BcInputFileModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputFileComponent],
                    imports: [CommonModule],
                    exports: [BcInputFileComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BcInputFileComponent, BcInputFileModule };
//# sourceMappingURL=bancolombia-design-system-web-bc-input-file.mjs.map
