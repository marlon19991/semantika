export interface BcComponentLoader {
    loadChildren: () => Promise<any>;
}
