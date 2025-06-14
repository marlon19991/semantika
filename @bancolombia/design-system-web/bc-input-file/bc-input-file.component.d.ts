import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente subir archivos
 *
 * @export
 * @class BcInputFileComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {DoCheck}
 */
export declare class BcInputFileComponent implements OnInit, AfterViewInit {
    private bcHelperService;
    bcInputFileBehavior: any;
    /**
     * Título del elemento.
     *
     * @type {string}
     * @memberof BcInputFileComponent
     */
    title: string;
    /**
     * Descripción del elemento.
     *
     * @type {string}
     * @memberof BcInputFileComponent
     */
    description: string;
    /**
     * Área arrastrar true | false.
     *
     * @type {boolean}
     * @memberof BcInputFileComponent
     */
    dropArea: boolean;
    /**
     * Texto donde se arrastran los elementos.
     *
     * @memberof BcInputFileComponent
     */
    dropAreaText: string;
    /**
     * Ícono arrastrar elementos.
     *
     * @type {string}
     * @memberof BcInputFileComponent
     */
    dropAreaIcon: string;
    /**
     * Habilitar múltiples archivos.
     *
     * @type {boolean}
     * @memberof BcInputFileComponent
     */
    multipleFiles: boolean;
    /**
     * Id del componente.
     *
     * @type {string}
     * @memberof BcInputFileComponent
     */
    componentId: string;
    /**
     * Tipo de validación.
     *
     * @type {string[]}
     * @memberof BcInputFileComponent
     */
    validType: string[];
    idInput: string;
    validTypesString: string;
    /**
     * Etiqueta personalizable a la experiencia para el botón de carga de archivos.
     *
     * @type {string}
     * @memberof BcInputFileComponent
     */
    buttonLabel: string;
    /**
     * Limite máximo en KB.
     *
     * @type {number}
     * @memberof BcInputFileComponent
     */
    maxSize: number;
    /**
     * Limite máximo de cartas de archivos subidos que se muestran en el DOM.
     *
     * @type {number}
     * @memberof BcInputFileComponent
     */
    maxCards: number;
    /**
   * Nombre seguido a los formatos permitidos.
   *
   * @type {string}
   * @memberof BcInputFileComponent
   */
    textFormat: string;
    /**
     * Nombre seguido al tamaño maximo permitido.
     *
     * @type {string}
     * @memberof BcInputFileComponent
     */
    textMaxSize: string;
    /**
     * Limite máximo de archivos que se pueden cargar.
     *
     * @type {number}
     * @memberof BcInputFileComponent
     */
    maxFiles: number;
    /**
    * Valida si se muestran los errores dentro de la lista o no.
    * true | false
    * @type {boolean}
    * @memberof BcInputFileComponent
    */
    isShowListFiles: boolean;
    /**
     * Corresponde al emisor que devuelve los archivos que se han seleccionado. Se llama cada vez que se agrega o elimina un archivo.
     *
     * @memberof BcInputFileComponent
     */
    getFilesAdded: EventEmitter<any>;
    getFilesAddedErr: EventEmitter<any>;
    /**
     * Encargado de notificar cuando un usuario intenta agregar más archivos del [maxFiles] indicado.
     *
     * @memberof BcInputFileComponent
     */
    getMaxFilesNotification: EventEmitter<any>;
    constructor(bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    init(force?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputFileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcInputFileComponent, "bc-input-file", never, { "title": "title"; "description": "description"; "dropArea": "dropArea"; "dropAreaText": "dropAreaText"; "dropAreaIcon": "dropAreaIcon"; "multipleFiles": "multipleFiles"; "componentId": "componentId"; "validType": "validType"; "buttonLabel": "buttonLabel"; "maxSize": "maxSize"; "maxCards": "maxCards"; "textFormat": "textFormat"; "textMaxSize": "textMaxSize"; "maxFiles": "maxFiles"; "isShowListFiles": "isShowListFiles"; }, { "getFilesAdded": "getFilesAdded"; "getFilesAddedErr": "getFilesAddedErr"; "getMaxFilesNotification": "getMaxFilesNotification"; }, never, never>;
}
