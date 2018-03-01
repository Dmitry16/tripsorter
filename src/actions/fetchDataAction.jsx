import axios from 'axios';
import tripsFilter from '../helpers/dataFilters';

export function fetchData(...searchParams) {

  return function(dispatch) {
    return axios.get('data/response.json')
      .then((response) => {
        dispatch({type: 'FETCH_DATA_FULFILLED',
                  payload: tripsFilter(response.data, ...searchParams)});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_DATA_REJECTED',
                  payload: err});
      })
  }
}
