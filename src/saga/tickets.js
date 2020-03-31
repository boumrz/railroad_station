import { put, call } from 'redux-saga/effects';
import { initTicketsFoundSuccess, initTicketsFoundFailed } from '../components/actions';

export function* initTickets() {
    try {
        const response = yield call(() => fetch('/tickets', {
            method: "GET"
        })
        .then((res) => {
            return res.json();
        }))

        yield put(initTicketsFoundSuccess(response));
    } catch (error) {
        yield put(initTicketsFoundFailed());
    }
}