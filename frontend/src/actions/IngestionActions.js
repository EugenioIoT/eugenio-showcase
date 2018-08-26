const { I18n } = require('react-i18nify');

const checkStatus = response => {
    if (!response.ok) {
        return response.json().then(json => Promise.reject(json));
    }
    return response;
}

export const INGESTION_SENT = 'INGESTION_SENT';
export const INGESTION_SUCCESS = 'INGESTION_SUCCESS';
export const INGESTION_ERROR = 'INGESTION_ERROR';
export const INGESTION_CLEAR = 'INGESTION_CLEAR';

function ingestionSent() {
    return {
        type: INGESTION_SENT,
        showLoading: true
    }
}

function ingestionError(error) {
    return {
        type: INGESTION_ERROR,
        error: error,
        showLoading: false
    }
}

function ingestionSuccess() {
    return {
        type: INGESTION_SUCCESS,
        showLoading: false
    }
}

function ingestionClearState() {
    return {
        type: INGESTION_CLEAR,
        showLoading: false
    }
}

function validJSON(jsonSchema) {
    try {
        JSON.parse(jsonSchema);
        return true;
    } catch (e) {
        return false;
    }
}

export function clearIngestion() {
    return dispatch => {
        return dispatch(ingestionClearState());
    }
}

export function fetchIngestion(schema, jsonSchema) {
    return dispatch => {
        if (!schema) {
            return dispatch(ingestionError({message: I18n.t('ingestion.message.invalidSchema')}));
        }
        if (!validJSON(jsonSchema)) {
            return dispatch(ingestionError({message: I18n.t('ingestion.message.invalidJson')}));
        }

        dispatch(ingestionSent());
        return fetch('/api/ingestion', {
            method: 'post',
            credentials: 'include',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('auth-token'),
                'Tenant': localStorage.getItem('auth-tenant'),
                'ApiKey': localStorage.getItem('auth-apikey')
            },
            body: JSON.stringify({ schema: schema, ingestion: { fields: JSON.parse(jsonSchema)} })
        })
        .then(checkStatus)
        .then(response => dispatch(ingestionSuccess()))
        .catch(error => dispatch(ingestionError(error)));
    }
}
