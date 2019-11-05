import {
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_STARTED,
  GET_COMPANIES_FAILURE,
} from '../../constants/company-consts';
import axios from 'axios';
import {apiUrl} from "../../constants/common";
import {failureNotify} from "../notifications/notifications";
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJob3JNc3czWWdTSDdab0hMVVoyN3dFQnZ1WUFCeU1zdjFZejMyTUJ2TEhVIn0.eyJqdGkiOiI5NzI2NTlmZi00OGE3LTQ1OTctODhmOC00N2RlYmM1MzBiZTEiLCJleHAiOjE1NTgzNzQ2MDIsIm5iZiI6MCwiaWF0IjoxNTU4MzM4NjAyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjMyYTAwYjEzLThjMGMtNGFiZi04Y2MyLWYxYjdlNWQxOGJiYSIsInR5cCI6IkJlYXJlciIsImF6cCI6InRva2VuLWNsaWVudCIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjcwMDQ1OWVjLTViYTgtNDI5OC1iZjhlLTkxOTEyNjg0ZDczNSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGF5YnJlYWtlcl85NUBtYWlsLnJ1IiwiZW1haWwiOiJkYXlicmVha2VyXzk1QG1haWwucnUifQ.yxgllqvJPLLd0LWFsy56b7vtzfk5ulo5I5Yv9rGIIw12R35VNbNnfSro4t4xL-658qgFs3frk2MSZvas1XJlQx9-srEOoqRyLt3ZEC9Ny4i5OhBvnob4G3f0D311X_WXbsyGEt6KzlliBKcrmjWOQrK_wJZOCPAyy3pdaHxwwJND-A8E5BYaF3KnyuI4ZHs4IYbkbGBiZWtl4JERemSGThXlRMxYQVstDAiFdPjYRtKu6gYk4rgoo_L__9LUyGhZF4PLPtzOAYm9hSUOXBRs5HFEj3lle37pivOptlHrobEVWthywIlDFAIoGIWElFulimQg7VyelsRry2Rr3l-QGQ';
axios.defaults.headers.common = {'Authorization': `bearer ${token}`};

export const getCompanies = (values) =>{
  return dispatch => {
    dispatch(getCompanyStarted());
    axios.get(`${apiUrl}company-list?username=test`, values)
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
