import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BcInputFileBehavior } from '@bancolombia/design-system-behaviors';
import * as i0 from "@angular/core";
import * as i1 from "@bancolombia/design-system-web/bc-helpers";
import * as i2 from "@angular/common";
/**
 * Componente subir archivos
 *
 * @export
 * @class BcInputFileComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {DoCheck}
 */
export class BcInputFileComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaW5wdXQtZmlsZS9iYy1pbnB1dC1maWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nX2Jkcy9iYy1pbnB1dC1maWxlL2JjLWlucHV0LWZpbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFM0U7Ozs7Ozs7O0dBUUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9CO0lBdUkvQixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUF2SHBEOzs7OztXQUtHO1FBQ00sYUFBUSxHQUFHLElBQUksQ0FBQztRQUV6Qjs7OztXQUlHO1FBQ00saUJBQVksR0FBRyxrREFBa0QsQ0FBQztRQUMzRTs7Ozs7V0FLRztRQUNNLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDOzs7OztXQUtHO1FBQ00sa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUI7Ozs7O1dBS0c7UUFDTSxnQkFBVyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFOzs7OztXQUtHO1FBQ00sY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUNsQyxZQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMscUJBQWdCLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFMUQ7Ozs7O1dBS0c7UUFFTSxnQkFBVyxHQUFHLHVCQUF1QixDQUFDO1FBa0I3Qzs7Ozs7U0FLQztRQUNNLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFFakM7Ozs7O1dBS0c7UUFDTyxnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQVdoQzs7Ozs7VUFLRTtRQUNNLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRWhDOzs7O1dBSUc7UUFDTyxrQkFBYSxHQUFHLElBQUksWUFBWSxDQUFDO1FBQ2pDLHFCQUFnQixHQUFHLElBQUksWUFBWSxDQUFDO1FBRTlDOzs7O1dBSUc7UUFDTyw0QkFBdUIsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUluRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDLFFBQWdCLEtBQUs7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxDQUFDLEtBQUssRUFBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOztpSEExSlUsb0JBQW9CO3FHQUFwQixvQkFBb0IsZ2xCQ2hCakMsMHFGQW1FQTsyRkRuRGEsb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLGVBQWU7c0dBV2hCLEtBQUs7c0JBQWIsS0FBSztnQkFPRyxXQUFXO3NCQUFuQixLQUFLO2dCQU9HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csWUFBWTtzQkFBcEIsS0FBSztnQkFPRyxZQUFZO3NCQUFwQixLQUFLO2dCQU9HLGFBQWE7c0JBQXJCLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFPRyxTQUFTO3NCQUFqQixLQUFLO2dCQVdHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsT0FBTztzQkFBZixLQUFLO2dCQVFJLFFBQVE7c0JBQWhCLEtBQUs7Z0JBUUUsVUFBVTtzQkFBbEIsS0FBSztnQkFRSSxXQUFXO3NCQUFuQixLQUFLO2dCQVFHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBU0UsZUFBZTtzQkFBdkIsS0FBSztnQkFPSSxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFPRyx1QkFBdUI7c0JBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY0lucHV0RmlsZUJlaGF2aW9yIH0gZnJvbSAnQGJhbmNvbG9tYmlhL2Rlc2lnbi1zeXN0ZW0tYmVoYXZpb3JzJztcbmltcG9ydCB7IEJjSGVscGVyU2VydmljZSB9IGZyb20gJ0BiYW5jb2xvbWJpYS9kZXNpZ24tc3lzdGVtLXdlYi9iYy1oZWxwZXJzJztcbi8qKlxuICogQ29tcG9uZW50ZSBzdWJpciBhcmNoaXZvc1xuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCY0lucHV0RmlsZUNvbXBvbmVudFxuICogQGltcGxlbWVudHMge09uSW5pdH1cbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxuICogQGltcGxlbWVudHMge0RvQ2hlY2t9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjLWlucHV0LWZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmMtaW5wdXQtZmlsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQmNJbnB1dEZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBiY0lucHV0RmlsZUJlaGF2aW9yO1xuICAvKipcbiAgICogVMOtdHVsbyBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIERlc2NyaXBjacOzbiBkZWwgZWxlbWVudG8uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLyoqXG4gICAqIMOBcmVhIGFycmFzdHJhciB0cnVlIHwgZmFsc2UuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dEZpbGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRyb3BBcmVhID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGV4dG8gZG9uZGUgc2UgYXJyYXN0cmFuIGxvcyBlbGVtZW50b3MuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZHJvcEFyZWFUZXh0ID0gJ0FycmFzdHJhIGFxdcOtIGxvcyBhcmNoaXZvcyBkZXNkZSB0dSBjb21wdXRhZG9yIG8nO1xuICAvKipcbiAgICogw41jb25vIGFycmFzdHJhciBlbGVtZW50b3MuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgZHJvcEFyZWFJY29uID0gJ2Nsb3VkLXVwbG9hZCc7XG4gIC8qKlxuICAgKiBIYWJpbGl0YXIgbcO6bHRpcGxlcyBhcmNoaXZvcy5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgbXVsdGlwbGVGaWxlcyA9IHRydWU7XG4gIC8qKlxuICAgKiBJZCBkZWwgY29tcG9uZW50ZS5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRGaWxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBjb21wb25lbnRJZDogc3RyaW5nID0gdGhpcy5iY0hlbHBlclNlcnZpY2UuZ2V0SWQodGhpcyk7XG4gIC8qKlxuICAgKiBUaXBvIGRlIHZhbGlkYWNpw7NuLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgdmFsaWRUeXBlOiBzdHJpbmdbXSA9IFtdO1xuICBpZElucHV0ID0gJ2lucHV0LScgKyB0aGlzLmNvbXBvbmVudElkO1xuICB2YWxpZFR5cGVzU3RyaW5nOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnZhbGlkVHlwZSk7XG5cbiAgLyoqXG4gICAqIEV0aXF1ZXRhIHBlcnNvbmFsaXphYmxlIGEgbGEgZXhwZXJpZW5jaWEgcGFyYSBlbCBib3TDs24gZGUgY2FyZ2EgZGUgYXJjaGl2b3MuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cblxuICBASW5wdXQoKSBidXR0b25MYWJlbCA9ICdTRUxFQ0NJT05BIFVOIEFSQ0hJVk8nO1xuXG4gIC8qKlxuICAgKiBMaW1pdGUgbcOheGltbyBlbiBLQi5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRGaWxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBtYXhTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIExpbWl0ZSBtw6F4aW1vIGRlIGNhcnRhcyBkZSBhcmNoaXZvcyBzdWJpZG9zIHF1ZSBzZSBtdWVzdHJhbiBlbiBlbCBET00uXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cbiAgIEBJbnB1dCgpIG1heENhcmRzOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICogTm9tYnJlIHNlZ3VpZG8gYSBsb3MgZm9ybWF0b3MgcGVybWl0aWRvcy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJjSW5wdXRGaWxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSB0ZXh0Rm9ybWF0ID0gJ0Zvcm1hdG9zJztcblxuICAvKipcbiAgICogTm9tYnJlIHNlZ3VpZG8gYWwgdGFtYcOxbyBtYXhpbW8gcGVybWl0aWRvLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dEZpbGVDb21wb25lbnRcbiAgICovXG4gICBASW5wdXQoKSB0ZXh0TWF4U2l6ZSA9ICdtw6F4aW1vJztcblxuICAvKipcbiAgICogTGltaXRlIG3DoXhpbW8gZGUgYXJjaGl2b3MgcXVlIHNlIHB1ZWRlbiBjYXJnYXIuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBCY0lucHV0RmlsZUNvbXBvbmVudFxuICAgKi9cbiAgIEBJbnB1dCgpIG1heEZpbGVzOiBudW1iZXI7XG5cblxuICAgLyoqXG4gICAqIFZhbGlkYSBzaSBzZSBtdWVzdHJhbiBsb3MgZXJyb3JlcyBkZW50cm8gZGUgbGEgbGlzdGEgbyBuby5cbiAgICogdHJ1ZSB8IGZhbHNlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dEZpbGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGlzU2hvd0xpc3RGaWxlcyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIENvcnJlc3BvbmRlIGFsIGVtaXNvciBxdWUgZGV2dWVsdmUgbG9zIGFyY2hpdm9zIHF1ZSBzZSBoYW4gc2VsZWNjaW9uYWRvLiBTZSBsbGFtYSBjYWRhIHZleiBxdWUgc2UgYWdyZWdhIG8gZWxpbWluYSB1biBhcmNoaXZvLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dEZpbGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBnZXRGaWxlc0FkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjtcbiAgQE91dHB1dCgpIGdldEZpbGVzQWRkZWRFcnIgPSBuZXcgRXZlbnRFbWl0dGVyO1xuXG4gIC8qKlxuICAgKiBFbmNhcmdhZG8gZGUgbm90aWZpY2FyIGN1YW5kbyB1biB1c3VhcmlvIGludGVudGEgYWdyZWdhciBtw6FzIGFyY2hpdm9zIGRlbCBbbWF4RmlsZXNdIGluZGljYWRvLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQmNJbnB1dEZpbGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBnZXRNYXhGaWxlc05vdGlmaWNhdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjSGVscGVyU2VydmljZTogQmNIZWxwZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5iY0lucHV0RmlsZUJlaGF2aW9yID0gbmV3IEJjSW5wdXRGaWxlQmVoYXZpb3IoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFsaWRUeXBlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXMudmFsaWRUeXBlKTtcbiAgICB0aGlzLmlkSW5wdXQgPSAnaW5wdXQtJyArIHRoaXMuY29tcG9uZW50SWQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgXG4gIGluaXQoZm9yY2U6Ym9vbGVhbiA9IGZhbHNlKXtcbiAgICB0aGlzLmJjSW5wdXRGaWxlQmVoYXZpb3Iuc2V0SWQodGhpcy5jb21wb25lbnRJZCk7XG4gICAgdGhpcy5iY0lucHV0RmlsZUJlaGF2aW9yLmNoYW5nZVN0YXRlID0gKHBhcmFtKSA9PiB0aGlzLmdldEZpbGVzQWRkZWQuZW1pdChwYXJhbSk7XG4gICAgdGhpcy5iY0lucHV0RmlsZUJlaGF2aW9yLmNoYW5nZVN0YXRlRXJyID0gKHBhcmFtLGZpbGVFcnJvcnMpID0+IHRoaXMuZ2V0RmlsZXNBZGRlZEVyci5lbWl0KHtwYXJhbSxmaWxlRXJyb3JzfSk7XG4gICAgdGhpcy5iY0lucHV0RmlsZUJlaGF2aW9yLmNoYW5nZVN0YXRlTWF4RmlsZXMgPSAocGFyYW0pID0+IHRoaXMuZ2V0TWF4RmlsZXNOb3RpZmljYXRpb24uZW1pdChwYXJhbSk7XG4gICAgdGhpcy5iY0lucHV0RmlsZUJlaGF2aW9yLnNldFVwKGZvcmNlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImJjLWlucHV0LWZpbGVcIiBbaWRdPVwiY29tcG9uZW50SWRcIiAqbmdJZj1cImRyb3BBcmVhXCI+XG4gIDxkaXYgY2xhc3M9XCJiYy1pbnB1dC1maWxlLWhlYWRlciBjZW50ZXJcIj5cbiAgICAgIDxoNj57e3RpdGxlfX08L2g2PlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWJsYWNrLWdyYXlcIj57e2Rlc2NyaXB0aW9ufX08L3A+XG4gICAgICA8cCBjbGFzcz1cImJjLW15LTQgYmMtdGV4dC1jZW50ZXJcIiAqbmdJZj1cIm1heEZpbGVzXCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwibWF4RmlsZXMgPT0gMVwiPlNlbGVjY2lvbmUgbyBhcnJhc3RyZSAxIHNvbG8gYXJjaGl2bzwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXhGaWxlcyA+IDFcIj5TZWxlY2Npb25lIG8gYXJyYXN0cmUge3ttYXhGaWxlc319IGFyY2hpdm9zPC9zcGFuPlxuICAgICAgPC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJjLWRyb3AtYXJlYVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJjLWNvbnRhaW5lci1oZWFkZXItZHJvcC1hcmVhXCI+XG4gICAgICAgICAgPGVtIGNsYXNzPVwiYmMtaWNvbiBiYy14bFwiPnt7ZHJvcEFyZWFJY29ufX08L2VtPlxuICAgICAgICAgIDxwPnt7ZHJvcEFyZWFUZXh0fX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYy1jb250YWluZXItYnV0dG9uLWlucHV0LWZpbGVcIiA+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiYy1idXR0b24tc2Vjb25kYXJ5IGJjLWJ1dHRvbi1zbWFsbCBiYy1idXR0b24tc2VsZWN0LWZpbGVcIj57e2J1dHRvbkxhYmVsfX08L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIFtpZF09XCJpZElucHV0XCIgXG4gICAgICAgICAgdHlwZT1cImZpbGVcIiBcbiAgICAgICAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVGaWxlc1wiIFxuICAgICAgICAgIFthdHRyLnZhbGlkdHlwZV09dmFsaWRUeXBlc1N0cmluZyBcbiAgICAgICAgICBbYXR0ci5tYXhTaXplXT1tYXhTaXplIFxuICAgICAgICAgIFthdHRyLm1heENhcmRzXT1tYXhDYXJkcyBcbiAgICAgICAgICBbYXR0ci5tYXhGaWxlc109bWF4RmlsZXNcbiAgICAgICAgICB2YWx1ZT1cIlwiIFxuICAgICAgICAgIGNsYXNzPVwiYmMtZHJvcC1hcmVhLWlucHV0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJjLWNvbnRhaW5lci1pbmZvLWZpbGVzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmMtaW5mby1maWxlcy10eXBlXCIgKm5nSWY9XCJ2YWxpZFR5cGUubGVuZ3RoID4gMFwiPnt7dGV4dEZvcm1hdH19IFxuICAgICAgICAgICAgPGVtICpuZ0Zvcj1cImxldCB0eXBlIG9mIHZhbGlkVHlwZVwiPiAue3t0eXBlLnRvVXBwZXJDYXNlKCl9fTwvZW0+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYy1pbmZvLWZpbGVzLXNpemVcIiBcbiAgICAgICAgICAqbmdJZj1cIm1heFNpemU7IGVsc2UgbWluU2l6ZVwiPnt7IChtYXhTaXplIC8gMTAyNCkudG9GaXhlZCgyKSB9fSBNQiB7e3RleHRNYXhTaXplfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8bmctdGVtcGxhdGUgICNtaW5TaXplPjxzcGFuIGNsYXNzPVwiYmMtaW5mby1maWxlcy1zaXplXCI+NSBNQiB7e3RleHRNYXhTaXplfX08L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJjLWZpbGVzLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cImlzU2hvd0xpc3RGaWxlcyA/ICdiYy1pbnB1dC1maWxlLXNob3ctbGlzdC11cGxvYWQnOiAnJyBcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJjLWZpbGVzLXNob3ctbW9yZS1jb250YWluZXIgYmMtbm9uZVwiPjwvZGl2PlxuPC9kaXY+XG5cblxuXG5cbjxkaXYgY2xhc3M9XCJiYy1pbnB1dC1maWxlXCIgW2lkXT1cImNvbXBvbmVudElkXCIgKm5nSWY9XCIhZHJvcEFyZWFcIj5cbiAgPGRpdiBjbGFzcz1cImJjLWlucHV0LWZpbGUtaGVhZGVyXCI+XG4gICAgPGg2Pnt7dGl0bGV9fTwvaDY+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWJsYWNrLWdyYXlcIj57e2Rlc2NyaXB0aW9ufX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmMtZHJvcC1hcmVhIGJjLWRyb3AtYXJlYS1ub25lXCI+XG4gICAgPGRpdiBjbGFzcz1cImJjLWNvbnRhaW5lci1idXR0b24taW5wdXQtZmlsZVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJjLWJ1dHRvbi1zZWNvbmRhcnkgYmMtYnV0dG9uLXNtYWxsIGJjLWJ1dHRvbi1zZWxlY3QtZmlsZVwiPnt7YnV0dG9uTGFiZWx9fTwvYnV0dG9uPlxuICAgICAgPGlucHV0IFxuICAgICAgICBbaWRdPVwiaWRJbnB1dFwiIFxuICAgICAgICB0eXBlPVwiZmlsZVwiIFxuICAgICAgICBbbXVsdGlwbGVdPXRydWUgXG4gICAgICAgIFthdHRyLnZhbGlkdHlwZV09dmFsaWRUeXBlc1N0cmluZyBcbiAgICAgICAgW2F0dHIubWF4Q2FyZHNdPW1heENhcmRzIFxuICAgICAgICBbYXR0ci5tYXhTaXplXT1tYXhTaXplIFxuICAgICAgICBbYXR0ci5tYXhGaWxlc109bWF4RmlsZXNcbiAgICAgICAgdmFsdWU9XCJcIiBcbiAgICAgICAgY2xhc3M9XCJiYy1kcm9wLWFyZWEtaW5wdXRcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJjLWZpbGVzLWNvbnRhaW5lclwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmMtZmlsZXMtc2hvdy1tb3JlLWNvbnRhaW5lciBiYy1ub25lXCI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==