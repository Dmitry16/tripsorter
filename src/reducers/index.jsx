import { combineReducers } from 'redux';
import searchResultsReducer from './searchResultsReducer';
import searchOptionsReducer from './searchOptionsReducer';
import appConfigReducer from './appConfigReducer';

export default combineReducers({
  searchResults: searchResultsReducer,
  searchOptions: searchOptionsReducer,
  appConfig    : appConfigReducer,
});
