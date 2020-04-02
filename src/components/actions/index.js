import { enumConstants } from '../../constants/actions';

export const initAuthenticationSuccess = () => {
    return {
        type: enumConstants.AUTHENTICATION_INIT_SUCCESS,
    }
}