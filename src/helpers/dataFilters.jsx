"use strict";
import * as filters from './filterLib/filters';

const tripsFilter = (data, ...searchParams) => {

  let [from, to, travelMode] = [...searchParams];
  let directTransport = [];
  let transPointsFrom = [];
  let transitTrips = [];
  let transitTransport = [];
  let complexTrip = [];
  //finding direct transport
  const directTrips = (data, from, to) => {
    for (let i=0; i<data.deals.length; i++) {
      if ((data.deals[i].departure===from) && (data.deals[i].arrival===to)) {
          directTransport.push(data.deals[i]);
      }
    }
    return directTransport;
  }
  //if there is no direct transport then make an array of all possible transitional routes
  const findTransitionPoints = (data, from) => {
    for (let i=0; i<data.deals.length; i++) {
      if (directTransport.length===0 && data.deals[i].departure===from) {
          transPointsFrom.push(data.deals[i].arrival);
          transitTransport.push(data.deals[i]);
      }
    }
    transPointsFrom = filters.deleteRepeatingKeys(transPointsFrom);
    console.log(transPointsFrom);
    return transPointsFrom;
  }
//check up if there is a direct transport from the transitional points
  const transitionalTrips = (data, arr, to) => {
    for (let i=0; i<data.deals.length; i++) {
      for (let j=0; j<arr.length; j++) {
        if ((data.deals[i].departure===arr[j]) && (data.deals[i].arrival===to)) {
          transitTrips.push(data.deals[i]);
        }
      }
    }
    return transitTrips;
  }
//compose a final route
const composeTrip = (inputArray, outputArray, to) => {
  for (let i=0; i<inputArray.length; i++)
    if (inputArray[i].arrival===to)
      for (let n=0; n<inputArray.length; n++)
        if (inputArray[i].departure===inputArray[n].arrival)
            outputArray.push(inputArray[n]);
            console.log('outputArray',outputArray);
  return outputArray;
}

const composeFinalRoute = (arr) => {
  let outputArr = [];
  outputArr.push(arr[0]);
  for (let j=1; j<arr.length; j++) {
    if (arr[0].arrival === arr[j].departure && outputArr.length < 2)
      outputArr.push(arr[j]);
    else if (arr[0].departure === arr[j].arrival && outputArr.length < 2)
      outputArr.push(arr[j]);
  }
  console.log('composeFinalRoute',outputArr);
  return outputArr;
}

//find the cheapest trips
const findCheapest = (arr) => {
  console.log('findCheapest input:',arr);
  let mapped = [];
  console.log('mapped last',mapped);
  console.log('filtered',filters.filterCheapest(arr));
  return (
    filters.calculateTripTotals(
    composeFinalRoute(
    filters.filterCheapest(arr)))
  )
}
//find the fastest trips
const findFastest = (arr) => {
  console.log('findFastest input:',arr);
  console.log('filtered',filters.filterByObjProps(arr));
  return (
    filters.calculateTripTotals(
    composeFinalRoute(
    filters.filterByObjProps(arr)))
  )
}

  directTrips(data, from, to)

  if (directTransport.length!==0 && travelMode==='cheapest') {
    directTransport = findCheapest(directTransport);
    console.log('final output:', directTransport);
    return directTransport;
  }
  else if (directTransport.length!==0 && travelMode==='fastest') {
    directTransport = findFastest(directTransport);
    console.log('final output:', directTransport);
    return directTransport;
  }
  else if (directTransport.length === 0) {
    filters.deleteRepeatingKeys(findTransitionPoints(data, from));
    transitionalTrips(data, transPointsFrom, to);
    let complexTrip = [...transitTransport,...transitTrips];
    transitTrips = composeTrip(complexTrip, transitTrips, to);
    transitTrips = filters.deleteRepeatingKeys(transitTrips);

    if(travelMode==='cheapest') {
      transitTrips = findCheapest(transitTrips);
      console.log('final output:', transitTrips);
      return transitTrips;
    }
    else {
      transitTrips = findFastest(transitTrips);
      console.log('final output:', transitTrips);
      return transitTrips;
    }
  }
}

export default tripsFilter;
