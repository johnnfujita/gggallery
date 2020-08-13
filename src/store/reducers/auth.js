import * as actionTypes from "../actions/actionTypes";
import { updateObject } from '../utility';


const initialState = {
    token: null,
    error: null,
    loading: false,
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const authSuccess = (state, action) =>{
    return updateObject(state, {
        auth_token: action.auth_token,
        error: null,
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        auth_token: null,
        error: action.error,
        loading: false
    })
}

const logoutStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const logoutSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        auth_token: null
    })
}

const logoutFail = (state, action) => {
    return updateObject(state, {
        token: null,
        loading: false,
        error: action.error
    })
}


const auth = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.LOGOUT_START: return logoutStart(state, action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action);
        case actionTypes.LOGOUT_FAIL: return logoutFail(state, action);
        default:
            return state;
    }
}
export default auth;