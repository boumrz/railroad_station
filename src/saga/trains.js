import { put, call } from 'redux-saga/effects';
import moment from 'moment';
import { initTrainsFoundSuccess, initTrainsFoundFailed } from '../components/actions/trains';

export function* initTrains(params) {
    try {
        let query = '';
        let currentTrains = [];

        if (params.query) {
            query = params.query;
        }
        
        const response = yield call(() => fetch(`/trains?${query}`, {
            method: "GET"
        })
        .then((res) => {
            return res.json();
        }));

        let train = 0;
        Array.isArray(response) && response.map(item => {
            if (moment(item.train_arrival_date).format("DD-MM-YYYY") >= moment().format("DD-MM-YYYY")) {
                currentTrains[train] = item;
                train += 1;
            } 
        })

        yield put(initTrainsFoundSuccess(currentTrains));
    } catch (error) {
        yield put(initTrainsFoundFailed());
    }
}