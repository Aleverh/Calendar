import { createStore, applyMiddleware, compose } from 'redux';
import createSageMiddleware from 'redux-saga';
import rootSaga from './feachers/sagas';
import reducers from './feachers/reducers';

const sagaMiddleware = createSageMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;