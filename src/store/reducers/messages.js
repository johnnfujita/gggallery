import { CREATE_MESSAGE } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {};

export const createMessage =(state, action) => {
    return updateObject(state, {
        message: action.message
    })
}

export const messages = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MESSAGE: return createMessage(state, action);
        default: 
            return state;
    }
}