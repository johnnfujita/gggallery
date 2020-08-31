import * as actionTypes from './actionTypes';


export const startServerCall = () =>{
    return{
        type: actionTypes.UTILITY_START_SEVER_CALL,
       
    }
}

export const incrementCartItemSuccess = cart =>{
    return{
        type: actionTypes.CART_INCREMENT_ITEM_SUCCESS,
        payload: cart    
    }
}

// for when it starts sychronizing with the Db
// export const cartAddItem = (item,quantity) => {
//     return dispatch => {
//         dispatch(startServerCall)
//     }
// }


export const incrementCartItem = cart => {
    return dispatch => {
        dispatch(startServerCall())
        dispatch(incrementCartItemSuccess(cart))
    }
}

export const incrementCartItemFail = error =>{
    return{
        type: actionTypes.CART_INCREMENT_ITEM_FAIL,
        error: error    
    }
}

export const decrementCartItemSuccess = cart =>{
    return {
        type: actionTypes.CART_DECREMENT_ITEM_SUCCESS,
        payload: cart    
    }
}

export const decrementCartItemFail = error =>{
    return{
        type: actionTypes.CART_DECREMENT_ITEM_FAIL,
        error: error    
    }
}

export const decrementCartItem = cart => {
    return dispatch => {
        dispatch(startServerCall());
        dispatch(decrementCartItemSuccess(cart));
    }
}

export const cleanCartItemFail = error =>{
    return{
        type: actionTypes.CART_CLEAN_CART_FAIL,
        error: error    
    }
}

export const cleanCartItemSuccess = (cart) =>{
    return{
        type: actionTypes.CART_CLEAN_CART_SUCCESS,
        payload: cart
    }
}

export const cleanCartItem = (cart) => {
    return dispatch => {
        dispatch(startServerCall());
        dispatch(cleanCartItemSuccess(cart));
    }
}