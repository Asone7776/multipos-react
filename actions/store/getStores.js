import {
  GET_STORES_SUCCESS,
  GET_STORES_STARTED,
  GET_STORES_FAILURE,
} from '../../constants/store-consts';
import axios from 'axios';
import {failureNotify} from "../notifications/notifications";
export const getStores = () =>{
  return dispatch => {
    dispatch(getStoresStarted());
    axios.get(`${apiUrl}establishment-list`)
      .then(res => {
        dispatch(getStoresSuccess(res.data));
      })
      .catch(err => {
        dispatch(getStoresFailure(err.message));
        failureNotify('Error',err.message);
      });
  };
};
const getStoresSuccess = stores => ({
  type: GET_STORES_SUCCESS,
  payload: {
    ...stores
  }
});

const getStoresStarted = () => ({
  type: GET_STORES_STARTED
});

const getStoresFailure = error => ({
  type: GET_STORES_FAILURE,
  payload: {
    error
  }
});
