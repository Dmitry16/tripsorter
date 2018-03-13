export const lsRecInjection = (localStorageRec) => {
  return {
    type: 'LS_REC_INJ',
    payload: [
      localStorageRec[1][0],
      localStorageRec[1][1],
      localStorageRec[1][2],
      localStorageRec[1][3],
      localStorageRec[1][4],
    ]
  }
}
// export const addToLocalStorage = (strFrom, strTo, travelMode) => {
//   return {
//     type: 'NEW_LS_REC',
//     payload: [
//       strFrom,
//       strTo,
//       travelMode
//     ]
//   }
// }
