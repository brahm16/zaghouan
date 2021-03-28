import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import userReducer from './user.reducer';

export default combineReducers({
    userReducer,

});