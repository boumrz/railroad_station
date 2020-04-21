import { combineReducers } from 'redux';
import authReducer from './authReducer';
import app from './app';
import tickets from './tickets';
import trains from './trains';
import purchaseTicket from './purchaseTicket';
import users from './users';
import login from './login';
import checkUserOffice from './checkUserOffice';

export const rootReducer = combineReducers({
    authReducer,
    app,
    tickets,
    trains,
    purchaseTicket,
    users,
    login,
    checkUserOffice,
})