export const lsRecInjection = (localStorageRec) => {
  return {
    type: 'LS_REC_INJ',
    payload: [
      localStorageRec[0],
      localStorageRec[1],
      localStorageRec[2],
      localStorageRec[3],
      localStorageRec[4],
    ]
  }
}
