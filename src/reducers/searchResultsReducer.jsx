export default function searchResultsReducer(
  state={
    filteredData: false,
    visible: false,
    sortedTrip: [],
  }, action) {

  switch (action.type) {
    case 'NEW_SEARCH': {
      return {...state,
        visible: true,
      }
    }
    case 'FETCH_DATA_FULFILLED': {
        return {...state,
          filteredData: true,
          sortedTrip: [ action.payload[0],
                        action.payload[1] ? action.payload[1] : null,
                      ],
        }
      }
    case 'RESET_SEARCH': {
        return {...state,
          filteredData: false,
          sortedTrip: [],
        }
      }
  }
  return state;
}
