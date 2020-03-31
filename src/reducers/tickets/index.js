import { combineReducers } from 'redux';
import entity from './entity';
import stateTickets from './stateTickets';

export default combineReducers({
    entity,
    stateTickets
})