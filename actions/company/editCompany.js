import {
  EDIT_COMPANY_SUCCESS,
  EDIT_COMPANY_STARTED,
  EDIT_COMPANY_FAILURE,
} from '../../constants/company-consts';
import {successNotifiy,failureNotify} from "../notifications/notifications";
import axios from 'axios';
import {apiUrl} from '../../constants/common';



export const editCompany = (values) =>{
  return dispatch => {
    dispatch(editCompanyStarted());
    axios.patch(`${apiUrl}company/edit`, values)
      .then(res => {
        dispatch(editCompanySuccess(res.data));
        successNotifiy("OK","Company was successfully edited");
      })
      .catch(err => {
        dispatch(editCompanyFailure(err.message));
        failureNotify('Error',err.message);
      });
  };
};
const editCompanySuccess = company => ({
  type: EDIT_COMPANY_SUCCESS,
  payload: {
    ...company
  }
});

const editCompanyStarted = () => ({
  type: EDIT_COMPANY_STARTED
});

const editCompanyFailure = error => ({
  type: EDIT_COMPANY_FAILURE,
  payload: {
    error
  }
});
