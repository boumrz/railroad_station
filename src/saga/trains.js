import { put, call } from 'redux-saga/effects';
import qs from 'querystring';
import { initTrainsFoundSuccess, initTrainsFoundFailed } from '../components/actions/trains';

export function* initTrains(params) {
    try {
        let query = '';

        if (params.query) {
            query = params.query;
        }
        
        const response = yield call(() => fetch(`/trains?${query}`, {
            method: "GET"
        })
        .then((res) => {
            return res.json();
        }));

        yield put(initTrainsFoundSuccess(response));
    } catch (error) {
        yield put(initTrainsFoundFailed());
    }
}