import { enumConstants } from '../../constants/actions';

const initialState = {
    tickets: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.TICKETS_FOUND_INIT_SUCCESS: {
            return {
                tickets: action.tickets,
            }
        }
        
        default: {
            return {
                ...state,
            }
        }
    }
}