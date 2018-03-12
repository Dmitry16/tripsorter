export const lsRecInjection = (strFrom, strTo, travelMode) => {
  return {
    type: 'LS_REC_INJ',
    payload: [
      strFrom,
      strTo,
      travelMode
    ]
  }
}
export const addToLocalStorage = (strFrom, strTo, travelMode) => {
  return {
    type: 'NEW_LS_REC',
    payload: [
      strFrom,
      strTo,
      travelMode
    ]
  }
}
