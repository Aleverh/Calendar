const PORT = 8080;
const localHost = `http://localhost:${ PORT }/`;

export const allEventsRestPoint = `${localHost}events`;
export const loginRestPoint = `${localHost}login`;
export const logoutRestPoint = `${localHost}logout`;
export const createLoginRestPoint = `${localHost}createLogin`;
export const exportJsonRestPoint = `${localHost}exportJson`;

export const postRequestObject = body => ({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
});