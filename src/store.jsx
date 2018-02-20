import { applyMiddleware, createStore } from 'redux';
//import createLogger from 'redux-logger'
//import thunk from 'redux-thunk'
//import promise from 'redux-promise-middleware'
import reducer from './reducers/index';

const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
