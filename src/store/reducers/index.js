import { combineReducers } from 'redux';

import auth from './auth';
import messages from './messages';
import errors from './errors';
import cart from './cart'
export default combineReducers({
    auth,
    cart,
    messages,
    errors 
})