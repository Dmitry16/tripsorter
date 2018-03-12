export default function searchOptionsReducer(
  state={
    strFrom: '',
    strTo: '',
    travelMode: '',
  }, action){

    switch (action.type) {

      case ('NEW_SEARCH'): {
        return {...state,
          strFrom: action.payload[0],
          strTo: action.payload[1],
          travelMode: action.payload[2]
        }
      }
      case ('LS_REC_INJ'): {
        return {...state,
          strFrom: action.payload[0],
          strTo: action.payload[1],
          travelMode: action.payload[2]
        }
      }
      case ('NEW_LS_REC'): {
        return {...state,
          strFrom: action.payload[0],
          strTo: action.payload[1],
          travelMode: action.payload[2]
        }
      }
  }
  return state;
}

//   if(action.type==='NEW_SEARCH') {
//
//     return {...state,
//       strFrom: action.payload[0],
//       strTo: action.payload[1],
//       travelMode: action.payload[2]
//     }
//   }
//   return state;
// }
