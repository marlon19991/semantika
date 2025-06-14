import { AfterViewInit } from '@angular/core';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
/**
 * Componente CoachMark
 * import { BcCoachMarkComponent } from '@bancolombia/design-system-web/bc-coach-mark';
 * @export
 * @class BcCoachMarkComponent
 */
export declare class BcCoachMarkComponent implements AfterViewInit {
    private bcHelperService;
    bcCoachMarkBehavior: any;
    constructor(bcHelperService: BcHelperService);
    ngAfterViewInit(): void;
    /**
     * Id del elemento.
     *
     * @type {string}
     * @memberof BcCoachMarkComponent
     */
    componentId: string;
    /**
     * Define el orden de los pasos comenzando por 0.
     *
     * @memberof BcCoachMarkStepComponent
     */
    dataCoachmark: string;
    /**
     * Hace referencia al id que tenga el elemento html del paso a resaltar
     *
     * @memberof BcCoachMarkStepComponent
     */
    dataController: string;
    /**
      * Hace referencia al id que tenga el contenido del paso a resaltar
      *
      * @memberof BcCoachMarkStepComponent
      */
    id: string;
    /**
     * Este Metodo se encarga de inicializar el coachmark
     * @type {string}
     * @memberof BcCoachMarkComponent
     */
    initTourStep(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcCoachMarkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcCoachMarkComponent, "bc-coach-mark", never, { "componentId": "componentId"; "dataCoachmark": "dataCoachmark"; "dataController": "dataController"; "id": "id"; }, {}, never, ["[coachmarkContent]"]>;
}
