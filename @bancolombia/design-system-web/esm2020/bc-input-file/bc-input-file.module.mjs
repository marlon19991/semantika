import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcInputFileComponent } from './bc-input-file.component';
import * as i0 from "@angular/core";
/**
 * Importa el componente bcInputFile con
 * los diseños de Bancolombia S.A.
 *
 * @componente <bc-input-file></bc-input-file>
 *
 * @param  title: Titulo del label
 * @param  description: La descripción del archivo que sube el usuario
 * @param  dropAreaText(opcional): texto del area para arrastrar. Default: Arrastra aquí los archivos desde tu computadora.
 * @param  dropAreaIcon(opcional): Texto del icono (como se ha indicado en la seccion de iconos funcionales) del drop area".
 *  Default: folder
 * @param [multipleFiles] (opcional): Boolean que indica si el input[file] acepta mas de un archivo. Default: true
 * @param [dropArea](opcional): Boolean que indica si se quiere un input[file] con area para arrastar o solo con el
 * boton de agregar archivo Default: true
 * @param componentId: ID que se le asignará en el html del componente, debe ser asignado para
 * facilitar la automatizacion y la certificación
 * @param accept: funciona igual que el "accept" disponible para el input[type=file] para limitar el tipo de
 * archivo que se puede subir. Default= acepta varios tipos de archivos
 *
 * @example
 *
 * <bc-input-file title="Selector de archivos"
 * description="Este selector contiene un dropArea con los valores predeterminados, pero pueden ser cambiados"
 * [dropArea]=true
 * [multipleFiles]=false
 * accept="image/*"
 * componentId="InputConDropArea">
 * </bc-input-file>
 *
 * @author: Bancolombia S.A
 */
export class BcInputFileModule {
}
BcInputFileModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BcInputFileModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileModule, declarations: [BcInputFileComponent], imports: [CommonModule], exports: [BcInputFileComponent] });
BcInputFileModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BcInputFileModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BcInputFileComponent],
                    imports: [CommonModule],
                    exports: [BcInputFileComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmMtaW5wdXQtZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ19iZHMvYmMtaW5wdXQtZmlsZS9iYy1pbnB1dC1maWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFakU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQU9ILE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFKYixvQkFBb0IsYUFDekIsWUFBWSxhQUNaLG9CQUFvQjsrR0FFbkIsaUJBQWlCLFlBSG5CLENBQUMsWUFBWSxDQUFDOzJGQUdaLGlCQUFpQjtrQkFMN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJjSW5wdXRGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9iYy1pbnB1dC1maWxlLmNvbXBvbmVudCc7XG5cbi8qKlxuICogSW1wb3J0YSBlbCBjb21wb25lbnRlIGJjSW5wdXRGaWxlIGNvblxuICogbG9zIGRpc2XDsW9zIGRlIEJhbmNvbG9tYmlhIFMuQS5cbiAqXG4gKiBAY29tcG9uZW50ZSA8YmMtaW5wdXQtZmlsZT48L2JjLWlucHV0LWZpbGU+XG4gKlxuICogQHBhcmFtICB0aXRsZTogVGl0dWxvIGRlbCBsYWJlbFxuICogQHBhcmFtICBkZXNjcmlwdGlvbjogTGEgZGVzY3JpcGNpw7NuIGRlbCBhcmNoaXZvIHF1ZSBzdWJlIGVsIHVzdWFyaW9cbiAqIEBwYXJhbSAgZHJvcEFyZWFUZXh0KG9wY2lvbmFsKTogdGV4dG8gZGVsIGFyZWEgcGFyYSBhcnJhc3RyYXIuIERlZmF1bHQ6IEFycmFzdHJhIGFxdcOtIGxvcyBhcmNoaXZvcyBkZXNkZSB0dSBjb21wdXRhZG9yYS5cbiAqIEBwYXJhbSAgZHJvcEFyZWFJY29uKG9wY2lvbmFsKTogVGV4dG8gZGVsIGljb25vIChjb21vIHNlIGhhIGluZGljYWRvIGVuIGxhIHNlY2Npb24gZGUgaWNvbm9zIGZ1bmNpb25hbGVzKSBkZWwgZHJvcCBhcmVhXCIuXG4gKiAgRGVmYXVsdDogZm9sZGVyXG4gKiBAcGFyYW0gW211bHRpcGxlRmlsZXNdIChvcGNpb25hbCk6IEJvb2xlYW4gcXVlIGluZGljYSBzaSBlbCBpbnB1dFtmaWxlXSBhY2VwdGEgbWFzIGRlIHVuIGFyY2hpdm8uIERlZmF1bHQ6IHRydWVcbiAqIEBwYXJhbSBbZHJvcEFyZWFdKG9wY2lvbmFsKTogQm9vbGVhbiBxdWUgaW5kaWNhIHNpIHNlIHF1aWVyZSB1biBpbnB1dFtmaWxlXSBjb24gYXJlYSBwYXJhIGFycmFzdGFyIG8gc29sbyBjb24gZWxcbiAqIGJvdG9uIGRlIGFncmVnYXIgYXJjaGl2byBEZWZhdWx0OiB0cnVlXG4gKiBAcGFyYW0gY29tcG9uZW50SWQ6IElEIHF1ZSBzZSBsZSBhc2lnbmFyw6EgZW4gZWwgaHRtbCBkZWwgY29tcG9uZW50ZSwgZGViZSBzZXIgYXNpZ25hZG8gcGFyYVxuICogZmFjaWxpdGFyIGxhIGF1dG9tYXRpemFjaW9uIHkgbGEgY2VydGlmaWNhY2nDs25cbiAqIEBwYXJhbSBhY2NlcHQ6IGZ1bmNpb25hIGlndWFsIHF1ZSBlbCBcImFjY2VwdFwiIGRpc3BvbmlibGUgcGFyYSBlbCBpbnB1dFt0eXBlPWZpbGVdIHBhcmEgbGltaXRhciBlbCB0aXBvIGRlXG4gKiBhcmNoaXZvIHF1ZSBzZSBwdWVkZSBzdWJpci4gRGVmYXVsdD0gYWNlcHRhIHZhcmlvcyB0aXBvcyBkZSBhcmNoaXZvc1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogPGJjLWlucHV0LWZpbGUgdGl0bGU9XCJTZWxlY3RvciBkZSBhcmNoaXZvc1wiXG4gKiBkZXNjcmlwdGlvbj1cIkVzdGUgc2VsZWN0b3IgY29udGllbmUgdW4gZHJvcEFyZWEgY29uIGxvcyB2YWxvcmVzIHByZWRldGVybWluYWRvcywgcGVybyBwdWVkZW4gc2VyIGNhbWJpYWRvc1wiXG4gKiBbZHJvcEFyZWFdPXRydWVcbiAqIFttdWx0aXBsZUZpbGVzXT1mYWxzZVxuICogYWNjZXB0PVwiaW1hZ2UvKlwiXG4gKiBjb21wb25lbnRJZD1cIklucHV0Q29uRHJvcEFyZWFcIj5cbiAqIDwvYmMtaW5wdXQtZmlsZT5cbiAqXG4gKiBAYXV0aG9yOiBCYW5jb2xvbWJpYSBTLkFcbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCY0lucHV0RmlsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQmNJbnB1dEZpbGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCY0lucHV0RmlsZU1vZHVsZSB7fVxuIl19