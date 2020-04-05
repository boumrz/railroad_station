import { initialState } from '../initialState';
import { enumConstants } from '../../constants/actions';

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.CHECK_USER_LOGIN: {

            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            }
        }

        case enumConstants.CHECK_USER_LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                currentUser: action.user,
            }
        }

        case enumConstants.CHECK_USER_LOGIN_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}