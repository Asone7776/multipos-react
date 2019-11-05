import {
    GET_STORES_STARTED,
    GET_STORES_SUCCESS,
    GET_STORES_FAILURE
} from "../constants/store-consts";

const storeReducer = (state = {},action)=>{
    switch (action.type) {
        case GET_STORES_STARTED:
            return {
                ...state,
                type:action.type
            };
        case GET_STORES_SUCCESS:
            return {
                ...state,
                type:action.type,
                data:action.payload.data,
            };
        case GET_STORES_FAILURE:
            return{
                ...state,
                error:action.payload.error,
            };
        default:
            return state;
    }
};
export default storeReducer;