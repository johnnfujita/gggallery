import * as actionTypes from "../actions/actionTypes"
import { updateObject } from '../utility';

const initialState = {
    cart: [
    
    ],
    loading: false

} 

export const startServerCall = (state, action) =>{
    return updateObject(state, {
        loading: true,
    })
}


export const incrementCartItemSuccess = (state, action) => {
    console.log(state, action)
    return {
        loading: false,
        cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity+=1} : item) 
    }
}

export const incrementCartItemFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const decrementCartItemSuccess =  (state, action) =>  {
    return updateObject(state, {
        loading: false,
        cart: state.cart.map(item => item.id === action.payload ? {...item, quantity:item.quantity-=1} : item)
    })
}
export const decrementCartItemFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}


export const cleanCartSuccess = (state, action) => {
    console.log(cart)
    return updateObject(state, {
        loading: false,
        cart: []
    })
}
export const cleanCartFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const cleanCartItemSuccess = (state, action) => {

    console.log( state.cart.filter(item => item.id !== action.payload))
    return updateObject(state, {
        loading: false,
        cart: state.cart.filter(item => item.id !== action.payload)
    })
}
export const cleanCartItemFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const addCartItemSuccess = (state, action) => {
    console.log(state)
    return {
        loading: false,
        cart: [...state.cart, {...action.payload, quantity:1}  ]
    }
}

export const addCartItemFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}
        
        

const cart = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UTILITY_START_SEVER_CALL: return startServerCall(state, action);
        case actionTypes.CART_INCREMENT_ITEM_SUCCESS: return incrementCartItemSuccess(state, action);
        case actionTypes.CART_INCREMENT_ITEM_FAIL: return incrementCartItemFail(state, action);
        case actionTypes.CART_DECREMENT_ITEM_SUCCESS: return decrementCartItemSuccess(state, action);
        case actionTypes.CART_DECREMENT_ITEM_FAIL: return decrementCartItemFail(state, action);
        case actionTypes.CART_CLEAN_CART_SUCCESS: return cleanCartSuccess(state, action);
        case actionTypes.CART_CLEAN_CART_FAIL: return cleanCartFail(state, action);
        case actionTypes.CART_CLEAN_ITEM_SUCCESS: return cleanCartItemSuccess(state, action);
        case actionTypes.CART_CLEAN_ITEM_FAIL: return cleanCartItemFail(state, action);
        case actionTypes.CART_ADD_ITEM_SUCCESS: return addCartItemSuccess(state, action);
        case actionTypes.CART_ADD_ITEM_FAIL: return addCartItemFail(state, action);
        default:
            return state    
    }
}

export default cart;