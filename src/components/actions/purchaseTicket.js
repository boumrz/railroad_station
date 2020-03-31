import { enumConstants } from '../../constants/actions';

export const ticketPurchaseInit = (purchaseTicket) => {
    return {
        type: enumConstants.TICKET_PURCHASE_INIT,
        purchaseTicket,
    }
}

export const ticketPurchaseInitSuccess = (purchaseTicket) => {
    return {
        type: enumConstants.TICKET_PURCHASE_INIT_SUCCESS,
        purchaseTicket,
    }
}

export const ticketPurchaseInitFailed = () => {
    return {
        type: enumConstants.TICKET_PURCHASE_INIT_FAILED,
    }
}