import { combineReducers } from 'redux';
import searchResultsReducer from './searchResultsReducer';
import searchOptionsReducer from './searchOptionsReducer';

export default combineReducers({
  searchResults: searchResultsReducer,
  searchOptions: searchOptionsReducer,
});
