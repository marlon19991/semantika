import { EventEmitter, SimpleChanges, ElementRef } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
* .
* El componente file download permite descargar archivos.
*
* @export
* @class BcFileDownloadComponent
* @implements {AfterViewInit}
*/
export declare class BcFileDownloadComponent {
    private helper;
    private el;
    bcFileDownloadBehavior: any;
    bcAccordionBehavior: any;
    tittle: string;
    iconHead: string;
    accordionId: any;
    element: any;
    /**
   *Indica el id para el comportamiento del componente.
   * @memberof BcFileDownloadComponent
   */
    componentId: string;
    /**
   * Url del archivo a descargar.
   *
   * @type {string}
   * @memberof BcFileDownloadComponent
   */
    url: string;
    /**
     * Recibe el archivo a descargar.
     *
     * @type {File}
     * @memberof BcFileDownloadComponent
     */
    file: File;
    /**
     * Nombre el archivo a descargar.
     *
     * @type {string}
     * @memberof BcFileDownloadComponent
     */
    nameFile: string;
    /**
     * Estado de la descarga.
     *
     * @type {string}
     * @memberof BcFileDownloadComponent
     */
    status: EventEmitter<any>;
    constructor(helper: BcHelperService, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    /**
     * Función que muestra el estado del componente
     *
     * @memberof BcFileDownloadComponent
     */
    dispatchValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcFileDownloadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcFileDownloadComponent, "bc-file-download", never, { "componentId": "componentId"; "url": "url"; "file": "file"; "nameFile": "nameFile"; }, { "status": "status"; }, never, never>;
}
