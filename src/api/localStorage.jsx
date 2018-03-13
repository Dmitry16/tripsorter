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
    console.log('submittedText in setToLocalStorage', submittedText);
    console.log('false from setToLocalStorage');
    return false;
  }
  console.log('submittedText in setToLocalStorage', submittedText);
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

export const clearLocalStorage = () => {
  localStorage.clear();
}
