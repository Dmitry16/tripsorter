 "use strict";
const tripsFilter = (data, ...searchParams) => {

  let [from, to, travelMode] = [...searchParams];
  console.log(travelMode);
  let directTransport = [];
  let transPointsFrom = [];
  let transitTrips = [];
  let transitTransport = [];
  let complexTrip = [];

  //find direct transport
  const directTrips = (data, from, to) => {
    for (let i=0; i<data.deals.length; i++) {
      if ((data.deals[i].departure===from) && (data.deals[i].arrival===to)) {
          directTransport.push(data.deals[i]);
      }
    }
    return directTransport;
  }
  const deleteRepeatingKeys = (arr) => {
    let mediator = new Set(arr);
    return arr = [...mediator];
  }
  //if there is no direct transport then make an array of all direct (transitional) routes
  const findTransitionPoints = (data, from) => {
    for (let i=0; i<data.deals.length; i++) {
      if (directTransport.length===0 && data.deals[i].departure===from) {
        if (transPointsFrom.length!==0) {
          let counter = 0;
          transPointsFrom.forEach(point=>{
             if (point===data.deals[i].arrival) {
               counter++;
               console.log('counter',counter);
             }
          });
          if (counter===0) {
            transPointsFrom.push(data.deals[i].arrival);
            transitTransport.push(data.deals[i]);
          }
        }
        else {
          transPointsFrom.push(data.deals[i].arrival);
          transitTransport.push(data.deals[i]);
        }
      }
    }
    return transPointsFrom;
  }
//check up if there is a direct transport from the transitional points
  const transitionalTrips = (data, arr, to) => {
    for (let i=0; i<data.deals.length; i++) {
      for (let j=0; j<arr.length; j++) {
        if ((data.deals[i].departure===arr[j]) && (data.deals[i].arrival===to)) {
          transitTrips.push(data.deals[i]);
        }
        else {
          arr.forEach(point=>{
            if(point!==data.deals[i].departure)
              findTransitionPoints(data, arr[j], to);
          });
        }
      }
    }
    return console.log('transitTrips::',deleteRepeatingKeys(transitTrips));
  }

const composeTrip = (inputArray, outputArray, to) => {
  for (let i=0; i<inputArray.length; i++)
    if (inputArray[i].arrival===to)
      for (let n=0; n<inputArray.length; n++)
        if (inputArray[i].departure===inputArray[n].arrival)
            outputArray.push(inputArray[n]);
            console.log('outputArray',outputArray);
  return outputArray;
}

const filterByObjProps = (arr) => {
  return arr.sort((a, b) => {
  //   if (a - b) {
  //     return -1;
  //   }
  //   if (a - b) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // console.log('output filterProps', arr);
    return parseInt(a.duration.h) - parseInt(b.duration.h);
  });
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
  return outputArr;
}

const filterCheapest = (arr) => {
  arr.sort((a, b) => {
    return parseInt(a.cost) - parseInt(b.cost);
  });
  return arr;
}

//Calculate total duration & cost
const calculateTripTotals = (arr) => {
  console.log('total input',arr);
  let tripTotals = {};
  tripTotals.totalDuration = 0;
  tripTotals.totalCost = 0;
  arr.forEach(key => {
    console.log('zz',tripTotals.totalDuration +=
    (parseInt(key.duration.h) * 60 + parseInt(key.duration.m))/60);
    console.log(tripTotals.totalCost += (key.cost));
  });
  arr.push(tripTotals.totalDuration, tripTotals.totalCost);
  console.log('totals output',arr);
  return arr;
}

//find the cheapest trips
const findCheapest = (arr) => {
  console.log('findCheapest input:',arr);
  let mapped = [];
  console.log('mapped last',mapped);
  console.log('filtered',filterCheapest(arr));
  return calculateTripTotals(composeFinalRoute(filterCheapest(arr)));
}

const findFastest = (arr) => {
  console.log('findFastest input:',arr);
  // let mapped = [];
  // let pastKeyDep=arr[0].arrival;
  // arr.forEach((key) => {
  //   if (pastKeyDep === key.arrival) {
  //    // console.log('key.departure',key.departure);
  //    mapped.push(key);
  //   }
  //   else {
  //     console.log('mapped in else',filterByObjProps(mapped));
  //     mapped = [];
  //     mapped.push(key);
  //     pastKeyDep=key.arrival;
  //   }
   // console.log('mapped',mapped);
  // });
  // console.log('mapped last',mapped);
  console.log('filtered',filterByObjProps(arr));
  return calculateTripTotals(composeFinalRoute(filterByObjProps(arr)));
}

  const startEngine = (data, from, to) => {

    directTrips(data, from, to)
    deleteRepeatingKeys(findTransitionPoints(data, from));
    transitionalTrips(data, transPointsFrom, to);

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
      let complexTrip = [...transitTransport,...transitTrips];
      transitTrips = composeTrip(complexTrip, transitTrips, to);
      transitTrips = deleteRepeatingKeys(transitTrips);

      if(travelMode==='cheapest') {
        transitTrips = findCheapest(transitTrips);
        console.log('final output:', transitTrips);
        return transitTrips;
      }
      else {
        console.log('zzz',transitTrips);
        transitTrips = findFastest(transitTrips);
        console.log('final output:', transitTrips);
        return console.log('transitTrips', transitTrips);
      }
    }
  }
return startEngine(data, from, to);
}

export default tripsFilter;



// WEBPACK FOOTER //
// src/helpers/dataFilters.jsx
