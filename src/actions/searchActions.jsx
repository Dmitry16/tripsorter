export function newSearch(strFrom, strTo, travelMode) {
  return {
    type: 'NEW_SEARCH',
    payload: [
      strFrom,
      strTo,
      travelMode]
  }
}
export function resetSearch() {
  return { type: 'RESET_SEARCH' }
}
