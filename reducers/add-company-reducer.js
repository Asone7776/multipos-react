import {
  ADD_COMPANY_STARTED,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAILURE
} from '../constants/company-consts';


const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPANY_SUCCESS:
      return {
        ...state,
        data:action.payload.data
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

export default companyReducer;
