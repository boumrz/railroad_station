import { initialState } from './initialState';
import { enumConstants } from '../constants/actions';

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.AUTHENTICATION_INIT: {
            return {
                ...state,
                isAuth: false,
            }
        }
        case enumConstants.AUTHENTICATION_INIT_SUCCESS: {
            return {
                ...state,
                isAuth: true,
            }
        }
        case enumConstants.AUTHENTICATION_INIT_FAILED: {
            return {
                ...state,
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