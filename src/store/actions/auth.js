import * as actionTypes from "./actionTypes"
import axios from 'axios';
import HOST from '../../globalConfig';
import { createWarning, createMessage } from './messages';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token.token,
        expiration: token.expiration,
        refreshToken: token.refreshToken
    }
}


export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`${HOST}/ggg_art/accounts/login/`, {
            username: username,
            password: password
        }).then(res => {
            const token = res.data.token;
            localStorage.setItem('accessToken', token.access)
            localStorage.setItem('refreshToken', token.refreshToken)
            localStorage.setItem('expiration', token.expiration)
            dispatch(createMessage({userCreated: "Perfil Cadastrado com Sucesso!"}))
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(token.expiration - Date.now()));
        }).catch( error => {
            dispatch(createWarning(error.response.data, error.response.status ));
            dispatch(authFail(error));
        })
    }
}
export const logoutStart = () => {
    return {
        type: actionTypes.LOGOUT_START
    }
}
export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
        token: null,
        refresh: null,
        expirationTime: null
    }
}
export const logoutFail = (error) => {
    return {
        type: actionTypes.LOGOUT_FAIL,
        error: error
    }
}

export const logout = (token) => {
    
    return dispatch => {
        dispatch(logoutStart())
        axios.post(`${HOST}/ggg_art/accounts/logout/`, { token: token.access })
            .then(res =>{
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                localStorage.removeItem('expiration')
                dispatch(createMessage({logoutSucceded: "Você saiu de sua conta com sucesso!"}))
                dispatch(logoutSuccess());
            })
            .catch(err => {
                dispatch(createWarning(err.response.data, err.response.status ))
                dispatch(logoutFail(err))
            })
    }
}

export const checkAuthTimeOut = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());   
        }, expirationTime * 1000)
    }
}



export const authRegister = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`${HOST}/ggg_art/accounts/register/`, {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        }).then(res => {
            const token = res.data.token;
            localStorage.setItem('accessToken', token.access)
            localStorage.setItem('refreshToken', token.refreshToken)
            localStorage.setItem('expiration', token.expiration)
            // TODO: have to create the actions to call the email 
            //confirmation service, 
            // the account will remain inactive until then 
            //the dispacth must call authConfirmation then 
            //it calls sendEmail, the success of send 
            // if email cannot be send returns error message
            //email returns the page of wait email, 
            //timer is important to invalidade the email link, 
            //with the email link is confirmed then it  calls the success
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(token.expiration - Date.now()));
        }).catch( error => {
            dispatch(createWarning(error.response.data, error.response.status ))
            dispatch(authFail(error))
        })
    }
}