import { put, call } from 'redux-saga/effects';
import qs from 'querystring';
import { initTicketsAddSuccess, initTicketsAddFailed } from '../components/actions/tickets';

export function* initTickets(params) {
    try {
        const response = yield call(() => fetch('/tickets', {
            method: "GET",
        })
        .then((res) => {
            return res.json();
        }))

        if (response && response.length) {
            params.purchase.id = response.length + 1;
        }

        const addTicket = yield call(() => fetch('/tickets', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify(params.purchase),
        })
        .then((res) => {
            return res.json();
        }))

        yield put(initTicketsAddSuccess(addTicket));
    } catch (error) {
        console.log(error);
        yield put(initTicketsAddFailed());
    }
}