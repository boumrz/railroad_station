import { initialState } from './initialState';
import { enumConstants } from '../constants/actions';

export default (state = initialState, action) => {
    switch(action.type) {

        default: {
            return {
                ...state,
            }
        }
    }
}