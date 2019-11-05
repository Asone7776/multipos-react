import { combineReducers } from 'redux';
import companiesReducer from './companies-reducer';
import storesReducer from './add-store-reducer';
import posReducer from './pos-reducer';
import signUpReducer from './sign-up-reducer';
import confirmationReducer from './confirmation-reducer';
import signInReducer from './sign-in-reducer'
const rootReducer = combineReducers({
    storesList:storesReducer,
    companiesList:companiesReducer,
    posesList:posReducer,
    signUp:signUpReducer,
    confirmation:confirmationReducer,
    singIn: signInReducer,
});

export default rootReducer;
