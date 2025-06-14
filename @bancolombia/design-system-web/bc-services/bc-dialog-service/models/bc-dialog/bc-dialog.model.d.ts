import { BcDialogRef } from '../bc-dialog-ref/bc-dialog-ref.model';
export declare abstract class BcDialog {
    modalInstance: BcDialogRef;
    abstract onInjectInputs(inputs: any): void;
    close(output?: any): void;
    dismiss(output?: any): void;
}
