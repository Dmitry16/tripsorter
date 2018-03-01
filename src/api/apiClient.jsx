import axios from 'axios';
import queryString from 'query-string';

export function fetchData() {

  return function(dispatch) {
    axios.get('/Users/dmitry/Sites/tripsorter2/src/response.json')
      .then((response) => {
        dispatch({type: FETCH_DATA_FULFILLED,
                  payload: response.data});
      })
      .catch((err) => {
        dispatch({type: FETCH_POSTS_REJECTED,
                  payload: err});
      })
  }
}
