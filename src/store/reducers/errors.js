import { CREATE_WARNING } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    error: {},
    status: null
}

const createWarning = (state, action) => {
    return updateObject(state, {
        error: action.error,
        status: action.status
    })
}

export const errors = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_WARNING: return createWarning(state, action);
        default:
            return state;
    }
}