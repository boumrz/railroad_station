import { enumConstants } from '../../constants/actions';

export const initTicketsAddSuccess = (purchase) => {
    return {
        type: enumConstants.TICKET_ADD_INIT_SUCCESS,
        purchase,
    }
}

export const initTicketsAdd = (purchase) => {
    return {
        type: enumConstants.TICKET_ADD_INIT,
        purchase,
    }
}

export const initTicketsAddFailed = () => {
    return {
        type: enumConstants.TICKET_ADD_INIT_FAILED,
    }
}