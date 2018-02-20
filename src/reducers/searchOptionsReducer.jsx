export default function searchOptionsReducer(
  state={
    from: 'Madrid',
    to: 'Berlin'
  }, action) {

  if(action.type==='FROM_OPTION_CHANGED') {
    return {...state, searchResultsVisible: true }
  }
  if(action.type==='TO_OPTION_CHANGED') {
    return {...state, searchResultsVisible: false }
  }
  console.log('state:',state);
  return state;
}
