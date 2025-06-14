import { AfterViewInit, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { BcFloatMenuBehavior } from '@bancolombia/design-system-behaviors';
import { BcHelperService } from '@bancolombia/design-system-web/bc-helpers';
import * as i0 from "@angular/core";
export declare enum NumberOfPreloaders {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4
}
export declare class BcFloatMenuComponent implements AfterViewInit, OnInit {
    private bcHelperService;
    bcFloatMenuBehavior: BcFloatMenuBehavior;
    componentId: string;
    checkbox: boolean;
    radioButtons: boolean;
    options: Array<Options>;
    arrowCenter: boolean;
    arrowLeft: boolean;
    arrowRight: boolean;
    positionRight: boolean;
    positionLeft: boolean;
    selectedIcon: boolean;
    row: any;
    data: any;
    /**
     * Parametro que permite mostrar el preloader
     * @param havePreloader
     * @type boolean
     * @default false
     */
    havePreloader: boolean;
    /**
     * Parametro que permite configurar el numero de preloader
     * @param numOfpreloaders
     * @type number
     * @default 1
     * @description valid values: 1, 2, 3, 4
     */
    numOfpreloaders: NumberOfPreloaders;
    /**
     * Parametro que permite configurar el ancho del preloader
     * @param floatMenuWidth
     * @type string
     * @default 'default'
     * @description valid values: 'full', 'default'
     * @description 'full' = 100% width
     * @description 'default' = preloader width (100px)
     */
    floatMenuWidth: 'full' | 'default';
    onChange: EventEmitter<any>;
    dropdownId: string;
    changed: EventEmitter<any>;
    preloaderList: Array<number>;
    constructor(bcHelperService: BcHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(change: SimpleChanges): void;
    generatePreloaderList(): void;
    selectOption(event: any, optionId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BcFloatMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BcFloatMenuComponent, "bc-float-menu", never, { "componentId": "componentId"; "checkbox": "checkbox"; "radioButtons": "radioButtons"; "options": "options"; "arrowCenter": "arrowCenter"; "arrowLeft": "arrowLeft"; "arrowRight": "arrowRight"; "positionRight": "positionRight"; "positionLeft": "positionLeft"; "selectedIcon": "selectedIcon"; "row": "row"; "data": "data"; "havePreloader": "havePreloader"; "numOfpreloaders": "numOfpreloaders"; "floatMenuWidth": "floatMenuWidth"; }, { "onChange": "onChange"; "changed": "changed"; }, never, ["*"]>;
}
interface Options {
    id?: string;
    iconLeft?: string;
    iconRight?: string;
    mainText?: string;
    secondaryText?: string;
    imagRight?: string;
    imagLeft?: string;
    altImg?: string;
}
export {};
