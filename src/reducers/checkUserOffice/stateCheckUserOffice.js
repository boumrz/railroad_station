import { initialState } from '../initialState';
import { enumConstants } from '../../constants/actions';

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.CHECK_USER_OFFICE: {

            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }

        case enumConstants.CHECK_USER_OFFICE_SUCCESS: {

            return {
                ...state,
                isLoading: false,
                isError: false,
                responseUsers: action.responseUsers,
                responseTickets: action.responseTickets,
            }
        }

        case enumConstants.CHECK_USER_OFFICE_FAILED: {
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