import * as actionTypes from './actionTypes';


export const startServerCall = () =>{
    return{
        type: actionTypes.UTILITY_START_SEVER_CALL,
       
    }
}

export const incrementCartItemSuccess = itemId =>{
    return{
        type: actionTypes.CART_INCREMENT_ITEM_SUCCESS,
        payload: itemId    
    }
}

// for when it starts sychronizing with the Db
// export const cartAddItem = (item,quantity) => {
//     return dispatch => {
//         dispatch(startServerCall)
//     }
// }


export const incrementCartItem = itemId => {
    return dispatch => {
        dispatch(startServerCall())
        dispatch(incrementCartItemSuccess(itemId))
    }
}

export const incrementCartItemFail = error =>{
    return{
        type: actionTypes.CART_INCREMENT_ITEM_FAIL,
        error: error    
    }
}

export const decrementCartItemSuccess = itemId =>{
    return {
        type: actionTypes.CART_DECREMENT_ITEM_SUCCESS,
        payload: itemId    
    }
}

export const decrementCartItemFail = error =>{
    return{
        type: actionTypes.CART_DECREMENT_ITEM_FAIL,
        error: error    
    }
}

export const decrementCartItem = itemId => {
    return dispatch => {
        dispatch(startServerCall());
        dispatch(decrementCartItemSuccess(itemId));
    }
}

export const cleanCartFail = error =>{
    return{
        type: actionTypes.CART_CLEAN_CART_FAIL,
        error: error    
    }
}

export const cleanCartSuccess = () =>{
    return{
        type: actionTypes.CART_CLEAN_CART_SUCCESS,
    }
}

export const cleanCart = () => {
    return dispatch => {
        dispatch(startServerCall());
        dispatch(cleanCartSuccess());
    }
}

export const cleanCartItemFail = error =>{
    return{
        type: actionTypes.CART_CLEAN_ITEM_FAIL,
        error: error    
    }
}

export const cleanCartItemSuccess = (itemId) =>{
    return{
        type: actionTypes.CART_CLEAN_ITEM_SUCCESS,
        payload: itemId
    }
}

export const cleanCartItem = (itemId) => {
    return dispatch => {
        dispatch(startServerCall());
        dispatch(cleanCartItemSuccess(itemId));
    }
}