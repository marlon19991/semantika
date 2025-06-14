import * as i0 from "@angular/core";
import * as i1 from "./bc-input-file.component";
import * as i2 from "@angular/common";
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
export declare class BcInputFileModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BcInputFileModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BcInputFileModule, [typeof i1.BcInputFileComponent], [typeof i2.CommonModule], [typeof i1.BcInputFileComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BcInputFileModule>;
}
