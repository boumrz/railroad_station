import { enumConstants } from '../../constants/actions';

export const addUserInitSuccess = (user) => {
    return {
        type: enumConstants.ADD_USER_INIT_SUCCESS,
        user,
    }
}

export const addUserInit = (user) => {
    return {
        type: enumConstants.ADD_USER_INIT,
        user,
    }
}

export const addUserInitFailed = () => {
    return {
        type: enumConstants.TICKET_ADD_INIT_FAILED,
    }
}

export const switchPageRegistration = (user) => {
    return {
        type: enumConstants.SWITCH_PAGE_REGISTRATION,
        user,
    }
}