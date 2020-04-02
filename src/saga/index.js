import "core-js/stable";
import "regenerator-runtime/runtime";
import { takeLatest } from 'redux-saga/effects';
import { enumConstants } from '../constants/actions';
import { initTickets } from './tickets';
import { initTrains } from './trains';
import { purchaseTicket } from './purchaseTicket';

export function* main() {
    yield takeLatest(enumConstants.TICKET_ADD_INIT, initTickets);
    yield takeLatest(enumConstants.TRAINS_FOUND_INIT, initTrains);
    yield takeLatest(enumConstants.TICKET_PURCHASE_INIT, purchaseTicket);
}
