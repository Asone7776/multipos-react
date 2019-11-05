import { GET_POSES_STARTED, GET_POSES_SUCCESS, GET_POSES_FAILURE } from "../../constants/poses-const";
import axios from "axios";
import { apiUrl, tenantID } from "../../constants/common";
import { failureNotify } from "../notifications/notifications";
axios.defaults.headers.common = {"X-TENANT-ID": tenantID };

export const getPoses = () => {
  return dispatch => {
    dispatch(getPosesStarted());
    axios.get(`${apiUrl}pos-list`)
      .then(res => {
        dispatch(getPosesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getPosesFailure(err.message));
        failureNotify("Error", err.message);
      });
  };
};

const getPosesSuccess = poses => ({
  type: GET_POSES_SUCCESS,
  payload: {
    ...poses
  }
});

const getPosesStarted = () => ({
  type: GET_POSES_STARTED
});

const getPosesFailure = error => ({
  type: GET_POSES_FAILURE,
  payload: {
    error
  }
});