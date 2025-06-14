/**
 * Interfaz del objeto para llenar componente TotalValue.
 *
 * @export
 * @interface BcTotalValueObject
 */
export interface BcTotalValueObject {
    complementary?: BcTotalValueComplementary;
    information: BcTotalValueInformation;
}
/**
 * Interfaz de una columna del componente permite agregar estilos.
 *
 * @export
 * @interface BcTotalValueColumn
 */
export interface BcTotalValueColumn {
    hugContentWidth?: boolean;
    fixedWidth?: string;
    label: BcTotalValueLabel;
    dataFontCssClass?: string;
    optional: boolean;
}
/**
 * Interfaz de objeto Information, para llenar valores de totales y sus.
 *
 * @export
 * @interface BcTotalValueInformation
 */
export interface BcTotalValueInformation {
    data: Array<BcTotalValueInformationData>;
    informationLabelFontCssClass?: string;
}
/**
 * Interfaz para especificar los totales del componente.
 *
 * @export
 * @interface BcTotalValueInformationData
 */
export interface BcTotalValueInformationData extends BcTotalValueColumn {
    data: BcTotalValueAmount;
}
/**
 * Interfaz para especificar la informacion complementaria y su estilo fuente
 *
 * @export
 * @interface BcTotalValueComplementary
 */
export interface BcTotalValueComplementary extends BcTotalValueColumn {
    labelFontCssClass?: string;
    data: string;
}
/**
 * Interfaz para especificar labels y texto de tooltips
 *
 * @export
 * @interface BcTotalValueLabel
 */
export interface BcTotalValueLabel {
    text: string;
    tooltipText?: string;
}
/**
 * Interfaz para especificar monto: moneda, valor, valor decimal
 *
 * @export
 * @interface BcTotalValueAmount
 */
export interface BcTotalValueAmount {
    currency: string;
    integer: string;
    decimal?: string;
}
/**
 * Enumerable para fondos del componte
 *
 * @export
 * @interface BcTotalValueBackgroundColor
 */
export declare enum BcTotalValueBackgroundColor {
    BG_BRAND_PRIMARY_PAIR_01_00 = "bc-bg-brand-primary-pair-01-00",
    BG_BRAND_N_PAIR_50_900 = "bc-bg-brand-N-P-pair-50-900"
}
/**
 * Enumerable para espacios entre columnas
 *
 * @export
 * @interface BcTotalValueCellSpacingGap
 */
export declare enum BcTotalValueCellSpacingGap {
    GAP_01 = "bc-total-value-gap-01",
    GAP_02 = "bc-total-value-gap-02",
    GAP_03 = "bc-total-value-gap-03",
    GAP_04 = "bc-total-value-gap-04"
}
