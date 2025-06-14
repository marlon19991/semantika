import { ElementRef, EventEmitter } from '@angular/core';
import { OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente tab del componente
 *
 * @export
 * @class BcTabComponent
 * @implements {OnInit}
 */
export declare class BcTabComponent implements OnInit {
    private el;
    elementClass: string;
    /**
   * Deshabilita el tab
   * @type {('true | false)}
   * @memberof BcTabComponent
   */
    disabledTab: boolean;
    /**
     * label del tab
     *
     * @memberof BcTabComponent
     */
    label: any;
    /**
     * Template del tab
     *
     * @type {TemplateRef<any>}
     * @memberof BcTabComponent
     */
    labelTemplate: TemplateRef<any>;
    /**
     * Muestra o oculta el tab
     *
     * @type {boolean}
     * @memberof BcTabComponent
     */
    show: boolean;
    icon: string;
    /**
     * Valor cada vez que cambia el tab.
     *
     * @type {EventEmitter<boolean>}
     * @memberof BcCheckboxComponent
     */
    changeState: EventEmitter<any>;
    classTab: string;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcTabComponent, "bc-tab", never, { "disabledTab": "disabledTab"; "label": "label"; "labelTemplate": "labelTemplate"; "show": "show"; "icon": "icon"; }, { "changeState": "changeState"; }, never, ["*"]>;
}
