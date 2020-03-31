import { initialState } from "../initialState";
import { enumConstants } from "../../constants/actions";

export default (state = initialState, action) => {
    switch(action.type) {
        case enumConstants.TRAINS_FOUND_INIT_SUCCESS: {
            return {
                trains: action.trains,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}