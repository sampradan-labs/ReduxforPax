import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import userReducer from '../reduxUserReducers/UserReducer';

//A store accepts a reducer as input
const store = createStore(userReducer)

//A store with Logger middleware
//const store = createStore(userReducer,applyMiddleware(logger))

export default store