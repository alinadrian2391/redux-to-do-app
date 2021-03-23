import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import loggingMiddleware from 'redux-logger';

const initialState={}
const middleWare=[thunk, loggingMiddleware]

const store = createStore(
                            rootReducer,
                            initialState,
                            applyMiddleware(...middleWare)
                        )

export default store;