import { enumConstants } from '../../constants/actions';

export const initAuthenticationSuccess = () => {
    return {
        type: enumConstants.AUTHENTICATION_INIT_SUCCESS,
    }
}

export const initTicketsFoundSuccess = (tickets) => {
    return {
        type: enumConstants.TICKETS_FOUND_INIT_SUCCESS,
        tickets,
    }
}

export const initTicketsFound = () => {
    return {
        type: enumConstants.TICKETS_FOUND_INIT,
    }
}

export const initTicketsFoundFailed = () => {
    return {
        type: enumConstants.TICKETS_FOUND_INIT_FAILED,
    }
}