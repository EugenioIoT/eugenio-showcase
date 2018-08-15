import { browserHistory } from 'react-router';

const checkStatus = response => {
    if (!response.ok) {
        return response.json().then(json => Promise.reject(json));
    }
    return response;
}

export const LOGIN_SENT = 'LOGIN_SENT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginSent() {
    return {
        type: LOGIN_SENT,
        showLoading: true
    }
}

function loginError(error) {
    return {
        type: LOGIN_ERROR,
        error: error,
        showLoading: false
    }
}

function loginSuccess(json, loginData) {
    localStorage.setItem('auth-token', json.access_token);
    localStorage.setItem('auth-apikey', loginData.apiKey);
    localStorage.setItem('auth-tenant', loginData.tenant);

    browserHistory.push('/home');

    return {
        type: LOGIN_SUCCESS,
        showLoading: false
    }
}

export function fetchLogin(loginData) {
    return dispatch => {
        dispatch(loginSent());
        return fetch('/login', {
            method: 'post',
            credentials: 'include',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData),
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(json => dispatch(loginSuccess(json, loginData)))
        .catch(error => dispatch(loginError(error)));
    }
}
