import React from 'react';

export const validateInput = (submittedText) => {
  if(submittedText !=="") {
    setToLocalStorage(submittedText);
    return true;
  }
}

export const setToLocalStorage = (submittedText) => {
  let trips = getFromLocalStorage();
  if(!submittedText || trips.indexOf(submittedText)>-1) {
    return false;
  }
  trips.push(submittedText);
  localStorage.setItem('trips', JSON.stringify(trips));
  return true;
}

export const getFromLocalStorage = () => {
  let trips = localStorage.getItem("trips");
  if (trips) {
    return JSON.parse(trips);
  } else {
    return [];
  }
}

export const removeFromLocalStorage = (invitee) => {
  let trips = getFromLocalStorage("trips");
  let inviteeIndex = trips.indexOf(invitee);
  if ( inviteeIndex !== -1) {
    trips.splice(inviteeIndex, 1);
    localStorage.setItem('trips', JSON.stringify(trips));
  }
}
