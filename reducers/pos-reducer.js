import {GET_POSES_STARTED,GET_POSES_SUCCESS,GET_POSES_FAILURE} from "../constants/poses-const";

const posReducer = (state = {},action)=>{
    switch (action.type) {
      case GET_POSES_STARTED:
        return {
          ...state,
          type:action.type
        };
      case GET_POSES_SUCCESS:
        return {
          ...state,
          type:action.type,
          data:action.payload.data,

        };
      case GET_POSES_FAILURE:
        return{
          ...state,
          type:action.type,
          error:action.payload.error,
        };
      default:
        return state;

    }
};
export default posReducer;