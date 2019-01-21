import {
    allEventsRestPoint,
    exportJsonRestPoint,
    logoutRestPoint,
    loginRestPoint,
    createLoginRestPoint,
    postRequestObject
} from '../global/rest-points'

export const getAllEventDataFetch = () =>
    fetch(allEventsRestPoint)
        .then(response => response.json());

export const addNewEventFetch = body =>
    fetch(allEventsRestPoint, postRequestObject(body))
        .then(response => response.json());

export const deleteEventFetch = body =>
    fetch(`${ allEventsRestPoint }/${ body }`,{ method: "DELETE" });

export const loginFetch = body =>
    fetch(loginRestPoint, postRequestObject(body))
        .then(response => response.json());

export const createLoginFetch = body =>
    fetch(createLoginRestPoint, postRequestObject(body))
        .then(response => response.json());

export const logoutFetch = () =>
    fetch(logoutRestPoint);

export const exportJsonFetch = () =>
    fetch(exportJsonRestPoint);

