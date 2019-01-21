export const GET_ALL_DAY_DATA = 'GET_ALL_DAY_DATA';
export const getAllDayDataAction = () => ({type: GET_ALL_DAY_DATA});

export const GET_ALL_DAY_DATA_SUCCESS = 'GET_ALL_DAY_DATA_SUCCESS';
export const getAllDayDataActionSuccess = data =>
    ({type: GET_ALL_DAY_DATA_SUCCESS, payload: data});

export const ADD_NEW_EVENT = 'ADD_NEW_EVENT';
export const addNewEventAction = data => ({type: ADD_NEW_EVENT, payload: data});

export const DELETE_EVENT = 'DELETE_EVENT';
export const deleteEventAction = data => ({type: DELETE_EVENT, payload: data});


export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginAction = data => ({type: LOGIN, payload: data});
export const loginSuccessAction = data => ({type: LOGIN_SUCCESS, payload: data});


export const CREATE_LOGIN = 'CREATE_LOGIN';
export const CREATE_LOGIN_SUCCESS = 'CREATE_LOGIN_SUCCESS';
export const createLoginAction = data => ({type: CREATE_LOGIN, payload: data});
export const createLoginSuccessAction = data => ({type: CREATE_LOGIN_SUCCESS, payload: data});

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutAction = { type: LOGOUT };
export const logoutSuccessAction = () => ({ type: LOGOUT_SUCCESS });

export const EXPORT_TO_JSON = 'EXPORT_TO_JSON';
export const exportToJsonAction = { type: EXPORT_TO_JSON };