import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    FETCH_MESSAGE
} from '../actions/types';

const ROOT_URL = 'http://localhost:3090';

export function signingUser({ email, password}) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })  // JSX syntax { email: email, password: password}
            .then(responce => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', responce.data.token);
                browserHistory.push('/feature');
            })
            .catch(() => {
               dispatch(authError('Bad Login Info'));

            });
    }
}

export function signupUser({ email, password}) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })  // JSX syntax { email: email, password: password}
            .then(responce => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', responce.data.token);
                browserHistory.push('/feature');
            })
            .catch(responce => {
                //console.log(responce.data.error);
                dispatch(authError(responce.data.error));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
    // return function (dispatch) {
    //     dispatch({ type: UNAUTH_USER });
    //     localStorage.removeItem('token');  //setItem('token', responce.data.token);
    //     browserHistory.push("/signout");
    // }
}

export function fetchMessage() {
    return function (dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token')}
        })
            .then(responce => {
                console.log(responce);
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: responce.data.message
                });
            });
    }
}