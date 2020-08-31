import * as actionTypes from './actionTypes';


export const startServerCall = () =>{
    return{
        type: actionTypes.UTILITY_START_SEVER_CALL,
       
    }
}

export const incrementCartItemSuccess = item =>{
    return{
        type: actionTypes.CART_INCREMENT_ITEM_SUCCESS,
        payload: item    
    }
}

// for when it starts sychronizing with the Db
// export const cartAddItem = (item,quantity) => {
//     return dispatch => {
//         dispatch(startServerCall)
//     }
// }


export const incrementCartItem = item => {
    return dispatch => {
        dispatch(startServerCall())
        dispatch(incrementCartItemSuccess(item))
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