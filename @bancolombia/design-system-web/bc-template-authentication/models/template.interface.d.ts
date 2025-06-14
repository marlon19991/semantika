export interface LinkAlert {
    url: string;
    text: string;
}
export interface AlertInfo {
    position: 'top' | 'bottom';
    typeAlert: 'inlineAlert' | 'alert';
    type: 'error' | 'success' | 'info' | 'warning' | 'inactive';
    title: string;
    text: string;
    links: Array<LinkAlert>;
    dismissible?: boolean;
    dismiss?: boolean;
    componentId?: string;
    secondColor?: boolean;
    show?: boolean;
    onClosedAlert?: () => void;
}
