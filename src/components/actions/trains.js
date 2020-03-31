import { enumConstants } from '../../constants/actions';

export const initTrainsFoundSuccess = (trains) => {
    return {
        type: enumConstants.TRAINS_FOUND_INIT_SUCCESS,
        trains,
    }
}

export const initTrainsFound = (query) => {
    return {
        type: enumConstants.TRAINS_FOUND_INIT,
        query,
    }
}

export const initTrainsFoundFailed = () => {
    return {
        type: enumConstants.TRAINS_FOUND_INIT_FAILED,
    }
}