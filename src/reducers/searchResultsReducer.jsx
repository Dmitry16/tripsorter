export default function searchResultsReducer(state={searchResultsVisible: true},action) {

//console.log(state.searchResultsVisible);

  if(action.type==='SHOW_SEARCH_RESULTS') {
    return {...state, searchResultsVisible: true }
  }
  if(action.type==='HIDE_SEARCH_RESULTS') {
    return {...state, searchResultsVisible: false }
  }
  console.log('state:',state);
  return state;
}
