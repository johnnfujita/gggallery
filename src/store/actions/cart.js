import * as actionTypes from './actionTypes';

export const startServerCall = () =>{
    return{
        type: actionTypes.UTILITY_START_SEVER_CALL,
       
    }
}

export const addCartItemSuccess = cart =>{
    return{
        type: actionTypes.CART_ADD_ITEM_SUCCESS,
        payload: cart    
    }
}

// for when it starts sychronizing with the Db
// export const cartAddItem = (item,quantity) => {
//     return dispatch => {
//         dispatch(startServerCall)
//     }
// }


export const cartAddItem = cart => {
    return dispatch => {
        dispatch(startServerCall())
        dispatch(addCartItemSuccess(cart))
    }
}

export const addCartItemFail = error =>{
    return{
        type: actionTypes.CART_ADD_ITEM_FAIL,
        error: error    
    }
}

export const removeCartItemSuccess = cart =>{
    return {
        type: actionTypes.CART_REMOVE_ITEM_SUCCESS,
        payload: cart    
    }
}

export const removeCartItemFail = error =>{
    return{
        type: actionTypes.CART_REMOVE_ITEM_FAIL,
        error: error    
    }
}

export const removeCartItem = cart => {
    return dispatch => {
        dispatch(startServerCall());
        dispatch(removeCartItemSuccess(cart));
    }
}

export const cleanCartItemFail = error =>{
    return{
        type: actionTypes.CART_CLEAN_CART_FAIL,
        error: error    
    }
}

export const cleanCartItemSuccess = () =>{
    return{
        type: actionTypes.CART_CLEAN_CART_SUCCESS,
        cart:{} 
    }
}

export const cleanCartItem = () => {
    return dispatch => {
        dispatch(startServerCall());
        dispatch(cleanCartItemSuccess());
    }
}