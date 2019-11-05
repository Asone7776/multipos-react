import {
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_STARTED,
  ADD_COMPANY_FAILURE,
} from '../../constants/company-consts';
import {successNotifiy,failureNotify} from "../notifications/notifications";
import axios from 'axios';
import {apiUrl} from '../../constants/common';


export const addCompany = (values) =>{
  return dispatch => {
    dispatch(addCompanyStarted());
    axios.post(`${apiUrl}company/create`, values)
      .then(res => {
        dispatch(addCompanySuccess(res.data));
        successNotifiy('OK',"Company was successfully created");
      })
      .catch(err => {
        dispatch(addCompanyFailure(err.message));
        failureNotify('Error',err.message);
      });
  };
};
const addCompanySuccess = company => ({
  type: ADD_COMPANY_SUCCESS,
  payload: {
    ...company
  }
});

const addCompanyStarted = () => ({
  type: ADD_COMPANY_STARTED
});

const addCompanyFailure = error => ({
  type: ADD_COMPANY_FAILURE,
  payload: {
    error
  }
});
