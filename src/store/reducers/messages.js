import { CREATE_MESSAGE } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {};

const createMessage =(state, action) => {
    return updateObject(state, {
        message: action.message
    })
}

const messages = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MESSAGE: return createMessage(state, action);
        default: 
            return state;
    }
}

export default messages;