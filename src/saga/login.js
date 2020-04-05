import { put, call } from 'redux-saga/effects';
import { checkUserSuccess, checkUserFailed } from '../components/actions/login';
import { initAppFailed, initAuthenticationSuccess } from '../components/actions';
import { checkUser as checkCurrentUser } from '../utils/checkUser';
import { isEmptyObject } from '../utils/isEmptyObject';

export function* checkUser(params) {
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

        const currentUser = checkCurrentUser(response, params);

        if (!isEmptyObject(currentUser)) {
            localStorage.setItem('IS_AUTH', true);

            yield put(checkUserSuccess(currentUser));
            yield put(initAuthenticationSuccess());

        } else {
            yield put(checkUserFailed('Такого пользователя не существует'));
        }
    } catch (error) {
        yield put(initAppFailed(error));
    }
}
