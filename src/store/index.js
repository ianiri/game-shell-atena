import { combineReducers, createStore, compose } from 'redux';
import { authReducer, counterReducer } from './reducers';

const mainReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

// recipe
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, composeEnhancers());

export default store;
