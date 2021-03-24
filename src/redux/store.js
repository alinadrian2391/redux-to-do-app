import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import loggingMiddleware from 'redux-logger';

const initialState = {}
const middleWare=[thunk, loggingMiddleware]

const store = createStore(
                            rootReducer,
                            initialState,
                            compose(applyMiddleware(...middleWare),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
                        )
export default store;