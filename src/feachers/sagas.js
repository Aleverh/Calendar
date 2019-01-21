import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
    getAllEventDataFetch,
    addNewEventFetch,
    deleteEventFetch,
    loginFetch,
    createLoginFetch,
    logoutFetch,
    exportJsonFetch
} from '../services/fetchData'
import {
    getAllDayDataActionSuccess,
    getAllDayDataAction,
    loginSuccessAction,
    createLoginSuccessAction,
    GET_ALL_DAY_DATA,
    EXPORT_TO_JSON,
    ADD_NEW_EVENT,
    DELETE_EVENT,
    LOGIN,
    CREATE_LOGIN,
    LOGOUT,
    logoutSuccessAction
} from "../global/actions-constants";
import { getEventsCollision } from '../global/function'

function* getAllEventData() {
    const response = yield call(getAllEventDataFetch);
    getEventsCollision(response);
    yield put(getAllDayDataActionSuccess(response))
}

function* login(data) {
    const response =  yield call(loginFetch, data.payload);
    yield put(loginSuccessAction(response))
}

function* addNewEvent(data) {
    yield call(addNewEventFetch, data.payload);
    yield put(getAllDayDataAction())
}

function* deleteEvent(data) {
    yield call(deleteEventFetch, data.payload);
    yield put(getAllDayDataAction())
}

function* createLogin(data) {
    const response = yield call(createLoginFetch, data.payload);
    yield put(createLoginSuccessAction(response))
}

function* logout(data) {
    const response = yield call(logoutFetch, data.payload);
    yield put(logoutSuccessAction(response))
}
function* exportToJson(data) {
    yield call(exportJsonFetch, data.payload);
}

export default function* rootSaga() {
    yield all([
        takeEvery(GET_ALL_DAY_DATA, getAllEventData),
        takeEvery(ADD_NEW_EVENT, addNewEvent),
        takeEvery(DELETE_EVENT, deleteEvent),
        takeEvery(LOGIN, login),
        takeEvery(CREATE_LOGIN, createLogin),
        takeEvery(LOGOUT, logout),
        takeEvery(EXPORT_TO_JSON, exportToJson)
    ]);
}