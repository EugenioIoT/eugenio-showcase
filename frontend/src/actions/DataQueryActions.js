
const checkStatus = response => {
    if (!response.ok) {
        return response.json().then(json => Promise.reject(json));
    }
    return response;
}

export const DATAQUERY_SENT = 'DATAQUERY_SENT';
export const DATAQUERY_SUCCESS = 'DATAQUERY_SUCCESS';
export const DATAQUERY_ERROR = 'DATAQUERY_ERROR';
export const DATAQUERY_CLEAR = 'DATAQUERY_CLEAR';

function dataQuerySent() {
    return {
        type: DATAQUERY_SENT,
        showLoading: true
    }
}

function dataQueryError(error) {
    return {
        type: DATAQUERY_ERROR,
        error: error,
        showLoading: false
    }
}

function dataQuerySuccess(json) {
    return {
        type: DATAQUERY_SUCCESS,
        result: json,
        showLoading: false
    }
}

function dataQueryClearState() {
    return {
        type: DATAQUERY_CLEAR,
        showLoading: false
    }
}

export function clearDataQuery() {
    return dispatch => {
        return dispatch(dataQueryClearState());
    }
}

export function fetchDataQuery(query) {
    return dispatch => {
        dispatch(dataQuerySent());
        return fetch('/api/query?query=' + query.replace(/\n/g," ") + '&_=' + new Date().getTime(), {
            method: 'get',
            credentials: 'include',
            redirect: 'follow',
            cache: 'no-cache',
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
        .then(json => dispatch(dataQuerySuccess(json)))
        .catch(error => dispatch(dataQueryError(error)));
    }
}
