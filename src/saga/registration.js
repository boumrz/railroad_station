import { put, call } from 'redux-saga/effects';
import qs from 'querystring';
import { addUserInitSuccess, addUserInitFailed } from '../components/actions/registration';

export function* addUser(params) {
    try {
        const response = yield call(() => fetch('/users', {
            method: "GET",
        })
        .then((res) => {
            return res.json();
        }))

        if (response && response.length) {
            params.user.id = response.length + 1;
        }
        
        const addUser = yield call(() => fetch('/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify(params.user),
        })
        .then((res) => {
            return res.json();
        }))

        yield put(addUserInitSuccess(addUser));
    } catch (error) {
        yield put(addUserInitFailed());
    }
}
