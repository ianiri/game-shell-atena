import { combineReducers, createStore } from 'redux';
import { authReducer, counterReducer } from './reducers';

const mainReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = createStore(mainReducer);

export default store;
