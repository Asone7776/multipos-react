import {
  GET_COMPANIES_STARTED,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILURE, ADD_COMPANY_SUCCESS, ADD_COMPANY_STARTED, ADD_COMPANY_FAILURE
} from "../constants/company-consts";

const companiesReducer = (state = {},action)=>{
    switch (action.type) {
      case GET_COMPANIES_STARTED:
        return {
          ...state,
          type:action.type
        };
      case GET_COMPANIES_SUCCESS:
        return {
          ...state,
          type:action.type,
          data:action.payload.data,
        };
      case GET_COMPANIES_FAILURE:
        return{
          ...state,
          type:action.type,
          error:action.payload.error,
        };
      case ADD_COMPANY_SUCCESS:
        return {
          ...state,
          data:[...state.data,action.payload.data],
        };
      case ADD_COMPANY_STARTED:
        return {
          ...state,
          type:action.type
        };
      case ADD_COMPANY_FAILURE:
        return {
          ...state,
          error:action.payload.error
        };
      default:
        return state;
    }
};
export default companiesReducer;