import { enumConstants } from '../../constants/actions';

export const checkUserOffice = () => {
    return {
        type: enumConstants.CHECK_USER_OFFICE,
    }
}

export const checkUserOfficeSuccess = (responseUsers, responseTickets) => {
    return {
        type: enumConstants.CHECK_USER_OFFICE_SUCCESS,
        responseUsers,
        responseTickets,
    }
}

export const checkUserOfficeFailed = (error) => {
    return {
        type: enumConstants.CHECK_USER_OFFICE_FAILED,
        error,
    }
}