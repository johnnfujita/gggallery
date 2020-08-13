import * as actionTypes from "./actionTypes"
import axios from 'axios';
import { HOST } from '../../globalConfig';
import { createWarning, createMessage } from './messages';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = auth_token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: auth_token,
        //expiration: token.expiration,
        //refreshToken: token.refreshToken
    }
}


export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogin = (username="djoser", password = "alpine12") => {
    return dispatch => {
        console.log("dfdsafdsf")
        dispatch(authStart());
        axios.post(`${HOST}/auth/token/login/`, {
            username: username,
            password: password
        }, {headers:{ "Content-Type": "application/json"}}).then(res => {
            const auth_token = res.data.auth_token;
            console.log(auth_token)
            localStorage.setItem('auth_token', auth_token)
            //localStorage.setItem('refreshToken', token.refreshToken)
            //localStorage.setItem('expiration', token.expiration)
            
            dispatch(createMessage({userCreated: "Perfil Cadastrado com Sucesso!"}))
            dispatch(authSuccess(auth_token));
            //dispatch(checkAuthTimeOut(token));
        }).catch( (error) => {
           // dispatch(createWarning(error.error, error.status))
            
            dispatch(authFail(error));
            dispatch(createWarning(error.response.statusText,error.response.status))
           
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
        auth_token: null,
        //refresh: null,
       // expirationTime: null
    }
}
export const logoutFail = (error) => {
    return {
        type: actionTypes.LOGOUT_FAIL,
        error: error
    }
}

export const logout = (auth_token) => {
    
    return dispatch => {
        dispatch(logoutStart())
        axios.post(`${HOST}/ggg_art/accounts/logout/`, { auth_token: auth_token })
            .then(res =>{
                localStorage.removeItem('auth_token')
                //localStorage.removeItem('refreshToken')
                //localStorage.removeItem('expiration')
                dispatch(createMessage({logoutSucceded: "Você saiu de sua conta com sucesso!"}))
                dispatch(logoutSuccess());
            })
            .catch(err => {
                dispatch(createWarning(err.response.statusText, err.response.status ))
                dispatch(logoutFail(err))
            })
    }
}

export const checkAuthTimeOut = auth_token => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout(auth_token));   
        }, 10 * 1000)
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
            const auth_token = res.data.auth_token;
            localStorage.setItem('accessToken', auth_token)
            //localStorage.setItem('refreshToken', token.refreshToken)
            //localStorage.setItem('expiration', token.expiration)
            // TODO: have to create the actions to call the email 
            //confirmation service, 
            // the account will remain inactive until then 
            //the dispacth must call authConfirmation then 
            //it calls sendEmail, the success of send 
            // if email cannot be send returns error message
            //email returns the page of wait email, 
            //timer is important to invalidade the email link, 
            //with the email link is confirmed then it  calls the success
            dispatch(authSuccess(auth_token));
            dispatch(createMessage("Registered With Success"))
            //dispatch(checkAuthTimeOut(auth_token.expiration - Date.now()));
        }).catch( error => {
            dispatch(createWarning(error.response.statusText, error.response.status ))
            dispatch(authFail(error))
        })
    }
}