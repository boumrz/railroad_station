import { initialState } from '../initialState';
import { enumConstants } from '../../constants/actions';

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.TICKET_PURCHASE_INIT: {
            // const targetTicket =  action.purchaseTicket;

            return {
                ...state,
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