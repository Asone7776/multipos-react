import axios from 'axios';
import {EMP_ADDING} from '../constants/company-consts';

export function addEmployee(values){
  return{
    type:EMP_ADDING,
    payload:values,
  }
}