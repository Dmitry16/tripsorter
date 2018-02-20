import { combineReducers } from 'redux';
import { searchResultsReducer } from './searchResultsReducer';
import { searchFormReducer } from './searchFormReducer';

export default combineReducers({
  searchResultsReducer,
  searchFormReducer,
});
