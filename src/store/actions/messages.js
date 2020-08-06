import * as actionTypes from './actionTypes';


export const createMessage = message => {
    return {
        type: actionTypes.CREATE_MESSAGE,
        message: message
    }
}

export const createWarning = (error, status) => {
    return {
        type: actionTypes.CREATE_WARNING,
        error: error,
        status: status
    }
}