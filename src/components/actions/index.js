import { enumConstants } from '../../constants/actions';

export const initAuthenticationSuccess = () => {
    return {
        type: enumConstants.AUTHENTICATION_INIT_SUCCESS,
    }
}

export const initAuthenticationFailed = () => {
    return {
        type: enumConstants.AUTHENTICATION_INIT_FAILED,
    }
}

export const initApp = () => {
    return {
        type: enumConstants.APP_INIT,
    }
}

export const initAppSuccess = () => {
    return {
        type: enumConstants.APP_INIT_SUCCESS,
    }
}

export const initAppFailed = (error) => {
    return {
        type: enumConstants.APP_INIT_FAILED,
        error,
    }
}