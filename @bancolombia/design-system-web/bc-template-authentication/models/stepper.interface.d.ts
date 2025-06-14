export interface Stepper {
    haveStepper: boolean;
    arialLabelId: string;
    stepsArray: string[];
    tokenColor: string;
    indexPosition: number;
    direction?: string[] | 'horizontal' | 'vertical';
}
