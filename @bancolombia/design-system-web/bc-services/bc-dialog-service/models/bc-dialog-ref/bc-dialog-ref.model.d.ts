import { ComponentRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BcDialogContainerComponent } from '../../bc-dialog-container/bc-dialog-container.component';
import { BcDialog } from '../bc-dialog/bc-dialog.model';
export declare class BcDialogRef {
    modalContainer: ComponentRef<BcDialogContainerComponent>;
    modal: ComponentRef<BcDialog>;
    result: Subject<any>;
    constructor(modalContainer: ComponentRef<BcDialogContainerComponent>, modal: ComponentRef<BcDialog>);
    close(output: any): void;
    dismiss(output: any): void;
    onResult(): Observable<any>;
    _destroy(): void;
}
