
const checkStatus = response => {
    if (!response.ok) {
        throw new Error(response);
    }
    return response;
}

export const THING_SENT = 'THING_SENT';
export const THING_SUCCESS = 'THING_SUCCESS';
export const THING_ERROR = 'THING_ERROR';

function thingSent() {
    return {
        type: THING_SENT,
        showLoading: true
    }
}

function thingError(error) {
    return {
        type: THING_ERROR,
        error: error,
        showLoading: false
    }
}

function thingSuccess(json) {
    return {
        type: THING_SUCCESS,
        things: json,
        showLoading: false
    }
}

export function findAllThings() {
    return dispatch => {
        dispatch(thingSent());
        fetch('/api/things', {
            method: 'get',
            credentials: 'include',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth-token'),
                'Tenant': localStorage.getItem('auth-tenant'),
                'ApiKey': localStorage.getItem('auth-apikey')
            }
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(json => dispatch(thingSuccess(json)))
        .catch(error => dispatch(thingError(error)));
    }
}
