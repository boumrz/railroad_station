import { put, call } from 'redux-saga/effects';
import qs from 'querystring';
import { ticketPurchaseInitSuccess, ticketPurchaseInitFailed } from '../components/actions/purchaseTicket';

export function* purchaseTicket(params) {
    try {
        let purchaseTicket = '';

        if (params) {
            purchaseTicket = params.purchaseTicket;
        }
        
        const response = yield call(() => fetch(`/trains?${purchaseTicket}`, {
            method: "GET"
        })
        .then((res) => {
            return res.json();
        }));

        yield put(ticketPurchaseInitSuccess(response[0]));
    } catch (error) {
        yield put(ticketPurchaseInitFailed());
    }
}