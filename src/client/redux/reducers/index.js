import { combineReducers } from 'redux';
import employee from './employees';



const rootReducer = combineReducers({
   employee,
});

export default rootReducer;