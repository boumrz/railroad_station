import { enumConstants } from '../../constants/actions';

const initialState = {
    tickets: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.TICKETS_ADD_INIT_SUCCESS: {
            return {
                ...state,
            }
        }
        
        default: {
            return {
                ...state,
            }
        }
    }
}