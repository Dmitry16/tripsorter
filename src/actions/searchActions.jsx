export function newSearch(  valueFrom, valueTo, strFrom, strTo, travelMode) {
  return {
    type: 'NEW_SEARCH',
    payload: [
      valueFrom,
      valueTo,
      strFrom,
      strTo,
      travelMode
    ]
  }
}
export function resetSearch() {
  return {
          type: 'RESET_SEARCH',
        }
}
