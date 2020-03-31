import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'src/reducers';
import { main } from './saga/index';
import logger from 'redux-logger';

export const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [logger, sagaMiddleware];

    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    sagaMiddleware.run(main);

    return store;
};
