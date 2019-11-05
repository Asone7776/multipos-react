import {
  DELETE_COMPANY_SUCCESS,
  DELETE_COMPANY_STARTED,
  DELETE_COMPANY_FAILURE,
} from '../../constants/company-consts';
import axios from 'axios';
import {successNotifiy,failureNotify} from "../notifications/notifications";
import {apiUrl} from '../../constants/common';

export const deleteCompany = (values) =>{
  return dispatch => {
    dispatch(deleteCompanyStarted());
    axios.delete(`${apiUrl}company/delete`, values)
      .then(res => {
        dispatch(deleteCompanySuccess(res.data));
        successNotifiy('OK','Company was successfully deleted');
      })
      .catch(err => {
        dispatch(deleteCompanyFailure(err.message));
        failureNotify('Error',err.message);
      });
  };
};
const deleteCompanySuccess = company => ({
  type: DELETE_COMPANY_SUCCESS,
  payload: {
    ...company
  }
});

const deleteCompanyStarted = () => ({
  type: DELETE_COMPANY_STARTED
});

const deleteCompanyFailure = error => ({
  type: DELETE_COMPANY_FAILURE,
  payload: {
    error
  }
});
