import { enumConstants } from '../../constants/actions';

export const checkUserSuccess = (user) => {
    return {
        type: enumConstants.CHECK_USER_LOGIN_SUCCESS,
        user,
    }
}

export const checkUser = (user) => {
    return {
        type: enumConstants.CHECK_USER_LOGIN,
        user,
    }
}

export const checkUserFailed = (error) => {
    return {
        type: enumConstants.CHECK_USER_LOGIN_FAILED,
        error,
    }
}
