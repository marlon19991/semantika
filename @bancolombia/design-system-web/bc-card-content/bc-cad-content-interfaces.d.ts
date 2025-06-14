export declare const CardContentType: {
    readonly cardPhoto: "card-photo";
    readonly cardIllustration: "card-illustration";
    readonly cardIcon: "card-icon";
};
export declare type CardContentType = typeof CardContentType[keyof typeof CardContentType];
export declare const ButtonPosition: {
    readonly horizontalFill: "horizontal-fill";
    readonly verticalFill: "vertical-fill";
    readonly horizontalHug: "horizontal-hug";
    readonly verticalHug: "vertical-hug";
};
export declare type ButtonPosition = typeof ButtonPosition[keyof typeof ButtonPosition];
export interface CardContentStatus {
    type?: 'icon-left' | 'icon-right' | 'only' | 'simple';
    color?: 'alba' | 'andino' | 'caribe' | 'macondo' | 'flamenco' | 'orquidea' | 'neutro' | 'black' | 'white';
    border?: 'center' | 'left' | 'right';
    icon?: string;
    text?: string;
    widthTag?: string;
}
export interface CardContentLink {
    id: string;
    typeLink?: 'simple' | 'underline';
    sizeLink?: 'default' | 'small' | 'large';
    class?: string;
    text?: string;
    url?: string;
    iconLeft?: string;
    iconRight?: string;
}
export interface CardContentButton {
    id: string;
    type: 'primary' | 'secondary';
    sizeButton: 'small';
    icon?: string;
    text?: string;
    event?: any;
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
export interface CardContentIconButton {
    options?: Options[];
}
export interface CardContentText {
    text?: string;
    classText?: string;
}
export interface BcCardContentConfig {
    idCard: string;
    cardPosition: "horizontal" | "vertical";
    cardSize?: "small" | "medium";
    cardType: CardContentType;
    icon?: string;
    iconFloat?: string;
    urlImage?: string;
    title?: CardContentText;
    subtitle?: CardContentText;
    text?: CardContentText;
    additionalText?: CardContentText;
    additionalIcon?: string;
    componentStatus?: CardContentStatus;
    componentButtonOne?: CardContentButton;
    componentButtonTwo?: CardContentButton;
    componentButtonPosition?: ButtonPosition;
    componentIconButton?: CardContentIconButton;
    componentLink?: CardContentLink;
}
export {};
