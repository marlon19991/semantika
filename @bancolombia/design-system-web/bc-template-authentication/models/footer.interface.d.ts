export interface ITopLinks {
    alignContent: 'flex-end' | 'flex-start' | 'center';
    links?: Array<{
        text?: string;
        link?: string;
        method?: string;
        isSelf?: boolean;
    }>;
}
interface ISocialNetBottomRight {
    name: string;
    link: string;
    isSelf?: boolean;
}
export interface FootText {
    topLinks: ITopLinks;
    socialNetBottomRight: Array<ISocialNetBottomRight>;
    bottomTextLeftContent: string[];
    bottomTextRighContent: string[];
    logo: string;
    icon: 'left' | 'top';
    bgGray?: boolean;
    bgWhite?: boolean;
    componentId?: string;
    isBancoLogoBottom?: boolean;
    isVigilaLogoBottom?: boolean;
}
export {};
