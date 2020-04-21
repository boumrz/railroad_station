import { put, call } from 'redux-saga/effects';
import { checkUserOfficeSuccess, checkUserOfficeFailed } from '../components/actions/checkUserOffice';
import moment from 'moment';

export function* checkUserOffice() {
    try {
        const responseUsers = yield call(() => fetch('/users', {
            method: "GET",
        })
        .then((res) => {
            return res.json();
        }));

        const responseTickets = yield call(() => fetch('/tickets', {
            method: "GET",
        })
        .then((res) => {
            return res.json();
        }));

        yield put(checkUserOfficeSuccess(responseUsers, responseTickets));
    } catch (error) {
        yield put(checkUserOfficeFailed());
    }
}
