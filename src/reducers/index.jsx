import { combineReducers } from 'redux';
<<<<<<< HEAD
import { searchResultsReducer } from './searchResultsReducer';
import { searchFormReducer } from './searchFormReducer';

export default combineReducers({
  searchResultsReducer,
  searchFormReducer,
=======
import searchResultsReducer from './searchResultsReducer';

export default combineReducers({
  searchResults: searchResultsReducer,
>>>>>>> typescript
});
