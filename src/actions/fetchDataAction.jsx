import axios from 'axios';
import tripsFilter from '../helpers/dataFilters';

export function fetchData(...searchParams) {

  return function(dispatch) {
    return axios.get('data/response.json')
      .then((response) => {
        setTimeout(function(){

          dispatch({type: 'FETCH_DATA_FULFILLED',
          payload: tripsFilter(response.data, ...searchParams)});
          
        }, 2000);
      })
      .catch((err) => {
        dispatch({type: 'FETCH_DATA_REJECTED',
                  payload: err});
      })
  }
}
