/**
 *  Interfaz del objeto emitido al seleccionar una card.
 *
 * @export
 * @interface cardTdcStatusData
 */
export interface cardTdcStatusData {
    cardName: string;
    cardNumber: string;
    cardType: 'checkbox' | 'radio';
    minPayment: string;
    minUsdPayment: string;
    dueDate: string;
    logoName: string;
    elementId: string;
    type: 'checkbox' | 'radio';
    selected?: boolean;
    radioGroupName?: string;
}
