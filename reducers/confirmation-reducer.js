import {
  CONFIRMATION_STARTED,
  CONFIRMATION_SUCCESS,
  CONFIRMATION_FAILURE
} from '../constants/auth';


const confirmationReducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIRMATION_STARTED:
      return {
        ...state,
        type:action.type
      };
    case CONFIRMATION_SUCCESS:
      return {
        ...state,
        data:action.payload.data
      };
    case CONFIRMATION_FAILURE:
      return {
        ...state,
        error:action.payload.error
      };
    default:
      return state;
  }
};

export default confirmationReducer;
