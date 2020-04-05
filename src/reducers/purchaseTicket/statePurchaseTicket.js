import { initialState } from '../initialState';
import { enumConstants } from '../../constants/actions';

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.TICKET_PURCHASE_INIT: {

            return {
                ...state,
                isPurchaseTicket: false,
            }
        }

        case enumConstants.TICKET_PURCHASE_INIT_SUCCESS: {
            return {
                ...state,
                targetTicket: action.purchaseTicket,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}