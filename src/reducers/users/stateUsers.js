import { initialState } from "../initialState";
import { enumConstants } from '../../constants/actions';

export default (state = {
    ...initialState,
    currentUser: {},
}, action) => {
    switch(action.type) {
        case enumConstants.ADD_USER_INIT: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case enumConstants.ADD_USER_INIT_SUCCESS: {

            return {
                ...state,
                isLoading: false,
                isError: false,
                currentUser: action.user,
            }
        }
        case enumConstants.ADD_USER_INIT_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        case enumConstants.SWITCH_PAGE_REGISTRATION: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                currentUser: {},
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}