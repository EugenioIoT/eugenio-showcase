const { I18n } = require('react-i18nify');

const checkStatus = response => {
    if (!response.ok) {
        return response.json().then(json => Promise.reject(json));
    }
    return response;
}

export const THINGSINVOKE_SENT = 'THINGSINVOKE_SENT';
export const THINGSINVOKE_SUCCESS = 'THINGSINVOKE_SUCCESS';
export const THINGSINVOKE_ERROR = 'THINGSINVOKE_ERROR';
export const THINGSINVOKE_CLEAR = 'THINGSINVOKE_CLEAR';

function thingsInvokeSent() {
    return {
        type: THINGSINVOKE_SENT,
        showLoading: true
    }
}

function thingsInvokeError(error) {
    return {
        type: THINGSINVOKE_ERROR,
        error: error.error,
        showLoading: false
    }
}

function thingsInvokeSuccess() {
    return {
        type: THINGSINVOKE_SUCCESS,
        showLoading: false
    }
}

function thingsInvokeClearState() {
    return {
        type: THINGSINVOKE_CLEAR,
        showLoading: false
    }
}

function validJSON(json) {
    try {
        JSON.parse(json);
        return true;
    } catch (e) {
        return false;
    }
}

export function clearThingsInvoke() {
    return dispatch => {
        return dispatch(thingsInvokeClearState());
    }
}

export function fetchThingsInvoke(deviceId, json) {
    return dispatch => {
        if (!deviceId) {
            return dispatch(thingsInvokeError({error: I18n.t('thingsInvoke.message.invalidDeviceId')}));
        }
        if (!validJSON(json)) {
            return dispatch(thingsInvokeError({error: I18n.t('thingsInvoke.message.invalidJson')}));
        }

        dispatch(thingsInvokeSent());
        return fetch('/api/things/' + deviceId + '/invoke', {
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
          body: json
        })
        .then(checkStatus)
        .then(response => dispatch(thingsInvokeSuccess()))
        .catch(error => dispatch(thingsInvokeError(error)));
    }
}
