import { initialState } from '../initialState';
import { enumConstants } from '../../constants/actions';

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.TICKETS_FOUND_INIT: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case enumConstants.TICKETS_FOUND_INIT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
            }
        }
        case enumConstants.TICKETS_FOUND_INIT_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}