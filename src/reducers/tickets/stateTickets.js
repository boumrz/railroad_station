import { initialState } from '../initialState';
import { enumConstants } from '../../constants/actions';

export default (state = {
    ...initialState,
}, action) => {
    switch(action.type) {
        case enumConstants.TICKET_ADD_INIT: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isPurchaseTicket: false,
            }
        }
        case enumConstants.TICKET_PURCHASE_INIT: {

            return {
                ...state,
                isPurchaseTicket: false,
            }
        }

        case enumConstants.TICKET_ADD_INIT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isPurchaseTicket: true,
            }
        }
        case enumConstants.TICKET_ADD_INIT_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isPurchaseTicket: false,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}