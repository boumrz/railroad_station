import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import app from './app';
import tickets from './tickets';
import trains from './trains';
import purchaseTicket from './purchaseTicket';

export const rootReducer = combineReducers({
    authReducer,
    app,
    tickets,
    trains,
    purchaseTicket,
    form: formReducer,
})