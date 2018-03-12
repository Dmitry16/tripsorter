export default function searchOptionsReducer(
  state={
    strFrom: 'London',
    strTo: 'Moscow',
    travelMode: 'cheapest',
  }, action) {

  if(action.type==='NEW_SEARCH') {

    return {...state,
      strFrom: action.payload[0],
      strTo: action.payload[1],
      travelMode: action.payload[2]
    }
  }
  return state;
}
