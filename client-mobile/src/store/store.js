import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "../reducers";


const initialState = {};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
