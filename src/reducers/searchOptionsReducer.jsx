export default function searchOptionsReducer(
  state={
<<<<<<< HEAD
    strFrom: 'London',
    strTo: 'Moscow',
    travelMode: 'cheapest',
  }, action) {
=======
    valueFrom: 1,
    valueTo: 4,
    strFrom: 'London',
    strTo: 'Moscow',
    travelMode: 'cheapest',
  }, action){
>>>>>>> new

    switch (action.type) {

      case ('NEW_SEARCH'): {
        return {...state,
          valueFrom: action.payload[0],
          valueTo: action.payload[1],
          strFrom: action.payload[2],
          strTo: action.payload[3],
          travelMode: action.payload[4]
        }
      }
      case ('LS_REC_INJ'): {
        return {...state,
          valueFrom: action.payload[0],
          valueTo: action.payload[1],
          strFrom: action.payload[2],
          strTo: action.payload[3],
          travelMode: action.payload[4]
        }
      }
      case ('NEW_LS_REC'): {
        return {...state,
          valueFrom: action.payload[0],
          valueTo: action.payload[1],
          strFrom: action.payload[2],
          strTo: action.payload[3],
          travelMode: action.payload[4]
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
