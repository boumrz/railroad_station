import "core-js/stable";
import "regenerator-runtime/runtime";
import { takeLatest } from 'redux-saga/effects';
import { enumConstants } from '../constants/actions';
import { initTickets } from './tickets';
import { initTrains } from './trains';
import { purchaseTicket } from './purchaseTicket';
import { addUser } from './registration';
import { checkUser } from './login';
import { checkUserOffice } from './checkUserOffice';

export function* main() {
    yield takeLatest(enumConstants.TICKET_ADD_INIT, initTickets);
    yield takeLatest(enumConstants.TRAINS_FOUND_INIT, initTrains);
    yield takeLatest(enumConstants.CHECK_USER_OFFICE, checkUserOffice);
    yield takeLatest(enumConstants.TICKET_PURCHASE_INIT, purchaseTicket);
    yield takeLatest(enumConstants.ADD_USER_INIT, addUser);
    yield takeLatest(enumConstants.CHECK_USER_LOGIN, checkUser);
}
