import {
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_STARTED,
  GET_COMPANIES_FAILURE,
} from '../../constants/company-consts';
import axios from 'axios';
import {failureNotify} from "../notifications/notifications";
import {apiUrl} from '../../constants/common';

export const getCompanies = () =>{
  return dispatch => {
    dispatch(getCompanyStarted());
    axios.get(`${apiUrl}company-list?username=test`)
      .then(res => {
        dispatch(getCompanySuccess(res.data));
      })
      .catch(err => {
        dispatch(getCompanyFailure(err.message));
        failureNotify('Error',err.message);
      });
  };
};
const getCompanySuccess = companies => ({
  type: GET_COMPANIES_SUCCESS,
  payload: {
    ...companies
  }
});

const getCompanyStarted = () => ({
  type: GET_COMPANIES_STARTED
});

const getCompanyFailure = error => ({
  type: GET_COMPANIES_FAILURE,
  payload: {
    error
  }
});
