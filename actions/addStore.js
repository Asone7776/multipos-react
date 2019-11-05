import {STORE_ADD_SUCCESS} from "../constants/store-consts";
import axios from 'axios';

export function addStore(values) {
    return{
        type: STORE_ADD_SUCCESS,
        payload: values
    }
}
