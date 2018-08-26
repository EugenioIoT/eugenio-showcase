
const checkStatus = response => {
    if (!response.ok) {
        throw new Error(response);
    }
    return response;
}

export const SCHEMA_SENT = 'SCHEMA_SENT';
export const SCHEMA_SUCCESS = 'SCHEMA_SUCCESS';
export const SCHEMA_ERROR = 'SCHEMA_ERROR';

function schemaSent() {
    return {
        type: SCHEMA_SENT,
        showLoading: true
    }
}

function schemaError(error) {
    return {
        type: SCHEMA_ERROR,
        error: error,
        showLoading: false
    }
}

function schemaSuccess(json) {
    return {
        type: SCHEMA_SUCCESS,
        schemas: json,
        showLoading: false
    }
}

export function findAllSchemas() {
    return dispatch => {
        dispatch(schemaSent());
        fetch('/api/schemas', {
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
        .then(json => dispatch(schemaSuccess(json)))
        .catch(error => dispatch(schemaError(error)));
    }
}
