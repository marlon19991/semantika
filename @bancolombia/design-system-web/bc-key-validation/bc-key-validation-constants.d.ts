import { IBcKeyValidationConfig as IBcKeyValidationBehaviorConfig } from '@bancolombia/design-system-behaviors/lib/behaviors/organisms/bc-key-validation/bc-key-validation-constants';
export interface IBcKeyValidationConfig extends IBcKeyValidationBehaviorConfig {
    componentId?: string;
    title: string;
    description: string;
    clearLabel: string;
    timerLabel?: string;
    continueLabel: string;
    optionList?: Array<{
        label: string;
        link: string;
    }>;
    optionListTitle?: string;
}
export declare const BC_DEFAULT_CONFIG: IBcKeyValidationConfig;
