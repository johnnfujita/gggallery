import * as actionTypes from "../actions/actionTypes"
import { updateObject } from '../utility';
const initialState = {
    cart: {},
    loading: false

} 

export const startServerCall = (state, action) =>{
    return updateObject(state, {
        loading: true,
    })
}


export const addCartItemSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        cart: action.payload
    })
}
export const addCartItemFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const removeCartItemSuccess =  (state, action) =>  {
    return updateObject(state, {
        loading: false,
        cart: action.payload
    })
}
export const removeCartItemFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}


export const cleanCartItemSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        cart: {}
    })
}
export const cleanCartItemFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}
        

const cart = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UTILITY_START_SEVER_CALL: return startServerCall(state, action);
        case actionTypes.CART_ADD_ITEM_SUCCESS: return addCartItemSuccess(state, action);
        case actionTypes.CART_ADD_ITEM_FAIL: return addCartItemFail(state, action);
        case actionTypes.CART_REMOVE_ITEM_SUCCESS: return removeCartItemSuccess(state, action);
        case actionTypes.CART_REMOVE_ITEM_FAIL: return removeCartItemFail(state, action);
        case actionTypes.CART_CLEAN_CART_SUCCESS: return cleanCartItemSuccess(state, action);
        case actionTypes.CART_CLEAN_CART_FAIL: return cleanCartItemFail(state, action);
        default:
            return state    
    }
}

export default cart;