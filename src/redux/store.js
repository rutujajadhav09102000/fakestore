import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';

const store = createStore(rootReducer,applyMiddleware(logger,thunk));

export default store